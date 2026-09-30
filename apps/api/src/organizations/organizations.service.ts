import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateOrganizationDto } from './dto/create-organization.dto.js'
import { UpdateOrganizationDto } from './dto/update-organization.dto.js'
import { PrismaService } from '../prisma/prisma.service.js'

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    return this.prisma.organization.create({ data: createOrganizationDto })
  }

  findAll() {
    return this.prisma.organization.findMany()
  }

  async findOne(id: string) {
    const org = await this.prisma.organization.findUnique({
      where: { id },
      include: {
        memberships: {
          include: { user: true },
        },
      },
    })
    if (!org) {
      throw new NotFoundException(`organization ${id} not found`)
    }
    return org
  }

  update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    return this.prisma.organization.update({
      where: { id },
      data: updateOrganizationDto,
    })
  }

  remove(id: string) {
    return this.prisma.organization.delete({ where: { id } })
  }
}
