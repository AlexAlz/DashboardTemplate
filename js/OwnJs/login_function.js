async function login(username, password) {
    const apiUrl = 'https://sistematpilot.com/Apis/Attpilot/operadores';
    const headers = {
        'Content-Type': 'application/json'
    };
    const data = JSON.stringify({
        data: {
            Usuario: username,
            password: password,
            Apikey: 'R%2T@F3qAP2x5/y;hUB.kWAtGPG]3b' 
        }
    });
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: data
        });

        if (response.ok) {
            const jsonData      = await response.json();
            const okLog         = jsonData.result.loginbd;
            const activeUser    = jsonData.result.nombre;
            const nomina        = jsonData.result.nomina;
            const area          = jsonData.result.area;
            const fecha         = jsonData.result.fechaexpi;
            if (okLog === 'OK') {
                console.log(`Usuario: ${username}`);
                console.log('Acceso permitido');
                console.log(area);
                // Inicio de sesión exitoso, iniciar sesión en PHP
                $.ajax({
                    url: '/home.php', // Ruta al archivo PHP
                    type: 'POST',
                    data: { username: username },
                    success: function() {
                        console.log('Sesión iniciada');
                        // Redirigir al usuario aquí
                        switch (area) {
                            case 'Mantenimiento':
                                window.location.href = '/home.php'; // Reemplaza con tu ruta correcta
                                break;
                            case 'Combustibles':
                                window.location.href = '/home.php'; // Reemplaza con tu ruta correcta
                                break;
                            case 'Sistemas':
                                window.location.href = '/home.php'; // Reemplaza con tu ruta correcta
                                break;
                            case 'Administracion':
                                window.location.href = '/home.php'; // Reemplaza con tu ruta correcta
                                break;
                            default:
                                window.location.href = '/home.php'; // Reemplaza con tu ruta correcta
                                break;
                        }
                    },
                    error: function() {
                        console.log('Error al iniciar la sesión');
                    }
                });
            } else {
                console.log('Usuario o contraseña incorrectos');
                alert('Usuario o contraseña incorrectos');
            }
        } else {
            console.log('Acceso denegado');
            alert('Acceso denegado');
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error en la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
}
