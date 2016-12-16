import './cast_sender'

const initializeCastApi = () => {
  cast.framework && cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: 'B70644E6',
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  })
}

window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    initializeCastApi()
  }
}

export default (state) => {
  const castSession = cast.framework && cast.framework.CastContext.getInstance().getCurrentSession()
  if (castSession) {
    castSession.sendMessage('urn:x-cast:asocijacije', state)
  }
}
