package assign3

import Pizza._
import org.junit.Assert._
import org.junit.Test

class ProcessorTest {

  @Test def canary() {
    assertTrue(true)
  }

  @Test def createPizza() {
    val expected = new StringBuilder("")
    val newPizza = (create a pizza)

    assertEquals(expected, newPizza getLayers)
  }

  @Test def createPizzaWithSauce() {
    val expected = new StringBuilder("sauce")
    val newPizza = (create a pizza
                      spread sauce)

    assertEquals(expected, newPizza getLayers)
  }

  @Test def createPizzaWithCheese() {
    val expected = new StringBuilder("saucecheese")
    val newPizza = (create a pizza
                      spread sauce
                      spread cheese)

    assertEquals(expected, newPizza getLayers)
  }

  @Test def createPizzaWithToppings() {
    val expected = new StringBuilder("saucecheesepepperonijalapenos")
    val newPizza = (create a pizza
                      spread sauce
                      spread cheese
                      toppings (pepperoni, jalapenos))

    assertEquals(expected, newPizza getLayers)
  }

  @Test def createPizzaWithAllAndBake() = {
    val expected = new StringBuilder("saucecheesepepperonijalapenos")
    val newPizza = (create a pizza
                      spread sauce
                      spread cheese
                      toppings (pepperoni, jalapenos)
                      bake)

    assertEquals(expected, newPizza getLayers)
  }
}