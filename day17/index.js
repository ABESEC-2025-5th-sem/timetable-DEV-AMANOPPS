import express from "express";

const app = express();
const PORT = 8800;

// Test GET API (Thunder Client me test karna)
app.get("/test", (req, res) => {
  res.json({
    message: "Your GET API is working successfully!",
    status: "OK",
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
