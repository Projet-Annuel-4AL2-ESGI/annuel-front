export class Time {
  constructor(
    public id: number | null,
    public userId: number,
    public exerciseId: number,
    public time: number,
  ) {}
}
