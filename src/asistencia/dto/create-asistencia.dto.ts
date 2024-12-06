import { IsString, IsNotEmpty, IsEmail, IsDateString } from 'class-validator';

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
}
