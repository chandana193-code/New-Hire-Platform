import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

   messages:any = []

  constructor(private service: MessageService) {}

  ngOnInit(): void{
    this.getdata()
    this.messages.reset
  }

  getdata(){
    this.service.get().subscribe((response)=>{
      this.messages=response
    })

  };


// Pagination
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