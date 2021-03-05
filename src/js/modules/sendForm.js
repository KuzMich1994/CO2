const sendForm = (sellForm, rentForm) => {
  sellForm = document.getElementById('sell-form');
  const errorMessage = 'Что-то пошло не так';
  const loadingMessage = 'Загрузка...';
  const successMessage = 'Спасибо, мы скоро с вами свяжемся';
  const statusMessage = document.createElement('span');
  const spiner = document.querySelector('.loader');
  const messageBlock = document.querySelector('.status');
  const sellFormInputs = document.querySelectorAll('.modal-sell__form-input');
  const sellButtons = document.querySelectorAll('.catalog__slide-button_sell');
  statusMessage.classList.add('.modal-sell__status-text');
  // sellButtons.forEach(item => {
  //   console.log(item.dataset);
  // });

  const postData = formData => fetch('./send.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formData,
    credentials: 'include'
  });

  let formData;

  const showLoadMessage = () => {
    statusMessage.textContent = loadingMessage;
    statusMessage.style.display = 'block';
    spiner.style.display = 'block';
  };

  document.addEventListener('submit', e => {
    e.preventDefault();
    const target = e.target;
    const body = {};

    if (target.matches('#sell-form')) {
      messageBlock.append(statusMessage);
      showLoadMessage();
      formData = new FormData(sellForm);
      for (const val of formData) {
        body[val[0]] = val[1];
      }
    }

    postData(JSON.stringify(body))
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Status network not 200');
        }
        statusMessage.textContent = successMessage;
        spiner.style.display = 'none';
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        spiner.style.display = 'none';
        console.error(error);
      })
      .then(() => {
        sellFormInputs.forEach(item => {
          item.value = '';
        });
      });
  });

};

export default sendForm;
