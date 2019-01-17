import {  Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'
import { DatePipe } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote:Quote;

  @Output() isComplete= new EventEmitter<boolean>();
 

  quotes = [
    // new Quote(0,'','','',new Date()),
    new Quote(3, 'I have to pray before I come to school','Daudi Mohamed', 'Farah', new Date(2019, 0, 15)),
]

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
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

uvotes = 0;
dvotes = 0;
timePass = 0;

tPassed(){
  this.timePass = 0;

}

upVote(i){
  this.quotes[i].uvotes +=1;
}

downVote(i){
  this.quotes[i].dvotes +=1;
}

startNum:number
lastNum:number
ctr:number

hUpvote(){

  this.startNum = 0
  this.lastNum = 0

   for(this.ctr=0 ; this.ctr < this.quotes.length; this.ctr++) {
    this.lastNum = this.quotes[this.ctr].uvotes;
    if(this.lastNum > this.startNum){
      this.startNum = this.lastNum
    }
  }
      
  return  this.startNum
}

  constructor() { }

  ngOnInit() {
  }

}