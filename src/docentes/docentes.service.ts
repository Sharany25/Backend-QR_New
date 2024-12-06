import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearDocente } from './dto/create-docente.dto';
import { ActualizarDocente } from './dto/update-docente.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DocenteService {
  private docentes = []; // Aquí podrías usar una base de datos

  // Crear un nuevo docente
  async crearDocente(crearDocenteDto: CrearDocente) {
    const salt = await bcrypt.genSalt(); // Generar un salt
    const hashPassword = await bcrypt.hash(crearDocenteDto.Password, salt); // Encriptar la contraseña

    const nuevoDocente = { 
      id: Date.now().toString(), 
      ...crearDocenteDto, 
      Password: hashPassword // Guardar la contraseña encriptada
    };
    
    this.docentes.push(nuevoDocente);
    return nuevoDocente;
  }

  // Obtener todos los docentes
  obtenerDocentes() {
    return this.docentes;
  }

  // Obtener un docente por ID
  obtenerDocente(id: string) {
    const docente = this.docentes.find(docente => docente.id === id);
    if (!docente) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }
    return docente;
  }

  // Actualizar un docente
  async actualizarDocente(id: string, actualizarDocenteDto: ActualizarDocente) {
    const docenteIndex = this.docentes.findIndex(docente => docente.id === id);
    if (docenteIndex === -1) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }

    // Si se proporciona una nueva contraseña, encriptarla
    if (actualizarDocenteDto.Password) {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(actualizarDocenteDto.Password, salt);
      actualizarDocenteDto.Password = hashPassword; // Reemplazar la contraseña con la encriptada
    }

    this.docentes[docenteIndex] = {
      ...this.docentes[docenteIndex],
      ...actualizarDocenteDto,
    };
    return this.docentes[docenteIndex];
  }

  // Eliminar un docente
  eliminarDocente(id: string) {
    const docenteIndex = this.docentes.findIndex(docente => docente.id === id);
    if (docenteIndex === -1) {
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    }
    return this.docentes.splice(docenteIndex, 1);
  }
}