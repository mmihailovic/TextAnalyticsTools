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

export class History {
    dateTime: string = '';
    method: string = '';
    url: string = '';

    constructor(dateTime: string, method: string, url: string) {
        this.dateTime = dateTime;
        this.method = method;
        this.url = url;
    }
}