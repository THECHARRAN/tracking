// server/server.js
const express = require("express");
const sql = require("mssql");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER, // e.g. '192.168.1.10' or 'sql.example.com'
  database: process.env.DB_NAME,
  options: {
    encrypt: false, // true if using Azure, false for local
    trustServerCertificate: true
  }
};

// Connect to SQL Server
sql.connect(config)
  .then(pool => {
    console.log("✅ Connected to SQL Server");

    app.get("/api/containers", async (req, res) => {
      try {
        const result = await pool.request().query(`
          SELECT DISTINCT
            L.containerNumber,
            L.live_Latitude,
            L.live_Longitude,
            P.loadingPort_latitude,
            P.loadingPort_longitude,
            P.dischargePort_latitude,
            P.dischargePort_longitude
          FROM sea_live_Location L
          JOIN sea_loadingPort_dischargePort P ON L.containerNumber = P.containerNumber
          WHERE 
  L.live_Latitude IS NOT NULL AND 
  L.live_Longitude IS NOT NULL AND
  P.loadingPort_latitude IS NOT NULL AND
  P.loadingPort_longitude IS NOT NULL AND
  P.dischargePort_latitude IS NOT NULL AND
  P.dischargePort_longitude IS NOT NULL;

        `);
        res.json(result.recordset);
      } catch (err) {
        console.error("❌ Query error:", err);
        res.status(500).json({ error: "Database query error" });
      }
    });

    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });

  })
  .catch(err => {
    console.error("❌ SQL Server Connection Error:", err);
  });
