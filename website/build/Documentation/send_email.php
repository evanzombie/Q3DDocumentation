<?php
 
$EmailTo = "wlyu18@gmail.com"; 
$Name = Trim(stripslashes($_POST['name']));  
$Email = Trim(stripslashes($_POST['email']));  

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";    
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";  

if(isset($_POST['emailSubmit']))
{
function CheckCaptcha($userResponse) {
        $fields_string = '';
        $fields = array(
            'secret' => '6LddLEYUAAAAAGtOPrIYLe-rZEM4wOVt9Bhj8O0d',
            'response' => $userResponse
        );
        foreach($fields as $key=>$value)
        $fields_string .= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);
        $res = curl_exec($ch);
        curl_close($ch);
        return json_decode($res, true);
    } 
        $success = mail($EmailTo, "New Email List", $Body);
	       echo '<script> setTimeout(function(){window.location.href ="http://www.developer.finallyfreeproductions.com/test-site/"},1000);</script>';
  
}

 
?>
						