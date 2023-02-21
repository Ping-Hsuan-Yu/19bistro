import { useState, useCallback, useEffect } from "react";
import "./style.css";
import styled from 'styled-components';

import Clear from "./weatherimages/19weather-06.png";
import CloudyFog from "./weatherimages/19weather-08.png";
import Cloudy from "./weatherimages/19weather-07.png";
import Fog from "./weatherimages/19weather-11.png";
import PartiallyClearWithRain from "./weatherimages/19weather-09.png";
import Snowing from "./weatherimages/19weather-10.png";
import Thunderstorm from "./weatherimages/19weather-12.png";

const Weatherdiv = styled.div`
  margin: 0 0 1.5rem 0;
  padding: 0 0 0.5rem 0;
  border-bottom: #b22c27 solid 3px;
  display: flex;
`;
const DIV = styled.div``;
const Img = styled.img`
  height: 4rem;
  margin: 0 0.5rem 0 0;
`;
const Righth5 = styled.h5`
  margin: 0.3rem 0;
`;

const Weather = () => {
  // weather
  const AUTHORIZATION_KEY = "CWB-507B37E0-0383-4D8C-878D-628B54EC3536";
  const LOCATION_NAME_FORECAST = "臺中市";
  const [weatherElement, setWeatherElement] = useState({
    observationTime: new Date(),
    locationName: "",
    temperature: 0,
    windSpeed: 0,
    description: " ",
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: "",
    minT: 0,
    maxt: 0,
    isLoading: true,
  });

  const fetchWeatherForecast = () => {
    return fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}`
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (
              ["Wx", "PoP", "CI", "MinT", "MaxT"].includes(item.elementName)
            ) {
              neededElements[item.elementName] = item.time[0].parameter;
            }
            return neededElements;
          },
          {}
        );

        return {
          description: weatherElements.Wx.parameterName,
          weatherCode: weatherElements.Wx.parameterValue,
          rainPossibility: weatherElements.PoP.parameterName,
          comfortability: weatherElements.CI.parameterName,
          minT: weatherElements.MinT.parameterName,
          maxt: weatherElements.MaxT.parameterName,
        };
      });
  };

  const fetchData = useCallback(async () => {
    const [weatherForecast] = await Promise.all([fetchWeatherForecast()]);
    setWeatherElement({
      ...weatherForecast,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const { description, minT, maxt, weatherCode } = weatherElement;
  // console.log(description);

  const weatherTypes = {
    isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
    isClear: [1],
    isCloudyFog: [25, 26, 27, 28],
    isCloudy: [2, 3, 4, 5, 6, 7],
    isFog: [24],
    isPartiallyClearWithRain: [
      8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39,
    ],
    isSnowing: [23, 37, 42],
  };

  const weatherIcons = {
    isThunderstorm: Thunderstorm,
    isClear: Clear,
    isCloudyFog: CloudyFog,
    isCloudy: Cloudy,
    isFog: Fog,
    isPartiallyClearWithRain: PartiallyClearWithRain,
    isSnowing: Snowing,
  };

  const weatherCode2Type = (weatherCode) => {
    const [weatherType] =
      Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
        weatherCodes.includes(Number(weatherCode))
      ) || [];
    return weatherType;
  };

  return (
    <Weatherdiv>
      <DIV>
        <Img src={weatherIcons[weatherCode2Type(weatherCode)]} alt="" />
      </DIV>
      <DIV>
        <Righth5>{description}</Righth5>
        <Righth5>
          {minT} ~ {maxt} °C
        </Righth5>
      </DIV>
    </Weatherdiv>
  );
};

export default Weather;