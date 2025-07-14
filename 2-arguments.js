let args = ['node',];

if (args.length >= 3){
    console.log("Argument found");    
}else if (args.length ===1){
    console.log('Argument found');    
}else {
    console.log('No Argument');
};

args.forEach(function(arguments){
    console.log(arguments);
});


