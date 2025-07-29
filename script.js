const image = document.getElementById('saturn-image');
const facts = document.getElementById('saturn-facts');

document.querySelector('.section.interactive').addEventListener('mousemove', (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;

  // Рассчёт центра
  const centerX = width / 2;
  const centerY = height / 2;

  // Смещение относительно центра в диапазоне [-1, 1]
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  // Максимальный угол наклона
  const maxTilt = 10;

  image.style.transform = `
    scale(1.06)
    rotateY(${maxTilt * deltaX}deg)
    rotateX(${-maxTilt * deltaY}deg)
  `;

  facts.style.transform = `
    scale(1.04)
    rotateY(${-maxTilt * deltaX}deg)
    rotateX(${maxTilt * deltaY}deg)
  `;
});

document.querySelector('.section.interactive').addEventListener('mouseleave', () => {
  image.style.transform = 'scale(1)';
  facts.style.transform = 'scale(1)';
});
