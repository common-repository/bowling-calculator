<?php

//  Protect from direct access
defined('ABSPATH') || die("Sorry!");


// Bowling Calculator Enqueue Script & Style For full Plugin

if(!class_exists("BowlingCalculator_Enqueue")):
    class BowlingCalculator_Enqueue{
        public function __construct(){

            // Initialize Script for frontend
            add_action("wp_enqueue_scripts", array(__CLASS__, "bowling_calculator_enqueue_func"));
        }
        
        public static function bowling_calculator_enqueue_func(){

            // Load CSS
            wp_enqueue_style("BowlingCalculatorCSS", plugin_dir_url(__DIR__).'assets/css/style.css');

            // Game Js
            wp_enqueue_script("BowlingCalculatorGameJS", plugin_dir_url(__DIR__).'assets/js/bowling-score.js');

            // Script Js
            wp_enqueue_script("BowlingCalculatorScriptJS", plugin_dir_url(__DIR__).'assets/js/script.js');
        }

    }

    new BowlingCalculator_Enqueue();
endif;