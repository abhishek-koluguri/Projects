package report;

import static java.util.stream.Collectors.*;
import static java.util.Comparator.*;
import java.util.*;

public class WeatherReport implements WeatherService{

    WeatherService theWeatherService;
    OpenWeatherMapInteract openWeatherMapInteract;

    List<WeatherData> sortByCity(List<WeatherData> cityData)
    {

        return cityData.stream()
                       .sorted(comparing(WeatherData::getCity))
                       .collect(toList());
    }

    public List<String> findColdestCity(List<WeatherData> cityData) {

            double coldestTemperature =
                    cityData.stream()
                            .mapToDouble(WeatherData::getTemperature)
                            .min()
                            .orElse(0.0);

            return cityData.stream()
                           .filter(data -> data.getTemperature() == coldestTemperature)
                           .map(WeatherData::getCity)
                           .collect(toList());
    }

    public List<String> findHottestCity(List<WeatherData> cityData)
    {
        double hottestTemperature =
                    cityData.stream()
                            .mapToDouble(WeatherData::getTemperature)
                            .max()
                            .orElse(0.0);

            return cityData.stream()
                           .filter(data -> data.getTemperature() == hottestTemperature)
                           .map(WeatherData::getCity)
                           .collect(toList());
    }

    public ReturnWeatherReport getWeatherReport(List<String> cityList){


        List<WeatherData> cityData = new ArrayList<>();
        List<WeatherData> citiesWithError = new ArrayList<>();

        if (!cityList.isEmpty()) {

            for (String theCityList :cityList) {

                WeatherData weatherData = theWeatherService.getCityData(theCityList);

                if (weatherData.error.getMessage().equals("Error: Not found city")) {

                    citiesWithError.add(weatherData);
                }
                else {cityData.add(weatherData);}
            }
        }

        List<WeatherData> sortedByCity = sortByCity(cityData);
        List<String> coldestCitiesList = findColdestCity(cityData);
        List<String> hottestCitiesList = findHottestCity(cityData);

        return new ReturnWeatherReport(sortedByCity, coldestCitiesList, hottestCitiesList, citiesWithError);
   }

    public void setWeatherService(WeatherService weatherService)
    {
        theWeatherService = weatherService;
    }

    public void setOpenWeatherMapObject(OpenWeatherMapInteract theOpenWeatherMapInteract)
    {
        openWeatherMapInteract = theOpenWeatherMapInteract;
    }

    @Override
    public WeatherData getCityData(String city)
    {

        List<WeatherData> cityDataObjectsList = openWeatherMapInteract.getCityDataObjectsList();

                cityDataObjectsList.stream()
                                   .filter(data -> data.getCity().equals(city))
                                   .collect(toList());

        return cityDataObjectsList.get(0);
    }
}