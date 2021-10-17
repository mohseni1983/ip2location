import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { IpToLocationEntity } from "./model/ip-to-location.entity";
import { IpToLocationService } from "./service/ip-to-location.service";
import { IpToLocationController } from "./controller/ip-to-location.controller";
import { MulterModule } from "@nestjs/platform-express";

@Module({
  imports:[
    TypeOrmModule.forFeature([IpToLocationEntity]),
    MulterModule.register({
      dest:'./files'
    })
  ],
  providers:[IpToLocationService],
  controllers:[IpToLocationController]
})
export class IplocationModule {}
