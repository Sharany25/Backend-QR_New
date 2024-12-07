import {
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsEmail,
    IsOptional,
    IsEnum,
} from 'class-validator';

export enum Rol {
    USUARIO_PRO = 'Usuario Pro',
    USUARIO_GRATUITO = 'Usuario Gratuito',
}

export class ActualizarAlumnos {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    @MinLength(8)
    Nombre_Usuario?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    @MinLength(8)
    Password?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    @MinLength(8)
    Grupo?: string;

    @IsOptional()
    @IsNumber()
    Matricula?: number;

    @IsOptional()
    @IsString()
    @MaxLength(30)
    @MinLength(10)
    @IsEmail()
    Correo?: string;

    @IsOptional()
    @IsString()
    Fotografia?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    HuellaDigital?: string;

    @IsOptional()
    @IsEnum(Rol)
    Rol?: Rol;
}
