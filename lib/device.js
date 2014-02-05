var stream = require('stream')
  , util = require('util')
  , exec = require('child_process').exec
  , wol = require('wake_on_lan'),
    child;

// Give our device a stream interface
util.inherits(Device,stream);

// Export it
module.exports=Device;

/**
 * Creates a new Device Object
 *
 * @property {Boolean} readable Whether the device emits data
 * @property {Boolean} writable Whether the data can be actuated
 *
 * @property {Number} G - the channel of this device
 * @property {Number} V - the vendor ID of this device
 * @property {Number} D - the device ID of this device
 *
 * @property {Function} write Called when data is received from the Ninja Platform
 *
 * @fires data - Emit this when you wish to send data to the Ninja Platform
 */
function Device() {
 
  var self = this;
 
  // This device will emit data
  this.readable = false;
  // This device can be actuated
  this.writeable = true;
 
  this.G = "0"; // G is a string a represents the channel
  this.V = 0; // 0 is Ninja Blocks' device list
  this.D = 240; // 2000 is a generic Ninja Blocks sandbox device
 
};
Device.prototype.write = function(data) {
    console.log("Waking up " + data);
    wol.wake(data);
}
