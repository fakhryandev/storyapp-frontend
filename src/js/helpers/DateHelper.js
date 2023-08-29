const DateHelper = {
  formatDate(rawDate) {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(rawDate).toLocaleDateString('id-ID', options);
    return formattedDate;
  },
};

export default DateHelper;
