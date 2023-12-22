import { Component } from '@angular/core';
import { SimplicityEmbed } from '@simplicitywebtools/simplicity-embed-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simplicity-embed-angular-module-example';
  seSetup = "http://localhost:5500/config.json";
  private sembed: SimplicityEmbed | null = null;
  openSimplicityEmbed() {
    this.sembed?.open();
  }
  closeSimplicityEmbed() {
    this.sembed?.close();
  }
  sendCommand() {
    const sendObj = {
      "action": "spin"
    }
    this.sembed?.sendMessage(sendObj);
  }
  changeConfig() {
    this.seSetup = "http://localhost:5500/config2.json";
  }
  handleNotify(event: Event) {
    const customEvent = event as CustomEvent<any>;
    console.log("I received a notify event");
    console.log(customEvent.detail);
  }
  ngOnInit() {
    this.sembed = document.getElementById("simplicity") as any;
  }
}
