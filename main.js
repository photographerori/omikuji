const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const results = ['大吉', '中吉', '凶', '末吉'];
  const n = Math.floor(Math.random() * results.length);
  console.log(n);
  btn.textContent = results[n];
});
