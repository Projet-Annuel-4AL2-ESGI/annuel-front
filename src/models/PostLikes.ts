export class PostLikes {
  constructor(public id: number | null,
              public type : string,
              public userId: number | null,
              public userName: string | null,
              public title: string,
              public description: string,
              public likes: number,
              public userImage: string | null,
              public liked: boolean,
              public image: string | null) {
  }
}
