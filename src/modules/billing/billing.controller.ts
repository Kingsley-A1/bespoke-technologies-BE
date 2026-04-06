import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BillingService } from './billing.service';
import { BillingPlanDto, SubscriptionDto, SubscribeDto } from './dto';

@ApiTags('Billing')
@ApiBearerAuth()
@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get('plans')
  @ApiOperation({ summary: 'List all available billing plans' })
  @ApiResponse({ status: 200, type: [BillingPlanDto] })
  getPlans(): BillingPlanDto[] {
    return this.billingService.getPlans();
  }

  @Get('subscriptions')
  @ApiOperation({ summary: 'List subscriptions for the current tenant' })
  @ApiResponse({ status: 200, type: [SubscriptionDto] })
  getSubscriptions(): SubscriptionDto[] {
    // TODO: Extract tenantId from JWT in Phase 1.5
    return this.billingService.getSubscriptions('mock-tenant-id');
  }

  @Post('subscribe')
  @ApiOperation({ summary: 'Subscribe the current tenant to a plan' })
  @ApiResponse({ status: 201, type: SubscriptionDto })
  subscribe(@Body() dto: SubscribeDto): SubscriptionDto {
    // TODO: Extract tenantId from JWT in Phase 1.5
    return this.billingService.subscribe('mock-tenant-id', dto);
  }
}
