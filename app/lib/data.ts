import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {  Users, zafaconTable} from './definitions';
// import { formatCurrency } from './utils';

// export async function fetchRevenue() {
//   noStore();
//   // Add noStore() here to prevent the response from being cached.
//   // This is equivalent to in fetch(..., {cache: 'no-store'}).

//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     console.log('Fetching revenue data...');
//     await new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = await sql<Revenue>`SELECT * FROM revenue`;

//     console.log('Data fetch completed after 3 seconds.');
//     return data.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchLatestzafaconTable() {
//   noStore();
//   try {
//     const data = await sql<LatestInvoiceRaw>`
//       SELECT zafaconTable.amount, customers.name, customers.image_url, customers.email, zafaconTable.id
//       FROM zafaconTable
//       JOIN customers ON zafaconTable.customer_id = customers.id
//       ORDER BY zafaconTable.date DESC
//       LIMIT 5`;

//     const latestzafaconTable = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: formatCurrency(invoice.amount),
//     }));
//     return latestzafaconTable;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest zafaconTable.');
//   }
// }

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM zafacon`;
    const zafaconstatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'full' THEN amount ELSE 0 END) AS "full",
         SUM(CASE WHEN status = 'empty' THEN amount ELSE 0 END) AS "empty"
         FROM zafacon`;

    const data = await Promise.all([
      invoiceCountPromise,
      zafaconstatusPromise,
    ]);
  
    const numberZafaconTable = Number(data[0].rows[0].count ?? '0'); // Corregido el acceso a los resultados
    const { full, empty } = data[1].rows[0]; // Corregido el acceso a los resultados
    const totalFullZafaconTable = Number(full ?? '0'); // Corregido el acceso a los resultados
    const totalEmptyZafaconTable = Number(empty ?? '0'); // Corregido el acceso a los resultados

    return {
      numberZafaconTable,
      totalFullZafaconTable,
      totalEmptyZafaconTable,
    };
  } catch (error) {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM zafacon`;
    if (invoiceCountPromise == null || invoiceCountPromise == undefined){
      console.error('no se pueden obtener los datos')
      console.error('Error en la base de datos:', error);
      throw new Error('Error al obtener los datos de la tarjeta.');
    }

  }
}


const ITEMS_PER_PAGE = 6;
export async function fetchFilteredzafaconTable(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const zafaconTable = await sql<zafaconTable>`
      SELECT * FROM zafacon ORDER BY zafacon.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return zafaconTable.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch zafacon.');
  }
}

export async function fetchzafaconPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
      FROM zafacon
      WHERE
        zafacon.id::text ILIKE ${`%${query}%`} OR
        zafacon.date::text ILIKE ${`%${query}%`} OR
        zafacon.status ILIKE ${`%${query}%`}`; // Corrección aquí

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Error en la base de datos:', error);
    throw new Error('Error al obtener el número total de páginas de zafaconTable.');
  }
}


// export async function fetchInvoiceById(id: string) {
//   noStore();
//   try {
//     const data = await sql<InvoiceForm>`
//       SELECT
//         zafaconTable.id,
//         zafaconTable.customer_id,
//         zafaconTable.amount,
//         zafaconTable.status
//       FROM zafaconTable
//       WHERE zafaconTable.id = ${id};
//     `;

//     const invoice = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: invoice.amount / 100,
//     }));

//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }

// export async function fetchCustomers() {
//   noStore();
//   try {
//     const data = await sql<CustomerField>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//     const customers = data.rows;
//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch all customers.');
//   }
// }

// export async function fetchFilteredCustomers(query: string) {
//   noStore();
//   try {
//     const data = await sql<CustomersTableType>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(zafaconTable.id) AS total_zafaconTable,
// 		  SUM(CASE WHEN zafaconTable.status = 'empty' THEN zafaconTable.amount ELSE 0 END) AS total_empty,
// 		  SUM(CASE WHEN zafaconTable.status = 'paid' THEN zafaconTable.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN zafaconTable ON customers.id = zafaconTable.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.rows.map((customer) => ({
//       ...customer,
//       total_empty: formatCurrency(customer.total_empty),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM User WHERE email=${email}`;
    return user.rows[0] as Users;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
