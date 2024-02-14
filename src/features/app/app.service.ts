import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  constructor() {}
  hello(): string {
    return 'hello world !';
  }
}
