// TODO: Add here the function to validate
const isEmpty = (label) => !label || label.length === 0;

function validateGamerTag(pseudo) {

    const regResultCharacters = new RegExp("[A-Za-z0-9 .-:]{8,}");
    
    return regResultCharacters.test(pseudo);
};

exports.isEmpty = isEmpty;
exports.validateGamerTag = validateGamerTag;
