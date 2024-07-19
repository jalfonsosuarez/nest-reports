import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { CurrencyFormater, DateFormater } from 'src/helpers';
import { footerSection } from './sections/footer.section';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 100,
  height: 30,
  margin: [40, 20, 10, 20],
};

const styles: StyleDictionary = {
  header: {
    fontSize: 18,
    bold: true,
    margin: [0, 20, 0, 0],
  },
  subHeader: {
    fontSize: 14,
    bold: true,
    margin: [0, 20, 0, 0],
  },
};

export interface CompleteOrder {
  order_id: number;
  customer_id: number;
  order_date: Date;
  customers: Customers;
  order_details: OrderDetail[];
}

export interface Customers {
  customer_id: number;
  customer_name: string;
  contact_name: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface OrderDetail {
  order_detail_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  products: Products;
}

export interface Products {
  product_id: number;
  product_name: string;
  category_id: number;
  unit: string;
  price: string;
}

interface ReportValues {
  title?: string;
  subTitle?: string;
  data: CompleteOrder;
}

export const orderByIdReport = (values: ReportValues): TDocumentDefinitions => {
  const { data } = values;

  const { customers, order_details } = data;

  const subTotal = order_details.reduce(
    (acc, detail) => acc + detail.quantity * +detail.products.price,
    0,
  );

  return {
    styles: styles,
    header: logo,
    pageMargins: [40, 60, 40, 60],
    footer: footerSection,
    content: [
      {
        text: 'Tucan Code',
        style: 'header',
      },
      {
        columns: [
          {
            text: '15 Montgomery Str, Suite 100, \nOttawa ON K2Y 9X1, CANADA\n BN: 12783671823 \nhttps://devtalles.com',
          },
          {
            text: [
              {
                text: `Recibo No#: ${data.order_id}\n`,
                bold: true,
              },
              {
                text: `Fecha del recibo: ${DateFormater.getDDMMMMYYYY(data.order_date)}\n`,
              },
              {
                text: `Pagar antes de: `,
              },
              {
                text: `${DateFormater.getDDMMMMYYYY(new Date())}\n`,
                bold: true,
              },
            ],
            alignment: 'right',
          },
        ],
      },
      { qr: 'https://devtalles.com', fit: 75, alignment: 'right' },
      {
        text: [
          {
            text: 'Cobrar a:\n',
            style: 'subHeader',
          },
          {
            text: 'Razón Social: ',
          },
          {
            text: `${customers.customer_name}\n`,
            style: 'subHeader',
          },
          {
            text: `Contacto: ${customers.contact_name}\n`,
          },
          {
            text: `${customers.address} ${customers.postal_code} ${customers.city} (${customers.country})\n`,
          },
        ],
      },
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: [50, '*', 'auto', 'auto', 'auto'],
          body: [
            ['ID', 'Descripción', 'Cantidad', 'Precio', 'Total'],
            ...order_details.map((detail) => [
              detail.product_id,
              detail.products.product_name,
              {
                text: detail.quantity,
                aligment: 'right',
              },
              {
                text: CurrencyFormater.formatCurrency(+detail.products.price),
                alignment: 'right',
              },
              {
                text: CurrencyFormater.formatCurrency(
                  detail.quantity * +detail.products.price,
                ),
                alignment: 'right',
              },
            ]),
          ],
        },
      },
      '\n',
      {
        columns: [
          {
            width: '*',
            text: ' ',
          },
          {
            width: 'auto',
            layout: 'noBorders',
            table: {
              body: [
                [
                  'Subtotal',
                  {
                    text: CurrencyFormater.formatCurrency(subTotal),
                    alignnemt: 'right',
                  },
                ],
                [
                  'IVA 21%',
                  {
                    text: CurrencyFormater.formatCurrency(subTotal * 0.21),
                    alignnemt: 'right',
                  },
                ],
                [
                  {
                    text: 'Total',
                    bold: true,
                  },
                  {
                    text: CurrencyFormater.formatCurrency(subTotal * 1.21),
                    alignnemt: 'right',
                    bold: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  };
};
