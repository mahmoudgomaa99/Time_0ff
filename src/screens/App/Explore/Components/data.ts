import languages from 'values/languages';

export const categData = (lang: string) => {
  const data: { title: string; svgName: any; id: number }[] = [
    { title: languages[lang].trips, svgName: 'trips', id: 0 },
    { title: languages[lang].aquaPark, svgName: 'garden', id: 1 },
    { title: languages[lang].nileTrip, svgName: 'nileTrips', id: 2 },
    { title: languages[lang].surfing, svgName: 'surfing', id: 3 },
    { title: languages[lang].bBuggy, svgName: 'bbuggy', id: 4 },
    { title: languages[lang].diving, svgName: 'diving', id: 5 },
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
