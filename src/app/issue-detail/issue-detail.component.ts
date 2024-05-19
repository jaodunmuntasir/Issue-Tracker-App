import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './issue-detail.component.html',
  styleUrl: './issue-detail.component.css',
})
export class IssueDetailComponent implements OnInit {
  issue: Issue = new Issue();

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private router: Router,
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

  handleDelete() {
    this.issueService.deleteIssue(this.issue.id);
    this.router.navigate(['/issues']);
  }
}
