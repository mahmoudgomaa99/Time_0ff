import languages from 'values/languages';

export const Data = (lang: string, book: any) => {
  return [
    {
      title: languages[lang].price,
      value: book?.price,
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
