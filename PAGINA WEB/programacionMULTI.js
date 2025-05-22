const ejercicios = [
  { id: 'ej1', respuesta: '6', operacion: '2 x 3' },
  { id: 'ej2', respuesta: '20', operacion: '4 x 5' },
  { id: 'ej3', respuesta: '42', operacion: '6 x 7' },
  { id: 'ej4', respuesta: '27', operacion: '3 x 9' },
  { id: 'ej5', respuesta: '40', operacion: '8 x 5' },
  { id: 'ej6', respuesta: '49', operacion: '7 x 7' },
  { id: 'ej7', respuesta: '54', operacion: '9 x 6' },
  { id: 'ej8', respuesta: '60', operacion: '5 x 12' },
  { id: 'ej9', respuesta: '33', operacion: '11 x 3' },
  { id: 'ej10', respuesta: '100', operacion: '10 x 10' },
  { id: 'ej11', respuesta: '144', operacion: '12 x 12' },
  { id: 'ej12', respuesta: '143', operacion: '13 x 11' },
  { id: 'ej13', respuesta: '126', operacion: '14 x 9' },
  { id: 'ej14', respuesta: '120', operacion: '15 x 8' },
  { id: 'ej15', respuesta: '112', operacion: '16 x 7' },
  { id: 'ej16', respuesta: '102', operacion: '17 x 6' },
  { id: 'ej17', respuesta: '90', operacion: '18 x 5' },
  { id: 'ej18', respuesta: '76', operacion: '19 x 4' },
  { id: 'ej19', respuesta: '60', operacion: '20 x 3' },
  { id: 'ej20', respuesta: '42', operacion: '21 x 2' }
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
