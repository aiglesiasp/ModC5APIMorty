import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModC5APIMorty';

    constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://")
  }
}
