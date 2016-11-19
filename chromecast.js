var session;

window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    initializeCastApi();
  }
};

initializeCastApi = function() {
  cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: 'B70644E6',
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};

cast = function(state) {
  var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
  console.log(castSession.sendMessage('urn:x-cast:asocijacije', state));
}
