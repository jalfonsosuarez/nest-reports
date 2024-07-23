import fs from 'fs';

import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';

import { getHtmlContent } from 'src/helpers/html-to-pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import {
  getComunityReport,
  footerSection,
  headerSection,
  getCustomSizeReport,
} from 'src/reports';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}

  getHtmlReport() {
    const html = fs.readFileSync('src/reports/html/basic-01.html', 'utf8');

    const content = getHtmlContent(html);
    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML to PDF',
        subTitle: 'Convertir HTML a PDF',
      }),
      content: ['Hola mundo', content],
    };
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  getHtmlReport2() {
    const html = fs.readFileSync('src/reports/html/basic-02.html', 'utf8');

    const content = getHtmlContent(html);
    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML to PDF',
        subTitle: 'Convertir HTML a PDF',
      }),
      footer: footerSection,
      content: ['Hola mundo', content],
    };
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  getHtmlReport3() {
    const html = fs.readFileSync('src/reports/html/basic-03.html', 'utf8');

    const content = getHtmlContent(html, {
      client: 'Nombre del cliente',
      title: 'El título que sea',
    });
    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML to PDF',
        subTitle: 'Convertir HTML a PDF',
      }),
      footer: footerSection,
      content: ['Hola mundo', content],
    };
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  getComunity() {
    const docDefinition = getComunityReport();
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  getCustSize() {
    const docDefinition = getCustomSizeReport();
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
