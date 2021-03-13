const sendForm = (sellForm, rentForm, callbackForm) => {
  sellForm = document.getElementById('sell-form');
  rentForm = document.getElementById('rent-form');
  callbackForm = document.getElementById('callback-form');
  const errorMessage = 'Что-то пошло не так';
  const loadingMessage = 'Загрузка...';
  const successMessage = 'Спасибо, мы скоро с вами свяжемся';
  const statusMessage = document.createElement('span');
  const spiner = document.querySelector('.loader');
  const spiner2 = document.querySelector('.loader-rent');
  const spiner3 = document.querySelector('.loader-callback');
  const spiner4 = document.querySelector('.loader-notify');
  const messageBlock = document.querySelector('.status');
  const messageBlock2 = document.querySelector('.status-rent');
  const messageBlock3 = document.querySelector('.callback__form-status');
  const messageBlock4 = document.querySelector('.modal-notify__status');
  const sellFormInputs = document.querySelectorAll('.modal-sell__form-input');
  const rentFormInputs = document.querySelectorAll('.modal-rent__form-input');
  const rentFormMessage = document.querySelectorAll('.modal-rent__form-message');
  const notifyFormInputs = document.querySelectorAll('.modal-notify__form-input');
  const sellButtons = document.querySelectorAll('.catalog__slide-button_sell');
  statusMessage.classList.add('modal-sell__status-text');
  // sellButtons.forEach(item => {
  //   console.log(item.dataset);
  // });

  const postData = formData => fetch('./send.php', {
    method: 'POST',
    body: formData,
  });

  const showLoadMessage = () => {
    statusMessage.textContent = loadingMessage;
    statusMessage.style.display = 'block';
    spiner.style.display = 'block';
  };

  document.addEventListener('submit', e => {
    e.preventDefault();
    const target = e.target;

    if (target.matches('#sell-form')) {
      messageBlock.append(statusMessage);
      showLoadMessage();
    }
    if (target.matches('#rent-form')) {
      messageBlock2.append(statusMessage);
      showLoadMessage();
      spiner2.style.display = 'block';
    }
    if (target.matches('#callback-form')) {
      messageBlock3.append(statusMessage);
      showLoadMessage();
      spiner3.style.display = 'block';
    }
    if (target.matches('#notify-form')) {
      messageBlock4.append(statusMessage);
      showLoadMessage();
      spiner4.style.display = 'block';
    }

    postData(new FormData(target))
      .then(response => {
        // response.json().then(() => {
        //   console.log(response);
        // });
        if (response.status !== 200) {
          throw new Error('Status network not 200');
        }
        statusMessage.textContent = successMessage;
        spiner.style.display = 'none';
        spiner2.style.display = 'none';
        spiner3.style.display = 'none';
        spiner4.style.display = 'none';
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        spiner.style.display = 'none';
        spiner2.style.display = 'none';
        spiner3.style.display = 'none';
        spiner4.style.display = 'none';
        console.error(error);
      })
      .then(() => {
        sellFormInputs.forEach(item => {
          item.value = '';
        });
        rentFormInputs.forEach(item => {
          item.value = '';
        });
        notifyFormInputs.forEach(item => {
          item.value = '';
        });
        rentFormMessage.forEach(item => {
          item.value = '';
        });
        setTimeout(() => {
          statusMessage.remove();
        }, 3000);
      });
  });

};

export default sendForm;
