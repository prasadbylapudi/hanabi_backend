import { Controller, Get, Put,Post, Body, Patch, Param, Res, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Response } from 'express'; 

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  // Submit a new form
  @Post('submit')
  async submitForm(@Body() createFormDto: CreateFormDto) {
    try {
      // Log the received data for debugging
      console.log('Received Data:', createFormDto);

      // Attempt to save the data to the database
      const savedData = await this.formService.createForm(createFormDto);

      // If the data was successfully saved, return a success response
      return {
        message: 'Form submitted successfully',
        data: savedData,
      };
    } catch (error) {
      // Handle any errors here and return an error response
      console.error('Error:', error.message);
      return {
        error: 'An error occurred while submitting the form',
      };
    }
  }
  
  @Get(':username')
  async getUserByUsername(
    @Param('username') username: string,
    @Res() res: Response, // Inject the Response object
  ) {
    try {
      const userDetails = await this.formService.getFormByUsername(username);
      if (!userDetails) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json({ data: userDetails });
    } catch (error) {
      console.error('Error:', error.message);
      return res.status(500).json({ error: 'An error occurred while retrieving user details' });
    }
  }

    @Put(':username')
  async updateForm(
    @Param('username') username: string,
    @Body() updateFormDto: UpdateFormDto,
    @Res() res: Response, // Inject the Response object
  ) {
    try {
      const updatedUser = await this.formService.updateForm(username, updateFormDto);
      console.log(">>>updated user",updatedUser)
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({ message: 'Form updated successfully', data: updatedUser });
    } catch (error) {
      console.error('Error:', error.message);
      return res.status(500).json({ error: 'An error occurred while updating the form' });
    }
  }



 
}
