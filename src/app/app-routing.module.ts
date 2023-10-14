import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    component:ConfigurationComponent
  },
  {
    path:"entity-extraction",
    component:EntityExtractionComponent,
    canActivate:[authGuard]
  },
  {
    path:"language-detection",
    component:LanguageDetectionComponent,
    canActivate:[authGuard]
  },
  {
    path:"sentiment-analysis",
    component:SentimentAnalysisComponent,
    canActivate:[authGuard]
  },
  {
    path:"text-similarity",
    component:TextSimilarityComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
