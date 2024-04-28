const { db } = require('@vercel/postgres');
const { zafacon } = require('../app/lib/placeholder-data.js');
const { v4: uuidv4 } = require('uuid');

async function seedZafacon(client) {
  try {
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.query(`
      CREATE TABLE IF NOT EXISTS zafacon (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        status VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      );
    `);

    console.log(`Created "zafacon" table`);

    // Insert data into the "zafacon" table
    const insertedZafacon = await client.query({
      text: `
        INSERT INTO zafacon (id, status, date)
        VALUES ($1, $2, $3);
      `,
      values: [uuidv4(), 'empty', '2024-05-03'], // Using uuidv4() to generate UUID
    });

    console.log(`Seeded "zafacon" table`);

    return {
      createTable,
      zafacon: insertedZafacon,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  
  //   // await seedUsers(client);
  await seedZafacon(client);  
  await client.end();
}
main().catch((err) => {
console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

// const { db } = require('@vercel/postgres');

// const {
//   users,
//   zafacon
// } = require('../app/lib/placeholder-data.js');
// const bcrypt = require('bcrypt');

// // async function seedUsers(client) {
// //   try {
// //     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
// //     // Create the "users" table if it doesn't exist
// //     const createTable = await client.sql`
// //       CREATE TABLE IF NOT EXISTS users (
// //         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
// //         name VARCHAR(255) NOT NULL,
// //         email TEXT NOT NULL UNIQUE,
// //         password TEXT NOT NULL
// //       );
// //     `;

// //     console.log(`Created "users" table`);

// //     // Insert data into the "users" table
// //     const insertedUsers = await Promise.all(
// //       users.map(async (user) => {
// //         const hashedPassword = await bcrypt.hash(user.password, 10);
// //         return client.sql`
// //         INSERT INTO users (id, name, email, password)
// //         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
// //         ON CONFLICT (id) DO NOTHING;
// //       `;
// //       }),
// //     );

// //     console.log(`Seeded ${insertedUsers.length} users`);

// //     return {
// //       createTable,
// //       users: insertedUsers,
// //     };
// //   } catch (error) {
// //     console.error('Error seeding users:', error);
// //     throw error;
// //   }
// // }

// async function seedZafacon(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.sql`
//     INSERT INTO zafacon (id, status, date)
//     VALUES (${zafacon.id}, 'empty', 'May, 03, 24');
// `;

//     console.log(`Created "zafacon" table`);

//     return {
//       createTable,
//     };
//   } catch (error) {
//     console.error('Error seeding invoices:', error);
//     throw error;
//   }
// }
// async function main() {
//   const client = await db.connect();

//   // await seedUsers(client);
//   await seedZafacon(client);

//   await client.end();
// }

// main().catch((err) => {
//   console.error(
//     'An error occurred while attempting to seed the database:',
//     err,
//   );
// });
