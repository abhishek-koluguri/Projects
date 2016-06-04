package perfectnumber;

import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;

public class PerfectNumberTest {

    private PerfectNumber perfectNumber;

    @Before
    public void setup() {

        perfectNumber = new PerfectNumber();
    }

    @Test
    public void canary(){

        assertTrue(true);
    }

    @Test
    public void forNegativeTest(){

        assertFalse(perfectNumber.isPerfectNumberImperative(-6));
    }

    @Test
    public void forZeroTest(){

        assertFalse(perfectNumber.isPerfectNumberImperative(0));
    }

    @Test
    public void forOneTest(){

        assertFalse(perfectNumber.isPerfectNumberImperative(1));
    }

    @Test
    public void forPerfectNumberTest(){

        assertTrue(perfectNumber.isPerfectNumberImperative(6));
    }

    @Test
    public void forNotAPerfectNumberTest(){

        assertFalse(perfectNumber.isPerfectNumberImperative(7));
    }

    @Test
    public void forOneSumOfFactorsTest(){

        assertEquals(1, perfectNumber.sumOfFactors(1));
    }

    @Test
    public void forZeroSumOfFactorsTest(){

        assertEquals(0, perfectNumber.sumOfFactors(0));
    }

    @Test
    public void forPositiveSumOfFactorsTest(){

        assertEquals(12, perfectNumber.sumOfFactors(6));
    }

    @Test
    public void forNegativeSumOfFactorsTest(){

        assertEquals(0, perfectNumber.sumOfFactors(-6));
    }

    @Test
    public void forNegativeFunctionalTest(){

        assertFalse(perfectNumber.isPerfectNumberFunctional(-6));
    }

    @Test
    public void forZeroFunctionalTest(){

        assertFalse(perfectNumber.isPerfectNumberFunctional(0));
    }

    @Test
    public void forOneFunctionalTest(){

        assertFalse(perfectNumber.isPerfectNumberFunctional(1));
    }

    @Test
    public void forPerfectNumberFunctionalTest(){

        assertTrue(perfectNumber.isPerfectNumberFunctional(6));
    }

    @Test
    public void forNotAPerfectNumberFunctionalTest(){

        assertFalse(perfectNumber.isPerfectNumberFunctional(7));
    }

}