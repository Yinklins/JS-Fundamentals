const count = parseInt(process.argv[2]);

if (isNaN(count)) {
    console.log('Missing number of occurrences');
}else{
    let i = 0;
    while(i<count){
        console.log('c is fun')
        i++;
    }
}