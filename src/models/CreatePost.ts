export class CreatePost {
  constructor(
    public id: number,
    public type: string,
    public userId: number | null,
    public title: string,
    public description: string,
    public image: string,
  ) {
  }
}
