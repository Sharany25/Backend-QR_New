import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { CrearDocente } from './dto/create-docente.dto';
import { ActualizarDocente } from './dto/update-docente.dto';
import { DocenteService } from './docentes.service';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docenteService: DocenteService) {}

  @Post()
  @HttpCode(201)
  async crearDocente(@Body() crearDocenteDto: CrearDocente) {
    return this.docenteService.crearDocente(crearDocenteDto);
  }

  @Get()
  async obtenerDocentes() {
    return this.docenteService.obtenerDocentes();
  }

  @Get(':id')
  async obtenerDocente(@Param('id', ParseIntPipe) id: number) {
    return this.docenteService.obtenerDocente(id);
  }

  @Patch(':id')
  async actualizarDocente(
    @Param('id', ParseIntPipe) id: number,
    @Body() actualizarDocenteDto: ActualizarDocente,
  ) {
    return this.docenteService.actualizarDocente(id, actualizarDocenteDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async eliminarDocente(@Param('id', ParseIntPipe) id: number) {
    return this.docenteService.eliminarDocente(id);
  }
}
