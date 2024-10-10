import { Component, input } from "@angular/core";

@Component({
  selector: "app-component-one",
  standalone: true,
  imports: [],
  template: ` <p>This is an input: {{ name() }}</p> `,
  styles: ``,
})
export class ComponentOneComponent {
  name = input<string>();
}
