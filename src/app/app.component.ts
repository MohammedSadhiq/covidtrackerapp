import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidStatApp';

  isToggled: boolean = false;

  toggle(){
    this.isToggled = !this.isToggled;
  }

}
