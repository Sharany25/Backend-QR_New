import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Alumno } from './alumnos/entities/alumno.entity';
import { Asistencia } from './asistencia/entities/asistencia.entity';
import { Docente } from './docentes/entities/docente.entity';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { DocenteModule } from './docentes/docentes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'accesoqr',
      entities: [ Alumno, Asistencia, Docente ],
      synchronize: true,
      }),
      AlumnosModule,
      AsistenciaModule,
      DocenteModule,
    ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
