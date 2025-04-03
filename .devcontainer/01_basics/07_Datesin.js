//Dates

let myDate = new Date()
console.log(myDate).toString();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let sych = new Date (2023, 0, 23, 5, 3)
console.log(sych.toLocaleDateString());

let sheDate = new Date("2023-01-14") // 01-14-2023
console.log(sheDate.toLocaleDateString());

let myTimeStamp = new Date // Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDateO = new Date()
console.log(newDateO);
console.log(newDateO.getDay());

//`${newDateO.getDate()} and the time`

newDateO.toLocaleString('default',{
    weekday: "long",
    day:'2-digit'
})