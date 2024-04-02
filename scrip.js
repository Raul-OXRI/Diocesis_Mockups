const myChart = new Chart("myChart", {
    type: "line", // Cambiar el tipo de gráfico a "line"
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
        datasets: [{
            label: 'Constacias de confirmacion',
            data: [12, 20, 10, 1, 18, 33, 12],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  });


  const myPieChart = new Chart("myPieChart", {
    type: "pie", // Definir el tipo de gráfico como "pie"
    data: {
        labels: ["Catedral", "Rabinal", "Raxruhá", "San Martín"],
        datasets: [{
            label: 'Iglesias',
            data: [30, 20, 50, 40], // Datos de ejemplo
            backgroundColor: [
                'rgb( 94, 250, 73 )',
                'rgb( 255, 131, 0 )',
                'rgb( 176, 64, 254 )',
                'rgb( 28, 246, 167 )'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Pastel'
            }
        }
    }
});




document.getElementById('txtfechanacimiento').addEventListener('change', function() {
    var fechaNacimiento = new Date(document.getElementById('txtfechanacimiento').value);
    var edad = calcularEdad(fechaNacimiento);
    document.getElementById('txtedad').value = edad;
  });
  
  function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }