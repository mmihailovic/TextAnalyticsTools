import { Component } from '@angular/core';
import { Languages } from '../entity';
import { HttpClient } from '@angular/common/http';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent {
  tekst: string = '';
  clean: boolean = false;
  languages: Languages[] = [];

  private readonly apiUrl = 'https://api.dandelion.eu/datatxt/li/v1/?'

  constructor(private httpClient: HttpClient, private historyService:HistoryService) {}

  languageDetection(): void {
    let link: string = 'text='+this.tekst+'&clean='+this.clean+'&token='+localStorage.getItem("token");
    this.httpClient.get(this.apiUrl+link).subscribe((data: any) => {
      console.log(data.detectedLangs);
      this.languages = data.detectedLangs;
    });
    const datum:any= new Date();
    this.historyService.addHistory(datum,"GET",this.apiUrl+link);
  }
}
