<?php 
header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');

if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    $num = intval($_GET['num']);
    $zumbido = "";

    if($num % 3 == 0){
        $zumbido .= "Fizz";
    }

    if($num % 5 == 0)
    {
        $zumbido .= "Buzz";
    } 

    if(($num < 1) || ($num > 100))
    {
        $zumbido = "Error";
    }

    header("HTTP/1.1 200 OK");
    echo json_encode(
        array("numero" => $num, "zumbido" => $zumbido )
    );
}
?>