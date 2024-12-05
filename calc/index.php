<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crafteri Calculator</title>
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon.png">
</head>

<style>
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: #1a1a1a; /* Dark grey background */
    color: #eaeaea; /* Light grey text */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

/* Form Container */
form {
    background: #2a2a2a; /* Slightly lighter grey background for the form */
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Subtle shadow for depth */
    width: 350px;
    text-align: center;
}

/* Input Fields */
form input[type="number"],
form select,
form button {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #444; /* Subtle border */
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    background: #333; /* Darker background for inputs */
    color: #eaeaea; /* Light text for readability */
    transition: all 0.3s ease-in-out;
}

form input[type="number"]:focus,
form select:focus {
    border-color: #007bff; /* Soft blue accent */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

/* Button */
form button {
    background: #007bff; /* Blue accent color */
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    transition: background 0.3s ease-in-out;
}

form button:hover {
    background: #0056b3; /* Darker blue on hover */
}

/* Result Box */
#result-box {
    margin-top: 1rem;
    padding: 1rem;
    background: #333; /* Darker background for result box */
    border: 1px solid #444;
    border-radius: 4px;
    font-size: 1rem;
    text-align: center;
    display: none; /* Hidden initially */
    color: #eaeaea;
}

/* Success Result */
.calc-result {
    color: #28a745; /* Soft green for success */
    font-weight: bold;
}

/* Error Messages */
.calc-error {
    color: #d9534f; /* Light red for errors */
    font-weight: bold;
}

</style>



<body>
<?php // ?

 ?>


<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

<input type="number" name="num01" placeholder="First Number" required>

<select name="operator">
    <option value="add">+</option>
    <option value="subtract">-</option>
    <option value="multiply">*</option>
    <option value="divide">/</option>
</select>

<input type="number" name="num02" placeholder="Second Number" required>

<button>Calculate Baby</button>

</form>
<div id="result-box"></div>




<?php
    $num01 = $num02 = null; 
    $operator = "";
    
    //Inputting shit from form into PHP variables
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["operator"]) && !empty($_POST["num01"]) && !empty($_POST["num02"])) {
    $num01 = filter_input(INPUT_POST, "num01", FILTER_SANITIZE_NUMBER_FLOAT);
    $num02 = filter_input(INPUT_POST, "num02", FILTER_SANITIZE_NUMBER_FLOAT);
    $operator = htmlspecialchars($_POST["operator"]);}

    // ERROR HANDLERS
    $errors = false;

    if (empty($num01) || empty($num02) || empty($operator))  {
        
        $errors = true;
    }
    if (!is_numeric($num01) || !is_numeric($num02)) {
        
        $errors = true;
    }


    // Calculate the numbers if no errors
    if (!$errors) {
        $value = 0;
        switch ($operator) {
            case "add":
                $value = $num01 + $num02;
                break;
            case "subtract":
                $value = $num01 - $num02;
                break;
            case "divide":
                $value = $num01 / $num02;
                break;
            case "multiply":
                $value = $num01 * $num02;
                break;
            default:
                $value = "ARE YOU AN IDIOT?";
                break;
     }

     echo "<script>
     document.getElementById('result-box').style.display = 'block';
     document.getElementById('result-box').innerHTML = '<p class=\"calc-result\">Result = $value</p>';
    </script>";
}




 ?>








</body>
</html>