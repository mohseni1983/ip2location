import { Module } from '@nestjs/common';
import { IplocationModule } from './iplocation/iplocation.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [IplocationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
