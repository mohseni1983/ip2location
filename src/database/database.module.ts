import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostgressConfiguration } from "./configurations/postgress.configuration";

@Module({
  imports:[
    TypeOrmModule.forRootAsync({
      useClass:PostgressConfiguration
    })
  ],

})
export class DatabaseModule {}
