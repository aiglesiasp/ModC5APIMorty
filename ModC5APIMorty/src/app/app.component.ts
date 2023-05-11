import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModC5APIMorty';

  articulos: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
    .subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }
}
