var WaitJS = (function() {
  var WaitJS = function(constructorTimestamp) {
    this.name = 'waitjs';
    this.timestamp = constructorTimestamp;
    this.wait = function(timestamp) {
      this.timestamp = !!timestamp && timestamp || this.timestamp;
      var __timestamp = typeof this.timestamp === 'number' && parseInt(this.timestamp, 10) || 1;
      var endTime = new Date().valueOf() + __timestamp;
      do {} while(new Date().valueOf() - endTime <= 1);
    }
  }
  return WaitJS;
}());