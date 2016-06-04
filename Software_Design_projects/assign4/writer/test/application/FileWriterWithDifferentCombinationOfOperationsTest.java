package application;

import java.io.IOException;

public class FileWriterWithDifferentCombinationOfOperationsTest extends WriterWithDifferentCombinationOfOperationsTest{

    public FileWriter getInstance() throws IOException {

        return new FileWriter("./MyFile.txt");
    }
}
