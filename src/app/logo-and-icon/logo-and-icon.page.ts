import { Component, OnInit } from '@angular/core';
import { Principle } from '../models/principle';

@Component({
  selector: 'app-logo-and-icon',
  templateUrl: './logo-and-icon.page.html',
  styleUrls: ['./logo-and-icon.page.scss'],
})
export class LogoAndIconPage implements OnInit {
  title: string = 'Logo and Icon';
  assets: Principle[] = [
      // {
      //   title: `LOGO`,
      //   message: ``,
      //   img: `/assets/images/branding/Logo (1).png`
      // },
      {
        title: `Logo`,
        message: ``,
        img: `/assets/images/branding/Logo.png`
      },
      // {
      //   title: `LOGO`,
      //   message: ``,
      //   img: `/assets/images/branding/My Family Lounge Logo with white lining around green.png`
      // },
      {
        title: `Logo`,
        message: ``,
        img: `/assets/images/branding/My Family Lounge Logo.png`
      },
      // {
      //   title: `LOGO`,
      //   message: ``,
      //   img: `/assets/images/branding/My Family Lounge Registered Logo symbol bottom right GIF.gif`
      // },
      // {
      //   title: `LOGO`,
      //   message: ``,
      //   img: `/assets/images/branding/My Family Lounge Registered Logo symbol top right GIF.gif`
      // },
      // {
      //   title: `LOGO`,
      //   message: `asdfasdfsdf`,
      //   img: `/assets/images/branding/logo-mfl-001.png`
      // },
      // {
      //   title: `LOGO`,
      //   message: `asdfasdfsdf`,
      //   img: `/assets/images/branding/mfl-icon-removebg-preview (1).gif`
      // },
      // {
      //   title: `LOGO`,
      //   message: `asdfasdfsdf`,
      //   img: `/assets/images/branding/mfl-icon-removebg-preview.gif`
      // },
      // {
      //   title: `LOGO`,
      //   message: `asdfasdfsdf`,
      //   img: `/assets/images/branding/mfl-icon-removebg-preview.png`
      // },
      {
        title: `Icon`,
        message: ``,
        img: `/assets/images/branding/mfl-icon.jpg`
      },
      // {
      //   title: `LOGO`,
      //   message: `asdfasdfsdf`,
      //   img: `/assets/images/branding/mfl-logo.png`
      // },
      // {
      //   title: `LOGO`,
      //   message: `asdfasdfsdf`,
      //   img: `/assets/images/branding/mfl-splat-001.jpg`
      // },
      // {
      //   title: `LOGO`,
      //   message: `asdfasdfsdf`,
      //   img: `/assets/images/branding/my-family-logo.png`
      // },
  ];

  constructor() { }

  ngOnInit() {
  }
}
