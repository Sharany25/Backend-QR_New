import { Controller, Post, Body } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';

@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}

  @Post('registrar')
  async registrar(@Body() body: CreateAsistenciaDto) {
    return this.asistenciaService.registrarAsistencia(body);
  }
}
