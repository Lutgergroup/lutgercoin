<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Validate the email (optional)
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Open a file for appending and save the email
        $file = fopen("emails.txt", "a");
        fwrite($file, $email . "\n");
        fclose($file);

        echo "Email saved successfully!";
    } else {
        echo "Invalid email address.";
    }
}
?>