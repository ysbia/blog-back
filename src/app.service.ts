import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  async getHello(): Promise<Post[]> {
    await this.postRepository.save({
      title: 'Hello World',
      content: 'This is my first post.',
    });

    return await this.postRepository.find();
  }
}
