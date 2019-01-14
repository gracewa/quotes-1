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
    new Quote(3, 'Daudi Mohamed', 'I have to pray before I come to school', 'dauid', new Date(2019, 1, 14)),
]
  
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

  
  constructor() { }

  ngOnInit() {
  }

}
