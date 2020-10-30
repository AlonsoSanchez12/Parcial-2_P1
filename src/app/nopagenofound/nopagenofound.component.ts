import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagenofound',
  templateUrl: './nopagenofound.component.html',
  styleUrls: [ './nopagenofound.component.css'
  ]
})
export class NopagenofoundComponent  {

  constructor() { }

  year = new Date().getFullYear();
}
