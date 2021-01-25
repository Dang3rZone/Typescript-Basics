class Vehicle {
  //   public drive(): void {
  //     console.log('something');
  //   }
  //   color: string = 'red';
  //   constructor(color: string) {
  //     this.color = color;
  //   }
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep');
  }
}
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// const vehicles = new Vehicle();
// vehicles.drive();
// vehicles.honk();

const car = new Car(4, 'purple');
// car.drive();
// car.startDrivingProcess();
// car.honk();
