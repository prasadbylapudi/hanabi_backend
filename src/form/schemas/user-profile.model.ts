import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserProfile extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: false })
  phoneNumber: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: false })
  name: string;

  @Prop({ required: false })
  dateOfBirth: string;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
