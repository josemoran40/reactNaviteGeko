export class Instruction {
    constructor(left, right, operator) {
        this.left = left;
        this.right = right;
        this.operator = operator
    }

    execute() {
        if (this.operator == '+') {
            return this.left.execute() + this.right.execute()
        } else if (this.operator == '-') {
            return this.left.execute() - this.right.execute()
        } else if (this.operator == '*') {
            return this.left.execute() * this.right.execute()
        } else if (this.operator == '/') {
            return this.left.execute() / this.right.execute()
        } else if (this.operator == '^') {
            return this.left.execute() ** this.right.execute()
        } else if (this.operator == 'number') {
            return Number(this.left)
        } else {
            throw 'Error aritmetico'
        }
    }
}