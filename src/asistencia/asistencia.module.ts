import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaController } from './asistencia.controller';
import { AsistenciaService } from './asistencia.service';
import { Asistencia } from './entities/asistencia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asistencia]), // Conexión con la entidad Asistencia
  ],
  controllers: [AsistenciaController], // Registro del controlador
  providers: [AsistenciaService], // Registro del servicio
  exports: [AsistenciaService], // Exporta el servicio si otros módulos lo necesitan
})
export class AsistenciaModule {}
