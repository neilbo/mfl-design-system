import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.page.html",
  styleUrls: ["./slider.page.scss"]
})
export class SliderPage implements OnInit {
  title: string = "Slider";
  slides = [
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    },
    {
      logo: `/assets/images/branding/My Family Lounge Logo.png`,
      image: `/assets/images/undraw_children_4rtb.svg`,
      caption: `We believe that your child deserves the best care`
    }
  ];
  constructor() {}

  ngOnInit() {}
}
