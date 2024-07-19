import { Content, ContextPageSize } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage?: number,
  pageCount?: number,
  pageSize?: ContextPageSize,
): Content => {
  return {
    text: `Page: ${currentPage} / ${pageCount}`,
    alignment: 'right',
    fontSize: 12,
    bold: true,
    margin: [0, 20, 35, 0],
  };
};
