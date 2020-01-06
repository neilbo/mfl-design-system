import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.page.html',
  styleUrls: ['./code-snippet.page.scss'],
})
export class CodeSnippetPage implements OnInit {
  title: string = "Code Snippet";
  code: string;
  code2: string;
  constructor() { }

  ngOnInit() {
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
  copyToClipboard(event: Event) {
    console.info(`Copied text: ${event}`);
  }
}
