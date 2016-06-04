package application;

import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public abstract class WriterWithDuplicateRemoverTest {

    private Writer writer;

    private DuplicateRemover duplicateRemover;

    @Before
    public void setUp() throws IOException {

        writer = getInstance();

        duplicateRemover = new DuplicateRemover();
    }

    public abstract Writer getInstance() throws IOException;

    @Test
    public void writeAStringUsingDuplicateRemover() throws IOException
    {

        writer.setOperators( duplicateRemover::RemoveDuplicateWords );

        writer.write( "hello hello" );

        assertEquals( "hello", writer.getContent() );
    }
}
