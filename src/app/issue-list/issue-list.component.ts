import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { JsonPipe, NgForOf } from '@angular/common';
import { StatusFilterComponent } from "../status-filter/status-filter.component";
import { NewIssueComponent } from "../new-issue/new-issue.component";
import { IssueFormComponent } from "../issue-form/issue-form.component";
import { RouterLink } from '@angular/router';
import { IssueService } from '../issue.service';

@Component({
    selector: 'app-issue-list',
    standalone: true,
    templateUrl: './issue-list.component.html',
    styleUrl: './issue-list.component.css',
    imports: [NgForOf, StatusFilterComponent, JsonPipe, IssueFormComponent, RouterLink]
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];

  filteredIssues: Issue[] = [];

  status = 'All';
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssueService) {}

  async ngOnInit() {
    this.issues = await this.issueService.getIssues();
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues =
      this.status === 'All'
        ? this.issues
        : this.issues.filter((issue) => issue.status === this.status);
  }

  changeStatus(status: string) {
    this.status = status;
    this.filterIssues();
  }

  handleSave(issue: Issue) {
    // console.log(issue);
    if (this.selectedIssue) {
      Object.assign(this.selectedIssue, issue); // Overwrite the selected issue
    }
    
    this.selectedIssue = null;
  }
}
