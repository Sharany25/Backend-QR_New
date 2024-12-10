import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum EstadoAsistencia {
  ASISTIO = 'Asistió',
  INASISTENCIA = 'Inasistencia',
  RETARDO = 'Retardo',
}

@Entity('asistencias')
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'varchar', length: 255 })
  matricula: string;

  @Column({ type: 'varchar', length: 255 })
  correo: string;

  @Column({ type: 'varchar', length: 255 })
  clase: string; // Clase específica para la asistencia

  @Column({ type: 'enum', enum: EstadoAsistencia, default: EstadoAsistencia.INASISTENCIA })
  estado: EstadoAsistencia; // Estado de la asistencia
}
