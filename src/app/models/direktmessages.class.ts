export class Direktchat {
    message: String;
    author: string;
    chatlId: string;
  
    photo: File;
  
    constructor(obj?: any) {
      this.message = obj ? obj.message : '';
      this.author = obj ? obj.author : '';
      this.chatlId = obj ? obj.channelChatId : '';
     
      this.photo = obj ? obj.photo : '';
    }
    public toJson() {
      return {
        message: this.message,
        author: this.author,
        chatChannelId: this.chatlId,
 
        photo: this.photo,
      };
    }
  }