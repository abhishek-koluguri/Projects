package application;

import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public abstract class WriteWithStupidReplacerTest implements StupidReplacer {

    Writer writer;

    @Before
    public void setUp() throws IOException {

        writer = getInstance();
    }

    public abstract Writer getInstance() throws IOException;

    @Test
    public void writeAStringWithStupidReplacer() throws IOException
    {

        writer.setOperators( StupidReplacer::replaceStupid );

        writer.write( "stupid" );

        assertEquals( "s*****", writer.getContent() );
    }
}
