package application;

import java.io.IOException;

public class FileWriterWithLowerCaseConverterTest extends WriterWithLowerCaseConverterTest{

    public FileWriter getInstance() throws IOException {

        return new FileWriter("./MyFile.txt");
    }
}
