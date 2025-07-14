const count = parseInt(process.argv[2]);
let i = 0;

while (i < (isNaN(count) ? 1 : count)) {
  console.log(isNaN(count) ? 'Missing number of occurrences' : 'C is fun');
  i++;
}