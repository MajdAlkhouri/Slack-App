import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/models/chats.class';
import { threadId } from 'worker_threads';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-chats',

  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {


  public popoverTitle = 'löschen ? ';
  public currentThread!: any; //wenn es gibt dann zeig es mir
  // public currentThread: any = [];

  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  chat = new Chat();
  channelId: any = '';
  chats: any = ([] = []);
  editMessage!: string;
  showAddContainer: boolean = false;
  isShowingThread: boolean = false;
  filePath: String;
  temp: number;

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    public authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private afStorage: AngularFireStorage,
    public  threadService: ThreadService,
  ) {}

  ngOnInit(): void {
    // this.firestore.collection('chats')
    // .valueChanges({ idField: 'customIdName' })//wenn etwas ändert
    // .subscribe((changes: any) => { //daten holen
    //   this.chats = changes; // changes in array channels pushen
    // })

    this.activatedRoute.paramMap.subscribe((param) => {
      this.channelId = param.get('id');

      this.firestore
        .collection('chats', (ref) =>
          ref.where('chatChannelId', '==', this.channelId)
        )
        .valueChanges({ idField: 'customIdName' })
        .subscribe((changes: any) => {
          this.chats = changes;
        });
    });
  }

  sendMessage() {
    let userName = this.authService.currentUser.displayName;
    this.firestore.collection('chats').add({
      message: this.chat.message,
      author: userName,
      chatChannelId: this.channelId,
    });
    this.clearChannel();
    this.isShowingThread = false; // damit thrad geschloosen wird
  }

  clearChannel() {
    this.chat = new Chat();
  }

  removeChat(chat: any) {
    console.log(chat);
    this.firestore.collection('chats').doc(chat['customIdName']).delete();
  }

  editChat(chat: any) {
    console.log(this.editMessage);
    this.firestore
      .collection('chats')
      .doc(chat['customIdName']) // hier um eine feld zu updaten bzw editieren
      .update({ message: this.editMessage }); // message in wert von editMessage umwandeln

    console.log(this.showAddContainer);
    this.editMessage = '';
  }

  showEditContainer(chat: any) {
    console.log(chat.showAddContainer);

    chat.showAddContainer = true;
  }

  showThread(thread: any) {
    // this.currentThread.push(thread);
    this.currentThread = thread;
    console.log("Current Thread: ", this.currentThread);


    this.isShowingThread = true;
   
    this.temp = Math.random(); //!! nicht verstanden
    console.log("Random Number: ", this.temp);



    this.threadService.currentThread= this.channelId;

    //this.firestore
    // .collection('threads', ref => ref.where('chatChannelId', '==', this.channelId))
    //  .valueChanges({ idField: 'customIdName' })
    // .subscribe((threads: any) => {

    // })
  }

  upload(event) {
    this.filePath = event.target.files[0];
  }

  uploadImage() {
    console.log(this.filePath);
    this.afStorage.upload(
      '/images' + Math.random() + this.filePath,
      this.filePath
    );
  }
}
