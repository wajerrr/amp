import React from 'react';
import renderer from 'react-test-renderer';
import Image from './image';

describe('Image', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Image
          src="https://www.economist.com/sites/default/files/20180602_blp904.jpg"
          width={100}
          height={100}
          layout="responsive"
        >
          link
        </Image>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
