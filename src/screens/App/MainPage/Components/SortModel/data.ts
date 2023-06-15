import languages from 'values/languages';

export const Data = (lang: string) => {
  const data: {
    title: string;
    value: { sort_by: string; sort_type: string };
    checked: number;
  }[] = [
    {
      title: languages[lang].hightPrice,
      value: {
        sort_type: 'DESC',
        sort_by: 'price',
      },
      checked: 1,
    },
    {
      title: languages[lang].lowPrice,
      value: {
        sort_type: 'ASC',
        sort_by: 'price',
      },
      checked: 2,
    },
    {
      title: languages[lang].highRating,
      value: {
        sort_type: 'DESC',
        sort_by: 'rating',
      },
      checked: 3,
    },
    {
      title: languages[lang].lowRating,
      value: {
        sort_type: 'ASC',
        sort_by: 'rating',
      },
      checked: 4,
    },
  ];
  return data;
};
