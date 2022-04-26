// pass this function when the user clicks a button
const keydownController = new AbortController();
const keydownAbortDisableBtn = document.createElement('button');
keydownAbortDisableBtn.textContent = 'Disable Keyboard Shortcuts';
keydownAbortDisableBtn.classList.add('keydownAbortDisableBtn');

// OR disable keydown inputs after score is reached
const keydownAbort = () => {
  keydownController.abort();
};

export default keydownAbort;

/*
  https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort#examples
  abortBtn.addEventListener('click', function() {
    controller.abort();
    console.log('Download aborted');
  });
 */
