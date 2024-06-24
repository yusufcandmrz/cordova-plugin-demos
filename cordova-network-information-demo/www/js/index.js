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

function onDeviceReady() {
    document.querySelector("#connectionType").addEventListener("click", connectionType);
    document.querySelector("#getConstants").addEventListener("click", getConstants);

    document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);
}

function connectionType() {
    const result = navigator.connection;
    alert(JSON.stringify(result));
}

function getConstants() {
    alert(`
    UNKNOWN -> ${Connection.UNKNOWN}
    ETHERNET -> ${Connection.ETHERNET}
    WIFI -> ${Connection.WIFI}
    CELL_2G -> ${Connection.CELL_2G}
    CELL_3G -> ${Connection.CELL_3G}
    CELL_4G -> ${Connection.CELL_4G}
    CELL -> ${Connection.CELL}
    NONE -> ${Connection.NONE}`);
}

function onOffline() {
    alert("connection failed");
}

function onOnline() {
    alert("connection success");
}