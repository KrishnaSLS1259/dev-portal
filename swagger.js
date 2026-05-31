// apidocs.js
window.onload = function() {
  SwaggerUIBundle({
    url: "employee.json",   // relative path to your JSON spec
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "BaseLayout"
  });
};
