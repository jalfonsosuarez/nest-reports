import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';

import {
  getCountriesReport,
  getEmploymentLetter,
  getEmploymentLetterById,
  getHelloWorldReport,
} from 'src/reports';
@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor(private readonly printerService: PrinterService) {
    super();
  }

  hello() {
    const docDefinition = getHelloWorldReport({ name: 'Jose Alfonso' });
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  employmentLetter() {
    const docDefinition = getEmploymentLetter();
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async employmentLetterById(employeeId: number) {
    const employee = await this.employees.findFirst({
      where: {
        id: employeeId,
      },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with id ${employeeId} not found!`);
    }

    const docDefinition = getEmploymentLetterById({
      employerName: 'Jefe de la empresa',
      employerPosition: 'Propietario',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'TucanCodie',
    });
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }

  async getCountryReport() {
    const countries = await this.countries.findMany({
      where: {
        local_name: { not: null },
        continent: { not: null },
      },
    });

    if (!countries) {
      throw new NotFoundException(`There are not counties in your database.`);
    }

    const docDefinition = getCountriesReport({
      title: 'COUNTRY REPORT',
      subTitle: 'A list of countries',
      countries,
    });
    const doc = this.printerService.createPdf(docDefinition);

    return doc;
  }
}
