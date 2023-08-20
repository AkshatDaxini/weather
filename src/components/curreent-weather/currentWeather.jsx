import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  console.log(data);
  //convert an object to a array
  const mainKeys = Object.keys(data.main);
  const mainData = Object.values(data.main);

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="Weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        ></img>
      </div>
      <div className="bottom">
        <p className="temperature">19°C</p>
        <div className="details">
          {mainKeys.map((key, index) => (
            <div className="parameter-row">
              <span className="parameter-label">
                {key.replace("_", " ").toUpperCase()}
              </span>
              <span className="parameter-value">{mainData[index]}</span>
            </div>
          ))}
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
