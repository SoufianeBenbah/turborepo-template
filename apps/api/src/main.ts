import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { CustomConfigService } from './modules/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(CustomConfigService);
  await app.listen(config.port);
}

void bootstrap();
