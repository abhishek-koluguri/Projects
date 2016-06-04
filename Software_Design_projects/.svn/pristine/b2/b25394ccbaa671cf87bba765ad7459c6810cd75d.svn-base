package report;

public class WeatherData{

    WeatherReport weatherReport;

    public final String cityName;
    public final double temperature;
    public final String condition;
   // public final Optional<Exception> error;
    public final Exception error;

    public WeatherData(String theCity, double theTemperature, String theCondition){

        cityName = theCity;
        temperature = theTemperature;
        condition = theCondition;
        error = new Exception("");
    }

    public WeatherData(String theCity, Exception theError){

        cityName = theCity;
        error = theError;
        temperature = 0;
        condition = "";
    }

    public String getCity()
    {
        return cityName;
    }

    public double getTemperature()
    {
        return temperature;
    }

}
