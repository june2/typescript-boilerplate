import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './../user/user.entity';
import { identifier } from '@babel/types';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async createToken(user: User) {
    return {
      expiresIn: 3600,
      accessToken: this.jwtService.sign(Object.assign({}, user))
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    return {};
  }
}
