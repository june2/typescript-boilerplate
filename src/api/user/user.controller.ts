import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { Controller, Param, Body, Get, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto,UpdateUserDto } from './user.dto';

@ApiBearerAuth()
@ApiUseTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  @ApiOperation({ title: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createPhotoDto: CreateUserDto): Promise<User> {    
    return this.userService.create(createPhotoDto);
  }

  @Put('/:id')
  update( @Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {    
    return this.userService.update(id, updateUserDto);
  }
}
