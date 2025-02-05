function addSubject() {
    let table = document.getElementById("subjectsTable").getElementsByTagName('tbody')[0];
    let row = table.insertRow();

    row.innerHTML = `
        <td>Subject ${table.rows.length}</td>
        <td><input type="number" min="0" max="100" class="marks" placeholder="Marks" oninput="updateGrade(this)"></td>
        <td><input type="number" min="1" class="credits" placeholder="Credits" oninput="updateGrade(this)"></td>
        <td class="grade">-</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">❌ Remove</button></td>
    `;
}

function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}

function getGradePoint(marks, credits) {
    if ((credits === 4 && marks > 85) || (credits !== 4 && marks > 90)) return 10.0;
    if (marks >= 80) return 9.0;
    if (marks >= 70) return 8.0;
    if (marks >= 60) return 7.0;
    if (marks >= 50) return 6.0;
    if (marks >= 40) return 5.0;
    return 0.0;
}

function getLetterGrade(marks, credits) {
    if ((credits === 4 && marks > 85) || (credits !== 4 && marks > 90)) return "O";
    if (marks >= 80) return "A+";
    if (marks >= 70) return "A";
    if (marks >= 60) return "B+";
    if (marks >= 50) return "B";
    if (marks >= 40) return "C";
    return "F";
}

function updateGrade(input) {
    let row = input.parentElement.parentElement;
    let marks = parseFloat(row.querySelector(".marks").value);
    let credits = parseFloat(row.querySelector(".credits").value);
    let gradeCell = row.querySelector(".grade");

    if (!isNaN(marks) && marks >= 0 && marks <= 100 && !isNaN(credits) && credits > 0) {
        gradeCell.textContent = getLetterGrade(marks, credits);
    } else {
        gradeCell.textContent = "-";
    }
}

function calculateGPA() {
    let marks = document.querySelectorAll(".marks");
    let credits = document.querySelectorAll(".credits");

    let totalCredits = 0, weightedSum = 0;

    for (let i = 0; i < marks.length; i++) {
        let markValue = parseFloat(marks[i].value);
        let creditValue = parseFloat(credits[i].value);

        if (isNaN(markValue) || isNaN(creditValue) || markValue < 0 || markValue > 100 || creditValue <= 0) {
            document.getElementById("result").innerHTML = "❌ Invalid input! Please enter valid values.";
            return;
        }

        let gradePoint = getGradePoint(markValue, creditValue);
        weightedSum += gradePoint * creditValue;
        totalCredits += creditValue;
    }

    if (totalCredits === 0) {
        document.getElementById("result").innerHTML = "⚠️ No subjects added!";
        return;
    }

    let gpa = weightedSum / totalCredits;
    document.getElementById("result").innerHTML = `🎯 Your GPA (10-point scale) is: <b>${gpa.toFixed(2)}</b>`;
}
