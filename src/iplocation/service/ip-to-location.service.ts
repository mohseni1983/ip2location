import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IpToLocationEntity } from "../model/ip-to-location.entity";
import { LessThanOrEqual, MoreThanOrEqual, Repository } from "typeorm";
import { GetIpLocationDto } from "../dto/get-ip-location.dto";
import { IpLocationDto } from "../dto/ip-location.dto";
import { CreateIpLocationDto } from "../dto/create-ip-location.dto";
import * as csvParser from "csv-parser";
import * as fs from 'fs'
@Injectable()
export class IpToLocationService {
  constructor(
    @InjectRepository(IpToLocationEntity) private readonly ipToLocationRepository:Repository<IpToLocationEntity>
  ) {
  }

  async getIpLocation(ipLocationDto:GetIpLocationDto):Promise<IpLocationDto>{
    const {ip}=ipLocationDto
    let parts:string[]=ip.split(".",4)
    const ipNumber=parseInt(parts[0])*16777216+
                    parseInt(parts[1])*65536+
                    parseInt(parts[2])*256+
                    parseInt(parts[3])
    const result=await this.ipToLocationRepository.findOne({start:LessThanOrEqual(ipNumber),end:MoreThanOrEqual(ipNumber)})
    if(!result)
      throw new NotFoundException()
    const country:IpLocationDto={
      ip:ip,
      location:result.country,
      symbol:result.symbol
    }
    return country
  }

  async createIpLocation(createIpLocation:CreateIpLocationDto):Promise<IpToLocationEntity>{
    const {start,end,country,symbol}=createIpLocation
    const result=await this.ipToLocationRepository.save({
      start,end,country,symbol
    })
    return result
  }

  async importCsvData(file:string):Promise<any>{
    fs.createReadStream('./files/'+file).pipe(csvParser({separator:',',headers:false}))
      .on ('data',async (data)=>{
        //console.log(data.country)
        //console.log(data)
        const res=await this.ipToLocationRepository.findOne({start:+data[0],end:+data[1]})
        if(!res)
        await this.ipToLocationRepository.save({
          start:+data[0],
          end:+data[1],
          symbol:data[2],
          country:data[3]
        })

      })
      .on('end',()=>{console.log(this.ipToLocationRepository.count())})

    return await this.ipToLocationRepository.count()

  }
}