import RuleProvider from 'diagram-js/lib/features/rules/RuleProvider';

import inherits from 'inherits';


export default function ResizeAllRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

inherits(ResizeAllRules, RuleProvider);

ResizeAllRules.$inject = [ 'eventBus' ];


ResizeAllRules.prototype.init = function() {

  this.addRule('shape.resize', 1500, function(event) {

    const shapeIsResizable = event.shape.type.includes('Task')
                     || event.shape.type === 'bpmn:SubProcess'
                     || event.shape.type === 'bpmn:CallActivity'
                     || event.shape.type === 'bpmn:Participant'
                     || event.shape.type === 'bpmn:Lane'
                     || event.shape.type === 'bpmn:LaneSet'
                     || event.shape.type === 'bpmn:TextAnnotation'
                     || event.shape.type === 'bpmn:Transaction'
                     || event.shape.type === 'bpmn:Group'
                     || event.shape.type === 'bpmn:EventSubProcess';

    if (shapeIsResizable){
      return true;
    }

    return false;
  });

};
