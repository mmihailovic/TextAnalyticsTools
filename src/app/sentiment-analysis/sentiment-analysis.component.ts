import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent {
  tekst: string = '';
  eng: boolean = false;
  it: boolean = false;
  auto: boolean = false;
  score: number = 0;
  type: string = '';
  color: string ='';

  private readonly apiUrl = 'https://api.dandelion.eu/datatxt/sent/v1/?'

  constructor(private httpClient: HttpClient) {}

  sentimentAnalysis(): void {
    let link: string = 'text='+this.tekst+'&token='+localStorage.getItem("token");
    if(this.eng) {
      link = link + '&lang=en';
    }
    else if(this.it) {
      link = link + '&lang=it';
    }
    else link = link + '&lang=auto';
    this.httpClient.get(this.apiUrl+link).subscribe((data: any) => {
      console.log(data.sentiment);
      this.score = data.sentiment.score;
      this.type = data.sentiment.type;

      let red = 128;
      let green = 128;
      red -= this.score * 128;
      green += this.score * 128;

      this.color = `rgba(${red}, ${green}, 50)`;
    });
  }

}
