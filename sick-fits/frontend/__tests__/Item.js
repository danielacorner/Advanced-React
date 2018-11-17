import { shallow, mount, render } from 'enzyme';
import ItemComponent from '../components/Item';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 5000,
  description: 'This item is really cool!',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg',
};

describe('<Item/>', () => {
  it('renders and displays properly', () => {
    const wrapper = shallow('<ItemComponent item={fakeItem} />');
  });
  console.log(wrapper.debug());
});
