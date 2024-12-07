import {
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsEmail,
    Matches,
    IsOptional,
} from 'class-validator';

export class CrearDocente {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(255)
    NombreDocente: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(50)
    Email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(255)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, {
        message:
            'La contraseña debe tener al menos una letra, un número y un mínimo de 8 caracteres.',
    })
    Password: string;

    @IsString()
    @IsOptional()
    @MinLength(5)
    @MaxLength(10)
    Grupo: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    Materia: string;
}
