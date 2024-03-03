const MONTHS = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
];

export const DateUtils = {
  format(date?: string, format: string = 'Le DD MMM YYYY à hhhmm') {
    let dateFormat = '';
    if (date && date?.length >= 19) {
      const year: string = date.length >= 3 ? date.substring(0, 4) : '';
      const month: string = date.length >= 7 ? date.substring(5, 7) : '';
      const day: string = date.length >= 10 ? date.substring(8, 10) : '';
      const hour: string = date.length >= 13 ? date.substring(11, 13) : '';
      const minute: string = date.length >= 16 ? date.substring(14, 16) : '';
      const second: string = date.length >= 19 ? date.substring(17, 19) : '';

      dateFormat = format;
      dateFormat = dateFormat.replace('YYYY', year);
      dateFormat = dateFormat.replace('MMM', MONTHS[parseInt(month) - 1]);
      dateFormat = dateFormat.replace('MM', month);
      dateFormat = dateFormat.replace('DD', day);
      dateFormat = dateFormat.replace('hh', hour);
      dateFormat = dateFormat.replace('mm', minute);
      dateFormat = dateFormat.replace('ss', second);
    }

    return dateFormat;
  },

  showEndDate(dateString: string) {
    const givenDate = new Date(dateString ?? '');
    const currentDate = new Date();
    const differenceMs = givenDate.valueOf() - currentDate.valueOf();

    // Convert milliseconds to days, hours, and minutes
    const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, minutes };
  },

  isDateSupNow(dateString?: string) {
    const givenDate = new Date(dateString ?? '');
    const currentDate = new Date();
    const differenceMs = givenDate.valueOf() - currentDate.valueOf();
    return differenceMs > 0;
  },
};
