import type { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportParams {
  name: string;
  id?: number;
}

export const getHelloWorldReport = (
  reportParams: ReportParams,
): TDocumentDefinitions => {
  const { name } = reportParams;

  const docDefinition: TDocumentDefinitions = {
    content: [`Hola ${name}`],
  };

  return docDefinition;
};
