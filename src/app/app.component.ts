import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Page } from './models/page';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  title: string = "My Family Lounge DSL";
  styleguidePages: Page[] = [
    {
      title: "about",
      url: "/about",
      order: 1
    },
    {
      title: "design principles",
      url: "/design-principles",
      order: 2
    },
    {
      title: "colours",
      url: "/colours",
      order: 3
    },
    {
      title: "icons",
      url: "/icons",
      order: 4
    },
    {
      title: "illustrations",
      url: "/illustrations",
      order: 5
    },
    {
      title: "logo and icon",
      url: "/logo-and-icon",
      order: 6
    },
    {
      title: "typography",
      url: "/typography",
      order: 7
    },
    {
      title: "voice and tone",
      url: "/voice-and-tone",
      order: 8
    },
  ];
  
  componentPages: Page[] = [
    {
      title: "inputs",
      url: "/inputs"
    },
    {
      title: "lists",
      url: "/list"
    },
    {
      title: "chips",
      url: "/chip"
    },
    {
      title: "buttons",
      url: "/buttons"
    },
    {
      title: "cards",
      url: "/card"
    },
    {
      title: "segments",
      url: "/segments"
    },
    {
      title: "slider",
      url: "/slider"
    },
    {
      title: "alerts",
      url: "/alerts"
    },
    {
      title: "toasts",
      url: "/toasts"
    },
    {
      title: "Loading Spinner",
      url: "/loading-spinner"
    },
    {
      title: "floating action buttons",
      url: "/floating-action-buttons"
    }
  ];

  patternPages: Page[] = [
    {
      title: "forms",
      url: "/forms"
    },
    {
      title: "card: payment method",
      url: "/payment-method-card"
    },
    {
      title: "card: authorisations",
      url: "/authorisation-card"
    },
    {
      title: "card: contact",
      url: "/contact-card"
    },
    {
      title: "card: child",
      url: "/child-card"
    },
    {
      title: "card: centre",
      url: "/centre-card"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sortPages();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sortPages() {
    this.componentPages = this.componentPages.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    this.patternPages = this.patternPages.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    this.styleguidePages = this.styleguidePages.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );
  }
}
