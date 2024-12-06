import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaController } from './asistencia.controller';
import { AsistenciaService } from './asistencia.service';
import { Asistencia } from './entities/asistencia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Asistencia]), // Registrar la entidad Asistencia con TypeORM
  ],
  controllers: [AsistenciaController], // Registrar el controlador
  providers: [AsistenciaService], // Registrar el servicio
})
export class AsistenciaModule {}
