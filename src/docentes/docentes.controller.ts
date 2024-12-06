import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CrearDocente } from './dto/create-docente.dto';
import { ActualizarDocente } from './dto/update-docente.dto';
import { DocenteService } from './docentes.service';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docenteService: DocenteService) {}

  // Crear un nuevo docente
  @Post()
  async crearDocente(@Body() crearDocenteDto: CrearDocente) {
    return this.docenteService.crearDocente(crearDocenteDto);
  }

  // Obtener todos los docentes
  @Get()
  async obtenerDocentes() {
    return this.docenteService.obtenerDocentes();
  }

  // Obtener un docente por ID
  @Get(':id')
  async obtenerDocente(@Param('id') id: string) {
    return this.docenteService.obtenerDocente(id);
  }

  // Actualizar un docente
  @Patch(':id')
  async actualizarDocente(
    @Param('id') id: string,
    @Body() actualizarDocenteDto: ActualizarDocente,
  ) {
    return this.docenteService.actualizarDocente(id, actualizarDocenteDto);
  }

  // Eliminar un docente
  @Delete(':id')
  async eliminarDocente(@Param('id') id: string) {
    return this.docenteService.eliminarDocente(id);
  }
}