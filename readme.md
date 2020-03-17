Webpack

Commands:

    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "rimraf dist && webpack -p --config webpack.prod.js",
    "lint": "npm run lint:js && npm run lint:css",
    "server:prod": "http-server dist -o"
