import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.page.html',
  styleUrls: ['./loading-spinner.page.scss'],
})
export class LoadingSpinnerPage implements OnInit {
  title: string = 'Loading Spinner';
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  async presentBouncingLoading() {
    const loading = await this.loadingController.create({
      message: '<img src="./assets/images/branding/mfl-icon-removebg-preview.gif">',
      spinner: null,
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  async presentBlamLoading() {
    const loading = await this.loadingController.create({
      message: '<img src="./assets/images/branding/mfl-icon-removebg-preview (1).gif">',
      spinner: null,
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-loader',
    });
    return await loading.present();
  }

  ngOnInit() {
  }

}
