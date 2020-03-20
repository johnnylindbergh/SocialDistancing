google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);



function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Population Infected');
      data.addColumn('number', '');

      data.addRows(infectedData);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Population Infected'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

  function reload(){
    var data = new google.visualization.DataTable();
      data.addColumn('number', 'Population Infected');
      data.addColumn('number', '');

      data.addRows(infectedData);

      var options = {
        hAxis: {
          title: 'Time (Days)'
        },
        vAxis: {
          title: 'Population Infected'
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);

  }