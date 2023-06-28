const express = require("express");
const PORT = 8080;
const app = express();

// Mount on API
app.use(express.json());
app.use("/api", require("./api"));

// Run Server Function
const serverRun = () => {
  app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

serverRun();
