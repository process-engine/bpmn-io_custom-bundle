import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import modeler from 'bpmn-js/lib/Modeler';
import viewer from 'bpmn-js/lib/Viewer';

import MiniMap from 'diagram-js-minimap';
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas';
import ZoomScrollModule from 'diagram-js/lib/navigation/zoomscroll';

import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "diagram-js/assets/diagram-js.css";
import "./src/diagram-js-minimap.css";

export {
 camundaModdleDescriptor,
 modeler,
 MiniMap,
 ZoomScrollModule,
 MoveCanvasModule,
 viewer,
}
