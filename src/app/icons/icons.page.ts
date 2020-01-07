import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import toggleScrollButton from "../utils/toggle-scroll-button";
import { Principle } from "../models/principle";
import composeIconList, {
  IconItem,
  navigationIcons,
  crudIcons,
  bookingStatusIcons,
  errorStatusIcons,
  paymentMethodIcons,
  contactMethodIcons,
  authorisationIcons,
  calendarIcons,
  utilityIcons
} from "../models/icons";
import { ToastService } from "../toast.service";
import copyToClipboard from "../utils/copy-to-clipboard";

@Component({
  selector: "app-icons",
  templateUrl: "./icons.page.html",
  styleUrls: ["./icons.page.scss"]
})
export class IconsPage implements OnInit {
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  title: string = "Icons";
  iconPrinciples: Principle[] = [
    {
      title: `ADDITIVE`,
      message: `By and large, icons should be used with text.`,
      img: `/assets/images/undraw_add_file_4gfw.svg`
    },
    {
      title: `SPECIFIC`,
      message: `Icons should have specific meaning, and be used to relay that meaning.`,
      img: `/assets/images/undraw_target_kriv.svg`
    },
    {
      title: `FUNCTIONAL`,
      message: `Icons should be in service of a user action. Icons should not be decorative.`,
      img: `/assets/images/undraw_done_a34v.svg`
    }
  ];

  navigationIcons: IconItem[];
  authorisationIcons: IconItem[];
  contactMethodIcons: IconItem[];
  paymentMethodIcons: IconItem[];
  errorStatusIcons: IconItem[];
  bookingStatusIcons: IconItem[];
  crudIcons: IconItem[];
  calendarIcons: IconItem[];
  utilityIcons: IconItem[];
  constructor(public toastService: ToastService) {}

  ngOnInit() {
    // https://github.com/FortAwesome/angular-fontawesome/blob/HEAD/docs/usage/icon-library.md#using-the-icon-library
    this.navigationIcons = composeIconList(navigationIcons);
    this.calendarIcons = composeIconList(calendarIcons);
    this.authorisationIcons = composeIconList(authorisationIcons);
    this.contactMethodIcons = composeIconList(contactMethodIcons);
    this.paymentMethodIcons = composeIconList(paymentMethodIcons);
    this.errorStatusIcons = composeIconList(errorStatusIcons);
    this.bookingStatusIcons = composeIconList(bookingStatusIcons);
    this.crudIcons = composeIconList(crudIcons);
    this.utilityIcons = composeIconList(utilityIcons);
  }

  onScroll(event: CustomEvent) {
    this.isScrollEnabled = toggleScrollButton(event);
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }

  copyToClipboard(iconName: string) {
    copyToClipboard(iconName);
    this.toastService.presentCopiedToastWithValue(iconName);
  }
}
