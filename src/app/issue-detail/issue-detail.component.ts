import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue-detail',
  standalone: true,
  imports: [],
  templateUrl: './issue-detail.component.html',
  styleUrl: './issue-detail.component.css',
})
export class IssueDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      const id = parseInt(paramId);
      console.log('Issue id:', id);
    }
  }
}
