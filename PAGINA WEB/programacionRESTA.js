
    
    const ejerciciosResta = [
    { id: 'ej21', respuesta: '5', operacion: '8 - 3' },  /*OPERACIONES DE LA RESTA*/  
    { id: 'ej22', respuesta: '11', operacion: '16 - 5' },
    { id: 'ej23', respuesta: '2', operacion: '9 - 7' },
    { id: 'ej24', respuesta: '8', operacion: '18 - 10' },
    { id: 'ej25', respuesta: '70', operacion: '78 - 8' },
    { id: 'ej26', respuesta: '9', operacion: '22 - 13' },
    { id: 'ej27', respuesta: '14', operacion: '59 - 45' },
    { id: 'ej28', respuesta: '46', operacion: '68 - 22' },
    { id: 'ej29', respuesta: '65', operacion: '88 - 23' },
    { id: 'ej30', respuesta: '21', operacion: '48 - 27' },
    { id: 'ej31', respuesta: '190', operacion: '400 - 210' },
    { id: 'ej32', respuesta: '100', operacion: '775 - 675' },
    { id: 'ej33', respuesta: '743', operacion: '788 - 45' },
    { id: 'ej34', respuesta: '-66', operacion: '26 - 58 - 34' },
    { id: 'ej35', respuesta: '6', operacion: '68 - 35 - 27' },
    { id: 'ej36', respuesta: '226', operacion: '823 - 375 - 222' },
    { id: 'ej37', respuesta: '81', operacion: '544 - 335 - 128' },
    { id: 'ej38', respuesta: '-244', operacion: '122 - 234 - 132' },
    { id: 'ej39', respuesta: '-230', operacion: '100 - 120 - 230' },
    { id: 'ej40', respuesta: '105', operacion: '750 - 320 - 325' },
  ];

  function verificarTodo() {
    ejerciciosResta.forEach(({ id, respuesta, operacion }) => {
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
