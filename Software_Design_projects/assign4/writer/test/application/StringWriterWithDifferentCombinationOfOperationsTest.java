package application;

import java.io.IOException;

public class StringWriterWithDifferentCombinationOfOperationsTest extends WriterWithDifferentCombinationOfOperationsTest {

    public StringWriter getInstance() throws IOException {

        return new StringWriter();
    }
}