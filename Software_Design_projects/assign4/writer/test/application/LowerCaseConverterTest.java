package application;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LowerCaseConverterTest implements LowerCaseConverter {

    @Test
    public void convertToLowerCaseConvertsStingToLowerCase()
    {
        assertEquals( "hello", LowerCaseConverter.convertToLowerCase("Hello") );
    }

    @Test
    public void convertToLowerCaseDoesChangeStringAlreadyInLowerCase()
    {
        assertEquals( "hello", LowerCaseConverter.convertToLowerCase("hello") );
    }

    @Test
    public void convertToLowerCaseDoesNotChangeSpecialCharactersInString()
    {
        assertEquals( "hello@!", LowerCaseConverter.convertToLowerCase("Hello@!") );
    }

    @Test
    public void convertToLowerCaseConvertsStringsWithSpaceToLowerCase()
    {
        assertEquals( "hello world", LowerCaseConverter.convertToLowerCase("Hello World") );
    }
}
