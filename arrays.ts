const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMakers: string[][] = [['f150'], ['corolla'], ['camaro']];

// TS can do type inference when extracting values from an array
const cars = carMakers[0];
const myCar = carsByMakers.pop();

// TS can prevent us from adding incompatible values from an array
// carMakers.push(100);

// We can get help with 'map','forEach','reduce' functions
carMakers.map((car: string): string => {
  return car;
});

// Flexible - arrays can still contain mutliple different types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100);
