import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';
  public name = "Oleh Nahorniak";

  public isRed = true;

  public class = { "red-text" : this.isRed}

 

  printGreeting(): string {
    return 'Hello,' + this.name
  }
}
