export class Threads {
  
    message: String;
    author: string;
    chatChannelId: string;
   


    constructor(obj?: any) {
      this. message = obj ? obj. message : '';
      this. author = obj ? obj. author : '';
      this. chatChannelId = obj ? obj. channelChatId : '';
     
    }
    public toJson() {
      return {
      message: this. message,
      author: this. author,
      chatChannelId: this.chatChannelId,


      }
    }
}