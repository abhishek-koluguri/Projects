package application;

public class StringWriter extends Writer{

    private StringBuilder stringBuilder = new StringBuilder();

    public StringWriter()
    {
        setOperators();
    }

    public void write( String string ) {

        stringBuilder.append( converter.apply(string) );
    }

    public String getContent() {

        return stringBuilder.toString();
    }
}
