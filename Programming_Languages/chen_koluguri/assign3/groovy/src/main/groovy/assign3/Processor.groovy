package assign3

class Pizza {
  def layers = [:]
  def baking = false;
  
  def and(closure) {
    with(closure)
    this
  }
  
  def getBake() {
    baking = true;
  }
  
  def methodMissing(String name, args) {
    layers[name] = args
  }
  
  def propertyMissing(String name) {
    name
  }
}

def create(klass) {
  klass.newInstance()
}