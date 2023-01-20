// TODO: Add here the function to validate
const isEmpty = (label) => !label || label.length === 0;

function validateGamerTag(pseudo) {

    const regResult = new RegExp("[A-Za-z]{8,}");
    if(regResult.test(pseudo))
        return true;

    return false;
};

exports.isEmpty = isEmpty;
exports.validateGamerTag = validateGamerTag;
