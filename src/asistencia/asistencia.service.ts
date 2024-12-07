import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asistencia } from './entities/asistencia.entity';

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectRepository(Asistencia)
    private asistenciaRepository: Repository<Asistencia>,
  ) {}

  async registrarAsistencia(data: {
    nombre: string;
    fecha: string;
    matricula: string;
    correo: string;
  }): Promise<Asistencia> {
    try {
      const existingAsistencia = await this.asistenciaRepository.findOne({
        where: { matricula: data.matricula, fecha: data.fecha },
      });

      if (existingAsistencia) {
        existingAsistencia.estado = 'Asistencia';
        return this.asistenciaRepository.save(existingAsistencia);
      } else {
        const nuevaAsistencia = this.asistenciaRepository.create({
          ...data,
          estado: 'Inasistencia',
        });
        return this.asistenciaRepository.save(nuevaAsistencia);
      }
    } catch (error) {
      throw new Error('Error al registrar la asistencia: ' + error.message);
    }
  }
}
