import { Component} from '@angular/core';
import { Entity } from '../entity';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent{
  entities: Entity[] = [];

  tekst: string = ' ';
  image: boolean = false;
  abstract: boolean = false;
  categories: boolean = false;
  min_confidence: number = 1;

  private readonly apiUrl = 'https://api.dandelion.eu/datatxt/nex/v1/?'

  constructor(private httpClient: HttpClient) { }

  entityExtraction(): void {
    let link: string = 'text='+this.tekst+'&token='+localStorage.getItem("token")+"&min_confidence="+this.min_confidence;
    if(this.image === true || this.abstract === true || this.categories === true) {
      link = link + "&include=";
      if(this.image === true) link = link + "image,";
      if(this.abstract === true) link = link + "abstract,";
      if(this.categories === true) link = link + "categories,";
      link = link.slice(0, -1);
    }
    // https://api.dandelion.eu/datatxt/nex/v1/?include=image,categories&text=The+Mona+Lisa+is+a+16th+century+oil+painting+created+by+Leonardo.+It%26%23x27%3Bs+held+at+the+Louvre+in+Paris.&min_confidence=0.6&token=4412eed8d6c54237ade6c89a13526e15
    this.httpClient.get(this.apiUrl+link).subscribe((entities: any) => {
      this.entities = entities.annotations;
    });
  }

}
