import { Component } from '@angular/core';
import { IssueFormComponent } from "../issue-form/issue-form.component";
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-issue',
    standalone: true,
    templateUrl: './new-issue.component.html',
    styleUrl: './new-issue.component.css',
    imports: [IssueFormComponent]
})
export class NewIssueComponent {

    constructor(private issueService : IssueService, private router : Router) {}

    handleSave(issue : Issue) {
        console.log(issue);
        this.issueService.addIssue(issue);
        this.router.navigate(['/issues']);
    }
}
