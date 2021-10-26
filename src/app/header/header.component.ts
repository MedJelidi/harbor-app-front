import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  connected = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.getLoggedIn().subscribe(value => {
      this.connected = value;
    });
  }

  onLogOut(): void {
    this.authService.logout().subscribe(() => {
      this.authService.setLoggedIn(false);
      this.router.navigate(['/login']).then();
    });
  }

}
