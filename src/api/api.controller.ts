import { Controller, Get, Post, Body } from '@nestjs/common';
import { generateDocumentation } from '../packages/core/index.js';

@Controller('api')
export class ApiController {
  @Get()
  getAll(): string {
    return 'List of documents';
  }

  @Post('/generate')
  generate(@Body() body: any) {
    return generateDocumentation(body);
  }
}