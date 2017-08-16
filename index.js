// get bpmn-js
var BpmnModeler = require('bpmn-js/lib/Modeler');

// get camunda moddle descriptor
var camundaModdleDescriptor = require('camunda-bpmn-moddle/resources/camunda');

// get any additional modules
var additionalModules = [
  require('bpmn-js-properties-panel'),
  require('bpmn-js-properties-panel/lib/provider/camunda'),
];

module.exports.modeler = BpmnModeler;
module.exports.camundaModdleDescriptor = camundaModdleDescriptor;
module.exports.additionalModules = additionalModules;
