import { Injectable } from '@nestjs/common';
import { CreateTenantDto, UpdateTenantDto, TenantResponseDto } from './dto';

const MOCK_TENANT: TenantResponseDto = {
  id: 'c1a2b3c4-d5e6-7890-abcd-ef1234567890',
  name: 'King Tech Foundation',
  slug: 'king-tech-foundation',
  createdAt: '2026-01-15T00:00:00.000Z',
  updatedAt: '2026-01-15T00:00:00.000Z',
};

@Injectable()
export class TenantService {
  findAll(): TenantResponseDto[] {
    return [MOCK_TENANT];
  }

  findOne(id: string): TenantResponseDto {
    return { ...MOCK_TENANT, id };
  }

  create(dto: CreateTenantDto): TenantResponseDto {
    return {
      ...MOCK_TENANT,
      name: dto.name,
      slug: dto.slug ?? dto.name.toLowerCase().replace(/\s+/g, '-'),
    };
  }

  update(id: string, dto: UpdateTenantDto): TenantResponseDto {
    return {
      ...MOCK_TENANT,
      id,
      ...(dto.name && { name: dto.name }),
      ...(dto.slug && { slug: dto.slug }),
      updatedAt: new Date().toISOString(),
    };
  }
}
