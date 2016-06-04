describe('tasksControllerTest', function() {
  var controller;
  
  var sampleTasks = [
    {name: "taska", month: 4, day: 10, year: 2015},
    {name: "taskc", month: 4, day: 21, year: 2015},
    {name: "taskz", month: 4, day: 21, year: 2015},
  ];
  
  beforeEach(module('todoApp'));
  
  beforeEach(inject(function($controller, _$httpBackend_) {
    controller = $controller('TasksController');
    $httpBackend = _$httpBackend_;
  }));
  
  it('canary should pass', function() {
    expect(true).to.be.eql(true);
  });
  
  it('controller should have an empty tasks on create', function() {
    expect(controller.tasks).to.be.eql([]);
  });
  
  it('getTasks should get tasks from the server', function() {
    $httpBackend.expectGET('/tasks')
                .respond(200, sampleTasks);
    controller.getTasks();
    
    $httpBackend.flush();
    
    expect(controller.tasks).to.be.eql(sampleTasks);
  });
  
  it('sortTasks should sort based on year', function() {
    var tasks = [
      {name: "taska", month: 4, day: 10, year: 2015},
      {name: "taskc", month: 4, day: 21, year: 2014},
    ];
    var sortedTasks = controller.sortTasks(tasks);
    expect(sortedTasks[0]).to.be.eql(tasks[1]);
  });

  it('sortTasks should sort based on month if year the same', function() {
    var tasks = [
      {name: "taska", month: 6, day: 10, year: 2015},
      {name: "taska", month: 4, day: 10, year: 2015},
      {name: "taskc", month: 5, day: 21, year: 2015},
    ];
    var sortedTasks = controller.sortTasks(tasks);
    expect(sortedTasks[0]).to.be.eql(tasks[1]);
  });

  it('sortTasks should sort based on day if year and month the same', function() {
    var tasks = [
      {name: "taska", month: 6, day: 10, year: 2015},
      {name: "taska", month: 6, day: 10, year: 2015},
      {name: "taskc", month: 6, day: 8, year: 2015},
    ];
    var sortedTasks = controller.sortTasks(tasks);
    expect(sortedTasks[0]).to.be.eql(tasks[2]);
  });

  it('sortTasks should sort based on name if date is the same', function() {
    var tasks = [
      {name: "taskz", month: 6, day: 10, year: 2015},
      {name: "taska", month: 6, day: 10, year: 2015},
      {name: "taskc", month: 6, day: 10, year: 2015},
    ];
    var sortedTasks = controller.sortTasks(tasks);
    expect(sortedTasks[0]).to.be.eql(tasks[1]);
    expect(sortedTasks[1]).to.be.eql(tasks[2]);
    expect(sortedTasks[2]).to.be.eql(tasks[0]);
  });


  it('getTasks should call sortTasks with fetched data', function() {
    var receivedTasks;
    controller.sortTasks = function(tasksToSort) {
      receivedTasks = tasksToSort;
    }
    
    $httpBackend.expectGET('/tasks')
                .respond(200, sampleTasks);
    controller.getTasks();
    
    $httpBackend.flush();
    
    expect(receivedTasks).to.be.eql(sampleTasks);
  });
});

describe('tasksControllerDocumentInteractionTest', function() {
  var funkPassed = "not set";
  beforeEach(module('todoApp'));

  beforeEach(inject(function($controller, $document) {
    $document.ready = function(funk) {
      funkPassed = funk;
    }

    controller = $controller('TasksController');
  }));
  
  it('document ready should receive getTasks', function() {
    expect(funkPassed).to.be.eql(controller.getTasks);
  });
});
