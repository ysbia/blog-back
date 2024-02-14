import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) : Promise<Post> {
    return await this .postRepository.save(createPostDto);
  }

  async findAll() : Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findOne(id: number) : Promise<Post> {
    return await this.postRepository.findOne({where: {id: id}});
  }

  async update(id: number, updatePostDto: UpdatePostDto) : Promise<void> {
    await this.postRepository.update(id, updatePostDto);
  }

  async remove(id: number) : Promise<void> {
    await this.postRepository.delete(id);
  }
}
