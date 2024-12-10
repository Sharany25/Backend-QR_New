import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsDateString,
  IsEnum,
  IsOptional,
} from 'class-validator';

export enum EstadoAsistencia {
  ASISTIO = 'Asistió',
  INASISTENCIA = 'Inasistencia',
  RETARDO = 'Retardo',
}

export class CreateAsistenciaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsDateString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  matricula: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  clase: string; // Clase específica de la asistencia

  @IsEnum(EstadoAsistencia)
  @IsOptional()
  estado?: EstadoAsistencia; // Estado de la asistencia (Asistió, Inasistencia, Retardo)
}
