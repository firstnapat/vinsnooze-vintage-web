import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStore(): { message: string } {
    return { message: 'vinsnooze store' };
  }
}
