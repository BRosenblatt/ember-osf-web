define("analytics-page/application/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "Counts": "_Counts_1mhar6",
    "CountBox": "_CountBox_1mhar6",
    "PickDateRange": "_PickDateRange_1mhar6",
    "DateRangeButton": "_DateRangeButton_1mhar6",
    "DateRangeMenu": "_DateRangeMenu_1mhar6",
    "DateRangeOption": "_DateRangeOption_1mhar6",
    "PrivateProject": "_PrivateProject_1mhar6"
  };
});
define("analytics-page/application/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "zLOTKbT6", "block": "{\"symbols\":[\"dd\",\"dateRange\",\"list\",\"node\"],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"analytics.pageTitle\"],[[\"nodeTitle\"],[[23,[\"node\",\"unsafeTitle\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"Counts\"],[[\"from\"],[\"analytics-page/application/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-4 panel panel-default \",[27,\"local-class\",[\"CountBox\"],[[\"from\"],[\"analytics-page/application/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"analytics.forks\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"                    \"],[1,[27,\"loading-indicator\",null,[[\"dark\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[7,\"h2\"],[9],[1,[21,\"forksCount\"],false],[10],[0,\"\\n\"],[4,\"link-to-external\",[[27,\"if\",[[23,[\"node\",\"isProject\"]],\"nodeForks\",\"registrationForks\"],null],[23,[\"model\",\"id\"]]],null,{\"statements\":[[0,\"                        \"],[1,[27,\"t\",[\"analytics.viewForks\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-4 \",[27,\"local-class\",[\"CountBox\"],[[\"from\"],[\"analytics-page/application/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"analytics.links\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"                        \"],[1,[27,\"loading-indicator\",null,[[\"dark\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[7,\"h2\"],[9],[1,[21,\"linkedByCount\"],false],[10],[0,\"\\n                        \"],[7,\"a\"],[11,\"role\",\"button\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"showLinksModal\"],null]],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"analytics.viewLinks\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"linksModalShown\"]]],null,{\"statements\":[[4,\"bs-modal-simple\",null,[[\"title\",\"closeTitle\",\"onHide\"],[[27,\"t\",[\"analytics.links\"],null],[27,\"t\",[\"general.close\"],null],[27,\"action\",[[22,0,[]],\"hideLinksModal\"],null]]],{\"statements\":[[4,\"if\",[[22,0,[\"node\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"ul\"],[11,\"class\",\"list-group\"],[9],[0,\"\\n\"],[4,\"paginated-list/has-many\",null,[[\"model\",\"relationshipName\",\"query\",\"analyticsScope\"],[[22,0,[\"node\"]],\"linkedByNodes\",[22,0,[\"linkedByQueryParams\"]],\"Project Analytics - Links\"]],{\"statements\":[[0,\"                                            \"],[6,[22,3,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n                                                \"],[5,\"node-card\",[],[[\"@node\",\"@readOnly\",\"@analyticsScope\"],[[22,4,[]],\"true\",\"Project Analytics - Links\"]]],[0,\"\\n                                            \"]],\"parameters\":[4]}],[0,\"\\n\\n                                            \"],[6,[22,3,[\"empty\"]],[],[[],[]],{\"statements\":[[0,\"\\n                                                \"],[1,[27,\"t\",[\"analytics.noLinks\"],null],false],[0,\"\\n                                            \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                    \"],[5,\"loading-indicator\",[],[[\"@dark\"],[\"true\"]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-4 panel panel-default \",[27,\"local-class\",[\"CountBox\"],[[\"from\"],[\"analytics-page/application/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"analytics.templateCopies\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"                    \"],[1,[27,\"loading-indicator\",null,[[\"dark\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[7,\"h2\"],[9],[1,[21,\"templatedByCount\"],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"nodePublic\"]]],null,{\"statements\":[[4,\"unless\",[[23,[\"hideAdblockWarning\"]]],null,{\"statements\":[[4,\"bs-alert\",null,[[\"type\",\"onDismissed\"],[\"info\",[27,\"action\",[[22,0,[]],[23,[\"dismissAdblockWarning\"]]],null]]],{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"analytics.adblockWarning\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"PickDateRange\"],[[\"from\"],[\"analytics-page/application/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"label\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"analytics.showForDateRange\"],null],false],[0,\"\\n\"],[4,\"bs-dropdown\",null,null,{\"statements\":[[4,\"component\",[[22,1,[\"button\"]]],[[\"class\",\"__HTML_ATTRIBUTES__\"],[[27,\"local-class\",[\"DateRangeButton\"],[[\"from\"],[\"analytics-page/application/styles\"]]],[27,\"hash\",null,[[\"aria-haspopup\",\"aria-expanded\"],[true,false]]]]],{\"statements\":[[0,\"                        \"],[1,[27,\"t\",[[27,\"concat\",[\"analytics.dateRanges.\",[23,[\"activeDateRange\",\"key\"]]],null]],null],false],[0,\"\\n                        \"],[1,[27,\"fa-icon\",[\"caret-down\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"menu\"]]],[[\"class\"],[[27,\"concat\",[[27,\"local-class\",[\"DateRangeMenu\"],[[\"from\"],[\"analytics-page/application/styles\"]]],\" dropdown-menu-right\"],null]]],{\"statements\":[[4,\"each\",[[23,[\"dateRanges\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"li\"],[11,\"role\",\"menuitem\"],[9],[0,\"\\n                                \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"DateRangeOption\"],[[\"from\"],[\"analytics-page/application/styles\"]]]]]],[11,\"role\",\"button\"],[3,\"action\",[[22,0,[]],\"setDateRange\",[22,2,[]]]],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[[27,\"concat\",[\"analytics.dateRanges.\",[22,2,[\"key\"]]],null]],null],false],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-12 \",[27,\"local-class\",[\"PrivateProject\"],[[\"from\"],[\"analytics-page/application/styles\"]]]]]],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"analytics.privateProject\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[1,[27,\"analytics-charts\",null,[[\"chartsEnabled\",\"nodeTaskInstance\",\"startDate\",\"endDate\"],[[23,[\"chartsEnabled\"]],[23,[\"model\",\"taskInstance\"]],[23,[\"activeDateRange\",\"start\"]],[23,[\"activeDateRange\",\"end\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/application/template.hbs" } });
});
define("analytics-page/components/analytics-charts/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "vGLnPv5N", "block": "{\"symbols\":[\"chartSpec\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"charts\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"col-sm-6 col-xs-12\"],[9],[0,\"\\n            \"],[1,[27,\"analytics-charts/x-chart-wrapper\",null,[[\"nodeTaskInstance\",\"startDate\",\"endDate\",\"chartSpec\",\"chartEnabled\"],[[23,[\"nodeTaskInstance\"]],[23,[\"startDate\"]],[23,[\"endDate\"]],[22,1,[]],[23,[\"chartsEnabled\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/components/analytics-charts/template.hbs" } });
});
define("analytics-page/components/analytics-charts/x-chart-wrapper/styles", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "ChartWrapper": "_ChartWrapper_1hff7g",
    "DisabledPanel": "_DisabledPanel_1hff7g",
    "Chart": "_Chart_1hff7g",
    "Blurred": "_Blurred_1hff7g",
    "ChartOverlay": "_ChartOverlay_1hff7g",
    "ChartContainer": "_ChartContainer_1hff7g"
  };
});
define("analytics-page/components/analytics-charts/x-chart-wrapper/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "8vCcMDCW", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"panel panel-default \",[27,\"local-class\",[[27,\"concat\",[\"ChartWrapper \",[27,\"unless\",[[23,[\"chartEnabled\"]],\"DisabledPanel\"],null]],null]],[[\"from\"],[\"analytics-page/components/analytics-charts/x-chart-wrapper/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-heading clearfix\"],[9],[0,\"\\n        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[[23,[\"chartSpec\",\"titleKey\"]]],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"panel-body \",[27,\"local-class\",[\"ChartContainer\"],[[\"from\"],[\"analytics-page/components/analytics-charts/x-chart-wrapper/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[[27,\"concat\",[\"Chart \",[27,\"if\",[[23,[\"overlayShown\"]],\"Blurred\"],null]],null]],[[\"from\"],[\"analytics-page/components/analytics-charts/x-chart-wrapper/styles\"]]]]]],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"overlayShown\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"ChartOverlay\"],[[\"from\"],[\"analytics-page/components/analytics-charts/x-chart-wrapper/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"keenError\"]]],null,{\"statements\":[[0,\"                    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"analytics.keenError\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"                    \"],[1,[27,\"loading-indicator\",null,[[\"dark\"],[true]]],false],[0,\"\\n                \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/components/analytics-charts/x-chart-wrapper/template.hbs" } });
});
define('analytics-page/components/bootstrap-datepicker-inline', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker-inline'], function (exports, _bootstrapDatepickerInline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepickerInline.default;
});
define('analytics-page/components/bootstrap-datepicker', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker'], function (exports, _bootstrapDatepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepicker.default;
});
define.alias('ember-bootstrap/components/bs-accordion', 'analytics-page/components/bs-accordion');
define.alias('ember-bootstrap/components/bs-accordion/item', 'analytics-page/components/bs-accordion/item');
define.alias('ember-bootstrap/components/bs-accordion/item/body', 'analytics-page/components/bs-accordion/item/body');
define.alias('ember-bootstrap/components/bs-accordion/item/title', 'analytics-page/components/bs-accordion/item/title');
define.alias('ember-bootstrap/components/bs-alert', 'analytics-page/components/bs-alert');
define.alias('osf-components/components/bs-alert/component', 'analytics-page/components/bs-alert/component');
define.alias('ember-bootstrap/components/bs-button-group', 'analytics-page/components/bs-button-group');
define.alias('ember-bootstrap/components/bs-button-group/button', 'analytics-page/components/bs-button-group/button');
define.alias('ember-bootstrap/components/bs-button', 'analytics-page/components/bs-button');
define.alias('ember-bootstrap/components/bs-carousel', 'analytics-page/components/bs-carousel');
define.alias('ember-bootstrap/components/bs-carousel/slide', 'analytics-page/components/bs-carousel/slide');
define.alias('ember-bootstrap/components/bs-collapse', 'analytics-page/components/bs-collapse');
define.alias('ember-bootstrap/components/bs-dropdown', 'analytics-page/components/bs-dropdown');
define.alias('ember-bootstrap/components/bs-dropdown/button', 'analytics-page/components/bs-dropdown/button');
define.alias('ember-bootstrap/components/bs-dropdown/menu', 'analytics-page/components/bs-dropdown/menu');
define.alias('ember-bootstrap/components/bs-dropdown/menu/divider', 'analytics-page/components/bs-dropdown/menu/divider');
define.alias('ember-bootstrap/components/bs-dropdown/menu/item', 'analytics-page/components/bs-dropdown/menu/item');
define.alias('ember-bootstrap/components/bs-dropdown/menu/link-to', 'analytics-page/components/bs-dropdown/menu/link-to');
define.alias('ember-bootstrap/components/bs-dropdown/toggle', 'analytics-page/components/bs-dropdown/toggle');
define.alias('ember-bootstrap/components/bs-form', 'analytics-page/components/bs-form');
define.alias('ember-bootstrap/components/bs-form/element', 'analytics-page/components/bs-form/element');
define.alias('ember-bootstrap/components/bs-form/element/control', 'analytics-page/components/bs-form/element/control');
define.alias('ember-bootstrap/components/bs-form/element/control/checkbox', 'analytics-page/components/bs-form/element/control/checkbox');
define.alias('ember-bootstrap/components/bs-form/element/control/input', 'analytics-page/components/bs-form/element/control/input');
define.alias('ember-bootstrap/components/bs-form/element/control/textarea', 'analytics-page/components/bs-form/element/control/textarea');
define.alias('ember-bootstrap/components/bs-form/element/errors', 'analytics-page/components/bs-form/element/errors');
define.alias('ember-bootstrap/components/bs-form/element/feedback-icon', 'analytics-page/components/bs-form/element/feedback-icon');
define.alias('ember-bootstrap/components/bs-form/element/help-text', 'analytics-page/components/bs-form/element/help-text');
define.alias('ember-bootstrap/components/bs-form/element/label', 'analytics-page/components/bs-form/element/label');
define.alias('ember-bootstrap/components/bs-form/element/layout/horizontal', 'analytics-page/components/bs-form/element/layout/horizontal');
define.alias('ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox', 'analytics-page/components/bs-form/element/layout/horizontal/checkbox');
define.alias('ember-bootstrap/components/bs-form/element/layout/inline', 'analytics-page/components/bs-form/element/layout/inline');
define.alias('ember-bootstrap/components/bs-form/element/layout/inline/checkbox', 'analytics-page/components/bs-form/element/layout/inline/checkbox');
define.alias('ember-bootstrap/components/bs-form/element/layout/vertical', 'analytics-page/components/bs-form/element/layout/vertical');
define.alias('ember-bootstrap/components/bs-form/element/layout/vertical/checkbox', 'analytics-page/components/bs-form/element/layout/vertical/checkbox');
define.alias('ember-bootstrap/components/bs-form/group', 'analytics-page/components/bs-form/group');
define.alias('ember-bootstrap/components/bs-modal-simple', 'analytics-page/components/bs-modal-simple');
define.alias('ember-bootstrap/components/bs-modal', 'analytics-page/components/bs-modal');
define.alias('ember-bootstrap/components/bs-modal/body', 'analytics-page/components/bs-modal/body');
define.alias('ember-bootstrap/components/bs-modal/dialog', 'analytics-page/components/bs-modal/dialog');
define.alias('ember-bootstrap/components/bs-modal/footer', 'analytics-page/components/bs-modal/footer');
define.alias('ember-bootstrap/components/bs-modal/header', 'analytics-page/components/bs-modal/header');
define.alias('ember-bootstrap/components/bs-modal/header/close', 'analytics-page/components/bs-modal/header/close');
define.alias('ember-bootstrap/components/bs-modal/header/title', 'analytics-page/components/bs-modal/header/title');
define.alias('ember-bootstrap/components/bs-nav', 'analytics-page/components/bs-nav');
define.alias('ember-bootstrap/components/bs-nav/item', 'analytics-page/components/bs-nav/item');
define.alias('ember-bootstrap/components/bs-nav/link-to', 'analytics-page/components/bs-nav/link-to');
define.alias('ember-bootstrap/components/bs-navbar', 'analytics-page/components/bs-navbar');
define.alias('ember-bootstrap/components/bs-navbar/content', 'analytics-page/components/bs-navbar/content');
define.alias('ember-bootstrap/components/bs-navbar/link-to', 'analytics-page/components/bs-navbar/link-to');
define.alias('ember-bootstrap/components/bs-navbar/nav', 'analytics-page/components/bs-navbar/nav');
define.alias('ember-bootstrap/components/bs-navbar/toggle', 'analytics-page/components/bs-navbar/toggle');
define.alias('ember-bootstrap/components/bs-popover', 'analytics-page/components/bs-popover');
define.alias('ember-bootstrap/components/bs-popover/element', 'analytics-page/components/bs-popover/element');
define.alias('ember-bootstrap/components/bs-progress', 'analytics-page/components/bs-progress');
define.alias('ember-bootstrap/components/bs-progress/bar', 'analytics-page/components/bs-progress/bar');
define.alias('ember-bootstrap/components/bs-tab', 'analytics-page/components/bs-tab');
define.alias('ember-bootstrap/components/bs-tab/pane', 'analytics-page/components/bs-tab/pane');
define.alias('ember-bootstrap/components/bs-tooltip', 'analytics-page/components/bs-tooltip');
define.alias('ember-bootstrap/components/bs-tooltip/element', 'analytics-page/components/bs-tooltip/element');
define.alias('ember-content-placeholders/components/content-placeholders-heading', 'analytics-page/components/content-placeholders-heading');
define.alias('ember-content-placeholders/components/content-placeholders-icon', 'analytics-page/components/content-placeholders-icon');
define.alias('ember-content-placeholders/components/content-placeholders-img', 'analytics-page/components/content-placeholders-img');
define.alias('ember-content-placeholders/components/content-placeholders-list', 'analytics-page/components/content-placeholders-list');
define.alias('ember-content-placeholders/components/content-placeholders-nav', 'analytics-page/components/content-placeholders-nav');
define.alias('ember-content-placeholders/components/content-placeholders-text', 'analytics-page/components/content-placeholders-text');
define.alias('ember-content-placeholders/components/content-placeholders', 'analytics-page/components/content-placeholders');
define.alias('osf-components/components/contributor-list/component', 'analytics-page/components/contributor-list/component');
define.alias('osf-components/components/contributor-list/contributor/component', 'analytics-page/components/contributor-list/contributor/component');
define.alias('osf-components/components/cookie-banner/component', 'analytics-page/components/cookie-banner/component');
define.alias('osf-components/components/copyable-text/component', 'analytics-page/components/copyable-text/component');
define.alias('osf-components/components/dashboard-item/component', 'analytics-page/components/dashboard-item/component');
define.alias('osf-components/components/delete-button/component', 'analytics-page/components/delete-button/component');
define.alias('osf-components/components/delete-node-modal/component', 'analytics-page/components/delete-node-modal/component');
define.alias('osf-components/components/draft-registration-card/component', 'analytics-page/components/draft-registration-card/component');
define.alias('osf-components/components/dropzone-widget/component', 'analytics-page/components/dropzone-widget/component');
define.alias('ember-popper/components/ember-popper-targeting-parent', 'analytics-page/components/ember-popper-targeting-parent');
define.alias('ember-popper/components/ember-popper', 'analytics-page/components/ember-popper');
define.alias('ember-font-awesome/components/fa-icon', 'analytics-page/components/fa-icon');
define.alias('ember-font-awesome/components/fa-list', 'analytics-page/components/fa-list');
define.alias('ember-font-awesome/components/fa-stack', 'analytics-page/components/fa-stack');
define.alias('osf-components/components/feedback-button/component', 'analytics-page/components/feedback-button/component');
define.alias('osf-components/components/file-browser-item/component', 'analytics-page/components/file-browser-item/component');
define.alias('osf-components/components/file-browser/component', 'analytics-page/components/file-browser/component');
define.alias('osf-components/components/file-editor/component', 'analytics-page/components/file-editor/component');
define.alias('osf-components/components/file-icon/component', 'analytics-page/components/file-icon/component');
define.alias('osf-components/components/file-list-item/component', 'analytics-page/components/file-list-item/component');
define.alias('osf-components/components/file-list/component', 'analytics-page/components/file-list/component');
define.alias('osf-components/components/file-renderer/component', 'analytics-page/components/file-renderer/component');
define.alias('osf-components/components/file-share-button/component', 'analytics-page/components/file-share-button/component');
define.alias('osf-components/components/file-version/component', 'analytics-page/components/file-version/component');
define.alias('osf-components/components/global-link-to/component', 'analytics-page/components/global-link-to/component');
define('analytics-page/components/head-content', ['exports', 'analytics-page/templates/head'], function (exports, _head) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    model: Ember.inject.service('head-data'),
    layout: _head.default
  });
});
define.alias('ember-cli-head/components/head-layout', 'analytics-page/components/head-layout');
define.alias('osf-components/components/hyper-link/component', 'analytics-page/components/hyper-link/component');
define.alias('osf-components/components/hyper-link/x-anchor/component', 'analytics-page/components/hyper-link/x-anchor/component');
define.alias('osf-components/components/inline-list/component', 'analytics-page/components/inline-list/component');
define.alias('osf-components/components/institution-carousel/component', 'analytics-page/components/institution-carousel/component');
define.alias('osf-components/components/join-osf-banner/component', 'analytics-page/components/join-osf-banner/component');
define.alias('osf-components/components/link/component', 'analytics-page/components/link/component');
define.alias('osf-components/components/loading-indicator/component', 'analytics-page/components/loading-indicator/component');
define.alias('osf-components/components/maintenance-banner/component', 'analytics-page/components/maintenance-banner/component');
define.alias('osf-components/components/new-project-modal/component', 'analytics-page/components/new-project-modal/component');
define.alias('osf-components/components/new-project-navigation-modal/component', 'analytics-page/components/new-project-navigation-modal/component');
define.alias('osf-components/components/node-card/component', 'analytics-page/components/node-card/component');
define.alias('osf-components/components/node-card/node-icon/component', 'analytics-page/components/node-card/node-icon/component');
define.alias('osf-components/components/node-list/component', 'analytics-page/components/node-list/component');
define.alias('osf-components/components/node-navbar/component', 'analytics-page/components/node-navbar/component');
define.alias('osf-components/components/node-navbar/link/component', 'analytics-page/components/node-navbar/link/component');
define.alias('osf-components/components/noteworthy-and-popular-project/component', 'analytics-page/components/noteworthy-and-popular-project/component');
define.alias('osf-components/components/osf-button/component', 'analytics-page/components/osf-button/component');
define.alias('osf-components/components/osf-footer/component', 'analytics-page/components/osf-footer/component');
define.alias('osf-components/components/osf-header/component', 'analytics-page/components/osf-header/component');
define.alias('osf-components/components/osf-logo/component', 'analytics-page/components/osf-logo/component');
define.alias('osf-components/components/osf-mode-footer/component', 'analytics-page/components/osf-mode-footer/component');
define.alias('osf-components/components/osf-navbar/auth-dropdown/component', 'analytics-page/components/osf-navbar/auth-dropdown/component');
define.alias('osf-components/components/osf-navbar/component', 'analytics-page/components/osf-navbar/component');
define.alias('osf-components/components/osf-navbar/x-links/component', 'analytics-page/components/osf-navbar/x-links/component');
define.alias('osf-components/components/paginated-list/all/component', 'analytics-page/components/paginated-list/all/component');
define.alias('osf-components/components/paginated-list/has-many/component', 'analytics-page/components/paginated-list/has-many/component');
define.alias('osf-components/components/paginated-list/layout/component', 'analytics-page/components/paginated-list/layout/component');
define.alias('osf-components/components/paginated-list/x-item/component', 'analytics-page/components/paginated-list/x-item/component');
define.alias('osf-components/components/paginated-list/x-render/component', 'analytics-page/components/paginated-list/x-render/component');
define.alias('osf-components/components/panel/component', 'analytics-page/components/panel/component');
define.alias('osf-components/components/panel/x-body/component', 'analytics-page/components/panel/x-body/component');
define.alias('osf-components/components/panel/x-footer/component', 'analytics-page/components/panel/x-footer/component');
define.alias('osf-components/components/panel/x-heading/component', 'analytics-page/components/panel/x-heading/component');
define.alias('osf-components/components/project-selector/component', 'analytics-page/components/project-selector/component');
define.alias('osf-components/components/quickfile-nav/component', 'analytics-page/components/quickfile-nav/component');
define.alias('osf-components/components/scheduled-banner/component', 'analytics-page/components/scheduled-banner/component');
define.alias('osf-components/components/scheduled-banner/x-maybe-link/component', 'analytics-page/components/scheduled-banner/x-maybe-link/component');
define.alias('osf-components/components/sign-up-form/component', 'analytics-page/components/sign-up-form/component');
define.alias('osf-components/components/sign-up-policy/component', 'analytics-page/components/sign-up-policy/component');
define.alias('osf-components/components/simple-paginator/component', 'analytics-page/components/simple-paginator/component');
define.alias('osf-components/components/sort-button/component', 'analytics-page/components/sort-button/component');
define.alias('osf-components/components/status-banner/component', 'analytics-page/components/status-banner/component');
define.alias('osf-components/components/success-icon/component', 'analytics-page/components/success-icon/component');
define.alias('osf-components/components/tags-widget/component', 'analytics-page/components/tags-widget/component');
define.alias('osf-components/components/tos-consent-banner/component', 'analytics-page/components/tos-consent-banner/component');
define.alias('osf-components/components/validated-input/checkbox/component', 'analytics-page/components/validated-input/checkbox/component');
define.alias('osf-components/components/validated-input/checkboxes/component', 'analytics-page/components/validated-input/checkboxes/component');
define.alias('osf-components/components/validated-input/checkboxes/x-checkbox/component', 'analytics-page/components/validated-input/checkboxes/x-checkbox/component');
define.alias('osf-components/components/validated-input/custom/component', 'analytics-page/components/validated-input/custom/component');
define.alias('osf-components/components/validated-input/date/component', 'analytics-page/components/validated-input/date/component');
define.alias('osf-components/components/validated-input/power-select/component', 'analytics-page/components/validated-input/power-select/component');
define.alias('osf-components/components/validated-input/recaptcha/component', 'analytics-page/components/validated-input/recaptcha/component');
define.alias('osf-components/components/validated-input/text/component', 'analytics-page/components/validated-input/text/component');
define.alias('osf-components/components/validated-input/textarea/component', 'analytics-page/components/validated-input/textarea/component');
define.alias('osf-components/components/validated-input/x-input-wrapper/component', 'analytics-page/components/validated-input/x-input-wrapper/component');
define.alias('osf-components/components/validated-model-form/component', 'analytics-page/components/validated-model-form/component');
define.alias('osf-components/components/zoom-to-route/component', 'analytics-page/components/zoom-to-route/component');
define('analytics-page/config/environment', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var config;

  try {
    var metaName = 'analytics-page/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports.default = config;
});
define('analytics-page/engine', ['exports', 'ember-engines/engine', 'ember-load-initializers', 'analytics-page/resolver', 'analytics-page/config/environment'], function (exports, _engine, _emberLoadInitializers, _resolver, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var modulePrefix = _environment.default.modulePrefix;


    var Eng = _engine.default.extend({
        modulePrefix: modulePrefix,
        Resolver: _resolver.default,
        dependencies: {
            services: ['i18n', 'cookies', 'store', 'analytics', 'ready', 'features', 'router', 'page-title-list', 'head-data'],
            externalRoutes: ['nodeForks', 'registrationForks']
        }
    });

    (0, _emberLoadInitializers.default)(Eng, modulePrefix);

    exports.default = Eng;
});
define.alias('ember-truth-helpers/helpers/and', 'analytics-page/helpers/and');
define.alias('osf-components/helpers/array', 'analytics-page/helpers/array');
define.alias('ember-bootstrap/helpers/bs-contains', 'analytics-page/helpers/bs-contains');
define.alias('ember-bootstrap/helpers/bs-eq', 'analytics-page/helpers/bs-eq');
define.alias('ember-concurrency/helpers/cancel-all', 'analytics-page/helpers/cancel-all');
define.alias('ember-truth-helpers/helpers/equal', 'analytics-page/helpers/eq');
define.alias('osf-components/helpers/get-ancestor-descriptor', 'analytics-page/helpers/get-ancestor-descriptor');
define.alias('ember-truth-helpers/helpers/gt', 'analytics-page/helpers/gt');
define.alias('ember-truth-helpers/helpers/gte', 'analytics-page/helpers/gte');
define.alias('ember-moment/helpers/is-after', 'analytics-page/helpers/is-after');
define.alias('ember-truth-helpers/helpers/is-array', 'analytics-page/helpers/is-array');
define.alias('ember-moment/helpers/is-before', 'analytics-page/helpers/is-before');
define.alias('ember-moment/helpers/is-between', 'analytics-page/helpers/is-between');
define.alias('ember-truth-helpers/helpers/is-equal', 'analytics-page/helpers/is-equal');
define.alias('ember-moment/helpers/is-same-or-after', 'analytics-page/helpers/is-same-or-after');
define.alias('ember-moment/helpers/is-same-or-before', 'analytics-page/helpers/is-same-or-before');
define.alias('ember-moment/helpers/is-same', 'analytics-page/helpers/is-same');
define.alias('ember-css-modules/helpers/local-class', 'analytics-page/helpers/local-class');
define.alias('ember-truth-helpers/helpers/lt', 'analytics-page/helpers/lt');
define.alias('ember-truth-helpers/helpers/lte', 'analytics-page/helpers/lte');
define.alias('ember-moment/helpers/moment-add', 'analytics-page/helpers/moment-add');
define.alias('ember-moment/helpers/moment-calendar', 'analytics-page/helpers/moment-calendar');
define.alias('ember-moment/helpers/moment-diff', 'analytics-page/helpers/moment-diff');
define.alias('ember-moment/helpers/moment-duration', 'analytics-page/helpers/moment-duration');
define.alias('ember-moment/helpers/moment-format', 'analytics-page/helpers/moment-format');
define.alias('ember-moment/helpers/moment-from-now', 'analytics-page/helpers/moment-from-now');
define.alias('ember-moment/helpers/moment-from', 'analytics-page/helpers/moment-from');
define.alias('ember-moment/helpers/moment-subtract', 'analytics-page/helpers/moment-subtract');
define.alias('ember-moment/helpers/moment-to-date', 'analytics-page/helpers/moment-to-date');
define.alias('ember-moment/helpers/moment-to-now', 'analytics-page/helpers/moment-to-now');
define.alias('ember-moment/helpers/moment-to', 'analytics-page/helpers/moment-to');
define.alias('ember-moment/helpers/unix', 'analytics-page/helpers/moment-unix');
define.alias('ember-moment/helpers/moment', 'analytics-page/helpers/moment');
define.alias('ember-truth-helpers/helpers/not-equal', 'analytics-page/helpers/not-eq');
define.alias('ember-truth-helpers/helpers/not', 'analytics-page/helpers/not');
define.alias('ember-moment/helpers/now', 'analytics-page/helpers/now');
define.alias('ember-truth-helpers/helpers/or', 'analytics-page/helpers/or');
define('analytics-page/helpers/page-title', ['exports', 'ember-page-title/helpers/page-title'], function (exports, _pageTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pageTitle.default;
});
define.alias('ember-concurrency/helpers/perform', 'analytics-page/helpers/perform');
define.alias('osf-components/helpers/range', 'analytics-page/helpers/range');
define.alias('osf-components/helpers/slugify', 'analytics-page/helpers/slugify');
define.alias('ember-i18n/helper', 'analytics-page/helpers/t');
define.alias('ember-concurrency/helpers/task', 'analytics-page/helpers/task');
define.alias('ember-moment/helpers/unix', 'analytics-page/helpers/unix');
define.alias('ember-moment/helpers/utc', 'analytics-page/helpers/utc');
define.alias('ember-truth-helpers/helpers/xor', 'analytics-page/helpers/xor');
define.alias('ember-concurrency/initializers/ember-concurrency', 'analytics-page/initializers/ember-concurrency');
define('analytics-page/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define.alias('ember-i18n-inject/initializers/i18n', 'analytics-page/initializers/i18n');
define('analytics-page/initializers/load-bootstrap-config', ['exports', 'analytics-page/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('analytics-page/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('analytics-page/instance-initializers/head-browser', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'head-browser',
    initialize: function initialize() {
      // do nothing!
      // this functionality has been moved into addon/components/head-layout.js
      // This is only here in order to not break existing addons relying on this, e.g. ember-page-title.
    }
  };
});
define("analytics-page/osf-components/tests/addon.lint-test", [], function () {
  "use strict";
});
define('analytics-page/osf-components/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/bs-alert/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/bs-alert/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/contributor-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/contributor-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/contributor-list/contributor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/contributor-list/contributor/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/cookie-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/cookie-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/copyable-text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/copyable-text/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/dashboard-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/dashboard-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/delete-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/delete-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/delete-node-modal/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/delete-node-modal/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/draft-registration-card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/draft-registration-card/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/dropzone-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/dropzone-widget/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/feedback-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/feedback-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-browser-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-browser-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-browser/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-browser/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-editor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-editor/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-icon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-icon/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-list-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-renderer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-renderer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-share-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-share-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/file-version/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-version/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/global-link-to/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/global-link-to/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/hyper-link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hyper-link/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/hyper-link/x-anchor/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/hyper-link/x-anchor/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/inline-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/inline-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/institution-carousel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/institution-carousel/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/join-osf-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/join-osf-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/link/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/loading-indicator/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/loading-indicator/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/maintenance-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/maintenance-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/new-project-modal/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/new-project-modal/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/new-project-navigation-modal/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/new-project-navigation-modal/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-card/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-card/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-card/node-icon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-card/node-icon/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-navbar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-navbar/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/node-navbar/link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/node-navbar/link/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/noteworthy-and-popular-project/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/noteworthy-and-popular-project/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-header/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-header/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-logo/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-logo/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-mode-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-mode-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-navbar/auth-dropdown/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-navbar/auth-dropdown/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-navbar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-navbar/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/osf-navbar/x-links/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/osf-navbar/x-links/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/all/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/all/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/has-many/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/has-many/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/layout/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/layout/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/x-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/x-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/paginated-list/x-render/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/paginated-list/x-render/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/x-body/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/x-body/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/x-footer/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/x-footer/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/panel/x-heading/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/panel/x-heading/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/project-selector/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/project-selector/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/quickfile-nav/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/quickfile-nav/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/scheduled-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/scheduled-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/scheduled-banner/x-maybe-link/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/scheduled-banner/x-maybe-link/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/sign-up-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sign-up-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/sign-up-policy/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sign-up-policy/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/simple-paginator/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/simple-paginator/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/sort-button/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/sort-button/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/status-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/status-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/success-icon/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/success-icon/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/tags-widget/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tags-widget/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/tos-consent-banner/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/tos-consent-banner/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/checkbox/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/checkbox/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/checkboxes/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/checkboxes/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/checkboxes/x-checkbox/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/checkboxes/x-checkbox/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/custom/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/custom/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/date/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/date/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/power-select/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/power-select/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/recaptcha/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/recaptcha/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/text/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/text/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/textarea/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/textarea/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-input/x-input-wrapper/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-input/x-input-wrapper/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/validated-model-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/validated-model-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/zoom-to-route/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/zoom-to-route/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/array.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/array.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/get-ancestor-descriptor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/get-ancestor-descriptor.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/range.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/range.js should pass ESLint\n\n');
  });

  QUnit.test('app/helpers/slugify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/slugify.js should pass ESLint\n\n');
  });
});
define("analytics-page/osf-components/tests/application/-components/verify-email-modal/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "bTQ3ltCy", "block": "{\"symbols\":[\"modal\"],\"statements\":[[4,\"if\",[[27,\"and\",[[22,0,[\"shouldShowModal\"]],[22,0,[\"userEmail\"]]],null]],null,{\"statements\":[[0,\"    \"],[5,\"bs-modal\",[],[[\"@backdropClose\"],[false]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"header\"]],[],[[\"@closeButton\"],[false]],{\"statements\":[[0,\"\\n            \"],[7,\"h3\"],[11,\"class\",\"modal-title\"],[9],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"header\"]]],null],false],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[6,[22,1,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[7,\"p\"],[11,\"data-test-verify-email-prompt\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"body\"]]],[[\"email\"],[[22,0,[\"userEmail\",\"emailAddress\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[6,[22,1,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[5,\"osf-button\",[[11,\"data-test-deny-email\",\"\"]],[[\"@disabled\",\"@onClick\"],[[22,0,[\"disableButtons\"]],[27,\"action\",[[22,0,[]],[22,0,[\"deny\"]]],null]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"denyButton\"]]],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[5,\"osf-button\",[[11,\"data-test-verify-email\",\"\"]],[[\"@type\",\"@disabled\",\"@onClick\"],[\"primary\",[22,0,[\"disableButtons\"]],[27,\"action\",[[22,0,[]],[22,0,[\"verify\"]]],null]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[[22,0,[\"translationKeys\",\"verifyButton\"]]],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[1]}],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/application/-components/verify-email-modal/template.hbs" } });
});
define('analytics-page/osf-components/tests/application/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('application/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/application/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "x0Ovrogd", "block": "{\"symbols\":[],\"statements\":[[5,\"head-layout\",[],[[],[]]],[0,\"\\n\"],[1,[27,\"page-title\",[[27,\"t\",[\"general.OSF\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Application\"],[[\"from\"],[\"analytics-page/osf-components/tests/application/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"unless\",[[22,0,[\"disableHeader\"]]],null,{\"statements\":[[4,\"if\",[[22,0,[\"theme\",\"isProvider\"]]],null,{\"statements\":[[0,\"            \"],[7,\"style\"],[9],[0,\"\\n\"],[0,\"                @import url('\"],[1,[22,0,[\"theme\",\"stylesheet\"]],false],[0,\"');\\n\"],[0,\"            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"id\",\"branded-navbar\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[5,\"osf-header\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[22,0,[\"shouldShowVerifyEmailModals\"]]],null,{\"statements\":[[0,\"        \"],[1,[21,\"application/-components/verify-email-modal\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\"],[12,\"class\",[28,[\"Application__page \",[27,\"local-class\",[\"Application__page\"],[[\"from\"],[\"analytics-page/osf-components/tests/application/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[5,\"osf-footer\",[],[[],[]]],[0,\"\\n    \"],[5,\"cookie-banner\",[],[[],[]]],[0,\"\\n    \"],[5,\"osf-mode-footer\",[],[[],[]]],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/application/template.hbs" } });
});
define('analytics-page/osf-components/tests/dashboard/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('dashboard/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dashboard/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/dashboard/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "3f6JsOZ/", "block": "{\"symbols\":[\"project\",\"project\",\"node\"],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"dashboard.page_title\"],null]],null],false],[0,\"\\n\"],[4,\"if\",[[22,0,[\"modalOpen\"]]],null,{\"statements\":[[4,\"if\",[[22,0,[\"showNewNodeNavigation\"]]],null,{\"statements\":[[0,\"        \"],[5,\"new-project-navigation-modal\",[],[[\"@node\",\"@closeModal\",\"@title\",\"@afterStayHere\"],[[22,0,[\"newNode\"]],[27,\"action\",[[22,0,[]],[22,0,[\"closeModal\"]]],null],[27,\"t\",[\"new_project.success_message\"],null],[27,\"action\",[[22,0,[]],[22,0,[\"afterStay\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[5,\"new-project-modal\",[],[[\"@afterProjectCreated\",\"@analyticsContext\",\"@closeModal\"],[[27,\"action\",[[22,0,[]],[22,0,[\"projectCreated\"]]],null],\"Dashboard\",[27,\"action\",[[22,0,[]],[22,0,[\"closeModal\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[5,\"scheduled-banner\",[],[[],[]]],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quickSearch\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container p-t-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row m-t-lg \",[27,\"if\",[[27,\"or\",[[27,\"gt\",[[22,0,[\"nodes\",\"length\"]],9],null],[22,0,[\"loading\"]]],null],[27,\"local-class\",[\"quick-search-contents\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]],null]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                        \"],[7,\"h2\"],[11,\"class\",\"col-xs-9\"],[9],[1,[27,\"t\",[\"dashboard.title\"],null],false],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"m-b-lg col-xs-3\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n                                \"],[5,\"osf-button\",[[11,\"data-test-create-project-modal-button\",\"\"]],[[\"@onClick\",\"@type\",\"@class\"],[[27,\"action\",[[22,0,[]],[22,0,[\"openModal\"]]],null],\"success\",\"m-t-md f-w-xl\"]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"t\",[\"dashboard.create_new_project_button\"],null],false],[0,\"\\n                                \"]],\"parameters\":[]}],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"quick-project\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"initialLoad\"]]],null,{\"statements\":[[0,\"                                \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,0,[\"hasNodes\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                                        \"],[7,\"div\"],[11,\"class\",\"m-b-sm text-center\"],[9],[0,\"\\n                                            \"],[7,\"div\"],[12,\"class\",[28,[\"m-v-sm \",[27,\"local-class\",[\"quick-search-input\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                \"],[7,\"input\"],[11,\"data-test-quick-search-input\",\"\"],[11,\"class\",\"form-control\"],[12,\"placeholder\",[28,[[27,\"t\",[\"dashboard.quicksearch.search\"],null]]]],[12,\"oninput\",[27,\"perform\",[[22,0,[\"filterNodes\"]]],[[\"value\"],[\"target.value\"]]]],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                                            \"],[10],[0,\"\\n                                        \"],[10],[0,\"\\n                                        \"],[7,\"p\"],[11,\"class\",\"text-center f-w-lg\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.other_links\"],null],false],[10],[0,\"\\n                                        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-table\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                            \"],[7,\"div\"],[12,\"class\",[28,[\"row m-t-md \",[27,\"local-class\",[\"node-col-headers\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-md-6\"],[9],[0,\"\\n                                                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-col\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"general.title\"],null],false],[10],[0,\"\\n                                                        \"],[5,\"sort-button\",[],[[\"@sortAction\",\"@sort\",\"@sortBy\",\"@class\"],[[27,\"action\",[[22,0,[]],[22,0,[\"sortProjects\"]]],null],[22,0,[\"sort\"]],\"title\",\"sort_button\"]]],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                                \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-md-3\"],[9],[0,\"\\n                                                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-col\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"general.contributors\"],null],false],[10],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                                \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-md-3\"],[9],[0,\"\\n                                                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quick-search-col\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                        \"],[7,\"span\"],[9],[1,[27,\"t\",[\"general.modified\"],null],false],[10],[0,\"\\n                                                        \"],[5,\"sort-button\",[],[[\"@sortAction\",\"@sort\",\"@sortBy\",\"@class\"],[[27,\"action\",[[22,0,[]],[22,0,[\"sortProjects\"]]],null],[22,0,[\"sort\"]],\"last_logged\",\"sort_button\"]]],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                            \"],[10],[0,\"\\n                                            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                                                \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-12 f-w-xl text-right \",[27,\"local-class\",[\"node-sort-dropdown\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                                    \"],[7,\"select\"],[12,\"aria-label\",[27,\"t\",[\"general.sort\"],null]],[12,\"onchange\",[27,\"action\",[[22,0,[]],[22,0,[\"sortProjects\"]]],[[\"value\"],[\"target.value\"]]]],[9],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[22,0,[\"sort\"]],\"title\"],null],\"selected\"],null]],[11,\"value\",\"title\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.title\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.asc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[22,0,[\"sort\"]],\"-title\"],null],\"selected\"],null]],[11,\"value\",\"-title\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.title\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.desc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[22,0,[\"sort\"]],\"last_logged\"],null],\"selected\"],null]],[11,\"value\",\"last_logged\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.modified\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.asc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                        \"],[7,\"option\"],[12,\"selected\",[27,\"if\",[[27,\"eq\",[[22,0,[\"sort\"]],\"-last_logged\"],null],\"selected\"],null]],[11,\"value\",\"-last_logged\"],[9],[0,\"\\n                                                            \"],[1,[27,\"t\",[\"general.modified\"],null],false],[0,\" \"],[1,[27,\"t\",[\"general.desc_paren\"],null],false],[0,\"\\n                                                        \"],[10],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                            \"],[10],[0,\"\\n\"],[4,\"each\",[[22,0,[\"nodes\"]]],null,{\"statements\":[[0,\"                                                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"if\",[[22,0,[\"loading\"]],[27,\"local-class\",[\"loading-dashboard-item\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]],null]]]],[9],[0,\"\\n                                                    \"],[5,\"dashboard-item\",[[12,\"data-test-dashboard-item\",[22,3,[\"id\"]]]],[[\"@node\"],[[22,3,[]]]]],[0,\"\\n                                                \"],[10],[0,\"\\n\"]],\"parameters\":[3]},{\"statements\":[[4,\"if\",[[22,0,[\"loading\"]]],null,{\"statements\":[[0,\"                                                    \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                                    \"],[7,\"br\"],[9],[10],[0,\"\\n                                                    \"],[7,\"i\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.no_results\"],null],false],[10],[0,\"\\n                                                    \"],[7,\"br\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                                        \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"hasMore\"]]],null,{\"statements\":[[4,\"if\",[[22,0,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                                                \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                                \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n                                                    \"],[5,\"osf-button\",[[12,\"class\",[28,[[27,\"local-class\",[\"load-nodes-button\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[11,\"data-test-load-more\",\"\"],[12,\"aria-label\",[27,\"t\",[\"new_project.more\"],null]]],[[\"@class\",\"@onClick\"],[\"col-sm-12\",[27,\"action\",[[22,0,[]],[22,0,[\"more\"]]],null]]],{\"statements\":[[0,\"\\n                                                        \"],[1,[27,\"fa-icon\",[\"caret-down\"],[[\"class\"],[[27,\"concat\",[[27,\"local-class\",[\"load-nodes\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]],\" text-muted m-b-xl\"],null]]]],false],[0,\"\\n                                                    \"]],\"parameters\":[]}],[0,\"\\n                                                \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"                                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"quick-project\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n                                        \"],[7,\"div\"],[11,\"class\",\"col-sm-12 text-center\"],[9],[0,\"\\n                                            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.no_projects.line1\"],null],false],[10],[0,\"\\n                                            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"dashboard.quicksearch.no_projects.line2\"],null],false],[10],[0,\"\\n                                            \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/dashboard/quicksearch-min-5823e8396fbf07da40ba5f753abe4035.png\"],[12,\"alt\",[28,[[27,\"t\",[\"dashboard.quicksearch.no_projects.preview_alt\"],null]]]],[11,\"class\",\"img-responsive center-block\"],[9],[10],[0,\"\\n                                        \"],[10],[0,\"\\n                                    \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"hidden-xs \",[27,\"local-class\",[\"bg-web institutions-panel\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[5,\"institution-carousel\",[[11,\"data-test-institution-carousel\",\"\"]],[[\"@institutions\"],[[22,0,[\"institutions\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"newAndNoteworthy\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"dashboard.noteworthy.description\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-6\"],[9],[0,\"\\n                            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"public-projects-box\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[11,\"data-test-noteworthy-list\",\"\"],[9],[0,\"\\n                                \"],[7,\"h4\"],[11,\"class\",\"m-b-md\"],[9],[1,[27,\"t\",[\"dashboard.noteworthy.new_and_noteworthy\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"failedLoading-noteworthy\"]]],null,{\"statements\":[[0,\"                                    \"],[1,[27,\"t\",[\"dashboard.noteworthy.failed_noteworthy\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,0,[\"noteworthy\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[22,0,[\"noteworthy\"]]],null,{\"statements\":[[0,\"                                            \"],[5,\"noteworthy-and-popular-project\",[[12,\"data-test-noteworthy-project\",[22,2,[\"id\"]]]],[[\"@project\"],[[22,2,[]]]]],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},{\"statements\":[[0,\"                                        \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-6\"],[9],[0,\"\\n                            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"public-projects-box\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[11,\"data-test-popular-list\",\"\"],[9],[0,\"\\n                                \"],[7,\"h4\"],[11,\"class\",\"m-b-md\"],[9],[1,[27,\"t\",[\"dashboard.noteworthy.most_popular\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"failedLoading-popular\"]]],null,{\"statements\":[[0,\"                                    \"],[1,[27,\"t\",[\"dashboard.noteworthy.failed_popular\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,0,[\"popular\",\"length\"]]],null,{\"statements\":[[4,\"each\",[[22,0,[\"popular\"]]],null,{\"statements\":[[0,\"                                            \"],[5,\"noteworthy-and-popular-project\",[[12,\"data-test-popular-project\",[22,1,[\"id\"]]]],[[\"@project\"],[[22,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},{\"statements\":[[0,\"                                        \"],[5,\"loading-indicator\",[],[[],[]]],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"text-center col-sm-12\"],[9],[0,\"\\n                            \"],[7,\"a\"],[11,\"role\",\"link\"],[11,\"href\",\"/search/?q=*\"],[11,\"class\",\"btn btn-default m-v-lg\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Dashboard - noteworthy_search\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"dashboard.noteworthy.search_more\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"bg-web meetings\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"p-v-sm\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-8\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering\"],[9],[0,\"\\n                                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"dashboard.meetings.title\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering m-t-lg\"],[9],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"text-bigger\"],[9],[1,[27,\"t\",[\"dashboard.meetings.description\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-4 text-center\"],[9],[0,\"\\n                            \"],[7,\"div\"],[9],[0,\"\\n                                \"],[7,\"a\"],[12,\"class\",[28,[\"btn btn-banner btn-success btn-lg btn-success-high-contrast m-v-xl f-w-xl \",[27,\"local-class\",[\"btn-banner\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[11,\"role\",\"link\"],[11,\"href\",\"/meetings/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Dashboard - meetings_button\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"dashboard.meetings.button\"],null],false],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"preprints\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"p-v-sm\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-8\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering\"],[9],[0,\"\\n                                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"dashboard.preprints.title\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"conference-centering m-t-lg\"],[9],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"text-bigger\"],[9],[1,[27,\"t\",[\"dashboard.preprints.description\"],null],false],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-md-4 text-center\"],[9],[0,\"\\n                            \"],[7,\"div\"],[9],[0,\"\\n                                \"],[7,\"a\"],[12,\"class\",[28,[\"btn btn-banner btn-success btn-lg btn-success-high-contrast m-v-xl f-w-xl \",[27,\"local-class\",[\"btn-banner\"],[[\"from\"],[\"analytics-page/osf-components/tests/dashboard/styles\"]]]]]],[11,\"role\",\"link\"],[11,\"href\",\"/preprints/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Dashboard - preprints_button\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"dashboard.preprints.button\"],null],false],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/dashboard/template.hbs" } });
});
define("analytics-page/osf-components/tests/error-no-api/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "oDVZihZM", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"error_no_api.title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"error_no_api.body\"],[[\"supportEmail\"],[[22,0,[\"supportEmail\"]]]]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/error-no-api/template.hbs" } });
});
define('analytics-page/osf-components/tests/guid-file/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-file/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-file/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/guid-file/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "+FXhmR7X", "block": "{\"symbols\":[\"version\",\"modal\"],\"statements\":[[1,[27,\"page-title\",[[22,0,[\"model\",\"file\",\"name\"]]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[5,\"quickfile-nav\",[],[[\"@user\",\"@onQuickfiles\"],[[22,0,[\"model\",\"user\"]],false]]],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar__title\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"\\n                \"],[1,[22,0,[\"model\",\"file\",\"name\"]],false],[0,\"\\n                \"],[5,\"osf-button\",[[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar__version-link\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]]],[[\"@type\",\"@onClick\"],[\"link\",[27,\"action\",[[22,0,[]],\"changeView\",\"revision\"],null]]],{\"statements\":[[0,\"\\n                    \"],[1,[27,\"t\",[\"file_detail.version.title\"],[[\"version-number\"],[[22,0,[\"mfrVersion\"]]]]],false],[0,\"\\n                \"]],\"parameters\":[]}],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar__buttons\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"id\",\"toggleBar\"],[11,\"class\",\"pull-right\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"btn-toolbar m-t-md\"],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"canDelete\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                            \"],[5,\"osf-button\",[[11,\"data-test-delete-button\",\"\"]],[[\"@type\",\"@size\",\"@onClick\"],[\"default\",\"sm\",[27,\"action\",[[22,0,[]],[22,0,[\"openDeleteModal\"]]],null]]],{\"statements\":[[0,\"\\n                                \"],[1,[27,\"t\",[\"general.delete\"],null],false],[0,\"\\n                            \"]],\"parameters\":[]}],[0,\"\\n                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                        \"],[5,\"osf-button\",[[11,\"data-test-download-button\",\"\"]],[[\"@type\",\"@size\",\"@onClick\"],[\"primary\",\"sm\",[27,\"action\",[[22,0,[]],[22,0,[\"download\"]],[22,0,[\"model\",\"file\",\"currentVersion\"]]],null]]],{\"statements\":[[0,\"\\n                            \"],[1,[27,\"t\",[\"general.download\"],null],false],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                        \"],[5,\"file-share-button\",[],[[\"@file\"],[[22,0,[\"model\",\"file\"]]]]],[0,\"\\n                    \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"isEditableFile\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"btn-group btn-group-sm m-t-xs\"],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"canEdit\"]]],null,{\"statements\":[[0,\"                                \"],[5,\"osf-button\",[[12,\"class\",[28,[[27,\"local-class\",[\"TitleBar__button-label\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]]],[[\"@disabled\"],[true]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"t\",[\"file_detail.toggle\"],null],false],[0,\"\\n                                \"]],\"parameters\":[]}],[0,\"\\n                                \"],[5,\"osf-button\",[],[[\"@type\",\"@onClick\"],[[28,[[27,\"if\",[[27,\"or\",[[27,\"eq\",[[22,0,[\"show\"]],\"view\"],null],[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null]],null],\"primary\",\"default\"],null]]],[27,\"action\",[[22,0,[]],[22,0,[\"changeView\"]],\"view\"],null]]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"t\",[\"general.view\"],null],false],[0,\"\\n                                \"]],\"parameters\":[]}],[0,\"\\n                                \"],[5,\"osf-button\",[],[[\"@type\",\"@onClick\"],[[28,[[27,\"if\",[[27,\"or\",[[27,\"eq\",[[22,0,[\"show\"]],\"edit\"],null],[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null]],null],\"primary\",\"default\"],null]]],[27,\"action\",[[22,0,[]],[22,0,[\"changeView\"]],\"edit\"],null]]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"t\",[\"general.edit\"],null],false],[0,\"\\n                                \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[5,\"osf-button\",[],[[\"@type\",\"@onClick\"],[[28,[[27,\"if\",[[27,\"or\",[[27,\"eq\",[[22,0,[\"show\"]],\"view\"],null],[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null]],null],\"primary\",\"default\"],null]]],[27,\"action\",[[22,0,[]],[22,0,[\"changeView\"]],\"view\"],null]]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"t\",[\"general.view\"],null],false],[0,\"\\n                                \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                        \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                            \"],[5,\"osf-button\",[],[[\"@type\",\"@size\",\"@onClick\"],[[28,[[27,\"if\",[[27,\"or\",[[27,\"eq\",[[22,0,[\"show\"]],\"view\"],null],[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null]],null],\"primary\",\"default\"],null]]],\"sm\",[27,\"action\",[[22,0,[]],[22,0,[\"changeView\"]],\"view\"],null]]],{\"statements\":[[0,\"\\n                                \"],[1,[27,\"t\",[\"general.view\"],null],false],[0,\"\\n                            \"]],\"parameters\":[]}],[0,\"\\n                        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    \"],[7,\"div\"],[11,\"class\",\"btn-group m-l-xs m-t-xs\"],[9],[0,\"\\n                        \"],[5,\"osf-button\",[[11,\"data-test-revisions-tab\",\"\"]],[[\"@type\",\"@size\",\"@onClick\"],[[28,[[27,\"if\",[[27,\"eq\",[[22,0,[\"show\"]],\"revision\"],null],\"primary\",\"default\"],null]]],\"sm\",[27,\"action\",[[22,0,[]],[22,0,[\"changeView\"]],\"revision\"],null]]],{\"statements\":[[0,\"\\n                            \"],[1,[27,\"t\",[\"general.revisions\"],null],false],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[5,\"bs-modal\",[],[[\"@open\",\"@onSubmit\",\"@onHidden\"],[[22,0,[\"deleteModalOpen\"]],[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"closeDeleteModal\"]]],null]]],{\"statements\":[[0,\"\\n        \"],[6,[22,2,[\"header\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[7,\"h4\"],[11,\"class\",\"modal-title\"],[9],[1,[27,\"t\",[\"file_detail.delete_file.question\"],null],false],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[6,[22,2,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"file_detail.delete_file.confirm\"],[[\"file-name\"],[[22,0,[\"model\",\"file\",\"name\"]]]]],false],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[6,[22,2,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[5,\"osf-button\",[],[[\"@onClick\",\"@type\"],[[27,\"action\",[[22,0,[]],[22,2,[\"close\"]]],null],\"default\"]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[5,\"osf-button\",[],[[\"@onClick\",\"@type\"],[[27,\"action\",[[22,0,[]],[22,2,[\"submit\"]]],null],\"danger\"]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"general.delete\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[2]}],[0,\"\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"Main\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"col-md-3 \",[27,\"local-class\",[\"Sidebar\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n            \"],[5,\"file-list\",[],[[\"@items\",\"@filter\",\"@selectedFile\",\"@user\",\"@unselect\",\"@openOnSelect\",\"@updateFilter\",\"@openFile\"],[[22,0,[\"files\"]],[22,0,[\"filter\"]],[22,0,[\"model\",\"file\"]],[22,0,[\"model\",\"user\"]],false,true,[27,\"perform\",[[22,0,[\"updateFilter\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"openFile\"]]],null]]]],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[22,0,[\"canEdit\"]],[22,0,[\"file\",\"tags\"]]],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[\"panel panel-default \",[27,\"local-class\",[\"TagsPanel\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[\"panel-heading clearfix \",[27,\"local-class\",[\"TagsPanel__heading\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"file_detail.tags\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                        \"],[5,\"tags-widget\",[],[[\"@tags\",\"@addTag\",\"@removeTag\",\"@readOnly\",\"@showAdd\",\"@analyticsScope\"],[[22,0,[\"file\",\"tags\"]],[27,\"action\",[[22,0,[]],[22,0,[\"addTag\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"removeTag\"]]],null],[27,\"not\",[[22,0,[\"canEdit\"]]],null],[22,0,[\"canEdit\"]],\"Quick Files\"]]],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"tags_clear\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-9\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[22,0,[\"show\"]],\"view\"],null],[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null]],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"id\",\"mfrIframeParent\"],[12,\"class\",[28,[[27,\"if\",[[27,\"and\",[[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null],[22,0,[\"canEdit\"]]],null],\"col-sm-6\"],null]]]],[9],[0,\"\\n                    \"],[5,\"file-renderer\",[],[[\"@download\",\"@version\",\"@height\",\"@width\"],[[22,0,[\"model\",\"file\",\"links\",\"download\"]],[22,0,[\"mfrVersion\"]],\"700\",\"99%\"]]],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"and\",[[22,0,[\"isEditableFile\"]],[22,0,[\"canEdit\"]],[27,\"or\",[[27,\"eq\",[[22,0,[\"show\"]],\"edit\"],null],[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null]],null]],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"concat\",[\"panel panel-default \",[27,\"if\",[[27,\"and\",[[27,\"eq\",[[22,0,[\"show\"]],\"view_edit\"],null],[22,0,[\"canEdit\"]]],null],\"col-sm-6\"],null]],null],\" \",[27,\"local-class\",[\"EditPanel\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[27,\"not\",[[27,\"eq\",[[27,\"await\",[[22,0,[\"fileText\"]]],null],null],null]],null]],null,{\"statements\":[[0,\"                        \"],[5,\"file-editor\",[],[[\"@fileText\",\"@save\"],[[27,\"await\",[[22,0,[\"fileText\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"save\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[22,0,[\"show\"]],\"revision\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[\"panel panel-default \",[27,\"local-class\",[\"RevisionsPanel\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[11,\"id\",\"revisionsPanel\"],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[\"clearfix \",[27,\"local-class\",[\"TagsPanel__heading\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"general.revisions\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n                        \"],[7,\"table\"],[12,\"class\",[28,[\"table table-responsive \",[27,\"local-class\",[\"RevisionsPanel__table\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-file/styles\"]]]]]],[9],[0,\"\\n                            \"],[7,\"thead\"],[9],[0,\"\\n                                \"],[7,\"tr\"],[9],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"col-md-4\"],[9],[1,[27,\"t\",[\"file_detail.version.id\"],null],false],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"col-md-6\"],[9],[1,[27,\"t\",[\"general.date\"],null],false],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"colspan\",\"2\"],[11,\"class\",\"col-xs-2\"],[9],[1,[27,\"t\",[\"general.download\"],null],false],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"hidden-md hidden-sm hidden-xs\"],[9],[0,\"\\n                                        \"],[1,[27,\"t\",[\"general.md5\"],null],false],[0,\"\\n                                        \"],[7,\"span\"],[9],[0,\"\\n                                            \"],[1,[27,\"fa-icon\",[\"question-circle\"],null],false],[0,\"\\n                                            \"],[5,\"bs-popover\",[],[[\"@triggerEvents\",\"@placement\"],[\"hover\",\"top\"]],{\"statements\":[[0,\"\\n                                                \"],[1,[27,\"t\",[\"file_detail.md5_description\"],null],false],[0,\"\\n                                            \"]],\"parameters\":[]}],[0,\"\\n                                        \"],[10],[0,\"\\n                                    \"],[10],[0,\"\\n                                    \"],[7,\"th\"],[11,\"class\",\"hidden-md hidden-sm hidden-xs\"],[9],[0,\"\\n                                        \"],[1,[27,\"t\",[\"general.sha2\"],null],false],[0,\"\\n                                        \"],[7,\"span\"],[9],[0,\"\\n                                            \"],[1,[27,\"fa-icon\",[\"question-circle\"],null],false],[0,\"\\n                                            \"],[5,\"bs-popover\",[],[[\"@triggerEvents\",\"@placement\"],[\"hover\",\"top\"]],{\"statements\":[[0,\"\\n                                                \"],[1,[27,\"t\",[\"file_detail.sha2_description\"],null],false],[0,\"\\n                                            \"]],\"parameters\":[]}],[0,\"\\n                                        \"],[10],[0,\"\\n                                    \"],[10],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"await\",[[22,0,[\"fileVersions\"]]],null]],null,{\"statements\":[[0,\"                                    \"],[5,\"file-version\",[],[[\"@version\",\"@download\",\"@url\",\"@currentVersion\",\"@versionChange\"],[[22,1,[]],[27,\"action\",[[22,0,[]],[22,0,[\"download\"]]],null],[22,0,[\"model\",\"file\",\"links\",\"download\"]],[22,0,[\"mfrVersion\"]],[27,\"action\",[[22,0,[]],[22,0,[\"versionChange\"]]],null]]]],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-file/template.hbs" } });
});
define('analytics-page/osf-components/tests/guid-node/forks/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-node/forks/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-node/forks/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/guid-node/forks/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "8R67WJXY", "block": "{\"symbols\":[\"list\",\"fork\",\"modal\"],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"forks.page_title\"],[[\"nodeTitle\"],[[22,0,[\"model\",\"taskInstance\",\"value\",\"unsafeTitle\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"Forks\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n    \"],[5,\"bs-modal\",[],[[\"@open\",\"@onSubmit\",\"@onHide\"],[[22,0,[\"newModal\"]],[27,\"action\",[[22,0,[]],[22,0,[\"newFork\"]]],null],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"newModal\"]]],null],false],null]]],{\"statements\":[[0,\"\\n        \"],[6,[22,3,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[5,\"osf-button\",[[12,\"aria-label\",[27,\"t\",[\"general.close\"],null]]],[[\"@class\",\"@onClick\"],[\"close\",[27,\"action\",[[22,0,[]],[22,0,[\"closeNewModal\"]]],null]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"fa-icon\",[\"times\"],[[\"size\"],[\"sm\"]]],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"forks.create_fork_modal\"],null],false],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[6,[22,3,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[5,\"osf-button\",[],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"newModal\"]]],null],false],null]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[5,\"osf-button\",[],[[\"@onClick\",\"@type\"],[[27,\"action\",[[22,0,[]],[22,3,[\"submit\"]]],null],\"info\"]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"forks.fork\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[3]}],[0,\"\\n\"],[0,\"    \"],[5,\"delete-node-modal\",[],[[\"@delete\",\"@openModal\",\"@closeModal\",\"@nodeType\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null],[22,0,[\"deleteModal\"]],[27,\"action\",[[22,0,[]],[22,0,[\"closeDeleteModal\"]]],null],[22,0,[\"nodeType\"]]]]],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"page-header visible-xs \",[27,\"local-class\",[\"Forks__header\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"h2\"],[11,\"class\",\"text-300\"],[9],[1,[27,\"t\",[\"forks.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"m-md \",[27,\"local-class\",[\"Forks__nav\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"link-to\",[\"guid-node.analytics\",[22,0,[\"node\",\"id\"]]],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Project Forks - forks.back\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"            \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\" \"],[1,[27,\"t\",[\"forks.back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__nav__link\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[1,[27,\"t\",[\"forks.info\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__forks\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"paginated-list/has-many\",null,[[\"modelTaskInstance\",\"relationshipName\",\"bindReload\",\"query\",\"analyticsScope\"],[[22,0,[\"model\",\"taskInstance\"]],\"forks\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"reloadList\"]]],null]],null],[22,0,[\"forksQueryParams\"]],\"Project Forks\"]],{\"statements\":[[0,\"            \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n                \"],[5,\"node-card\",[],[[\"@node\",\"@delete\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[22,0,[\"openDeleteModal\"]],[22,2,[]]],null]]]],[0,\"\\n            \"]],\"parameters\":[2]}],[0,\"\\n\\n            \"],[6,[22,1,[\"empty\"]],[],[[],[]],{\"statements\":[[0,\"\\n                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__placeholder\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"forks.no_forks\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__new-fork\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"m-md\"],[9],[0,\"\\n\"],[0,\"            \"],[5,\"osf-button\",[],[[\"@type\",\"@disabled\",\"@onClick\"],[\"success\",[22,0,[\"loadingNew\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"newModal\"]]],null],true],null]]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[22,0,[\"loadingNew\"]]],null,{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.loading_new\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.new\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"]],\"parameters\":[]}],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-node/forks/template.hbs" } });
});
define('analytics-page/osf-components/tests/guid-node/registrations/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-node/registrations/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-node/registrations/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/guid-node/registrations/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "oFpIsvBv", "block": "{\"symbols\":[\"modal\",\"modal\",\"schema\",\"placeholder\",\"tab\",\"list\",\"draftRegistration\",\"nl\"],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"node.registrations.page_title\"],[[\"nodeTitle\"],[[22,0,[\"node\",\"unsafeTitle\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"RegistrationsContainer\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/registrations/styles\"]]]]]],[11,\"data-test-registrations-container\",\"\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-sm-8\"],[9],[0,\"\\n            \"],[5,\"bs-tab\",[],[[\"@activeId\",\"@onChange\"],[[22,0,[\"activeTab\"]],[27,\"action\",[[22,0,[]],[22,0,[\"changeTab\"]]],null]]],{\"statements\":[[0,\"\\n                \"],[6,[22,5,[\"pane\"]],[],[[\"@id\",\"@title\"],[\"registrations\",[27,\"t\",[\"node.registrations.registrations\"],null]]],{\"statements\":[[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"RegistrationsPane\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/registrations/styles\"]]]]]],[11,\"data-test-registrations-pane\",\"\"],[9],[0,\"\\n                        \"],[5,\"node-list\",[],[[\"@modelTaskInstance\",\"@relationshipName\",\"@showTags\",\"@analyticsScope\"],[[22,0,[\"model\",\"taskInstance\"]],\"registrations\",true,\"Project Registrations\"]],{\"statements\":[[0,\"\\n                            \"],[6,[22,8,[\"empty\"]],[],[[],[]],{\"statements\":[[0,\"\\n                                \"],[7,\"p\"],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"node.registrations.no_registrations\"],null],false],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[22,0,[\"node\",\"currentUserIsContributor\"]],[27,\"not\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null]],null]],null,{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"node.registrations.only_admins_can_initiate\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.start_new\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.learn_more\"],[[\"learnMoreLink\"],[\"http://help.osf.io/m/registrations/l/524205-register-your-project\"]]],false],[10],[0,\"\\n                            \"]],\"parameters\":[]}],[0,\"\\n                        \"]],\"parameters\":[8]}],[0,\"\\n                    \"],[10],[0,\"\\n                \"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null,{\"statements\":[[0,\"                    \"],[6,[22,5,[\"pane\"]],[],[[\"@id\",\"@title\"],[\"drafts\",[27,\"t\",[\"node.registrations.draft_registrations\"],null]]],{\"statements\":[[0,\"\\n                        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"RegistrationsPane\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-node/registrations/styles\"]]]]]],[11,\"data-test-draft-registrations-pane\",\"\"],[9],[0,\"\\n                            \"],[7,\"ul\"],[11,\"class\",\"list-group\"],[9],[0,\"\\n\"],[4,\"paginated-list/has-many\",null,[[\"modelTaskInstance\",\"relationshipName\",\"bindReload\",\"query\",\"analyticsScope\"],[[22,0,[\"model\",\"taskInstance\"]],\"draftRegistrations\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"reloadDrafts\"]]],null]],null],[22,0,[\"draftsQueryParams\"]],\"Project Draft Registrations\"]],{\"statements\":[[0,\"                                    \"],[6,[22,6,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n                                        \"],[5,\"draft-registration-card\",[],[[\"@draftRegistration\",\"@onDelete\"],[[22,7,[]],[27,\"action\",[[22,0,[]],[22,6,[\"doReload\"]],1],null]]]],[0,\"\\n                                    \"]],\"parameters\":[7]}],[0,\"\\n\\n                                    \"],[6,[22,6,[\"empty\"]],[],[[],[]],{\"statements\":[[0,\"\\n                                        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.no_drafts\"],null],false],[10],[0,\"\\n                                        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.start_new\"],null],false],[10],[0,\"\\n                                        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"node.registrations.learn_more\"],[[\"learnMoreLink\"],[\"http://help.osf.io/m/registrations/l/524205-register-your-project\"]]],false],[10],[0,\"\\n                                    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"]],\"parameters\":[5]}],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"node\",\"userHasAdminPermission\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"col-xs-3 col-sm-4\"],[9],[0,\"\\n                \"],[5,\"osf-button\",[[11,\"data-test-new-registration-button\",\"\"]],[[\"@type\",\"@onClick\"],[\"success\",[27,\"action\",[[22,0,[]],[22,0,[\"openNewModal\"]]],null]]],{\"statements\":[[0,\"\\n                    \"],[1,[27,\"t\",[\"node.registrations.new\"],null],false],[0,\"\\n                \"]],\"parameters\":[]}],[0,\"\\n                \"],[5,\"bs-modal\",[[11,\"data-test-new-registration-modal\",\"\"]],[[\"@size\",\"@open\",\"@onSubmit\",\"@onHidden\"],[\"lg\",[22,0,[\"newModalOpen\"]],[27,\"action\",[[22,0,[]],[22,0,[\"createDraft\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"closeNewModal\"]]],null]]],{\"statements\":[[0,\"\\n                    \"],[6,[22,2,[\"header\"]],[[11,\"data-test-new-registration-modal-header\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[7,\"h4\"],[11,\"class\",\"NewRegistrationModal__header\"],[9],[1,[27,\"t\",[\"node.registrations.new_registration_modal.title\"],null],false],[10],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                    \"],[6,[22,2,[\"body\"]],[[11,\"data-test-new-registration-modal-body\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[7,\"p\"],[11,\"class\",\"NewRegistrationModal__info\"],[9],[1,[27,\"t\",[\"node.registrations.new_registration_modal.info\"],null],false],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"NewRegistrationModal__schema-list\"],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"getRegistrationSchemas\",\"isRunning\"]]],null,{\"statements\":[[0,\"                                \"],[5,\"content-placeholders\",[],[[],[]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"component\",[[22,4,[\"list\"]]],[[\"items\"],[8]]],false],[0,\"\\n                                \"]],\"parameters\":[4]}],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[22,0,[\"schemas\"]]],null,{\"statements\":[[0,\"                                        \"],[7,\"li\"],[12,\"data-test-new-registration-modal-schema\",[22,3,[\"name\"]]],[9],[0,\"\\n                                            \"],[5,\"radio-button\",[],[[\"@value\",\"@groupValue\",\"@changed\"],[[22,3,[]],[22,0,[\"selectedSchema\"]],[27,\"action\",[[22,0,[]],[22,0,[\"schemaChanged\"]]],null]]],{\"statements\":[[0,\"\\n                                                \"],[7,\"div\"],[9],[0,\"\\n                                                    \"],[1,[22,3,[\"name\"]],false],[0,\"\\n                                                    \"],[7,\"span\"],[9],[0,\"\\n                                                        \"],[1,[27,\"fa-icon\",[\"info-circle\"],null],false],[0,\"\\n                                                        \"],[5,\"bs-tooltip\",[],[[],[]],{\"statements\":[[0,\"\\n                                                            \"],[1,[22,3,[\"schema\",\"description\"]],false],[0,\"\\n                                                        \"]],\"parameters\":[]}],[0,\"\\n                                                    \"],[10],[0,\"\\n                                                \"],[10],[0,\"\\n                                            \"]],\"parameters\":[]}],[0,\"\\n                                        \"],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                                \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[10],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                    \"],[6,[22,2,[\"footer\"]],[[11,\"data-test-new-registration-modal-footer\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[5,\"osf-button\",[[11,\"data-test-new-registration-modal-cancel-button\",\"\"]],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[22,2,[\"close\"]]],null]]],{\"statements\":[[0,\"\\n                            \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                        \"],[5,\"osf-button\",[[11,\"data-test-new-registration-modal-create-draft-button\",\"\"]],[[\"@onClick\",\"@type\"],[[27,\"action\",[[22,0,[]],[22,2,[\"submit\"]]],null],\"info\"]],{\"statements\":[[0,\"\\n                            \"],[1,[27,\"t\",[\"node.registrations.new_registration_modal.create\"],null],false],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                \"]],\"parameters\":[2]}],[0,\"\\n                \"],[5,\"bs-modal\",[[11,\"data-test-prereg-challenge-modal\",\"\"]],[[\"@size\",\"@open\",\"@onSubmit\",\"@onHidden\"],[\"lg\",[22,0,[\"preregModalOpen\"]],[27,\"action\",[[22,0,[]],[22,0,[\"createDraft\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"closePreregModal\"]]],null]]],{\"statements\":[[0,\"\\n                    \"],[6,[22,1,[\"header\"]],[[11,\"data-test-prereg-challenge-modal-header\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[7,\"h3\"],[11,\"class\",\"PreRegChallengeModal__title\"],[9],[1,[27,\"t\",[\"node.registrations.prereg_modal.title\"],null],false],[10],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                    \"],[6,[22,1,[\"body\"]],[[11,\"data-test-prereg-challenge-modal-body\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[7,\"h2\"],[11,\"class\",\"PreRegChallengeModal__notice\"],[9],[1,[27,\"t\",[\"node.registrations.prereg_modal.notice\"],null],false],[10],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"row m-t-xl\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"col-lg-10 col-lg-offset-1\"],[9],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"PreRegChallengeModal__eligibility\"],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"node.registrations.prereg_modal.eligibility\"],[[\"approvedJournalLink\"],[[22,0,[\"preregLinks\",\"approvedJournal\"]]]]],false],[0,\"\\n                                \"],[10],[0,\"\\n                                \"],[7,\"p\"],[11,\"class\",\"PreRegChallengeModal__info\"],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"node.registrations.prereg_modal.info\"],[[\"learnMoreLink\"],[[22,0,[\"preregLinks\",\"learnMore\"]]]]],false],[0,\"\\n                                \"],[10],[0,\"\\n                                \"],[7,\"ol\"],[11,\"class\",\"PreRegChallengeModal__list\"],[9],[0,\"\\n                                    \"],[1,[27,\"t\",[\"node.registrations.prereg_modal.list\"],[[\"eligibleJournalLink\",\"embargoedCountriesLink\",\"termsLink\"],[[22,0,[\"preregLinks\",\"eligibleJournal\"]],[22,0,[\"preregLinks\",\"embargoedCountries\"]],[22,0,[\"preregLinks\",\"terms\"]]]]],false],[0,\"\\n                                \"],[10],[0,\"\\n                                \"],[7,\"label\"],[11,\"data-test-prereg-challenge-modal-consent-checkbox\",\"\"],[11,\"class\",\"PreRegChallengeModal__consent\"],[9],[0,\"\\n                                    \"],[1,[27,\"input\",null,[[\"type\",\"change\"],[\"checkbox\",[27,\"action\",[[22,0,[]],[22,0,[\"togglePreregConsent\"]]],null]]]],false],[0,\"\\n                                    \"],[1,[27,\"t\",[\"node.registrations.prereg_modal.consent\"],null],false],[0,\"\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                    \"],[6,[22,1,[\"footer\"]],[[11,\"data-test-prereg-challenge-modal-footer\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                            \"],[7,\"div\"],[11,\"class\",\"col-lg-10 col-lg-offset-1\"],[9],[0,\"\\n                                \"],[5,\"osf-button\",[[11,\"data-test-prereg-challenge-modal-cancel-button\",\"\"]],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[22,1,[\"close\"]]],null]]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n                                \"]],\"parameters\":[]}],[0,\"\\n                                \"],[5,\"osf-button\",[[11,\"data-test-prereg-challenge-modal-continue-button\",\"\"]],[[\"@onClick\",\"@type\",\"@disabled\"],[[27,\"action\",[[22,0,[]],[22,1,[\"submit\"]]],null],\"info\",[27,\"not\",[[22,0,[\"preregConsented\"]]],null]]],{\"statements\":[[0,\"\\n                                    \"],[1,[27,\"t\",[\"node.registrations.prereg_modal.continue\"],null],false],[0,\"\\n                                \"]],\"parameters\":[]}],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                \"]],\"parameters\":[1]}],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"isComponentRootAdmin\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"node.registrations.register_entire_project\"],[[\"rootNodeTitle\"],[[22,0,[\"node\",\"root\",\"title\"]]]]],false],[0,\"\\n\"],[4,\"link-to\",[\"guid-node.registrations\",[22,0,[\"node\",\"root\",\"id\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"t\",[\"node.registrations.here\"],null],false]],\"parameters\":[]},null],[1,[27,\"t\",[\"general.period\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-node/registrations/template.hbs" } });
});
define("analytics-page/osf-components/tests/guid-node/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Jj9mfoph", "block": "{\"symbols\":[],\"statements\":[[4,\"unless\",[[22,0,[\"model\",\"taskInstance\",\"isRunning\"]]],null,{\"statements\":[[0,\"    \"],[5,\"node-navbar\",[],[[\"@node\"],[[22,0,[\"model\",\"taskInstance\",\"value\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[1,[21,\"outlet\"],false],[0,\"\\n\"],[5,\"join-osf-banner\",[],[[],[]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-node/template.hbs" } });
});
define("analytics-page/osf-components/tests/guid-preprint/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "BikVcSQf", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[1,[22,0,[\"model\",\"taskInstance\",\"value\",\"title\"]],false],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-preprint/template.hbs" } });
});
define('analytics-page/osf-components/tests/guid-registration/forks/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-registration/forks/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-registration/forks/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/guid-registration/forks/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "WUaeZctQ", "block": "{\"symbols\":[\"list\",\"fork\",\"modal\"],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"forks.page_title\"],[[\"nodeTitle\"],[[22,0,[\"model\",\"taskInstance\",\"value\",\"unsafeTitle\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"Forks\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n    \"],[5,\"bs-modal\",[],[[\"@open\",\"@onSubmit\",\"@onHide\"],[[22,0,[\"newModal\"]],[27,\"action\",[[22,0,[]],[22,0,[\"newFork\"]]],null],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"newModal\"]]],null],false],null]]],{\"statements\":[[0,\"\\n        \"],[6,[22,3,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[5,\"osf-button\",[[12,\"aria-label\",[27,\"t\",[\"general.close\"],null]]],[[\"@class\",\"@onClick\"],[\"close\",[27,\"action\",[[22,0,[]],[22,0,[\"closeNewModal\"]]],null]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"fa-icon\",[\"times\"],[[\"size\"],[\"sm\"]]],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"forks.create_fork_modal\"],null],false],[10],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[6,[22,3,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n            \"],[5,\"osf-button\",[],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"newModal\"]]],null],false],null]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n            \"],[5,\"osf-button\",[],[[\"@onClick\",\"@type\"],[[27,\"action\",[[22,0,[]],[22,3,[\"submit\"]]],null],\"info\"]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"forks.fork\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[3]}],[0,\"\\n\"],[0,\"    \"],[5,\"delete-node-modal\",[],[[\"@delete\",\"@openModal\",\"@closeModal\",\"@nodeType\"],[[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null],[22,0,[\"deleteModal\"]],[27,\"action\",[[22,0,[]],[22,0,[\"closeDeleteModal\"]]],null],[22,0,[\"nodeType\"]]]]],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"page-header visible-xs \",[27,\"local-class\",[\"Forks__header\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"h2\"],[11,\"class\",\"text-300\"],[9],[1,[27,\"t\",[\"forks.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"m-md \",[27,\"local-class\",[\"Forks__nav\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"link-to\",[\"guid-registration.analytics\",[22,0,[\"node\",\"id\"]]],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Registration Forks - forks.back\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"            \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\" \"],[1,[27,\"t\",[\"forks.back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__nav__link\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[1,[27,\"t\",[\"forks.info\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__forks\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"paginated-list/has-many\",null,[[\"modelTaskInstance\",\"relationshipName\",\"bindReload\",\"query\",\"analyticsScope\"],[[22,0,[\"model\",\"taskInstance\"]],\"forks\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"reloadList\"]]],null]],null],[22,0,[\"forksQueryParams\"]],\"Registration Forks\"]],{\"statements\":[[0,\"            \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n                \"],[5,\"node-card\",[],[[\"@node\",\"@delete\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[22,0,[\"openDeleteModal\"]],[22,2,[]]],null]]]],[0,\"\\n            \"]],\"parameters\":[2]}],[0,\"\\n\\n            \"],[6,[22,1,[\"empty\"]],[],[[],[]],{\"statements\":[[0,\"\\n                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__placeholder\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"forks.no_forks\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Forks__new-fork\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/forks/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"m-md\"],[9],[0,\"\\n\"],[0,\"            \"],[5,\"osf-button\",[],[[\"@type\",\"@disabled\",\"@onClick\"],[\"success\",[22,0,[\"loadingNew\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"newModal\"]]],null],true],null]]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[22,0,[\"loadingNew\"]]],null,{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.loading_new\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[1,[27,\"t\",[\"forks.new\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"]],\"parameters\":[]}],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-registration/forks/template.hbs" } });
});
define('analytics-page/osf-components/tests/guid-registration/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-registration/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-registration/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/guid-registration/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "GZv+99xx", "block": "{\"symbols\":[],\"statements\":[[4,\"unless\",[[22,0,[\"model\",\"taskInstance\",\"isRunning\"]]],null,{\"statements\":[[0,\"    \"],[5,\"node-navbar\",[],[[\"@node\"],[[22,0,[\"model\",\"taskInstance\",\"value\"]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Registrations__watermarked\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-registration/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container alert alert-info\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"registration.project_alert\"],[[\"projectId\"],[[22,0,[\"projectId\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-registration/template.hbs" } });
});
define("analytics-page/osf-components/tests/guid-user/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "aRG6YPi6", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[1,[22,0,[\"model\",\"taskInstance\",\"value\",\"fullName\"]],false],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-user/index/template.hbs" } });
});
define('analytics-page/osf-components/tests/guid-user/quickfiles/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('guid-user/quickfiles/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'guid-user/quickfiles/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/guid-user/quickfiles/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "ZjwkI/p8", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"quickfiles.title\"],[[\"user-name\"],[[22,0,[\"user\",\"fullName\"]]]]]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[5,\"quickfile-nav\",[],[[\"@user\",\"@onQuickfiles\"],[[22,0,[\"user\"]],true]]],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row container \",[27,\"local-class\",[\"Content\"],[[\"from\"],[\"analytics-page/osf-components/tests/guid-user/quickfiles/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"canEdit\"]]],null,{\"statements\":[[0,\"            \"],[7,\"h5\"],[9],[7,\"i\"],[9],[1,[27,\"t\",[\"quickfiles.description\"],null],false],[10],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"style\",\"height: 14px;\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[5,\"file-browser\",[],[[\"@user\",\"@items\",\"@filter\",\"@sort\",\"@canEdit\",\"@newProject\",\"@openFile\",\"@updateFilter\",\"@dropZoneId\",\"@deleteFiles\",\"@moveFile\",\"@renameFile\",\"@addFile\"],[[22,0,[\"user\"]],[22,0,[\"files\"]],[22,0,[\"filter\"]],[22,0,[\"sort\"]],[22,0,[\"canEdit\"]],[22,0,[\"newProject\"]],[27,\"action\",[[22,0,[]],[22,0,[\"openFile\"]]],null],[27,\"perform\",[[22,0,[\"updateFilter\"]]],null],\"quickfiles-dropzone\",[27,\"perform\",[[22,0,[\"deleteFiles\"]]],null],[27,\"perform\",[[22,0,[\"moveFile\"]]],null],[27,\"perform\",[[22,0,[\"renameFile\"]]],null],[27,\"perform\",[[22,0,[\"addFile\"]]],null]]]],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[5,\"feedback-button\",[],[[\"@text\",\"@pageName\"],[[27,\"t\",[\"quickfiles.feedback_dialog_text\"],null],[22,0,[\"pageName\"]]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-user/quickfiles/template.hbs" } });
});
define("analytics-page/osf-components/tests/guid-user/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "C8yAcMka", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/guid-user/template.hbs" } });
});
define('analytics-page/osf-components/tests/home/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('home/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'home/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/home/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "ZhUYuXIF", "block": "{\"symbols\":[\"featuresColumn\",\"i\",\"feature\",\"modal\"],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"home.title\"],null]],null],false],[0,\"\\n\"],[4,\"if\",[[22,0,[\"goodbye\"]]],null,{\"statements\":[[0,\"    \"],[5,\"bs-alert\",[[12,\"class\",[28,[[27,\"local-class\",[\"goodbye\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[11,\"data-test-goodbye-banner\",\"\"]],[[\"@type\",\"@classNames\",\"@onDismiss\"],[\"success\",\"text-center\",[27,\"action\",[[22,0,[]],\"click\",\"button\",\"Home - dismiss_alert\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"\\n        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"home.alert_logged_out\"],null],false],[10],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[5,\"bs-modal\",[],[[\"@open\",\"@backdrop\",\"@onHidden\"],[[22,0,[\"modalOpen\"]],true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"modalOpen\"]]],null],false],null]]],{\"statements\":[[0,\"\\n    \"],[6,[22,4,[\"header\"]],[],[[],[]],{\"statements\":[[0,\"\\n        \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"home.youtube_modal_title\"],null],false],[10],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n    \"],[6,[22,4,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n        \"],[5,\"ember-youtube\",[],[[\"@ytid\",\"@playerVars\"],[[22,0,[\"youtubeId\"]],[22,0,[\"playerVars\"]]]]],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[4]}],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"home-hero\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container text-center\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"network-bg\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n        \"],[7,\"h1\"],[12,\"class\",[28,[[27,\"local-class\",[\"hero-brand\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.brand\"],null],false],[10],[0,\"\\n        \"],[7,\"h3\"],[12,\"class\",[28,[[27,\"local-class\",[\"hero-tagline\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.tagline\"],null],false],[10],[0,\"\\n        \"],[5,\"osf-logo\",[],[[\"@animate\"],[true]]],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"signUp\"],[11,\"class\",\"anchor\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"hero-signup\"],[11,\"class\",\"container\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-sm-6 hidden-xs\"],[9],[0,\"\\n                    \"],[7,\"a\"],[11,\"class\",\"youtube\"],[12,\"href\",[28,[\"//www.youtube.com/watch?v=\",[22,0,[\"youtubeId\"]]]]],[12,\"aria-label\",[28,[[27,\"t\",[\"home.youtube_label\"],null]]]],[3,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"modalOpen\"]]],null],true]],[3,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - youtube_video\"],[[\"target\"],[[22,0,[\"analytics\"]]]]],[9],[0,\"\\n                        \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-play\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/screenshot-0b7d40737bea16f820ff2fe1f5c73fd6.png\"],[11,\"class\",\"img-responsive\"],[11,\"id\",\"screenshot\"],[12,\"alt\",[28,[[27,\"t\",[\"home.osf_screenshot_alt\"],null]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-6 \",[27,\"local-class\",[\"sign-up-div\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                    \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.signup_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"id\",\"signUpScope\"],[9],[0,\"\\n                        \"],[5,\"sign-up-form\",[[11,\"data-test-sign-up-form\",\"\"]],[[],[]]],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"grey-pullout space-top space-bottom\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"space-bottom\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12 text-center\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[0,\"\\n                \"],[7,\"strong\"],[9],[1,[27,\"t\",[\"home.collaboration\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.management\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"feature-1\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-1\"],[9],[0,\"\\n                    \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-cloud icon-feature\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-xs-offset-1\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.structured_projects_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.structured_projects_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[\"label label-primary \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.secure_cloud\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-1\"],[9],[0,\"\\n                    \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-group icon-feature\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-xs-offset-1\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.control_access_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.control_access_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[\"label label-primary \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.control_access_span\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-1\"],[9],[0,\"\\n                    \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-workflow icon-feature\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-9 col-xs-offset-1\"],[9],[0,\"\\n                    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.workflow_title\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.workflow_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[\"label label-primary \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.workflow_span\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-6\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"student-wrap\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"student-image\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"quote\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"main\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.student_main\"],null],false],[10],[0,\"\\n                        \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"attrib\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.student_attrib\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"feature-2 space-top space-bottom\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-12 text-center \",[27,\"local-class\",[\"headline\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.integrations_title\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"integrations\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/dropbox-e4e3059d89c393d22227a57283c88a7f.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_dropbox\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/github-1726b376138f10f88a356bf68c6bf5e6.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_github\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/amazon-4981231206692d93388986f82dfa6d91.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_amazon\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/box-982fd696b759cc755ed9772fd08273db.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_box\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row \",[27,\"local-class\",[\"integrations\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/google-e7a2b515fd37a51754a8c25387fff13b.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_google\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/figshare-14c9facb8b84bdfc0a0fefab05b9c11e.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_figshare\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/dataverse-82fcc61b4583b516290077ed599ecca1.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_dataverse\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-3 col-xs-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/mendeley-ae299e6acac6003cafe0a605cc89fb96.png\"],[11,\"class\",\"img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.integrations_alt_mendeley\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"feature-3\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row space-top\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-12 text-center space-bottom\"],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.features_title\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row space-bottom\"],[9],[0,\"\\n\"],[4,\"each\",[[22,0,[\"features\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-6 text-\",[27,\"if\",[[22,2,[]],\"left\",\"right\"],null]]]],[9],[0,\"\\n\"],[4,\"each\",[[22,1,[]]],null,{\"statements\":[[0,\"                        \"],[7,\"h3\"],[9],[1,[27,\"t\",[[27,\"concat\",[\"home.features_\",[22,3,[]],\"_title\"],null]],null],false],[10],[0,\"\\n                        \"],[7,\"p\"],[9],[1,[27,\"t\",[[27,\"concat\",[\"home.features_\",[22,3,[]],\"_paragraph\"],null]],null],false],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"feature-4\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"row text-center \",[27,\"local-class\",[\"space-top space-bottom\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-4 col-md-offset-1\"],[9],[0,\"\\n                \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-earth\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.global_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.global_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"a\"],[11,\"href\",\"/explore/activity/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - explore_activity\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.global_link\"],null],false],[10],[0,\"\\n                    \"],[7,\"span\"],[12,\"class\",[28,[\"label label-warning \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.global_label\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-4 col-md-offset-1\"],[9],[0,\"\\n                \"],[7,\"i\"],[12,\"class\",[28,[[27,\"local-class\",[\"icon icon-nonprofit\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[10],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.non_profit_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.non_profit_paragraph1\"],null],false],[0,\"\\n                    \"],[7,\"a\"],[11,\"href\",\"https://cos.io/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - cos_webpage\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"home.non_profit_link\"],null],false],[10],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.non_profit_paragraph2\"],null],false],[0,\"\\n                    \"],[7,\"span\"],[12,\"class\",[28,[\"label label-success \",[27,\"local-class\",[\"label-home\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[1,[27,\"t\",[\"home.non_profit_label\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"space-top space-bottom feature-5\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-12 text-center\"],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"home.users_title\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-xs-4 col-md-3\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/user2-1bf0ee128e31ea923498a2df846d297a.jpg\"],[11,\"class\",\"img-circle img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.users_1_alt\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-xs-8\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.users_1_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.users_1_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"br\"],[9],[10],[0,\"\\n                    \"],[7,\"small\"],[9],[0,\"\\n                        \"],[7,\"em\"],[9],[1,[27,\"t\",[\"home.users_1_small\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row hidden-xs hidden-sm\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-7 col-md-offset-2\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.users_2_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.users_2_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"br\"],[9],[10],[0,\"\\n                    \"],[7,\"small\"],[9],[0,\"\\n                        \"],[7,\"em\"],[9],[1,[27,\"t\",[\"home.users_2_small\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/user3-b1fa97c51de86215545366b643e95639.jpg\"],[11,\"class\",\"img-circle img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.users_2_alt\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row hidden-xs hidden-sm\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/ember-osf-web/assets/images/home/user4-267acdfd6b79295d429909a464e6dbd9.jpg\"],[11,\"class\",\"img-circle img-responsive\"],[12,\"alt\",[28,[[27,\"t\",[\"home.users_3_alt\"],null]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-7\"],[9],[0,\"\\n                \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"home.users_3_title\"],null],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.users_3_paragraph\"],null],false],[0,\"\\n                    \"],[7,\"br\"],[9],[10],[0,\"\\n                    \"],[7,\"small\"],[9],[0,\"\\n                        \"],[7,\"em\"],[9],[1,[27,\"t\",[\"home.users_3_small\"],null],false],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"space-top space-bottom feature-6\"],[[\"from\"],[\"analytics-page/osf-components/tests/home/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-8\"],[9],[0,\"\\n                \"],[7,\"h2\"],[9],[0,\"\\n                    \"],[7,\"strong\"],[9],[1,[27,\"t\",[\"home.free_title1\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"home.free_title2\"],null],false],[10],[0,\"\\n                \"],[7,\"a\"],[11,\"href\",\"#signUp\"],[11,\"class\",\"btn btn-info btn-lg\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Home - goto_signup\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"home.free_link\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-4 hidden-xs hidden-sm\"],[9],[0,\"\\n                \"],[5,\"osf-logo\",[],[[\"@double\"],[true]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/home/template.hbs" } });
});
define('analytics-page/osf-components/tests/institutions/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('institutions/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'institutions/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/institutions/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "xp0KG+v0", "block": "{\"symbols\":[\"institution\"],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"institutions.title\"],null]],null],false],[0,\"\\n\"],[5,\"scheduled-banner\",[],[[],[]]],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__page\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__block Institutions__header\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"text-center m-t-lg col-xs-12\"],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__header-logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[10],[0,\"\\n                    \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"institutions.description\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__block__link\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[11,\"href\",\"https://cos.io/our-products/osf-institutions/\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Institutions - Header - Read more\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"institutions.read_more\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__browser\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"container p-t-lg\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row m-t-lg\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n                            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__table\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n                                \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                                    \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-3 \",[27,\"local-class\",[\"Institutions__sorting\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n                                        \"],[1,[27,\"t\",[\"institutions.title\"],null],false],[0,\"\\n                                        \"],[5,\"sort-button\",[],[[\"@sortAction\",\"@sort\",\"@sortBy\"],[[27,\"action\",[[22,0,[]],[22,0,[\"sort\"]]],null],[22,0,[\"sortOrder\"]],\"title\"]]],[0,\"\\n                                    \"],[10],[0,\"\\n                                    \"],[7,\"div\"],[11,\"class\",\"col-xs-9 filter-input\"],[9],[0,\"\\n                                        \"],[1,[27,\"input\",null,[[\"value\",\"type\",\"class\",\"placeholder\",\"keyPress\",\"__HTML_ATTRIBUTES__\"],[[22,0,[\"textValue\"]],\"text\",\"form-control\",[27,\"t\",[\"institutions.search_placeholder\"],null],[27,\"perform\",[[22,0,[\"trackFilter\"]]],null],[27,\"hash\",null,[[\"aria-label\"],[[27,\"t\",[\"institutions.search_placeholder\"],null]]]]]]],false],[0,\"\\n                                    \"],[10],[0,\"\\n                                \"],[10],[0,\"\\n\"],[4,\"each\",[[22,0,[\"institutions\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"a\"],[12,\"class\",[28,[\"m-v-sm row \",[27,\"local-class\",[\"Institutions__table__item\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[12,\"href\",[28,[[22,1,[\"links\",\"html\"]]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Institutions - Visit institution\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                                        \"],[7,\"div\"],[11,\"class\",\"col-xs-3\"],[9],[0,\"\\n                                            \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[12,\"alt\",[28,[[22,1,[\"name\"]]]]],[12,\"src\",[28,[[22,1,[\"logoUrl\"]]]]],[9],[10],[0,\"\\n                                        \"],[10],[0,\"\\n                                        \"],[7,\"div\"],[12,\"class\",[28,[\"col-xs-9 \",[27,\"local-class\",[\"Institutions__table__title\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[7,\"span\"],[9],[1,[22,1,[\"name\"]],false],[10],[10],[0,\"\\n                                    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[22,0,[\"hasMore\"]]],null,{\"statements\":[[0,\"                                    \"],[5,\"osf-button\",[[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__more\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]]],[[\"@type\",\"@onClick\"],[\"link\",[27,\"action\",[[22,0,[]],\"next\"],null]]],{\"statements\":[[0,\"\\n                                        \"],[1,[27,\"fa-icon\",[\"chevron-down\"],[[\"class\"],[\"Institutions__pagination\"]]],false],[0,\"\\n                                    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Institutions__block Institutions__footer\"],[[\"from\"],[\"analytics-page/osf-components/tests/institutions/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"text-center col-xs-12\"],[9],[0,\"\\n                    \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"institutions.footer\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[11,\"href\",\"https://cos.io/contact\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Institutions - Footer - Contact us\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                            \"],[1,[27,\"t\",[\"institutions.contact_us\"],null],false],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/institutions/template.hbs" } });
});
define("analytics-page/osf-components/tests/not-found/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "FwYDL/Yt", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[1,[27,\"t\",[\"not_found.title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"not_found.body\"],[[\"supportEmail\"],[[22,0,[\"supportEmail\"]]]]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/not-found/template.hbs" } });
});
define("analytics-page/osf-components/tests/quickfiles/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "2F+MoQLU", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[9],[1,[27,\"t\",[\"quickfiles.transition_auth\"],null],false],[10]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/quickfiles/template.hbs" } });
});
define('analytics-page/osf-components/tests/register/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('register/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'register/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/register/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "3dsdSHq1", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"routes.register.sign_up\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-t-xl m-b-xl\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"p-md bg-color-light \",[27,\"local-class\",[\"sign-up-container\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"hasProvider\"]]],null,{\"statements\":[[0,\"                \"],[7,\"h2\"],[12,\"class\",[28,[[27,\"local-class\",[\"provider\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"provider-logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"provider\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"provider-logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[12,\"data-test-register-provider-logo\",[22,0,[\"provider\",\"id\"]]],[12,\"src\",[22,0,[\"provider\",\"assets\",\"square_color_no_transparent\"]]],[12,\"alt\",[22,0,[\"headerText\"]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[22,0,[\"provider\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"span\"],[11,\"data-test-register-provider-name\",\"\"],[9],[0,\"\\n                                \"],[1,[22,0,[\"headerText\"]],false],[0,\"\\n                            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,0,[\"isOsfPreprints\"]]],null,{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"osf-service-logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[11,\"data-test-register-osf-preprints-logo\",\"\"],[11,\"src\",\"/ember-osf-web/assets/images/register/osf-preprints-login-6783a5a9c5e0a3b261327419779caa66.png\"],[12,\"alt\",[28,[[27,\"t\",[\"general.OSF\"],null],\" \",[27,\"t\",[\"documentType.preprint.pluralCapitalized\"],null]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,0,[\"isOsfRegistries\"]]],null,{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"osf-service-logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[11,\"data-test-register-osf-registries-logo\",\"\"],[11,\"src\",\"/ember-osf-web/assets/images/register/osf-registries-black-5cdcef90ae459f4b47ecdecee183580f.png\"],[12,\"alt\",[28,[[27,\"t\",[\"general.OSF\"],null],\" \",[27,\"t\",[\"general.services.registries\"],null]]]],[9],[10],[0,\"\\n            \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"            \"],[7,\"h3\"],[11,\"class\",\"m-sm\"],[9],[1,[27,\"t\",[\"routes.register.create_a_free_account\"],null],false],[10],[0,\"\\n            \"],[7,\"h4\"],[11,\"class\",\"m-md\"],[9],[1,[27,\"t\",[\"routes.register.sign_up_using\"],null],false],[10],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"m-md \",[27,\"local-class\",[\"sign-up-buttons\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[11,\"data-test-orcid-button\",\"\"],[12,\"href\",[28,[[22,0,[\"orcidUrl\"]],\"#show_login\"]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"button\",\"Sign up - ORCID\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                    \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[11,\"src\",\"/ember-osf-web/assets/images/register/orcid-logo-1a839a5c3c91523236e4ab4e97f29da1.png\"],[12,\"alt\",[27,\"t\",[\"routes.register.orcid\"],null]],[9],[10],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__label\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[9],[1,[27,\"t\",[\"routes.register.orcid\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"a\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[11,\"data-test-institution-button\",\"\"],[12,\"href\",[22,0,[\"institutionUrl\"]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"button\",\"Sign up - Institution\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                    \"],[7,\"img\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__logo\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[11,\"src\",\"/ember-osf-web/assets/images/register/institution-logo-a7f3300c65845fec6021186ccc48504d.png\"],[12,\"alt\",[27,\"t\",[\"routes.register.institution\"],null]],[9],[10],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"sign-up-button__label\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[9],[1,[27,\"t\",[\"routes.register.institution\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n            \"],[7,\"hr\"],[12,\"class\",[28,[[27,\"local-class\",[\"hr-text\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[11,\"data-content\",\"OR\"],[9],[10],[0,\"\\n\\n            \"],[7,\"div\"],[12,\"class\",[28,[\"m-sm \",[27,\"local-class\",[\"sign-up-form\"],[[\"from\"],[\"analytics-page/osf-components/tests/register/styles\"]]]]]],[9],[0,\"\\n                \"],[5,\"sign-up-form\",[],[[\"@campaign\"],[[22,0,[\"signUpCampaign\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/register/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/account/-components/security/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/account/-components/security/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/account/-components/security/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/account/-components/security/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "q3emGs6V", "block": "{\"symbols\":[\"modal\",\"modal\",\"panel\",\"form\"],\"statements\":[[5,\"panel\",[[12,\"class\",[28,[[27,\"local-class\",[\"SecurityPanel\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/account/-components/security/styles\"]]]]]],[11,\"data-test-security-panel\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n    \"],[6,[22,3,[\"heading\"]],[],[[\"@title\"],[[27,\"t\",[\"settings.account.security.title\"],null]]]],[0,\"\\n    \"],[6,[22,3,[\"body\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[22,0,[\"loadSettings\",\"isRunning\"]],[22,0,[\"saveSettings\",\"isRunning\"]]],null]],null,{\"statements\":[[0,\"            \"],[5,\"loading-indicator\",[],[[\"@dark\"],[true]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"h4\"],[9],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"HeadingText\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/account/-components/security/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.account.security.twoFactorAuth\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"settings\",\"twoFactorEnabled\"]]],null,{\"statements\":[[0,\"                    \"],[5,\"bs-button\",[[11,\"data-test-two-factor-disable-button\",\"\"]],[[\"@type\",\"@size\",\"@onClick\"],[\"danger\",\"xs\",[27,\"action\",[[22,0,[]],[22,0,[\"disableTwoFactor\"]]],null]]],{\"statements\":[[0,\"\\n                        \"],[1,[27,\"t\",[\"settings.account.security.disableTwoFactor\"],null],false],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[5,\"bs-button\",[[12,\"class\",[28,[[27,\"local-class\",[\"EnableButton\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/account/-components/security/styles\"]]]]]],[11,\"data-test-two-factor-enable-button\",\"\"]],[[\"@onClick\",\"@size\"],[[27,\"action\",[[22,0,[]],[22,0,[\"enableTwoFactor\"]]],null],\"xs\"]],{\"statements\":[[0,\"\\n                        \"],[1,[27,\"t\",[\"settings.account.security.enableTwoFactor\"],null],false],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"data-test-why-two-factor\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"settings.account.security.why\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[22,0,[\"settings\",\"twoFactorEnabled\"]],[27,\"not\",[[22,0,[\"settings\",\"twoFactorConfirmed\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[7,\"p\"],[11,\"data-test-2f-important-warning\",\"\"],[11,\"class\",\"bg-danger\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.account.security.importantWarning\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"data-test-2f-how-to\",\"\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.account.security.howTo\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"data-test-2f-once-verified\",\"\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.account.security.onceVerified\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"data-test-2f-scan-image\",\"\"],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.account.security.scanImage\"],[[\"secretKey\"],[[22,0,[\"settings\",\"secret\"]]]]],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[5,\"qr-code\",[[11,\"data-test-2f-qr-code\",\"\"]],[[\"@text\",\"@width\",\"@height\",\"@correctLevel\"],[[22,0,[\"settings\",\"secret\"]],260,260,\"L\"]]],[0,\"\\n                \"],[5,\"validated-model-form\",[],[[\"@model\",\"@onSave\",\"@onError\",\"@analyticsScope\",\"@onWillDestroy\"],[[22,0,[\"settings\"]],[27,\"action\",[[22,0,[]],[22,0,[\"verifySecret\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"verificationError\"]]],null],[22,0,[\"analyticsScope\"]],[27,\"action\",[[22,0,[]],[22,0,[\"destroyForm\"]]],null]]],{\"statements\":[[0,\"\\n                    \"],[7,\"div\"],[9],[0,\"\\n                        \"],[6,[22,4,[\"text\"]],[[11,\"data-test-verification-code-field\",\"\"]],[[\"@valuePath\",\"@label\"],[\"verification\",[27,\"t\",[\"settings.account.security.enterVerification\"],null]]]],[0,\"\\n\"],[4,\"if\",[[22,0,[\"showError\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"VerificationError\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/account/-components/security/styles\"]]]]]],[11,\"data-test-verification-error\",\"\"],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"settings.account.security.verificationFailed\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[5,\"bs-button\",[[11,\"data-test-verify-button\",\"\"]],[[\"@type\",\"@buttonType\",\"@disabled\"],[\"primary\",\"submit\",[22,4,[\"submitting\"]]]],{\"statements\":[[0,\"\\n                            \"],[1,[27,\"t\",[\"settings.account.security.submitVerification\"],null],false],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                    \"],[10],[0,\"\\n                \"]],\"parameters\":[4]}],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[3]}],[0,\"\\n\\n\"],[5,\"bs-modal\",[[11,\"data-test-confirm-enable-modal\",\"\"]],[[\"@open\"],[[22,0,[\"showEnableWarning\"]]]],{\"statements\":[[0,\"\\n    \"],[6,[22,2,[\"header\"]],[],[[],[]],{\"statements\":[[0,\"\\n        \"],[7,\"h4\"],[11,\"data-test-confirm-enable-heading\",\"\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"settings.account.security.enableTwoFactor\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n    \"],[6,[22,2,[\"body\"]],[[11,\"data-test-confirm-enable-warning\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n        \"],[1,[27,\"t\",[\"settings.account.security.enableWarning\"],null],false],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n    \"],[6,[22,2,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n        \"],[5,\"bs-button\",[[11,\"data-test-enable-warning-cancel\",\"\"]],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[22,0,[\"hideDialogs\"]]],null]]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[5,\"bs-button\",[[11,\"data-test-enable-warning-confirm\",\"\"]],[[\"@onClick\",\"@type\"],[[27,\"action\",[[22,0,[]],[22,0,[\"confirmEnableTwoFactor\"]]],null],\"danger\"]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"t\",[\"settings.account.security.enableButton\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[2]}],[0,\"\\n\\n\"],[5,\"bs-modal\",[[11,\"data-test-confirm-disable-modal\",\"\"]],[[\"@open\"],[[22,0,[\"showDisableWarning\"]]]],{\"statements\":[[0,\"\\n    \"],[6,[22,1,[\"header\"]],[],[[],[]],{\"statements\":[[0,\"\\n        \"],[7,\"h4\"],[11,\"data-test-confirm-disable-heading\",\"\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"settings.account.security.disableTwoFactor\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n    \"],[6,[22,1,[\"body\"]],[[11,\"data-test-confirm-disable-warning\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n        \"],[1,[27,\"t\",[\"settings.account.security.disableWarning\"],null],false],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n    \"],[6,[22,1,[\"footer\"]],[],[[],[]],{\"statements\":[[0,\"\\n        \"],[5,\"bs-button\",[[11,\"data-test-disable-warning-cancel\",\"\"]],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[22,0,[\"hideDialogs\"]]],null]]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"t\",[\"general.cancel\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[5,\"bs-button\",[[11,\"data-test-disable-warning-confirm\",\"\"]],[[\"@onClick\",\"@type\"],[[27,\"action\",[[22,0,[]],[22,0,[\"confirmDisableTwoFactor\"]]],null],\"danger\"]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"t\",[\"settings.account.security.disableButton\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]}],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/account/-components/security/template.hbs" } });
});
define("analytics-page/osf-components/tests/settings/account/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "JC+B96Yq", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"settings.account.title\"],null]],null],false],[0,\"\\n\\n\"],[1,[21,\"settings/account/-components/security\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/account/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/developer-apps/-components/app-card/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/developer-apps/-components/app-card/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/developer-apps/-components/app-card/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/developer-apps/-components/app-card/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "1zdKNsZq", "block": "{\"symbols\":[\"placeholder\",\"@developerApp\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"DeveloperAppCard\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/developer-apps/-components/app-card/styles\"]]]]]],[12,\"data-test-developer-app-card\",[22,2,[\"id\"]]],[9],[0,\"\\n\"],[4,\"if\",[[22,2,[]]],null,{\"statements\":[[4,\"link-to\",[\"settings.developer-apps.edit\",[22,2,[\"id\"]]],[[\"data-test-developer-app-link\"],[[22,2,[\"id\"]]]],{\"statements\":[[0,\"            \"],[1,[22,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[5,\"content-placeholders\",[[12,\"class\",[28,[[27,\"local-class\",[\"DeveloperAppCard__placeholder\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/developer-apps/-components/app-card/styles\"]]]]]]],[[],[]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"component\",[[22,1,[\"heading\"]]],[[\"subtitle\"],[false]]],false],[0,\"\\n        \"]],\"parameters\":[1]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[5,\"delete-button\",[],[[\"@small\",\"@delete\",\"@disabled\",\"@analyticsScope\",\"@modalTitle\",\"@modalBody\"],[true,[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null],[27,\"not\",[[22,2,[]]],null],\"Settings - Developer apps\",[27,\"t\",[\"settings.developer-apps.confirmDelete.title\"],[[\"appName\"],[[22,2,[\"name\"]]]]],[27,\"t\",[\"settings.developer-apps.confirmDelete.body\"],null]]]],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/developer-apps/-components/app-card/template.hbs" } });
});
define("analytics-page/osf-components/tests/settings/developer-apps/-components/client-secret/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "hcPjq1U8", "block": "{\"symbols\":[],\"statements\":[[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientSecretDescription\"],null],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"\\n    \"],[5,\"copyable-text\",[[11,\"data-test-client-secret\",\"\"]],[[\"@text\",\"@disabled\",\"@analyticsLabel\"],[[27,\"if\",[[22,0,[\"shouldShowSecret\"]],[22,0,[\"developerApp\",\"clientSecret\"]],\"*********************\"],null],[27,\"not\",[[22,0,[\"shouldShowSecret\"]]],null],\"Settings - Developer apps - Copy client secret\"]]],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[5,\"osf-button\",[[11,\"data-test-toggle-client-secret\",\"\"]],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[22,0,[\"toggleShowSecret\"]]],null]]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[22,0,[\"shouldShowSecret\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"eye-slash\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.hideSecret\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"eye\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.showSecret\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\\n\"],[5,\"delete-button\",[[11,\"data-test-reset-client-secret\",\"\"]],[[\"@delete\",\"@analyticsScope\",\"@buttonLabel\",\"@confirmButtonText\",\"@modalTitle\",\"@errorMessage\"],[[27,\"action\",[[22,0,[]],[22,0,[\"resetSecret\"]]],null],\"Settings - Developer apps - Reset client secret\",[27,\"t\",[\"settings.developer-apps.resetSecret.label\"],null],[27,\"t\",[\"settings.developer-apps.resetSecret.label\"],null],[27,\"t\",[\"settings.developer-apps.resetSecret.modalTitle\"],null],[27,\"t\",[\"settings.developer-apps.resetSecret.error\"],null]]],{\"statements\":[[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.resetSecret.description\"],null],false],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.resetSecret.confirm\"],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/developer-apps/-components/client-secret/template.hbs" } });
});
define("analytics-page/osf-components/tests/settings/developer-apps/create/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "u2RVY4PI", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-developer-apps\"]],\"settings.developer-apps\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Developer apps - Create - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.developer-apps.createApp\"],null],false],[10],[0,\"\\n\\n\"],[5,\"validated-model-form\",[],[[\"@modelName\",\"@onSave\",\"@analyticsScope\"],[\"developer-app\",[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],\"Settings - Developer apps - Create\"]],{\"statements\":[[0,\"\\n    \"],[6,[22,1,[\"text\"]],[[11,\"data-test-developer-app-name\",\"\"]],[[\"@valuePath\",\"@label\"],[\"name\",[27,\"t\",[\"settings.developer-apps.appName\"],null]]]],[0,\"\\n    \"],[6,[22,1,[\"text\"]],[[11,\"data-test-developer-app-homepage\",\"\"]],[[\"@valuePath\",\"@label\"],[\"homeUrl\",[27,\"t\",[\"settings.developer-apps.appHomepage\"],null]]]],[0,\"\\n    \"],[6,[22,1,[\"textarea\"]],[[11,\"data-test-developer-app-description\",\"\"]],[[\"@valuePath\",\"@label\"],[\"description\",[27,\"t\",[\"settings.developer-apps.appDescription\"],null]]]],[0,\"\\n    \"],[6,[22,1,[\"text\"]],[[11,\"data-test-developer-app-callback-url\",\"\"]],[[\"@valuePath\",\"@label\"],[\"callbackUrl\",[27,\"t\",[\"settings.developer-apps.appCallbackUrl\"],null]]]],[0,\"\\n\\n    \"],[7,\"div\"],[9],[0,\"\\n        \"],[5,\"osf-button\",[[11,\"data-test-create-developer-app-button\",\"\"]],[[\"@type\",\"@buttonType\",\"@disabled\"],[\"primary\",\"submit\",[22,1,[\"submitting\"]]]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"t\",[\"settings.developer-apps.createApp\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]}]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/developer-apps/create/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/developer-apps/edit/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/developer-apps/edit/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/developer-apps/edit/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/developer-apps/edit/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "nCA+OSIV", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-developer-apps\"]],\"settings.developer-apps\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Developer apps - Edit - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.developer-apps.appDetail\"],[[\"appName\"],[[22,0,[\"developerApp\",\"name\"]]]]],false],[10],[0,\"\\n\\n\"],[4,\"if\",[[22,0,[\"model\",\"taskInstance\",\"isError\"]]],null,{\"statements\":[[0,\"    \"],[1,[22,0,[\"model\",\"taskInstance\",\"error\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"dl\"],[12,\"class\",[28,[[27,\"local-class\",[\"DeveloperApp__client\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/developer-apps/edit/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"dt\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientID\"],null],false],[10],[0,\"\\n        \"],[7,\"dd\"],[9],[0,\"\\n            \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientIDDescription\"],null],false],[10],[0,\"\\n            \"],[5,\"copyable-text\",[[11,\"data-test-client-id\",\"\"]],[[\"@text\",\"@analyticsLabel\"],[[22,0,[\"developerApp\",\"clientId\"]],\"Settings - Developer apps - Copy client ID\"]]],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"dt\"],[9],[1,[27,\"t\",[\"settings.developer-apps.clientSecret\"],null],false],[10],[0,\"\\n        \"],[7,\"dd\"],[9],[0,\"\\n            \"],[1,[27,\"settings/developer-apps/-components/client-secret\",null,[[\"developerApp\"],[[22,0,[\"developerApp\"]]]]],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.developer-apps.editApp\"],null],false],[10],[0,\"\\n    \"],[5,\"validated-model-form\",[],[[\"@model\",\"@disabled\",\"@onSave\",\"@analyticsScope\"],[[22,0,[\"developerApp\"]],[22,0,[\"model\",\"taskInstance\",\"isRunning\"]],[27,\"action\",[[22,0,[]],[22,0,[\"appSaved\"]]],null],\"Settings - Developer apps - Create\"]],{\"statements\":[[0,\"\\n        \"],[6,[22,1,[\"text\"]],[[11,\"data-test-developer-app-name\",\"\"]],[[\"@valuePath\",\"@label\"],[\"name\",[27,\"t\",[\"settings.developer-apps.appName\"],null]]]],[0,\"\\n        \"],[6,[22,1,[\"text\"]],[[11,\"data-test-developer-app-homepage\",\"\"]],[[\"@valuePath\",\"@label\"],[\"homeUrl\",[27,\"t\",[\"settings.developer-apps.appHomepage\"],null]]]],[0,\"\\n        \"],[6,[22,1,[\"textarea\"]],[[11,\"data-test-developer-app-description\",\"\"]],[[\"@valuePath\",\"@label\"],[\"description\",[27,\"t\",[\"settings.developer-apps.appDescription\"],null]]]],[0,\"\\n        \"],[6,[22,1,[\"text\"]],[[11,\"data-test-developer-app-callback-url\",\"\"]],[[\"@valuePath\",\"@label\"],[\"callbackUrl\",[27,\"t\",[\"settings.developer-apps.appCallbackUrl\"],null]]]],[0,\"\\n\\n        \"],[7,\"div\"],[9],[0,\"\\n            \"],[5,\"delete-button\",[],[[\"@delete\",\"@disabled\",\"@analyticsScope\",\"@modalTitle\",\"@modalBody\"],[[27,\"action\",[[22,0,[]],[22,0,[\"deleteApp\"]]],null],[22,1,[\"disabled\"]],\"Settings - Developer apps - Edit\",[27,\"t\",[\"settings.developer-apps.confirmDelete.title\"],[[\"appName\"],[[22,0,[\"developerApp\",\"name\"]]]]],[27,\"t\",[\"settings.developer-apps.confirmDelete.body\"],null]]]],[0,\"\\n\\n            \"],[5,\"osf-button\",[[11,\"data-test-save-developer-app-button\",\"\"]],[[\"@type\",\"@buttonType\",\"@disabled\"],[\"primary\",\"submit\",[22,1,[\"disabled\"]]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"general.save\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"],[10],[0,\"\\n    \"]],\"parameters\":[1]}],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/developer-apps/edit/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/developer-apps/index/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/developer-apps/index/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/developer-apps/index/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/developer-apps/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "s/JOvCn8", "block": "{\"symbols\":[\"list\",\"developerApp\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/developer-apps/index/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top__explanation\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/developer-apps/index/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.developer-apps.explanation\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-create-app-link\"]],\"settings.developer-apps.create\"],[[\"class\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"settings.developer-apps.createApp\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"paginated-list/all\",null,[[\"modelName\",\"analyticsScope\"],[\"developer-app\",\"Settings - Developer apps\"]],{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"settings/developer-apps/-components/app-card\",null,[[\"developerApp\",\"onDelete\"],[[22,2,[]],[27,\"action\",[[22,0,[]],[22,1,[\"doReload\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/developer-apps/index/template.hbs" } });
});
define("analytics-page/osf-components/tests/settings/developer-apps/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "QCykLPzd", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"settings.developer-apps.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-heading clearfix\"],[9],[0,\"\\n        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"settings.developer-apps.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/developer-apps/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/profile/name/-components/citation-preview/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/profile/name/-components/citation-preview/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "qWo2rPAy", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,0,[\"shouldCite\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"CitationContainer\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[11,\"data-test-citation-container\",\"\"],[9],[0,\"\\n        \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"settings.profile.name.citationPreview\"],null],false],[10],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"CitationPreview\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"span\"],[9],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"SmallBlock\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.profile.name.apa\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"LargeBlock\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[11,\"data-test-apa-citation\",\"\"],[9],[0,\"\\n                    \"],[1,[22,0,[\"citeApa\"]],false],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"span\"],[9],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"SmallBlock\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[9],[0,\"\\n                    \"],[1,[27,\"t\",[\"settings.profile.name.mla\"],null],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"LargeBlock\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/styles\"]]]]]],[11,\"data-test-mla-citation\",\"\"],[9],[0,\"\\n                    \"],[1,[22,0,[\"citeMla\"]],false],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/profile/name/-components/citation-preview/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/profile/name/-components/name/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/profile/name/-components/name/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/profile/name/-components/name/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/profile/name/-components/name/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "TdHifZ8o", "block": "{\"symbols\":[\"form\"],\"statements\":[[5,\"validated-model-form\",[],[[\"@onSave\",\"@onWillDestroy\",\"@model\"],[[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]]],null],[22,0,[\"user\"]]]],{\"statements\":[[0,\"\\n    \"],[6,[22,1,[\"text\"]],[[11,\"data-test-full-name-field\",\"\"]],[[\"@valuePath\",\"@label\"],[\"fullName\",[27,\"t\",[\"settings.profile.name.fullName\"],null]]]],[0,\"\\n    \"],[1,[27,\"t\",[\"settings.profile.name.instructions\"],null],false],[0,\"\\n    \\n    \"],[7,\"h3\"],[9],[1,[27,\"t\",[\"settings.profile.name.citationName\"],null],false],[10],[0,\"\\n    \"],[7,\"span\"],[12,\"class\",[28,[[27,\"local-class\",[\"NameParts\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[9],[0,\"\\n        \"],[6,[22,1,[\"text\"]],[[12,\"class\",[28,[[27,\"local-class\",[\"LargeField\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[11,\"data-test-given-name-field\",\"\"]],[[\"@valuePath\",\"@label\"],[\"givenName\",[27,\"t\",[\"settings.profile.name.givenName\"],null]]]],[0,\"\\n        \"],[6,[22,1,[\"text\"]],[[12,\"class\",[28,[[27,\"local-class\",[\"LargeField\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[11,\"data-test-middle-names-field\",\"\"]],[[\"@valuePath\",\"@label\"],[\"middleNames\",[27,\"t\",[\"settings.profile.name.middleNames\"],null]]]],[0,\"\\n        \"],[6,[22,1,[\"text\"]],[[12,\"class\",[28,[[27,\"local-class\",[\"LargeField\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[11,\"data-test-family-name-field\",\"\"]],[[\"@valuePath\",\"@label\"],[\"familyName\",[27,\"t\",[\"settings.profile.name.familyName\"],null]]]],[0,\"\\n        \"],[6,[22,1,[\"text\"]],[[12,\"class\",[28,[[27,\"local-class\",[\"SmallField\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[11,\"data-test-suffix-field\",\"\"]],[[\"@valuePath\",\"@label\"],[\"suffix\",[27,\"t\",[\"settings.profile.name.suffix\"],null]]]],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"settings/profile/name/-components/citation-preview\",null,[[\"user\"],[[22,0,[\"user\"]]]]],false],[0,\"\\n    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"FormButtons\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/profile/name/-components/name/styles\"]]]]]],[9],[0,\"\\n        \"],[5,\"osf-button\",[[11,\"data-test-discard-changes\",\"\"]],[[\"@buttonType\",\"@disabled\",\"@onClick\"],[\"button\",[27,\"not\",[[22,0,[\"isPageDirty\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]],[22,0,[\"user\"]]],null]]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"t\",[\"validated_input_form.discard_changes\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[5,\"osf-button\",[[11,\"data-test-save\",\"\"]],[[\"@buttonType\",\"@disabled\",\"@type\"],[\"submit\",[27,\"and\",[[27,\"not\",[[22,0,[\"isPageDirty\"]]],null],[22,1,[\"disabled\"]]],null],\"primary\"]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"t\",[\"general.save\"],null],false],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]}],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/profile/name/-components/name/template.hbs" } });
});
define("analytics-page/osf-components/tests/settings/profile/name/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "DC7LDW5F", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"settings.profile.name.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-heading clearfix\"],[9],[0,\"\\n        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"settings.profile.name.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[27,\"settings/profile/name/-components/name\",null,[[\"user\",\"onWillDestroy\",\"onSave\",\"isPageDirty\"],[[22,0,[\"user\"]],[27,\"action\",[[22,0,[]],[22,0,[\"onWillDestroy\"]]],null],[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[22,0,[\"user\",\"hasDirtyAttributes\"]]]]],false],[0,\"\\n\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/profile/name/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "DoHP+CDB", "block": "{\"symbols\":[\"nav\",\"profileNav\"],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-xs-12\"],[9],[0,\"\\n            \"],[7,\"h2\"],[11,\"class\",\"page-header\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"general.settings\"],null],false],[0,\"\\n                \"],[5,\"osf-button\",[[12,\"class\",[28,[[27,\"local-class\",[\"NavToggle\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/styles\"]]]]]],[12,\"aria-label\",[27,\"t\",[\"settings.toggleNav\"],null]]],[[\"@type\",\"@class\",\"@onClick\"],[\"link\",\"hidden-md hidden-lg\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,0,[\"navCollapsed\"]]],null],[27,\"not\",[[22,0,[\"navCollapsed\"]]],null]],null]]],{\"statements\":[[0,\"\\n                    \"],[1,[27,\"fa-icon\",[\"bars\"],null],false],[0,\"\\n                \"]],\"parameters\":[]}],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-3\"],[9],[0,\"\\n            \"],[5,\"bs-collapse\",[[12,\"class\",[28,[[27,\"local-class\",[\"SideNav\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/styles\"]]]]]]],[[\"@collapsed\"],[[22,0,[\"navCollapsed\"]]]],{\"statements\":[[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n                    \"],[5,\"bs-nav\",[],[[\"@type\",\"@stacked\"],[\"pills\",true]],{\"statements\":[[0,\"\\n                        \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"link-to\"]],\"settings.profile\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                \"],[1,[27,\"t\",[\"settings.profile.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[5,\"bs-nav\",[[12,\"class\",[28,[[27,\"local-class\",[\"ProfileNav\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/styles\"]]]]]]],[[\"@type\",\"@stacked\"],[\"pills\",true]],{\"statements\":[[0,\"\\n                                \"],[6,[22,2,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.name\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Name\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.name.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"]],\"parameters\":[]}],[0,\"\\n                                \"],[6,[22,2,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.social\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Social\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.social.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"]],\"parameters\":[]}],[0,\"\\n                                \"],[6,[22,2,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.education\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Education\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.education.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"]],\"parameters\":[]}],[0,\"\\n                                \"],[6,[22,2,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,2,[\"link-to\"]],\"settings.profile.employment\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Profile - Employment\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                        \"],[1,[27,\"t\",[\"settings.profile.employment.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                                \"]],\"parameters\":[]}],[0,\"\\n                            \"]],\"parameters\":[2]}],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                        \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"link-to\"]],\"settings.account\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Account settings\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                \"],[1,[27,\"t\",[\"settings.account.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"]],\"parameters\":[]}],[0,\"\\n                        \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n                            \"],[7,\"a\"],[11,\"href\",\"/settings/addons\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Configure add-on accounts\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"settings.addons.title\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                        \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n                            \"],[7,\"a\"],[11,\"href\",\"/settings/notifications\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Notifications\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                                \"],[1,[27,\"t\",[\"settings.notifications.title\"],null],false],[0,\"\\n                            \"],[10],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n                        \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"link-to\"]],\"settings.developer-apps\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Developer apps\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                \"],[1,[27,\"t\",[\"settings.developer-apps.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"]],\"parameters\":[]}],[0,\"\\n                        \"],[6,[22,1,[\"item\"]],[],[[],[]],{\"statements\":[[0,\"\\n\"],[4,\"component\",[[22,1,[\"link-to\"]],\"settings.tokens\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Personal access tokens\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"                                \"],[1,[27,\"t\",[\"settings.tokens.title\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"]],\"parameters\":[]}],[0,\"\\n                    \"]],\"parameters\":[1]}],[0,\"\\n                \"],[10],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-md-9\"],[9],[0,\"\\n            \"],[1,[21,\"outlet\"],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/tokens/-components/token-card/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/-components/token-card/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/-components/token-card/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/tokens/-components/token-card/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "wt2VHYnZ", "block": "{\"symbols\":[\"placeholder\",\"@token\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"TokenCard\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/tokens/-components/token-card/styles\"]]]]]],[12,\"data-test-token-card\",[22,2,[\"id\"]]],[9],[0,\"\\n\"],[4,\"if\",[[22,2,[]]],null,{\"statements\":[[4,\"link-to\",[\"settings.tokens.edit\",[22,2,[\"id\"]]],[[\"data-test-token-link\"],[[22,2,[\"id\"]]]],{\"statements\":[[0,\"            \"],[1,[22,2,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[5,\"content-placeholders\",[[12,\"class\",[28,[[27,\"local-class\",[\"TokenCard__placeholder\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/tokens/-components/token-card/styles\"]]]]]]],[[],[]],{\"statements\":[[0,\"\\n            \"],[1,[27,\"component\",[[22,1,[\"heading\"]]],[[\"subtitle\"],[false]]],false],[0,\"\\n        \"]],\"parameters\":[1]}],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n    \"],[5,\"delete-button\",[],[[\"@small\",\"@delete\",\"@disabled\",\"@analyticsScope\",\"@modalTitle\",\"@modalBody\"],[true,[27,\"action\",[[22,0,[]],[22,0,[\"delete\"]]],null],[27,\"not\",[[22,2,[]]],null],\"Settings - Tokens\",[27,\"t\",[\"settings.tokens.confirmDelete.title\"],[[\"tokenName\"],[[22,0,[\"token\",\"name\"]]]]],[27,\"t\",[\"settings.tokens.confirmDelete.body\"],null]]]],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/tokens/-components/token-card/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/tokens/-components/token-form/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/-components/token-form/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/-components/token-form/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/tokens/-components/token-form/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Mgbu+pWI", "block": "{\"symbols\":[\"form\",\"cb\",\"&default\"],\"statements\":[[5,\"validated-model-form\",[],[[\"@model\",\"@modelName\",\"@disabled\",\"@onSave\",\"@analyticsScope\"],[[22,0,[\"token\"]],[27,\"if\",[[22,0,[\"token\"]],[26],\"token\"],null],[22,0,[\"disabled\"]],[27,\"action\",[[22,0,[]],[22,0,[\"onSave\"]]],null],[22,0,[\"analyticsScope\"]]]],{\"statements\":[[0,\"\\n    \"],[6,[22,1,[\"text\"]],[[11,\"data-test-token-name\",\"\"]],[[\"@valuePath\",\"@label\"],[\"name\",[27,\"t\",[\"settings.tokens.tokenName\"],null]]]],[0,\"\\n\\n    \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[1,[27,\"t\",[\"settings.tokens.scopes\"],null],false],[10],[0,\"\\n        \"],[7,\"p\"],[9],[1,[27,\"t\",[\"settings.tokens.scopesDescription\"],null],false],[10],[0,\"\\n\\n        \"],[6,[22,1,[\"checkboxes\"]],[],[[\"@valuePath\",\"@options\",\"@ariaLabel\"],[\"scopes\",[22,0,[\"allScopes\"]],[27,\"t\",[\"settings.tokens.scopes\"],null]]],{\"statements\":[[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Scope\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/tokens/-components/token-form/styles\"]]]]]],[11,\"data-test-scope\",\"cb.option.id\"],[9],[0,\"\\n                \"],[1,[22,2,[\"checkbox\"]],false],[0,\"\\n                \"],[7,\"label\"],[12,\"for\",[22,2,[\"checkboxId\"]]],[9],[0,\"\\n                    \"],[1,[22,2,[\"option\",\"id\"]],false],[0,\"\\n                    \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Scope__description\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/tokens/-components/token-form/styles\"]]]]]],[11,\"data-test-scope-description\",\"\"],[9],[0,\"\\n                        \"],[1,[22,2,[\"option\",\"description\"]],false],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"]],\"parameters\":[2]}],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[14,3,[[27,\"hash\",null,[[\"disabled\"],[[22,0,[\"inputsDisabled\"]]]]]]],[0,\"\\n\"]],\"parameters\":[1]}],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/tokens/-components/token-form/template.hbs" } });
});
define("analytics-page/osf-components/tests/settings/tokens/create/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "rY7qr0yh", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-tokens\"]],\"settings.tokens\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Tokens - Create - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.tokens.createToken\"],null],false],[10],[0,\"\\n\\n\"],[4,\"settings/tokens/-components/token-form\",null,[[\"onSave\",\"analyticsScope\"],[[27,\"action\",[[22,0,[]],\"onSave\"],null],\"Settings - Tokens - Create\"]],{\"statements\":[[0,\"    \"],[5,\"osf-button\",[[11,\"data-test-create-token-button\",\"\"]],[[\"@type\",\"@buttonType\",\"@disabled\"],[\"primary\",\"submit\",[22,1,[\"disabled\"]]]],{\"statements\":[[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.createToken\"],null],false],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/tokens/create/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/tokens/edit/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/edit/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/edit/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/tokens/edit/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "9v7w6zmq", "block": "{\"symbols\":[\"form\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-back-to-tokens\"]],\"settings.tokens\"],[[\"click\"],[[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Settings - Tokens - Edit - Back to list\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]]],{\"statements\":[[0,\"        \"],[1,[27,\"fa-icon\",[\"arrow-left\"],null],false],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.backToList\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[4,\"if\",[[22,0,[\"token\",\"tokenValue\"]]],null,{\"statements\":[[0,\"    \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.tokens.createSuccess.message\"],[[\"tokenName\"],[[22,0,[\"token\",\"name\"]]]]],false],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        \"],[5,\"copyable-text\",[[11,\"data-test-new-token-value\",\"\"]],[[\"@text\",\"@analyticsLabel\"],[[22,0,[\"token\",\"tokenValue\"]],\"Settings - Tokens - Copy token\"]]],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[12,\"class\",[28,[\"bg-danger \",[27,\"local-class\",[\"NewTokenWarning\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/tokens/edit/styles\"]]]]]],[9],[0,\"\\n        \"],[7,\"strong\"],[9],[0,\"\\n            \"],[1,[27,\"t\",[\"settings.tokens.createSuccess.warning\"],null],false],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.createSuccess.instructions\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[5,\"osf-button\",[],[[\"@onClick\"],[[27,\"action\",[[22,0,[]],[22,0,[\"refresh\"]]],null]]],{\"statements\":[[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.createSuccess.editScopes\"],null],false],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"h4\"],[9],[1,[27,\"t\",[\"settings.tokens.editToken\"],null],false],[10],[0,\"\\n\\n\"],[4,\"if\",[[22,0,[\"model\",\"taskInstance\",\"isError\"]]],null,{\"statements\":[[0,\"        \"],[1,[22,0,[\"model\",\"taskInstance\",\"error\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"settings/tokens/-components/token-form\",null,[[\"onSave\",\"token\",\"disabled\",\"analyticsScope\"],[[27,\"action\",[[22,0,[]],[22,0,[\"tokenSaved\"]]],null],[22,0,[\"token\"]],[22,0,[\"model\",\"taskInstance\",\"isRunning\"]],\"Settings - Tokens - Edit\"]],{\"statements\":[[0,\"            \"],[5,\"delete-button\",[],[[\"@delete\",\"@disabled\",\"@analyticsScope\",\"@modalTitle\",\"@modalBody\"],[[27,\"action\",[[22,0,[]],[22,0,[\"deleteToken\"]]],null],[22,1,[\"disabled\"]],\"Settings - Tokens - Edit\",[27,\"t\",[\"settings.tokens.confirmDelete.title\"],[[\"tokenName\"],[[22,0,[\"token\",\"name\"]]]]],[27,\"t\",[\"settings.tokens.confirmDelete.body\"],null]]]],[0,\"\\n\\n            \"],[5,\"osf-button\",[[11,\"data-test-save-token-button\",\"\"]],[[\"@type\",\"@buttonType\",\"@disabled\"],[\"primary\",\"submit\",[22,1,[\"disabled\"]]]],{\"statements\":[[0,\"\\n                \"],[1,[27,\"t\",[\"general.save\"],null],false],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/tokens/edit/template.hbs" } });
});
define('analytics-page/osf-components/tests/settings/tokens/index/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('settings/tokens/index/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'settings/tokens/index/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/settings/tokens/index/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "+HyiN8qU", "block": "{\"symbols\":[\"list\",\"token\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/tokens/index/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"p\"],[12,\"class\",[28,[[27,\"local-class\",[\"Top__explanation\"],[[\"from\"],[\"analytics-page/osf-components/tests/settings/tokens/index/styles\"]]]]]],[9],[0,\"\\n        \"],[1,[27,\"t\",[\"settings.tokens.explanation\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"link-to\",[[23,[\"data-test-create-token-link\"]],\"settings.tokens.create\"],[[\"class\"],[\"btn btn-primary\"]],{\"statements\":[[0,\"        \"],[1,[27,\"t\",[\"settings.tokens.createToken\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\\n\"],[4,\"paginated-list/all\",null,[[\"modelName\",\"analyticsScope\"],[\"token\",\"Settings - Tokens\"]],{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"settings/tokens/-components/token-card\",null,[[\"token\",\"onDelete\"],[[22,2,[]],[22,1,[\"doReload\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/tokens/index/template.hbs" } });
});
define("analytics-page/osf-components/tests/settings/tokens/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "yevwnbbc", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"settings.tokens.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"panel panel-default\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-heading clearfix\"],[9],[0,\"\\n        \"],[7,\"h3\"],[11,\"class\",\"panel-title\"],[9],[1,[27,\"t\",[\"settings.tokens.title\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"panel-body\"],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/settings/tokens/template.hbs" } });
});
define('analytics-page/osf-components/tests/styles/_accessibility.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_accessibility.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_accessibility.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_bootstrap_xl.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_bootstrap_xl.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_bootstrap_xl.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_components.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_components.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_components.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_functions-animation.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_functions-animation.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_functions-animation.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_global.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_global.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_global.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_layout.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_layout.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_layout.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_loader.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_loader.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_loader.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_mixins-animation.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_mixins-animation.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_mixins-animation.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_mixins.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_mixins.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_mixins.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_typography.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_typography.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_typography.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_variables-animation.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_variables-animation.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_variables-animation.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/_variables.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/_variables.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/_variables.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/headers.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/headers.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/headers.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/loaders/animations/_ball-pulse.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/loaders/animations/_ball-pulse.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/loaders/animations/_ball-pulse.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/styles/loaders/animations/_ball-scale.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('styles/loaders/animations/_ball-scale.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/loaders/animations/_ball-scale.scss should pass stylelint');
  });
});
define('analytics-page/osf-components/tests/support/styles.stylelint-test', [], function () {
  'use strict';

  QUnit.module('Stylelint');
  QUnit.test('support/styles.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'support/styles.scss should pass stylelint');
  });
});
define("analytics-page/osf-components/tests/support/template", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "sKgHVFvc", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"page-title\",[[27,\"t\",[\"support.title\"],null]],null],false],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[28,[\"container \",[27,\"local-class\",[\"Support\"],[[\"from\"],[\"analytics-page/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n    \"],[7,\"h1\"],[11,\"class\",\"m-b-lg\"],[9],[1,[27,\"t\",[\"support.title\"],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-b-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"SupportCol\"],[[\"from\"],[\"analytics-page/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"f-w-lg bg-color-select\"],[9],[0,\"\\n                    \"],[7,\"a\"],[11,\"href\",\"/faq\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - faq_title\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.faq_title\"],null],false],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.faq_paragraph\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"faqPageUrl\"]]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - faq_link\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.faq_link_text\"],null],false],[10],[1,[27,\"t\",[\"general.period\"],null],false],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"faqPageUrl\"]]]]],[11,\"class\",\"btn btn-info m-t-lg pull-right\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - faq_button\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.faq_button\"],null],false],[0,\"\\n                        \"],[7,\"i\"],[11,\"class\",\"fa fa-angle-right\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"SupportCol\"],[[\"from\"],[\"analytics-page/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"f-w-lg bg-color-select\"],[9],[0,\"\\n                    \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"helpUrl\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"noreferrer\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - guides_title\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.guides_title\"],null],false],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.guides_paragraph_1\"],null],false],[0,\"\\n                        \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"helpUrl\"]]]]],[11,\"target\",\"_blank\"],[11,\"rel\",\"noreferrer\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - guides_link\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.guides_link_text\"],null],false],[10],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.guides_paragraph_2\"],null],false],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"helpUrl\"]]]]],[11,\"class\",\"btn btn-info m-t-lg pull-right\"],[11,\"target\",\"_blank\"],[11,\"rel\",\"noreferrer\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - guides_button\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[0,\"\\n                        \"],[1,[27,\"t\",[\"support.guides_button\"],null],false],[0,\"\\n                        \"],[7,\"i\"],[11,\"class\",\"fa fa-angle-right\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"div\"],[12,\"class\",[28,[[27,\"local-class\",[\"SupportCol\"],[[\"from\"],[\"analytics-page/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n                \"],[7,\"h4\"],[11,\"class\",\"f-w-lg bg-color-select\"],[9],[1,[27,\"t\",[\"support.contact_title\"],null],false],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"clearfix\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"support.contact_technical\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[7,\"a\"],[12,\"href\",[28,[\"mailto:\",[22,0,[\"supportEmail\"]]]]],[11,\"class\",\"text-bigger\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - support_email\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[22,0,[\"supportEmail\"]],false],[10],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[1,[27,\"t\",[\"support.contact_questions\"],null],false],[10],[0,\"\\n                    \"],[7,\"p\"],[9],[7,\"a\"],[12,\"href\",[28,[\"mailto:\",[22,0,[\"contactEmail\"]]]]],[11,\"class\",\"text-bigger\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - contact_email\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[22,0,[\"contactEmail\"]],false],[10],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-b-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"h5\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.prereg_title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"support.prereg_paragraph_1\"],null],false],[0,\"\\n                \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"preregUrl\"]]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - prereg_link\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.prereg_link_text\"],null],false],[10],[0,\"\\n                \"],[1,[27,\"t\",[\"support.prereg_paragraph_2\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"h5\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.status_title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"support.status_paragraph_1\"],null],false],[0,\"\\n                \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"statusPageUrl\"]]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - status_page_link\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.status_link_text\"],null],false],[10],[0,\"\\n                \"],[1,[27,\"t\",[\"support.status_paragraph_2\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n            \"],[7,\"h5\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.consultation_title\"],null],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n                \"],[1,[27,\"t\",[\"support.consultation_paragraph\"],null],false],[0,\"\\n                \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"consultationUrl\"]]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - consultation_link\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[1,[27,\"t\",[\"support.consultation_link_text\"],null],false],[10],[1,[27,\"t\",[\"general.period\"],null],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"hr\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row m-b-lg\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"class\",[28,[\"col-sm-12 text-center \",[27,\"local-class\",[\"bold-links\"],[[\"from\"],[\"analytics-page/osf-components/tests/support/styles\"]]]]]],[9],[0,\"\\n            \"],[7,\"h4\"],[11,\"class\",\"m-t-md f-w-xl\"],[9],[1,[27,\"t\",[\"support.social_title\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"twitterUrl\"]]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_twitter\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-twitter\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_twitter\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"mailingUrl\"]]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_email\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-users\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_mailing\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"facebookUrl\"]]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_facebook\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-facebook\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_facebook\"],null],false],[10],[0,\"\\n            \"],[7,\"a\"],[12,\"href\",[28,[[22,0,[\"githubUrl\"]]]]],[11,\"class\",\"btn btn-link\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"click\",\"link\",\"Support - social_github\"],[[\"target\"],[[22,0,[\"analytics\"]]]]]],[9],[7,\"i\"],[11,\"class\",\"fa fa-github\"],[9],[10],[0,\" \"],[1,[27,\"t\",[\"support.social_github\"],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "analytics-page/osf-components/tests/support/template.hbs" } });
});
define("analytics-page/osf-components/tests/templates.template.lint-test", [], function () {
  "use strict";
});
define('analytics-page/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define.alias('ember-cli-head/services/head-data', 'analytics-page/services/head-data');
define.alias('ember-i18n/services/i18n', 'analytics-page/services/i18n');
define('analytics-page/services/moment', ['exports', 'ember-moment/services/moment', 'analytics-page/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('analytics-page/services/page-title-list', ['exports', 'ember-page-title/services/page-title-list', 'analytics-page/config/environment'], function (exports, _pageTitleList, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function capitalize(key) {
    return key.charAt(0).toUpperCase() + key.slice(1);
  }

  var defaults = {};
  ['separator', 'prepend', 'replace'].forEach(function (key) {
    if (_environment.default.pageTitle && _environment.default.pageTitle[key]) {
      defaults['default' + capitalize(key)] = _environment.default.pageTitle[key];
    }
  });

  exports.default = _pageTitleList.default.extend(defaults);
});
define("analytics-page/styles/headers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {};
});
define.alias('ember-popper/templates/components/ember-popper-targeting-parent', 'analytics-page/templates/components/ember-popper-targeting-parent');
define.alias('ember-popper/templates/components/ember-popper', 'analytics-page/templates/components/ember-popper');
define.alias('ember-i18n/utils/i18n/compile-template', 'analytics-page/utils/i18n/compile-template');
define.alias('ember-i18n/utils/i18n/missing-message', 'analytics-page/utils/i18n/missing-message');
define.alias('ember-cp-validations/validators/alias', 'analytics-page/validators/alias');
define.alias('ember-cp-validations/validators/belongs-to', 'analytics-page/validators/belongs-to');
define.alias('ember-cp-validations/validators/collection', 'analytics-page/validators/collection');
define.alias('ember-cp-validations/validators/confirmation', 'analytics-page/validators/confirmation');
define.alias('ember-cp-validations/validators/date', 'analytics-page/validators/date');
define.alias('ember-cp-validations/validators/dependent', 'analytics-page/validators/dependent');
define.alias('ember-cp-validations/validators/ds-error', 'analytics-page/validators/ds-error');
define.alias('ember-cp-validations/validators/exclusion', 'analytics-page/validators/exclusion');
define.alias('ember-cp-validations/validators/format', 'analytics-page/validators/format');
define.alias('ember-cp-validations/validators/has-many', 'analytics-page/validators/has-many');
define.alias('ember-cp-validations/validators/inclusion', 'analytics-page/validators/inclusion');
define.alias('ember-cp-validations/validators/length', 'analytics-page/validators/length');
define.alias('ember-cp-validations/validators/messages', 'analytics-page/validators/messages');
define.alias('ember-cp-validations/validators/number', 'analytics-page/validators/number');
define.alias('ember-cp-validations/validators/presence', 'analytics-page/validators/presence');//# sourceMappingURL=/ember-osf-web/engines-dist/analytics-page/assets/engine-5adb7c97d1269ccc09eca39235236c43.map
