import { NextResponse, NextRequest } from "next/server";
import { Pool } from "pg";

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: 'default',
  host: 'ep-nameless-lab-a48uuvp3-pooler.us-east-1.aws.neon.tech',
  database: 'verceldb',
  password: 'FRYbKB9wvhZ3',
  port: 5432, // Puerto predeterminado de PostgreSQL
  ssl: {
    rejectUnauthorized: false, // Opción para evitar errores con SSL
    sslmode: 'require' 
  }
});

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      // Leer el cuerpo de la solicitud como JSON
      const data = await req.json();
      const { id, status, date } = data;

      // Verificar si el ID existe en la base de datos
      const result = await pool.query('SELECT * FROM zafacon WHERE id = $1', [id]);

      if (result.rows.length > 0) {
        // Si el ID existe, actualizar las columnas correspondientes
        await pool.query('UPDATE zafacon SET status = $1, date = $2 WHERE id = $3', [status, date, id]);
        return NextResponse.json({ message: 'Datos actualizados correctamente.' });
      } else {
        // Si el ID no existe, crear un nuevo registro
        await pool.query('INSERT INTO zafacon (id, status, date) VALUES ($1, $2, $3)', [id, status, date]);
        return NextResponse.json({ message: 'Nuevo registro creado.' });
      }
    } catch (error) {
      // Si hay un error al interactuar con la base de datos, devolver un error 500
      console.error('Error al interactuar con la base de datos:', error);
      return NextResponse.json({ message: 'Error al interactuar con la base de datos' });
    }
  } else {
    // Si la solicitud no es de tipo POST, respondemos con un error de método no permitido
    return NextResponse.json({ message: 'Método no permitido' });
  }
}
