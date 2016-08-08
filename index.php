<?php
  $load = @$_GET['disp'];
  if($load == 'gui'){
    require_once('guiIndex.php');
  } else {
    require_once('termIndex.php');
  }
?>
