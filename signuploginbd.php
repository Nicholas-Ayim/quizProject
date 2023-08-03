<?php

$dbhost ='localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'fashion';

if(!$connection = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

 die("failed to connect");
}
?>