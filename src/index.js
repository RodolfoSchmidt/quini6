const figlet = require('figlet');

const n = Array.from(Array(46).keys());

const quini = () => {
  const q = [];
  for (let i = 0; i < 6; i++) {
    const r = Math.floor(Math.random() * n.length);
    q.push(n[r]);
    n.splice(r, 1);
  }
  figlet('Quini 6', function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data)
    console.log('Your numbers are: ' + `\x1b[34m${q}\x1b[89m`)
    figlet('Good Luck!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data)
    });
  });


}



module.exports = {
  quini
};