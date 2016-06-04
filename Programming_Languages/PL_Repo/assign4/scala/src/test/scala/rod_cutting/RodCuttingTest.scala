package rod_cutting

import org.junit.Assert._
import org.junit.{Before, Test}

class RodCuttingTest {

  var rodCutting : RodCutting = new RodCutting
  val prices : Map[Int, Int] = Map(1 -> 1, 2 -> 4, 3 -> 4, 4 -> 5)

  @Before def setup(): Unit = {
    rodCutting = new RodCutting

  }

  @Test def canary() {
    assertTrue(true)
  }

  @Test def calculatingProfitForLengthZero() {
    assertEquals(0, rodCutting.rodCutting(prices, 0))
//Venkat: The result should include two things: 1. the total max revenue and 2. the cuts that will provide that revenue.
  }

  @Test def calculatingProfitForLengthOne() {
    assertEquals(List(1, 1), rodCutting.rodCutting(prices, 1))
  }

  @Test def calculatingProfitForLengthNegative() {
    assertEquals(0, rodCutting.rodCutting(prices, -4))
  }

  @Test def handlingUnavailableLength() {
    assertEquals("unavailable", rodCutting.rodCutting(prices, 100))
  }
}