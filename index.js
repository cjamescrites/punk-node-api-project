import express from 'express';
import bodyParser from 'body-parser';
import router from "../punk-node/routes/customBeer.js"
import cors from 'cors';

const app = express();

const port = process.env.PORT || 3020;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
})

app.use(bodyParser.json());

app.use("/", router);

app.use(cors({
    origin: '*'
}));