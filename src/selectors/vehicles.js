import moment from 'moment';

// Get visible vehicles

export default (vehicles, { text, sortBy, startDate, endDate }) => {
  return vehicles.filter((vehicle) => {
    const createdAtMoment = moment(vehicle.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = vehicle.description.toLowerCase().includes(text.toLowerCase()) ||
                      vehicle.brand.toLowerCase().includes(text.toLowerCase()) ||
                      vehicle.trim.toLowerCase().includes(text.toLowerCase()) ||
                      vehicle.shortDescription.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
