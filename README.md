ninjablocks-wake-on-lan
=======================

Driver for Ninjablocks that allows sending Wake on LAN packages to specified MAC address
The functionality is configured as a text entry where the desired MAC address to wake up 
is configured and then sent, so the ninjablock sends a Magic packet to this MAC.

The driver can be also used on ninjablocks rules to send Wake on LAN requests to one or 
many hosts in your network.

Dependencies
============

Ninjablocks Wake on LAN driver extensively depends on Wake-on-LAN utilities for node.js 
https://github.com/agnat/node_wake_on_lan#wake-on-lan-utilities-for-nodejs
