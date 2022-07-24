export class CommentGet {
  constructor(public postId: number,
              public userId: number,
              public userName: string,
              public commentMessage: string,
              public userImage: string | null) {
  }
}
