import { Injectable } from '@nestjs/common';
import { UserResponseDto, UserRole } from './dto';

@Injectable()
export class UsersService {
  findAll(tenantId: string): UserResponseDto[] {
    return [
      {
        id: 'u-001',
        email: 'admin@kingtechfoundation.com',
        fullName: 'Admin User',
        role: UserRole.ADMIN,
        tenantId,
        createdAt: '2026-01-15T00:00:00.000Z',
      },
    ];
  }

  findOne(id: string): UserResponseDto {
    return {
      id,
      email: 'admin@kingtechfoundation.com',
      fullName: 'Admin User',
      role: UserRole.ADMIN,
      tenantId: 'mock-tenant-id',
      createdAt: '2026-01-15T00:00:00.000Z',
    };
  }
}
