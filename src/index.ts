// Write TypeScript code!
let interval = null;
let isRunning = false;
let balance = 10;

const icons = ['🦄', '🦔', '🎱', '🦖', '🌵'];

const getRandomIcon = () => icons[Math.floor(Math.random() * 4 + 1)];

const run = () => {
  if (isRunning || balance === 0) {
    return;
  }
  balance--;
  document.querySelector('span').innerHTML = String(balance);
  clearInterval(interval);
  isRunning = true;

  interval = setInterval(
    () =>
      document
        .querySelectorAll('.slots > label')
        .forEach((elem) => (elem.innerHTML = getRandomIcon())),
    30
  );

  setTimeout(() => {
    clearInterval(interval);
    isRunning = false;
    switch (checkResult()) {
      case 2:
        balance++;
        break;
      case 1:
        balance += 3;
        break;
    }
    document.querySelector('span').innerHTML = String(balance);
  }, 2000);
};

const checkResult = () => {
  const result = [];
  document
    .querySelectorAll('.slots > label')
    .forEach((elem) => result.push(elem.innerHTML));
  console.log(result, [...new Set(result)], [...new Set(result)].length === 1);

  return new Set(result).size;
};
document.querySelector('span').innerHTML = String(balance);
document.querySelector('button').addEventListener('click', () => run());
document.body.addEventListener('keydown', () => run());
