import languages from 'values/languages';

export const data = (lang: string) => {
  return [
    { title: languages[lang].editProfile, iconName: 'edit', to: 'editProfile' },
    {
      title: languages[lang].myBooking,
      iconName: 'myBookings',
      to: 'myBookings',
    },
    { title: languages[lang].wishlist, iconName: 'favourites', to: 'wishlist' },
  ];
};
