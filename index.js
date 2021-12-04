// import express, { json } from 'express';
// import cors from 'cors';
// import pool from './db.js';

// const app = express();

// const port = process.env.PORT || 3003;
// const corsOptions = { origin: process.env.url || '*' };

// app.use(cors(corsOptions));
// app.use(json());

// app.get('/info', async (req, res) => {
// 	const userInfo = await pool.query('SELECT * FROM input_data');
// 	res.json(userInfo.rows);
// 	try {
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// });

// app.get('/info/:id', async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const userInfo = await pool.query(
// 			'SELECT * FROM input_data WHERE id = $1',
// 			[id],
// 		);
// 		res.json(userInfo.rows[0]);
// 		console.log(req.params);
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// });

// app.post('/info', async (req, res) => {
// 	try {
// 		const { first_name, last_name, email } = req.body;
// 		const userInfo = await pool.query(
// 			'INSERT INTO input_data (first_name,last_name, email) VALUES ($1,$2,$3) RETURNING *',
// 			[first_name, last_name, email],
// 		);
// 		return res.json({
// 			data: userInfo.rows[0],
// 			message: 'Information successfully sent.',
// 		});
// 	} catch (err) {
// 		console.error(err.message);

// 		res.json({ message: err.message });
// 	}
// });

// app.delete('/info/:id', async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const userInfo = await pool.query('', [id]);
// 		res.json(userInfo.rows[0]);
// 	} catch (error) {}
// });

// app.listen(port, () => {
// 	console.log(`server is running on port : ${port}`);
// });

import express, { json } from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const PORT = process.env.PORT || 3003;
const corsOptions = { origin: process.env.URL || '*' };

app.use(cors());
app.use(json());

app.get('/info', async (req, res) => {
	try {
		const userInfo = await pool.query('SELECT * FROM input_data');
		return res.json(userInfo.rows);
	} catch (error) {
		console.log(error.message);
	}
});

// get info with id

app.get('/info/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const userItem = await pool.query(
			'SELECT * FROM input_data WHERE id = $1',
			[id],
		);
		return res.json(userItem.rows[0]);
	} catch (error) {
		console.log(error.message);
		res.json(error.message).status(500);
	}
});

app.delete('/info/del/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const userInfo = await pool.query('DELETE FROM input_data WHERE id = $1', [
			id,
		]);
		return res.json({
			data: userInfo.rows[0],
			message: 'item has been deleted.',
		});
	} catch (error) {
		res.json(error.message);
		console.log(error.message);
	}
});

app.post('/info/post', async (req, res) => {
	try {
		const { first_name, last_name, email } = req.body;
		const userInfo = await pool.query(
			'INSERT INTO input_data (first_name,last_name,email) VALUES ($1,$2,$3) RETURNING *',
			[first_name, last_name, email],
		);

		return res.json({
			data: userInfo.rows[0],
			message: 'Information successfully sent.',
		});
	} catch (error) {
		console.log(error.message);
		res.json(error.message).status(500);
	}
});

app.listen(PORT, () => {
	console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
