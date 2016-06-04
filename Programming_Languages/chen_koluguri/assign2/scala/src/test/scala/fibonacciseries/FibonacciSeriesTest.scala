package fibonacciseries

import org.junit.Assert._
import org.junit.{Before, Test}

class FibonacciSeriesTest {

  var fibonacci : FibonacciSeries = new FibonacciSeries

  @Before def setup(): Unit = {
    fibonacci = new FibonacciSeries
  }

  @Test def canary() {
    assertTrue(true)
  }

  @Test def verifyZeroTest() {
    val series = List(1)
    assertEquals(series, fibonacci.getSeriesRecursive(0))
  }

  @Test def verifyOneTest() {
    val series = List(1, 1)
    assertEquals(series, fibonacci.getSeriesRecursive(1))
  }

  @Test def verifyTwoTest() {
    val series = List(1, 1, 2)
    assertEquals(series, fibonacci.getSeriesRecursive(2))
  }

  @Test def verifyTenTest() {
    val series = List(1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)
    assertEquals(series, fibonacci.getSeriesRecursive(10))
  }
  
  @Test def verifyTailZeroTest() {
    val series = List(1)
    assertEquals(series, fibonacci.getSeriesTailRecursive(0))
  }

  @Test def verifyTailOneTest() {
    val series = List(1, 1)
    assertEquals(series, fibonacci.getSeriesTailRecursive(1))
  }

  @Test def verifyTailTwoTest() {
    val series = List(1, 1, 2)
    assertEquals(series, fibonacci.getSeriesTailRecursive(2))
  }

  @Test def verifyTailTenTest() {
    val series = List(1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)
    assertEquals(series, fibonacci.getSeriesTailRecursive(10))
  }
}
