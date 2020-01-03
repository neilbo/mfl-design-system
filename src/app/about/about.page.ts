import { Component, OnInit } from "@angular/core";
import Prism from "prismjs";
import copyToClipboard from '../utils/copy-to-clipboard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"]
})
export class AboutPage implements OnInit {
  title: string = "About";
  code: string;
  code2: string;
  constructor(public toastController: ToastController) {}


  ngOnInit() {
    setTimeout(() => Prism.highlightAll(), 0);
    
    this.code = `
    <tr *ngFor="#item of data">
      <td><a href="#">{{ item.invoiceNo }}</a></td>
      <td>{{ item.invoiceDate }}</td>
      <td>{{ item.invoiceStatus }}</td>
      <td class="right aligned">{{ item.invoiceTotal | currency:'USD':true:'1.2-2' }}</td>
    </tr>
    `;
    this.code2 = `
    <?xml version="1.0" encoding="utf-8" ?>
    <ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
                 xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
                 x:Class="Notes.UWP.Views.NotesPage">
        <StackLayout Margin="20">
            <Button Text="+"
                    FontSize="Large"
                    Clicked="OnNoteAddedClicked"
                    HorizontalOptions="End" />
            <ListView x:Name="listView"
                      ItemSelected="OnListViewItemSelected">
                <ListView.ItemTemplate>
                    <DataTemplate>
                        <TextCell Text="{Binding Text}"
                                  Detail="{Binding Date}" />
                    </DataTemplate>
                </ListView.ItemTemplate>
            </ListView>
        </StackLayout>
    </ContentPage>
    `;
  }

  copy(text: string) {
    copyToClipboard(text);
    this.presentCopiedToast()
  }

  async presentCopiedToast() {
    const toast = await this.toastController.create({
      message: `  <ion-icon name="copy"></ion-icon> Copied to Clipboard!`,
      duration: 2500,
      cssClass: "toast-default",
      position: 'middle',
    });
    toast.present();
  }
  
}
