export const naturalEarth1 = `
vec2 naturalEarth1(float lon, float lat)
{
	float lambda = radians(lon);
	float phi = radians(lat);
	float phi2 = phi * phi;
	float phi4 = phi2 * phi2;
	float x = lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4)));
	float y = phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)));
	return vec2(x, y);
}
`;

export const naturalEarth1Invert = `
vec2 naturalEarth1Invert(float x, float y)
{
	float phi = y;
	float delta;
	float phi2 = phi * phi;
	float phi4 = phi2 * phi2;
	for (int i = 0; i < 25; i++) {
	  phi2 = phi * phi;
	  phi4 = phi2 * phi2;
	  delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3.0 + phi4 * (-0.044475 * 7.0 + 0.028874 * 9.0 * phi2 - 0.005916 * 11.0 * phi4)));
		phi = phi - delta;
		if (abs(delta) < 1e-6) {
			break;
		}
	}
	phi2 = phi * phi;
	float lambda = x / (0.8707 + phi2 * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2))));
	return vec2(degrees(lambda), degrees(phi));
}
`;
