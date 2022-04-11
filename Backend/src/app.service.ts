import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cards } from './entity/payment.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Cards) private readonly cardRepository:Repository<Cards>
  ){
}
  async create(data : any): Promise<Cards>{

    return this.cardRepository.save(data);
  }
  
  public async getCard(){
    const cardList= await this.cardRepository.find();
    return cardList;
  }
}

