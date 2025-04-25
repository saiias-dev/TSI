import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ title: "Апельсин", descriptipon: "Фрукт", cost: "10000" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
