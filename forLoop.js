// The loop in this example uses a #for loop to collect the car names from the cars array:
let Cars=["BMW", "Volvo", "Saab", "Ford"];
let text='';
for(i=0;i<Cars.length;i++){
    text += " "+Cars[i];
}
console.log(text);