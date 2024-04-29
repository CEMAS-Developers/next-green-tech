import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { Users } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

// Función para obtener un usuario dado su correo electrónico
async function getUserByEmail(email: string): Promise<Users | undefined> {
  try {
    const user = await sql<Users>`SELECT * FROM users WHERE email = ${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          // Imprimir el valor del correo electrónico para debug
          console.log('Correo electrónico proporcionado:', credentials.email);

          // Validar las credenciales utilizando Zod
          const parsedCredentials = z
            .object({ email: z.string(), password: z.string().min(6) })
            .parse(credentials);

          // Obtener el correo electrónico y la contraseña
          const { email, password } = parsedCredentials;

          // Buscar al usuario por correo electrónico
          const user = await getUserByEmail(email);

          // Si no se encuentra el usuario, retornar null
          if (!user) return null;

          // Verificar si las contraseñas coinciden utilizando bcrypt
          const passwordsMatch = await bcrypt.compare(password, user.password);

          // Si las contraseñas coinciden, retornar el usuario
          if (passwordsMatch) return user;

          // Si las contraseñas no coinciden, retornar null
          return null;
        } catch (error) {
          // Manejar cualquier error durante la autenticación
          console.error('Authentication error:', error);
          throw new Error('Authentication error.');
        }
      },
    }),
  ],
});
