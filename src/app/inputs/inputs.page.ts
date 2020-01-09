import { Component, OnInit, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";
import toggleScrollButton from "../utils/toggle-scroll-button";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {
  isScrollEnabled: boolean = false;
  @ViewChild(IonContent, { static: true }) content: IonContent;
  title: string = 'Inputs';
  dummyForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.dummyForm = this.formBuilder.group({
      input1: ['', ValidationService.isRequired],
      input2: ['', ValidationService.isRequired],
    });
  }

  ngOnInit() {
  }
  onScroll(event: CustomEvent) {
    this.isScrollEnabled = toggleScrollButton(event);
  }

  scrollToTop() {
    this.content.scrollToTop(300);
  }

}
