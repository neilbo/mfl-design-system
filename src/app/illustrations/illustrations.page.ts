import { Component, OnInit } from '@angular/core';
import { Principle } from '../models/principle';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.page.html',
  styleUrls: ['./illustrations.page.scss'],
})
export class IllustrationsPage implements OnInit {
  title: string = 'Illustrations';
  exampleImages = [
    { src: `/assets/images/dsm-mfl-illustrations/add a centre.png`},
    { src: `/assets/images/dsm-mfl-illustrations/add another centre.png`},
    { src: `/assets/images/dsm-mfl-illustrations/error payment details.png`},
    { src: `/assets/images/dsm-mfl-illustrations/onboarding_1_intro.png`},
    { src: `/assets/images/dsm-mfl-illustrations/onboarding_1_track_childs_progress.png`},
    { src: `/assets/images/dsm-mfl-illustrations/onboarding_3_bookings.png`},
    { src: `/assets/images/dsm-mfl-illustrations/onboarding_4_payment_details.png`},
    { src: `/assets/images/dsm-mfl-illustrations/unable to add centre (enrol).png`},
  ];

  illustrationPrinciples = [
    {
      title: `Why illustration, why now?`,
      message: [
        'When designing, sometimes an icon just doesn’t cut it',
        'Illustrations can help visualize challenging concepts',
        'Consistency - one illustrative style across the entire product',
      ],
      img: `/assets/images/undraw_posting_photo_v65l.svg`
    },
    {
      title: `What do we want from illustrations in the product?`,
      message: [
        'To help to communicate with the customer at important times.',
        'To fit seamlessly with the tone of the copy.',
        'To add an element of joy or playfulness into the product.',
        'To be a reflection of the brands values and style.',
        'To be consistent across the entire product.',
      ],
      img: `/assets/images/undraw_art_museum_8or4.svg`
    },
    {
      title: `What do we want to avoid?`,
      message: [
        'To be overused to the point of annoyance.',
        'To overpower the UI and cause confusion.',
        'To cheapen the brand.',
      ],
      img: `/assets/images/undraw_cancel_u1it.svg`
    },
  ] 
  constructor() { }

  ngOnInit() {
  }

}
