import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fecha: string;

  @Column()
  matricula: string;

  @Column()
  correo: string;

  @Column({ default: 'Inasistencia' })
  estado: string;
}
