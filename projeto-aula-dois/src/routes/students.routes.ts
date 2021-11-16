import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send([
        {
            id: 1,
            name: 'Nathan',
            email: 'nathan@gmail.com',
            password: '123456',
            monthlyPayment: 350,
            inclusionDate: new Date()
        }
    ]);
});

export default router;