import languages from 'values/languages';

export const Data = (
  lang: string,
  book: any,
  currency?: any,
  EGPRate?: any,
) => {
  return [
    {
      title: languages[lang].price,
      value:
        currency !== 'EGP'
          ? `${parseInt(
              //@ts-ignore
              Number(book?.price) / Number(EGPRate),
            )} ${currency}`
          : book?.price?.toString() + ' ' + currency,
    },
    {
      title: languages[lang].others,
      value: 0,
    },
    {
      title: languages[lang].paidBy,
      value: languages[lang].fawry,
    },
  ];
};
