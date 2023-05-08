import languages from 'values/languages';

export const Data = (lang: string) => {
  const data: { title: string; value: number }[] = [
    { title: languages[lang].hightPrice, value: 0 },
    { title: languages[lang].lowPrice, value: 1 },
    { title: languages[lang].rating, value: 2 },
    { title: languages[lang].latest, value: 3 },
  ];
  return data;
};
