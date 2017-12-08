import Load from '../../bundle'
import bg from './images/1.jpg'

export default Load({
    name: 'index',    
    template: import('./index.jsx'),
    bg
})
