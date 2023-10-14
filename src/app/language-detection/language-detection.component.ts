import { Component,Input } from '@angular/core';
import { Entity, Languages } from '../entity';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) {}

  languageDetection(): void {
    let link: string = 'text='+this.tekst+'&clean='+this.clean+'&token='+localStorage.getItem("token");
    this.httpClient.get(this.apiUrl+link).subscribe((data: any) => {
      console.log(data.detectedLangs);
      this.languages = data.detectedLangs;
    });
  }
}
