import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { IssueListComponent } from "./issue-list/issue-list.component";
import { NewIssueComponent } from "./new-issue/new-issue.component";
import { IssueDetailComponent } from "./issue-detail/issue-detail.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet, 
      MainPageComponent, 
      NavbarComponent, 
      IssueListComponent, 
      NewIssueComponent, 
      IssueDetailComponent
    ]
})
export class AppComponent {
  title = 'Issue-Tracker-App';
}
