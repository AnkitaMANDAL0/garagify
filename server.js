require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const GOOGLE_API_KEY = process.env.API_KEY;

// Route to test Overpass API for car repair shops


// Route to fetch nearby garages using OpenStreetMap (OSM)
app.get("/nearby-garages", async (req, res) => {
    console.log("int get method")
    const { lat, lng } = req.query;
    const overpassURL = "https://overpass-api.de/api/interpreter";
    const query = `
        [out:json];
        node[shop=car_repair](around:50000,${lat},${lng});
        out;
    `;

    try {
        console.log("in try block");
        const response = await axios.get(overpassURL, { params: { data: query } });
        console.log("Overpass API Response:", response.data.elements);
        res.json(response.data.elements); // Sending list of garages;
    } catch (error) {
        console.error("Error fetching data from Overpass API:", error.message);
        res.status(500).json({ error: "Failed to fetch data from Overpass API" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
