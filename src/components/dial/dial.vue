<template>
<div class='dial'>
    <div class='wheel'>
        <ul class="wheel-light">
            <li><i></i><i></i><i></i><i></i></li>
            <li><i></i><i></i><i></i><i></i></li>
            <li><i></i><i></i><i></i><i></i></li>
            <li><i></i><i></i><i></i><i></i></li>
            <li><i></i><i></i><i></i><i></i></li>
            <li><i></i><i></i><i></i><i></i></li>
        </ul>
        <DialCircle></DialCircle>
        <DialCenter></DialCenter>
  </div>
</div>
</template>
<script>
import DialCenter from './dialCenter'
import DialCircle from './dialCircle'
export default {
  name: 'dial',
  components: {
    DialCenter,
    DialCircle
  }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-family: "微软雅黑";
    font-weight: normal;
}

ul,
li {
    list-style: none;
}

body {
    background: #fff;
}

.wheel {
    margin: 100px auto;
    position: relative;
    padding: 20px;
    width: 400px;
    height: 400px;
    background: #d40;
    border-radius: 50%;
    box-shadow: inset 0 2px 0 2px rgba(255, 255, 255, .3), inset 0 -2px 0 2px rgba(0, 0, 0, .2), 1px 2px 2px rgba(0, 0, 0, .2);
}

.wheel ul {
    list-style: none;
}

.wheel-light li {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .9;
    -moz-animation: "lightFlicker" 2s linear 0 infinite;
    -webkit-animation: "lightFlicker" 2s linear 0 infinite;
    -o-animation: "lightFlicker" 2s linear 0 infinite;
    -ms-animation: "lightFlicker" 2s linear 0 infinite;
    animation: "lightFlicker" 2s linear 0 infinite;
}

.wheel-light li i {
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    background: #fe0;
    border-radius: 50%;
    box-shadow: 0 0 8px 4px #fd0;
}

.wheel-light li i:nth-child(1) {
    top: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.wheel-light li i:nth-child(2) {
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto 0;
}

.wheel-light li i:nth-child(3) {
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.wheel-light li i:nth-child(4) {
    top: 0;
    bottom: 0;
    left: 10px;
    margin: auto 0;
}

.wheel-light li:nth-child(2) {
    -moz-transform: rotate(15deg);
    -webkit-transform: rotate(15deg);
    -o-transform: rotate(15deg);
    -ms-transform: rotate(15deg);
    transform: rotate(15deg);
}

.wheel-light li:nth-child(3) {
    -moz-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
}

.wheel-light li:nth-child(4) {
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.wheel-light li:nth-child(5) {
    -moz-transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);
}

.wheel-light li:nth-child(6) {
    -moz-transform: rotate(75deg);
    -webkit-transform: rotate(75deg);
    -o-transform: rotate(75deg);
    -ms-transform: rotate(75deg);
    transform: rotate(75deg);
}

.wheel-list {
    transition: all 3s ease-in-out;
    position: relative;
    z-index: 20;
    display: block;
    width: 400px;
    height: 400px;
    overflow: hidden;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, .4);
}

.wheel-list:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    border-radius: 50%;
    box-shadow: inset 0 0 0 8px rgba(255, 255, 155, .5);
    background: rgb(255, 255, 255);
    background: -moz-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1) 40%, rgba(255, 102, 0, 1) 85%);
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(40%, rgba(255, 255, 255, 1)), color-stop(85%, rgba(255, 102, 0, 1)));
    background: -webkit-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1) 40%, rgba(255, 102, 0, 1) 85%);
    background: -o-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1) 40%, rgba(255, 102, 0, 1) 85%);
    background: -ms-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 1) 40%, rgba(255, 102, 0, 1) 85%);
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 40%, rgba(255, 102, 0, 1) 85%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ff6600', GradientType=1);
}

.wheel-list li {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 200px;
    -moz-transform-origin: center bottom;
    -webkit-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
}

.wheel-list li i {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -50%;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(255, 221, 0, .3);
    content: '';
    box-shadow: inset -1px 0 0 rgba(255, 153, 0, .7), inset 0 -1px 0 rgba(255, 255, 255, .4);
    -moz-transform-origin: right bottom;
    -webkit-transform-origin: right bottom;
    -o-transform-origin: right bottom;
    -ms-transform-origin: right bottom;
    transform-origin: right bottom;
}

.wheel-list .thanks {
    position: relative;
    margin: 0 auto;
    padding-top: 20px;
    width: 1em;
    color: #900;
    font-size: 18px;
    font-weight: 700;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .4);
    font-weight: normal;
}

.wheel-list .prize {
    position: relative;
    margin: 0 auto;
    padding-top: 20px;
    width: 50%;
    overflow: hidden;
    text-align: center;
    line-height: 25px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
}


.wheel-light li:nth-child(2n) {
    opacity: .5;
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
    -o-animation-delay: 1s;
    -ms-animation-delay: 1s;
    animation-delay: 1s;
}

.wheel-pointer {
    position: absolute;
    z-index: 30;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 140px;
    height: 140px;
    border: 1px solid #e60;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, .1);
    border-radius: 50%;
}

.activity {
    position: relative;
    margin: 50px auto;
    padding: 0 25px 30px;
    width: 800px;
    overflow: hidden;
    border-bottom: 3px solid #e5e5e5;
    background: #fff;
    font: 12px/1.5 "microsoft yahei";
    border-radius: 20px;
    box-shadow: 0 1px 6px 3px rgba(0, 0, 0, .1);
}

.wheel-pointer:before {
    position: absolute;
    top: -40px;
    left: 50%;
    display: block;
    width: 60px;
    height: 60px;
    border: 1px solid #e60;
    background: #fb0;
    content: '';
    box-shadow: inset 1px 1px 0 rgba(255, 255, 255, .5);
    -moz-transform-origin: left top;
    -webkit-transform-origin: left top;
    -o-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    -moz-transform: rotate(30deg) skewY(30deg);
    -webkit-transform: rotate(30deg) skewY(30deg);
    -o-transform: rotate(30deg) skewY(30deg);
    -ms-transform: rotate(30deg) skewY(30deg);
    transform: rotate(30deg) skewY(30deg);
}

.wheel-pointer:after {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background: #ffcc00;
    content: '';
    border-radius: 50%;
    box-shadow: inset 1px 1px 0 rgba(255, 255, 255, .5);
    background: -moz-linear-gradient(-45deg, #ffcc00 0%, #ff8800 50%, #ffcc00 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #ffcc00), color-stop(50%, #ff8800), color-stop(100%, #ffcc00));
    background: -webkit-linear-gradient(-45deg, #ffcc00 0%, #ff8800 50%, #ffcc00 100%);
    background: -o-linear-gradient(-45deg, #ffcc00 0%, #ff8800 50%, #ffcc00 100%);
    background: -ms-linear-gradient(-45deg, #ffcc00 0%, #ff8800 50%, #ffcc00 100%);
    background: linear-gradient(135deg, #ffcc00 0%, #ff8800 50%, #ffcc00 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffcc00', endColorstr='#ffcc00', GradientType=1);
}

.wheel-pointer i {
    position: absolute;
    z-index: 35;
    top: -36px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    width: 60px;
    height: 60px;
    overflow: hidden;
}

.wheel-pointer i:before {
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    -moz-transform-origin: left top;
    -webkit-transform-origin: left top;
    -o-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    -moz-transform: translateX(50%) rotate(30deg) skewY(30deg);
    -webkit-transform: translateX(50%) rotate(30deg) skewY(30deg);
    -o-transform: translateX(50%) rotate(30deg) skewY(30deg);
    -ms-transform: translateX(50%) rotate(30deg) skewY(30deg);
    transform: translateX(50%) rotate(30deg) skewY(30deg);
    background: rgb(255, 178, 0);
    background: -moz-linear-gradient(40deg, rgba(255, 178, 0, 1) 0%, rgba(255, 179, 0, 1) 45%, rgba(254, 214, 86, 1) 46%, rgba(255, 146, 0, 1) 90%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgba(255, 178, 0, 1)), color-stop(45%, rgba(255, 179, 0, 1)), color-stop(46%, rgba(254, 214, 86, 1)), color-stop(90%, rgba(255, 146, 0, 1)));
    background: -webkit-linear-gradient(40deg, rgba(255, 178, 0, 1) 0%, rgba(255, 179, 0, 1) 45%, rgba(254, 214, 86, 1) 46%, rgba(255, 146, 0, 1) 90%);
    background: -o-linear-gradient(40deg, rgba(255, 178, 0, 1) 0%, rgba(255, 179, 0, 1) 45%, rgba(254, 214, 86, 1) 46%, rgba(255, 146, 0, 1) 90%);
    background: -ms-linear-gradient(40deg, rgba(255, 178, 0, 1) 0%, rgba(255, 179, 0, 1) 45%, rgba(254, 214, 86, 1) 46%, rgba(255, 146, 0, 1) 90%);
    background: linear-gradient(50deg, rgba(255, 178, 0, 1) 0%, rgba(255, 179, 0, 1) 45%, rgba(254, 214, 86, 1) 46%, rgba(255, 146, 0, 1) 90%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffb200', endColorstr='#ff9200', GradientType=1);
}

.wheel-btn {
    position: absolute;
    z-index: 40;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding: 10px;
    width: 100px;
    height: 100px;
    box-shadow: inset 0 1px 1px rgba(255, 102, 0, .4), inset 0 -1px 1px rgba(255, 238, 0, .4);
    background: -moz-linear-gradient(top, rgba(255, 85, 0, 0.7) 0%, rgba(255, 221, 0, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 85, 0, 0.7)), color-stop(100%, rgba(255, 221, 0, 1)));
    background: -webkit-linear-gradient(top, rgba(255, 85, 0, 0.7) 0%, rgba(255, 221, 0, 1) 100%);
    background: -o-linear-gradient(top, rgba(255, 85, 0, 0.7) 0%, rgba(255, 221, 0, 1) 100%);
    background: -ms-linear-gradient(top, rgba(255, 85, 0, 0.7) 0%, rgba(255, 221, 0, 1) 100%);
    background: linear-gradient(to bottom, rgba(255, 85, 0, 0.7) 0%, rgba(255, 221, 0, 1) 100%);
    border-radius: 60px;
}

.wheel-btn strong {
    padding-top: 6px;
    display: block;
    color: #fff;
    font-size: 18px;
    text-shadow: 2px 0 0 #c30, -2px 0 0 #c30, 0 2px 0 #c30, 0 -2px 0 #c30, 1px 1px 0 #c30, -1px -1px 0 #c30, -1px 1px 0 #c30, -1px -1px 0 #c30, 0 2px 6px #a30;
}

.wheel-btn a {
    color: #ff0;
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 100px;
    height: 100px;
    overflow: hidden;
    color: #ff0;
    font: 700 14px/25px 'microsoft yahei';
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    box-shadow: -1px -1px 10px rgba(255, 255, 255, .5), 1px 1px 3px rgba(0, 0, 0, .4), inset -1px -2px 0 #a30;
    text-shadow: 1px 0 0 #c30, -1px 0 0 #c30, 0 1px 0 #c30, 0 -1px 0 #c30, 0 0 3px #fff;
    background: rgb(204, 51, 0);
    background: -moz-linear-gradient(top, rgba(204, 51, 0, 1) 0%, rgba(255, 221, 0, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(204, 51, 0, 1)), color-stop(100%, rgba(255, 221, 0, 1)));
    background: -webkit-linear-gradient(top, rgba(204, 51, 0, 1) 0%, rgba(255, 221, 0, 1) 100%);
    background: -o-linear-gradient(top, rgba(204, 51, 0, 1) 0%, rgba(255, 221, 0, 1) 100%);
    background: -ms-linear-gradient(top, rgba(204, 51, 0, 1) 0%, rgba(255, 221, 0, 1) 100%);
    background: linear-gradient(to bottom, rgba(204, 51, 0, 1) 0%, rgba(255, 221, 0, 1) 100%);
}

.wheel-btn a:after {
    position: absolute;
    bottom: 7px;
    right: 5px;
    display: block;
    width: 90px;
    height: 90px;
    content: '';
    border-radius: 50%;
    opacity: .8;
    background: -moz-linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%);
    background: -webkit-gradient(linear, right bottom, left top, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(30%, rgba(255, 255, 255, 0)));
    background: -webkit-linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%);
    background: -o-linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%);
    background: -ms-linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%);
    background: linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 30%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ccffffff', endColorstr='#00ffffff', GradientType=1);
}

</style>

