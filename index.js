

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // prints out the provided task's details
    logState(task) {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
},

    // marks the provided task as completed
    markCompleted(task) {
    this.complete = true;
  }
}; // where task obj ends

return task;


}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
// console.log(tasks);


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed





