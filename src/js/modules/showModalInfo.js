const showModalInfo = () => {
  const sliderTitle = document.querySelectorAll('.catalog__slide-title');
  const modalInfoDialog = document.querySelectorAll('.modal-info__dialog');
  const modalInfoOverlay = document.querySelector('.modal-info__overlay');
  // const modalInfoText = document.createElement('p');
  // modalInfoText.classList.add('modal-info__paragraph-text');


  // const changeData = data => {
  //   for (let i = 0; i < Object.keys(data).length; i++) {
  //     modalInfoText.textContent = Object.values(data);
  //     console.log(Object.values(data));
  //     const modalInfoParagraph = document.createElement('div');
  //     modalInfoParagraph.classList.add('modal-info__paragraph');
  //     modalInfoDialog.append(modalInfoParagraph);
  //     modalInfoParagraph.append(modalInfoText);
  //   }
  // };

  // fetch('catalog-info.json')
  //   .then(response => {
  //     if (response.status !== 200) {
  //       throw new Error('Status network not 200');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     sliderTitle.forEach(item => {
  //       item.addEventListener('click', e => {
  //         const target = e.target;
  //         data.cards.forEach(elem => {
  //           if (target.dataset.id === elem.id) {
  //             console.log(elem.mechanics);
  //             console.log(Object.keys(elem));
  //             changeData(elem);
  //           }
  //         });
  //       });
  //     });
  //   });


  // sliderTitle.forEach(item => {
  document.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.catalog__slide-title')) {
      modalInfoDialog.forEach(elem => {
        if (target.dataset.id === elem.dataset.id) {
          elem.classList.add('modal-info__dialog_visible');
          modalInfoOverlay.classList.add('modal-info__overlay_visible');
          document.body.classList.add('scroll-hidden');
        }
      });
    }
    if (target.matches('.modal-info__overlay') || target.matches('.modal-info__close')) {
      modalInfoDialog.forEach(item => {
        item.classList.remove('modal-info__dialog_visible');
      });
      modalInfoOverlay.classList.remove('modal-info__overlay_visible');
      document.body.classList.remove('scroll-hidden');
    }
  });
  // });
};

export default showModalInfo;
