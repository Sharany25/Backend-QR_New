import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;  // ID único del docente

  @Column({ type: 'varchar', length: 255 })
  NombreDocente: string;  // Nombre del docente

  @Column({ type: 'varchar', length: 20, unique: true })
  Email: string;  // Correo electrónico del docente

  @Column({ type: 'varchar', length: 255 })
  Password: string;  // Contraseña del docente

  @Column({ type: 'varchar', length: 10 })
  Grupo: string;  // Grupo al que pertenece el docente
}
