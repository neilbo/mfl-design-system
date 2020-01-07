import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import toggleScrollButton from "../utils/toggle-scroll-button";
import { Principle } from "../models/principle";

@Component({
  selector: "app-voice-and-tone",
  templateUrl: "./voice-and-tone.page.html",
  styleUrls: ["./voice-and-tone.page.scss"]
})
export class VoiceAndTonePage implements OnInit {
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  title: string = "Voice and Tone";
  subtitle: string =
    "The personality, attitude and context in which we express this key message";
  principles: Principle[] = [
    {
      title: `Family first, centre second`,
      message: `Think of families and the love and care they share. It's warm and genuine. This is the same feeling services want to portray to their families. Talke about My Family Lounge as though you're speaking of your family and the great benefits they have. Terad lightly when expressing views from a "business" and "centre" standpoint.`,
      img: `/assets/images/undraw_play_time_7k7b.svg`
    },
    {
      title: `Connecting and conversational`,
      message: `The parent portal does bridge a agap between services, children and families throughout the day (especially sesing children's learning and photos) but it does not replace parent-educator conversations, and it shouldn't. Be clear on the features it has and the features that it doesn't, and teh decisions why. E.g. If a parent sees an incident report before having a converstation woth the Educator it could cause more panic than resolution.`,
      img: `/assets/images/undraw_begin_chat_c6pj.svg`
    },
    {
      title: `Sharing, not annoying`,
      message: `Families can share in their child's learning journey without making hte child care workers feel oblidged to interact with parents online. It acts as inspiration to to initiate conversation`,
      img: `/assets/images/undraw_organize_photos_d5nr.svg`
    },
    {
      title: `Helpful, not greedy`,
      message: `My Family Lounge helps families so that centres do not have to manage tedious tasks. It's not used as a selling platform because it doesn't cost the parent anything. The results benefit the centre as it increases parent satisfaction and potential occupancy.`,
      img: `/assets/images/undraw_multitasking_hqg3.svg`
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
