import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCustomSizeReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    pageSize: {
      width: 150,
      height: 300,
    },
    content: [
      {
        qr: 'https://devtalles.com',
        fit: 75,
        alignment: 'center',
      },
      {
        text: 'Resporte con tamaño',
        fontSize: 10,
        alignment: 'center',
        margin: [0, 20],
      },
    ],
  };

  return docDefinition;
};
