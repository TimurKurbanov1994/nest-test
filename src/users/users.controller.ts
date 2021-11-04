import { Controller, Get, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../auth/jwt-auth";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUser() {
    return this.userService.getAllUser();
  }
}
