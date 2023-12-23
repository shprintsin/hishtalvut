function HandleFilterChange(setFilterConfig) {
  return (key, value) => {
    setFilterConfig(prev => ({ ...prev, [key]: value }));
    console.log(key, value);
  };
}
