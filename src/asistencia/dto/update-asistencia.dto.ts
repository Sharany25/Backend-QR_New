import { IsString, IsOptional, IsEmail, IsDateString, IsBoolean } from 'class-validator';

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
  @IsBoolean()
  asistio?: boolean;
}
