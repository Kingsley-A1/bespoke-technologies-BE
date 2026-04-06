import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TenantService } from './tenant.service';
import { CreateTenantDto, UpdateTenantDto, TenantResponseDto } from './dto';

@ApiTags('Tenants')
@ApiBearerAuth()
@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  @ApiOperation({ summary: 'List all tenants' })
  @ApiResponse({ status: 200, type: [TenantResponseDto] })
  findAll(): TenantResponseDto[] {
    return this.tenantService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new tenant' })
  @ApiResponse({ status: 201, type: TenantResponseDto })
  create(@Body() dto: CreateTenantDto): TenantResponseDto {
    return this.tenantService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tenant by ID' })
  @ApiResponse({ status: 200, type: TenantResponseDto })
  @ApiResponse({ status: 404, description: 'Tenant not found' })
  findOne(@Param('id') id: string): TenantResponseDto {
    return this.tenantService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tenant' })
  @ApiResponse({ status: 200, type: TenantResponseDto })
  @ApiResponse({ status: 404, description: 'Tenant not found' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateTenantDto,
  ): TenantResponseDto {
    return this.tenantService.update(id, dto);
  }
}
