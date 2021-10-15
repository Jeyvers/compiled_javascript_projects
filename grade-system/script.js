class Result {
    constructor(subject, score, grade, remark) {
        this.subject = subject;
        this.score = score;
        this.grade = grade;
        this.remark = remark;
    }
}

// Tasks
class UI {
    static showResults() {
        const results = Store.getResults();

        results.forEach((result) => UI.addResultToList(result));
    }

    static addResultToList(result) {
        const list = document.querySelector('#result-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${result.subject}</td>
            <td>${result.score}</td>
            <td>${result.grade}</td>
            <td>${result.remark}</td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#subject').value = '';
        document.querySelector('#score').value = '';
    } 
}

// Storage
class Store {
    static getResults(){
        let results;
        if(localStorage.getItem('results') === null) {
            results = []; 

        } else {
            results = JSON.parse(localStorage.getItem('results'));
        }
        return results;
    }

    static addResults(result) {
        const results = Store.getResults();
        results.push(result);
        localStorage.setItem('result', JSON.stringify(results));
    }
}

// Show results
document.addEventListener('DOMContentLoaded', UI.showResults);

// Add result 
document.querySelector('#grade-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const subject = document.querySelector('#subject').value;
    const score = document.querySelector('#score').value;
    let grade;
    let remark;

    if(score >= 70) {
        grade = 'A';
        remark = 'Excellent';
    } else if (score >= 60) {
        grade = 'B';
        remark = 'Very Good';
    } else if (score >= 50) {
        grade = 'C';
        remark = 'Good';
    } else if (score >= 40) {
        grade = 'D';
        remark = 'Pass';
    } else if (score <= 39) {
        grade = 'F';
        remark = 'Fail';
    }
    
    if(subject === '' || score === '') {
        alert('Please fill in all fields')
    } else {

    

        // Instantiate result
        const result = new Result(subject, score, grade, remark);
        
        // Add result to UI
        UI.addResultToList(result);

        Store.addResults(result);

        UI.clearFields();              

    }
});