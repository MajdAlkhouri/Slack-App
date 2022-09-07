import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Chat } from 'src/app/models/chats.class';
import { HomeComponent } from '../components/home/home.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-direkt-chat',
  templateUrl: './direkt-chat.component.html',
  styleUrls: ['./direkt-chat.component.scss']
})
export class DirektChatComponent implements OnInit {

  showDirektChat : boolean = false;
  showButton: boolean = true;

  chat = new Chat(); 

  @Input() data:string;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  
  } 

  ShowChannels(){
    this.showDirektChat = !this.showDirektChat
    this.showButton = !this.showDirektChat
  }

  HideChannels(){
    this.showDirektChat = !this.showDirektChat
    this.showButton = !this.showDirektChat
  }

  addDirektchat(){
    const DirektChat = this.dialog.open(HomeComponent);
  }
 

}
