import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';
import {UserProfileSchema } from './form/schemas/user-profile.model';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://prasad:prasad@cluster1.ssbq58s.mongodb.net'),
    // MongooseModule.forRoot('mongodb+srv://prasadbylapudi:Prasad@273@cluster0.n74b7qv.mongodb.net/;'),
    MongooseModule.forFeature([{ name: 'UserProfile', schema:UserProfileSchema}]),
    FormModule],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//prasadbylapudi
//Prasad@273
