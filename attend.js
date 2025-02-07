function calculateAttendance() {
    let classesPerWeek = document.getElementById("classesPerWeek").value;
    let weeks = document.getElementById("weeks").value;
    let result = document.getElementById("result");

    // Ensure input is valid
    if (classesPerWeek <= 0 || weeks <= 0) {
        result.innerHTML = "Please enter valid numbers!";
        result.style.color = "red";
        return;
    }

    let totalClasses = classesPerWeek * weeks;
    let minClassesRequired = Math.ceil(totalClasses * 0.75);

    result.innerHTML = `You need to attend at least <span style="color: #2193b0;">${minClassesRequired}</span> out of <span style="color: #e74c3c;">${totalClasses}</span> classes to maintain 75% attendance.`;
}
