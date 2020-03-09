import colors from '../../config/colors.json'
import {generateOpacity} from './generators'

export default {
  color: {
    ...generateOpacity(colors)
  },
  // Some other global variables
  transition: {
    defaultSpeed: '0.35s'
  }
}
