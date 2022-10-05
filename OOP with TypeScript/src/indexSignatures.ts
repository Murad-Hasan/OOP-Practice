/*
? index signatures for create dynamic values
*/
/*
 * Example 1
 */
class TaskAssignment {
  [taskName: string]: string;
}

const taskAssignment = new TaskAssignment();
taskAssignment["task1"] = "Murad";
taskAssignment.task2 = "Ali";
taskAssignment.task3 = "Veli";

console.log(taskAssignment.task1);

/*
 * Example 2
 */
class SeatAssignment {
  [seatNumber: number]: string;
}

const seatAssignment = new SeatAssignment();
seatAssignment[1] = "Murad";
seatAssignment[2] = "Ali";
seatAssignment[3] = "Veli";
