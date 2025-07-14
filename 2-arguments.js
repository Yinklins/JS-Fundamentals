const args = ['node', 'hello']

if (args.length === 0){
     console.log("No argument")
}else if (args.length === 1){
    console.log("Argument found")
}else {console.log("Arguments found")};

    args.forEach ((arg, index) => {
        console.log(`Argument ${index+1}: ${arg}`);
    })
