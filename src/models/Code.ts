export class Code {
  constructor(
    private type: string,
    private content: string,
    private userId?: number,
    private exerciseId?: number,
  ) {}
}
