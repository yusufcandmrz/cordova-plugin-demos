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
const cordovaDOM = document.getElementById("cordova");
const modelDOM = document.getElementById("model");
const platformDOM = document.getElementById("platform");
const uuidDOM = document.getElementById("uuid");
const versionDOM = document.getElementById("version");
const manufacturerDOM = document.getElementById("manufacturer");
const isVirtualDOM = document.getElementById("isVirtual");
const serialDOM = document.getElementById("serial");
const sdkVersionDOM = document.getElementById("sdkVersion");

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

cordovaDOM.onclick = async() => {
    alert(device.cordova);
}

modelDOM.onclick = async() => {
    alert(device.model);
}

platformDOM.onclick = async() => {
    alert(device.platform);
}

uuidDOM.onclick = async() => {
    alert(device.uuid);
}

versionDOM.onclick = async() => {
    alert(device.version);
}

manufacturerDOM.onclick = async() => {
    alert(device.manufacturer);
}

isVirtualDOM.onclick = async() => {
    alert(device.isVirtual);
}

serialDOM.onclick = async() => {
    alert(device.serial);
}

sdkVersionDOM.onclick = async() => {
    alert(device.sdkVersionDOM);
}