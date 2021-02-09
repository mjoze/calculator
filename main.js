
class Calculator {

    isNumber = true;
    value = 0;

    constructor(p, display, history) {
        this.operation = [];
        this.valueOperator = 0;
        this.history = {};
        this.operator;
        this.num = '';
        this.fields = document.querySelectorAll(p);
        this.display = document.querySelector(display);
        this.historyField = document.querySelector(history);
    }

    valueAssignment() {
        this.a = this.operation[this.operation.length - 2];
        this.b = this.operation[this.operation.length - 1];
    }

    displayHistory() {
        this.history[this.value] = [this.a, this.operator, this.b, this.operation[this.operation.length - 1]];
        const lineHistory = document.createElement("div");
        lineHistory.textContent = `${this.history[this.value][0]} ${this.history[this.value][1]} ${this.history[this.value][2]} = ${this.history[this.value][3]}`
        this.historyField.appendChild(lineHistory);
        this.value++;
    }

    executeOperation(newValue) {
        this.operation.push(newValue);
        this.display.textContent = newValue;
        this.num = newValue;
    }

    add() {
        this.valueAssignment();
        // const newValue = String(this.a + this.b)
        this.executeOperation(String(this.a + this.b));
    }

    subtraction() {
        this.valueAssignment();
        // const newValue = String(this.a - this.b)
        this.executeOperation(String(this.a - this.b))
    }

    changeSign(e) {
        if (e.target.dataset.sign && (this.num != 0)) {
            this.num = this.operation.length > 1 ? (this.operation[this.operation.length - 1] * -1) : this.num * -1;
            this.display.textContent = this.num;
        }
    }

    addComa(e) {
        if (e.target.dataset.coma) {
            this.num = `${this.num}.`;
            this.display.textContent = this.num;
        }
    }

    calculations(calculation) {
        switch (calculation) {
            case '+':
                this.add();
                this.displayHistory();
                break;
            case '-':
                this.subtraction();
                this.displayHistory();
                break;
        }
    }

    getNumber(e) {
        if (e.target.dataset.number && this.isNumber) {
            (this.num[0] === "0") ?
                this.num = e.target.dataset.number
                :
                this.num += e.target.dataset.number;
            this.display.textContent = this.num;
        }
    }

    checkEmptyValue(number) {
        if (this.num === '') {
            this.num = this.operation[this.operation.length - number];
        }
        this.operation.push(Number(this.num));
        this.num = '';
    }

    getOperator(e) {
        if (e.target.dataset.operator) {
            this.isNumber = false;
            this.operator = e.target.dataset.operator;
            this.checkEmptyValue(1);
        }
        this.isNumber = true;
    }

    getScore(e) {
        if (e.target.dataset.equal) {
            this.isNumber = false;
            this.checkEmptyValue(2);
            this.calculations(this.operator);
        }
        this.isNumber = true;
    }

    removeValue(e) {
        if (e.target.dataset.remove) {
            if (this.num.length === 1) {
                this.num = '0';
                this.display.textContent = this.num
            }
            if (this.num.length > 1) {
                const newVAlue = this.num.slice(0, -1);
                this.num = newVAlue
                this.display.textContent = newVAlue;
            }
        }
    }

    getValue() {
        document.querySelector(".container").addEventListener('click', (e) => {
            this.getNumber(e);
            this.getOperator(e);
            this.getScore(e);
            this.changeSign(e)
            this.addComa(e);
            this.removeValue(e);
        });
    }


}

const ab = new Calculator("p", ".display", ".history");
ab.getValue()

