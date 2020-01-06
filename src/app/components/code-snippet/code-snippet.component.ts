import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { ToastController } from "@ionic/angular";
import Prism from "prismjs";
// Custom Code Snippet component shared via ComponentsModule
// How to use: import ComponentsModule to module.ts file of page i.e. icons.module.ts
// Themed in global.scss @import "~prismjs/themes/prism-okaidia.css";
@Component({
  selector: "code-snippet",
  template: `
  <pre><code class="language-markup">{{snippet}}</code></pre>
  <button (click)="clickToCopy()" value="Click to copy" class="button--primary">Copy</button>
  `,
  styleUrls: ["./code-snippet.component.scss"]
})
export class CodeSnippetComponent implements OnInit {
  @Input() snippet: string;
  @Output() copyEventEmitter = new EventEmitter();

  constructor(public toastController: ToastController) {}

  ngOnInit() {
    setTimeout(() => Prism.highlightAll(), 0);
  }
 
  clickToCopy(): void {
    this.copyEventEmitter.emit(this.snippet)
    this.copyToClipboard(this.snippet);
    this.presentCopiedToast();
  }

  async presentCopiedToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: `  <ion-icon name="copy"></ion-icon> Copied to Clipboard!`,
      duration: 2500,
      cssClass: "toast-default",
      position: "middle"
    });
    toast.present();
  }

  copyToClipboard(text: string): void {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }
}
