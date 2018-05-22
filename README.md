# amp
AMP version of The Economists.

## Development

Start development server

```npm run start:dev```

Run tests:

`npm run test`

Update test snapshots:

`npm run test:unit:update`

### Styled components

Recommendations for styled components.

#### Naming `styled-[component-name]`

For styled components (components able to receive styles from outside) use naming `styled-[component-name]`

#### Use `styled`
 
Avoid using className on html tags, use `` styled(‘tag’)`your styles` ``.
```js
import styled from 'react-emotion';

const StyledLink = styled('a')`
  text-decoration: none;
  &:hover,
  &.visited {
  }
`;

export default StyledLink;
```

#### `className` as a parameter

If component does not have own styles, but can be styled from outside, use `className` parameter. 
`styled` can style any component as long as it accepts a `className` prop.
```js
import styled from 'react-emotion';
const Basic = ({ className }) => (
	<div className={className}>Some text</div>
);

const Fancy = styled(Basic)`
	color: hotpink;
`

render(<Fancy />);
```

#### Styles in general

* avoid using cascade in your styles
* avoid adding multiple classes on one node, use `cx(baseClass, customClasses)` or composition instead
* if you need significantly change a look of a component, consider exporting it as a separate component (see StyledSubscribeButton/LargeSubscribeButton)
* avoid having styles in functional components, wrap your functional-component in styled-component

#### Use folders for rich components

If necessary, use folders for components which have a list of internal components.

