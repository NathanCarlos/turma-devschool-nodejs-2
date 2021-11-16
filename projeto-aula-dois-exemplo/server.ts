import express, { NextFunction } from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import routes from './src/routes';

const port = 3000;
const app = express();

// app.get('', (request: Request, response: Response) => {
//     const messageHelloWorld = { message: 'Hello World' };
//     response.send(messageHelloWorld);
// });

// app.get('/hello-worlds', 
// (req: Request, response: Response, next: NextFunction) => {
    
//     next();
// }, 
// (request: Request, response: Response) => {
//     const messages = [
//         { message: 'Hello World 1' },
//         { message: 'Hello World 2' },
//         { message: 'Hello World 3' }
//     ];
//     response.send(messages);
// });

app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Aplicação online na porta: ${port}`);
});