import languages from 'values/languages';

export const Data = (lang: string) => {
  const data: { title: string; value: number }[] = [
    { title: languages[lang].hightPrice, value: 1 },
    { title: languages[lang].lowPrice, value: 2 },
    { title: languages[lang].highRating, value: 3 },
    { title: languages[lang].lowRating, value: 4 },
  ];
  return data;
};
