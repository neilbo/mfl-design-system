import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import toggleScrollButton from "../utils/toggle-scroll-button";
import { Principle } from "../models/principle";

@Component({
  selector: "app-design-principles",
  templateUrl: "./design-principles.page.html",
  styleUrls: ["./design-principles.page.scss"]
})
export class DesignPrinciplesPage implements OnInit {
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  title: string = "Design Principles";
  subTitle: string =
    "Principles for creating great experience for our customers";
  designPrinciples: Principle[] = [
    {
      title: `ONLY WHAT I NEED, WHEN I NEED IT`,
      message: `Show parents just enough information on every screen to complete the task at hand. 
      Keep text short and concise, clear and to the point. 
      Use visual hierarchy to highlight the most important information.
      `,
      img: `/assets/images/undraw_note_list_etto.svg`
    },
    {
      title: `CONTINUALLY TEST AND LEARN FROM CUSTOMERS`,
      message: `
      Keep colors, components and interaction patterns consistent.
    	Keep language consistent e.g Sign in on one page shouldn’t be Log in on another.
	    Use icons and visual metaphors users already understand.
      `,
      img: `/assets/images/undraw_mobile_testing_reah.svg`
    },
    {
      title: `DON’T MAKE ME THINK`,
      message: `
      Use easy to understand language – 6th grade reading level.
	    Keep actions per screen to a minimum.
	    Use descriptive buttons and icons.
      `,
      img: `/assets/images/undraw_questions_75e0.svg`
    },
    {
      title: `CONSISTENT USER EXPERIENCE`,
      message: `There is a consistent experience across all products;
      patterns, colours, fonts, components and language.`,
      img: `/assets/images/undraw_posting_photo_v65l.svg`
    },
    {
      title: `SPEAK THE CUSTOMERS LANGUAGE`,
      message: `Use terminology consistent with parent experience e.g. A Kindy not Kindergarten.
      Be mindful of QK technical concepts e.g Permanent/ Casual booking vs a booking
      `,
      img: `/assets/images/undraw_back_to_school_inwc.svg`
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
