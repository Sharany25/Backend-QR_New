import {
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsEmail
} from 'class-validator';

export class CrearAlumno {

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsNotEmpty()
    Nombre_Usuario: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsNotEmpty()
    Password: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsNotEmpty()
    Grupo: string;

    @IsNumber()
    @IsNotEmpty()
    Matricula: number;
    
    @IsString()
    @MaxLength(30)
    @MinLength(10)
    @IsNotEmpty()
    @IsEmail()
    Correo: string;

    @IsString()
    @IsNotEmpty()   
    Fotografia: string;

    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    HuellaDigital: string;
}