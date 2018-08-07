<?php 
	$autoload = function($class) {
		echo "here";
		
		if($class == "Email") {
			include_once ('classes/PHPMailer/src/PHPMailer.php') ;
			include_once ('classes/PHPMailer/src/SMTP.php') ;
			include_once ('classes/PHPMailer/src/Exception.php') ;

		}
		include_once ('classes/'.$class.'.php') ;
			
	};

	spl_autoload_register($autoload);
?>