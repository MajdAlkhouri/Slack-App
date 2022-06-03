import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


import { ChatsComponent } from './chats/chats.component';

import { AppComponent } from './app.component';
import { ChannelsComponent } from './channels/channels.component';
import { ThreadsComponent } from './threads/threads.component';

const routes: Routes = [
  {
    path: '',
    component: LogInComponent,
  },

  { path: 'threads',
   component: ThreadsComponent },

  {
    path: 'Signup',
    component: SignUpComponent,
  },

  {
    path: 'main',
    component: ChannelsComponent,
  },

  {
    path: 'landing',
    component: LandingComponent,
  },

  { path: 'channel/:id', component: ChatsComponent },

  { path: 'chat/:id', component: ChatsComponent },

  { path: 'allChat', component: ChatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
