import { images } from 'src/assets/images';
import languages from 'values/languages';

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
export const categData = (lang: string) => {
  const data: { title: string; svgName: any; value: string }[] = [
    { title: languages[lang].diving, svgName: 'diving', value: 'diving' },
    { title: languages[lang].wellness, svgName: 'wellness', value: 'wellness' },
    { title: languages[lang].sports, svgName: 'bbuggy', value: 'sports' },
    {
      title: languages[lang].kiteSurfing,
      svgName: 'surfing',
      value: 'kiteSurfing',
    },
    {
      title: languages[lang].Hiking,
      svgName: 'trips',
      value: 'hiking',
    },
    { title: languages[lang].Others, svgName: 'garden', value: 'others' },
  ];
  return data;
};
export const imageList = [images.present, images.present, images.present];
