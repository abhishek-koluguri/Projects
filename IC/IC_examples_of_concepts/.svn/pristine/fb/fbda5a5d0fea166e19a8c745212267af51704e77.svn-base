var registerDragEvents = function(dropTarget) {
  dropTarget.ondragover = function(event) {
    event.preventDefault();
  }
  
  dropTarget.ondrop = function(event) {
    var data = event.dataTransfer.getData('Text');
    
    if(this.innerHTML.indexOf(data) < 0)
      this.innerHTML += data;
      
    event.preventDefault();
  }
}