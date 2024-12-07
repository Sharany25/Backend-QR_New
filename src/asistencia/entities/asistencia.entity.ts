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

  @Column({ type: 'enum', enum: ['Asistencia', 'Inasistencia'], default: 'Inasistencia' })
  estado: 'Asistencia' | 'Inasistencia';
}
