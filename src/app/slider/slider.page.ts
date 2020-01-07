import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import toggleScrollButton from "../utils/toggle-scroll-button";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.page.html",
  styleUrls: ["./slider.page.scss"]
})
export class SliderPage implements OnInit {
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  title: string = "Slider";
  slides = [
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    }
  ];
  constructor() {}

  ngOnInit() {}
  onScroll(event: CustomEvent) {
    this.isScrollEnabled = toggleScrollButton(event);
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }
}
