import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status-filter',
  standalone: true,
  imports: [],
  templateUrl: './status-filter.component.html',
  styleUrl: './status-filter.component.css'
})
export class StatusFilterComponent {
  @Input() status = 'All';
  @Output() statusChange = new EventEmitter<string>();

  changeStatus(status: string) {
    // this.status = status;
    this.statusChange.emit(status);
  }
}
