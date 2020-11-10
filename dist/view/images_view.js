"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    render(image) {
        return {
            id: image.id,
            url: `http://127.0.0.1:3333/uploads/${image.path}`,
        };
    },
    renderMany(images) {
        return images.map((image) => this.render(image));
    },
};
