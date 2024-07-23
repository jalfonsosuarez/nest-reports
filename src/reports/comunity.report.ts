import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getComunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      {
        columns: [
          {
            image: 'src/assets/tucan-code-logo.png',
            width: 50,
          },
          {
            alignment: 'center',
            text: `Forest Admin Community SAP\nRUT: 44.259.444\nCamino Montaña, 14\nTeléfono: 784.443.999`,
          },
          {
            alignment: 'right',
            width: 150,
            layout: 'borderBlue',
            table: {
              body: [
                [
                  {
                    layout: 'noBorders',
                    table: {
                      body: [
                        ['No. Presupuesto:', '123.456'],
                        ['Fecha:', '2021-09-01'],
                        ['Versión:', '2024-001'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        margin: [0, 5],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3a4546',
          },
        ],
      },
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Datos del cliente',
                fillColor: '#5775e1',
                color: 'white',
                colSpan: 4,
                // border: [false, false, false, false],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'Razón social',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
                // border: [false, false, false, false],
              },
              {
                text: 'Nombre de la empresa',
                fillColor: 'white',
                // border: [false, false, false, false],
              },
              {
                text: 'Dirección',
                fillColor: '#343a40',
                color: 'white',
                // border: [false, false, false, false],
              },
              {
                text: 'Calle inventada, 8779',
                fillColor: 'white',
                // border: [false, false, false, false],
              },
            ],
            [
              {
                text: 'RUT',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
                // border: [false, false, false, false],
              },
              {
                text: '87.469.251',
                fillColor: 'white',
                // border: [false, false, false, false],
              },
              {
                text: 'Teléfono',
                fillColor: '#343a40',
                color: 'white',
                // border: [false, false, false, false],
              },
              {
                text: '589.558.441',
                fillColor: 'white',
                // border: [false, false, false, false],
              },
            ],
            [
              {
                text: 'Giro',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
                // border: [false, false, false, false],
              },
              {
                text: '',
                fillColor: 'white',
                // border: [false, false, false, false],
              },
              {
                text: 'Condición de pago',
                fillColor: '#343a40',
                color: 'white',
                // border: [false, false, false, false],
              },
              {
                text: '',
                fillColor: 'white',
                // border: [false, false, false, false],
              },
            ],
          ],
        },
      },
    ],
  };

  return docDefinition;
};
