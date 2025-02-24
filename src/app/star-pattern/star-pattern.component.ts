import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-star-pattern',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './star-pattern.component.html',
  styleUrls: ['./star-pattern.component.css']

  
})
export class StarPatternComponent {
  starCount: number = 5; 
  starPattern: string[] = []; 
  
  generateStarPattern() {
    if (!this.starCount || this.starCount < 1) {
      this.starPattern = []; 
      return;
    }

    this.starPattern = []; 
    const n = this.starCount;

    for (let i = 1; i <= n; i++) {
      this.starPattern.push('*'.repeat(i));
    }
    for (let i = n - 1; i >= 1; i--) {
      this.starPattern.push('*'.repeat(i));
    }

    console.log(this.starPattern);
  }

  


}
