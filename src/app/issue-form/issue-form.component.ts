// import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { Issue } from '../issue';
// import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { JsonPipe } from '@angular/common';

// @Component({
//   selector: 'app-issue-form',
//   standalone: true,
//   imports: [ReactiveFormsModule, JsonPipe],
//   templateUrl: './issue-form.component.html',
//   styleUrl: './issue-form.component.css',
// })

// export class IssueFormComponent implements OnChanges{
//   // @Input() issue: Issue | null = null;
//   @Input() issue = new Issue();

//   issueForm = this.fb.group({
//     title: ['', Validators.required],
//     description: ['', Validators.required],
//     place: ['', Validators.required, Validators.pattern('^[0-9]*$')],
//     status: ['', Validators.required],
//   });

//   ngOnChanges() {
//     this.issueForm.patchValue(this.issue);
//   }

//   // ngOnInit() {
//   //   this.issueForm.patchValue(this.issue);
//   // }

//   get title() {
//     return this.issueForm.get('title');
//   }
//   get description() {
//     return this.issueForm.get('description');
//   }
//   get place() {
//     return this.issueForm.get('place');
//   }
//   get status() {
//     return this.issueForm.get('status');
//   }

//   constructor(private fb: FormBuilder) {}
// }

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './issue-form.component.html',
  styleUrl: './issue-form.component.css',
})
export class IssueFormComponent implements OnChanges {
  @Input() issue: Issue | null = null;

  issueForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    place: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    status: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['issue'] && this.issue) {
      this.updateFormValues(this.issue);
    }
  }

  updateFormValues(issue: Issue) {
    this.issueForm.patchValue({
      title: issue.title,
      description: issue.description,
      place: issue.place,
      status: issue.status,
    });
  }

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
}
