export class Todo {
  constructor(
    public id: number,
    public text: string,
    public done: boolean,
    public deadline: Date,
  ) {}
}