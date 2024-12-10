import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';

@Controller('asistencia')
export class AsistenciaController {
  constructor(private readonly asistenciaService: AsistenciaService) {}

  @Post('registrar')
  async registrar(@Body() body: CreateAsistenciaDto) {
    try {
      // Llama al servicio para registrar la asistencia
      const resultado = await this.asistenciaService.registrarAsistencia(body);

      if (resultado) {
        return {
          mensaje: 'Asistencia registrada exitosamente',
          data: resultado, // Detalles de la asistencia registrada
        };
      } else {
        throw new HttpException(
          'No se pudo registrar la asistencia',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(
        error.message || 'Error al registrar la asistencia',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
