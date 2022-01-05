import { Component, OnInit } from '@angular/core';
import { onLoad } from 'src/app/shared/models/animations/toggle.animation';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  animations: [onLoad]
})
export class HomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
