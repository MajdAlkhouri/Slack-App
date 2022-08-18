import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/models/chats.class';
import { threadId } from 'worker_threads';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ThreadService } from '../services/thread.service';
import { ImageUploadService } from '../services/image-upload.service';
import { UsersService } from '../services/users.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chats',

  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  public popoverTitle = 'löschen ? ';
  public currentThread!: any; //wenn es gibt dann zeig es mir

  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  user$ = this.usersService.currentUserProfile$;
  chat = new Chat();
  channelId: any = '';
  chats: any = ([] = []);
  editMessage!: string;
  showAddContainer: boolean = false;
  isShowingThread: boolean = false;
  filePath: File;
  temp: number;

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    public authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private afStorage: AngularFireStorage,
    public threadService: ThreadService,
    public imageUpload: ImageUploadService,
    public usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.channelId = param.get('id');

      this.firestore
        .collection('chats', (ref) =>
          ref.where('chatChannelId', '==', this.channelId)
        )
        .valueChanges({ idField: 'customIdName' }) //wenn etwas ändert
        .subscribe((changes: any) => {
          //daten holen
          this.chats = changes; // changes in array channels pushen
        });
    });
  }

  sendMessage() {
    if (this.filePath) {
      this.imageUpload
        .uploadImage(
          this.filePath,
          '/images' + Math.random() + this.filePath.name
        )
        .subscribe((downloadURL) => {
          this.filePath = undefined;
          this.sendMessage2(downloadURL);
        });
    } else {
      this.sendMessage2();
    }
  }

  sendMessage2(fileURL?) {
    this.usersService.currentUserProfile$.pipe(take(1)).subscribe((user) => {
      let newMessage;
      if (fileURL) {
        newMessage = {
          message: this.chat.message,
          author: user,
          chatChannelId: this.channelId,
          fileURL: fileURL,
        };
      } else {
        newMessage = {
          message: this.chat.message,
          author: user,
          chatChannelId: this.channelId,
        };
      }

      this.firestore.collection('chats').add(newMessage);
      this.clearChannel();
      this.isShowingThread = false; // damit thread geschloosen wird
    });
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
    console.log('Current Thread: ', this.currentThread);

    this.isShowingThread = true;

    this.temp = Math.random(); //!! nicht verstanden
    console.log('Random Number: ', this.temp);

    this.threadService.currentThread = this.channelId;
  }

  upload(event) {
    this.filePath = event.target.files[0];
  }
}
