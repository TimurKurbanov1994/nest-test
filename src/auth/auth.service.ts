import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtServices: JwtService
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        "Пользователь с таким email существует",
        HttpStatus.BAD_REQUEST
      );
    }

    const hashPass = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPass,
    });
    return this.generateToken(user);
  }
  async generateToken(user) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtServices.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({
      message: "Некорректный емайл  или пароль",
    });
  }
}
