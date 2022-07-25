import { Component, OnInit } from '@angular/core';
import { Channel } from 'src/app/models/channel.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddChannelComponent } from '../dialog-add-channel/dialog-add-channel.component';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
  showChannels : boolean = false;
  showButton: boolean = true;

  channel = new Channel();

  channels: any = ([] = []);

  constructor(
    private firestore: AngularFirestore,
    public authService: AuthenticationService,
    public router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection('channels')
      .valueChanges({ idField: 'channelChatId' }) //wenn etwas ändert
      .subscribe((changes: any) => {
        //daten holen
        this.channels = changes; // changes in array channels pushen
        console.log(this.channels);
      });
  }

  addChannel(): void {
    const dialogRef = this.dialog.open(DialogAddChannelComponent);

    dialogRef.afterClosed().subscribe((newChannelName) => {
      if (newChannelName) {
        this.channel.name = newChannelName;
        this.firestore
          .collection('channels') //collection erstellen
          .add(this.channel.toJson()) // in json umwandeln
          .then((result: any) => {
            console.log(result);
            this.clearChannel();
          });
      }
    });
  }
  clearChannel() {
    this.channel = new Channel();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }


  ShowChannels(){
    this.showChannels = !this.showChannels
    this.showButton = !this.showChannels
  }

  HideChannels(){
    this.showChannels = !this.showChannels
    this.showButton = !this.showChannels
  }

}
