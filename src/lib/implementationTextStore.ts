import { derived } from 'svelte/store';
import headerTextStore from './headerTextStore'


function dateString() {
    
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1); // Months are zero-based, so we add 1 and pad with '0' if necessary
    const day = String(currentDate.getDate()); // Pad with '0' if necessary

    return `${month}/${day}/${year}`;

}

function implementationFromHeader(headerText : string) {
    
    const classExp: RegExp = /class\s+(\w+)\s+\{([^}]+)}/g;

    const classMatch: RegExpMatchArray | null = classExp.exec(headerText);

    if (!classMatch) 
        return "";

    let className = classMatch[1];
    let bodyString = classMatch[2];

    bodyString = bodyString.replace("public:", "");
    bodyString = bodyString.replace("private:", "");

    let statementArray = bodyString.split(/;/g)
    
    statementArray = statementArray.map(s => s.trim());
    statementArray = statementArray.filter(s => s != ";");


    let isFunctionExp = /([\:\w\*\&\~]+)\s+([\:\w\*\&\~]+|operator[^\(\)]{1,3})\s*(\([^\)]*\))\s*(const)?/g;
    let isConstructorExp = /([\:\w\*\&\~]+)\s*(\([^\)]*\))/g;

    let res = ``;

    res += 
`/*
* ${className}.cpp
* John Doe
* CLASS ProjectName
* ${dateString()}
*
* The implementation of the ${className} class
*
*/
`

    for (let statement of statementArray) {

        let functionMatch = isFunctionExp.exec(statement);
        let constructorMatch = isConstructorExp.exec(statement);

        if (functionMatch  && statement==functionMatch[0]) {
           
            let prefix = functionMatch![1];
            let name = functionMatch![2];
            let args = functionMatch![3];
            let suffix = (functionMatch![4] != undefined) ? " " + functionMatch![4] : "";
  
            res += 
`
/*
* name: ${name}
* purpose: 
* arguments: 
* returns: 
* effects: 
*/
${prefix} ${className}::${name}${args} {

}${suffix};


`

        }
        
        if (constructorMatch && statement == constructorMatch[0]) {

            console.log(statement, constructorMatch[0])

            let name = constructorMatch![1];
            let args = constructorMatch![2];

            if (name == className) {
                res += 
`
/*
* name: constructor
* purpose: create a new instance of ${className} with
* arguments: 
* returns: nothing
* effects: 
*/
${className}::${name}${args} {

};


`
            }
            
            if (name == "~"+className) {
             
                res += 
`
/*
* name: destructor
* purpose: deletes this instance of the ${className} class
* arguments: none
* returns: nothing
* effects: frees alls memory allocated to this class
*/
${className}::${name}${args} {

};


`
            }
        }
    }

    return res;

} 


export default derived(headerTextStore, implementationFromHeader);