import {
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    IsOptional,
    IsEmail,
} from 'class-validator';

export class ActualizarDocente {

    @IsOptional()
    @IsString()
    @MaxLength(255)
    @MinLength(3)
    NombreDocente?: string;

    @IsOptional()
    @IsString()
    @MaxLength(20)
    @IsEmail()
    Email?: string;

    @IsOptional()
    @IsString()
    @MaxLength(255)
    @MinLength(8)
    Password?: string;

    @IsOptional()
    @IsString()
    @MaxLength(10)
    @MinLength(5)
    Grupo?: string;
}