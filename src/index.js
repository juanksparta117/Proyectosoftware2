import express from 'express';
import {createpool} from  'mysql2/promise'
const app = express();
const pool = createpool({
  host: 'localhost',
  user: 'root',
  password: "123456",
  port: 3307

})

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  res.json(result[0]);
});


app.listen(3000)
console.log('server on port', 3000);