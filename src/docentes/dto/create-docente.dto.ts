import {
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsEmail,
} from 'class-validator';

export class CrearDocente {

    @IsString()
    @MaxLength(255)
    @MinLength(3)
    @IsNotEmpty()
    NombreDocente: string;

    @IsString()
    @MaxLength(20)
    @IsEmail()
    Email: string;

    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsNotEmpty()
    Password: string;

    @IsString()
    @MaxLength(10)
    @MinLength(5)
    Grupo: string;
}