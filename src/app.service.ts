import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTurma(): string {
    return '<b>Bom dia Turma java scripto zero cincooooooooo</b>';
  }
}
