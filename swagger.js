// apidocs.js
window.onload = function() {
  SwaggerUIBundle({
    url: "C:\Users\SLS1259\Downloads\site_content\employee.json",   // relative path to your JSON spec
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    layout: "BaseLayout"
  });
};
