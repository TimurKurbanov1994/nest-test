import { Column, Entity } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @Column({
    name: "id",
    generated: "uuid",
    primary: true,
    comment: "Идентификатор",
  })
  id!: string;

  @Column({ name: "email", comment: "Email" })
  email!: string;

  @Column({ name: "password", comment: "password" })
  password!: string;
}
