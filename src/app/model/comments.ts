export class Quotes {
  public showDescription: boolean;

  constructor(public id: number, public name: string, public myquote: string,
              public author: string,
              public postdate: Date, public upvote: number,
              public downvote: number) {
    this.showDescription = false
    this.upvote = 0
    this.downvote = 0

  }
}
