var a="\nvec2 naturalEarth1(float lon, float lat)\n{\n\tfloat lambda = radians(lon);\n\tfloat phi = radians(lat);\n\tfloat phi2 = phi * phi;\n\tfloat phi4 = phi2 * phi2;\n\tfloat x = lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4)));\n\tfloat y = phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)));\n\treturn vec2(x, y);\n}\n",t="\nvec2 naturalEarth1Invert(float x, float y)\n{\n\tfloat phi = y;\n\tfloat delta;\n\tfloat phi2 = phi * phi;\n\tfloat phi4 = phi2 * phi2;\n\tfor (int i = 0; i < 25; i++) {\n\t  phi2 = phi * phi;\n\t  phi4 = phi2 * phi2;\n\t  delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.015085 * 3.0 + phi4 * (-0.044475 * 7.0 + 0.028874 * 9.0 * phi2 - 0.005916 * 11.0 * phi4)));\n\t\tphi = phi - delta;\n\t\tif (abs(delta) < 1e-6) {\n\t\t\tbreak;\n\t\t}\n\t}\n\tphi2 = phi * phi;\n\tfloat lambda = x / (0.8707 + phi2 * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2))));\n\treturn vec2(degrees(lambda), degrees(phi));\n}\n",n="\nvec2 orthographic(float lon, float lat)\n{\n\tfloat lambda = radians(lon);\n\tfloat phi = radians(lat);\n\treturn vec2(cos(phi) * sin(lambda), sin(phi));\n}\n",i="\nvec2 orthographicInvert(float x, float y)\n{\n\tfloat z = sqrt(x * x + y * y);\n  float c = asin(z);\n  float sc = sin(c);\n  float cc = cos(c);\n  float lambda = atan(x * sc, z * cc);\n  float phi = asin(y * sc / z);\n  return vec2(degrees(lambda), degrees(phi));\n}\n",l="\nvec2 equirectangular(float lon, float lat)\n{\n\tfloat lambda = radians(lon);\n\tfloat phi = radians(lat);\n\treturn vec2(cos(phi) * sin(lambda), sin(phi));\n}\n",h="\nvec2 equirectangularInvert(float x, float y)\n{\n  return vec2(degrees(x), degrees(y));\n}\n",p="\nvec2 mercator(float lon, float lat)\n{\n\tfloat lambda = radians(lon);\n\tfloat phi = radians(lat);\n\treturn vec2(lambda, log(tan((1.5707963267948966 + phi) / 2)));\n}\n",e="\nvec2 mercatorInvert(float x, float y)\n{\n  float lambda = x;\n  float phi = 2.0 * atan(exp(y)) - 1.5707963267948966;\n  return vec2(degrees(lambda), degrees(phi));\n}\n";export{l as equirectangular,h as equirectangularInvert,p as mercator,e as mercatorInvert,a as naturalEarth1,t as naturalEarth1Invert,n as orthographic,i as orthographicInvert};
//# sourceMappingURL=index.esm.js.map
