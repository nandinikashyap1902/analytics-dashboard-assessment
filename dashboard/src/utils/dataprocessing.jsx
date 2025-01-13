export function processData(csv) {
    const rows = csv.split("\n").slice(1); // Remove headers
    const data = rows.map((row) => row.split(","));
  
    // Example: Count EVs by Make
    const evByMake = {};
    data.forEach((row) => {
      const make = row[1]; // Assuming the make is in the second column
      if (make) evByMake[make] = (evByMake[make] || 0) + 1;
    });
  
    const chartData = {
      title: "EV Population by Make",
      data: {
        labels: Object.keys(evByMake),
        datasets: [
          {
            label: "EV Count",
            data: Object.values(evByMake),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    };
  
    return [chartData];
  }
  