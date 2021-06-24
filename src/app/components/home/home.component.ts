import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <hr>
    <app-css></app-css>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam natus laboriosam ad culpa? Cum, officia deserunt! Officia quidem quos dicta praesentium vero ipsum illum at voluptate asperiores explicabo. Dolorem, unde!</p>
    <hr>

    <app-clases></app-clases>
    <hr>

    <p [appResaltado]="'orange'">
      Hola Mundo - P
    </p>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
