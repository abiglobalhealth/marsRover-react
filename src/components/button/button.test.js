import React from 'react';
import renderer from 'react-test-renderer';

import Button from './button';

describe('Button', () => {
  test('snapshot renders', () => {
    const onClick = jest.fn();
    const title = 'title';
    const t = renderer.create(<Button onClick={onClick} title={title} />);
    const tree = t.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
