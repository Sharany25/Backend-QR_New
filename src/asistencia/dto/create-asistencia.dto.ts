import { IsString, IsNotEmpty, IsEmail, IsDateString, IsBoolean, IsOptional } from 'class-validator';

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

  @IsBoolean()
  @IsOptional()
  asistio?: boolean;
}
