import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
import { DatePipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    // new Quote(0,'','','',new Date()),
    new Quote(3, 'Daudi Mohamed', 'I have to pray before I come to school', 'Farah', new Date(2019, 0, 15)),
]

uvotes = 0;
dvotes = 0;

timePass = 0;

tPassed(){
  this.timePass = 0;
}
upVote(){
  this.uvotes = this.uvotes + 1;
}

downVote(){
  this.dvotes = this.dvotes + 1;
}


deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].quote}`)
    if(toDelete) {
      this.quotes.splice(index,1);
    }  
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)

}
  
startNum:number
lastNum:number
ctr:number

hUpvote(){
  this.startNum = 0
  this.lastNum = 0
  
  for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
    // this.lastNum = this.quotes[this.ctr].uvotes;
    if(this.lastNum > this.startNum){this.startNum = this.lastNum}
  }
  return  this.startNum
}

  constructor() { }

  ngOnInit() {
  }

}
