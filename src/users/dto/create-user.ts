import { IsEmail, IsString, Length, Matches } from "class-validator";

export class CreateUserDto {
  readonly id: string;
  @IsString({ message: "Должен бысть строкой" })
  @IsEmail({}, { message: "Должен содержать валидный Email" })
  readonly email: string;
  @IsString({ message: "Должен бысть строкой" })
  @Length(8, 20, { message: "Не меньше 8 символов" })
  @Matches(/^(?=.*\d)(?=.*[a-z])|(?=.*[A-Z]).*$/, {
    message: "Пароль должен состоять из букв и цифр",
  })
  readonly password: string;
}
