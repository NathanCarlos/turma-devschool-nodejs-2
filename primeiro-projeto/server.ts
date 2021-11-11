import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const port = 3000;
const app = express();

app.get('', (request: Request, response: Response) => {
    const messageHelloWorld = { message: 'Hello World' };
    response.send(messageHelloWorld);
});

app.get('/hello-worlds', (request: Request, response: Response) => {
    const messages = [
        { message: 'Hello World 1' },
        { message: 'Hello World 2' },
        { message: 'Hello World 3' }
    ];
    response.send(messages);
});

app.use(cors());

app.listen(port, () => {
    console.log(`Aplicação online na porta: ${port}`);
});