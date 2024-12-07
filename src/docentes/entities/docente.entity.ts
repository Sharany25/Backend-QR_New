import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  NombreDocente: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  Email: string;

  @Column({ type: 'varchar', length: 255 })
  Password: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  Grupo: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  Materia: string;
}
