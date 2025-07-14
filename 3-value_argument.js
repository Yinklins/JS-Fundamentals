const args = ['Hello', 'world']

if (args[0] === undefined){
    console.log("No argument");
} else if (args[1]===undefined){
    console.log("only one argumetn:" + args[0]);
}else {
    console.log("First argument:" + args[0]);
}