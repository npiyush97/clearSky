function return5dayforecase(list) {
  const forecastData = [];
  for (let i = 0; i < list.length; i += 8) {
    const temp = [];
    const dt = new Date(list[i + 5].dt_txt);
    temp.push(`${dt.getDate()} / ${dt.getFullYear()}`);
    temp.push(list[i].weather[0].main);
    temp.push(list[i + 3].weather[0].description);
    temp.push(
      `https://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png`
    );
    temp.push(list[i].main.temp);
    forecastData.push(temp);
  }
  return forecastData;
}
export default return5dayforecase;
