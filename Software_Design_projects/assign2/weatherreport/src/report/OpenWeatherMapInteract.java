package report;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class OpenWeatherMapInteract {

    HttpURLConnection request;
    WeatherData weatherData;
    JsonElement jsonElement;
    public List<WeatherData> cityDataObjectsList = new ArrayList<>();

    public void setConnection(String city) throws IOException {

        try {

            URL url = new URL("http://api.openweathermap.org/data/2.5/weather?q=" + city + ",");
            request = (HttpURLConnection) url.openConnection();
            request.connect();

        }catch (Exception ex){System.out.println("Problem connecting website, Please try later: ");}
    }

    public JsonElement getContentFromURL() throws IOException
    {

        try {

            JsonParser jasonParser = new JsonParser();
            jsonElement = jasonParser.parse(new InputStreamReader((InputStream) request.getContent()));

            return jsonElement;
        }catch (Exception ex)
        {
            System.out.println("Problem connecting website, Please try later: ");
            return null;
        }
    }

    public void getDataInJsonFromWeatherMap(String theCity, JsonElement theJasonElement) throws IOException
    {
        try {

            jsonElement = theJasonElement;
            JsonObject jsonObject = jsonElement.getAsJsonObject();

            JsonArray weather = jsonObject.getAsJsonArray("weather");
            JsonObject weatherObject = weather.getAsJsonArray().get(0).getAsJsonObject();
            String condition = weatherObject.get("main").toString();

            JsonElement temp = jsonObject.get("main");
            JsonObject temperatureObject = temp.getAsJsonObject();
            double temperature = temperatureObject.get("temp").getAsDouble();

            JsonElement cityName = jsonObject.get("name");
            String city = cityName.toString().replace("\"", "");

            weatherData = new WeatherData(city, temperature, condition);
            cityDataObjectsList.add(weatherData);
        }
        catch (Exception ex)
        {
            weatherData = new WeatherData(theCity, ex);
            cityDataObjectsList.add(weatherData);
        }
    }

    public List<WeatherData> getCityDataObjectsList()
    {
        return cityDataObjectsList;
    }

    public void disconnect()
    {
        request.disconnect();
    }
}
