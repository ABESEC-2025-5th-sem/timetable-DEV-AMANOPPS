import express from "express";

const app = express();
const PORT = 8800;

// Body parser (POST request ke data ko read karne ke liye)
app.use(express.json());

// Test GET API (Thunder Client me test karna)
app.get("/test", (req, res) => {
  res.json({
    message: "Your GET API is working successfully!",
    status: "OK",
    port: PORT
  });
});

// Test POST API
app.post("/test", (req, res) => {
  res.json({
    message: "Your POST API is working successfully!",
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
