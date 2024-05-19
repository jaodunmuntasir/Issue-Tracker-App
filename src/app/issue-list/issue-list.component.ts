import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { JsonPipe, NgForOf } from '@angular/common';
import { StatusFilterComponent } from "../status-filter/status-filter.component";
import { NewIssueComponent } from "../new-issue/new-issue.component";
import { IssueFormComponent } from "../issue-form/issue-form.component";

@Component({
    selector: 'app-issue-list',
    standalone: true,
    templateUrl: './issue-list.component.html',
    styleUrl: './issue-list.component.css',
    imports: [NgForOf, StatusFilterComponent, JsonPipe, IssueFormComponent]
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [
    {
      id: 1,
      title: 'Issue 1',
      description: 'This is issue 1',
      place: 'Place 1',
      status: 'Open',
    },
    {
      id: 2,
      title: 'Issue 2',
      description: 'This is issue 2',
      place: 'Place 2',
      status: 'Closed',
    },
    {
      id: 3,
      title: 'Issue 3',
      description: 'This is issue 3',
      place: 'Place 3',
      status: 'Open',
    },
    {
      id: 4,
      title: 'Issue 4',
      description: 'This is issue 4',
      place: 'Place 4',
      status: 'Closed',
    },
    {
      id: 5,
      title: 'Issue 5',
      description: 'This is issue 5',
      place: 'Place 5',
      status: 'In Progress',
    },
  ];

  filteredIssues: Issue[] = [];

  status = 'All';
  selectedIssue: Issue | null = null;

  ngOnInit() {
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
      Object.assign(this.selectedIssue, issue);
    }
    
    this.selectedIssue = null;
  }
}
