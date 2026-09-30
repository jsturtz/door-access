// Controllers are responsible for handling incoming requests and sending responses back to the client.
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service.js'

// Controller decorator is how we define a controller
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    }
  }
}
