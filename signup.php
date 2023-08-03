<?php
    include "signuploginbd.php";
    $message ='';
    $error='';

    if($_SERVER['REQUEST_METHOD']=='POST'){
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $uname = $_POST['uname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $verificationToken = hash('sha512',uniqid(mt_rand(),true));
        
        $query ="insert into fashionsignup(firstname,lastname,username,email,password,verification_status) values('$fName','$lName','$uname','$email','$password','$verificationToken')";

        $duplicate = mysqli_query($connection, "select * from fashionsignup where username ='$uname' or email = '$email'");
    
        if(mysqli_num_rows($duplicate) > 0){
            $error = " Email or Username Already Taken";
            header("Location: signup.php?error=$error");
            exit;
        }
        else{
            if(empty($_POST['fName'])||empty($_POST['lName']) ||empty($_POST['uname']) 
            ||empty($_POST['email']) ||empty($_POST['password'])){
                $error="Please Fill All The Form Fields";
                header("Location: signup.php?error=$error");
                exit;
            }
            else{
                if(is_numeric($_POST['fName']) || is_numeric($_POST['lName'])){
                    $error = "Please Numbers And Special Characters Are Not Allow For Names";
                    header("Location: signup.php?error=$error");
                    exit;
                }
                else{
                    if(!(empty($_POST['fName'])||empty($_POST['lName']) ||empty($_POST['uname']) 
                    ||empty($_POST['email']) ||empty($_POST['password']))){
                        mysqli_query($connection,$query);
                        $success="Registered Successfully";
                        header("Location: signup.php?success=$success");
                        // header("Location:loginpage.php");
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
<!--<script async src="formValidation.js"></script>-->

</head>

<body>
    <h1 class="login-word">SIGN UP</h1>
    
    <form method="POST"  class="myForm" >
    <?php if(isset($_GET['error'])) { ?>
        <div class="error-box" style ="border:1px solid #fff;
    height:3rem; border-radius:5px; background:  rgba(255, 0, 0, 0.498);">
    <p class="error-warning" style="color:black; padding:1rem; font-size:18px; font-weight:600;"><?= $_GET['error'] ?></p>
    </div>
      <?php } ?>

      <?php if(isset($_GET['success'])) { ?>
        <div class="error-box" style ="border:1px solid #fff;
    height:3rem; border-radius:5px;  background:green;">
    <p class="error-warning" style="color:#fff; padding:1rem; font-size:22px; font-weight:600;"><?= $_GET['success'] ?></p>
    </div>
      <?php } ?>

    <label for="FirstName">
    <p class="form-name">FIRST NAME<span class="asterish">*</span></p>
    <input type="text" name="fName" class="firstName" placeholder='enter your first name here' spellcheck = "true" >
    </label>
    <label for="LastName">
    <p class="form-name">LAST NAME<span class="asterish">*</span></p>
    <input type="text"  name="lName" class="lastName" placeholder="enter your last name here" >
    </label>
    <label for="Username">
    <p class="form-name">USER NAME<span class="asterish">*</span></p>
    <input type="text" name="uname" class="userName" placeholder="enter your username here">
    </label>
    <label for="Email">
    <p class="form-name">EMAIL<span class="asterish">*</span></p>
    <input type="email" name="email" class="email" placeholder="enter your email here" >
    </label>
    <label for="Password">
    <p class="form-name">PASSWORD<span class="asterish">*</span></p>
    <input type="password" name="password" class="password" >
    </label>
    <label for="button">
    <button type="submit" class="signupBtn"> sign up</button>
    </label>
    <h4 class="acccount">You have account?</h4>
    <a  class="login-page" href="loginpage.php">login</a>
    <label class="terms">
        <span><input class="check" type="checkbox" style ="width:10px;" required>
        <span> by checking the box, you agree to our<a href="#"> terms</a> &
        <a href="#"> condition</a></span></span>
    </label>
    </form>

</body>

</html>

