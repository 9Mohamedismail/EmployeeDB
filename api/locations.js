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
    const result = await pool.query('SELECT * FROM "Locations"');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { address, zip, states, online } = req.body;
    const results = await pool.query(
      'INSERT INTO "Locations" ( address, zip, states, online) VALUES ($1, $2, $3, $4)',
      [address, zip, states, online]
    );
    res.json(results.rows);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
