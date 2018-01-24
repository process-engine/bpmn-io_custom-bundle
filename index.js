// get bpmn-js
var BpmnModeler = require('bpmn-js/lib/Modeler');

// get camunda moddle descriptor
var camundaModdleDescriptor = require('camunda-bpmn-moddle/resources/camunda');

// get any additional modules
var additionalModules = [
  require('bpmn-js-properties-panel'),
  require('bpmn-js-properties-panel/lib/provider/camunda'),
  require('diagram-js-minimap')
];

var BpmnModdle = require('bpmn-moddle');
var ModdleXml = require('moddle-xml');

module.exports.modeler = BpmnModeler;
module.exports.camundaModdleDescriptor = camundaModdleDescriptor;
module.exports.additionalModules = additionalModules;
module.exports.moddle = BpmnModdle;
module.exports.moddleXml = ModdleXml;
