class Task {
  constructor({id, text, completed = false}){
      this.id = id;
      this.text = text;
      this.completed = completed;
  }
}

const storage = new Map([[0, new Task({id: 0, text: "Task", completed: false})]]);

module.exports = { storage, Task };
