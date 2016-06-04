package rod_cutting

object RodCutter {

  def getOptimalCutsForSplit(split: Int, length: Int, prices: Map[Int, Int]) = {
    val firstSplit = getOptimalCuts(prices, split)
    val secondSplit = getOptimalCuts(prices, length - split)
    val result = firstSplit._1 + secondSplit._1

    val combination = firstSplit._2.flatMap { first => secondSplit._2.map { second => (first ::: second).sorted }}.distinct
    (result, combination)
  }

  def combineTwoSolutions(firstCutTuple : (Int, List[List[Int]]), secondCutTuple : (Int, List[List[Int]])) = {
    firstCutTuple match {
      case _ if firstCutTuple._1 > secondCutTuple._1 => firstCutTuple
      case _ if secondCutTuple._1 > firstCutTuple._1 => secondCutTuple
      case _ => (firstCutTuple._1, (firstCutTuple._2 ::: secondCutTuple._2).distinct)
    }
  }

  def getOptimalCuts(prices: Map[Int, Int], length: Int) : (Int, List[List[Int]]) = {
    length match {
      case _ if length <= 0 => (0, List(List()))
      case _ => {
        Stream.range(1, length).foldLeft((prices.getOrElse(length, 0), List(List(length)))) {
          (solution, split) => combineTwoSolutions(solution, getOptimalCutsForSplit(split, length, prices))
        }
      }
    }
  }
}