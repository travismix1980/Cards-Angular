import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'I saw this awesome tree during my hike today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mountainLover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'biking1234',
      content: 'I did some biking today',
    },
  ];
}
