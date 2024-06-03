import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import immageUrlOK from '../public/bi_check2-circle.svg';
import immageUrlErr from '../public/bi_x-octagon.svg';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  const delay = formElem.elements.delay.value;
  const state = formElem.elements.state.value;

  const newPromise = delay => {
    return new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        setTimeout(() => {
          resolve(fulfilled(delay));
        }, delay);
      } else {
        setTimeout(() => {
          reject(rejected(delay));
        }, delay);
      }
    });
  };

  newPromise(delay)
    .then(resolve => resolve)
    .catch(reject => reject);
  formElem.reset();
});

function fulfilled(delayNum) {
  return iziToast.show({
    iconUrl: immageUrlOK,
    backgroundColor: '#59a10d',
    message: `Fulfilled promise in ${delayNum}ms`,
    position: 'topCenter',
  });
}

function rejected(delayNum) {
  return iziToast.show({
    iconUrl: immageUrlErr,
    backgroundColor: '#ef4040',
    message: `Rejected promise in ${delayNum}ms`,
    position: 'topCenter',
  });
}
