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
    const result = await pool.query('SELECT * FROM "Jobs"');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { job_id, job_title, salary } = req.body;
    const results = await pool.query(
      'INSERT INTO "Jobs" (job_id, job_title, salary ) VALUES ($1, $2, $3)',
      [job_id, job_title, salary]
    );
    res.json(results.rows);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
