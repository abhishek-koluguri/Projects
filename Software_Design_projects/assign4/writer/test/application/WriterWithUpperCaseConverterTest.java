package application;

import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public abstract class WriterWithUpperCaseConverterTest implements UpperCaseConverter {

    Writer writer;

    @Before
    public void setUp() throws IOException {

        writer = getInstance();
    }

    public abstract Writer getInstance() throws IOException;

    @Test
    public void writeAStringAndConvertItToUpperCase() throws IOException
    {

        writer.setOperators( UpperCaseConverter::convertToUpperCase );

        writer.write( "hello" );

        assertEquals( "HELLO", writer.getContent() );
    }
}
