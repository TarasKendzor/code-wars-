let myObj = {};
myObj = Object.create(MyObject.prototype);
myObj.contructor = MyObject.constructor;
myObj.constructor();