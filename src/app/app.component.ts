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
      content: 'I saw this awesome tree today',
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
    {
      title: 'spaceships',
      imageUrl:
        'https://wallup.net/wp-content/uploads/2019/09/07/169150-eve-online-sci-fi-game-spaceship-748x421.jpg',
      username: 'EveFan07',
      content: 'A dreadnaught from Eve Online',
    },
  ];
}
