import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocentesController } from './docentes.controller';
import { DocenteService } from './docentes.service';
import { Docente } from './entities/docente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docente])],
  controllers: [DocentesController],
  providers: [DocenteService],
  exports: [DocenteService],
})
export class DocenteModule {}
