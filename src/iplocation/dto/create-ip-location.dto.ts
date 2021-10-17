import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateIpLocationDto {
  start: number | null;
  end: number | null;
  symbol: string | null;
  country: string | null;
}