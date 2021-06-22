import React from 'react';
import renderer from 'react-test-renderer';

import Text from './text';

describe('Text', () => {
  test('snapshot renders', () => {
    const text = 'text';
    const t = renderer.create(<Text text={text} />);
    const tree = t.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
