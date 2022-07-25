export class Chat {
  message: String;
  author: string;
  chatChannelId: string;
  showAddContainer: boolean;
  photo: File;

  constructor(obj?: any) {
    this.message = obj ? obj.message : '';
    this.author = obj ? obj.author : '';
    this.chatChannelId = obj ? obj.channelChatId : '';
    this.showAddContainer = obj ? obj.showAddContainer : '';
    this.photo = obj ? obj.photo : '';
  }
  public toJson() {
    return {
      message: this.message,
      author: this.author,
      chatChannelId: this.chatChannelId,
      showAddContainer: this.showAddContainer,
      photo: this.photo,
    };
  }
}
