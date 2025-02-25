import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isOpen = false; // สถานะของ Sidebar

  toggleSidebar() {
    this.isOpen = !this.isOpen; // เปลี่ยนสถานะการเปิดหรือปิด Sidebar
  }
}