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

For styled components (components able to receive styles from outside) use naming `styled-[component-name]`. 

To achieve re-usability without affecting composability wrap functional-components in styled-component to keep representation separated from data handling and logic.

If component allows custom styles for it internal parts, use `styles` prop, which contains list of styles for internal parts of the component. Properties in `styles` object, should have same names as specific parts they applied to. See [story-collection-item-headline.js](https://github.com/dosyara/amp/blob/f9ae803d65b457d9d3f1083e8a91ac20adde53ed/src/app/components/story-collection/story-collection-item-headline.js#L34) for example.

#### Use `styled`
 
Avoid using `className` on html tags, use `` styled(‘tag’)`your styles` ``. This allows to extend styles without additional code, helps structuring code inside a component, and adds semantic information to JSX code.    
```js
import styled from 'react-emotion';

const StyledLink = styled('a')`
  text-decoration: none;
  &:hover,
  &:visited {
    color: hotpink;
  }
`;

render(<StyledLink>click me</StyledLink>);
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

* Avoid using cascade in your styles. Cascade has performance downsides. Applying styles directly to tags and components helps to avoid style conflicts in child/grandchild components 
* Avoid adding multiple classes on one node, use `cx(baseStyles, className)` or composition instead
* if you need significantly change a look of a component, consider exporting it as a separate component (see StyledSubscribeButton/LargeSubscribeButton)

#### Use folders for rich components

If necessary, use folders for components which have a list of internal components.

