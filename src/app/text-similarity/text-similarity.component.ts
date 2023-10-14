import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent {
  tekst1: string = '';
  tekst2: string = '';
  similarity: number = -1;

  private readonly apiUrl = 'https://api.dandelion.eu/datatxt/sim/v1/?'

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  textSimilarity(): void {
    let link: string = 'text1='+this.tekst1+'&text2='+this.tekst2+'&token='+localStorage.getItem("token");
    this.httpClient.get(this.apiUrl+link).subscribe((data: any) => {
      this.similarity = data.similarity;
    });
    const datum:any= new Date();
    this.historyService.addHistory(datum,"GET",this.apiUrl+link);
  }
}
