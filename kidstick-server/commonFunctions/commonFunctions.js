export const filterData = (data, filters) => {
  return data.filter(item => {
    return Object.keys(filters).every(key => 
      item[key].toString().toLowerCase().includes(filters[key].toString().toLowerCase())
    );
  });
};