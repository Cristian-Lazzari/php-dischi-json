<?php


header('Content-Type: application/json');

$dischi = file_get_contents('store.json');

echo $dischi;