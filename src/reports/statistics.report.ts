import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getStatisticsReport = async () => {
  const docDefinition: TDocumentDefinitions = {
    content: ['Statistic report'],
  };

  return docDefinition;
};
