import { PartialType } from '@nestjs/mapped-types';
import { CreateFormDto } from './create-form.dto';

export class UpdateFormDto extends PartialType(CreateFormDto) {
  readonly phoneNumber: string;
  readonly email: string;
  readonly name: string;
  readonly dateOfBirth: string;
}
