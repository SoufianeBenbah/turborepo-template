import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CustomConfigService } from './config.service';
import { validate } from './env.validation';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ cache: true, validate })],
  providers: [CustomConfigService],
  exports: [CustomConfigService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CustomConfigModule {}
