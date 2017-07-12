  var ctx = document.getElementById('lineChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
          datasets: [{
              label: "My First dataset",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [500, 1000, 750, 1250, 1700, 1200, 1500, 1000, 1500, 2000, 1500, 2000],
          }]
      },

      // Configuration options go here
      options: {
        scales: {
          yAxes: [{
            ticks: {
              max: 2500,
              min: 500,
              stepSize: 500
            }
          }]
        }
      }
  });
