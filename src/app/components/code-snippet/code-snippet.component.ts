import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Prism from "prismjs";
import copyToClipboard from "src/app/utils/copy-to-clipboard";
import { ToastService } from "src/app/toast.service";
// Custom Code Snippet component shared via ComponentsModule
// How to use: import ComponentsModule to module.ts file of page i.e. icons.module.ts
// Themed in global.scss @import "~prismjs/themes/prism-okaidia.css";
@Component({
  selector: "code-snippet",
  template: `
    <div class="code-snippet-container">
      <pre><code class="language-markup">{{snippet}}</code></pre>
      <button ion-button (click)="clickToCopy()" value="Click to copy" class="button-copy">
        <ion-icon name="clipboard"></ion-icon>
         Copy
      </button>
    </div>
  `,
  styleUrls: ["./code-snippet.component.scss"]
})
export class CodeSnippetComponent implements OnInit {
  @Input() snippet: string;
  @Output() copyEventEmitter = new EventEmitter();

  constructor(public toastService: ToastService) {}

  ngOnInit() {
    setTimeout(() => Prism.highlightAll(), 0);
  }

  clickToCopy(): void {
    this.copyEventEmitter.emit(this.snippet);
    copyToClipboard(this.snippet);
    this.toastService.presentCopiedToast();
  }
}
