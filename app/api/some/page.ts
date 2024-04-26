import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, ress: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Procesa los datos recibidos del Arduino
      const dataFromArduino = JSON.parse(req.body);
      
      // // Valida los datos recibidos del Arduino
      // if (!dataFromArduino || !dataFromArduino.valor1 || !dataFromArduino.valor2) {
      //   throw new Error('Datos recibidos del Arduino incompletos');
      // }

      // Aquí puedes realizar las operaciones de base de datos si es necesario

      // Envía una respuesta al Arduino
      ress.status(200).json({ message: 'Datos guardados/actualizados en la base de datos correctamente' });
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      ress.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    // Método no permitido
    ress.status(405).json({ error: 'Metodo no permitido' })
    console.error('metodo no permitido')
  }
}

// import { NextApiRequest, NextApiResponse } from 'next';
// // import { Pool, QueryResult } from 'pg';
// // import * as dotenv from 'dotenv';
// // // Load environment variables from .env file
// //  dotenv.config();

// //  // Configura la conexión a la base de datos utilizando las variables de entorno
// //  export const pool = new Pool({
// //    user: process.env.DB_USER,
// //    host: process.env.DB_HOST,
// //    database: process.env.DB_NAME,
// //    password: process.env.DB_PASSWORD,
// //    port: Number(process.env.DB_PORT),
// //  });

//  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//    if (req.method === 'POST') {
//      try {
//        // Procesa los datos recibidos del Arduino
//       const dataFromArduino = req.body;
//        // Valida los datos recibidos del Arduino
//        if (!dataFromArduino || !dataFromArduino.valor1 || !dataFromArduino.valor2) {
//          throw new Error('Datos recibidos del Arduino incompletos');
//        }

//       //  // Guarda o actualiza los datos en la base de datos PostgreSQL
//       //  const client = await pool.connect();
//       //  const query = `
//       //    INSERT INTO zafacon (status, date)
//       //    VALUES ($1, $2)
//       //    ON CONFLICT (status) DO UPDATE
//       //    SET date = EXCLUDED.date`;
//       //  const values = [dataFromArduino.valor1, dataFromArduino.valor2]; // Ajusta según tus datos
//       //  const result: QueryResult = await client.query(query, values);
//       //  client.release();

//        // Envía una respuesta al Arduino
//        res.status(200).json({ message: 'Datos guardados/actualizados en la base de datos correctamente' });
//      } catch (error) {
//        console.error('Error al procesar la solicitud:', error);
//        res.status(500).json({ error: 'Error interno del servidor' });
//      }
//    } else {
//      // Método no permitido
//      res.status(405).json({ error: 'Método no permitido' });
//    }
//  }
