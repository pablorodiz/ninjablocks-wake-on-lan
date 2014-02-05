ninjablocks-wake-on-lan
=======================

Driver for Ninjablocks that allows sending Wake on LAN packages to specified MAC address
The functionality is configured as a text entry where the desired MAC address to wake up 
is configured and then sent, so the ninjablock sends a Magic packet to this MAC.

The driver can be also used on ninjablocks rules to send Wake on LAN requests to one or 
many hosts in your network.

Installation
============

Cd into your drivers directory (/opt/ninja/drivers on the block or client/drivers/ on Mac
OS X) and type: git clone git://github.com/pablorodiz/ninjablocks-wake-on-lan.git
After the clone finishes, cd into the ninjablocks-wake-on-lan directory and type: sudo 
npm install to satisfy the dependencies for this driver and then restart your block with: 
sudo restart
You should then see a new text input Widget appear on your Dashboard and a new actuator 
for your rules will be also available. Remember to send the correct MAC address value and 
configure the host properly so it can be awakened by wake on LAN packets.

Dependencies
============

Ninjablocks Wake on LAN driver extensively depends on Wake-on-LAN utilities for node.js 
https://github.com/agnat/node_wake_on_lan#wake-on-lan-utilities-for-nodejs
