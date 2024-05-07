import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-issue-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './issue-form.component.html',
  styleUrl: './issue-form.component.css',
})
export class IssueFormComponent implements OnChanges{
  // @Input() issue: Issue | null = null;
  @Input() issue = new Issue();

  issueForm = this.fb.group({
    title: [this.issue.title, Validators.required],
    description: [this.issue.description, Validators.required],
    place: [this.issue.place, Validators.required, Validators.pattern('^[0-9]*$')],
    status: [this.issue.status, Validators.required],
  });

  get title() {
    return this.issueForm.get('title');
  }
  get description() {
    return this.issueForm.get('description');
  }
  get place() {
    return this.issueForm.get('place');
  }
  get status() {
    return this.issueForm.get('status');
  }

  ngOnChanges() {
    this.issueForm.patchValue(this.issue);
  }

  constructor(private fb: FormBuilder) {}
}
