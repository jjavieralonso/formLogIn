document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var success = true //Simular que la base de datos dio 200 como respuesta
    if (success)
        showNotification('Entrando a la cuenta.', success);
    else
        showNotification('Hubo un error al iniciar sesion', success);

    document.getElementById('loginForm').reset();
});

// Simular el envío del formulario de registro
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var success = true //Simular que la base de datos dio 200 como respuesta
    if (success)
        showNotification('La cuenta fue creada con éxito', success);
    else
        showNotification('Hubo un error al crear la cuenta', success);

    document.getElementById('registerForm').reset();
});

function switchLog() {
    const signIn = document.getElementById('signIn');
    const logIn = document.getElementById('logIn');
    const btnSwitchLog = document.getElementById('btnSwitchLog');
    logIn.classList.add("transitionIn");

    if (signIn.classList.contains('hidden')) {
        logIn.classList.remove("hidden");
        logIn.classList.remove("transitionIn");
        logIn.classList.add("transitionOut");
        setTimeout(function () { logIn.classList.add('hidden') }, 500);

        setTimeout(function () {
            signIn.classList.remove("transitionOut");
            signIn.classList.add("transitionIn");
            signIn.classList.remove("hidden");
        }, 500)
        btnSwitchLog.textContent = 'Ya tenes cuenta? Log In';
    } else {
        signIn.classList.remove("hidden");
        signIn.classList.remove("transitionIn");
        signIn.classList.add("transitionOut");
        setTimeout(function () { signIn.classList.add('hidden') }, 500);

        setTimeout(function () {
            logIn.classList.remove("transitionOut");
            logIn.classList.add("transitionIn");
            logIn.classList.remove("hidden")
        }, 500)
        btnSwitchLog.textContent = 'No tenes cuenta? Registrate';
    }

}
const notification = document.getElementById('notification');
function showNotification(mensaje, statusGood) {
    notification.classList.add('show');
    setTimeout(function () {
        notification.classList.remove('show')
    }, 2500);
    notification.textContent = mensaje;
    if (statusGood) {
        notification.style.backgroundColor = '#4CAF50';
    } else {
        notification.style.backgroundColor = '#c2483f';
    }

}

