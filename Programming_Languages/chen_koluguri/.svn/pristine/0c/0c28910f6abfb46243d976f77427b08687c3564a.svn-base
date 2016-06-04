package assign3

import spock.lang.*

class ProcessorTest extends Specification {
  @Delegate Processor processor = new Processor()

  def "canary"() {
    expect:
      true == true
  }

  def "create pizza"() {
    def pizza = create Pizza
    expect:
      pizza instanceof Pizza
  }

  def "cheese chedder"() {
    def pizza = create Pizza and { 
      cheese chedder
    }
    expect:
      pizza.getLayers().equals([cheese: ['chedder']])
  }
  
  def "toppings bacon, pickles"() {
    def pizza = create Pizza and {
      toppings bacon, pickles
    }
    expect:
      pizza.getLayers().equals([toppings: ['bacon', 'pickles']])
  }
  
  def "sauce tomato"() {
    def pizza = create Pizza and {
      sauce tomato
    }
    expect:
      pizza.getLayers().equals([sauce: ['tomato']])
  }
  
  def "bake"() {
    def pizza = create Pizza and {
      cheese chedder
      sauce tomato
      bake
    }
    expect:
      pizza.getBaking() == true
  }
}