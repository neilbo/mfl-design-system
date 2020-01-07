import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import toggleScrollButton from "../utils/toggle-scroll-button";
import composeIcon, {
  navigationIcons,
  IconItem,
  contactMethodIcons,
  crudIcons,
  utilityIcons
} from "../models/icons";

@Component({
  selector: "app-floating-action-buttons",
  templateUrl: "./floating-action-buttons.page.html",
  styleUrls: ["./floating-action-buttons.page.scss"]
})
export class FloatingActionButtonsPage implements OnInit {
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  title: string = "Floating Action Buttons";
  constructor() {}
  navigationIcons: IconItem[];
  calendarIcons: IconItem[];
  authorisationIcons: IconItem[];
  contactMethodIcons: IconItem[];
  paymentMethodIcons: IconItem[];
  errorStatusIcons: IconItem[];
  bookingStatusIcons: IconItem[];
  crudIcons: IconItem[];
  utilityIcons: IconItem[];
  ngOnInit() {
    const revisedNavigationIcons = navigationIcons.filter(i => {
      return !i.label.includes('home') && 
      !i.label.includes('daily journals') && 
      !i.label.includes('observations') &&
      !i.label.includes('images') &&
      !i.label.includes('payment details') &&
      !i.label.includes('menu')
    });

    this.navigationIcons = composeIcon(revisedNavigationIcons);
    this.contactMethodIcons = composeIcon(contactMethodIcons);
    this.crudIcons = composeIcon(crudIcons);
    this.utilityIcons = composeIcon(utilityIcons);
  }
  onScroll(event: CustomEvent) {
    this.isScrollEnabled = toggleScrollButton(event);
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }
}
