const scrollToBlock = () => {
  // const animate = (elem, style, unit, from, to, time, prop) => {
  //   if (!elem) {
  //     return;
  //   }
  //   let start = new Date().getTime();
  //   let timer = setInterval(() => {
  //     let step = Math.min(1, (new Date().getTime() - start) / time);

  //     if (prop) {
  //       elem[style] = (from + step * (to - from)) + unit;
  //     } else {
  //       elem.style[style] = (from + step * (to - from)) + unit;
  //     }
  //     if (step === 1) {
  //       clearInterval(timer);
  //     }
  //   }, 25);
  //   if (prop) {
  //     elem[style] = from + unit;
  //   } else {
  //     elem.style[style] = from + unit;
  //   }
  // };

  // document.addEventListener('click', e => {
  //   e.preventDefault();
  //   const target = e.target;
  //   if (target.matches('.catalog-link')) {
  //     const catalog = document.getElementById('catalog');
  //     animate(document.scrollingElement || document.documentElement, 'scrollTop', '', 0, catalog.offsetTop, 400,
  //       true);
  //     console.log(catalog.offsetTop);
  //   }
  // });
};

export default scrollToBlock;
