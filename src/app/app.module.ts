import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsDetailsComponent } from './comments-details/comments-details.component';
import { CommentsFormComponent } from './comments-form/comments-form.component';
import { HighlightsDirective } from './highlights.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentsDetailsComponent,
    CommentsFormComponent,
    HighlightsDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
