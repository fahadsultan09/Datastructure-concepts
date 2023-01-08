/**
 * 
 * * Stack
 * ! Time Complexity: 
 * ? Space Complexity: 
 */


class Stack {
    constructor(list = []) {
        this.list = list
    }
    pop = () => {
        const len = this.list.length;
        this.list = this.list.splice(0,len-1)
    }
    push =(data) => {
        this.list.push(data);
    }

}


export default Stack