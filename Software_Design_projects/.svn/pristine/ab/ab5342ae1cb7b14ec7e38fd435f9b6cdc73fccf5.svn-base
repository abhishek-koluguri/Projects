package application;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class StupidReplacerTest implements StupidReplacer {

    @Test
    public void replaceStupidReplacesWord_stupid()
    {
        assertEquals( "s*****", StupidReplacer.replaceStupid("stupid") );
    }

    @Test
    public void replaceStupidDoesNotReplacesWordStupid()
    {
        assertEquals( "Stupid", StupidReplacer.replaceStupid("Stupid") );
    }

    @Test
    public void replaceStupidReplacesWordstupidInASentence()
    {
        assertEquals( "I am not a s*****...!", StupidReplacer.replaceStupid("I am not a stupid...!") );
    }

    @Test
    public void replaceStupidReplacesWordstupidInASentenceWithMoreThanOneOccurrence()
    {
        assertEquals( "s***** people don't know they are s*****...!", StupidReplacer.replaceStupid("stupid people don't know they are stupid...!") );
    }

    @Test
    public void replaceStupidReplacesOnlystupidAndNotStupid()
    {
        assertEquals( "Stupid ? I am not a s*****...!", StupidReplacer.replaceStupid("Stupid ? I am not a stupid...!") );
    }
}
