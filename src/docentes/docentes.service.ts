import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from './entities/docente.entity';
import { CrearDocente } from './dto/create-docente.dto';
import { ActualizarDocente } from './dto/update-docente.dto';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}

  async crearDocente(crearDocenteDto: CrearDocente): Promise<Docente> {
    const nuevoDocente = this.docenteRepository.create(crearDocenteDto);
    return this.docenteRepository.save(nuevoDocente);
  }

  async obtenerDocentes(): Promise<Docente[]> {
    return this.docenteRepository.find();
  }

  async obtenerDocente(id: number): Promise<Docente> {
    const docente = await this.docenteRepository.findOne({ where: { id } });
    if (!docente) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }
    return docente;
  }

  async actualizarDocente(
    id: number,
    actualizarDocenteDto: ActualizarDocente,
  ): Promise<Docente> {
    const docente = await this.obtenerDocente(id);
    Object.assign(docente, actualizarDocenteDto);
    return this.docenteRepository.save(docente);
  }

  async eliminarDocente(id: number): Promise<void> {
    const result = await this.docenteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }
  }
}
