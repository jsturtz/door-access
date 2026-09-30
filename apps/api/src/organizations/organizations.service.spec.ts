import { Test, TestingModule } from '@nestjs/testing'
import { OrganizationsService } from './organizations.service.js'
import { PrismaService } from '../prisma/prisma.service.js'

describe('OrganizationsService', () => {
  let service: OrganizationsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganizationsService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile()

    service = module.get<OrganizationsService>(OrganizationsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
