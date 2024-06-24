/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
const alertDOM = document.getElementById("alert");
const confirmDOM = document.getElementById("confirm");
const promptDOM = document.getElementById("prompt");
const beepDOM = document.getElementById("beep");

function onDeviceReady() {
    alert("device is ready");
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
}

function onPause() {
    alert("device has paused");
}

function onResume() {
    alert("device has resumed");
}

function alertDismissed() {
    alert("alert dismmissed");
}

alertDOM.onclick = async () => {
    navigator.notification.alert("You are the winner!", alertDismissed, "Game Over", "Done");
}

function onConfirm(buttonIndex) {
    alert("You selected button " + buttonIndex);
}

confirmDOM.onclick = async () => {
    navigator.notification.confirm("You are the winner!", onConfirm, "Game Over", ["Restart", "Exit"]);
}

function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

promptDOM.onclick = async () => {
    navigator.notification.prompt("Please enter your name", onPrompt, "Registration", ["Ok", "Exit"], "Yusuf Demiroz");
}

beepDOM.onclick = async () => {
    const times = 3;
    navigator.notification.beep(times);
}