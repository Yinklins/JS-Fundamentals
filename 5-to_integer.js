const arg = process.argv[2];

if (!isNaN(arg) && arg !== undefined && arg.trim() !== '') {
  console.log('My number: ' + parseInt(arg));
} else {
  console.log('Not a number');
}