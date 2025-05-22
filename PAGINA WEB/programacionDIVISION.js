const ejercicios = [
  { id: 'ej1', respuesta: '5', operacion: '10 ÷ 2' },
  { id: 'ej2', respuesta: '4', operacion: '12 ÷ 3' },
  { id: 'ej3', respuesta: '9', operacion: '18 ÷ 2' },
  { id: 'ej4', respuesta: '6', operacion: '24 ÷ 4' },
  { id: 'ej5', respuesta: '6', operacion: '30 ÷ 5' },
  { id: 'ej6', respuesta: '7', operacion: '35 ÷ 5' },
  { id: 'ej7', respuesta: '7', operacion: '49 ÷ 7' },
  { id: 'ej8', respuesta: '7', operacion: '56 ÷ 8' },
  { id: 'ej9', respuesta: '8', operacion: '64 ÷ 8' },
  { id: 'ej10', respuesta: '9', operacion: '81 ÷ 9' },
  { id: 'ej11', respuesta: '9', operacion: '90 ÷ 10' },
  { id: 'ej12', respuesta: '9', operacion: '108 ÷ 12' },
  { id: 'ej13', respuesta: '11', operacion: '121 ÷ 11' },
  { id: 'ej14', respuesta: '12', operacion: '132 ÷ 11' },
  { id: 'ej15', respuesta: '13', operacion: '143 ÷ 11' },
  { id: 'ej16', respuesta: '13', operacion: '156 ÷ 12' },
  { id: 'ej17', respuesta: '14', operacion: '168 ÷ 12' },
  { id: 'ej18', respuesta: '12', operacion: '180 ÷ 15' },
  { id: 'ej19', respuesta: '13', operacion: '195 ÷ 15' },
  { id: 'ej20', respuesta: '14', operacion: '210 ÷ 15' }
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
