import languages from 'values/languages';

export const data = (lang: string) => {
  return [
    { title: languages[lang].editProfile, iconName: 'edit' },
    { title: languages[lang].myBooking, iconName: 'myBookings' },
    { title: languages[lang].wishlist, iconName: 'favourites' },
  ];
};
