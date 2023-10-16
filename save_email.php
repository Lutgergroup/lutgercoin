<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the form
    $email = $_POST["email"];

    if (!empty($email)) {
        // Define the file path
        $file = "email.txt";

        // Open the file for writing
        $handle = fopen($file, "a");

        // Write the email to the file
        fwrite($handle, $email . PHP_EOL);

        // Close the file
        fclose($handle);

        // Provide a response
        header("Location: ./");
    } else {
        header("Location: ./");
    }
} else {
    header("Location: ./");
}
?>
