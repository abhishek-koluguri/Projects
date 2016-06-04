package assign3

class Pizza() {
  var layers:Map[String, String] = Map() 

  def applyDynamic(methodName: String)(args: Any *) {
    layers += (methodName -> args.toString())
  }
  
  def selectDynamic(name: String) : String = {
    return name
  }
}