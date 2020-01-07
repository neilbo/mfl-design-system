import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'default',
    loadChildren: () => import('./default/default.module').then(m => m.DefaultPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'typography',
    loadChildren: () => import('./typography/typography.module').then( m => m.TypographyPageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./icons/icons.module').then( m => m.IconsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'colours',
    loadChildren: () => import('./colours/colours.module').then( m => m.ColoursPageModule)
  },
  {
    path: 'design-principles',
    loadChildren: () => import('./design-principles/design-principles.module').then( m => m.DesignPrinciplesPageModule)
  },
  {
    path: 'illustrations',
    loadChildren: () => import('./illustrations/illustrations.module').then( m => m.IllustrationsPageModule)
  },
  {
    path: 'logo-and-icon',
    loadChildren: () => import('./logo-and-icon/logo-and-icon.module').then( m => m.LogoAndIconPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'floating-action-buttons',
    loadChildren: () => import('./floating-action-buttons/floating-action-buttons.module').then( m => m.FloatingActionButtonsPageModule)
  },
  {
    path: 'voice-and-tone',
    loadChildren: () => import('./voice-and-tone/voice-and-tone.module').then( m => m.VoiceAndTonePageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'segments',
    loadChildren: () => import('./segments/segments.module').then( m => m.SegmentsPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'toasts',
    loadChildren: () => import('./toasts/toasts.module').then( m => m.ToastsPageModule)
  },
  {
    path: 'loading-spinner',
    loadChildren: () => import('./loading-spinner/loading-spinner.module').then( m => m.LoadingSpinnerPageModule)
  },
  {
    path: 'code-snippet',
    loadChildren: () => import('./code-snippet/code-snippet.module').then( m => m.CodeSnippetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
