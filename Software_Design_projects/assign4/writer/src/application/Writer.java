package application;

import java.io.IOException;
import java.util.function.Function;
import java.util.stream.Stream;

public abstract class Writer {

    Function<String, String> converter;

    public void write( String string ){}

    public String getContent() throws IOException
    {
        return "";
    }

    @SafeVarargs
    public final void setOperators( Function<String, String>... theStringConverters )
    {
        converter = Stream.of( theStringConverters )
                .reduce( Function.identity(), Function::andThen );
    }
}
