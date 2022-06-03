import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Chat } from 'src/models/chats.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public dialog: MatDialog
  ) {}

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
