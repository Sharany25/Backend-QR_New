import { Module } from '@nestjs/common';
import { DocentesController } from './docentes.controller';
import { DocenteService } from './docentes.service';

@Module({
  controllers: [DocentesController],
  providers: [DocenteService],
  exports: [DocenteService], // Exporta el servicio si lo necesitas en otros módulos
})
export class DocenteModule {}