import {UserPost} from "./UserPost";

export class Post {
  constructor(public type : string, public userId: number | null, public userName: string | null, public title: string,
              public description: string, public userImage: string | null, public image: string | null) {
  }
}
