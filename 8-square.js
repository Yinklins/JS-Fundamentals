const size = parseInt(process.argv[2]);
let i = 0;

while (i < (isNaN(size) ? 1 : size)) {
  console.log(isNaN(size) ? 'Missing size' : 'X'.repeat(size));
  i++;
}