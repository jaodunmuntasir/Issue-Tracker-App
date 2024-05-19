import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[] = [
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

  constructor() { }

  getIssues(): Issue[] {
    return this.issues;
  }

  getIssueById(id: number): Issue | undefined {
    return this.issues.find((issue) => issue.id === id);
  }

  addIssue(issue: Issue) {
    issue.id = this.issues.length + 1;
    this.issues.push(issue);
  }

  updateIssue(id : number, issue: Issue) {
    issue.id = id;
    const _issue = this.getIssueById(issue.id);

    if (_issue) {
      Object.assign(_issue, issue);
    }
  }
}
