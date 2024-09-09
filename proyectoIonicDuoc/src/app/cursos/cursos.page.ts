import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage   
 implements OnInit {

  items:   
 any[] = [];
  totalItems: number = 10; // Adjust this to your desired limit
  hasMoreData: boolean = true;

  constructor() {}

  ngOnInit() {
    this.GetItems();
  }

  private GetItems(startIndex = 0, limit = 10) {
    const newItems = []; // Create an empty array to store new items
    const endIndex = startIndex + limit;

    // Simulate fetching data from a backend (replace with your actual logic)
    for (let i = startIndex; i < endIndex && i < this.totalItems; i++) {
      newItems.push(`Item ${i + 1}`); // Adjust the item content as needed
    }

    this.items.push(...newItems); // Add new items to the existing list

    // Check if all items have been loaded
    this.hasMoreData = this.items.length < this.totalItems;
  }

  ionInfiniteScroll(ev: InfiniteScrollCustomEvent) {
    const startIndex = this.items.length; // Start loading from the end of the current list

    this.GetItems(startIndex); // Load more items

    setTimeout(() => {
      ev.target.complete(); // Let Ionic know data has been loaded
    }, 1000); // Simulate a delay for a more realistic loading experience
  }
}
