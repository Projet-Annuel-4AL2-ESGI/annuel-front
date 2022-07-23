export class Exercise {
  constructor(
    public id: number | null,
    public title: string,
    public rules: string,
    public description: string,
    public exoResponse: string,
    public exoCheck: string,
    public language: string
  ) {
  }
}
