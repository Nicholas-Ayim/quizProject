

<?php
include "signuploginbd.php";
session_start();
$message ='';

if($_SERVER['REQUEST_METHOD']=='POST'){
    $uname = $_POST['uname'];
    $password = $_POST['password'];

    $query = "select * from fashionsignup where username = '$uname' && password = '$password' limit 1";
    $result = mysqli_query($connection,$query);

    if(mysqli_num_rows($result) === 1){
            echo "Connected successfully";
            header("location: ../../shoppage.html");
            $_SESSION['uname'] = $uname;
            exit;
        }
    
    else{

    if($_POST['password'] !== mysqli_query($connection,"select * from fashionsignup password = '$password';")){
            $message = "the password or username does not match";
            header("Location: loginpage.php?message=$message");
            exit;
    }
    else{
         
    if($_POST['uname'] !== mysqli_query($connection,"select * from fashionsignup username = '$uname';")){
        $message = "the username or password does not match";
        header("Location: loginpage.php?message=$message");
        exit;
    }
    else{
         
        if(empty($_POST['uname'])|| empty($_POST['password'])){
            $message = "please use password and username to login";
            header("Location: loginpage.php?message=$message");
            exit;
        }
      
        }
  
    }
}

}

?>


<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="signuplogin.css">
</head>

<body>
    <h1 class="login-word">LOGIN</h1>
    <form method="POST">
    <?php if(isset($_GET['message'])) { ?>
        <div class="error-box" style ="border:1px solid #fff;
    height:3rem; border-radius:5px; background:  rgba(255, 0, 0, 0.498);">
    <p class="error-warning" style="color:black; padding:1rem; font-size:18px; font-weight:600;"><?= $_GET['message'] ?></p>
    </div>
      <?php } ?>
    <label for="USERNAME">
    <p class="form-name">USER NAME<span class="asterish">*</span></p>
    <input type="text" name="uname" placeholder="enter your email here">
    </label>
    <label for="Password">
    <p class="form-name">PASSWORD<span class="asterish">*</span></p>
    <input type="password" name="password">
    </label>
    <label for="button">
    <button type="submit" class="signupBtn"> login</button>
    </label>
    <label class="account-state">
    <h4 class="acccount">Don't have an account yet?</h4>
    <a  class="login-page" href="signup.php">Sign Up</a>
    </label>
    <label class="terms">
        <span><input class="check" type="checkbox" style ="width:10px;" required>
        <span>By checking the box, you agree to our<a href="#"> terms</a> &
        <a href="#">condition</a></span></span>
    </label>
    </form>
</body>
</html>