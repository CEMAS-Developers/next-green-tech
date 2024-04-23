import { Pool } from 'pg';

// Configura la conexión a la base de datos utilizando las variables de entorno
export const pool = new Pool({
   user: 'default',
   host: 'ep-nameless-lab-a48uuvp3-pooler.us-east-1.aws.neon.tech',
   database: 'greentech',
   password: 'FRYbKB9wvhZ3',
   port: Number('5432'),
});
