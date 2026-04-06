import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  receivedAt: Date;
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly submissions: ContactSubmission[] = [];

  create(dto: CreateContactDto): ContactSubmission {
    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      name: dto.name,
      email: dto.email,
      company: dto.company,
      subject: dto.subject,
      message: dto.message,
      receivedAt: new Date(),
    };

    this.submissions.push(submission);
    this.logger.log(
      `New contact submission from ${submission.email} [${submission.subject}] id=${submission.id}`,
    );

    return submission;
  }

  findAll(): ContactSubmission[] {
    return this.submissions;
  }
}
