package report;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.*;

import static org.mockito.Mockito.*;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class WeatherReportTest {

    WeatherReport weatherReport;
    WeatherData arizona, mumbai, missouri, mississippi, perth, gotham, dreamland, jurasicpark;
    OpenWeatherMapInteract openWeatherMapInteract;

    List<WeatherData> cityData;
    List<WeatherData> expected;

    Exception e = new Exception("");
    Exception error = new Exception("Error: Not found city");
    //Optional<Exception> ee = new Optional<"">.

    @Before
    public void setUp(){

        weatherReport = new WeatherReport();
        openWeatherMapInteract = new OpenWeatherMapInteract();

        mumbai = new WeatherData("Mumbai", 30, "Hot");
        perth = new WeatherData("Perth", 20, "Sunny");
        missouri = new WeatherData("Missouri", 10, "Cool");
        mississippi = new WeatherData("Mississippi", 10, "Cool");
        arizona = new WeatherData("Arizona", 30, "Hot");
        gotham = new WeatherData("Gotham", error);
        dreamland = new WeatherData("Dreamland", error);
        jurasicpark = new WeatherData("Jurasicpark", error);

        cityData = Arrays.asList(mumbai, perth, missouri, mississippi, arizona);
        expected = Arrays.asList(arizona, mississippi, missouri, mumbai, perth);
    }

    @Test
    public void canary(){

        assertTrue(true);
    }


    @Test
    public void sortByCity(){

        List<WeatherData> result = weatherReport.sortByCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void sortEmptyList(){

        expected = Arrays.asList();
        cityData = Arrays.asList();
        List<WeatherData> result = weatherReport.sortByCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void sortListContainingCitiesWithSameInitial(){

        List<WeatherData> result = weatherReport.sortByCity(cityData);

        assertEquals(expected, result);
    }


    @Test
    public void sortListWithOnlyOneCity(){

        List<WeatherData> cityData = Arrays.asList(arizona);
        expected = Arrays.asList(arizona);
        List<WeatherData> result = weatherReport.sortByCity(cityData);

        assertEquals(expected, result);
    }


    @Test
    public void findColdestCity(){

        cityData = Arrays.asList(mumbai, perth, missouri, arizona);
        List<String> expected = Arrays.asList("Missouri");

        List<String> result = weatherReport.findColdestCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void findGetColdestCityForEmptyList(){

        List<String> expected = Arrays.asList();
        cityData = Arrays.asList();
        List<String> result = weatherReport.findColdestCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void findColdestCityForOneCity(){

        cityData = Arrays.asList(mumbai);
        List<String> expected = Arrays.asList("Mumbai");

        List<String> result = weatherReport.findColdestCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void findColdestCitiesForTwoColdestCities(){

        List<String> expected = Arrays.asList("Missouri", "Mississippi");

        List<String> result = weatherReport.findColdestCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void findHottestCity(){

        cityData = Arrays.asList(mumbai, perth, missouri, mississippi);
        List<String> expected = Arrays.asList("Mumbai");

        List<String> result = weatherReport.findHottestCity(cityData);

        assertEquals(expected, result);
    }


    @Test
    public void findHottestCityForEmptyList(){

        List<String> expected = Arrays.asList();
        cityData = Arrays.asList();
        List<String> result = weatherReport.findHottestCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void findHottestCityForOneCity(){

        cityData = Arrays.asList(mumbai);
        List<String> expected = Arrays.asList("Mumbai");

        List<String> result = weatherReport.findHottestCity(cityData);

        assertEquals(expected, result);
    }

    @Test
    public void findHottestCitiesForTwoHottestCitiesInAList(){

        List<String> expected = Arrays.asList("Mumbai", "Arizona");

        List<String> result = weatherReport.findHottestCity(cityData);

        assertEquals(expected, result);
    }


    @Test
    public void getWholeWeatherReport(){

        List<String> coldestCitiesList = Arrays.asList("Missouri", "Mississippi");
        List<String> hottestCitiesList = Arrays.asList("Mumbai", "Arizona");
        List<String> cityList = Arrays.asList("Mumbai", "Perth", "Missouri", "Mississippi", "Arizona");
        List<WeatherData> citiesWithError = Arrays.asList();

        WeatherService weatherService = Mockito.mock(WeatherService.class);

        when(weatherService.getCityData(mumbai.getCity())).thenReturn(mumbai);
        when(weatherService.getCityData(perth.getCity())).thenReturn(perth);
        when(weatherService.getCityData(missouri.getCity())).thenReturn(missouri);
        when(weatherService.getCityData(mississippi.getCity())).thenReturn(mississippi);
        when(weatherService.getCityData(arizona.getCity())).thenReturn(arizona);

        weatherReport.setWeatherService(weatherService);

        ReturnWeatherReport returnWeatherReport = weatherReport.getWeatherReport(cityList);

        assertEquals(expected, returnWeatherReport.sortedByCity);
        assertEquals(coldestCitiesList, returnWeatherReport.coldestCitiesList);
        assertEquals(hottestCitiesList, returnWeatherReport.hottestCitiesList);
        assertEquals(citiesWithError, returnWeatherReport.citiesWithError);
    }


    @Test
    public void getWholeWeatherReportWhenOneCityFails(){

        List<String> coldestCitiesList = Arrays.asList("Missouri");
        List<String> hottestCitiesList = Arrays.asList("Mumbai");
        List<String> cityList = Arrays.asList("Mumbai", "Perth", "Missouri", "Gotham");
        List<WeatherData> citiesWithError = Arrays.asList(gotham);
        expected = Arrays.asList(missouri, mumbai, perth);

        WeatherService weatherService = Mockito.mock(WeatherService.class);

        when(weatherService.getCityData(mumbai.getCity())).thenReturn(mumbai);
        when(weatherService.getCityData(perth.getCity())).thenReturn(perth);
        when(weatherService.getCityData(missouri.getCity())).thenReturn(missouri);
        when(weatherService.getCityData(gotham.getCity())).thenReturn(gotham);

        weatherReport.setWeatherService(weatherService);

        ReturnWeatherReport returnWeatherReport = weatherReport.getWeatherReport(cityList);

        assertEquals(expected, returnWeatherReport.sortedByCity);
        assertEquals(coldestCitiesList, returnWeatherReport.coldestCitiesList);
        assertEquals(hottestCitiesList, returnWeatherReport.hottestCitiesList);
        assertEquals(citiesWithError, returnWeatherReport.citiesWithError);
    }

    @Test
    public void getWholeWeatherReportWhenAllCitiesFail(){

        List<String> coldestCitiesList = Arrays.asList();
        List<String> hottestCitiesList = Arrays.asList();
        List<String> cityList = Arrays.asList("Gotham", "Dreamland", "Jurasicpark");
        List<WeatherData> citiesWithError = Arrays.asList(gotham, dreamland, jurasicpark);

        expected = Arrays.asList();

        WeatherService weatherService = Mockito.mock(WeatherService.class);

        when(weatherService.getCityData(gotham.getCity())).thenReturn(gotham);
        when(weatherService.getCityData(dreamland.getCity())).thenReturn(dreamland);
        when(weatherService.getCityData(jurasicpark.getCity())).thenReturn(jurasicpark);

        weatherReport.setWeatherService(weatherService);

        ReturnWeatherReport returnWeatherReport = weatherReport.getWeatherReport(cityList);

        assertEquals(expected, returnWeatherReport.sortedByCity);
        assertEquals(coldestCitiesList, returnWeatherReport.coldestCitiesList);
        assertEquals(hottestCitiesList, returnWeatherReport.hottestCitiesList);
        assertEquals(citiesWithError, returnWeatherReport.citiesWithError);
    }

    @Test
    public void getWholeWeatherReportWhenCityListIsEmpty(){

        List<String> coldestCitiesList = Arrays.asList();
        List<String> hottestCitiesList = Arrays.asList();
        List<String> cityList = Arrays.asList();
        List<WeatherData> citiesWithError = Arrays.asList();

        expected = Arrays.asList();

        ReturnWeatherReport returnWeatherReport = weatherReport.getWeatherReport(cityList);

        assertEquals(expected, returnWeatherReport.sortedByCity);
        assertEquals(coldestCitiesList, returnWeatherReport.coldestCitiesList);
        assertEquals(hottestCitiesList, returnWeatherReport.hottestCitiesList);
        assertEquals(citiesWithError, returnWeatherReport.citiesWithError);
    }

    @Test
    public void readTextFileAndGetDataForOneCityUsingJsonParser() throws IOException
    {

        String cityName = "Houston";

        List<String> coldestCitiesList = Arrays.asList("Houston");
        List<String> hottestCitiesList = Arrays.asList("Houston");
        List<String> cityList = Arrays.asList("Houston");
        List<WeatherData> citiesWithError = Arrays.asList();


        InputStream inputStream = new FileInputStream("HoustonData.txt");

        JsonParser jasonParser = new JsonParser();

        JsonElement jsonElement = jasonParser.parse(new InputStreamReader(inputStream));

        openWeatherMapInteract.getDataInJsonFromWeatherMap(cityName, jsonElement);

        WeatherService weatherService = weatherReport;
        weatherReport.setWeatherService(weatherService);

        weatherReport.setOpenWeatherMapObject(openWeatherMapInteract);

        expected = Arrays.asList(weatherReport.getCityData(cityName));

        ReturnWeatherReport returnWeatherReport = weatherReport.getWeatherReport(cityList);

        assertEquals(expected, returnWeatherReport.sortedByCity);
        assertEquals(coldestCitiesList, returnWeatherReport.coldestCitiesList);
        assertEquals(hottestCitiesList, returnWeatherReport.hottestCitiesList);
        assertEquals(citiesWithError, returnWeatherReport.citiesWithError);
    }

    @Test
    public void readEmptyTextFileAndGetDataForOneCityUsingJsonParser() throws IOException
    {

        String cityName = "Houston";

        List<String> coldestCitiesList = Arrays.asList();
        List<String> hottestCitiesList = Arrays.asList();
        List<String> cityList = Arrays.asList();
        List<WeatherData> citiesWithError = Arrays.asList();


        InputStream inputStream = new FileInputStream("EmptyData.txt");

        JsonParser jasonParser = new JsonParser();

        JsonElement jsonElement = jasonParser.parse(new InputStreamReader(inputStream));

        openWeatherMapInteract.getDataInJsonFromWeatherMap(cityName, jsonElement);

        WeatherService weatherService = weatherReport;
        weatherReport.setWeatherService(weatherService);

        weatherReport.setOpenWeatherMapObject(openWeatherMapInteract);

        expected = Arrays.asList();

        ReturnWeatherReport returnWeatherReport = weatherReport.getWeatherReport(cityList);

        assertEquals(expected, returnWeatherReport.sortedByCity);
        assertEquals(coldestCitiesList, returnWeatherReport.coldestCitiesList);
        assertEquals(hottestCitiesList, returnWeatherReport.hottestCitiesList);
        assertEquals(citiesWithError, returnWeatherReport.citiesWithError);
    }

//    /@Test
//    public void testConnection() throws IOException
//    {
//        String city = "Houston";
//
//        OpenWeatherMapInteract openWeatherMapInteract = Mockito.mock(OpenWeatherMapInteract.class);
//
//        when(openWeatherMapInteract.setConnection(city)).thenThrow(IOException);
//    }
}