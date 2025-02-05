import { Module } from '@nestjs/common';
import { CustomConfigModule } from '../config/config.module';

@Module({
  imports: [CustomConfigModule],
  controllers: [],
  providers: [],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
