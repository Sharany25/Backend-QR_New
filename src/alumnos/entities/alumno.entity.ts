import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alumnos')
export class Alumno {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    Nombre_Usuario: string;

    @Column({ type: 'varchar', length: 255 })
    Password: string;

    @Column({ type: 'varchar', length: 255 })
    Grupo: string;

    @Column({ type: 'int' })
    Matricula: number;

    @Column({ type: 'varchar', length: 30 })
    Correo: string;

    @Column({ type: 'varchar', nullable: true })
    Fotografia: string;

    @Column({ type: 'varchar', length: 255 })
    HuellaDigital: string;
}