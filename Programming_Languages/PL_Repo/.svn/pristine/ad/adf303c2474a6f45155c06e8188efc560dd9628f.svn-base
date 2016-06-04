package rod_cutting

class RodCutting{

  def rodCutting(prices: Map[Int, Int], length : Int) = {
    length match {
      case x if x <= 0 => 0
      case x if x > prices.size => "unavailable"
      case _ => List(prices(length), length)
    }
  }
}