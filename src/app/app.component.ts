import { NgComponentOutlet } from "@angular/common";
import { Component } from "@angular/core";

const ComponentOne = () =>
  import("./shared/components/component-one/component-one.component").then(
    (c) => c.ComponentOneComponent
  );

const ComponentTwo = () =>
  import("./shared/components/component-two/component-two.component").then(
    (c) => c.ComponentTwoComponent
  );

const ComponentMap: Record<string, any> = {
  DynamicOne: { component: ComponentOne, inputs: { name: "John" } },
  DynamicTwo: { component: ComponentTwo },
};

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <p [innerHTML]="title">Loading...</p>

    <button type="button" (click)="loadComponentByName('DynamicOne')">
      Component 1
    </button>

    <button type="button" (click)="loadComponentByName('DynamicTwo')">
      Component 2
    </button>

    <div>
      @if (component) {
      <ng-template
        [ngComponentOutlet]="component"
        [ngComponentOutletInputs]="component.inputs"
      ></ng-template>
      }
    </div>
  `,
  styles: `* {font-family: sans-serif}`,
})
export class AppComponent {
  title =
    "Click on any button bellow to load components dynamically! <br> Check the network tab to see the JS file loading only when you click on it!";

  component: any = null;

  async loadComponentByName(name: string) {
    const entry = ComponentMap[name];

    if (!entry) return;

    this.component = await entry.component();
  }
}
