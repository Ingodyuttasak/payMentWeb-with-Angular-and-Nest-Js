import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('card')
export class Cards{

    @PrimaryGeneratedColumn()
    cardId: number;

    @Column()
    cardnum: string;

    @Column()
    cardname: string;

    @Column()
    exired: string;

    @Column()
    cvv: string;

    @Column()
    cardtype: string;
}