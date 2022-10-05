class Ride {
  private static _activeRides: number = 0;

  /*
   * static property's belongs to the class itself, not to an object.
   * it's can be accessed by the class name.
   */

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

/*
 * static method can be called without creating an instance of the class
 */
console.log(Ride.activeRides); // 0

const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
/* 
? ride2.stop(); 
*/
console.log(Ride.activeRides); // 0
