import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './default.html',
  styleUrl: './default.scss',
})
export class Default {

}
