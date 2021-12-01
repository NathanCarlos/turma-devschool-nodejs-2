import { Router, Request, Response } from 'express';
import { StudentsService } from '../services/students.service';

const router = Router();

const studentService = new StudentsService();

router.get('/', async (req: Request, res: Response) => {
    const students = await studentService.getAll();
    res.status(200).send(students);
});

router.get('/id/:id', async (req: Request, res: Response) => {
    const student = await studentService.getById(parseInt(req.params.id));
    if(student) {
        res.status(200).send(student);
    } else {
        res.status(404).send({ message: 'Estudante não encontrado!' });
    }
});

router.post('/create', async (req: Request, res: Response) => {
    const student = req.body;
    const studentCreated = await studentService.create(student);
    res.status(201).send(studentCreated);
});

router.put('/update/:id', async (req: Request, res: Response) => {
    const partialStudent = req.body;
    const resultUpdate = await studentService.update(partialStudent.name, partialStudent.email, req.params.id);
    if(resultUpdate) {
        res.status(200).send(resultUpdate);
    } else {
        res.status(404).send({ message: 'Estudante não econtrado!' });
    }
});

router.delete('/remove/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const resultDelete = await studentService.remove(id);
    if (resultDelete) res.status(200).send({ message: 'Estudante excluído com sucesso!' });
    else res.status(404).send({ message: 'Estudante não encontrado, não foi possível fazer a exclusão!' });
});

export default router;