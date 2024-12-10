import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asistencia, EstadoAsistencia } from './entities/asistencia.entity';
import { horarioSemanal } from './horarios.config';

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectRepository(Asistencia)
    private asistenciaRepository: Repository<Asistencia>,
  ) {}

  async registrarAsistencia(data: {
    nombre: string;
    matricula: string;
    correo: string;
  }): Promise<Asistencia[]> {
    const diaActual = new Date().toLocaleString('es-MX', { weekday: 'long' }).toLowerCase();
    const horaActual = new Date().toTimeString().slice(0, 5);

    const horario = horarioSemanal[diaActual];
    if (!horario) {
      throw new Error('No hay clases programadas para hoy');
    }

    const registros: Asistencia[] = [];

    for (const clase of horario) {
      const { horaInicio, horaFin, clase: nombreClase } = clase;

      // Determinar el estado basado en la hora actual
      let estado: EstadoAsistencia = EstadoAsistencia.INASISTENCIA;

      if (horaActual >= horaInicio && horaActual <= horaFin) {
        estado = EstadoAsistencia.ASISTIO;
      } else if (
        horaActual >= sumarMinutos(horaInicio, 10) && // 10 minutos después del inicio
        horaActual <= horaFin
      ) {
        estado = EstadoAsistencia.RETARDO;
      }

      const existingAsistencia = await this.asistenciaRepository.findOne({
        where: {
          matricula: data.matricula,
          fecha: new Date().toISOString().split('T')[0],
          clase: nombreClase,
        },
      });

      if (existingAsistencia) {
        existingAsistencia.estado = estado;
        registros.push(await this.asistenciaRepository.save(existingAsistencia));
      } else {
        const nuevaAsistencia = this.asistenciaRepository.create({
          ...data,
          fecha: new Date().toISOString().split('T')[0],
          clase: nombreClase,
          estado,
        });
        registros.push(await this.asistenciaRepository.save(nuevaAsistencia));
      }
    }

    return registros;
  }
}

// Función auxiliar para sumar minutos a una hora en formato HH:MM
function sumarMinutos(hora: string, minutos: number): string {
  const [horas, mins] = hora.split(':').map(Number);
  const nuevaHora = new Date();
  nuevaHora.setHours(horas, mins + minutos);
  return nuevaHora.toTimeString().slice(0, 5);
}
