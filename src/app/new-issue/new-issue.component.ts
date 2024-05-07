import { Component } from '@angular/core';
import { IssueFormComponent } from "../issue-form/issue-form.component";

@Component({
    selector: 'app-new-issue',
    standalone: true,
    templateUrl: './new-issue.component.html',
    styleUrl: './new-issue.component.css',
    imports: [IssueFormComponent]
})
export class NewIssueComponent {

}
