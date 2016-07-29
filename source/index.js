const MyComponent = require("./component.js");

let comp = new MyComponent({
    msg: "GUIRE"
});

comp.mountInto(document.body);

console.log(comp);
