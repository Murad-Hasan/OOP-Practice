/*
 * Interfaces for the date types declaration
 * we can't use any logic, method or property of the interface [you can use abstract from logic and method implementation]
 * we can only use the interface as a type
 */

interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}
/*
 * interface inheritance
 */
interface CloudCalender extends Calender {
  sync(): void;
}

// * google calender class
// * ctrl + . to implement the interface(cursor put on the google calender class and press)
class GoogleCalender implements CloudCalender {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  sync(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
