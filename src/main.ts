import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

async function bootstrap() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  console.log(
    "host = ",
    process.env.POSTGRES_HOST,
    "; port = ",
    Number(process.env.POSTGRES_PORT),
    "; username = ",
    String(process.env.POSTGRES_USER),
    "; password = ",
    String(process.env.POSTGRES_PASSWORD),
    "; database = ",
    String(process.env.POSTGRES_DB)
  );
  await app.listen(port, () => console.log(`Server started on port = ${port}`));
}
bootstrap();
