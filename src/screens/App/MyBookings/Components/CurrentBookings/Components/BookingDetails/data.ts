import languages from 'values/languages';

export const Data = (lang: string) => {
  return [
    {
      title: languages[lang].experience,
      subTitle: languages[lang].drivingActivity,
      icon: 'cube',
    },
    {
      title: languages[lang].numberOfPerson,
      subTitle: languages[lang].numOfPerson,
      icon: 'group',
    },
    {
      title: languages[lang].date,
      subTitle: languages[lang].numOfPerson,
      icon: 'calendar2',
    },
  ];
};
