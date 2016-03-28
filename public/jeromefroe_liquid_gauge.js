import 'plugins/jeromefroe_liquid_gauge/jeromefroe_liquid_gauge.less';
import 'plugins/jeromefroe_liquid_gauge/jeromefroe_liquid_gauge_controller';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import jeromefroeLiquidGaugeTemplate from 'plugins/jeromefroe_liquid_gauge/jeromefroe_liquid_gauge.html';
import jeromefroeLiquidGaugeParamsTemplate from 'plugins/jeromefroe_liquid_gauge/jeromefroe_liquid_gauge_params.html';
// we need to load the css ourselves

// we also need to load the controller and used by the template

// register the provider with the visTypes registry
require('ui/registry/vis_types').register(JeromefroeLiquidGaugeProvider);

function JeromefroeLiquidGaugeProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'liquidGauge',
    title: 'Liquid Gauge',
    description: 'A liquid gauge to display a metric between its minimum and maximum values.',
    icon: 'fa-beer',
    template: jeromefroeLiquidGaugeTemplate,
    params: {
      defaults: {
        handleNoResults: true,
        minimum: 20,
        maximum: 100
      },
      editor: jeromefroeLiquidGaugeParamsTemplate
    },
    schemas: new Schemas([

      {
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
        max: 1, // TODO: allow user to select more than metric
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      }
    ])
  });
}

// export the provider so that the visType can be required with Private()
export default JeromefroeLiquidGaugeProvider;
