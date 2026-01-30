import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

   messages = [
    { sent: 'Jan 13, 2026 9:29 AM', subject:  'Application Received'},
    { sent: 'Jan 11, 2026 12:24 PM', subject: 'Requesting documents for Java Position' },
    { sent: 'Jan 7, 2026 8:50 PM', subject: 'You are now in Sourcer Screening' },
    { sent: 'Jan 6, 2026 3:20 PM', subject:'You are now in Tech Interview Round 1'  },
    { sent: 'Jan 5, 2026 10:15 AM', subject: 'HR Discussion Scheduled '}
  ];

  pageSize = 3;
  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.messages.length / this.pageSize);
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  get paginatedMessages() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.messages.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }
}

