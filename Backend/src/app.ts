require("dotenv").config();
import express from 'express';

const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, async () => {
  console.log("Backend está funcionando!");
});