import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BillingPlanDto {
  @ApiProperty({ example: 'plan-starter' })
  id: string;

  @ApiProperty({ example: 'Starter' })
  name: string;

  @ApiProperty({ example: 29.99 })
  priceMonthly: number;

  @ApiProperty({ example: ['5 Users', '10GB Storage', 'Email Support'] })
  features: string[];
}

export class SubscriptionDto {
  @ApiProperty({ example: 'sub-001' })
  id: string;

  @ApiProperty({ example: 'plan-starter' })
  planId: string;

  @ApiProperty({ example: 'c1a2b3c4-d5e6-7890-abcd-ef1234567890' })
  tenantId: string;

  @ApiProperty({ enum: ['active', 'cancelled', 'past_due', 'trialing'] })
  status: string;

  @ApiProperty({ example: '2026-02-15T00:00:00.000Z' })
  currentPeriodEnd: string;
}

export class SubscribeDto {
  @ApiProperty({ example: 'plan-starter' })
  @IsString()
  planId: string;

  @ApiPropertyOptional({ example: 'pm_mock_payment_method' })
  @IsString()
  paymentMethodId: string;
}
