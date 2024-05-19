import { Component, OnInit } from '@angular/core';
import { IssueFormComponent } from '../issue-form/issue-form.component';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-issue',
  standalone: true,
  templateUrl: './new-issue.component.html',
  styleUrl: './new-issue.component.css',
  imports: [IssueFormComponent],
})
export class NewIssueComponent implements OnInit {
  issue: Issue = new Issue();

  constructor(
    private issueService: IssueService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      const id = parseInt(paramId);
      console.log('Issue id:', id);
      const issue = this.issueService.getIssueById(id);
      if (issue) {
        this.issue = issue;
      }
    }
  }

  handleSave(issue: Issue) {
    console.log(issue);
    if (this.issue.id) {
      this.issueService.updateIssue(this.issue.id, issue);
      this.location.back();
    } else {
      this.issueService.addIssue(issue);
      this.router.navigate(['/issues']);
    }
  }
}
