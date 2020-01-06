import { Component, OnInit } from "@angular/core";
import copyToClipboard from "src/app/utils/copy-to-clipboard";
import { ToastService } from "../toast.service";

@Component({
  selector: "app-colours",
  templateUrl: "./colours.page.html",
  styleUrls: ["./colours.page.scss"]
})
export class ColoursPage implements OnInit {
  title: string = "Colours";
  brand = [
    {
      name: "primary",
      hex: "#47b75b",
      description: `'Nuff Said`
    },
    {
      name: "accent",
      hex: "#4f007d",
      description: "Use sparingly"
    }
  ];
  base = [
    {
      name: "success",
      hex: "#47b75b",
      description: `Use for constructive and positive`
    },
    {
      name: "info",
      hex: "#2f6ca0",
      description: `Use for information`
    },
    {
      name: "warning",
      hex: "#ff9700",
      description: `Use for warnings`
    },
    {
      name: "danger",
      hex: "#db3832",
      description: `Use for destructive and negative`
    },
    {
      name: "light (graypale)",
      hex: "#f4f4f4",
      description: `Use for page background`
    },
    {
      name: "medium (charcoal)",
      hex: "#707070"
    },
    {
      name: "dark",
      hex: "#000000"
    }
  ];

  primary = [
    {
      name: "Primary Text on White Background",
      className: "primary-on-white",
      foregroundHex: "#338441",
      bgHex: "#ffffff",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "Primary Text on Light Background",
      className: "primary-on-light",
      foregroundHex: "#317D3C",
      bgHex: "#f4f4f4",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "White Text on Primary Background",
      className: "white-on-primary",
      foregroundHex: "#ffffff",
      bgHex: "#40A551",
      description: `Default Contrast Min Ratio 3:1`,
      clipboardColour: `bgHex`
    },
    {
      name: "Variation Text on Primary Background",
      className: "variation-on-primary",
      foregroundHex: "#004200",
      bgHex: "#47b75b",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    }
  ];
  accent = [
    {
      name: "Accent Text on White Background",
      className: "accent-on-white",
      foregroundHex: "#4F007D",
      bgHex: "#ffffff",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "Accent Text on Light Background",
      className: "accent-on-light",
      foregroundHex: "#4F007D",
      bgHex: "#f4f4f4",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "White Text on accent Background",
      className: "white-on-accent",
      foregroundHex: "#ffffff",
      bgHex: "#4F007D",
      description: `Default Contrast Min Ratio 3:1`,
      clipboardColour: `bgHex`
    },
    {
      name: "Variation Text on Accent Background",
      className: "variation-on-accent",
      foregroundHex: "#C77AF4",
      bgHex: "#4F007D",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    }
  ];
  info = [
    {
      name: "Info Text on White Background",
      className: "info-on-white",
      foregroundHex: "#2f6ca0",
      bgHex: "#ffffff",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "Info Text on Light Background",
      className: "info-on-light",
      foregroundHex: "#2f6ca0",
      bgHex: "#f4f4f4",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "White Text on Info Background",
      className: "white-on-info",
      foregroundHex: "#ffffff",
      bgHex: "#2f6ca0",
      description: `Default Contrast Min Ratio 3:1`,
      clipboardColour: `bgHex`
    },
    {
      name: "Variation Text on Info Background",
      className: "variation-on-info",
      foregroundHex: "#bef1ff",
      bgHex: "#4F007D",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    }
  ];

  warning = [
    {
      name: "Warning Text on White Background",
      className: "warning-on-white",
      foregroundHex: "#A86500",
      bgHex: "#ffffff",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "Warning Text on Light Background",
      className: "warning-on-light",
      foregroundHex: "#9E5F00",
      bgHex: "#f4f4f4",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "White Text on Warning Background",
      className: "white-on-warning",
      foregroundHex: "#ffffff",
      bgHex: "#A86500",
      description: `Default Contrast Min Ratio 3:1`,
      clipboardColour: `bgHex`
    },
    {
      name: "Variation Text on Warning Background",
      className: "variation-on-warning",
      foregroundHex: "#782800",
      bgHex: "#ff9700",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    }
  ];

  danger = [
    {
      name: "Danger Text on White Background",
      className: "danger-on-white",
      foregroundHex: "#db3832",
      bgHex: "#ffffff",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "Danger Text on Light Background",
      className: "danger-on-light",
      foregroundHex: "#D42B25",
      bgHex: "#f4f4f4",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    },
    {
      name: "White Text on Danger Background",
      className: "white-on-danger",
      foregroundHex: "#ffffff",
      bgHex: "#db3832",
      description: `Default Contrast Min Ratio 3:1`,
      clipboardColour: `bgHex`
    },
    {
      name: "Variation Text on danger Background",
      className: "variation-on-danger",
      foregroundHex: "#110000",
      bgHex: "#db3832",
      description: `Default Contrast Min Ratio 4.5:1`,
      clipboardColour: `foregroundHex`
    }
  ];

  constructor(public toastService: ToastService) {}

  async presentPopover() {
    const popoverElement = Object.assign(
      document.createElement("ion-popover"),
      {
        component: "profile-page",
        event: event
      }
    );
    document.body.appendChild(popoverElement);
    return await popoverElement.present();
  }

  ngOnInit() {}

  copyColour(hexCode: string): void {
    copyToClipboard(hexCode);
    this.toastService.presentCopiedToastWithValue(hexCode);
  }

  copyColourPair(colour): void {
    const keyOfInterest: string = colour.clipboardColour;
    this.copyColour(colour[keyOfInterest]);
  }

  // https://webaim.org/resources/contrastchecker/
  // https://learnui.design/tools/accessible-color-generator.html?colors=47b75b,ff9700,db3832,4f007d,2f6ca0,000000,707070,bec0c2,e0e0e0,ffffff,f4f4f4,e6cf01,ffee00
}
