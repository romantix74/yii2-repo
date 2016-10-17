<?php
/**
 * Created by PhpStorm.
 * User: ro
 * Date: 17.10.2016
 * Time: 22:32
 */
namespace app\controllers;
use yii\rest\ActiveController;

class CntrController extends ActiveController
{
    public $modelClass = 'app\models\Country';
}