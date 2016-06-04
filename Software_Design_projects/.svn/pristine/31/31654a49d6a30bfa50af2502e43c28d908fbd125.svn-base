package application;

import org.junit.Before;
import org.junit.Test;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public abstract class WriterWithDifferentCombinationOfOperationsTest extends Writer implements LowerCaseConverter, UpperCaseConverter, StupidReplacer {

    private Writer writer;

    private DuplicateRemover duplicateRemover;

    @Before
    public void setUp() throws IOException {

        writer = getInstance();

        duplicateRemover = new DuplicateRemover();
    }

    public abstract Writer getInstance() throws IOException;

    @Test
    public void writeAStringUsingLowerCaseConverterAndUpperCaseConverter() throws IOException
    {

        writer.setOperators( LowerCaseConverter::convertToLowerCase, UpperCaseConverter::convertToUpperCase );

        writer.write( "HELLO" );

        assertEquals( "HELLO", writer.getContent() );
    }

    @Test
    public void writeAStringUsingUpperCaseConverterAndLowerCaseConverter() throws IOException
    {

        writer.setOperators( UpperCaseConverter::convertToUpperCase, LowerCaseConverter::convertToLowerCase );

        writer.write( "hello WORLD" );

        assertEquals( "hello world", writer.getContent() );
    }


    @Test
    public void writeAStringUsingUpperCaseConverterAndStupidReplacerDoesNotReplaceWordstupid() throws IOException
    {

        writer.setOperators( UpperCaseConverter::convertToUpperCase, StupidReplacer::replaceStupid );

        writer.write( "it is really stupid" );

        assertEquals( "IT IS REALLY STUPID", writer.getContent() );
    }

    @Test
    public void writeAStringUsingStupidReplacerAndUpperCaseConverter() throws IOException
    {

        writer.setOperators( StupidReplacer::replaceStupid, UpperCaseConverter::convertToUpperCase );

        writer.write( "it is really stupid" );

        assertEquals( "IT IS REALLY S*****", writer.getContent() );
    }

    @Test
    public void writeAStringUsingStupidReplacerAndLowerCaseConverter() throws IOException
    {

        writer.setOperators( StupidReplacer::replaceStupid, LowerCaseConverter::convertToLowerCase );

        writer.write( "IT IS REALLY stupid" );

        assertEquals( "it is really s*****", writer.getContent() );
    }

    @Test
    public void writeAStringUsingLowerCaseConverterAndDuplicateRemover() throws IOException
    {

        writer.setOperators( duplicateRemover::RemoveDuplicateWords, LowerCaseConverter::convertToLowerCase );

        writer.write( "HELLO HELLO" );

        assertEquals( "hello", writer.getContent() );
    }

    @Test
    public void writeAStringUsingUpperCaseConverterAndDuplicateRemover() throws IOException
    {

        writer.setOperators( duplicateRemover::RemoveDuplicateWords, UpperCaseConverter::convertToUpperCase );

        writer.write( "hello hello" );

        assertEquals( "HELLO", writer.getContent() );
    }

    @Test
    public void writeAStringUsingStupidReplacerAndDuplicateRemover() throws IOException
    {

        writer.setOperators( duplicateRemover::RemoveDuplicateWords, StupidReplacer::replaceStupid );

        writer.write( "This is really really stupid" );

        assertEquals( "This is really s*****", writer.getContent() );
    }
}
