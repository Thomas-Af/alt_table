import bodyParser from 'body-parser';
import express from "express";
import { routes } from './routes';


const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
routes(app);


app.get('/alt-table', (req, res) => {
  res.send({ message: "Bienvenue au restaurant Alt'Table" });
});


app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Server is running on port 3000 '));


