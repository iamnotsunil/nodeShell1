// Outoput a promot
process.stdout.write('prompt > ');

//The stdin data event fires after a user types in a line
process.stdin.on('data', (data) => {
  // const cmd = data.toString().trim(); // remove the new line
  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write(process.cwd());

  process.stdout.write('\nprompt > ');
});
