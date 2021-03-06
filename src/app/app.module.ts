import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { IssueServiceService } from './issue-service.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { IssueDetailViewComponent } from './issue-detail-view/issue-detail-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesListComponent,
    NewIssueComponent,
    IssueDetailViewComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [IssueServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
