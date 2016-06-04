//To run karma
//karma start --reporters clear-screen,dots
describe('dragdroptest', function() {
  it('canary is passing', function() {
    expect(true).to.be.eql(true);
  });
  
  beforeEach(function() {
    this.copyData = 'foo';
    
    var testContext = this;
    this.event = {
      preventDefault: function() {
        this.preventDefaultCalled = true;
      },
      dataTransfer: {
        getData: function(property) {
          return property === 'Text' ? testContext.copyData : '';
        }
      }
    };
  });
  
  it('droptarget has ondragover', function() {
  
  var dropTarget = {};
  registerDragEvents(dropTarget);  expect(typeof(dropTarget.ondragover)).to.be.eql('function');
  });
  
  it('ondragover prevents default events', function() {    
    var dropTarget = {};
    registerDragEvents(dropTarget);
    
    dropTarget.ondragover(this.event);    
    expect(this.event.preventDefaultCalled).to.be.eql(true);
  });
  
  it('droptarget has ondrop', function() {
  
  var dropTarget = {};
  registerDragEvents(dropTarget);  expect(typeof(dropTarget.ondrop)).to.be.eql('function');
  });

  it('ondrop appends transfered data', function() {
    var dropTarget = {innerHTML: ''};
    registerDragEvents(dropTarget);
    
    dropTarget.ondrop(this.event);

    expect(dropTarget.innerHTML).to.be.eql('foo');
  });

  it('ondrop appends another transfered data', function() {
    var dropTarget = {innerHTML: 'foo'};
    registerDragEvents(dropTarget);
    
    this.copyData = 'bar';
    
    dropTarget.ondrop(this.event);

    expect(dropTarget.innerHTML).to.be.eql('foobar');
  });

  it('ondrop does not append duplicate data', function() {
    var dropTarget = {innerHTML: 'foo bar'};
    registerDragEvents(dropTarget);
    
    dropTarget.ondrop(this.event);

    expect(dropTarget.innerHTML).to.be.eql('foo bar');
  });
  
  it('ondrop prevents default', function() {
    var dropTarget = { innerHTML: ''};    
    registerDragEvents(dropTarget);
    
    dropTarget.ondrop(this.event);
    expect(this.event.preventDefaultCalled).to.be.eql(true);
  });
});