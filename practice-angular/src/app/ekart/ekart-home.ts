import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-ekart-home',
    template: `<h1>Welcome to Ekart Home Page</h1>`,
    imports: [RouterOutlet],

})
export class EkartHome { }