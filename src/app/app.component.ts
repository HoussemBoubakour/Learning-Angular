import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle : string = 'Test1';
  products : any[] = [
  {
    "productId" : 1 ,
    "productName" : "Ball",
    "productCode" : "123",
    "releaseDate" : "31-03-2020",
    "description" : "A ball of basket, orange",
    "price" : 35.99 ,
    "starRating" : 4.2,
    "imageUrl" : "assets\images\ball.png"
  },

  {
    "productId" : 2 ,
    "productName" : "Jersey",
    "productCode" : "456",
    "releaseDate" : "29-03-2020",
    "description" : "A jersey of an esport team (TeamLiquid)",
    "price" : 79.99 ,
    "starRating" : 4.5,
    "imageUrl" : "assets\images\jersey.png"
  }


  ];
}
