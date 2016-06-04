class Worker
  work: () -> 
    console.log 'working'

worker = new Worker()
worker.work()