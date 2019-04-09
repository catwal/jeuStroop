import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import * as moment from "moment";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public order1 = [
    { id: "0", item: "jaune", color: "yellow", response: true },
    { id: "1", item: "vert", color: "blue", response: false },
    { id: "2", item: "bleu", color: "red", response: false },
    { id: "3", item: "noir", color: "black", response: true },
    { id: "4", item: "rose", color: "red", response: false }
  ];

  public count: number = 0;
  public items: any;
  public level: number = 1;
  public item: any;
  public score: number = 0;
  public startTime: string;
  public currentTime: string;
  public diffTime: number;
  public recordTime: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController) {
    this.itemRandomly();
    this.resetTime();
  }

  resetTime() {
    this.startTime = moment().format("ss.SSS");
    console.log("resetTime " + this.startTime);
  }

  itemRandomly() {
    this.item = this.order1[Math.floor(Math.random() * this.order1.length)];
    console.log(this.item);
    this.items = this.item;
  }

  onAnswer(event, response) {
    if (event) {
      this.count += 1;
      this.currentTime = moment().format("ss.SSS");
      this.diffTime = +this.currentTime - +this.startTime;
      console.log(this.diffTime);
      this.recordTime.push(this.diffTime);
      console.log(this.recordTime);
      this.resetTime();
    }

    if (response === this.item.response) {
      this.score += 1;
    }
    /* faire un enregistrement des temps et des erreurs
    faire un model avec 0 raté et 1 reussie et les temps associés */
    this.itemRandomly();
  }

  nextTest() {
    /* faire passer à un autre niveau si un score de 10 atteint */
  }
}
