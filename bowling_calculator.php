<?php

/**
 * Plugin Name: Bowling Calculator
 * Plugin URI: https://shahriarahmed.me/
 * Author: Shahriar Ahmed Shovon
 * Author URI: https://facebook.com/shovon.0.ahmed
 * Description: A plugin to add Bowling Game calculator in your website with shortcode.
 * Version: 1.0
 * License: GPL V2
 * Text Domain: bowling-calculator
 */

//  Protect from direct access
defined('ABSPATH') || die('Sorry!');


add_shortcode('bowling-calculator', 'addBowlingCalculator');

function addBowlingCalculator(){

    return '
    <section class="bowling-calculator">
    <div class="keyboard">
      <p class="keyboard-heading">Ball Score Values</p>
      <form id="bowling-calculator" class="bowling-calculator">
        <p id="e-0"><input name="e-0" value="0" type="button" onclick="calc(0)" class="btn"></p>
        <p id="e-1"><input name="e-1" value="1" type="button" onclick="calc(1)" class="btn"></p>
        <p id="e-2"><input name="e-2" value="2" type="button" onclick="calc(2)" class="btn"></p>
        <p id="e-3"><input name="e-3" value="3" type="button" onclick="calc(3)" class="btn"></p>
        <p id="e-4"><input name="e-4" value="4" type="button" onclick="calc(4)" class="btn"></p>
        <p id="e-5"><input name="e-5" value="5" type="button" onclick="calc(5)" class="btn"></p>
        <p id="e-6"><input name="e-6" value="6" type="button" onclick="calc(6)" class="btn"></p>
        <p id="e-7"><input name="e-7" value="7" type="button" onclick="calc(7)" class="btn"></p>
        <p id="e-8"><input name="e-8" value="8" type="button" onclick="calc(8)" class="btn"></p>
        <p id="e-9"><input name="e-9" value="9" type="button" onclick="calc(9)" class="btn"></p>
        <p id="e-X"><input name="e-X" value="X" type="button" onclick="calc(10)" class="btn"></p>
        <p id="e-d"><input name="e-/" value="/" disabled="True" type="button" onclick="calc(-1)" class="btn">
        </p>
      </form>
    </div>
    <div class="scoreBoard">
      <div class="score-card">
        <div class="score-heading">1</div>
        <div class="score-body activeBG">
          <div class="point-row">
            <div class="score-p score-p1" id="input1-1"></div>
            <div class="score-p score-p2" id="input1-2"></div>
          </div>
          <div class="result-row" id="input1-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">2</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input2-1"></div>
            <div class="score-p score-p2" id="input2-2"></div>
          </div>
          <div class="result-row" id="input2-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">3</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input3-1"></div>
            <div class="score-p score-p2" id="input3-2"></div>
          </div>
          <div class="result-row" id="input3-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">4</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input4-1"></div>
            <div class="score-p score-p2" id="input4-2"></div>
          </div>
          <div class="result-row" id="input4-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">5</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input5-1"></div>
            <div class="score-p score-p2" id="input5-2"></div>
          </div>
          <div class="result-row" id="input5-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">6</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input6-1"></div>
            <div class="score-p score-p2" id="input6-2"></div>
          </div>
          <div class="result-row" id="input6-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">7</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input7-1"></div>
            <div class="score-p score-p2" id="input7-2"></div>
          </div>
          <div class="result-row" id="input7-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">8</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input8-1"></div>
            <div class="score-p score-p2" id="input8-2"></div>
          </div>
          <div class="result-row" id="input8-res">
          </div>
        </div>
      </div>
      <div class="score-card">
        <div class="score-heading">9</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input9-1"></div>
            <div class="score-p score-p2" id="input9-2"></div>
          </div>
          <div class="result-row" id="input9-res">
          </div>
        </div>
      </div>
      <div class="score-card score-card-10">
        <div class="score-heading">10</div>
        <div class="score-body">
          <div class="point-row">
            <div class="score-p score-p1" id="input10-1"></div>
            <div class="score-p score-p2" id="input10-2"></div>
            <div class="score-p score-p3" id="input10-3"></div>
          </div>
          <div class="result-row" id="input10-res">
          </div>
        </div>
      </div>
      <div class="score-card result-card">
        <div class="score-heading">Total Score</div>
        <div class="score-body" id="bowl_result">
        </div>
      </div>
      <div class="score-card result-card">
        <div class="score-heading">Max Possible</div>
        <div class="score-body" id="max_possible">
        </div>
      </div>
    </div>
    <button type="submit" id="btn-reset" onclick="resetGame()" class="btn-reset">Reset</button>
    </section>
    ';
    }

// Include Bowling Calculator Enqueue
include plugin_dir_path(__FILE__).'includes/bowling_calculator-enqueue.php';