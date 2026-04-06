import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto, AuthTokensDto } from './dto';

@Injectable()
export class AuthService {
  // TODO: Implement real authentication in Phase 1.5
  login(_dto: LoginDto): AuthTokensDto {
    return {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
    };
  }

  // TODO: Implement real registration in Phase 1.5
  register(_dto: RegisterDto): AuthTokensDto {
    return {
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token',
    };
  }

  // TODO: Implement token refresh in Phase 1.5
  refresh(_refreshToken: string): AuthTokensDto {
    return {
      accessToken: 'mock-new-access-token',
      refreshToken: 'mock-new-refresh-token',
    };
  }
}
