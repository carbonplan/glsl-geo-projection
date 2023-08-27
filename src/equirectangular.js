export const equirectangular = `
vec2 equirectangular(float lon, float lat)
{
	float lambda = radians(lon);
	float phi = radians(lat);
	return vec2(lambda, phi);
}
`;

export const equirectangularInvert = `
vec2 equirectangularInvert(float x, float y)
{
  return vec2(degrees(x), degrees(y));
}
`;
