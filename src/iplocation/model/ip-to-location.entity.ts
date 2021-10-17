import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('ip2location')
export class IpToLocationEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "start", nullable: true, length: 255 })
  start: number | null;

  @Column("character varying", { name: "end", nullable: true, length: 255 })
  end: number | null;

  @Column("character varying", { name: "symbol", nullable: true, length: 255 })
  symbol: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 255 })
  country: string | null;

}
