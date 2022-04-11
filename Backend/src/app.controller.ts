import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('card')
  public async getCard(){
    return this.appService.getCard()
  }

  @Post('cards')
  async card(
    @Body('cardnum') cardnum:string,
    @Body('cardname') cardname : string,
    @Body('exired') exired:string,
    @Body('cvv') cvv:string,
    @Body('cardtype') cardtype:string
  ){
      const hashedCardnum = await bcrypt.hash (cardnum,10)
      const hashedCardname = await bcrypt.hash (cardname,10)
      const hashedCardexired = await bcrypt.hash (exired,10)
      const hashedCardcvv = await bcrypt.hash (cvv,10)
      const hashedCardtype = await bcrypt.hash (cardtype,10)

      return this.appService.create({
        cardnum:hashedCardnum,
        cardname:hashedCardname,
        exired:hashedCardexired,
        cvv:hashedCardcvv,
        cardtype:hashedCardtype,
      })
      //    const cardData={cardnum: "",cardname:"" ,exired: "",cvv: "",cardtype: ""}
      //    const myJSON = JSON.stringify(cardData);
      //   const hashedCard = await bcrypt.hash (cvv,10)
      //   return this.appService.create({
      //    myJSON:hashedCard
      //  })
  }
}
