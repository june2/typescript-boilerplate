import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) { }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {        
    return await this.photoRepository.save(createPhotoDto);
  }
}
