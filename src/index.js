'use strict';
var digger;
var Server = require('home').Server;
var server = new Server();
var diggeringStatus = 0;
var moveStatus = 0;
var turnStatus = 0;

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    digger = $('#digger');

    server.use('/', Server.static('static'));
    server.get('/', function(req, res) {
        return ({});
    })
    // 对Ruff板上的 Http服务器的`/start-diggering`访问，命令挖掘机向前行
    server.get('/start-diggering', function () {
        if (diggeringStatus == 0){
            diggeringStatus = 1;
            digger.startDiggering(function(){
                console.log('start diggering');
            });
        }
    });

    server.get('/move-forward', function () {
        if (moveStatus == 0){
            moveStatus = 1;
            digger.moveForward(function() {
                console.log('move forward');
            });
        }
    });
    
    // 对Ruff板上的 Http服务器的`/move-back`访问，命令挖掘机向后退
    server.get('/move-back', function () {
        if (moveStatus == 0){
            moveStatus = 1;
            digger.moveBack(function(){
                console.log('move Back');
            });
        }
    });
    
    server.get('/move-left', function () {
        if (moveStatus == 0){
            moveStatus = 1;
            digger.moveLeft(function(){
                console.log('move left');
            });
        }
    });
    
    server.get('/move-right', function () {
        if (moveStatus == 0){
            moveStatus = 1;
            digger.moveRight(function(){
                console.log('move right');
            });
        }
    });

    server.get('/turn-left', function () {
        if (turnStatus == 0){
            turnStatus = 1;
            digger.turnLeft(function(){
                console.log('turn left');
            });
        }
    });

    server.get('/turn-right', function () {
        if (turnStatus == 0){
            turnStatus = 1;
            digger.turnRight(function(){
                console.log('turn right');
            });
        }
    });
    
    server.get('/stop-diggering', function () {
        if (diggeringStatus == 1){
            diggeringStatus = 0;
            digger.stopDiggering(function () {
                console.log('stop diggering');
            });
        }
    });

    server.get('/stop-moving', function () {
        if (moveStatus == 1){
            moveStatus = 0;
            digger.stopMoving(function () {
                console.log('stop moving');
            });
        }
    });

    server.get('/stop-turn-around', function () {
        if (turnStatus == 1){
            turnStatus = 0;
            digger.stopTurnAround(function () {
                console.log('stop turn around');
            });
        }
    });
    
    server.listen(6318);
    $('#led-b').turnOn();
});

$.end(function () {
    $('#led-b').turnOff();
});
