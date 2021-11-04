import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  @HttpCode(200)
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post("/registration")
  @HttpCode(200)
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
