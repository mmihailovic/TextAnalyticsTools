import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
    token: string | null = '';
    edit: boolean = false;

    constructor() {
        this.token = localStorage.getItem("token");
    }

    isTokenAvailable(): boolean {
      return localStorage.getItem('token')? true : false;
    }

    setToken(): void {
      if(this.token !== null) {
        localStorage.setItem("token",this.token);
        this.edit = false;
      }
    }

    deleteToken(): void {
      this.token = '';
      localStorage.removeItem("token");
      this.edit = true;
    }
}
