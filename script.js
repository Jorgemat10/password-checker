// Array of weak passwords
var weakPasswords = [
  "123456","12345678","123456789","12345","1234567","password", "1password","abc123","qwerty", "111111", "1234", "iloveyou","sunshine", "monkey","1234567890","123123","princess","baseball","dragon","football", "shadow","soccer",  "unknown","000000","myspace1","purple","fuckyou","superman","Tigger","buster","pepper","ginger","qwerty123", "qwerty1","peanut", "summer","654321","michael1","cookie","LinkedIn","whatever",
  "mustang","qwertyuiop","123456a","123abc","letmein","freedom",
  "basketball","babygirl","hello","qwe123","fuckyou1","love","family","yellow","trustno1","jesus1","chicken","diamond","scooter","booboo", "welcome","smokey","cheese","computer",
  "butterfly","696969","midnight","princess1","orange","monkey1","killer","snoopy","qwerty12","1qaz2wsx","bandit","sparky","666666","football1","master","asshole","batman","sunshine1","bubbles","friends","1q2w3e4r","chocolate","Yankees","Tinkerbell","iloveyou1","abcd1234","flower","121212","passw0rd","pokemon","StarWars","iloveyou2","123qwe","Pussy","angel1","password","PASSWORD","P@ssword","P@ssw0rd"
];

function checkPassword() {
  // Get the password input value
  var password = document.getElementById("password").value;

  // Perform password strength checks (you can customize this part)
  var strength = calculatePasswordStrength(password);

  // Display the result
  displayResult(strength);
}

function calculatePasswordStrength(password) {
  if (weakPasswords.includes(password)) {
    return "Weak";
  }

  // Check for other conditions based on your requirements
  if (password.length < 8) {
    return "Weak";
  } else if (password.length < 12) {
    return "Medium";
  } else {
    return "Strong";
  }
}

function displayResult(strength) {
  // Display the result on the page
  var resultDiv = document.getElementById("result");

  // Set color based on password strength
  var color;
  if (strength === "Weak") {
    color = "#d80f0f"; // Red
  } else if (strength === "Medium") {
    color = "#f5a623"; // Yellow
  } else {
    color = "#4caf50"; // Green
  }

  resultDiv.innerHTML =  strength;
  resultDiv.style.color = color;
}
