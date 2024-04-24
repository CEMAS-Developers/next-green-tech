import { NextApiRequest, NextApiResponse } from 'next';
import { QueryResult } from '@vercel/postgres';
import { pool } from './config';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'POST') {
     try {
       // Procesa los datos recibidos del Arduino
       const dataFromArduino = req.body;

       // Guarda o actualiza los datos en la base de datos PostgreSQL
       const client = await pool.connect();
       const query = `
         INSERT INTO zafacon (status, date)
         VALUES ($1, $2)
         ON CONFLICT (status) DO UPDATE
         SET date = EXCLUDED.date`;
       const values = [dataFromArduino.valor1, dataFromArduino.valor2]; // Ajusta según tus datos
       const result: QueryResult = await client.query(query, values);
       client.release();
       // Envía una respuesta al Arduino
       res.status(200).json({ message: 'Datos guardados/actualizados en la base de datos correctamente' });
     } catch (error) {
       console.error('Error al guardar/actualizar datos en la base de datos:', error);
       res.status(500).json({ error: 'Error interno del servidor' });
     }
   } else {
     // Método no permitido
     res.status(405).json({ error: 'Método no permitido' });
   }
}