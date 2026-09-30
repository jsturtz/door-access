import { Test, TestingModule } from '@nestjs/testing'
import { OrganizationsController } from './organizations.controller.js'
import { OrganizationsService } from './organizations.service.js'
import { PrismaService } from '../prisma/prisma.service.js'

describe('OrganizationsController', () => {
  let controller: OrganizationsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationsController],
      providers: [
        OrganizationsService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile()

    controller = module.get<OrganizationsController>(OrganizationsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
