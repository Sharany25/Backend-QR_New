import {
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
  IsEnum,
} from 'class-validator';
import { EstadoAsistencia } from './create-asistencia.dto'; // Importamos el enumerador del DTO de creación

export class UpdateAsistenciaDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsDateString()
  fecha?: string;

  @IsOptional()
  @IsString()
  matricula?: string;

  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @IsString()
  clase?: string; // Clase específica para actualizar

  @IsOptional()
  @IsEnum(EstadoAsistencia)
  estado?: EstadoAsistencia; // Estado de la asistencia (Asistió, Inasistencia, Retardo)
}
