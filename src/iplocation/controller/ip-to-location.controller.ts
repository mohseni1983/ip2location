import { IpToLocationService } from "../service/ip-to-location.service";
import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { GetIpLocationDto } from "../dto/get-ip-location.dto";
import { CreateIpLocationDto } from "../dto/create-ip-location.dto";
import { FileInterceptor } from "@nestjs/platform-express";
@Controller('location')
export class IpToLocationController {
  constructor(
    private ipToLocationService:IpToLocationService
  ) {
  }

  @Post()
  async getLocationByIp(@Body() ipLocationDto:GetIpLocationDto):Promise<any>{
    return await this.ipToLocationService.getIpLocation(ipLocationDto)
  }

  @Post('create')
  async createIpLocation(@Body() createIpLocationDto:CreateIpLocationDto):Promise<any>{
    return this.ipToLocationService.createIpLocation(createIpLocationDto)
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('data'))
  async uploadCsvDate(@UploadedFile() file):Promise<any>{
    return await this.ipToLocationService.importCsvData(file.filename)
  }
}