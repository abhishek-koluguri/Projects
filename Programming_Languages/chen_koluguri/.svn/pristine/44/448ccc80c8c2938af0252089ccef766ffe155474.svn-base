package rod_cutting

import org.junit.Assert._
import org.junit.{Before, Test}


class RodCuttingTest {

  val prices : Map[Int, Int] = Map(1 -> 1, 2 -> 2, 3 -> 3, 4 -> 4)

  @Test def canary() {
    assertTrue(true)
  }

  @Test def calculatingProfitForLengthZero() {
    val expected = (0, List(List()))
    assertEquals(expected, RodCutter.getOptimalCuts(prices, 0))
  }

  @Test def calculatingProfitForLengthOne() {
    val expected = (1, List(List(1)))
    assertEquals(expected, RodCutter.getOptimalCuts(prices, 1))
  }

  @Test def calculatingProfitForLengthTwo() {
    val expected = (2, List(List(2), List(1, 1)))
    assertEquals(expected, RodCutter.getOptimalCuts(prices, 2))
  }

  @Test def calculatingProfitForLengthThree() {
    val expected = (3, List(List(3), List(1, 2), List(1, 1, 1)))
    assertEquals(expected, RodCutter.getOptimalCuts(prices, 3))
  }

  @Test def calculatingProfitForLengthFour() {
    val expected = (4, List(List(4), List(1,3), List(1,1,2), List(1,1,1,1), List(2,2)))
    assertEquals(expected, RodCutter.getOptimalCuts(prices, 4))
  }

  @Test def forMissingLengths() {
    val specialPrices : Map[Int, Int] = Map(2 -> 3, 3 -> 4, 5 -> 7)
    val expected = (7,List(List(5), List(2, 3)))
    assertEquals(expected, RodCutter.getOptimalCuts(specialPrices, 5))
  }

  @Test def solutionWithoutTheGivenLength() {
    val specialPrices : Map[Int, Int] = Map(1 -> 1, 2 -> 2, 3 -> 1)
    val expected = (3, List(List(1, 2), List(1, 1, 1)))
    assertEquals(expected, RodCutter.getOptimalCuts(specialPrices, 3))
  }
}
