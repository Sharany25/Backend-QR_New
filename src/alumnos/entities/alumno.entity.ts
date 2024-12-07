import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';

export enum Rol {
    USUARIO_PRO = 'Usuario Pro',
    USUARIO_GRATUITO = 'Usuario Gratuito',
}

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

    @Column({ type: 'enum', enum: Rol, default: Rol.USUARIO_GRATUITO })
    Rol: Rol;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.Password) {
            const saltRounds = 10;
            this.Password = await bcrypt.hash(this.Password, saltRounds);
        }
    }
}
