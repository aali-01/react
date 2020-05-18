import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
console.log('setup tests called');
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})