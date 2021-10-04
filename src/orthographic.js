export const orthographic = `
vec2 orthographic(float lon, float lat)
{
	float lambda = radians(lon);
	float phi = radians(lat);
	return vec2(cos(phi) * sin(lambda), sin(phi));
}
`

export const orthographicInvert = `
vec2 orthographicInvert(float x, float y)
{
	float z = sqrt(x * x + y * y);
  float c = asin(z);
  float sc = sin(c);
  float cc = cos(c);
  float lambda = atan(x * sc, z * cc);
  float phi = asin(y * sc / z);
  return vec2(degrees(lambda), degrees(phi));
}
`