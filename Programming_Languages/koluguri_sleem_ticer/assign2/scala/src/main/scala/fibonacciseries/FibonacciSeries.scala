package fibonacciseries

class FibonacciSeries {

  def getSeriesRecursive(n: Int) : List[Int] = {
    n match {
      case 0 => List(1)
      case 1 => List(1, 1)
      case _ => {
        val previous = getSeriesRecursive(n-1)
        previous :+ previous.takeRight(2).sum
      }
    }
  }
}
