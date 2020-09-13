import { AppBridge } from './bridge';

document.getElementById('user').addEventListener('click', () => {
  AppBridge.app.getUser().then((data) => {
    alert(`Message from main: ${data}`);
  });
});

document.getElementById('prompt').addEventListener('click', () => {
  AppBridge.app.prompt(Date.now().toString());
});

document.getElementById('max').addEventListener('click', () => {
  AppBridge.app.max();
});
