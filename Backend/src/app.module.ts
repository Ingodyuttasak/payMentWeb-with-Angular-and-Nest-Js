import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cards } from './entity/payment.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '2543',
        database: 'webapppayment',
        entities: [Cards],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([Cards]),
    ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
