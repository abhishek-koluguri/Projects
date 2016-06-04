package application;

import java.io.IOException;

public class FileWriterWithUpperCaseConverterTest extends WriterWithUpperCaseConverterTest{

    public FileWriter getInstance() throws IOException {

        return new FileWriter("./MyFile.txt");
    }
}
