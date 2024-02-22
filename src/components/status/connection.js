// connection.js

let connectionAlertShown = false;

const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '')  + expires + '; path=/';
};

const getCookie = (name) => {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
  }
  return null;
};

const showConnectionAlert = () => {
  console.log('Evaluando conexión...');

  const alertMessage = 'No hay conexión a internet';
  const connectedMessage = 'Tiene conexión a internet';
  const isOnline = navigator.onLine;

  console.log('Estado de conexión:', isOnline);

  // Verificamos si ya se ha mostrado la alerta
  if (connectionAlertShown && isOnline) {
    console.log('La alerta ya se ha mostrado y el usuario está en línea.');
    return;
  }

  // Verificamos si el cookie está presente y se debe mostrar la alerta
  const showAlertCookie = getCookie('showAlert');
  if (showAlertCookie === 'false') {
    console.log('El cookie indica que no se debe mostrar la alerta.');
    return;
  }

  const alertDiv = document.createElement('div');
  alertDiv.textContent = isOnline ? connectedMessage : alertMessage;
  alertDiv.className = 'connection-alert'; // Agregamos una clase para identificar la alerta
  alertDiv.style.position = 'fixed';
  alertDiv.style.backgroundColor = isOnline ? 'green' : 'red';
  alertDiv.style.color = 'white';
  alertDiv.style.padding = '10px';
  alertDiv.style.fontWeight = 'bold';
  alertDiv.style.display = 'flex';
  alertDiv.style.alignItems = 'center';
  alertDiv.style.justifyContent = 'center';
  alertDiv.style.borderRadius = '5px';

  // Agregar un icono según el estado de la conexión
  const icon = document.createElement('i');
  icon.className = isOnline ? 'fas fa-wifi' : 'fas fa-exclamation-circle';
  icon.style.marginRight = '5px';
  alertDiv.appendChild(icon);

  // Verificamos si el usuario está en un dispositivo móvil o en una PC
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Si está en un dispositivo móvil, mostramos la alerta en la parte inferior
    alertDiv.style.bottom = '0';
    alertDiv.style.left = '0';
    alertDiv.style.width = '100%';
    alertDiv.style.textAlign = 'center';
  } else {
    // Si está en una PC, mostramos la alerta en la esquina superior derecha
    alertDiv.style.top = '10px';
    alertDiv.style.right = '10px';
  }

  document.body.appendChild(alertDiv);

  // Eliminar la alerta después de unos segundos
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);

  // Actualizamos el estado de la alerta
  if (!isOnline) {
    console.log('El usuario no está en línea. Se establece connectionAlertShown en true.');
    connectionAlertShown = true;
    setCookie('showAlert', 'true', 1); // Expira después de 1 día
  } else {
    console.log('El usuario está en línea. Se establece connectionAlertShown en false.');
    connectionAlertShown = false;
    setCookie('showAlert', 'false', 1); // Expira después de 1 día
  }
};

// Verificar si la alerta ya se ha mostrado previamente
const showAlertCookie = getCookie('showAlert');
if (showAlertCookie === 'true') {
  connectionAlertShown = true;
}

// Mostrar el banner cuando cambia el estado de la conexión
window.addEventListener('online', () => {
  console.log('El usuario está en línea.');
  showConnectionAlert();
});

window.addEventListener('offline', () => {
  console.log('El usuario no está en línea.');
  showConnectionAlert();
});

export default showConnectionAlert;
