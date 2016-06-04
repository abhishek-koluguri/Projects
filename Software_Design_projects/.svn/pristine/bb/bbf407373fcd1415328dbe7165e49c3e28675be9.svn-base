package report.ui;

import com.google.gson.JsonElement;
import report.OpenWeatherMapInteract;
import report.ReturnWeatherReport;
import report.WeatherReport;
import report.WeatherService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class WeatherServiceUI {

    List<String> cityList = new ArrayList<>();
    OpenWeatherMapInteract openWeatherReportInteract;
    WeatherReport weatherReport;
    ReturnWeatherReport returnWeatherReport;


    public static void main(String[] args) throws IOException {

        WeatherServiceUI weatherServiceUI = new WeatherServiceUI();

        weatherServiceUI.setUP();

        weatherServiceUI.getInputCitiesFromUser();

        weatherServiceUI.interactWithOpenWeatherMapInteract();

        weatherServiceUI.getWeatherReport();

        weatherServiceUI.displayWeatherReport();

        weatherServiceUI.disconnect();
    }

    public void setUP() {

        weatherReport = new WeatherReport();
        openWeatherReportInteract = new OpenWeatherMapInteract();

        WeatherService weatherService = weatherReport;

        weatherReport.setWeatherService(weatherService);
        weatherReport.setOpenWeatherMapObject(openWeatherReportInteract);
    }

    public void getInputCitiesFromUser() {

        Scanner cityName = new Scanner(System.in);
        Scanner actionInput = new Scanner(System.in);

        String action;

        do {
            String city;
            System.out.println("Please enter city to get weather data");
            city = cityName.next();

            cityList.add(city);

            System.out.println("Enter Y to add another city OR enter any other character to get Weather Report");
            action = actionInput.next();

        } while (action.equals("y"));
    }

    public void interactWithOpenWeatherMapInteract() throws IOException{

        for (String theCityList: cityList) {

            openWeatherReportInteract.setConnection(theCityList);
            JsonElement jsonElement = openWeatherReportInteract.getContentFromURL();
            openWeatherReportInteract.getDataInJsonFromWeatherMap(theCityList, jsonElement);
        }
    }

    public void getWeatherReport()
    {
       returnWeatherReport = weatherReport.getWeatherReport(cityList);
    }

    public void displayWeatherReport()
    {

        System.out.println("Cities in sorted order");
        System.out.println(returnWeatherReport.sortedByCity);

        System.out.println("Coldest city: " + returnWeatherReport.coldestCitiesList);

        System.out.println("Hottest city: " + returnWeatherReport.hottestCitiesList);

        System.out.println("Cities with error: " + returnWeatherReport.citiesWithError);
    }

    public void disconnect()
    {
        openWeatherReportInteract.disconnect();
    }
}
