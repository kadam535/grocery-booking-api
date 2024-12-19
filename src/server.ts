import express from "express";
import itemRoutes from "./routes/itemRoutes";
import adminRoutes from "./routes/adminRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/items", itemRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
