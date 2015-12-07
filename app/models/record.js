import angular from 'angular';
var moduleName = 'app.record';

const LOCAL_STORAGE_KEY = "LEFT_RIGHT_RECORDS";

class RecordService {
  constructor() {
    this.items = [{
      side: 'left',
      active: false,
      timeStart: Date.now() - 10*60*1000,
      timeEnd: Date.now() - 9*60*1000,
      duration: {
        minutes: 1,
        seconds: 0
      },
      diff: null
    }, {
      side: 'right',
      active: true,
      timeStart: Date.now() - 8*60*1000,
      timeEnd: null,
      duration: null,
      diff: {
        minutes: 20,
        seconds: 5
      }
    }];
  }

  getItems() {
    return this.items.reverse();
  }

  addItem(record) {



    //return this.items.push();
  }

  static getFactory() {
    return new RecordService();
  }


}

angular.module(moduleName, [])
  .factory('RecordSvc', RecordService.getFactory);
