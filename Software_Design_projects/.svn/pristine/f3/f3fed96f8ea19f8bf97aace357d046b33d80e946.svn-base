package application;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public abstract class FibonacciTest {

    private Fibonacci fibonacciNumber;

    @Before
    public void setUp()
    {

        fibonacciNumber = getInstance();
    }

    public abstract Fibonacci getInstance();

    @Test
    public void canary()
    {

        assertTrue( true );
    }


    @Test
    public void getFibonacciValueAtPositionZero()
    {

        assertEquals( 1, fibonacciNumber.fibonacciValueAtAPosition(0) );
    }

    @Test
    public void getFibonacciValueAtPositionOne()
    {

        assertEquals( 1, fibonacciNumber.fibonacciValueAtAPosition(1) );
    }

    @Test
    public void getFibonacciValueAtPositionTwo()
    {

        assertEquals( 2, fibonacciNumber.fibonacciValueAtAPosition(2) );
    }

    @Test
    public void getFibonacciValueAtPositionFive()
    {

        assertEquals( 8, fibonacciNumber.fibonacciValueAtAPosition(5) );
    }

    @Test
    public void getFibonacciValueAtPositionEight()
    {

        assertEquals( 34, fibonacciNumber.fibonacciValueAtAPosition(8) );
    }

    @Test
    public void forInvalidInput()
    {

        assertEquals( 0, fibonacciNumber.fibonacciValueAtAPosition(-1) );
    }
}
