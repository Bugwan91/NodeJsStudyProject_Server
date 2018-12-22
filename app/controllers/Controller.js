const { validationResult } = require('express-validator/check');

const handler = {
    apply: function (target, thisArg, argumentsList) {
        const errors = validationResult(argumentsList[0]);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        } else {
            return target(argumentsList)
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