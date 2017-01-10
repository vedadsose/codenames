import './cast_sender'

const initializeCastApi = () => {
  if (typeof cast !== 'undefined') {
    cast.framework && cast.framework.CastContext.getInstance().setOptions({
      receiverApplicationId: 'B70644E6',
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    })
  }
}

window['__onGCastApiAvailable'] = function(isAvailable) {
  if (isAvailable) {
    initializeCastApi()
  }
}

export default (state) => {
  if (typeof cast !== 'undefined') {
    const castSession = cast.framework && cast.framework.CastContext.getInstance().getCurrentSession()
    castSession.sendMessage('urn:x-cast:asocijacije', state)
  }
}
