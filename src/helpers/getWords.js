import _ from 'underscore'
import list from './words'
import getRandomEntries from './getRandomEntries'

export default () => _.shuffle(getRandomEntries(list, 25))
