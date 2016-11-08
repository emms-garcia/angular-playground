import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
    .redBorder {
        border: 1px solid red;
    }
  `]
})
export class DatabindingComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;

  onClicked(value: string) {
    alert(value);
  }

  onTest () {
    return true;
  }
}
