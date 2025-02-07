function calculateAttendance() {
    let classesPerWeek = document.getElementById("classesPerWeek").value;
    let weeks = document.getElementById("weeks").value;
    let desiredPercentage = document.getElementById("desiredPercentage").value;
    let result = document.getElementById("result");

    // Ensure input is valid
    if (classesPerWeek <= 0 || weeks <= 0 || desiredPercentage <= 0 || desiredPercentage > 100) {
        result.innerHTML = "Please enter valid numbers!";
        result.style.color = "red";
        return;
    }

    let totalClasses = classesPerWeek * weeks;
    let minClassesRequired = Math.ceil((desiredPercentage / 100) * totalClasses);
    let maxBunksAllowed = totalClasses - minClassesRequired;

    result.innerHTML = `
        <p>You need to attend at least <span style="color: #2193b0;">${minClassesRequired}</span> out of <span style="color: #e74c3c;">${totalClasses}</span> classes.</p>
        <p>You can bunk up to <span style="color: #e74c3c;">${maxBunksAllowed}</span> classes.</p>
    `;
}
