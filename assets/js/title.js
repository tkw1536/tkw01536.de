Raphael(function(){

  // a Raphael instance that we will create
  var rElement = document.getElementById("holder");

  /**
  * Turns a list of points into a path.
  */
  function createPath(x0, dx, y, f){
    var f = (typeof f === 'number')?f:1; // factor to multiply path with

    var path = ''; // path we will be creating

    var x = x0; // initial value for x
    var coords; // temporary variable for the path

    var l = y.length; // list length

    for(var i = 0; i < l ; i++){
      coords = x + ',' + (f * y[l - 1 - i]); // update coords

      if (i == 0){
        path += "M" + coords + "R"; // in the first condition setup R once
      } else {
        path += "," + coords; // else just add coordinates
      }

      x += dx; // increase x
    }

    // and return the path
    return path;
  }

  /**
  * Generates a random path of given length
  */
  function randomPath(length){
    var path = [];

    for(var i = 0; i <= length ; i++){
      path.push(Math.random());
    }

    return path;
  }

  var rInstance,
    rLine,
    rBack,
    rColor,
    rValues;

  /**
  * (Re)-initalises the Raphael instance
  */
  function initR(){
    // create Raphael itself
    rInstance = new Raphael(rElement, rElement.offsetWidth, rElement.offsetHeight);

    // add the line and background
    rLine = rInstance.path("M0,0").attr({fill: "none", "stroke-width": 4, "stroke-linecap": "round"});
    rBack = rInstance.path("M0,0").attr({stroke: "none", opacity: .3});
  }

  function drawR(){

    // determine width + height
    var RWidth = rElement.offsetWidth;
    var RHeight = rElement.offsetHeight;

    // create a path
    var path = createPath(0, RWidth / (rValues.length - 1), rValues, RHeight * (1 / 3));

    // and set them
    rLine.attr({path: path, stroke: rColor});
    rBack.attr({path: path + "L"+RWidth+","+RHeight+",0,"+RHeight+"z", fill: rColor});
  }

  /**
  * Updates the current Raphael instance by animation
  */
  function animateR(){
    // timing for animations
    var time = 300;

    // compute width + height
    var RWidth = rElement.offsetWidth;
    var RHeight = rElement.offsetHeight;

    // make a path
    var path = createPath(0, RWidth / (rValues.length - 1), rValues, RHeight);

    // create an animation
    var anim = Raphael.animation({path: path, stroke: rColor}, time, "<>");

    // and run it for both things
    rLine.animate(anim);
    rBack.animateWith(rLine, anim, {path: path + "L"+RWidth+","+RHeight+",0,"+RHeight+"z", fill: rColor}, time, "<>");
  }

  // upon resizing of elements, re-init Raphael
  window.onresize = function(){
    initR();

    rValues = randomPath(Math.floor(rElement.offsetWidth / 100));

    drawR();
  }

  // do some initial setup
  rValues = randomPath(Math.floor(rElement.offsetWidth / 100));
  rColor = Raphael.getColor(1);

  initR();
  drawR();

  // MOUSE position
  var mouseX = 0;
  var mouseY = 0;

  /**
  * Updates the mouse position.
  * Adapted from http://stackoverflow.com/a/7790764
  */
  function updateMouseXY(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    var event = event || window.event; // IE-ism

    if(typeof event === "undefined"){
      return;
    }

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    mouseX = event.pageX;
    mouseY = event.pageY;
  }

  // read the mouse position
  document.onmousemove = updateMouseXY;
  setInterval(updateMouseXY, 100);

  // tracking
  var oldMouseX = 0;
  var oldMouseY = 0;
  var mouseDelta = 0;

  // counter
  var counter = 0;

  // do some animation
  setInterval(function(){
    mouseDelta += Math.sqrt(Math.pow(mouseX - oldMouseX, 2) + Math.pow(oldMouseY - oldMouseY, 2)); // add to some path we moved

    if (mouseDelta >= 200){
      mouseDelta = 0;
      counter++;

      if(counter === 14){
        Raphael.getColor.reset()
        counter = 0;
      }

      rValues = randomPath(Math.floor(rElement.offsetWidth / 100));
      rColor = Raphael.getColor(1);

      animateR();
    }


    oldMouseX = mouseX;
    oldMouseY = mouseY;



  }, 100);




});
