import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const port = 3000;
const app = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send({ message: "Hello World" });
});

app.listen(port, () => {
    console.log(`Aplicação funcionando na porta: ${port}`);
});