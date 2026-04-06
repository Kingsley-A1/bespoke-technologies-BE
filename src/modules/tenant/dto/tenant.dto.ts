import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, MinLength } from 'class-validator';

export class CreateTenantDto {
  @ApiProperty({ example: 'Acme Corporation' })
  @IsString()
  @MinLength(2)
  name!: string;

  @ApiPropertyOptional({ example: 'acme-corp' })
  @IsString()
  @IsOptional()
  slug?: string;
}

export class UpdateTenantDto {
  @ApiPropertyOptional({ example: 'Acme Corp Updated' })
  @IsString()
  @IsOptional()
  @MinLength(2)
  name?: string;

  @ApiPropertyOptional({ example: 'acme-updated' })
  @IsString()
  @IsOptional()
  slug?: string;
}

export class TenantResponseDto {
  @ApiProperty({ example: 'c1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  id!: string;

  @ApiProperty({ example: 'Acme Corporation' })
  name!: string;

  @ApiProperty({ example: 'acme-corp' })
  slug!: string;

  @ApiProperty({ example: '2026-01-15T00:00:00.000Z' })
  createdAt!: string;

  @ApiProperty({ example: '2026-01-15T00:00:00.000Z' })
  updatedAt!: string;
}
