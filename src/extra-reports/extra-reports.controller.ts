import { Controller, Get, Res } from '@nestjs/common';
import { ExtraReportsService } from './extra-reports.service';
import { Response } from 'express';

@Controller('extra-reports')
export class ExtraReportsController {
  constructor(private readonly extraReportsService: ExtraReportsService) {}

  @Get('html-report')
  async getHtmlReport(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getHtmlReport();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Html Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('html-report2')
  async getHtmlReport2(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getHtmlReport2();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Html Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('html-report3')
  async getHtmlReport3(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getHtmlReport3();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Html Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('comunity-report')
  async getComunityReport(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getComunity();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Comunity Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('custom-size')
  async getCustSize(@Res() response: Response) {
    const pdfDoc = this.extraReportsService.getCustSize();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Custon Size Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
