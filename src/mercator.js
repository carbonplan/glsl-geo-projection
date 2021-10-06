export const mercator = `
vec2 mercator(float lon, float lat)
{
	float lambda = radians(lon);
	float phi = radians(lat);
	return vec2(lambda, log(tan((1.5707963267948966 + phi) / 2)));
}
`;

export const mercatorInvert = `
vec2 mercatorInvert(float x, float y)
{
  float lambda = x;
  float phi = 2.0 * atan(exp(y)) - 1.5707963267948966;
  return vec2(degrees(lambda), degrees(phi));
}
`;
