import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { ToastOptions } from "@ionic/core";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  constructor(public toastController: ToastController) {}
  position: ToastOptions["position"] = "bottom";

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

  async presentCopiedToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: `  <ion-icon name="copy"></ion-icon> Copied to Clipboard!`,
      duration: 2500,
      cssClass: "toast-default",
      position: this.position
    });
    toast.present();
  }

  async presentCopiedToastWithValue(value: string): Promise<void> {
    const toast = await this.toastController.create({
      message: `  <ion-icon name="copy"></ion-icon> Copied <strong>${value}</strong> to Clipboard!`,
      duration: 2500,
      cssClass: "toast-default",
      position: this.position
    });
    toast.present();
  }
}
