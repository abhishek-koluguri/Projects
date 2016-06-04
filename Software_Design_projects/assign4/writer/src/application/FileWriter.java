package application;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import org.apache.commons.io.FileUtils;

public class FileWriter extends Writer {

    private String filePath;

    private PrintWriter printWriter;

    FileWriter( String fileName ) throws IOException {

        setOperators();

        filePath = fileName;

        printWriter = new PrintWriter( filePath );
    }

    public void setPrintWriter( PrintWriter thePrintWriter )
    {
        printWriter = thePrintWriter;
    }


    public void write( String string ) {

        printWriter.write( converter.apply( string ) );

        printWriter.close ();
    }

    public String getContent() throws IOException {

        String content;

        content = FileUtils.readFileToString( new File( filePath ) );

        return content;
    }
}
