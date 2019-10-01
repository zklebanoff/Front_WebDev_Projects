// Made by Zackary Klebanoff

var TL = document.querySelector('#TL');
var TC = document.querySelector('#TC');
var TR = document.querySelector('#TR');
var ML = document.querySelector('#ML');
var MC = document.querySelector('#MC');
var MR = document.querySelector('#MR');
var BL = document.querySelector('#BL');
var BC = document.querySelector('#BC');
var BR = document.querySelector('#BR');
var litty = document.querySelector("button");

// On Click
TL.addEventListener("click",function(){
  if  ( TL.textContent == "X"){
    TL.textContent = "O";}
  else if ( TL.textContent == " "){
    TL.textContent = "X";}
  else {
    TL.textContent = " ";}})

TC.addEventListener("click",function(){
  if  ( TC.textContent == "X"){
    TC.textContent = "O";}
  else if ( TC.textContent == " "){
    TC.textContent = "X";}
  else {
    TC.textContent = " ";}})

TR.addEventListener("click",function(){
  if  ( TR.textContent == "X"){
    TR.textContent = "O";}
  else if ( TR.textContent == " "){
    TR.textContent = "X";}
  else {
    TR.textContent = " ";}})

ML.addEventListener("click",function(){
  if  ( ML.textContent == "X"){
    ML.textContent = "O";}
  else if ( ML.textContent == " "){
    ML.textContent = "X";}
  else {
    ML.textContent = " ";}})

MC.addEventListener("click",function(){
  if  ( MC.textContent == "X"){
    MC.textContent = "O";}
  else if ( MC.textContent == " "){
    MC.textContent = "X";}
  else {
    MC.textContent = " ";}})

MR.addEventListener("click",function(){
  if  ( MR.textContent == "X"){
    MR.textContent = "O";}
  else if ( MR.textContent == " "){
    MR.textContent = "X";}
  else {
    MR.textContent = " ";}})

  BL.addEventListener("click",function(){
    if  ( BL.textContent == "X"){
      BL.textContent = "O";}
    else if ( BL.textContent == " "){
      BL.textContent = "X";}
    else {
      BL.textContent = " ";}})

  BC.addEventListener("click",function(){
    if  ( BC.textContent == "X"){
      BC.textContent = "O";}
    else if ( BC.textContent == " "){
      BC.textContent = "X";}
    else {
      BC.textContent = " ";}})

  BR.addEventListener("click",function(){
    if  ( BR.textContent == "X"){
      BR.textContent = "O";}
    else if ( BR.textContent == " "){
      BR.textContent = "X";}
    else {
      BR.textContent = " ";}})

  litty.onclick = function(){
     TL.textContent = " ";
     TC.textContent = " ";
     TR.textContent = " ";
     ML.textContent = " ";
     MC.textContent = " ";
     MR.textContent = " ";
     BL.textContent = " ";
     BC.textContent = " ";
     BR.textContent = " ";

     }
