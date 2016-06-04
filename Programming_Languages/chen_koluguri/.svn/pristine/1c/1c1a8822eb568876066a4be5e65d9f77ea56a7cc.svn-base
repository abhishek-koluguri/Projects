package assign3

object create {
  def a(pizza : String): Pizza = {
    new Pizza
  }
}

class Pizza {
  private val layers = new StringBuilder()

  def spread(addOn : String) = {
    layers.append(addOn)
    this
  }

  def toppings(addOns : String*) = {
    layers.append(addOns.mkString)
    this
  }

  def bake = {
    this
  }

  def getLayers ={
    layers
  }
}

object Pizza {
  val pizza = "Pizza"
  val sauce = "sauce"
  val cheese = "cheese"
  val pepperoni = "pepperoni"
  val jalapenos = "jalapenos"
}