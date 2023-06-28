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
    const result = await pool.query('SELECT * FROM "Employees Stats"');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { stat_id, account_created, account_banned, warnings } = req.body;
    const results = await pool.query(
      'INSERT INTO "Employees Stats" ( stat_id, account_created, account_banned, warnings) VALUES ($1, $2, $3, $4)',
      [stat_id, account_created, account_banned, warnings]
    );
    res.json(results.rows);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
