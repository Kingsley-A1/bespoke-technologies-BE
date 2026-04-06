import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  ADMIN = 'admin',
  MEMBER = 'member',
  VIEWER = 'viewer',
}

export class UserResponseDto {
  @ApiProperty({ example: 'u-001' })
  id!: string;

  @ApiProperty({ example: 'admin@kingtechfoundation.com' })
  email!: string;

  @ApiProperty({ example: 'John Doe' })
  fullName!: string;

  @ApiProperty({ enum: UserRole, example: UserRole.ADMIN })
  role!: UserRole;

  @ApiProperty({ example: 'c1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  tenantId!: string;

  @ApiProperty({ example: '2026-01-15T00:00:00.000Z' })
  createdAt!: string;
}
