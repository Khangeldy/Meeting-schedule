import moment from 'moment'

export const getFormatted = (stringDate, format='YYYYMMDD') => {
  return moment(stringDate).format(format);
}
