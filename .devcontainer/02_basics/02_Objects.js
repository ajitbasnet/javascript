                           // Objects
// Singleton
Object.create() 

// objects literals

const mySym = Symbol("key1")

const jsUser = {
    name: "ajit",
    "full name": "Ajit BAsnet",
    [mySym]: "myKey1",
    age:20,
    location: "Bhaktapur",
    email: "ajitbasnet32@gmail.com",
    isLoggedIn: false,
    lasrtLoginDay: ["MOnday", "Saturday"]

}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser["mySym"])

jsUser.email = "ajitbsnet19@gmail.com"
Object.freeze(jsUser)
jsUser.email = "ajitbasnet24@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}
console.log(jsUser.greetingTwo());

