
        const gradeForm = document.getElementById('grade-form');
        const subjectInput = document.getElementById('subject');
        const scoreInput = document.getElementById('score');
        let result = document.getElementById('result-list');
        let table = document.getElementById('table');
        result.style.visibility = "none";


        function getGradeInput() {
            let grade = scoreInput.value;
                return grade;
        }

        function getSubject() {
            let subject = subjectInput.value;
                return subject;
        }

        function getScore(e) {
            e.preventDefault();
            const grade = getGradeInput();
            const subject = getSubject();

            if (grade != '' && subject != '') {
               let tr = document.createElement('tr');
                if (grade >= 80 ) {
                    tr.innerHTML = `
                    <td>${subject}</td>
                    <td>${grade}</td>
                    <td>A</td>
                    <td>Excellent</td>
                    `;
                }
                table.appendChild(tr)

                // if(localStorage.getItem(subject) != subject){
                // localStorage.setItem('subject', subject)
                // }
            }
        }

        // function getItem() {
        //     localStorage.getItem('subject');
        // }

        subjectInput.addEventListener('input', getSubject)
        scoreInput.addEventListener('input', getGradeInput);
        gradeForm.addEventListener('submit', getScore);

        // getItem()


    