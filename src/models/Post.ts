import {User} from "./User";

export class Post {
  constructor(public type : string, public title: string, public description: string, public likes: number,
              public image: string | null) {
  }
}
