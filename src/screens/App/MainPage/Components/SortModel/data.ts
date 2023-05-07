import languages from 'values/languages';

export const Data = (lang: string) => {
  const data: { title: string }[] = [
    { title: languages[lang].termCondition },
    { title: languages[lang].termCondition },
    { title: languages[lang].termCondition },
    { title: languages[lang].termCondition },
  ];
  return data;
};
