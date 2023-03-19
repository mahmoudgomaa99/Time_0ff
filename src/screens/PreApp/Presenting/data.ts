export const data = (languages: { [key: string]: any }, lang: 'en' | 'ar') => {
  return [
    {
      title: languages[lang].explore,
      desc: languages[lang].desc,
    },
    {
      title: languages[lang].meditation,
      desc: languages[lang].desc,
    },
    {
      title: languages[lang].enjoy,
      desc: languages[lang].desc,
    },
  ];
};
