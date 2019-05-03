import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../model/comments';


@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

// tslint:disable-next-line: whitespace
// tslint:disable-next-line: quotemark
  newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(newQuote) {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, "", "", "", new Date(), 0, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
