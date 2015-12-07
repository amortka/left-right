'use strict';
import lodash from 'lodash';
import moment from 'moment';

export default class MainCtrl {
  constructor(recordSvc) {
    console.log('MainCtrl constructor');
    this.list = recordSvc.getItems();
    this.active = null;
  }

  add(side) {
    this.list = recordSvc.addItem(side);
  }
    /*
      console.log('adding new', side);
      var entry = {
        side: side,
        active: true,
        timeStart: Date.now(),
        timeEnd: null,
        duration: null,
        diff: null
      };

      if (this.list.length > 0) {
        var firstItem = _.first(this.list);

        firstItem.active = false;
        firstItem.timeEnd = Date.now();
        var duration = moment.duration(firstItem.timeEnd - firstItem.timeStart);
        firstItem.duration = {
          minutes: duration.minutes(),
          seconds: duration.seconds()
        }

        if (firstItem.side !== side) {
          this.list.unshift(entry);
        } else {
          //
        }

        if (this.list.length > 1) {
          var diff = moment.duration(this.list[0].starTime - this.list[1].timeEnd);
          this.list[0].diff = {
            minutes: duration.minutes(),
            seconds: duration.seconds()
          }
        }

      } else {
        this.list.unshift(entry);
      }

      this.active = this.list[0].active ? this.list[0].side : null;
      */
  //}
};
