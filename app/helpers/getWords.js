import list from './words'
import getRandomEntries from './getRandomEntries'
import shuffle from './shuffle'

export default () => shuffle(getRandomEntries(list, 25))
