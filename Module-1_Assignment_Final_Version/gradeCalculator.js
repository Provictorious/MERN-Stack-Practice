function calculateGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 90:
        grade = 'A';
        break;
      case score >= 80:
        grade = 'B';
        break;
      case score >= 70:
        grade = 'C';
        break;
      case score >= 60:
        grade = 'D';
        break;
      default:
        grade = 'F';
    }
  
    return grade;
  }
  
  const userInput = prompt("Enter the student's score (0 to 100):");
  const score = parseFloat(userInput);
  
  if (!isNaN(score) && score >= 0 && score <= 100) {
    const grade = calculateGrade(score);
    console.log(`Student's Grade: ${grade}`);
  } else {
    console.log("Invalid input. Please enter a valid number between 0 and 100.");
  }
  