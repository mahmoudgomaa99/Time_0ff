import languages from 'values/languages';

export const categData = (lang: string) => {
  const data: { title: string; svgName: any }[] = [
    { title: languages[lang].trips, svgName: 'trips' },
    { title: languages[lang].aquaPark, svgName: 'garden' },
    { title: languages[lang].nileTrip, svgName: 'nileTrips' },
    { title: languages[lang].surfing, svgName: 'surfing' },
    { title: languages[lang].bBuggy, svgName: 'bbuggy' },
    { title: languages[lang].diving, svgName: 'diving' },
  ];
  return data;
};

export const cardData = (lang: string) => {
  return [
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
    },
  ];
};
