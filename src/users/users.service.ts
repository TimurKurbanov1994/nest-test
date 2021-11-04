import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.save(dto);
    return user;
  }

  async getAllUser() {
    const users = await this.userRepository.find();
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
