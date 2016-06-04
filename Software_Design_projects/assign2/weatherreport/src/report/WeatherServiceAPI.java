package report;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.*;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class WeatherServiceAPI {

    public static void main(String[] args) throws IOException {


        URL url = new URL("http://api.openweathermap.org/data/2.5/weather?q=Mumbai,");
        HttpURLConnection request = (HttpURLConnection) url.openConnection();
        request.connect();


        JsonParser jasonParser = new JsonParser();
        JsonElement jsonElement = jasonParser.parse(new InputStreamReader((InputStream) request.getContent()));
        JsonObject jsonObject = jsonElement.getAsJsonObject();
        System.out.println(jsonObject.getAsJsonObject());

        JsonArray weather = jsonObject.getAsJsonArray("weather");
        JsonObject weatherObject =  weather.getAsJsonArray().get(0).getAsJsonObject();
        System.out.println(weatherObject.get("main"));

        JsonElement temperature = jsonObject.get("main");
        JsonObject temperatureObject =  temperature.getAsJsonObject();
        System.out.println(temperatureObject.get("temp"));

        JsonElement city = jsonObject.get("name");
        System.out.println(city);

        request.disconnect();
    }
}
