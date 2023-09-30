import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { UserProfile, UserProfileSchema } from './schemas/user-profile.model'; // Import the model and schema

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserProfile.name, schema: UserProfileSchema }, // Register the model with the schema
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
