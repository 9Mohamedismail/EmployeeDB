const router = require("express").Router();
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "TTP",
  user: "postgres",
  password: "Mohamed231!",
});

router.get("/", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Employees"');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, job_id } = req.body;
    const results = await pool.query(
      'INSERT INTO "Employees" (first_name, last_name, job_id) VALUES ($1, $2, $3)',
      [first_name, last_name, job_id]
    );
    res.json(results.rows);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
