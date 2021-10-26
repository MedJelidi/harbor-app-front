import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'harbor';


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.verify().subscribe(value => this.authService.setLoggedIn(value.body),
      () => this.authService.setLoggedIn(false));
  }
}
