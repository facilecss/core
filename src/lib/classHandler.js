class ClassHandler {
    constructor(variables) {
        this.variables = variables;
    }

    // Creates a css class from the variables.
    createClass(className, variables) {
        let classString = "." + className + " {";
        for (let variable in variables) {
            classString += `${variable}: ${variables[variable]};`;
        }
        classString += "}";
        return classString;
    }

    // Creates a css class from the variables.
    createClassFromObject(className, variables) {
        let classString = "." + className + " {";
        for (let variable in variables) {
            classString += `${variable}: ${variables[variable]};`;
        }
        classString += "}";
        return classString;
    }

    // Creates a css class from the variables.
    createClassFromObjectWithPrefix(className, variables, prefix) {
        let classString = "." + prefix + className + " {";
        for (let variable in variables) {
            classString += `${variable}: ${variables[variable]};`;
        }
        classString += "}";
        return classString;
    }

    // Creates a css class from the variables.
    createClassFromObjectWithPrefixAndSuffix(
        className,
        variables,
        prefix,
        suffix
    ) {
        let classString = "." + prefix + className + suffix + " {";
        for (let variable in variables) {
            classString += `${variable}: ${variables[variable]};`;
        }
        classString += "}";
        return classString;
    }
}

module.exports = ClassHandler;
