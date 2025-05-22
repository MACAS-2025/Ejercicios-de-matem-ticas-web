const ejercicios = [
      { id: 'ej1', respuesta: '8', operacion: '5 + 3' },
      { id: 'ej2', respuesta: '6', operacion: '1 + 5' },
      { id: 'ej3', respuesta: '16', operacion: '9 + 7' },
      { id: 'ej4', respuesta: '19', operacion: '9 + 10' },
      { id: 'ej5', respuesta: '19', operacion: '11 + 8' },
      { id: 'ej6', respuesta: '35', operacion: '22 + 13' },
      { id: 'ej7', respuesta: '61', operacion: '36 + 25' },
      { id: 'ej8', respuesta: '119', operacion: '77 + 42' },
      { id: 'ej9', respuesta: '111', operacion: '88 + 23' },
      { id: 'ej10', respuesta: '100', operacion: '25 + 75' },
      { id: 'ej11', respuesta: '422', operacion: '122 + 300' },
      { id: 'ej12', respuesta: '1115', operacion: '445 + 675' },
      { id: 'ej13', respuesta: '723', operacion: '678 + 45' },
      { id: 'ej14', respuesta: '438', operacion: '26 + 58 + 354' },
      { id: 'ej15', respuesta: '145', operacion: '40 + 5 +100' },
      { id: 'ej16', respuesta: '722', operacion: '125 + 375 + 222' },
      { id: 'ej17', respuesta: '707', operacion: '244 + 335 + 128' },
      { id: 'ej18', respuesta: '488', operacion: '122 +234 +132' },
      { id: 'ej19', respuesta: '690', operacion: '342 + 248 +100' },
      { id: 'ej20', respuesta: '616', operacion: '527 + 24 + 65' },
    ];

    function verificarTodo() {
      ejercicios.forEach(({ id, respuesta, operacion }) => {
        const radios = document.querySelectorAll(`#${id} input[type='radio']`);
        const feedback = document.getElementById(`fb-${id}`);

        let seleccionada = null;
        radios.forEach(rb => {
          if (rb.checked) seleccionada = rb.value;
        });

        if (!seleccionada) {
          feedback.textContent = 'Por favor, selecciona una opción.';
          feedback.className = 'feedback incorrecta';
          return;
        }

        if (seleccionada === respuesta) {
          feedback.textContent = '¡Respuesta correcta!';
          feedback.className = 'feedback correcta';
        } else {
          feedback.textContent = `Respuesta incorrecta en el ejercicio: ${operacion}`;
          feedback.className = 'feedback incorrecta';
        }
      });
    }