import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum ContactSubject {
  PROJECT_ENQUIRY = 'project_enquiry',
  PARTNERSHIP = 'partnership',
  GENERAL = 'general',
  SUPPORT = 'support',
}

export class CreateContactDto {
  @ApiProperty({ example: 'Jane Smith' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name!: string;

  @ApiProperty({ example: 'jane@company.com' })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(254)
  email!: string;

  @ApiPropertyOptional({ example: 'Acme Corp' })
  @IsString()
  @IsOptional()
  @MaxLength(120)
  company?: string;

  @ApiProperty({ enum: ContactSubject })
  @IsEnum(ContactSubject)
  subject!: ContactSubject;

  @ApiProperty({ example: "We'd like to discuss a web application project." })
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  @MaxLength(2000)
  message!: string;

  /**
   * Honeypot field — should always be empty from legitimate submissions.
   * Bots commonly fill all form fields including hidden ones.
   */
  @ApiPropertyOptional({ description: 'Honeypot — leave empty' })
  @IsString()
  @IsOptional()
  @MaxLength(0)
  website?: string;
}
