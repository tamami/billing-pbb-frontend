import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public http: HttpClient) {}

  masuk() {
    console.log('ada di fungsi masuk()');
    let body = 'username=tamami&password=rahasia'
    this.http.post("localhost:5000/login", body)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
