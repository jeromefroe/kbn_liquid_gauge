export default function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: [
        'plugins/jeromefroe_liquid_gauge/jeromefroe_liquid_gauge'
      ]
    }

  });

};
