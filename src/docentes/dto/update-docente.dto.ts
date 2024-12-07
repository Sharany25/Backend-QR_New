import {
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    IsOptional,
    IsEmail,
    Matches,
} from 'class-validator';

export class ActualizarDocente {
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    NombreDocente?: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    @MaxLength(50) // Incremento el límite para correos más largos.
    Email?: string;

    @IsOptional()
    @IsString()
    @MinLength(8)
    @MaxLength(255)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, {
        message:
            'La contraseña debe tener al menos una letra, un número y un mínimo de 8 caracteres.',
    })
    Password?: string;

    @IsOptional()
    @IsString()
    @MinLength(5)
    @MaxLength(10)
    Grupo?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    Materia?: string;
}
