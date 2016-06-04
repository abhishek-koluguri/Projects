import scala.annotation.tailrec

object Q07 {
  def factorial(pos : Int) = {
      Stream.range(1, pos + 1).foldLeft(1)((x, y) => x * y)
  }
  
  def factorialRecursive(num : Int) : Int = {
    num match {
      case 1 => 1
      case _ => num * factorialRecursive (num - 1)
    }
  }

  @tailrec
  def factorialTailRecursive(accumlator : Int, num : Int) : Int = {
    num match {
      case 1 => accumlator
      case _ => factorialTailRecursive(accumlator + num, num-1)
    }
  }

  def main(args: Array[String]) : Unit = {

      val pos = 5

      println("Factorial of " + 5 + " is " + factorial(5))
      println("FactorialRecursive of " + 5 + " is " + factorialRecursive(5))
      println("FactorialTailRecursive of " + 5 + " is " + factorialTailRecursive(0, 5))

    }
}