import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'estudantes' })
export class StudentEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id?: number;

    @Column({ name: 'nome', type: 'varchar', length: 100 })
    name?: string;

    @Column({ name: 'email', type: 'varchar', length: 255 })
    email?: string;

    @Column({ name: 'senha', type: 'varchar', length: 255 })
    password?: string;

    @Column({ name: 'mensalidade', type: 'numeric' })
    monthlyPayment?: number;

    @Column({ name: 'data_criacao', type: 'date' })
    inclusionDate?: Date | string;
}
