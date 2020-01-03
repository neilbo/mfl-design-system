import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { ToastOptions } from '@ionic/core';

@Component({
  selector: "app-toasts",
  templateUrl: "./toasts.page.html",
  styleUrls: ["./toasts.page.scss"]
})
export class ToastsPage implements OnInit {
  title: string = "Toasts";
  position: ToastOptions['position'] = "bottom";
  description: string;
  constructor(public toastController: ToastController) {}

  ngOnInit() {
    this.description = `Toasts are primarily used for Successful messaging. Currently the My Family Lounge app does not support Toasts so there is a current affordance to use a Success Alert in the meantime.
    Should be placed on the ${this.position} of the screen.
    Should be dismissable by default.
    Can be used to Undo actions.`
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: `Your settings have been saved.`,
      duration: 2500,
      cssClass: "toast-default",
      position: this.position,
      buttons: [
        {
          side: "end",
          icon: "checkmark-circle",
          text: "OK",
          role: "cancel",
          handler: () => {
            console.log("UNDO clicked");
          }
        }
      ]
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      // header: "Toast header",
      message: `You changed something that can be undone within a few seconds.`,
      duration: 5000,
      position: this.position,
      buttons: [
        {
          side: "end",
          icon: "undo",
          text: "UNDO",
          role: "cancel",
          handler: () => {
            console.log("UNDO clicked");
          }
        }
      ],
      cssClass: "toast-options"
    });
    toast.present();
  }
}
