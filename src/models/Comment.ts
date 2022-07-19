export class Comment{
  constructor(public id: number | null,
              public postId: number,
              public userId: number,
              public commentMessage: string,) {
  }
}
