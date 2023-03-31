import languages from 'values/languages';

export const Data = (lang: string) => {
  return [
    {
      name: languages[lang].user,
      review: languages[lang].cardDescription,
    },
    {
      name: languages[lang].user,
      review: languages[lang].cardDescription,
    },
    {
      name: languages[lang].user,
      review: languages[lang].cardDescription,
    },
    {
      name: languages[lang].user,
      review: languages[lang].cardDescription,
    },
    {
      name: languages[lang].user,
      review: languages[lang].cardDescription,
    },
  ];
};
