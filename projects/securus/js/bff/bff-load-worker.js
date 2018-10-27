// Asynchronous Relay Module for BFF Loading
// ----------------------------------------------------------
// This module emits a copy of the sent message to all event listeners to
// begin one or more asynchronous processes; it is the responsibility of the
// listener to begin the asynchronous process, not this worker
//
// NOTE:  This file is loaded by bff.js to support asynchronous bff-* loading;
// it cannot contain dependencies on jQuery, Angular, or any other third-party library
// ----------------------------------------------------------
(function () {
    self.addEventListener('message', function(e) {
        self.postMessage(e.data);
    }, false);
}());
