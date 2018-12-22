const { validationResult } = require('express-validator/check');

const handler = {
    apply: function (target, thisArg, argumentsList) {
        const request = argumentsList[0]
        const response = argumentsList[1]
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({errors: errors.array()});
        } else {
            return target(...argumentsList)
        }
    }
}

const setHandlers = function (actions) {
    let handledActions = {}
    for (let action in actions) {
        handledActions[action] = new Proxy(actions[action], handler)
    }
    return handledActions;
}

module.exports = setHandlers