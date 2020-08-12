const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateTableInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.tickers)) {
        errors.tickers = "Subscription must have at least one ticker";
    };

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
}