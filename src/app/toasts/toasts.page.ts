import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import toggleScrollButton from "../utils/toggle-scroll-button";
import { ToastService } from "../toast.service";

@Component({
  selector: "app-toasts",
  templateUrl: "./toasts.page.html",
  styleUrls: ["./toasts.page.scss"]
})
export class ToastsPage implements OnInit {
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  title: string = "Toasts";
  description: string;
  constructor(public toastService: ToastService) {}

  ngOnInit() {
    this.description = `Toasts are primarily used for Successful messaging. Currently the My Family Lounge app does not support Toasts so there is a current affordance to use a Success Alert in the meantime.
    Should be placed on the ${this.toastService.position} of the screen.
    Should be dismissable by default.
    Can be used to Undo actions.`;
  }

  presentToast() {
    this.toastService.presentToast();
  }

  presentToastWithOptions() {
    this.toastService.presentToastWithOptions();
  }
  onScroll(event: CustomEvent) {
    this.isScrollEnabled = toggleScrollButton(event);
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }
}
