import { Injectable } from '@nestjs/common';
import { BillingPlanDto, SubscriptionDto, SubscribeDto } from './dto';

const MOCK_PLANS: BillingPlanDto[] = [
  {
    id: 'plan-starter',
    name: 'Starter',
    priceMonthly: 29.99,
    features: ['5 Users', '10GB Storage', 'Email Support'],
  },
  {
    id: 'plan-professional',
    name: 'Professional',
    priceMonthly: 79.99,
    features: ['25 Users', '100GB Storage', 'Priority Support', 'API Access'],
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    priceMonthly: 199.99,
    features: [
      'Unlimited Users',
      '1TB Storage',
      'Dedicated Support',
      'Custom Integrations',
      'SLA Guarantee',
    ],
  },
];

@Injectable()
export class BillingService {
  getPlans(): BillingPlanDto[] {
    return MOCK_PLANS;
  }

  getSubscriptions(tenantId: string): SubscriptionDto[] {
    return [
      {
        id: 'sub-001',
        planId: 'plan-starter',
        tenantId,
        status: 'active',
        currentPeriodEnd: '2026-02-15T00:00:00.000Z',
      },
    ];
  }

  subscribe(tenantId: string, dto: SubscribeDto): SubscriptionDto {
    return {
      id: `sub-${Date.now()}`,
      planId: dto.planId,
      tenantId,
      status: 'active',
      currentPeriodEnd: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000,
      ).toISOString(),
    };
  }
}
