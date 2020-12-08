import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List'
import Card from './Card'
import STORE from '../store'

const cardData = [
    {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' }
    }
]

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header="Hello" cards={cardData} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<List header="Hello" cards={cardData} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
})