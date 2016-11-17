window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    initializeCastApi();
  }
};

initializeCastApi = function() {
  var sessionRequest = new chrome.cast.SessionRequest('B70644E6');
  var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
    sessionListener,
    receiverListener);
  chrome.cast.initialize(apiConfig, onInitSuccess, onError);

  var sessionListener = function(e) {
    console.log(e);
  }

  var onInitSuccess = function(e) {
    console.log(e);
  }

  var onError = function(e) {
    console.log(e);

  }

  function receiverListener(e) {
    if( e === chrome.cast.ReceiverAvailability.AVAILABLE) {
      console.log(e);
    }
  }
};

castBoard = function() {
  chrome.cast.requestSession(onRequestSessionSuccess, onLaunchError);
}

var onRequestSessionSuccess = function(e) {
  session = e;
}

var onLaunchError = function() {

}
