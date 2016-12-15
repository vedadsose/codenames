import './cast_sender'

var session;

window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    initializeCastApi();
  }
};

const initializeCastApi = () => {
  cast.framework && cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: 'B70644E6',
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });
};

export default (state) => {
  console.log(cast)
  var castSession = cast.framework && cast.framework.CastContext.getInstance().getCurrentSession();
  castSession && castSession.sendMessage('urn:x-cast:asocijacije', state);
}
