const path = require("path");

let testPath = path.resolve(path.join(__dirname, "component.suite.html")),
    testURL = `file://${testPath}`,
    bundlePath = path.resolve(path.join(__dirname, "../../build/bundle.js")),
    bundleURL = `file://${bundlePath}`;

let setupFunction = `var callback = arguments[arguments.length - 1];
let s = document.createElement("script");
s.src = "${bundleURL}";
document.body.appendChild(s);
setTimeout(callback, 1500);
`;

module.exports = {
    name: "MyComponent",
    url: testURL,
    setupFn: setupFunction,
    components: [
        {
            name: "MyComponent-test-1"
        }
    ]
};
