<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / glsl-geo-projection

**shader math for geographic projections**

![GitHub][github-badge]][github]
![MIT License][]

[github]: https://github.com/carbonplan/glsl-geo-projection
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[mit license]: https://badgen.net/badge/license/MIT/blue

## why

The libraries [`d3-geo`](https://github.com/d3/d3-geo) and [`d3-geo-projection`](https://github.com/d3/d3-geo-projection) expose a wide diversity of [geographic map projections](https://en.wikipedia.org/wiki/Map_projection). While they are a perfect solution in JavaScript, in WebGL applications it's useful to have the same math available in GLSL. A specific use case is using the inverse equations to render raster data with  arbitrary map projections, as shown in this [neat demo](http://bl.ocks.org/mbostock/raw/5446416/e46a4985e7a851f10bc231d1e78681c457d94aad/). This library exposes both forward and inverse functions. 

_Note: Work in progress. We're making our way through the projections, largely motivated by our needs to use them. If you want to add one, please open an [Issue](https://github.com/carbonplan/glsl-geo-projection/issues)_

## use

Install the package.

```
npm i glsl-geo-projection
```

Then import the functions you want and insert them into your shader.

```js
import { orthographicInvert } from 'glsl-geo-projection'

const frag = `
${orthographicInvert}

void main() 
{
  vec2 coordinates = orthographicInvert(x, y);
  // ... remaining shader code...
}

`
```

Names are identical to those in `d3-geo` and `d3-geo-projection`. The naming convention is that each projection has forward function with its name and an inverse function with its name followed by `Invert`. For example, `orthographic` and `orthographicInvert`.

## license

All the original code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed. The library is based closely on [d3-geo](https://github.com/d3/d3-geo/blob/main/LICENSE) and [d3-geo-projection](https://github.com/d3/d3-geo-projection/blob/main/LICENSE). We request that you please provide attribution if reusing any of our digital content (graphics, logo, copy, etc.).
