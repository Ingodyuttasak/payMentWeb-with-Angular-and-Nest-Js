import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cardApiService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardForm: FormGroup;
  constructor(private fb: FormBuilder,private cardService:cardApiService) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      cardno: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      expDate: ['', Validators.required],
      cvvNo: ['', Validators.required]

    });

  }

  onSubmit(){
    console.log(this.cardForm.value);
    let cardData = {
      cardnum: this.cardForm.value.cardno,
      cardname:this.cardForm.value.firstName+' '+this.cardForm.value.lastName,
      exired:this.cardForm.value.expDate,
      cvv:this.cardForm.value.cvvNo,
      cardtype:'master card'
      
    };
    let data =this.cardService.postCard(cardData).subscribe((data)=>{console.log(data)});
    console.log(data)
    
  }

}
