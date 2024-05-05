import { Routes } from '@angular/router';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewIssueComponent } from './new-issue/new-issue.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'issues', component: IssueListComponent },
    { path: 'issues/new', component: NewIssueComponent },
    { path: 'issues/:id', component: IssueDetailComponent }
];
