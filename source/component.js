const COMPONENT = `
    <div class="myComponent" style="width: 100px; height: 250px; background-color: #D06; position: relative">
        <div style="position: absolute; left: 10px; top: 20px; width: 75px; height: 30px; background-color: #32F">
            [MSG]
        </div>
    </div>
    `;

module.exports = class MyComponent {

    constructor(data) {
        this._data = data;
        this._el = null;
    }

    mountInto(parent) {
        if (!this._el) {
            this.render();
        }
        parent.appendChild(this._el);
    }

    render() {
        let htmlContent = COMPONENT,
            container = document.createElement("div");
        Object.keys(this._data)
            .forEach((key) => {
                htmlContent = htmlContent.replace(`[${key.toUpperCase()}]`, this._data[key]);
            });
        this._el = document.createDocumentFragment();
        this._el.appendChild(container);
        container.innerHTML = htmlContent;
    }
};
