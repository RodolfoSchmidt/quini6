const n = Array.from(Array(46).keys());

const quini = () => {
  const q = [];
  for (let i = 0; i < 6; i++) {
    const r = Math.floor(Math.random() * n.length);
    q.push(n[r]);
    n.splice(r, 1);
  }
  console.log(`\x1b[34m${q}\x1b[89m`);

}



module.exports = {
  quini
};