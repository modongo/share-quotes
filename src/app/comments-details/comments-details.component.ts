import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../model/comments';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }


  submitUpvote(quote) {
    quote.upvote = quote.upvote + 1;
  }

  submitDownvote(quote) {
    quote.downvote = quote.downvote + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
