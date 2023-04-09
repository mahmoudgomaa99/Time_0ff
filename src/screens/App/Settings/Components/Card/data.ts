import languages from 'values/languages';

export const data = (lang: string) => {
  return [
    { title: languages[lang].language, iconName: 'edit', show: 'language' },
    {
      title: languages[lang].currency,
      iconName: 'myBookings',
      show: 'currency',
    },
    {
      title: languages[lang].changePassword,
      iconName: 'favourites',
      show: 'changePassword',
    },
    { title: languages[lang].helpCenter, iconName: 'favourites',show:'help' },
  ];
};
