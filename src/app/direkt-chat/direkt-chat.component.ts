import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { Chat } from 'src/app/models/chats.class';
import { HomeComponent } from '../components/home/home.component';
import { AuthenticationService } from '../services/authentication.service';
import { ChatsService } from '../services/chats.service';

@Component({
  selector: 'app-direkt-chat',
  templateUrl: './direkt-chat.component.html',
  styleUrls: ['./direkt-chat.component.scss']
})
export class DirektChatComponent implements OnInit {

  showDirektChat : boolean = false;
  showButton: boolean = true;
  myChats$ = this.chatsService.myChats$;


  chat = new Chat(); 

  @Input() data:string;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public dialog: MatDialog,
    private chatsService: ChatsService) 
   { }

  ngOnInit(): void {
  
  } 


  

  showDirektchat(){
    this.showDirektChat = !this.showDirektChat
    this.showButton = !this.showDirektChat
    this.myChats$
  }

  HideChats(){
    this.showDirektChat = !this.showDirektChat
    this.showButton = !this.showDirektChat
    this.myChats$
  }

  addDirektchat(){
  
  this.router.navigate(['/home']);
  }
 

}
