import * as Utils from 'src/helpers/chart-utils';

export const getLineStylingChart = async (): Promise<string> => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = Utils.months({ count: DATA_COUNT });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Unfilled',
        fill: false,
        backgroundColor: Utils.NAMED_COLORS.blue,
        borderColor: Utils.NAMED_COLORS.blue,
        data: Utils.numbers(NUMBER_CFG),
      },
      {
        label: 'Dashed',
        fill: false,
        backgroundColor: Utils.NAMED_COLORS.green,
        borderColor: Utils.NAMED_COLORS.green,
        borderDash: [5, 5],
        data: Utils.numbers(NUMBER_CFG),
      },
      {
        label: 'Filled',
        backgroundColor: Utils.NAMED_COLORS.red,
        borderColor: Utils.NAMED_COLORS.red,
        data: Utils.numbers(NUMBER_CFG),
        fill: true,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
