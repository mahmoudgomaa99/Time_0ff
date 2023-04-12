import languages from 'values/languages';

export const Data = (lang: string) => {
  return [
    {
        title:languages[lang].price,
        value:300,
    },
    {
        title:languages[lang].others,
        value:50,
    },
    {
        title:languages[lang].paidBy,
        value:languages[lang].fawry,
    },


  ];
};
