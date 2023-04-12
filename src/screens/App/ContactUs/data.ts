import languages from 'values/languages';

export const Data = (lang: string) => {
  return [
    {
      title: languages[lang].address,
      subTitle: languages[lang].fullAddress,
      iconName: 'address',
    },
    {
      title: languages[lang].faq,
      subTitle: languages[lang].phone,
      iconName: 'whatsApp',
    },
    {
      title: languages[lang].sendUs,
      subTitle: languages[lang].Email,
      iconName: 'gmail',
    },
    {
      title: languages[lang].callUs,
      subTitle: languages[lang].phone,
      iconName: 'phoneNumber',
    },
  ];
};
