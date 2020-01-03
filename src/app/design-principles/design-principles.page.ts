import { Component, OnInit } from '@angular/core';
import { Principle } from '../models/principle';

@Component({
  selector: 'app-design-principles',
  templateUrl: './design-principles.page.html',
  styleUrls: ['./design-principles.page.scss'],
})
export class DesignPrinciplesPage implements OnInit {
  title: string = 'Design Principles';
  subTitle: string = 'Principles for creating great experience for our customers';
  designPrinciples: Principle[] = [
    {
      title: `ONLY WHAT I NEED, WHEN I NEED IT`,
      message: `Don't overwhelm the user with options or information that
      doesn't enable them to complete the task at hand. They should
      be able to execute this quickly and easily in a logical way`,
      img: `/assets/images/undraw_note_list_etto.svg`
    },
    {
      title: `CONTINUALLY TEST AND LEARN FROM CUSTOMERS`,
      message: `Don't overwhelm the user with options or information that
      doesn't enable them to complete the task at hand. They should
      be able to execute this quickly and easily in a logical way`,
      img: `/assets/images/undraw_mobile_testing_reah.svg`
    },
    {
      title: `DON’T MAKE ME THINK`,
      message: `Even though CCSS and child care can be complex, the content should
      be obvious at a glance and simple to understand and use. Language
      should be easy to understand, layouts and flows logical and clear.`,
      img: `/assets/images/undraw_questions_75e0.svg`
    },
    {
      title: `CONSISTENT USER EXPERIENCE`,
      message: `There is a consistent experience across all products;
      patterns, colours, fonts, components and language.`,
      img: `/assets/images/undraw_posting_photo_v65l.svg`
    },
    {
      title: `WORK FROM ANYWHERE`,
      message: `Remember that our users work with children and aren't sitting
      behind a computer all day. They should have the freedom to
      access the system on different devices anywhere.`,
      img: `/assets/images/undraw_relaxing_at_home_9tyc.svg`
    },
    {
      title: `SPEAK THE CUSTOMERS LANGUAGE`,
      message: `We use domain terms and speak like our customers do. No
      complicated and technical jargon. When unavoidable, provide
      resources to explain what things are.`,
      img: `/assets/images/undraw_back_to_school_inwc.svg`
    },
  ]
  constructor() {


   }

  ngOnInit() {
  }

}
