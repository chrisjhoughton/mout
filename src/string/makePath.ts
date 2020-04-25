import join from '../array/join';
import slice from '../array/slice';

/**
 * Group arguments as path segments, if any of the args is `null` or an
 * empty string it will be ignored from resulting path.
 */
function makePath(varArgs) {
    const result = join(slice(arguments), '/');
    // need to disconsider duplicate '/' after protocol (eg: 'http://')
    return result.replace(/([^:\/]|^)\/{2,}/g, '$1/');
}

export default makePath;
