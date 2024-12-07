import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { CrearAlumno } from './dto/create-alumno.dto';
import { ActualizarAlumnos } from './dto/update-alumno.dto';

@Injectable()
export class AlumnosService {
    constructor(
        @InjectRepository(Alumno)
        private readonly alumnoRepository: Repository<Alumno>,
    ) {}

    async crearAlumno(crearAlumnoDto: CrearAlumno): Promise<Alumno> {
        const alumno = this.alumnoRepository.create(crearAlumnoDto);
        return this.alumnoRepository.save(alumno);
    }

    async obtenerAlumnos(): Promise<Alumno[]> {
        return this.alumnoRepository.find();
    }

    async obtenerAlumno(id: number): Promise<Alumno> {
        return this.alumnoRepository.findOneBy({ id });
    }

    async actualizarAlumno(
        id: number,
        actualizarAlumnoDto: ActualizarAlumnos,
    ): Promise<Alumno> {
        await this.alumnoRepository.update(id, actualizarAlumnoDto);
        return this.obtenerAlumno(id);
    }

    async eliminarAlumno(id: number): Promise<void> {
        await this.alumnoRepository.delete(id);
    }
}
