const SANITIZE_REGEX = /^[a-zA-Z0-9_.-]+$/;
class DocHelper {
    checkThatTheNameEndsSlash(string) {
        return string + (string.charAt(string.length - 1) === '/' ? '' : '/');
    }

    validateFilenameSafety(fileName) {
        return SANITIZE_REGEX.test(fileName);
    }

}

module.exports = new DocHelper();