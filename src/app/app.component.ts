import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from './services/newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cowin-app';

  readonly VAPID_PUBLIC_KEY = "BKIRcLVVlfUgcaYUPM3xq-BSOrsQmiBxY0IObQ5yb9LcgtvTZNxK-7xVuQ5IrN222DSlrhnMqlNw2Qs7r7-N7Cc";

  center = {
    "centers": [
      {
        "center_id": 574616, "name": "Jejuri RH Local 18 To 44 Only", "address": "Rural Hospital Jejuri", "state_name": "Maharashtra", "district_name": "Pune", "block_name": "Purandar", "pincode": 412303, "lat": 18, "long": 74, "from": "10:00:00", "to": "14:00:00", "fee_type": "Free",
        "sessions": [
          {
            "session_id": "2d0be6c3-5891-4feb-8cda-95abd2d81ebb", "date": "06-05-2021", "available_capacity": 0, "min_age_limit": 18, "vaccine": "COVISHIELD", "slots":
              ["10:00AM-11:00AM", "11:00AM-12:00PM", "12:00PM-01:00PM", "01:00PM-02:00PM"]
          }]
      }]
  }

  constructor(private swPush: SwPush,
    private newsletterService: NewsletterService) {

  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => console.log(sub))//this.newsletterService.addPushSubscriber(sub).subscribe())
    .catch(err => console.error("Could not subscribe to notifications", err));

  }
}
