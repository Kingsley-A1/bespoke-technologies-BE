import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Submit a contact enquiry' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Contact submission received.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Validation failed or honeypot triggered.',
  })
  create(@Body() createContactDto: CreateContactDto) {
    // Silently discard honeypot submissions without revealing detection
    if (createContactDto.website) {
      return { received: true };
    }
    const submission = this.contactService.create(createContactDto);
    return { received: true, id: submission.id };
  }
}
