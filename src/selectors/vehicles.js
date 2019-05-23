import moment from 'moment';
import strings from '../resources/strings';

// Get visible vehicles
export default (vehicles, { text, sortBy}) => {
  return vehicles.filter((vehicle) => {
    const textMatch = vehicle.description.toLowerCase().includes(text.toLowerCase()) ||
                      vehicle.brand.toLowerCase().includes(text.toLowerCase()) ||
                      vehicle.trim.toLowerCase().includes(text.toLowerCase()) ||
                      vehicle.shortDescription.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.year < b.year ? 1 : -1;
    } else if (sortBy === 'amount') {
      return (a.currency === strings.site.currencies.uss ?
              a.amount * 44 : 
              a.amount) < 
             (b.currency === strings.site.currencies.uss ?
              b.amount * 44 : 
              b.amount) 
              ? 1 : -1;
    }
  });
};
