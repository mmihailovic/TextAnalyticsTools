export class Entity {
    title: string;
    abstract: string;
    categories: string[];
    image: {
      full: string;
      thumbnail: string;
    };

    constructor() {
        this.title = ' ';
        this.abstract = ' ';
        this.categories = [];
        this.image = {full:'',thumbnail:''};
    }
}
  
export class Languages {
    lang: string = '';
    confidence: number = 0;
}