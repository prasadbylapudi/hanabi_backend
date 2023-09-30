import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Model } from 'mongoose';
import { UserProfile } from './schemas/user-profile.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FormService {

    constructor(
    @InjectModel('UserProfile')
    private readonly userProfileModel: Model<UserProfile>,
  ) {}


   async createForm(createFormDto: CreateFormDto) {
  try {
    // Check if a user with the given username already exists
    const existingUser = await this.userProfileModel.findOne({
      username: createFormDto.username,
    });

    if (existingUser) {
      // User already exists, return the existing user's data
      return existingUser;
    }

    // User doesn't exist, create a new user profile
    const createdForm = new this.userProfileModel(createFormDto);
    return await createdForm.save();
  } catch (error) {
      console.log(error);
  }
}

async getFormByUsername(username: string) {
  try {
    // Attempt to find the user profile by username
    const userProfile = await this.userProfileModel.findOne({ username }).exec();

    if (!userProfile) {
      // If no user is found, return an error or handle as needed
      return { error: 'User not found' };
    }

    // If the user profile is found, return the user details
    return userProfile;
  } catch (error) {
    // Handle any errors here and return an appropriate response
    console.error('Error:', error.message);
    return { error: 'An error occurred' };
  }
}



 async updateForm(username: string, updateFormDto: UpdateFormDto) {
  try {
    // Find the user profile by username
    const existingUser = await this.userProfileModel.findOne({ username });

    if (!existingUser) {
      // If the user does not exist, return an error or handle as needed
      return { error: 'User not found' };
    }

    // Update the user profile with the new data from updateFormDto
    existingUser.phoneNumber = updateFormDto.phoneNumber;
    existingUser.email = updateFormDto.email;
    existingUser.name = updateFormDto.name;
    existingUser.dateOfBirth = updateFormDto.dateOfBirth;

    // Save the updated user profile
    const updatedUser = await existingUser.save();

    return updatedUser;
  } catch (error) {
    // Handle any errors here and return an appropriate response
    console.error('Error:', error.message);
    return { error: 'An error occurred' };
  }
}


}
