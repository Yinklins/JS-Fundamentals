const args = process.argv.slice(2);

// let args = ['node',];

if (args.length >= 3){
    console.log("Arguments found");    
}else if (args.length ===1){
    console.log('Argument found');    
}else {
    console.log('No argument');
};

// args.forEach(function(arguments){
//     console.log(arguments);
// });


