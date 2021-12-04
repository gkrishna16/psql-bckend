// import dotenv from 'dotenv';
// dotenv.config();
// import pg from 'pg';

// const { Pool } = pg;

// const poolConfig = process.env.DATABASE_URL
// 	? {
// 			connectionString: process.env.DATABASE_URL,
// 			ssl: {
// 				rejectUnAuthorized: false,
// 			},
// 	  }
// 	: {
// 			user: process.env.DB_USER,
// 			password: process.env.DB_PASSWORD,
// 			host: process.env.DB_HOST,
// 			port: process.env.DB_PORT,
// 			database: process.env.DB_DATABASE,
// 	  };

// const pool = new Pool(poolConfig);

// export default pool;

import pg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pg;
dotenv.config();

const poolConfig = process.env.DATABASE_URL
	? {
			connectionString: process.env.DATABASE_URL,
			ssl: { rejectUnAuthorized: false },
	  }
	: {
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			database: process.env.DB_DATABASE,
	  };
const pool = new Pool(poolConfig);
export default pool;
