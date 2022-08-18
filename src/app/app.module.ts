import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChatsComponent } from './chats/chats.component';
import { ChannelsComponent } from './channels/channels.component';
import { AngularFireModule } from '@angular/fire/compat';
import { DirektChatComponent } from './direkt-chat/direkt-chat.component';
import { ThreadsComponent } from './threads/threads.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ProfileComponent } from './components/profile/profile.component';
import { DialogAddChannelComponent } from './dialog-add-channel/dialog-add-channel.component';
import { DateDisplayPipe } from './pipes/date-display.pipe';

import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    LandingComponent,
    SignUpComponent,
    HomeComponent,
    ChatsComponent,
    ChannelsComponent,
    DirektChatComponent,
    ThreadsComponent,
    ProfileComponent,
    DialogAddChannelComponent,
    DateDisplayPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireAuthModule,
    HotToastModule.forRoot(),
    MatMenuModule,
    MatSliderModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
