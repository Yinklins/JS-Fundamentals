const args = ['node', 'hello', "test"]

if (args.length === 0){
     console.log("No argument")
     break;
}else if (args.length === 1){
    console.log("Best Argument found")
    break;
}else {console.log("Best Arguments found")};

    args.forEach ((arg, index) => {
        console.log(`Argument ${index+1}: ${arg}`);
    })
