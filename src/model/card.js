export const status = {
  todo: 0,
  progress: 1,
  done: 2
}
let auoIncrementId = 0;
export class Card {
  constructor(title, description, color) {
    this.id = auoIncrementId;
    this.title = title;
    this.description = description;
    this.status = status.todo;
    this.color = color;
    this.tasks = [];
    auoIncrementId++;
  }
}
