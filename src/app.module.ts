import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/entities/contact.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456789',
    database: 'nestcrud',
    entities: [Contact],
    synchronize: true,
  }),
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
