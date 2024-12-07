import { Controller, Post, Get, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CrearAlumno } from './dto/create-alumno.dto';
import { ActualizarAlumnos } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Controller('alumnos')
export class AlumnosController {
    constructor(private readonly alumnoService: AlumnosService) {}

    @Post()
    async crearAlumno(@Body() crearAlumnoDto: CrearAlumno): Promise<Alumno> {
        return this.alumnoService.crearAlumno(crearAlumnoDto);
    }

    @Get(':id')
    async obtenerAlumno(@Param('id', ParseIntPipe) id: number): Promise<Alumno> {
        return this.alumnoService.obtenerAlumno(id);
    }

    @Put(':id')
    async actualizarAlumno(
        @Param('id', ParseIntPipe) id: number,
        @Body() actualizarAlumnoDto: ActualizarAlumnos,
    ): Promise<Alumno> {
        return this.alumnoService.actualizarAlumno(id, actualizarAlumnoDto);
    }

    @Delete(':id')
    async eliminarAlumno(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.alumnoService.eliminarAlumno(id);
    }
}
