import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { IpToLocationEntity } from "../../iplocation/model/ip-to-location.entity";

export class PostgressConfiguration implements TypeOrmOptionsFactory{
  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const options:TypeOrmModuleOptions={
      host:'localhost',
      type:'postgres',
      port:5432,
      username:'saniar_ip',
      password:'a3Z2ScjhyOtz',
      database:'saniar_ip2location',
      entities:[IpToLocationEntity],
      synchronize:false
    }
    return options;
  }

}