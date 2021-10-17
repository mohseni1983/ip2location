import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { IpToLocationEntity } from "../../iplocation/model/ip-to-location.entity";

export class PostgressConfiguration implements TypeOrmOptionsFactory{
  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const options:TypeOrmModuleOptions={
      host:'localhost',
      type:'postgres',
      port:5432,
      username:'postgres',
      password:'123456',
      database:'ip2location',
      entities:[IpToLocationEntity],
      synchronize:false
    }
    return options;
  }

}