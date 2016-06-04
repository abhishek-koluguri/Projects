package application;

import org.junit.Test;
import org.mockito.Mockito;

import java.io.IOException;
import java.io.PrintWriter;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class FileWriterTest extends WriterTest {

    public FileWriter getInstance() throws IOException {

        return new FileWriter("./File.txt");
    }

    @Test
    public void writeWritesAStringToFile() throws IOException
    {

        FileWriter fileWriter = new FileWriter("./File.txt");

        try {

            PrintWriter printWriterMock = Mockito.spy(new PrintWriter("./File.txt"));

            fileWriter.setPrintWriter( printWriterMock );

            fileWriter.write("Hello World");

            verify( printWriterMock, times(1) ).write("Hello World");

        }catch ( Exception e )
        {
            e.printStackTrace();
        }
    }
}
