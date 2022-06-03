import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/models/channel.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channel = new Channel();
  
  channels: any = [] = [];

  constructor(private firestore:AngularFirestore,public authService: AuthenticationService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    this.firestore.collection('channels')
      .valueChanges({ idField: 'channelChatId' })//wenn etwas ändert
      .subscribe((changes: any) => { //daten holen
        this.channels = changes; // changes in array channels pushen
        console.log(this.channels);
      })
  }

  addChannel(){
    console.log(this.channel.name);
    this.firestore.collection('channels')//collection erstellen 
    .add(this.channel.toJson())// in json umwandeln
    .then((result: any) => {
      console.log(result)
    })
    this.clearChannel();
  }
  clearChannel() {
    this.channel = new Channel();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  }


