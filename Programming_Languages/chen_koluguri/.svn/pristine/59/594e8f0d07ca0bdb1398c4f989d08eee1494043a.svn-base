import scala.collection.mutable.Map

object q06 {

  def main(args: Array[String]): Unit = {
    println(memoizedFibonacci(400))
  }

  var cache = Map(0 -> BigInt(1), 1 -> BigInt(1))

  def memoizedFibonacci(position: Int): BigInt = {
    cache.getOrElseUpdate(position, memoizedFibonacci(position - 1) + memoizedFibonacci(position - 2))
  }
}