import { Component, ViewChild } from "@angular/core";
import { NavController, ModalController, IonicPage } from "ionic-angular";
import * as moment from "moment";
import { responsesTimes } from "../../models/responses";
import { ModalPage } from '../modal/modal';
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public order1 = [
    { id: "0", item: "jaune", color: "yellow", response: true },
    { id: "1", item: "jaune", color: "red", response: false },
    { id: "2", item: "jaune", color: "blue", response: false },
    { id: "3", item: "jaune", color: "black", response: false },
    { id: "4", item: "jaune", color: "green", response: false },
    { id: "5", item: "vert", color: "green", response: true },
    { id: "6", item: "vert", color: "yellow", response: false },
    { id: "7", item: "vert", color: "red", response: false },
    { id: "8", item: "vert", color: "blue", response: false },
    { id: "9", item: "vert", color: "black", response: false }, //
    { id: "10", item: "bleu", color: "blue", response: true },
    { id: "11", item: "bleu", color: "yellow", response: false },
    { id: "12", item: "bleu", color: "red", response: false },
    { id: "13", item: "bleu", color: "black", response: false },
    { id: "14", item: "bleu", color: "green", response: false },
    { id: "15", item: "noir", color: "black", response: true }, //
    { id: "16", item: "noir", color: "yellow", response: false },
    { id: "17", item: "noir", color: "red", response: false },
    { id: "18", item: "noir", color: "green", response: false },
    { id: "19", item: "noir", color: "blue", response: false },
    { id: "20", item: "rouge", color: "red", response: true },
    { id: "21", item: "rouge", color: "blue", response: false },
    { id: "22", item: "rouge", color: "black", response: false },
    { id: "23", item: "rouge", color: "green", response: false },
    { id: "24", item: "rouge", color: "yellow", response: false }
  ];

  public count: number = 0;
  public items: any;
  public level: number = 1;
  public item: any;
  public score: number = 0;
  public startTime: any;
  public currentTime: any;
  public diffTime: number;
  public recordTime: Array<responsesTimes> = new Array<responsesTimes>();
  public element: HTMLElement;
  public countdownNumberEl: any;
  public countdown: Number = 60;
  public icons: number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.itemRandomly();
    this.resetTime();
    // this.clockTimer();
  }

  ionViewDidEnter() {
    this.countdownNumberEl = document.getElementById("countdownNumber");
    console.log(document.getElementById("countdownNumber"));
    this.countdownNumberEl.textContent = this.countdown;
    this.clockTimer();
  }

  clockTimer() {
    var countdown = 5;

    setInterval(function () {
      countdown = --countdown; /* <= 0 ? 60 : countdown; */
      if (countdown >= 0) {
        this.countdownNumberEl = document.getElementById("countdownNumber");
        this.countdownNumberEl.textContent = countdown;
      } else if (countdown === -1) {
        //quand counting fini modal avec les taux et resultats
        // Modal ou navigation de page
      }
    }, 1000);

  }

  chgmtPage() {
    this.navCtrl.push(ModalPage);
  }

  itemRandomly() {
    this.item = this.order1[Math.floor(Math.random() * this.order1.length)];
    console.log(this.item);
    this.items = this.item;
  }

  /* itemRandomlyStepTwo(){
    this.level = 2;
    this.item = this.order1[Math.floor(Math.random() * this.order2.length)];
    console.log(this.item);
    this.items = this.item;
  } */

  resetTime() {
    this.startTime = moment();
    console.log("resetTime " + this.startTime);
  }

  onAnswer(event, response) {
    if (event) {
      this.count += 1;
      this.currentTime = moment();
      console.log("currentTime " + this.currentTime);
      var duration = moment.duration(this.currentTime.diff(this.startTime));
      console.log("duration in ms " + duration.as("seconds"));
      this.diffTime = duration.as("seconds");
      console.log("difftime " + this.diffTime);
    }

    if (response === this.item.response) {
      console.log("la reponse est " + response + " et correspond à " + this.item.response);

      this.score += 1;
      let accuracy = true;
      this.icons = 1;
      this.recordingScore(accuracy, this.diffTime);
    } else {
      let accuracy = false;
      this.icons = 0;
      this.recordingScore(accuracy, this.diffTime);
    }

    this.resetTime();
    this.itemRandomly();

  }


  recordingScore(response, time) {
    let record = { accuracy: response, timeUser: time };
    this.recordTime.push(record);
    console.log(this.recordTime);
  }



  nextTest() {
    /* faire passer à un autre niveau si un score de 10 atteint */
  }
}
