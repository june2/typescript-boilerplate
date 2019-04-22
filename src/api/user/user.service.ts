import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from './user.dto'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const entity = Object.assign(new User(), createUserDto);
    return await this.userRepository.save(entity);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return await this.userRepository.update(id, updateUserDto);
  }

  async findByEmailAndPass(email: string, password: string): Promise<User> {
    return await this.userRepository.findByEmailAndPass(email, password);
  }
}
