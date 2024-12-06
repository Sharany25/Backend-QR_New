import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CrearAlumno } from './dto/create-alumno.dto';
import { Alumno } from './entities/alumno.entity';

@Controller('alumnos')
export class AlumnosController {
    constructor(private readonly alumnoService: AlumnosService){}

    //Creacion de nuevos alumnos
    @Post()
    async crearAlumno(@Body() crearAlumnoDto: CrearAlumno) : Promise<Alumno>{
        return this.alumnoService.crearAlumno(crearAlumnoDto);
    }

   // Obtener un alumno por ID
   @Get(':id')
   async obtenerAlumno(@Param('id') id: number): Promise<Alumno> {
       return this.alumnoService.obtenerAlumno(id);
   }

   // Actualizar un alumno existente
   @Put(':id')
   async actualizarAlumno(
       @Param('id') id: number,
       @Body() crearAlumnoDto: CrearAlumno,
   ): Promise<Alumno> {
       return this.alumnoService.actualizarAlumno(id, crearAlumnoDto);
   }

   // Eliminar un alumno por ID
   @Delete(':id')
   async eliminarAlumno(@Param('id') id: number): Promise<void> {
       return this.alumnoService.eliminarAlumno(id);
   }
}