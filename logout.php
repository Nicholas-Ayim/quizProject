<?php
session_abort();
session_unset();
session_destroy();
header("Location: loginpage.php");


?>