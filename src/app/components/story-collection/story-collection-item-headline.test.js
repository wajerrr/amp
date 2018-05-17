import React from 'react';
import renderer from 'react-test-renderer';
import ItemHeadline from './story-collection-item-headline';

describe('ItemHeadline', () => {
  it('should match snapshot without subheadline', () => {
    const tree = renderer
      .create(<ItemHeadline>headline</ItemHeadline>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with subheadline', () => {
    const tree = renderer
      .create(<ItemHeadline subheadline="subheadline">headline</ItemHeadline>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with subheadline and classNames', () => {
    const tree = renderer
      .create(
        <ItemHeadline
          className="class"
          subHeadlineClassName="class1"
          headlineClassName="class2"
          subheadline="subheadline"
        >
          headline
        </ItemHeadline>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
