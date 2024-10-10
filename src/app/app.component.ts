import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p [innerHTML]="title">Loading...</p>

    <button type="button">Component 1</button>

    <button type="button">Component 2</button>

    <router-outlet />
  `,
  styles: `* {font-family: sans-serif}`,
})
export class AppComponent {
  title =
    "Click on any button bellow to load components dynamically! <br> Check the network tab to see the JS file loading only when you click on it!";
}
