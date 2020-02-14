import { Component, OnInit, ViewChild } from '@angular/core';
import toggleScrollButton from "../utils/toggle-scroll-button";
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-spacing',
  templateUrl: './spacing.page.html',
  styleUrls: ['./spacing.page.scss'],
})
export class SpacingPage implements OnInit {
  title: string = `Spacing`;
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  constructor() { }

  ngOnInit() {
  }
  onScroll(event: CustomEvent) {
    this.isScrollEnabled = toggleScrollButton(event);
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }

}
