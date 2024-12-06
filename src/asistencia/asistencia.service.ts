import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asistencia } from './entities/asistencia.entity';

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectRepository(Asistencia)
    private asistenciaRepository: Repository<Asistencia>, // Repositorio de la entidad Asistencia
  ) {}

  // Método para registrar o actualizar la asistencia
  async registrarAsistencia(data: {
    nombre: string;
    fecha: string;
    matricula: string;
    correo: string;
  }): Promise<Asistencia> {
    // Buscar si ya existe un registro de asistencia para esta matrícula y fecha
    const existingAsistencia = await this.asistenciaRepository.findOne({
      where: { matricula: data.matricula, fecha: data.fecha },
    });

    if (existingAsistencia) {
      // Si ya existe, actualizamos el estado de asistencia a "Asistió"
      existingAsistencia.estado = 'Asistió';
      return this.asistenciaRepository.save(existingAsistencia); // Guardar el registro actualizado
    } else {
      // Si no existe, creamos un nuevo registro con estado "Inasistencia"
      const nuevaAsistencia = this.asistenciaRepository.create({
        ...data,
        estado: 'Inasistencia', // Estado inicial
      });
      return this.asistenciaRepository.save(nuevaAsistencia); // Guardar el nuevo registro
    }
  }
}
