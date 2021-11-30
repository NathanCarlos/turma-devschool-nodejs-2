import { Router, Request, Response } from 'express';
import { Student } from '../models/student.model';
import { StudentsService } from '../services/students.service';

const studentsService = new StudentsService();

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const students = studentsService.getStudents();
    res.send(students);
});

router.get('/details/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const student = studentsService.getStudentById(id);
    if(!student) {
        return res.send({ message: "Estudante não encontrado!" });
    }
    res.send(student);
});

router.post('/create', (req: Request, res: Response) => {
    if(!req.body.student) {
        return res.status(400).send({ message: "A propriedade student é obrigatória." });
    }

    const student: Student = req.body?.student;

    const studentCreated = studentsService.createStudent(student);

    res.status(201).send(studentCreated);
});

router.put('/update', (req: Request, res: Response) => {
    if(!req.body.student) {
        return res.status(400).send({ message: "A propriedade student é obrigatória." });
    }
    const student: Student = req.body?.student;

    const updatedStudent = studentsService.updateStudent(student);

    if(!updatedStudent) return res.status(400).send({ message: "Esse estudante não exite." });

    res.status(200).send(updatedStudent);
});

router.delete('/remove', (req: Request, res: Response) => {
    const id = req.body?.id;
    if(!id) {
        return res.status(400).send({ message: "A propriedade id é obrigatória." });
    }
    res.status(200).send(studentsService.deleteStudent(Number(id)));
});

export default router;