var session;

window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    initializeCastApi();
  }
};

initializeCastApi = function() {
  cast.framework && cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: 'B70644E6',
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};

cast = function(state) {
  var castSession = cast.framework && cast.framework.CastContext.getInstance().getCurrentSession();
  castSession && castSession.sendMessage('urn:x-cast:asocijacije', state);
}
