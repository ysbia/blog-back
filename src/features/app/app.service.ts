import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from '../../entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AppService {
  constructor() {}
  hello(): string {
    return 'hello world !';
  }
}
