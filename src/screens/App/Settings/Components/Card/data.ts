import languages from 'values/languages';

export const data = (lang: string) => {
  return [
    { title: languages[lang].language, iconName: 'lang', show: 'language' },
    {
      title: languages[lang].currency,
      iconName: 'currency',
      show: 'currency',
    },
    {
      title: languages[lang].changePassword,
      iconName: 'changePassword',
      show: 'changePassword',
    },
    { title: languages[lang].contactUs, iconName: 'contactUs',show:'help' },
  ];
};
