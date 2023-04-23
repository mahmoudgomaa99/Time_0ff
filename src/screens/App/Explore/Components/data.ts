import languages from 'values/languages';

export const categData = (lang: string) => {
  const data: { title: string; svgName: any; value: string }[] = [
    { title: languages[lang].trips, svgName: 'trips', value: 'trips' },
    { title: languages[lang].aquaPark, svgName: 'garden', value: 'aquaPark' },
    {
      title: languages[lang].nileTrip,
      svgName: 'nileTrips',
      value: 'nileTrip',
    },
    { title: languages[lang].surfing, svgName: 'surfing', value: 'surfing' },
    { title: languages[lang].bBuggy, svgName: 'bbuggy', value: 'bBuggy' },
    { title: languages[lang].diving, svgName: 'diving', value: 'diving' },
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
      id: 0,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      stars: languages[lang].cardStars,
      id: 1,
    },
    {
      id: 2,
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
      id: 3,
      stars: languages[lang].cardStars,
    },
    {
      title: languages[lang].cardTitle,
      description: languages[lang].cardDescription,
      location: languages[lang].cardLocation,
      name: languages[lang].cardName,
      id: 4,
      stars: languages[lang].cardStars,
    },
  ];
};
