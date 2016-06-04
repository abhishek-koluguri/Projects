object factorsUnion {
  def main(args: Array[String]): Unit = {
    println(factors(List(2, 6)))
  }

  def factors(list: List[Int]) = {
    list.foldLeft(Set[Int]())((x, y) => {
      x.++(factor(y))
    })
  }

  def factor(number: Int) = {
    Stream.range(1, number + 1).foldLeft(Set[Int]())((x, y) => {
      if (number % y == 0) {
        x.+(y)
      } else {
        x
      }
    })
  }
}