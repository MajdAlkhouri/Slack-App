import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Channel } from 'src/app/models/channel.class';
import { ChannelsComponent } from '../channels/channels.component';




@Component({
  selector: 'app-dialog-add-channel',
  templateUrl: './dialog-add-channel.component.html',
  styleUrls: ['./dialog-add-channel.component.scss']
})
export class DialogAddChannelComponent implements OnInit {

  channel = new Channel();
  
  constructor(private firestore:AngularFirestore,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogAddChannelComponent>,
    ) { }

  ngOnInit(): void {
  }

  
  
  onNoClick(){
    this.dialogRef.close();
  }

}
