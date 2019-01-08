define('ember-bootstrap/components/base/bs-accordion', ['exports', 'ember-bootstrap/templates/components/bs-accordion', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _bsAccordion, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _bsAccordion.default,
    ariaRole: 'tablist',

    /**
     * The value of the currently selected accordion item. Set this to change selection programmatically.
     *
     * When the selection is changed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onChange` action
     *
     * @property selected
     * @public
     */
    selected: null,

    /**
     * The value of the currently selected accordion item
     *
     * @property isSelected
     * @private
     */
    isSelected: (0, _listenToCp.default)('selected'),

    /**
     * Action when the selected accordion item is about to be changed.
     *
     * You can return false to prevent changing the active item, and do that in your action by
     * setting the `selected` accordingly.
     *
     * @event onChange
     * @param newValue
     * @param oldValue
     * @public
     */
    onChange: function onChange(newValue, oldValue) {},
    // eslint-disable-line no-unused-vars

    actions: {
      change: function change(newValue) {
        var oldValue = this.get('isSelected');
        if (oldValue === newValue) {
          newValue = null;
        }
        if (this.get('onChange')(newValue, oldValue) !== false) {
          this.set('isSelected', newValue);
        }
      }
    }

  });
});
define('ember-bootstrap/components/base/bs-accordion/item', ['exports', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/templates/components/bs-accordion/item'], function (exports, _typeClass, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_typeClass.default, {
    layout: _item.default,

    /**
     * The title of the accordion item, displayed as a .panel-title element
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * The value of the accordion item, which is used as the value of the `selected` property of the parent [Components.Accordion](Components.Accordion.html) component
     *
     * @property value
     * @public
     */
    value: Ember.computed.oneWay('elementId'),

    /**
     * @property selected
     * @private
     */
    selected: null,

    /**
     * @property collapsed
     * @type boolean
     * @readonly
     * @private
     */
    collapsed: Ember.computed('value', 'selected', function () {
      return this.get('value') !== this.get('selected');
    }).readOnly(),

    /**
     * @property active
     * @type boolean
     * @readonly
     * @private
     */
    active: Ember.computed.not('collapsed'),

    /**
     * Reference to the parent `Components.Accordion` class.
     *
     * @property accordion
     * @private
     */
    accordion: null,

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {}
  });
});
define('ember-bootstrap/components/base/bs-accordion/item/body', ['exports', 'ember-bootstrap/templates/components/bs-accordion/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _body.default,
    tagName: '',

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null

  });
});
define('ember-bootstrap/components/base/bs-accordion/item/title', ['exports', 'ember-bootstrap/templates/components/bs-accordion/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _title.default,
    ariaRole: 'tab',
    classNameBindings: ['collapsed:collapsed:expanded'],

    /**
     * @property collapsed
     * @type boolean
     * @public
     */
    collapsed: null,

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click(e) {
      e.preventDefault();
      this.get('onClick')();
    }
  });
});
define('ember-bootstrap/components/base/bs-alert', ['exports', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/templates/components/bs-alert', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _transitionSupport, _bsAlert, _typeClass, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_typeClass.default, _transitionSupport.default, {
    layout: _bsAlert.default,
    classNameBindings: ['alert', 'fade', 'dismissible:alert-dismissible'],

    /**
     * A dismissible alert will have a close button in the upper right corner, that the user can click to dismiss
     * the alert.
     *
     * @property dismissible
     * @type boolean
     * @default true
     * @public
     */
    dismissible: true,

    /**
     * If true the alert is completely hidden. Will be set when the fade animation has finished.
     *
     * @property hidden
     * @type boolean
     * @default false
     * @readonly
     * @private
     */
    hidden: false,

    /**
     * This property controls if the alert should be visible. If false it might still be in the DOM until the fade animation
     * has completed.
     *
     * When the alert is dismissed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onDismiss` action
     *
     * @property visible
     * @type boolean
     * @default true
     * @public
     */
    visible: true,

    /**
     * @property _visible
     * @private
     */
    _visible: (0, _listenToCp.default)('visible'),

    /**
     * @property notVisible
     * @private
     */
    notVisible: Ember.computed.not('_visible'),

    /**
     * Set to false to disable the fade out animation when hiding the alert.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Computed property to set the alert class to the component div. Will be false when dismissed to have the component
     * div (which cannot be removed form DOM by the component itself) without any markup.
     *
     * @property alert
     * @type boolean
     * @private
     */
    alert: Ember.computed.not('hidden'),
    showAlert: Ember.computed.and('_visible', 'fade'),

    /**
     * @property classTypePrefix
     * @type String
     * @default 'alert'
     * @private
     */
    classTypePrefix: 'alert',

    /**
     * The duration of the fade out animation
     *
     * @property fadeDuration
     * @type number
     * @default 150
     * @public
     */
    fadeDuration: 150,

    /**
     * The action to be sent after the alert has been dismissed (including the CSS transition).
     *
     * @event onDismissed
     * @public
     */
    onDismissed: function onDismissed() {},


    /**
     * The action is called when the close button is clicked.
     *
     * You can return false to prevent closing the alert automatically, and do that in your action by
     * setting `visible` to false.
     *
     * @event onDismiss
     * @public
     */
    onDismiss: function onDismiss() {},


    actions: {
      dismiss: function dismiss() {
        if (this.get('onDismiss')() !== false) {
          this.set('_visible', false);
        }
      }
    },

    /**
     * Call to make the alert visible again after it has been hidden
     *
     * @method show
     * @private
     */
    show: function show() {
      this.set('hidden', false);
    },


    /**
     * Call to hide the alert. If the `fade` property is true, this will fade out the alert before being finally
     * dismissed.
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (this.get('usesTransition')) {
        Ember.run.later(this, function () {
          if (!this.get('isDestroyed')) {
            this.set('hidden', true);
            this.get('onDismissed')();
          }
        }, this.get('fadeDuration'));
      } else {
        this.set('hidden', true);
        this.get('onDismissed')();
      }
    },
    init: function init() {
      this._super.apply(this, arguments);
      this.set('hidden', !this.get('_visible'));
    },


    _observeIsVisible: Ember.observer('_visible', function () {
      if (this.get('_visible')) {
        this.show();
      } else {
        this.hide();
      }
    })
  });
});
define('ember-bootstrap/components/base/bs-button-group', ['exports', 'ember-bootstrap/templates/components/bs-button-group', 'ember-bootstrap/mixins/size-class'], function (exports, _bsButtonGroup, _sizeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_sizeClass.default, {
    layout: _bsButtonGroup.default,
    ariaRole: 'group',
    classNameBindings: ['vertical:btn-group-vertical:btn-group', 'justified:btn-group-justified'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'btn-group'
     * @protected
     */
    classTypePrefix: 'btn-group',

    /**
     * Set to true for a vertically stacked button group, see http://getbootstrap.com/components/#btn-groups-vertical
     *
     * @property vertical
     * @type boolean
     * @default false
     * @public
     */
    vertical: false,

    /**
     * Set to true for the buttons to stretch at equal sizes to span the entire width of its parent.
     *
     * *Important*: You have to wrap every button component in a `div class="btn-group">`:
     *
     * ```handlebars
     * <div class="btn-group" role="group">
     * {{#bs-button}}My Button{{/bs-button}}
     * </div>
     * ```
     *
     * See http://getbootstrap.com/components/#btn-groups-justified
     *
     * @property justified
     * @type boolean
     * @default false
     * @public
     */
    justified: false,

    /**
     * The type of the button group specifies how child buttons behave and how the `value` property will be computed:
     *
     * ### null
     * If `type` is not set (null), the button group will add no functionality besides Bootstrap styling
     *
     * ### radio
     * if `type` is set to "radio", the buttons will behave like radio buttons:
     * * the `value` property of the button group will reflect the `value` property of the active button
     * * thus only one button may be active
     *
     * ### checkbox
     * if `type` is set to "checkbox", the buttons will behave like checkboxes:
     * * any number of buttons may be active
     * * the `value` property of the button group will be an array containing the `value` properties of all active buttons
     *
     * @property type
     * @type string
     * @default null
     * @public
     */
    type: null,

    /**
     * The value of the button group, computed by its child buttons.
     * See the `type` property for how the value property is constructed.
     *
     * When you set the value, the corresponding buttons will be activated:
     * * use a single value for a radio button group to activate the button with the same value
     * * use an array of values for a checkbox button group to activate all the buttons with values contained in the array
     *
     * @property value
     * @type array
     * @public
     */
    value: undefined,

    /**
     * @property isRadio
     * @type boolean
     * @private
     */
    isRadio: Ember.computed.equal('type', 'radio').readOnly(),

    /**
     * This action is called whenever the button group's value should be changed because the user clicked a button.
     * You will receive the new value of the button group (based on the `type` property), which you should use to update the
     * `value` property.
     *
     * @event onChange
     * @param {*} value
     * @public
     */
    onChange: function onChange() {},


    actions: {
      buttonPressed: function buttonPressed(pressedValue) {
        var newValue = Ember.copy(this.get('value'));

        if (this.get('isRadio')) {
          if (newValue !== pressedValue) {
            newValue = pressedValue;
          }
        } else {
          if (!Ember.isArray(newValue)) {
            newValue = Ember.A([pressedValue]);
          } else {
            newValue = Ember.A(newValue);
            if (newValue.includes(pressedValue)) {
              newValue.removeObject(pressedValue);
            } else {
              newValue.pushObject(pressedValue);
            }
          }
        }

        this.get('onChange')(newValue);
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButton.default.extend({

    /**
     * @property groupValue
     * @private
     */
    groupValue: null,

    /**
     * @property buttonGroupType
     * @type string
     * @private
     */
    buttonGroupType: false,

    /**
     * @property active
     * @type boolean
     * @readonly
     * @private
     */
    active: Ember.computed('buttonGroupType', 'groupValue.[]', 'value', function () {
      var _getProperties = this.getProperties('value', 'groupValue'),
          value = _getProperties.value,
          groupValue = _getProperties.groupValue;

      if (this.get('buttonGroupType') === 'radio') {
        return value === groupValue;
      } else {
        if (Ember.isArray(groupValue)) {
          return groupValue.indexOf(value) !== -1;
        }
      }
      return false;
    }).readOnly()

  });
});
define('ember-bootstrap/components/base/bs-button', ['exports', 'ember-bootstrap/templates/components/bs-button', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/mixins/size-class'], function (exports, _bsButton, _typeClass, _sizeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_typeClass.default, _sizeClass.default, {
    layout: _bsButton.default,
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['active', 'block:btn-block'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'btn'
     * @private
     */
    classTypePrefix: 'btn',

    attributeBindings: ['disabled', 'buttonType:type', 'title'],

    /**
     * Default label of the button. Not need if used as a block component
     *
     * @property defaultText
     * @type string
     * @public
     */
    defaultText: null,

    /**
     * Property to disable the button
     *
     * @property disabled
     * @type boolean
     * @default false
     * @public
     */
    disabled: false,

    /**
     * Set the type of the button, either 'button' or 'submit'
     *
     * @property buttonType
     * @type String
     * @default 'button'
     * @public
     */
    buttonType: 'button',

    /**
     * Set the 'active' class to apply active/pressed CSS styling
     *
     * @property active
     * @type boolean
     * @default false
     * @public
     */
    active: false,

    /**
     * Property for block level buttons
     *
     * See the [Bootstrap docs](http://getbootstrap.com/css/#buttons-sizes)
     * @property block
     * @type boolean
     * @default false
     * @public
     */
    block: false,

    /**
     * A click event on a button will not bubble up the DOM tree if it has an `onClick` action handler. Set to true to
     * enable the event to bubble
     *
     * @property bubble
     * @type boolean
     * @default false
     * @public
     */
    bubble: false,

    /**
     * If button is active and this is set, the icon property will match this property
     *
     * @property iconActive
     * @type String
     * @public
     */
    iconActive: null,

    /**
     * If button is inactive and this is set, the icon property will match this property
     *
     * @property iconInactive
     * @type String
     * @public
     */
    iconInactive: null,

    /**
     * Class(es) (e.g. glyphicons or font awesome) to use as a button icon
     * This will render a <i class="{{icon}}"></i> element in front of the button's label
     *
     * @property icon
     * @type String
     * @readonly
     * @protected
     */
    icon: Ember.computed('active', function () {
      if (this.get('active')) {
        return this.get('iconActive');
      } else {
        return this.get('iconInactive');
      }
    }),

    /**
     * Supply a value that will be associated with this button. This will be send
     * as a parameter of the default action triggered when clicking the button
     *
     * @property value
     * @type any
     * @public
     */
    value: null,

    /**
     * State of the button. The button's label (if not used as a block component) will be set to the
     * `<state>Text` property.
     * This property will automatically be set when using a click action that supplies the callback with an promise
     *
     * @property textState
     * @type String
     * @default 'default'
     * @protected
     */
    textState: 'default',

    /**
     * Set this to true to reset the state. A typical use case is to bind this attribute with ember-data isDirty flag.
     *
     * @property reset
     * @type boolean
     * @public
     */
    reset: null,

    /**
     * The HTML title attribute
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * When clicking the button this action is called with the value of the button (that is the value of the "value" property).
     * Return a promise object, and the buttons state will automatically set to "pending", "resolved" and/or "rejected".
     *
     * The click event will not bubble up, unless you set `bubble` to true.
     *
     * @event onClick
     * @param {*} value
     * @public
     */
    onClick: null,

    /**
     * This will reset the state property to 'default', and with that the button's label to defaultText
     *
     * @method resetState
     * @protected
     */
    resetState: function resetState() {
      this.set('textState', 'default');
    },


    resetObserver: Ember.observer('reset', function () {
      if (this.get('reset')) {
        Ember.run.scheduleOnce('actions', this, function () {
          this.set('textState', 'default');
        });
      }
    }),

    text: Ember.computed('textState', 'defaultText', 'pendingText', 'resolvedText', 'rejectedText', function () {
      return this.getWithDefault(this.get('textState') + 'Text', this.get('defaultText'));
    }),

    /**
     * @method click
     * @private
     */
    click: function click() {
      var _this = this;

      var action = this.get('onClick');
      if (action !== null) {
        var promise = action(this.get('value'));
        if (promise && typeof promise.then === 'function' && !this.get('isDestroyed')) {
          this.set('textState', 'pending');
          promise.then(function () {
            if (!_this.get('isDestroyed')) {
              _this.set('textState', 'resolved');
            }
          }, function () {
            if (!_this.get('isDestroyed')) {
              _this.set('textState', 'rejected');
            }
          });
        }
        return this.get('bubble');
      }
    },
    init: function init() {
      this._super.apply(this, arguments);
      this.get('reset');
    }
  });
});
define('ember-bootstrap/components/base/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel/slide', 'ember-bootstrap/mixins/component-parent', 'ember-bootstrap/templates/components/bs-carousel', 'ember-concurrency'], function (exports, _slide, _componentParent, _bsCarousel, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports.default = Ember.Component.extend(_componentParent.default, {
    attributeBindings: ['tabindex'],
    classNames: ['carousel', 'slide'],
    layout: _bsCarousel.default,
    tabindex: '1',

    /**
     * If a slide can turn to left, including corners.
     *
     * @private
     * @property canTurnToLeft
     */
    canTurnToLeft: Ember.computed('wrap', 'currentIndex', function () {
      return this.get('wrap') || this.get('currentIndex') > 0;
    }),

    /**
     * If a slide can turn to right, including corners.
     *
     * @private
     * @property canTurnToRight
     */
    canTurnToRight: Ember.computed('childSlides.length', 'wrap', 'currentIndex', function () {
      return this.get('wrap') || this.get('currentIndex') < this.get('childSlides.length') - 1;
    }),

    /**
     * All `CarouselSlide` child components.
     *
     * @private
     * @property childSlides
     * @readonly
     * @type array
     */
    childSlides: Ember.computed.filter('children', function (view) {
      return view instanceof _slide.default;
    }).readOnly(),

    /**
     * This observer is the entry point for real time insertion and removing of slides.
     *
     * @private
     * @property childSlidesObserver
     */
    childSlidesObserver: Ember.observer('childSlides.[]', 'autoPlay', function () {
      var _this = this;

      Ember.run.scheduleOnce('actions', function () {
        var childSlides = _this.get('childSlides');
        if (childSlides.length === 0) {
          return;
        }
        // Sets new current index
        var currentIndex = _this.get('currentIndex');
        if (currentIndex >= childSlides.length) {
          currentIndex = childSlides.length - 1;
          _this.set('currentIndex', currentIndex);
        }
        // Automatic sliding
        if (_this.get('autoPlay')) {
          _this.get('waitIntervalToInitCycle').perform();
        }
        // Initial slide state
        _this.set('presentationState', null);
      });
    }),

    /**
     * Indicates the current index of the current slide.
     *
     * @property currentIndex
     * @private
     */
    currentIndex: null,

    /**
     * The current slide object that is going to be used by the nested slides components.
     *
     * @property currentSlide
     * @private
     *
     */
    currentSlide: Ember.computed('childSlides', 'currentIndex', function () {
      return this.get('childSlides').objectAt(this.get('currentIndex'));
    }).readOnly(),

    /**
     * Bootstrap style to indicate that a given slide should be moving to left/right.
     *
     * @property directionalClassName
     * @private
     * @type string
     */
    directionalClassName: null,

    /**
     * Indicates the next slide index to move into.
     *
     * @property followingIndex
     * @private
     * @type number
     */
    followingIndex: null,

    /**
     * The following slide object that is going to be used by the nested slides components.
     *
     * @property followingIndex
     * @private
     */
    followingSlide: Ember.computed('childSlides', 'followingIndex', function () {
      return this.get('childSlides').objectAt(this.get('followingIndex'));
    }).readOnly(),

    /**
     * @private
     * @property hasInterval
     * @type boolean
     */
    hasInterval: Ember.computed.gt('interval', 0).readOnly(),

    /**
     * This observer is the entry point for programmatically slide changing.
     *
     * @property indexObserver
     * @private
     */
    indexObserver: Ember.observer('index', function () {
      this.send('toSlide', this.get('index'));
    }),

    /**
     * @property indicators
     * @private
     */
    indicators: Ember.computed('childSlides.length', function () {
      return [].concat(_toConsumableArray(Array(this.get('childSlides.length'))));
    }),

    /**
     * If user is hovering its cursor on component.
     * This property is only manipulated when 'pauseOnMouseEnter' is true.
     *
     * @property isMouseHovering
     * @private
     * @type boolean
     */
    isMouseHovering: false,

    /**
     * The class name to append to the next control link element.
     *
     * @property nextControlClassName
     * @type string
     * @private
     */
    nextControlClassName: null,

    /**
     * Bootstrap style to indicate the next/previous slide.
     *
     * @property orderClassName
     * @private
     * @type string
     */
    orderClassName: null,

    /**
     * The current state of the current presentation, can be either "didTransition"
     * or "willTransit".
     *
     * @private
     * @property presentationState
     * @type string
     */
    presentationState: null,

    /**
     * The class name to append to the previous control link element.
     *
     * @property prevControlClassName
     * @type string
     * @private
     */
    prevControlClassName: null,

    /**
     * @private
     * @property shouldNotDoPresentation
     * @type boolean
     */
    shouldNotDoPresentation: Ember.computed.lte('childSlides.length', 1),

    /**
     * @private
     * @property shouldRunAutomatically
     * @type boolean
     */
    shouldRunAutomatically: Ember.computed.readOnly('hasInterval'),

    /**
     * Starts automatic sliding on page load.
     * This parameter has no effect if interval is less than or equal to zero.
     *
     * @default false
     * @property autoPlay
     * @public
     * @type boolean
     */
    autoPlay: false,

    /**
     * If false will hard stop on corners, i.e., first slide won't make a transition to the
     * last slide and vice versa.
     *
     * @default true
     * @property wrap
     * @public
     * @type boolean
     */
    wrap: true,

    /**
     * Index of starting slide.
     *
     * @default 0
     * @property index
     * @public
     * @type number
     */
    index: 0,

    /**
     * Waiting time before automatically show another slide.
     * Automatic sliding is canceled if interval is less than or equal to zero.
     *
     * @default 5000
     * @property interval
     * @public
     * @type number
     */
    interval: 5000,

    /**
     * Should bind keyboard events into sliding.
     *
     * @default true
     * @property keyboard
     * @public
     * @type boolean
     */
    keyboard: true,

    /**
     * If automatic sliding should be left-to-right or right-to-left.
     * This parameter has no effect if interval is less than or equal to zero.
     *
     * @default true
     * @property ltr
     * @public
     * @type boolean
     */
    ltr: true,

    /**
     * The next control icon to be displayed.
     *
     * @default null
     * @property nextControlIcon
     * @type string
     * @public
     */
    nextControlIcon: null,

    /**
     * Label for screen readers, defaults to 'Next'.
     *
     * @default 'Next'
     * @property nextControlLabel
     * @type string
     * @public
     */
    nextControlLabel: 'Next',

    /**
     * Pauses automatic sliding if mouse cursor is hovering the component.
     * This parameter has no effect if interval is less than or equal to zero.
     *
     * @default true
     * @property pauseOnMouseEnter
     * @public
     * @type boolean
     */
    pauseOnMouseEnter: true,

    /**
     * The previous control icon to be displayed.
     *
     * @default null
     * @property prevControlIcon
     * @type string
     * @public
     */
    prevControlIcon: null,

    /**
     * Label for screen readers, defaults to 'Previous'.
     *
     * @default 'Previous'
     * @property prevControlLabel
     * @type string
     * @public
     */
    prevControlLabel: 'Previous',

    /**
     * Show or hide controls.
     *
     * @default true
     * @property showControls
     * @public
     * @type boolean
     */
    showControls: true,

    /**
     * Show or hide indicators.
     *
     * @default true
     * @property showIndicators
     * @public
     * @type boolean
     */
    showIndicators: true,

    /**
     * The duration of the slide transition.
     * You should also change this parameter in Bootstrap CSS file.
     *
     * @default 600
     * @property transitionDuration
     * @public
     * @type number
     */
    transitionDuration: 600,

    /**
     * Do a presentation and calls itself to perform a cycle.
     *
     * @method cycle
     * @private
     */
    cycle: (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.get('transition').perform();

            case 2:
              _context.next = 4;
              return (0, _emberConcurrency.timeout)(this.get('interval'));

            case 4:
              this.toAppropriateSlide();

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })).restartable(),

    /**
     * @method transition
     * @private
     */
    transition: (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this2 = this;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.set('presentationState', 'willTransit');
              _context2.next = 3;
              return (0, _emberConcurrency.timeout)(this.get('transitionDuration'));

            case 3:
              this.set('presentationState', 'didTransition');
              // Must change current index after execution of 'presentationStateObserver' method
              // from child components.
              _context2.next = 6;
              return new Ember.RSVP.Promise(function (resolve) {
                Ember.run.schedule('afterRender', _this2, function () {
                  this.set('currentIndex', this.get('followingIndex'));
                  resolve();
                });
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })).drop(),

    /**
     * Waits an interval time to start a cycle.
     *
     * @method waitIntervalToInitCycle
     * @private
     */
    waitIntervalToInitCycle: (0, _emberConcurrency.task)( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(this.get('shouldRunAutomatically') === false)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return');

            case 2:
              _context3.next = 4;
              return (0, _emberConcurrency.timeout)(this.get('interval'));

            case 4:
              this.toAppropriateSlide();

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })).restartable(),

    actions: {
      toSlide: function toSlide(toIndex) {
        if (this.get('currentIndex') === toIndex || this.get('shouldNotDoPresentation')) {
          return;
        }
        this.assignClassNameControls(toIndex);
        this.setFollowingIndex(toIndex);
        if (this.get('shouldRunAutomatically') === false || this.get('isMouseHovering')) {
          this.get('transition').perform();
        } else {
          this.get('cycle').perform();
        }
      },
      toNextSlide: function toNextSlide() {
        if (this.get('canTurnToRight')) {
          this.send('toSlide', this.get('currentIndex') + 1);
        }
      },
      toPrevSlide: function toPrevSlide() {
        if (this.get('canTurnToLeft')) {
          this.send('toSlide', this.get('currentIndex') - 1);
        }
      }
    },

    /**
     * Indicates what class names should be applicable to the current transition slides.
     *
     * @method assignClassNameControls
     * @private
     */
    assignClassNameControls: function assignClassNameControls(toIndex) {
      if (toIndex < this.get('currentIndex')) {
        this.set('directionalClassName', 'right');
        this.set('orderClassName', 'prev');
      } else {
        this.set('directionalClassName', 'left');
        this.set('orderClassName', 'next');
      }
    },


    /**
     * Initial page loading configuration.
     */
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.registerEvents();
      this.set('currentIndex', this.get('index'));
      this.triggerChildSlidesObserver();
    },


    /**
     * mouseEnter() and mouseLeave() doesn't work with ember-native-dom-event-dispatcher.
     *
     * @method registerEvents
     * @private
     */
    registerEvents: function registerEvents() {
      var self = this;
      this.element.addEventListener('mouseenter', function () {
        if (self.get('pauseOnMouseEnter')) {
          self.set('isMouseHovering', true);
          self.get('cycle').cancelAll();
          self.get('waitIntervalToInitCycle').cancelAll();
        }
      });
      this.element.addEventListener('mouseleave', function () {
        if (self.get('pauseOnMouseEnter') && (self.get('transition.last') !== null || self.get('waitIntervalToInitCycle.last') !== null)) {
          self.set('isMouseHovering', false);
          self.get('waitIntervalToInitCycle').perform();
        }
      });
    },


    keyDown: function keyDown(e) {
      var code = e.keyCode || e.which;
      if (this.get('keyboard') === false || /input|textarea/i.test(e.target.tagName)) {
        return;
      }
      switch (code) {
        case 37:
          this.send('toPrevSlide');
          break;
        case 39:
          this.send('toNextSlide');
          break;
        default:
          break;
      }
    },

    /**
     * Sets the following slide index within the lower and upper bounds.
     *
     * @method setFollowingIndex
     * @private
     */
    setFollowingIndex: function setFollowingIndex(toIndex) {
      var slidesLengthMinusOne = this.get('childSlides').length - 1;
      if (toIndex > slidesLengthMinusOne) {
        this.set('followingIndex', 0);
      } else if (toIndex < 0) {
        this.set('followingIndex', slidesLengthMinusOne);
      } else {
        this.set('followingIndex', toIndex);
      }
    },


    /**
     * Coordinates the correct slide movement direction.
     *
     * @method toAppropriateSlide
     * @private
     */
    toAppropriateSlide: function toAppropriateSlide() {
      if (this.get('ltr')) {
        this.send('toNextSlide');
      } else {
        this.send('toPrevSlide');
      }
    },


    /**
     * @method triggerChildSlidesObserver
     * @private
     */
    triggerChildSlidesObserver: function triggerChildSlidesObserver() {
      this.get('childSlides');
    }
  });
});
define('ember-bootstrap/components/base/bs-carousel/slide', ['exports', 'ember-bootstrap/mixins/component-child', 'ember-bootstrap/templates/components/bs-carousel/slide'], function (exports, _componentChild, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_componentChild.default, {
    classNameBindings: ['active'],
    layout: _slide.default,

    /**
     * Defines slide visibility.
     *
     * @property active
     * @type boolean
     * @private
     */
    active: Ember.computed('isCurrentSlide', 'presentationState', function () {
      return this.get('isCurrentSlide') && this.get('presentationState') === null;
    }),

    /**
     * @private
     * @property isCurrentSlide
     * @type boolean
     */
    isCurrentSlide: Ember.computed('currentSlide', function () {
      return this.get('currentSlide') === this;
    }).readOnly(),

    /**
     * @private
     * @property isFollowingSlide
     * @type boolean
     */
    isFollowingSlide: Ember.computed('followingSlide', function () {
      return this.get('followingSlide') === this;
    }).readOnly(),

    /**
     * Slide is moving to the left.
     *
     * @property left
     * @type boolean
     * @private
     */
    left: false,

    /**
     * Next to appear in a left sliding.
     *
     * @property next
     * @type boolean
     * @private
     */
    next: false,

    /**
     * Next to appear in a right sliding.
     *
     * @property prev
     * @type boolean
     * @private
     */
    prev: false,

    /**
     * Slide is moving to the right.
     *
     * @property right
     * @type boolean
     * @private
     */
    right: false,

    /**
     * Coordinates the execution of a presentation.
     *
     * @method presentationStateObserver
     * @private
     */
    presentationStateObserver: Ember.observer('presentationState', function () {
      var presentationState = this.get('presentationState');
      if (this.get('isCurrentSlide')) {
        switch (presentationState) {
          case 'didTransition':
            this.currentSlideDidTransition();
            break;
          case 'willTransit':
            this.currentSlideWillTransit();
            break;
        }
      }
      if (this.get('isFollowingSlide')) {
        switch (presentationState) {
          case 'didTransition':
            this.followingSlideDidTransition();
            break;
          case 'willTransit':
            this.followingSlideWillTransit();
            break;
        }
      }
    }),

    /**
     * @method currentSlideDidTransition
     * @private
     */
    currentSlideDidTransition: function currentSlideDidTransition() {
      this.set(this.get('directionalClassName'), false);
      this.set('active', false);
    },


    /**
     * @method currentSlideWillTransit
     * @private
     */
    currentSlideWillTransit: function currentSlideWillTransit() {
      this.set('active', true);
      Ember.run.next(this, function () {
        this.set(this.get('directionalClassName'), true);
      });
    },


    /**
     * @method followingSlideDidTransition
     * @private
     */
    followingSlideDidTransition: function followingSlideDidTransition() {
      this.set('active', true);
      this.set(this.get('directionalClassName'), false);
      this.set(this.get('orderClassName'), false);
    },


    /**
     * @method followingSlideWillTransit
     * @private
     */
    followingSlideWillTransit: function followingSlideWillTransit() {
      this.set(this.get('orderClassName'), true);
      Ember.run.next(this, function () {
        this.reflow();
        this.set(this.get('directionalClassName'), true);
      });
    },


    /**
     * Makes things more stable, especially when fast changing.
     */
    reflow: function reflow() {
      this.element.offsetHeight;
    }
  });
});
define('ember-bootstrap/components/base/bs-collapse', ['exports', 'ember-bootstrap/utils/transition-end'], function (exports, _transitionEnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    classNameBindings: ['collapse', 'collapsing'],
    attributeBindings: ['style'],

    /**
     * Collapsed/expanded state
     *
     * @property collapsed
     * @type boolean
     * @default true
     * @public
     */
    collapsed: true,

    /**
     * True if this item is expanded
     *
     * @property active
     * @private
     */
    active: false,

    collapse: Ember.computed.not('transitioning'),
    collapsing: Ember.computed.alias('transitioning'),
    showContent: Ember.computed.and('collapse', 'active'),

    /**
     * true if the component is currently transitioning
     *
     * @property transitioning
     * @type boolean
     * @private
     */
    transitioning: false,

    /**
     * @property collapseSize
     * @type number
     * @private
     */
    collapseSize: null,

    /**
     * The size of the element when collapsed. Defaults to 0.
     *
     * @property collapsedSize
     * @type number
     * @default 0
     * @public
     */
    collapsedSize: 0,

    /**
     * The size of the element when expanded. When null the value is calculated automatically to fit the containing elements.
     *
     * @property expandedSize
     * @type number
     * @default null
     * @public
     */
    expandedSize: null,

    /**
     * Usually the size (height) of the element is only set while transitioning, and reseted afterwards. Set to true to always set a size.
     *
     * @property resetSizeWhenNotCollapsing
     * @type boolean
     * @default true
     * @private
     */
    resetSizeWhenNotCollapsing: true,

    /**
     * The direction (height/width) of the collapse animation.
     * When setting this to 'width' you should also define custom CSS transitions for the width property, as the Bootstrap
     * CSS does only support collapsible elements for the height direction.
     *
     * @property collapseDimension
     * @type string
     * @default 'height'
     * @public
     */
    collapseDimension: 'height',

    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 350
     * @public
     */
    transitionDuration: 350,

    style: Ember.computed('collapseSize', function () {
      var size = this.get('collapseSize');
      var dimension = this.get('collapseDimension');
      if (Ember.isEmpty(size)) {
        return Ember.String.htmlSafe('');
      }
      return Ember.String.htmlSafe(dimension + ': ' + size + 'px');
    }),

    /**
     * The action to be sent when the element is about to be hidden.
     *
     * @event onHide
     * @public
     */
    onHide: function onHide() {},


    /**
     * The action to be sent after the element has been completely hidden (including the CSS transition).
     *
     * @event onHidden
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * The action to be sent when the element is about to be shown.
     *
     * @event onShow
     * @public
     */
    onShow: function onShow() {},


    /**
     * The action to be sent after the element has been completely shown (including the CSS transition).
     *
     * @event onShown
     * @public
     */
    onShown: function onShown() {},


    /**
     * Triggers the show transition
     *
     * @method show
     * @protected
     */
    show: function show() {
      var complete = function complete() {
        if (this.get('isDestroyed')) {
          return;
        }
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.get('onShown')();
      };

      this.get('onShow')();

      this.setProperties({
        transitioning: true,
        collapseSize: this.get('collapsedSize'),
        active: true
      });

      (0, _transitionEnd.default)(this.get('element'), complete, this, this.get('transitionDuration'));

      Ember.run.next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.getExpandedSize('show'));
        }
      });
    },


    /**
     * Get the size of the element when expanded
     *
     * @method getExpandedSize
     * @param action
     * @return {Number}
     * @private
     */
    getExpandedSize: function getExpandedSize(action) {
      var expandedSize = this.get('expandedSize');
      if (Ember.isPresent(expandedSize)) {
        return expandedSize;
      }

      var collapseElement = this.get('element');
      var prefix = action === 'show' ? 'scroll' : 'offset';
      var measureProperty = Ember.String.camelize(prefix + '-' + this.get('collapseDimension'));
      return collapseElement[measureProperty];
    },


    /**
     * Triggers the hide transition
     *
     * @method hide
     * @protected
     */
    hide: function hide() {

      var complete = function complete() {
        if (this.get('isDestroyed')) {
          return;
        }
        this.set('transitioning', false);
        if (this.get('resetSizeWhenNotCollapsing')) {
          this.set('collapseSize', null);
        }
        this.get('onHidden')();
      };

      this.get('onHide')();

      this.setProperties({
        transitioning: true,
        collapseSize: this.getExpandedSize('hide'),
        active: false
      });

      (0, _transitionEnd.default)(this.get('element'), complete, this, this.get('transitionDuration'));

      Ember.run.next(this, function () {
        if (!this.get('isDestroyed')) {
          this.set('collapseSize', this.get('collapsedSize'));
        }
      });
    },


    _onCollapsedChange: Ember.observer('collapsed', function () {
      var collapsed = this.get('collapsed');
      var active = this.get('active');
      if (collapsed !== active) {
        return;
      }
      if (collapsed === false) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);
      this.set('active', !this.get('collapsed'));
    },


    _updateCollapsedSize: Ember.observer('collapsedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('collapsedSize'));
      }
    }),

    _updateExpandedSize: Ember.observer('expandedSize', function () {
      if (!this.get('resetSizeWhenNotCollapsing') && !this.get('collapsed') && !this.get('collapsing')) {
        this.set('collapseSize', this.get('expandedSize'));
      }
    })
  });
});
define('ember-bootstrap/components/base/bs-contextual-help', ['exports', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/utils/get-parent', 'ember-bootstrap/utils/transition-end'], function (exports, _transitionSupport, _getParent, _transitionEnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var InState = Ember.Object.extend({
    hover: false,
    focus: false,
    click: false,
    showHelp: Ember.computed.or('hover', 'focus', 'click')
  });

  function noop() {}

  /**
  
   @class Components.ContextualHelp
   @namespace Components
   @extends Ember.Component
   @uses Mixins.TransitionSupport
   @private
   */
  exports.default = Ember.Component.extend(_transitionSupport.default, {
    tagName: '',

    /**
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * How to position the tooltip/popover - top | bottom | left | right
     *
     * @property title
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    /**
     * By default it will dynamically reorient the tooltip/popover based on the available space in the viewport. For
     * example, if `placement` is "left", the tooltip/popover will display to the left when possible, otherwise it will
     * display right. Set to `false` to force placement according to the `placement` property
     *
     * @property autoPlacement
     * @type boolean
     * @default true
     * @public
     */
    autoPlacement: true,

    /**
     * You can programmatically show the tooltip/popover by setting this to `true`
     *
     * @property visible
     * @type boolean
     * @default false
     * @public
     */
    visible: false,

    /**
     * @property inDom
     * @type boolean
     * @private
     */
    inDom: Ember.computed.and('visible', 'triggerTargetElement'),

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Used to apply Bootstrap's visibility class
     *
     * @property showHelp
     * @type boolean
     * @default false
     * @private
     */
    showHelp: Ember.computed.reads('visible'),

    /**
     * Delay showing and hiding the tooltip/popover (ms). Individual delays for showing and hiding can be specified by using the
     * `delayShow` and `delayHide` properties.
     *
     * @property delay
     * @type number
     * @default 0
     * @public
     */
    delay: 0,

    /**
     * Delay showing the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayShow
     * @type number
     * @default 0
     * @public
     */
    delayShow: Ember.computed.reads('delay'),

    /**
     * Delay hiding the tooltip/popover. This property overrides the general delay set with the `delay` property.
     *
     * @property delayHide
     * @type number
     * @default 0
     * @public
     */
    delayHide: Ember.computed.reads('delay'),

    hasDelayShow: Ember.computed.gt('delayShow', 0),
    hasDelayHide: Ember.computed.gt('delayHide', 0),

    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 150
     * @public
     */
    transitionDuration: 150,

    /**
     * Keeps the tooltip/popover within the bounds of this element when `autoPlacement` is true. Can be any valid CSS selector.
     *
     * @property viewportSelector
     * @type string
     * @default 'body'
     * @see viewportPadding
     * @see autoPlacement
     * @public
     */
    viewportSelector: 'body',

    /**
     * Take a padding into account for keeping the tooltip/popover within the bounds of the element given by `viewportSelector`.
     *
     * @property viewportPadding
     * @type number
     * @default 0
     * @see viewportSelector
     * @see autoPlacement
     * @public
     */
    viewportPadding: 0,

    /**
     * The id of the overlay element.
     *
     * @property overlayId
     * @type string
     * @readonly
     * @private
     */
    overlayId: Ember.computed(function () {
      return 'overlay-' + Ember.guidFor(this);
    }),

    /**
     * The DOM element of the overlay element.
     *
     * @property overlayElement
     * @type object
     * @readonly
     * @private
     */
    overlayElement: Ember.computed('overlayId', function () {
      return document.getElementById(this.get('overlayId'));
    }).volatile(),

    /**
     * The DOM element of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: null,

    /**
     * The DOM element of the viewport element.
     *
     * @property viewportElement
     * @type object
     * @readonly
     * @private
     */
    viewportElement: Ember.computed('viewportSelector', function () {
      return document.querySelector(this.get('viewportSelector'));
    }),

    /**
     * The DOM element that triggers the tooltip/popover. By default it is the parent element of this component.
     * You can set this to any CSS selector to have any other element trigger the tooltip/popover.
     * With the special value of "parentView" you can attach the tooltip/popover to the parent component's element.
     *
     * @property triggerElement
     * @type string
     * @public
     */
    triggerElement: null,

    /**
     * @property triggerTargetElement
     * @type {object}
     * @private
     */
    triggerTargetElement: Ember.computed('triggerElement', function () {
      var triggerElement = this.get('triggerElement');
      var el = void 0;

      if (Ember.isBlank(triggerElement)) {
        try {
          el = (0, _getParent.default)(this);
        } catch (e) {
          return null;
        }
      } else if (triggerElement === 'parentView') {
        el = this.get('parentView.element');
      } else {
        el = document.querySelector(triggerElement);
      }
      return el;
    }).volatile(),

    /**
     * The event(s) that should trigger the tooltip/popover - click | hover | focus.
     * You can set this to a single event or multiple events, given as an array or a string separated by spaces.
     *
     * @property triggerEvents
     * @type array|string
     * @default 'hover focus'
     * @public
     */
    triggerEvents: 'hover focus',

    _triggerEvents: Ember.computed('triggerEvents', function () {
      var events = this.get('triggerEvents');
      if (!Ember.isArray(events)) {
        events = events.split(' ');
      }

      return events.map(function (event) {
        switch (event) {
          case 'hover':
            return ['mouseenter', 'mouseleave'];
          case 'focus':
            return ['focusin', 'focusout'];
          default:
            return event;
        }
      });
    }),

    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default false
     * @public
     */
    renderInPlace: false,

    /**
     * @property _renderInPlace
     * @type boolean
     * @private
     */
    _renderInPlace: Ember.computed('renderInPlace', function () {
      return this.get('renderInPlace') || typeof document === 'undefined' || !document.getElementById('ember-bootstrap-wormhole');
    }),

    /**
     * Current hover state, 'in', 'out' or null
     *
     * @property hoverState
     * @type string
     * @private
     */
    hoverState: null,

    /**
     * Current state for events
     *
     * @property inState
     * @type {InState}
     * @private
     */
    inState: Ember.computed(function () {
      return InState.create();
    }),

    /**
     * Ember.run timer
     *
     * @property timer
     * @private
     */
    timer: null,

    /**
     * This action is called immediately when the tooltip/popover is about to be shown.
     *
     * @event onShow
     * @public
     */
    onShow: function onShow() {},


    /**
     * This action will be called when the tooltip/popover has been made visible to the user (will wait for CSS transitions to complete).
     *
     * @event onShown
     * @public
     */
    onShown: function onShown() {},


    /**
     * This action is called immediately when the tooltip/popover is about to be hidden.
     *
     * @event onHide
     * @public
     */
    onHide: function onHide() {},


    /**
     * This action is called when the tooltip/popover has finished being hidden from the user (will wait for CSS transitions to complete).
     *
     * @event onHidden
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * Called when a show event has been received
     *
     * @method enter
     * @param e
     * @private
     */
    enter: function enter(e) {
      if (e) {
        var eventType = e.type === 'focusin' ? 'focus' : 'hover';
        this.get('inState').set(eventType, true);
      }

      if (this.get('showHelp') || this.get('hoverState') === 'in') {
        this.set('hoverState', 'in');
        return;
      }

      Ember.run.cancel(this.timer);

      this.set('hoverState', 'in');

      if (!this.get('hasDelayShow')) {
        return this.show();
      }

      this.timer = Ember.run.later(this, function () {
        if (this.get('hoverState') === 'in') {
          this.show();
        }
      }, this.get('delayShow'));
    },


    /**
     * Called when a hide event has been received
     *
     * @method leave
     * @param e
     * @private
     */
    leave: function leave(e) {
      if (e) {
        var eventType = e.type === 'focusout' ? 'focus' : 'hover';
        this.get('inState').set(eventType, false);
      }

      if (this.get('inState.showHelp')) {
        return;
      }

      Ember.run.cancel(this.timer);

      this.set('hoverState', 'out');

      if (!this.get('hasDelayHide')) {
        return this.hide();
      }

      this.timer = Ember.run.later(this, function () {
        if (this.get('hoverState') === 'out') {
          this.hide();
        }
      }, this.get('delayHide'));
    },


    /**
     * Called for a click event
     *
     * @method toggle
     * @param e
     * @private
     */
    toggle: function toggle(e) {
      if (e) {
        this.get('inState').toggleProperty('click');
        if (this.get('inState.showHelp')) {
          this.enter();
        } else {
          this.leave();
        }
      } else {
        if (this.get('showHelp')) {
          this.leave();
        } else {
          this.enter();
        }
      }
    },


    /**
     * Show the tooltip/popover
     *
     * @method show
     * @private
     */
    show: function show() {
      if (this.get('isDestroyed')) {
        return;
      }

      if (false === this.get('onShow')(this)) {
        return;
      }

      // this waits for the tooltip/popover element to be created. when animating a wormholed tooltip/popover we need to wait until
      // ember-wormhole has moved things in the DOM for the animation to be correct, so use Ember.run.next in this case
      var delayFn = !this.get('_renderInPlace') && this.get('fade') ? Ember.run.next : function (target, fn) {
        Ember.run.schedule('afterRender', target, fn);
      };

      this.set('inDom', true);
      delayFn(this, this._show);
    },
    _show: function _show() {
      var skipTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.set('showHelp', true);

      // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      // See https://github.com/twbs/bootstrap/pull/22481
      if ('ontouchstart' in document.documentElement) {
        var children = document.body.children;

        for (var i = 0; i < children.length; i++) {
          children[i].addEventListener('mouseover', noop);
        }
      }

      function tooltipShowComplete() {
        if (this.get('isDestroyed')) {
          return;
        }
        var prevHoverState = this.get('hoverState');

        this.get('onShown')(this);
        this.set('hoverState', null);

        if (prevHoverState === 'out') {
          this.leave();
        }
      }

      if (skipTransition === false && this.get('usesTransition')) {
        (0, _transitionEnd.default)(this.get('overlayElement'), tooltipShowComplete, this, this.get('transitionDuration'));
      } else {
        tooltipShowComplete.call(this);
      }
    },


    /**
     * Position the tooltip/popover's arrow
     *
     * @method replaceArrow
     * @param delta
     * @param dimension
     * @param isVertical
     * @private
     */
    replaceArrow: function replaceArrow(delta, dimension, isVertical) {
      var el = this.get('arrowElement');
      el.style[isVertical ? 'left' : 'top'] = 50 * (1 - delta / dimension) + '%';
      el.style[isVertical ? 'top' : 'left'] = null;
    },


    /**
     * Hide the tooltip/popover
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (this.get('isDestroyed')) {
        return;
      }

      if (false === this.get('onHide')(this)) {
        return;
      }

      function tooltipHideComplete() {
        if (this.get('isDestroyed')) {
          return;
        }
        if (this.get('hoverState') !== 'in') {
          this.set('inDom', false);
        }
        this.get('onHidden')(this);
      }

      this.set('showHelp', false);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        var children = document.body.children;

        for (var i = 0; i < children.length; i++) {
          children[i].removeEventListener('mouseover', noop);
        }
      }

      if (this.get('usesTransition')) {
        (0, _transitionEnd.default)(this.get('overlayElement'), tooltipHideComplete, this, this.get('transitionDuration'));
      } else {
        tooltipHideComplete.call(this);
      }

      this.set('hoverState', null);
    },


    /**
     * @method addListeners
     * @private
     */
    addListeners: function addListeners() {
      var _this = this;

      var target = this.get('triggerTargetElement');

      this.get('_triggerEvents').forEach(function (event) {
        if (Ember.isArray(event)) {
          var _event = _slicedToArray(event, 2),
              inEvent = _event[0],
              outEvent = _event[1];

          target.addEventListener(inEvent, _this._handleEnter);
          target.addEventListener(outEvent, _this._handleLeave);
        } else {
          target.addEventListener(event, _this._handleToggle);
        }
      });
    },


    /**
     * @method removeListeners
     * @private
     */
    removeListeners: function removeListeners() {
      var _this2 = this;

      try {
        var target = this.get('triggerTargetElement');
        this.get('_triggerEvents').forEach(function (event) {
          if (Ember.isArray(event)) {
            var _event2 = _slicedToArray(event, 2),
                inEvent = _event2[0],
                outEvent = _event2[1];

            target.removeEventListener(inEvent, _this2._handleEnter);
            target.removeEventListener(outEvent, _this2._handleLeave);
          } else {
            target.removeEventListener(event, _this2._handleToggle);
          }
        });
      } catch (e) {} // eslint-disable-line no-empty
    },
    init: function init() {
      this._super.apply(this, arguments);
      this._handleEnter = Ember.run.bind(this, this.enter);
      this._handleLeave = Ember.run.bind(this, this.leave);
      this._handleToggle = Ember.run.bind(this, this.toggle);
    },
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.addListeners();
      if (this.get('visible')) {
        Ember.run.next(this, this.show, true);
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.removeListeners();
    },


    _watchVisible: Ember.observer('visible', function () {
      if (this.get('visible')) {
        this.show();
      } else {
        this.hide();
      }
    })

  });
});
define('ember-bootstrap/components/base/bs-contextual-help/element', ['exports', 'ember-bootstrap/templates/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _element.default,
    tagName: '',
    ariaRole: 'tooltip',

    /**
     * @property placement
     * @type string
     * @default 'top'
     * @public
     */
    placement: 'top',

    actualPlacement: Ember.computed.reads('placement'),

    /**
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * @property showHelp
     * @type boolean
     * @default false
     * @public
     */
    showHelp: false,

    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default true
     * @public
     */
    renderInPlace: true,

    /**
     * Which element to align to
     *
     * @property popperTarget
     * @type {string|HTMLElement}
     * @public
     */
    popperTarget: null,

    /**
     * @property autoPlacement
     * @type boolean
     * @default true
     * @public
     */
    autoPlacement: true,

    /**
     * The DOM element of the viewport element.
     *
     * @property viewportElement
     * @type object
     * @public
     */
    viewportElement: null,

    /**
     * Take a padding into account for keeping the tooltip/popover within the bounds of the element given by `viewportElement`.
     *
     * @property viewportPadding
     * @type number
     * @default 0
     * @public
     */
    viewportPadding: 0,

    /**
     * @property arrowClass
     * @private
     */
    arrowClass: 'arrow',

    /**
     * @property popperClassNames
     * @type {array}
     * @private
     */
    popperClassNames: null,

    /**
     * @property popperClass
     * @type {string}
     * @private
     */
    popperClass: Ember.computed('popperClassNames.[]', 'class', function () {
      var classes = this.get('popperClassNames');
      var classProperty = this.get('class');
      if (typeof classProperty === 'string') {
        classes = classes.concat(classProperty.split(' '));
      }
      return classes.join(' ');
    }),

    /**
     * popper.js modifier config
     *
     * @property popperModifiers
     * @type {object}
     * @private
     */
    popperModifiers: Ember.computed('arrowClass', 'autoPlacement', 'viewportElement', 'viewportPadding', function () {
      var self = this;
      return {
        arrow: {
          element: '.' + this.get('arrowClass')
        },
        offset: {
          fn: function fn(data) {
            var tip = document.getElementById(self.get('id'));
            (true && !(tip) && Ember.assert('Contextual help element needs existing popper element', tip));

            // manually read margins because getBoundingClientRect includes difference

            var marginTop = parseInt(window.getComputedStyle(tip).marginTop, 10);
            var marginLeft = parseInt(window.getComputedStyle(tip).marginLeft, 10);

            // we must check for NaN for ie 8/9
            if (isNaN(marginTop) || marginTop > 0) {
              marginTop = 0;
            }
            if (isNaN(marginLeft) || marginLeft > 0) {
              marginLeft = 0;
            }

            data.offsets.popper.top += marginTop;
            data.offsets.popper.left += marginLeft;

            return window.Popper.Defaults.modifiers.offset.fn.apply(this, arguments);
          }
        },
        preventOverflow: {
          enabled: this.get('autoPlacement'),
          boundariesElement: this.get('viewportElement'),
          padding: this.get('viewportPadding')
        },
        hide: {
          enabled: this.get('autoPlacement')
        },
        flip: {
          enabled: this.get('autoPlacement')
        }
      };
    }),

    didReceiveAttrs: function didReceiveAttrs() {
      (true && !(this.get('id')) && Ember.assert('Contextual help element needs id for popper element', this.get('id')));
    },


    actions: {
      updatePlacement: function updatePlacement(popperDataObject) {
        if (this.get('actualPlacement') === popperDataObject.placement) {
          return;
        }
        this.set('actualPlacement', popperDataObject.placement);
        Ember.run.scheduleOnce('afterRender', popperDataObject.instance, popperDataObject.instance.scheduleUpdate);
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-dropdown', ['exports', 'ember-bootstrap/templates/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _bsDropdown.default,
    classNameBindings: ['containerClass'],

    /**
     * This property reflects the state of the dropdown, whether it is open or closed.
     *
     * @property isOpen
     * @default false
     * @type boolean
     * @private
     */
    isOpen: false,

    /**
     * By default clicking on an open dropdown menu will close it. Set this property to false for the menu to stay open.
     *
     * @property closeOnMenuClick
     * @default true
     * @type boolean
     * @public
     */
    closeOnMenuClick: true,

    /**
     * By default the dropdown menu will expand downwards. Set to 'up' to expand upwards.
     * BS4 also allows 'left' and 'right'
     *
     * @property direction
     * @type string
     * @default 'down'
     * @public
     */
    direction: 'down',

    /**
     * Indicates the dropdown is being used as a navigation item dropdown.
     *
     * @property inNav
     * @type boolean
     * @default false
     * @private
     */
    inNav: false,

    /**
     * A computed property to generate the suiting class for the dropdown container, either "dropdown", "dropup" or "btn-group".
     * BS4 only: "dropleft", "dropright"
     *
     * @property containerClass
     * @type string
     * @readonly
     * @private
     */
    containerClass: Ember.computed('toggle.tagName', 'direction', function () {
      if (this.get('toggle.tagName') === 'button' && !this.get('toggle.block')) {
        return this.get('direction') !== 'down' ? 'btn-group drop' + this.get('direction') : 'btn-group';
      } else {
        return 'drop' + this.get('direction');
      }
    }),

    /**
     * @property menuElement
     * @private
     */
    menuElement: Ember.computed(function () {
      return this.get('element').querySelector('.dropdown-menu');
    }).volatile(),

    /**
     * @property toggleElement
     * @private
     */
    toggleElement: Ember.computed('toggle', function () {
      return typeof FastBoot === 'undefined' ? this.get('toggle.element') || null : null;
    }),

    /**
     * Reference to the child toggle (Toggle or Button)
     *
     * @property toggle
     * @private
     */
    toggle: null,

    /**
     * Action is called when dropdown is about to be shown
     *
     * @event onShow
     * @param {*} value
     * @public
     */
    onShow: function onShow(value) {},
    // eslint-disable-line no-unused-vars

    /**
     * Action is called when dropdown is about to be hidden
     *
     * @event onHide
     * @param {*} value
     * @public
     */
    onHide: function onHide(value) {},
    // eslint-disable-line no-unused-vars

    actions: {
      toggleDropdown: function toggleDropdown() {
        if (this.get('isOpen')) {
          this.send('closeDropdown');
        } else {
          this.send('openDropdown');
        }
      },
      openDropdown: function openDropdown() {
        this.set('isOpen', true);
        this.addClickListener();
        this.get('onShow')();
      },
      closeDropdown: function closeDropdown() {
        this.set('isOpen', false);
        this.removeClickListener();
        this.get('onHide')();
      }
    },

    addClickListener: function addClickListener() {
      if (!this.clickListener) {
        this.clickListener = Ember.run.bind(this, this.closeOnClickHandler);
        document.addEventListener('click', this.clickListener, true);
      }
    },
    removeClickListener: function removeClickListener() {
      if (this.clickListener) {
        document.removeEventListener('click', this.clickListener, true);
        this.clickListener = null;
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.removeClickListener();
    },


    /**
     * Handler for click events to close the dropdown
     *
     * @method closeOnClickHandler
     * @param e
     * @protected
     */
    closeOnClickHandler: function closeOnClickHandler(e) {
      var target = e.target;

      var _getProperties = this.getProperties('toggleElement', 'menuElement'),
          toggleElement = _getProperties.toggleElement,
          menuElement = _getProperties.menuElement;

      if (!this.get('isDestroyed') && toggleElement && !toggleElement.contains(target) && (menuElement && !menuElement.contains(target) || this.get('closeOnMenuClick'))) {
        this.send('closeDropdown');
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-button', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _bsButton, _dropdownToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButton.default.extend(_dropdownToggle.default);
});
define('ember-bootstrap/components/base/bs-dropdown/menu', ['exports', 'ember-bootstrap/templates/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _menu.default,

    /**
     * Defaults to a `<ul>` tag in BS3 and a '<div>' tag in BS4. Change for other types of dropdown menus.
     *
     * @property tagName
     * @type string
     * @default ul
     * @public
     */

    /**
     * @property ariaRole
     * @default menu
     * @type string
     * @protected
     */
    ariaRole: 'menu',

    /**
     * Alignment of the menu, either "left" or "right"
     *
     * @property align
     * @type string
     * @default left
     * @public
     */
    align: 'left',

    /**
     * @property direction
     * @default 'down'
     * @type string
     * @private
     */
    direction: 'down',

    /**
     * @property inNav
     * @type {boolean}
     * @private
     */
    inNav: false,

    /**
     * Applies only to BS4: by default the menu is rendered in the same place the dropdown. If you experience clipping
     * issues, you can set this to false to render the menu in a wormhole at the top of the DOM.
     *
     * @property renderInPlace
     * @type boolean
     * @default true
     * @public
     */
    renderInPlace: true,

    alignClass: Ember.computed('align', function () {
      if (this.get('align') !== 'left') {
        return 'dropdown-menu-' + this.get('align');
      }
    })
  });
});
define('ember-bootstrap/components/base/bs-dropdown/menu/divider', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('ember-bootstrap/components/base/bs-dropdown/menu/item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('ember-bootstrap/components/base/bs-dropdown/menu/link-to', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.LinkComponent.extend({});
});
define('ember-bootstrap/components/base/bs-dropdown/toggle', ['exports', 'ember-bootstrap/mixins/dropdown-toggle'], function (exports, _dropdownToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_dropdownToggle.default, {
    /**
     * Defaults to a `<a>` tag. Change for other types of dropdown toggles.
     *
     * @property tagName
     * @type string
     * @default a
     * @public
     */
    tagName: 'a',

    attributeBindings: ['href'],

    /**
     * @property inNav
     * @type {boolean}
     * @private
     */
    inNav: false,

    /**
     * Computed property to generate a `href="#"` attribute when `tagName` is "a".
     *
     * @property href
     * @type string
     * @readonly
     * @private
     */
    href: Ember.computed('tagName', function () {
      if (this.get('tagName').toUpperCase() === 'A') {
        return '#';
      }
    }),

    /**
     * When clicking the toggle this action is called.
     *
     * @event onClick
     * @param {*} value
     * @public
     */
    onClick: function onClick() {},
    click: function click(e) {
      e.preventDefault();
      this.get('onClick')();
    }
  });
});
define('ember-bootstrap/components/base/bs-form', ['exports', 'ember-bootstrap/templates/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _bsForm.default,
    tagName: 'form',
    classNameBindings: ['layoutClass'],
    attributeBindings: ['_novalidate:novalidate'],
    ariaRole: 'form',

    /**
     * Bootstrap form class name (computed)
     *
     * @property layoutClass
     * @type string
     * @readonly
     * @protected
     *
     */

    /**
     * Set a model that this form should represent. This serves several purposes:
     *
     * * child `Components.FormElement`s can access and bind to this model by their `property`
     * * when the model supports validation by using the [ember-validations](https://github.com/dockyard/ember-validations) mixin,
     * child `Components.FormElement`s will look at the validation information of their `property` and render their form group accordingly.
     * Moreover the form's `submit` event handler will validate the model and deny submitting if the model is not validated successfully.
     *
     * @property model
     * @type Ember.Object
     * @public
     */
    model: null,

    /**
     * Set the layout of the form to either "vertical", "horizontal" or "inline". See http://getbootstrap.com/css/#forms-inline and http://getbootstrap.com/css/#forms-horizontal
     *
     * @property formLayout
     * @type string
     * @public
     */
    formLayout: 'vertical',

    /**
     * Check if validating the model is supported. This needs to be implemented by another addon.
     *
     * @property hasValidator
     * @type boolean
     * @readonly
     * @protected
     */
    hasValidator: false,

    /**
     * The Bootstrap grid class for form labels. This is used by the `Components.FormElement` class as a default for the
     * whole form.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @default 'col-md-4'
     * @public
     */
    horizontalLabelGridClass: 'col-md-4',

    /**
     * If set to true pressing enter will submit the form, even if no submit button is present
     *
     * @property submitOnEnter
     * @type boolean
     * @default false
     * @public
     */
    submitOnEnter: false,

    /**
     * If set to true novalidate attribute is present on form element
     *
     * @property novalidate
     * @type boolean
     * @default null
     * @public
     */
    novalidate: false,

    _novalidate: Ember.computed('novalidate', function () {
      return this.get('novalidate') === true ? '' : undefined;
    }),

    /**
     * Validate hook which will return a promise that will either resolve if the model is valid
     * or reject if it's not. This should be overridden to add validation support.
     *
     * @method validate
     * @param {Object} model
     * @return {Promise}
     * @public
     */
    validate: function validate(model) {},
    // eslint-disable-line no-unused-vars

    /**
     * @property showAllValidations
     * @type boolean
     * @default false
     * @private
     */
    showAllValidations: false,

    /**
     * Action is called before the form is validated (if possible) and submitted.
     *
     * @event onBefore
     * @param { Object } model  The form's `model`
     * @public
     */
    onBefore: function onBefore(model) {},
    // eslint-disable-line no-unused-vars

    /**
     * Action is called when submit has been triggered and the model has passed all validations (if present).
     *
     * @event onSubmit
     * @param { Object } model  The form's `model`
     * @param { Object } result The returned result from the validate method, if validation is available
     * @public
     */
    onSubmit: function onSubmit(model, result) {},
    // eslint-disable-line no-unused-vars

    /**
     * Action is called when validation of the model has failed.
     *
     * @event onInvalid
     * @param { Object } model  The form's `model`
     * @param { Object } error
     * @public
     */
    onInvalid: function onInvalid(model, error) {},
    // eslint-disable-line no-unused-vars

    /**
     * Submit handler that will send the default action ("action") to the controller when submitting the form.
     *
     * If there is a supplied `model` that supports validation (`hasValidator`) the model will be validated before, and
     * only if validation is successful the default action will be sent. Otherwise an "invalid" action will be sent, and
     * all the `showValidation` property of all child `Components.FormElement`s will be set to true, so error state and
     * messages will be shown automatically.
     *
     * @method submit
     * @private
     */
    submit: function submit(e) {
      var _this = this;

      if (e) {
        e.preventDefault();
      }
      var model = this.get('model');

      this.get('onBefore')(model);

      if (!this.get('hasValidator')) {
        return this.get('onSubmit')(model);
      } else {
        var validationPromise = this.validate(this.get('model'));
        if (validationPromise && validationPromise instanceof Ember.RSVP.Promise) {
          validationPromise.then(function (r) {
            return _this.get('onSubmit')(model, r);
          }).catch(function (err) {
            _this.set('showAllValidations', true);
            return _this.get('onInvalid')(model, err);
          });
        }
      }
    },
    keyPress: function keyPress(e) {
      var code = e.keyCode || e.which;
      if (code === 13 && this.get('submitOnEnter')) {
        this.triggerSubmit();
      }
    },
    triggerSubmit: function triggerSubmit() {
      var event = document.createEvent('Event');
      event.initEvent('submit', true, true);
      this.get('element').dispatchEvent(event);
    },


    actions: {
      change: function change(value, model, property) {
        (true && !(Ember.isPresent(model) && Ember.isPresent(property)) && Ember.assert('You cannot use the form element\'s default onChange action for form elements if not using a model or setting the value directly on a form element. You must add your own onChange action to the form element in this case!', Ember.isPresent(model) && Ember.isPresent(property)));

        Ember.set(model, property, value);
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element', ['exports', 'ember-bootstrap/templates/components/bs-form/element', 'ember-bootstrap/components/bs-form/group'], function (exports, _element, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var nonDefaultLayouts = Ember.A(['checkbox']);

  /**
   Sub class of `Components.FormGroup` that adds automatic form layout markup and form validation features.
  
   ### Form layout
  
   The appropriate Bootstrap markup for the given `formLayout` and `controlType` is automatically generated to easily
   create forms without coding the default Bootstrap form markup by hand:
  
   ```hbs
   {{#bs-form formLayout="horizontal" onSubmit=(action "submit") as |form|}}
   {{form.element controlType="email" label="Email" placeholder="Email" value=email}}
   {{form.element controlType="password" label="Password" placeholder="Password" value=password}}
   {{form.element controlType="checkbox" label="Remember me" value=rememberMe}}
   {{bs-button defaultText="Submit" type="primary" buttonType="submit"}}
   {{/bs-form}}
   ```
  
   ### Form validation
  
   In the following example the control elements of the three form elements value will be bound to the properties
   (given by `property`) of the form's `model`, which in this case is its controller (see `model=this`):
  
   ```hbs
   {{#bs-form formLayout="horizontal" model=this onSubmit=(action "submit") as |form|}}
   {{form.element controlType="email" label="Email" placeholder="Email" property="email"}}
   {{form.element controlType="password" label="Password" placeholder="Password" property="password"}}
   {{form.element controlType="checkbox" label="Remember me" property="rememberMe"}}
   {{bs-button defaultText="Submit" type="primary" buttonType="submit"}}
   {{/bs-form}}
   ```
  
   By using this indirection in comparison to directly binding the `value` property, you get the benefit of automatic
   form validation, given that your `model` has a supported means of validating itself.
   See [Components.Form](Components.Form.html) for details on how to enable form validation.
  
   In the example above the `model` was our controller itself, so the control elements were bound to the appropriate
   properties of our controller. A controller implementing validations on those properties could look like this:
  
   ```js
   import Ember from 'ember';
   import EmberValidations from 'ember-validations';
  
   export default Ember.Controller.extend(EmberValidations,{
     email: null,
     password: null,
     rememberMe: false,
     validations: {
       email: {
         presence: true,
         format: {
           with: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
         }
       },
       password: {
         presence: true,
         length: { minimum: 6, maximum: 10}
       },
       comments: {
         length: { minimum: 5, maximum: 20}
       }
     }
   });
   ```
  
   If the `showValidation` property is `true` (which is automatically the case if a `focusOut` event is captured from the
   control element or the containing `Components.Form` was submitted with its `model` failing validation) and there are
   validation errors for the `model`'s `property`, the appropriate Bootstrap validation markup (see
   http://getbootstrap.com/css/#forms-control-validation) is applied:
  
   * `validation` is set to 'error', which will set the `has-error` CSS class
   * the `errorIcon` feedback icon is displayed if `controlType` is a text field
   * the validation messages are displayed as Bootstrap `help-block`s in BS3 and `form-control-feedback` in BS4
  
   The same applies for warning messages, if the used validation library supports this. (Currently only
   [ember-cp-validations](https://github.com/offirgolan/ember-cp-validations))
  
   As soon as the validation is successful again...
  
   * `validation` is set to 'success', which will set the `has-success` CSS class
   * the `successIcon` feedback icon is displayed if `controlType` is a text field
   * the validation messages are removed
  
   In case you want to display some error or warning message that is independent of the model's validation, for
   example to display a failure message on a login form after a failed authentication attempt (so not coming from
   the validation library), you can use the `customError` or `customWarning` properties to do so.
  
   ### Custom controls
  
   Apart from the standard built-in browser controls (see the `controlType` property), you can use any custom control simply
   by invoking the component with a block template. Use whatever control you might want, for example a select-2 component
   (from the [ember-select-2 addon](https://istefo.github.io/ember-select-2)):
  
   ```hbs
   {{#bs-form model=this onSubmit=(action "submit") as |form|}}
     {{#form.element label="Select-2" property="gender" useIcons=false as |el|}}
       {{select-2 id=el.id content=genderChoices optionLabelPath="label" value=el.value searchEnabled=false}}
     {{/form.element}}
   {{/bs-form}}
   ```
  
   The component yields a hash with the following properties:
   * `control`: the component that would be used for rendering the form control based on the given `controlType`
   * `id`: id to be used for the form control, so it matches the labels `for` attribute
   * `value`: the value of the form element
   * `validation`: the validation state of the element, `null` if no validation is to be shown, otherwise 'success', 'error' or 'warning'
  
   If your custom control does not render an input element, you should set `useIcons` to `false` since bootstrap only supports
   feedback icons with textual `<input class="form-control">` elements.
  
   If you just want to customize the existing control component, you can use the aforementioned yielded `control` component
   to customize that existing component:
  
   ```hbs
   {{#bs-form model=this onSubmit=(action "submit") as |form|}}
     {{#form.element label="Email" placeholder="Email" property="email" as |el|}}
       {{el.control class="input-lg"}}
     {{/form.element}}
   {{/bs-form}}
   ```
  
   ### HTML attributes
  
   To set HTML attributes on the control element provided by this component, set them as properties of this component:
  
   ```hbs
   {{#bs-form formLayout="horizontal" model=this onSubmit=(action "submit") as |form|}}
   {{form.element controlType="email" label="Email" property="email"
     placeholder="Email"
     required=true
     multiple=true
     tabIndex=5
   }}
   ...
   {{/bs-form}}
   ```
  
   The following attributes are supported depending on the `controlType`:
  
   <table class="table table-striped">
   <thead>
   <tr>
   <th></th>
   <th>textarea</th>
   <th>checkbox</th>
   <th>all others</th>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td>accept</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>autocomplete</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>autofocus</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>autosave</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>cols</td>
   <td>✔︎</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td>disabled</td>
   <td></td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>form</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>inputmode</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>max</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>maxlength</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>min</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>minlength</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>multiple</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>name</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>pattern</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>placeholder</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>readonly</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>required</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>rows</td>
   <td>✔︎</td>
   <td></td>
   <td></td>
   </tr>
   <tr>
   <td>size<br>via <code>controlSize</code> property</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>spellcheck</td>
   <td>✔︎</td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>step</td>
   <td></td>
   <td></td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>tabindex</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>title</td>
   <td>✔︎</td>
   <td>✔︎</td>
   <td>✔︎</td>
   </tr>
   <tr>
   <td>wrap</td>
   <td>✔︎</td>
   <td></td>
   <td></td>
   </tr>
   </tbody>
   </table>
  
   @class FormElement
   @namespace Components
   @extends Components.FormGroup
   @public
   */
  exports.default = _group.default.extend({
    layout: _element.default,
    classNameBindings: ['disabled:disabled', 'required:is-required', 'isValidating'],

    /**
     * Text to display within a `<label>` tag.
     *
     * You should include a label for every form input cause otherwise screen readers
     * will have trouble with your forms. Use `invisibleLabel` property if you want
     * to hide them.
     *
     * @property label
     * @type string
     * @public
     */
    label: null,

    /**
     * Controls label visibility by adding 'sr-only' class.
     *
     * @property invisibleLabel
     * @type boolean
     * @default false
     * @public
     */
    invisibleLabel: false,

    /**
     * @property hasLabel
     * @type boolean
     * @readonly
     * @private
     */
    hasLabel: Ember.computed.notEmpty('label'),

    /**
     * The type of the control widget.
     * Supported types:
     *
     * * 'text'
     * * 'checkbox'
     * * 'textarea'
     * * any other type will use an input tag with the `controlType` value as the type attribute (for e.g. HTML5 input
     * types like 'email'), and the same layout as the 'text' type
     *
     * @property controlType
     * @type string
     * @default 'text'
     * @public
     */
    controlType: 'text',

    /**
     * The value of the control element is bound to this property. You can bind it to some controller property to
     * get/set the control element's value:
     *
     * ```hbs
     * {{form.element controlType="email" label="Email" placeholder="Email" value=email}}
     * ```
     *
     * Note: you lose the ability to validate this form element by directly binding to its value. It is recommended
     * to use the `property` feature instead.
     *
     *
     * @property value
     * @public
     */
    value: null,

    /**
     The property name of the form element's `model` (by default the `model` of its parent `Components.Form`) that this
     form element should represent. The control element's value will automatically be bound to the model property's
     value.
      Using this property enables form validation on this element.
      @property property
     @type string
     @public
     */
    property: null,

    /**
     * The model used for validation. Defaults to the parent `Components.Form`'s `model`
     *
     * @property model
     * @public
     */
    model: null,

    /**
     * Show a help text next to the control
     *
     * @property helpText
     * @type {string}
     * @public
     */
    helpText: null,

    /**
     * Only if there is a validator, this property makes all errors to be displayed at once
     * inside a scrollable container.
     *
     * @default false
     * @property showMultipleErrors
     * @public
     * @type {Boolean}
     */
    showMultipleErrors: false,

    /**
     * @property hasHelpText
     * @type boolean
     * @readonly
     * @private
     */
    hasHelpText: Ember.computed.notEmpty('helpText').readOnly(),

    /**
     * The array of error messages from the `model`'s validation.
     *
     * @property errors
     * @type array
     * @protected
     */
    errors: null,

    /**
     * @property hasErrors
     * @type boolean
     * @readonly
     * @private
     */
    hasErrors: Ember.computed.gt('errors.length', 0),

    /**
     * The array of warning messages from the `model`'s validation.
     *
     * @property errors
     * @type array
     * @protected
     */
    warnings: null,

    /**
     * @property hasWarnings
     * @type boolean
     * @readonly
     * @private
     */
    hasWarnings: Ember.computed.gt('warnings.length', 0),

    /**
     * Show a custom error message that does not come from the model's validation. Will be immediately shown, regardless
     * of any user interaction (i.e. no `focusOut` event required)
     *
     * @property customError
     * @type string
     * @public
     */
    customError: null,

    /**
     * @property hasCustomError
     * @type boolean
     * @readonly
     * @private
     */
    hasCustomError: Ember.computed.notEmpty('customError'),

    /**
     * Show a custom warning message that does not come from the model's validation. Will be immediately shown, regardless
     * of any user interaction (i.e. no `focusOut` event required). If the model's validation has an error then the error
     * will be shown in place of this warning.
     *
     * @property customWarning
     * @type string
     * @public
     */
    customWarning: null,

    /**
     * @property hasCustomWarning
     * @type boolean
     * @readonly
     * @private
     */
    hasCustomWarning: Ember.computed.notEmpty('customWarning'),

    /**
     * Property for size styling, set to 'lg', 'sm' or 'xs' (the latter only for BS3)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * The array of validation messages (either errors or warnings) from either custom error/warnings or , if we are showing model validation messages, the model's validation
     *
     * @property validationMessages
     * @type array
     * @private
     */
    validationMessages: Ember.computed('hasCustomError', 'customError', 'hasErrors', 'hasCustomWarning', 'customWarning', 'hasWarnings', 'errors.[]', 'warnings.[]', 'showModelValidation', function () {
      if (this.get('hasCustomError')) {
        return Ember.A([this.get('customError')]);
      }
      if (this.get('hasErrors') && this.get('showModelValidation')) {
        return Ember.A(this.get('errors'));
      }
      if (this.get('hasCustomWarning')) {
        return Ember.A([this.get('customWarning')]);
      }
      if (this.get('hasWarnings') && this.get('showModelValidation')) {
        return Ember.A(this.get('warnings'));
      }
      return null;
    }),

    /**
     * @property hasValidationMessages
     * @type boolean
     * @readonly
     * @private
     */
    hasValidationMessages: Ember.computed.gt('validationMessages.length', 0),

    /**
     * @property hasValidator
     * @type boolean
     * @default false
     * @protected
     */
    hasValidator: false,

    /**
     * Set a validating state for async validations
     *
     * @property isValidating
     * @type boolean
     * @default false
     * @protected
     */
    isValidating: false,

    /**
     * If `true` form validation markup is rendered (requires a validatable `model`).
     *
     * @property showValidation
     * @type boolean
     * @default false
     * @private
     */
    showValidation: Ember.computed.or('showOwnValidation', 'showAllValidations', 'hasCustomError', 'hasCustomWarning'),

    /**
     * @property showOwnValidation
     * @type boolean
     * @default false
     * @private
     */
    showOwnValidation: false,

    /**
     * @property showAllValidations
     * @type boolean
     * @default false
     * @private
     */
    showAllValidations: false,

    /**
     * @property showModelValidations
     * @type boolean
     * @readonly
     * @private
     */
    showModelValidation: Ember.computed.or('showOwnValidation', 'showAllValidations'),

    /**
     * @property showValidationMessages
     * @type boolean
     * @readonly
     * @private
     */
    showValidationMessages: Ember.computed.and('showValidation', 'hasValidationMessages'),

    /**
     * Event or list of events which enable form validation markup rendering.
     * Supported events: ['focusOut', 'change', 'input']
     *
     * @property showValidationOn
     * @type string|array
     * @default ['focusOut']
     * @public
     */
    showValidationOn: null,

    /**
     * @property _showValidationOn
     * @type array
     * @readonly
     * @private
     */
    _showValidationOn: Ember.computed('showValidationOn.[]', function () {
      var showValidationOn = this.get('showValidationOn');

      (true && !(Ember.isArray(showValidationOn) || Ember.typeOf(showValidationOn) === 'string') && Ember.assert('showValidationOn must be a String or an Array', Ember.isArray(showValidationOn) || Ember.typeOf(showValidationOn) === 'string'));

      if (Ember.isArray(showValidationOn)) {
        return showValidationOn;
      }

      if (typeof showValidationOn.toString === 'function') {
        return [showValidationOn];
      }
      return [];
    }),

    /**
     * @method showValidationOnHandler
     * @private
     */
    showValidationOnHandler: function showValidationOnHandler(event) {
      if (this.get('_showValidationOn').indexOf(event) !== -1) {
        this.set('showOwnValidation', true);
      }
    },


    /**
     * The validation ("error" (BS3)/"danger" (BS4), "warning", or "success") or null if no validation is to be shown. Automatically computed from the
     * models validation state.
     *
     * @property validation
     * @readonly
     * @type string
     * @private
     */
    validation: Ember.computed('hasCustomError', 'hasErrors', 'hasCustomWarning', 'hasWarnings', 'hasValidator', 'showValidation', 'showModelValidation', 'isValidating', 'disabled', function () {
      if (!this.get('showValidation') || !this.get('hasValidator') || this.get('isValidating') || this.get('disabled')) {
        return null;
      } else if (this.get('showModelValidation')) {
        /* The display of model validation messages has been triggered */
        return this.get('hasErrors') || this.get('hasCustomError') ? 'error' : this.get('hasWarnings') || this.get('hasCustomWarning') ? 'warning' : 'success';
      } else {
        /* If there are custom errors or warnings these should always be shown */
        return this.get('hasCustomError') ? 'error' : 'warning';
      }
    }),

    /**
     * True for text field `controlType`s
     *
     * @property useIcons
     * @type boolean
     * @readonly
     * @public
     */
    useIcons: Ember.computed.equal('controlComponent', 'bs-form/element/control/input'),

    /**
     * The form layout used for the markup generation (see http://getbootstrap.com/css/#forms):
     *
     * * 'horizontal'
     * * 'vertical'
     * * 'inline'
     *
     * Defaults to the parent `form`'s `formLayout` property.
     *
     * @property formLayout
     * @type string
     * @default 'vertical'
     * @public
     */
    formLayout: 'vertical',

    /**
     * The Bootstrap grid class for form labels within a horizontal layout form. Defaults to the value of the same
     * property of the parent form. The corresponding grid class for form controls is automatically computed.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @public
     */
    horizontalLabelGridClass: null,

    /**
     * ID for input field and the corresponding label's "for" attribute
     *
     * @property formElementId
     * @type string
     * @private
     */
    formElementId: Ember.computed('elementId', function () {
      return this.get('elementId') + '-field';
    }),

    /**
     * ID of the helpText, used for aria-describedby attribute of the control element
     *
     * @property ariaDescribedBy
     * @type string
     * @private
     */
    ariaDescribedBy: Ember.computed('elementId', function () {
      return this.get('elementId') + '-help';
    }),

    /**
     * @property layoutComponent
     * @type {String}
     * @private
     */
    layoutComponent: Ember.computed('formLayout', 'controlType', function () {
      var formLayout = this.get('formLayout');
      var controlType = this.get('controlType');

      if (nonDefaultLayouts.includes(controlType)) {
        return 'bs-form/element/layout/' + formLayout + '/' + controlType;
      } else {
        return 'bs-form/element/layout/' + formLayout;
      }
    }),

    /**
     * @property controlComponent
     * @type {String}
     * @private
     */
    controlComponent: Ember.computed('controlType', function () {
      var controlType = this.get('controlType');
      var componentName = 'bs-form/element/control/' + controlType;

      if (Ember.getOwner(this).hasRegistration('component:' + componentName)) {
        return componentName;
      }

      return 'bs-form/element/control/input';
    }),

    /**
     * @property errorsComponent
     * @type {String}
     * @private
     */
    errorsComponent: 'bs-form/element/errors',

    /**
     * @property feedbackIconComponent
     * @type {String}
     * @private
     */
    feedbackIconComponent: 'bs-form/element/feedback-icon',

    /**
     * @property labelComponent
     * @type {String}
     * @private
     */
    labelComponent: 'bs-form/element/label',

    /**
     * @property helpTextComponent
     * @type {String}
     * @private
     */
    helpTextComponent: 'bs-form/element/help-text',

    /**
     * Setup validation properties. This method acts as a hook for external validation
     * libraries to overwrite. In case of failed validations the `errors` property should contain an array of error messages.
     *
     * @method setupValidations
     * @private
     */
    setupValidations: function setupValidations() {},


    /**
     * Listen for focusOut events from the control element to automatically set `showOwnValidation` to true to enable
     * form validation markup rendering if `showValidationsOn` contains `focusOut`.
     *
     * @event focusOut
     * @private
     */
    focusOut: function focusOut() {
      this.showValidationOnHandler('focusOut');
    },


    /**
     * Listen for change events from the control element to automatically set `showOwnValidation` to true to enable
     * form validation markup rendering if `showValidationsOn` contains `change`.
     *
     * @event change
     * @private
     */
    change: function change() {
      this.showValidationOnHandler('change');
    },


    /**
     * Listen for input events from the control element to automatically set `showOwnValidation` to true to enable
     * form validation markup rendering if `showValidationsOn` contains `input`.
     *
     * @event input
     * @private
     */
    input: function input() {
      this.showValidationOnHandler('input');
    },


    /**
     * The action is called whenever the input value is changed, e.g. by typing text
     *
     * @event onChange
     * @param {String} value The new value of the form control
     * @param {Object} model The form element's model
     * @param {String} property The value of `property`
     * @public
     */
    onChange: function onChange() {},
    init: function init() {
      this._super.apply(this, arguments);
      if (this.get('showValidationOn') === null) {
        this.set('showValidationOn', ['focusOut']);
      }
      if (!Ember.isBlank(this.get('property'))) {
        Ember.defineProperty(this, 'value', Ember.computed.alias('model.' + this.get('property')));
        this.setupValidations();
      }
    },


    /*
     * adjust feedback icon position
     *
     * Bootstrap documentation:
     *  Manual positioning of feedback icons is required for [...] input groups
     *  with an add-on on the right. [...] For input groups, adjust the right
     *  value to an appropriate pixel value depending on the width of your addon.
     */
    adjustFeedbackIcons: Ember.observer('hasFeedback', 'formLayout', function () {
      var _this = this;

      Ember.run.scheduleOnce('afterRender', function () {
        var el = _this.get('element');
        var feedbackIcon = void 0;
        // validation state icons are only shown if form element has feedback
        if (_this.get('hasFeedback') && !_this.get('isDestroying')
        // and form group element has
        // an input-group
        && el.querySelector('.input-group')
        // an addon or button on right side
        && el.querySelector('.input-group input + .input-group-addon, .input-group input + .input-group-btn')
        // an icon showing validation state
        && (feedbackIcon = el.querySelector('.form-control-feedback'))) {
          // clear existing adjustment
          feedbackIcon.style.right = '';

          var defaultPosition = 0;
          var match = getComputedStyle(feedbackIcon).right.match(/^(\d+)px$/);
          if (match) {
            defaultPosition = parseInt(match[1]);
          }
          // Bootstrap documentation:
          //  We do not support multiple add-ons (.input-group-addon or .input-group-btn) on a single side.
          // therefore we could rely on having only one input-group-addon or input-group-btn
          var inputGroupWidth = el.querySelector('input + .input-group-addon, input + .input-group-btn').offsetWidth;
          var adjustedPosition = defaultPosition + inputGroupWidth;

          feedbackIcon.style.right = adjustedPosition + 'px';
        }
      });
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.adjustFeedbackIcons();
    },


    actions: {
      change: function change(value) {
        var _getProperties = this.getProperties('onChange', 'model', 'property'),
            onChange = _getProperties.onChange,
            model = _getProperties.model,
            property = _getProperties.property;

        onChange(value, model, property);
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/control', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    /**
     * @property value
     * @public
     */
    value: null,

    /**
     * @property ariaDescribedBy
     * @type {string}
     * @public
     */
    ariaDescribedBy: null,

    /**
     * This action is called whenever the `value` changes
     *
     * @event onChange
     * @param {*} value
     * @public
     */
    onChange: function onChange() {}
  });
});
define('ember-bootstrap/components/base/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _control, _controlAttributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _control.default.extend(_controlAttributes.default, {
    attributeBindings: ['value:checked', 'type'],

    /**
     * @property type
     * @type {String}
     * @readonly
     * @private
     */
    type: 'checkbox',

    click: function click(event) {
      this.get('onChange')(event.target.checked);
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _control, _controlAttributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _control.default.extend(_controlAttributes.default, {
    attributeBindings: ['value', 'type', 'placeholder', 'controlSize:size', 'minlength', 'maxlength', 'min', 'max', 'pattern', 'accept', 'autocomplete', 'autosave', 'inputmode', 'multiple', 'step', 'spellcheck'],
    classNames: ['form-control'],

    /**
     * @property type
     * @type {String}
     * @public
     */
    type: 'text',

    change: function change(event) {
      this.get('onChange')(event.target.value);
    },
    input: function input(event) {
      this.get('onChange')(event.target.value);
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/base/bs-form/element/control', 'ember-bootstrap/mixins/control-attributes'], function (exports, _control, _controlAttributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _control.default.extend(_controlAttributes.default, {
    attributeBindings: ['value', 'placeholder', 'minlength', 'maxlength', 'autocomplete', 'spellcheck', 'rows', 'cols', 'wrap'],
    tagName: 'textarea',
    classNames: ['form-control'],

    change: function change(event) {
      this.get('onChange')(event.target.value);
    },
    input: function input(event) {
      this.get('onChange')(event.target.value);
    }
  });
});
define('ember-bootstrap/components/base/bs-form/element/errors', ['exports', 'ember-bootstrap/templates/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _errors.default,
    tagName: '',

    /**
     * @property show
     * @type {Boolean}
     * @public
     */
    show: false,

    /**
     * @property messages
     * @type {Ember.Array}
     * @public
     */
    messages: null,

    /**
     * Whether or not should display several errors at the same time.
     *
     * @default false
     * @property showMultipleErrors
     * @public
     * @type {Boolean}
     */
    showMultipleErrors: false
  });
});
define('ember-bootstrap/components/base/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/templates/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _feedbackIcon.default,
    tagName: '',

    /**
     * @property show
     * @type {Boolean}
     * @public
     */
    show: false,

    /**
     * @property iconName
     * @type {String}
     * @public
     */
    iconName: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/help-text', ['exports', 'ember-bootstrap/templates/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _helpText.default,

    /**
     * @property text
     * @type {string}
     * @public
     */
    text: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/label', ['exports', 'ember-bootstrap/templates/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _label.default,
    tagName: '',

    /**
     * @property label
     * @type string
     * @public
     */
    label: null,

    /**
     * @property invisibleLabel
     * @type boolean
     * @public
     */
    invisibleLabel: false,

    /**
     * @property formElementId
     * @type {String}
     * @public
     */
    formElementId: null,

    /**
     * @property labelClass
     * @type {String}
     * @public
     */
    labelClass: null,

    /**
     * The form layout used for the markup generation (see http://getbootstrap.com/css/#forms):
     *
     * * 'horizontal'
     * * 'vertical'
     * * 'inline'
     *
     * Defaults to the parent `form`'s `formLayout` property.
     *
     * @property formLayout
     * @type string
     * @default 'vertical'
     * @public
     */
    formLayout: 'vertical',

    /**
     * The type of the control widget.
     * Supported types:
     *
     * * 'text'
     * * 'checkbox'
     * * 'textarea'
     * * any other type will use an input tag with the `controlType` value as the type attribute (for e.g. HTML5 input
     * types like 'email'), and the same layout as the 'text' type
     *
     * @property controlType
     * @type string
     * @default 'text'
     * @public
     */
    controlType: 'text',

    /**
     * Indicates whether the type of the control widget equals `checkbox`
     *
     * @property isCheckbox
     * @type boolean
     * @private
     */
    isCheckbox: Ember.computed.equal('controlType', 'checkbox').readOnly(),

    /**
     * Indicates whether the form type equals `horizontal`
     *
     * @property isHorizontal
     * @type boolean
     * @private
     */
    isHorizontal: Ember.computed.equal('formLayout', 'horizontal').readOnly()
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',

    /**
     * @property formElementId
     * @type {String}
     * @public
     */
    formElementId: null,

    /**
     * @property hasLabel
     * @type boolean
     * @public
     */
    hasLabel: true,

    /**
     * @property errorsComponent
     * @type {Ember.Component}
     * @public
     */
    errorsComponent: null,

    /**
     * @property feedbackIconComponent
     * @type {Ember.Component}
     * @public
     */
    feedbackIconComponent: null,

    /**
     * @property labelComponent
     * @type {Ember.Component}
     * @public
     */
    labelComponent: null,

    /**
     * @property helpTextComponent
     * @type {Ember.Component}
     * @public
     */
    helpTextComponent: null
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout', 'ember-bootstrap/templates/components/bs-form/element/layout/horizontal'], function (exports, _layout, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    layout: _horizontal.default,

    /**
     * The Bootstrap grid class for form labels within a horizontal layout form.
     *
     * @property horizontalLabelGridClass
     * @type string
     * @public
     */
    horizontalLabelGridClass: null,

    /**
     * Computed property that specifies the Bootstrap grid class for form controls within a horizontal layout form.
     *
     * @property horizontalInputGridClass
     * @type string
     * @readonly
     * @private
     */
    horizontalInputGridClass: Ember.computed('horizontalLabelGridClass', function () {
      if (Ember.isBlank(this.get('horizontalLabelGridClass'))) {
        return;
      }
      var parts = this.get('horizontalLabelGridClass').split('-');
      (true && !(parts.length === 3) && Ember.assert('horizontalInputGridClass must match format bootstrap grid column class', parts.length === 3));

      parts[2] = 12 - parts[2];
      return parts.join('-');
    }).readOnly(),

    /**
     * Computed property that specifies the Bootstrap offset grid class for form controls within a horizontal layout
     * form, that have no label.
     *
     * @property horizontalInputOffsetGridClass
     * @type string
     * @readonly
     * @private
     */
    horizontalInputOffsetGridClass: Ember.computed('horizontalLabelGridClass', function () {
      if (Ember.isBlank(this.get('horizontalLabelGridClass'))) {
        return;
      }
      var parts = this.get('horizontalLabelGridClass').split('-');
      parts.splice(2, 0, 'offset');
      return parts.join('-');
    })

  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/horizontal', 'ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _horizontal, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _horizontal.default.extend({
    layout: _checkbox.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical'], function (exports, _layout, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    layout: _vertical.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/inline', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox'], function (exports, _inline, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _inline.default.extend({
    layout: _checkbox.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical'], function (exports, _layout, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _layout.default.extend({
    layout: _vertical.default
  });
});
define('ember-bootstrap/components/base/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/vertical', 'ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox'], function (exports, _vertical, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _vertical.default.extend({
    layout: _checkbox.default
  });
});
define('ember-bootstrap/components/base/bs-form/group', ['exports', 'ember-bootstrap/templates/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _group.default,

    /**
     * @property classTypePrefix
     * @type String
     * @default 'form-group' (BS3) or 'form-control' (BS4)
     * @private
     */

    /**
     * Computed property which is true if the form group is in a validation state
     *
     * @property hasValidation
     * @type boolean
     * @private
     * @readonly
     */
    hasValidation: Ember.computed.notEmpty('validation').readOnly(),

    /**
     * Set to a validation state to render the form-group with a validation style (only for BS3).
     * See http://getbootstrap.com/css/#forms-control-validation
     *
     * The default states of "success", "warning" and "error" are supported by Bootstrap out-of-the-box.
     * But you can use custom states as well. This will set a has-<state> class, and (if `useIcons`is true)
     * a feedback whose class is taken from the <state>Icon property
     *
     * @property validation
     * @type string
     * @public
     */
    validation: null
  });
});
define('ember-bootstrap/components/base/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal', 'ember-bootstrap/templates/components/bs-modal-simple'], function (exports, _bsModal, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsModal.default.extend({
    layout: _bsModalSimple.default,

    /**
     * The title of the modal, visible in the modal header. Is ignored if `header` is false.
     *
     * @property title
     * @type string
     * @public
     */
    title: null,

    /**
     * Display a close button (x icon) in the corner of the modal header.
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * The title of the default close button.
     *
     * @property closeTitle
     * @type string
     * @default 'Ok'
     * @public
     */
    closeTitle: 'Ok',

    /**
     * The type of the submit button (primary button).
     *
     * @property submitButtonType
     * @type string
     * @default 'primary'
     * @public
     */
    submitButtonType: 'primary',

    /**
     * The title of the submit button (primary button). Will be ignored (i.e. no button) if set to null.
     *
     * @property submitTitle
     * @type string
     * @default null
     * @public
     */
    submitTitle: null

  });
});
define('ember-bootstrap/components/base/bs-modal', ['exports', 'ember-bootstrap/templates/components/bs-modal', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/utils/listen-to-cp', 'ember-bootstrap/utils/transition-end', 'ember-bootstrap/utils/dom'], function (exports, _bsModal, _transitionSupport, _listenToCp, _transitionEnd, _dom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_transitionSupport.default, {
    layout: _bsModal.default,

    /**
     * Visibility of the modal. Toggle to show/hide with CSS transitions.
     *
     * When the modal is closed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onHide` action
     *
     * @property open
     * @type boolean
     * @default true
     * @public
     */
    open: true,

    /**
     * @property isOpen
     * @private
     */
    isOpen: (0, _listenToCp.default)('open'),

    /**
     * @property _isOpen
     * @private
     */
    _isOpen: false,

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: Ember.computed.not('isFastBoot'),

    /**
     * @property notFade
     * @type boolean
     * @private
     */
    notFade: Ember.computed.not('fade'),

    /**
     * Used to apply Bootstrap's visibility classes.
     *
     * @property showModal
     * @type boolean
     * @default false
     * @private
     */
    showModal: false,

    /**
     * Render modal markup?
     *
     * @property inDom
     * @type boolean
     * @default false
     * @private
     */
    inDom: false,

    /**
     * @property paddingLeft
     * @type number|null
     * @default null
     * @private
     */
    paddingLeft: null,

    /**
     * @property paddingRight
     * @type number|null
     * @default null
     * @private
     */
    paddingRight: null,

    /**
     * Use a semi-transparent modal background to hide the rest of the page.
     *
     * @property backdrop
     * @type boolean
     * @default true
     * @public
     */
    backdrop: true,

    /**
     * @property showBackdrop
     * @type boolean
     * @default false
     * @private
     */
    showBackdrop: false,

    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    keyboard: true,

    /**
     * [BS4 only!] Vertical position, either 'top' (default) or 'center'
     * 'center' will apply the `modal-dialog-centered` class
     *
     * @property position
     * @type {string}
     * @default 'top'
     * @public
     */
    position: 'top',

    /**
     * The id of the `.modal` element.
     *
     * @property modalId
     * @type string
     * @readonly
     * @private
     */
    modalId: Ember.computed('elementId', function () {
      return this.get('elementId') + '-modal';
    }),

    /**
     * The DOM element of the `.modal` element.
     *
     * @property modalElement
     * @type object
     * @readonly
     * @private
     */
    modalElement: Ember.computed('modalId', function () {
      return document.getElementById(this.get('modalId'));
    }).volatile(),

    /**
     * The id of the backdrop element.
     *
     * @property backdropId
     * @type string
     * @readonly
     * @private
     */
    backdropId: Ember.computed('elementId', function () {
      return this.get('elementId') + '-backdrop';
    }),

    /**
     * The DOM element of the backdrop element.
     *
     * @property backdropElement
     * @type object
     * @readonly
     * @private
     */
    backdropElement: Ember.computed('backdropId', function () {
      return document.getElementById(this.get('backdropId'));
    }).volatile(),

    /**
     * The destination DOM element for in-element.
     *
     * @property destinationElement
     * @type object
     * @readonly
     * @private
     */
    destinationElement: Ember.computed(function () {
      var dom = (0, _dom.getDOM)(this);
      return (0, _dom.findElementById)(dom, 'ember-bootstrap-wormhole');
    }).volatile(),

    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    backdropClose: true,

    /**
     * If true component will render in place, rather than be wormholed.
     *
     * @property renderInPlace
     * @type boolean
     * @default false
     * @public
     */
    renderInPlace: false,

    /**
     * @property _renderInPlace
     * @type boolean
     * @private
     */
    _renderInPlace: Ember.computed('renderInPlace', 'destinationElement', function () {
      return this.get('renderInPlace') || !this.get('destinationElement');
    }),

    /**
     * The duration of the fade transition
     *
     * @property transitionDuration
     * @type number
     * @default 300
     * @public
     */
    transitionDuration: 300,

    /**
     * The duration of the backdrop fade transition
     *
     * @property backdropTransitionDuration
     * @type number
     * @default 150
     * @public
     */
    backdropTransitionDuration: 150,

    /**
     * @property isFastBoot
     * @type {Boolean}
     * @private
     */
    isFastBoot: Ember.computed(function () {
      if (!Ember.getOwner) {
        // Ember.getOwner is available as of Ember 2.3, while FastBoot requires 2.4. So just return false...
        return false;
      }

      var owner = Ember.getOwner(this);
      if (!owner) {
        return false;
      }

      var fastboot = owner.lookup('service:fastboot');
      if (!fastboot) {
        return false;
      }

      return Ember.get(fastboot, 'isFastBoot');
    }),

    /**
     * The action to be sent when the modal footer's submit button (if present) is pressed.
     * Note that if your modal body contains a form (e.g. [Components.Form](Components.Form.html){{/crossLink}}) this action will
     * not be triggered. Instead a submit event will be triggered on the form itself. See the class description for an
     * example.
     *
     * @property onSubmit
     * @type function
     * @public
     */
    onSubmit: function onSubmit() {},


    /**
     * The action to be sent when the modal is closing.
     * This will be triggered by pressing the modal header's close button (x button) or the modal footer's close button.
     * Note that this will happen before the modal is hidden from the DOM, as the fade transitions will still need some
     * time to finish. Use the `onHidden` if you need the modal to be hidden when the action triggers.
     *
     * You can return false to prevent closing the modal automatically, and do that in your action by
     * setting `open` to false.
     *
     * @property onHide
     * @type function
     * @public
     */
    onHide: function onHide() {},


    /**
     * The action to be sent after the modal has been completely hidden (including the CSS transition).
     *
     * @property onHidden
     * @type function
     * @default null
     * @public
     */
    onHidden: function onHidden() {},


    /**
     * The action to be sent when the modal is opening.
     * This will be triggered immediately after the modal is shown (so it's safe to access the DOM for
     * size calculations and the like). This means that if fade=true, it will be shown in between the
     * backdrop animation and the fade animation.
     *
     * @property onShow
     * @type function
     * @default null
     * @public
     */
    onShow: function onShow() {},


    /**
     * The action to be sent after the modal has been completely shown (including the CSS transition).
     *
     * @property onShown
     * @type function
     * @public
     */
    onShown: function onShown() {},


    actions: {
      close: function close() {
        if (this.get('onHide')() !== false) {
          this.set('isOpen', false);
        }
      },
      submit: function submit() {
        // replace modalId by :scope selector if supported by all target browsers
        var modalId = this.get('modalId');
        var forms = this.get('modalElement').querySelectorAll('#' + modalId + ' .modal-body form');
        if (forms.length > 0) {
          // trigger submit event on body forms
          var event = document.createEvent('Events');
          event.initEvent('submit', true, true);
          Array.prototype.slice.call(forms).forEach(function (form) {
            return form.dispatchEvent(event);
          });
        } else {
          // if we have no form, we send a submit action
          this.get('onSubmit')();
        }
      }
    },

    /**
     * Give the modal (or its autofocus element) focus
     *
     * @method takeFocus
     * @private
     */
    takeFocus: function takeFocus() {
      var modalEl = this.get('modalElement');
      var focusElement = modalEl && modalEl.querySelector('[autofocus]');
      if (!focusElement) {
        focusElement = modalEl;
      }
      if (focusElement) {
        focusElement.focus();
      }
    },


    /**
     * Show the modal
     *
     * @method show
     * @private
     */
    show: function show() {
      if (this._isOpen) {
        return;
      }
      this._isOpen = true;

      document.body.classList.add('modal-open');

      this.resize();

      var callback = function callback() {
        var _this = this;

        if (this.get('isDestroyed')) {
          return;
        }

        this.checkScrollbar();
        this.setScrollbar();

        Ember.run.schedule('afterRender', function () {
          var modalEl = _this.get('modalElement');
          if (!modalEl) {
            return;
          }

          modalEl.scrollTop = 0;
          _this.handleUpdate();
          _this.set('showModal', true);
          _this.get('onShow')();

          if (_this.get('usesTransition')) {
            (0, _transitionEnd.default)(_this.get('modalElement'), function () {
              this.takeFocus();
              this.get('onShown')();
            }, _this, _this.get('transitionDuration'));
          } else {
            _this.takeFocus();
            _this.get('onShown')();
          }
        });
      };
      this.set('inDom', true);
      this.handleBackdrop(callback);
    },


    /**
     * Hide the modal
     *
     * @method hide
     * @private
     */
    hide: function hide() {
      if (!this._isOpen) {
        return;
      }
      this._isOpen = false;

      this.resize();
      this.set('showModal', false);

      if (this.get('usesTransition')) {
        (0, _transitionEnd.default)(this.get('modalElement'), this.hideModal, this, this.get('transitionDuration'));
      } else {
        this.hideModal();
      }
    },


    /**
     * Clean up after modal is hidden and call onHidden
     *
     * @method hideModal
     * @private
     */
    hideModal: function hideModal() {
      var _this2 = this;

      if (this.get('isDestroyed')) {
        return;
      }

      this.handleBackdrop(function () {
        document.body.classList.remove('modal-open');
        _this2.resetAdjustments();
        _this2.resetScrollbar();
        _this2.set('inDom', false);
        _this2.get('onHidden')();
      });
    },


    /**
     * SHow/hide the backdrop
     *
     * @method handleBackdrop
     * @param callback
     * @private
     */
    handleBackdrop: function handleBackdrop(callback) {
      var doAnimate = this.get('usesTransition');

      if (this.get('isOpen') && this.get('backdrop')) {
        this.set('showBackdrop', true);

        if (!callback) {
          return;
        }

        Ember.run.schedule('afterRender', this, function () {
          var backdrop = this.get('backdropElement');
          (true && !(backdrop) && Ember.assert('Backdrop element should be in DOM', backdrop));

          if (doAnimate) {
            (0, _transitionEnd.default)(backdrop, callback, this, this.get('backdropTransitionDuration'));
          } else {
            callback.call(this);
          }
        });
      } else if (!this.get('isOpen') && this.get('backdrop')) {
        var backdrop = this.get('backdropElement');
        (true && !(backdrop) && Ember.assert('Backdrop element should be in DOM', backdrop));


        var callbackRemove = function callbackRemove() {
          if (this.get('isDestroyed')) {
            return;
          }
          this.set('showBackdrop', false);
          if (callback) {
            callback.call(this);
          }
        };
        if (doAnimate) {
          (0, _transitionEnd.default)(backdrop, callbackRemove, this, this.get('backdropTransitionDuration'));
        } else {
          callbackRemove.call(this);
        }
      } else if (callback) {
        Ember.run.next(this, callback);
      }
    },


    /**
     * Attach/Detach resize event listeners
     *
     * @method resize
     * @private
     */
    resize: function resize() {
      if (this.get('isOpen')) {
        this._handleUpdate = Ember.run.bind(this, this.handleUpdate);
        window.addEventListener('resize', this._handleUpdate, false);
      } else {
        window.removeEventListener('resize', this._handleUpdate, false);
      }
    },


    /**
     * @method handleUpdate
     * @private
     */
    handleUpdate: function handleUpdate() {
      this.adjustDialog();
    },


    /**
     * @method adjustDialog
     * @private
     */
    adjustDialog: function adjustDialog() {
      var modalIsOverflowing = this.get('modalElement').scrollHeight > document.documentElement.clientHeight;
      this.setProperties({
        paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.get('scrollbarWidth') : null,
        paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.get('scrollbarWidth') : null
      });
    },


    /**
     * @method resetAdjustments
     * @private
     */
    resetAdjustments: function resetAdjustments() {
      this.setProperties({
        paddingLeft: null,
        paddingRight: null
      });
    },


    /**
     * @method checkScrollbar
     * @private
     */
    checkScrollbar: function checkScrollbar() {
      var fullWindowWidth = window.innerWidth;
      if (!fullWindowWidth) {
        // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
      }

      this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    },


    /**
     * @method setScrollbar
     * @private
     */
    setScrollbar: function setScrollbar() {
      var bodyPad = parseInt(document.body.style.paddingRight || 0, 10);
      this._originalBodyPad = document.body.style.paddingRight || '';
      if (this.bodyIsOverflowing) {
        document.body.style.paddingRight = bodyPad + this.get('scrollbarWidth');
      }
    },


    /**
     * @method resetScrollbar
     * @private
     */
    resetScrollbar: function resetScrollbar() {
      document.body.style.paddingRight = this._originalBodyPad;
    },


    /**
     * @property scrollbarWidth
     * @type number
     * @readonly
     * @private
     */
    scrollbarWidth: Ember.computed(function () {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      var modalEl = this.get('modalElement');
      modalEl.parentNode.insertBefore(scrollDiv, modalEl.nextSibling);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      scrollDiv.parentNode.removeChild(scrollDiv);
      return scrollbarWidth;
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      if (this.get('isOpen')) {
        this.show();
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      window.removeEventListener('resize', this._handleUpdate, false);
      document.body.classList.remove('modal-open');
      this.resetScrollbar();
    },


    _observeOpen: Ember.observer('isOpen', function () {
      if (this.get('isOpen')) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);

      var _getProperties = this.getProperties('isOpen', 'backdrop', 'fade', 'isFastBoot'),
          isOpen = _getProperties.isOpen,
          backdrop = _getProperties.backdrop,
          fade = _getProperties.fade,
          isFastBoot = _getProperties.isFastBoot;

      this.setProperties({
        showModal: isOpen && (!fade || isFastBoot),
        showBackdrop: isOpen && backdrop,
        inDom: isOpen
      });
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/body', ['exports', 'ember-bootstrap/templates/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _body.default,
    classNames: ['modal-body']
  });
});
define('ember-bootstrap/components/base/bs-modal/dialog', ['exports', 'ember-bootstrap/templates/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _dialog.default,
    classNames: ['modal'],
    classNameBindings: ['fade'],
    attributeBindings: ['tabindex', 'style'],
    ariaRole: 'dialog',
    tabindex: '-1',

    /**
     * Set to false to disable fade animations.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * Used to apply Bootstrap's visibility classes
     *
     * @property showModal
     * @type boolean
     * @default false
     * @private
     */
    showModal: false,

    /**
     * Render modal markup?
     *
     * @property inDom
     * @type boolean
     * @default false
     * @private
     */
    inDom: false,

    /**
     * @property paddingLeft
     * @type number|null
     * @default null
     * @private
     */
    paddingLeft: null,

    /**
     * @property paddingRight
     * @type number|null
     * @default null
     * @private
     */
    paddingRight: null,

    /**
     * Closes the modal when escape key is pressed.
     *
     * @property keyboard
     * @type boolean
     * @default true
     * @public
     */
    keyboard: true,

    /**
     * Property for size styling, set to null (default), 'lg' or 'sm'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/javascript/#modals-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null,

    /**
     * If true clicking on the backdrop will close the modal.
     *
     * @property backdropClose
     * @type boolean
     * @default true
     * @public
     */
    backdropClose: true,

    /**
     * @property style
     * @type string
     * @readOnly
     * @private
     */
    style: Ember.computed('inDom', 'paddingLeft', 'paddingRight', function () {
      var styles = [];

      var _getProperties = this.getProperties('inDom', 'paddingLeft', 'paddingRight'),
          inDom = _getProperties.inDom,
          paddingLeft = _getProperties.paddingLeft,
          paddingRight = _getProperties.paddingRight;

      if (inDom) {
        styles.push('display: block');
      }
      if (paddingLeft) {
        styles.push('padding-left: ' + paddingLeft + 'px');
      }
      if (paddingRight) {
        styles.push('padding-right: ' + paddingRight + 'px');
      }

      return Ember.String.htmlSafe(styles.join(';'));
    }),

    /**
     * Name of the size class
     *
     * @property sizeClass
     * @type string
     * @readOnly
     * @private
     */
    sizeClass: Ember.computed('size', function () {
      var size = this.get('size');
      return Ember.isBlank(size) ? null : 'modal-' + size;
    }).readOnly(),

    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {},
    keyDown: function keyDown(e) {
      var code = e.keyCode || e.which;
      if (code === 27 && this.get('keyboard')) {
        this.get('onClose')();
      }
    },
    _click: function _click(e) {
      if (!e.target.classList.contains('modal') || !this.get('backdropClose')) {
        return;
      }
      this.get('onClose')();
    },
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      // Ember events use event delegation, but we need to add an `onclick` handler directly on the modal element for
      // iOS to allow clicking the div. So a `click(){}` method here won't work, we need to attach an event listener
      // directly to the element
      this.element.onclick = Ember.run.bind(this, this._click);
    },
    willDestroyElement: function willDestroyElement() {
      this.element.onclick = null;
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/footer', ['exports', 'ember-bootstrap/templates/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _footer.default,
    tagName: 'form',
    classNames: ['modal-footer'],

    /**
     * The title of the default close button. Will be ignored (i.e. no close button) if you provide your own block
     * template.
     *
     * @property closeTitle
     * @type string
     * @default 'Ok'
     * @public
     */
    closeTitle: 'Ok',

    /**
     * The title of the submit button (primary button). Will be ignored (i.e. no button) if set to null or if you provide
     * your own block template.
     *
     * @property submitTitle
     * @type string
     * @default null
     * @public
     */
    submitTitle: null,

    hasSubmitButton: Ember.computed.notEmpty('submitTitle'),

    /**
     * Set to true to disable the submit button. If you bind this to some property that indicates if submitting is allowed
     * (form validation for example) this can be used to prevent the user from pressing the submit button.
     *
     * @property submitDisabled
     * @type boolean
     * @default false
     * @public
     */
    submitDisabled: false,

    /**
     * The type of the submit button (primary button).
     *
     * @property submitButtonType
     * @type string
     * @default 'primary'
     * @public
     */
    submitButtonType: 'primary',

    /**
     * The action to send to the parent modal component when the modal footer's form is submitted
     *
     * @event onSubmit
     * @public
     */
    onSubmit: function onSubmit() {},


    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {},
    submit: function submit(e) {
      e.preventDefault();
      // send to parent bs-modal component
      this.get('onSubmit')();
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/header', ['exports', 'ember-bootstrap/templates/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _header.default,
    classNames: ['modal-header'],

    /**
     * Show a close button (x icon)
     *
     * @property closeButton
     * @type boolean
     * @default true
     * @public
     */
    closeButton: true,

    /**
     * The title to display in the modal header
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null,

    /**
     * @event onClose
     * @public
     */
    onClose: function onClose() {}
  });
});
define('ember-bootstrap/components/base/bs-modal/header/close', ['exports', 'ember-bootstrap/templates/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _close.default,
    tagName: 'button',
    classNames: ['close'],
    attributeBindings: ['type', 'aria-label'],
    'aria-label': 'Close',
    type: 'button',

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click() {
      this.get('onClick')();
    }
  });
});
define('ember-bootstrap/components/base/bs-modal/header/title', ['exports', 'ember-bootstrap/templates/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _title.default,
    tagName: 'h4',
    classNames: ['modal-title']
  });
});
define('ember-bootstrap/components/base/bs-nav', ['exports', 'ember-bootstrap/templates/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _bsNav.default,

    tagName: 'ul',
    classNames: ['nav'],

    classNameBindings: ['typeClass', 'justified:nav-justified'],

    typeClass: Ember.computed('type', function () {
      var type = this.get('type');
      if (Ember.isPresent(type)) {
        return 'nav-' + type;
      }
    }),

    /**
     * Special type of nav, either "pills" or "tabs"
     *
     * @property type
     * @type String
     * @default null
     * @public
     */
    type: null,

    /**
     * Make the nav justified, see [bootstrap docs](http://getbootstrap.com/components/#nav-justified)
     *
     * @property justified
     * @type boolean
     * @default false
     * @public
     */
    justified: false,

    /**
     * Make the nav pills stacked, see [bootstrap docs](http://getbootstrap.com/components/#nav-pills)
     *
     * @property stacked
     * @type boolean
     * @default false
     * @public
     */
    stacked: false,

    /**
     * @property itemComponent
     * @type {String}
     * @private
     */
    itemComponent: 'bs-nav/item',

    /**
     * @property linkToComponent
     * @type {String}
     * @private
     */
    linkToComponent: 'bs-nav/link-to',

    /**
     * @property dropdownComponent
     * @type {String}
     * @private
     */
    dropdownComponent: 'bs-dropdown'
  });
});
define('ember-bootstrap/components/base/bs-nav/item', ['exports', 'ember-bootstrap/templates/components/bs-nav/item', 'ember-bootstrap/mixins/component-parent'], function (exports, _item, _componentParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_componentParent.default, {
    layout: _item.default,
    classNameBindings: ['disabled', 'active'],
    tagName: 'li',
    ariaRole: 'presentation',

    /**
     * Render the nav item as disabled (see [Bootstrap docs](http://getbootstrap.com/components/#nav-disabled-links)).
     * By default it will look at any nested `link-to` components and make itself disabled if there is a disabled link.
     * See the [link-to API](http://emberjs.com/api/classes/Ember.Templates.helpers.html#toc_disabling-the-code-link-to-code-component)
     *
     * @property disabled
     * @type boolean
     * @public
     */
    disabled: Ember.computed.reads('_disabled'),
    _disabled: false,

    /**
     * Render the nav item as active.
     * By default it will look at any nested `link-to` components and make itself active if there is an active link
     * (i.e. the link points to the current route).
     * See the [link-to API](http://emberjs.com/api/classes/Ember.Templates.helpers.html#toc_handling-current-route)
     *
     * @property active
     * @type boolean
     * @public
     */
    active: Ember.computed.reads('_active'),
    _active: false,

    /**
     * Collection of all `Ember.LinkComponent`s that are children
     *
     * @property childLinks
     * @private
     */
    childLinks: Ember.computed.filter('children', function (view) {
      return view instanceof Ember.LinkComponent;
    }),

    activeChildLinks: Ember.computed.filterBy('childLinks', 'active'),
    hasActiveChildLinks: Ember.computed.gt('activeChildLinks.length', 0),

    disabledChildLinks: Ember.computed.filterBy('childLinks', 'disabled'),
    hasDisabledChildLinks: Ember.computed.gt('disabledChildLinks.length', 0),

    /**
     * Called when clicking the nav item
     *
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click() {
      this.onClick();
    },
    init: function init() {
      this._super.apply(this, arguments);
      this.get('activeChildLinks');
      this.get('disabledChildLinks');
    },


    _observeActive: Ember.observer('activeChildLinks.[]', function () {
      Ember.run.scheduleOnce('afterRender', this, this._updateActive);
    }),

    _updateActive: function _updateActive() {
      this.set('_active', this.get('hasActiveChildLinks'));
    },


    _observeDisabled: Ember.observer('disabledChildLinks.[]', function () {
      Ember.run.scheduleOnce('afterRender', this, this._updateDisabled);
    }),

    _updateDisabled: function _updateDisabled() {
      this.set('_disabled', this.get('hasDisabledChildLinks'));
    }
  });
});
define('ember-bootstrap/components/base/bs-nav/link-to', ['exports', 'ember-bootstrap/mixins/component-child'], function (exports, _componentChild) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.LinkComponent.extend(_componentChild.default, {});
});
define('ember-bootstrap/components/base/bs-navbar', ['exports', 'ember-bootstrap/mixins/type-class', 'ember-bootstrap/templates/components/bs-navbar', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _typeClass, _bsNavbar, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_typeClass.default, {
    layout: _bsNavbar.default,

    tagName: 'nav',
    classNames: ['navbar'],
    classNameBindings: ['positionClass'],

    classTypePrefix: 'navbar',

    /**
     * Manages the state for the responsive menu between the toggle and the content.
     *
     * @property collapsed
     * @type boolean
     * @default true
     * @public
     */
    collapsed: true,

    /**
     * @property _collapsed
     * @private
     */
    _collapsed: (0, _listenToCp.default)('collapsed'),

    /**
     * Controls whether the wrapping div is a fluid container or not.
     *
     * @property fluid
     * @type boolean
     * @default true
     * @public
     */
    fluid: true,

    /**
     * Specifies the position classes for the navbar, currently supporting none, "fixed-top", "fixed-bottom", and
     * either "static-top" (BS3) or "sticky-top" (BS4).
     * See the [bootstrap docs](http://getbootstrap.com/components/#navbar-fixed-top) for details.
     *
     * @property position
     * @type String
     * @default null
     * @public
     */
    position: null,

    positionClass: Ember.computed('position', function () {
      var position = this.get('position');
      var validPositions = this.get('_validPositions');
      var positionPrefix = this.get('_positionPrefix');

      if (validPositions.indexOf(position) === -1) {
        return null;
      }

      return '' + positionPrefix + position;
    }),

    /**
     * The action to be sent when the navbar is about to be collapsed.
     *
     * You can return false to prevent collapsing the navbar automatically, and do that in your action by
     * setting `collapsed` to true.
     *
     * @event onCollapse
     * @public
     */
    onCollapse: function onCollapse() {},


    /**
     * The action to be sent after the navbar has been collapsed (including the CSS transition).
     *
     * @event onCollapsed
     * @public
     */
    onCollapsed: function onCollapsed() {},


    /**
     * The action to be sent when the navbar is about to be expanded.
     *
     * You can return false to prevent expanding the navbar automatically, and do that in your action by
     * setting `collapsed` to false.
     *
     * @event onExpand
     * @public
     */
    onExpand: function onExpand() {},


    /**
     * The action to be sent after the navbar has been expanded (including the CSS transition).
     *
     * @event onExpanded
     * @public
     */
    onExpanded: function onExpanded() {},


    _onCollapsedChange: Ember.observer('_collapsed', function () {
      var collapsed = this.get('_collapsed');
      var active = this.get('active');
      if (collapsed !== active) {
        return;
      }
      if (collapsed === false) {
        this.show();
      } else {
        this.hide();
      }
    }),

    /**
     * @method expand
     * @private
     */
    expand: function expand() {
      if (this.onExpand() !== false) {
        this.set('_collapsed', false);
      }
    },


    /**
     * @method collapse
     * @private
     */
    collapse: function collapse() {
      if (this.onCollapse() !== false) {
        this.set('_collapsed', true);
      }
    },


    actions: {
      expand: function expand() {
        this.expand();
      },
      collapse: function collapse() {
        this.collapse();
      },
      toggleNavbar: function toggleNavbar() {
        if (this.get('_collapsed')) {
          this.expand();
        } else {
          this.collapse();
        }
      }
    }

    /**
     * Bootstrap 4 Only: Defines the responsive toggle breakpoint size. Options are the standard
     * two character Bootstrap size abbreviations. Used to set the `navbar-expand-*`
     * class. Set to `null` to disable collapsing.
     *
     * @property toggleBreakpoint
     * @type String
     * @default 'lg'
     * @public
     */

    /**
     * Bootstrap 4 Only: Sets the background color for the navbar. Can be any color
     * in the set that composes the `bg-*` classes and can be extended by creating your
     * own `bg-*` classes.
     *
     * @property backgroundColor
     * @type String
     * @default 'light'
     * @public
     */
  });
});
define('ember-bootstrap/components/base/bs-navbar/content', ['exports', 'ember-bootstrap/templates/components/bs-navbar/content', 'ember-bootstrap/components/bs-collapse'], function (exports, _content, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsCollapse.default.extend({
    layout: _content.default,

    classNames: ['navbar-collapse']
  });
});
define('ember-bootstrap/components/base/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _linkTo.default.extend({

    /**
     * @property collapseNavbar
     * @type {Boolean}
     * @default true
     * @public
     */
    collapseNavbar: true,

    /**
     * @event onCollapse
     * @private
     */
    onCollapse: function onCollapse() {},
    click: function click() {
      if (this.get('collapseNavbar')) {
        this.onCollapse();
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsNav.default.extend({
    classNames: ['navbar-nav'],

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this.set('justified', false);
    }
  });
});
define('ember-bootstrap/components/base/bs-navbar/toggle', ['exports', 'ember-bootstrap/templates/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _toggle.default,
    tagName: 'button',

    classNameBindings: ['collapsed'],
    collapsed: true,

    /**
     * @event onClick
     * @public
     */
    onClick: function onClick() {},
    click: function click() {
      this.onClick();
    }
  });
});
define('ember-bootstrap/components/base/bs-popover', ['exports', 'ember-bootstrap/components/base/bs-contextual-help', 'ember-bootstrap/templates/components/bs-popover'], function (exports, _bsContextualHelp, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsContextualHelp.default.extend({
    layout: _bsPopover.default,

    /**
     * @property placement
     * @type string
     * @default 'right'
     * @public
     */
    placement: 'right',

    /**
     * @property triggerEvents
     * @type array|string
     * @default 'click'
     * @public
     */
    triggerEvents: 'click',

    /**
     * The DOm element of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: Ember.computed('overlayElement', function () {
      return this.get('overlayElement').querySelector('.arrow');
    }).volatile()
  });
});
define('ember-bootstrap/components/base/bs-popover/element', ['exports', 'ember-bootstrap/components/base/bs-contextual-help/element', 'ember-bootstrap/templates/components/bs-popover/element'], function (exports, _element, _element2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element.default.extend({
    layout: _element2.default,

    /**
     * @property title
     * @type string
     * @public
     */
    title: undefined,

    /**
     * @property hasTitle
     * @type boolean
     * @private
     */
    hasTitle: Ember.computed.notEmpty('title')
  });
});
define('ember-bootstrap/components/base/bs-progress', ['exports', 'ember-bootstrap/templates/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _bsProgress.default,
    classNames: ['progress']
  });
});
define('ember-bootstrap/components/base/bs-progress/bar', ['exports', 'ember-bootstrap/templates/components/bs-progress/bar', 'ember-bootstrap/mixins/type-class'], function (exports, _bar, _typeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_typeClass.default, {
    layout: _bar.default,
    classNames: ['progress-bar'],
    classNameBindings: ['progressBarStriped'],

    attributeBindings: ['style', 'ariaValuenow', 'ariaValuemin', 'ariaValuemax'],

    /**
     * The lower limit of the value range
     *
     * @property minValue
     * @type number
     * @default 0
     * @public
     */
    minValue: 0,

    /**
     * The upper limit of the value range
     *
     * @property maxValue
     * @type number
     * @default 100
     * @public
     */
    maxValue: 100,

    /**
     * The value the progress bar should represent
     *
     * @property value
     * @type number
     * @default 0
     * @public
     */
    value: 0,

    /**
     If true a label will be shown inside the progress bar.
      By default it will be the percentage corresponding to the `value` property, rounded to `roundDigits` digits.
     You can customize it by using the component with a block template, which the component yields the percentage
     value to:
      ```hbs
     {{#bs-progress}}
       {{#bs-progress-bar value=progressValue as |percent|}}{{progressValue}} ({{percent}}%){{/bs-progress-bar}}
     {{/bs-progress}}
     ```
      @property showLabel
     @type boolean
     @default false
     @public
     */
    showLabel: false,

    /**
     * Create a striped effect, see http://getbootstrap.com/components/#progress-striped
     *
     * @property striped
     * @type boolean
     * @default false
     * @public
     */
    striped: false,

    /**
     * Animate the stripes, see http://getbootstrap.com/components/#progress-animated
     *
     * @property animate
     * @type boolean
     * @default false
     * @public
     */
    animate: false,

    /**
     * Specify to how many digits the progress bar label should be rounded.
     *
     * @property roundDigits
     * @type number
     * @default 0
     * @public
     */
    roundDigits: 0,

    progressBarStriped: Ember.computed.readOnly('striped'),
    progressBarAnimate: Ember.computed.readOnly('animate'),

    ariaValuenow: Ember.computed.readOnly('value'),
    ariaValuemin: Ember.computed.readOnly('minValue'),
    ariaValuemax: Ember.computed.readOnly('maxValue'),

    /**
     * The percentage of `value`
     *
     * @property percent
     * @type number
     * @protected
     * @readonly
     */
    percent: Ember.computed('value', 'minValue', 'maxValue', function () {
      var value = parseFloat(this.get('value'));
      var minValue = parseFloat(this.get('minValue'));
      var maxValue = parseFloat(this.get('maxValue'));

      return Math.min(Math.max((value - minValue) / (maxValue - minValue), 0), 1) * 100;
    }).readOnly(),

    /**
     * The percentage of `value`, rounded to `roundDigits` digits
     *
     * @property percentRounded
     * @type number
     * @protected
     * @readonly
     */
    percentRounded: Ember.computed('percent', 'roundDigits', function () {
      var roundFactor = Math.pow(10, this.get('roundDigits'));
      return Math.round(this.get('percent') * roundFactor) / roundFactor;
    }).readOnly(),

    /**
     * @property style
     * @type string
     * @private
     * @readonly
     */
    style: Ember.computed('percent', function () {
      var percent = this.get('percent');
      return Ember.String.htmlSafe('width: ' + percent + '%');
    })

  });
});
define('ember-bootstrap/components/base/bs-tab', ['exports', 'ember-bootstrap/templates/components/bs-tab', 'ember-bootstrap/mixins/component-parent', 'ember-bootstrap/components/bs-tab/pane', 'ember-bootstrap/utils/listen-to-cp'], function (exports, _bsTab, _componentParent, _pane, _listenToCp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_componentParent.default, {
    layout: _bsTab.default,

    /**
     * Type of nav, either "pills" or "tabs"
     *
     * @property type
     * @type String
     * @default 'tabs'
     * @public
     */
    type: 'tabs',

    /**
     * By default the tabs will be automatically generated using the available [TabPane](Components.TabPane.html)
     * components. If set to true, you can deactivate this and setup the tabs manually. See the example above.
     *
     * @property customTabs
     * @type boolean
     * @default false
     * @public
     */
    customTabs: false,

    /**
     * The id (`elementId`) of the active [TabPane](Components.TabPane.html).
     * By default the first tab will be active, but this can be changed by setting this property
     *
     * ```hbs
     * {{#bs-tab activeId="pane2"}}
     *   {{#tab.pane id="pane1" title="Tab 1"}}
     *      ...
     *   {{/tab.pane}}
     *   {{#tab.pane id="pane1" title="Tab 1"}}
     *     ...
     *   {{/tab.pane}}
     * {{/bs-tab}}
     * ```
     *
     * When the selection is changed by user interaction this property will not update by using two-way bindings in order
     * to follow DDAU best practices. If you want to react to such changes, subscribe to the `onChange` action
     *
     * @property activeId
     * @type string
     * @public
     */
    activeId: Ember.computed.oneWay('childPanes.firstObject.elementId'),

    /**
     * @property isActiveId
     * @private
     */
    isActiveId: (0, _listenToCp.default)('activeId'),

    /**
     * Set to false to disable the fade animation when switching tabs.
     *
     * @property fade
     * @type boolean
     * @default true
     * @public
     */
    fade: true,

    /**
     * The duration of the fade animation
     *
     * @property fadeDuration
     * @type integer
     * @default 150
     * @public
     */
    fadeDuration: 150,

    /**
     * This action is called when switching the active tab, with the new and previous pane id
     *
     * You can return false to prevent changing the active tab automatically, and do that in your action by
     * setting `activeId`.
     *
     * @event onChange
     * @public
     */
    onChange: function onChange() {},


    /**
     * All `TabPane` child components
     *
     * @property childPanes
     * @type array
     * @readonly
     * @private
     */
    childPanes: Ember.computed.filter('children', function (view) {
      return view instanceof _pane.default;
    }),

    /**
     * Array of objects that define the tab structure
     *
     * @property navItems
     * @type array
     * @readonly
     * @private
     */
    navItems: Ember.computed('childPanes.@each.{elementId,title,group}', function () {
      var items = Ember.A();
      this.get('childPanes').forEach(function (pane) {
        var groupTitle = pane.get('groupTitle');
        var item = pane.getProperties('elementId', 'title');
        if (Ember.isPresent(groupTitle)) {
          var group = items.findBy('groupTitle', groupTitle);
          if (group) {
            group.children.push(item);
            group.childIds.push(item.elementId);
          } else {
            items.push({
              isGroup: true,
              groupTitle: groupTitle,
              children: Ember.A([item]),
              childIds: Ember.A([item.elementId])
            });
          }
        } else {
          items.push(item);
        }
      });
      return items;
    }),

    actions: {
      select: function select(id) {
        var previous = this.get('isActiveId');
        if (this.get('onChange')(id, previous) !== false) {
          // change active tab when `onChange` does not return false
          this.set('isActiveId', id);
        }
      }
    }
  });
});
define('ember-bootstrap/components/base/bs-tab/pane', ['exports', 'ember-bootstrap/templates/components/bs-tab/pane', 'ember-bootstrap/mixins/component-child', 'ember-bootstrap/mixins/transition-support', 'ember-bootstrap/utils/transition-end'], function (exports, _pane, _componentChild, _transitionSupport, _transitionEnd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_componentChild.default, _transitionSupport.default, {
    layout: _pane.default,
    classNameBindings: ['active', 'usesTransition:fade'],
    classNames: ['tab-pane'],
    ariaRole: 'tabpanel',

    /**
     * @property activeId
     * @private
     */
    activeId: null,

    /**
     * True if this pane is active (visible)
     *
     * @property isActive
     * @type boolean
     * @readonly
     * @private
     */
    isActive: Ember.computed('activeId', 'elementId', function () {
      return this.get('activeId') === this.get('elementId');
    }).readOnly(),

    /**
     * Used to apply Bootstrap's "active" class
     *
     * @property active
     * @type boolean
     * @default false
     * @private
     */
    active: false,

    /**
     * Used to trigger the Bootstrap visibility classes.
     *
     * @property showContent
     * @type boolean
     * @default false
     * @private
     */
    showContent: false,

    /**
     * The title for this tab pane. This is used by the `bs-tab` component to automatically generate
     * the tab navigation.
     * See the [Components.Tab](Components.Tab.html) for examples.
     *
     * @property title
     * @type string
     * @default null
     * @public
     */
    title: null,

    /**
     * An optional group title used by the `bs-tab` component to group all panes with the same group title
     * under a common drop down in the tab navigation.
     * See the [Components.Tab](Components.Tab.html) for examples.
     *
     * @property groupTitle
     * @type string
     * @default null
     * @public
     */
    groupTitle: null,

    /**
     * Use fade animation when switching tabs.
     *
     * @property fade
     * @type boolean
     * @private
     */
    fade: true,

    /**
     * The duration of the fade out animation
     *
     * @property fadeDuration
     * @type integer
     * @default 150
     * @private
     */
    fadeDuration: 150,

    /**
     * Show the pane
     *
     * @method show
     * @protected
     */
    show: function show() {
      if (this.get('usesTransition')) {
        (0, _transitionEnd.default)(this.get('element'), function () {
          if (!this.get('isDestroyed')) {
            this.setProperties({
              active: true,
              showContent: true
            });
          }
        }, this, this.get('fadeDuration'));
      } else {
        this.set('active', true);
      }
    },


    /**
     * Hide the pane
     *
     * @method hide
     * @protected
     */
    hide: function hide() {
      if (this.get('usesTransition')) {
        (0, _transitionEnd.default)(this.get('element'), function () {
          if (!this.get('isDestroyed')) {
            this.set('active', false);
          }
        }, this, this.get('fadeDuration'));
        this.set('showContent', false);
      } else {
        this.set('active', false);
      }
    },


    _showHide: Ember.observer('isActive', function () {
      if (this.get('isActive')) {
        this.show();
      } else {
        this.hide();
      }
    }),

    init: function init() {
      this._super.apply(this, arguments);
      Ember.run.scheduleOnce('afterRender', this, function () {
        // isActive comes from parent component, so only available after render...
        this.set('active', this.get('isActive'));
        this.set('showContent', this.get('isActive') && this.get('fade'));
      });
    }
  });
});
define('ember-bootstrap/components/base/bs-tooltip', ['exports', 'ember-bootstrap/components/base/bs-contextual-help', 'ember-bootstrap/templates/components/bs-tooltip'], function (exports, _bsContextualHelp, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsContextualHelp.default.extend({
    layout: _bsTooltip.default,

    /**
     * The DOM element of the arrow element.
     *
     * @property arrowElement
     * @type object
     * @readonly
     * @private
     */
    arrowElement: Ember.computed('overlayElement', function () {
      return this.get('overlayElement').querySelector('.tooltip-arrow');
    }).volatile()
  });
});
define('ember-bootstrap/components/base/bs-tooltip/element', ['exports', 'ember-bootstrap/templates/components/bs-tooltip/element', 'ember-bootstrap/components/base/bs-contextual-help/element'], function (exports, _element, _element2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element2.default.extend({
    layout: _element.default
  });
});
define('ember-bootstrap/components/bs-accordion', ['exports', 'ember-bootstrap/components/base/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsAccordion.default.extend({
    classNames: ['panel-group']
  });
});
define('ember-bootstrap/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/base/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _item.default.extend({
    classNames: ['panel'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'panel'
     * @protected
     */
    classTypePrefix: 'panel'
  });
});
define('ember-bootstrap/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/base/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-bootstrap/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/base/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _title.default.extend({
    classNames: ['panel-heading']
  });
});
define('ember-bootstrap/components/bs-alert', ['exports', 'ember-bootstrap/components/base/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsAlert.default.extend({
    classNameBindings: ['showAlert:in']
  });
});
define('ember-bootstrap/components/bs-button-group', ['exports', 'ember-bootstrap/components/base/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('ember-bootstrap/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/base/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-bootstrap/components/bs-button', ['exports', 'ember-bootstrap/components/base/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('ember-bootstrap/components/bs-carousel', ['exports', 'ember-bootstrap/components/base/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsCarousel.default.extend({
    nextControlClassName: 'carousel-control right',
    nextControlIcon: 'icon-next',
    prevControlClassName: 'carousel-control left',
    prevControlIcon: 'icon-prev'
  });
});
define('ember-bootstrap/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/base/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _slide.default.extend({
    classNameBindings: ['left', 'next', 'prev', 'right'],
    classNames: ['item']
  });
});
define('ember-bootstrap/components/bs-collapse', ['exports', 'ember-bootstrap/components/base/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsCollapse.default.extend({
    classNameBindings: ['showContent:in']
  });
});
define('ember-bootstrap/components/bs-dropdown', ['exports', 'ember-bootstrap/components/base/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsDropdown.default.extend({
    classNameBindings: ['isOpen:open']
  });
});
define('ember-bootstrap/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/base/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-bootstrap/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _menu.default.extend({
    tagName: 'ul',

    classNames: ['dropdown-menu'],
    classNameBindings: ['alignClass']
  });
});
define('ember-bootstrap/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _divider.default.extend({
    classNames: ['divider']
  });
});
define('ember-bootstrap/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _item.default.extend({
    tagName: 'li'
  });
});
define('ember-bootstrap/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/base/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-bootstrap/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/base/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-bootstrap/components/bs-form', ['exports', 'ember-bootstrap/components/base/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsForm.default.extend({
    layoutClass: Ember.computed('formLayout', function () {
      var layout = this.get('formLayout');
      var supportedTypes = ['vertical', 'horizontal', 'inline'];
      (true && !(supportedTypes.indexOf(layout) >= 0) && Ember.assert('must provide a valid `formLayout` attribute.', supportedTypes.indexOf(layout) >= 0));

      return layout === 'vertical' ? 'form' : 'form-' + layout;
    }).readOnly()
  });
});
define('ember-bootstrap/components/bs-form/element', ['exports', 'ember-bootstrap/components/base/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/base/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/base/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/base/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _errors.default.extend({
    feedbackClass: 'help-block'
  });
});
define('ember-bootstrap/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/base/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/base/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _helpText.default.extend({
    classNames: ['help-block']
  });
});
define('ember-bootstrap/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/base/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _label.default.extend({
    tagName: ''
  });
});
define('ember-bootstrap/components/bs-form/element/layout', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout'], function (exports, _layout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _layout.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-bootstrap/components/bs-form/group', ['exports', 'ember-bootstrap/components/base/bs-form/group', 'ember-bootstrap/config', 'ember-bootstrap/mixins/size-class'], function (exports, _group, _config, _sizeClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _group.default.extend(_sizeClass.default, {
    classNames: ['form-group'],
    classNameBindings: ['validationClass', 'hasFeedback'],

    classTypePrefix: 'form-group',

    /**
     * Whether to show validation state icons.
     * See http://getbootstrap.com/css/#forms-control-validation
     *
     * @property useIcons
     * @type boolean
     * @default true
     * @public
     */
    useIcons: true,

    /**
     * Computed property which is true if the form group is showing a validation icon
     *
     * @property hasFeedback
     * @type boolean
     * @private
     * @readonly
     */
    hasFeedback: Ember.computed.and('hasValidation', 'useIcons', 'hasIconForValidationState').readOnly(),

    /**
     * The icon classes to be used for a feedback icon in a "success" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationSuccessIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationSuccessIcon: 'fa fa-check'
       * }
     * ```
     *
     * @property successIcon
     * @type string
     * @default 'glyphicon glyphicon-ok'
     * @public
     */
    successIcon: _config.default.formValidationSuccessIcon,

    /**
     * The icon classes to be used for a feedback icon in a "error" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationErrorIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationErrorIcon: 'fa fa-times'
       * }
     * ```
     *
     * @property errorIcon
     * @type string
     * @public
     */
    errorIcon: _config.default.formValidationErrorIcon,

    /**
     * The icon classes to be used for a feedback icon in a "warning" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationWarningIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationWarningIcon: 'fa fa-warning'
       * }
     * ```
     *
     * @property warningIcon
     * @type string
     * @public
     */
    warningIcon: _config.default.formValidationWarningIcon,

    /**
     * The icon classes to be used for a feedback icon in a "info" validation state.
     * Defaults to the usual glyphicon classes. This is ignored, and no feedback icon is
     * rendered if `useIcons` is false.
     *
     * You can change this globally by setting the `formValidationInfoIcon` property of
     * the ember-bootstrap configuration in your config/environment.js file. If your are
     * using FontAwesome for example:
     *
     * ```js
     * ENV['ember-bootstrap'] = {
       *   formValidationInfoIcon: 'fa fa-info-circle
       * }
     * ```
     *
     * The "info" validation state is not supported in Bootstrap CSS, but can be easily added
     * using the following LESS style:
     * ```less
     * .has-info {
       *   .form-control-validation(@state-info-text; @state-info-text; @state-info-bg);
       * }
     * ```
     *
     * @property infoIcon
     * @type string
     * @public
     */
    infoIcon: _config.default.formValidationInfoIcon,

    /**
     * @property iconName
     * @type string
     * @readonly
     * @private
     */
    iconName: Ember.computed('validation', function () {
      var validation = this.get('validation') || 'success';
      return this.get(validation + 'Icon');
    }).readOnly(),

    /**
     * @property hasIconForValidationState
     * @type boolean
     * @readonly
     * @private
     */
    hasIconForValidationState: Ember.computed.notEmpty('iconName').readOnly(),

    /**
     * @property validationClass
     * @type string
     * @readonly
     * @private
     */
    validationClass: Ember.computed('validation', function () {
      var validation = this.get('validation');
      if (!Ember.isBlank(validation)) {
        return 'has-' + validation;
      }
    }).readOnly()
  });
});
define('ember-bootstrap/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/base/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal', ['exports', 'ember-bootstrap/components/base/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsModal.default.extend({
    showClass: 'in'
  });
});
define('ember-bootstrap/components/bs-modal/body', ['exports', 'ember-bootstrap/components/base/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/base/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _dialog.default.extend({
    classNameBindings: ['showModal:in']
  });
});
define('ember-bootstrap/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/base/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/header', ['exports', 'ember-bootstrap/components/base/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/base/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('ember-bootstrap/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/base/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-bootstrap/components/bs-nav', ['exports', 'ember-bootstrap/components/base/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsNav.default.extend({
    classNameBindings: ['stacked:nav-stacked']
  });
});
define('ember-bootstrap/components/bs-nav/item', ['exports', 'ember-bootstrap/components/base/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-bootstrap/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/base/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-bootstrap/components/bs-navbar', ['exports', 'ember-bootstrap/components/base/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsNavbar.default.extend({
    _positionPrefix: 'navbar-',

    init: function init() {
      this._super.apply(this, arguments);
      this.set('_validPositions', ['fixed-top', 'fixed-bottom', 'static-top']);
    }
  });
});
define('ember-bootstrap/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/base/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ember-bootstrap/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/base/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-bootstrap/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/base/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('ember-bootstrap/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/base/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _toggle.default.extend({
    classNames: ['navbar-toggle']
  });
});
define('ember-bootstrap/components/bs-popover', ['exports', 'ember-bootstrap/components/base/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('ember-bootstrap/components/bs-popover/element', ['exports', 'ember-bootstrap/components/base/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element.default.extend({
    popperClassNames: Ember.computed('fade', 'actualPlacement', 'showHelp', function () {
      var classes = ['popover', 'ember-bootstrap-popover', this.get('actualPlacement')];
      if (this.get('fade')) {
        classes.push('fade');
      }
      if (this.get('showHelp')) {
        classes.push('in');
      }
      return classes;
    }),

    /**
     * @property titleClass
     * @private
     */
    titleClass: 'popover-title',

    /**
     * @property contentClass
     * @private
     */
    contentClass: 'popover-content'
  });
});
define('ember-bootstrap/components/bs-progress', ['exports', 'ember-bootstrap/components/base/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('ember-bootstrap/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/base/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bar.default.extend({
    classNameBindings: ['progressBarAnimate:active'],

    /**
     * @property classTypePrefix
     * @type String
     * @default 'progress-bar'
     * @protected
     */
    classTypePrefix: 'progress-bar'
  });
});
define('ember-bootstrap/components/bs-tab', ['exports', 'ember-bootstrap/components/base/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('ember-bootstrap/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/base/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pane.default.extend({
    classNameBindings: ['showContent:in']
  });
});
define('ember-bootstrap/components/bs-tooltip', ['exports', 'ember-bootstrap/components/base/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('ember-bootstrap/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/base/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _element.default.extend({
    /**
     * @property arrowClass
     * @private
     */
    arrowClass: 'tooltip-arrow',

    popperClassNames: Ember.computed('fade', 'actualPlacement', 'showHelp', function () {
      var classes = ['tooltip', 'ember-bootstrap-tooltip', this.get('actualPlacement')];
      if (this.get('fade')) {
        classes.push('fade');
      }
      if (this.get('showHelp')) {
        classes.push('in');
      }
      return classes;
    })
  });
});
define('ember-bootstrap/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Config = Ember.Object.extend();

  Config.reopenClass({
    formValidationSuccessIcon: 'glyphicon glyphicon-ok',
    formValidationErrorIcon: 'glyphicon glyphicon-remove',
    formValidationWarningIcon: 'glyphicon glyphicon-warning-sign',
    formValidationInfoIcon: 'glyphicon glyphicon-info-sign',
    insertEmberWormholeElementToDom: true,

    load: function load() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      for (var property in config) {
        if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
          this[property] = config[property];
        }
      }
    }
  });

  exports.default = Config;
});
define('ember-bootstrap/helpers/bs-contains', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bsContains = bsContains;
  function bsContains(params /* , hash*/) {
    return Ember.isArray(params[0]) ? Ember.A(params[0]).includes(params[1]) : false;
  }

  exports.default = Ember.Helper.helper(bsContains);
});
define('ember-bootstrap/helpers/bs-eq', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.eq = eq;
  function eq(params) {
    return params[0] === params[1];
  }

  exports.default = Ember.Helper.helper(eq);
});
define('ember-bootstrap/mixins/component-child', ['exports', 'ember-bootstrap/mixins/component-parent'], function (exports, _componentParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({

    /**
     * The parent component
     *
     * @property _parent
     * @private
     */
    _parent: Ember.computed(function () {
      return this.nearestOfType(_componentParent.default);
    }),

    /**
     * flag to check if component has already been registered
     * @property _didRegister
     * @type boolean
     * @private
     */
    _didRegister: false,

    /**
     * Register ourself as a child at the parent component
     * We use the `willRender` event here to also support the fastboot environment, where there is no `didInsertElement`
     *
     * @method _registerWithParent
     * @private
     */
    _registerWithParent: function _registerWithParent() {
      if (!this._didRegister) {
        var parent = this.get('_parent');
        if (parent) {
          parent.registerChild(this);
          this._didRegister = true;
        }
      }
    },


    /**
     * Unregister from the parent component
     *
     * @method _unregisterFromParent
     * @private
     */
    _unregisterFromParent: function _unregisterFromParent() {
      var parent = this.get('_parent');
      if (this._didRegister && parent) {
        parent.removeChild(this);
        this._didRegister = false;
      }
    },
    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this._registerWithParent();
    },
    willRender: function willRender() {
      this._super.apply(this, arguments);
      this._registerWithParent();
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this._unregisterFromParent();
    }
  });
});
define('ember-bootstrap/mixins/component-parent', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({

    /**
     * Array of registered child components
     *
     * @property children
     * @type array
     * @protected
     */
    children: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('children', Ember.A());
    },


    /**
     * Register a component as a child of this parent
     *
     * @method registerChild
     * @param child
     * @public
     */
    registerChild: function registerChild(child) {
      Ember.run.schedule('actions', this, function () {
        this.get('children').addObject(child);
      });
    },


    /**
     * Remove the child component from this parent component
     *
     * @method removeChild
     * @param child
     * @public
     */
    removeChild: function removeChild(child) {
      Ember.run.schedule('actions', this, function () {
        this.get('children').removeObject(child);
      });
    }
  });
});
define('ember-bootstrap/mixins/control-attributes', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    attributeBindings: ['name', 'autofocus', 'disabled', 'readonly', 'required', 'tabindex', 'form', 'title', 'ariaDescribedBy:aria-describedby'],
    tagName: 'input'
  });
});
define('ember-bootstrap/mixins/control-validation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    classNameBindings: ['formFeedbackClass'],

    validationType: null,

    formFeedbackClass: Ember.computed('validationType', function () {
      var validationType = this.get('validationType');
      switch (validationType) {
        case 'error':
          return 'is-invalid';
        case 'success':
          return 'is-valid';
        case 'warning':
          return 'is-warning'; // not officially supported in BS4 :(
      }
    })
  });
});
define('ember-bootstrap/mixins/dropdown-toggle', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    classNames: ['dropdown-toggle'],

    /**
     * @property ariaRole
     * @default button
     * @type string
     * @protected
     */
    ariaRole: 'button',

    /**
     * Reference to the parent dropdown component
     *
     * @property dropdown
     * @type {Components.Dropdown}
     * @private
     */
    dropdown: null,

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      var dropdown = this.get('dropdown');
      if (dropdown) {
        Ember.run.schedule('actions', this, function () {
          if (!this.get('isDestroyed')) {
            dropdown.set('toggle', this);
          }
        });
      }
    }
  });
});
define('ember-bootstrap/mixins/size-class', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    /**
     * Prefix for the size class, e.g. "btn" for button size classes ("btn-lg", "btn-sm" etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: null,

    classNameBindings: ['sizeClass'],

    sizeClass: Ember.computed('size', function () {
      var prefix = this.get('classTypePrefix');
      var size = this.get('size');
      return Ember.isBlank(size) ? null : prefix + '-' + size;
    }),

    /**
     * Property for size styling, set to 'lg', 'sm' or 'xs'
     *
     * Also see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-sizes)
     *
     * @property size
     * @type String
     * @public
     */
    size: null
  });
});
define('ember-bootstrap/mixins/sub-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    targetObject: Ember.computed.alias('parentView')
  });
});
define('ember-bootstrap/mixins/transition-support', ['exports', 'ember-bootstrap/utils/transition-support'], function (exports, _transitionSupport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({

    /**
     * @property transitionsEnabled
     * @type boolean
     * @private
     */
    transitionsEnabled: Ember.computed.reads('fade'),

    /**
     * Access to the fastboot service if available
     *
     * @property fastboot
     * @type {Ember.Service}
     * @private
     */
    fastboot: Ember.computed(function () {
      var owner = Ember.getOwner(this);
      return owner.lookup('service:fastboot');
    }),

    /**
     * Use CSS transitions?
     *
     * @property usesTransition
     * @type boolean
     * @readonly
     * @private
     */
    usesTransition: Ember.computed('fade', 'fastboot.isFastBoot', function () {
      return !this.get('fastboot.isFastBoot') && !!_transitionSupport.default && this.get('transitionsEnabled');
    })
  });
});
define('ember-bootstrap/mixins/type-class', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    /**
     * Prefix for the type class, e.g. "btn" for button type classes ("btn-primary2 etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: null,

    classNameBindings: ['typeClass'],

    typeClass: Ember.computed('type', function () {
      var prefix = this.get('classTypePrefix');
      var type = this.get('type') || 'default';
      return prefix + '-' + type;
    }),

    /**
     * Property for type styling
     *
     * For the available types see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-options) (use without "btn-" prefix)
     *
     * @property type
     * @type String
     * @default 'default'
     * @public
     */
    type: 'default'
  });
});
define("ember-bootstrap/templates/components/bs-accordion", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Y1+9eW0x", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"item\",\"change\"],[[27,\"component\",[\"bs-accordion/item\"],[[\"selected\",\"onClick\"],[[23,[\"isSelected\"]],[27,\"action\",[[22,0,[]],\"change\"],null]]]],[27,\"action\",[[22,0,[]],\"change\"],null]]]]]]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion.hbs" } });
});
define("ember-bootstrap/templates/components/bs-accordion/body", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "HLULaPbr", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"bs-collapse\",null,[[\"ariaRole\",\"collapsed\",\"class\"],[\"tabpanel\",[23,[\"collapsed\"]],\"panel-collapse\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[\"panel-body \",[21,\"class\"]]]],[9],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion/body.hbs" } });
});
define("ember-bootstrap/templates/components/bs-accordion/item", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "CNzdvnV9", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[25,1]],null,{\"statements\":[[0,\"  \"],[14,1,[[27,\"hash\",null,[[\"title\",\"body\"],[[27,\"component\",[\"bs-accordion/item/title\"],[[\"collapsed\",\"onClick\"],[[23,[\"collapsed\"]],[27,\"action\",[[22,0,[]],[23,[\"onClick\"]],[23,[\"value\"]]],null]]]],[27,\"component\",[\"bs-accordion/item/body\"],[[\"collapsed\"],[[23,[\"collapsed\"]]]]]]]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"bs-accordion/item/title\",null,[[\"collapsed\",\"onClick\"],[[23,[\"collapsed\"]],[27,\"action\",[[22,0,[]],[23,[\"onClick\"]],[23,[\"value\"]]],null]]],{\"statements\":[[0,\"    \"],[1,[21,\"title\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"bs-accordion/item/body\",null,[[\"collapsed\"],[[23,[\"collapsed\"]]]],{\"statements\":[[0,\"    \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion/item.hbs" } });
});
define("ember-bootstrap/templates/components/bs-accordion/title", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "G9sgG+4k", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"h4\"],[11,\"class\",\"panel-title\"],[9],[0,\"\\n  \"],[7,\"a\"],[11,\"href\",\"#\"],[9],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-accordion/title.hbs" } });
});
define("ember-bootstrap/templates/components/bs-alert", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "lmPhVYaS", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"unless\",[[23,[\"hidden\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"dismissible\"]]],null,{\"statements\":[[0,\"    \"],[7,\"button\"],[11,\"class\",\"close\"],[11,\"aria-label\",\"Close\"],[11,\"type\",\"button\"],[3,\"action\",[[22,0,[]],\"dismiss\"]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"aria-hidden\",\"true\"],[9],[0,\"×\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-alert.hbs" } });
});
define("ember-bootstrap/templates/components/bs-button-group", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "wLnb9nmk", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"button\"],[[27,\"component\",[\"bs-button-group/button\"],[[\"buttonGroupType\",\"groupValue\",\"onClick\"],[[23,[\"type\"]],[23,[\"value\"]],[27,\"action\",[[22,0,[]],\"buttonPressed\"],null]]]]]]]]]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-button-group.hbs" } });
});
define("ember-bootstrap/templates/components/bs-button", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "qobO3OmX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"icon\"]]],null,{\"statements\":[[7,\"i\"],[12,\"class\",[28,[[21,\"icon\"]]]],[9],[10],[0,\" \"]],\"parameters\":[]},null],[1,[21,\"text\"],false],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-button.hbs" } });
});
define("ember-bootstrap/templates/components/bs-carousel", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "XBvcRlzD", "block": "{\"symbols\":[\"indicator\",\"_index\",\"&default\"],\"statements\":[[4,\"if\",[[23,[\"showIndicators\"]]],null,{\"statements\":[[0,\"  \"],[7,\"ol\"],[11,\"class\",\"carousel-indicators\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"indicators\"]]],null,{\"statements\":[[0,\"      \"],[7,\"li\"],[12,\"class\",[28,[[27,\"if\",[[27,\"bs-eq\",[[23,[\"currentIndex\"]],[22,2,[]]],null],\"active\"],null]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"toSlide\",[22,2,[]]],null]],[11,\"role\",\"button\"],[9],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"carousel-inner\"],[11,\"role\",\"listbox\"],[9],[0,\"\\n  \"],[14,3,[[27,\"hash\",null,[[\"slide\"],[[27,\"component\",[\"bs-carousel/slide\"],[[\"currentSlide\",\"directionalClassName\",\"followingSlide\",\"orderClassName\",\"presentationState\"],[[23,[\"currentSlide\"]],[23,[\"directionalClassName\"]],[23,[\"followingSlide\"]],[23,[\"orderClassName\"]],[23,[\"presentationState\"]]]]]]]]]],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"showControls\"]]],null,{\"statements\":[[0,\"  \"],[7,\"a\"],[12,\"class\",[28,[[21,\"prevControlClassName\"]]]],[12,\"href\",[28,[\"#\",[21,\"elementId\"]]]],[11,\"role\",\"button\"],[3,\"action\",[[22,0,[]],\"toPrevSlide\"]],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"aria-hidden\",\"true\"],[12,\"class\",[28,[[21,\"prevControlIcon\"]]]],[9],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[1,[21,\"prevControlLabel\"],false],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"a\"],[12,\"class\",[28,[[21,\"nextControlClassName\"]]]],[12,\"href\",[28,[\"#\",[21,\"elementId\"]]]],[11,\"role\",\"button\"],[3,\"action\",[[22,0,[]],\"toNextSlide\"]],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"aria-hidden\",\"true\"],[12,\"class\",[28,[[21,\"nextControlIcon\"]]]],[9],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[1,[21,\"nextControlLabel\"],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-carousel.hbs" } });
});
define("ember-bootstrap/templates/components/bs-carousel/slide", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "VBapCW4f", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-carousel/slide.hbs" } });
});
define("ember-bootstrap/templates/components/bs-dropdown", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Ga40FHqO", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"button\",\"toggle\",\"menu\",\"isOpen\"],[[27,\"component\",[\"bs-dropdown/button\"],[[\"dropdown\",\"onClick\"],[[22,0,[]],[27,\"action\",[[22,0,[]],\"toggleDropdown\"],null]]]],[27,\"component\",[\"bs-dropdown/toggle\"],[[\"dropdown\",\"inNav\",\"onClick\"],[[22,0,[]],[23,[\"inNav\"]],[27,\"action\",[[22,0,[]],\"toggleDropdown\"],null]]]],[27,\"component\",[\"bs-dropdown/menu\"],[[\"isOpen\",\"direction\",\"inNav\",\"toggleElement\"],[[23,[\"isOpen\"]],[23,[\"direction\"]],[23,[\"inNav\"]],[23,[\"toggleElement\"]]]]],[23,[\"isOpen\"]]]]]]]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-dropdown.hbs" } });
});
define("ember-bootstrap/templates/components/bs-dropdown/menu", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "GJzITm9V", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"item\",\"link-to\",\"divider\"],[[27,\"component\",[\"bs-dropdown/menu/item\"],null],[27,\"component\",[\"bs-dropdown/menu/link-to\"],null],[27,\"component\",[\"bs-dropdown/menu/divider\"],null]]]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-dropdown/menu.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "PIjqgOi6", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"element\",\"group\"],[[27,\"component\",[\"bs-form/element\"],[[\"model\",\"formLayout\",\"horizontalLabelGridClass\",\"showAllValidations\",\"onChange\"],[[23,[\"model\"]],[23,[\"formLayout\"]],[23,[\"horizontalLabelGridClass\"]],[23,[\"showAllValidations\"]],[27,\"action\",[[22,0,[]],\"change\"],null]]]],[27,\"component\",[\"bs-form/group\"],[[\"formLayout\"],[[23,[\"formLayout\"]]]]]]]]]]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "kRiaOkCB", "block": "{\"symbols\":[\"control\",\"&default\"],\"statements\":[[4,\"component\",[[23,[\"layoutComponent\"]]],[[\"hasLabel\",\"formElementId\",\"horizontalLabelGridClass\",\"errorsComponent\",\"feedbackIconComponent\",\"labelComponent\",\"helpTextComponent\"],[[23,[\"hasLabel\"]],[23,[\"formElementId\"]],[23,[\"horizontalLabelGridClass\"]],[27,\"component\",[[23,[\"errorsComponent\"]]],[[\"messages\",\"show\",\"showMultipleErrors\"],[[23,[\"validationMessages\"]],[23,[\"showValidationMessages\"]],[23,[\"showMultipleErrors\"]]]]],[27,\"component\",[[23,[\"feedbackIconComponent\"]]],[[\"iconName\",\"show\"],[[23,[\"iconName\"]],[23,[\"hasFeedback\"]]]]],[27,\"component\",[[23,[\"labelComponent\"]]],[[\"label\",\"invisibleLabel\",\"formElementId\",\"controlType\",\"formLayout\",\"size\"],[[23,[\"label\"]],[23,[\"invisibleLabel\"]],[23,[\"formElementId\"]],[23,[\"controlType\"]],[23,[\"formLayout\"]],[23,[\"size\"]]]]],[27,\"if\",[[23,[\"hasHelpText\"]],[27,\"component\",[[23,[\"helpTextComponent\"]]],[[\"text\",\"id\"],[[23,[\"helpText\"]],[23,[\"ariaDescribedBy\"]]]]]],null]]],{\"statements\":[[4,\"with\",[[27,\"component\",[[23,[\"controlComponent\"]]],[[\"value\",\"id\",\"name\",\"type\",\"label\",\"placeholder\",\"autofocus\",\"disabled\",\"readonly\",\"required\",\"controlSize\",\"tabindex\",\"minlength\",\"maxlength\",\"min\",\"max\",\"pattern\",\"accept\",\"autocomplete\",\"autosave\",\"inputmode\",\"multiple\",\"step\",\"form\",\"spellcheck\",\"cols\",\"rows\",\"wrap\",\"title\",\"options\",\"optionLabelPath\",\"ariaDescribedBy\",\"onChange\",\"validationType\",\"size\"],[[23,[\"value\"]],[23,[\"formElementId\"]],[23,[\"name\"]],[23,[\"controlType\"]],[23,[\"label\"]],[23,[\"placeholder\"]],[23,[\"autofocus\"]],[23,[\"disabled\"]],[23,[\"readonly\"]],[23,[\"required\"]],[23,[\"controlSize\"]],[23,[\"tabindex\"]],[23,[\"minlength\"]],[23,[\"maxlength\"]],[23,[\"min\"]],[23,[\"max\"]],[23,[\"pattern\"]],[23,[\"accept\"]],[23,[\"autocomplete\"]],[23,[\"autosave\"]],[23,[\"inputmode\"]],[23,[\"multiple\"]],[23,[\"step\"]],[23,[\"form\"]],[23,[\"spellcheck\"]],[23,[\"cols\"]],[23,[\"rows\"]],[23,[\"wrap\"]],[23,[\"title\"]],[23,[\"options\"]],[23,[\"optionLabelPath\"]],[27,\"if\",[[23,[\"hasHelpText\"]],[23,[\"ariaDescribedBy\"]]],null],[27,\"action\",[[22,0,[]],\"change\"],null],[23,[\"validation\"]],[23,[\"size\"]]]]]],null,{\"statements\":[[4,\"if\",[[24,2]],null,{\"statements\":[[0,\"      \"],[14,2,[[27,\"hash\",null,[[\"value\",\"id\",\"validation\",\"control\"],[[23,[\"value\"]],[23,[\"formElementId\"]],[23,[\"validation\"]],[22,1,[]]]]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[27,\"component\",[[22,1,[]]],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/errors", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Q6VNHl4T", "block": "{\"symbols\":[\"message\"],\"statements\":[[4,\"if\",[[23,[\"show\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"showMultipleErrors\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"pre-scrollable\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"messages\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[[21,\"feedbackClass\"]]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[12,\"class\",[21,\"feedbackClass\"]],[9],[1,[23,[\"messages\",\"firstObject\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/errors.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/feedback-icon", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "0s5tcig6", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"show\"]]],null,{\"statements\":[[0,\"  \"],[7,\"span\"],[12,\"class\",[28,[\"form-control-feedback \",[21,\"iconName\"]]]],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/feedback-icon.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/help-text", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "zZVUZt6L", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"text\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/help-text.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/label", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "SN+C4Eo2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[24,1]],null,{\"statements\":[[0,\"  \"],[7,\"label\"],[9],[0,\"\\n    \"],[14,1],[0,\"\\n    \"],[1,[21,\"label\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"label\"],[12,\"class\",[28,[\"control-label \",[27,\"if\",[[23,[\"invisibleLabel\"]],\"sr-only\"],null],\" \",[21,\"labelClass\"]]]],[12,\"for\",[28,[[21,\"formElementId\"]]]],[9],[1,[21,\"label\"],false],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/label.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/horizontal", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "dfHbdBfi", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"hasLabel\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"component\",[[23,[\"labelComponent\"]]],[[\"labelClass\"],[[23,[\"horizontalLabelGridClass\"]]]]],false],[0,\"\\n  \"],[7,\"div\"],[12,\"class\",[28,[[21,\"horizontalInputGridClass\"]]]],[9],[0,\"\\n    \"],[14,1],[0,\"\\n    \"],[1,[27,\"component\",[[23,[\"feedbackIconComponent\"]]],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[23,[\"errorsComponent\"]]],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[23,[\"helpTextComponent\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[[21,\"horizontalInputGridClass\"],\" \",[21,\"horizontalInputOffsetGridClass\"]]]],[9],[0,\"\\n    \"],[14,1],[0,\"\\n    \"],[1,[27,\"component\",[[23,[\"feedbackIconComponent\"]]],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[23,[\"errorsComponent\"]]],null],false],[0,\"\\n    \"],[1,[27,\"component\",[[23,[\"helpTextComponent\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/horizontal.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "ZBRQLTw0", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[[21,\"horizontalInputGridClass\"],\" \",[21,\"horizontalInputOffsetGridClass\"]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"checkbox\"],[9],[0,\"\\n\"],[4,\"component\",[[23,[\"labelComponent\"]]],null,{\"statements\":[[0,\"      \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[1,[27,\"component\",[[23,[\"errorsComponent\"]]],null],false],[0,\"\\n  \"],[1,[27,\"component\",[[23,[\"helpTextComponent\"]]],null],false],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/horizontal/checkbox.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/vertical", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "iUOEdkHz", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"hasLabel\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"component\",[[23,[\"labelComponent\"]]],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[14,1],[0,\"\\n\"],[1,[27,\"component\",[[23,[\"feedbackIconComponent\"]]],null],false],[0,\"\\n\"],[1,[27,\"component\",[[23,[\"errorsComponent\"]]],null],false],[0,\"\\n\"],[1,[27,\"component\",[[23,[\"helpTextComponent\"]]],null],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/vertical.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Zcfry/WT", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"checkbox\"],[9],[0,\"\\n\"],[4,\"component\",[[23,[\"labelComponent\"]]],null,{\"statements\":[[0,\"    \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[1,[27,\"component\",[[23,[\"errorsComponent\"]]],null],false],[0,\"\\n\"],[1,[27,\"component\",[[23,[\"helpTextComponent\"]]],null],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/element/layout/vertical/checkbox.hbs" } });
});
define("ember-bootstrap/templates/components/bs-form/group", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "HBwk1S/K", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"],[4,\"if\",[[23,[\"hasFeedback\"]]],null,{\"statements\":[[0,\"  \"],[7,\"span\"],[12,\"class\",[28,[\"form-control-feedback \",[21,\"iconName\"]]]],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-form/group.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal-simple", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "QeW3uFxV", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"inDom\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"_renderInPlace\"]]],null,{\"statements\":[[4,\"bs-modal/dialog\",null,[[\"onClose\",\"fade\",\"showModal\",\"id\",\"keyboard\",\"size\",\"backdropClose\",\"class\",\"inDom\",\"paddingLeft\",\"paddingRight\",\"centered\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[23,[\"fade\"]],[23,[\"showModal\"]],[23,[\"modalId\"]],[23,[\"keyboard\"]],[23,[\"size\"]],[23,[\"backdropClose\"]],[23,[\"class\"]],[23,[\"inDom\"]],[23,[\"paddingLeft\"]],[23,[\"paddingRight\"]],[27,\"bs-eq\",[[23,[\"position\"]],\"center\"],null]]],{\"statements\":[[0,\"      \"],[1,[27,\"bs-modal/header\",null,[[\"title\",\"closeButton\",\"onClose\"],[[23,[\"title\"]],[23,[\"closeButton\"]],[27,\"action\",[[22,0,[]],\"close\"],null]]]],false],[0,\"\\n\"],[4,\"bs-modal/body\",null,null,{\"statements\":[[0,\"        \"],[14,1,[[27,\"hash\",null,[[\"close\",\"submit\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[27,\"bs-modal/footer\",null,[[\"closeTitle\",\"submitTitle\",\"submitButtonType\",\"onClose\",\"onSubmit\"],[[23,[\"closeTitle\"]],[23,[\"submitTitle\"]],[23,[\"submitButtonType\"]],[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showBackdrop\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"modal-backdrop \",[27,\"if\",[[23,[\"fade\"]],\"fade\"],null],\" \",[27,\"if\",[[23,[\"showModal\"]],[23,[\"showClass\"]]],null]]]],[12,\"id\",[28,[[21,\"backdropId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"in-element\",[[23,[\"destinationElement\"]]],[[\"guid\",\"nextSibling\"],[\"%cursor:0%\",null]],{\"statements\":[[4,\"bs-modal/dialog\",null,[[\"onClose\",\"fade\",\"showModal\",\"id\",\"keyboard\",\"size\",\"backdropClose\",\"class\",\"inDom\",\"paddingLeft\",\"paddingRight\",\"centered\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[23,[\"fade\"]],[23,[\"showModal\"]],[23,[\"modalId\"]],[23,[\"keyboard\"]],[23,[\"size\"]],[23,[\"backdropClose\"]],[23,[\"class\"]],[23,[\"inDom\"]],[23,[\"paddingLeft\"]],[23,[\"paddingRight\"]],[27,\"bs-eq\",[[23,[\"position\"]],\"center\"],null]]],{\"statements\":[[0,\"      \"],[1,[27,\"bs-modal/header\",null,[[\"title\",\"closeButton\",\"onClose\"],[[23,[\"title\"]],[23,[\"closeButton\"]],[27,\"action\",[[22,0,[]],\"close\"],null]]]],false],[0,\"\\n\"],[4,\"bs-modal/body\",null,null,{\"statements\":[[0,\"        \"],[14,1,[[27,\"hash\",null,[[\"close\",\"submit\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[1,[27,\"bs-modal/footer\",null,[[\"closeTitle\",\"submitTitle\",\"submitButtonType\",\"onClose\",\"onSubmit\"],[[23,[\"closeTitle\"]],[23,[\"submitTitle\"]],[23,[\"submitButtonType\"]],[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showBackdrop\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"modal-backdrop \",[27,\"if\",[[23,[\"fade\"]],\"fade\"],null],\" \",[27,\"if\",[[23,[\"showModal\"]],[23,[\"showClass\"]]],null]]]],[12,\"id\",[28,[[21,\"backdropId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal-simple.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "c9ZSWvIo", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"inDom\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"_renderInPlace\"]]],null,{\"statements\":[[4,\"bs-modal/dialog\",null,[[\"onClose\",\"fade\",\"showModal\",\"id\",\"keyboard\",\"size\",\"backdropClose\",\"class\",\"inDom\",\"paddingLeft\",\"paddingRight\",\"centered\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[23,[\"fade\"]],[23,[\"showModal\"]],[23,[\"modalId\"]],[23,[\"keyboard\"]],[23,[\"size\"]],[23,[\"backdropClose\"]],[23,[\"class\"]],[23,[\"inDom\"]],[23,[\"paddingLeft\"]],[23,[\"paddingRight\"]],[27,\"bs-eq\",[[23,[\"position\"]],\"center\"],null]]],{\"statements\":[[0,\"      \"],[14,1,[[27,\"hash\",null,[[\"header\",\"body\",\"footer\",\"close\",\"submit\"],[[27,\"component\",[\"bs-modal/header\"],[[\"title\",\"onClose\"],[[23,[\"title\"]],[27,\"action\",[[22,0,[]],\"close\"],null]]]],[27,\"component\",[\"bs-modal/body\"],null],[27,\"component\",[\"bs-modal/footer\"],[[\"onClose\",\"onSubmit\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]],[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showBackdrop\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"modal-backdrop \",[27,\"if\",[[23,[\"fade\"]],\"fade\"],null],\" \",[27,\"if\",[[23,[\"showModal\"]],[23,[\"showClass\"]]],null]]]],[12,\"id\",[28,[[21,\"backdropId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"in-element\",[[23,[\"destinationElement\"]]],[[\"guid\",\"nextSibling\"],[\"%cursor:0%\",null]],{\"statements\":[[4,\"bs-modal/dialog\",null,[[\"onClose\",\"fade\",\"showModal\",\"id\",\"keyboard\",\"size\",\"backdropClose\",\"class\",\"inDom\",\"paddingLeft\",\"paddingRight\",\"centered\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[23,[\"fade\"]],[23,[\"showModal\"]],[23,[\"modalId\"]],[23,[\"keyboard\"]],[23,[\"size\"]],[23,[\"backdropClose\"]],[23,[\"class\"]],[23,[\"inDom\"]],[23,[\"paddingLeft\"]],[23,[\"paddingRight\"]],[27,\"bs-eq\",[[23,[\"position\"]],\"center\"],null]]],{\"statements\":[[0,\"      \"],[14,1,[[27,\"hash\",null,[[\"header\",\"body\",\"footer\",\"close\",\"submit\"],[[27,\"component\",[\"bs-modal/header\"],[[\"title\",\"onClose\"],[[23,[\"title\"]],[27,\"action\",[[22,0,[]],\"close\"],null]]]],[27,\"component\",[\"bs-modal/body\"],null],[27,\"component\",[\"bs-modal/footer\"],[[\"onClose\",\"onSubmit\"],[[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]],[27,\"action\",[[22,0,[]],\"close\"],null],[27,\"action\",[[22,0,[]],\"submit\"],null]]]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showBackdrop\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[12,\"class\",[28,[\"modal-backdrop \",[27,\"if\",[[23,[\"fade\"]],\"fade\"],null],\" \",[27,\"if\",[[23,[\"showModal\"]],[23,[\"showClass\"]]],null]]]],[12,\"id\",[28,[[21,\"backdropId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/body", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "lzUvbuQc", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/body.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/dialog", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "2dPoOnnB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"modal-dialog \",[21,\"sizeClass\"],\" \",[27,\"if\",[[23,[\"centered\"]],\"modal-dialog-centered\"],null]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"modal-content\"],[9],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/dialog.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/footer", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "WYmuO48D", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[24,1]],null,{\"statements\":[[0,\"  \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"hasSubmitButton\"]]],null,{\"statements\":[[0,\"    \"],[4,\"bs-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],[23,[\"onClose\"]]],null]]],{\"statements\":[[1,[21,\"closeTitle\"],false]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"bs-button\",null,[[\"type\",\"onClick\",\"disabled\"],[[23,[\"submitButtonType\"]],[27,\"action\",[[22,0,[]],[23,[\"onSubmit\"]]],null],[23,[\"submitDisabled\"]]]],{\"statements\":[[1,[21,\"submitTitle\"],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[4,\"bs-button\",null,[[\"type\",\"onClick\"],[\"primary\",[27,\"action\",[[22,0,[]],[23,[\"onClose\"]]],null]]],{\"statements\":[[1,[21,\"closeTitle\"],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/footer.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/header", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "nT9g5NbC", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"closeButton\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"bs-modal/header/close\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],[23,[\"onClose\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[24,1]],null,{\"statements\":[[0,\"  \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[4,\"bs-modal/header/title\",null,null,{\"statements\":[[1,[21,\"title\"],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/header.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/header/close", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "j9kGUdCW", "block": "{\"symbols\":[],\"statements\":[[7,\"span\"],[11,\"aria-hidden\",\"true\"],[9],[0,\"×\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/header/close.hbs" } });
});
define("ember-bootstrap/templates/components/bs-modal/header/title", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "ZPsvhQze", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-modal/header/title.hbs" } });
});
define("ember-bootstrap/templates/components/bs-nav", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "UGza0S7e", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"item\",\"link-to\",\"dropdown\"],[[27,\"component\",[[23,[\"itemComponent\"]]],null],[27,\"component\",[[23,[\"linkToComponent\"]]],null],[27,\"component\",[[23,[\"dropdownComponent\"]]],[[\"inNav\",\"tagName\"],[true,\"li\"]]]]]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-nav.hbs" } });
});
define("ember-bootstrap/templates/components/bs-nav/item", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "JjHghMPj", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-nav/item.hbs" } });
});
define("ember-bootstrap/templates/components/bs-navbar", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "oJqE3aBm", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[12,\"class\",[27,\"if\",[[23,[\"fluid\"]],\"container-fluid\",\"container\"],null]],[9],[0,\"\\n  \"],[14,1,[[27,\"hash\",null,[[\"toggle\",\"content\",\"nav\",\"collapse\",\"expand\"],[[27,\"component\",[\"bs-navbar/toggle\"],[[\"onClick\",\"collapsed\"],[[27,\"action\",[[22,0,[]],\"toggleNavbar\"],null],[23,[\"_collapsed\"]]]]],[27,\"component\",[\"bs-navbar/content\"],[[\"collapsed\",\"onHidden\",\"onShown\"],[[23,[\"_collapsed\"]],[23,[\"onCollapsed\"]],[23,[\"onExpanded\"]]]]],[27,\"component\",[\"bs-navbar/nav\"],[[\"linkToComponent\"],[[27,\"component\",[\"bs-navbar/link-to\"],[[\"onCollapse\"],[[27,\"action\",[[22,0,[]],\"collapse\"],null]]]]]]],[27,\"action\",[[22,0,[]],\"collapse\"],null],[27,\"action\",[[22,0,[]],\"expand\"],null]]]]]],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-navbar.hbs" } });
});
define("ember-bootstrap/templates/components/bs-navbar/content", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "dCUp3YIX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-navbar/content.hbs" } });
});
define("ember-bootstrap/templates/components/bs-navbar/toggle", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Q+MNngY4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[24,1]],null,{\"statements\":[[0,\"  \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Toggle navigation\"],[10],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-navbar/toggle.hbs" } });
});
define("ember-bootstrap/templates/components/bs-popover", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "jwjs/XDp", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"inDom\"]]],null,{\"statements\":[[4,\"bs-popover/element\",null,[[\"id\",\"parent\",\"placement\",\"fade\",\"showHelp\",\"title\",\"class\",\"renderInPlace\",\"popperTarget\",\"autoPlacement\",\"viewportElement\",\"viewportPadding\"],[[23,[\"overlayId\"]],[22,0,[]],[23,[\"placement\"]],[23,[\"fade\"]],[23,[\"showHelp\"]],[23,[\"title\"]],[23,[\"class\"]],[23,[\"_renderInPlace\"]],[23,[\"triggerTargetElement\"]],[23,[\"autoPlacement\"]],[23,[\"viewportElement\"]],[23,[\"viewportPadding\"]]]],{\"statements\":[[0,\"    \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-popover.hbs" } });
});
define("ember-bootstrap/templates/components/bs-popover/element", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "mfr1RxBU", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"ember-popper\",null,[[\"id\",\"class\",\"ariaRole\",\"placement\",\"renderInPlace\",\"popperTarget\",\"modifiers\",\"popperContainer\",\"onCreate\",\"onUpdate\"],[[23,[\"id\"]],[23,[\"popperClass\"]],[23,[\"ariaRole\"]],[23,[\"placement\"]],[23,[\"renderInPlace\"]],[23,[\"popperTarget\"]],[23,[\"popperModifiers\"]],\"#ember-bootstrap-wormhole\",[27,\"action\",[[22,0,[]],\"updatePlacement\"],null],[27,\"action\",[[22,0,[]],\"updatePlacement\"],null]]],{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[21,\"arrowClass\"]],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"hasTitle\"]]],null,{\"statements\":[[0,\"    \"],[7,\"h3\"],[12,\"class\",[21,\"titleClass\"]],[9],[1,[21,\"title\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"div\"],[12,\"class\",[21,\"contentClass\"]],[9],[14,1],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-popover/element.hbs" } });
});
define("ember-bootstrap/templates/components/bs-progress", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "e5z11f0Q", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[27,\"hash\",null,[[\"bar\"],[[27,\"component\",[\"bs-progress/bar\"],null]]]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-progress.hbs" } });
});
define("ember-bootstrap/templates/components/bs-progress/bar", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "OnuU4eqw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"showLabel\"]]],null,{\"statements\":[[4,\"if\",[[24,1]],null,{\"statements\":[[0,\"    \"],[14,1,[[23,[\"percentRounded\"]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[21,\"percentRounded\"],false],[0,\"%\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[24,1]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[14,1,[[23,[\"percentRounded\"]]]],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[1,[21,\"percentRounded\"],false],[0,\"%\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-progress/bar.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tab", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "1CaqGo/G", "block": "{\"symbols\":[\"nav\",\"item\",\"dd\",\"menu\",\"subItem\",\"&default\"],\"statements\":[[4,\"if\",[[23,[\"customTabs\"]]],null,{\"statements\":[[0,\"  \"],[14,6,[[27,\"hash\",null,[[\"pane\",\"activeId\",\"select\"],[[27,\"component\",[\"bs-tab/pane\"],[[\"parent\",\"activeId\",\"fade\",\"fadeTransition\"],[[22,0,[]],[23,[\"isActiveId\"]],[23,[\"fade\"]],[23,[\"fadeTransition\"]]]]],[23,[\"isActiveId\"]],[27,\"action\",[[22,0,[]],\"select\"],null]]]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"bs-nav\",null,[[\"type\"],[[23,[\"type\"]]]],{\"statements\":[[4,\"each\",[[23,[\"navItems\"]]],null,{\"statements\":[[4,\"if\",[[22,2,[\"isGroup\"]]],null,{\"statements\":[[4,\"component\",[[22,1,[\"dropdown\"]]],[[\"class\"],[[27,\"if\",[[27,\"bs-contains\",[[22,2,[\"childIds\"]],[23,[\"isActiveId\"]]],null],\"active\"],null]]],{\"statements\":[[0,\"          \"],[4,\"component\",[[22,3,[\"toggle\"]]],null,{\"statements\":[[1,[22,2,[\"groupTitle\"]],false],[0,\" \"],[7,\"span\"],[11,\"class\",\"caret\"],[9],[10]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"menu\"]]],null,{\"statements\":[[4,\"each\",[[22,2,[\"children\"]]],null,{\"statements\":[[4,\"component\",[[22,4,[\"item\"]]],[[\"class\"],[[27,\"if\",[[27,\"bs-eq\",[[23,[\"isActiveId\"]],[22,5,[\"elementId\"]]],null],\"active\"],null]]],{\"statements\":[[0,\"                \"],[7,\"a\"],[12,\"href\",[28,[\"#\",[22,5,[\"elementId\"]]]]],[11,\"role\",\"tab\"],[12,\"class\",[27,\"if\",[[27,\"bs-eq\",[[23,[\"isActiveId\"]],[22,5,[\"elementId\"]]],null],\"nav-link active\",\"nav-link\"],null]],[3,\"action\",[[22,0,[]],\"select\",[22,5,[\"elementId\"]]]],[9],[0,\"\\n                  \"],[1,[22,5,[\"title\"]],false],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[5]},null]],\"parameters\":[4]},null]],\"parameters\":[3]},null]],\"parameters\":[]},{\"statements\":[[4,\"component\",[[22,1,[\"item\"]]],[[\"active\"],[[27,\"bs-eq\",[[22,2,[\"elementId\"]],[23,[\"isActiveId\"]]],null]]],{\"statements\":[[0,\"          \"],[7,\"a\"],[12,\"href\",[28,[\"#\",[22,2,[\"elementId\"]]]]],[11,\"role\",\"tab\"],[12,\"class\",[27,\"if\",[[27,\"bs-eq\",[[23,[\"isActiveId\"]],[22,2,[\"elementId\"]]],null],\"nav-link active\",\"nav-link\"],null]],[3,\"action\",[[22,0,[]],\"select\",[22,2,[\"elementId\"]]]],[9],[0,\"\\n            \"],[1,[22,2,[\"title\"]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[2]},null]],\"parameters\":[1]},null],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tab-content\"],[9],[0,\"\\n    \"],[14,6,[[27,\"hash\",null,[[\"pane\",\"activeId\",\"select\"],[[27,\"component\",[\"bs-tab/pane\"],[[\"parent\",\"activeId\",\"fade\",\"fadeTransition\"],[[22,0,[]],[23,[\"isActiveId\"]],[23,[\"fade\"]],[23,[\"fadeTransition\"]]]]],[23,[\"isActiveId\"]],[27,\"action\",[[22,0,[]],\"select\"],null]]]]]],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tab.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tab/pane", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "c8Xih854", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tab/pane.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tooltip", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "EckSD5QB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"inDom\"]]],null,{\"statements\":[[4,\"bs-tooltip/element\",null,[[\"id\",\"placement\",\"fade\",\"showHelp\",\"class\",\"renderInPlace\",\"popperTarget\",\"autoPlacement\",\"viewportElement\",\"viewportPadding\"],[[23,[\"overlayId\"]],[23,[\"placement\"]],[23,[\"fade\"]],[23,[\"showHelp\"]],[23,[\"class\"]],[23,[\"_renderInPlace\"]],[23,[\"triggerTargetElement\"]],[23,[\"autoPlacement\"]],[23,[\"viewportElement\"]],[23,[\"viewportPadding\"]]]],{\"statements\":[[4,\"if\",[[24,1]],null,{\"statements\":[[0,\"      \"],[14,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[21,\"title\"],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tooltip.hbs" } });
});
define("ember-bootstrap/templates/components/bs-tooltip/element", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "Ybkhunt0", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"ember-popper\",null,[[\"id\",\"class\",\"ariaRole\",\"placement\",\"renderInPlace\",\"popperTarget\",\"modifiers\",\"popperContainer\",\"onCreate\",\"onUpdate\"],[[23,[\"id\"]],[23,[\"popperClass\"]],[23,[\"ariaRole\"]],[23,[\"placement\"]],[23,[\"renderInPlace\"]],[23,[\"popperTarget\"]],[23,[\"popperModifiers\"]],\"#ember-bootstrap-wormhole\",[27,\"action\",[[22,0,[]],\"updatePlacement\"],null],[27,\"action\",[[22,0,[]],\"updatePlacement\"],null]]],{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[21,\"arrowClass\"]],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tooltip-inner\"],[9],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "ember-bootstrap/templates/components/bs-tooltip/element.hbs" } });
});
define('ember-bootstrap/utils/dom', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.findElementById = findElementById;
  exports.getDOM = getDOM;


  function childNodesOfElement(element) {
    var children = [];
    var child = element.firstChild;
    while (child) {
      children.push(child);
      child = child.nextSibling;
    }
    return children;
  } /*
     * Implement some helpers methods for interacting with the DOM,
     * be it Fastboot's SimpleDOM or the browser's version.
     *
     * Credit to https://github.com/yapplabs/ember-wormhole, from where this has been shamelessly stolen.
     */

  function findElementById(doc, id) {
    if (doc.getElementById) {
      return doc.getElementById(id);
    }

    var nodes = childNodesOfElement(doc);
    var node = void 0;

    while (nodes.length) {
      node = nodes.shift();

      if (node.getAttribute && node.getAttribute('id') === id) {
        return node;
      }
      nodes = childNodesOfElement(node).concat(nodes);
    }
  }

  // Private Ember API usage. Get the dom implementation used by the current
  // renderer, be it native browser DOM or Fastboot SimpleDOM
  function getDOM(context) {
    var renderer = context.renderer;

    if (!renderer._dom) {
      // pre glimmer2
      var container = Ember.getOwner ? Ember.getOwner(context) : context.container;
      var documentService = container.lookup('service:-document');

      if (documentService) {
        return documentService;
      }

      renderer = container.lookup('renderer:-dom');
    }

    if (renderer._dom && renderer._dom.document) {
      return renderer._dom.document;
    } else {
      throw new Error('Could not get DOM');
    }
  }
});
define('ember-bootstrap/utils/get-parent', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getParent;
  function getParent(view) {
    if (Ember.get(view, 'tagName') === '') {
      // Beware: use of private API! :(
      if (Ember.ViewUtils && Ember.ViewUtils.getViewBounds) {
        return Ember.ViewUtils.getViewBounds(view).parentElement;
      } else {
        return view._renderNode.contextualElement;
      }
    } else {
      return Ember.get(view, 'element').parentNode;
    }
  }
});
define('ember-bootstrap/utils/listen-to-cp', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (dependentKey) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    return Ember.computed(dependentKey, {
      get: function get() {
        return Ember.getWithDefault(this, dependentKey, defaultValue);
      },
      set: function set(key, value) {
        // eslint-disable-line no-unused-vars
        return value;
      }
    });
  };
});
define('ember-bootstrap/utils/transition-end', ['exports', 'ember-bootstrap/utils/transition-support'], function (exports, _transitionSupport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = onTransitionEnd;
  function onTransitionEnd(node, handler, context) {
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (!node) {
      return;
    }
    var fakeEvent = {
      target: node,
      currentTarget: node
    };
    var backup = void 0;

    if (_transitionSupport.default) {
      node.addEventListener(_transitionSupport.default, done, false);

      backup = Ember.run.later(this, done, fakeEvent, duration);
    } else {
      Ember.run.later(this, done, fakeEvent, 0);
    }

    function done(event) {
      if (backup) {
        Ember.run.cancel(backup);
      }
      node.removeEventListener(_transitionSupport.default, done);
      Ember.run.join(context, handler, event);
    }
  }
});
define('ember-bootstrap/utils/transition-support', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function transitionSupport() {
    var el = document.createElement('bootstrap');

    var transEndEventNames = {
      transition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return transEndEventNames[name];
      }
    }

    return false;
  }

  exports.default = typeof document !== 'undefined' && transitionSupport();
});
define('ember-concurrency/-buffer-policy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var saturateActiveQueue = function saturateActiveQueue(scheduler) {
    while (scheduler.activeTaskInstances.length < scheduler.maxConcurrency) {
      var taskInstance = scheduler.queuedTaskInstances.shift();
      if (!taskInstance) {
        break;
      }
      scheduler.activeTaskInstances.push(taskInstance);
    }
  };

  function numPerformSlots(scheduler) {
    return scheduler.maxConcurrency - scheduler.queuedTaskInstances.length - scheduler.activeTaskInstances.length;
  }

  var enqueueTasksPolicy = exports.enqueueTasksPolicy = {
    requiresUnboundedConcurrency: true,
    schedule: function schedule(scheduler) {
      // [a,b,_] [c,d,e,f] becomes
      // [a,b,c] [d,e,f]
      saturateActiveQueue(scheduler);
    },
    getNextPerformStatus: function getNextPerformStatus(scheduler) {
      return numPerformSlots(scheduler) > 0 ? 'succeed' : 'enqueue';
    }
  };

  var dropQueuedTasksPolicy = exports.dropQueuedTasksPolicy = {
    cancelReason: 'it belongs to a \'drop\' Task that was already running',
    schedule: function schedule(scheduler) {
      // [a,b,_] [c,d,e,f] becomes
      // [a,b,c] []
      saturateActiveQueue(scheduler);
      scheduler.spliceTaskInstances(this.cancelReason, scheduler.queuedTaskInstances, 0, scheduler.queuedTaskInstances.length);
    },
    getNextPerformStatus: function getNextPerformStatus(scheduler) {
      return numPerformSlots(scheduler) > 0 ? 'succeed' : 'drop';
    }
  };

  var cancelOngoingTasksPolicy = exports.cancelOngoingTasksPolicy = {
    cancelReason: 'it belongs to a \'restartable\' Task that was .perform()ed again',
    schedule: function schedule(scheduler) {
      // [a,b,_] [c,d,e,f] becomes
      // [d,e,f] []
      var activeTaskInstances = scheduler.activeTaskInstances;
      var queuedTaskInstances = scheduler.queuedTaskInstances;
      activeTaskInstances.push.apply(activeTaskInstances, _toConsumableArray(queuedTaskInstances));
      queuedTaskInstances.length = 0;

      var numToShift = Math.max(0, activeTaskInstances.length - scheduler.maxConcurrency);
      scheduler.spliceTaskInstances(this.cancelReason, activeTaskInstances, 0, numToShift);
    },
    getNextPerformStatus: function getNextPerformStatus(scheduler) {
      return numPerformSlots(scheduler) > 0 ? 'succeed' : 'cancel_previous';
    }
  };

  var dropButKeepLatestPolicy = exports.dropButKeepLatestPolicy = {
    cancelReason: 'it belongs to a \'keepLatest\' Task that was already running',
    schedule: function schedule(scheduler) {
      // [a,b,_] [c,d,e,f] becomes
      // [d,e,f] []
      saturateActiveQueue(scheduler);
      scheduler.spliceTaskInstances(this.cancelReason, scheduler.queuedTaskInstances, 0, scheduler.queuedTaskInstances.length - 1);
    }
  };
});
define('ember-concurrency/-cancelable-promise-helpers', ['exports', 'ember-concurrency/-task-instance', 'ember-concurrency/utils'], function (exports, _taskInstance, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hash = exports.race = exports.allSettled = exports.all = undefined;

  var _marked = regeneratorRuntime.mark(resolver);

  var asyncAll = taskAwareVariantOf(Ember.RSVP.Promise, 'all', identity);

  function resolver(value) {
    return regeneratorRuntime.wrap(function resolver$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', value);

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  /**
   * A cancelation-aware variant of [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
   * The normal version of a `Promise.all` just returns a regular, uncancelable
   * Promise. The `ember-concurrency` variant of `all()` has the following
   * additional behavior:
   *
   * - if the task that `yield`ed `all()` is canceled, any of the
   *   {@linkcode TaskInstance}s passed in to `all` will be canceled
   * - if any of the {@linkcode TaskInstance}s (or regular promises) passed in reject (or
   *   are canceled), all of the other unfinished `TaskInstance`s will
   *   be automatically canceled.
   *
   * [Check out the "Awaiting Multiple Child Tasks example"](/#/docs/examples/joining-tasks)
   */
  var all = exports.all = function all(things) {
    if (things.length === 0) {
      return things;
    }

    for (var i = 0; i < things.length; ++i) {
      var t = things[i];
      if (!(t && t[_utils.yieldableSymbol])) {
        return asyncAll(things);
      }
    }

    var isAsync = false;
    var taskInstances = things.map(function (thing) {
      var ti = _taskInstance.default.create({
        // TODO: consider simpler iterator than full on generator fn?
        fn: resolver,
        args: [thing]
      })._start();

      if (ti._completionState !== 1) {
        isAsync = true;
      }
      return ti;
    });

    if (isAsync) {
      return asyncAll(taskInstances);
    } else {
      return taskInstances.map(function (ti) {
        return ti.value;
      });
    }
  };

  /**
   * A cancelation-aware variant of [RSVP.allSettled](http://emberjs.com/api/classes/RSVP.html#method_allSettled).
   * The normal version of a `RSVP.allSettled` just returns a regular, uncancelable
   * Promise. The `ember-concurrency` variant of `allSettled()` has the following
   * additional behavior:
   *
   * - if the task that `yield`ed `allSettled()` is canceled, any of the
   *   {@linkcode TaskInstance}s passed in to `allSettled` will be canceled
   */
  var allSettled = exports.allSettled = taskAwareVariantOf(Ember.RSVP, 'allSettled', identity);

  /**
   * A cancelation-aware variant of [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race).
   * The normal version of a `Promise.race` just returns a regular, uncancelable
   * Promise. The `ember-concurrency` variant of `race()` has the following
   * additional behavior:
   *
   * - if the task that `yield`ed `race()` is canceled, any of the
   *   {@linkcode TaskInstance}s passed in to `race` will be canceled
   * - once any of the tasks/promises passed in complete (either success, failure,
   *   or cancelation), any of the {@linkcode TaskInstance}s passed in will be canceled
   *
   * [Check out the "Awaiting Multiple Child Tasks example"](/#/docs/examples/joining-tasks)
   */
  var race = exports.race = taskAwareVariantOf(Ember.RSVP.Promise, 'race', identity);

  /**
   * A cancelation-aware variant of [RSVP.hash](http://emberjs.com/api/classes/RSVP.html#hash).
   * The normal version of a `RSVP.hash` just returns a regular, uncancelable
   * Promise. The `ember-concurrency` variant of `hash()` has the following
   * additional behavior:
   *
   * - if the task that `yield`ed `hash()` is canceled, any of the
   *   {@linkcode TaskInstance}s passed in to `allSettled` will be canceled
   * - if any of the items rejects/cancels, all other cancelable items
   *   (e.g. {@linkcode TaskInstance}s) will be canceled
   */
  var hash = exports.hash = taskAwareVariantOf(Ember.RSVP, 'hash', getValues);

  function identity(obj) {
    return obj;
  }

  function getValues(obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  }

  function taskAwareVariantOf(obj, method, getItems) {
    return function (thing) {
      var items = getItems(thing);
      var defer = Ember.RSVP.defer();

      obj[method](thing).then(defer.resolve, defer.reject);

      var hasCancelled = false;
      var cancelAll = function cancelAll() {
        if (hasCancelled) {
          return;
        }
        hasCancelled = true;
        items.forEach(function (it) {
          if (it) {
            if (it instanceof _taskInstance.default) {
              it.cancel();
            } else if (typeof it.__ec_cancel__ === 'function') {
              it.__ec_cancel__();
            }
          }
        });
      };

      var promise = defer.promise.finally(cancelAll);
      promise.__ec_cancel__ = cancelAll;
      return promise;
    };
  }
});
define('ember-concurrency/-encapsulated-task', ['exports', 'ember-concurrency/-task-instance'], function (exports, _taskInstance) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _taskInstance.default.extend({
    _makeIterator: function _makeIterator() {
      var perform = this.get('perform');
      (true && !(typeof perform === 'function') && Ember.assert("The object passed to `task()` must define a `perform` generator function, e.g. `perform: function * (a,b,c) {...}`, or better yet `*perform(a,b,c) {...}`", typeof perform === 'function'));

      return perform.apply(this, this.args);
    },


    perform: null
  });
});
define('ember-concurrency/-helpers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.taskHelperClosure = taskHelperClosure;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function taskHelperClosure(helperName, taskMethod, _args, hash) {
    var task = _args[0];
    var outerArgs = _args.slice(1);

    return Ember.run.bind(null, function () {
      if (!task || typeof task[taskMethod] !== 'function') {
        (true && !(false) && Ember.assert('The first argument passed to the `' + helperName + '` helper should be a Task object (without quotes); you passed ' + task, false));

        return;
      }

      for (var _len = arguments.length, innerArgs = Array(_len), _key = 0; _key < _len; _key++) {
        innerArgs[_key] = arguments[_key];
      }

      if (hash && hash.value) {
        var event = innerArgs.pop();
        innerArgs.push(Ember.get(event, hash.value));
      }

      return task[taskMethod].apply(task, _toConsumableArray(outerArgs).concat(innerArgs));
    });
  }
});
define('ember-concurrency/-property-modifiers-mixin', ['exports', 'ember-concurrency/-scheduler', 'ember-concurrency/-buffer-policy'], function (exports, _scheduler, _bufferPolicy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.propertyModifiers = undefined;
  exports.resolveScheduler = resolveScheduler;
  var propertyModifiers = exports.propertyModifiers = {
    // by default, task(...) expands to task(...).enqueue().maxConcurrency(Infinity)
    _bufferPolicy: _bufferPolicy.enqueueTasksPolicy,
    _maxConcurrency: Infinity,
    _taskGroupPath: null,
    _hasUsedModifier: false,
    _hasSetBufferPolicy: false,
    _hasEnabledEvents: false,

    restartable: function restartable() {
      return setBufferPolicy(this, _bufferPolicy.cancelOngoingTasksPolicy);
    },
    enqueue: function enqueue() {
      return setBufferPolicy(this, _bufferPolicy.enqueueTasksPolicy);
    },
    drop: function drop() {
      return setBufferPolicy(this, _bufferPolicy.dropQueuedTasksPolicy);
    },
    keepLatest: function keepLatest() {
      return setBufferPolicy(this, _bufferPolicy.dropButKeepLatestPolicy);
    },
    maxConcurrency: function maxConcurrency(n) {
      this._hasUsedModifier = true;
      this._maxConcurrency = n;
      assertModifiersNotMixedWithGroup(this);
      return this;
    },
    group: function group(taskGroupPath) {
      this._taskGroupPath = taskGroupPath;
      assertModifiersNotMixedWithGroup(this);
      return this;
    },
    evented: function evented() {
      this._hasEnabledEvents = true;
      return this;
    },
    debug: function debug() {
      this._debug = true;
      return this;
    }
  };

  function setBufferPolicy(obj, policy) {
    obj._hasSetBufferPolicy = true;
    obj._hasUsedModifier = true;
    obj._bufferPolicy = policy;
    assertModifiersNotMixedWithGroup(obj);

    if (obj._maxConcurrency === Infinity) {
      obj._maxConcurrency = 1;
    }

    return obj;
  }

  function assertModifiersNotMixedWithGroup(obj) {
    (true && !(!obj._hasUsedModifier || !obj._taskGroupPath) && Ember.assert('ember-concurrency does not currently support using both .group() with other task modifiers (e.g. drop(), enqueue(), restartable())', !obj._hasUsedModifier || !obj._taskGroupPath));
  }

  function resolveScheduler(propertyObj, obj, TaskGroup) {
    if (propertyObj._taskGroupPath) {
      var taskGroup = obj.get(propertyObj._taskGroupPath);
      (true && !(taskGroup instanceof TaskGroup) && Ember.assert('Expected path \'' + propertyObj._taskGroupPath + '\' to resolve to a TaskGroup object, but instead was ' + taskGroup, taskGroup instanceof TaskGroup));

      return taskGroup._scheduler;
    } else {
      return _scheduler.default.create({
        bufferPolicy: propertyObj._bufferPolicy,
        maxConcurrency: propertyObj._maxConcurrency
      });
    }
  }
});
define('ember-concurrency/-scheduler', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var SEEN_INDEX = 0;

  var Scheduler = Ember.Object.extend({
    lastPerformed: null,
    lastStarted: null,
    lastRunning: null,
    lastSuccessful: null,
    lastComplete: null,
    lastErrored: null,
    lastCanceled: null,
    lastIncomplete: null,
    performCount: 0,

    boundHandleFulfill: null,
    boundHandleReject: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.activeTaskInstances = [];
      this.queuedTaskInstances = [];
    },
    cancelAll: function cancelAll(reason) {
      var seen = [];
      this.spliceTaskInstances(reason, this.activeTaskInstances, 0, this.activeTaskInstances.length, seen);
      this.spliceTaskInstances(reason, this.queuedTaskInstances, 0, this.queuedTaskInstances.length, seen);
      flushTaskCounts(seen);
    },
    spliceTaskInstances: function spliceTaskInstances(cancelReason, taskInstances, index, count, seen) {
      for (var i = index; i < index + count; ++i) {
        var taskInstance = taskInstances[i];

        if (!taskInstance.hasStarted) {
          // This tracking logic is kinda spread all over the place...
          // maybe TaskInstances themselves could notify
          // some delegate of queued state changes upon cancelation?
          taskInstance.task.decrementProperty('numQueued');
        }

        taskInstance.cancel(cancelReason);
        if (seen) {
          seen.push(taskInstance.task);
        }
      }
      taskInstances.splice(index, count);
    },
    schedule: function schedule(taskInstance) {
      Ember.set(this, 'lastPerformed', taskInstance);
      this.incrementProperty('performCount');
      taskInstance.task.incrementProperty('numQueued');
      this.queuedTaskInstances.push(taskInstance);
      this._flushQueues();
    },
    _flushQueues: function _flushQueues() {
      var seen = [];

      for (var i = 0; i < this.activeTaskInstances.length; ++i) {
        seen.push(this.activeTaskInstances[i].task);
      }

      this.activeTaskInstances = filterFinished(this.activeTaskInstances);

      this.bufferPolicy.schedule(this);

      var lastStarted = null;
      for (var _i = 0; _i < this.activeTaskInstances.length; ++_i) {
        var taskInstance = this.activeTaskInstances[_i];
        if (!taskInstance.hasStarted) {
          this._startTaskInstance(taskInstance);
          lastStarted = taskInstance;
        }
        seen.push(taskInstance.task);
      }

      if (lastStarted) {
        Ember.set(this, 'lastStarted', lastStarted);
      }
      Ember.set(this, 'lastRunning', lastStarted);

      for (var _i2 = 0; _i2 < this.queuedTaskInstances.length; ++_i2) {
        seen.push(this.queuedTaskInstances[_i2].task);
      }

      flushTaskCounts(seen);
      Ember.set(this, 'concurrency', this.activeTaskInstances.length);
    },
    _startTaskInstance: function _startTaskInstance(taskInstance) {
      var _this = this;

      var task = taskInstance.task;
      task.decrementProperty('numQueued');
      task.incrementProperty('numRunning');

      taskInstance._start()._onFinalize(function () {
        task.decrementProperty('numRunning');
        var state = taskInstance._completionState;
        Ember.set(_this, 'lastComplete', taskInstance);
        if (state === 1) {
          Ember.set(_this, 'lastSuccessful', taskInstance);
        } else {
          if (state === 2) {
            Ember.set(_this, 'lastErrored', taskInstance);
          } else if (state === 3) {
            Ember.set(_this, 'lastCanceled', taskInstance);
          }
          Ember.set(_this, 'lastIncomplete', taskInstance);
        }
        Ember.run.once(_this, _this._flushQueues);
      });
    }
  });

  function flushTaskCounts(tasks) {
    SEEN_INDEX++;
    for (var i = 0, l = tasks.length; i < l; ++i) {
      var task = tasks[i];
      if (task._seenIndex < SEEN_INDEX) {
        task._seenIndex = SEEN_INDEX;
        updateTaskChainCounts(task);
      }
    }
  }

  function updateTaskChainCounts(task) {
    var numRunning = task.numRunning;
    var numQueued = task.numQueued;
    var taskGroup = task.get('group');

    while (taskGroup) {
      Ember.set(taskGroup, 'numRunning', numRunning);
      Ember.set(taskGroup, 'numQueued', numQueued);
      taskGroup = taskGroup.get('group');
    }
  }

  function filterFinished(taskInstances) {
    var ret = [];
    for (var i = 0, l = taskInstances.length; i < l; ++i) {
      var taskInstance = taskInstances[i];
      if (Ember.get(taskInstance, 'isFinished') === false) {
        ret.push(taskInstance);
      }
    }
    return ret;
  }

  exports.default = Scheduler;
});
define('ember-concurrency/-task-group', ['exports', 'ember-concurrency/utils', 'ember-concurrency/-task-state-mixin', 'ember-concurrency/-property-modifiers-mixin'], function (exports, _utils, _taskStateMixin, _propertyModifiersMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TaskGroup = undefined;
  exports.TaskGroupProperty = TaskGroupProperty;
  var TaskGroup = exports.TaskGroup = Ember.Object.extend(_taskStateMixin.default, {
    isTaskGroup: true,

    toString: function toString() {
      return '<TaskGroup:' + this._propertyName + '>';
    },


    _numRunningOrNumQueued: Ember.computed.or('numRunning', 'numQueued'),
    isRunning: Ember.computed.bool('_numRunningOrNumQueued'),
    isQueued: false
  });

  function TaskGroupProperty() {
    for (var _len = arguments.length, decorators = Array(_len), _key = 0; _key < _len; _key++) {
      decorators[_key] = arguments[_key];
    }

    var taskFn = decorators.pop();
    var tp = this;
    _utils._ComputedProperty.call(this, function (_propertyName) {
      return TaskGroup.create({
        fn: taskFn,
        context: this,
        _origin: this,
        _taskGroupPath: tp._taskGroupPath,
        _scheduler: (0, _propertyModifiersMixin.resolveScheduler)(tp, this, TaskGroup),
        _propertyName: _propertyName
      });
    });
  }

  TaskGroupProperty.prototype = Object.create(_utils._ComputedProperty.prototype);
  (0, _utils.objectAssign)(TaskGroupProperty.prototype, _propertyModifiersMixin.propertyModifiers, {
    constructor: TaskGroupProperty
  });
});
define('ember-concurrency/-task-instance', ['exports', 'ember-concurrency/utils'], function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PERFORM_TYPE_LINKED = exports.PERFORM_TYPE_UNLINKED = exports.PERFORM_TYPE_DEFAULT = undefined;
  exports.getRunningInstance = getRunningInstance;
  exports.didCancel = didCancel;
  exports.go = go;
  exports.wrap = wrap;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var TASK_CANCELATION_NAME = 'TaskCancelation';

  var COMPLETION_PENDING = 0;
  var COMPLETION_SUCCESS = 1;
  var COMPLETION_ERROR = 2;
  var COMPLETION_CANCEL = 3;

  var GENERATOR_STATE_BEFORE_CREATE = "BEFORE_CREATE";
  var GENERATOR_STATE_HAS_MORE_VALUES = "HAS_MORE_VALUES";
  var GENERATOR_STATE_DONE = "DONE";
  var GENERATOR_STATE_ERRORED = "ERRORED";

  var PERFORM_TYPE_DEFAULT = exports.PERFORM_TYPE_DEFAULT = "PERFORM_TYPE_DEFAULT";
  var PERFORM_TYPE_UNLINKED = exports.PERFORM_TYPE_UNLINKED = "PERFORM_TYPE_UNLINKED";
  var PERFORM_TYPE_LINKED = exports.PERFORM_TYPE_LINKED = "PERFORM_TYPE_LINKED";

  var TASK_INSTANCE_STACK = [];

  function getRunningInstance() {
    return TASK_INSTANCE_STACK[TASK_INSTANCE_STACK.length - 1];
  }

  function handleYieldedUnknownThenable(thenable, taskInstance, resumeIndex) {
    thenable.then(function (value) {
      taskInstance.proceed(resumeIndex, _utils.YIELDABLE_CONTINUE, value);
    }, function (error) {
      taskInstance.proceed(resumeIndex, _utils.YIELDABLE_THROW, error);
    });
  }

  /**
   * Returns true if the object passed to it is a TaskCancelation error.
   * If you call `someTask.perform().catch(...)` or otherwise treat
   * a {@linkcode TaskInstance} like a promise, you may need to
   * handle the cancelation of a TaskInstance differently from
   * other kinds of errors it might throw, and you can use this
   * convenience function to distinguish cancelation from errors.
   *
   * ```js
   * click() {
   *   this.get('myTask').perform().catch(e => {
   *     if (!didCancel(e)) { throw e; }
   *   });
   * }
   * ```
   *
   * @param {Object} error the caught error, which might be a TaskCancelation
   * @returns {Boolean}
   */
  function didCancel(e) {
    return e && e.name === TASK_CANCELATION_NAME;
  }

  function forwardToInternalPromise(method) {
    return function () {
      var _get;

      this._hasSubscribed = true;
      return (_get = this.get('_promise'))[method].apply(_get, arguments);
    };
  }

  function spliceSlice(str, index, count, add) {
    return str.slice(0, index) + (add || "") + str.slice(index + count);
  }

  /**
    A `TaskInstance` represent a single execution of a
    {@linkcode Task}. Every call to {@linkcode Task#perform} returns
    a `TaskInstance`.
  
    `TaskInstance`s are cancelable, either explicitly
    via {@linkcode TaskInstance#cancel} or {@linkcode Task#cancelAll},
    or automatically due to the host object being destroyed, or
    because concurrency policy enforced by a
    {@linkcode TaskProperty Task Modifier} canceled the task instance.
  
    <style>
      .ignore-this--this-is-here-to-hide-constructor,
      #TaskInstance { display: none }
    </style>
  
    @class TaskInstance
  */
  var taskInstanceAttrs = {
    iterator: null,
    _disposer: null,
    _completionState: COMPLETION_PENDING,
    task: null,
    args: [],
    _hasSubscribed: false,
    _runLoop: true,
    _debug: false,
    _hasEnabledEvents: false,
    cancelReason: null,
    _performType: PERFORM_TYPE_DEFAULT,
    _expectsLinkedYield: false,

    /**
     * If this TaskInstance runs to completion by returning a property
     * other than a rejecting promise, this property will be set
     * with that value.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    value: null,

    /**
     * If this TaskInstance is canceled or throws an error (or yields
     * a promise that rejects), this property will be set with that error.
     * Otherwise, it is null.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    error: null,

    /**
     * True if the task instance is fulfilled.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    isSuccessful: false,

    /**
     * True if the task instance resolves to a rejection.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    isError: false,

    /**
     * True if the task instance was canceled before it could run to completion.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    isCanceled: Ember.computed.and('isCanceling', 'isFinished'),
    isCanceling: false,

    /**
     * True if the task instance has started, else false.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    hasStarted: false,

    /**
     * True if the task has run to completion.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    isFinished: false,

    /**
     * True if the task is still running.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    isRunning: Ember.computed.not('isFinished'),

    /**
     * Describes the state that the task instance is in. Can be used for debugging,
     * or potentially driving some UI state. Possible values are:
     *
     * - `"dropped"`: task instance was canceled before it started
     * - `"canceled"`: task instance was canceled before it could finish
     * - `"finished"`: task instance ran to completion (even if an exception was thrown)
     * - `"running"`: task instance is currently running (returns true even if
     *     is paused on a yielded promise)
     * - `"waiting"`: task instance hasn't begun running yet (usually
     *     because the task is using the {@linkcode TaskProperty#enqueue .enqueue()}
     *     task modifier)
     *
     * The animated timeline examples on the [Task Concurrency](/#/docs/task-concurrency)
     * docs page make use of this property.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    state: Ember.computed('isDropped', 'isCanceling', 'hasStarted', 'isFinished', function () {
      if (Ember.get(this, 'isDropped')) {
        return 'dropped';
      } else if (Ember.get(this, 'isCanceling')) {
        return 'canceled';
      } else if (Ember.get(this, 'isFinished')) {
        return 'finished';
      } else if (Ember.get(this, 'hasStarted')) {
        return 'running';
      } else {
        return 'waiting';
      }
    }),

    /**
     * True if the TaskInstance was canceled before it could
     * ever start running. For example, calling
     * {@linkcode Task#perform .perform()} twice on a
     * task with the {@linkcode TaskProperty#drop .drop()} modifier applied
     * will result in the second task instance being dropped.
     *
     * @memberof TaskInstance
     * @instance
     * @readOnly
     */
    isDropped: Ember.computed('isCanceling', 'hasStarted', function () {
      return Ember.get(this, 'isCanceling') && !Ember.get(this, 'hasStarted');
    }),

    /**
     * Event emitted when a new {@linkcode TaskInstance} starts executing.
     *
     * `on` from `@ember/object/evented` may be used to create a binding on the host object to the event.
     *
     * ```js
     * export default Ember.Component.extend({
     *   doSomething: task(function * () {
     *     // ... does something
     *   }),
     *
     *   onDoSomethingStarted: on('doSomething:started', function (taskInstance) {
     *     // ...
     *   })
     * });
     * ```
     *
     * @event TaskInstance#TASK_NAME:started
     * @param {TaskInstance} taskInstance - Task instance that was started
     */

    /**
     * Event emitted when a {@linkcode TaskInstance} succeeds.
     *
     * `on` from `@ember/object/evented` may be used to create a binding on the host object to the event.
     *
     * ```js
     * export default Ember.Component.extend({
     *   doSomething: task(function * () {
     *     // ... does something
     *   }),
     *
     *   onDoSomethingSucceeded: on('doSomething:succeeded', function (taskInstance) {
     *     // ...
     *   })
     * });
     * ```
     *
     * @event TaskInstance#TASK_NAME:succeeded
     * @param {TaskInstance} taskInstance - Task instance that was succeeded
     */

    /**
     * Event emitted when a {@linkcode TaskInstance} throws an an error that is
     * not handled within the task itself.
     *
     * `on` from `@ember/object/evented` may be used to create a binding on the host object to the event.
     *
     * ```js
     * export default Ember.Component.extend({
     *   doSomething: task(function * () {
     *     // ... does something
     *   }),
     *
     *   onDoSomethingErrored: on('doSomething:errored', function (taskInstance, error) {
     *     // ...
     *   })
     * });
     * ```
     *
     * @event TaskInstance#TASK_NAME:errored
     * @param {TaskInstance} taskInstance - Task instance that was started
     * @param {Error} error - Error that was thrown by the task instance
     */

    /**
     * Event emitted when a {@linkcode TaskInstance} is canceled.
     *
     * `on` from `@ember/object/evented` may be used to create a binding on the host object to the event.
     *
     * ```js
     * export default Ember.Component.extend({
     *   doSomething: task(function * () {
     *     // ... does something
     *   }),
     *
     *   onDoSomethingCanceled: on('doSomething:canceled', function (taskInstance, cancelationReason) {
     *     // ...
     *   })
     * });
     * ```
     *
     * @event TaskInstance#TASK_NAME:canceled
     * @param {TaskInstance} taskInstance - Task instance that was started
     * @param {string} cancelationReason - Cancelation reason that was was provided to {@linkcode TaskInstance#cancel}
     */

    _index: 1,

    _start: function _start() {
      if (this.hasStarted || this.isCanceling) {
        return this;
      }
      Ember.set(this, 'hasStarted', true);
      this._scheduleProceed(_utils.YIELDABLE_CONTINUE, undefined);
      this._triggerEvent('started', this);
      return this;
    },
    toString: function toString() {
      var taskString = "" + this.task;
      return spliceSlice(taskString, -1, 0, '.perform()');
    },
    cancel: function cancel() {
      var cancelReason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".cancel() was explicitly called";

      if (this.isCanceling || Ember.get(this, 'isFinished')) {
        return;
      }
      Ember.set(this, 'isCanceling', true);

      var name = Ember.get(this, 'task._propertyName') || "<unknown>";
      Ember.set(this, 'cancelReason', 'TaskInstance \'' + name + '\' was canceled because ' + cancelReason + '. For more information, see: http://ember-concurrency.com/docs/task-cancelation-help');

      if (this.hasStarted) {
        this._proceedSoon(_utils.YIELDABLE_CANCEL, null);
      } else {
        this._finalize(null, COMPLETION_CANCEL);
      }
    },


    _defer: null,
    _promise: Ember.computed(function () {
      this._defer = Ember.RSVP.defer();
      this._maybeResolveDefer();
      return this._defer.promise;
    }),

    _maybeResolveDefer: function _maybeResolveDefer() {
      if (!this._defer || !this._completionState) {
        return;
      }

      if (this._completionState === COMPLETION_SUCCESS) {
        this._defer.resolve(this.value);
      } else {
        this._defer.reject(this.error);
      }
    },


    /**
     * Returns a promise that resolves with the value returned
     * from the task's (generator) function, or rejects with
     * either the exception thrown from the task function, or
     * an error with a `.name` property with value `"TaskCancelation"`.
     *
     * @method then
     * @memberof TaskInstance
     * @instance
     * @return {Promise}
     */
    then: forwardToInternalPromise('then'),

    /**
     * @method catch
     * @memberof TaskInstance
     * @instance
     * @return {Promise}
     */
    catch: forwardToInternalPromise('catch'),

    /**
     * @method finally
     * @memberof TaskInstance
     * @instance
     * @return {Promise}
     */
    finally: forwardToInternalPromise('finally'),

    _finalize: function _finalize(_value, _completionState) {
      var completionState = _completionState;
      var value = _value;
      this._index++;

      if (this.isCanceling) {
        completionState = COMPLETION_CANCEL;
        value = new Error(this.cancelReason);

        if (this._debug || Ember.ENV.DEBUG_TASKS) {
          Ember.Logger.log(this.cancelReason);
        }

        value.name = TASK_CANCELATION_NAME;
        value.taskInstance = this;
      }

      Ember.set(this, '_completionState', completionState);
      Ember.set(this, '_result', value);

      if (completionState === COMPLETION_SUCCESS) {
        Ember.set(this, 'isSuccessful', true);
        Ember.set(this, 'value', value);
      } else if (completionState === COMPLETION_ERROR) {
        Ember.set(this, 'isError', true);
        Ember.set(this, 'error', value);
      } else if (completionState === COMPLETION_CANCEL) {
        Ember.set(this, 'error', value);
      }

      Ember.set(this, 'isFinished', true);

      this._dispose();
      this._runFinalizeCallbacks();
      this._dispatchFinalizeEvents();
    },


    _finalizeCallbacks: null,
    _onFinalize: function _onFinalize(callback) {
      if (!this._finalizeCallbacks) {
        this._finalizeCallbacks = [];
      }
      this._finalizeCallbacks.push(callback);

      if (this._completionState) {
        this._runFinalizeCallbacks();
      }
    },
    _runFinalizeCallbacks: function _runFinalizeCallbacks() {
      this._maybeResolveDefer();
      if (this._finalizeCallbacks) {
        for (var i = 0, l = this._finalizeCallbacks.length; i < l; ++i) {
          this._finalizeCallbacks[i]();
        }
        this._finalizeCallbacks = null;
      }

      this._maybeThrowUnhandledTaskErrorLater();
    },
    _maybeThrowUnhandledTaskErrorLater: function _maybeThrowUnhandledTaskErrorLater() {
      var _this = this;

      // this backports the Ember 2.0+ RSVP _onError 'after' microtask behavior to Ember < 2.0
      if (!this._hasSubscribed && this._completionState === COMPLETION_ERROR) {
        Ember.run.schedule(Ember.run.backburner.queueNames[Ember.run.backburner.queueNames.length - 1], function () {
          if (!_this._hasSubscribed && !didCancel(_this.error)) {
            Ember.RSVP.reject(_this.error);
          }
        });
      }
    },
    _dispatchFinalizeEvents: function _dispatchFinalizeEvents() {
      switch (this._completionState) {
        case COMPLETION_SUCCESS:
          this._triggerEvent('succeeded', this);
          break;
        case COMPLETION_ERROR:
          this._triggerEvent('errored', this, Ember.get(this, 'error'));
          break;
        case COMPLETION_CANCEL:
          this._triggerEvent('canceled', this, Ember.get(this, 'cancelReason'));
          break;
      }
    },
    _dispose: function _dispose() {
      if (this._disposer) {
        var disposer = this._disposer;
        this._disposer = null;

        // TODO: test erroring disposer
        disposer();
      }
    },
    _isGeneratorDone: function _isGeneratorDone() {
      var state = this._generatorState;
      return state === GENERATOR_STATE_DONE || state === GENERATOR_STATE_ERRORED;
    },
    _resumeGenerator: function _resumeGenerator(nextValue, iteratorMethod) {
      (true && !(!this._isGeneratorDone()) && Ember.assert("The task generator function has already run to completion. This is probably an ember-concurrency bug.", !this._isGeneratorDone()));


      try {
        TASK_INSTANCE_STACK.push(this);

        var iterator = this._getIterator();
        var result = iterator[iteratorMethod](nextValue);

        this._generatorValue = result.value;
        if (result.done) {
          this._generatorState = GENERATOR_STATE_DONE;
        } else {
          this._generatorState = GENERATOR_STATE_HAS_MORE_VALUES;
        }
      } catch (e) {
        this._generatorValue = e;
        this._generatorState = GENERATOR_STATE_ERRORED;
      } finally {
        if (this._expectsLinkedYield) {
          if (!this._generatorValue || this._generatorValue._performType !== PERFORM_TYPE_LINKED) {
            Ember.Logger.warn("You performed a .linked() task without immediately yielding/returning it. This is currently unsupported (but might be supported in future version of ember-concurrency).");
          }
          this._expectsLinkedYield = false;
        }

        TASK_INSTANCE_STACK.pop();
      }
    },
    _getIterator: function _getIterator() {
      if (!this.iterator) {
        this.iterator = this._makeIterator();
      }
      return this.iterator;
    },
    _makeIterator: function _makeIterator() {
      return this.fn.apply(this.context, this.args);
    },
    _advanceIndex: function _advanceIndex(index) {
      if (this._index === index) {
        return ++this._index;
      }
    },
    _proceedSoon: function _proceedSoon(yieldResumeType, value) {
      var _this2 = this;

      this._advanceIndex(this._index);
      if (this._runLoop) {
        Ember.run.join(function () {
          Ember.run.schedule('actions', _this2, _this2._proceed, yieldResumeType, value);
        });
      } else {
        setTimeout(function () {
          return _this2._proceed(yieldResumeType, value);
        }, 1);
      }
    },
    proceed: function proceed(index, yieldResumeType, value) {
      if (this._completionState) {
        return;
      }
      if (!this._advanceIndex(index)) {
        return;
      }
      this._proceedSoon(yieldResumeType, value);
    },
    _scheduleProceed: function _scheduleProceed(yieldResumeType, value) {
      var _this3 = this;

      if (this._completionState) {
        return;
      }

      if (this._runLoop && !Ember.run.currentRunLoop) {
        Ember.run(this, this._proceed, yieldResumeType, value);
        return;
      } else if (!this._runLoop && Ember.run.currentRunLoop) {
        setTimeout(function () {
          return _this3._proceed(yieldResumeType, value);
        }, 1);
        return;
      } else {
        this._proceed(yieldResumeType, value);
      }
    },
    _proceed: function _proceed(yieldResumeType, value) {
      if (this._completionState) {
        return;
      }

      if (this._generatorState === GENERATOR_STATE_DONE) {
        this._handleResolvedReturnedValue(yieldResumeType, value);
      } else {
        this._handleResolvedContinueValue(yieldResumeType, value);
      }
    },
    _handleResolvedReturnedValue: function _handleResolvedReturnedValue(yieldResumeType, value) {
      (true && !(this._completionState === COMPLETION_PENDING) && Ember.assert("expected completion state to be pending", this._completionState === COMPLETION_PENDING));
      (true && !(this._generatorState === GENERATOR_STATE_DONE) && Ember.assert("expected generator to be done", this._generatorState === GENERATOR_STATE_DONE));


      switch (yieldResumeType) {
        case _utils.YIELDABLE_CONTINUE:
        case _utils.YIELDABLE_RETURN:
          this._finalize(value, COMPLETION_SUCCESS);
          break;
        case _utils.YIELDABLE_THROW:
          this._finalize(value, COMPLETION_ERROR);
          break;
        case _utils.YIELDABLE_CANCEL:
          Ember.set(this, 'isCanceling', true);
          this._finalize(null, COMPLETION_CANCEL);
          break;
      }
    },


    _generatorState: GENERATOR_STATE_BEFORE_CREATE,
    _generatorValue: null,
    _handleResolvedContinueValue: function _handleResolvedContinueValue(_yieldResumeType, resumeValue) {
      var iteratorMethod = _yieldResumeType;
      if (iteratorMethod === _utils.YIELDABLE_CANCEL) {
        Ember.set(this, 'isCanceling', true);
        iteratorMethod = _utils.YIELDABLE_RETURN;
      }

      this._dispose();

      var beforeIndex = this._index;
      this._resumeGenerator(resumeValue, iteratorMethod);

      if (!this._advanceIndex(beforeIndex)) {
        return;
      }

      if (this._generatorState === GENERATOR_STATE_ERRORED) {
        this._finalize(this._generatorValue, COMPLETION_ERROR);
        return;
      }

      this._handleYieldedValue();
    },
    _handleYieldedValue: function _handleYieldedValue() {
      var yieldedValue = this._generatorValue;
      if (!yieldedValue) {
        this._proceedWithSimpleValue(yieldedValue);
        return;
      }

      if (yieldedValue instanceof _utils.RawValue) {
        this._proceedWithSimpleValue(yieldedValue.value);
        return;
      }

      this._addDisposer(yieldedValue.__ec_cancel__);

      if (yieldedValue[_utils.yieldableSymbol]) {
        this._invokeYieldable(yieldedValue);
      } else if (typeof yieldedValue.then === 'function') {
        handleYieldedUnknownThenable(yieldedValue, this, this._index);
      } else {
        this._proceedWithSimpleValue(yieldedValue);
      }
    },
    _proceedWithSimpleValue: function _proceedWithSimpleValue(yieldedValue) {
      this.proceed(this._index, _utils.YIELDABLE_CONTINUE, yieldedValue);
    },
    _addDisposer: function _addDisposer(maybeDisposer) {
      if (typeof maybeDisposer === 'function') {
        var priorDisposer = this._disposer;
        if (priorDisposer) {
          this._disposer = function () {
            priorDisposer();
            maybeDisposer();
          };
        } else {
          this._disposer = maybeDisposer;
        }
      }
    },
    _invokeYieldable: function _invokeYieldable(yieldedValue) {
      try {
        var maybeDisposer = yieldedValue[_utils.yieldableSymbol](this, this._index);
        this._addDisposer(maybeDisposer);
      } catch (e) {
        // TODO: handle erroneous yieldable implementation
      }
    },
    _triggerEvent: function _triggerEvent(eventType) {
      if (!this._hasEnabledEvents) {
        return;
      }

      var host = Ember.get(this, 'task.context');
      var eventNamespace = Ember.get(this, 'task._propertyName');

      if (host && host.trigger && eventNamespace) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        host.trigger.apply(host, [eventNamespace + ':' + eventType].concat(_toConsumableArray(args)));
      }
    }
  };

  taskInstanceAttrs[_utils.yieldableSymbol] = function handleYieldedTaskInstance(parentTaskInstance, resumeIndex) {
    var yieldedTaskInstance = this;
    yieldedTaskInstance._hasSubscribed = true;

    yieldedTaskInstance._onFinalize(function () {
      var state = yieldedTaskInstance._completionState;
      if (state === COMPLETION_SUCCESS) {
        parentTaskInstance.proceed(resumeIndex, _utils.YIELDABLE_CONTINUE, yieldedTaskInstance.value);
      } else if (state === COMPLETION_ERROR) {
        parentTaskInstance.proceed(resumeIndex, _utils.YIELDABLE_THROW, yieldedTaskInstance.error);
      } else if (state === COMPLETION_CANCEL) {
        parentTaskInstance.proceed(resumeIndex, _utils.YIELDABLE_CANCEL, null);
      }
    });

    return function disposeYieldedTaskInstance() {
      if (yieldedTaskInstance._performType !== PERFORM_TYPE_UNLINKED) {
        if (yieldedTaskInstance._performType === PERFORM_TYPE_DEFAULT) {
          var parentObj = Ember.get(parentTaskInstance, 'task.context');
          var childObj = Ember.get(yieldedTaskInstance, 'task.context');
          if (parentObj && childObj && parentObj !== childObj && parentObj.isDestroying && Ember.get(yieldedTaskInstance, 'isRunning')) {
            var parentName = '`' + parentTaskInstance.task._propertyName + '`';
            var childName = '`' + yieldedTaskInstance.task._propertyName + '`';
            Ember.Logger.warn('ember-concurrency detected a potentially hazardous "self-cancel loop" between parent task ' + parentName + ' and child task ' + childName + '. If you want child task ' + childName + ' to be canceled when parent task ' + parentName + ' is canceled, please change `.perform()` to `.linked().perform()`. If you want child task ' + childName + ' to keep running after parent task ' + parentName + ' is canceled, change it to `.unlinked().perform()`');
          }
        }
        yieldedTaskInstance.cancel();
      }
    };
  };

  var TaskInstance = Ember.Object.extend(taskInstanceAttrs);

  function go(args, fn) {
    var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return TaskInstance.create(Object.assign({ args: args, fn: fn, context: this }, attrs))._start();
  }

  function wrap(fn) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return function wrappedRunnerFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return go.call(this, args, fn, attrs);
    };
  }

  exports.default = TaskInstance;
});
define('ember-concurrency/-task-property', ['exports', 'ember-concurrency/-task-instance', 'ember-concurrency/-task-state-mixin', 'ember-concurrency/-task-group', 'ember-concurrency/-property-modifiers-mixin', 'ember-concurrency/utils', 'ember-concurrency/-encapsulated-task'], function (exports, _taskInstance, _taskStateMixin, _taskGroup, _propertyModifiersMixin, _utils, _encapsulatedTask) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Task = undefined;
  exports.TaskProperty = TaskProperty;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var PerformProxy = Ember.Object.extend({
    _task: null,
    _performType: null,
    _linkedObject: null,

    perform: function perform() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this._task._performShared(args, this._performType, this._linkedObject);
    }
  });

  /**
    The `Task` object lives on a host Ember object (e.g.
    a Component, Route, or Controller). You call the
    {@linkcode Task#perform .perform()} method on this object
    to create run individual {@linkcode TaskInstance}s,
    and at any point, you can call the {@linkcode Task#cancelAll .cancelAll()}
    method on this object to cancel all running or enqueued
    {@linkcode TaskInstance}s.
  
  
    <style>
      .ignore-this--this-is-here-to-hide-constructor,
      #Task{ display: none }
    </style>
  
    @class Task
  */
  var Task = exports.Task = Ember.Object.extend(_taskStateMixin.default, _defineProperty({
    /**
     * `true` if any current task instances are running.
     *
     * @memberof Task
     * @member {boolean} isRunning
     * @instance
     * @readOnly
     */

    /**
     * `true` if any future task instances are queued.
     *
     * @memberof Task
     * @member {boolean} isQueued
     * @instance
     * @readOnly
     */

    /**
     * `true` if the task is not in the running or queued state.
     *
     * @memberof Task
     * @member {boolean} isIdle
     * @instance
     * @readOnly
     */

    /**
     * The current state of the task: `"running"`, `"queued"` or `"idle"`.
     *
     * @memberof Task
     * @member {string} state
     * @instance
     * @readOnly
     */

    /**
     * The most recently started task instance.
     *
     * @memberof Task
     * @member {TaskInstance} last
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that is currently running.
     *
     * @memberof Task
     * @member {TaskInstance} lastRunning
     * @instance
     * @readOnly
     */

    /**
     * The most recently performed task instance.
     *
     * @memberof Task
     * @member {TaskInstance} lastPerformed
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that succeeded.
     *
     * @memberof Task
     * @member {TaskInstance} lastSuccessful
     * @instance
     * @readOnly
     */

    /**
     * The most recently completed task instance.
     *
     * @memberof Task
     * @member {TaskInstance} lastComplete
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that errored.
     *
     * @memberof Task
     * @member {TaskInstance} lastErrored
     * @instance
     * @readOnly
     */

    /**
     * The most recently canceled task instance.
     *
     * @memberof Task
     * @member {TaskInstance} lastCanceled
     * @instance
     * @readOnly
     */

    /**
     * The most recent task instance that is incomplete.
     *
     * @memberof Task
     * @member {TaskInstance} lastIncomplete
     * @instance
     * @readOnly
     */

    /**
     * The number of times this task has been performed.
     *
     * @memberof Task
     * @member {number} performCount
     * @instance
     * @readOnly
     */

    fn: null,
    context: null,
    _observes: null,
    _curryArgs: null,
    _linkedObjects: null,

    init: function init() {
      this._super.apply(this, arguments);

      if (_typeof(this.fn) === 'object') {
        var owner = Ember.getOwner(this.context);
        var ownerInjection = owner ? owner.ownerInjection() : {};
        this._taskInstanceFactory = _encapsulatedTask.default.extend(ownerInjection, this.fn);
      }

      (0, _utils._cleanupOnDestroy)(this.context, this, 'cancelAll', 'the object it lives on was destroyed or unrendered');
    },
    _curry: function _curry() {
      var task = this._clone();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      task._curryArgs = [].concat(_toConsumableArray(this._curryArgs || []), _toConsumableArray(args));
      return task;
    },
    linked: function linked() {
      var taskInstance = (0, _taskInstance.getRunningInstance)();
      if (!taskInstance) {
        throw new Error('You can only call .linked() from within a task.');
      }

      return PerformProxy.create({
        _task: this,
        _performType: _taskInstance.PERFORM_TYPE_LINKED,
        _linkedObject: taskInstance
      });
    },
    unlinked: function unlinked() {
      return PerformProxy.create({
        _task: this,
        _performType: _taskInstance.PERFORM_TYPE_UNLINKED
      });
    },
    _clone: function _clone() {
      return Task.create({
        fn: this.fn,
        context: this.context,
        _origin: this._origin,
        _taskGroupPath: this._taskGroupPath,
        _scheduler: this._scheduler,
        _propertyName: this._propertyName
      });
    },


    /**
     * This property is true if this task is NOT running, i.e. the number
     * of currently running TaskInstances is zero.
     *
     * This property is useful for driving the state/style of buttons
     * and loading UI, among other things.
     *
     * @memberof Task
     * @instance
     * @readOnly
     */

    /**
     * This property is true if this task is running, i.e. the number
     * of currently running TaskInstances is greater than zero.
     *
     * This property is useful for driving the state/style of buttons
     * and loading UI, among other things.
     *
     * @memberof Task
     * @instance
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * This value describes what would happen to the TaskInstance returned
     * from .perform() if .perform() were called right now.  Returns one of
     * the following values:
     *
     * - `succeed`: new TaskInstance will start running immediately
     * - `drop`: new TaskInstance will be dropped
     * - `enqueue`: new TaskInstance will be enqueued for later execution
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would immediately start running
     * the returned TaskInstance.
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would immediately cancel (drop)
     * the returned TaskInstance.
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would enqueue the TaskInstance
     * rather than execute immediately.
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * EXPERIMENTAL
     *
     * Returns true if calling .perform() right now would cause a previous task to be canceled
     *
     * @memberof Task
     * @instance
     * @private
     * @readOnly
     */

    /**
     * The current number of active running task instances. This
     * number will never exceed maxConcurrency.
     *
     * @memberof Task
     * @instance
     * @readOnly
     */

    /**
     * Cancels all running or queued `TaskInstance`s for this Task.
     * If you're trying to cancel a specific TaskInstance (rather
     * than all of the instances running under this task) call
     * `.cancel()` on the specific TaskInstance.
     *
     * @method cancelAll
     * @memberof Task
     * @instance
     */

    toString: function toString() {
      return '<Task:' + this._propertyName + '>';
    },


    _taskInstanceFactory: _taskInstance.default,

    /**
     * Creates a new {@linkcode TaskInstance} and attempts to run it right away.
     * If running this task instance would increase the task's concurrency
     * to a number greater than the task's maxConcurrency, this task
     * instance might be immediately canceled (dropped), or enqueued
     * to run at later time, after the currently running task(s) have finished.
     *
     * @method perform
     * @memberof Task
     * @param {*} arg* - args to pass to the task function
     * @instance
     *
     * @fires TaskInstance#TASK_NAME:started
     * @fires TaskInstance#TASK_NAME:succeeded
     * @fires TaskInstance#TASK_NAME:errored
     * @fires TaskInstance#TASK_NAME:canceled
     *
     */
    perform: function perform() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this._performShared(args, _taskInstance.PERFORM_TYPE_DEFAULT, null);
    },
    _performShared: function _performShared(args, performType, linkedObject) {
      var fullArgs = this._curryArgs ? [].concat(_toConsumableArray(this._curryArgs), _toConsumableArray(args)) : args;
      var taskInstance = this._taskInstanceFactory.create({
        fn: this.fn,
        args: fullArgs,
        context: this.context,
        owner: this.context,
        task: this,
        _debug: this._debug,
        _hasEnabledEvents: this._hasEnabledEvents,
        _origin: this,
        _performType: performType
      });

      if (performType === _taskInstance.PERFORM_TYPE_LINKED) {
        linkedObject._expectsLinkedYield = true;
      }

      if (this.context.isDestroying) {
        // TODO: express this in terms of lifetimes; a task linked to
        // a dead lifetime should immediately cancel.
        taskInstance.cancel();
      }

      this._scheduler.schedule(taskInstance);
      return taskInstance;
    }
  }, _utils.INVOKE, function () {
    return this.perform.apply(this, arguments);
  }));

  /**
    A {@link TaskProperty} is the Computed Property-like object returned
    from the {@linkcode task} function. You can call Task Modifier methods
    on this object to configure the behavior of the {@link Task}.
  
    See [Managing Task Concurrency](/#/docs/task-concurrency) for an
    overview of all the different task modifiers you can use and how
    they impact automatic cancelation / enqueueing of task instances.
  
    <style>
      .ignore-this--this-is-here-to-hide-constructor,
      #TaskProperty { display: none }
    </style>
  
    @class TaskProperty
  */
  function TaskProperty(taskFn) {
    var tp = this;
    _utils._ComputedProperty.call(this, function (_propertyName) {
      taskFn.displayName = _propertyName + ' (task)';
      return Task.create({
        fn: tp.taskFn,
        context: this,
        _origin: this,
        _taskGroupPath: tp._taskGroupPath,
        _scheduler: (0, _propertyModifiersMixin.resolveScheduler)(tp, this, _taskGroup.TaskGroup),
        _propertyName: _propertyName,
        _debug: tp._debug,
        _hasEnabledEvents: tp._hasEnabledEvents
      });
    });

    this.taskFn = taskFn;
    this.eventNames = null;
    this.cancelEventNames = null;
    this._observes = null;
  }

  TaskProperty.prototype = Object.create(_utils._ComputedProperty.prototype);
  (0, _utils.objectAssign)(TaskProperty.prototype, _propertyModifiersMixin.propertyModifiers, {
    constructor: TaskProperty,

    setup: function setup(proto, taskName) {
      if (this._maxConcurrency !== Infinity && !this._hasSetBufferPolicy) {
        Ember.Logger.warn('The use of maxConcurrency() without a specified task modifier is deprecated and won\'t be supported in future versions of ember-concurrency. Please specify a task modifier instead, e.g. `' + taskName + ': task(...).enqueue().maxConcurrency(' + this._maxConcurrency + ')`');
      }

      registerOnPrototype(Ember.addListener, proto, this.eventNames, taskName, 'perform', false);
      registerOnPrototype(Ember.addListener, proto, this.cancelEventNames, taskName, 'cancelAll', false);
      registerOnPrototype(Ember.addObserver, proto, this._observes, taskName, 'perform', true);
    },
    on: function on() {
      this.eventNames = this.eventNames || [];
      this.eventNames.push.apply(this.eventNames, arguments);
      return this;
    },
    cancelOn: function cancelOn() {
      this.cancelEventNames = this.cancelEventNames || [];
      this.cancelEventNames.push.apply(this.cancelEventNames, arguments);
      return this;
    },
    observes: function observes() {
      for (var _len4 = arguments.length, properties = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        properties[_key4] = arguments[_key4];
      }

      this._observes = properties;
      return this;
    },
    perform: function perform() {
      throw new Error("It looks like you tried to perform a task via `this.nameOfTask.perform()`, which isn't supported. Use `this.get('nameOfTask').perform()` instead.");
    }
  });

  function registerOnPrototype(addListenerOrObserver, proto, names, taskName, taskMethod, once) {
    if (names) {
      for (var i = 0; i < names.length; ++i) {
        var name = names[i];
        addListenerOrObserver(proto, name, null, makeTaskCallback(taskName, taskMethod, once));
      }
    }
  }

  function makeTaskCallback(taskName, method, once) {
    return function () {
      var task = this.get(taskName);

      if (once) {
        Ember.run.scheduleOnce.apply(undefined, ['actions', task, method].concat(Array.prototype.slice.call(arguments)));
      } else {
        task[method].apply(task, arguments);
      }
    };
  }
});
define('ember-concurrency/-task-state-mixin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var alias = Ember.computed.alias;
  exports.default = Ember.Mixin.create({
    isRunning: Ember.computed.gt('numRunning', 0),
    isQueued: Ember.computed.gt('numQueued', 0),
    isIdle: Ember.computed('isRunning', 'isQueued', function () {
      return !this.get('isRunning') && !this.get('isQueued');
    }),

    state: Ember.computed('isRunning', 'isQueued', function () {
      if (this.get('isRunning')) {
        return 'running';
      } else if (this.get('isQueued')) {
        return 'queued';
      } else {
        return 'idle';
      }
    }),

    _propertyName: null,
    _origin: null,
    name: alias('_propertyName'),

    concurrency: alias('numRunning'),
    last: alias('_scheduler.lastStarted'),
    lastRunning: alias('_scheduler.lastRunning'),
    lastPerformed: alias('_scheduler.lastPerformed'),
    lastSuccessful: alias('_scheduler.lastSuccessful'),
    lastComplete: alias('_scheduler.lastComplete'),
    lastErrored: alias('_scheduler.lastErrored'),
    lastCanceled: alias('_scheduler.lastCanceled'),
    lastIncomplete: alias('_scheduler.lastIncomplete'),
    performCount: alias('_scheduler.performCount'),

    numRunning: 0,
    numQueued: 0,
    _seenIndex: 0,

    cancelAll: function cancelAll() {
      var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".cancelAll() was explicitly called on the Task";

      this._scheduler.cancelAll(reason);
    },


    group: Ember.computed(function () {
      return this._taskGroupPath && this.context.get(this._taskGroupPath);
    }),

    _scheduler: null

  });
});
define('ember-concurrency/-wait-for', ['exports', 'ember-concurrency/utils'], function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.waitForQueue = waitForQueue;
  exports.waitForEvent = waitForEvent;
  exports.waitForProperty = waitForProperty;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var WaitFor = function () {
    function WaitFor() {
      _classCallCheck(this, WaitFor);
    }

    _createClass(WaitFor, [{
      key: 'then',
      value: function then() {
        var _yieldableToPromise;

        return (_yieldableToPromise = (0, _utils.yieldableToPromise)(this)).then.apply(_yieldableToPromise, arguments);
      }
    }]);

    return WaitFor;
  }();

  var WaitForQueueYieldable = function (_WaitFor) {
    _inherits(WaitForQueueYieldable, _WaitFor);

    function WaitForQueueYieldable(queueName) {
      _classCallCheck(this, WaitForQueueYieldable);

      var _this = _possibleConstructorReturn(this, (WaitForQueueYieldable.__proto__ || Object.getPrototypeOf(WaitForQueueYieldable)).call(this));

      _this.queueName = queueName;
      return _this;
    }

    _createClass(WaitForQueueYieldable, [{
      key: _utils.yieldableSymbol,
      value: function value(taskInstance, resumeIndex) {
        Ember.run.schedule(this.queueName, function () {
          taskInstance.proceed(resumeIndex, _utils.YIELDABLE_CONTINUE, null);
        });
      }
    }]);

    return WaitForQueueYieldable;
  }(WaitFor);

  var WaitForEventYieldable = function (_WaitFor2) {
    _inherits(WaitForEventYieldable, _WaitFor2);

    function WaitForEventYieldable(object, eventName) {
      _classCallCheck(this, WaitForEventYieldable);

      var _this2 = _possibleConstructorReturn(this, (WaitForEventYieldable.__proto__ || Object.getPrototypeOf(WaitForEventYieldable)).call(this));

      _this2.object = object;
      _this2.eventName = eventName;
      return _this2;
    }

    _createClass(WaitForEventYieldable, [{
      key: _utils.yieldableSymbol,
      value: function value(taskInstance, resumeIndex) {
        var _this3 = this;

        var unbind = function unbind() {};
        var fn = function fn(event) {
          unbind();
          taskInstance.proceed(resumeIndex, _utils.YIELDABLE_CONTINUE, event);
        };

        if (typeof this.object.addEventListener === 'function') {
          // assume that we're dealing with a DOM `EventTarget`.
          this.object.addEventListener(this.eventName, fn);

          // unfortunately this is required, because IE 11 does not support the
          // `once` option: https://caniuse.com/#feat=once-event-listener
          unbind = function unbind() {
            _this3.object.removeEventListener(_this3.eventName, fn);
          };

          return unbind;
        } else {
          // assume that we're dealing with either `Ember.Evented` or a compatible
          // interface, like jQuery.
          this.object.one(this.eventName, fn);

          return function () {
            _this3.object.off(_this3.eventName, fn);
          };
        }
      }
    }]);

    return WaitForEventYieldable;
  }(WaitFor);

  var WaitForPropertyYieldable = function (_WaitFor3) {
    _inherits(WaitForPropertyYieldable, _WaitFor3);

    function WaitForPropertyYieldable(object, key) {
      var predicateCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Boolean;

      _classCallCheck(this, WaitForPropertyYieldable);

      var _this4 = _possibleConstructorReturn(this, (WaitForPropertyYieldable.__proto__ || Object.getPrototypeOf(WaitForPropertyYieldable)).call(this));

      _this4.object = object;
      _this4.key = key;

      if (typeof predicateCallback === 'function') {
        _this4.predicateCallback = predicateCallback;
      } else {
        _this4.predicateCallback = function (v) {
          return v === predicateCallback;
        };
      }
      return _this4;
    }

    _createClass(WaitForPropertyYieldable, [{
      key: _utils.yieldableSymbol,
      value: function value(taskInstance, resumeIndex) {
        var _this5 = this;

        var observerFn = function observerFn() {
          var value = Ember.get(_this5.object, _this5.key);
          var predicateValue = _this5.predicateCallback(value);
          if (predicateValue) {
            taskInstance.proceed(resumeIndex, _utils.YIELDABLE_CONTINUE, value);
            return true;
          }
        };

        if (!observerFn()) {
          this.object.addObserver(this.key, null, observerFn);
          return function () {
            _this5.object.removeObserver(_this5.key, null, observerFn);
          };
        }
      }
    }]);

    return WaitForPropertyYieldable;
  }(WaitFor);

  /**
   * Use `waitForQueue` to pause the task until a certain run loop queue is reached.
   *
   * ```js
   * import { task, waitForQueue } from 'ember-concurrency';
   * export default Component.extend({
   *   myTask: task(function * () {
   *     yield waitForQueue('afterRender');
   *     console.log("now we're in the afterRender queue");
   *   })
   * });
   * ```
   *
   * @param {string} queueName the name of the Ember run loop queue
   */
  function waitForQueue(queueName) {
    return new WaitForQueueYieldable(queueName);
  }

  /**
   * Use `waitForEvent` to pause the task until an event is fired. The event
   * can either be a jQuery event or an Ember.Evented event (or any event system
   * where the object supports `.on()` `.one()` and `.off()`).
   *
   * ```js
   * import { task, waitForEvent } from 'ember-concurrency';
   * export default Component.extend({
   *   myTask: task(function * () {
   *     console.log("Please click anywhere..");
   *     let clickEvent = yield waitForEvent($('body'), 'click');
   *     console.log("Got event", clickEvent);
   *
   *     let emberEvent = yield waitForEvent(this, 'foo');
   *     console.log("Got foo event", emberEvent);
   *
   *     // somewhere else: component.trigger('foo', { value: 123 });
   *   })
   * });
   * ```
   *
   * @param {object} object the Ember Object or jQuery selector (with ,on(), .one(), and .off())
   *                 that the event fires from
   * @param {function} eventName the name of the event to wait for
   */
  function waitForEvent(object, eventName) {
    (true && !((0, _utils.isEventedObject)(object)) && Ember.assert(object + ' must include Ember.Evented (or support `.one()` and `.off()`) or DOM EventTarget (or support `addEventListener` and  `removeEventListener`) to be able to use `waitForEvent`', (0, _utils.isEventedObject)(object)));

    return new WaitForEventYieldable(object, eventName);
  }

  /**
   * Use `waitForProperty` to pause the task until a property on an object
   * changes to some expected value. This can be used for a variety of use
   * cases, including synchronizing with another task by waiting for it
   * to become idle, or change state in some other way. If you omit the
   * callback, `waitForProperty` will resume execution when the observed
   * property becomes truthy. If you provide a callback, it'll be called
   * immediately with the observed property's current value, and multiple
   * times thereafter whenever the property changes, until you return
   * a truthy value from the callback, or the current task is canceled.
   * You can also pass in a non-Function value in place of the callback,
   * in which case the task will continue executing when the property's
   * value becomes the value that you passed in.
   *
   * ```js
   * import { task, waitForProperty } from 'ember-concurrency';
   * export default Component.extend({
   *   foo: 0,
   *
   *   myTask: task(function * () {
   *     console.log("Waiting for `foo` to become 5");
   *
   *     yield waitForProperty(this, 'foo', v => v === 5);
   *     // alternatively: yield waitForProperty(this, 'foo', 5);
   *
   *     // somewhere else: this.set('foo', 5)
   *
   *     console.log("`foo` is 5!");
   *
   *     // wait for another task to be idle before running:
   *     yield waitForProperty(this, 'otherTask.isIdle');
   *     console.log("otherTask is idle!");
   *   })
   * });
   * ```
   *
   * @param {object} object an object (most likely an Ember Object)
   * @param {string} key the property name that is observed for changes
   * @param {function} callbackOrValue a Function that should return a truthy value
   *                                   when the task should continue executing, or
   *                                   a non-Function value that the watched property
   *                                   needs to equal before the task will continue running
   */
  function waitForProperty(object, key, predicateCallback) {
    return new WaitForPropertyYieldable(object, key, predicateCallback);
  }
});
define('ember-concurrency/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      (true && !(false) && Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false));
    }

    return (0, _helpers.taskHelperClosure)('cancel-all', 'cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('ember-concurrency/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', 'perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('ember-concurrency/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('ember-concurrency/index', ['exports', 'ember-concurrency/utils', 'ember-concurrency/-task-property', 'ember-concurrency/-task-instance', 'ember-concurrency/-task-group', 'ember-concurrency/-cancelable-promise-helpers', 'ember-concurrency/-wait-for'], function (exports, _utils, _taskProperty, _taskInstance, _taskGroup, _cancelablePromiseHelpers, _waitFor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.waitForProperty = exports.waitForEvent = exports.waitForQueue = exports.timeout = exports.race = exports.hash = exports.didCancel = exports.allSettled = exports.all = undefined;
  exports.task = task;
  exports.taskGroup = taskGroup;


  /**
   * A Task is a cancelable, restartable, asynchronous operation that
   * is driven by a generator function. Tasks are automatically canceled
   * when the object they live on is destroyed (e.g. a Component
   * is unrendered).
   *
   * To define a task, use the `task(...)` function, and pass in
   * a generator function, which will be invoked when the task
   * is performed. The reason generator functions are used is
   * that they (like the proposed ES7 async-await syntax) can
   * be used to elegantly express asynchronous, cancelable
   * operations.
   *
   * You can also define an
   * <a href="/#/docs/encapsulated-task">Encapsulated Task</a>
   * by passing in an object that defined a `perform` generator
   * function property.
   *
   * The following Component defines a task called `myTask` that,
   * when performed, prints a message to the console, sleeps for 1 second,
   * prints a final message to the console, and then completes.
   *
   * ```js
   * import { task, timeout } from 'ember-concurrency';
   * export default Component.extend({
   *   myTask: task(function * () {
   *     console.log("Pausing for a second...");
   *     yield timeout(1000);
   *     console.log("Done!");
   *   })
   * });
   * ```
   *
   * ```hbs
   * <button {{action myTask.perform}}>Perform Task</button>
   * ```
   *
   * By default, tasks have no concurrency constraints
   * (multiple instances of a task can be running at the same time)
   * but much of a power of tasks lies in proper usage of Task Modifiers
   * that you can apply to a task.
   *
   * @param {function} generatorFunction the generator function backing the task.
   * @returns {TaskProperty}
   */
  function task() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new (Function.prototype.bind.apply(_taskProperty.TaskProperty, [null].concat(args)))();
  }

  /**
   * "Task Groups" provide a means for applying
   * task modifiers to groups of tasks. Once a {@linkcode Task} is declared
   * as part of a group task, modifiers like `drop()` or `restartable()`
   * will no longer affect the individual `Task`. Instead those
   * modifiers can be applied to the entire group.
   *
   * ```js
   * import { task, taskGroup } from 'ember-concurrency';
   *
   * export default Controller.extend({
   *   chores: taskGroup().drop(),
   *
   *   mowLawn:       task(taskFn).group('chores'),
   *   doDishes:      task(taskFn).group('chores'),
   *   changeDiapers: task(taskFn).group('chores')
   * });
   * ```
   *
   * @returns {TaskGroup}
  */
  function taskGroup() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new (Function.prototype.bind.apply(_taskGroup.TaskGroupProperty, [null].concat(args)))();
  }

  exports.all = _cancelablePromiseHelpers.all;
  exports.allSettled = _cancelablePromiseHelpers.allSettled;
  exports.didCancel = _taskInstance.didCancel;
  exports.hash = _cancelablePromiseHelpers.hash;
  exports.race = _cancelablePromiseHelpers.race;
  exports.timeout = _utils.timeout;
  exports.waitForQueue = _waitFor.waitForQueue;
  exports.waitForEvent = _waitFor.waitForEvent;
  exports.waitForProperty = _waitFor.waitForProperty;
});
define('ember-concurrency/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('ember-concurrency/utils', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isEventedObject = isEventedObject;
  exports.Arguments = Arguments;
  exports._cleanupOnDestroy = _cleanupOnDestroy;
  exports.timeout = timeout;
  exports.RawValue = RawValue;
  exports.raw = raw;
  exports.rawTimeout = rawTimeout;
  exports.yieldableToPromise = yieldableToPromise;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function isEventedObject(c) {
    return c && (typeof c.one === 'function' && typeof c.off === 'function' || typeof c.addEventListener === 'function' && typeof c.removeEventListener === 'function');
  }

  function Arguments(args, defer) {
    this.args = args;
    this.defer = defer;
  }

  Arguments.prototype.resolve = function (value) {
    if (this.defer) {
      this.defer.resolve(value);
    }
  };

  var objectAssign = exports.objectAssign = Object.assign || function objectAssign(target) {
    'use strict';

    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };

  function _cleanupOnDestroy(owner, object, cleanupMethodName) {
    for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    // TODO: find a non-mutate-y, non-hacky way of doing this.

    if (!owner.willDestroy) {
      // we're running in non Ember object (possibly in a test mock)
      return;
    }

    if (!owner.willDestroy.__ember_processes_destroyers__) {
      var oldWillDestroy = owner.willDestroy;
      var disposers = [];

      owner.willDestroy = function () {
        for (var i = 0, l = disposers.length; i < l; i++) {
          disposers[i]();
        }
        oldWillDestroy.apply(owner, arguments);
      };
      owner.willDestroy.__ember_processes_destroyers__ = disposers;
    }

    owner.willDestroy.__ember_processes_destroyers__.push(function () {
      object[cleanupMethodName].apply(object, args);
    });
  }

  var INVOKE = exports.INVOKE = "__invoke_symbol__";

  var locations = ['ember-glimmer/helpers/action', 'ember-routing-htmlbars/keywords/closure-action', 'ember-routing/keywords/closure-action'];

  for (var i = 0; i < locations.length; i++) {
    if (locations[i] in Ember.__loader.registry) {
      exports.INVOKE = INVOKE = Ember.__loader.require(locations[i])['INVOKE'];
      break;
    }
  }

  // TODO: Symbol polyfill?
  var yieldableSymbol = exports.yieldableSymbol = "__ec_yieldable__";
  var YIELDABLE_CONTINUE = exports.YIELDABLE_CONTINUE = "next";
  var YIELDABLE_THROW = exports.YIELDABLE_THROW = "throw";
  var YIELDABLE_RETURN = exports.YIELDABLE_RETURN = "return";
  var YIELDABLE_CANCEL = exports.YIELDABLE_CANCEL = "cancel";

  var _ComputedProperty = exports._ComputedProperty = Ember.ComputedProperty;

  /**
   *
   * Yielding `timeout(ms)` will pause a task for the duration
   * of time passed in, in milliseconds.
   *
   * The task below, when performed, will print a message to the
   * console every second.
   *
   * ```js
   * export default Component.extend({
   *   myTask: task(function * () {
   *     while (true) {
   *       console.log("Hello!");
   *       yield timeout(1000);
   *     }
   *   })
   * });
   * ```
   *
   * @param {number} ms - the amount of time to sleep before resuming
   *   the task, in milliseconds
   */
  function timeout(ms) {
    var timerId = void 0;
    var promise = new Ember.RSVP.Promise(function (r) {
      timerId = Ember.run.later(r, ms);
    });
    promise.__ec_cancel__ = function () {
      Ember.run.cancel(timerId);
    };
    return promise;
  }

  function RawValue(value) {
    this.value = value;
  }

  function raw(value) {
    return new RawValue(value);
  }

  function rawTimeout(ms) {
    return _defineProperty({}, yieldableSymbol, function (taskInstance, resumeIndex) {
      var _this = this;

      var timerId = setTimeout(function () {
        taskInstance.proceed(resumeIndex, YIELDABLE_CONTINUE, _this._result);
      }, ms);
      return function () {
        window.clearInterval(timerId);
      };
    });
  }

  function yieldableToPromise(yieldable) {
    var def = Ember.RSVP.defer();

    def.promise.__ec_cancel__ = yieldable[yieldableSymbol]({
      proceed: function proceed(_index, resumeType, value) {
        if (resumeType == YIELDABLE_CONTINUE || resumeType == YIELDABLE_RETURN) {
          def.resolve(value);
        } else {
          def.reject(value);
        }
      }
    }, 0);

    return def.promise;
  }
});
define('ember-i18n/config/ar', ['exports', 'ember-i18n/config/constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: true,

    pluralForm: function pluralForm(n) {
      var mod100 = n % 100;

      if (n === 0) {
        return _constants.ZERO;
      }
      if (n === 1) {
        return _constants.ONE;
      }
      if (n === 2) {
        return _constants.TWO;
      }
      if (mod100 >= 3 && mod100 <= 10) {
        return _constants.FEW;
      }
      if (mod100 >= 11 && mod100 <= 99) {
        return _constants.MANY;
      }
      return _constants.OTHER;
    }
  };
});
define('ember-i18n/config/bn', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/constants', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ZERO = exports.ZERO = 'zero';
  var ONE = exports.ONE = 'one';
  var TWO = exports.TWO = 'two';
  var FEW = exports.FEW = 'few';
  var MANY = exports.MANY = 'many';
  var OTHER = exports.OTHER = 'other';
});
define('ember-i18n/config/da', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/de', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define("ember-i18n/config/en", ["exports", "ember-i18n/config/constants"], function (exports, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: false,

    pluralForm: function pluralForm(n) {
      if (n === 1) {
        return _constants.ONE;
      }
      return _constants.OTHER;
    }
  };
});
define('ember-i18n/config/es', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/fa', ['exports', 'ember-i18n/config/zh'], function (exports, _zh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _zh.default;
});
define("ember-i18n/config/fr", ["exports", "ember-i18n/config/constants"], function (exports, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: false,

    pluralForm: function pluralForm(n) {
      if (n >= 0 && n < 2) {
        return _constants.ONE;
      }
      return _constants.OTHER;
    }
  };
});
define('ember-i18n/config/fy', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/he', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: true,

    pluralForm: _en.default.pluralForm
  };
});
define("ember-i18n/config/hi", ["exports", "ember-i18n/config/constants"], function (exports, _constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: false,

    pluralForm: function pluralForm(n) {
      if (n === 0) {
        return _constants.ONE;
      }
      if (n === 1) {
        return _constants.ONE;
      }
      return _constants.OTHER;
    }
  };
});
define('ember-i18n/config/it', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define("ember-i18n/config/iw", ["exports", "ember-i18n/config/he"], function (exports, _he) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _he.default;
});
define('ember-i18n/config/ja', ['exports', 'ember-i18n/config/zh'], function (exports, _zh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _zh.default;
});
define('ember-i18n/config/jv', ['exports', 'ember-i18n/config/zh'], function (exports, _zh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _zh.default;
});
define('ember-i18n/config/ko', ['exports', 'ember-i18n/config/zh'], function (exports, _zh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _zh.default;
});
define('ember-i18n/config/mr', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/ms', ['exports', 'ember-i18n/config/zh'], function (exports, _zh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _zh.default;
});
define('ember-i18n/config/nl', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/no', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/pa', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/pl', ['exports', 'ember-i18n/config/constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: false,

    pluralForm: function pluralForm(n) {
      var mod1 = n % 1;
      var mod10 = n % 10;
      var mod100 = n % 100;

      if (n === 1) {
        return _constants.ONE;
      }
      if (mod1 === 0 && mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
        return _constants.FEW;
      }
      if (mod1 === 0 && (mod10 === 0 || mod10 === 1 || mod10 >= 5 && mod10 <= 9 || mod100 >= 12 && mod100 <= 14)) {
        return _constants.MANY;
      }
      return _constants.OTHER;
    }
  };
});
define('ember-i18n/config/pt', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/ru', ['exports', 'ember-i18n/config/constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: false,

    pluralForm: function pluralForm(n) {
      var mod1 = n % 1;
      var mod10 = n % 10;
      var mod100 = n % 100;

      if (mod10 === 1 && mod100 !== 11) {
        return _constants.ONE;
      }
      if (mod1 === 0 && mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) {
        return _constants.FEW;
      }
      if (mod1 === 0 && (mod10 === 0 || mod10 >= 5 && mod10 <= 9 || mod100 >= 11 && mod100 <= 14)) {
        return _constants.MANY;
      }
      return _constants.OTHER;
    }
  };
});
define('ember-i18n/config/sv', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/ta', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/te', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/tr', ['exports', 'ember-i18n/config/constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: false,

    pluralForm: function pluralForm() /* n */{
      return _constants.ONE;
    }
  };
});
define('ember-i18n/config/ur', ['exports', 'ember-i18n/config/en'], function (exports, _en) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _en.default;
});
define('ember-i18n/config/vi', ['exports', 'ember-i18n/config/zh'], function (exports, _zh) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _zh.default;
});
define('ember-i18n/config/zh', ['exports', 'ember-i18n/config/constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    rtl: false,

    pluralForm: function pluralForm() /* n */{
      return _constants.OTHER;
    }
  };
});
define('ember-i18n/helper', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var get = Ember.get,
      inject = Ember.inject,
      Helper = Ember.Helper,
      EmberObject = Ember.Object,
      observer = Ember.observer;


  function mergedContext(objectContext, hashContext) {
    return EmberObject.extend({
      unknownProperty: function unknownProperty(key) {
        var fromHash = get(hashContext, key);
        return fromHash === undefined ? get(objectContext, key) : fromHash;
      }
    }).create();
  }

  exports.default = Helper.extend({
    i18n: inject.service(),

    compute: function compute(_ref, interpolations) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          _ref2$ = _ref2[1],
          contextObject = _ref2$ === undefined ? {} : _ref2$;

      var mergedInterpolations = mergedContext(contextObject, interpolations);

      var i18n = get(this, 'i18n');
      return i18n.t(key, mergedInterpolations);
    },


    _recomputeOnLocaleChange: observer('i18n.locale', function () {
      this.recompute();
    })
  });
});
define("ember-i18n/index", ["exports", "ember-i18n/utils/i18n/compile-template", "ember-i18n/services/i18n", "ember-i18n/utils/macro"], function (exports, _compileTemplate, _i18n, _macro) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.translationMacro = exports.Service = exports.compileTemplate = undefined;
  exports.compileTemplate = _compileTemplate.default;
  exports.Service = _i18n.default;
  exports.translationMacro = _macro.default;
});
define('ember-i18n/initializers/ember-i18n', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-i18n',
    initialize: function initialize() {
      // No-op.
    }
  };
});
define('ember-i18n/instance-initializers/ember-i18n', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-i18n',
    initialize: function initialize() {
      // No-op.
    }
  };
});
define("ember-i18n/legacy/helper", ["exports", "ember-i18n/legacy/stream"], function (exports, _stream) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = tHelper;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var assign = Ember.assign || Ember.merge;

  function tHelper(_ref, hash, options, env) {
    var _ref2 = _slicedToArray(_ref, 2),
        i18nKey = _ref2[0],
        _ref2$ = _ref2[1],
        contextObject = _ref2$ === undefined ? { value: function value() {} } : _ref2$;

    var i18n = env.data.view.container.lookup('service:i18n');

    var out = new _stream.default(function () {
      var value = i18nKey.isStream ? i18nKey.value() : i18nKey;

      var contextObjectValue = contextObject.value();
      var mergedHash = {};
      assign(mergedHash, contextObjectValue);
      assign(mergedHash, hash);

      return value === undefined ? '' : i18n.t(value, (0, _stream.readHash)(mergedHash));
    });

    // Once the view is destroyed destroy the steam as well
    env.data.view.one('willDestroyElement', out, function () {
      this.destroy();
    });

    if (contextObject && contextObject.isStream) {
      contextObject.subscribe(out.notify, out);
    }

    // observe any hash arguments that are streams:
    Object.keys(hash).forEach(function (key) {
      var value = hash[key];

      if (value && value.isStream) {
        value.subscribe(out.notify, out);
      }
    });

    // observe the locale:
    i18n.localeStream.subscribe(out.notify, out);

    // if the i18n key itself is dynamic, observe it:
    if (i18nKey.isStream) {
      i18nKey.subscribe(out.notify, out);
    }

    return out;
  }
});
define("ember-i18n/legacy/initializer", ["exports", "ember-i18n/legacy/stream", "ember-i18n/legacy/helper"], function (exports, _stream, _helper) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-i18n-legacy-helper',

    initialize: function initialize(registry) {
      var i18n = registry.lookup('service:i18n');

      i18n.localeStream = new _stream.default(function () {
        return i18n.get('locale');
      });

      Ember.addObserver(i18n, 'locale', i18n, function () {
        this.localeStream.value(); // force the stream to be dirty
        this.localeStream.notify();
      });

      Ember.HTMLBars._registerHelper('t', _helper.default);
    }
  };
});
define('ember-i18n/legacy/stream', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.__loader.require('ember-metal/streams/stream')['default'];
  var readHash = exports.readHash = Ember.__loader.require('ember-metal/streams/utils').readHash;
});
define("ember-i18n/services/i18n", ["exports", "ember-i18n/utils/locale", "ember-i18n/utils/add-translations", "ember-i18n/utils/get-locales"], function (exports, _locale, _addTranslations2, _getLocales) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var assert = Ember.assert,
      computed = Ember.computed,
      get = Ember.get,
      Evented = Ember.Evented,
      makeArray = Ember.makeArray,
      on = Ember.on,
      typeOf = Ember.typeOf,
      warn = Ember.warn,
      getOwner = Ember.getOwner;

  var Parent = Ember.Service || Ember.Object;

  // @public
  exports.default = Parent.extend(Evented, {
    // @public
    // The user's locale.
    locale: null,

    // @public
    // A list of found locales.
    locales: computed(_getLocales.default),

    // @public
    //
    // Returns the translation `key` interpolated with `data`
    // in the current `locale`.
    t: function t(key) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      Ember.deprecate('locale is a reserved attribute', data['locale'] === undefined, {
        id: 'ember-i18n.reserve-locale',
        until: '5.0.0'
      });

      Ember.deprecate('htmlSafe is a reserved attribute', data['htmlSafe'] === undefined, {
        id: 'ember-i18n.reserve-htmlSafe',
        until: '5.0.0'
      });

      var locale = this.get('_locale');
      assert("I18n: Cannot translate when locale is null", locale);
      var count = get(data, 'count');

      var defaults = makeArray(get(data, 'default'));

      defaults.unshift(key);
      var template = locale.getCompiledTemplate(defaults, count);

      if (template._isMissing) {
        this.trigger('missing', this.get('locale'), key, data);
      }

      return template(data);
    },


    // @public
    exists: function exists(key) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var locale = this.get('_locale');
      assert("I18n: Cannot check existance when locale is null", locale);
      var count = get(data, 'count');

      var translation = locale.findTranslation(makeArray(key), count);
      return typeOf(translation.result) !== 'undefined' && !translation.result._isMissing;
    },


    // @public
    addTranslations: function addTranslations(locale, translations) {
      (0, _addTranslations2.default)(locale, translations, getOwner(this));
      this._addLocale(locale);

      if (this.get('locale').indexOf(locale) === 0) {
        this.get('_locale').rebuild();
      }
    },


    // @private
    _initDefaults: on('init', function () {
      var owner = getOwner(this);
      var ENV = owner.factoryFor('config:environment').class;

      if (this.get('locale') == null) {
        var defaultLocale = (ENV.i18n || {}).defaultLocale;
        if (defaultLocale == null) {
          warn('ember-i18n did not find a default locale; falling back to "en".', false, {
            id: 'ember-i18n.default-locale'
          });

          defaultLocale = 'en';
        }
        this.set('locale', defaultLocale);
      }
    }),

    // @private
    //
    // adds a runtime locale to the array of locales on disk
    _addLocale: function _addLocale(locale) {
      this.get('locales').addObject(locale);
    },


    _locale: computed('locale', function () {
      var locale = this.get('locale');

      return locale ? new _locale.default(this.get('locale'), getOwner(this)) : null;
    })
  });
});
define("ember-i18n/utils/add-translations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addTranslations;


  var assign = Ember.assign || Ember.merge;

  function addTranslations(locale, newTranslations, owner) {
    var key = "locale:" + locale + "/translations";
    var factory = owner.factoryFor(key);
    var existingTranslations = factory && factory.class;

    if (existingTranslations == null) {
      existingTranslations = {};
      owner.register(key, existingTranslations);
    }

    assign(existingTranslations, newTranslations);
  }
});
define('ember-i18n/utils/get-locales', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getLocales;


  var matchKey = '/locales/(.+)/translations$'; /* globals require */
  function getLocales() {
    return Object.keys(require.entries).reduce(function (locales, module) {
      var match = module.match(matchKey);
      if (match) {
        locales.pushObject(match[1]);
      }
      return locales;
    }, Ember.A()).sort();
  }
});
define("ember-i18n/utils/i18n/compile-template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = compileTemplate;


  var htmlSafe = Ember.String.htmlSafe;
  var get = Ember.get;
  var escapeExpression = Ember.Handlebars.Utils.escapeExpression;
  var tripleStache = /\{\{\{\s*(.*?)\s*\}\}\}/g;
  var doubleStache = /\{\{\s*(.*?)\s*\}\}/g;

  // @public
  //
  // Compile a translation template.
  //
  // To override this, define `util:i18n/compile-template` with
  // the signature
  // `Function(String, Boolean) -> Function(Object) -> String`.
  function compileTemplate(template) {
    var rtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return function renderTemplate(data) {
      var result = template.replace(tripleStache, function (i, match) {
        return get(data, match);
      }).replace(doubleStache, function (i, match) {
        return escapeExpression(get(data, match));
      });

      var wrapped = rtl ? "\u202B" + result + "\u202C" : result;

      return htmlSafe(wrapped);
    };
  }
});
define("ember-i18n/utils/i18n/missing-message", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = missingMessage;
  // @public
  //
  // Generate a "missing template" message that will be used
  // as a translation.
  //
  // To override this, define `util:i18n/missing-message` with
  // the signature
  //
  // `Function(String, String, Object) -> String`.
  function missingMessage(locale, key /*, data */) {
    return "Missing translation: " + key;
  }
});
define('ember-i18n/utils/locale', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var assert = Ember.assert,
      typeOf = Ember.typeOf,
      warn = Ember.warn;

  var assign = Ember.assign || Ember.merge;

  // @private
  //
  // This class is the work-horse of localization look-up.
  function Locale(id, owner) {
    // On Construction:
    //  1. look for translations in the locale (e.g. pt-BR) and all parent
    //     locales (e.g. pt), flatten any nested keys, and then merge them.
    //  2. walk through the configs from most specific to least specific
    //     and use the first value for `rtl` and `pluralForm`
    //  3. Default `rtl` to `false`
    //  4. Ensure `pluralForm` is defined
    this.id = id;
    this.owner = owner;
    this.rebuild();
  }

  Locale.prototype = {
    rebuild: function rebuild() {
      this.translations = getFlattenedTranslations(this.id, this.owner);
      this._setConfig();
    },
    _setConfig: function _setConfig() {
      var _this = this;

      walkConfigs(this.id, this.owner, function (config) {
        if (_this.rtl === undefined) {
          _this.rtl = config.rtl;
        }
        if (_this.pluralForm === undefined) {
          _this.pluralForm = config.pluralForm;
        }
      });

      // Exit early if we already have an RTL and pluralForm config set
      if (this.rtl !== undefined && this.pluralForm !== undefined) {
        return;
      }

      var defaultConfigFactory = this.owner.factoryFor('ember-i18n@config:zh');
      var defaultConfig = defaultConfigFactory ? defaultConfigFactory.class : null;

      if (this.rtl === undefined) {
        warn('ember-i18n: No RTL configuration found for ' + this.id + '.', false, { id: 'ember-i18n.no-rtl-configuration' });
        this.rtl = defaultConfig.rtl;
      }

      if (this.pluralForm === undefined) {
        warn('ember-i18n: No pluralForm configuration found for ' + this.id + '.', false, { id: 'ember-i18n.no-plural-form' });
        this.pluralForm = defaultConfig.pluralForm;
      }
    },
    getCompiledTemplate: function getCompiledTemplate(fallbackChain, count) {
      var translation = this.findTranslation(fallbackChain, count);
      var result = translation.result;

      if (typeOf(result) === 'string') {
        result = this._compileTemplate(translation.key, result);
      }

      if (result == null) {
        result = this._defineMissingTranslationTemplate(fallbackChain[0]);
      }

      assert('Template for ' + translation.key + ' in ' + this.id + ' is not a function', typeOf(result) === 'function');

      return result;
    },
    findTranslation: function findTranslation(fallbackChain, count) {
      if (this.translations === undefined) {
        this._init();
      }

      var result = void 0;
      var i = void 0;
      for (i = 0; i < fallbackChain.length; i++) {
        var key = fallbackChain[i];
        if (count != null) {
          var inflection = this.pluralForm(+count);
          result = this.translations[key + '.' + inflection];
        }

        if (result == null) {
          result = this.translations[key];
        }

        if (result) {
          break;
        }
      }

      return {
        key: fallbackChain[i],
        result: result
      };
    },
    _defineMissingTranslationTemplate: function _defineMissingTranslationTemplate(key) {
      var i18n = this.owner.lookup('service:i18n');
      var locale = this.id;
      var missingMessage = this.owner.factoryFor('util:i18n/missing-message').class;

      function missingTranslation(data) {
        return missingMessage.call(i18n, locale, key, data);
      }

      missingTranslation._isMissing = true;
      this.translations[key] = missingTranslation;
      return missingTranslation;
    },
    _compileTemplate: function _compileTemplate(key, string) {
      var compile = this.owner.factoryFor('util:i18n/compile-template').class;
      var template = compile(string, this.rtl);
      this.translations[key] = template;
      return template;
    }
  };

  function getFlattenedTranslations(id, owner) {
    var result = {};

    var parentId = parentLocale(id);
    if (parentId) {
      assign(result, getFlattenedTranslations(parentId, owner));
    }

    var factory = owner.factoryFor('locale:' + id + '/translations');
    var translations = factory && factory.class;
    assign(result, withFlattenedKeys(translations || {}));

    return result;
  }

  // Walk up confiugration objects from most specific to least.
  function walkConfigs(id, owner, fn) {
    var maybeAppConfig = owner.factoryFor('locale:' + id + '/config');
    var appConfig = maybeAppConfig && maybeAppConfig.class;
    if (appConfig) {
      fn(appConfig);
    }

    var maybeAddonConfig = owner.factoryFor('ember-i18n@config:' + id);
    var addonConfig = maybeAddonConfig && maybeAddonConfig.class;
    if (addonConfig) {
      fn(addonConfig);
    }

    var parentId = parentLocale(id);
    if (parentId) {
      walkConfigs(parentId, owner, fn);
    }
  }

  function parentLocale(id) {
    var lastDash = id.lastIndexOf('-');
    return lastDash > 0 ? id.substr(0, lastDash) : null;
  }

  function withFlattenedKeys(object) {
    var result = {};

    Object.keys(object).forEach(function (key) {
      var value = object[key];

      if (typeOf(value) === 'object') {
        value = withFlattenedKeys(value);

        Object.keys(value).forEach(function (suffix) {
          result[key + '.' + suffix] = value[suffix];
        });
      } else {
        result[key] = value;
      }
    });

    return result;
  }

  exports.default = Locale;
});
define('ember-i18n/utils/macro', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createTranslatedComputedProperty;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var keys = Object.keys;
  var get = Ember.get;

  // @public
  function createTranslatedComputedProperty(key) {
    var interpolations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var dependencies = ['i18n.locale'].concat(values(interpolations));

    return Ember.computed.apply(Ember, _toConsumableArray(dependencies).concat([function () {
      var i18n = get(this, 'i18n');
      Ember.assert('Cannot translate ' + key + '. ' + this + ' does not have an i18n.', i18n);
      return i18n.t(key, mapPropertiesByHash(this, interpolations));
    }]));
  }

  function values(object) {
    return keys(object).map(function (key) {
      return object[key];
    });
  }

  function mapPropertiesByHash(object, hash) {
    var result = {};

    keys(hash).forEach(function (key) {
      result[key] = get(object, hash[key]);
    });

    return result;
  }
});
define('ember-popper/components/ember-popper-base', ['exports', 'ember-popper/templates/components/ember-popper', 'ember-raf-scheduler'], function (exports, _emberPopper, _emberRafScheduler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _emberPopper.default,

    tagName: '',

    // ================== PUBLIC CONFIG OPTIONS ==================

    /**
     * Whether event listeners, resize and scroll, for repositioning the popper are initially enabled.
     * @argument({ defaultIfUndefined: true })
     * @type('boolean')
     */
    eventsEnabled: true,

    /**
     * Whether the Popper element should be hidden. Use this and CSS for `[hidden]` instead of
     * an `{{if}}` if you want to animate the Popper's entry and/or exit.
     * @argument({ defaultIfUndefined: false })
     * @type('boolean')
     */
    hidden: false,

    /**
     * Modifiers that will be merged into the Popper instance's options hash.
     * https://popper.js.org/popper-documentation.html#Popper.DEFAULTS
     * @argument
     * @type(optional('object'))
     */
    modifiers: null,

    /**
     * onCreate callback merged (if present) into the Popper instance's options hash.
     * https://popper.js.org/popper-documentation.html#Popper.Defaults.onCreate
     * @argument
     * @type(optional(Function))
     */
    onCreate: null,

    /**
     * onUpdate callback merged (if present) into the Popper instance's options hash.
     * https://popper.js.org/popper-documentation.html#Popper.Defaults.onUpdate
     * @argument
     * @type(optional(Function))
     */
    onUpdate: null,

    /**
     * Placement of the popper. One of ['top', 'right', 'bottom', 'left'].
     * @argument({ defaultIfUndefined: true })
     * @type('string')
     */
    placement: 'bottom',

    /**
     * The popper element needs to be moved higher in the DOM tree to avoid z-index issues.
     * See the block-comment in the template for more details. `.ember-application` is applied
     * to the root element of the ember app by default, so we move it up to there.
     * @argument({ defaultIfUndefined: true })
     * @type(Selector)
     */
    popperContainer: '.ember-application',

    /**
     * An optional function to be called when a new target is located.
     * The target is passed in as an argument to the function.
     * @argument
     * @type(optional(Action))
     */
    registerAPI: null,

    /**
     * If `true`, the popper element will not be moved to popperContainer. WARNING: This can cause
     * z-index issues where your popper will be overlapped by DOM elements that aren't nested as
     * deeply in the DOM tree.
     * @argument({ defaultIfUndefined: true })
     * @type('boolean')
     */
    renderInPlace: false,

    // ================== PRIVATE PROPERTIES ==================

    /**
     * Tracks current/previous state of `_renderInPlace`.
     */
    _didRenderInPlace: false,

    /**
     * Tracks current/previous value of `eventsEnabled` option
     */
    _eventsEnabled: null,

    /**
     * Parent of the element on didInsertElement, before it may have been moved
     */
    _initialParentNode: null,

    /**
     * Tracks current/previous value of `modifiers` option
     */
    _modifiers: null,

    /**
     * Tracks current/previous value of `onCreate` callback
     */
    _onCreate: null,

    /**
     * Tracks current/previous value of `onUpdate` callback
     */
    _onUpdate: null,

    /**
     * Tracks current/previous value of `placement` option
     */
    _placement: null,

    /**
     * Set in didInsertElement() once the Popper is initialized.
     * Passed to consumers via a named yield.
     */
    _popper: null,

    /**
     * Tracks current/previous value of popper target
     */
    _popperTarget: null,

    /**
     * Public API of the popper sent to external components in `registerAPI`
     */
    _publicAPI: null,

    /**
     * ID for the requestAnimationFrame used for updates, used to cancel
     * the RAF on component destruction
     */
    _updateRAF: null,

    // ================== LIFECYCLE HOOKS ==================

    didRender: function didRender() {
      this._updatePopper();
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this._popper.destroy();
      _emberRafScheduler.scheduler.forget(this._updateRAF);
    },
    update: function update() {
      this._popper.update();
    },
    scheduleUpdate: function scheduleUpdate() {
      var _this = this;

      if (this._updateRAF !== null) {
        return;
      }

      this._updateRAF = _emberRafScheduler.scheduler.schedule('affect', function () {
        _this._updateRAF = null;
        _this._popper.update();
      });
    },
    enableEventListeners: function enableEventListeners() {
      this._popper.enableEventListeners();
    },
    disableEventListeners: function disableEventListeners() {
      this._popper.disableEventListeners();
    },


    /**
     * ================== ACTIONS ==================
     */

    actions: {
      update: function update() {
        this.update();
      },
      scheduleUpdate: function scheduleUpdate() {
        this.scheduleUpdate();
      },
      enableEventListeners: function enableEventListeners() {
        this.enableEventListeners();
      },
      disableEventListeners: function disableEventListeners() {
        this.disableEventListeners();
      }
    },

    // ================== PRIVATE IMPLEMENTATION DETAILS ==================

    _updatePopper: function _updatePopper() {
      if (this.isDestroying || this.isDestroyed) {
        return;
      }

      var eventsEnabled = this.get('eventsEnabled');
      var modifiers = this.get('modifiers');
      var onCreate = this.get('onCreate');
      var onUpdate = this.get('onUpdate');
      var placement = this.get('placement');
      var popperTarget = this._getPopperTarget();
      var renderInPlace = this.get('_renderInPlace');

      // Compare against previous values to see if anything has changed
      var didChange = renderInPlace !== this._didRenderInPlace || popperTarget !== this._popperTarget || eventsEnabled !== this._eventsEnabled || modifiers !== this._modifiers || placement !== this._placement || onCreate !== this._onCreate || onUpdate !== this._onUpdate;

      if (didChange === true) {
        if (this._popper !== null) {
          this._popper.destroy();
        }

        var popperElement = this._getPopperElement();

        // Store current values to check against on updates
        this._didRenderInPlace = renderInPlace;
        this._eventsEnabled = eventsEnabled;
        this._modifiers = modifiers;
        this._onCreate = onCreate;
        this._onUpdate = onUpdate;
        this._placement = placement;
        this._popperTarget = popperTarget;

        var options = {
          eventsEnabled: eventsEnabled,
          modifiers: modifiers,
          placement: placement
        };

        if (onCreate) {
          (true && !(typeof onCreate === 'function') && Ember.assert('onCreate of ember-popper must be a function', typeof onCreate === 'function'));

          options.onCreate = onCreate;
        }

        if (onUpdate) {
          (true && !(typeof onUpdate === 'function') && Ember.assert('onUpdate of ember-popper must be a function', typeof onUpdate === 'function'));

          options.onUpdate = onUpdate;
        }

        this._popper = new Popper(popperTarget, popperElement, options);

        // Execute the registerAPI hook last to ensure the Popper is initialized on the target
        if (this.get('registerAPI') !== null) {
          /* eslint-disable ember/closure-actions */
          this.get('registerAPI')(this._getPublicAPI());
        }
      }
    },


    /**
     * Used to get the popper element
     */
    _getPopperElement: function _getPopperElement() {
      return self.document.getElementById(this.id);
    },
    _getPopperTarget: function _getPopperTarget() {
      return this.get('popperTarget');
    },
    _getPublicAPI: function _getPublicAPI() {
      if (this._publicAPI === null) {
        // bootstrap the public API with fields that are guaranteed to be static,
        // such as imperative actions
        this._publicAPI = {
          disableEventListeners: this.disableEventListeners.bind(this),
          enableEventListeners: this.enableEventListeners.bind(this),
          scheduleUpdate: this.scheduleUpdate.bind(this),
          update: this.update.bind(this)
        };
      }

      this._publicAPI.popperElement = this._getPopperElement();
      this._publicAPI.popperTarget = this._popperTarget;

      return this._publicAPI;
    },


    _popperContainer: Ember.computed('_renderInPlace', 'popperContainer', function () {
      var renderInPlace = this.get('_renderInPlace');
      var maybeContainer = this.get('popperContainer');

      var popperContainer = void 0;

      if (renderInPlace) {
        popperContainer = this._initialParentNode;
      } else if (maybeContainer instanceof Element) {
        popperContainer = maybeContainer;
      } else if (typeof maybeContainer === 'string') {
        var selector = maybeContainer;
        var possibleContainers = self.document.querySelectorAll(selector);

        (true && !(possibleContainers.length === 1) && Ember.assert('ember-popper with popperContainer selector "' + selector + '" found ' + (possibleContainers.length + ' possible containers when there should be exactly 1'), possibleContainers.length === 1));


        popperContainer = possibleContainers[0];
      }

      return popperContainer;
    }),

    _renderInPlace: Ember.computed('renderInPlace', function () {
      // self.document is undefined in Fastboot, so we have to render in
      // place for the popper to show up at all.
      return self.document ? !!this.get('renderInPlace') : true;
    })
  });
});
define('ember-popper/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-base', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperBase, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberPopperBase.default.extend({
    layout: _emberPopperTargetingParent.default,

    // ================== LIFECYCLE HOOKS ==================

    init: function init() {
      this.id = this.id || Ember.guidFor(this) + '-popper';
      this._parentFinder = self.document ? self.document.createTextNode('') : '';
      this._super.apply(this, arguments);
    },
    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this._initialParentNode = this._parentFinder.parentNode;
    },


    /**
     * Used to get the popper target whenever updating the Popper
     */
    _getPopperTarget: function _getPopperTarget() {
      return this._initialParentNode;
    }
  });
});
define('ember-popper/components/ember-popper', ['exports', 'ember-popper/components/ember-popper-base'], function (exports, _emberPopperBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberPopperBase.default.extend({
    /**
     * The element the popper will target.
     * @argument
     * @type(Element)
     */
    popperTarget: null,

    // ================== LIFECYCLE HOOKS ==================

    init: function init() {
      this.id = this.id || Ember.guidFor(this) + '-popper';
      this._super.apply(this, arguments);
    }
  });
});
define("ember-popper/templates/components/ember-popper-targeting-parent", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "3Mp9Cc/E", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[27,\"unbound\",[[23,[\"_parentFinder\"]]],null],false],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"renderInPlace\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[21,\"id\"]],[12,\"class\",[21,\"class\"]],[12,\"hidden\",[21,\"hidden\"]],[12,\"role\",[21,\"ariaRole\"]],[9],[0,\"\\n    \"],[14,1,[[27,\"hash\",null,[[\"disableEventListeners\",\"enableEventListeners\",\"scheduleUpdate\",\"update\"],[[27,\"action\",[[22,0,[]],\"disableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"enableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"scheduleUpdate\"],null],[27,\"action\",[[22,0,[]],\"update\"],null]]]]]],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"in-element\",[[23,[\"_popperContainer\"]]],[[\"guid\",\"nextSibling\"],[\"%cursor:0%\",null]],{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[21,\"id\"]],[12,\"class\",[21,\"class\"]],[12,\"hidden\",[21,\"hidden\"]],[12,\"role\",[21,\"ariaRole\"]],[9],[0,\"\\n    \"],[14,1,[[27,\"hash\",null,[[\"disableEventListeners\",\"enableEventListeners\",\"scheduleUpdate\",\"update\"],[[27,\"action\",[[22,0,[]],\"disableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"enableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"scheduleUpdate\"],null],[27,\"action\",[[22,0,[]],\"update\"],null]]]]]],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-popper/templates/components/ember-popper-targeting-parent.hbs" } });
});
define("ember-popper/templates/components/ember-popper", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "cYplTmSv", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"renderInPlace\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[21,\"id\"]],[12,\"class\",[21,\"class\"]],[12,\"hidden\",[21,\"hidden\"]],[12,\"role\",[21,\"ariaRole\"]],[9],[0,\"\\n    \"],[14,1,[[27,\"hash\",null,[[\"disableEventListeners\",\"enableEventListeners\",\"scheduleUpdate\",\"update\"],[[27,\"action\",[[22,0,[]],\"disableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"enableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"scheduleUpdate\"],null],[27,\"action\",[[22,0,[]],\"update\"],null]]]]]],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"in-element\",[[23,[\"_popperContainer\"]]],[[\"guid\",\"nextSibling\"],[\"%cursor:0%\",null]],{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[21,\"id\"]],[12,\"class\",[21,\"class\"]],[12,\"hidden\",[21,\"hidden\"]],[12,\"role\",[21,\"ariaRole\"]],[9],[0,\"\\n    \"],[14,1,[[27,\"hash\",null,[[\"disableEventListeners\",\"enableEventListeners\",\"scheduleUpdate\",\"update\"],[[27,\"action\",[[22,0,[]],\"disableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"enableEventListeners\"],null],[27,\"action\",[[22,0,[]],\"scheduleUpdate\"],null],[27,\"action\",[[22,0,[]],\"update\"],null]]]]]],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-popper/templates/components/ember-popper.hbs" } });
});
define('ember-raf-scheduler/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Token = exports.Token = function () {
    function Token(parent) {
      _classCallCheck(this, Token);

      this._parent = parent;
      this._cancelled = false;

      if (true /* DEBUG */) {
        Object.seal(this);
      }
    }

    _createClass(Token, [{
      key: 'cancel',
      value: function cancel() {
        this._cancelled = true;
      }
    }, {
      key: 'cancelled',
      get: function get() {
        return this._cancelled || (this._cancelled = this._parent ? this._parent.cancelled : false);
      }
    }]);

    return Token;
  }();

  function job(cb, token) {
    return function execJob() {
      if (token.cancelled === false) {
        cb();
      }
    };
  }

  var Scheduler = exports.Scheduler = function () {
    function Scheduler() {
      _classCallCheck(this, Scheduler);

      this.sync = [];
      this.layout = [];
      this.measure = [];
      this.affect = [];
      this.jobs = 0;
      this._nextFlush = null;
      this.ticks = 0;

      if (true /* DEBUG */) {
        Object.seal(this);
      }
    }

    _createClass(Scheduler, [{
      key: 'schedule',
      value: function schedule(queueName, cb, parent) {
        (true && !(queueName in this) && Ember.assert('Attempted to schedule to unknown queue: ' + queueName, queueName in this));


        this.jobs++;
        var token = new Token(parent);

        this[queueName].push(job(cb, token));
        this._flush();

        return token;
      }
    }, {
      key: 'forget',
      value: function forget(token) {
        // TODO add explicit test
        if (token) {
          token.cancel();
        }
      }
    }, {
      key: '_flush',
      value: function _flush() {
        var _this = this;

        if (this._nextFlush !== null) {
          return;
        }

        this._nextFlush = requestAnimationFrame(function () {
          _this.flush();
        });
      }
    }, {
      key: 'flush',
      value: function flush() {
        var i = void 0,
            q = void 0;
        this.jobs = 0;

        if (this.sync.length > 0) {
          Ember.run.begin();
          q = this.sync;
          this.sync = [];

          for (i = 0; i < q.length; i++) {
            q[i]();
          }
          Ember.run.end();
        }

        if (this.layout.length > 0) {
          q = this.layout;
          this.layout = [];

          for (i = 0; i < q.length; i++) {
            q[i]();
          }
        }

        if (this.measure.length > 0) {
          q = this.measure;
          this.measure = [];

          for (i = 0; i < q.length; i++) {
            q[i]();
          }
        }

        if (this.affect.length > 0) {
          q = this.affect;
          this.affect = [];

          for (i = 0; i < q.length; i++) {
            q[i]();
          }
        }

        this._nextFlush = null;
        if (this.jobs > 0) {
          this._flush();
        }
      }
    }]);

    return Scheduler;
  }();

  var scheduler = exports.scheduler = new Scheduler();

  exports.default = scheduler;
});
;(function(define){
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){t.exports=function(t,e,n){var r;if(!t)return 0;if(n=n||t,t instanceof Array){for(r=0;r<t.length;r++)if(!1===e.call(n,t[r],r,t))return 0}else for(r in t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))return 0;return 1}},function(t,e){t.exports=function(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])t[n]=arguments[e][n];return t}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&h())}function h(){if(!u){var t=s(p);u=!0;for(var e=l.length;e;){for(c=l,l=[];++f<e;)c&&c[f].run();f=-1,e=l.length}c=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function _(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||u||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=_,o.addListener=_,o.once=_,o.off=_,o.removeListener=_,o.removeAllListeners=_,o.emit=_,o.prependListener=_,o.prependOnceListener=_,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){var r=n(0);n(1);t.exports=function(t){var e=[];return r(t,function(t,n){"string"!=typeof t&&(t=JSON.stringify(t)),e.push(n+"="+encodeURIComponent(t))}),e.join("&")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DELETE=e.PUT=e.POST=e.GET=void 0;var r=i(n(0)),o=i(n(4));function i(t){return t&&t.__esModule?t:{default:t}}e.GET=function(t,e){return a()?s("GET",t,e):c()?l("GET",t,e):function(t,e){var n=t.url,r=e,i=(new Date).getTime(),a=document.createElement("script"),s=document.getElementsByTagName("head")[0],c="keenJSONPCallback",l=!1;c+=i;for(;c in window;)c+="a";window[c]=function(t){!0!==l&&u(null,t)},t.params&&(n+=(0,o.default)(t.params));function u(t,n){l=!0,r&&"function"==typeof r&&(r(t,n),e=r=void 0),window[c]=void 0;try{delete window[c]}catch(t){}s.removeChild(a)}a.onreadystatechange=function(){!1===l&&"loaded"===this.readyState&&u("An error occurred",null)},a.onerror=function(){!1===l&&u("An error occurred",null)},a.src=n+"&jsonp="+c,s.appendChild(a)}(t,e)},e.POST=function(t,e){if(a())return s("POST",t,e);if(c())return l("POST",t,e);e("XHR POST not supported",null)},e.PUT=function(t,e){if(a())return s("PUT",t,e);e("XHR PUT not supported",null)},e.DELETE=function(t,e){if(a())return s("DELETE",t,e);e("XHR DELETE not supported",null)};function a(){var t="undefined"==typeof window?this:window;if(t.XMLHttpRequest&&(!t.ActiveXObject||t.location&&t.location.protocol&&"file:"!==t.location.protocol))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1}function s(t,e,n){var i=a(),s=n,c=e.url;return i.onreadystatechange=function(){var t=void 0;if(4==i.readyState)if(i.status>=200&&i.status<300)if(204===i.status)s&&s(null,i);else try{t=JSON.parse(i.responseText),s&&t&&s(null,t)}catch(t){s&&s(i,null)}else try{t=JSON.parse(i.responseText),s&&t&&s(t,null)}catch(t){s&&s(i,null)}},"GET"!==t?(i.open(t,c,!0),(0,r.default)(e.headers,function(t,e){"string"==typeof t&&i.setRequestHeader(e,t)}),e.params?i.send(JSON.stringify(e.params)):i.send()):(c+="?",e.api_key&&(c+="api_key="+e.api_key+"&"),e.params&&(c+=(0,o.default)(e.params)),i.open(t,c,!0),(0,r.default)(e.headers,function(t,e){"string"==typeof t&&i.setRequestHeader(e,t)}),i.send()),i}function c(){var t="undefined"==typeof window?this:window;return!!t.XDomainRequest&&new t.XDomainRequest}function l(t,e,n){var r=c(),i=n;function a(t,e){i&&"function"==typeof i&&(i(t,e),n=i=void 0)}return r&&(r.timeout=e.timeout||3e5,r.ontimeout=function(){a(r,null)},r.onerror=function(){a(r,null)},r.onload=function(){a(null,JSON.parse(r.responseText))},r.open(t.toLowerCase(),e.url),setTimeout(function(){e.params?r.send((0,o.default)(e.params)):r.send()},0)),r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=s,e.getAnalysisType=c;var o=a(n(0)),i=a(n(1));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return this.httpHandlers=e,function(e){return this.config={api_key:void 0,method:t,params:void 0,timeout:3e5,url:e,headers:{Authorization:"","Content-type":"application/json"}},this}.bind(this)}function c(t){var e=t.split("/queries/");return e[e.length-1]}s.prototype.auth=function(t){return"string"==typeof t&&(this.config.api_key="string"==typeof t?t:void 0,this.headers({Authorization:t})),this},s.prototype.headers=function(t){return"object"===(void 0===t?"undefined":r(t))&&(0,o.default)(t,function(t,e){this.config.headers[e]=t}.bind(this)),this},s.prototype.timeout=function(t){return this.config.timeout="number"==typeof t?t:3e5,this},s.prototype.send=function(t){this.config.params=t&&"object"===(void 0===t?"undefined":r(t))?t:{};var e=this.httpHandlers[this.config.method],n=(0,i.default)({},this.config);return void 0===n.params.analysis_type&&n.url.indexOf("/queries/")>-1&&n.url.indexOf("/saved/")<0&&(n.params.analysis_type=c(n.url)),new Promise(function(t,r,o){var a=e(n,function(e,o){var a=o;e?r(e):(void 0!==n.params.event_collection&&void 0===o.query&&(a=(0,i.default)({query:n.params},o)),t(a))});return o&&o(function(){a.abort&&a.abort()}),a})}},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o,i,a,s,c=1,l={},u=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){d(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){d(t.data)},r=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):r=function(t){setTimeout(d,0,t)}:(a="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&d(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(a+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,r(c),c++},p.clearImmediate=h}function h(t){delete l[t]}function d(t){if(u)setTimeout(d,0,t);else{var e=l[t];if(e){u=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{h(t),u=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(2),n(3))},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(7),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(t,e,n){(function(e,n,r){t.exports=function(){var t,o,i;return function t(e,n,r){function o(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof _dereq_&&_dereq_;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return o(n||t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof _dereq_&&_dereq_,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,n,r){"use strict";var o;try{throw new Error}catch(t){o=t}var i=t("./schedule"),a=t("./queue"),s=t("./util");function c(){this._customScheduler=!1,this._isTickUsed=!1,this._lateQueue=new a(16),this._normalQueue=new a(16),this._haveDrainedQueues=!1,this._trampolineEnabled=!0;var t=this;this.drainQueues=function(){t._drainQueues()},this._schedule=i}function l(t,e,n){this._lateQueue.push(t,e,n),this._queueTick()}function u(t,e,n){this._normalQueue.push(t,e,n),this._queueTick()}function f(t){this._normalQueue._pushOne(t),this._queueTick()}c.prototype.setScheduler=function(t){var e=this._schedule;return this._schedule=t,this._customScheduler=!0,e},c.prototype.hasCustomScheduler=function(){return this._customScheduler},c.prototype.enableTrampoline=function(){this._trampolineEnabled=!0},c.prototype.disableTrampolineIfNecessary=function(){s.hasDevTools&&(this._trampolineEnabled=!1)},c.prototype.haveItemsQueued=function(){return this._isTickUsed||this._haveDrainedQueues},c.prototype.fatalError=function(t,n){n?(e.stderr.write("Fatal "+(t instanceof Error?t.stack:t)+"\n"),e.exit(2)):this.throwLater(t)},c.prototype.throwLater=function(t,e){if(1===arguments.length&&(e=t,t=function(){throw e}),"undefined"!=typeof setTimeout)setTimeout(function(){t(e)},0);else try{this._schedule(function(){t(e)})}catch(t){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}},s.hasDevTools?(c.prototype.invokeLater=function(t,e,n){this._trampolineEnabled?l.call(this,t,e,n):this._schedule(function(){setTimeout(function(){t.call(e,n)},100)})},c.prototype.invoke=function(t,e,n){this._trampolineEnabled?u.call(this,t,e,n):this._schedule(function(){t.call(e,n)})},c.prototype.settlePromises=function(t){this._trampolineEnabled?f.call(this,t):this._schedule(function(){t._settlePromises()})}):(c.prototype.invokeLater=l,c.prototype.invoke=u,c.prototype.settlePromises=f),c.prototype._drainQueue=function(t){for(;t.length()>0;){var e=t.shift();if("function"==typeof e){var n=t.shift(),r=t.shift();e.call(n,r)}else e._settlePromises()}},c.prototype._drainQueues=function(){this._drainQueue(this._normalQueue),this._reset(),this._haveDrainedQueues=!0,this._drainQueue(this._lateQueue)},c.prototype._queueTick=function(){this._isTickUsed||(this._isTickUsed=!0,this._schedule(this.drainQueues))},c.prototype._reset=function(){this._isTickUsed=!1},n.exports=c,n.exports.firstLineError=o},{"./queue":17,"./schedule":18,"./util":21}],2:[function(t,e,n){"use strict";e.exports=function(t,e,n,r){var o=!1,i=function(t,e){this._reject(e)},a=function(t,e){e.promiseRejectionQueued=!0,e.bindingPromise._then(i,i,null,this,t)},s=function(t,e){0==(50397184&this._bitField)&&this._resolveCallback(e.target)},c=function(t,e){e.promiseRejectionQueued||this._reject(t)};t.prototype.bind=function(i){o||(o=!0,t.prototype._propagateFrom=r.propagateFromFunction(),t.prototype._boundValue=r.boundValueFunction());var l=n(i),u=new t(e);u._propagateFrom(this,1);var f=this._target();if(u._setBoundTo(l),l instanceof t){var p={promiseRejectionQueued:!1,promise:u,target:f,bindingPromise:l};f._then(e,a,void 0,u,p),l._then(s,c,void 0,u,p),u._setOnCancel(l)}else u._resolveCallback(f);return u},t.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=2097152|this._bitField,this._boundTo=t):this._bitField=-2097153&this._bitField},t.prototype._isBound=function(){return 2097152==(2097152&this._bitField)},t.bind=function(e,n){return t.resolve(n).bind(e)}}},{}],3:[function(t,e,n){"use strict";var r;"undefined"!=typeof Promise&&(r=Promise);var o=t("./promise")();o.noConflict=function(){try{Promise===o&&(Promise=r)}catch(t){}return o},e.exports=o},{"./promise":15}],4:[function(t,e,n){"use strict";e.exports=function(e,n,r,o){var i=t("./util"),a=i.tryCatch,s=i.errorObj,c=e._async;e.prototype.break=e.prototype.cancel=function(){if(!o.cancellation())return this._warn("cancellation is disabled");for(var t=this,e=t;t._isCancellable();){if(!t._cancelBy(e)){e._isFollowing()?e._followee().cancel():e._cancelBranched();break}var n=t._cancellationParent;if(null==n||!n._isCancellable()){t._isFollowing()?t._followee().cancel():t._cancelBranched();break}t._isFollowing()&&t._followee().cancel(),t._setWillBeCancelled(),e=t,t=n}},e.prototype._branchHasCancelled=function(){this._branchesRemainingToCancel--},e.prototype._enoughBranchesHaveCancelled=function(){return void 0===this._branchesRemainingToCancel||this._branchesRemainingToCancel<=0},e.prototype._cancelBy=function(t){return t===this?(this._branchesRemainingToCancel=0,this._invokeOnCancel(),!0):(this._branchHasCancelled(),!!this._enoughBranchesHaveCancelled()&&(this._invokeOnCancel(),!0))},e.prototype._cancelBranched=function(){this._enoughBranchesHaveCancelled()&&this._cancel()},e.prototype._cancel=function(){this._isCancellable()&&(this._setCancelled(),c.invoke(this._cancelPromises,this,void 0))},e.prototype._cancelPromises=function(){this._length()>0&&this._settlePromises()},e.prototype._unsetOnCancel=function(){this._onCancelField=void 0},e.prototype._isCancellable=function(){return this.isPending()&&!this._isCancelled()},e.prototype.isCancellable=function(){return this.isPending()&&!this.isCancelled()},e.prototype._doInvokeOnCancel=function(t,e){if(i.isArray(t))for(var n=0;n<t.length;++n)this._doInvokeOnCancel(t[n],e);else if(void 0!==t)if("function"==typeof t){if(!e){var r=a(t).call(this._boundValue());r===s&&(this._attachExtraTrace(r.e),c.throwLater(r.e))}}else t._resultCancelled(this)},e.prototype._invokeOnCancel=function(){var t=this._onCancel();this._unsetOnCancel(),c.invoke(this._doInvokeOnCancel,this,t)},e.prototype._invokeInternalOnCancel=function(){this._isCancellable()&&(this._doInvokeOnCancel(this._onCancel(),!0),this._unsetOnCancel())},e.prototype._resultCancelled=function(){this.cancel()}}},{"./util":21}],5:[function(t,e,n){"use strict";e.exports=function(e){var n=t("./util"),r=t("./es5").keys,o=n.tryCatch,i=n.errorObj;return function(t,a,s){return function(c){var l=s._boundValue();t:for(var u=0;u<t.length;++u){var f=t[u];if(f===Error||null!=f&&f.prototype instanceof Error){if(c instanceof f)return o(a).call(l,c)}else if("function"==typeof f){var p=o(f).call(l,c);if(p===i)return p;if(p)return o(a).call(l,c)}else if(n.isObject(c)){for(var h=r(f),d=0;d<h.length;++d){var _=h[d];if(f[_]!=c[_])continue t}return o(a).call(l,c)}}return e}}}},{"./es5":10,"./util":21}],6:[function(t,e,n){"use strict";e.exports=function(t){var e=!1,n=[];function r(){this._trace=new r.CapturedTrace(o())}function o(){var t=n.length-1;if(t>=0)return n[t]}return t.prototype._promiseCreated=function(){},t.prototype._pushContext=function(){},t.prototype._popContext=function(){return null},t._peekContext=t.prototype._peekContext=function(){},r.prototype._pushContext=function(){void 0!==this._trace&&(this._trace._promiseCreated=null,n.push(this._trace))},r.prototype._popContext=function(){if(void 0!==this._trace){var t=n.pop(),e=t._promiseCreated;return t._promiseCreated=null,e}return null},r.CapturedTrace=null,r.create=function(){if(e)return new r},r.deactivateLongStackTraces=function(){},r.activateLongStackTraces=function(){var n=t.prototype._pushContext,i=t.prototype._popContext,a=t._peekContext,s=t.prototype._peekContext,c=t.prototype._promiseCreated;r.deactivateLongStackTraces=function(){t.prototype._pushContext=n,t.prototype._popContext=i,t._peekContext=a,t.prototype._peekContext=s,t.prototype._promiseCreated=c,e=!1},e=!0,t.prototype._pushContext=r.prototype._pushContext,t.prototype._popContext=r.prototype._popContext,t._peekContext=t.prototype._peekContext=o,t.prototype._promiseCreated=function(){var t=this._peekContext();t&&null==t._promiseCreated&&(t._promiseCreated=this)}},r}},{}],7:[function(t,n,r){"use strict";n.exports=function(n,r){var o,i,a,s=n._getDomain,c=n._async,l=t("./errors").Warning,u=t("./util"),f=u.canAttachTrace,p=/[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,h=/\((?:timers\.js):\d+:\d+\)/,d=/[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,_=null,v=null,y=!1,m=!(0==u.env("BLUEBIRD_DEBUG")),g=!(0==u.env("BLUEBIRD_WARNINGS")||!m&&!u.env("BLUEBIRD_WARNINGS")),b=!(0==u.env("BLUEBIRD_LONG_STACK_TRACES")||!m&&!u.env("BLUEBIRD_LONG_STACK_TRACES")),w=0!=u.env("BLUEBIRD_W_FORGOTTEN_RETURN")&&(g||!!u.env("BLUEBIRD_W_FORGOTTEN_RETURN"));n.prototype.suppressUnhandledRejections=function(){var t=this._target();t._bitField=-1048577&t._bitField|524288},n.prototype._ensurePossibleRejectionHandled=function(){if(0==(524288&this._bitField)){this._setRejectionIsUnhandled();var t=this;setTimeout(function(){t._notifyUnhandledRejection()},1)}},n.prototype._notifyUnhandledRejectionIsHandled=function(){V("rejectionHandled",o,void 0,this)},n.prototype._setReturnedNonUndefined=function(){this._bitField=268435456|this._bitField},n.prototype._returnedNonUndefined=function(){return 0!=(268435456&this._bitField)},n.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue();this._setUnhandledRejectionIsNotified(),V("unhandledRejection",i,t,this)}},n.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=262144|this._bitField},n.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-262145&this._bitField},n.prototype._isUnhandledRejectionNotified=function(){return(262144&this._bitField)>0},n.prototype._setRejectionIsUnhandled=function(){this._bitField=1048576|this._bitField},n.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-1048577&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},n.prototype._isRejectionUnhandled=function(){return(1048576&this._bitField)>0},n.prototype._warn=function(t,e,n){return B(t,e,n||this)},n.onPossiblyUnhandledRejection=function(t){var e=s();i="function"==typeof t?null===e?t:u.domainBind(e,t):void 0},n.onUnhandledRejectionHandled=function(t){var e=s();o="function"==typeof t?null===e?t:u.domainBind(e,t):void 0};var C=function(){};n.longStackTraces=function(){if(c.haveItemsQueued()&&!J.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");if(!J.longStackTraces&&X()){var t=n.prototype._captureStackTrace,e=n.prototype._attachExtraTrace;J.longStackTraces=!0,C=function(){if(c.haveItemsQueued()&&!J.longStackTraces)throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");n.prototype._captureStackTrace=t,n.prototype._attachExtraTrace=e,r.deactivateLongStackTraces(),c.enableTrampoline(),J.longStackTraces=!1},n.prototype._captureStackTrace=N,n.prototype._attachExtraTrace=U,r.activateLongStackTraces(),c.disableTrampolineIfNecessary()}},n.hasLongStackTraces=function(){return J.longStackTraces&&X()};var E=function(){try{if("function"==typeof CustomEvent){var t=new CustomEvent("CustomEvent");return u.global.dispatchEvent(t),function(t,e){var n=new CustomEvent(t.toLowerCase(),{detail:e,cancelable:!0});return!u.global.dispatchEvent(n)}}if("function"==typeof Event){var t=new Event("CustomEvent");return u.global.dispatchEvent(t),function(t,e){var n=new Event(t.toLowerCase(),{cancelable:!0});return n.detail=e,!u.global.dispatchEvent(n)}}var t=document.createEvent("CustomEvent");return t.initCustomEvent("testingtheevent",!1,!0,{}),u.global.dispatchEvent(t),function(t,e){var n=document.createEvent("CustomEvent");return n.initCustomEvent(t.toLowerCase(),!1,!0,e),!u.global.dispatchEvent(n)}}catch(t){}return function(){return!1}}(),k=u.isNode?function(){return e.emit.apply(e,arguments)}:u.global?function(t){var e="on"+t.toLowerCase(),n=u.global[e];return!!n&&(n.apply(u.global,[].slice.call(arguments,1)),!0)}:function(){return!1};function T(t,e){return{promise:e}}var j={promiseCreated:T,promiseFulfilled:T,promiseRejected:T,promiseResolved:T,promiseCancelled:T,promiseChained:function(t,e,n){return{promise:e,child:n}},warning:function(t,e){return{warning:e}},unhandledRejection:function(t,e,n){return{reason:e,promise:n}},rejectionHandled:T},F=function(t){var e=!1;try{e=k.apply(null,arguments)}catch(t){c.throwLater(t),e=!0}var n=!1;try{n=E(t,j[t].apply(null,arguments))}catch(t){c.throwLater(t),n=!0}return n||e};function O(){return!1}function S(t,e,n){var r=this;try{t(e,n,function(t){if("function"!=typeof t)throw new TypeError("onCancel must be a function, got: "+u.toString(t));r._attachCancellationCallback(t)})}catch(t){return t}}function x(t){if(!this._isCancellable())return this;var e=this._onCancel();void 0!==e?u.isArray(e)?e.push(t):this._setOnCancel([e,t]):this._setOnCancel(t)}function P(){return this._onCancelField}function R(t){this._onCancelField=t}function A(){this._cancellationParent=void 0,this._onCancelField=void 0}function L(t,e){if(0!=(1&e)){this._cancellationParent=t;var n=t._branchesRemainingToCancel;void 0===n&&(n=0),t._branchesRemainingToCancel=n+1}0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)}n.config=function(t){if("longStackTraces"in(t=Object(t))&&(t.longStackTraces?n.longStackTraces():!t.longStackTraces&&n.hasLongStackTraces()&&C()),"warnings"in t){var e=t.warnings;J.warnings=!!e,w=J.warnings,u.isObject(e)&&"wForgottenReturn"in e&&(w=!!e.wForgottenReturn)}if("cancellation"in t&&t.cancellation&&!J.cancellation){if(c.haveItemsQueued())throw new Error("cannot enable cancellation after promises are in use");n.prototype._clearCancellationData=A,n.prototype._propagateFrom=L,n.prototype._onCancel=P,n.prototype._setOnCancel=R,n.prototype._attachCancellationCallback=x,n.prototype._execute=S,I=L,J.cancellation=!0}return"monitoring"in t&&(t.monitoring&&!J.monitoring?(J.monitoring=!0,n.prototype._fireEvent=F):!t.monitoring&&J.monitoring&&(J.monitoring=!1,n.prototype._fireEvent=O)),n},n.prototype._fireEvent=O,n.prototype._execute=function(t,e,n){try{t(e,n)}catch(t){return t}},n.prototype._onCancel=function(){},n.prototype._setOnCancel=function(t){},n.prototype._attachCancellationCallback=function(t){},n.prototype._captureStackTrace=function(){},n.prototype._attachExtraTrace=function(){},n.prototype._clearCancellationData=function(){},n.prototype._propagateFrom=function(t,e){};var I=function(t,e){0!=(2&e)&&t._isBound()&&this._setBoundTo(t._boundTo)};function H(){var t=this._boundTo;return void 0!==t&&t instanceof n?t.isFulfilled()?t.value():void 0:t}function N(){this._trace=new z(this._peekContext())}function U(t,e){if(f(t)){var n=this._trace;if(void 0!==n&&e&&(n=n._parent),void 0!==n)n.attachExtraTrace(t);else if(!t.__stackCleaned__){var r=M(t);u.notEnumerableProp(t,"stack",r.message+"\n"+r.stack.join("\n")),u.notEnumerableProp(t,"__stackCleaned__",!0)}}}function B(t,e,r){if(J.warnings){var o,i=new l(t);if(e)r._attachExtraTrace(i);else if(J.longStackTraces&&(o=n._peekContext()))o.attachExtraTrace(i);else{var a=M(i);i.stack=a.message+"\n"+a.stack.join("\n")}F("warning",i)||q(i,"",!0)}}function D(t){for(var e=[],n=0;n<t.length;++n){var r=t[n],o="    (No stack trace)"===r||_.test(r),i=o&&K(r);o&&!i&&(y&&" "!==r.charAt(0)&&(r="    "+r),e.push(r))}return e}function M(t){var e=t.stack,n=t.toString();return e="string"==typeof e&&e.length>0?function(t){for(var e=t.stack.replace(/\s+$/g,"").split("\n"),n=0;n<e.length;++n){var r=e[n];if("    (No stack trace)"===r||_.test(r))break}return n>0&&"SyntaxError"!=t.name&&(e=e.slice(n)),e}(t):["    (No stack trace)"],{message:n,stack:"SyntaxError"==t.name?e:D(e)}}function q(t,e,n){if("undefined"!=typeof console){var r;if(u.isObject(t)){var o=t.stack;r=e+v(o,t)}else r=e+String(t);"function"==typeof a?a(r,n):"function"!=typeof console.log&&"object"!=typeof console.log||console.log(r)}}function V(t,e,n,r){var o=!1;try{"function"==typeof e&&(o=!0,"rejectionHandled"===t?e(r):e(n,r))}catch(t){c.throwLater(t)}"unhandledRejection"===t?F(t,n,r)||o||q(n,"Unhandled rejection "):F(t,r)}function Q(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{if(e=t&&"function"==typeof t.toString?t.toString():u.toString(t),/\[object [a-zA-Z0-9$_]+\]/.test(e))try{var n=JSON.stringify(t);e=n}catch(t){}0===e.length&&(e="(empty array)")}return"(<"+function(t){return t.length<41?t:t.substr(0,38)+"..."}(e)+">, no stack trace)"}function X(){return"function"==typeof W}var K=function(){return!1},G=/[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;function $(t){var e=t.match(G);if(e)return{fileName:e[1],line:parseInt(e[2],10)}}function z(t){this._parent=t,this._promisesCreated=0;var e=this._length=1+(void 0===t?0:t._length);W(this,z),e>32&&this.uncycle()}u.inherits(z,Error),r.CapturedTrace=z,z.prototype.uncycle=function(){var t=this._length;if(!(t<2)){for(var e=[],n={},r=0,o=this;void 0!==o;++r)e.push(o),o=o._parent;for(var r=(t=this._length=r)-1;r>=0;--r){var i=e[r].stack;void 0===n[i]&&(n[i]=r)}for(var r=0;r<t;++r){var a=e[r].stack,s=n[a];if(void 0!==s&&s!==r){s>0&&(e[s-1]._parent=void 0,e[s-1]._length=1),e[r]._parent=void 0,e[r]._length=1;var c=r>0?e[r-1]:this;s<t-1?(c._parent=e[s+1],c._parent.uncycle(),c._length=c._parent._length+1):(c._parent=void 0,c._length=1);for(var l=c._length+1,u=r-2;u>=0;--u)e[u]._length=l,l++;return}}}},z.prototype.attachExtraTrace=function(t){if(!t.__stackCleaned__){this.uncycle();for(var e=M(t),n=e.message,r=[e.stack],o=this;void 0!==o;)r.push(D(o.stack.split("\n"))),o=o._parent;!function(t){for(var e=t[0],n=1;n<t.length;++n){for(var r=t[n],o=e.length-1,i=e[o],a=-1,s=r.length-1;s>=0;--s)if(r[s]===i){a=s;break}for(var s=a;s>=0;--s){var c=r[s];if(e[o]!==c)break;e.pop(),o--}e=r}}(r),function(t){for(var e=0;e<t.length;++e)(0===t[e].length||e+1<t.length&&t[e][0]===t[e+1][0])&&(t.splice(e,1),e--)}(r),u.notEnumerableProp(t,"stack",function(t,e){for(var n=0;n<e.length-1;++n)e[n].push("From previous event:"),e[n]=e[n].join("\n");return n<e.length&&(e[n]=e[n].join("\n")),t+"\n"+e.join("\n")}(n,r)),u.notEnumerableProp(t,"__stackCleaned__",!0)}};var W=function(){var t=/^\s*at\s*/,e=function(t,e){return"string"==typeof t?t:void 0!==e.name&&void 0!==e.message?e.toString():Q(e)};if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){Error.stackTraceLimit+=6,_=t,v=e;var n=Error.captureStackTrace;return K=function(t){return p.test(t)},function(t,e){Error.stackTraceLimit+=6,n(t,e),Error.stackTraceLimit-=6}}var r,o=new Error;if("string"==typeof o.stack&&o.stack.split("\n")[0].indexOf("stackDetection@")>=0)return _=/@/,v=e,y=!0,function(t){t.stack=(new Error).stack};try{throw new Error}catch(t){r="stack"in t}return"stack"in o||!r||"number"!=typeof Error.stackTraceLimit?(v=function(t,e){return"string"==typeof t?t:"object"!=typeof e&&"function"!=typeof e||void 0===e.name||void 0===e.message?Q(e):e.toString()},null):(_=t,v=e,function(t){Error.stackTraceLimit+=6;try{throw new Error}catch(e){t.stack=e.stack}Error.stackTraceLimit-=6})}();"undefined"!=typeof console&&void 0!==console.warn&&(a=function(t){console.warn(t)},u.isNode&&e.stderr.isTTY?a=function(t,e){var n=e?"[33m":"[31m";console.warn(n+t+"[0m\n")}:u.isNode||"string"!=typeof(new Error).stack||(a=function(t,e){console.warn("%c"+t,e?"color: darkorange":"color: red")}));var J={warnings:g,longStackTraces:!1,cancellation:!1,monitoring:!1};return b&&n.longStackTraces(),{longStackTraces:function(){return J.longStackTraces},warnings:function(){return J.warnings},cancellation:function(){return J.cancellation},monitoring:function(){return J.monitoring},propagateFromFunction:function(){return I},boundValueFunction:function(){return H},checkForgottenReturns:function(t,e,n,r,o){if(void 0===t&&null!==e&&w){if(void 0!==o&&o._returnedNonUndefined())return;if(0==(65535&r._bitField))return;n&&(n+=" ");var i="",a="";if(e._trace){for(var s=e._trace.stack.split("\n"),c=D(s),l=c.length-1;l>=0;--l){var u=c[l];if(!h.test(u)){var f=u.match(d);f&&(i="at "+f[1]+":"+f[2]+":"+f[3]+" ");break}}if(c.length>0)for(var p=c[0],l=0;l<s.length;++l)if(s[l]===p){l>0&&(a="\n"+s[l-1]);break}}var _="a promise was created in a "+n+"handler "+i+"but was not returned from it, see http://goo.gl/rRqMUw"+a;r._warn(_,!0,e)}},setBounds:function(t,e){if(X()){for(var n,r,o=t.stack.split("\n"),i=e.stack.split("\n"),a=-1,s=-1,c=0;c<o.length;++c){var l=$(o[c]);if(l){n=l.fileName,a=l.line;break}}for(var c=0;c<i.length;++c){var l=$(i[c]);if(l){r=l.fileName,s=l.line;break}}a<0||s<0||!n||!r||n!==r||a>=s||(K=function(t){if(p.test(t))return!0;var e=$(t);return!!(e&&e.fileName===n&&a<=e.line&&e.line<=s)})}},warn:B,deprecated:function(t,e){var n=t+" is deprecated and will be removed in a future version.";return e&&(n+=" Use "+e+" instead."),B(n)},CapturedTrace:z,fireDomEvent:E,fireGlobalEvent:k}}},{"./errors":9,"./util":21}],8:[function(t,e,n){"use strict";e.exports=function(t){function e(){return this.value}function n(){throw this.reason}t.prototype.return=t.prototype.thenReturn=function(n){return n instanceof t&&n.suppressUnhandledRejections(),this._then(e,void 0,void 0,{value:n},void 0)},t.prototype.throw=t.prototype.thenThrow=function(t){return this._then(n,void 0,void 0,{reason:t},void 0)},t.prototype.catchThrow=function(t){if(arguments.length<=1)return this._then(void 0,n,void 0,{reason:t},void 0);var e=arguments[1];return this.caught(t,function(){throw e})},t.prototype.catchReturn=function(n){if(arguments.length<=1)return n instanceof t&&n.suppressUnhandledRejections(),this._then(void 0,e,void 0,{value:n},void 0);var r=arguments[1];return r instanceof t&&r.suppressUnhandledRejections(),this.caught(n,function(){return r})}}},{}],9:[function(t,e,n){"use strict";var r,o,i=t("./es5"),a=i.freeze,s=t("./util"),c=s.inherits,l=s.notEnumerableProp;function u(t,e){function n(r){if(!(this instanceof n))return new n(r);l(this,"message","string"==typeof r?r:e),l(this,"name",t),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):Error.call(this)}return c(n,Error),n}var f=u("Warning","warning"),p=u("CancellationError","cancellation error"),h=u("TimeoutError","timeout error"),d=u("AggregateError","aggregate error");try{r=TypeError,o=RangeError}catch(t){r=u("TypeError","type error"),o=u("RangeError","range error")}for(var _="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),v=0;v<_.length;++v)"function"==typeof Array.prototype[_[v]]&&(d.prototype[_[v]]=Array.prototype[_[v]]);i.defineProperty(d.prototype,"length",{value:0,configurable:!1,writable:!0,enumerable:!0}),d.prototype.isOperational=!0;var y=0;function m(t){if(!(this instanceof m))return new m(t);l(this,"name","OperationalError"),l(this,"message",t),this.cause=t,this.isOperational=!0,t instanceof Error?(l(this,"message",t.message),l(this,"stack",t.stack)):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}d.prototype.toString=function(){var t=Array(4*y+1).join(" "),e="\n"+t+"AggregateError of:\n";y++,t=Array(4*y+1).join(" ");for(var n=0;n<this.length;++n){for(var r=this[n]===this?"[Circular AggregateError]":this[n]+"",o=r.split("\n"),i=0;i<o.length;++i)o[i]=t+o[i];r=o.join("\n"),e+=r+"\n"}return y--,e},c(m,Error);var g=Error.__BluebirdErrorTypes__;g||(g=a({CancellationError:p,TimeoutError:h,OperationalError:m,RejectionError:m,AggregateError:d}),i.defineProperty(Error,"__BluebirdErrorTypes__",{value:g,writable:!1,enumerable:!1,configurable:!1})),e.exports={Error:Error,TypeError:r,RangeError:o,CancellationError:g.CancellationError,OperationalError:g.OperationalError,TimeoutError:g.TimeoutError,AggregateError:g.AggregateError,Warning:f}},{"./es5":10,"./util":21}],10:[function(t,e,n){var r=function(){"use strict";return void 0===this}();if(r)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,getDescriptor:Object.getOwnPropertyDescriptor,keys:Object.keys,names:Object.getOwnPropertyNames,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:r,propertyIsWritable:function(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return!(n&&!n.writable&&!n.set)}};else{var o={}.hasOwnProperty,i={}.toString,a={}.constructor.prototype,s=function(t){var e=[];for(var n in t)o.call(t,n)&&e.push(n);return e};e.exports={isArray:function(t){try{return"[object Array]"===i.call(t)}catch(t){return!1}},keys:s,names:s,defineProperty:function(t,e,n){return t[e]=n.value,t},getDescriptor:function(t,e){return{value:t[e]}},freeze:function(t){return t},getPrototypeOf:function(t){try{return Object(t).constructor.prototype}catch(t){return a}},isES5:r,propertyIsWritable:function(){return!0}}}},{}],11:[function(t,e,n){"use strict";e.exports=function(e,n,r){var o=t("./util"),i=e.CancellationError,a=o.errorObj,s=t("./catch_filter")(r);function c(t,e,n){this.promise=t,this.type=e,this.handler=n,this.called=!1,this.cancelPromise=null}function l(t){this.finallyHandler=t}function u(t,e){return null!=t.cancelPromise&&(arguments.length>1?t.cancelPromise._reject(e):t.cancelPromise._cancel(),t.cancelPromise=null,!0)}function f(){return h.call(this,this.promise._target()._settledValue())}function p(t){if(!u(this,t))return a.e=t,a}function h(t){var o=this.promise,s=this.handler;if(!this.called){this.called=!0;var c=this.isFinallyHandler()?s.call(o._boundValue()):s.call(o._boundValue(),t);if(c===r)return c;if(void 0!==c){o._setReturnedNonUndefined();var h=n(c,o);if(h instanceof e){if(null!=this.cancelPromise){if(h._isCancelled()){var d=new i("late cancellation observer");return o._attachExtraTrace(d),a.e=d,a}h.isPending()&&h._attachCancellationCallback(new l(this))}return h._then(f,p,void 0,this,void 0)}}}return o.isRejected()?(u(this),a.e=t,a):(u(this),t)}return c.prototype.isFinallyHandler=function(){return 0===this.type},l.prototype._resultCancelled=function(){u(this.finallyHandler)},e.prototype._passThrough=function(t,e,n,r){return"function"!=typeof t?this.then():this._then(n,r,void 0,new c(this,e,t),void 0)},e.prototype.lastly=e.prototype.finally=function(t){return this._passThrough(t,0,h,h)},e.prototype.tap=function(t){return this._passThrough(t,1,h)},e.prototype.tapCatch=function(t){var n=arguments.length;if(1===n)return this._passThrough(t,1,void 0,h);var r,i=new Array(n-1),a=0;for(r=0;r<n-1;++r){var c=arguments[r];if(!o.isObject(c))return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got "+o.classString(c)));i[a++]=c}i.length=a;var l=arguments[r];return this._passThrough(s(i,l,this),1,void 0,h)},c}},{"./catch_filter":5,"./util":21}],12:[function(t,e,n){"use strict";e.exports=function(e,n,r,o,i,a){var s=t("./util");s.canEvaluate,s.tryCatch,s.errorObj,e.join=function(){var t,e=arguments.length-1;e>0&&"function"==typeof arguments[e]&&(t=arguments[e]);var r=[].slice.call(arguments);t&&r.pop();var o=new n(r).promise();return void 0!==t?o.spread(t):o}}},{"./util":21}],13:[function(t,e,n){"use strict";e.exports=function(e,n,r,o,i){var a=t("./util"),s=a.tryCatch;e.method=function(t){if("function"!=typeof t)throw new e.TypeError("expecting a function but got "+a.classString(t));return function(){var r=new e(n);r._captureStackTrace(),r._pushContext();var o=s(t).apply(this,arguments),a=r._popContext();return i.checkForgottenReturns(o,a,"Promise.method",r),r._resolveFromSyncValue(o),r}},e.attempt=e.try=function(t){if("function"!=typeof t)return o("expecting a function but got "+a.classString(t));var r,c=new e(n);if(c._captureStackTrace(),c._pushContext(),arguments.length>1){i.deprecated("calling Promise.try with more than 1 argument");var l=arguments[1],u=arguments[2];r=a.isArray(l)?s(t).apply(u,l):s(t).call(u,l)}else r=s(t)();var f=c._popContext();return i.checkForgottenReturns(r,f,"Promise.try",c),c._resolveFromSyncValue(r),c},e.prototype._resolveFromSyncValue=function(t){t===a.errorObj?this._rejectCallback(t.e,!1):this._resolveCallback(t,!0)}}},{"./util":21}],14:[function(t,e,n){"use strict";var r=t("./util"),o=r.maybeWrapAsError,i=t("./errors"),a=i.OperationalError,s=t("./es5"),c=/^(?:name|message|stack|cause)$/;function l(t){var e;if(function(t){return t instanceof Error&&s.getPrototypeOf(t)===Error.prototype}(t)){(e=new a(t)).name=t.name,e.message=t.message,e.stack=t.stack;for(var n=s.keys(t),o=0;o<n.length;++o){var i=n[o];c.test(i)||(e[i]=t[i])}return e}return r.markAsOriginatingFromRejection(t),t}e.exports=function(t,e){return function(n,r){if(null!==t){if(n){var i=l(o(n));t._attachExtraTrace(i),t._reject(i)}else if(e){var a=[].slice.call(arguments,1);t._fulfill(a)}else t._fulfill(r);t=null}}}},{"./errors":9,"./es5":10,"./util":21}],15:[function(t,n,r){"use strict";n.exports=function(){var r=function(){return new d("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},o=function(){return new O.PromiseInspection(this._target())},i=function(t){return O.reject(new d(t))};function a(){}var s,c={},l=t("./util");s=l.isNode?function(){var t=e.domain;return void 0===t&&(t=null),t}:function(){return null},l.notEnumerableProp(O,"_getDomain",s);var u=t("./es5"),f=t("./async"),p=new f;u.defineProperty(O,"_async",{value:p});var h=t("./errors"),d=O.TypeError=h.TypeError;O.RangeError=h.RangeError;var _=O.CancellationError=h.CancellationError;O.TimeoutError=h.TimeoutError,O.OperationalError=h.OperationalError,O.RejectionError=h.OperationalError,O.AggregateError=h.AggregateError;var v=function(){},y={},m={},g=t("./thenables")(O,v),b=t("./promise_array")(O,v,g,i,a),w=t("./context")(O),C=(w.create,t("./debuggability")(O,w)),E=(C.CapturedTrace,t("./finally")(O,g,m)),k=t("./catch_filter")(m),T=t("./nodeback"),j=l.errorObj,F=l.tryCatch;function O(t){t!==v&&function(t,e){if(null==t||t.constructor!==O)throw new d("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");if("function"!=typeof e)throw new d("expecting a function but got "+l.classString(e))}(this,t),this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._resolveFromExecutor(t),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function S(t){this.promise._resolveCallback(t)}function x(t){this.promise._rejectCallback(t,!1)}function P(t){var e=new O(v);e._fulfillmentHandler0=t,e._rejectionHandler0=t,e._promise0=t,e._receiver0=t}return O.prototype.toString=function(){return"[object Promise]"},O.prototype.caught=O.prototype.catch=function(t){var e=arguments.length;if(e>1){var n,r=new Array(e-1),o=0;for(n=0;n<e-1;++n){var a=arguments[n];if(!l.isObject(a))return i("Catch statement predicate: expecting an object but got "+l.classString(a));r[o++]=a}return r.length=o,t=arguments[n],this.then(void 0,k(r,t,this))}return this.then(void 0,t)},O.prototype.reflect=function(){return this._then(o,o,void 0,this,void 0)},O.prototype.then=function(t,e){if(C.warnings()&&arguments.length>0&&"function"!=typeof t&&"function"!=typeof e){var n=".then() only accepts functions but was passed: "+l.classString(t);arguments.length>1&&(n+=", "+l.classString(e)),this._warn(n)}return this._then(t,e,void 0,void 0,void 0)},O.prototype.done=function(t,e){var n=this._then(t,e,void 0,void 0,void 0);n._setIsFinal()},O.prototype.spread=function(t){return"function"!=typeof t?i("expecting a function but got "+l.classString(t)):this.all()._then(t,void 0,void 0,y,void 0)},O.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this.value(),t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this.reason(),t.isRejected=!0),t},O.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new b(this).promise()},O.prototype.error=function(t){return this.caught(l.originatesFromRejection,t)},O.getNewLibraryCopy=n.exports,O.is=function(t){return t instanceof O},O.fromNode=O.fromCallback=function(t){var e=new O(v);e._captureStackTrace();var n=arguments.length>1&&!!Object(arguments[1]).multiArgs,r=F(t)(T(e,n));return r===j&&e._rejectCallback(r.e,!0),e._isFateSealed()||e._setAsyncGuaranteed(),e},O.all=function(t){return new b(t).promise()},O.cast=function(t){var e=g(t);return e instanceof O||((e=new O(v))._captureStackTrace(),e._setFulfilled(),e._rejectionHandler0=t),e},O.resolve=O.fulfilled=O.cast,O.reject=O.rejected=function(t){var e=new O(v);return e._captureStackTrace(),e._rejectCallback(t,!0),e},O.setScheduler=function(t){if("function"!=typeof t)throw new d("expecting a function but got "+l.classString(t));return p.setScheduler(t)},O.prototype._then=function(t,e,n,r,o){var i=void 0!==o,a=i?o:new O(v),c=this._target(),u=c._bitField;i||(a._propagateFrom(this,3),a._captureStackTrace(),void 0===r&&0!=(2097152&this._bitField)&&(r=0!=(50397184&u)?this._boundValue():c===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,a));var f=s();if(0!=(50397184&u)){var h,d,y=c._settlePromiseCtx;0!=(33554432&u)?(d=c._rejectionHandler0,h=t):0!=(16777216&u)?(d=c._fulfillmentHandler0,h=e,c._unsetRejectionIsUnhandled()):(y=c._settlePromiseLateCancellationObserver,d=new _("late cancellation observer"),c._attachExtraTrace(d),h=e),p.invoke(y,c,{handler:null===f?h:"function"==typeof h&&l.domainBind(f,h),promise:a,receiver:r,value:d})}else c._addCallbacks(t,e,a,r,f);return a},O.prototype._length=function(){return 65535&this._bitField},O.prototype._isFateSealed=function(){return 0!=(117506048&this._bitField)},O.prototype._isFollowing=function(){return 67108864==(67108864&this._bitField)},O.prototype._setLength=function(t){this._bitField=-65536&this._bitField|65535&t},O.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},O.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},O.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},O.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},O.prototype._isFinal=function(){return(4194304&this._bitField)>0},O.prototype._unsetCancelled=function(){this._bitField=-65537&this._bitField},O.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},O.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},O.prototype._setAsyncGuaranteed=function(){p.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},O.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[4*t-4+3];if(e!==c)return void 0===e&&this._isBound()?this._boundValue():e},O.prototype._promiseAt=function(t){return this[4*t-4+2]},O.prototype._fulfillmentHandlerAt=function(t){return this[4*t-4+0]},O.prototype._rejectionHandlerAt=function(t){return this[4*t-4+1]},O.prototype._boundValue=function(){},O.prototype._migrateCallback0=function(t){t._bitField;var e=t._fulfillmentHandler0,n=t._rejectionHandler0,r=t._promise0,o=t._receiverAt(0);void 0===o&&(o=c),this._addCallbacks(e,n,r,o,null)},O.prototype._migrateCallbackAt=function(t,e){var n=t._fulfillmentHandlerAt(e),r=t._rejectionHandlerAt(e),o=t._promiseAt(e),i=t._receiverAt(e);void 0===i&&(i=c),this._addCallbacks(n,r,o,i,null)},O.prototype._addCallbacks=function(t,e,n,r,o){var i=this._length();if(i>=65531&&(i=0,this._setLength(0)),0===i)this._promise0=n,this._receiver0=r,"function"==typeof t&&(this._fulfillmentHandler0=null===o?t:l.domainBind(o,t)),"function"==typeof e&&(this._rejectionHandler0=null===o?e:l.domainBind(o,e));else{var a=4*i-4;this[a+2]=n,this[a+3]=r,"function"==typeof t&&(this[a+0]=null===o?t:l.domainBind(o,t)),"function"==typeof e&&(this[a+1]=null===o?e:l.domainBind(o,e))}return this._setLength(i+1),i},O.prototype._proxy=function(t,e){this._addCallbacks(void 0,void 0,e,t,null)},O.prototype._resolveCallback=function(t,e){if(0==(117506048&this._bitField)){if(t===this)return this._rejectCallback(r(),!1);var n=g(t,this);if(!(n instanceof O))return this._fulfill(t);e&&this._propagateFrom(n,2);var o=n._target();if(o!==this){var i=o._bitField;if(0==(50397184&i)){var a=this._length();a>0&&o._migrateCallback0(this);for(var s=1;s<a;++s)o._migrateCallbackAt(this,s);this._setFollowing(),this._setLength(0),this._setFollowee(o)}else if(0!=(33554432&i))this._fulfill(o._value());else if(0!=(16777216&i))this._reject(o._reason());else{var c=new _("late cancellation observer");o._attachExtraTrace(c),this._reject(c)}}else this._reject(r())}},O.prototype._rejectCallback=function(t,e,n){var r=l.ensureErrorObject(t),o=r===t;if(!o&&!n&&C.warnings()){var i="a promise was rejected with a non-error: "+l.classString(t);this._warn(i,!0)}this._attachExtraTrace(r,!!e&&o),this._reject(t)},O.prototype._resolveFromExecutor=function(t){if(t!==v){var e=this;this._captureStackTrace(),this._pushContext();var n=!0,r=this._execute(t,function(t){e._resolveCallback(t)},function(t){e._rejectCallback(t,n)});n=!1,this._popContext(),void 0!==r&&e._rejectCallback(r,!0)}},O.prototype._settlePromiseFromHandler=function(t,e,n,r){var o=r._bitField;if(0==(65536&o)){var i;r._pushContext(),e===y?n&&"number"==typeof n.length?i=F(t).apply(this._boundValue(),n):(i=j).e=new d("cannot .spread() a non-array: "+l.classString(n)):i=F(t).call(e,n);var a=r._popContext();0==(65536&(o=r._bitField))&&(i===m?r._reject(n):i===j?r._rejectCallback(i.e,!1):(C.checkForgottenReturns(i,a,"",r,this),r._resolveCallback(i)))}},O.prototype._target=function(){for(var t=this;t._isFollowing();)t=t._followee();return t},O.prototype._followee=function(){return this._rejectionHandler0},O.prototype._setFollowee=function(t){this._rejectionHandler0=t},O.prototype._settlePromise=function(t,e,n,r){var i=t instanceof O,s=this._bitField,c=0!=(134217728&s);0!=(65536&s)?(i&&t._invokeInternalOnCancel(),n instanceof E&&n.isFinallyHandler()?(n.cancelPromise=t,F(e).call(n,r)===j&&t._reject(j.e)):e===o?t._fulfill(o.call(n)):n instanceof a?n._promiseCancelled(t):i||t instanceof b?t._cancel():n.cancel()):"function"==typeof e?i?(c&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(e,n,r,t)):e.call(n,r,t):n instanceof a?n._isResolved()||(0!=(33554432&s)?n._promiseFulfilled(r,t):n._promiseRejected(r,t)):i&&(c&&t._setAsyncGuaranteed(),0!=(33554432&s)?t._fulfill(r):t._reject(r))},O.prototype._settlePromiseLateCancellationObserver=function(t){var e=t.handler,n=t.promise,r=t.receiver,o=t.value;"function"==typeof e?n instanceof O?this._settlePromiseFromHandler(e,r,o,n):e.call(r,o,n):n instanceof O&&n._reject(o)},O.prototype._settlePromiseCtx=function(t){this._settlePromise(t.promise,t.handler,t.receiver,t.value)},O.prototype._settlePromise0=function(t,e,n){var r=this._promise0,o=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,t,o,e)},O.prototype._clearCallbackDataAtIndex=function(t){var e=4*t-4;this[e+2]=this[e+3]=this[e+0]=this[e+1]=void 0},O.prototype._fulfill=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(t===this){var n=r();return this._attachExtraTrace(n),this._reject(n)}this._setFulfilled(),this._rejectionHandler0=t,(65535&e)>0&&(0!=(134217728&e)?this._settlePromises():p.settlePromises(this))}},O.prototype._reject=function(t){var e=this._bitField;if(!((117506048&e)>>>16)){if(this._setRejected(),this._fulfillmentHandler0=t,this._isFinal())return p.fatalError(t,l.isNode);(65535&e)>0?p.settlePromises(this):this._ensurePossibleRejectionHandled()}},O.prototype._fulfillPromises=function(t,e){for(var n=1;n<t;n++){var r=this._fulfillmentHandlerAt(n),o=this._promiseAt(n),i=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(o,r,i,e)}},O.prototype._rejectPromises=function(t,e){for(var n=1;n<t;n++){var r=this._rejectionHandlerAt(n),o=this._promiseAt(n),i=this._receiverAt(n);this._clearCallbackDataAtIndex(n),this._settlePromise(o,r,i,e)}},O.prototype._settlePromises=function(){var t=this._bitField,e=65535&t;if(e>0){if(0!=(16842752&t)){var n=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,n,t),this._rejectPromises(e,n)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,t),this._fulfillPromises(e,r)}this._setLength(0)}this._clearCancellationData()},O.prototype._settledValue=function(){var t=this._bitField;return 0!=(33554432&t)?this._rejectionHandler0:0!=(16777216&t)?this._fulfillmentHandler0:void 0},O.defer=O.pending=function(){C.deprecated("Promise.defer","new Promise");var t=new O(v);return{promise:t,resolve:S,reject:x}},l.notEnumerableProp(O,"_makeSelfResolutionError",r),t("./method")(O,v,g,i,C),t("./bind")(O,v,g,C),t("./cancel")(O,b,i,C),t("./direct_resolve")(O),t("./synchronous_inspection")(O),t("./join")(O,b,g,v,p,s),O.Promise=O,O.version="3.5.1",l.toFastProperties(O),l.toFastProperties(O.prototype),P({a:1}),P({b:2}),P({c:3}),P(1),P(function(){}),P(void 0),P(!1),P(new O(v)),C.setBounds(f.firstLineError,l.lastLineError),O}},{"./async":1,"./bind":2,"./cancel":4,"./catch_filter":5,"./context":6,"./debuggability":7,"./direct_resolve":8,"./errors":9,"./es5":10,"./finally":11,"./join":12,"./method":13,"./nodeback":14,"./promise_array":16,"./synchronous_inspection":19,"./thenables":20,"./util":21}],16:[function(t,e,n){"use strict";e.exports=function(e,n,r,o,i){var a=t("./util");function s(t){var r=this._promise=new e(n);t instanceof e&&r._propagateFrom(t,3),r._setOnCancel(this),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}return a.isArray,a.inherits(s,i),s.prototype.length=function(){return this._length},s.prototype.promise=function(){return this._promise},s.prototype._init=function t(n,i){var s=r(this._values,this._promise);if(s instanceof e){var c=(s=s._target())._bitField;if(this._values=s,0==(50397184&c))return this._promise._setAsyncGuaranteed(),s._then(t,this._reject,void 0,this,i);if(0==(33554432&c))return 0!=(16777216&c)?this._reject(s._reason()):this._cancel();s=s._value()}if(null!==(s=a.asArray(s)))0!==s.length?this._iterate(s):-5===i?this._resolveEmptyArray():this._resolve(function(t){switch(t){case-2:return[];case-3:return{};case-6:return new Map}}(i));else{var l=o("expecting an array or an iterable object but got "+a.classString(s)).reason();this._promise._rejectCallback(l,!1)}},s.prototype._iterate=function(t){var n=this.getActualLength(t.length);this._length=n,this._values=this.shouldCopyValues()?new Array(n):this._values;for(var o=this._promise,i=!1,a=null,s=0;s<n;++s){var c=r(t[s],o);c instanceof e?(c=c._target(),a=c._bitField):a=null,i?null!==a&&c.suppressUnhandledRejections():null!==a?0==(50397184&a)?(c._proxy(this,s),this._values[s]=c):i=0!=(33554432&a)?this._promiseFulfilled(c._value(),s):0!=(16777216&a)?this._promiseRejected(c._reason(),s):this._promiseCancelled(s):i=this._promiseFulfilled(c,s)}i||o._setAsyncGuaranteed()},s.prototype._isResolved=function(){return null===this._values},s.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},s.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},s.prototype._reject=function(t){this._values=null,this._promise._rejectCallback(t,!1)},s.prototype._promiseFulfilled=function(t,e){this._values[e]=t;var n=++this._totalResolved;return n>=this._length&&(this._resolve(this._values),!0)},s.prototype._promiseCancelled=function(){return this._cancel(),!0},s.prototype._promiseRejected=function(t){return this._totalResolved++,this._reject(t),!0},s.prototype._resultCancelled=function(){if(!this._isResolved()){var t=this._values;if(this._cancel(),t instanceof e)t.cancel();else for(var n=0;n<t.length;++n)t[n]instanceof e&&t[n].cancel()}},s.prototype.shouldCopyValues=function(){return!0},s.prototype.getActualLength=function(t){return t},s}},{"./util":21}],17:[function(t,e,n){"use strict";function r(t){this._capacity=t,this._length=0,this._front=0}r.prototype._willBeOverCapacity=function(t){return this._capacity<t},r.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1);var n=this._front+e&this._capacity-1;this[n]=t,this._length=e+1},r.prototype.push=function(t,e,n){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(n);var o=this._front+r-3;this._checkCapacity(r);var i=this._capacity-1;this[o+0&i]=t,this[o+1&i]=e,this[o+2&i]=n,this._length=r},r.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},r.prototype.length=function(){return this._length},r.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<1)},r.prototype._resizeTo=function(t){var e=this._capacity;this._capacity=t;var n=this._front,r=this._length,o=n+r&e-1;!function(t,e,n,r,o){for(var i=0;i<o;++i)n[i+r]=t[i+e],t[i+e]=void 0}(this,0,this,e,o)},e.exports=r},{}],18:[function(t,o,i){"use strict";var a,s,c,l,u,f=t("./util"),p=f.getNativePromise();if(f.isNode&&"undefined"==typeof MutationObserver){var h=n.setImmediate,d=e.nextTick;a=f.isRecentNode?function(t){h.call(n,t)}:function(t){d.call(e,t)}}else if("function"==typeof p&&"function"==typeof p.resolve){var _=p.resolve();a=function(t){_.then(t)}}else a="undefined"==typeof MutationObserver||"undefined"!=typeof window&&window.navigator&&(window.navigator.standalone||window.cordova)?void 0!==r?function(t){r(t)}:"undefined"!=typeof setTimeout?function(t){setTimeout(t,0)}:function(){throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")}:(s=document.createElement("div"),c={attributes:!0},l=!1,u=document.createElement("div"),new MutationObserver(function(){s.classList.toggle("foo"),l=!1}).observe(u,c),function(t){var e=new MutationObserver(function(){e.disconnect(),t()});e.observe(s,c),l||(l=!0,u.classList.toggle("foo"))});o.exports=a},{"./util":21}],19:[function(t,e,n){"use strict";e.exports=function(t){function e(t){void 0!==t?(t=t._target(),this._bitField=t._bitField,this._settledValueField=t._isFateSealed()?t._settledValue():void 0):(this._bitField=0,this._settledValueField=void 0)}e.prototype._settledValue=function(){return this._settledValueField};var n=e.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},r=e.prototype.error=e.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");return this._settledValue()},o=e.prototype.isFulfilled=function(){return 0!=(33554432&this._bitField)},i=e.prototype.isRejected=function(){return 0!=(16777216&this._bitField)},a=e.prototype.isPending=function(){return 0==(50397184&this._bitField)},s=e.prototype.isResolved=function(){return 0!=(50331648&this._bitField)};e.prototype.isCancelled=function(){return 0!=(8454144&this._bitField)},t.prototype.__isCancelled=function(){return 65536==(65536&this._bitField)},t.prototype._isCancelled=function(){return this._target().__isCancelled()},t.prototype.isCancelled=function(){return 0!=(8454144&this._target()._bitField)},t.prototype.isPending=function(){return a.call(this._target())},t.prototype.isRejected=function(){return i.call(this._target())},t.prototype.isFulfilled=function(){return o.call(this._target())},t.prototype.isResolved=function(){return s.call(this._target())},t.prototype.value=function(){return n.call(this._target())},t.prototype.reason=function(){var t=this._target();return t._unsetRejectionIsUnhandled(),r.call(t)},t.prototype._value=function(){return this._settledValue()},t.prototype._reason=function(){return this._unsetRejectionIsUnhandled(),this._settledValue()},t.PromiseInspection=e}},{}],20:[function(t,e,n){"use strict";e.exports=function(e,n){var r=t("./util"),o=r.errorObj,i=r.isObject,a={}.hasOwnProperty;return function(t,s){if(i(t)){if(t instanceof e)return t;var c=function(t){try{return function(t){return t.then}(t)}catch(t){return o.e=t,o}}(t);if(c===o){s&&s._pushContext();var l=e.reject(c.e);return s&&s._popContext(),l}if("function"==typeof c){if(function(t){try{return a.call(t,"_promise0")}catch(t){return!1}}(t)){var l=new e(n);return t._then(l._fulfill,l._reject,void 0,l,null),l}return function(t,i,a){var s=new e(n),c=s;a&&a._pushContext(),s._captureStackTrace(),a&&a._popContext();var l=!0,u=r.tryCatch(i).call(t,function(t){s&&(s._resolveCallback(t),s=null)},function(t){s&&(s._rejectCallback(t,l,!0),s=null)});return l=!1,s&&u===o&&(s._rejectCallback(u.e,!0,!0),s=null),c}(t,c,s)}}return t}}},{"./util":21}],21:[function(t,r,o){"use strict";var i=t("./es5"),a="undefined"==typeof navigator,s={e:{}},c,l="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:void 0!==this?this:null;function u(){try{var t=c;return c=null,t.apply(this,arguments)}catch(t){return s.e=t,s}}function f(t){return c=t,u}var p=function(t,e){var n={}.hasOwnProperty;function r(){for(var r in this.constructor=t,this.constructor$=e,e.prototype)n.call(e.prototype,r)&&"$"!==r.charAt(r.length-1)&&(this[r+"$"]=e.prototype[r])}return r.prototype=e.prototype,t.prototype=new r,t.prototype};function h(t){return null==t||!0===t||!1===t||"string"==typeof t||"number"==typeof t}function d(t){return"function"==typeof t||"object"==typeof t&&null!==t}function _(t){return h(t)?new Error(F(t)):t}function v(t,e){var n,r=t.length,o=new Array(r+1);for(n=0;n<r;++n)o[n]=t[n];return o[n]=e,o}function y(t,e,n){if(!i.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var r=Object.getOwnPropertyDescriptor(t,e);return null!=r?null==r.get&&null==r.set?r.value:n:void 0}function m(t,e,n){if(h(t))return t;var r={value:n,configurable:!0,enumerable:!1,writable:!0};return i.defineProperty(t,e,r),t}function g(t){throw t}var b=function(){var t=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var n=0;n<t.length;++n)if(t[n]===e)return!0;return!1};if(i.isES5){var n=Object.getOwnPropertyNames;return function(t){for(var r=[],o=Object.create(null);null!=t&&!e(t);){var a;try{a=n(t)}catch(t){return r}for(var s=0;s<a.length;++s){var c=a[s];if(!o[c]){o[c]=!0;var l=Object.getOwnPropertyDescriptor(t,c);null!=l&&null==l.get&&null==l.set&&r.push(c)}}t=i.getPrototypeOf(t)}return r}}var r={}.hasOwnProperty;return function(n){if(e(n))return[];var o=[];t:for(var i in n)if(r.call(n,i))o.push(i);else{for(var a=0;a<t.length;++a)if(r.call(t[a],i))continue t;o.push(i)}return o}}(),w=/this\s*\.\s*\S+\s*=/;function C(t){try{if("function"==typeof t){var e=i.names(t.prototype),n=i.isES5&&e.length>1,r=e.length>0&&!(1===e.length&&"constructor"===e[0]),o=w.test(t+"")&&i.names(t).length>0;if(n||r||o)return!0}return!1}catch(t){return!1}}function E(t){function e(){}e.prototype=t;for(var n=8;n--;)new e;return t}var k=/^[a-z$_][a-z$_0-9]*$/i;function T(t){return k.test(t)}function j(t,e,n){for(var r=new Array(t),o=0;o<t;++o)r[o]=e+o+n;return r}function F(t){try{return t+""}catch(t){return"[no string representation]"}}function O(t){return t instanceof Error||null!==t&&"object"==typeof t&&"string"==typeof t.message&&"string"==typeof t.name}function S(t){try{m(t,"isOperational",!0)}catch(t){}}function x(t){return null!=t&&(t instanceof Error.__BluebirdErrorTypes__.OperationalError||!0===t.isOperational)}function P(t){return O(t)&&i.propertyIsWritable(t,"stack")}var R="stack"in new Error?function(t){return P(t)?t:new Error(F(t))}:function(t){if(P(t))return t;try{throw new Error(F(t))}catch(t){return t}};function A(t){return{}.toString.call(t)}function L(t,e,n){for(var r=i.names(t),o=0;o<r.length;++o){var a=r[o];if(n(a))try{i.defineProperty(e,a,i.getDescriptor(t,a))}catch(t){}}}var I=function(t){return i.isArray(t)?t:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var H="function"==typeof Array.from?function(t){return Array.from(t)}:function(t){for(var e,n=[],r=t[Symbol.iterator]();!(e=r.next()).done;)n.push(e.value);return n};I=function(t){return i.isArray(t)?t:null!=t&&"function"==typeof t[Symbol.iterator]?H(t):null}}var N=void 0!==e&&"[object process]"===A(e).toLowerCase(),U=void 0!==e&&void 0!==e.env;function B(t){return U?e.env[t]:void 0}function D(){if("function"==typeof Promise)try{var t=new Promise(function(){});if("[object Promise]"==={}.toString.call(t))return Promise}catch(t){}}function M(t,e){return t.bind(e)}var q={isClass:C,isIdentifier:T,inheritedDataKeys:b,getDataPropertyOrDefault:y,thrower:g,isArray:i.isArray,asArray:I,notEnumerableProp:m,isPrimitive:h,isObject:d,isError:O,canEvaluate:a,errorObj:s,tryCatch:f,inherits:p,withAppended:v,maybeWrapAsError:_,toFastProperties:E,filledRange:j,toString:F,canAttachTrace:P,ensureErrorObject:R,originatesFromRejection:x,markAsOriginatingFromRejection:S,classString:A,copyDescriptors:L,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:N,hasEnvVariables:U,env:B,global:l,getNativePromise:D,domainBind:M},V;q.isRecentNode=q.isNode&&(V=e.versions.node.split(".").map(Number),0===V[0]&&V[1]>10||V[0]>0),q.isNode&&q.toFastProperties(e);try{throw new Error}catch(t){q.lastLineError=t}r.exports=q},{"./es5":10}]},{},[3])(3)}(),"undefined"!=typeof window&&null!==window?window.P=window.Promise:"undefined"!=typeof self&&null!==self&&(self.P=self.Promise)}).call(this,n(3),n(2),n(8).setImmediate)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BlueBird=void 0;var r,o=n(9),i=(r=o)&&r.__esModule?r:{default:r};var a=e.BlueBird=i.default.config({cancellation:!0,longStackTraces:!1,warnings:!1});e.default=a},function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){t.exports=function(t){var e,n={},r=/\+/g,o=/([^&=]+)=?([^&]*)/g,i=function(t){return decodeURIComponent(t.replace(r," "))},a=t.split("?")[1];for(;e=o.exec(a);)n[i(e[1])]=i(e[2]);return n}},function(t,e,n){(function(e){(function(e){var r=e.Keen||void 0,o=n(0),i=n(1),a=n(12),s=n(4),c=n(11);function l(t){if(this instanceof l==!1)return new l(t);this.configure(t),l.debug&&this.on("error",l.log),this.emit("ready"),l.emit("client",this)}function u(t){return void 0!==t}r&&void 0===r.resources&&(l.legacyVersion=r),c(l),c(l.prototype),i(l,{debug:!1,enabled:!0,loaded:!1,version:"__VERSION__"}),l.helpers=l.helpers||{},l.resources=l.resources||{},i(l.resources,{base:"{protocol}://{host}",version:"{protocol}://{host}/3.0",projects:"{protocol}://{host}/3.0/projects",projectId:"{protocol}://{host}/3.0/projects/{projectId}",events:"{protocol}://{host}/3.0/projects/{projectId}/events",queries:"{protocol}://{host}/3.0/projects/{projectId}/queries",datasets:"{protocol}://{host}/3.0/projects/{projectId}/datasets"}),l.utils=l.utils||{},i(l.utils,{each:o,extend:i,parseParams:a,serialize:s}),l.extendLibrary=function(t,e){var n=r||e;return u(n)&&u(n.resources)&&(o(n,function(e,n){"object"==typeof e?(t[n]=t[n]||{},i(t[n],e)):t[n]=t[n]||e}),i(t.prototype,n.prototype)),t},l.log=function(t){l.debug&&"object"==typeof console&&console.log("[Keen]",t)},l.noConflict=function(){return void 0!==e.Keen&&(e.Keen=l.legacyVersion||r),l},l.ready=function(t){l.loaded?t():l.once("ready",t)},l.prototype.configure=function(t){var e=t||{};return this.config=this.config||{projectId:void 0,writeKey:void 0,host:"api.keen.io",protocol:"https",requestType:"jsonp",resources:i({},l.resources)},"undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1&&(e.protocol=document.location.protocol.replace(":","")),e.host&&e.host.replace(/.*?:\/\//g,""),i(this.config,e),this},l.prototype.masterKey=function(t){return arguments.length?(this.config.masterKey=t?String(t):null,this):this.config.masterKey},l.prototype.projectId=function(t){return arguments.length?(this.config.projectId=t?String(t):null,this):this.config.projectId},l.prototype.resources=function(t){if(!arguments.length)return this.config.resources;var e=this;return"object"==typeof t&&o(t,function(t,n){e.config.resources[n]=t||null}),e},l.prototype.url=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=this.config.resources.base||"{protocol}://{host}";return e=t&&"string"==typeof t?this.config.resources[t]?this.config.resources[t]:r+t:r,o(this.config,function(t,n){"object"!=typeof t&&(e=e.replace("{"+n+"}",t))}),o(n,function(t,n){"string"==typeof t?e+="/"+t:"object"==typeof t&&(e+="?",o(t,function(t,n){e+=n+"="+t+"&"}),e=e.slice(0,-1))}),e},function(t){if(l.loaded||"undefined"==typeof document)return void t();null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t,!1),document.readyState="complete"},!1),document.readyState="loading");!function t(e){/in/.test(document.readyState)?setTimeout(function(){t(e)},9):e()}(t)}(function(){l.loaded=!0,l.emit("ready")}),t.exports=l}).call(this,"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{})}).call(this,n(2))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.KeenAnalysis=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=c(n(13)),i=c(n(10)),a=c(n(0)),s=c(n(1));function c(t){return t&&t.__esModule?t:{default:t}}function l(t,e){this.analysis=t,this.params={},this.set(e),void 0===this.params.timezone&&(this.params.timezone=-60*(new Date).getTimezoneOffset())}o.default.prototype.readKey=function(t){return arguments.length?(this.config.readKey=t?String(t):null,this):this.config.readKey},o.default.prototype.query=function(t,e){if(t&&e&&"string"==typeof e)return e.indexOf("/result")<0&&(e+="/result"),this.get(this.url("queries",t,e)).auth(this.readKey()).send();if("dataset"===t&&"object"===(void 0===e?"undefined":r(e)))return this.get(this.url("datasets",e.name,"results")).auth(this.readKey()).send(e);if(t&&e&&"object"===(void 0===e?"undefined":r(e))){var n=(0,s.default)({analysis_type:t},e);return this.post(this.url("queries",t)).auth(this.readKey()).send(n)}return t&&!e?i.default.reject({error_code:"SDKError",message:".query() called with incorrect arguments"}):void 0},o.default.Query=l,o.default.prototype.run=function(t,e){var n=this,r=e,c=void 0,l=t instanceof Array?t:[t],u=[];return(0,a.default)(l,function(t,e){"string"==typeof t?u.push(n.query("saved",t+"/result")):t instanceof o.default.Query&&u.push(n.query(t.analysis,(0,s.default)({analysis_type:t.analysis},t.params)))}),c=u.length>1?i.default.all(u):u[0],r&&(c.then(function(t){r(null,t)}),c.catch(function(t){r(t,null)})),c},l.prototype.set=function(t){var e=this;return(0,a.default)(t,function(t,n){var o=n,i=t;n.match(new RegExp("[A-Z]"))&&(o=n.replace(/([A-Z])/g,function(t){return"_"+t.toLowerCase()})),e.params[o]=i,i instanceof Array&&(0,a.default)(i,function(t,n){t instanceof Array==0&&"object"===(void 0===t?"undefined":r(t))&&(0,a.default)(t,function(t,r){if(r.match(new RegExp("[A-Z]"))){var i=r.replace(/([A-Z])/g,function(t){return"_"+t.toLowerCase()});delete e.params[o][n][r],e.params[o][n][i]=t}})})}),e},l.prototype.get=function(t){var e=t;if(e.match(new RegExp("[A-Z]"))&&(e=e.replace(/([A-Z])/g,function(t){return"_"+t.toLowerCase()})),this.params)return this.params[e]||null},l.prototype.addFilter=function(t,e,n){return this.params.filters=this.params.filters||[],this.params.filters.push({property_name:t,operator:e,property_value:n}),this};var u=e.KeenAnalysis=o.default;e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Keen=void 0;a(n(1));var r=a(n(14)),o=a(n(6)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(5));function a(t){return t&&t.__esModule?t:{default:t}}r.default.prototype.get=new o.default("GET",i),r.default.prototype.post=new o.default("POST",i),r.default.prototype.put=new o.default("PUT",i),r.default.prototype.del=new o.default("DELETE",i);var s=e.Keen=r.default.extendLibrary(r.default);e.default=s}])});
//# sourceMappingURL=keen-analysis.min.js.map
})((function(){ function newDefine(){ var args = Array.prototype.slice.call(arguments); args.unshift("keen-analysis"); return define.apply(null, args); }; newDefine.amd = true; return newDefine; })());
;(function(define){
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=64)}([function(t,e,n){"use strict";var r="http://www.w3.org/1999/xhtml",i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},a=function(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),i.hasOwnProperty(e)?{space:i[e],local:t}:t};var o=function(t){var e=a(t);return(e.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===r&&e.documentElement.namespaceURI===r?e.createElement(t):e.createElementNS(n,t)}})(e)};function u(){}var c=function(t){return null==t?u:function(){return this.querySelector(t)}};function s(){return[]}var f=function(t){return null==t?s:function(){return this.querySelectorAll(t)}},l=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var d=document.documentElement;if(!d.matches){var h=d.webkitMatchesSelector||d.msMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector;l=function(t){return function(){return h.call(this,t)}}}}var g=l,p=function(t){return new Array(t.length)};function _(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}_.prototype={constructor:_,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var y="$";function v(t,e,n,r,i,a){for(var o,u=0,c=e.length,s=a.length;u<s;++u)(o=e[u])?(o.__data__=a[u],r[u]=o):n[u]=new _(t,a[u]);for(;u<c;++u)(o=e[u])&&(i[u]=o)}function x(t,e,n,r,i,a,o){var u,c,s,f={},l=e.length,d=a.length,h=new Array(l);for(u=0;u<l;++u)(c=e[u])&&(h[u]=s=y+o.call(c,c.__data__,u,e),s in f?i[u]=c:f[s]=c);for(u=0;u<d;++u)(c=f[s=y+o.call(t,a[u],u,a)])?(r[u]=c,c.__data__=a[u],f[s]=null):n[u]=new _(t,a[u]);for(u=0;u<l;++u)(c=e[u])&&f[h[u]]===c&&(i[u]=c)}function m(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}var b=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function w(t,e){return t.style.getPropertyValue(e)||b(t).getComputedStyle(t,null).getPropertyValue(e)}function S(t){return t.trim().split(/^|\s+/)}function A(t){return t.classList||new T(t)}function T(t){this._node=t,this._names=S(t.getAttribute("class")||"")}function P(t,e){for(var n=A(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function C(t,e){for(var n=A(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}T.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function M(){this.textContent=""}function L(){this.innerHTML=""}function O(){this.nextSibling&&this.parentNode.appendChild(this)}function E(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function k(){return null}function G(){var t=this.parentNode;t&&t.removeChild(this)}function V(){return this.parentNode.insertBefore(this.cloneNode(!1),this.nextSibling)}function R(){return this.parentNode.insertBefore(this.cloneNode(!0),this.nextSibling)}var I={},D=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(I={mouseenter:"mouseover",mouseleave:"mouseout"}));function N(t,e,n){return t=F(t,e,n),function(e){var n=e.relatedTarget;n&&(n===this||8&n.compareDocumentPosition(this))||t.call(this,e)}}function F(t,e,n){return function(r){var i=D;D=r;try{t.call(this,this.__data__,e,n)}finally{D=i}}}function z(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,a=e.length;r<a;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.capture);++i?e.length=i:delete this.__on}}}function j(t,e,n){var r=I.hasOwnProperty(t.type)?N:F;return function(i,a,o){var u,c=this.__on,s=r(e,a,o);if(c)for(var f=0,l=c.length;f<l;++f)if((u=c[f]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=s,u.capture=n),void(u.value=e);this.addEventListener(t.type,s,n),u={type:t.type,name:t.name,value:e,listener:s,capture:n},c?c.push(u):this.__on=[u]}}function B(t,e,n,r){var i=D;t.sourceEvent=D,D=t;try{return e.apply(n,r)}finally{D=i}}function H(t,e,n){var r=b(t),i=r.CustomEvent;"function"==typeof i?i=new i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}var X=[null];function Y(t,e){this._groups=t,this._parents=e}function U(){return new Y([[document.documentElement]],X)}Y.prototype=U.prototype={constructor:Y,select:function(t){"function"!=typeof t&&(t=c(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var a,o,u=e[i],s=u.length,f=r[i]=new Array(s),l=0;l<s;++l)(a=u[l])&&(o=t.call(a,a.__data__,l,u))&&("__data__"in a&&(o.__data__=a.__data__),f[l]=o);return new Y(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=f(t));for(var e=this._groups,n=e.length,r=[],i=[],a=0;a<n;++a)for(var o,u=e[a],c=u.length,s=0;s<c;++s)(o=u[s])&&(r.push(t.call(o,o.__data__,s,u)),i.push(o));return new Y(r,i)},filter:function(t){"function"!=typeof t&&(t=g(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var a,o=e[i],u=o.length,c=r[i]=[],s=0;s<u;++s)(a=o[s])&&t.call(a,a.__data__,s,o)&&c.push(a);return new Y(r,this._parents)},data:function(t,e){if(!t)return g=new Array(this.size()),f=-1,this.each(function(t){g[++f]=t}),g;var n,r=e?x:v,i=this._parents,a=this._groups;"function"!=typeof t&&(n=t,t=function(){return n});for(var o=a.length,u=new Array(o),c=new Array(o),s=new Array(o),f=0;f<o;++f){var l=i[f],d=a[f],h=d.length,g=t.call(l,l&&l.__data__,f,i),p=g.length,_=c[f]=new Array(p),y=u[f]=new Array(p);r(l,d,_,y,s[f]=new Array(h),g,e);for(var m,b,w=0,S=0;w<p;++w)if(m=_[w]){for(w>=S&&(S=w+1);!(b=y[S])&&++S<p;);m._next=b||null}}return(u=new Y(u,i))._enter=c,u._exit=s,u},enter:function(){return new Y(this._enter||this._groups.map(p),this._parents)},exit:function(){return new Y(this._exit||this._groups.map(p),this._parents)},merge:function(t){for(var e=this._groups,n=t._groups,r=e.length,i=n.length,a=Math.min(r,i),o=new Array(r),u=0;u<a;++u)for(var c,s=e[u],f=n[u],l=s.length,d=o[u]=new Array(l),h=0;h<l;++h)(c=s[h]||f[h])&&(d[h]=c);for(;u<r;++u)o[u]=e[u];return new Y(o,this._parents)},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],a=i.length-1,o=i[a];--a>=0;)(r=i[a])&&(o&&o!==r.nextSibling&&o.parentNode.insertBefore(r,o),o=r);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=m);for(var n=this._groups,r=n.length,i=new Array(r),a=0;a<r;++a){for(var o,u=n[a],c=u.length,s=i[a]=new Array(c),f=0;f<c;++f)(o=u[f])&&(s[f]=o);s.sort(e)}return new Y(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),e=-1;return this.each(function(){t[++e]=this}),t},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,a=e[n],o=0,u=a.length;o<u;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this},attr:function(t,e){var n=a(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof e?n.local?function(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}:function(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}:n.local?function(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}:function(t,e){return function(){this.setAttribute(t,e)}})(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof e?function(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}:function(t,e,n){return function(){this.style.setProperty(t,e,n)}})(t,e,null==n?"":n)):w(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?function(t){return function(){delete this[t]}}:"function"==typeof e?function(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}:function(t,e){return function(){this[t]=e}})(t,e)):this.node()[t]},classed:function(t,e){var n=S(t+"");if(arguments.length<2){for(var r=A(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"==typeof e?function(t,e){return function(){(e.apply(this,arguments)?P:C)(this,t)}}:e?function(t){return function(){P(this,t)}}:function(t){return function(){C(this,t)}})(n,e))},text:function(t){return arguments.length?this.each(null==t?M:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?L:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(O)},lower:function(){return this.each(E)},append:function(t){var e="function"==typeof t?t:o(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var n="function"==typeof t?t:o(t),r=null==e?k:"function"==typeof e?e:c(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(G)},clone:function(t){return this.select(t?R:V)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,i,a=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}(t+""),o=a.length;if(!(arguments.length<2)){for(u=e?j:z,null==n&&(n=!1),r=0;r<o;++r)this.each(u(a[r],e,n));return this}var u=this.node().__on;if(u)for(var c,s=0,f=u.length;s<f;++s)for(r=0,c=u[s];r<o;++r)if((i=a[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?function(t,e){return function(){return H(this,t,e.apply(this,arguments))}}:function(t,e){return function(){return H(this,t,e)}})(t,e))}};var q=U,W=function(t){return"string"==typeof t?new Y([[document.querySelector(t)]],[document.documentElement]):new Y([[t]],X)},Q=function(t){return W(o(t).call(document.documentElement))},Z=0;function K(){return new J}function J(){this._="@"+(++Z).toString(36)}J.prototype=K.prototype={constructor:J,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return;return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var $=function(){for(var t,e=D;t=e.sourceEvent;)e=t;return e},tt=function(t,e){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]},et=function(t){var e=$();return e.changedTouches&&(e=e.changedTouches[0]),tt(t,e)},nt=function(t){return"string"==typeof t?new Y([document.querySelectorAll(t)],[document.documentElement]):new Y([null==t?[]:t],X)},rt=function(t,e,n){arguments.length<3&&(n=e,e=$().changedTouches);for(var r,i=0,a=e?e.length:0;i<a;++i)if((r=e[i]).identifier===n)return tt(t,r);return null},it=function(t,e){null==e&&(e=$().touches);for(var n=0,r=e?e.length:0,i=new Array(r);n<r;++n)i[n]=tt(t,e[n]);return i};n.d(e,"b",function(){return Q}),n.d(e,"c",function(){return o}),n.d(e,"f",function(){return K}),n.d(e,"g",function(){return g}),n.d(e,"h",function(){return et}),n.d(e,"i",function(){return a}),n.d(e,"j",function(){return i}),n.d(e,"a",function(){return tt}),n.d(e,"k",function(){return W}),n.d(e,"l",function(){return nt}),n.d(e,"m",function(){return q}),n.d(e,"n",function(){return c}),n.d(e,"o",function(){return f}),n.d(e,"p",function(){return w}),n.d(e,"q",function(){return rt}),n.d(e,"r",function(){return it}),n.d(e,"s",function(){return b}),n.d(e,"e",function(){return D}),n.d(e,"d",function(){return B})},function(t,e,n){"use strict";var r=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},i=function(t){var e;return 1===t.length&&(e=t,t=function(t,n){return r(e(t),n)}),{left:function(e,n,r,i){for(null==r&&(r=0),null==i&&(i=e.length);r<i;){var a=r+i>>>1;t(e[a],n)<0?r=a+1:i=a}return r},right:function(e,n,r,i){for(null==r&&(r=0),null==i&&(i=e.length);r<i;){var a=r+i>>>1;t(e[a],n)>0?i=a:r=a+1}return r}}};var a=i(r),o=a.right,u=a.left,c=o,s=function(t,e){null==e&&(e=f);for(var n=0,r=t.length-1,i=t[0],a=new Array(r<0?0:r);n<r;)a[n]=e(i,i=t[++n]);return a};function f(t,e){return[t,e]}var l=function(t,e,n){var r,i,a,o,u=t.length,c=e.length,s=new Array(u*c);for(null==n&&(n=f),r=a=0;r<u;++r)for(o=t[r],i=0;i<c;++i,++a)s[a]=n(o,e[i]);return s},d=function(t,e){return e<t?-1:e>t?1:e>=t?0:NaN},h=function(t){return null===t?NaN:+t},g=function(t,e){var n,r,i=t.length,a=0,o=-1,u=0,c=0;if(null==e)for(;++o<i;)isNaN(n=h(t[o]))||(c+=(r=n-u)*(n-(u+=r/++a)));else for(;++o<i;)isNaN(n=h(e(t[o],o,t)))||(c+=(r=n-u)*(n-(u+=r/++a)));if(a>1)return c/(a-1)},p=function(t,e){var n=g(t,e);return n?Math.sqrt(n):n},_=function(t,e){var n,r,i,a=t.length,o=-1;if(null==e){for(;++o<a;)if(null!=(n=t[o])&&n>=n)for(r=i=n;++o<a;)null!=(n=t[o])&&(r>n&&(r=n),i<n&&(i=n))}else for(;++o<a;)if(null!=(n=e(t[o],o,t))&&n>=n)for(r=i=n;++o<a;)null!=(n=e(t[o],o,t))&&(r>n&&(r=n),i<n&&(i=n));return[r,i]},y=Array.prototype,v=y.slice,x=y.map,m=function(t){return function(){return t}},b=function(t){return t},w=function(t,e,n){t=+t,e=+e,n=(i=arguments.length)<2?(e=t,t=0,1):i<3?1:+n;for(var r=-1,i=0|Math.max(0,Math.ceil((e-t)/n)),a=new Array(i);++r<i;)a[r]=t+r*n;return a},S=Math.sqrt(50),A=Math.sqrt(10),T=Math.sqrt(2),P=function(t,e,n){var r,i,a,o,u=-1;if(n=+n,(t=+t)===(e=+e)&&n>0)return[t];if((r=e<t)&&(i=t,t=e,e=i),0===(o=C(t,e,n))||!isFinite(o))return[];if(o>0)for(t=Math.ceil(t/o),e=Math.floor(e/o),a=new Array(i=Math.ceil(e-t+1));++u<i;)a[u]=(t+u)*o;else for(t=Math.floor(t*o),e=Math.ceil(e*o),a=new Array(i=Math.ceil(t-e+1));++u<i;)a[u]=(t-u)/o;return r&&a.reverse(),a};function C(t,e,n){var r=(e-t)/Math.max(0,n),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=S?10:a>=A?5:a>=T?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=S?10:a>=A?5:a>=T?2:1)}function M(t,e,n){var r=Math.abs(e-t)/Math.max(0,n),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=S?i*=10:a>=A?i*=5:a>=T&&(i*=2),e<t?-i:i}var L=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},O=function(){var t=b,e=_,n=L;function r(r){var i,a,o=r.length,u=new Array(o);for(i=0;i<o;++i)u[i]=t(r[i],i,r);var s=e(u),f=s[0],l=s[1],d=n(u,f,l);Array.isArray(d)||(d=M(f,l,d),d=w(Math.ceil(f/d)*d,Math.floor(l/d)*d,d));for(var h=d.length;d[0]<=f;)d.shift(),--h;for(;d[h-1]>l;)d.pop(),--h;var g,p=new Array(h+1);for(i=0;i<=h;++i)(g=p[i]=[]).x0=i>0?d[i-1]:f,g.x1=i<h?d[i]:l;for(i=0;i<o;++i)f<=(a=u[i])&&a<=l&&p[c(d,a,0,h)].push(r[i]);return p}return r.value=function(e){return arguments.length?(t="function"==typeof e?e:m(e),r):t},r.domain=function(t){return arguments.length?(e="function"==typeof t?t:m([t[0],t[1]]),r):e},r.thresholds=function(t){return arguments.length?(n="function"==typeof t?t:Array.isArray(t)?m(v.call(t)):m(t),r):n},r},E=function(t,e,n){if(null==n&&(n=h),r=t.length){if((e=+e)<=0||r<2)return+n(t[0],0,t);if(e>=1)return+n(t[r-1],r-1,t);var r,i=(r-1)*e,a=Math.floor(i),o=+n(t[a],a,t);return o+(+n(t[a+1],a+1,t)-o)*(i-a)}},k=function(t,e,n){return t=x.call(t,h).sort(r),Math.ceil((n-e)/(2*(E(t,.75)-E(t,.25))*Math.pow(t.length,-1/3)))},G=function(t,e,n){return Math.ceil((n-e)/(3.5*p(t)*Math.pow(t.length,-1/3)))},V=function(t,e){var n,r,i=t.length,a=-1;if(null==e){for(;++a<i;)if(null!=(n=t[a])&&n>=n)for(r=n;++a<i;)null!=(n=t[a])&&n>r&&(r=n)}else for(;++a<i;)if(null!=(n=e(t[a],a,t))&&n>=n)for(r=n;++a<i;)null!=(n=e(t[a],a,t))&&n>r&&(r=n);return r},R=function(t,e){var n,r=t.length,i=r,a=-1,o=0;if(null==e)for(;++a<r;)isNaN(n=h(t[a]))?--i:o+=n;else for(;++a<r;)isNaN(n=h(e(t[a],a,t)))?--i:o+=n;if(i)return o/i},I=function(t,e){var n,i=t.length,a=-1,o=[];if(null==e)for(;++a<i;)isNaN(n=h(t[a]))||o.push(n);else for(;++a<i;)isNaN(n=h(e(t[a],a,t)))||o.push(n);return E(o.sort(r),.5)},D=function(t){for(var e,n,r,i=t.length,a=-1,o=0;++a<i;)o+=t[a].length;for(n=new Array(o);--i>=0;)for(e=(r=t[i]).length;--e>=0;)n[--o]=r[e];return n},N=function(t,e){var n,r,i=t.length,a=-1;if(null==e){for(;++a<i;)if(null!=(n=t[a])&&n>=n)for(r=n;++a<i;)null!=(n=t[a])&&r>n&&(r=n)}else for(;++a<i;)if(null!=(n=e(t[a],a,t))&&n>=n)for(r=n;++a<i;)null!=(n=e(t[a],a,t))&&r>n&&(r=n);return r},F=function(t,e){for(var n=e.length,r=new Array(n);n--;)r[n]=t[e[n]];return r},z=function(t,e){if(n=t.length){var n,i,a=0,o=0,u=t[o];for(null==e&&(e=r);++a<n;)(e(i=t[a],u)<0||0!==e(u,u))&&(u=i,o=a);return 0===e(u,u)?o:void 0}},j=function(t,e,n){for(var r,i,a=(null==n?t.length:n)-(e=null==e?0:+e);a;)i=Math.random()*a--|0,r=t[a+e],t[a+e]=t[i+e],t[i+e]=r;return t},B=function(t,e){var n,r=t.length,i=-1,a=0;if(null==e)for(;++i<r;)(n=+t[i])&&(a+=n);else for(;++i<r;)(n=+e(t[i],i,t))&&(a+=n);return a},H=function(t){if(!(i=t.length))return[];for(var e=-1,n=N(t,X),r=new Array(n);++e<n;)for(var i,a=-1,o=r[e]=new Array(i);++a<i;)o[a]=t[a][e];return r};function X(t){return t.length}var Y=function(){return H(arguments)};n.d(e,"b",function(){return c}),n.d(e,"d",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return i}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return d}),n.d(e,"h",function(){return p}),n.d(e,"i",function(){return _}),n.d(e,"j",function(){return O}),n.d(e,"w",function(){return k}),n.d(e,"x",function(){return G}),n.d(e,"y",function(){return L}),n.d(e,"k",function(){return V}),n.d(e,"l",function(){return R}),n.d(e,"m",function(){return I}),n.d(e,"n",function(){return D}),n.d(e,"o",function(){return N}),n.d(e,"p",function(){return s}),n.d(e,"q",function(){return F}),n.d(e,"r",function(){return E}),n.d(e,"s",function(){return w}),n.d(e,"t",function(){return z}),n.d(e,"u",function(){return j}),n.d(e,"v",function(){return B}),n.d(e,"B",function(){return P}),n.d(e,"z",function(){return C}),n.d(e,"A",function(){return M}),n.d(e,"C",function(){return H}),n.d(e,"D",function(){return g}),n.d(e,"E",function(){return Y})},function(t,e,n){"use strict";var r=new Date,i=new Date;function a(t,e,n,o){function u(e){return t(e=new Date(+e)),e}return u.floor=u,u.ceil=function(n){return t(n=new Date(n-1)),e(n,1),t(n),n},u.round=function(t){var e=u(t),n=u.ceil(t);return t-e<n-t?e:n},u.offset=function(t,n){return e(t=new Date(+t),null==n?1:Math.floor(n)),t},u.range=function(n,r,i){var a,o=[];if(n=u.ceil(n),i=null==i?1:Math.floor(i),!(n<r&&i>0))return o;do{o.push(a=new Date(+n)),e(n,i),t(n)}while(a<n&&n<r);return o},u.filter=function(n){return a(function(e){if(e>=e)for(;t(e),!n(e);)e.setTime(e-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;e(t,-1),!n(t););else for(;--r>=0;)for(;e(t,1),!n(t););})},n&&(u.count=function(e,a){return r.setTime(+e),i.setTime(+a),t(r),t(i),Math.floor(n(r,i))},u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?u.filter(o?function(e){return o(e)%t==0}:function(e){return u.count(0,e)%t==0}):u:null}),u}var o=a(function(){},function(t,e){t.setTime(+t+e)},function(t,e){return e-t});o.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?a(function(e){e.setTime(Math.floor(e/t)*t)},function(e,n){e.setTime(+e+n*t)},function(e,n){return(n-e)/t}):o:null};var u=o,c=o.range,s=6e4,f=6048e5,l=a(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,e){t.setTime(+t+1e3*e)},function(t,e){return(e-t)/1e3},function(t){return t.getUTCSeconds()}),d=l,h=l.range,g=a(function(t){t.setTime(Math.floor(t/s)*s)},function(t,e){t.setTime(+t+e*s)},function(t,e){return(e-t)/s},function(t){return t.getMinutes()}),p=g,_=g.range,y=a(function(t){var e=t.getTimezoneOffset()*s%36e5;e<0&&(e+=36e5),t.setTime(36e5*Math.floor((+t-e)/36e5)+e)},function(t,e){t.setTime(+t+36e5*e)},function(t,e){return(e-t)/36e5},function(t){return t.getHours()}),v=y,x=y.range,m=a(function(t){t.setHours(0,0,0,0)},function(t,e){t.setDate(t.getDate()+e)},function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*s)/864e5},function(t){return t.getDate()-1}),b=m,w=m.range;function S(t){return a(function(e){e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)},function(t,e){t.setDate(t.getDate()+7*e)},function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*s)/f})}var A=S(0),T=S(1),P=S(2),C=S(3),M=S(4),L=S(5),O=S(6),E=A.range,k=T.range,G=P.range,V=C.range,R=M.range,I=L.range,D=O.range,N=a(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,e){t.setMonth(t.getMonth()+e)},function(t,e){return e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),F=N,z=N.range,j=a(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,e){t.setFullYear(t.getFullYear()+e)},function(t,e){return e.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});j.every=function(t){return isFinite(t=Math.floor(t))&&t>0?a(function(e){e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,n){e.setFullYear(e.getFullYear()+n*t)}):null};var B=j,H=j.range,X=a(function(t){t.setUTCSeconds(0,0)},function(t,e){t.setTime(+t+e*s)},function(t,e){return(e-t)/s},function(t){return t.getUTCMinutes()}),Y=X,U=X.range,q=a(function(t){t.setUTCMinutes(0,0,0)},function(t,e){t.setTime(+t+36e5*e)},function(t,e){return(e-t)/36e5},function(t){return t.getUTCHours()}),W=q,Q=q.range,Z=a(function(t){t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCDate(t.getUTCDate()+e)},function(t,e){return(e-t)/864e5},function(t){return t.getUTCDate()-1}),K=Z,J=Z.range;function $(t){return a(function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)},function(t,e){t.setUTCDate(t.getUTCDate()+7*e)},function(t,e){return(e-t)/f})}var tt=$(0),et=$(1),nt=$(2),rt=$(3),it=$(4),at=$(5),ot=$(6),ut=tt.range,ct=et.range,st=nt.range,ft=rt.range,lt=it.range,dt=at.range,ht=ot.range,gt=a(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCMonth(t.getUTCMonth()+e)},function(t,e){return e.getUTCMonth()-t.getUTCMonth()+12*(e.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),pt=gt,_t=gt.range,yt=a(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e)},function(t,e){return e.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});yt.every=function(t){return isFinite(t=Math.floor(t))&&t>0?a(function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,n){e.setUTCFullYear(e.getUTCFullYear()+n*t)}):null};var vt=yt,xt=yt.range;n.d(e,"g",function(){return a}),n.d(e,"h",function(){return u}),n.d(e,"i",function(){return c}),n.d(e,"L",function(){return u}),n.d(e,"M",function(){return c}),n.d(e,"r",function(){return d}),n.d(e,"s",function(){return h}),n.d(e,"V",function(){return d}),n.d(e,"W",function(){return h}),n.d(e,"j",function(){return p}),n.d(e,"k",function(){return _}),n.d(e,"e",function(){return v}),n.d(e,"f",function(){return x}),n.d(e,"a",function(){return b}),n.d(e,"b",function(){return w}),n.d(e,"B",function(){return A}),n.d(e,"C",function(){return E}),n.d(e,"t",function(){return A}),n.d(e,"u",function(){return E}),n.d(e,"l",function(){return T}),n.d(e,"m",function(){return k}),n.d(e,"x",function(){return P}),n.d(e,"y",function(){return G}),n.d(e,"z",function(){return C}),n.d(e,"A",function(){return V}),n.d(e,"v",function(){return M}),n.d(e,"w",function(){return R}),n.d(e,"c",function(){return L}),n.d(e,"d",function(){return I}),n.d(e,"p",function(){return O}),n.d(e,"q",function(){return D}),n.d(e,"n",function(){return F}),n.d(e,"o",function(){return z}),n.d(e,"D",function(){return B}),n.d(e,"E",function(){return H}),n.d(e,"N",function(){return Y}),n.d(e,"O",function(){return U}),n.d(e,"J",function(){return W}),n.d(e,"K",function(){return Q}),n.d(e,"F",function(){return K}),n.d(e,"G",function(){return J}),n.d(e,"Fa",function(){return tt}),n.d(e,"Ga",function(){return ut}),n.d(e,"X",function(){return tt}),n.d(e,"Y",function(){return ut}),n.d(e,"P",function(){return et}),n.d(e,"Q",function(){return ct}),n.d(e,"Ba",function(){return nt}),n.d(e,"Ca",function(){return st}),n.d(e,"Da",function(){return rt}),n.d(e,"Ea",function(){return ft}),n.d(e,"Z",function(){return it}),n.d(e,"Aa",function(){return lt}),n.d(e,"H",function(){return at}),n.d(e,"I",function(){return dt}),n.d(e,"T",function(){return ot}),n.d(e,"U",function(){return ht}),n.d(e,"R",function(){return pt}),n.d(e,"S",function(){return _t}),n.d(e,"Ha",function(){return vt}),n.d(e,"Ia",function(){return xt})},function(t,e,n){"use strict";var r=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t};function i(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function a(){}var o="\\s*([+-]?\\d+)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",c="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3})$/,f=/^#([0-9a-f]{6})$/,l=new RegExp("^rgb\\("+[o,o,o]+"\\)$"),d=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),h=new RegExp("^rgba\\("+[o,o,o,u]+"\\)$"),g=new RegExp("^rgba\\("+[c,c,c,u]+"\\)$"),p=new RegExp("^hsl\\("+[u,c,c]+"\\)$"),_=new RegExp("^hsla\\("+[u,c,c,u]+"\\)$"),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function v(t){var e;return t=(t+"").trim().toLowerCase(),(e=s.exec(t))?new S((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=f.exec(t))?x(parseInt(e[1],16)):(e=l.exec(t))?new S(e[1],e[2],e[3],1):(e=d.exec(t))?new S(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=h.exec(t))?m(e[1],e[2],e[3],e[4]):(e=g.exec(t))?m(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=p.exec(t))?T(e[1],e[2]/100,e[3]/100,1):(e=_.exec(t))?T(e[1],e[2]/100,e[3]/100,e[4]):y.hasOwnProperty(t)?x(y[t]):"transparent"===t?new S(NaN,NaN,NaN,0):null}function x(t){return new S(t>>16&255,t>>8&255,255&t,1)}function m(t,e,n,r){return r<=0&&(t=e=n=NaN),new S(t,e,n,r)}function b(t){return t instanceof a||(t=v(t)),t?new S((t=t.rgb()).r,t.g,t.b,t.opacity):new S}function w(t,e,n,r){return 1===arguments.length?b(t):new S(t,e,n,null==r?1:r)}function S(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function A(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function T(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new C(t,e,n,r)}function P(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof C)return new C(t.h,t.s,t.l,t.opacity);if(t instanceof a||(t=v(t)),!t)return new C;if(t instanceof C)return t;var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,i=Math.min(e,n,r),o=Math.max(e,n,r),u=NaN,c=o-i,s=(o+i)/2;return c?(u=e===o?(n-r)/c+6*(n<r):n===o?(r-e)/c+2:(e-n)/c+4,c/=s<.5?o+i:2-o-i,u*=60):c=s>0&&s<1?0:u,new C(u,c,s,t.opacity)}(t):new C(t,e,n,null==r?1:r)}function C(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function M(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}r(a,v,{displayable:function(){return this.rgb().displayable()},hex:function(){return this.rgb().hex()},toString:function(){return this.rgb()+""}}),r(S,w,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new S(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new S(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},hex:function(){return"#"+A(this.r)+A(this.g)+A(this.b)},toString:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),r(C,P,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new C(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new C(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new S(M(t>=240?t-240:t+120,i,r),M(t,i,r),M(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var L=Math.PI/180,O=180/Math.PI,E=.96422,k=1,G=.82521,V=4/29,R=6/29,I=3*R*R,D=R*R*R;function N(t){if(t instanceof j)return new j(t.l,t.a,t.b,t.opacity);if(t instanceof Q){if(isNaN(t.h))return new j(t.l,0,0,t.opacity);var e=t.h*L;return new j(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t instanceof S||(t=b(t));var n,r,i=Y(t.r),a=Y(t.g),o=Y(t.b),u=B((.2225045*i+.7168786*a+.0606169*o)/k);return i===a&&a===o?n=r=u:(n=B((.4360747*i+.3850649*a+.1430804*o)/E),r=B((.0139322*i+.0971045*a+.7141733*o)/G)),new j(116*u-16,500*(n-u),200*(u-r),t.opacity)}function F(t,e){return new j(t,0,0,null==e?1:e)}function z(t,e,n,r){return 1===arguments.length?N(t):new j(t,e,n,null==r?1:r)}function j(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}function B(t){return t>D?Math.pow(t,1/3):t/I+V}function H(t){return t>R?t*t*t:I*(t-V)}function X(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Y(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function U(t){if(t instanceof Q)return new Q(t.h,t.c,t.l,t.opacity);if(t instanceof j||(t=N(t)),0===t.a&&0===t.b)return new Q(NaN,0,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*O;return new Q(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function q(t,e,n,r){return 1===arguments.length?U(t):new Q(n,e,t,null==r?1:r)}function W(t,e,n,r){return 1===arguments.length?U(t):new Q(t,e,n,null==r?1:r)}function Q(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}r(j,z,i(a,{brighter:function(t){return new j(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new j(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return new S(X(3.1338561*(e=E*H(e))-1.6168667*(t=k*H(t))-.4906146*(n=G*H(n))),X(-.9787684*e+1.9161415*t+.033454*n),X(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}})),r(Q,W,i(a,{brighter:function(t){return new Q(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Q(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return N(this).rgb()}}));var Z=-.14861,K=1.78277,J=-.29227,$=-.90649,tt=1.97294,et=tt*$,nt=tt*K,rt=K*J-$*Z;function it(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof at)return new at(t.h,t.s,t.l,t.opacity);t instanceof S||(t=b(t));var e=t.r/255,n=t.g/255,r=t.b/255,i=(rt*r+et*e-nt*n)/(rt+et-nt),a=r-i,o=(tt*(n-i)-J*a)/$,u=Math.sqrt(o*o+a*a)/(tt*i*(1-i)),c=u?Math.atan2(o,a)*O-120:NaN;return new at(c<0?c+360:c,u,i,t.opacity)}(t):new at(t,e,n,null==r?1:r)}function at(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}r(at,it,i(a,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new at(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new at(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*L,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),i=Math.sin(t);return new S(255*(e+n*(Z*r+K*i)),255*(e+n*(J*r+$*i)),255*(e+n*(tt*r)),this.opacity)}})),n.d(e,"a",function(){return v}),n.d(e,"h",function(){return w}),n.d(e,"e",function(){return P}),n.d(e,"f",function(){return z}),n.d(e,"d",function(){return W}),n.d(e,"g",function(){return q}),n.d(e,"c",function(){return F}),n.d(e,"b",function(){return it})},function(t,e,n){"use strict";var r=n(3);function i(t,e,n,r,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*e+(4-6*a+3*o)*n+(1+3*t+3*a-3*o)*r+o*i)/6}var a=function(t){var e=t.length-1;return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),a=t[r],o=t[r+1],u=r>0?t[r-1]:2*a-o,c=r<e-1?t[r+2]:2*o-a;return i((n-r/e)*e,u,a,o,c)}},o=function(t){var e=t.length;return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),a=t[(r+e-1)%e],o=t[r%e],u=t[(r+1)%e],c=t[(r+2)%e];return i((n-r/e)*e,a,o,u,c)}},u=function(t){return function(){return t}};function c(t,e){return function(n){return t+n*e}}function s(t,e){var n=e-t;return n?c(t,n>180||n<-180?n-360*Math.round(n/360):n):u(isNaN(t)?e:t)}function f(t){return 1==(t=+t)?l:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):u(isNaN(e)?n:e)}}function l(t,e){var n=e-t;return n?c(t,n):u(isNaN(t)?e:t)}var d=function t(e){var n=f(e);function i(t,e){var i=n((t=Object(r.h)(t)).r,(e=Object(r.h)(e)).r),a=n(t.g,e.g),o=n(t.b,e.b),u=l(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=a(e),t.b=o(e),t.opacity=u(e),t+""}}return i.gamma=t,i}(1);function h(t){return function(e){var n,i,a=e.length,o=new Array(a),u=new Array(a),c=new Array(a);for(n=0;n<a;++n)i=Object(r.h)(e[n]),o[n]=i.r||0,u[n]=i.g||0,c[n]=i.b||0;return o=t(o),u=t(u),c=t(c),i.opacity=1,function(t){return i.r=o(t),i.g=u(t),i.b=c(t),i+""}}}var g=h(a),p=h(o),_=function(t,e){var n,r=e?e.length:0,i=t?Math.min(r,t.length):0,a=new Array(i),o=new Array(r);for(n=0;n<i;++n)a[n]=C(t[n],e[n]);for(;n<r;++n)o[n]=e[n];return function(t){for(n=0;n<i;++n)o[n]=a[n](t);return o}},y=function(t,e){var n=new Date;return e-=t=+t,function(r){return n.setTime(t+e*r),n}},v=function(t,e){return e-=t=+t,function(n){return t+e*n}},x=function(t,e){var n,r={},i={};for(n in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)n in t?r[n]=C(t[n],e[n]):i[n]=e[n];return function(t){for(n in r)i[n]=r[n](t);return i}},m=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,b=new RegExp(m.source,"g");var w,S,A,T,P=function(t,e){var n,r,i,a=m.lastIndex=b.lastIndex=0,o=-1,u=[],c=[];for(t+="",e+="";(n=m.exec(t))&&(r=b.exec(e));)(i=r.index)>a&&(i=e.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(n=n[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,c.push({i:o,x:v(n,r)})),a=b.lastIndex;return a<e.length&&(i=e.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var n,r=0;r<e;++r)u[(n=c[r]).i]=n.x(t);return u.join("")})},C=function(t,e){var n,i=typeof e;return null==e||"boolean"===i?u(e):("number"===i?v:"string"===i?(n=Object(r.a)(e))?(e=n,d):P:e instanceof r.a?d:e instanceof Date?y:Array.isArray(e)?_:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?x:v)(t,e)},M=function(t,e){return e-=t=+t,function(n){return Math.round(t+e*n)}},L=180/Math.PI,O={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},E=function(t,e,n,r,i,a){var o,u,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*r)&&(n-=t*c,r-=e*c),(u=Math.sqrt(n*n+r*r))&&(n/=u,r/=u,c/=u),t*r<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(e,t)*L,skewX:Math.atan(c)*L,scaleX:o,scaleY:u}};function k(t,e,n,r){function i(t){return t.length?t.pop()+" ":""}return function(a,o){var u=[],c=[];return a=t(a),o=t(o),function(t,r,i,a,o,u){if(t!==i||r!==a){var c=o.push("translate(",null,e,null,n);u.push({i:c-4,x:v(t,i)},{i:c-2,x:v(r,a)})}else(i||a)&&o.push("translate("+i+e+a+n)}(a.translateX,a.translateY,o.translateX,o.translateY,u,c),function(t,e,n,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:n.push(i(n)+"rotate(",null,r)-2,x:v(t,e)})):e&&n.push(i(n)+"rotate("+e+r)}(a.rotate,o.rotate,u,c),function(t,e,n,a){t!==e?a.push({i:n.push(i(n)+"skewX(",null,r)-2,x:v(t,e)}):e&&n.push(i(n)+"skewX("+e+r)}(a.skewX,o.skewX,u,c),function(t,e,n,r,a,o){if(t!==n||e!==r){var u=a.push(i(a)+"scale(",null,",",null,")");o.push({i:u-4,x:v(t,n)},{i:u-2,x:v(e,r)})}else 1===n&&1===r||a.push(i(a)+"scale("+n+","+r+")")}(a.scaleX,a.scaleY,o.scaleX,o.scaleY,u,c),a=o=null,function(t){for(var e,n=-1,r=c.length;++n<r;)u[(e=c[n]).i]=e.x(t);return u.join("")}}}var G=k(function(t){return"none"===t?O:(w||(w=document.createElement("DIV"),S=document.documentElement,A=document.defaultView),w.style.transform=t,t=A.getComputedStyle(S.appendChild(w),null).getPropertyValue("transform"),S.removeChild(w),t=t.slice(7,-1).split(","),E(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),V=k(function(t){return null==t?O:(T||(T=document.createElementNS("http://www.w3.org/2000/svg","g")),T.setAttribute("transform",t),(t=T.transform.baseVal.consolidate())?(t=t.matrix,E(t.a,t.b,t.c,t.d,t.e,t.f)):O)},", ",")",")"),R=Math.SQRT2;function I(t){return((t=Math.exp(t))+1/t)/2}var D=function(t,e){var n,r,i=t[0],a=t[1],o=t[2],u=e[0],c=e[1],s=e[2],f=u-i,l=c-a,d=f*f+l*l;if(d<1e-12)r=Math.log(s/o)/R,n=function(t){return[i+t*f,a+t*l,o*Math.exp(R*t*r)]};else{var h=Math.sqrt(d),g=(s*s-o*o+4*d)/(2*o*2*h),p=(s*s-o*o-4*d)/(2*s*2*h),_=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(p*p+1)-p);r=(y-_)/R,n=function(t){var e,n=t*r,u=I(_),c=o/(2*h)*(u*(e=R*n+_,((e=Math.exp(2*e))-1)/(e+1))-function(t){return((t=Math.exp(t))-1/t)/2}(_));return[i+c*f,a+c*l,o*u/I(R*n+_)]}}return n.duration=1e3*r,n};function N(t){return function(e,n){var i=t((e=Object(r.e)(e)).h,(n=Object(r.e)(n)).h),a=l(e.s,n.s),o=l(e.l,n.l),u=l(e.opacity,n.opacity);return function(t){return e.h=i(t),e.s=a(t),e.l=o(t),e.opacity=u(t),e+""}}}var F=N(s),z=N(l);function j(t,e){var n=l((t=Object(r.f)(t)).l,(e=Object(r.f)(e)).l),i=l(t.a,e.a),a=l(t.b,e.b),o=l(t.opacity,e.opacity);return function(e){return t.l=n(e),t.a=i(e),t.b=a(e),t.opacity=o(e),t+""}}function B(t){return function(e,n){var i=t((e=Object(r.d)(e)).h,(n=Object(r.d)(n)).h),a=l(e.c,n.c),o=l(e.l,n.l),u=l(e.opacity,n.opacity);return function(t){return e.h=i(t),e.c=a(t),e.l=o(t),e.opacity=u(t),e+""}}}var H=B(s),X=B(l);function Y(t){return function e(n){function i(e,i){var a=t((e=Object(r.b)(e)).h,(i=Object(r.b)(i)).h),o=l(e.s,i.s),u=l(e.l,i.l),c=l(e.opacity,i.opacity);return function(t){return e.h=a(t),e.s=o(t),e.l=u(Math.pow(t,n)),e.opacity=c(t),e+""}}return n=+n,i.gamma=e,i}(1)}var U=Y(s),q=Y(l);function W(t,e){for(var n=0,r=e.length-1,i=e[0],a=new Array(r<0?0:r);n<r;)a[n]=t(i,i=e[++n]);return function(t){var e=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return a[e](t-e)}}var Q=function(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1));return n};n.d(e,"a",function(){return C}),n.d(e,"b",function(){return _}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"g",function(){return y}),n.d(e,"m",function(){return v}),n.d(e,"n",function(){return x}),n.d(e,"r",function(){return M}),n.d(e,"s",function(){return P}),n.d(e,"t",function(){return G}),n.d(e,"u",function(){return V}),n.d(e,"v",function(){return D}),n.d(e,"o",function(){return d}),n.d(e,"p",function(){return g}),n.d(e,"q",function(){return p}),n.d(e,"j",function(){return F}),n.d(e,"k",function(){return z}),n.d(e,"l",function(){return j}),n.d(e,"h",function(){return H}),n.d(e,"i",function(){return X}),n.d(e,"e",function(){return U}),n.d(e,"f",function(){return q}),n.d(e,"w",function(){return W}),n.d(e,"x",function(){return Q})},function(t,e,n){"use strict";var r=Math.PI,i=2*r,a=i-1e-6;function o(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function u(){return new o}o.prototype=u.prototype={constructor:o,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,i,a){this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+i)+","+(this._y1=+a)},arcTo:function(t,e,n,i,a){t=+t,e=+e,n=+n,i=+i,a=+a;var o=this._x1,u=this._y1,c=n-t,s=i-e,f=o-t,l=u-e,d=f*f+l*l;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(d>1e-6)if(Math.abs(l*c-s*f)>1e-6&&a){var h=n-o,g=i-u,p=c*c+s*s,_=h*h+g*g,y=Math.sqrt(p),v=Math.sqrt(d),x=a*Math.tan((r-Math.acos((p+d-_)/(2*y*v)))/2),m=x/v,b=x/y;Math.abs(m-1)>1e-6&&(this._+="L"+(t+m*f)+","+(e+m*l)),this._+="A"+a+","+a+",0,0,"+ +(l*h>f*g)+","+(this._x1=t+b*c)+","+(this._y1=e+b*s)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,n,o,u,c){t=+t,e=+e;var s=(n=+n)*Math.cos(o),f=n*Math.sin(o),l=t+s,d=e+f,h=1^c,g=c?o-u:u-o;if(n<0)throw new Error("negative radius: "+n);null===this._x1?this._+="M"+l+","+d:(Math.abs(this._x1-l)>1e-6||Math.abs(this._y1-d)>1e-6)&&(this._+="L"+l+","+d),n&&(g<0&&(g=g%i+i),g>a?this._+="A"+n+","+n+",0,1,"+h+","+(t-s)+","+(e-f)+"A"+n+","+n+",0,1,"+h+","+(this._x1=l)+","+(this._y1=d):g>1e-6&&(this._+="A"+n+","+n+",0,"+ +(g>=r)+","+h+","+(this._x1=t+n*Math.cos(u))+","+(this._y1=e+n*Math.sin(u))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}};var c=u;n.d(e,"a",function(){return c})},function(t,e,n){"use strict";var r={value:function(){}};function i(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new a(r)}function a(t){this._=t}function o(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}function u(t,e,n){for(var i=0,a=t.length;i<a;++i)if(t[i].name===e){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}a.prototype=i.prototype={constructor:a,on:function(t,e){var n,r,i=this._,a=(r=i,(t+"").trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!r.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})),c=-1,s=a.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++c<s;)if(n=(t=a[c]).type)i[n]=u(i[n],t.name,e);else if(null==e)for(n in i)i[n]=u(i[n],t.name,null);return this}for(;++c<s;)if((n=(t=a[c]).type)&&(n=o(i[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new a(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),a=0;a<n;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,n=(r=this._[t]).length;a<n;++a)r[a].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(e,n)}};var c=i;n.d(e,"a",function(){return c})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.each=function(t,e,n){var r;if(!t)return 0;if(n=n||t,t instanceof Array){for(r=0;r<t.length;r++)if(!1===e.call(n,t[r],r,t))return 0}else for(r in t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))return 0;return 1}},function(t,e,n){"use strict";var r,i,a=0,o=0,u=0,c=1e3,s=0,f=0,l=0,d="object"==typeof performance&&performance.now?performance:Date,h="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function g(){return f||(h(p),f=d.now()+l)}function p(){f=0}function _(){this._call=this._time=this._next=null}function y(t,e,n){var r=new _;return r.restart(t,e,n),r}function v(){g(),++a;for(var t,e=r;e;)(t=f-e._time)>=0&&e._call.call(null,t),e=e._next;--a}function x(){f=(s=d.now())+l,a=o=0;try{v()}finally{a=0,function(){var t,e,n=r,a=1/0;for(;n;)n._call?(a>n._time&&(a=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:r=e);i=t,b(a)}(),f=0}}function m(){var t=d.now(),e=t-s;e>c&&(l-=e,s=t)}function b(t){a||(o&&(o=clearTimeout(o)),t-f>24?(t<1/0&&(o=setTimeout(x,t-d.now()-l)),u&&(u=clearInterval(u))):(u||(s=d.now(),u=setInterval(m,c)),a=1,h(x)))}_.prototype=y.prototype={constructor:_,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?g():+n)+(null==e?0:+e),this._next||i===this||(i?i._next=this:r=this,i=this),this._call=t,this._time=n,b()},stop:function(){this._call&&(this._call=null,this._time=1/0,b())}};var w=function(t,e,n){var r=new _;return e=null==e?0:+e,r.restart(function(n){r.stop(),t(n+e)},e,n),r},S=function(t,e,n){var r=new _,i=e;return null==e?(r.restart(t,e,n),r):(e=+e,n=null==n?g():+n,r.restart(function a(o){o+=i,r.restart(a,i+=e,n),t(o)},e,n),r)};n.d(e,"b",function(){return g}),n.d(e,"d",function(){return y}),n.d(e,"e",function(){return v}),n.d(e,"c",function(){return w}),n.d(e,"a",function(){return S})},function(t,e,n){"use strict";var r=function(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]},i=function(t){return(t=r(Math.abs(t)))?t[1]:NaN},a=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function o(t){return new u(t)}function u(t){if(!(e=a.exec(t)))throw new Error("invalid format: "+t);var e;this.fill=e[1]||" ",this.align=e[2]||">",this.sign=e[3]||"-",this.symbol=e[4]||"",this.zero=!!e[5],this.width=e[6]&&+e[6],this.comma=!!e[7],this.precision=e[8]&&+e[8].slice(1),this.trim=!!e[9],this.type=e[10]||""}o.prototype=u.prototype,u.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var c,s,f,l,d=function(t){t:for(var e,n=t.length,r=1,i=-1;r<n;++r)switch(t[r]){case".":i=e=r;break;case"0":0===i&&(i=r),e=r;break;default:if(i>0){if(!+t[r])break t;i=0}}return i>0?t.slice(0,i)+t.slice(e+1):t},h=function(t,e){var n=r(t,e);if(!n)return t+"";var i=n[0],a=n[1];return a<0?"0."+new Array(-a).join("0")+i:i.length>a+1?i.slice(0,a+1)+"."+i.slice(a+1):i+new Array(a-i.length+2).join("0")},g={"%":function(t,e){return(100*t).toFixed(e)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},o:function(t){return Math.round(t).toString(8)},p:function(t,e){return h(100*t,e)},r:h,s:function(t,e){var n=r(t,e);if(!n)return t+"";var i=n[0],a=n[1],o=a-(c=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,u=i.length;return o===u?i:o>u?i+new Array(o-u+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+r(t,Math.max(0,e+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},p=function(t){return t},_=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],y=function(t){var e,n,r=t.grouping&&t.thousands?(e=t.grouping,n=t.thousands,function(t,r){for(var i=t.length,a=[],o=0,u=e[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),a.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=e[o=(o+1)%e.length];return a.reverse().join(n)}):p,a=t.currency,u=t.decimal,s=t.numerals?function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(t.numerals):p,f=t.percent||"%";function l(t){var e=(t=o(t)).fill,n=t.align,i=t.sign,l=t.symbol,h=t.zero,p=t.width,y=t.comma,v=t.precision,x=t.trim,m=t.type;"n"===m?(y=!0,m="g"):g[m]||(null==v&&(v=12),x=!0,m="g"),(h||"0"===e&&"="===n)&&(h=!0,e="0",n="=");var b="$"===l?a[0]:"#"===l&&/[boxX]/.test(m)?"0"+m.toLowerCase():"",w="$"===l?a[1]:/[%p]/.test(m)?f:"",S=g[m],A=/[defgprs%]/.test(m);function T(t){var a,o,f,l=b,g=w;if("c"===m)g=S(t)+g,t="";else{var T=(t=+t)<0;if(t=S(Math.abs(t),v),x&&(t=d(t)),T&&0==+t&&(T=!1),l=(T?"("===i?i:"-":"-"===i||"("===i?"":i)+l,g=("s"===m?_[8+c/3]:"")+g+(T&&"("===i?")":""),A)for(a=-1,o=t.length;++a<o;)if(48>(f=t.charCodeAt(a))||f>57){g=(46===f?u+t.slice(a+1):t.slice(a))+g,t=t.slice(0,a);break}}y&&!h&&(t=r(t,1/0));var P=l.length+t.length+g.length,C=P<p?new Array(p-P+1).join(e):"";switch(y&&h&&(t=r(C+t,C.length?p-g.length:1/0),C=""),n){case"<":t=l+t+g+C;break;case"=":t=l+C+t+g;break;case"^":t=C.slice(0,P=C.length>>1)+l+t+g+C.slice(P);break;default:t=C+l+t+g}return s(t)}return v=null==v?6:/[gprs]/.test(m)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v)),T.toString=function(){return t+""},T}return{format:l,formatPrefix:function(t,e){var n=l(((t=o(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(i(e)/3))),a=Math.pow(10,-r),u=_[8+r/3];return function(t){return n(a*t)+u}}}};function v(t){return s=y(t),f=s.format,l=s.formatPrefix,s}v({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var x=function(t){return Math.max(0,-i(Math.abs(t)))},m=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(i(e)/3)))-i(Math.abs(t)))},b=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,i(e)-i(t))+1};n.d(e,"b",function(){return v}),n.d(e,"a",function(){return f}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return y}),n.d(e,"e",function(){return o}),n.d(e,"f",function(){return x}),n.d(e,"g",function(){return m}),n.d(e,"h",function(){return b})},function(t,e,n){"use strict";function r(){}function i(t,e){var n=new r;if(t instanceof r)t.each(function(t,e){n.set(e,t)});else if(Array.isArray(t)){var i,a=-1,o=t.length;if(null==e)for(;++a<o;)n.set(a,t[a]);else for(;++a<o;)n.set(e(i=t[a],a,t),i)}else if(t)for(var u in t)n.set(u,t[u]);return n}r.prototype=i.prototype={constructor:r,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,e){return this["$"+t]=e,this},remove:function(t){var e="$"+t;return e in this&&delete this[e]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var e in this)"$"===e[0]&&t.push(e.slice(1));return t},values:function(){var t=[];for(var e in this)"$"===e[0]&&t.push(this[e]);return t},entries:function(){var t=[];for(var e in this)"$"===e[0]&&t.push({key:e.slice(1),value:this[e]});return t},size:function(){var t=0;for(var e in this)"$"===e[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var e in this)"$"===e[0]&&t(this[e],e.slice(1),this)}};var a=i,o=function(){var t,e,n,r=[],i=[];function o(n,i,u,c){if(i>=r.length)return null!=t&&n.sort(t),null!=e?e(n):n;for(var s,f,l,d=-1,h=n.length,g=r[i++],p=a(),_=u();++d<h;)(l=p.get(s=g(f=n[d])+""))?l.push(f):p.set(s,[f]);return p.each(function(t,e){c(_,e,o(t,i,u,c))}),_}return n={object:function(t){return o(t,0,u,c)},map:function(t){return o(t,0,s,f)},entries:function(t){return function t(n,a){if(++a>r.length)return n;var o,u=i[a-1];return null!=e&&a>=r.length?o=n.entries():(o=[],n.each(function(e,n){o.push({key:n,values:t(e,a)})})),null!=u?o.sort(function(t,e){return u(t.key,e.key)}):o}(o(t,0,s,f),0)},key:function(t){return r.push(t),n},sortKeys:function(t){return i[r.length-1]=t,n},sortValues:function(e){return t=e,n},rollup:function(t){return e=t,n}}};function u(){return{}}function c(t,e,n){t[e]=n}function s(){return a()}function f(t,e,n){t.set(e,n)}function l(){}var d=a.prototype;function h(t,e){var n=new l;if(t instanceof l)t.each(function(t){n.add(t)});else if(t){var r=-1,i=t.length;if(null==e)for(;++r<i;)n.add(t[r]);else for(;++r<i;)n.add(e(t[r],r,t))}return n}l.prototype=h.prototype={constructor:l,has:d.has,add:function(t){return this["$"+(t+="")]=t,this},remove:d.remove,clear:d.clear,values:d.keys,size:d.size,empty:d.empty,each:d.each};var g=h,p=function(t){var e=[];for(var n in t)e.push(n);return e},_=function(t){var e=[];for(var n in t)e.push(t[n]);return e},y=function(t){var e=[];for(var n in t)e.push({key:n,value:t[n]});return e};n.d(e,"d",function(){return o}),n.d(e,"e",function(){return g}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return p}),n.d(e,"f",function(){return _}),n.d(e,"a",function(){return y})},function(t,e,n){"use strict";var r=n(0),i=n(6),a=n(8),o=Object(i.a)("start","end","interrupt"),u=[],c=0,s=1,f=2,l=3,d=4,h=5,g=6,p=function(t,e,n,r,i,p){var _=t.__transition;if(_){if(n in _)return}else t.__transition={};!function(t,e,n){var r,i=t.__transition;function o(h){var p,_,y,v;if(n.state!==s)return c();for(p in i)if((v=i[p]).name===n.name){if(v.state===l)return Object(a.c)(o);v.state===d?(v.state=g,v.timer.stop(),v.on.call("interrupt",t,t.__data__,v.index,v.group),delete i[p]):+p<e&&(v.state=g,v.timer.stop(),delete i[p])}if(Object(a.c)(function(){n.state===l&&(n.state=d,n.timer.restart(u,n.delay,n.time),u(h))}),n.state=f,n.on.call("start",t,t.__data__,n.index,n.group),n.state===f){for(n.state=l,r=new Array(y=n.tween.length),p=0,_=-1;p<y;++p)(v=n.tween[p].value.call(t,t.__data__,n.index,n.group))&&(r[++_]=v);r.length=_+1}}function u(e){for(var i=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(c),n.state=h,1),a=-1,o=r.length;++a<o;)r[a].call(null,i);n.state===h&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){for(var r in n.state=g,n.timer.stop(),delete i[e],i)return;delete t.__transition}i[e]=n,n.timer=Object(a.d)(function(t){n.state=s,n.timer.restart(o,n.delay,n.time),n.delay<=t&&o(t-n.delay)},0,n.time)}(t,n,{name:e,index:r,group:i,on:o,tween:u,time:p.time,delay:p.delay,duration:p.duration,ease:p.ease,timer:null,state:c})};function _(t,e){var n=v(t,e);if(n.state>c)throw new Error("too late; already scheduled");return n}function y(t,e){var n=v(t,e);if(n.state>f)throw new Error("too late; already started");return n}function v(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}var x=function(t,e){var n,r,i,a=t.__transition,o=!0;if(a){for(i in e=null==e?null:e+"",a)(n=a[i]).name===e?(r=n.state>f&&n.state<h,n.state=g,n.timer.stop(),r&&n.on.call("interrupt",t,t.__data__,n.index,n.group),delete a[i]):o=!1;o&&delete t.__transition}},m=n(4);function b(t,e,n){var r=t._id;return t.each(function(){var t=y(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)}),function(t){return v(t,r).value[e]}}var w=n(3),S=function(t,e){var n;return("number"==typeof e?m.m:e instanceof w.a?m.o:(n=Object(w.a)(e))?(e=n,m.o):m.s)(t,e)};var A=r.m.prototype.constructor;var T=0;function P(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function C(t){return Object(r.m)().transition(t)}function M(){return++T}var L=r.m.prototype;P.prototype=C.prototype={constructor:P,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Object(r.n)(t));for(var i=this._groups,a=i.length,o=new Array(a),u=0;u<a;++u)for(var c,s,f=i[u],l=f.length,d=o[u]=new Array(l),h=0;h<l;++h)(c=f[h])&&(s=t.call(c,c.__data__,h,f))&&("__data__"in c&&(s.__data__=c.__data__),d[h]=s,p(d[h],e,n,h,d,v(c,n)));return new P(o,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Object(r.o)(t));for(var i=this._groups,a=i.length,o=[],u=[],c=0;c<a;++c)for(var s,f=i[c],l=f.length,d=0;d<l;++d)if(s=f[d]){for(var h,g=t.call(s,s.__data__,d,f),_=v(s,n),y=0,x=g.length;y<x;++y)(h=g[y])&&p(h,e,n,y,g,_);o.push(g),u.push(s)}return new P(o,u,e,n)},filter:function(t){"function"!=typeof t&&(t=Object(r.g)(t));for(var e=this._groups,n=e.length,i=new Array(n),a=0;a<n;++a)for(var o,u=e[a],c=u.length,s=i[a]=[],f=0;f<c;++f)(o=u[f])&&t.call(o,o.__data__,f,u)&&s.push(o);return new P(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,r=e.length,i=n.length,a=Math.min(r,i),o=new Array(r),u=0;u<a;++u)for(var c,s=e[u],f=n[u],l=s.length,d=o[u]=new Array(l),h=0;h<l;++h)(c=s[h]||f[h])&&(d[h]=c);for(;u<r;++u)o[u]=e[u];return new P(o,this._parents,this._name,this._id)},selection:function(){return new A(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=M(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o,u=r[a],c=u.length,s=0;s<c;++s)if(o=u[s]){var f=v(o,e);p(o,t,n,s,u,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new P(r,this._parents,t,n)},call:L.call,nodes:L.nodes,node:L.node,size:L.size,empty:L.empty,each:L.each,on:function(t,e){var n=this._id;return arguments.length<2?v(this.node(),n).on.on(t):this.each(function(t,e,n){var r,i,a=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?_:y;return function(){var o=a(this,t),u=o.on;u!==r&&(i=(r=u).copy()).on(e,n),o.on=i}}(n,t,e))},attr:function(t,e){var n=Object(r.i)(t),i="transform"===n?m.u:S;return this.attrTween(t,"function"==typeof e?(n.local?function(t,e,n){var r,i,a;return function(){var o,u=n(this);if(null!=u)return(o=this.getAttributeNS(t.space,t.local))===u?null:o===r&&u===i?a:a=e(r=o,i=u);this.removeAttributeNS(t.space,t.local)}}:function(t,e,n){var r,i,a;return function(){var o,u=n(this);if(null!=u)return(o=this.getAttribute(t))===u?null:o===r&&u===i?a:a=e(r=o,i=u);this.removeAttribute(t)}})(n,i,b(this,"attr."+t,e)):null==e?(n.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(n):(n.local?function(t,e,n){var r,i;return function(){var a=this.getAttributeNS(t.space,t.local);return a===n?null:a===r?i:i=e(r=a,n)}}:function(t,e,n){var r,i;return function(){var a=this.getAttribute(t);return a===n?null:a===r?i:i=e(r=a,n)}})(n,i,e+""))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var i=Object(r.i)(t);return this.tween(n,(i.local?function(t,e){function n(){var n=this,r=e.apply(n,arguments);return r&&function(e){n.setAttributeNS(t.space,t.local,r(e))}}return n._value=e,n}:function(t,e){function n(){var n=this,r=e.apply(n,arguments);return r&&function(e){n.setAttribute(t,r(e))}}return n._value=e,n})(i,e))},style:function(t,e,n){var i="transform"==(t+="")?m.t:S;return null==e?this.styleTween(t,function(t,e){var n,i,a;return function(){var o=Object(r.p)(this,t),u=(this.style.removeProperty(t),Object(r.p)(this,t));return o===u?null:o===n&&u===i?a:a=e(n=o,i=u)}}(t,i)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof e?function(t,e,n){var i,a,o;return function(){var u=Object(r.p)(this,t),c=n(this);return null==c&&(this.style.removeProperty(t),c=Object(r.p)(this,t)),u===c?null:u===i&&c===a?o:o=e(i=u,a=c)}}(t,i,b(this,"style."+t,e)):function(t,e,n){var i,a;return function(){var o=Object(r.p)(this,t);return o===n?null:o===i?a:a=e(i=o,n)}}(t,i,e+""),n)},styleTween:function(t,e,n){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;return this.tween(r,function(t,e,n){function r(){var r=this,i=e.apply(r,arguments);return i&&function(e){r.style.setProperty(t,i(e),n)}}return r._value=e,r}(t,e,null==n?"":n))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(b(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",(t=this._id,function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}));var t},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var r,i=v(this.node(),n).tween,a=0,o=i.length;a<o;++a)if((r=i[a]).name===t)return r.value;return null}return this.each((null==e?function(t,e){var n,r;return function(){var i=y(this,t),a=i.tween;if(a!==n)for(var o=0,u=(r=n=a).length;o<u;++o)if(r[o].name===e){(r=r.slice()).splice(o,1);break}i.tween=r}}:function(t,e,n){var r,i;if("function"!=typeof n)throw new Error;return function(){var a=y(this,t),o=a.tween;if(o!==r){i=(r=o).slice();for(var u={name:e,value:n},c=0,s=i.length;c<s;++c)if(i[c].name===e){i[c]=u;break}c===s&&i.push(u)}a.tween=i}})(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?function(t,e){return function(){_(this,t).delay=+e.apply(this,arguments)}}:function(t,e){return e=+e,function(){_(this,t).delay=e}})(e,t)):v(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?function(t,e){return function(){y(this,t).duration=+e.apply(this,arguments)}}:function(t,e){return e=+e,function(){y(this,t).duration=e}})(e,t)):v(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){y(this,t).ease=e}}(e,t)):v(this.node(),e).ease}};var O={time:null,delay:0,duration:250,ease:n(16).o};function E(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))return O.time=Object(a.b)(),O;return n}r.m.prototype.interrupt=function(t){return this.each(function(){x(this,t)})},r.m.prototype.transition=function(t){var e,n;t instanceof P?(e=t._id,t=t._name):(e=M(),(n=O).time=Object(a.b)(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,c=r[o],s=c.length,f=0;f<s;++f)(u=c[f])&&p(u,t,e,f,c,n||E(u,e));return new P(r,this._parents,t,e)};var k=[null],G=function(t,e){var n,r,i=t.__transition;if(i)for(r in e=null==e?null:e+"",i)if((n=i[r]).state>s&&n.name===e)return new P([[t]],k,e,+r);return null};n.d(e,"c",function(){return C}),n.d(e,"a",function(){return G}),n.d(e,"b",function(){return x})},function(t,e,n){"use strict";var r=n(6),i=n(0);function a(){i.e.stopImmediatePropagation()}var o=function(){i.e.preventDefault(),i.e.stopImmediatePropagation()},u=function(t){var e=t.document.documentElement,n=Object(i.k)(t).on("dragstart.drag",o,!0);"onselectstart"in e?n.on("selectstart.drag",o,!0):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")};function c(t,e){var n=t.document.documentElement,r=Object(i.k)(t).on("dragstart.drag",null);e&&(r.on("click.drag",o,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}var s=function(t){return function(){return t}};function f(t,e,n,r,i,a,o,u,c,s){this.target=t,this.type=e,this.subject=n,this.identifier=r,this.active=i,this.x=a,this.y=o,this.dx=u,this.dy=c,this._=s}function l(){return!i.e.button}function d(){return this.parentNode}function h(t){return null==t?{x:i.e.x,y:i.e.y}:t}function g(){return"ontouchstart"in this}f.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var p=function(){var t,e,n,p,_=l,y=d,v=h,x=g,m={},b=Object(r.a)("start","drag","end"),w=0,S=0;function A(t){t.on("mousedown.drag",T).filter(x).on("touchstart.drag",M).on("touchmove.drag",L).on("touchend.drag touchcancel.drag",O).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function T(){if(!p&&_.apply(this,arguments)){var r=E("mouse",y.apply(this,arguments),i.h,this,arguments);r&&(Object(i.k)(i.e.view).on("mousemove.drag",P,!0).on("mouseup.drag",C,!0),u(i.e.view),a(),n=!1,t=i.e.clientX,e=i.e.clientY,r("start"))}}function P(){if(o(),!n){var r=i.e.clientX-t,a=i.e.clientY-e;n=r*r+a*a>S}m.mouse("drag")}function C(){Object(i.k)(i.e.view).on("mousemove.drag mouseup.drag",null),c(i.e.view,n),o(),m.mouse("end")}function M(){if(_.apply(this,arguments)){var t,e,n=i.e.changedTouches,r=y.apply(this,arguments),o=n.length;for(t=0;t<o;++t)(e=E(n[t].identifier,r,i.q,this,arguments))&&(a(),e("start"))}}function L(){var t,e,n=i.e.changedTouches,r=n.length;for(t=0;t<r;++t)(e=m[n[t].identifier])&&(o(),e("drag"))}function O(){var t,e,n=i.e.changedTouches,r=n.length;for(p&&clearTimeout(p),p=setTimeout(function(){p=null},500),t=0;t<r;++t)(e=m[n[t].identifier])&&(a(),e("end"))}function E(t,e,n,r,a){var o,u,c,s=n(e,t),l=b.copy();if(Object(i.d)(new f(A,"beforestart",o,t,w,s[0],s[1],0,0,l),function(){return null!=(i.e.subject=o=v.apply(r,a))&&(u=o.x-s[0]||0,c=o.y-s[1]||0,!0)}))return function d(h){var g,p=s;switch(h){case"start":m[t]=d,g=w++;break;case"end":delete m[t],--w;case"drag":s=n(e,t),g=w}Object(i.d)(new f(A,h,o,t,g,s[0]+u,s[1]+c,s[0]-p[0],s[1]-p[1],l),l.apply,l,[h,r,a])}}return A.filter=function(t){return arguments.length?(_="function"==typeof t?t:s(!!t),A):_},A.container=function(t){return arguments.length?(y="function"==typeof t?t:s(t),A):y},A.subject=function(t){return arguments.length?(v="function"==typeof t?t:s(t),A):v},A.touchable=function(t){return arguments.length?(x="function"==typeof t?t:s(!!t),A):x},A.on=function(){var t=b.on.apply(b,arguments);return t===b?A:t},A.clickDistance=function(t){return arguments.length?(S=(t=+t)*t,A):Math.sqrt(S)},A};n.d(e,"a",function(){return p}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c})},function(t,e,n){"use strict";var r=n(2);function i(t){if(0<=t.y&&t.y<100){var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function a(t){if(0<=t.y&&t.y<100){var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return e.setUTCFullYear(t.y),e}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function o(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function u(t){var e=t.dateTime,n=t.date,u=t.time,c=t.periods,s=t.days,f=t.shortDays,l=t.months,d=t.shortMonths,g=x(c),p=m(c),_=x(s),y=m(s),v=x(f),St=m(f),At=x(l),Tt=m(l),Pt=x(d),Ct=m(d),Mt={a:function(t){return f[t.getDay()]},A:function(t){return s[t.getDay()]},b:function(t){return d[t.getMonth()]},B:function(t){return l[t.getMonth()]},c:null,d:z,e:z,f:Y,H:j,I:B,j:H,L:X,m:U,M:q,p:function(t){return c[+(t.getHours()>=12)]},Q:bt,s:wt,S:W,u:Q,U:Z,V:K,w:J,W:$,x:null,X:null,y:tt,Y:et,Z:nt,"%":mt},Lt={a:function(t){return f[t.getUTCDay()]},A:function(t){return s[t.getUTCDay()]},b:function(t){return d[t.getUTCMonth()]},B:function(t){return l[t.getUTCMonth()]},c:null,d:rt,e:rt,f:ct,H:it,I:at,j:ot,L:ut,m:st,M:ft,p:function(t){return c[+(t.getUTCHours()>=12)]},Q:bt,s:wt,S:lt,u:dt,U:ht,V:gt,w:pt,W:_t,x:null,X:null,y:yt,Y:vt,Z:xt,"%":mt},Ot={a:function(t,e,n){var r=v.exec(e.slice(n));return r?(t.w=St[r[0].toLowerCase()],n+r[0].length):-1},A:function(t,e,n){var r=_.exec(e.slice(n));return r?(t.w=y[r[0].toLowerCase()],n+r[0].length):-1},b:function(t,e,n){var r=Pt.exec(e.slice(n));return r?(t.m=Ct[r[0].toLowerCase()],n+r[0].length):-1},B:function(t,e,n){var r=At.exec(e.slice(n));return r?(t.m=Tt[r[0].toLowerCase()],n+r[0].length):-1},c:function(t,n,r){return Gt(t,e,n,r)},d:O,e:O,f:I,H:k,I:k,j:E,L:R,m:L,M:G,p:function(t,e,n){var r=g.exec(e.slice(n));return r?(t.p=p[r[0].toLowerCase()],n+r[0].length):-1},Q:N,s:F,S:V,u:w,U:S,V:A,w:b,W:T,x:function(t,e,r){return Gt(t,n,e,r)},X:function(t,e,n){return Gt(t,u,e,n)},y:C,Y:P,Z:M,"%":D};function Et(t,e){return function(n){var r,i,a,o=[],u=-1,c=0,s=t.length;for(n instanceof Date||(n=new Date(+n));++u<s;)37===t.charCodeAt(u)&&(o.push(t.slice(c,u)),null!=(i=h[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(a=e[r])&&(r=a(n,i)),o.push(r),c=u+1);return o.push(t.slice(c,u)),o.join("")}}function kt(t,e){return function(n){var i,u,c=o(1900);if(Gt(c,t,n+="",0)!=n.length)return null;if("Q"in c)return new Date(c.Q);if("p"in c&&(c.H=c.H%12+12*c.p),"V"in c){if(c.V<1||c.V>53)return null;"w"in c||(c.w=1),"Z"in c?(i=(u=(i=a(o(c.y))).getUTCDay())>4||0===u?r.P.ceil(i):Object(r.P)(i),i=r.F.offset(i,7*(c.V-1)),c.y=i.getUTCFullYear(),c.m=i.getUTCMonth(),c.d=i.getUTCDate()+(c.w+6)%7):(i=(u=(i=e(o(c.y))).getDay())>4||0===u?r.l.ceil(i):Object(r.l)(i),i=r.a.offset(i,7*(c.V-1)),c.y=i.getFullYear(),c.m=i.getMonth(),c.d=i.getDate()+(c.w+6)%7)}else("W"in c||"U"in c)&&("w"in c||(c.w="u"in c?c.u%7:"W"in c?1:0),u="Z"in c?a(o(c.y)).getUTCDay():e(o(c.y)).getDay(),c.m=0,c.d="W"in c?(c.w+6)%7+7*c.W-(u+5)%7:c.w+7*c.U-(u+6)%7);return"Z"in c?(c.H+=c.Z/100|0,c.M+=c.Z%100,a(c)):e(c)}}function Gt(t,e,n,r){for(var i,a,o=0,u=e.length,c=n.length;o<u;){if(r>=c)return-1;if(37===(i=e.charCodeAt(o++))){if(i=e.charAt(o++),!(a=Ot[i in h?e.charAt(o++):i])||(r=a(t,n,r))<0)return-1}else if(i!=n.charCodeAt(r++))return-1}return r}return Mt.x=Et(n,Mt),Mt.X=Et(u,Mt),Mt.c=Et(e,Mt),Lt.x=Et(n,Lt),Lt.X=Et(u,Lt),Lt.c=Et(e,Lt),{format:function(t){var e=Et(t+="",Mt);return e.toString=function(){return t},e},parse:function(t){var e=kt(t+="",i);return e.toString=function(){return t},e},utcFormat:function(t){var e=Et(t+="",Lt);return e.toString=function(){return t},e},utcParse:function(t){var e=kt(t,a);return e.toString=function(){return t},e}}}var c,s,f,l,d,h={"-":"",_:" ",0:"0"},g=/^\s*\d+/,p=/^%/,_=/[\\^$*+?|[\]().{}]/g;function y(t,e,n){var r=t<0?"-":"",i=(r?-t:t)+"",a=i.length;return r+(a<n?new Array(n-a+1).join(e)+i:i)}function v(t){return t.replace(_,"\\$&")}function x(t){return new RegExp("^(?:"+t.map(v).join("|")+")","i")}function m(t){for(var e={},n=-1,r=t.length;++n<r;)e[t[n].toLowerCase()]=n;return e}function b(t,e,n){var r=g.exec(e.slice(n,n+1));return r?(t.w=+r[0],n+r[0].length):-1}function w(t,e,n){var r=g.exec(e.slice(n,n+1));return r?(t.u=+r[0],n+r[0].length):-1}function S(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.U=+r[0],n+r[0].length):-1}function A(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.V=+r[0],n+r[0].length):-1}function T(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.W=+r[0],n+r[0].length):-1}function P(t,e,n){var r=g.exec(e.slice(n,n+4));return r?(t.y=+r[0],n+r[0].length):-1}function C(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function M(t,e,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function L(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.m=r[0]-1,n+r[0].length):-1}function O(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.d=+r[0],n+r[0].length):-1}function E(t,e,n){var r=g.exec(e.slice(n,n+3));return r?(t.m=0,t.d=+r[0],n+r[0].length):-1}function k(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.H=+r[0],n+r[0].length):-1}function G(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.M=+r[0],n+r[0].length):-1}function V(t,e,n){var r=g.exec(e.slice(n,n+2));return r?(t.S=+r[0],n+r[0].length):-1}function R(t,e,n){var r=g.exec(e.slice(n,n+3));return r?(t.L=+r[0],n+r[0].length):-1}function I(t,e,n){var r=g.exec(e.slice(n,n+6));return r?(t.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function D(t,e,n){var r=p.exec(e.slice(n,n+1));return r?n+r[0].length:-1}function N(t,e,n){var r=g.exec(e.slice(n));return r?(t.Q=+r[0],n+r[0].length):-1}function F(t,e,n){var r=g.exec(e.slice(n));return r?(t.Q=1e3*+r[0],n+r[0].length):-1}function z(t,e){return y(t.getDate(),e,2)}function j(t,e){return y(t.getHours(),e,2)}function B(t,e){return y(t.getHours()%12||12,e,2)}function H(t,e){return y(1+r.a.count(Object(r.D)(t),t),e,3)}function X(t,e){return y(t.getMilliseconds(),e,3)}function Y(t,e){return X(t,e)+"000"}function U(t,e){return y(t.getMonth()+1,e,2)}function q(t,e){return y(t.getMinutes(),e,2)}function W(t,e){return y(t.getSeconds(),e,2)}function Q(t){var e=t.getDay();return 0===e?7:e}function Z(t,e){return y(r.t.count(Object(r.D)(t),t),e,2)}function K(t,e){var n=t.getDay();return t=n>=4||0===n?Object(r.v)(t):r.v.ceil(t),y(r.v.count(Object(r.D)(t),t)+(4===Object(r.D)(t).getDay()),e,2)}function J(t){return t.getDay()}function $(t,e){return y(r.l.count(Object(r.D)(t),t),e,2)}function tt(t,e){return y(t.getFullYear()%100,e,2)}function et(t,e){return y(t.getFullYear()%1e4,e,4)}function nt(t){var e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+y(e/60|0,"0",2)+y(e%60,"0",2)}function rt(t,e){return y(t.getUTCDate(),e,2)}function it(t,e){return y(t.getUTCHours(),e,2)}function at(t,e){return y(t.getUTCHours()%12||12,e,2)}function ot(t,e){return y(1+r.F.count(Object(r.Ha)(t),t),e,3)}function ut(t,e){return y(t.getUTCMilliseconds(),e,3)}function ct(t,e){return ut(t,e)+"000"}function st(t,e){return y(t.getUTCMonth()+1,e,2)}function ft(t,e){return y(t.getUTCMinutes(),e,2)}function lt(t,e){return y(t.getUTCSeconds(),e,2)}function dt(t){var e=t.getUTCDay();return 0===e?7:e}function ht(t,e){return y(r.X.count(Object(r.Ha)(t),t),e,2)}function gt(t,e){var n=t.getUTCDay();return t=n>=4||0===n?Object(r.Z)(t):r.Z.ceil(t),y(r.Z.count(Object(r.Ha)(t),t)+(4===Object(r.Ha)(t).getUTCDay()),e,2)}function pt(t){return t.getUTCDay()}function _t(t,e){return y(r.P.count(Object(r.Ha)(t),t),e,2)}function yt(t,e){return y(t.getUTCFullYear()%100,e,2)}function vt(t,e){return y(t.getUTCFullYear()%1e4,e,4)}function xt(){return"+0000"}function mt(){return"%"}function bt(t){return+t}function wt(t){return Math.floor(+t/1e3)}function St(t){return c=u(t),s=c.format,f=c.parse,l=c.utcFormat,d=c.utcParse,c}St({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var At=Date.prototype.toISOString?function(t){return t.toISOString()}:l("%Y-%m-%dT%H:%M:%S.%LZ");var Tt=+new Date("2000-01-01T00:00:00.000Z")?function(t){var e=new Date(t);return isNaN(e)?null:e}:d("%Y-%m-%dT%H:%M:%S.%LZ");n.d(e,"d",function(){return St}),n.d(e,"c",function(){return s}),n.d(e,"f",function(){return f}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return d}),n.d(e,"e",function(){return u}),n.d(e,"a",function(){return At}),n.d(e,"b",function(){return Tt})},function(t,e,n){"use strict";function r(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,a,o,u,c,s,f,l,d,h=t._root,g={data:r},p=t._x0,_=t._y0,y=t._x1,v=t._y1;if(!h)return t._root=g,t;for(;h.length;)if((s=e>=(a=(p+y)/2))?p=a:y=a,(f=n>=(o=(_+v)/2))?_=o:v=o,i=h,!(h=h[l=f<<1|s]))return i[l]=g,t;if(u=+t._x.call(null,h.data),c=+t._y.call(null,h.data),e===u&&n===c)return g.next=h,i?i[l]=g:t._root=g,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(s=e>=(a=(p+y)/2))?p=a:y=a,(f=n>=(o=(_+v)/2))?_=o:v=o}while((l=f<<1|s)==(d=(c>=o)<<1|u>=a));return i[d]=h,i[l]=g,t}var i=function(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i};function a(t){return t[0]}function o(t){return t[1]}function u(t,e,n){var r=new c(null==e?a:e,null==n?o:n,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function c(t,e,n,r,i,a){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function s(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var f=u.prototype=c.prototype;f.copy=function(){var t,e,n=new c(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return n;if(!r.length)return n._root=s(r),n;for(t=[{source:r,target:n._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(e=r.source[i])&&(e.length?t.push({source:e,target:r.target[i]=new Array(4)}):r.target[i]=s(e));return n},f.add=function(t){var e=+this._x.call(null,t),n=+this._y.call(null,t);return r(this.cover(e,n),e,n,t)},f.addAll=function(t){var e,n,i,a,o=t.length,u=new Array(o),c=new Array(o),s=1/0,f=1/0,l=-1/0,d=-1/0;for(n=0;n<o;++n)isNaN(i=+this._x.call(null,e=t[n]))||isNaN(a=+this._y.call(null,e))||(u[n]=i,c[n]=a,i<s&&(s=i),i>l&&(l=i),a<f&&(f=a),a>d&&(d=a));for(l<s&&(s=this._x0,l=this._x1),d<f&&(f=this._y0,d=this._y1),this.cover(s,f).cover(l,d),n=0;n<o;++n)r(this,u[n],c[n],t[n]);return this},f.cover=function(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,a=(r=Math.floor(e))+1;else{if(!(n>t||t>i||r>e||e>a))return this;var o,u,c=i-n,s=this._root;switch(u=(e<(r+a)/2)<<1|t<(n+i)/2){case 0:do{(o=new Array(4))[u]=s,s=o}while(a=r+(c*=2),t>(i=n+c)||e>a);break;case 1:do{(o=new Array(4))[u]=s,s=o}while(a=r+(c*=2),(n=i-c)>t||e>a);break;case 2:do{(o=new Array(4))[u]=s,s=o}while(r=a-(c*=2),t>(i=n+c)||r>e);break;case 3:do{(o=new Array(4))[u]=s,s=o}while(r=a-(c*=2),(n=i-c)>t||r>e)}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=r,this._x1=i,this._y1=a,this},f.data=function(){var t=[];return this.visit(function(e){if(!e.length)do{t.push(e.data)}while(e=e.next)}),t},f.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},f.find=function(t,e,n){var r,a,o,u,c,s,f,l=this._x0,d=this._y0,h=this._x1,g=this._y1,p=[],_=this._root;for(_&&p.push(new i(_,l,d,h,g)),null==n?n=1/0:(l=t-n,d=e-n,h=t+n,g=e+n,n*=n);s=p.pop();)if(!(!(_=s.node)||(a=s.x0)>h||(o=s.y0)>g||(u=s.x1)<l||(c=s.y1)<d))if(_.length){var y=(a+u)/2,v=(o+c)/2;p.push(new i(_[3],y,v,u,c),new i(_[2],a,v,y,c),new i(_[1],y,o,u,v),new i(_[0],a,o,y,v)),(f=(e>=v)<<1|t>=y)&&(s=p[p.length-1],p[p.length-1]=p[p.length-1-f],p[p.length-1-f]=s)}else{var x=t-+this._x.call(null,_.data),m=e-+this._y.call(null,_.data),b=x*x+m*m;if(b<n){var w=Math.sqrt(n=b);l=t-w,d=e-w,h=t+w,g=e+w,r=_.data}}return r},f.remove=function(t){if(isNaN(a=+this._x.call(null,t))||isNaN(o=+this._y.call(null,t)))return this;var e,n,r,i,a,o,u,c,s,f,l,d,h=this._root,g=this._x0,p=this._y0,_=this._x1,y=this._y1;if(!h)return this;if(h.length)for(;;){if((s=a>=(u=(g+_)/2))?g=u:_=u,(f=o>=(c=(p+y)/2))?p=c:y=c,e=h,!(h=h[l=f<<1|s]))return this;if(!h.length)break;(e[l+1&3]||e[l+2&3]||e[l+3&3])&&(n=e,d=l)}for(;h.data!==t;)if(r=h,!(h=h.next))return this;return(i=h.next)&&delete h.next,r?(i?r.next=i:delete r.next,this):e?(i?e[l]=i:delete e[l],(h=e[0]||e[1]||e[2]||e[3])&&h===(e[3]||e[2]||e[1]||e[0])&&!h.length&&(n?n[d]=h:this._root=h),this):(this._root=i,this)},f.removeAll=function(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this},f.root=function(){return this._root},f.size=function(){var t=0;return this.visit(function(e){if(!e.length)do{++t}while(e=e.next)}),t},f.visit=function(t){var e,n,r,a,o,u,c=[],s=this._root;for(s&&c.push(new i(s,this._x0,this._y0,this._x1,this._y1));e=c.pop();)if(!t(s=e.node,r=e.x0,a=e.y0,o=e.x1,u=e.y1)&&s.length){var f=(r+o)/2,l=(a+u)/2;(n=s[3])&&c.push(new i(n,f,l,o,u)),(n=s[2])&&c.push(new i(n,r,l,f,u)),(n=s[1])&&c.push(new i(n,f,a,o,l)),(n=s[0])&&c.push(new i(n,r,a,f,l))}return this},f.visitAfter=function(t){var e,n=[],r=[];for(this._root&&n.push(new i(this._root,this._x0,this._y0,this._x1,this._y1));e=n.pop();){var a=e.node;if(a.length){var o,u=e.x0,c=e.y0,s=e.x1,f=e.y1,l=(u+s)/2,d=(c+f)/2;(o=a[0])&&n.push(new i(o,u,c,l,d)),(o=a[1])&&n.push(new i(o,l,c,s,d)),(o=a[2])&&n.push(new i(o,u,d,l,f)),(o=a[3])&&n.push(new i(o,l,d,s,f))}r.push(e)}for(;e=r.pop();)t(e.node,e.x0,e.y0,e.x1,e.y1);return this},f.x=function(t){return arguments.length?(this._x=t,this):this._x},f.y=function(t){return arguments.length?(this._y=t,this):this._y},n.d(e,"a",function(){return u})},function(t,e,n){"use strict";var r={},i={},a=34,o=10,u=13;function c(t){return new Function("d","return {"+t.map(function(t,e){return JSON.stringify(t)+": d["+e+"]"}).join(",")+"}")}var s=function(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function s(t,e){var c,s=[],f=t.length,l=0,d=0,h=f<=0,g=!1;function p(){if(h)return i;if(g)return g=!1,r;var e,c,s=l;if(t.charCodeAt(s)===a){for(;l++<f&&t.charCodeAt(l)!==a||t.charCodeAt(++l)===a;);return(e=l)>=f?h=!0:(c=t.charCodeAt(l++))===o?g=!0:c===u&&(g=!0,t.charCodeAt(l)===o&&++l),t.slice(s+1,e-1).replace(/""/g,'"')}for(;l<f;){if((c=t.charCodeAt(e=l++))===o)g=!0;else if(c===u)g=!0,t.charCodeAt(l)===o&&++l;else if(c!==n)continue;return t.slice(s,e)}return h=!0,t.slice(s,f)}for(t.charCodeAt(f-1)===o&&--f,t.charCodeAt(f-1)===u&&--f;(c=p())!==i;){for(var _=[];c!==r&&c!==i;)_.push(c),c=p();e&&null==(_=e(_,d++))||s.push(_)}return s}function f(e){return e.map(l).join(t)}function l(t){return null==t?"":e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,r,i=s(t,function(t,i){if(n)return n(t,i-1);r=t,n=e?function(t,e){var n=c(t);return function(r,i){return e(n(r),i,t)}}(t,e):c(t)});return i.columns=r||[],i},parseRows:s,format:function(e,n){return null==n&&(n=function(t){var e=Object.create(null),n=[];return t.forEach(function(t){for(var r in t)r in e||n.push(e[r]=r)}),n}(e)),[n.map(l).join(t)].concat(e.map(function(e){return n.map(function(t){return l(e[t])}).join(t)})).join("\n")},formatRows:function(t){return t.map(f).join("\n")}}},f=s(","),l=f.parse,d=f.parseRows,h=f.format,g=f.formatRows,p=s("\t"),_=p.parse,y=p.parseRows,v=p.format,x=p.formatRows;n.d(e,"e",function(){return s}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return d}),n.d(e,"a",function(){return h}),n.d(e,"b",function(){return g}),n.d(e,"h",function(){return _}),n.d(e,"i",function(){return y}),n.d(e,"f",function(){return v}),n.d(e,"g",function(){return x})},function(t,e,n){"use strict";function r(t){return+t}function i(t){return t*t}function a(t){return t*(2-t)}function o(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function u(t){return t*t*t}function c(t){return--t*t*t+1}function s(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var f=function t(e){function n(t){return Math.pow(t,e)}return e=+e,n.exponent=t,n}(3),l=function t(e){function n(t){return 1-Math.pow(1-t,e)}return e=+e,n.exponent=t,n}(3),d=function t(e){function n(t){return((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2}return e=+e,n.exponent=t,n}(3),h=Math.PI,g=h/2;function p(t){return 1-Math.cos(t*g)}function _(t){return Math.sin(t*g)}function y(t){return(1-Math.cos(h*t))/2}function v(t){return Math.pow(2,10*t-10)}function x(t){return 1-Math.pow(2,-10*t)}function m(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function b(t){return 1-Math.sqrt(1-t*t)}function w(t){return Math.sqrt(1- --t*t)}function S(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var A=4/11,T=6/11,P=8/11,C=.75,M=9/11,L=10/11,O=.9375,E=21/22,k=63/64,G=1/A/A;function V(t){return 1-R(1-t)}function R(t){return(t=+t)<A?G*t*t:t<P?G*(t-=T)*t+C:t<L?G*(t-=M)*t+O:G*(t-=E)*t+k}function I(t){return((t*=2)<=1?1-R(1-t):R(t-1)+1)/2}var D=function t(e){function n(t){return t*t*((e+1)*t-e)}return e=+e,n.overshoot=t,n}(1.70158),N=function t(e){function n(t){return--t*t*((e+1)*t+e)+1}return e=+e,n.overshoot=t,n}(1.70158),F=function t(e){function n(t){return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2}return e=+e,n.overshoot=t,n}(1.70158),z=2*Math.PI,j=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=z);function i(t){return e*Math.pow(2,10*--t)*Math.sin((r-t)/n)}return i.amplitude=function(e){return t(e,n*z)},i.period=function(n){return t(e,n)},i}(1,.3),B=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=z);function i(t){return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/n)}return i.amplitude=function(e){return t(e,n*z)},i.period=function(n){return t(e,n)},i}(1,.3),H=function t(e,n){var r=Math.asin(1/(e=Math.max(1,e)))*(n/=z);function i(t){return((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((r-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((r+t)/n))/2}return i.amplitude=function(e){return t(e,n*z)},i.period=function(n){return t(e,n)},i}(1,.3);n.d(e,"y",function(){return r}),n.d(e,"D",function(){return o}),n.d(e,"E",function(){return i}),n.d(e,"G",function(){return a}),n.d(e,"F",function(){return o}),n.d(e,"m",function(){return s}),n.d(e,"n",function(){return u}),n.d(e,"p",function(){return c}),n.d(e,"o",function(){return s}),n.d(e,"z",function(){return d}),n.d(e,"A",function(){return f}),n.d(e,"C",function(){return l}),n.d(e,"B",function(){return d}),n.d(e,"H",function(){return y}),n.d(e,"I",function(){return p}),n.d(e,"K",function(){return _}),n.d(e,"J",function(){return y}),n.d(e,"u",function(){return m}),n.d(e,"v",function(){return v}),n.d(e,"x",function(){return x}),n.d(e,"w",function(){return m}),n.d(e,"i",function(){return S}),n.d(e,"j",function(){return b}),n.d(e,"l",function(){return w}),n.d(e,"k",function(){return S}),n.d(e,"e",function(){return R}),n.d(e,"f",function(){return V}),n.d(e,"h",function(){return R}),n.d(e,"g",function(){return I}),n.d(e,"a",function(){return F}),n.d(e,"b",function(){return D}),n.d(e,"d",function(){return N}),n.d(e,"c",function(){return F}),n.d(e,"q",function(){return B}),n.d(e,"r",function(){return j}),n.d(e,"t",function(){return B}),n.d(e,"s",function(){return H})},function(t,e,n){"use strict";var r=Array.prototype.slice,i=function(t){return t},a=1,o=2,u=3,c=4,s=1e-6;function f(t){return"translate("+(t+.5)+",0)"}function l(t){return"translate(0,"+(t+.5)+")"}function d(){return!this.__axis}function h(t,e){var n=[],h=null,g=null,p=6,_=6,y=3,v=t===a||t===c?-1:1,x=t===c||t===o?"x":"y",m=t===a||t===u?f:l;function b(r){var f=null==h?e.ticks?e.ticks.apply(e,n):e.domain():h,l=null==g?e.tickFormat?e.tickFormat.apply(e,n):i:g,b=Math.max(p,0)+y,w=e.range(),S=+w[0]+.5,A=+w[w.length-1]+.5,T=(e.bandwidth?function(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}:function(t){return function(e){return+t(e)}})(e.copy()),P=r.selection?r.selection():r,C=P.selectAll(".domain").data([null]),M=P.selectAll(".tick").data(f,e).order(),L=M.exit(),O=M.enter().append("g").attr("class","tick"),E=M.select("line"),k=M.select("text");C=C.merge(C.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),M=M.merge(O),E=E.merge(O.append("line").attr("stroke","#000").attr(x+"2",v*p)),k=k.merge(O.append("text").attr("fill","#000").attr(x,v*b).attr("dy",t===a?"0em":t===u?"0.71em":"0.32em")),r!==P&&(C=C.transition(r),M=M.transition(r),E=E.transition(r),k=k.transition(r),L=L.transition(r).attr("opacity",s).attr("transform",function(t){return isFinite(t=T(t))?m(t):this.getAttribute("transform")}),O.attr("opacity",s).attr("transform",function(t){var e=this.parentNode.__axis;return m(e&&isFinite(e=e(t))?e:T(t))})),L.remove(),C.attr("d",t===c||t==o?"M"+v*_+","+S+"H0.5V"+A+"H"+v*_:"M"+S+","+v*_+"V0.5H"+A+"V"+v*_),M.attr("opacity",1).attr("transform",function(t){return m(T(t))}),E.attr(x+"2",v*p),k.attr(x,v*b).text(l),P.filter(d).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===o?"start":t===c?"end":"middle"),P.each(function(){this.__axis=T})}return b.scale=function(t){return arguments.length?(e=t,b):e},b.ticks=function(){return n=r.call(arguments),b},b.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),b):n.slice()},b.tickValues=function(t){return arguments.length?(h=null==t?null:r.call(t),b):h&&h.slice()},b.tickFormat=function(t){return arguments.length?(g=t,b):g},b.tickSize=function(t){return arguments.length?(p=_=+t,b):p},b.tickSizeInner=function(t){return arguments.length?(p=+t,b):p},b.tickSizeOuter=function(t){return arguments.length?(_=+t,b):_},b.tickPadding=function(t){return arguments.length?(y=+t,b):y},b}function g(t){return h(a,t)}function p(t){return h(o,t)}function _(t){return h(u,t)}function y(t){return h(c,t)}n.d(e,"d",function(){return g}),n.d(e,"c",function(){return p}),n.d(e,"a",function(){return _}),n.d(e,"b",function(){return y})},function(t,e,n){"use strict";var r=n(6),i=n(12),a=n(4),o=n(0),u=n(11),c=function(t){return function(){return t}},s=function(t,e,n){this.target=t,this.type=e,this.selection=n};function f(){o.e.stopImmediatePropagation()}var l=function(){o.e.preventDefault(),o.e.stopImmediatePropagation()},d={name:"drag"},h={name:"space"},g={name:"handle"},p={name:"center"},_={name:"x",handles:["e","w"].map(A),input:function(t,e){return t&&[[t[0],e[0][1]],[t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},y={name:"y",handles:["n","s"].map(A),input:function(t,e){return t&&[[e[0][0],t[0]],[e[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},v={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(A),input:function(t){return t},output:function(t){return t}},x={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},m={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},b={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},w={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},S={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function A(t){return{type:t}}function T(){return!o.e.button}function P(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function C(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function M(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function L(t){var e=t.__brush;return e?e.dim.output(e.selection):null}function O(){return G(_)}function E(){return G(y)}var k=function(){return G(v)};function G(t){var e,n=P,v=T,L=Object(r.a)(E,"start","brush","end"),O=6;function E(e){var n=e.property("__brush",I).selectAll(".overlay").data([A("overlay")]);n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",x.overlay).merge(n).each(function(){var t=C(this).extent;Object(o.k)(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),e.selectAll(".selection").data([A("selection")]).enter().append("rect").attr("class","selection").attr("cursor",x.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=e.selectAll(".handle").data(t.handles,function(t){return t.type});r.exit().remove(),r.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return x[t.type]}),e.each(k).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",R)}function k(){var t=Object(o.k)(this),e=C(this).selection;e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?e[1][0]-O/2:e[0][0]-O/2}).attr("y",function(t){return"s"===t.type[0]?e[1][1]-O/2:e[0][1]-O/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+O:O}).attr("height",function(t){return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+O:O})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function G(t,e){return t.__brush.emitter||new V(t,e)}function V(t,e){this.that=t,this.args=e,this.state=t.__brush,this.active=0}function R(){if(o.e.touches){if(o.e.changedTouches.length<o.e.touches.length)return l()}else if(e)return;if(v.apply(this,arguments)){var n,r,a,c,s,A,T,P,L,O,E,V,R,I=this,D=o.e.target.__data__.type,N="selection"===(o.e.metaKey?D="overlay":D)?d:o.e.altKey?p:g,F=t===y?null:w[D],z=t===_?null:S[D],j=C(I),B=j.extent,H=j.selection,X=B[0][0],Y=B[0][1],U=B[1][0],q=B[1][1],W=F&&z&&o.e.shiftKey,Q=Object(o.h)(I),Z=Q,K=G(I,arguments).beforestart();"overlay"===D?j.selection=H=[[n=t===y?X:Q[0],a=t===_?Y:Q[1]],[s=t===y?U:n,T=t===_?q:a]]:(n=H[0][0],a=H[0][1],s=H[1][0],T=H[1][1]),r=n,c=a,A=s,P=T;var J=Object(o.k)(I).attr("pointer-events","none"),$=J.selectAll(".overlay").attr("cursor",x[D]);if(o.e.touches)J.on("touchmove.brush",et,!0).on("touchend.brush touchcancel.brush",rt,!0);else{var tt=Object(o.k)(o.e.view).on("keydown.brush",function(){switch(o.e.keyCode){case 16:W=F&&z;break;case 18:N===g&&(F&&(s=A-L*F,n=r+L*F),z&&(T=P-O*z,a=c+O*z),N=p,nt());break;case 32:N!==g&&N!==p||(F<0?s=A-L:F>0&&(n=r-L),z<0?T=P-O:z>0&&(a=c-O),N=h,$.attr("cursor",x.selection),nt());break;default:return}l()},!0).on("keyup.brush",function(){switch(o.e.keyCode){case 16:W&&(V=R=W=!1,nt());break;case 18:N===p&&(F<0?s=A:F>0&&(n=r),z<0?T=P:z>0&&(a=c),N=g,nt());break;case 32:N===h&&(o.e.altKey?(F&&(s=A-L*F,n=r+L*F),z&&(T=P-O*z,a=c+O*z),N=p):(F<0?s=A:F>0&&(n=r),z<0?T=P:z>0&&(a=c),N=g),$.attr("cursor",x[D]),nt());break;default:return}l()},!0).on("mousemove.brush",et,!0).on("mouseup.brush",rt,!0);Object(i.b)(o.e.view)}f(),Object(u.b)(I),k.call(I),K.start()}function et(){var t=Object(o.h)(I);!W||V||R||(Math.abs(t[0]-Z[0])>Math.abs(t[1]-Z[1])?R=!0:V=!0),Z=t,E=!0,l(),nt()}function nt(){var t;switch(L=Z[0]-Q[0],O=Z[1]-Q[1],N){case h:case d:F&&(L=Math.max(X-n,Math.min(U-s,L)),r=n+L,A=s+L),z&&(O=Math.max(Y-a,Math.min(q-T,O)),c=a+O,P=T+O);break;case g:F<0?(L=Math.max(X-n,Math.min(U-n,L)),r=n+L,A=s):F>0&&(L=Math.max(X-s,Math.min(U-s,L)),r=n,A=s+L),z<0?(O=Math.max(Y-a,Math.min(q-a,O)),c=a+O,P=T):z>0&&(O=Math.max(Y-T,Math.min(q-T,O)),c=a,P=T+O);break;case p:F&&(r=Math.max(X,Math.min(U,n-L*F)),A=Math.max(X,Math.min(U,s+L*F))),z&&(c=Math.max(Y,Math.min(q,a-O*z)),P=Math.max(Y,Math.min(q,T+O*z)))}A<r&&(F*=-1,t=n,n=s,s=t,t=r,r=A,A=t,D in m&&$.attr("cursor",x[D=m[D]])),P<c&&(z*=-1,t=a,a=T,T=t,t=c,c=P,P=t,D in b&&$.attr("cursor",x[D=b[D]])),j.selection&&(H=j.selection),V&&(r=H[0][0],A=H[1][0]),R&&(c=H[0][1],P=H[1][1]),H[0][0]===r&&H[0][1]===c&&H[1][0]===A&&H[1][1]===P||(j.selection=[[r,c],[A,P]],k.call(I),K.brush())}function rt(){if(f(),o.e.touches){if(o.e.touches.length)return;e&&clearTimeout(e),e=setTimeout(function(){e=null},500),J.on("touchmove.brush touchend.brush touchcancel.brush",null)}else Object(i.c)(o.e.view,E),tt.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);J.attr("pointer-events","all"),$.attr("cursor",x.overlay),j.selection&&(H=j.selection),M(H)&&(j.selection=null,k.call(I)),K.end()}}function I(){var e=this.__brush||{selection:null};return e.extent=n.apply(this,arguments),e.dim=t,e}return E.move=function(e,n){e.selection?e.on("start.brush",function(){G(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){G(this,arguments).end()}).tween("brush",function(){var e=this,r=e.__brush,i=G(e,arguments),o=r.selection,u=t.input("function"==typeof n?n.apply(this,arguments):n,r.extent),c=Object(a.a)(o,u);function s(t){r.selection=1===t&&M(u)?null:c(t),k.call(e),i.brush()}return o&&u?s:s(1)}):e.each(function(){var e=arguments,r=this.__brush,i=t.input("function"==typeof n?n.apply(this,e):n,r.extent),a=G(this,e).beforestart();Object(u.b)(this),r.selection=null==i||M(i)?null:i,k.call(this),a.start().brush().end()})},V.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(e){Object(o.d)(new s(E,e,t.output(this.state.selection)),L.apply,L,[e,this.that,this.args])}},E.extent=function(t){return arguments.length?(n="function"==typeof t?t:c([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),E):n},E.filter=function(t){return arguments.length?(v="function"==typeof t?t:c(!!t),E):v},E.handleSize=function(t){return arguments.length?(O=+t,E):O},E.on=function(){var t=L.on.apply(L,arguments);return t===L?E:t},E}n.d(e,"a",function(){return k}),n.d(e,"c",function(){return O}),n.d(e,"d",function(){return E}),n.d(e,"b",function(){return L})},function(t,e,n){"use strict";var r=n(6),i=n(12),a=n(4),o=n(0),u=n(11),c=function(t){return function(){return t}};function s(t,e,n){this.k=t,this.x=e,this.y=n}s.prototype={constructor:s,scale:function(t){return 1===t?this:new s(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new s(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var f=new s(1,0,0);function l(t){return t.__zoom||f}function d(){o.e.stopImmediatePropagation()}l.prototype=s.prototype;var h=function(){o.e.preventDefault(),o.e.stopImmediatePropagation()};function g(){return!o.e.button}function p(){var t,e,n=this;return n instanceof SVGElement?(t=(n=n.ownerSVGElement||n).width.baseVal.value,e=n.height.baseVal.value):(t=n.clientWidth,e=n.clientHeight),[[0,0],[t,e]]}function _(){return this.__zoom||f}function y(){return-o.e.deltaY*(o.e.deltaMode?120:1)/500}function v(){return"ontouchstart"in this}function x(t,e,n){var r=t.invertX(e[0][0])-n[0][0],i=t.invertX(e[1][0])-n[1][0],a=t.invertY(e[0][1])-n[0][1],o=t.invertY(e[1][1])-n[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),o>a?(a+o)/2:Math.min(0,a)||Math.max(0,o))}var m=function(){var t,e,n=g,l=p,m=x,b=y,w=v,S=[0,1/0],A=[[-1/0,-1/0],[1/0,1/0]],T=250,P=a.v,C=[],M=Object(r.a)("start","zoom","end"),L=500,O=150,E=0;function k(t){t.property("__zoom",_).on("wheel.zoom",F).on("mousedown.zoom",z).on("dblclick.zoom",j).filter(w).on("touchstart.zoom",B).on("touchmove.zoom",H).on("touchend.zoom touchcancel.zoom",X).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function G(t,e){return(e=Math.max(S[0],Math.min(S[1],e)))===t.k?t:new s(e,t.x,t.y)}function V(t,e,n){var r=e[0]-n[0]*t.k,i=e[1]-n[1]*t.k;return r===t.x&&i===t.y?t:new s(t.k,r,i)}function R(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function I(t,e,n){t.on("start.zoom",function(){D(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){D(this,arguments).end()}).tween("zoom",function(){var t=arguments,r=D(this,t),i=l.apply(this,t),a=n||R(i),o=Math.max(i[1][0]-i[0][0],i[1][1]-i[0][1]),u=this.__zoom,c="function"==typeof e?e.apply(this,t):e,f=P(u.invert(a).concat(o/u.k),c.invert(a).concat(o/c.k));return function(t){if(1===t)t=c;else{var e=f(t),n=o/e[2];t=new s(n,a[0]-e[0]*n,a[1]-e[1]*n)}r.zoom(null,t)}})}function D(t,e){for(var n,r=0,i=C.length;r<i;++r)if((n=C[r]).that===t)return n;return new N(t,e)}function N(t,e){this.that=t,this.args=e,this.index=-1,this.active=0,this.extent=l.apply(t,e)}function F(){if(n.apply(this,arguments)){var t=D(this,arguments),e=this.__zoom,r=Math.max(S[0],Math.min(S[1],e.k*Math.pow(2,b.apply(this,arguments)))),i=Object(o.h)(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=e.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(e.k===r)return;t.mouse=[i,e.invert(i)],Object(u.b)(this),t.start()}h(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},O),t.zoom("mouse",m(V(G(e,r),t.mouse[0],t.mouse[1]),t.extent,A))}}function z(){if(!e&&n.apply(this,arguments)){var t=D(this,arguments),r=Object(o.k)(o.e.view).on("mousemove.zoom",function(){if(h(),!t.moved){var e=o.e.clientX-c,n=o.e.clientY-s;t.moved=e*e+n*n>E}t.zoom("mouse",m(V(t.that.__zoom,t.mouse[0]=Object(o.h)(t.that),t.mouse[1]),t.extent,A))},!0).on("mouseup.zoom",function(){r.on("mousemove.zoom mouseup.zoom",null),Object(i.c)(o.e.view,t.moved),h(),t.end()},!0),a=Object(o.h)(this),c=o.e.clientX,s=o.e.clientY;Object(i.b)(o.e.view),d(),t.mouse=[a,this.__zoom.invert(a)],Object(u.b)(this),t.start()}}function j(){if(n.apply(this,arguments)){var t=this.__zoom,e=Object(o.h)(this),r=t.invert(e),i=t.k*(o.e.shiftKey?.5:2),a=m(V(G(t,i),e,r),l.apply(this,arguments),A);h(),T>0?Object(o.k)(this).transition().duration(T).call(I,a,e):Object(o.k)(this).call(k.transform,a)}}function B(){if(n.apply(this,arguments)){var e,r,i,a,c=D(this,arguments),s=o.e.changedTouches,f=s.length;for(d(),r=0;r<f;++r)i=s[r],a=[a=Object(o.q)(this,s,i.identifier),this.__zoom.invert(a),i.identifier],c.touch0?c.touch1||(c.touch1=a):(c.touch0=a,e=!0);if(t&&(t=clearTimeout(t),!c.touch1))return c.end(),void((a=Object(o.k)(this).on("dblclick.zoom"))&&a.apply(this,arguments));e&&(t=setTimeout(function(){t=null},L),Object(u.b)(this),c.start())}}function H(){var e,n,r,i,a=D(this,arguments),u=o.e.changedTouches,c=u.length;for(h(),t&&(t=clearTimeout(t)),e=0;e<c;++e)n=u[e],r=Object(o.q)(this,u,n.identifier),a.touch0&&a.touch0[2]===n.identifier?a.touch0[0]=r:a.touch1&&a.touch1[2]===n.identifier&&(a.touch1[0]=r);if(n=a.that.__zoom,a.touch1){var s=a.touch0[0],f=a.touch0[1],l=a.touch1[0],d=a.touch1[1],g=(g=l[0]-s[0])*g+(g=l[1]-s[1])*g,p=(p=d[0]-f[0])*p+(p=d[1]-f[1])*p;n=G(n,Math.sqrt(g/p)),r=[(s[0]+l[0])/2,(s[1]+l[1])/2],i=[(f[0]+d[0])/2,(f[1]+d[1])/2]}else{if(!a.touch0)return;r=a.touch0[0],i=a.touch0[1]}a.zoom("touch",m(V(n,r,i),a.extent,A))}function X(){var t,n,r=D(this,arguments),i=o.e.changedTouches,a=i.length;for(d(),e&&clearTimeout(e),e=setTimeout(function(){e=null},L),t=0;t<a;++t)n=i[t],r.touch0&&r.touch0[2]===n.identifier?delete r.touch0:r.touch1&&r.touch1[2]===n.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0?r.touch0[1]=this.__zoom.invert(r.touch0[0]):r.end()}return k.transform=function(t,e){var n=t.selection?t.selection():t;n.property("__zoom",_),t!==n?I(t,e):n.interrupt().each(function(){D(this,arguments).start().zoom(null,"function"==typeof e?e.apply(this,arguments):e).end()})},k.scaleBy=function(t,e){k.scaleTo(t,function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)})},k.scaleTo=function(t,e){k.transform(t,function(){var t=l.apply(this,arguments),n=this.__zoom,r=R(t),i=n.invert(r),a="function"==typeof e?e.apply(this,arguments):e;return m(V(G(n,a),r,i),t,A)})},k.translateBy=function(t,e,n){k.transform(t,function(){return m(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof n?n.apply(this,arguments):n),l.apply(this,arguments),A)})},k.translateTo=function(t,e,n){k.transform(t,function(){var t=l.apply(this,arguments),r=this.__zoom,i=R(t);return m(f.translate(i[0],i[1]).scale(r.k).translate("function"==typeof e?-e.apply(this,arguments):-e,"function"==typeof n?-n.apply(this,arguments):-n),t,A)})},N.prototype={start:function(){return 1==++this.active&&(this.index=C.push(this)-1,this.emit("start")),this},zoom:function(t,e){return this.mouse&&"mouse"!==t&&(this.mouse[1]=e.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=e.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=e.invert(this.touch1[0])),this.that.__zoom=e,this.emit("zoom"),this},end:function(){return 0==--this.active&&(C.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){Object(o.d)(new function(t,e,n){this.target=t,this.type=e,this.transform=n}(k,t,this.that.__zoom),M.apply,M,[t,this.that,this.args])}},k.wheelDelta=function(t){return arguments.length?(b="function"==typeof t?t:c(+t),k):b},k.filter=function(t){return arguments.length?(n="function"==typeof t?t:c(!!t),k):n},k.touchable=function(t){return arguments.length?(w="function"==typeof t?t:c(!!t),k):w},k.extent=function(t){return arguments.length?(l="function"==typeof t?t:c([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),k):l},k.scaleExtent=function(t){return arguments.length?(S[0]=+t[0],S[1]=+t[1],k):[S[0],S[1]]},k.translateExtent=function(t){return arguments.length?(A[0][0]=+t[0][0],A[1][0]=+t[1][0],A[0][1]=+t[0][1],A[1][1]=+t[1][1],k):[[A[0][0],A[0][1]],[A[1][0],A[1][1]]]},k.constrain=function(t){return arguments.length?(m=t,k):m},k.duration=function(t){return arguments.length?(T=+t,k):T},k.interpolate=function(t){return arguments.length?(P=t,k):P},k.on=function(){var t=M.on.apply(M,arguments);return t===M?k:t},k.clickDistance=function(t){return arguments.length?(E=(t=+t)*t,k):Math.sqrt(E)},k};n.d(e,"a",function(){return m}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return f})},function(t,e,n){"use strict";var r=n(1),i=Math.cos,a=Math.sin,o=Math.PI,u=o/2,c=2*o,s=Math.max;var f=function(){var t=0,e=null,n=null,i=null;function a(a){var o,u,f,l,d,h,g=a.length,p=[],_=Object(r.s)(g),y=[],v=[],x=v.groups=new Array(g),m=new Array(g*g);for(o=0,d=-1;++d<g;){for(u=0,h=-1;++h<g;)u+=a[d][h];p.push(u),y.push(Object(r.s)(g)),o+=u}for(e&&_.sort(function(t,n){return e(p[t],p[n])}),n&&y.forEach(function(t,e){t.sort(function(t,r){return n(a[e][t],a[e][r])})}),l=(o=s(0,c-t*g)/o)?t:c/g,u=0,d=-1;++d<g;){for(f=u,h=-1;++h<g;){var b=_[d],w=y[b][h],S=a[b][w],A=u,T=u+=S*o;m[w*g+b]={index:b,subindex:w,startAngle:A,endAngle:T,value:S}}x[b]={index:b,startAngle:f,endAngle:u,value:p[b]},u+=l}for(d=-1;++d<g;)for(h=d-1;++h<g;){var P=m[h*g+d],C=m[d*g+h];(P.value||C.value)&&v.push(P.value<C.value?{source:C,target:P}:{source:P,target:C})}return i?v.sort(i):v}return a.padAngle=function(e){return arguments.length?(t=s(0,e),a):t},a.sortGroups=function(t){return arguments.length?(e=t,a):e},a.sortSubgroups=function(t){return arguments.length?(n=t,a):n},a.sortChords=function(t){return arguments.length?(null==t?i=null:(e=t,i=function(t,n){return e(t.source.value+t.target.value,n.source.value+n.target.value)})._=t,a):i&&i._;var e},a},l=Array.prototype.slice,d=function(t){return function(){return t}},h=n(5);function g(t){return t.source}function p(t){return t.target}function _(t){return t.radius}function y(t){return t.startAngle}function v(t){return t.endAngle}var x=function(){var t=g,e=p,n=_,r=y,o=v,c=null;function s(){var s,f=l.call(arguments),d=t.apply(this,f),g=e.apply(this,f),p=+n.apply(this,(f[0]=d,f)),_=r.apply(this,f)-u,y=o.apply(this,f)-u,v=p*i(_),x=p*a(_),m=+n.apply(this,(f[0]=g,f)),b=r.apply(this,f)-u,w=o.apply(this,f)-u;if(c||(c=s=Object(h.a)()),c.moveTo(v,x),c.arc(0,0,p,_,y),_===b&&y===w||(c.quadraticCurveTo(0,0,m*i(b),m*a(b)),c.arc(0,0,m,b,w)),c.quadraticCurveTo(0,0,v,x),c.closePath(),s)return c=null,s+""||null}return s.radius=function(t){return arguments.length?(n="function"==typeof t?t:d(+t),s):n},s.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:d(+t),s):r},s.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:d(+t),s):o},s.source=function(e){return arguments.length?(t=e,s):t},s.target=function(t){return arguments.length?(e=t,s):e},s.context=function(t){return arguments.length?(c=null==t?null:t,s):c},s};n.d(e,"a",function(){return f}),n.d(e,"b",function(){return x})},function(t,e,n){"use strict";var r=function(t){for(var e,n=-1,r=t.length,i=t[r-1],a=0;++n<r;)e=i,i=t[n],a+=e[1]*i[0]-e[0]*i[1];return a/2},i=function(t){for(var e,n,r=-1,i=t.length,a=0,o=0,u=t[i-1],c=0;++r<i;)e=u,u=t[r],c+=n=e[0]*u[1]-u[0]*e[1],a+=(e[0]+u[0])*n,o+=(e[1]+u[1])*n;return[a/(c*=3),o/c]},a=function(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])};function o(t,e){return t[0]-e[0]||t[1]-e[1]}function u(t){for(var e=t.length,n=[0,1],r=2,i=2;i<e;++i){for(;r>1&&a(t[n[r-2]],t[n[r-1]],t[i])<=0;)--r;n[r++]=i}return n.slice(0,r)}var c=function(t){if((n=t.length)<3)return null;var e,n,r=new Array(n),i=new Array(n);for(e=0;e<n;++e)r[e]=[+t[e][0],+t[e][1],e];for(r.sort(o),e=0;e<n;++e)i[e]=[r[e][0],-r[e][1]];var a=u(r),c=u(i),s=c[0]===a[0],f=c[c.length-1]===a[a.length-1],l=[];for(e=a.length-1;e>=0;--e)l.push(t[r[a[e]][2]]);for(e=+s;e<c.length-f;++e)l.push(t[r[c[e]][2]]);return l},s=function(t,e){for(var n,r,i=t.length,a=t[i-1],o=e[0],u=e[1],c=a[0],s=a[1],f=!1,l=0;l<i;++l)n=(a=t[l])[0],(r=a[1])>u!=s>u&&o<(c-n)*(u-r)/(s-r)+n&&(f=!f),c=n,s=r;return f},f=function(t){for(var e,n,r=-1,i=t.length,a=t[i-1],o=a[0],u=a[1],c=0;++r<i;)e=o,n=u,e-=o=(a=t[r])[0],n-=u=a[1],c+=Math.sqrt(e*e+n*n);return c};n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return s}),n.d(e,"e",function(){return f})},function(t,e,n){"use strict";var r=function(){return Math.random()},i=function t(e){function n(t,n){return t=null==t?0:+t,n=null==n?1:+n,1===arguments.length?(n=t,t=0):n-=t,function(){return e()*n+t}}return n.source=t,n}(r),a=function t(e){function n(t,n){var r,i;return t=null==t?0:+t,n=null==n?1:+n,function(){var a;if(null!=r)a=r,r=null;else do{r=2*e()-1,a=2*e()-1,i=r*r+a*a}while(!i||i>1);return t+n*a*Math.sqrt(-2*Math.log(i)/i)}}return n.source=t,n}(r),o=function t(e){function n(){var t=a.source(e).apply(this,arguments);return function(){return Math.exp(t())}}return n.source=t,n}(r),u=function t(e){function n(t){return function(){for(var n=0,r=0;r<t;++r)n+=e();return n}}return n.source=t,n}(r),c=function t(e){function n(t){var n=u.source(e)(t);return function(){return n()/t}}return n.source=t,n}(r),s=function t(e){function n(t){return function(){return-Math.log(1-e())/t}}return n.source=t,n}(r);n.d(e,"f",function(){return i}),n.d(e,"e",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return s})},function(t,e,n){"use strict";function r(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}var i=function(t,e){return fetch(t,e).then(r)};function a(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}var o=function(t,e){return fetch(t,e).then(a)},u=n(15);function c(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}var s=function(t,e){return fetch(t,e).then(c)};function f(t){return function(e,n,r){return 2===arguments.length&&"function"==typeof n&&(r=n,n=void 0),s(e,n).then(function(e){return t(e,r)})}}function l(t,e,n,r){3===arguments.length&&"function"==typeof n&&(r=n,n=void 0);var i=Object(u.e)(t);return s(e,n).then(function(t){return i.parse(t,r)})}var d=f(u.c),h=f(u.h),g=function(t,e){return new Promise(function(n,r){var i=new Image;for(var a in e)i[a]=e[a];i.onerror=r,i.onload=function(){n(i)},i.src=t})};function p(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}var _=function(t,e){return fetch(t,e).then(p)};function y(t){return function(e,n){return s(e,n).then(function(e){return(new DOMParser).parseFromString(e,t)})}}var v=y("application/xml"),x=y("text/html"),m=y("image/svg+xml");n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return d}),n.d(e,"j",function(){return h}),n.d(e,"f",function(){return g}),n.d(e,"g",function(){return _}),n.d(e,"i",function(){return s}),n.d(e,"k",function(){return v}),n.d(e,"e",function(){return x}),n.d(e,"h",function(){return m})},function(t,e,n){"use strict";var r=n(1),i=Array.prototype.slice,a=function(t,e){return t-e},o=function(t){for(var e=0,n=t.length,r=t[n-1][1]*t[0][0]-t[n-1][0]*t[0][1];++e<n;)r+=t[e-1][1]*t[e][0]-t[e-1][0]*t[e][1];return r},u=function(t){return function(){return t}},c=function(t,e){for(var n,r=-1,i=e.length;++r<i;)if(n=s(t,e[r]))return n;return 0};function s(t,e){for(var n=e[0],r=e[1],i=-1,a=0,o=t.length,u=o-1;a<o;u=a++){var c=t[a],s=c[0],l=c[1],d=t[u],h=d[0],g=d[1];if(f(c,d,e))return 0;l>r!=g>r&&n<(h-s)*(r-l)/(g-l)+s&&(i=-i)}return i}function f(t,e,n){var r,i,a,o;return function(t,e,n){return(e[0]-t[0])*(n[1]-t[1])==(n[0]-t[0])*(e[1]-t[1])}(t,e,n)&&(i=t[r=+(t[0]===e[0])],a=n[r],o=e[r],i<=a&&a<=o||o<=a&&a<=i)}var l=function(){},d=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]],h=function(){var t=1,e=1,n=r.y,s=p;function f(t){var e=n(t);if(Array.isArray(e))e=e.slice().sort(a);else{var i=Object(r.i)(t),o=i[0],u=i[1];e=Object(r.A)(o,u,e),e=Object(r.s)(Math.floor(o/e)*e,Math.floor(u/e)*e,e)}return e.map(function(e){return h(t,e)})}function h(n,r){var i=[],a=[];return function(n,r,i){var a,o,u,c,s,f,l=new Array,h=new Array;a=o=-1,c=n[0]>=r,d[c<<1].forEach(p);for(;++a<t-1;)u=c,c=n[a+1]>=r,d[u|c<<1].forEach(p);d[c<<0].forEach(p);for(;++o<e-1;){for(a=-1,c=n[o*t+t]>=r,s=n[o*t]>=r,d[c<<1|s<<2].forEach(p);++a<t-1;)u=c,c=n[o*t+t+a+1]>=r,f=s,s=n[o*t+a+1]>=r,d[u|c<<1|s<<2|f<<3].forEach(p);d[c|s<<3].forEach(p)}a=-1,s=n[o*t]>=r,d[s<<2].forEach(p);for(;++a<t-1;)f=s,s=n[o*t+a+1]>=r,d[s<<2|f<<3].forEach(p);function p(t){var e,n,r=[t[0][0]+a,t[0][1]+o],u=[t[1][0]+a,t[1][1]+o],c=g(r),s=g(u);(e=h[c])?(n=l[s])?(delete h[e.end],delete l[n.start],e===n?(e.ring.push(u),i(e.ring)):l[e.start]=h[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[e.end],e.ring.push(u),h[e.end=s]=e):(e=l[s])?(n=h[c])?(delete l[e.start],delete h[n.end],e===n?(e.ring.push(u),i(e.ring)):l[n.start]=h[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete l[e.start],e.ring.unshift(r),l[e.start=c]=e):l[c]=h[s]={start:c,end:s,ring:[r,u]}}d[s<<3].forEach(p)}(n,r,function(t){s(t,n,r),o(t)>0?i.push([t]):a.push(t)}),a.forEach(function(t){for(var e,n=0,r=i.length;n<r;++n)if(-1!==c((e=i[n])[0],t))return void e.push(t)}),{type:"MultiPolygon",value:r,coordinates:i}}function g(e){return 2*e[0]+e[1]*(t+1)*4}function p(n,r,i){n.forEach(function(n){var a,o=n[0],u=n[1],c=0|o,s=0|u,f=r[s*t+c];o>0&&o<t&&c===o&&(a=r[s*t+c-1],n[0]=o+(i-a)/(f-a)-.5),u>0&&u<e&&s===u&&(a=r[(s-1)*t+c],n[1]=u+(i-a)/(f-a)-.5)})}return f.contour=h,f.size=function(n){if(!arguments.length)return[t,e];var r=Math.ceil(n[0]),i=Math.ceil(n[1]);if(!(r>0&&i>0))throw new Error("invalid size");return t=r,e=i,f},f.thresholds=function(t){return arguments.length?(n="function"==typeof t?t:Array.isArray(t)?u(i.call(t)):u(t),f):n},f.smooth=function(t){return arguments.length?(s=t?p:l,f):s===p},f};function g(t,e,n){for(var r=t.width,i=t.height,a=1+(n<<1),o=0;o<i;++o)for(var u=0,c=0;u<r+n;++u)u<r&&(c+=t.data[u+o*r]),u>=n&&(u>=a&&(c-=t.data[u-a+o*r]),e.data[u-n+o*r]=c/Math.min(u+1,r-1+a-u,a))}function p(t,e,n){for(var r=t.width,i=t.height,a=1+(n<<1),o=0;o<r;++o)for(var u=0,c=0;u<i+n;++u)u<i&&(c+=t.data[o+u*r]),u>=n&&(u>=a&&(c-=t.data[o+(u-a)*r]),e.data[o+(u-n)*r]=c/Math.min(u+1,i-1+a-u,a))}function _(t){return t[0]}function y(t){return t[1]}var v=function(){var t=_,e=y,n=960,a=500,o=20,c=2,s=3*o,f=n+2*s>>c,l=a+2*s>>c,d=u(20);function v(n){var i=new Float32Array(f*l),a=new Float32Array(f*l);n.forEach(function(n,r,a){var o=t(n,r,a)+s>>c,u=e(n,r,a)+s>>c;o>=0&&o<f&&u>=0&&u<l&&++i[o+u*f]}),g({width:f,height:l,data:i},{width:f,height:l,data:a},o>>c),p({width:f,height:l,data:a},{width:f,height:l,data:i},o>>c),g({width:f,height:l,data:i},{width:f,height:l,data:a},o>>c),p({width:f,height:l,data:a},{width:f,height:l,data:i},o>>c),g({width:f,height:l,data:i},{width:f,height:l,data:a},o>>c),p({width:f,height:l,data:a},{width:f,height:l,data:i},o>>c);var u=d(i);if(!Array.isArray(u)){var _=Object(r.k)(i);u=Object(r.A)(0,_,u),(u=Object(r.s)(0,Math.floor(_/u)*u,u)).shift()}return h().thresholds(u).size([f,l])(i).map(x)}function x(t){return t.value*=Math.pow(2,-2*c),t.coordinates.forEach(m),t}function m(t){t.forEach(b)}function b(t){t.forEach(w)}function w(t){t[0]=t[0]*Math.pow(2,c)-s,t[1]=t[1]*Math.pow(2,c)-s}function S(){return f=n+2*(s=3*o)>>c,l=a+2*s>>c,v}return v.x=function(e){return arguments.length?(t="function"==typeof e?e:u(+e),v):t},v.y=function(t){return arguments.length?(e="function"==typeof t?t:u(+t),v):e},v.size=function(t){if(!arguments.length)return[n,a];var e=Math.ceil(t[0]),r=Math.ceil(t[1]);if(!(e>=0||e>=0))throw new Error("invalid size");return n=e,a=r,S()},v.cellSize=function(t){if(!arguments.length)return 1<<c;if(!((t=+t)>=1))throw new Error("invalid cell size");return c=Math.floor(Math.log(t)/Math.LN2),S()},v.thresholds=function(t){return arguments.length?(d="function"==typeof t?t:Array.isArray(t)?u(i.call(t)):u(t),v):d},v.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),S()},v};n.d(e,"b",function(){return h}),n.d(e,"a",function(){return v})},function(t,e,n){"use strict";var r=function(t){return function(){return t}};function i(t){return t[0]}function a(t){return t[1]}function o(){this._=null}function u(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function c(t,e){var n=e,r=e.R,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}function s(t,e){var n=e,r=e.L,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}function f(t){for(;t.L;)t=t.L;return t}o.prototype={constructor:o,insert:function(t,e){var n,r,i;if(t){if(e.P=t,e.N=t.N,t.N&&(t.N.P=e),t.N=e,t.R){for(t=t.R;t.L;)t=t.L;t.L=e}else t.R=e;n=t}else this._?(t=f(this._),e.P=null,e.N=t,t.P=t.L=e,n=t):(e.P=e.N=null,this._=e,n=null);for(e.L=e.R=null,e.U=n,e.C=!0,t=e;n&&n.C;)n===(r=n.U).L?(i=r.R)&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.R&&(c(this,n),n=(t=n).U),n.C=!1,r.C=!0,s(this,r)):(i=r.L)&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.L&&(s(this,n),n=(t=n).U),n.C=!1,r.C=!0,c(this,r)),n=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var e,n,r,i=t.U,a=t.L,o=t.R;if(n=a?o?f(o):a:o,i?i.L===t?i.L=n:i.R=n:this._=n,a&&o?(r=n.C,n.C=t.C,n.L=a,a.U=n,n!==o?(i=n.U,n.U=t.U,t=n.R,i.L=t,n.R=o,o.U=n):(n.U=i,i=n,t=n.R)):(r=t.C,t=n),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((e=i.R).C&&(e.C=!1,i.C=!0,c(this,i),e=i.R),e.L&&e.L.C||e.R&&e.R.C){e.R&&e.R.C||(e.L.C=!1,e.C=!0,s(this,e),e=i.R),e.C=i.C,i.C=e.R.C=!1,c(this,i),t=this._;break}}else if((e=i.L).C&&(e.C=!1,i.C=!0,s(this,i),e=i.L),e.L&&e.L.C||e.R&&e.R.C){e.L&&e.L.C||(e.R.C=!1,e.C=!0,c(this,e),e=i.L),e.C=i.C,i.C=e.L.C=!1,s(this,i),t=this._;break}e.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var l=o;function d(t,e,n,r){var i=[null,null],a=V.push(i)-1;return i.left=t,i.right=e,n&&g(i,t,e,n),r&&g(i,e,t,r),k[t.index].halfedges.push(a),k[e.index].halfedges.push(a),i}function h(t,e,n){var r=[e,n];return r.left=t,r}function g(t,e,n,r){t[0]||t[1]?t.left===n?t[1]=r:t[0]=r:(t[0]=r,t.left=e,t.right=n)}function p(t,e,n,r,i){var a,o=t[0],u=t[1],c=o[0],s=o[1],f=0,l=1,d=u[0]-c,h=u[1]-s;if(a=e-c,d||!(a>0)){if(a/=d,d<0){if(a<f)return;a<l&&(l=a)}else if(d>0){if(a>l)return;a>f&&(f=a)}if(a=r-c,d||!(a<0)){if(a/=d,d<0){if(a>l)return;a>f&&(f=a)}else if(d>0){if(a<f)return;a<l&&(l=a)}if(a=n-s,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<l&&(l=a)}else if(h>0){if(a>l)return;a>f&&(f=a)}if(a=i-s,h||!(a<0)){if(a/=h,h<0){if(a>l)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<l&&(l=a)}return!(f>0||l<1)||(f>0&&(t[0]=[c+f*d,s+f*h]),l<1&&(t[1]=[c+l*d,s+l*h]),!0)}}}}}function _(t,e,n,r,i){var a=t[1];if(a)return!0;var o,u,c=t[0],s=t.left,f=t.right,l=s[0],d=s[1],h=f[0],g=f[1],p=(l+h)/2,_=(d+g)/2;if(g===d){if(p<e||p>=r)return;if(l>h){if(c){if(c[1]>=i)return}else c=[p,n];a=[p,i]}else{if(c){if(c[1]<n)return}else c=[p,i];a=[p,n]}}else if(u=_-(o=(l-h)/(g-d))*p,o<-1||o>1)if(l>h){if(c){if(c[1]>=i)return}else c=[(n-u)/o,n];a=[(i-u)/o,i]}else{if(c){if(c[1]<n)return}else c=[(i-u)/o,i];a=[(n-u)/o,n]}else if(d<g){if(c){if(c[0]>=r)return}else c=[e,o*e+u];a=[r,o*r+u]}else{if(c){if(c[0]<e)return}else c=[r,o*r+u];a=[e,o*e+u]}return t[0]=c,t[1]=a,!0}function y(t,e){var n=t.site,r=e.left,i=e.right;return n===i&&(i=r,r=n),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(n===r?(r=e[1],i=e[0]):(r=e[0],i=e[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function v(t,e){return e[+(e.left!==t.site)]}function x(t,e){return e[+(e.left===t.site)]}var m,b=[];function w(t){var e=t.P,n=t.N;if(e&&n){var r=e.site,i=t.site,a=n.site;if(r!==a){var o=i[0],c=i[1],s=r[0]-o,f=r[1]-c,l=a[0]-o,d=a[1]-c,h=2*(s*d-f*l);if(!(h>=-I)){var g=s*s+f*f,p=l*l+d*d,_=(d*g-f*p)/h,y=(s*p-l*g)/h,v=b.pop()||new function(){u(this),this.x=this.y=this.arc=this.site=this.cy=null};v.arc=t,v.site=i,v.x=_+o,v.y=(v.cy=y+c)+Math.sqrt(_*_+y*y),t.circle=v;for(var x=null,w=G._;w;)if(v.y<w.y||v.y===w.y&&v.x<=w.x){if(!w.L){x=w.P;break}w=w.L}else{if(!w.R){x=w;break}w=w.R}G.insert(x,v),x||(m=v)}}}}function S(t){var e=t.circle;e&&(e.P||(m=e.N),G.remove(e),b.push(e),u(e),t.circle=null)}var A=[];function T(t){var e=A.pop()||new function(){u(this),this.edge=this.site=this.circle=null};return e.site=t,e}function P(t){S(t),E.remove(t),A.push(t),u(t)}function C(t){var e=t.circle,n=e.x,r=e.cy,i=[n,r],a=t.P,o=t.N,u=[t];P(t);for(var c=a;c.circle&&Math.abs(n-c.circle.x)<R&&Math.abs(r-c.circle.cy)<R;)a=c.P,u.unshift(c),P(c),c=a;u.unshift(c),S(c);for(var s=o;s.circle&&Math.abs(n-s.circle.x)<R&&Math.abs(r-s.circle.cy)<R;)o=s.N,u.push(s),P(s),s=o;u.push(s),S(s);var f,l=u.length;for(f=1;f<l;++f)s=u[f],c=u[f-1],g(s.edge,c.site,s.site,i);c=u[0],(s=u[l-1]).edge=d(c.site,s.site,null,i),w(c),w(s)}function M(t){for(var e,n,r,i,a=t[0],o=t[1],u=E._;u;)if((r=L(u,o)-a)>R)u=u.L;else{if(!((i=a-O(u,o))>R)){r>-R?(e=u.P,n=u):i>-R?(e=u,n=u.N):e=n=u;break}if(!u.R){e=u;break}u=u.R}!function(t){k[t.index]={site:t,halfedges:[]}}(t);var c=T(t);if(E.insert(e,c),e||n){if(e===n)return S(e),n=T(e.site),E.insert(c,n),c.edge=n.edge=d(e.site,c.site),w(e),void w(n);if(n){S(e),S(n);var s=e.site,f=s[0],l=s[1],h=t[0]-f,p=t[1]-l,_=n.site,y=_[0]-f,v=_[1]-l,x=2*(h*v-p*y),m=h*h+p*p,b=y*y+v*v,A=[(v*m-p*b)/x+f,(h*b-y*m)/x+l];g(n.edge,s,_,A),c.edge=d(s,t,null,A),n.edge=d(t,_,null,A),w(e),w(n)}else c.edge=d(e.site,c.site)}}function L(t,e){var n=t.site,r=n[0],i=n[1],a=i-e;if(!a)return r;var o=t.P;if(!o)return-1/0;var u=(n=o.site)[0],c=n[1],s=c-e;if(!s)return u;var f=u-r,l=1/a-1/s,d=f/s;return l?(-d+Math.sqrt(d*d-2*l*(f*f/(-2*s)-c+s/2+i-a/2)))/l+r:(r+u)/2}function O(t,e){var n=t.N;if(n)return L(n,e);var r=t.site;return r[1]===e?r[0]:1/0}var E,k,G,V,R=1e-6,I=1e-12;function D(t,e){return e[1]-t[1]||e[0]-t[0]}function N(t,e){var n,r,i,a=t.sort(D).pop();for(V=[],k=new Array(t.length),E=new l,G=new l;;)if(i=m,a&&(!i||a[1]<i.y||a[1]===i.y&&a[0]<i.x))a[0]===n&&a[1]===r||(M(a),n=a[0],r=a[1]),a=t.pop();else{if(!i)break;C(i.arc)}if(function(){for(var t,e,n,r,i=0,a=k.length;i<a;++i)if((t=k[i])&&(r=(e=t.halfedges).length)){var o=new Array(r),u=new Array(r);for(n=0;n<r;++n)o[n]=n,u[n]=y(t,V[e[n]]);for(o.sort(function(t,e){return u[e]-u[t]}),n=0;n<r;++n)u[n]=e[o[n]];for(n=0;n<r;++n)e[n]=u[n]}}(),e){var o=+e[0][0],u=+e[0][1],c=+e[1][0],s=+e[1][1];!function(t,e,n,r){for(var i,a=V.length;a--;)_(i=V[a],t,e,n,r)&&p(i,t,e,n,r)&&(Math.abs(i[0][0]-i[1][0])>R||Math.abs(i[0][1]-i[1][1])>R)||delete V[a]}(o,u,c,s),function(t,e,n,r){var i,a,o,u,c,s,f,l,d,g,p,_,y=k.length,m=!0;for(i=0;i<y;++i)if(a=k[i]){for(o=a.site,u=(c=a.halfedges).length;u--;)V[c[u]]||c.splice(u,1);for(u=0,s=c.length;u<s;)p=(g=x(a,V[c[u]]))[0],_=g[1],l=(f=v(a,V[c[++u%s]]))[0],d=f[1],(Math.abs(p-l)>R||Math.abs(_-d)>R)&&(c.splice(u,0,V.push(h(o,g,Math.abs(p-t)<R&&r-_>R?[t,Math.abs(l-t)<R?d:r]:Math.abs(_-r)<R&&n-p>R?[Math.abs(d-r)<R?l:n,r]:Math.abs(p-n)<R&&_-e>R?[n,Math.abs(l-n)<R?d:e]:Math.abs(_-e)<R&&p-t>R?[Math.abs(d-e)<R?l:t,e]:null))-1),++s);s&&(m=!1)}if(m){var b,w,S,A=1/0;for(i=0,m=null;i<y;++i)(a=k[i])&&(S=(b=(o=a.site)[0]-t)*b+(w=o[1]-e)*w)<A&&(A=S,m=a);if(m){var T=[t,e],P=[t,r],C=[n,r],M=[n,e];m.halfedges.push(V.push(h(o=m.site,T,P))-1,V.push(h(o,P,C))-1,V.push(h(o,C,M))-1,V.push(h(o,M,T))-1)}}for(i=0;i<y;++i)(a=k[i])&&(a.halfedges.length||delete k[i])}(o,u,c,s)}this.edges=V,this.cells=k,E=G=V=k=null}N.prototype={constructor:N,polygons:function(){var t=this.edges;return this.cells.map(function(e){var n=e.halfedges.map(function(n){return v(e,t[n])});return n.data=e.site.data,n})},triangles:function(){var t=[],e=this.edges;return this.cells.forEach(function(n,r){if(a=(i=n.halfedges).length)for(var i,a,o,u,c,s,f=n.site,l=-1,d=e[i[a-1]],h=d.left===f?d.right:d.left;++l<a;)o=h,h=(d=e[i[l]]).left===f?d.right:d.left,o&&h&&r<o.index&&r<h.index&&(c=o,s=h,((u=f)[0]-s[0])*(c[1]-u[1])-(u[0]-c[0])*(s[1]-u[1])<0)&&t.push([f.data,o.data,h.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,e,n){for(var r,i,a=this,o=a._found||0,u=a.cells.length;!(i=a.cells[o]);)if(++o>=u)return null;var c=t-i.site[0],s=e-i.site[1],f=c*c+s*s;do{i=a.cells[r=o],o=null,i.halfedges.forEach(function(n){var r=a.edges[n],u=r.left;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],s=e-u[1],l=c*c+s*s;l<f&&(f=l,o=u.index)}})}while(null!==o);return a._found=r,null==n||f<=n*n?i.site:null}};var F=function(){var t=i,e=a,n=null;function o(r){return new N(r.map(function(n,i){var a=[Math.round(t(n,i,r)/R)*R,Math.round(e(n,i,r)/R)*R];return a.index=i,a.data=n,a}),n)}return o.polygons=function(t){return o(t).polygons()},o.links=function(t){return o(t).links()},o.triangles=function(t){return o(t).triangles()},o.x=function(e){return arguments.length?(t="function"==typeof e?e:r(+e),o):t},o.y=function(t){return arguments.length?(e="function"==typeof t?t:r(+t),o):e},o.extent=function(t){return arguments.length?(n=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],o):n&&[[n[0][0],n[0][1]],[n[1][0],n[1][1]]]},o.size=function(t){return arguments.length?(n=null==t?null:[[0,0],[+t[0],+t[1]]],o):n&&[n[1][0]-n[0][0],n[1][1]-n[0][1]]},o};n.d(e,"a",function(){return F})},function(t,e,n){"use strict";var r=function(t,e){var n;function r(){var r,i,a=n.length,o=0,u=0;for(r=0;r<a;++r)o+=(i=n[r]).x,u+=i.y;for(o=o/a-t,u=u/a-e,r=0;r<a;++r)(i=n[r]).x-=o,i.y-=u}return null==t&&(t=0),null==e&&(e=0),r.initialize=function(t){n=t},r.x=function(e){return arguments.length?(t=+e,r):t},r.y=function(t){return arguments.length?(e=+t,r):e},r},i=function(t){return function(){return t}},a=function(){return 1e-6*(Math.random()-.5)},o=n(14);function u(t){return t.x+t.vx}function c(t){return t.y+t.vy}var s=function(t){var e,n,r=1,s=1;function f(){for(var t,i,f,d,h,g,p,_=e.length,y=0;y<s;++y)for(i=Object(o.a)(e,u,c).visitAfter(l),t=0;t<_;++t)f=e[t],g=n[f.index],p=g*g,d=f.x+f.vx,h=f.y+f.vy,i.visit(v);function v(t,e,n,i,o){var u=t.data,c=t.r,s=g+c;if(!u)return e>d+s||i<d-s||n>h+s||o<h-s;if(u.index>f.index){var l=d-u.x-u.vx,_=h-u.y-u.vy,y=l*l+_*_;y<s*s&&(0===l&&(y+=(l=a())*l),0===_&&(y+=(_=a())*_),y=(s-(y=Math.sqrt(y)))/y*r,f.vx+=(l*=y)*(s=(c*=c)/(p+c)),f.vy+=(_*=y)*s,u.vx-=l*(s=1-s),u.vy-=_*s)}}}function l(t){if(t.data)return t.r=n[t.data.index];for(var e=t.r=0;e<4;++e)t[e]&&t[e].r>t.r&&(t.r=t[e].r)}function d(){if(e){var r,i,a=e.length;for(n=new Array(a),r=0;r<a;++r)i=e[r],n[i.index]=+t(i,r,e)}}return"function"!=typeof t&&(t=i(null==t?1:+t)),f.initialize=function(t){e=t,d()},f.iterations=function(t){return arguments.length?(s=+t,f):s},f.strength=function(t){return arguments.length?(r=+t,f):r},f.radius=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),d(),f):t},f},f=n(10);function l(t){return t.index}function d(t,e){var n=t.get(e);if(!n)throw new Error("missing: "+e);return n}var h=function(t){var e,n,r,o,u,c=l,s=function(t){return 1/Math.min(o[t.source.index],o[t.target.index])},h=i(30),g=1;function p(r){for(var i=0,o=t.length;i<g;++i)for(var c,s,f,l,d,h,p,_=0;_<o;++_)s=(c=t[_]).source,l=(f=c.target).x+f.vx-s.x-s.vx||a(),d=f.y+f.vy-s.y-s.vy||a(),l*=h=((h=Math.sqrt(l*l+d*d))-n[_])/h*r*e[_],d*=h,f.vx-=l*(p=u[_]),f.vy-=d*p,s.vx+=l*(p=1-p),s.vy+=d*p}function _(){if(r){var i,a,s=r.length,l=t.length,h=Object(f.c)(r,c);for(i=0,o=new Array(s);i<l;++i)(a=t[i]).index=i,"object"!=typeof a.source&&(a.source=d(h,a.source)),"object"!=typeof a.target&&(a.target=d(h,a.target)),o[a.source.index]=(o[a.source.index]||0)+1,o[a.target.index]=(o[a.target.index]||0)+1;for(i=0,u=new Array(l);i<l;++i)a=t[i],u[i]=o[a.source.index]/(o[a.source.index]+o[a.target.index]);e=new Array(l),y(),n=new Array(l),v()}}function y(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+s(t[n],n,t)}function v(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+h(t[e],e,t)}return null==t&&(t=[]),p.initialize=function(t){r=t,_()},p.links=function(e){return arguments.length?(t=e,_(),p):t},p.id=function(t){return arguments.length?(c=t,p):c},p.iterations=function(t){return arguments.length?(g=+t,p):g},p.strength=function(t){return arguments.length?(s="function"==typeof t?t:i(+t),y(),p):s},p.distance=function(t){return arguments.length?(h="function"==typeof t?t:i(+t),v(),p):h},p},g=n(6),p=n(8);function _(t){return t.x}function y(t){return t.y}var v=10,x=Math.PI*(3-Math.sqrt(5)),m=function(t){var e,n=1,r=.001,i=1-Math.pow(r,1/300),a=0,o=.6,u=Object(f.c)(),c=Object(p.d)(l),s=Object(g.a)("tick","end");function l(){d(),s.call("tick",e),n<r&&(c.stop(),s.call("end",e))}function d(){var e,r,c=t.length;for(n+=(a-n)*i,u.each(function(t){t(n)}),e=0;e<c;++e)null==(r=t[e]).fx?r.x+=r.vx*=o:(r.x=r.fx,r.vx=0),null==r.fy?r.y+=r.vy*=o:(r.y=r.fy,r.vy=0)}function h(){for(var e,n=0,r=t.length;n<r;++n){if((e=t[n]).index=n,isNaN(e.x)||isNaN(e.y)){var i=v*Math.sqrt(n),a=n*x;e.x=i*Math.cos(a),e.y=i*Math.sin(a)}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0)}}function _(e){return e.initialize&&e.initialize(t),e}return null==t&&(t=[]),h(),e={tick:d,restart:function(){return c.restart(l),e},stop:function(){return c.stop(),e},nodes:function(n){return arguments.length?(t=n,h(),u.each(_),e):t},alpha:function(t){return arguments.length?(n=+t,e):n},alphaMin:function(t){return arguments.length?(r=+t,e):r},alphaDecay:function(t){return arguments.length?(i=+t,e):+i},alphaTarget:function(t){return arguments.length?(a=+t,e):a},velocityDecay:function(t){return arguments.length?(o=1-t,e):1-o},force:function(t,n){return arguments.length>1?(null==n?u.remove(t):u.set(t,_(n)),e):u.get(t)},find:function(e,n,r){var i,a,o,u,c,s=0,f=t.length;for(null==r?r=1/0:r*=r,s=0;s<f;++s)(o=(i=e-(u=t[s]).x)*i+(a=n-u.y)*a)<r&&(c=u,r=o);return c},on:function(t,n){return arguments.length>1?(s.on(t,n),e):s.on(t)}}},b=function(){var t,e,n,r,u=i(-30),c=1,s=1/0,f=.81;function l(r){var i,a=t.length,u=Object(o.a)(t,_,y).visitAfter(h);for(n=r,i=0;i<a;++i)e=t[i],u.visit(g)}function d(){if(t){var e,n,i=t.length;for(r=new Array(i),e=0;e<i;++e)n=t[e],r[n.index]=+u(n,e,t)}}function h(t){var e,n,i,a,o,u=0,c=0;if(t.length){for(i=a=o=0;o<4;++o)(e=t[o])&&(n=Math.abs(e.value))&&(u+=e.value,c+=n,i+=n*e.x,a+=n*e.y);t.x=i/c,t.y=a/c}else{(e=t).x=e.data.x,e.y=e.data.y;do{u+=r[e.data.index]}while(e=e.next)}t.value=u}function g(t,i,o,u){if(!t.value)return!0;var l=t.x-e.x,d=t.y-e.y,h=u-i,g=l*l+d*d;if(h*h/f<g)return g<s&&(0===l&&(g+=(l=a())*l),0===d&&(g+=(d=a())*d),g<c&&(g=Math.sqrt(c*g)),e.vx+=l*t.value*n/g,e.vy+=d*t.value*n/g),!0;if(!(t.length||g>=s)){(t.data!==e||t.next)&&(0===l&&(g+=(l=a())*l),0===d&&(g+=(d=a())*d),g<c&&(g=Math.sqrt(c*g)));do{t.data!==e&&(h=r[t.data.index]*n/g,e.vx+=l*h,e.vy+=d*h)}while(t=t.next)}}return l.initialize=function(e){t=e,d()},l.strength=function(t){return arguments.length?(u="function"==typeof t?t:i(+t),d(),l):u},l.distanceMin=function(t){return arguments.length?(c=t*t,l):Math.sqrt(c)},l.distanceMax=function(t){return arguments.length?(s=t*t,l):Math.sqrt(s)},l.theta=function(t){return arguments.length?(f=t*t,l):Math.sqrt(f)},l},w=function(t,e,n){var r,a,o,u=i(.1);function c(t){for(var i=0,u=r.length;i<u;++i){var c=r[i],s=c.x-e||1e-6,f=c.y-n||1e-6,l=Math.sqrt(s*s+f*f),d=(o[i]-l)*a[i]*t/l;c.vx+=s*d,c.vy+=f*d}}function s(){if(r){var e,n=r.length;for(a=new Array(n),o=new Array(n),e=0;e<n;++e)o[e]=+t(r[e],e,r),a[e]=isNaN(o[e])?0:+u(r[e],e,r)}}return"function"!=typeof t&&(t=i(+t)),null==e&&(e=0),null==n&&(n=0),c.initialize=function(t){r=t,s()},c.strength=function(t){return arguments.length?(u="function"==typeof t?t:i(+t),s(),c):u},c.radius=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),s(),c):t},c.x=function(t){return arguments.length?(e=+t,c):e},c.y=function(t){return arguments.length?(n=+t,c):n},c},S=function(t){var e,n,r,a=i(.1);function o(t){for(var i,a=0,o=e.length;a<o;++a)(i=e[a]).vx+=(r[a]-i.x)*n[a]*t}function u(){if(e){var i,o=e.length;for(n=new Array(o),r=new Array(o),i=0;i<o;++i)n[i]=isNaN(r[i]=+t(e[i],i,e))?0:+a(e[i],i,e)}}return"function"!=typeof t&&(t=i(null==t?0:+t)),o.initialize=function(t){e=t,u()},o.strength=function(t){return arguments.length?(a="function"==typeof t?t:i(+t),u(),o):a},o.x=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),u(),o):t},o},A=function(t){var e,n,r,a=i(.1);function o(t){for(var i,a=0,o=e.length;a<o;++a)(i=e[a]).vy+=(r[a]-i.y)*n[a]*t}function u(){if(e){var i,o=e.length;for(n=new Array(o),r=new Array(o),i=0;i<o;++i)n[i]=isNaN(r[i]=+t(e[i],i,e))?0:+a(e[i],i,e)}}return"function"!=typeof t&&(t=i(null==t?0:+t)),o.initialize=function(t){e=t,u()},o.strength=function(t){return arguments.length?(a="function"==typeof t?t:i(+t),u(),o):a},o.y=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),u(),o):t},o};n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return h}),n.d(e,"d",function(){return b}),n.d(e,"e",function(){return w}),n.d(e,"f",function(){return m}),n.d(e,"g",function(){return S}),n.d(e,"h",function(){return A})},function(t,e,n){"use strict";var r=n(1),i=n(10),a=Array.prototype,o=a.map,u=a.slice,c={name:"implicit"};function s(t){var e=Object(i.c)(),n=[],r=c;function a(i){var a=i+"",o=e.get(a);if(!o){if(r!==c)return r;e.set(a,o=n.push(i))}return t[(o-1)%t.length]}return t=null==t?[]:u.call(t),a.domain=function(t){if(!arguments.length)return n.slice();n=[],e=Object(i.c)();for(var r,o,u=-1,c=t.length;++u<c;)e.has(o=(r=t[u])+"")||e.set(o,n.push(r));return a},a.range=function(e){return arguments.length?(t=u.call(e),a):t.slice()},a.unknown=function(t){return arguments.length?(r=t,a):r},a.copy=function(){return s().domain(n).range(t).unknown(r)},a}function f(){var t,e,n=s().unknown(void 0),i=n.domain,a=n.range,o=[0,1],u=!1,c=0,l=0,d=.5;function h(){var n=i().length,s=o[1]<o[0],f=o[s-0],h=o[1-s];t=(h-f)/Math.max(1,n-c+2*l),u&&(t=Math.floor(t)),f+=(h-f-t*(n-c))*d,e=t*(1-c),u&&(f=Math.round(f),e=Math.round(e));var g=Object(r.s)(n).map(function(e){return f+t*e});return a(s?g.reverse():g)}return delete n.unknown,n.domain=function(t){return arguments.length?(i(t),h()):i()},n.range=function(t){return arguments.length?(o=[+t[0],+t[1]],h()):o.slice()},n.rangeRound=function(t){return o=[+t[0],+t[1]],u=!0,h()},n.bandwidth=function(){return e},n.step=function(){return t},n.round=function(t){return arguments.length?(u=!!t,h()):u},n.padding=function(t){return arguments.length?(c=l=Math.max(0,Math.min(1,t)),h()):c},n.paddingInner=function(t){return arguments.length?(c=Math.max(0,Math.min(1,t)),h()):c},n.paddingOuter=function(t){return arguments.length?(l=Math.max(0,Math.min(1,t)),h()):l},n.align=function(t){return arguments.length?(d=Math.max(0,Math.min(1,t)),h()):d},n.copy=function(){return f().domain(i()).range(o).round(u).paddingInner(c).paddingOuter(l).align(d)},h()}function l(){return function t(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return t(n())},e}(f().paddingInner(1))}var d=n(4),h=function(t){return function(){return t}},g=function(t){return+t},p=[0,1];function _(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:h(e)}function y(t,e,n,r){var i=t[0],a=t[1],o=e[0],u=e[1];return a<i?(i=n(a,i),o=r(u,o)):(i=n(i,a),o=r(o,u)),function(t){return o(i(t))}}function v(t,e,n,i){var a=Math.min(t.length,e.length)-1,o=new Array(a),u=new Array(a),c=-1;for(t[a]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++c<a;)o[c]=n(t[c],t[c+1]),u[c]=i(e[c],e[c+1]);return function(e){var n=Object(r.b)(t,e,1,a)-1;return u[n](o[n](e))}}function x(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function m(t,e){var n,r,i,a=p,c=p,s=d.a,f=!1;function l(){return n=Math.min(a.length,c.length)>2?v:y,r=i=null,h}function h(e){return(r||(r=n(a,c,f?function(t){return function(e,n){var r=t(e=+e,n=+n);return function(t){return t<=e?0:t>=n?1:r(t)}}}(t):t,s)))(+e)}return h.invert=function(t){return(i||(i=n(c,a,_,f?function(t){return function(e,n){var r=t(e=+e,n=+n);return function(t){return t<=0?e:t>=1?n:r(t)}}}(e):e)))(+t)},h.domain=function(t){return arguments.length?(a=o.call(t,g),l()):a.slice()},h.range=function(t){return arguments.length?(c=u.call(t),l()):c.slice()},h.rangeRound=function(t){return c=u.call(t),s=d.r,l()},h.clamp=function(t){return arguments.length?(f=!!t,l()):f},h.interpolate=function(t){return arguments.length?(s=t,l()):s},l()}var b=n(9),w=function(t,e,n){var i,a=t[0],o=t[t.length-1],u=Object(r.A)(a,o,null==e?10:e);switch((n=Object(b.e)(null==n?",f":n)).type){case"s":var c=Math.max(Math.abs(a),Math.abs(o));return null!=n.precision||isNaN(i=Object(b.g)(u,c))||(n.precision=i),Object(b.d)(n,c);case"":case"e":case"g":case"p":case"r":null!=n.precision||isNaN(i=Object(b.h)(u,Math.max(Math.abs(a),Math.abs(o))))||(n.precision=i-("e"===n.type));break;case"f":case"%":null!=n.precision||isNaN(i=Object(b.f)(u))||(n.precision=i-2*("%"===n.type))}return Object(b.a)(n)};function S(t){var e=t.domain;return t.ticks=function(t){var n=e();return Object(r.B)(n[0],n[n.length-1],null==t?10:t)},t.tickFormat=function(t,n){return w(e(),t,n)},t.nice=function(n){null==n&&(n=10);var i,a=e(),o=0,u=a.length-1,c=a[o],s=a[u];return s<c&&(i=c,c=s,s=i,i=o,o=u,u=i),(i=Object(r.z)(c,s,n))>0?(c=Math.floor(c/i)*i,s=Math.ceil(s/i)*i,i=Object(r.z)(c,s,n)):i<0&&(c=Math.ceil(c*i)/i,s=Math.floor(s*i)/i,i=Object(r.z)(c,s,n)),i>0?(a[o]=Math.floor(c/i)*i,a[u]=Math.ceil(s/i)*i,e(a)):i<0&&(a[o]=Math.ceil(c*i)/i,a[u]=Math.floor(s*i)/i,e(a)),t},t}function A(){var t=m(_,d.m);return t.copy=function(){return x(t,A())},S(t)}function T(){var t=[0,1];function e(t){return+t}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=o.call(n,g),e):t.slice()},e.copy=function(){return T().domain(t)},S(e)}var P=function(t,e){var n,r=0,i=(t=t.slice()).length-1,a=t[r],o=t[i];return o<a&&(n=r,r=i,i=n,n=a,a=o,o=n),t[r]=e.floor(a),t[i]=e.ceil(o),t};function C(t,e){return(e=Math.log(e/t))?function(n){return Math.log(n/t)/e}:h(e)}function M(t,e){return t<0?function(n){return-Math.pow(-e,n)*Math.pow(-t,1-n)}:function(n){return Math.pow(e,n)*Math.pow(t,1-n)}}function L(t){return isFinite(t)?+("1e"+t):t<0?0:t}function O(t){return 10===t?L:t===Math.E?Math.exp:function(e){return Math.pow(t,e)}}function E(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(e){return Math.log(e)/t})}function k(t){return function(e){return-t(-e)}}function G(){var t=m(C,M).domain([1,10]),e=t.domain,n=10,i=E(10),a=O(10);function o(){return i=E(n),a=O(n),e()[0]<0&&(i=k(i),a=k(a)),t}return t.base=function(t){return arguments.length?(n=+t,o()):n},t.domain=function(t){return arguments.length?(e(t),o()):e()},t.ticks=function(t){var o,u=e(),c=u[0],s=u[u.length-1];(o=s<c)&&(h=c,c=s,s=h);var f,l,d,h=i(c),g=i(s),p=null==t?10:+t,_=[];if(!(n%1)&&g-h<p){if(h=Math.round(h)-1,g=Math.round(g)+1,c>0){for(;h<g;++h)for(l=1,f=a(h);l<n;++l)if(!((d=f*l)<c)){if(d>s)break;_.push(d)}}else for(;h<g;++h)for(l=n-1,f=a(h);l>=1;--l)if(!((d=f*l)<c)){if(d>s)break;_.push(d)}}else _=Object(r.B)(h,g,Math.min(g-h,p)).map(a);return o?_.reverse():_},t.tickFormat=function(e,r){if(null==r&&(r=10===n?".0e":","),"function"!=typeof r&&(r=Object(b.a)(r)),e===1/0)return r;null==e&&(e=10);var o=Math.max(1,n*e/t.ticks().length);return function(t){var e=t/a(Math.round(i(t)));return e*n<n-.5&&(e*=n),e<=o?r(t):""}},t.nice=function(){return e(P(e(),{floor:function(t){return a(Math.floor(i(t)))},ceil:function(t){return a(Math.ceil(i(t)))}}))},t.copy=function(){return x(t,G().base(n))},t}function V(t,e){return t<0?-Math.pow(-t,e):Math.pow(t,e)}function R(){var t=1,e=m(function(e,n){return(n=V(n,t)-(e=V(e,t)))?function(r){return(V(r,t)-e)/n}:h(n)},function(e,n){return n=V(n,t)-(e=V(e,t)),function(r){return V(e+n*r,1/t)}}),n=e.domain;return e.exponent=function(e){return arguments.length?(t=+e,n(n())):t},e.copy=function(){return x(e,R().exponent(t))},S(e)}function I(){return R().exponent(.5)}function D(){var t=[],e=[],n=[];function i(){var i=0,o=Math.max(1,e.length);for(n=new Array(o-1);++i<o;)n[i-1]=Object(r.r)(t,i/o);return a}function a(t){if(!isNaN(t=+t))return e[Object(r.b)(n,t)]}return a.invertExtent=function(r){var i=e.indexOf(r);return i<0?[NaN,NaN]:[i>0?n[i-1]:t[0],i<n.length?n[i]:t[t.length-1]]},a.domain=function(e){if(!arguments.length)return t.slice();t=[];for(var n,a=0,o=e.length;a<o;++a)null==(n=e[a])||isNaN(n=+n)||t.push(n);return t.sort(r.a),i()},a.range=function(t){return arguments.length?(e=u.call(t),i()):e.slice()},a.quantiles=function(){return n.slice()},a.copy=function(){return D().domain(t).range(e)},a}function N(){var t=0,e=1,n=1,i=[.5],a=[0,1];function o(t){if(t<=t)return a[Object(r.b)(i,t,0,n)]}function c(){var r=-1;for(i=new Array(n);++r<n;)i[r]=((r+1)*e-(r-n)*t)/(n+1);return o}return o.domain=function(n){return arguments.length?(t=+n[0],e=+n[1],c()):[t,e]},o.range=function(t){return arguments.length?(n=(a=u.call(t)).length-1,c()):a.slice()},o.invertExtent=function(r){var o=a.indexOf(r);return o<0?[NaN,NaN]:o<1?[t,i[0]]:o>=n?[i[n-1],e]:[i[o-1],i[o]]},o.copy=function(){return N().domain([t,e]).range(a)},S(o)}function F(){var t=[.5],e=[0,1],n=1;function i(i){if(i<=i)return e[Object(r.b)(t,i,0,n)]}return i.domain=function(r){return arguments.length?(t=u.call(r),n=Math.min(t.length,e.length-1),i):t.slice()},i.range=function(r){return arguments.length?(e=u.call(r),n=Math.min(t.length,e.length-1),i):e.slice()},i.invertExtent=function(n){var r=e.indexOf(n);return[t[r-1],t[r]]},i.copy=function(){return F().domain(t).range(e)},i}var z=n(2),j=n(13),B=1e3,H=60*B,X=60*H,Y=24*X,U=7*Y,q=30*Y,W=365*Y;function Q(t){return new Date(t)}function Z(t){return t instanceof Date?+t:+new Date(+t)}function K(t,e,n,i,a,u,c,s,f){var l=m(_,d.m),h=l.invert,g=l.domain,p=f(".%L"),y=f(":%S"),v=f("%I:%M"),b=f("%I %p"),w=f("%a %d"),S=f("%b %d"),A=f("%B"),T=f("%Y"),C=[[c,1,B],[c,5,5*B],[c,15,15*B],[c,30,30*B],[u,1,H],[u,5,5*H],[u,15,15*H],[u,30,30*H],[a,1,X],[a,3,3*X],[a,6,6*X],[a,12,12*X],[i,1,Y],[i,2,2*Y],[n,1,U],[e,1,q],[e,3,3*q],[t,1,W]];function M(r){return(c(r)<r?p:u(r)<r?y:a(r)<r?v:i(r)<r?b:e(r)<r?n(r)<r?w:S:t(r)<r?A:T)(r)}function L(e,n,i,a){if(null==e&&(e=10),"number"==typeof e){var o=Math.abs(i-n)/e,u=Object(r.e)(function(t){return t[2]}).right(C,o);u===C.length?(a=Object(r.A)(n/W,i/W,e),e=t):u?(a=(u=C[o/C[u-1][2]<C[u][2]/o?u-1:u])[1],e=u[0]):(a=Math.max(Object(r.A)(n,i,e),1),e=s)}return null==a?e:e.every(a)}return l.invert=function(t){return new Date(h(t))},l.domain=function(t){return arguments.length?g(o.call(t,Z)):g().map(Q)},l.ticks=function(t,e){var n,r=g(),i=r[0],a=r[r.length-1],o=a<i;return o&&(n=i,i=a,a=n),n=(n=L(t,i,a,e))?n.range(i,a+1):[],o?n.reverse():n},l.tickFormat=function(t,e){return null==e?M:f(e)},l.nice=function(t,e){var n=g();return(t=L(t,n[0],n[n.length-1],e))?g(P(n,t)):l},l.copy=function(){return x(l,K(t,e,n,i,a,u,c,s,f))},l}var J=function(){return K(z.D,z.n,z.B,z.a,z.e,z.j,z.r,z.h,j.c).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},$=function(){return K(z.Ha,z.R,z.Fa,z.F,z.J,z.N,z.V,z.L,j.g).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])};function tt(t){var e=0,n=1,r=!1;function i(i){var a=(i-e)/(n-e);return t(r?Math.max(0,Math.min(1,a)):a)}return i.domain=function(t){return arguments.length?(e=+t[0],n=+t[1],i):[e,n]},i.clamp=function(t){return arguments.length?(r=!!t,i):r},i.interpolator=function(e){return arguments.length?(t=e,i):t},i.copy=function(){return tt(t).domain([e,n]).clamp(r)},S(i)}n.d(e,"a",function(){return f}),n.d(e,"g",function(){return l}),n.d(e,"b",function(){return T}),n.d(e,"d",function(){return A}),n.d(e,"e",function(){return G}),n.d(e,"f",function(){return s}),n.d(e,"c",function(){return c}),n.d(e,"h",function(){return R}),n.d(e,"l",function(){return I}),n.d(e,"i",function(){return D}),n.d(e,"j",function(){return N}),n.d(e,"m",function(){return F}),n.d(e,"n",function(){return J}),n.d(e,"o",function(){return $}),n.d(e,"k",function(){return tt})},function(t,e,n){"use strict";function r(t,e){return t.parent===e.parent?1:2}function i(t,e){return t+e.x}function a(t,e){return Math.max(t,e.y)}var o=function(){var t=r,e=1,n=1,o=!1;function u(r){var u,c=0;r.eachAfter(function(e){var n=e.children;n?(e.x=function(t){return t.reduce(i,0)/t.length}(n),e.y=function(t){return 1+t.reduce(a,0)}(n)):(e.x=u?c+=t(e,u):0,e.y=0,u=e)});var s=function(t){for(var e;e=t.children;)t=e[0];return t}(r),f=function(t){for(var e;e=t.children;)t=e[e.length-1];return t}(r),l=s.x-t(s,f)/2,d=f.x+t(f,s)/2;return r.eachAfter(o?function(t){t.x=(t.x-r.x)*e,t.y=(r.y-t.y)*n}:function(t){t.x=(t.x-l)/(d-l)*e,t.y=(1-(r.y?t.y/r.y:1))*n})}return u.separation=function(e){return arguments.length?(t=e,u):t},u.size=function(t){return arguments.length?(o=!1,e=+t[0],n=+t[1],u):o?null:[e,n]},u.nodeSize=function(t){return arguments.length?(o=!0,e=+t[0],n=+t[1],u):o?[e,n]:null},u};function u(t){var e=0,n=t.children,r=n&&n.length;if(r)for(;--r>=0;)e+=n[r].value;else e=1;t.value=e}function c(t,e){var n,r,i,a,o,u=new d(t),c=+t.value&&(u.value=t.value),f=[u];for(null==e&&(e=s);n=f.pop();)if(c&&(n.value=+n.data.value),(i=e(n.data))&&(o=i.length))for(n.children=new Array(o),a=o-1;a>=0;--a)f.push(r=n.children[a]=new d(i[a])),r.parent=n,r.depth=n.depth+1;return u.eachBefore(l)}function s(t){return t.children}function f(t){t.data=t.data.data}function l(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function d(t){this.data=t,this.depth=this.height=0,this.parent=null}d.prototype=c.prototype={constructor:d,count:function(){return this.eachAfter(u)},each:function(t){var e,n,r,i,a=this,o=[a];do{for(e=o.reverse(),o=[];a=e.pop();)if(t(a),n=a.children)for(r=0,i=n.length;r<i;++r)o.push(n[r])}while(o.length);return this},eachAfter:function(t){for(var e,n,r,i=this,a=[i],o=[];i=a.pop();)if(o.push(i),e=i.children)for(n=0,r=e.length;n<r;++n)a.push(e[n]);for(;i=o.pop();)t(i);return this},eachBefore:function(t){for(var e,n,r=this,i=[r];r=i.pop();)if(t(r),e=r.children)for(n=e.length-1;n>=0;--n)i.push(e[n]);return this},sum:function(t){return this.eachAfter(function(e){for(var n=+t(e.data)||0,r=e.children,i=r&&r.length;--i>=0;)n+=r[i].value;e.value=n})},sort:function(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t;var n=t.ancestors(),r=e.ancestors(),i=null;for(t=n.pop(),e=r.pop();t===e;)i=t,t=n.pop(),e=r.pop();return i}(e,t),r=[e];e!==n;)e=e.parent,r.push(e);for(var i=r.length;t!==n;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){var t=[];return this.each(function(e){t.push(e)}),t},leaves:function(){var t=[];return this.eachBefore(function(e){e.children||t.push(e)}),t},links:function(){var t=this,e=[];return t.each(function(n){n!==t&&e.push({source:n.parent,target:n})}),e},copy:function(){return c(this).eachBefore(f)}};var h=Array.prototype.slice;var g=function(t){for(var e,n,r=0,i=(t=function(t){for(var e,n,r=t.length;r;)n=Math.random()*r--|0,e=t[r],t[r]=t[n],t[n]=e;return t}(h.call(t))).length,a=[];r<i;)e=t[r],n&&y(n,e)?++r:(n=x(a=p(a,e)),r=0);return n};function p(t,e){var n,r;if(v(e,t))return[e];for(n=0;n<t.length;++n)if(_(e,t[n])&&v(m(t[n],e),t))return[t[n],e];for(n=0;n<t.length-1;++n)for(r=n+1;r<t.length;++r)if(_(m(t[n],t[r]),e)&&_(m(t[n],e),t[r])&&_(m(t[r],e),t[n])&&v(b(t[n],t[r],e),t))return[t[n],t[r],e];throw new Error}function _(t,e){var n=t.r-e.r,r=e.x-t.x,i=e.y-t.y;return n<0||n*n<r*r+i*i}function y(t,e){var n=t.r-e.r+1e-6,r=e.x-t.x,i=e.y-t.y;return n>0&&n*n>r*r+i*i}function v(t,e){for(var n=0;n<e.length;++n)if(!y(t,e[n]))return!1;return!0}function x(t){switch(t.length){case 1:return{x:(e=t[0]).x,y:e.y,r:e.r};case 2:return m(t[0],t[1]);case 3:return b(t[0],t[1],t[2])}var e}function m(t,e){var n=t.x,r=t.y,i=t.r,a=e.x,o=e.y,u=e.r,c=a-n,s=o-r,f=u-i,l=Math.sqrt(c*c+s*s);return{x:(n+a+c/l*f)/2,y:(r+o+s/l*f)/2,r:(l+i+u)/2}}function b(t,e,n){var r=t.x,i=t.y,a=t.r,o=e.x,u=e.y,c=e.r,s=n.x,f=n.y,l=n.r,d=r-o,h=r-s,g=i-u,p=i-f,_=c-a,y=l-a,v=r*r+i*i-a*a,x=v-o*o-u*u+c*c,m=v-s*s-f*f+l*l,b=h*g-d*p,w=(g*m-p*x)/(2*b)-r,S=(p*_-g*y)/b,A=(h*x-d*m)/(2*b)-i,T=(d*y-h*_)/b,P=S*S+T*T-1,C=2*(a+w*S+A*T),M=w*w+A*A-a*a,L=-(P?(C+Math.sqrt(C*C-4*P*M))/(2*P):M/C);return{x:r+w+S*L,y:i+A+T*L,r:L}}function w(t,e,n){var r,i,a,o,u=t.x-e.x,c=t.y-e.y,s=u*u+c*c;s?(i=e.r+n.r,i*=i,o=t.r+n.r,i>(o*=o)?(r=(s+o-i)/(2*s),a=Math.sqrt(Math.max(0,o/s-r*r)),n.x=t.x-r*u-a*c,n.y=t.y-r*c+a*u):(r=(s+i-o)/(2*s),a=Math.sqrt(Math.max(0,i/s-r*r)),n.x=e.x+r*u-a*c,n.y=e.y+r*c+a*u)):(n.x=e.x+n.r,n.y=e.y)}function S(t,e){var n=t.r+e.r-1e-6,r=e.x-t.x,i=e.y-t.y;return n>0&&n*n>r*r+i*i}function A(t){var e=t._,n=t.next._,r=e.r+n.r,i=(e.x*n.r+n.x*e.r)/r,a=(e.y*n.r+n.y*e.r)/r;return i*i+a*a}function T(t){this._=t,this.next=null,this.previous=null}function P(t){if(!(i=t.length))return 0;var e,n,r,i,a,o,u,c,s,f,l;if((e=t[0]).x=0,e.y=0,!(i>1))return e.r;if(n=t[1],e.x=-n.r,n.x=e.r,n.y=0,!(i>2))return e.r+n.r;w(n,e,r=t[2]),e=new T(e),n=new T(n),r=new T(r),e.next=r.previous=n,n.next=e.previous=r,r.next=n.previous=e;t:for(u=3;u<i;++u){w(e._,n._,r=t[u]),r=new T(r),c=n.next,s=e.previous,f=n._.r,l=e._.r;do{if(f<=l){if(S(c._,r._)){n=c,e.next=n,n.previous=e,--u;continue t}f+=c._.r,c=c.next}else{if(S(s._,r._)){(e=s).next=n,n.previous=e,--u;continue t}l+=s._.r,s=s.previous}}while(c!==s.next);for(r.previous=e,r.next=n,e.next=n.previous=n=r,a=A(e);(r=r.next)!==n;)(o=A(r))<a&&(e=r,a=o);n=e.next}for(e=[n._],r=n;(r=r.next)!==n;)e.push(r._);for(r=g(e),u=0;u<i;++u)(e=t[u]).x-=r.x,e.y-=r.y;return r.r}var C=function(t){return P(t),t};function M(t){if("function"!=typeof t)throw new Error;return t}function L(){return 0}var O=function(t){return function(){return t}};function E(t){return Math.sqrt(t.value)}var k=function(){var t=null,e=1,n=1,r=L;function i(i){return i.x=e/2,i.y=n/2,t?i.eachBefore(G(t)).eachAfter(V(r,.5)).eachBefore(R(1)):i.eachBefore(G(E)).eachAfter(V(L,1)).eachAfter(V(r,i.r/Math.min(e,n))).eachBefore(R(Math.min(e,n)/(2*i.r))),i}return i.radius=function(e){return arguments.length?(t=null==(n=e)?null:M(n),i):t;var n},i.size=function(t){return arguments.length?(e=+t[0],n=+t[1],i):[e,n]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:O(+t),i):r},i};function G(t){return function(e){e.children||(e.r=Math.max(0,+t(e)||0))}}function V(t,e){return function(n){if(r=n.children){var r,i,a,o=r.length,u=t(n)*e||0;if(u)for(i=0;i<o;++i)r[i].r+=u;if(a=P(r),u)for(i=0;i<o;++i)r[i].r-=u;n.r=a+u}}}function R(t){return function(e){var n=e.parent;e.r*=t,n&&(e.x=n.x+t*e.x,e.y=n.y+t*e.y)}}var I=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},D=function(t,e,n,r,i){for(var a,o=t.children,u=-1,c=o.length,s=t.value&&(r-e)/t.value;++u<c;)(a=o[u]).y0=n,a.y1=i,a.x0=e,a.x1=e+=a.value*s},N=function(){var t=1,e=1,n=0,r=!1;function i(i){var a=i.height+1;return i.x0=i.y0=n,i.x1=t,i.y1=e/a,i.eachBefore(function(t,e){return function(r){r.children&&D(r,r.x0,t*(r.depth+1)/e,r.x1,t*(r.depth+2)/e);var i=r.x0,a=r.y0,o=r.x1-n,u=r.y1-n;o<i&&(i=o=(i+o)/2),u<a&&(a=u=(a+u)/2),r.x0=i,r.y0=a,r.x1=o,r.y1=u}}(e,a)),r&&i.eachBefore(I),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(n){return arguments.length?(t=+n[0],e=+n[1],i):[t,e]},i.padding=function(t){return arguments.length?(n=+t,i):n},i},F="$",z={depth:-1},j={};function B(t){return t.id}function H(t){return t.parentId}var X=function(){var t=B,e=H;function n(n){var r,i,a,o,u,c,s,f=n.length,h=new Array(f),g={};for(i=0;i<f;++i)r=n[i],u=h[i]=new d(r),null!=(c=t(r,i,n))&&(c+="")&&(g[s=F+(u.id=c)]=s in g?j:u);for(i=0;i<f;++i)if(u=h[i],null!=(c=e(n[i],i,n))&&(c+="")){if(!(o=g[F+c]))throw new Error("missing: "+c);if(o===j)throw new Error("ambiguous: "+c);o.children?o.children.push(u):o.children=[u],u.parent=o}else{if(a)throw new Error("multiple roots");a=u}if(!a)throw new Error("no root");if(a.parent=z,a.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(l),a.parent=null,f>0)throw new Error("cycle");return a}return n.id=function(e){return arguments.length?(t=M(e),n):t},n.parentId=function(t){return arguments.length?(e=M(t),n):e},n};function Y(t,e){return t.parent===e.parent?1:2}function U(t){var e=t.children;return e?e[0]:t.t}function q(t){var e=t.children;return e?e[e.length-1]:t.t}function W(t,e,n){var r=n/(e.i-t.i);e.c-=r,e.s+=n,t.c+=r,e.z+=n,e.m+=n}function Q(t,e,n){return t.a.parent===e.parent?t.a:n}function Z(t,e){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=e}Z.prototype=Object.create(d.prototype);var K=function(){var t=Y,e=1,n=1,r=null;function i(i){var c=function(t){for(var e,n,r,i,a,o=new Z(t,0),u=[o];e=u.pop();)if(r=e._.children)for(e.children=new Array(a=r.length),i=a-1;i>=0;--i)u.push(n=e.children[i]=new Z(r[i],i)),n.parent=e;return(o.parent=new Z(null,0)).children=[o],o}(i);if(c.eachAfter(a),c.parent.m=-c.z,c.eachBefore(o),r)i.eachBefore(u);else{var s=i,f=i,l=i;i.eachBefore(function(t){t.x<s.x&&(s=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var d=s===f?1:t(s,f)/2,h=d-s.x,g=e/(f.x+d+h),p=n/(l.depth||1);i.eachBefore(function(t){t.x=(t.x+h)*g,t.y=t.depth*p})}return i}function a(e){var n=e.children,r=e.parent.children,i=e.i?r[e.i-1]:null;if(n){!function(t){for(var e,n=0,r=0,i=t.children,a=i.length;--a>=0;)(e=i[a]).z+=n,e.m+=n,n+=e.s+(r+=e.c)}(e);var a=(n[0].z+n[n.length-1].z)/2;i?(e.z=i.z+t(e._,i._),e.m=e.z-a):e.z=a}else i&&(e.z=i.z+t(e._,i._));e.parent.A=function(e,n,r){if(n){for(var i,a=e,o=e,u=n,c=a.parent.children[0],s=a.m,f=o.m,l=u.m,d=c.m;u=q(u),a=U(a),u&&a;)c=U(c),(o=q(o)).a=e,(i=u.z+l-a.z-s+t(u._,a._))>0&&(W(Q(u,e,r),e,i),s+=i,f+=i),l+=u.m,s+=a.m,d+=c.m,f+=o.m;u&&!q(o)&&(o.t=u,o.m+=l-f),a&&!U(c)&&(c.t=a,c.m+=s-d,r=e)}return r}(e,i,e.parent.A||r[0])}function o(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=e,t.y=t.depth*n}return i.separation=function(e){return arguments.length?(t=e,i):t},i.size=function(t){return arguments.length?(r=!1,e=+t[0],n=+t[1],i):r?null:[e,n]},i.nodeSize=function(t){return arguments.length?(r=!0,e=+t[0],n=+t[1],i):r?[e,n]:null},i},J=function(t,e,n,r,i){for(var a,o=t.children,u=-1,c=o.length,s=t.value&&(i-n)/t.value;++u<c;)(a=o[u]).x0=e,a.x1=r,a.y0=n,a.y1=n+=a.value*s},$=(1+Math.sqrt(5))/2;function tt(t,e,n,r,i,a){for(var o,u,c,s,f,l,d,h,g,p,_,y=[],v=e.children,x=0,m=0,b=v.length,w=e.value;x<b;){c=i-n,s=a-r;do{f=v[m++].value}while(!f&&m<b);for(l=d=f,_=f*f*(p=Math.max(s/c,c/s)/(w*t)),g=Math.max(d/_,_/l);m<b;++m){if(f+=u=v[m].value,u<l&&(l=u),u>d&&(d=u),_=f*f*p,(h=Math.max(d/_,_/l))>g){f-=u;break}g=h}y.push(o={value:f,dice:c<s,children:v.slice(x,m)}),o.dice?D(o,n,r,i,w?r+=s*f/w:a):J(o,n,r,w?n+=c*f/w:i,a),w-=f,x=m}return y}var et=function t(e){function n(t,n,r,i,a){tt(e,t,n,r,i,a)}return n.ratio=function(e){return t((e=+e)>1?e:1)},n}($),nt=function(){var t=et,e=!1,n=1,r=1,i=[0],a=L,o=L,u=L,c=L,s=L;function f(t){return t.x0=t.y0=0,t.x1=n,t.y1=r,t.eachBefore(l),i=[0],e&&t.eachBefore(I),t}function l(e){var n=i[e.depth],r=e.x0+n,f=e.y0+n,l=e.x1-n,d=e.y1-n;l<r&&(r=l=(r+l)/2),d<f&&(f=d=(f+d)/2),e.x0=r,e.y0=f,e.x1=l,e.y1=d,e.children&&(n=i[e.depth+1]=a(e)/2,r+=s(e)-n,f+=o(e)-n,l-=u(e)-n,d-=c(e)-n,l<r&&(r=l=(r+l)/2),d<f&&(f=d=(f+d)/2),t(e,r,f,l,d))}return f.round=function(t){return arguments.length?(e=!!t,f):e},f.size=function(t){return arguments.length?(n=+t[0],r=+t[1],f):[n,r]},f.tile=function(e){return arguments.length?(t=M(e),f):t},f.padding=function(t){return arguments.length?f.paddingInner(t).paddingOuter(t):f.paddingInner()},f.paddingInner=function(t){return arguments.length?(a="function"==typeof t?t:O(+t),f):a},f.paddingOuter=function(t){return arguments.length?f.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):f.paddingTop()},f.paddingTop=function(t){return arguments.length?(o="function"==typeof t?t:O(+t),f):o},f.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:O(+t),f):u},f.paddingBottom=function(t){return arguments.length?(c="function"==typeof t?t:O(+t),f):c},f.paddingLeft=function(t){return arguments.length?(s="function"==typeof t?t:O(+t),f):s},f},rt=function(t,e,n,r,i){var a,o,u=t.children,c=u.length,s=new Array(c+1);for(s[0]=o=a=0;a<c;++a)s[a+1]=o+=u[a].value;!function t(e,n,r,i,a,o,c){if(e>=n-1){var f=u[e];return f.x0=i,f.y0=a,f.x1=o,void(f.y1=c)}var l=s[e],d=r/2+l,h=e+1,g=n-1;for(;h<g;){var p=h+g>>>1;s[p]<d?h=p+1:g=p}d-s[h-1]<s[h]-d&&e+1<h&&--h;var _=s[h]-l,y=r-_;if(o-i>c-a){var v=(i*y+o*_)/r;t(e,h,_,i,a,v,c),t(h,n,y,v,a,o,c)}else{var x=(a*y+c*_)/r;t(e,h,_,i,a,o,x),t(h,n,y,i,x,o,c)}}(0,c,t.value,e,n,r,i)},it=function(t,e,n,r,i){(1&t.depth?J:D)(t,e,n,r,i)},at=function t(e){function n(t,n,r,i,a){if((o=t._squarify)&&o.ratio===e)for(var o,u,c,s,f,l=-1,d=o.length,h=t.value;++l<d;){for(c=(u=o[l]).children,s=u.value=0,f=c.length;s<f;++s)u.value+=c[s].value;u.dice?D(u,n,r,i,r+=(a-r)*u.value/h):J(u,n,r,n+=(i-n)*u.value/h,a),h-=u.value}else t._squarify=o=tt(e,t,n,r,i,a),o.ratio=e}return n.ratio=function(e){return t((e=+e)>1?e:1)},n}($);n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return k}),n.d(e,"e",function(){return C}),n.d(e,"d",function(){return g}),n.d(e,"f",function(){return N}),n.d(e,"g",function(){return X}),n.d(e,"h",function(){return K}),n.d(e,"i",function(){return nt}),n.d(e,"j",function(){return rt}),n.d(e,"k",function(){return D}),n.d(e,"m",function(){return J}),n.d(e,"n",function(){return it}),n.d(e,"o",function(){return et}),n.d(e,"l",function(){return at})},function(t,e,n){"use strict";var r=function(t){for(var e=t.length/6|0,n=new Array(e),r=0;r<e;)n[r]="#"+t.slice(6*r,6*++r);return n},i=r("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),a=r("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),o=r("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),u=r("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),c=r("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),s=r("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),f=r("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),l=r("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),d=r("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),h=n(4),g=function(t){return Object(h.p)(t[t.length-1])},p=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(r),_=g(p),y=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(r),v=g(y),x=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(r),m=g(x),b=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(r),w=g(b),S=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(r),A=g(S),T=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(r),P=g(T),C=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(r),M=g(C),L=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(r),O=g(L),E=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(r),k=g(E),G=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(r),V=g(G),R=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(r),I=g(R),D=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(r),N=g(D),F=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(r),z=g(F),j=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(r),B=g(j),H=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(r),X=g(H),Y=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(r),U=g(Y),q=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(r),W=g(q),Q=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(r),Z=g(Q),K=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(r),J=g(K),$=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(r),tt=g($),et=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(r),nt=g(et),rt=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(r),it=g(rt),at=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(r),ot=g(at),ut=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(r),ct=g(ut),st=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(r),ft=g(st),lt=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(r),dt=g(lt),ht=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(r),gt=g(ht),pt=n(3),_t=Object(h.f)(Object(pt.b)(300,.5,0),Object(pt.b)(-240,.5,1)),yt=Object(h.f)(Object(pt.b)(-100,.75,.35),Object(pt.b)(80,1.5,.8)),vt=Object(h.f)(Object(pt.b)(260,.75,.35),Object(pt.b)(80,1.5,.8)),xt=Object(pt.b)(),mt=function(t){(t<0||t>1)&&(t-=Math.floor(t));var e=Math.abs(t-.5);return xt.h=360*t-100,xt.s=1.5-1.5*e,xt.l=.8-.9*e,xt+""},bt=Object(pt.h)(),wt=Math.PI/3,St=2*Math.PI/3,At=function(t){var e;return t=(.5-t)*Math.PI,bt.r=255*(e=Math.sin(t))*e,bt.g=255*(e=Math.sin(t+wt))*e,bt.b=255*(e=Math.sin(t+St))*e,bt+""};function Tt(t){var e=t.length;return function(n){return t[Math.max(0,Math.min(e-1,Math.floor(n*e)))]}}var Pt=Tt(r("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),Ct=Tt(r("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),Mt=Tt(r("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),Lt=Tt(r("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));n.d(e,"P",function(){return i}),n.d(e,"K",function(){return a}),n.d(e,"Q",function(){return o}),n.d(e,"X",function(){return u}),n.d(e,"Y",function(){return c}),n.d(e,"Z",function(){return s}),n.d(e,"Ma",function(){return f}),n.d(e,"Na",function(){return l}),n.d(e,"Oa",function(){return d}),n.d(e,"b",function(){return _}),n.d(e,"M",function(){return p}),n.d(e,"n",function(){return v}),n.d(e,"W",function(){return y}),n.d(e,"o",function(){return m}),n.d(e,"Aa",function(){return x}),n.d(e,"s",function(){return w}),n.d(e,"Da",function(){return b}),n.d(e,"w",function(){return A}),n.d(e,"Ga",function(){return S}),n.d(e,"x",function(){return P}),n.d(e,"Ha",function(){return T}),n.d(e,"z",function(){return M}),n.d(e,"Ja",function(){return C}),n.d(e,"A",function(){return O}),n.d(e,"Ka",function(){return L}),n.d(e,"D",function(){return k}),n.d(e,"Pa",function(){return E}),n.d(e,"c",function(){return V}),n.d(e,"N",function(){return G}),n.d(e,"d",function(){return I}),n.d(e,"O",function(){return R}),n.d(e,"g",function(){return N}),n.d(e,"R",function(){return D}),n.d(e,"l",function(){return z}),n.d(e,"U",function(){return F}),n.d(e,"r",function(){return B}),n.d(e,"Ca",function(){return j}),n.d(e,"q",function(){return X}),n.d(e,"Ba",function(){return H}),n.d(e,"t",function(){return U}),n.d(e,"Ea",function(){return Y}),n.d(e,"y",function(){return W}),n.d(e,"Ia",function(){return q}),n.d(e,"H",function(){return Z}),n.d(e,"Ra",function(){return Q}),n.d(e,"G",function(){return J}),n.d(e,"Qa",function(){return K}),n.d(e,"I",function(){return tt}),n.d(e,"Sa",function(){return $}),n.d(e,"J",function(){return nt}),n.d(e,"Ta",function(){return et}),n.d(e,"a",function(){return it}),n.d(e,"L",function(){return rt}),n.d(e,"h",function(){return ot}),n.d(e,"S",function(){return at}),n.d(e,"i",function(){return ct}),n.d(e,"T",function(){return ut}),n.d(e,"u",function(){return ft}),n.d(e,"Fa",function(){return st}),n.d(e,"B",function(){return dt}),n.d(e,"La",function(){return lt}),n.d(e,"m",function(){return gt}),n.d(e,"V",function(){return ht}),n.d(e,"f",function(){return _t}),n.d(e,"v",function(){return mt}),n.d(e,"F",function(){return yt}),n.d(e,"e",function(){return vt}),n.d(e,"C",function(){return At}),n.d(e,"E",function(){return Pt}),n.d(e,"k",function(){return Ct}),n.d(e,"j",function(){return Mt}),n.d(e,"p",function(){return Lt})},function(t,e,n){"use strict";var r=n(5),i=function(t){return function(){return t}},a=Math.abs,o=Math.atan2,u=Math.cos,c=Math.max,s=Math.min,f=Math.sin,l=Math.sqrt,d=1e-12,h=Math.PI,g=h/2,p=2*h;function _(t){return t>=1?g:t<=-1?-g:Math.asin(t)}function y(t){return t.innerRadius}function v(t){return t.outerRadius}function x(t){return t.startAngle}function m(t){return t.endAngle}function b(t){return t&&t.padAngle}function w(t,e,n,r,i,a,o){var u=t-n,s=e-r,f=(o?a:-a)/l(u*u+s*s),d=f*s,h=-f*u,g=t+d,p=e+h,_=n+d,y=r+h,v=(g+_)/2,x=(p+y)/2,m=_-g,b=y-p,w=m*m+b*b,S=i-a,A=g*y-_*p,T=(b<0?-1:1)*l(c(0,S*S*w-A*A)),P=(A*b-m*T)/w,C=(-A*m-b*T)/w,M=(A*b+m*T)/w,L=(-A*m+b*T)/w,O=P-v,E=C-x,k=M-v,G=L-x;return O*O+E*E>k*k+G*G&&(P=M,C=L),{cx:P,cy:C,x01:-d,y01:-h,x11:P*(i/S-1),y11:C*(i/S-1)}}var S=function(){var t=y,e=v,n=i(0),c=null,S=x,A=m,T=b,P=null;function C(){var i,y,v,x=+t.apply(this,arguments),m=+e.apply(this,arguments),b=S.apply(this,arguments)-g,C=A.apply(this,arguments)-g,M=a(C-b),L=C>b;if(P||(P=i=Object(r.a)()),m<x&&(y=m,m=x,x=y),m>d)if(M>p-d)P.moveTo(m*u(b),m*f(b)),P.arc(0,0,m,b,C,!L),x>d&&(P.moveTo(x*u(C),x*f(C)),P.arc(0,0,x,C,b,L));else{var O,E,k=b,G=C,V=b,R=C,I=M,D=M,N=T.apply(this,arguments)/2,F=N>d&&(c?+c.apply(this,arguments):l(x*x+m*m)),z=s(a(m-x)/2,+n.apply(this,arguments)),j=z,B=z;if(F>d){var H=_(F/x*f(N)),X=_(F/m*f(N));(I-=2*H)>d?(V+=H*=L?1:-1,R-=H):(I=0,V=R=(b+C)/2),(D-=2*X)>d?(k+=X*=L?1:-1,G-=X):(D=0,k=G=(b+C)/2)}var Y=m*u(k),U=m*f(k),q=x*u(R),W=x*f(R);if(z>d){var Q=m*u(G),Z=m*f(G),K=x*u(V),J=x*f(V);if(M<h){var $=I>d?function(t,e,n,r,i,a,o,u){var c=n-t,s=r-e,f=o-i,l=u-a,d=(f*(e-a)-l*(t-i))/(l*c-f*s);return[t+d*c,e+d*s]}(Y,U,K,J,Q,Z,q,W):[q,W],tt=Y-$[0],et=U-$[1],nt=Q-$[0],rt=Z-$[1],it=1/f(((v=(tt*nt+et*rt)/(l(tt*tt+et*et)*l(nt*nt+rt*rt)))>1?0:v<-1?h:Math.acos(v))/2),at=l($[0]*$[0]+$[1]*$[1]);j=s(z,(x-at)/(it-1)),B=s(z,(m-at)/(it+1))}}D>d?B>d?(O=w(K,J,Y,U,m,B,L),E=w(Q,Z,q,W,m,B,L),P.moveTo(O.cx+O.x01,O.cy+O.y01),B<z?P.arc(O.cx,O.cy,B,o(O.y01,O.x01),o(E.y01,E.x01),!L):(P.arc(O.cx,O.cy,B,o(O.y01,O.x01),o(O.y11,O.x11),!L),P.arc(0,0,m,o(O.cy+O.y11,O.cx+O.x11),o(E.cy+E.y11,E.cx+E.x11),!L),P.arc(E.cx,E.cy,B,o(E.y11,E.x11),o(E.y01,E.x01),!L))):(P.moveTo(Y,U),P.arc(0,0,m,k,G,!L)):P.moveTo(Y,U),x>d&&I>d?j>d?(O=w(q,W,Q,Z,x,-j,L),E=w(Y,U,K,J,x,-j,L),P.lineTo(O.cx+O.x01,O.cy+O.y01),j<z?P.arc(O.cx,O.cy,j,o(O.y01,O.x01),o(E.y01,E.x01),!L):(P.arc(O.cx,O.cy,j,o(O.y01,O.x01),o(O.y11,O.x11),!L),P.arc(0,0,x,o(O.cy+O.y11,O.cx+O.x11),o(E.cy+E.y11,E.cx+E.x11),L),P.arc(E.cx,E.cy,j,o(E.y11,E.x11),o(E.y01,E.x01),!L))):P.arc(0,0,x,R,V,L):P.lineTo(q,W)}else P.moveTo(0,0);if(P.closePath(),i)return P=null,i+""||null}return C.centroid=function(){var n=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+S.apply(this,arguments)+ +A.apply(this,arguments))/2-h/2;return[u(r)*n,f(r)*n]},C.innerRadius=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),C):t},C.outerRadius=function(t){return arguments.length?(e="function"==typeof t?t:i(+t),C):e},C.cornerRadius=function(t){return arguments.length?(n="function"==typeof t?t:i(+t),C):n},C.padRadius=function(t){return arguments.length?(c=null==t?null:"function"==typeof t?t:i(+t),C):c},C.startAngle=function(t){return arguments.length?(S="function"==typeof t?t:i(+t),C):S},C.endAngle=function(t){return arguments.length?(A="function"==typeof t?t:i(+t),C):A},C.padAngle=function(t){return arguments.length?(T="function"==typeof t?t:i(+t),C):T},C.context=function(t){return arguments.length?(P=null==t?null:t,C):P},C};function A(t){this._context=t}A.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}};var T=function(t){return new A(t)};function P(t){return t[0]}function C(t){return t[1]}var M=function(){var t=P,e=C,n=i(!0),a=null,o=T,u=null;function c(i){var c,s,f,l=i.length,d=!1;for(null==a&&(u=o(f=Object(r.a)())),c=0;c<=l;++c)!(c<l&&n(s=i[c],c,i))===d&&((d=!d)?u.lineStart():u.lineEnd()),d&&u.point(+t(s,c,i),+e(s,c,i));if(f)return u=null,f+""||null}return c.x=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),c):t},c.y=function(t){return arguments.length?(e="function"==typeof t?t:i(+t),c):e},c.defined=function(t){return arguments.length?(n="function"==typeof t?t:i(!!t),c):n},c.curve=function(t){return arguments.length?(o=t,null!=a&&(u=o(a)),c):o},c.context=function(t){return arguments.length?(null==t?a=u=null:u=o(a=t),c):a},c},L=function(){var t=P,e=null,n=i(0),a=C,o=i(!0),u=null,c=T,s=null;function f(i){var f,l,d,h,g,p=i.length,_=!1,y=new Array(p),v=new Array(p);for(null==u&&(s=c(g=Object(r.a)())),f=0;f<=p;++f){if(!(f<p&&o(h=i[f],f,i))===_)if(_=!_)l=f,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),d=f-1;d>=l;--d)s.point(y[d],v[d]);s.lineEnd(),s.areaEnd()}_&&(y[f]=+t(h,f,i),v[f]=+n(h,f,i),s.point(e?+e(h,f,i):y[f],a?+a(h,f,i):v[f]))}if(g)return s=null,g+""||null}function l(){return M().defined(o).curve(c).context(u)}return f.x=function(n){return arguments.length?(t="function"==typeof n?n:i(+n),e=null,f):t},f.x0=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),f):t},f.x1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:i(+t),f):e},f.y=function(t){return arguments.length?(n="function"==typeof t?t:i(+t),a=null,f):n},f.y0=function(t){return arguments.length?(n="function"==typeof t?t:i(+t),f):n},f.y1=function(t){return arguments.length?(a=null==t?null:"function"==typeof t?t:i(+t),f):a},f.lineX0=f.lineY0=function(){return l().x(t).y(n)},f.lineY1=function(){return l().x(t).y(a)},f.lineX1=function(){return l().x(e).y(n)},f.defined=function(t){return arguments.length?(o="function"==typeof t?t:i(!!t),f):o},f.curve=function(t){return arguments.length?(c=t,null!=u&&(s=c(u)),f):c},f.context=function(t){return arguments.length?(null==t?u=s=null:s=c(u=t),f):u},f},O=function(t,e){return e<t?-1:e>t?1:e>=t?0:NaN},E=function(t){return t},k=function(){var t=E,e=O,n=null,r=i(0),a=i(p),o=i(0);function u(i){var u,c,s,f,l,d=i.length,h=0,g=new Array(d),_=new Array(d),y=+r.apply(this,arguments),v=Math.min(p,Math.max(-p,a.apply(this,arguments)-y)),x=Math.min(Math.abs(v)/d,o.apply(this,arguments)),m=x*(v<0?-1:1);for(u=0;u<d;++u)(l=_[g[u]=u]=+t(i[u],u,i))>0&&(h+=l);for(null!=e?g.sort(function(t,n){return e(_[t],_[n])}):null!=n&&g.sort(function(t,e){return n(i[t],i[e])}),u=0,s=h?(v-d*m)/h:0;u<d;++u,y=f)c=g[u],f=y+((l=_[c])>0?l*s:0)+m,_[c]={data:i[c],index:u,value:l,startAngle:y,endAngle:f,padAngle:x};return _}return u.value=function(e){return arguments.length?(t="function"==typeof e?e:i(+e),u):t},u.sortValues=function(t){return arguments.length?(e=t,n=null,u):e},u.sort=function(t){return arguments.length?(n=t,e=null,u):n},u.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:i(+t),u):r},u.endAngle=function(t){return arguments.length?(a="function"==typeof t?t:i(+t),u):a},u.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:i(+t),u):o},u},G=R(T);function V(t){this._curve=t}function R(t){function e(e){return new V(t(e))}return e._curve=t,e}function I(t){var e=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?e(R(t)):e()._curve},t}V.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,e){this._curve.point(e*Math.sin(t),e*-Math.cos(t))}};var D=function(){return I(M().curve(G))},N=function(){var t=L().curve(G),e=t.curve,n=t.lineX0,r=t.lineX1,i=t.lineY0,a=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return I(n())},delete t.lineX0,t.lineEndAngle=function(){return I(r())},delete t.lineX1,t.lineInnerRadius=function(){return I(i())},delete t.lineY0,t.lineOuterRadius=function(){return I(a())},delete t.lineY1,t.curve=function(t){return arguments.length?e(R(t)):e()._curve},t},F=function(t,e){return[(e=+e)*Math.cos(t-=Math.PI/2),e*Math.sin(t)]},z=Array.prototype.slice;function j(t){return t.source}function B(t){return t.target}function H(t){var e=j,n=B,a=P,o=C,u=null;function c(){var i,c=z.call(arguments),s=e.apply(this,c),f=n.apply(this,c);if(u||(u=i=Object(r.a)()),t(u,+a.apply(this,(c[0]=s,c)),+o.apply(this,c),+a.apply(this,(c[0]=f,c)),+o.apply(this,c)),i)return u=null,i+""||null}return c.source=function(t){return arguments.length?(e=t,c):e},c.target=function(t){return arguments.length?(n=t,c):n},c.x=function(t){return arguments.length?(a="function"==typeof t?t:i(+t),c):a},c.y=function(t){return arguments.length?(o="function"==typeof t?t:i(+t),c):o},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c}function X(t,e,n,r,i){t.moveTo(e,n),t.bezierCurveTo(e=(e+r)/2,n,e,i,r,i)}function Y(t,e,n,r,i){t.moveTo(e,n),t.bezierCurveTo(e,n=(n+i)/2,r,n,r,i)}function U(t,e,n,r,i){var a=F(e,n),o=F(e,n=(n+i)/2),u=F(r,n),c=F(r,i);t.moveTo(a[0],a[1]),t.bezierCurveTo(o[0],o[1],u[0],u[1],c[0],c[1])}function q(){return H(X)}function W(){return H(Y)}function Q(){var t=H(U);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t}var Z={draw:function(t,e){var n=Math.sqrt(e/h);t.moveTo(n,0),t.arc(0,0,n,0,p)}},K={draw:function(t,e){var n=Math.sqrt(e/5)/2;t.moveTo(-3*n,-n),t.lineTo(-n,-n),t.lineTo(-n,-3*n),t.lineTo(n,-3*n),t.lineTo(n,-n),t.lineTo(3*n,-n),t.lineTo(3*n,n),t.lineTo(n,n),t.lineTo(n,3*n),t.lineTo(-n,3*n),t.lineTo(-n,n),t.lineTo(-3*n,n),t.closePath()}},J=Math.sqrt(1/3),$=2*J,tt={draw:function(t,e){var n=Math.sqrt(e/$),r=n*J;t.moveTo(0,-n),t.lineTo(r,0),t.lineTo(0,n),t.lineTo(-r,0),t.closePath()}},et=Math.sin(h/10)/Math.sin(7*h/10),nt=Math.sin(p/10)*et,rt=-Math.cos(p/10)*et,it={draw:function(t,e){var n=Math.sqrt(.8908130915292852*e),r=nt*n,i=rt*n;t.moveTo(0,-n),t.lineTo(r,i);for(var a=1;a<5;++a){var o=p*a/5,u=Math.cos(o),c=Math.sin(o);t.lineTo(c*n,-u*n),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},at={draw:function(t,e){var n=Math.sqrt(e),r=-n/2;t.rect(r,r,n,n)}},ot=Math.sqrt(3),ut={draw:function(t,e){var n=-Math.sqrt(e/(3*ot));t.moveTo(0,2*n),t.lineTo(-ot*n,-n),t.lineTo(ot*n,-n),t.closePath()}},ct=Math.sqrt(3)/2,st=1/Math.sqrt(12),ft=3*(st/2+1),lt={draw:function(t,e){var n=Math.sqrt(e/ft),r=n/2,i=n*st,a=r,o=n*st+n,u=-a,c=o;t.moveTo(r,i),t.lineTo(a,o),t.lineTo(u,c),t.lineTo(-.5*r-ct*i,ct*r+-.5*i),t.lineTo(-.5*a-ct*o,ct*a+-.5*o),t.lineTo(-.5*u-ct*c,ct*u+-.5*c),t.lineTo(-.5*r+ct*i,-.5*i-ct*r),t.lineTo(-.5*a+ct*o,-.5*o-ct*a),t.lineTo(-.5*u+ct*c,-.5*c-ct*u),t.closePath()}},dt=[Z,K,tt,at,it,ut,lt],ht=function(){var t=i(Z),e=i(64),n=null;function a(){var i;if(n||(n=i=Object(r.a)()),t.apply(this,arguments).draw(n,+e.apply(this,arguments)),i)return n=null,i+""||null}return a.type=function(e){return arguments.length?(t="function"==typeof e?e:i(e),a):t},a.size=function(t){return arguments.length?(e="function"==typeof t?t:i(+t),a):e},a.context=function(t){return arguments.length?(n=null==t?null:t,a):n},a},gt=function(){};function pt(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function _t(t){this._context=t}_t.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:pt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:pt(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};var yt=function(t){return new _t(t)};function vt(t){this._context=t}vt.prototype={areaStart:gt,areaEnd:gt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x2=t,this._y2=e;break;case 1:this._point=2,this._x3=t,this._y3=e;break;case 2:this._point=3,this._x4=t,this._y4=e,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+e)/6);break;default:pt(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};var xt=function(t){return new vt(t)};function mt(t){this._context=t}mt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(n,r):this._context.moveTo(n,r);break;case 3:this._point=4;default:pt(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};var bt=function(t){return new mt(t)};function wt(t,e){this._basis=new _t(t),this._beta=e}wt.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,e=this._y,n=t.length-1;if(n>0)for(var r,i=t[0],a=e[0],o=t[n]-i,u=e[n]-a,c=-1;++c<=n;)r=c/n,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*o),this._beta*e[c]+(1-this._beta)*(a+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,e){this._x.push(+t),this._y.push(+e)}};var St=function t(e){function n(t){return 1===e?new _t(t):new wt(t,e)}return n.beta=function(e){return t(+e)},n}(.85);function At(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function Tt(t,e){this._context=t,this._k=(1-e)/6}Tt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:At(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:At(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var Pt=function t(e){function n(t){return new Tt(t,e)}return n.tension=function(e){return t(+e)},n}(0);function Ct(t,e){this._context=t,this._k=(1-e)/6}Ct.prototype={areaStart:gt,areaEnd:gt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:At(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var Mt=function t(e){function n(t){return new Ct(t,e)}return n.tension=function(e){return t(+e)},n}(0);function Lt(t,e){this._context=t,this._k=(1-e)/6}Lt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:At(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var Ot=function t(e){function n(t){return new Lt(t,e)}return n.tension=function(e){return t(+e)},n}(0);function Et(t,e,n){var r=t._x1,i=t._y1,a=t._x2,o=t._y2;if(t._l01_a>d){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>d){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);a=(a*s+t._x1*t._l23_2a-e*t._l12_2a)/f,o=(o*s+t._y1*t._l23_2a-n*t._l12_2a)/f}t._context.bezierCurveTo(r,i,a,o,t._x2,t._y2)}function kt(t,e){this._context=t,this._alpha=e}kt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:Et(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var Gt=function t(e){function n(t){return e?new kt(t,e):new Tt(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function Vt(t,e){this._context=t,this._alpha=e}Vt.prototype={areaStart:gt,areaEnd:gt,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:Et(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var Rt=function t(e){function n(t){return e?new Vt(t,e):new Ct(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function It(t,e){this._context=t,this._alpha=e}It.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Et(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};var Dt=function t(e){function n(t){return e?new It(t,e):new Lt(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function Nt(t){this._context=t}Nt.prototype={areaStart:gt,areaEnd:gt,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,e){t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,this._context.moveTo(t,e))}};var Ft=function(t){return new Nt(t)};function zt(t){return t<0?-1:1}function jt(t,e,n){var r=t._x1-t._x0,i=e-t._x1,a=(t._y1-t._y0)/(r||i<0&&-0),o=(n-t._y1)/(i||r<0&&-0),u=(a*i+o*r)/(r+i);return(zt(a)+zt(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(u))||0}function Bt(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function Ht(t,e,n){var r=t._x0,i=t._y0,a=t._x1,o=t._y1,u=(a-r)/3;t._context.bezierCurveTo(r+u,i+u*e,a-u,o-u*n,a,o)}function Xt(t){this._context=t}function Yt(t){this._context=new Ut(t)}function Ut(t){this._context=t}function qt(t){return new Xt(t)}function Wt(t){return new Yt(t)}function Qt(t){this._context=t}function Zt(t){var e,n,r=t.length-1,i=new Array(r),a=new Array(r),o=new Array(r);for(i[0]=0,a[0]=2,o[0]=t[0]+2*t[1],e=1;e<r-1;++e)i[e]=1,a[e]=4,o[e]=4*t[e]+2*t[e+1];for(i[r-1]=2,a[r-1]=7,o[r-1]=8*t[r-1]+t[r],e=1;e<r;++e)n=i[e]/a[e-1],a[e]-=n,o[e]-=n*o[e-1];for(i[r-1]=o[r-1]/a[r-1],e=r-2;e>=0;--e)i[e]=(o[e]-i[e+1])/a[e];for(a[r-1]=(t[r]+i[r-1])/2,e=0;e<r-1;++e)a[e]=2*t[e+1]-i[e+1];return[i,a]}Xt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Ht(this,this._t0,Bt(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,Ht(this,Bt(this,n=jt(this,t,e)),n);break;default:Ht(this,this._t0,n=jt(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}},(Yt.prototype=Object.create(Xt.prototype)).point=function(t,e){Xt.prototype.point.call(this,e,t)},Ut.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,r,i,a){this._context.bezierCurveTo(e,t,r,n,a,i)}},Qt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),2===n)this._context.lineTo(t[1],e[1]);else for(var r=Zt(t),i=Zt(e),a=0,o=1;o<n;++a,++o)this._context.bezierCurveTo(r[0][a],i[0][a],r[1][a],i[1][a],t[o],e[o]);(this._line||0!==this._line&&1===n)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}};var Kt=function(t){return new Qt(t)};function Jt(t,e){this._context=t,this._t=e}Jt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}}this._x=t,this._y=e}};var $t=function(t){return new Jt(t,.5)};function te(t){return new Jt(t,0)}function ee(t){return new Jt(t,1)}var ne=function(t,e){if((i=t.length)>1)for(var n,r,i,a=1,o=t[e[0]],u=o.length;a<i;++a)for(r=o,o=t[e[a]],n=0;n<u;++n)o[n][1]+=o[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]},re=function(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e;return n};function ie(t,e){return t[e]}var ae=function(){var t=i([]),e=re,n=ne,r=ie;function a(i){var a,o,u=t.apply(this,arguments),c=i.length,s=u.length,f=new Array(s);for(a=0;a<s;++a){for(var l,d=u[a],h=f[a]=new Array(c),g=0;g<c;++g)h[g]=l=[0,+r(i[g],d,g,i)],l.data=i[g];h.key=d}for(a=0,o=e(f);a<s;++a)f[o[a]].index=a;return n(f,o),f}return a.keys=function(e){return arguments.length?(t="function"==typeof e?e:i(z.call(e)),a):t},a.value=function(t){return arguments.length?(r="function"==typeof t?t:i(+t),a):r},a.order=function(t){return arguments.length?(e=null==t?re:"function"==typeof t?t:i(z.call(t)),a):e},a.offset=function(t){return arguments.length?(n=null==t?ne:t,a):n},a},oe=function(t,e){if((r=t.length)>0){for(var n,r,i,a=0,o=t[0].length;a<o;++a){for(i=n=0;n<r;++n)i+=t[n][a][1]||0;if(i)for(n=0;n<r;++n)t[n][a][1]/=i}ne(t,e)}},ue=function(t,e){if((u=t.length)>1)for(var n,r,i,a,o,u,c=0,s=t[e[0]].length;c<s;++c)for(a=o=0,n=0;n<u;++n)(i=(r=t[e[n]][c])[1]-r[0])>=0?(r[0]=a,r[1]=a+=i):i<0?(r[1]=o,r[0]=o+=i):r[0]=a},ce=function(t,e){if((n=t.length)>0){for(var n,r=0,i=t[e[0]],a=i.length;r<a;++r){for(var o=0,u=0;o<n;++o)u+=t[o][r][1]||0;i[r][1]+=i[r][0]=-u/2}ne(t,e)}},se=function(t,e){if((i=t.length)>0&&(r=(n=t[e[0]]).length)>0){for(var n,r,i,a=0,o=1;o<r;++o){for(var u=0,c=0,s=0;u<i;++u){for(var f=t[e[u]],l=f[o][1]||0,d=(l-(f[o-1][1]||0))/2,h=0;h<u;++h){var g=t[e[h]];d+=(g[o][1]||0)-(g[o-1][1]||0)}c+=l,s+=d*l}n[o-1][1]+=n[o-1][0]=a,c&&(a-=s/c)}n[o-1][1]+=n[o-1][0]=a,ne(t,e)}},fe=function(t){var e=t.map(le);return re(t).sort(function(t,n){return e[t]-e[n]})};function le(t){for(var e,n=0,r=-1,i=t.length;++r<i;)(e=+t[r][1])&&(n+=e);return n}var de=function(t){return fe(t).reverse()},he=function(t){var e,n,r=t.length,i=t.map(le),a=re(t).sort(function(t,e){return i[e]-i[t]}),o=0,u=0,c=[],s=[];for(e=0;e<r;++e)n=a[e],o<u?(o+=i[n],c.push(n)):(u+=i[n],s.push(n));return s.reverse().concat(c)},ge=function(t){return re(t).reverse()};n.d(e,"a",function(){return S}),n.d(e,"b",function(){return L}),n.d(e,"v",function(){return M}),n.d(e,"A",function(){return k}),n.d(e,"c",function(){return N}),n.d(e,"C",function(){return N}),n.d(e,"w",function(){return D}),n.d(e,"D",function(){return D}),n.d(e,"B",function(){return F}),n.d(e,"x",function(){return q}),n.d(e,"z",function(){return W}),n.d(e,"y",function(){return Q}),n.d(e,"P",function(){return ht}),n.d(e,"X",function(){return dt}),n.d(e,"Q",function(){return Z}),n.d(e,"R",function(){return K}),n.d(e,"S",function(){return tt}),n.d(e,"T",function(){return at}),n.d(e,"U",function(){return it}),n.d(e,"V",function(){return ut}),n.d(e,"W",function(){return lt}),n.d(e,"e",function(){return xt}),n.d(e,"f",function(){return bt}),n.d(e,"d",function(){return yt}),n.d(e,"g",function(){return St}),n.d(e,"i",function(){return Mt}),n.d(e,"j",function(){return Ot}),n.d(e,"h",function(){return Pt}),n.d(e,"l",function(){return Rt}),n.d(e,"m",function(){return Dt}),n.d(e,"k",function(){return Gt}),n.d(e,"o",function(){return Ft}),n.d(e,"n",function(){return T}),n.d(e,"p",function(){return qt}),n.d(e,"q",function(){return Wt}),n.d(e,"r",function(){return Kt}),n.d(e,"s",function(){return $t}),n.d(e,"t",function(){return ee}),n.d(e,"u",function(){return te}),n.d(e,"E",function(){return ae}),n.d(e,"G",function(){return oe}),n.d(e,"F",function(){return ue}),n.d(e,"H",function(){return ne}),n.d(e,"I",function(){return ce}),n.d(e,"J",function(){return se}),n.d(e,"K",function(){return fe}),n.d(e,"L",function(){return de}),n.d(e,"M",function(){return he}),n.d(e,"N",function(){return re}),n.d(e,"O",function(){return ge})},function(t,e,n){"use strict";var r=function(){return new i};function i(){this.reset()}i.prototype={constructor:i,reset:function(){this.s=this.t=0},add:function(t){o(a,t,this.t),o(this,a.s,this.s),this.s?this.t+=a.t:this.s=a.t},valueOf:function(){return this.s}};var a=new i;function o(t,e,n){var r=t.s=e+n,i=r-e,a=r-i;t.t=e-a+(n-i)}var u=1e-6,c=Math.PI,s=c/2,f=c/4,l=2*c,d=180/c,h=c/180,g=Math.abs,p=Math.atan,_=Math.atan2,y=Math.cos,v=Math.ceil,x=Math.exp,m=(Math.floor,Math.log),b=Math.pow,w=Math.sin,S=Math.sign||function(t){return t>0?1:t<0?-1:0},A=Math.sqrt,T=Math.tan;function P(t){return t>1?0:t<-1?c:Math.acos(t)}function C(t){return t>1?s:t<-1?-s:Math.asin(t)}function M(t){return(t=w(t/2))*t}function L(){}function O(t,e){t&&k.hasOwnProperty(t.type)&&k[t.type](t,e)}var E={Feature:function(t,e){O(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,i=n.length;++r<i;)O(n[r].geometry,e)}},k={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)t=n[r],e.point(t[0],t[1],t[2])},LineString:function(t,e){G(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)G(n[r],e,0)},Polygon:function(t,e){V(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)V(n[r],e)},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,i=n.length;++r<i;)O(n[r],e)}};function G(t,e,n){var r,i=-1,a=t.length-n;for(e.lineStart();++i<a;)r=t[i],e.point(r[0],r[1],r[2]);e.lineEnd()}function V(t,e){var n=-1,r=t.length;for(e.polygonStart();++n<r;)G(t[n],e,1);e.polygonEnd()}var R,I,D,N,F,z=function(t,e){t&&E.hasOwnProperty(t.type)?E[t.type](t,e):O(t,e)},j=r(),B=r(),H={point:L,lineStart:L,lineEnd:L,polygonStart:function(){j.reset(),H.lineStart=X,H.lineEnd=Y},polygonEnd:function(){var t=+j;B.add(t<0?l+t:t),this.lineStart=this.lineEnd=this.point=L},sphere:function(){B.add(l)}};function X(){H.point=U}function Y(){q(R,I)}function U(t,e){H.point=q,R=t,I=e,D=t*=h,N=y(e=(e*=h)/2+f),F=w(e)}function q(t,e){e=(e*=h)/2+f;var n=(t*=h)-D,r=n>=0?1:-1,i=r*n,a=y(e),o=w(e),u=F*o,c=N*a+u*y(i),s=u*r*w(i);j.add(_(s,c)),D=t,N=a,F=o}var W=function(t){return B.reset(),z(t,H),2*B};function Q(t){return[_(t[1],t[0]),C(t[2])]}function Z(t){var e=t[0],n=t[1],r=y(n);return[r*y(e),r*w(e),w(n)]}function K(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function J(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function $(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function tt(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function et(t){var e=A(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}var nt,rt,it,at,ot,ut,ct,st,ft,lt,dt=r(),ht={point:gt,lineStart:_t,lineEnd:yt,polygonStart:function(){ht.point=vt,ht.lineStart=xt,ht.lineEnd=mt,dt.reset(),H.polygonStart()},polygonEnd:function(){H.polygonEnd(),ht.point=gt,ht.lineStart=_t,ht.lineEnd=yt,j<0?(nt=-(it=180),rt=-(at=90)):dt>u?at=90:dt<-u&&(rt=-90),lt[0]=nt,lt[1]=it}};function gt(t,e){ft.push(lt=[nt=t,it=t]),e<rt&&(rt=e),e>at&&(at=e)}function pt(t,e){var n=Z([t*h,e*h]);if(st){var r=J(st,n),i=J([r[1],-r[0],0],r);et(i),i=Q(i);var a,o=t-ot,u=o>0?1:-1,c=i[0]*d*u,s=g(o)>180;s^(u*ot<c&&c<u*t)?(a=i[1]*d)>at&&(at=a):s^(u*ot<(c=(c+360)%360-180)&&c<u*t)?(a=-i[1]*d)<rt&&(rt=a):(e<rt&&(rt=e),e>at&&(at=e)),s?t<ot?bt(nt,t)>bt(nt,it)&&(it=t):bt(t,it)>bt(nt,it)&&(nt=t):it>=nt?(t<nt&&(nt=t),t>it&&(it=t)):t>ot?bt(nt,t)>bt(nt,it)&&(it=t):bt(t,it)>bt(nt,it)&&(nt=t)}else ft.push(lt=[nt=t,it=t]);e<rt&&(rt=e),e>at&&(at=e),st=n,ot=t}function _t(){ht.point=pt}function yt(){lt[0]=nt,lt[1]=it,ht.point=gt,st=null}function vt(t,e){if(st){var n=t-ot;dt.add(g(n)>180?n+(n>0?360:-360):n)}else ut=t,ct=e;H.point(t,e),pt(t,e)}function xt(){H.lineStart()}function mt(){vt(ut,ct),H.lineEnd(),g(dt)>u&&(nt=-(it=180)),lt[0]=nt,lt[1]=it,st=null}function bt(t,e){return(e-=t)<0?e+360:e}function wt(t,e){return t[0]-e[0]}function St(t,e){return t[0]<=t[1]?t[0]<=e&&e<=t[1]:e<t[0]||t[1]<e}var At,Tt,Pt,Ct,Mt,Lt,Ot,Et,kt,Gt,Vt,Rt,It,Dt,Nt,Ft,zt=function(t){var e,n,r,i,a,o,u;if(at=it=-(nt=rt=1/0),ft=[],z(t,ht),n=ft.length){for(ft.sort(wt),e=1,a=[r=ft[0]];e<n;++e)St(r,(i=ft[e])[0])||St(r,i[1])?(bt(r[0],i[1])>bt(r[0],r[1])&&(r[1]=i[1]),bt(i[0],r[1])>bt(r[0],r[1])&&(r[0]=i[0])):a.push(r=i);for(o=-1/0,e=0,r=a[n=a.length-1];e<=n;r=i,++e)i=a[e],(u=bt(r[1],i[0]))>o&&(o=u,nt=i[0],it=r[1])}return ft=lt=null,nt===1/0||rt===1/0?[[NaN,NaN],[NaN,NaN]]:[[nt,rt],[it,at]]},jt={sphere:L,point:Bt,lineStart:Xt,lineEnd:qt,polygonStart:function(){jt.lineStart=Wt,jt.lineEnd=Qt},polygonEnd:function(){jt.lineStart=Xt,jt.lineEnd=qt}};function Bt(t,e){t*=h;var n=y(e*=h);Ht(n*y(t),n*w(t),w(e))}function Ht(t,e,n){Pt+=(t-Pt)/++At,Ct+=(e-Ct)/At,Mt+=(n-Mt)/At}function Xt(){jt.point=Yt}function Yt(t,e){t*=h;var n=y(e*=h);Dt=n*y(t),Nt=n*w(t),Ft=w(e),jt.point=Ut,Ht(Dt,Nt,Ft)}function Ut(t,e){t*=h;var n=y(e*=h),r=n*y(t),i=n*w(t),a=w(e),o=_(A((o=Nt*a-Ft*i)*o+(o=Ft*r-Dt*a)*o+(o=Dt*i-Nt*r)*o),Dt*r+Nt*i+Ft*a);Tt+=o,Lt+=o*(Dt+(Dt=r)),Ot+=o*(Nt+(Nt=i)),Et+=o*(Ft+(Ft=a)),Ht(Dt,Nt,Ft)}function qt(){jt.point=Bt}function Wt(){jt.point=Zt}function Qt(){Kt(Rt,It),jt.point=Bt}function Zt(t,e){Rt=t,It=e,t*=h,e*=h,jt.point=Kt;var n=y(e);Dt=n*y(t),Nt=n*w(t),Ft=w(e),Ht(Dt,Nt,Ft)}function Kt(t,e){t*=h;var n=y(e*=h),r=n*y(t),i=n*w(t),a=w(e),o=Nt*a-Ft*i,u=Ft*r-Dt*a,c=Dt*i-Nt*r,s=A(o*o+u*u+c*c),f=C(s),l=s&&-f/s;kt+=l*o,Gt+=l*u,Vt+=l*c,Tt+=f,Lt+=f*(Dt+(Dt=r)),Ot+=f*(Nt+(Nt=i)),Et+=f*(Ft+(Ft=a)),Ht(Dt,Nt,Ft)}var Jt=function(t){At=Tt=Pt=Ct=Mt=Lt=Ot=Et=kt=Gt=Vt=0,z(t,jt);var e=kt,n=Gt,r=Vt,i=e*e+n*n+r*r;return i<1e-12&&(e=Lt,n=Ot,r=Et,Tt<u&&(e=Pt,n=Ct,r=Mt),(i=e*e+n*n+r*r)<1e-12)?[NaN,NaN]:[_(n,e)*d,C(r/A(i))*d]},$t=function(t){return function(){return t}},te=function(t,e){function n(n,r){return n=t(n,r),e(n[0],n[1])}return t.invert&&e.invert&&(n.invert=function(n,r){return(n=e.invert(n,r))&&t.invert(n[0],n[1])}),n};function ee(t,e){return[t>c?t-l:t<-c?t+l:t,e]}function ne(t,e,n){return(t%=l)?e||n?te(ie(t),ae(e,n)):ie(t):e||n?ae(e,n):ee}function re(t){return function(e,n){return[(e+=t)>c?e-l:e<-c?e+l:e,n]}}function ie(t){var e=re(t);return e.invert=re(-t),e}function ae(t,e){var n=y(t),r=w(t),i=y(e),a=w(e);function o(t,e){var o=y(e),u=y(t)*o,c=w(t)*o,s=w(e),f=s*n+u*r;return[_(c*i-f*a,u*n-s*r),C(f*i+c*a)]}return o.invert=function(t,e){var o=y(e),u=y(t)*o,c=w(t)*o,s=w(e),f=s*i-c*a;return[_(c*i+s*a,u*n+f*r),C(f*n-u*r)]},o}ee.invert=ee;var oe=function(t){function e(e){return(e=t(e[0]*h,e[1]*h))[0]*=d,e[1]*=d,e}return t=ne(t[0]*h,t[1]*h,t.length>2?t[2]*h:0),e.invert=function(e){return(e=t.invert(e[0]*h,e[1]*h))[0]*=d,e[1]*=d,e},e};function ue(t,e,n,r,i,a){if(n){var o=y(e),u=w(e),c=r*n;null==i?(i=e+r*l,a=e-c/2):(i=ce(o,i),a=ce(o,a),(r>0?i<a:i>a)&&(i+=r*l));for(var s,f=i;r>0?f>a:f<a;f-=c)s=Q([o,-u*y(f),-u*w(f)]),t.point(s[0],s[1])}}function ce(t,e){(e=Z(e))[0]-=t,et(e);var n=P(-e[1]);return((-e[2]<0?-n:n)+l-u)%l}var se=function(){var t,e,n=$t([0,0]),r=$t(90),i=$t(6),a={point:function(n,r){t.push(n=e(n,r)),n[0]*=d,n[1]*=d}};function o(){var o=n.apply(this,arguments),u=r.apply(this,arguments)*h,c=i.apply(this,arguments)*h;return t=[],e=ne(-o[0]*h,-o[1]*h,0).invert,ue(a,u,c,1),o={type:"Polygon",coordinates:[t]},t=e=null,o}return o.center=function(t){return arguments.length?(n="function"==typeof t?t:$t([+t[0],+t[1]]),o):n},o.radius=function(t){return arguments.length?(r="function"==typeof t?t:$t(+t),o):r},o.precision=function(t){return arguments.length?(i="function"==typeof t?t:$t(+t),o):i},o},fe=function(){var t,e=[];return{point:function(e,n){t.push([e,n])},lineStart:function(){e.push(t=[])},lineEnd:L,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}},le=function(t,e){return g(t[0]-e[0])<u&&g(t[1]-e[1])<u};function de(t,e,n,r){this.x=t,this.z=e,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}var he=function(t,e,n,r,i){var a,o,u=[],c=[];if(t.forEach(function(t){if(!((e=t.length-1)<=0)){var e,n,r=t[0],o=t[e];if(le(r,o)){for(i.lineStart(),a=0;a<e;++a)i.point((r=t[a])[0],r[1]);i.lineEnd()}else u.push(n=new de(r,t,null,!0)),c.push(n.o=new de(r,null,n,!1)),u.push(n=new de(o,t,null,!1)),c.push(n.o=new de(o,null,n,!0))}}),u.length){for(c.sort(e),ge(u),ge(c),a=0,o=c.length;a<o;++a)c[a].e=n=!n;for(var s,f,l=u[0];;){for(var d=l,h=!0;d.v;)if((d=d.n)===l)return;s=d.z,i.lineStart();do{if(d.v=d.o.v=!0,d.e){if(h)for(a=0,o=s.length;a<o;++a)i.point((f=s[a])[0],f[1]);else r(d.x,d.n.x,1,i);d=d.n}else{if(h)for(s=d.p.z,a=s.length-1;a>=0;--a)i.point((f=s[a])[0],f[1]);else r(d.x,d.p.x,-1,i);d=d.p}s=(d=d.o).z,h=!h}while(!d.v);i.lineEnd()}}};function ge(t){if(e=t.length){for(var e,n,r=0,i=t[0];++r<e;)i.n=n=t[r],n.p=i,i=n;i.n=n=t[0],n.p=i}}var pe=r(),_e=function(t,e){var n=e[0],r=e[1],i=w(r),a=[w(n),-y(n),0],o=0,d=0;pe.reset(),1===i?r=s+u:-1===i&&(r=-s-u);for(var h=0,g=t.length;h<g;++h)if(v=(p=t[h]).length)for(var p,v,x=p[v-1],m=x[0],b=x[1]/2+f,S=w(b),A=y(b),T=0;T<v;++T,m=M,S=O,A=E,x=P){var P=p[T],M=P[0],L=P[1]/2+f,O=w(L),E=y(L),k=M-m,G=k>=0?1:-1,V=G*k,R=V>c,I=S*O;if(pe.add(_(I*G*w(V),A*E+I*y(V))),o+=R?k+G*l:k,R^m>=n^M>=n){var D=J(Z(x),Z(P));et(D);var N=J(a,D);et(N);var F=(R^k>=0?-1:1)*C(N[2]);(r>F||r===F&&(D[0]||D[1]))&&(d+=R^k>=0?1:-1)}}return(o<-u||o<u&&pe<-u)^1&d},ye=n(1),ve=function(t,e,n,r){return function(i){var a,o,u,c=e(i),s=fe(),f=e(s),l=!1,d={point:h,lineStart:p,lineEnd:_,polygonStart:function(){d.point=y,d.lineStart=v,d.lineEnd=x,o=[],a=[]},polygonEnd:function(){d.point=h,d.lineStart=p,d.lineEnd=_,o=Object(ye.n)(o);var t=_e(a,r);o.length?(l||(i.polygonStart(),l=!0),he(o,me,t,n,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),n(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),o=a=null},sphere:function(){i.polygonStart(),i.lineStart(),n(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function h(e,n){t(e,n)&&i.point(e,n)}function g(t,e){c.point(t,e)}function p(){d.point=g,c.lineStart()}function _(){d.point=h,c.lineEnd()}function y(t,e){u.push([t,e]),f.point(t,e)}function v(){f.lineStart(),u=[]}function x(){y(u[0][0],u[0][1]),f.lineEnd();var t,e,n,r,c=f.clean(),d=s.result(),h=d.length;if(u.pop(),a.push(u),u=null,h)if(1&c){if((e=(n=d[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<e;++t)i.point((r=n[t])[0],r[1]);i.lineEnd()}}else h>1&&2&c&&d.push(d.pop().concat(d.shift())),o.push(d.filter(xe))}return d}};function xe(t){return t.length>1}function me(t,e){return((t=t.x)[0]<0?t[1]-s-u:s-t[1])-((e=e.x)[0]<0?e[1]-s-u:s-e[1])}var be=ve(function(){return!0},function(t){var e,n=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),e=1},point:function(a,o){var f=a>0?c:-c,l=g(a-n);g(l-c)<u?(t.point(n,r=(r+o)/2>0?s:-s),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(f,r),t.point(a,r),e=0):i!==f&&l>=c&&(g(n-i)<u&&(n-=i*u),g(a-f)<u&&(a-=f*u),r=function(t,e,n,r){var i,a,o=w(t-n);return g(o)>u?p((w(e)*(a=y(r))*w(n)-w(r)*(i=y(e))*w(t))/(i*a*o)):(e+r)/2}(n,r,a,o),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(f,r),e=0),t.point(n=a,r=o),i=f},lineEnd:function(){t.lineEnd(),n=r=NaN},clean:function(){return 2-e}}},function(t,e,n,r){var i;if(null==t)i=n*s,r.point(-c,i),r.point(0,i),r.point(c,i),r.point(c,0),r.point(c,-i),r.point(0,-i),r.point(-c,-i),r.point(-c,0),r.point(-c,i);else if(g(t[0]-e[0])>u){var a=t[0]<e[0]?c:-c;i=n*a/2,r.point(-a,i),r.point(0,i),r.point(a,i)}else r.point(e[0],e[1])},[-c,-s]);var we=function(t){var e=y(t),n=6*h,r=e>0,i=g(e)>u;function a(t,n){return y(t)*y(n)>e}function o(t,n,r){var i=[1,0,0],a=J(Z(t),Z(n)),o=K(a,a),s=a[0],f=o-s*s;if(!f)return!r&&t;var l=e*o/f,d=-e*s/f,h=J(i,a),p=tt(i,l);$(p,tt(a,d));var _=h,y=K(p,_),v=K(_,_),x=y*y-v*(K(p,p)-1);if(!(x<0)){var m=A(x),b=tt(_,(-y-m)/v);if($(b,p),b=Q(b),!r)return b;var w,S=t[0],T=n[0],P=t[1],C=n[1];T<S&&(w=S,S=T,T=w);var M=T-S,L=g(M-c)<u;if(!L&&C<P&&(w=P,P=C,C=w),L||M<u?L?P+C>0^b[1]<(g(b[0]-S)<u?P:C):P<=b[1]&&b[1]<=C:M>c^(S<=b[0]&&b[0]<=T)){var O=tt(_,(-y+m)/v);return $(O,p),[b,Q(O)]}}}function s(e,n){var i=r?t:c-t,a=0;return e<-i?a|=1:e>i&&(a|=2),n<-i?a|=4:n>i&&(a|=8),a}return ve(a,function(t){var e,n,f,l,d;return{lineStart:function(){l=f=!1,d=1},point:function(h,g){var p,_=[h,g],y=a(h,g),v=r?y?0:s(h,g):y?s(h+(h<0?c:-c),g):0;if(!e&&(l=f=y)&&t.lineStart(),y!==f&&(!(p=o(e,_))||le(e,p)||le(_,p))&&(_[0]+=u,_[1]+=u,y=a(_[0],_[1])),y!==f)d=0,y?(t.lineStart(),p=o(_,e),t.point(p[0],p[1])):(p=o(e,_),t.point(p[0],p[1]),t.lineEnd()),e=p;else if(i&&e&&r^y){var x;v&n||!(x=o(_,e,!0))||(d=0,r?(t.lineStart(),t.point(x[0][0],x[0][1]),t.point(x[1][0],x[1][1]),t.lineEnd()):(t.point(x[1][0],x[1][1]),t.lineEnd(),t.lineStart(),t.point(x[0][0],x[0][1])))}!y||e&&le(e,_)||t.point(_[0],_[1]),e=_,f=y,n=v},lineEnd:function(){f&&t.lineEnd(),e=null},clean:function(){return d|(l&&f)<<1}}},function(e,r,i,a){ue(a,t,n,i,e,r)},r?[0,-t]:[-c,t-c])},Se=function(t,e,n,r,i,a){var o,u=t[0],c=t[1],s=0,f=1,l=e[0]-u,d=e[1]-c;if(o=n-u,l||!(o>0)){if(o/=l,l<0){if(o<s)return;o<f&&(f=o)}else if(l>0){if(o>f)return;o>s&&(s=o)}if(o=i-u,l||!(o<0)){if(o/=l,l<0){if(o>f)return;o>s&&(s=o)}else if(l>0){if(o<s)return;o<f&&(f=o)}if(o=r-c,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<f&&(f=o)}else if(d>0){if(o>f)return;o>s&&(s=o)}if(o=a-c,d||!(o<0)){if(o/=d,d<0){if(o>f)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<f&&(f=o)}return s>0&&(t[0]=u+s*l,t[1]=c+s*d),f<1&&(e[0]=u+f*l,e[1]=c+f*d),!0}}}}},Ae=1e9,Te=-Ae;function Pe(t,e,n,r){function i(i,a){return t<=i&&i<=n&&e<=a&&a<=r}function a(i,a,u,c){var f=0,l=0;if(null==i||(f=o(i,u))!==(l=o(a,u))||s(i,a)<0^u>0)do{c.point(0===f||3===f?t:n,f>1?r:e)}while((f=(f+u+4)%4)!==l);else c.point(a[0],a[1])}function o(r,i){return g(r[0]-t)<u?i>0?0:3:g(r[0]-n)<u?i>0?2:1:g(r[1]-e)<u?i>0?1:0:i>0?3:2}function c(t,e){return s(t.x,e.x)}function s(t,e){var n=o(t,1),r=o(e,1);return n!==r?n-r:0===n?e[1]-t[1]:1===n?t[0]-e[0]:2===n?t[1]-e[1]:e[0]-t[0]}return function(o){var u,s,f,l,d,h,g,p,_,y,v,x=o,m=fe(),b={point:w,lineStart:function(){b.point=S,s&&s.push(f=[]);y=!0,_=!1,g=p=NaN},lineEnd:function(){u&&(S(l,d),h&&_&&m.rejoin(),u.push(m.result()));b.point=w,_&&x.lineEnd()},polygonStart:function(){x=m,u=[],s=[],v=!0},polygonEnd:function(){var e=function(){for(var e=0,n=0,i=s.length;n<i;++n)for(var a,o,u=s[n],c=1,f=u.length,l=u[0],d=l[0],h=l[1];c<f;++c)a=d,o=h,l=u[c],d=l[0],h=l[1],o<=r?h>r&&(d-a)*(r-o)>(h-o)*(t-a)&&++e:h<=r&&(d-a)*(r-o)<(h-o)*(t-a)&&--e;return e}(),n=v&&e,i=(u=Object(ye.n)(u)).length;(n||i)&&(o.polygonStart(),n&&(o.lineStart(),a(null,null,1,o),o.lineEnd()),i&&he(u,c,e,a,o),o.polygonEnd());x=o,u=s=f=null}};function w(t,e){i(t,e)&&x.point(t,e)}function S(a,o){var u=i(a,o);if(s&&f.push([a,o]),y)l=a,d=o,h=u,y=!1,u&&(x.lineStart(),x.point(a,o));else if(u&&_)x.point(a,o);else{var c=[g=Math.max(Te,Math.min(Ae,g)),p=Math.max(Te,Math.min(Ae,p))],m=[a=Math.max(Te,Math.min(Ae,a)),o=Math.max(Te,Math.min(Ae,o))];Se(c,m,t,e,n,r)?(_||(x.lineStart(),x.point(c[0],c[1])),x.point(m[0],m[1]),u||x.lineEnd(),v=!1):u&&(x.lineStart(),x.point(a,o),v=!1)}g=a,p=o,_=u}return b}}var Ce,Me,Le,Oe=function(){var t,e,n,r=0,i=0,a=960,o=500;return n={stream:function(n){return t&&e===n?t:t=Pe(r,i,a,o)(e=n)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],a=+u[1][0],o=+u[1][1],t=e=null,n):[[r,i],[a,o]]}}},Ee=r(),ke={sphere:L,point:L,lineStart:function(){ke.point=Ve,ke.lineEnd=Ge},lineEnd:L,polygonStart:L,polygonEnd:L};function Ge(){ke.point=ke.lineEnd=L}function Ve(t,e){Ce=t*=h,Me=w(e*=h),Le=y(e),ke.point=Re}function Re(t,e){t*=h;var n=w(e*=h),r=y(e),i=g(t-Ce),a=y(i),o=r*w(i),u=Le*n-Me*r*a,c=Me*n+Le*r*a;Ee.add(_(A(o*o+u*u),c)),Ce=t,Me=n,Le=r}var Ie=function(t){return Ee.reset(),z(t,ke),+Ee},De=[null,null],Ne={type:"LineString",coordinates:De},Fe=function(t,e){return De[0]=t,De[1]=e,Ie(Ne)},ze={Feature:function(t,e){return Be(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,i=n.length;++r<i;)if(Be(n[r].geometry,e))return!0;return!1}},je={Sphere:function(){return!0},Point:function(t,e){return He(t.coordinates,e)},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)if(He(n[r],e))return!0;return!1},LineString:function(t,e){return Xe(t.coordinates,e)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)if(Xe(n[r],e))return!0;return!1},Polygon:function(t,e){return Ye(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)if(Ye(n[r],e))return!0;return!1},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,i=n.length;++r<i;)if(Be(n[r],e))return!0;return!1}};function Be(t,e){return!(!t||!je.hasOwnProperty(t.type))&&je[t.type](t,e)}function He(t,e){return 0===Fe(t,e)}function Xe(t,e){var n=Fe(t[0],t[1]);return Fe(t[0],e)+Fe(e,t[1])<=n+u}function Ye(t,e){return!!_e(t.map(Ue),qe(e))}function Ue(t){return(t=t.map(qe)).pop(),t}function qe(t){return[t[0]*h,t[1]*h]}var We=function(t,e){return(t&&ze.hasOwnProperty(t.type)?ze[t.type]:Be)(t,e)};function Qe(t,e,n){var r=Object(ye.s)(t,e-u,n).concat(e);return function(t){return r.map(function(e){return[t,e]})}}function Ze(t,e,n){var r=Object(ye.s)(t,e-u,n).concat(e);return function(t){return r.map(function(e){return[e,t]})}}function Ke(){var t,e,n,r,i,a,o,c,s,f,l,d,h=10,p=h,_=90,y=360,x=2.5;function m(){return{type:"MultiLineString",coordinates:b()}}function b(){return Object(ye.s)(v(r/_)*_,n,_).map(l).concat(Object(ye.s)(v(c/y)*y,o,y).map(d)).concat(Object(ye.s)(v(e/h)*h,t,h).filter(function(t){return g(t%_)>u}).map(s)).concat(Object(ye.s)(v(a/p)*p,i,p).filter(function(t){return g(t%y)>u}).map(f))}return m.lines=function(){return b().map(function(t){return{type:"LineString",coordinates:t}})},m.outline=function(){return{type:"Polygon",coordinates:[l(r).concat(d(o).slice(1),l(n).reverse().slice(1),d(c).reverse().slice(1))]}},m.extent=function(t){return arguments.length?m.extentMajor(t).extentMinor(t):m.extentMinor()},m.extentMajor=function(t){return arguments.length?(r=+t[0][0],n=+t[1][0],c=+t[0][1],o=+t[1][1],r>n&&(t=r,r=n,n=t),c>o&&(t=c,c=o,o=t),m.precision(x)):[[r,c],[n,o]]},m.extentMinor=function(n){return arguments.length?(e=+n[0][0],t=+n[1][0],a=+n[0][1],i=+n[1][1],e>t&&(n=e,e=t,t=n),a>i&&(n=a,a=i,i=n),m.precision(x)):[[e,a],[t,i]]},m.step=function(t){return arguments.length?m.stepMajor(t).stepMinor(t):m.stepMinor()},m.stepMajor=function(t){return arguments.length?(_=+t[0],y=+t[1],m):[_,y]},m.stepMinor=function(t){return arguments.length?(h=+t[0],p=+t[1],m):[h,p]},m.precision=function(u){return arguments.length?(x=+u,s=Qe(a,i,90),f=Ze(e,t,x),l=Qe(c,o,90),d=Ze(r,n,x),m):x},m.extentMajor([[-180,-90+u],[180,90-u]]).extentMinor([[-180,-80-u],[180,80+u]])}function Je(){return Ke()()}var $e,tn,en,nn,rn=function(t,e){var n=t[0]*h,r=t[1]*h,i=e[0]*h,a=e[1]*h,o=y(r),u=w(r),c=y(a),s=w(a),f=o*y(n),l=o*w(n),g=c*y(i),p=c*w(i),v=2*C(A(M(a-r)+o*c*M(i-n))),x=w(v),m=v?function(t){var e=w(t*=v)/x,n=w(v-t)/x,r=n*f+e*g,i=n*l+e*p,a=n*u+e*s;return[_(i,r)*d,_(a,A(r*r+i*i))*d]}:function(){return[n*d,r*d]};return m.distance=v,m},an=function(t){return t},on=r(),un=r(),cn={point:L,lineStart:L,lineEnd:L,polygonStart:function(){cn.lineStart=sn,cn.lineEnd=dn},polygonEnd:function(){cn.lineStart=cn.lineEnd=cn.point=L,on.add(g(un)),un.reset()},result:function(){var t=on/2;return on.reset(),t}};function sn(){cn.point=fn}function fn(t,e){cn.point=ln,$e=en=t,tn=nn=e}function ln(t,e){un.add(nn*t-en*e),en=t,nn=e}function dn(){ln($e,tn)}var hn=cn,gn=1/0,pn=gn,_n=-gn,yn=_n;var vn,xn,mn,bn,wn={point:function(t,e){t<gn&&(gn=t);t>_n&&(_n=t);e<pn&&(pn=e);e>yn&&(yn=e)},lineStart:L,lineEnd:L,polygonStart:L,polygonEnd:L,result:function(){var t=[[gn,pn],[_n,yn]];return _n=yn=-(pn=gn=1/0),t}},Sn=0,An=0,Tn=0,Pn=0,Cn=0,Mn=0,Ln=0,On=0,En=0,kn={point:Gn,lineStart:Vn,lineEnd:Dn,polygonStart:function(){kn.lineStart=Nn,kn.lineEnd=Fn},polygonEnd:function(){kn.point=Gn,kn.lineStart=Vn,kn.lineEnd=Dn},result:function(){var t=En?[Ln/En,On/En]:Mn?[Pn/Mn,Cn/Mn]:Tn?[Sn/Tn,An/Tn]:[NaN,NaN];return Sn=An=Tn=Pn=Cn=Mn=Ln=On=En=0,t}};function Gn(t,e){Sn+=t,An+=e,++Tn}function Vn(){kn.point=Rn}function Rn(t,e){kn.point=In,Gn(mn=t,bn=e)}function In(t,e){var n=t-mn,r=e-bn,i=A(n*n+r*r);Pn+=i*(mn+t)/2,Cn+=i*(bn+e)/2,Mn+=i,Gn(mn=t,bn=e)}function Dn(){kn.point=Gn}function Nn(){kn.point=zn}function Fn(){jn(vn,xn)}function zn(t,e){kn.point=jn,Gn(vn=mn=t,xn=bn=e)}function jn(t,e){var n=t-mn,r=e-bn,i=A(n*n+r*r);Pn+=i*(mn+t)/2,Cn+=i*(bn+e)/2,Mn+=i,Ln+=(i=bn*t-mn*e)*(mn+t),On+=i*(bn+e),En+=3*i,Gn(mn=t,bn=e)}var Bn=kn;function Hn(t){this._context=t}Hn.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,l)}},result:L};var Xn,Yn,Un,qn,Wn,Qn=r(),Zn={point:L,lineStart:function(){Zn.point=Kn},lineEnd:function(){Xn&&Jn(Yn,Un),Zn.point=L},polygonStart:function(){Xn=!0},polygonEnd:function(){Xn=null},result:function(){var t=+Qn;return Qn.reset(),t}};function Kn(t,e){Zn.point=Jn,Yn=qn=t,Un=Wn=e}function Jn(t,e){qn-=t,Wn-=e,Qn.add(A(qn*qn+Wn*Wn)),qn=t,Wn=e}var $n=Zn;function tr(){this._string=[]}function er(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}tr.prototype={_radius:4.5,_circle:er(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._string.push("M",t,",",e),this._point=1;break;case 1:this._string.push("L",t,",",e);break;default:null==this._circle&&(this._circle=er(this._radius)),this._string.push("M",t,",",e,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}};var nr=function(t,e){var n,r,i=4.5;function a(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),z(t,n(r))),r.result()}return a.area=function(t){return z(t,n(hn)),hn.result()},a.measure=function(t){return z(t,n($n)),$n.result()},a.bounds=function(t){return z(t,n(wn)),wn.result()},a.centroid=function(t){return z(t,n(Bn)),Bn.result()},a.projection=function(e){return arguments.length?(n=null==e?(t=null,an):(t=e).stream,a):t},a.context=function(t){return arguments.length?(r=null==t?(e=null,new tr):new Hn(e=t),"function"!=typeof i&&r.pointRadius(i),a):e},a.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),a):i},a.projection(t).context(e)},rr=function(t){return{stream:ir(t)}};function ir(t){return function(e){var n=new ar;for(var r in t)n[r]=t[r];return n.stream=e,n}}function ar(){}function or(t,e,n){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),z(n,t.stream(wn)),e(wn.result()),null!=r&&t.clipExtent(r),t}function ur(t,e,n){return or(t,function(n){var r=e[1][0]-e[0][0],i=e[1][1]-e[0][1],a=Math.min(r/(n[1][0]-n[0][0]),i/(n[1][1]-n[0][1])),o=+e[0][0]+(r-a*(n[1][0]+n[0][0]))/2,u=+e[0][1]+(i-a*(n[1][1]+n[0][1]))/2;t.scale(150*a).translate([o,u])},n)}function cr(t,e,n){return ur(t,[[0,0],e],n)}function sr(t,e,n){return or(t,function(n){var r=+e,i=r/(n[1][0]-n[0][0]),a=(r-i*(n[1][0]+n[0][0]))/2,o=-i*n[0][1];t.scale(150*i).translate([a,o])},n)}function fr(t,e,n){return or(t,function(n){var r=+e,i=r/(n[1][1]-n[0][1]),a=-i*n[0][0],o=(r-i*(n[1][1]+n[0][1]))/2;t.scale(150*i).translate([a,o])},n)}ar.prototype={constructor:ar,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var lr=16,dr=y(30*h),hr=function(t,e){return+e?function(t,e){function n(r,i,a,o,c,s,f,l,d,h,p,y,v,x){var m=f-r,b=l-i,w=m*m+b*b;if(w>4*e&&v--){var S=o+h,T=c+p,P=s+y,M=A(S*S+T*T+P*P),L=C(P/=M),O=g(g(P)-1)<u||g(a-d)<u?(a+d)/2:_(T,S),E=t(O,L),k=E[0],G=E[1],V=k-r,R=G-i,I=b*V-m*R;(I*I/w>e||g((m*V+b*R)/w-.5)>.3||o*h+c*p+s*y<dr)&&(n(r,i,a,o,c,s,k,G,O,S/=M,T/=M,P,v,x),x.point(k,G),n(k,G,O,S,T,P,f,l,d,h,p,y,v,x))}}return function(e){var r,i,a,o,u,c,s,f,l,d,h,g,p={point:_,lineStart:y,lineEnd:x,polygonStart:function(){e.polygonStart(),p.lineStart=m},polygonEnd:function(){e.polygonEnd(),p.lineStart=y}};function _(n,r){n=t(n,r),e.point(n[0],n[1])}function y(){f=NaN,p.point=v,e.lineStart()}function v(r,i){var a=Z([r,i]),o=t(r,i);n(f,l,s,d,h,g,f=o[0],l=o[1],s=r,d=a[0],h=a[1],g=a[2],lr,e),e.point(f,l)}function x(){p.point=_,e.lineEnd()}function m(){y(),p.point=b,p.lineEnd=w}function b(t,e){v(r=t,e),i=f,a=l,o=d,u=h,c=g,p.point=v}function w(){n(f,l,s,d,h,g,i,a,r,o,u,c,lr,e),p.lineEnd=x,x()}return p}}(t,e):function(t){return ir({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}(t)};var gr=ir({point:function(t,e){this.stream.point(t*h,e*h)}});function pr(t,e,n,r){var i=y(r),a=w(r),o=i*t,u=a*t,c=i/t,s=a/t,f=(a*n-i*e)/t,l=(a*e+i*n)/t;function d(t,r){return[o*t-u*r+e,n-u*t-o*r]}return d.invert=function(t,e){return[c*t-s*e+f,l-s*t-c*e]},d}function _r(t){return yr(function(){return t})()}function yr(t){var e,n,r,i,a,o,u,c,s,f,l=150,g=480,p=250,_=0,y=0,v=0,x=0,m=0,b=0,w=null,S=be,T=null,P=an,C=.5;function M(t){return c(t[0]*h,t[1]*h)}function L(t){return(t=c.invert(t[0],t[1]))&&[t[0]*d,t[1]*d]}function O(){var t=pr(l,0,0,b).apply(null,e(_,y)),r=(b?pr:function(t,e,n){function r(r,i){return[e+t*r,n-t*i]}return r.invert=function(r,i){return[(r-e)/t,(n-i)/t]},r})(l,g-t[0],p-t[1],b);return n=ne(v,x,m),u=te(e,r),c=te(n,u),o=hr(u,C),E()}function E(){return s=f=null,M}return M.stream=function(t){return s&&f===t?s:s=gr(function(t){return ir({point:function(e,n){var r=t(e,n);return this.stream.point(r[0],r[1])}})}(n)(S(o(P(f=t)))))},M.preclip=function(t){return arguments.length?(S=t,w=void 0,E()):S},M.postclip=function(t){return arguments.length?(P=t,T=r=i=a=null,E()):P},M.clipAngle=function(t){return arguments.length?(S=+t?we(w=t*h):(w=null,be),E()):w*d},M.clipExtent=function(t){return arguments.length?(P=null==t?(T=r=i=a=null,an):Pe(T=+t[0][0],r=+t[0][1],i=+t[1][0],a=+t[1][1]),E()):null==T?null:[[T,r],[i,a]]},M.scale=function(t){return arguments.length?(l=+t,O()):l},M.translate=function(t){return arguments.length?(g=+t[0],p=+t[1],O()):[g,p]},M.center=function(t){return arguments.length?(_=t[0]%360*h,y=t[1]%360*h,O()):[_*d,y*d]},M.rotate=function(t){return arguments.length?(v=t[0]%360*h,x=t[1]%360*h,m=t.length>2?t[2]%360*h:0,O()):[v*d,x*d,m*d]},M.angle=function(t){return arguments.length?(b=t%360*h,O()):b*d},M.precision=function(t){return arguments.length?(o=hr(u,C=t*t),E()):A(C)},M.fitExtent=function(t,e){return ur(M,t,e)},M.fitSize=function(t,e){return cr(M,t,e)},M.fitWidth=function(t,e){return sr(M,t,e)},M.fitHeight=function(t,e){return fr(M,t,e)},function(){return e=t.apply(this,arguments),M.invert=e.invert&&L,O()}}function vr(t){var e=0,n=c/3,r=yr(t),i=r(e,n);return i.parallels=function(t){return arguments.length?r(e=t[0]*h,n=t[1]*h):[e*d,n*d]},i}function xr(t,e){var n=w(t),r=(n+w(e))/2;if(g(r)<u)return function(t){var e=y(t);function n(t,n){return[t*e,w(n)/e]}return n.invert=function(t,n){return[t/e,C(n*e)]},n}(t);var i=1+n*(2*r-n),a=A(i)/r;function o(t,e){var n=A(i-2*r*w(e))/r;return[n*w(t*=r),a-n*y(t)]}return o.invert=function(t,e){var n=a-e;return[_(t,g(n))/r*S(n),C((i-(t*t+n*n)*r*r)/(2*r))]},o}var mr=function(){return vr(xr).scale(155.424).center([0,33.6442])},br=function(){return mr().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])};var wr=function(){var t,e,n,r,i,a,o=br(),c=mr().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=mr().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,e){a=[t,e]}};function l(t){var e=t[0],o=t[1];return a=null,n.point(e,o),a||(r.point(e,o),a)||(i.point(e,o),a)}function d(){return t=e=null,l}return l.invert=function(t){var e=o.scale(),n=o.translate(),r=(t[0]-n[0])/e,i=(t[1]-n[1])/e;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?c:i>=.166&&i<.234&&r>=-.214&&r<-.115?s:o).invert(t)},l.stream=function(n){return t&&e===n?t:(r=[o.stream(e=n),c.stream(n),s.stream(n)],i=r.length,t={point:function(t,e){for(var n=-1;++n<i;)r[n].point(t,e)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},l.precision=function(t){return arguments.length?(o.precision(t),c.precision(t),s.precision(t),d()):o.precision()},l.scale=function(t){return arguments.length?(o.scale(t),c.scale(.35*t),s.scale(t),l.translate(o.translate())):o.scale()},l.translate=function(t){if(!arguments.length)return o.translate();var e=o.scale(),a=+t[0],l=+t[1];return n=o.translate(t).clipExtent([[a-.455*e,l-.238*e],[a+.455*e,l+.238*e]]).stream(f),r=c.translate([a-.307*e,l+.201*e]).clipExtent([[a-.425*e+u,l+.12*e+u],[a-.214*e-u,l+.234*e-u]]).stream(f),i=s.translate([a-.205*e,l+.212*e]).clipExtent([[a-.214*e+u,l+.166*e+u],[a-.115*e-u,l+.234*e-u]]).stream(f),d()},l.fitExtent=function(t,e){return ur(l,t,e)},l.fitSize=function(t,e){return cr(l,t,e)},l.fitWidth=function(t,e){return sr(l,t,e)},l.fitHeight=function(t,e){return fr(l,t,e)},l.scale(1070)};function Sr(t){return function(e,n){var r=y(e),i=y(n),a=t(r*i);return[a*i*w(e),a*w(n)]}}function Ar(t){return function(e,n){var r=A(e*e+n*n),i=t(r),a=w(i),o=y(i);return[_(e*a,r*o),C(r&&n*a/r)]}}var Tr=Sr(function(t){return A(2/(1+t))});Tr.invert=Ar(function(t){return 2*C(t/2)});var Pr=function(){return _r(Tr).scale(124.75).clipAngle(179.999)},Cr=Sr(function(t){return(t=P(t))&&t/w(t)});Cr.invert=Ar(function(t){return t});var Mr=function(){return _r(Cr).scale(79.4188).clipAngle(179.999)};function Lr(t,e){return[t,m(T((s+e)/2))]}Lr.invert=function(t,e){return[t,2*p(x(e))-s]};var Or=function(){return Er(Lr).scale(961/l)};function Er(t){var e,n,r,i=_r(t),a=i.center,o=i.scale,u=i.translate,s=i.clipExtent,f=null;function l(){var a=c*o(),u=i(oe(i.rotate()).invert([0,0]));return s(null==f?[[u[0]-a,u[1]-a],[u[0]+a,u[1]+a]]:t===Lr?[[Math.max(u[0]-a,f),e],[Math.min(u[0]+a,n),r]]:[[f,Math.max(u[1]-a,e)],[n,Math.min(u[1]+a,r)]])}return i.scale=function(t){return arguments.length?(o(t),l()):o()},i.translate=function(t){return arguments.length?(u(t),l()):u()},i.center=function(t){return arguments.length?(a(t),l()):a()},i.clipExtent=function(t){return arguments.length?(null==t?f=e=n=r=null:(f=+t[0][0],e=+t[0][1],n=+t[1][0],r=+t[1][1]),l()):null==f?null:[[f,e],[n,r]]},l()}function kr(t){return T((s+t)/2)}function Gr(t,e){var n=y(t),r=t===e?w(t):m(n/y(e))/m(kr(e)/kr(t)),i=n*b(kr(t),r)/r;if(!r)return Lr;function a(t,e){i>0?e<-s+u&&(e=-s+u):e>s-u&&(e=s-u);var n=i/b(kr(e),r);return[n*w(r*t),i-n*y(r*t)]}return a.invert=function(t,e){var n=i-e,a=S(r)*A(t*t+n*n);return[_(t,g(n))/r*S(n),2*p(b(i/a,1/r))-s]},a}var Vr=function(){return vr(Gr).scale(109.5).parallels([30,30])};function Rr(t,e){return[t,e]}Rr.invert=Rr;var Ir=function(){return _r(Rr).scale(152.63)};function Dr(t,e){var n=y(t),r=t===e?w(t):(n-y(e))/(e-t),i=n/r+t;if(g(r)<u)return Rr;function a(t,e){var n=i-e,a=r*t;return[n*w(a),i-n*y(a)]}return a.invert=function(t,e){var n=i-e;return[_(t,g(n))/r*S(n),i-S(r)*A(t*t+n*n)]},a}var Nr=function(){return vr(Dr).scale(131.154).center([0,13.9389])};function Fr(t,e){var n=y(e),r=y(t)*n;return[n*w(t)/r,w(e)/r]}Fr.invert=Ar(p);var zr=function(){return _r(Fr).scale(144.049).clipAngle(60)};function jr(t,e,n,r){return 1===t&&1===e&&0===n&&0===r?an:ir({point:function(i,a){this.stream.point(i*t+n,a*e+r)}})}var Br=function(){var t,e,n,r,i,a,o=1,u=0,c=0,s=1,f=1,l=an,d=null,h=an;function g(){return r=i=null,a}return a={stream:function(t){return r&&i===t?r:r=l(h(i=t))},postclip:function(r){return arguments.length?(h=r,d=t=e=n=null,g()):h},clipExtent:function(r){return arguments.length?(h=null==r?(d=t=e=n=null,an):Pe(d=+r[0][0],t=+r[0][1],e=+r[1][0],n=+r[1][1]),g()):null==d?null:[[d,t],[e,n]]},scale:function(t){return arguments.length?(l=jr((o=+t)*s,o*f,u,c),g()):o},translate:function(t){return arguments.length?(l=jr(o*s,o*f,u=+t[0],c=+t[1]),g()):[u,c]},reflectX:function(t){return arguments.length?(l=jr(o*(s=t?-1:1),o*f,u,c),g()):s<0},reflectY:function(t){return arguments.length?(l=jr(o*s,o*(f=t?-1:1),u,c),g()):f<0},fitExtent:function(t,e){return ur(a,t,e)},fitSize:function(t,e){return cr(a,t,e)},fitWidth:function(t,e){return sr(a,t,e)},fitHeight:function(t,e){return fr(a,t,e)}}};function Hr(t,e){var n=e*e,r=n*n;return[t*(.8707-.131979*n+r*(r*(.003971*n-.001529*r)-.013791)),e*(1.007226+n*(.015085+r*(.028874*n-.044475-.005916*r)))]}Hr.invert=function(t,e){var n,r=e,i=25;do{var a=r*r,o=a*a;r-=n=(r*(1.007226+a*(.015085+o*(.028874*a-.044475-.005916*o)))-e)/(1.007226+a*(.045255+o*(.259866*a-.311325-.005916*11*o)))}while(g(n)>u&&--i>0);return[t/(.8707+(a=r*r)*(a*(a*a*a*(.003971-.001529*a)-.013791)-.131979)),r]};var Xr=function(){return _r(Hr).scale(175.295)};function Yr(t,e){return[y(e)*w(t),w(e)]}Yr.invert=Ar(C);var Ur=function(){return _r(Yr).scale(249.5).clipAngle(90+u)};function qr(t,e){var n=y(e),r=1+y(t)*n;return[n*w(t)/r,w(e)/r]}qr.invert=Ar(function(t){return 2*p(t)});var Wr=function(){return _r(qr).scale(250).clipAngle(142)};function Qr(t,e){return[m(T((s+e)/2)),-t]}Qr.invert=function(t,e){return[-e,2*p(x(t))-s]};var Zr=function(){var t=Er(Qr),e=t.center,n=t.rotate;return t.center=function(t){return arguments.length?e([-t[1],t[0]]):[(t=e())[1],-t[0]]},t.rotate=function(t){return arguments.length?n([t[0],t[1],t.length>2?t[2]+90:90]):[(t=n())[0],t[1],t[2]-90]},n([0,0,90]).scale(159.155)};n.d(e,"c",function(){return W}),n.d(e,"h",function(){return zt}),n.d(e,"i",function(){return Jt}),n.d(e,"j",function(){return se}),n.d(e,"k",function(){return be}),n.d(e,"l",function(){return we}),n.d(e,"m",function(){return Oe}),n.d(e,"n",function(){return Pe}),n.d(e,"u",function(){return We}),n.d(e,"v",function(){return Fe}),n.d(e,"A",function(){return Ke}),n.d(e,"B",function(){return Je}),n.d(e,"D",function(){return rn}),n.d(e,"E",function(){return Ie}),n.d(e,"L",function(){return nr}),n.d(e,"a",function(){return br}),n.d(e,"b",function(){return wr}),n.d(e,"d",function(){return Pr}),n.d(e,"e",function(){return Tr}),n.d(e,"f",function(){return Mr}),n.d(e,"g",function(){return Cr}),n.d(e,"o",function(){return Vr}),n.d(e,"p",function(){return Gr}),n.d(e,"q",function(){return mr}),n.d(e,"r",function(){return xr}),n.d(e,"s",function(){return Nr}),n.d(e,"t",function(){return Dr}),n.d(e,"w",function(){return Ir}),n.d(e,"x",function(){return Rr}),n.d(e,"y",function(){return zr}),n.d(e,"z",function(){return Fr}),n.d(e,"C",function(){return Br}),n.d(e,"M",function(){return _r}),n.d(e,"N",function(){return yr}),n.d(e,"F",function(){return Or}),n.d(e,"G",function(){return Lr}),n.d(e,"H",function(){return Xr}),n.d(e,"I",function(){return Hr}),n.d(e,"J",function(){return Ur}),n.d(e,"K",function(){return Yr}),n.d(e,"P",function(){return Wr}),n.d(e,"Q",function(){return qr}),n.d(e,"T",function(){return Zr}),n.d(e,"U",function(){return Qr}),n.d(e,"O",function(){return oe}),n.d(e,"R",function(){return z}),n.d(e,"S",function(){return rr})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.escapeHtml=function(t){var e,n=""+t,i=r.exec(n);if(!i)return n;var a="",o=0,u=0;for(o=i.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#39;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}u!==o&&(a+=n.substring(u,o)),u=o+1,a+=e}return u!==o?a+n.substring(u,o):a};var r=/["'&<>]/},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extend=function(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])t[n]=arguments[e][n];return t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t){return null!==t&&"function"==typeof t.getTime&&!isNaN(t.getTime())}function a(t){return/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i.test(t)}e.testObject=i,e.testString=a,e.default=function(t){return"object"===(void 0===t?"undefined":r(t))?i(t):"string"==typeof t&&a(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=[],n=0;n<t;n++)e.push(null);return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.appendColumn=u,e.appendRow=c;var r,i=n(35),a=(r=i)&&r.__esModule?r:{default:r},o=n(7);function u(t,e){var n=this,r=(Array.prototype.slice.call(arguments,2),void 0!==t?t:null);return"function"==typeof e?(n.matrix[0].push(r),(0,o.each)(n.matrix,function(t,r){var i=void 0;r>0&&(void 0===(i=e.call(n,t,r))&&(i=null),n.matrix[r].push(i))})):(!e||e instanceof Array)&&((e=e||[]).length<=n.matrix.length-1?e=e.concat((0,a.default)(n.matrix.length-1-e.length)):(0,o.each)(e,function(t,r){n.matrix.length-1<e.length&&c.call(n,String(n.matrix.length))}),n.matrix[0].push(r),(0,o.each)(e,function(t,e){n.matrix[e+1][n.matrix[0].length-1]=t})),n}function c(t,e){var n=this,r=(Array.prototype.slice.call(arguments,2),void 0!==t?t:null),i=[];return i.push(r),"function"==typeof e?((0,o.each)(n.matrix[0],function(t,r){var a=void 0,o=void 0;r>0&&(a=n.selectColumn(r),void 0===(o=e.call(n,a,r))&&(o=null),i.push(o))}),n.matrix.push(i)):(!e||e instanceof Array)&&((e=e||[]).length<=n.matrix[0].length-1?e=e.concat((0,a.default)(n.matrix[0].length-1-e.length)):(0,o.each)(e,function(t,r){n.matrix[0].length-1<e.length&&u.call(n,String(n.matrix[0].length))}),n.matrix.push(i.concat(e))),n}},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(17),a=n(18),o=n(20),u=n(10),c=n(3),s=n(24),f=n(6),l=n(12),d=n(15),h=n(16),g=n(23),p=n(26),_=n(9),y=n(31),v=n(28),x=n(4),m=n(5),b=n(21),w=n(14),S=n(22),A=n(27),T=n(29),P=n(0),C=n(30),M=n(2),L=n(13),O=n(8),E=n(11),k=n(25),G=n(19);n.d(e,"version",function(){return"5.4.0"}),n.d(e,"bisect",function(){return r.b}),n.d(e,"bisectRight",function(){return r.d}),n.d(e,"bisectLeft",function(){return r.c}),n.d(e,"ascending",function(){return r.a}),n.d(e,"bisector",function(){return r.e}),n.d(e,"cross",function(){return r.f}),n.d(e,"descending",function(){return r.g}),n.d(e,"deviation",function(){return r.h}),n.d(e,"extent",function(){return r.i}),n.d(e,"histogram",function(){return r.j}),n.d(e,"thresholdFreedmanDiaconis",function(){return r.w}),n.d(e,"thresholdScott",function(){return r.x}),n.d(e,"thresholdSturges",function(){return r.y}),n.d(e,"max",function(){return r.k}),n.d(e,"mean",function(){return r.l}),n.d(e,"median",function(){return r.m}),n.d(e,"merge",function(){return r.n}),n.d(e,"min",function(){return r.o}),n.d(e,"pairs",function(){return r.p}),n.d(e,"permute",function(){return r.q}),n.d(e,"quantile",function(){return r.r}),n.d(e,"range",function(){return r.s}),n.d(e,"scan",function(){return r.t}),n.d(e,"shuffle",function(){return r.u}),n.d(e,"sum",function(){return r.v}),n.d(e,"ticks",function(){return r.B}),n.d(e,"tickIncrement",function(){return r.z}),n.d(e,"tickStep",function(){return r.A}),n.d(e,"transpose",function(){return r.C}),n.d(e,"variance",function(){return r.D}),n.d(e,"zip",function(){return r.E}),n.d(e,"axisTop",function(){return i.d}),n.d(e,"axisRight",function(){return i.c}),n.d(e,"axisBottom",function(){return i.a}),n.d(e,"axisLeft",function(){return i.b}),n.d(e,"brush",function(){return a.a}),n.d(e,"brushX",function(){return a.c}),n.d(e,"brushY",function(){return a.d}),n.d(e,"brushSelection",function(){return a.b}),n.d(e,"chord",function(){return o.a}),n.d(e,"ribbon",function(){return o.b}),n.d(e,"nest",function(){return u.d}),n.d(e,"set",function(){return u.e}),n.d(e,"map",function(){return u.c}),n.d(e,"keys",function(){return u.b}),n.d(e,"values",function(){return u.f}),n.d(e,"entries",function(){return u.a}),n.d(e,"color",function(){return c.a}),n.d(e,"rgb",function(){return c.h}),n.d(e,"hsl",function(){return c.e}),n.d(e,"lab",function(){return c.f}),n.d(e,"hcl",function(){return c.d}),n.d(e,"lch",function(){return c.g}),n.d(e,"gray",function(){return c.c}),n.d(e,"cubehelix",function(){return c.b}),n.d(e,"contours",function(){return s.b}),n.d(e,"contourDensity",function(){return s.a}),n.d(e,"dispatch",function(){return f.a}),n.d(e,"drag",function(){return l.a}),n.d(e,"dragDisable",function(){return l.b}),n.d(e,"dragEnable",function(){return l.c}),n.d(e,"dsvFormat",function(){return d.e}),n.d(e,"csvParse",function(){return d.c}),n.d(e,"csvParseRows",function(){return d.d}),n.d(e,"csvFormat",function(){return d.a}),n.d(e,"csvFormatRows",function(){return d.b}),n.d(e,"tsvParse",function(){return d.h}),n.d(e,"tsvParseRows",function(){return d.i}),n.d(e,"tsvFormat",function(){return d.f}),n.d(e,"tsvFormatRows",function(){return d.g}),n.d(e,"easeLinear",function(){return h.y}),n.d(e,"easeQuad",function(){return h.D}),n.d(e,"easeQuadIn",function(){return h.E}),n.d(e,"easeQuadOut",function(){return h.G}),n.d(e,"easeQuadInOut",function(){return h.F}),n.d(e,"easeCubic",function(){return h.m}),n.d(e,"easeCubicIn",function(){return h.n}),n.d(e,"easeCubicOut",function(){return h.p}),n.d(e,"easeCubicInOut",function(){return h.o}),n.d(e,"easePoly",function(){return h.z}),n.d(e,"easePolyIn",function(){return h.A}),n.d(e,"easePolyOut",function(){return h.C}),n.d(e,"easePolyInOut",function(){return h.B}),n.d(e,"easeSin",function(){return h.H}),n.d(e,"easeSinIn",function(){return h.I}),n.d(e,"easeSinOut",function(){return h.K}),n.d(e,"easeSinInOut",function(){return h.J}),n.d(e,"easeExp",function(){return h.u}),n.d(e,"easeExpIn",function(){return h.v}),n.d(e,"easeExpOut",function(){return h.x}),n.d(e,"easeExpInOut",function(){return h.w}),n.d(e,"easeCircle",function(){return h.i}),n.d(e,"easeCircleIn",function(){return h.j}),n.d(e,"easeCircleOut",function(){return h.l}),n.d(e,"easeCircleInOut",function(){return h.k}),n.d(e,"easeBounce",function(){return h.e}),n.d(e,"easeBounceIn",function(){return h.f}),n.d(e,"easeBounceOut",function(){return h.h}),n.d(e,"easeBounceInOut",function(){return h.g}),n.d(e,"easeBack",function(){return h.a}),n.d(e,"easeBackIn",function(){return h.b}),n.d(e,"easeBackOut",function(){return h.d}),n.d(e,"easeBackInOut",function(){return h.c}),n.d(e,"easeElastic",function(){return h.q}),n.d(e,"easeElasticIn",function(){return h.r}),n.d(e,"easeElasticOut",function(){return h.t}),n.d(e,"easeElasticInOut",function(){return h.s}),n.d(e,"blob",function(){return g.a}),n.d(e,"buffer",function(){return g.b}),n.d(e,"dsv",function(){return g.d}),n.d(e,"csv",function(){return g.c}),n.d(e,"tsv",function(){return g.j}),n.d(e,"image",function(){return g.f}),n.d(e,"json",function(){return g.g}),n.d(e,"text",function(){return g.i}),n.d(e,"xml",function(){return g.k}),n.d(e,"html",function(){return g.e}),n.d(e,"svg",function(){return g.h}),n.d(e,"forceCenter",function(){return p.a}),n.d(e,"forceCollide",function(){return p.b}),n.d(e,"forceLink",function(){return p.c}),n.d(e,"forceManyBody",function(){return p.d}),n.d(e,"forceRadial",function(){return p.e}),n.d(e,"forceSimulation",function(){return p.f}),n.d(e,"forceX",function(){return p.g}),n.d(e,"forceY",function(){return p.h}),n.d(e,"formatDefaultLocale",function(){return _.b}),n.d(e,"format",function(){return _.a}),n.d(e,"formatPrefix",function(){return _.d}),n.d(e,"formatLocale",function(){return _.c}),n.d(e,"formatSpecifier",function(){return _.e}),n.d(e,"precisionFixed",function(){return _.f}),n.d(e,"precisionPrefix",function(){return _.g}),n.d(e,"precisionRound",function(){return _.h}),n.d(e,"geoArea",function(){return y.c}),n.d(e,"geoBounds",function(){return y.h}),n.d(e,"geoCentroid",function(){return y.i}),n.d(e,"geoCircle",function(){return y.j}),n.d(e,"geoClipAntimeridian",function(){return y.k}),n.d(e,"geoClipCircle",function(){return y.l}),n.d(e,"geoClipExtent",function(){return y.m}),n.d(e,"geoClipRectangle",function(){return y.n}),n.d(e,"geoContains",function(){return y.u}),n.d(e,"geoDistance",function(){return y.v}),n.d(e,"geoGraticule",function(){return y.A}),n.d(e,"geoGraticule10",function(){return y.B}),n.d(e,"geoInterpolate",function(){return y.D}),n.d(e,"geoLength",function(){return y.E}),n.d(e,"geoPath",function(){return y.L}),n.d(e,"geoAlbers",function(){return y.a}),n.d(e,"geoAlbersUsa",function(){return y.b}),n.d(e,"geoAzimuthalEqualArea",function(){return y.d}),n.d(e,"geoAzimuthalEqualAreaRaw",function(){return y.e}),n.d(e,"geoAzimuthalEquidistant",function(){return y.f}),n.d(e,"geoAzimuthalEquidistantRaw",function(){return y.g}),n.d(e,"geoConicConformal",function(){return y.o}),n.d(e,"geoConicConformalRaw",function(){return y.p}),n.d(e,"geoConicEqualArea",function(){return y.q}),n.d(e,"geoConicEqualAreaRaw",function(){return y.r}),n.d(e,"geoConicEquidistant",function(){return y.s}),n.d(e,"geoConicEquidistantRaw",function(){return y.t}),n.d(e,"geoEquirectangular",function(){return y.w}),n.d(e,"geoEquirectangularRaw",function(){return y.x}),n.d(e,"geoGnomonic",function(){return y.y}),n.d(e,"geoGnomonicRaw",function(){return y.z}),n.d(e,"geoIdentity",function(){return y.C}),n.d(e,"geoProjection",function(){return y.M}),n.d(e,"geoProjectionMutator",function(){return y.N}),n.d(e,"geoMercator",function(){return y.F}),n.d(e,"geoMercatorRaw",function(){return y.G}),n.d(e,"geoNaturalEarth1",function(){return y.H}),n.d(e,"geoNaturalEarth1Raw",function(){return y.I}),n.d(e,"geoOrthographic",function(){return y.J}),n.d(e,"geoOrthographicRaw",function(){return y.K}),n.d(e,"geoStereographic",function(){return y.P}),n.d(e,"geoStereographicRaw",function(){return y.Q}),n.d(e,"geoTransverseMercator",function(){return y.T}),n.d(e,"geoTransverseMercatorRaw",function(){return y.U}),n.d(e,"geoRotation",function(){return y.O}),n.d(e,"geoStream",function(){return y.R}),n.d(e,"geoTransform",function(){return y.S}),n.d(e,"cluster",function(){return v.a}),n.d(e,"hierarchy",function(){return v.b}),n.d(e,"pack",function(){return v.c}),n.d(e,"packSiblings",function(){return v.e}),n.d(e,"packEnclose",function(){return v.d}),n.d(e,"partition",function(){return v.f}),n.d(e,"stratify",function(){return v.g}),n.d(e,"tree",function(){return v.h}),n.d(e,"treemap",function(){return v.i}),n.d(e,"treemapBinary",function(){return v.j}),n.d(e,"treemapDice",function(){return v.k}),n.d(e,"treemapSlice",function(){return v.m}),n.d(e,"treemapSliceDice",function(){return v.n}),n.d(e,"treemapSquarify",function(){return v.o}),n.d(e,"treemapResquarify",function(){return v.l}),n.d(e,"interpolate",function(){return x.a}),n.d(e,"interpolateArray",function(){return x.b}),n.d(e,"interpolateBasis",function(){return x.c}),n.d(e,"interpolateBasisClosed",function(){return x.d}),n.d(e,"interpolateDate",function(){return x.g}),n.d(e,"interpolateNumber",function(){return x.m}),n.d(e,"interpolateObject",function(){return x.n}),n.d(e,"interpolateRound",function(){return x.r}),n.d(e,"interpolateString",function(){return x.s}),n.d(e,"interpolateTransformCss",function(){return x.t}),n.d(e,"interpolateTransformSvg",function(){return x.u}),n.d(e,"interpolateZoom",function(){return x.v}),n.d(e,"interpolateRgb",function(){return x.o}),n.d(e,"interpolateRgbBasis",function(){return x.p}),n.d(e,"interpolateRgbBasisClosed",function(){return x.q}),n.d(e,"interpolateHsl",function(){return x.j}),n.d(e,"interpolateHslLong",function(){return x.k}),n.d(e,"interpolateLab",function(){return x.l}),n.d(e,"interpolateHcl",function(){return x.h}),n.d(e,"interpolateHclLong",function(){return x.i}),n.d(e,"interpolateCubehelix",function(){return x.e}),n.d(e,"interpolateCubehelixLong",function(){return x.f}),n.d(e,"piecewise",function(){return x.w}),n.d(e,"quantize",function(){return x.x}),n.d(e,"path",function(){return m.a}),n.d(e,"polygonArea",function(){return b.a}),n.d(e,"polygonCentroid",function(){return b.b}),n.d(e,"polygonHull",function(){return b.d}),n.d(e,"polygonContains",function(){return b.c}),n.d(e,"polygonLength",function(){return b.e}),n.d(e,"quadtree",function(){return w.a}),n.d(e,"randomUniform",function(){return S.f}),n.d(e,"randomNormal",function(){return S.e}),n.d(e,"randomLogNormal",function(){return S.d}),n.d(e,"randomBates",function(){return S.a}),n.d(e,"randomIrwinHall",function(){return S.c}),n.d(e,"randomExponential",function(){return S.b}),n.d(e,"scaleBand",function(){return A.a}),n.d(e,"scalePoint",function(){return A.g}),n.d(e,"scaleIdentity",function(){return A.b}),n.d(e,"scaleLinear",function(){return A.d}),n.d(e,"scaleLog",function(){return A.e}),n.d(e,"scaleOrdinal",function(){return A.f}),n.d(e,"scaleImplicit",function(){return A.c}),n.d(e,"scalePow",function(){return A.h}),n.d(e,"scaleSqrt",function(){return A.l}),n.d(e,"scaleQuantile",function(){return A.i}),n.d(e,"scaleQuantize",function(){return A.j}),n.d(e,"scaleThreshold",function(){return A.m}),n.d(e,"scaleTime",function(){return A.n}),n.d(e,"scaleUtc",function(){return A.o}),n.d(e,"scaleSequential",function(){return A.k}),n.d(e,"schemeCategory10",function(){return T.P}),n.d(e,"schemeAccent",function(){return T.K}),n.d(e,"schemeDark2",function(){return T.Q}),n.d(e,"schemePaired",function(){return T.X}),n.d(e,"schemePastel1",function(){return T.Y}),n.d(e,"schemePastel2",function(){return T.Z}),n.d(e,"schemeSet1",function(){return T.Ma}),n.d(e,"schemeSet2",function(){return T.Na}),n.d(e,"schemeSet3",function(){return T.Oa}),n.d(e,"interpolateBrBG",function(){return T.b}),n.d(e,"schemeBrBG",function(){return T.M}),n.d(e,"interpolatePRGn",function(){return T.n}),n.d(e,"schemePRGn",function(){return T.W}),n.d(e,"interpolatePiYG",function(){return T.o}),n.d(e,"schemePiYG",function(){return T.Aa}),n.d(e,"interpolatePuOr",function(){return T.s}),n.d(e,"schemePuOr",function(){return T.Da}),n.d(e,"interpolateRdBu",function(){return T.w}),n.d(e,"schemeRdBu",function(){return T.Ga}),n.d(e,"interpolateRdGy",function(){return T.x}),n.d(e,"schemeRdGy",function(){return T.Ha}),n.d(e,"interpolateRdYlBu",function(){return T.z}),n.d(e,"schemeRdYlBu",function(){return T.Ja}),n.d(e,"interpolateRdYlGn",function(){return T.A}),n.d(e,"schemeRdYlGn",function(){return T.Ka}),n.d(e,"interpolateSpectral",function(){return T.D}),n.d(e,"schemeSpectral",function(){return T.Pa}),n.d(e,"interpolateBuGn",function(){return T.c}),n.d(e,"schemeBuGn",function(){return T.N}),n.d(e,"interpolateBuPu",function(){return T.d}),n.d(e,"schemeBuPu",function(){return T.O}),n.d(e,"interpolateGnBu",function(){return T.g}),n.d(e,"schemeGnBu",function(){return T.R}),n.d(e,"interpolateOrRd",function(){return T.l}),n.d(e,"schemeOrRd",function(){return T.U}),n.d(e,"interpolatePuBuGn",function(){return T.r}),n.d(e,"schemePuBuGn",function(){return T.Ca}),n.d(e,"interpolatePuBu",function(){return T.q}),n.d(e,"schemePuBu",function(){return T.Ba}),n.d(e,"interpolatePuRd",function(){return T.t}),n.d(e,"schemePuRd",function(){return T.Ea}),n.d(e,"interpolateRdPu",function(){return T.y}),n.d(e,"schemeRdPu",function(){return T.Ia}),n.d(e,"interpolateYlGnBu",function(){return T.H}),n.d(e,"schemeYlGnBu",function(){return T.Ra}),n.d(e,"interpolateYlGn",function(){return T.G}),n.d(e,"schemeYlGn",function(){return T.Qa}),n.d(e,"interpolateYlOrBr",function(){return T.I}),n.d(e,"schemeYlOrBr",function(){return T.Sa}),n.d(e,"interpolateYlOrRd",function(){return T.J}),n.d(e,"schemeYlOrRd",function(){return T.Ta}),n.d(e,"interpolateBlues",function(){return T.a}),n.d(e,"schemeBlues",function(){return T.L}),n.d(e,"interpolateGreens",function(){return T.h}),n.d(e,"schemeGreens",function(){return T.S}),n.d(e,"interpolateGreys",function(){return T.i}),n.d(e,"schemeGreys",function(){return T.T}),n.d(e,"interpolatePurples",function(){return T.u}),n.d(e,"schemePurples",function(){return T.Fa}),n.d(e,"interpolateReds",function(){return T.B}),n.d(e,"schemeReds",function(){return T.La}),n.d(e,"interpolateOranges",function(){return T.m}),n.d(e,"schemeOranges",function(){return T.V}),n.d(e,"interpolateCubehelixDefault",function(){return T.f}),n.d(e,"interpolateRainbow",function(){return T.v}),n.d(e,"interpolateWarm",function(){return T.F}),n.d(e,"interpolateCool",function(){return T.e}),n.d(e,"interpolateSinebow",function(){return T.C}),n.d(e,"interpolateViridis",function(){return T.E}),n.d(e,"interpolateMagma",function(){return T.k}),n.d(e,"interpolateInferno",function(){return T.j}),n.d(e,"interpolatePlasma",function(){return T.p}),n.d(e,"create",function(){return P.b}),n.d(e,"creator",function(){return P.c}),n.d(e,"local",function(){return P.f}),n.d(e,"matcher",function(){return P.g}),n.d(e,"mouse",function(){return P.h}),n.d(e,"namespace",function(){return P.i}),n.d(e,"namespaces",function(){return P.j}),n.d(e,"clientPoint",function(){return P.a}),n.d(e,"select",function(){return P.k}),n.d(e,"selectAll",function(){return P.l}),n.d(e,"selection",function(){return P.m}),n.d(e,"selector",function(){return P.n}),n.d(e,"selectorAll",function(){return P.o}),n.d(e,"style",function(){return P.p}),n.d(e,"touch",function(){return P.q}),n.d(e,"touches",function(){return P.r}),n.d(e,"window",function(){return P.s}),n.d(e,"event",function(){return P.e}),n.d(e,"customEvent",function(){return P.d}),n.d(e,"arc",function(){return C.a}),n.d(e,"area",function(){return C.b}),n.d(e,"line",function(){return C.v}),n.d(e,"pie",function(){return C.A}),n.d(e,"areaRadial",function(){return C.c}),n.d(e,"radialArea",function(){return C.C}),n.d(e,"lineRadial",function(){return C.w}),n.d(e,"radialLine",function(){return C.D}),n.d(e,"pointRadial",function(){return C.B}),n.d(e,"linkHorizontal",function(){return C.x}),n.d(e,"linkVertical",function(){return C.z}),n.d(e,"linkRadial",function(){return C.y}),n.d(e,"symbol",function(){return C.P}),n.d(e,"symbols",function(){return C.X}),n.d(e,"symbolCircle",function(){return C.Q}),n.d(e,"symbolCross",function(){return C.R}),n.d(e,"symbolDiamond",function(){return C.S}),n.d(e,"symbolSquare",function(){return C.T}),n.d(e,"symbolStar",function(){return C.U}),n.d(e,"symbolTriangle",function(){return C.V}),n.d(e,"symbolWye",function(){return C.W}),n.d(e,"curveBasisClosed",function(){return C.e}),n.d(e,"curveBasisOpen",function(){return C.f}),n.d(e,"curveBasis",function(){return C.d}),n.d(e,"curveBundle",function(){return C.g}),n.d(e,"curveCardinalClosed",function(){return C.i}),n.d(e,"curveCardinalOpen",function(){return C.j}),n.d(e,"curveCardinal",function(){return C.h}),n.d(e,"curveCatmullRomClosed",function(){return C.l}),n.d(e,"curveCatmullRomOpen",function(){return C.m}),n.d(e,"curveCatmullRom",function(){return C.k}),n.d(e,"curveLinearClosed",function(){return C.o}),n.d(e,"curveLinear",function(){return C.n}),n.d(e,"curveMonotoneX",function(){return C.p}),n.d(e,"curveMonotoneY",function(){return C.q}),n.d(e,"curveNatural",function(){return C.r}),n.d(e,"curveStep",function(){return C.s}),n.d(e,"curveStepAfter",function(){return C.t}),n.d(e,"curveStepBefore",function(){return C.u}),n.d(e,"stack",function(){return C.E}),n.d(e,"stackOffsetExpand",function(){return C.G}),n.d(e,"stackOffsetDiverging",function(){return C.F}),n.d(e,"stackOffsetNone",function(){return C.H}),n.d(e,"stackOffsetSilhouette",function(){return C.I}),n.d(e,"stackOffsetWiggle",function(){return C.J}),n.d(e,"stackOrderAscending",function(){return C.K}),n.d(e,"stackOrderDescending",function(){return C.L}),n.d(e,"stackOrderInsideOut",function(){return C.M}),n.d(e,"stackOrderNone",function(){return C.N}),n.d(e,"stackOrderReverse",function(){return C.O}),n.d(e,"timeInterval",function(){return M.g}),n.d(e,"timeMillisecond",function(){return M.h}),n.d(e,"timeMilliseconds",function(){return M.i}),n.d(e,"utcMillisecond",function(){return M.L}),n.d(e,"utcMilliseconds",function(){return M.M}),n.d(e,"timeSecond",function(){return M.r}),n.d(e,"timeSeconds",function(){return M.s}),n.d(e,"utcSecond",function(){return M.V}),n.d(e,"utcSeconds",function(){return M.W}),n.d(e,"timeMinute",function(){return M.j}),n.d(e,"timeMinutes",function(){return M.k}),n.d(e,"timeHour",function(){return M.e}),n.d(e,"timeHours",function(){return M.f}),n.d(e,"timeDay",function(){return M.a}),n.d(e,"timeDays",function(){return M.b}),n.d(e,"timeWeek",function(){return M.B}),n.d(e,"timeWeeks",function(){return M.C}),n.d(e,"timeSunday",function(){return M.t}),n.d(e,"timeSundays",function(){return M.u}),n.d(e,"timeMonday",function(){return M.l}),n.d(e,"timeMondays",function(){return M.m}),n.d(e,"timeTuesday",function(){return M.x}),n.d(e,"timeTuesdays",function(){return M.y}),n.d(e,"timeWednesday",function(){return M.z}),n.d(e,"timeWednesdays",function(){return M.A}),n.d(e,"timeThursday",function(){return M.v}),n.d(e,"timeThursdays",function(){return M.w}),n.d(e,"timeFriday",function(){return M.c}),n.d(e,"timeFridays",function(){return M.d}),n.d(e,"timeSaturday",function(){return M.p}),n.d(e,"timeSaturdays",function(){return M.q}),n.d(e,"timeMonth",function(){return M.n}),n.d(e,"timeMonths",function(){return M.o}),n.d(e,"timeYear",function(){return M.D}),n.d(e,"timeYears",function(){return M.E}),n.d(e,"utcMinute",function(){return M.N}),n.d(e,"utcMinutes",function(){return M.O}),n.d(e,"utcHour",function(){return M.J}),n.d(e,"utcHours",function(){return M.K}),n.d(e,"utcDay",function(){return M.F}),n.d(e,"utcDays",function(){return M.G}),n.d(e,"utcWeek",function(){return M.Fa}),n.d(e,"utcWeeks",function(){return M.Ga}),n.d(e,"utcSunday",function(){return M.X}),n.d(e,"utcSundays",function(){return M.Y}),n.d(e,"utcMonday",function(){return M.P}),n.d(e,"utcMondays",function(){return M.Q}),n.d(e,"utcTuesday",function(){return M.Ba}),n.d(e,"utcTuesdays",function(){return M.Ca}),n.d(e,"utcWednesday",function(){return M.Da}),n.d(e,"utcWednesdays",function(){return M.Ea}),n.d(e,"utcThursday",function(){return M.Z}),n.d(e,"utcThursdays",function(){return M.Aa}),n.d(e,"utcFriday",function(){return M.H}),n.d(e,"utcFridays",function(){return M.I}),n.d(e,"utcSaturday",function(){return M.T}),n.d(e,"utcSaturdays",function(){return M.U}),n.d(e,"utcMonth",function(){return M.R}),n.d(e,"utcMonths",function(){return M.S}),n.d(e,"utcYear",function(){return M.Ha}),n.d(e,"utcYears",function(){return M.Ia}),n.d(e,"timeFormatDefaultLocale",function(){return L.d}),n.d(e,"timeFormat",function(){return L.c}),n.d(e,"timeParse",function(){return L.f}),n.d(e,"utcFormat",function(){return L.g}),n.d(e,"utcParse",function(){return L.h}),n.d(e,"timeFormatLocale",function(){return L.e}),n.d(e,"isoFormat",function(){return L.a}),n.d(e,"isoParse",function(){return L.b}),n.d(e,"now",function(){return O.b}),n.d(e,"timer",function(){return O.d}),n.d(e,"timerFlush",function(){return O.e}),n.d(e,"timeout",function(){return O.c}),n.d(e,"interval",function(){return O.a}),n.d(e,"transition",function(){return E.c}),n.d(e,"active",function(){return E.a}),n.d(e,"interrupt",function(){return E.b}),n.d(e,"voronoi",function(){return k.a}),n.d(e,"zoom",function(){return G.a}),n.d(e,"zoomTransform",function(){return G.c}),n.d(e,"zoomIdentity",function(){return G.b})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.stripHtmlTags=function(t){return t.replace(/(<([^>]+)>)/gi,"")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7);n(33);function i(t,e,n){var i=t.slice(e||0,n?n+1:t.length),a=0;return(0,r.each)(i,function(t,e){"number"!=typeof t||isNaN(parseFloat(t))||(a+=parseFloat(t))}),a/i.length}function a(t,e,n){var i=t.slice(e||0,n?n+1:t.length),a=[];return(0,r.each)(i,function(t,e){"number"!=typeof t||isNaN(parseFloat(t))||a.push(parseFloat(t))}),Math.max.apply(Math,a)}function o(t,e,n){var i=t.slice(e||0,n?n+1:t.length),a=[];return(0,r.each)(i,function(t,e){"number"!=typeof t||isNaN(parseFloat(t))||a.push(parseFloat(t))}),Math.min.apply(Math,a)}function u(t,e,n){var i=t.slice(e||0,n?n+1:t.length),a=0;return(0,r.each)(i,function(t,e){"number"!=typeof t||isNaN(parseFloat(t))||(a+=parseFloat(t))}),a}var c=function(t){return i(t,1)},s=c,f=function(t){return u(t,1)},l=f,d=function(t){return a(t,1)},h=d,g=function(t){return o(t,1)},p=g,_=function(t){return t[0]},y=_;e.default={average:i,maximum:a,minimum:o,sum:u,getColumnAverage:c,getRowAverage:s,getColumnSum:f,getRowSum:l,getColumnMaximum:d,getRowMaximum:h,getColumnMinimum:g,getRowMinimum:p,getColumnLabel:_,getRowIndex:y}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dataset=void 0;var r=g(n(36)),i=g(n(61)),a=g(n(60)),o=g(n(59)),u=g(n(58)),c=g(n(57)),s=g(n(56)),f=h(n(39)),l=n(33),d=h(n(55));function h(t){return t&&t.__esModule?t:{default:t}}function g(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}var p=e.Dataset=function t(){if(this instanceof t==!1)return new t;this.matrix=[["Index"]],this.meta={type:void 0}};p.prototype.data=function(t){return arguments.length?(this.matrix=t instanceof Array?t:null,this):this.matrix},p.prototype.set=function(t,e){if(arguments.length<2||t.length<2)throw Error("Incorrect arguments provided for #set method");var n="number"==typeof t[0]?t[0]:this.matrix[0].indexOf(t[0]),i="number"==typeof t[1]?t[1]:u.selectColumn.call(this,0).indexOf(t[1]),a=u.selectColumn.call(this,t[0]),o=u.selectRow.call(this,t[1]);return a.length<1&&(r.appendColumn.call(this,String(t[0])),n=this.matrix[0].length-1),o.length<1&&(r.appendRow.call(this,String(t[1])),i=this.matrix.length-1),this.matrix[i][n]=e,this},p.prototype.type=function(t){return arguments.length?(this.meta.type=t?String(t):void 0,this):this.meta.type},(0,l.extend)(p.prototype,r),(0,l.extend)(p.prototype,i),(0,l.extend)(p.prototype,a),(0,l.extend)(p.prototype,o),(0,l.extend)(p.prototype,u),(0,l.extend)(p.prototype,c),(0,l.extend)(p.prototype,s),(0,l.extend)(p.prototype,f.default),p.parser=(0,d.default)(p),e.default=p},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n(17),a=n(18),o=n(20),u=n(10),c=n(3),s=n(24),f=n(6),l=n(12),d=n(15),h=n(16),g=n(23),p=n(26),_=n(9),y=n(31),v=n(28),x=n(4),m=n(5),b=n(21),w=n(14),S=n(22),A=n(27),T=n(29),P=n(0),C=n(30),M=n(2),L=n(13),O=n(8),E=n(11),k=n(25),G=n(19);n.d(e,"version",function(){return"5.4.0"}),n.d(e,"bisect",function(){return r.b}),n.d(e,"bisectRight",function(){return r.d}),n.d(e,"bisectLeft",function(){return r.c}),n.d(e,"ascending",function(){return r.a}),n.d(e,"bisector",function(){return r.e}),n.d(e,"cross",function(){return r.f}),n.d(e,"descending",function(){return r.g}),n.d(e,"deviation",function(){return r.h}),n.d(e,"extent",function(){return r.i}),n.d(e,"histogram",function(){return r.j}),n.d(e,"thresholdFreedmanDiaconis",function(){return r.w}),n.d(e,"thresholdScott",function(){return r.x}),n.d(e,"thresholdSturges",function(){return r.y}),n.d(e,"max",function(){return r.k}),n.d(e,"mean",function(){return r.l}),n.d(e,"median",function(){return r.m}),n.d(e,"merge",function(){return r.n}),n.d(e,"min",function(){return r.o}),n.d(e,"pairs",function(){return r.p}),n.d(e,"permute",function(){return r.q}),n.d(e,"quantile",function(){return r.r}),n.d(e,"range",function(){return r.s}),n.d(e,"scan",function(){return r.t}),n.d(e,"shuffle",function(){return r.u}),n.d(e,"sum",function(){return r.v}),n.d(e,"ticks",function(){return r.B}),n.d(e,"tickIncrement",function(){return r.z}),n.d(e,"tickStep",function(){return r.A}),n.d(e,"transpose",function(){return r.C}),n.d(e,"variance",function(){return r.D}),n.d(e,"zip",function(){return r.E}),n.d(e,"axisTop",function(){return i.d}),n.d(e,"axisRight",function(){return i.c}),n.d(e,"axisBottom",function(){return i.a}),n.d(e,"axisLeft",function(){return i.b}),n.d(e,"brush",function(){return a.a}),n.d(e,"brushX",function(){return a.c}),n.d(e,"brushY",function(){return a.d}),n.d(e,"brushSelection",function(){return a.b}),n.d(e,"chord",function(){return o.a}),n.d(e,"ribbon",function(){return o.b}),n.d(e,"nest",function(){return u.d}),n.d(e,"set",function(){return u.e}),n.d(e,"map",function(){return u.c}),n.d(e,"keys",function(){return u.b}),n.d(e,"values",function(){return u.f}),n.d(e,"entries",function(){return u.a}),n.d(e,"color",function(){return c.a}),n.d(e,"rgb",function(){return c.h}),n.d(e,"hsl",function(){return c.e}),n.d(e,"lab",function(){return c.f}),n.d(e,"hcl",function(){return c.d}),n.d(e,"lch",function(){return c.g}),n.d(e,"gray",function(){return c.c}),n.d(e,"cubehelix",function(){return c.b}),n.d(e,"contours",function(){return s.b}),n.d(e,"contourDensity",function(){return s.a}),n.d(e,"dispatch",function(){return f.a}),n.d(e,"drag",function(){return l.a}),n.d(e,"dragDisable",function(){return l.b}),n.d(e,"dragEnable",function(){return l.c}),n.d(e,"dsvFormat",function(){return d.e}),n.d(e,"csvParse",function(){return d.c}),n.d(e,"csvParseRows",function(){return d.d}),n.d(e,"csvFormat",function(){return d.a}),n.d(e,"csvFormatRows",function(){return d.b}),n.d(e,"tsvParse",function(){return d.h}),n.d(e,"tsvParseRows",function(){return d.i}),n.d(e,"tsvFormat",function(){return d.f}),n.d(e,"tsvFormatRows",function(){return d.g}),n.d(e,"easeLinear",function(){return h.y}),n.d(e,"easeQuad",function(){return h.D}),n.d(e,"easeQuadIn",function(){return h.E}),n.d(e,"easeQuadOut",function(){return h.G}),n.d(e,"easeQuadInOut",function(){return h.F}),n.d(e,"easeCubic",function(){return h.m}),n.d(e,"easeCubicIn",function(){return h.n}),n.d(e,"easeCubicOut",function(){return h.p}),n.d(e,"easeCubicInOut",function(){return h.o}),n.d(e,"easePoly",function(){return h.z}),n.d(e,"easePolyIn",function(){return h.A}),n.d(e,"easePolyOut",function(){return h.C}),n.d(e,"easePolyInOut",function(){return h.B}),n.d(e,"easeSin",function(){return h.H}),n.d(e,"easeSinIn",function(){return h.I}),n.d(e,"easeSinOut",function(){return h.K}),n.d(e,"easeSinInOut",function(){return h.J}),n.d(e,"easeExp",function(){return h.u}),n.d(e,"easeExpIn",function(){return h.v}),n.d(e,"easeExpOut",function(){return h.x}),n.d(e,"easeExpInOut",function(){return h.w}),n.d(e,"easeCircle",function(){return h.i}),n.d(e,"easeCircleIn",function(){return h.j}),n.d(e,"easeCircleOut",function(){return h.l}),n.d(e,"easeCircleInOut",function(){return h.k}),n.d(e,"easeBounce",function(){return h.e}),n.d(e,"easeBounceIn",function(){return h.f}),n.d(e,"easeBounceOut",function(){return h.h}),n.d(e,"easeBounceInOut",function(){return h.g}),n.d(e,"easeBack",function(){return h.a}),n.d(e,"easeBackIn",function(){return h.b}),n.d(e,"easeBackOut",function(){return h.d}),n.d(e,"easeBackInOut",function(){return h.c}),n.d(e,"easeElastic",function(){return h.q}),n.d(e,"easeElasticIn",function(){return h.r}),n.d(e,"easeElasticOut",function(){return h.t}),n.d(e,"easeElasticInOut",function(){return h.s}),n.d(e,"blob",function(){return g.a}),n.d(e,"buffer",function(){return g.b}),n.d(e,"dsv",function(){return g.d}),n.d(e,"csv",function(){return g.c}),n.d(e,"tsv",function(){return g.j}),n.d(e,"image",function(){return g.f}),n.d(e,"json",function(){return g.g}),n.d(e,"text",function(){return g.i}),n.d(e,"xml",function(){return g.k}),n.d(e,"html",function(){return g.e}),n.d(e,"svg",function(){return g.h}),n.d(e,"forceCenter",function(){return p.a}),n.d(e,"forceCollide",function(){return p.b}),n.d(e,"forceLink",function(){return p.c}),n.d(e,"forceManyBody",function(){return p.d}),n.d(e,"forceRadial",function(){return p.e}),n.d(e,"forceSimulation",function(){return p.f}),n.d(e,"forceX",function(){return p.g}),n.d(e,"forceY",function(){return p.h}),n.d(e,"formatDefaultLocale",function(){return _.b}),n.d(e,"format",function(){return _.a}),n.d(e,"formatPrefix",function(){return _.d}),n.d(e,"formatLocale",function(){return _.c}),n.d(e,"formatSpecifier",function(){return _.e}),n.d(e,"precisionFixed",function(){return _.f}),n.d(e,"precisionPrefix",function(){return _.g}),n.d(e,"precisionRound",function(){return _.h}),n.d(e,"geoArea",function(){return y.c}),n.d(e,"geoBounds",function(){return y.h}),n.d(e,"geoCentroid",function(){return y.i}),n.d(e,"geoCircle",function(){return y.j}),n.d(e,"geoClipAntimeridian",function(){return y.k}),n.d(e,"geoClipCircle",function(){return y.l}),n.d(e,"geoClipExtent",function(){return y.m}),n.d(e,"geoClipRectangle",function(){return y.n}),n.d(e,"geoContains",function(){return y.u}),n.d(e,"geoDistance",function(){return y.v}),n.d(e,"geoGraticule",function(){return y.A}),n.d(e,"geoGraticule10",function(){return y.B}),n.d(e,"geoInterpolate",function(){return y.D}),n.d(e,"geoLength",function(){return y.E}),n.d(e,"geoPath",function(){return y.L}),n.d(e,"geoAlbers",function(){return y.a}),n.d(e,"geoAlbersUsa",function(){return y.b}),n.d(e,"geoAzimuthalEqualArea",function(){return y.d}),n.d(e,"geoAzimuthalEqualAreaRaw",function(){return y.e}),n.d(e,"geoAzimuthalEquidistant",function(){return y.f}),n.d(e,"geoAzimuthalEquidistantRaw",function(){return y.g}),n.d(e,"geoConicConformal",function(){return y.o}),n.d(e,"geoConicConformalRaw",function(){return y.p}),n.d(e,"geoConicEqualArea",function(){return y.q}),n.d(e,"geoConicEqualAreaRaw",function(){return y.r}),n.d(e,"geoConicEquidistant",function(){return y.s}),n.d(e,"geoConicEquidistantRaw",function(){return y.t}),n.d(e,"geoEquirectangular",function(){return y.w}),n.d(e,"geoEquirectangularRaw",function(){return y.x}),n.d(e,"geoGnomonic",function(){return y.y}),n.d(e,"geoGnomonicRaw",function(){return y.z}),n.d(e,"geoIdentity",function(){return y.C}),n.d(e,"geoProjection",function(){return y.M}),n.d(e,"geoProjectionMutator",function(){return y.N}),n.d(e,"geoMercator",function(){return y.F}),n.d(e,"geoMercatorRaw",function(){return y.G}),n.d(e,"geoNaturalEarth1",function(){return y.H}),n.d(e,"geoNaturalEarth1Raw",function(){return y.I}),n.d(e,"geoOrthographic",function(){return y.J}),n.d(e,"geoOrthographicRaw",function(){return y.K}),n.d(e,"geoStereographic",function(){return y.P}),n.d(e,"geoStereographicRaw",function(){return y.Q}),n.d(e,"geoTransverseMercator",function(){return y.T}),n.d(e,"geoTransverseMercatorRaw",function(){return y.U}),n.d(e,"geoRotation",function(){return y.O}),n.d(e,"geoStream",function(){return y.R}),n.d(e,"geoTransform",function(){return y.S}),n.d(e,"cluster",function(){return v.a}),n.d(e,"hierarchy",function(){return v.b}),n.d(e,"pack",function(){return v.c}),n.d(e,"packSiblings",function(){return v.e}),n.d(e,"packEnclose",function(){return v.d}),n.d(e,"partition",function(){return v.f}),n.d(e,"stratify",function(){return v.g}),n.d(e,"tree",function(){return v.h}),n.d(e,"treemap",function(){return v.i}),n.d(e,"treemapBinary",function(){return v.j}),n.d(e,"treemapDice",function(){return v.k}),n.d(e,"treemapSlice",function(){return v.m}),n.d(e,"treemapSliceDice",function(){return v.n}),n.d(e,"treemapSquarify",function(){return v.o}),n.d(e,"treemapResquarify",function(){return v.l}),n.d(e,"interpolate",function(){return x.a}),n.d(e,"interpolateArray",function(){return x.b}),n.d(e,"interpolateBasis",function(){return x.c}),n.d(e,"interpolateBasisClosed",function(){return x.d}),n.d(e,"interpolateDate",function(){return x.g}),n.d(e,"interpolateNumber",function(){return x.m}),n.d(e,"interpolateObject",function(){return x.n}),n.d(e,"interpolateRound",function(){return x.r}),n.d(e,"interpolateString",function(){return x.s}),n.d(e,"interpolateTransformCss",function(){return x.t}),n.d(e,"interpolateTransformSvg",function(){return x.u}),n.d(e,"interpolateZoom",function(){return x.v}),n.d(e,"interpolateRgb",function(){return x.o}),n.d(e,"interpolateRgbBasis",function(){return x.p}),n.d(e,"interpolateRgbBasisClosed",function(){return x.q}),n.d(e,"interpolateHsl",function(){return x.j}),n.d(e,"interpolateHslLong",function(){return x.k}),n.d(e,"interpolateLab",function(){return x.l}),n.d(e,"interpolateHcl",function(){return x.h}),n.d(e,"interpolateHclLong",function(){return x.i}),n.d(e,"interpolateCubehelix",function(){return x.e}),n.d(e,"interpolateCubehelixLong",function(){return x.f}),n.d(e,"piecewise",function(){return x.w}),n.d(e,"quantize",function(){return x.x}),n.d(e,"path",function(){return m.a}),n.d(e,"polygonArea",function(){return b.a}),n.d(e,"polygonCentroid",function(){return b.b}),n.d(e,"polygonHull",function(){return b.d}),n.d(e,"polygonContains",function(){return b.c}),n.d(e,"polygonLength",function(){return b.e}),n.d(e,"quadtree",function(){return w.a}),n.d(e,"randomUniform",function(){return S.f}),n.d(e,"randomNormal",function(){return S.e}),n.d(e,"randomLogNormal",function(){return S.d}),n.d(e,"randomBates",function(){return S.a}),n.d(e,"randomIrwinHall",function(){return S.c}),n.d(e,"randomExponential",function(){return S.b}),n.d(e,"scaleBand",function(){return A.a}),n.d(e,"scalePoint",function(){return A.g}),n.d(e,"scaleIdentity",function(){return A.b}),n.d(e,"scaleLinear",function(){return A.d}),n.d(e,"scaleLog",function(){return A.e}),n.d(e,"scaleOrdinal",function(){return A.f}),n.d(e,"scaleImplicit",function(){return A.c}),n.d(e,"scalePow",function(){return A.h}),n.d(e,"scaleSqrt",function(){return A.l}),n.d(e,"scaleQuantile",function(){return A.i}),n.d(e,"scaleQuantize",function(){return A.j}),n.d(e,"scaleThreshold",function(){return A.m}),n.d(e,"scaleTime",function(){return A.n}),n.d(e,"scaleUtc",function(){return A.o}),n.d(e,"scaleSequential",function(){return A.k}),n.d(e,"schemeCategory10",function(){return T.P}),n.d(e,"schemeAccent",function(){return T.K}),n.d(e,"schemeDark2",function(){return T.Q}),n.d(e,"schemePaired",function(){return T.X}),n.d(e,"schemePastel1",function(){return T.Y}),n.d(e,"schemePastel2",function(){return T.Z}),n.d(e,"schemeSet1",function(){return T.Ma}),n.d(e,"schemeSet2",function(){return T.Na}),n.d(e,"schemeSet3",function(){return T.Oa}),n.d(e,"interpolateBrBG",function(){return T.b}),n.d(e,"schemeBrBG",function(){return T.M}),n.d(e,"interpolatePRGn",function(){return T.n}),n.d(e,"schemePRGn",function(){return T.W}),n.d(e,"interpolatePiYG",function(){return T.o}),n.d(e,"schemePiYG",function(){return T.Aa}),n.d(e,"interpolatePuOr",function(){return T.s}),n.d(e,"schemePuOr",function(){return T.Da}),n.d(e,"interpolateRdBu",function(){return T.w}),n.d(e,"schemeRdBu",function(){return T.Ga}),n.d(e,"interpolateRdGy",function(){return T.x}),n.d(e,"schemeRdGy",function(){return T.Ha}),n.d(e,"interpolateRdYlBu",function(){return T.z}),n.d(e,"schemeRdYlBu",function(){return T.Ja}),n.d(e,"interpolateRdYlGn",function(){return T.A}),n.d(e,"schemeRdYlGn",function(){return T.Ka}),n.d(e,"interpolateSpectral",function(){return T.D}),n.d(e,"schemeSpectral",function(){return T.Pa}),n.d(e,"interpolateBuGn",function(){return T.c}),n.d(e,"schemeBuGn",function(){return T.N}),n.d(e,"interpolateBuPu",function(){return T.d}),n.d(e,"schemeBuPu",function(){return T.O}),n.d(e,"interpolateGnBu",function(){return T.g}),n.d(e,"schemeGnBu",function(){return T.R}),n.d(e,"interpolateOrRd",function(){return T.l}),n.d(e,"schemeOrRd",function(){return T.U}),n.d(e,"interpolatePuBuGn",function(){return T.r}),n.d(e,"schemePuBuGn",function(){return T.Ca}),n.d(e,"interpolatePuBu",function(){return T.q}),n.d(e,"schemePuBu",function(){return T.Ba}),n.d(e,"interpolatePuRd",function(){return T.t}),n.d(e,"schemePuRd",function(){return T.Ea}),n.d(e,"interpolateRdPu",function(){return T.y}),n.d(e,"schemeRdPu",function(){return T.Ia}),n.d(e,"interpolateYlGnBu",function(){return T.H}),n.d(e,"schemeYlGnBu",function(){return T.Ra}),n.d(e,"interpolateYlGn",function(){return T.G}),n.d(e,"schemeYlGn",function(){return T.Qa}),n.d(e,"interpolateYlOrBr",function(){return T.I}),n.d(e,"schemeYlOrBr",function(){return T.Sa}),n.d(e,"interpolateYlOrRd",function(){return T.J}),n.d(e,"schemeYlOrRd",function(){return T.Ta}),n.d(e,"interpolateBlues",function(){return T.a}),n.d(e,"schemeBlues",function(){return T.L}),n.d(e,"interpolateGreens",function(){return T.h}),n.d(e,"schemeGreens",function(){return T.S}),n.d(e,"interpolateGreys",function(){return T.i}),n.d(e,"schemeGreys",function(){return T.T}),n.d(e,"interpolatePurples",function(){return T.u}),n.d(e,"schemePurples",function(){return T.Fa}),n.d(e,"interpolateReds",function(){return T.B}),n.d(e,"schemeReds",function(){return T.La}),n.d(e,"interpolateOranges",function(){return T.m}),n.d(e,"schemeOranges",function(){return T.V}),n.d(e,"interpolateCubehelixDefault",function(){return T.f}),n.d(e,"interpolateRainbow",function(){return T.v}),n.d(e,"interpolateWarm",function(){return T.F}),n.d(e,"interpolateCool",function(){return T.e}),n.d(e,"interpolateSinebow",function(){return T.C}),n.d(e,"interpolateViridis",function(){return T.E}),n.d(e,"interpolateMagma",function(){return T.k}),n.d(e,"interpolateInferno",function(){return T.j}),n.d(e,"interpolatePlasma",function(){return T.p}),n.d(e,"create",function(){return P.b}),n.d(e,"creator",function(){return P.c}),n.d(e,"local",function(){return P.f}),n.d(e,"matcher",function(){return P.g}),n.d(e,"mouse",function(){return P.h}),n.d(e,"namespace",function(){return P.i}),n.d(e,"namespaces",function(){return P.j}),n.d(e,"clientPoint",function(){return P.a}),n.d(e,"select",function(){return P.k}),n.d(e,"selectAll",function(){return P.l}),n.d(e,"selection",function(){return P.m}),n.d(e,"selector",function(){return P.n}),n.d(e,"selectorAll",function(){return P.o}),n.d(e,"style",function(){return P.p}),n.d(e,"touch",function(){return P.q}),n.d(e,"touches",function(){return P.r}),n.d(e,"window",function(){return P.s}),n.d(e,"event",function(){return P.e}),n.d(e,"customEvent",function(){return P.d}),n.d(e,"arc",function(){return C.a}),n.d(e,"area",function(){return C.b}),n.d(e,"line",function(){return C.v}),n.d(e,"pie",function(){return C.A}),n.d(e,"areaRadial",function(){return C.c}),n.d(e,"radialArea",function(){return C.C}),n.d(e,"lineRadial",function(){return C.w}),n.d(e,"radialLine",function(){return C.D}),n.d(e,"pointRadial",function(){return C.B}),n.d(e,"linkHorizontal",function(){return C.x}),n.d(e,"linkVertical",function(){return C.z}),n.d(e,"linkRadial",function(){return C.y}),n.d(e,"symbol",function(){return C.P}),n.d(e,"symbols",function(){return C.X}),n.d(e,"symbolCircle",function(){return C.Q}),n.d(e,"symbolCross",function(){return C.R}),n.d(e,"symbolDiamond",function(){return C.S}),n.d(e,"symbolSquare",function(){return C.T}),n.d(e,"symbolStar",function(){return C.U}),n.d(e,"symbolTriangle",function(){return C.V}),n.d(e,"symbolWye",function(){return C.W}),n.d(e,"curveBasisClosed",function(){return C.e}),n.d(e,"curveBasisOpen",function(){return C.f}),n.d(e,"curveBasis",function(){return C.d}),n.d(e,"curveBundle",function(){return C.g}),n.d(e,"curveCardinalClosed",function(){return C.i}),n.d(e,"curveCardinalOpen",function(){return C.j}),n.d(e,"curveCardinal",function(){return C.h}),n.d(e,"curveCatmullRomClosed",function(){return C.l}),n.d(e,"curveCatmullRomOpen",function(){return C.m}),n.d(e,"curveCatmullRom",function(){return C.k}),n.d(e,"curveLinearClosed",function(){return C.o}),n.d(e,"curveLinear",function(){return C.n}),n.d(e,"curveMonotoneX",function(){return C.p}),n.d(e,"curveMonotoneY",function(){return C.q}),n.d(e,"curveNatural",function(){return C.r}),n.d(e,"curveStep",function(){return C.s}),n.d(e,"curveStepAfter",function(){return C.t}),n.d(e,"curveStepBefore",function(){return C.u}),n.d(e,"stack",function(){return C.E}),n.d(e,"stackOffsetExpand",function(){return C.G}),n.d(e,"stackOffsetDiverging",function(){return C.F}),n.d(e,"stackOffsetNone",function(){return C.H}),n.d(e,"stackOffsetSilhouette",function(){return C.I}),n.d(e,"stackOffsetWiggle",function(){return C.J}),n.d(e,"stackOrderAscending",function(){return C.K}),n.d(e,"stackOrderDescending",function(){return C.L}),n.d(e,"stackOrderInsideOut",function(){return C.M}),n.d(e,"stackOrderNone",function(){return C.N}),n.d(e,"stackOrderReverse",function(){return C.O}),n.d(e,"timeInterval",function(){return M.g}),n.d(e,"timeMillisecond",function(){return M.h}),n.d(e,"timeMilliseconds",function(){return M.i}),n.d(e,"utcMillisecond",function(){return M.L}),n.d(e,"utcMilliseconds",function(){return M.M}),n.d(e,"timeSecond",function(){return M.r}),n.d(e,"timeSeconds",function(){return M.s}),n.d(e,"utcSecond",function(){return M.V}),n.d(e,"utcSeconds",function(){return M.W}),n.d(e,"timeMinute",function(){return M.j}),n.d(e,"timeMinutes",function(){return M.k}),n.d(e,"timeHour",function(){return M.e}),n.d(e,"timeHours",function(){return M.f}),n.d(e,"timeDay",function(){return M.a}),n.d(e,"timeDays",function(){return M.b}),n.d(e,"timeWeek",function(){return M.B}),n.d(e,"timeWeeks",function(){return M.C}),n.d(e,"timeSunday",function(){return M.t}),n.d(e,"timeSundays",function(){return M.u}),n.d(e,"timeMonday",function(){return M.l}),n.d(e,"timeMondays",function(){return M.m}),n.d(e,"timeTuesday",function(){return M.x}),n.d(e,"timeTuesdays",function(){return M.y}),n.d(e,"timeWednesday",function(){return M.z}),n.d(e,"timeWednesdays",function(){return M.A}),n.d(e,"timeThursday",function(){return M.v}),n.d(e,"timeThursdays",function(){return M.w}),n.d(e,"timeFriday",function(){return M.c}),n.d(e,"timeFridays",function(){return M.d}),n.d(e,"timeSaturday",function(){return M.p}),n.d(e,"timeSaturdays",function(){return M.q}),n.d(e,"timeMonth",function(){return M.n}),n.d(e,"timeMonths",function(){return M.o}),n.d(e,"timeYear",function(){return M.D}),n.d(e,"timeYears",function(){return M.E}),n.d(e,"utcMinute",function(){return M.N}),n.d(e,"utcMinutes",function(){return M.O}),n.d(e,"utcHour",function(){return M.J}),n.d(e,"utcHours",function(){return M.K}),n.d(e,"utcDay",function(){return M.F}),n.d(e,"utcDays",function(){return M.G}),n.d(e,"utcWeek",function(){return M.Fa}),n.d(e,"utcWeeks",function(){return M.Ga}),n.d(e,"utcSunday",function(){return M.X}),n.d(e,"utcSundays",function(){return M.Y}),n.d(e,"utcMonday",function(){return M.P}),n.d(e,"utcMondays",function(){return M.Q}),n.d(e,"utcTuesday",function(){return M.Ba}),n.d(e,"utcTuesdays",function(){return M.Ca}),n.d(e,"utcWednesday",function(){return M.Da}),n.d(e,"utcWednesdays",function(){return M.Ea}),n.d(e,"utcThursday",function(){return M.Z}),n.d(e,"utcThursdays",function(){return M.Aa}),n.d(e,"utcFriday",function(){return M.H}),n.d(e,"utcFridays",function(){return M.I}),n.d(e,"utcSaturday",function(){return M.T}),n.d(e,"utcSaturdays",function(){return M.U}),n.d(e,"utcMonth",function(){return M.R}),n.d(e,"utcMonths",function(){return M.S}),n.d(e,"utcYear",function(){return M.Ha}),n.d(e,"utcYears",function(){return M.Ia}),n.d(e,"timeFormatDefaultLocale",function(){return L.d}),n.d(e,"timeFormat",function(){return L.c}),n.d(e,"timeParse",function(){return L.f}),n.d(e,"utcFormat",function(){return L.g}),n.d(e,"utcParse",function(){return L.h}),n.d(e,"timeFormatLocale",function(){return L.e}),n.d(e,"isoFormat",function(){return L.a}),n.d(e,"isoParse",function(){return L.b}),n.d(e,"now",function(){return O.b}),n.d(e,"timer",function(){return O.d}),n.d(e,"timerFlush",function(){return O.e}),n.d(e,"timeout",function(){return O.c}),n.d(e,"interval",function(){return O.a}),n.d(e,"transition",function(){return E.c}),n.d(e,"active",function(){return E.a}),n.d(e,"interrupt",function(){return E.b}),n.d(e,"voronoi",function(){return k.a}),n.d(e,"zoom",function(){return G.a}),n.d(e,"zoomTransform",function(){return G.c}),n.d(e,"zoomIdentity",function(){return G.b})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={render:function(){var t,e="",n=this.view._artifacts.spinner={},r=this.height()||35,i=(r-35)/2,a=["webkit","Moz","ms","O"],o=this.view._artifacts.radius=0;e+='<div class="'+this.theme()+'">',e+='<div class="keen-spinner-container" style="height: '+r+"px; padding-top: "+i+'px;">',e+='<div class="keen-spinner-indicator"></div>',e+="</div>",e+="</div>",this.el().innerHTML=e,void 0===(t=this.el().querySelector(".keen-spinner-indicator")).style.animationName&&(o=0,n.interval=setInterval(function(){o=350===o?0:o+10;for(var e=0;e<a.length;e++)t.style[a[e]]="rotate("+n.radius+"deg)"},15))},update:function(){this.render()},destroy:function(){if(this.view._artifacts.spinner){this.view._artifacts.spinner.interval&&clearInterval(this.view._artifacts.spinner.interval),this.view._artifacts.spinner.radius=0;try{delete this.view._artifacts.spinner}catch(t){this.view._artifacts.spinner=void 0}}this.el().innerHTML=""}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),i={height:void 0,width:void 0,stickyHeader:!0,stickyFooter:!1};e.default={render:function(){var t,e=this.data(),n=this.el(),a=(this.height()||i.height)-this.el().offsetHeight,o=this.theme(),u=this.width()||i.width,c="",s=new Array(e[0].length),f=new Array(e[0].length);if(1===e.length&&0===e[0].length)this.message("No data to display");else{(0,r.each)(e,function(t){(0,r.each)(t,function(t,e){f[e]||(f[e]=0),s[e]="number"==typeof t?"right":"left",f[e]=String(t).length>f[e]?String(t).length:f[e]})}),c+='<div class="'+o+'-table" style="height: '+(a?a+"px":"auto")+"; width: "+(u?u+"px":"auto")+';">',c+='<table class="'+o+'-table-dataset">',c+="<thead>",c+="<tr>";for(var l=0;l<e[0].length;l++)c+='<th style="width: '+10*f[l]+"px; text-align: "+s[l]+';">'+e[0][l]+"</th>";c+="</tr>",c+="</thead>",c+="<tbody>",c+=function(t,e,n){for(var r="",i=0;i<t.length;i++)if(i>0){r+="<tr>";for(var a=0;a<t[i].length;a++)r+='<td style="min-width: '+10*e[a]+"px; text-align: "+n[a]+';">'+t[i][a]+"</td>";r+="</tr>"}return r}.bind(this,e,f,s)(),c+="</tbody>",c+="</table>",c+='<table class="'+o+'-table-fixed-header">',c+="<thead>",c+="<tr>";for(l=0;l<e[0].length;l++)c+='<th style="min-width: '+10*f[l]+"px; text-align: "+s[l]+';">'+e[0][l]+"</th>";c+="</tr>",c+="</thead>",c+="</table>",c+="</div>",n.querySelector("."+o+"-rendering").innerHTML=c,t=n.querySelector("."+o+"-table-fixed-header"),n.querySelector("."+o+"-table").onscroll=function(e){t.style.top=e.target.scrollTop+"px"}}},update:function(){this.render()},destroy:function(){var t=this.el().querySelector("."+this.theme()+"-table");t&&t.onscroll&&(t.onscroll=void 0)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.prettyNumber=function(t){var e=(t=Number(t)).toPrecision(3),n="",r=["","k","M","B","T"];if(Number(e)==t&&String(t).length<=4)return String(t);if(Math.abs(t)>=1e15)return e;return t>=1||t<=-1?(t<0&&(t=-t,n="-"),n+function t(e,n){var e=String(e);var i=e.split(".");if(i.length>1){e=i[0];var a=i[1];2==e.length&&a.length>0?a.length>0?e=e+"."+a.charAt(0):e+="0":1==e.length&&a.length>0&&(e=e+"."+a.charAt(0),a.length>1?e+=a.charAt(1):e+="0")}var o=e.length;e.split(".").length>1&&o--;return o<=3?String(e)+r[n]:t(Number(e)/1e3,n+1)}(t,0)):t.toPrecision(3)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(44),i=n(32);e.default={render:function(){var t,e=this.colors()[0],n=this.theme(),a=this.title(),o="-",u=this.height()||140,c=this.width(),s=this.chartOptions(),f="",l="",d="";"number"==typeof this.data()[1][1]&&(o=this.data()[1][1]),t=o,void 0!==s.prettyNumber&&!0!==s.prettyNumber||isNaN(parseInt(o))||(t=(0,r.prettyNumber)(o)),s.prefix&&(l='<span class="'+n+'-metric-prefix">'+s.prefix+"</span>"),s.suffix&&(d='<span class="'+n+'-metric-suffix">'+s.suffix+"</span>"),f+='<div class="'+n+'">',f+='<div class="'+n+'-metric" style="background-color: '+e+"; width: "+(c?c+"px":"auto")+';" title="'+(0,i.escapeHtml)(o)+'">',f+='<span class="'+n+'-metric-value">'+l+(0,i.escapeHtml)(t)+d+"</span>",a&&(f+='<span class="'+n+'-metric-title">'+(0,i.escapeHtml)(a)+"</span>"),f+="</div>",f+="</div>",this.el().innerHTML=f,this.el().querySelector("."+n+"-metric-value").style.paddingTop=(u-this.el().offsetHeight)/2+"px",this.el().querySelector("."+n+"-metric").style.height=u+"px"},update:function(){this.render()},destroy:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(32);e.default={render:function(t){var e=document.createElement("div"),n=document.createElement("div"),i=document.createElement("span"),a=this.height()||140,o=document.createElement("div"),u=document.createElement("div");e.className=this.theme(),n.className=this.theme()+"-message",n.style.width=this.width()+"px",o.className=this.theme()+"-title",o.innerHTML=(0,r.escapeHtml)(this.title()||""),u.className=this.theme()+"-notes",u.innerHTML=(0,r.escapeHtml)(this.notes()||""),i.innerHTML=(0,r.escapeHtml)(t)||"",n.appendChild(i),e.appendChild(o),e.appendChild(n),e.appendChild(u),this.el().innerHTML="",this.el().appendChild(e);var c=a-o.offsetHeight-u.offsetHeight;n.style.height=c+"px",n.style.paddingTop=c/2-12+"px"},update:function(){this.render()},destroy:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,i){var a,o,u,c,s,f,l,d;u=this.config.tooltip_format_name||function(t){return t},f=this.config.tooltip_format_title||e,d=this.config.tooltip_format_value||n;for(var h=0;h<t.length;h++)t[h]&&(t[h].value||0===t[h].value)&&(c||(s=f?f(t[h].x):t[h].x,c="<table class='"+this.CLASS.tooltip+"'>"+(s||0===s?"<tr><th colspan='2'>"+(0,r.escapeHtml)(s)+"</th></tr>":"")),o=u(t[h].name),l=d(t[h].value,t[h].ratio,t[h].id,t[h].index),a=this.levelColor?this.levelColor(t[h].value):i(t[h].id),l&&(c+="<tr class='"+this.CLASS.tooltipName+"-"+t[h].id+"'>",c+="<td class='name'><span style='background-color:"+a+"'></span>"+(0,r.escapeHtml)(o)+"</td>",c+="<td class='value'>"+(0,r.escapeHtml)(l)+"</td>",c+="</tr>"));return c+"</table>"};var r=n(32)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=this,n=this.view._artifacts.c3,r=[],a=this.el().querySelector("."+this.theme()+"-rendering"),u=120,c=this.view._artifacts.pagination={hidden:[],labels:[],position:0,range:Math.round((a.offsetHeight-78)/20),total:0};"donut"!==this.type()&&"pie"!==this.type()||(c.range=c.range>=5?5:c.range);for(var s=0;s<t.length;s++)"x"===t[s][0]||(0,o.default)(t[s][1])||r.push(t[s][0]);var f=i.select(a).append("svg");f.attr("class","keen-c3-legend"),f.attr("height",a.offsetHeight-10),f.attr("width",u),f.style("right",-u+"px"),f.style("top","10px");var l=f.append("g");l.attr("class","keen-c3-legend-items");var d=20*c.range,h=f.append("g");function g(){c.labels=r.slice(c.position,c.position+c.range),c.total=r.length,function(){l.selectAll("g").remove();var t=l.selectAll("g").data(c.labels);t.enter().append("g").attr("transform",function(t,e){return"translate(0, "+20*e+")"}).attr("data-id",function(t){return t}).style("opacity",function(t){var e=c.hidden.indexOf(t);return e<0?1:.35}).each(function(t){var e=i.select(this).append("text");e.attr("font-size",12),e.attr("pointer-events","none"),e.attr("x",15),e.attr("y",9),e.text(t),e.text(function(t){return i.select(this).node().getBBox().width>105?t.length<=15?t:t.substring(0,12)+"...":t});var r=i.select(this).append("rect");r.attr("height",14),r.attr("width",110),r.attr("x",0),r.attr("y",0),r.style("cursor","pointer"),r.style("fill-opacity",0);var a=i.select(this).append("rect");a.attr("fill",n.color(t)),a.attr("height",10),a.attr("pointer-events","none"),a.attr("rx",5),a.attr("ry",5),a.attr("width",10),a.attr("x",0),a.attr("y",0)}).on("mouseover",function(t,e){if(n.focus(t),t.length>15){var r=i.select(a).append("div");r.attr("class","keen-c3-legend-label-overlay"),r.style("max-width","75%"),r.style("right",-u+"px"),r.style("top",15+20*(e+1)+"px"),r.html(t),r.append("div").attr("class","keen-c3-legend-label-overlay-pointer")}}).on("mouseout",function(t){n.revert(),i.select(e.el().querySelector("."+e.theme()+"-rendering .keen-c3-legend-label-overlay")).remove()}).on("click",function(t){i.select(this).style("opacity",function(){var e=c.hidden.indexOf(t);return e<0?(c.hidden.push(t),.35):(c.hidden.splice(e,1),1)}),n.toggle(t)}),t.exit().remove()}.call(e,c.labels),c.total>c.range&&function(){h.selectAll("g").remove(),h.selectAll("g").data([{direction:"reverse",path_d:"M0 10 L10 0 L20 10 Z"},{direction:"forward",path_d:"M0 0 L10 10 L20 0 Z"}]).enter().append("g").attr("transform",function(t,e){return"translate("+20*e+", 0)"}).each(function(t){var e=i.select(this).append("path");e.attr("d",function(t){return t.path_d}),e.style("cursor","pointer"),e.style("fill","#D7D7D7"),e.style("stroke","none"),e.on("mouseover",function(t){i.select(this).style("fill","#4D4D4D")}),e.on("mouseout",function(t){i.select(this).style("fill","#D7D7D7")}),e.on("click",function(t){"forward"===t.direction?c.position+c.range<c.total&&(c.position=c.position+c.range):c.position-c.range>=0&&(c.position=c.position-c.range),g(),document.selection&&document.selection.empty?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()})})}.call(e),n.resize()}h.attr("class","keen-c3-legend-pagination"),h.attr("transform",function(){return"translate(2, "+d+")"}),g()};var r,i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(37)),a=n(34),o=(r=a)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=Math.abs(new Date(t).getTime()-new Date(e).getTime()),r=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];return n>=24192e5?function(t){var e=new Date(t);return r[e.getMonth()]+" "+e.getFullYear()}:n>=864e5?function(t){var e=new Date(t);return r[e.getMonth()]+" "+e.getDate()}:n>=36e5?"%I:%M %p":"%I:%M:%S %p"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.extendDeep=function t(e){for(var n=1;n<arguments.length;n++)(0,i.each)(arguments[n],function(n,i){void 0!==e[i]&&void 0!==n&&"object"===r(e[i])&&"object"===(void 0===n?"undefined":r(n))&&null!==e[i]&&null!==n?t(e[i],n):e[i]=n});return e};var i=n(7)},function(t,e,n){
/* @license C3.js v0.6.1 | (c) C3 Team and other contributors | http://c3js.org/ */
t.exports=function(){"use strict";var t,e,r={target:"c3-target",chart:"c3-chart",chartLine:"c3-chart-line",chartLines:"c3-chart-lines",chartBar:"c3-chart-bar",chartBars:"c3-chart-bars",chartText:"c3-chart-text",chartTexts:"c3-chart-texts",chartArc:"c3-chart-arc",chartArcs:"c3-chart-arcs",chartArcsTitle:"c3-chart-arcs-title",chartArcsBackground:"c3-chart-arcs-background",chartArcsGaugeUnit:"c3-chart-arcs-gauge-unit",chartArcsGaugeMax:"c3-chart-arcs-gauge-max",chartArcsGaugeMin:"c3-chart-arcs-gauge-min",selectedCircle:"c3-selected-circle",selectedCircles:"c3-selected-circles",eventRect:"c3-event-rect",eventRects:"c3-event-rects",eventRectsSingle:"c3-event-rects-single",eventRectsMultiple:"c3-event-rects-multiple",zoomRect:"c3-zoom-rect",brush:"c3-brush",focused:"c3-focused",defocused:"c3-defocused",region:"c3-region",regions:"c3-regions",title:"c3-title",tooltipContainer:"c3-tooltip-container",tooltip:"c3-tooltip",tooltipName:"c3-tooltip-name",shape:"c3-shape",shapes:"c3-shapes",line:"c3-line",lines:"c3-lines",bar:"c3-bar",bars:"c3-bars",circle:"c3-circle",circles:"c3-circles",arc:"c3-arc",arcLabelLine:"c3-arc-label-line",arcs:"c3-arcs",area:"c3-area",areas:"c3-areas",empty:"c3-empty",text:"c3-text",texts:"c3-texts",gaugeValue:"c3-gauge-value",grid:"c3-grid",gridLines:"c3-grid-lines",xgrid:"c3-xgrid",xgrids:"c3-xgrids",xgridLine:"c3-xgrid-line",xgridLines:"c3-xgrid-lines",xgridFocus:"c3-xgrid-focus",ygrid:"c3-ygrid",ygrids:"c3-ygrids",ygridLine:"c3-ygrid-line",ygridLines:"c3-ygrid-lines",axis:"c3-axis",axisX:"c3-axis-x",axisXLabel:"c3-axis-x-label",axisY:"c3-axis-y",axisYLabel:"c3-axis-y-label",axisY2:"c3-axis-y2",axisY2Label:"c3-axis-y2-label",legendBackground:"c3-legend-background",legendItem:"c3-legend-item",legendItemEvent:"c3-legend-item-event",legendItemTile:"c3-legend-item-tile",legendItemHidden:"c3-legend-item-hidden",legendItemFocused:"c3-legend-item-focused",dragarea:"c3-dragarea",EXPANDED:"_expanded_",SELECTED:"_selected_",INCLUDED:"_included_"},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},u=function(t){return t||0===t},c=function(t){return"function"==typeof t},s=function(t){return Array.isArray(t)},f=function(t){return"string"==typeof t},l=function(t){return void 0===t},d=function(t){return void 0!==t},h=function(t){return 10*Math.ceil(t/10)},g=function(t){return Math.ceil(t)+.5},p=function(t){return t[1]-t[0]},_=function(t){return void 0===t||null===t||f(t)&&0===t.length||"object"===(void 0===t?"undefined":i(t))&&0===Object.keys(t).length},y=function(t){return!T.isEmpty(t)},v=function(t,e,n){return d(t[e])?t[e]:n},x=function(t,e){var n=!1;return Object.keys(t).forEach(function(r){t[r]===e&&(n=!0)}),n},m=function(t){return"string"==typeof t?t.replace(/</g,"&lt;").replace(/>/g,"&gt;"):t},b=function(t){var e=t.getBoundingClientRect(),n=[t.pathSegList.getItem(0),t.pathSegList.getItem(1)],r=n[0].x,i=Math.min(n[0].y,n[1].y);return{x:r,y:i,width:e.width,height:e.height}};function w(t,e){this.component=t,this.params=e||{},this.d3=t.d3,this.scale=this.d3.scaleLinear(),this.range,this.orient="bottom",this.innerTickSize=6,this.outerTickSize=this.params.withOuterTick?6:0,this.tickPadding=3,this.tickValues=null,this.tickFormat,this.tickArguments,this.tickOffset=0,this.tickCulling=!0,this.tickCentered,this.tickTextCharSize,this.tickTextRotate=this.params.tickTextRotate,this.tickLength,this.axis=this.generateAxis()}(e=w.prototype).axisX=function(t,e,n){t.attr("transform",function(t){return"translate("+Math.ceil(e(t)+n)+", 0)"})},e.axisY=function(t,e){t.attr("transform",function(t){return"translate(0,"+Math.ceil(e(t))+")"})},e.scaleExtent=function(t){var e=t[0],n=t[t.length-1];return e<n?[e,n]:[n,e]},e.generateTicks=function(t){var e,n,r=[];if(t.ticks)return t.ticks.apply(t,this.tickArguments);for(n=t.domain(),e=Math.ceil(n[0]);e<n[1];e++)r.push(e);return r.length>0&&r[0]>0&&r.unshift(r[0]-(r[1]-r[0])),r},e.copyScale=function(){var t,e=this.scale.copy();return this.params.isCategory&&(t=this.scale.domain(),e.domain([t[0],t[1]-1])),e},e.textFormatted=function(t){var e=this.tickFormat?this.tickFormat(t):t;return void 0!==e?e:""},e.updateRange=function(){return this.range=this.scale.rangeExtent?this.scale.rangeExtent():this.scaleExtent(this.scale.range()),this.range},e.updateTickTextCharSize=function(t){var e=this;if(e.tickTextCharSize)return e.tickTextCharSize;var n={h:11.5,w:5.5};return t.select("text").text(function(t){return e.textFormatted(t)}).each(function(t){var r=this.getBoundingClientRect(),i=e.textFormatted(t),a=r.height,o=i?r.width/i.length:void 0;a&&o&&(n.h=a,n.w=o)}).text(""),e.tickTextCharSize=n,n},e.isVertical=function(){return"left"===this.orient||"right"===this.orient},e.tspanData=function(t,e,n){var r=this.params.tickMultiline?this.splitTickText(t,n):[].concat(this.textFormatted(t));return this.params.tickMultiline&&this.params.tickMultilineMax>0&&(r=this.ellipsify(r,this.params.tickMultilineMax)),r.map(function(t){return{index:e,splitted:t,length:r.length}})},e.splitTickText=function(t,e){var n,r,i,a=this,o=a.textFormatted(t),u=a.params.tickWidth;return"[object Array]"===Object.prototype.toString.call(o)?o:((!u||u<=0)&&(u=a.isVertical()?95:a.params.isCategory?Math.ceil(e(1)-e(0))-12:110),function t(e,o){r=void 0;for(var c=1;c<o.length;c++)if(" "===o.charAt(c)&&(r=c),n=o.substr(0,c+1),i=a.tickTextCharSize.w*n.length,u<i)return t(e.concat(o.substr(0,r||c)),o.slice(r?r+1:c));return e.concat(o)}([],o+""))},e.ellipsify=function(t,e){if(t.length<=e)return t;for(var n=t.slice(0,e),r=3,i=e-1;i>=0;i--){var a=n[i].length;if(n[i]=n[i].substr(0,a-r).padEnd(a,"."),(r-=a)<=0)break}return n},e.updateTickLength=function(){this.tickLength=Math.max(this.innerTickSize,0)+this.tickPadding},e.lineY2=function(t){var e=this.scale(t)+(this.tickCentered?0:this.tickOffset);return this.range[0]<e&&e<this.range[1]?this.innerTickSize:0},e.textY=function(){var t=this.tickTextRotate;return t?11.5-t/15*2.5*(t>0?1:-1):this.tickLength},e.textTransform=function(){var t=this.tickTextRotate;return t?"rotate("+t+")":""},e.textTextAnchor=function(){var t=this.tickTextRotate;return t?t>0?"start":"end":"middle"},e.tspanDx=function(){var t=this.tickTextRotate;return t?8*Math.sin(Math.PI*(t/180)):0},e.tspanDy=function(t,e){var n=this.tickTextCharSize.h;return 0===e&&(n=this.isVertical()?-((t.length-1)*(this.tickTextCharSize.h/2)-3):".71em"),n},e.generateAxis=function(){var t=this,e=t.d3,n=t.params;function r(i,a){var o;return i.each(function(){var i,u,c,s=r.g=e.select(this),f=this.__chart__||t.scale,l=this.__chart__=t.copyScale(),d=t.tickValues?t.tickValues:t.generateTicks(l),h=s.selectAll(".tick").data(d,l),g=h.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),p=h.exit().remove(),_=h.merge(g);n.isCategory?(t.tickOffset=Math.ceil((l(1)-l(0))/2),u=t.tickCentered?0:t.tickOffset,c=t.tickCentered?t.tickOffset:0):t.tickOffset=u=0,t.updateRange(),t.updateTickLength(),t.updateTickTextCharSize(s.select(".tick"));var y=_.select("line").merge(g.append("line")),v=_.select("text").merge(g.append("text")),x=_.selectAll("text").selectAll("tspan").data(function(e,n){return t.tspanData(e,n,l)}),m=x.enter().append("tspan"),b=m.merge(x).text(function(t){return t.splitted});x.exit().remove();var w=s.selectAll(".domain").data([0]),S=w.enter().append("path").merge(w).attr("class","domain");switch(t.orient){case"bottom":i=t.axisX,y.attr("x1",u).attr("x2",u).attr("y2",function(e,n){return t.lineY2(e,n)}),v.attr("x",0).attr("y",function(e,n){return t.textY(e,n)}).attr("transform",function(e,n){return t.textTransform(e,n)}).style("text-anchor",function(e,n){return t.textTextAnchor(e,n)}),b.attr("x",0).attr("dy",function(e,n){return t.tspanDy(e,n)}).attr("dx",function(e,n){return t.tspanDx(e,n)}),S.attr("d","M"+t.range[0]+","+t.outerTickSize+"V0H"+t.range[1]+"V"+t.outerTickSize);break;case"top":i=t.axisX,y.attr("x1",u).attr("x2",u).attr("y2",function(e,n){return-1*t.lineY2(e,n)}),v.attr("x",0).attr("y",function(e,r){return-1*t.textY(e,r)-(n.isCategory?2:t.tickLength-2)}).attr("transform",function(e,n){return t.textTransform(e,n)}).style("text-anchor",function(e,n){return t.textTextAnchor(e,n)}),b.attr("x",0).attr("dy",function(e,n){return t.tspanDy(e,n)}).attr("dx",function(e,n){return t.tspanDx(e,n)}),S.attr("d","M"+t.range[0]+","+-t.outerTickSize+"V0H"+t.range[1]+"V"+-t.outerTickSize);break;case"left":i=t.axisY,y.attr("x2",-t.innerTickSize).attr("y1",c).attr("y2",c),v.attr("x",-t.tickLength).attr("y",t.tickOffset).style("text-anchor","end"),b.attr("x",-t.tickLength).attr("dy",function(e,n){return t.tspanDy(e,n)}),S.attr("d","M"+-t.outerTickSize+","+t.range[0]+"H0V"+t.range[1]+"H"+-t.outerTickSize);break;case"right":i=t.axisY,y.attr("x2",t.innerTickSize).attr("y1",c).attr("y2",c),v.attr("x",t.tickLength).attr("y",t.tickOffset).style("text-anchor","start"),b.attr("x",t.tickLength).attr("dy",function(e,n){return t.tspanDy(e,n)}),S.attr("d","M"+t.outerTickSize+","+t.range[0]+"H0V"+t.range[1]+"H"+t.outerTickSize)}if(l.rangeBand){var A=l,T=A.rangeBand()/2;f=l=function(t){return A(t)+T}}else f.rangeBand?f=l:p.call(i,l,t.tickOffset);g.call(i,f,t.tickOffset),o=(a?_.transition(a):_).style("opacity",1).call(i,l,t.tickOffset)}),o}return r.scale=function(e){return arguments.length?(t.scale=e,r):t.scale},r.orient=function(e){return arguments.length?(t.orient=e in{top:1,right:1,bottom:1,left:1}?e+"":"bottom",r):t.orient},r.tickFormat=function(e){return arguments.length?(t.tickFormat=e,r):t.tickFormat},r.tickCentered=function(e){return arguments.length?(t.tickCentered=e,r):t.tickCentered},r.tickOffset=function(){return t.tickOffset},r.tickInterval=function(){var e,i;return n.isCategory?e=2*t.tickOffset:(i=r.g.select("path.domain").node().getTotalLength()-2*t.outerTickSize,e=i/r.g.selectAll("line").size()),e===1/0?0:e},r.ticks=function(){return arguments.length?(t.tickArguments=arguments,r):t.tickArguments},r.tickCulling=function(e){return arguments.length?(t.tickCulling=e,r):t.tickCulling},r.tickValues=function(e){if("function"==typeof e)t.tickValues=function(){return e(t.scale.domain())};else{if(!arguments.length)return t.tickValues;t.tickValues=e}return r},r};var S=function(n){function r(n){a(this,r);var i={fn:t,internal:{fn:e}},u=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n,"axis",i));return u.d3=n.d3,u.internal=w,u}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,n),r}(function(t,e,n){this.owner=t,P.chart.internal[e]=n});(t=S.prototype).init=function(){var t=this.owner,e=t.config,n=t.main;t.axes.x=n.append("g").attr("class",r.axis+" "+r.axisX).attr("clip-path",e.axis_x_inner?"":t.clipPathForXAxis).attr("transform",t.getTranslate("x")).style("visibility",e.axis_x_show?"visible":"hidden"),t.axes.x.append("text").attr("class",r.axisXLabel).attr("transform",e.axis_rotated?"rotate(-90)":"").style("text-anchor",this.textAnchorForXAxisLabel.bind(this)),t.axes.y=n.append("g").attr("class",r.axis+" "+r.axisY).attr("clip-path",e.axis_y_inner?"":t.clipPathForYAxis).attr("transform",t.getTranslate("y")).style("visibility",e.axis_y_show?"visible":"hidden"),t.axes.y.append("text").attr("class",r.axisYLabel).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForYAxisLabel.bind(this)),t.axes.y2=n.append("g").attr("class",r.axis+" "+r.axisY2).attr("transform",t.getTranslate("y2")).style("visibility",e.axis_y2_show?"visible":"hidden"),t.axes.y2.append("text").attr("class",r.axisY2Label).attr("transform",e.axis_rotated?"":"rotate(-90)").style("text-anchor",this.textAnchorForY2AxisLabel.bind(this))},t.getXAxis=function(t,e,n,r,i,a,o){var u=this.owner,c=u.config,s={isCategory:u.isCategorized(),withOuterTick:i,tickMultiline:c.axis_x_tick_multiline,tickMultilineMax:c.axis_x_tick_multiline?Number(c.axis_x_tick_multilineMax):0,tickWidth:c.axis_x_tick_width,tickTextRotate:o?0:c.axis_x_tick_rotate,withoutTransition:a},f=new this.internal(this,s).axis.scale(t).orient(e);return u.isTimeSeries()&&r&&"function"!=typeof r&&(r=r.map(function(t){return u.parseDate(t)})),f.tickFormat(n).tickValues(r),u.isCategorized()&&(f.tickCentered(c.axis_x_tick_centered),_(c.axis_x_tick_culling)&&(c.axis_x_tick_culling=!1)),f},t.updateXAxisTickValues=function(t,e){var n,r=this.owner,i=r.config;return(i.axis_x_tick_fit||i.axis_x_tick_count)&&(n=this.generateTickValues(r.mapTargetsToUniqueXs(t),i.axis_x_tick_count,r.isTimeSeries())),e?e.tickValues(n):(r.xAxis.tickValues(n),r.subXAxis.tickValues(n)),n},t.getYAxis=function(t,e,n,r,i,a,o){var u=this.owner,c=u.config,s={withOuterTick:i,withoutTransition:a,tickTextRotate:o?0:c.axis_y_tick_rotate},f=new this.internal(this,s).axis.scale(t).orient(e).tickFormat(n);return u.isTimeSeriesY()?f.ticks(c.axis_y_tick_time_type,c.axis_y_tick_time_interval):f.tickValues(r),f},t.getId=function(t){var e=this.owner.config;return t in e.data_axes?e.data_axes[t]:"y"},t.getXAxisTickFormat=function(){var t=this.owner,e=t.config,n=t.isTimeSeries()?t.defaultAxisTimeFormat:t.isCategorized()?t.categoryName:function(t){return t};return e.axis_x_tick_format&&(c(e.axis_x_tick_format)?n=e.axis_x_tick_format:t.isTimeSeries()&&(n=function(n){return n?t.axisTimeFormat(e.axis_x_tick_format)(n):""})),c(n)?function(e){return n.call(t,e)}:n},t.getTickValues=function(t,e){return t||(e?e.tickValues():void 0)},t.getXAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_x_tick_values,this.owner.xAxis)},t.getYAxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y_tick_values,this.owner.yAxis)},t.getY2AxisTickValues=function(){return this.getTickValues(this.owner.config.axis_y2_tick_values,this.owner.y2Axis)},t.getLabelOptionByAxisId=function(t){var e,n=this.owner,r=n.config;return"y"===t?e=r.axis_y_label:"y2"===t?e=r.axis_y2_label:"x"===t&&(e=r.axis_x_label),e},t.getLabelText=function(t){var e=this.getLabelOptionByAxisId(t);return f(e)?e:e?e.text:null},t.setLabelText=function(t,e){var n=this.owner,r=n.config,i=this.getLabelOptionByAxisId(t);f(i)?"y"===t?r.axis_y_label=e:"y2"===t?r.axis_y2_label=e:"x"===t&&(r.axis_x_label=e):i&&(i.text=e)},t.getLabelPosition=function(t,e){var n=this.getLabelOptionByAxisId(t),r=n&&"object"===(void 0===n?"undefined":i(n))&&n.position?n.position:e;return{isInner:r.indexOf("inner")>=0,isOuter:r.indexOf("outer")>=0,isLeft:r.indexOf("left")>=0,isCenter:r.indexOf("center")>=0,isRight:r.indexOf("right")>=0,isTop:r.indexOf("top")>=0,isMiddle:r.indexOf("middle")>=0,isBottom:r.indexOf("bottom")>=0}},t.getXAxisLabelPosition=function(){return this.getLabelPosition("x",this.owner.config.axis_rotated?"inner-top":"inner-right")},t.getYAxisLabelPosition=function(){return this.getLabelPosition("y",this.owner.config.axis_rotated?"inner-right":"inner-top")},t.getY2AxisLabelPosition=function(){return this.getLabelPosition("y2",this.owner.config.axis_rotated?"inner-right":"inner-top")},t.getLabelPositionById=function(t){return"y2"===t?this.getY2AxisLabelPosition():"y"===t?this.getYAxisLabelPosition():this.getXAxisLabelPosition()},t.textForXAxisLabel=function(){return this.getLabelText("x")},t.textForYAxisLabel=function(){return this.getLabelText("y")},t.textForY2AxisLabel=function(){return this.getLabelText("y2")},t.xForAxisLabel=function(t,e){var n=this.owner;return t?e.isLeft?0:e.isCenter?n.width/2:n.width:e.isBottom?-n.height:e.isMiddle?-n.height/2:0},t.dxForAxisLabel=function(t,e){return t?e.isLeft?"0.5em":e.isRight?"-0.5em":"0":e.isTop?"-0.5em":e.isBottom?"0.5em":"0"},t.textAnchorForAxisLabel=function(t,e){return t?e.isLeft?"start":e.isCenter?"middle":"end":e.isBottom?"start":e.isMiddle?"middle":"end"},t.xForXAxisLabel=function(){return this.xForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},t.xForYAxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},t.xForY2AxisLabel=function(){return this.xForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},t.dxForXAxisLabel=function(){return this.dxForAxisLabel(!this.owner.config.axis_rotated,this.getXAxisLabelPosition())},t.dxForYAxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getYAxisLabelPosition())},t.dxForY2AxisLabel=function(){return this.dxForAxisLabel(this.owner.config.axis_rotated,this.getY2AxisLabelPosition())},t.dyForXAxisLabel=function(){var t=this.owner,e=t.config,n=this.getXAxisLabelPosition();return e.axis_rotated?n.isInner?"1.2em":-25-(t.config.axis_x_inner?0:this.getMaxTickWidth("x")):n.isInner?"-0.5em":e.axis_x_height?e.axis_x_height-10:"3em"},t.dyForYAxisLabel=function(){var t=this.owner,e=this.getYAxisLabelPosition();return t.config.axis_rotated?e.isInner?"-0.5em":"3em":e.isInner?"1.2em":-10-(t.config.axis_y_inner?0:this.getMaxTickWidth("y")+10)},t.dyForY2AxisLabel=function(){var t=this.owner,e=this.getY2AxisLabelPosition();return t.config.axis_rotated?e.isInner?"1.2em":"-2.2em":e.isInner?"-0.5em":15+(t.config.axis_y2_inner?0:this.getMaxTickWidth("y2")+15)},t.textAnchorForXAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(!t.config.axis_rotated,this.getXAxisLabelPosition())},t.textAnchorForYAxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getYAxisLabelPosition())},t.textAnchorForY2AxisLabel=function(){var t=this.owner;return this.textAnchorForAxisLabel(t.config.axis_rotated,this.getY2AxisLabelPosition())},t.getMaxTickWidth=function(t,e){var n,r,i,a,o=this.owner,u=o.config,c=0;return e&&o.currentMaxTickWidths[t]?o.currentMaxTickWidths[t]:(o.svg&&(n=o.filterTargetsToShow(o.data.targets),"y"===t?(r=o.y.copy().domain(o.getYDomain(n,"y")),i=this.getYAxis(r,o.yOrient,u.axis_y_tick_format,o.yAxisTickValues,!1,!0,!0)):"y2"===t?(r=o.y2.copy().domain(o.getYDomain(n,"y2")),i=this.getYAxis(r,o.y2Orient,u.axis_y2_tick_format,o.y2AxisTickValues,!1,!0,!0)):(r=o.x.copy().domain(o.getXDomain(n)),i=this.getXAxis(r,o.xOrient,o.xAxisTickFormat,o.xAxisTickValues,!1,!0,!0),this.updateXAxisTickValues(n,i)),(a=o.d3.select("body").append("div").classed("c3",!0)).append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0).append("g").call(i).each(function(){o.d3.select(this).selectAll("text").each(function(){var t=this.getBoundingClientRect();c<t.width&&(c=t.width)}),a.remove()})),o.currentMaxTickWidths[t]=c<=0?o.currentMaxTickWidths[t]:c,o.currentMaxTickWidths[t])},t.updateLabels=function(t){var e=this.owner,n=e.main.select("."+r.axisX+" ."+r.axisXLabel),i=e.main.select("."+r.axisY+" ."+r.axisYLabel),a=e.main.select("."+r.axisY2+" ."+r.axisY2Label);(t?n.transition():n).attr("x",this.xForXAxisLabel.bind(this)).attr("dx",this.dxForXAxisLabel.bind(this)).attr("dy",this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)),(t?i.transition():i).attr("x",this.xForYAxisLabel.bind(this)).attr("dx",this.dxForYAxisLabel.bind(this)).attr("dy",this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)),(t?a.transition():a).attr("x",this.xForY2AxisLabel.bind(this)).attr("dx",this.dxForY2AxisLabel.bind(this)).attr("dy",this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))},t.getPadding=function(t,e,n,r){var i="number"==typeof t?t:t[e];return u(i)?"ratio"===t.unit?t[e]*r:this.convertPixelsToAxisPadding(i,r):n},t.convertPixelsToAxisPadding=function(t,e){var n=this.owner,r=n.config.axis_rotated?n.width:n.height;return e*(t/r)},t.generateTickValues=function(t,e,n){var r,i,a,o,u,s,f,l=t;if(e)if(1===(r=c(e)?e():e))l=[t[0]];else if(2===r)l=[t[0],t[t.length-1]];else if(r>2){for(o=r-2,i=t[0],a=t[t.length-1],u=(a-i)/(o+1),l=[i],s=0;s<o;s++)f=+i+u*(s+1),l.push(n?new Date(f):f);l.push(a)}return n||(l=l.sort(function(t,e){return t-e})),l},t.generateTransitions=function(t){var e=this.owner,n=e.axes;return{axisX:t?n.x.transition().duration(t):n.x,axisY:t?n.y.transition().duration(t):n.y,axisY2:t?n.y2.transition().duration(t):n.y2,axisSubX:t?n.subx.transition().duration(t):n.subx}},t.redraw=function(t,e){var n=this.owner,r=t?n.d3.transition().duration(t):null;n.axes.x.style("opacity",e?0:1).call(n.xAxis,r),n.axes.y.style("opacity",e?0:1).call(n.yAxis,r),n.axes.y2.style("opacity",e?0:1).call(n.y2Axis,r),n.axes.subx.style("opacity",e?0:1).call(n.subXAxis,r)};var A,T,P={version:"0.6.1"};function C(t){var e=this.internal=new M(this);e.loadConfig(t),e.beforeInit(t),e.init(),e.afterInit(t),function t(e,n,r){Object.keys(e).forEach(function(i){n[i]=e[i].bind(r),Object.keys(e[i]).length>0&&t(e[i],n[i],r)})}(A,this,this)}function M(t){var e=this;e.d3=window.d3?window.d3:n(41),e.api=t,e.config=e.getDefaultConfig(),e.data={},e.cache={},e.axes={}}return P.generate=function(t){return new C(t)},P.chart={fn:C.prototype,internal:{fn:M.prototype}},A=P.chart.fn,(T=P.chart.internal.fn).beforeInit=function(){},T.afterInit=function(){},T.init=function(){var t=this,e=t.config;if(t.initParams(),e.data_url)t.convertUrlToData(e.data_url,e.data_mimeType,e.data_headers,e.data_keys,t.initWithData);else if(e.data_json)t.initWithData(t.convertJsonToData(e.data_json,e.data_keys));else if(e.data_rows)t.initWithData(t.convertRowsToData(e.data_rows));else{if(!e.data_columns)throw Error("url or json or rows or columns is required.");t.initWithData(t.convertColumnsToData(e.data_columns))}},T.initParams=function(){var t=this,e=t.d3,n=t.config;t.clipId="c3-"+ +new Date+"-clip",t.clipIdForXAxis=t.clipId+"-xaxis",t.clipIdForYAxis=t.clipId+"-yaxis",t.clipIdForGrid=t.clipId+"-grid",t.clipIdForSubchart=t.clipId+"-subchart",t.clipPath=t.getClipPath(t.clipId),t.clipPathForXAxis=t.getClipPath(t.clipIdForXAxis),t.clipPathForYAxis=t.getClipPath(t.clipIdForYAxis),t.clipPathForGrid=t.getClipPath(t.clipIdForGrid),t.clipPathForSubchart=t.getClipPath(t.clipIdForSubchart),t.dragStart=null,t.dragging=!1,t.flowing=!1,t.cancelClick=!1,t.mouseover=!1,t.transiting=!1,t.color=t.generateColor(),t.levelColor=t.generateLevelColor(),t.dataTimeParse=(n.data_xLocaltime?e.timeParse:e.utcParse)(t.config.data_xFormat),t.axisTimeFormat=n.axis_x_localtime?e.timeFormat:e.utcFormat,t.defaultAxisTimeFormat=function(t){return t.getMilliseconds()?e.timeFormat(".%L")(t):t.getSeconds()?e.timeFormat(":%S")(t):t.getMinutes()?e.timeFormat("%I:%M")(t):t.getHours()?e.timeFormat("%I %p")(t):t.getDay()&&1!==t.getDate()?e.timeFormat("%-m/%-d")(t):1!==t.getDate()?e.timeFormat("%-m/%-d")(t):t.getMonth()?e.timeFormat("%-m/%-d")(t):e.timeFormat("%Y/%-m/%-d")(t)},t.hiddenTargetIds=[],t.hiddenLegendIds=[],t.focusedTargetIds=[],t.defocusedTargetIds=[],t.xOrient=n.axis_rotated?n.axis_x_inner?"right":"left":n.axis_x_inner?"top":"bottom",t.yOrient=n.axis_rotated?n.axis_y_inner?"top":"bottom":n.axis_y_inner?"right":"left",t.y2Orient=n.axis_rotated?n.axis_y2_inner?"bottom":"top":n.axis_y2_inner?"left":"right",t.subXOrient=n.axis_rotated?"left":"bottom",t.isLegendRight="right"===n.legend_position,t.isLegendInset="inset"===n.legend_position,t.isLegendTop="top-left"===n.legend_inset_anchor||"top-right"===n.legend_inset_anchor,t.isLegendLeft="top-left"===n.legend_inset_anchor||"bottom-left"===n.legend_inset_anchor,t.legendStep=0,t.legendItemWidth=0,t.legendItemHeight=0,t.currentMaxTickWidths={x:0,y:0,y2:0},t.rotated_padding_left=30,t.rotated_padding_right=n.axis_rotated&&!n.axis_x_show?0:30,t.rotated_padding_top=5,t.withoutFadeIn={},t.intervalForObserveInserted=void 0,t.axes.subx=e.selectAll([])},T.initChartElements=function(){this.initBar&&this.initBar(),this.initLine&&this.initLine(),this.initArc&&this.initArc(),this.initGauge&&this.initGauge(),this.initText&&this.initText()},T.initWithData=function(t){var e,n,i=this,a=i.d3,o=i.config,u=!0;i.axis=new S(i),o.bindto?"function"==typeof o.bindto.node?i.selectChart=o.bindto:i.selectChart=a.select(o.bindto):i.selectChart=a.selectAll([]),i.selectChart.empty()&&(i.selectChart=a.select(document.createElement("div")).style("opacity",0),i.observeInserted(i.selectChart),u=!1),i.selectChart.html("").classed("c3",!0),i.data.xs={},i.data.targets=i.convertDataToTargets(t),o.data_filter&&(i.data.targets=i.data.targets.filter(o.data_filter)),o.data_hide&&i.addHiddenTargetIds(!0===o.data_hide?i.mapToIds(i.data.targets):o.data_hide),o.legend_hide&&i.addHiddenLegendIds(!0===o.legend_hide?i.mapToIds(i.data.targets):o.legend_hide),i.updateSizes(),i.updateScales(),i.x.domain(a.extent(i.getXDomain(i.data.targets))),i.y.domain(i.getYDomain(i.data.targets,"y")),i.y2.domain(i.getYDomain(i.data.targets,"y2")),i.subX.domain(i.x.domain()),i.subY.domain(i.y.domain()),i.subY2.domain(i.y2.domain()),i.orgXDomain=i.x.domain(),i.svg=i.selectChart.append("svg").style("overflow","hidden").on("mouseenter",function(){return o.onmouseover.call(i)}).on("mouseleave",function(){return o.onmouseout.call(i)}),i.config.svg_classname&&i.svg.attr("class",i.config.svg_classname),e=i.svg.append("defs"),i.clipChart=i.appendClip(e,i.clipId),i.clipXAxis=i.appendClip(e,i.clipIdForXAxis),i.clipYAxis=i.appendClip(e,i.clipIdForYAxis),i.clipGrid=i.appendClip(e,i.clipIdForGrid),i.clipSubchart=i.appendClip(e,i.clipIdForSubchart),i.updateSvgSize(),n=i.main=i.svg.append("g").attr("transform",i.getTranslate("main")),i.initPie&&i.initPie(),i.initSubchart&&i.initSubchart(),i.initTooltip&&i.initTooltip(),i.initLegend&&i.initLegend(),i.initTitle&&i.initTitle(),i.initZoom&&i.initZoom(),i.initSubchartBrush&&i.initSubchartBrush(),n.append("text").attr("class",r.text+" "+r.empty).attr("text-anchor","middle").attr("dominant-baseline","middle"),i.initRegion(),i.initGrid(),n.append("g").attr("clip-path",i.clipPath).attr("class",r.chart),o.grid_lines_front&&i.initGridLines(),i.initChartElements(),i.axis.init(),i.updateTargets(i.data.targets),i.initEventRect(),o.axis_x_selection&&i.brush.selectionAsValue(i.getDefaultSelection()),u&&(i.updateDimension(),i.config.oninit.call(i),i.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1})),i.bindResize(),i.api.element=i.selectChart.node()},T.smoothLines=function(t,e){var n=this;"grid"===e&&t.each(function(){var t=n.d3.select(this),e=t.attr("x1"),r=t.attr("x2"),i=t.attr("y1"),a=t.attr("y2");t.attr({x1:Math.ceil(e),x2:Math.ceil(r),y1:Math.ceil(i),y2:Math.ceil(a)})})},T.updateSizes=function(){var t=this,e=t.config,n=t.legend?t.getLegendHeight():0,r=t.legend?t.getLegendWidth():0,i=t.isLegendRight||t.isLegendInset?0:n,a=t.hasArcType(),o=e.axis_rotated||a?0:t.getHorizontalAxisHeight("x"),u=e.subchart_show&&!a?e.subchart_size_height+o:0;t.currentWidth=t.getCurrentWidth(),t.currentHeight=t.getCurrentHeight(),t.margin=e.axis_rotated?{top:t.getHorizontalAxisHeight("y2")+t.getCurrentPaddingTop(),right:a?0:t.getCurrentPaddingRight(),bottom:t.getHorizontalAxisHeight("y")+i+t.getCurrentPaddingBottom(),left:u+(a?0:t.getCurrentPaddingLeft())}:{top:4+t.getCurrentPaddingTop(),right:a?0:t.getCurrentPaddingRight(),bottom:o+u+i+t.getCurrentPaddingBottom(),left:a?0:t.getCurrentPaddingLeft()},t.margin2=e.axis_rotated?{top:t.margin.top,right:NaN,bottom:20+i,left:t.rotated_padding_left}:{top:t.currentHeight-u-i,right:NaN,bottom:o+i,left:t.margin.left},t.margin3={top:0,right:NaN,bottom:0,left:0},t.updateSizeForLegend&&t.updateSizeForLegend(n,r),t.width=t.currentWidth-t.margin.left-t.margin.right,t.height=t.currentHeight-t.margin.top-t.margin.bottom,t.width<0&&(t.width=0),t.height<0&&(t.height=0),t.width2=e.axis_rotated?t.margin.left-t.rotated_padding_left-t.rotated_padding_right:t.width,t.height2=e.axis_rotated?t.height:t.currentHeight-t.margin2.top-t.margin2.bottom,t.width2<0&&(t.width2=0),t.height2<0&&(t.height2=0),t.arcWidth=t.width-(t.isLegendRight?r+10:0),t.arcHeight=t.height-(t.isLegendRight?0:10),t.hasType("gauge")&&!e.gauge_fullCircle&&(t.arcHeight+=t.height-t.getGaugeLabelHeight()),t.updateRadius&&t.updateRadius(),t.isLegendRight&&a&&(t.margin3.left=t.arcWidth/2+1.1*t.radiusExpanded)},T.updateTargets=function(t){var e=this;e.updateTargetsForText(t),e.updateTargetsForBar(t),e.updateTargetsForLine(t),e.hasArcType()&&e.updateTargetsForArc&&e.updateTargetsForArc(t),e.updateTargetsForSubchart&&e.updateTargetsForSubchart(t),e.showTargets()},T.showTargets=function(){var t=this;t.svg.selectAll("."+r.target).filter(function(e){return t.isTargetToShow(e.id)}).transition().duration(t.config.transition_duration).style("opacity",1)},T.redraw=function(t,e){var n,i,a,o,u,c,s,f,l,d,h,g,p,_,y,x,m,b,w,S,A,T,P,C,M,L,O,E,k,G,V,R=this,I=R.main,D=R.d3,N=R.config,F=R.getShapeIndices(R.isAreaType),z=R.getShapeIndices(R.isBarType),j=R.getShapeIndices(R.isLineType),B=R.hasArcType(),H=R.filterTargetsToShow(R.data.targets),X=R.xv.bind(R);if(n=v(t=t||{},"withY",!0),i=v(t,"withSubchart",!0),a=v(t,"withTransition",!0),c=v(t,"withTransform",!1),s=v(t,"withUpdateXDomain",!1),f=v(t,"withUpdateOrgXDomain",!1),l=v(t,"withTrimXDomain",!0),p=v(t,"withUpdateXAxis",s),d=v(t,"withLegend",!1),h=v(t,"withEventRect",!0),g=v(t,"withDimension",!0),o=v(t,"withTransitionForExit",a),u=v(t,"withTransitionForAxis",a),w=a?N.transition_duration:0,S=o?w:0,A=u?w:0,e=e||R.axis.generateTransitions(A),d&&N.legend_show?R.updateLegend(R.mapToIds(R.data.targets),t,e):g&&R.updateDimension(!0),R.isCategorized()&&0===H.length&&R.x.domain([0,R.axes.x.selectAll(".tick").size()]),H.length?(R.updateXDomain(H,s,f,l),N.axis_x_tick_values||(L=R.axis.updateXAxisTickValues(H))):(R.xAxis.tickValues([]),R.subXAxis.tickValues([])),N.zoom_rescale&&!t.flow&&(k=R.x.orgDomain()),R.y.domain(R.getYDomain(H,"y",k)),R.y2.domain(R.getYDomain(H,"y2",k)),!N.axis_y_tick_values&&N.axis_y_tick_count&&R.yAxis.tickValues(R.axis.generateTickValues(R.y.domain(),N.axis_y_tick_count)),!N.axis_y2_tick_values&&N.axis_y2_tick_count&&R.y2Axis.tickValues(R.axis.generateTickValues(R.y2.domain(),N.axis_y2_tick_count)),R.axis.redraw(A,B),R.axis.updateLabels(a),(s||p)&&H.length)if(N.axis_x_tick_culling&&L){for(O=1;O<L.length;O++)if(L.length/O<N.axis_x_tick_culling_max){E=O;break}R.svg.selectAll("."+r.axisX+" .tick text").each(function(t){var e=L.indexOf(t);e>=0&&D.select(this).style("display",e%E?"none":"block")})}else R.svg.selectAll("."+r.axisX+" .tick text").style("display","block");_=R.generateDrawArea?R.generateDrawArea(F,!1):void 0,y=R.generateDrawBar?R.generateDrawBar(z):void 0,x=R.generateDrawLine?R.generateDrawLine(j,!1):void 0,m=R.generateXYForText(F,z,j,!0),b=R.generateXYForText(F,z,j,!1),R.updateCircleY(),G=(R.config.axis_rotated?R.circleY:R.circleX).bind(R),V=(R.config.axis_rotated?R.circleX:R.circleY).bind(R),n&&(R.subY.domain(R.getYDomain(H,"y")),R.subY2.domain(R.getYDomain(H,"y2"))),R.updateXgridFocus(),I.select("text."+r.text+"."+r.empty).attr("x",R.width/2).attr("y",R.height/2).text(N.data_empty_label_text).transition().style("opacity",H.length?0:1),h&&R.redrawEventRect(),R.updateGrid(w),R.updateRegion(w),R.updateBar(S),R.updateLine(S),R.updateArea(S),R.updateCircle(G,V),R.hasDataLabel()&&R.updateText(m,b,S),R.redrawTitle&&R.redrawTitle(),R.redrawArc&&R.redrawArc(w,S,c),R.redrawSubchart&&R.redrawSubchart(i,e,w,S,F,z,j),I.selectAll("."+r.selectedCircles).filter(R.isBarType.bind(R)).selectAll("circle").remove(),t.flow&&(C=R.generateFlow({targets:H,flow:t.flow,duration:t.flow.duration,drawBar:y,drawLine:x,drawArea:_,cx:G,cy:V,xv:X,xForText:m,yForText:b})),R.isTabVisible()&&(w?(M=D.transition().duration(w),T=[],[R.redrawBar(y,!0,M),R.redrawLine(x,!0,M),R.redrawArea(_,!0,M),R.redrawCircle(G,V,!0,M),R.redrawText(m,b,t.flow,!0,M),R.redrawRegion(!0,M),R.redrawGrid(!0,M)].forEach(function(t){t.forEach(function(t){T.push(t)})}),P=R.generateWait(),T.forEach(function(t){P.add(t)}),P(function(){C&&C(),N.onrendered&&N.onrendered.call(R)})):(R.redrawBar(y),R.redrawLine(x),R.redrawArea(_),R.redrawCircle(G,V),R.redrawText(m,b,t.flow),R.redrawRegion(),R.redrawGrid(),C&&C(),N.onrendered&&N.onrendered.call(R))),R.mapToIds(R.data.targets).forEach(function(t){R.withoutFadeIn[t]=!0})},T.updateAndRedraw=function(t){var e,n=this,r=n.config;(t=t||{}).withTransition=v(t,"withTransition",!0),t.withTransform=v(t,"withTransform",!1),t.withLegend=v(t,"withLegend",!1),t.withUpdateXDomain=v(t,"withUpdateXDomain",!0),t.withUpdateOrgXDomain=v(t,"withUpdateOrgXDomain",!0),t.withTransitionForExit=!1,t.withTransitionForTransform=v(t,"withTransitionForTransform",t.withTransition),n.updateSizes(),t.withLegend&&r.legend_show||(e=n.axis.generateTransitions(t.withTransitionForAxis?r.transition_duration:0),n.updateScales(),n.updateSvgSize(),n.transformAll(t.withTransitionForTransform,e)),n.redraw(t,e)},T.redrawWithoutRescale=function(){this.redraw({withY:!1,withSubchart:!1,withEventRect:!1,withTransitionForAxis:!1})},T.isTimeSeries=function(){return"timeseries"===this.config.axis_x_type},T.isCategorized=function(){return this.config.axis_x_type.indexOf("categor")>=0},T.isCustomX=function(){var t=this.config;return!this.isTimeSeries()&&(t.data_x||y(t.data_xs))},T.isTimeSeriesY=function(){return"timeseries"===this.config.axis_y_type},T.getTranslate=function(t){var e,n,r=this,i=r.config;return"main"===t?(e=g(r.margin.left),n=g(r.margin.top)):"context"===t?(e=g(r.margin2.left),n=g(r.margin2.top)):"legend"===t?(e=r.margin3.left,n=r.margin3.top):"x"===t?(e=0,n=i.axis_rotated?0:r.height):"y"===t?(e=0,n=i.axis_rotated?r.height:0):"y2"===t?(e=i.axis_rotated?0:r.width,n=i.axis_rotated?1:0):"subx"===t?(e=0,n=i.axis_rotated?0:r.height2):"arc"===t&&(e=r.arcWidth/2,n=r.arcHeight/2-(r.hasType("gauge")?6:0)),"translate("+e+","+n+")"},T.initialOpacity=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?1:0},T.initialOpacityForCircle=function(t){return null!==t.value&&this.withoutFadeIn[t.id]?this.opacityForCircle(t):0},T.opacityForCircle=function(t){var e=(c(this.config.point_show)?this.config.point_show(t):this.config.point_show)?1:0;return u(t.value)?this.isScatterType(t)?.5:e:0},T.opacityForText=function(){return this.hasDataLabel()?1:0},T.xx=function(t){return t?this.x(t.x):null},T.xv=function(t){var e=this,n=t.value;return e.isTimeSeries()?n=e.parseDate(t.value):e.isCategorized()&&"string"==typeof t.value&&(n=e.config.axis_x_categories.indexOf(t.value)),Math.ceil(e.x(n))},T.yv=function(t){var e=t.axis&&"y2"===t.axis?this.y2:this.y;return Math.ceil(e(t.value))},T.subxx=function(t){return t?this.subX(t.x):null},T.transformMain=function(t,e){var n,i,a,o=this;e&&e.axisX?n=e.axisX:(n=o.main.select("."+r.axisX),t&&(n=n.transition())),e&&e.axisY?i=e.axisY:(i=o.main.select("."+r.axisY),t&&(i=i.transition())),e&&e.axisY2?a=e.axisY2:(a=o.main.select("."+r.axisY2),t&&(a=a.transition())),(t?o.main.transition():o.main).attr("transform",o.getTranslate("main")),n.attr("transform",o.getTranslate("x")),i.attr("transform",o.getTranslate("y")),a.attr("transform",o.getTranslate("y2")),o.main.select("."+r.chartArcs).attr("transform",o.getTranslate("arc"))},T.transformAll=function(t,e){var n=this;n.transformMain(t,e),n.config.subchart_show&&n.transformContext(t,e),n.legend&&n.transformLegend(t)},T.updateSvgSize=function(){var t=this,e=t.svg.select(".c3-brush .overlay");t.svg.attr("width",t.currentWidth).attr("height",t.currentHeight),t.svg.selectAll(["#"+t.clipId,"#"+t.clipIdForGrid]).select("rect").attr("width",t.width).attr("height",t.height),t.svg.select("#"+t.clipIdForXAxis).select("rect").attr("x",t.getXAxisClipX.bind(t)).attr("y",t.getXAxisClipY.bind(t)).attr("width",t.getXAxisClipWidth.bind(t)).attr("height",t.getXAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForYAxis).select("rect").attr("x",t.getYAxisClipX.bind(t)).attr("y",t.getYAxisClipY.bind(t)).attr("width",t.getYAxisClipWidth.bind(t)).attr("height",t.getYAxisClipHeight.bind(t)),t.svg.select("#"+t.clipIdForSubchart).select("rect").attr("width",t.width).attr("height",e.size()?e.attr("height"):0),t.selectChart.style("max-height",t.currentHeight+"px")},T.updateDimension=function(t){var e=this;t||(e.config.axis_rotated?(e.axes.x.call(e.xAxis),e.axes.subx.call(e.subXAxis)):(e.axes.y.call(e.yAxis),e.axes.y2.call(e.y2Axis))),e.updateSizes(),e.updateScales(),e.updateSvgSize(),e.transformAll(!1)},T.observeInserted=function(t){var e,n=this;"undefined"!=typeof MutationObserver?(e=new MutationObserver(function(r){r.forEach(function(r){"childList"===r.type&&r.previousSibling&&(e.disconnect(),n.intervalForObserveInserted=window.setInterval(function(){t.node().parentNode&&(window.clearInterval(n.intervalForObserveInserted),n.updateDimension(),n.brush&&n.brush.update(),n.config.oninit.call(n),n.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),t.transition().style("opacity",1))},10))})})).observe(t.node(),{attributes:!0,childList:!0,characterData:!0}):window.console.error("MutationObserver not defined.")},T.bindResize=function(){var t=this,e=t.config;if(t.resizeFunction=t.generateResize(),t.resizeFunction.add(function(){e.onresize.call(t)}),e.resize_auto&&t.resizeFunction.add(function(){void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),t.resizeTimeout=window.setTimeout(function(){delete t.resizeTimeout,t.updateAndRedraw({withUpdateXDomain:!1,withUpdateOrgXDomain:!1,withTransition:!1,withTransitionForTransform:!1,withLegend:!0}),t.brush&&t.brush.update()},100)}),t.resizeFunction.add(function(){e.onresized.call(t)}),t.resizeIfElementDisplayed=function(){null!=t.api&&t.api.element.offsetParent&&t.resizeFunction()},window.attachEvent)window.attachEvent("onresize",t.resizeIfElementDisplayed);else if(window.addEventListener)window.addEventListener("resize",t.resizeIfElementDisplayed,!1);else{var n=window.onresize;n?n.add&&n.remove||(n=t.generateResize()).add(window.onresize):n=t.generateResize(),n.add(t.resizeFunction),window.onresize=function(){t.api.element.offsetParent&&n()}}},T.generateResize=function(){var t=[];function e(){t.forEach(function(t){t()})}return e.add=function(e){t.push(e)},e.remove=function(e){for(var n=0;n<t.length;n++)if(t[n]===e){t.splice(n,1);break}},e},T.endall=function(t,e){var n=0;t.each(function(){++n}).on("end",function(){--n||e.apply(this,arguments)})},T.generateWait=function(){var t=[],e=function(e){var n=setInterval(function(){var r=0;t.forEach(function(t){if(t.empty())r+=1;else try{t.transition()}catch(t){r+=1}}),r===t.length&&(clearInterval(n),e&&e())},50)};return e.add=function(e){t.push(e)},e},T.parseDate=function(t){var e;return t instanceof Date?e=t:"string"==typeof t?e=this.dataTimeParse(t):"object"===(void 0===t?"undefined":i(t))?e=new Date(+t):"number"!=typeof t||isNaN(t)||(e=new Date(+t)),e&&!isNaN(+e)||window.console.error("Failed to parse x '"+t+"' to Date object"),e},T.isTabVisible=function(){var t;return void 0!==document.hidden?t="hidden":void 0!==document.mozHidden?t="mozHidden":void 0!==document.msHidden?t="msHidden":void 0!==document.webkitHidden&&(t="webkitHidden"),!document[t]},T.isValue=u,T.isFunction=c,T.isString=f,T.isUndefined=l,T.isDefined=d,T.ceil10=h,T.asHalfPixel=g,T.diffDomain=p,T.isEmpty=_,T.notEmpty=y,T.notEmpty=y,T.getOption=v,T.hasValue=x,T.sanitise=m,T.getPathBox=b,T.CLASS=r,Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r?this:t,e.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,i.prototype=new r,i}),"SVGPathSeg"in window||(window.SVGPathSeg=function(t,e,n){this.pathSegType=t,this.pathSegTypeAsLetter=e,this._owningPathSegList=n},window.SVGPathSeg.prototype.classname="SVGPathSeg",window.SVGPathSeg.PATHSEG_UNKNOWN=0,window.SVGPathSeg.PATHSEG_CLOSEPATH=1,window.SVGPathSeg.PATHSEG_MOVETO_ABS=2,window.SVGPathSeg.PATHSEG_MOVETO_REL=3,window.SVGPathSeg.PATHSEG_LINETO_ABS=4,window.SVGPathSeg.PATHSEG_LINETO_REL=5,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS=6,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL=7,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS=8,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL=9,window.SVGPathSeg.PATHSEG_ARC_ABS=10,window.SVGPathSeg.PATHSEG_ARC_REL=11,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS=12,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL=13,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS=14,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL=15,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS=16,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL=17,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS=18,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL=19,window.SVGPathSeg.prototype._segmentChanged=function(){this._owningPathSegList&&this._owningPathSegList.segmentChanged(this)},window.SVGPathSegClosePath=function(t){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CLOSEPATH,"z",t)},window.SVGPathSegClosePath.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegClosePath.prototype.toString=function(){return"[object SVGPathSegClosePath]"},window.SVGPathSegClosePath.prototype._asPathString=function(){return this.pathSegTypeAsLetter},window.SVGPathSegClosePath.prototype.clone=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathSegMovetoAbs=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_ABS,"M",t),this._x=e,this._y=n},window.SVGPathSegMovetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoAbs.prototype.toString=function(){return"[object SVGPathSegMovetoAbs]"},window.SVGPathSegMovetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoAbs.prototype.clone=function(){return new window.SVGPathSegMovetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegMovetoRel=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_MOVETO_REL,"m",t),this._x=e,this._y=n},window.SVGPathSegMovetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegMovetoRel.prototype.toString=function(){return"[object SVGPathSegMovetoRel]"},window.SVGPathSegMovetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegMovetoRel.prototype.clone=function(){return new window.SVGPathSegMovetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegMovetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoAbs=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_ABS,"L",t),this._x=e,this._y=n},window.SVGPathSegLinetoAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoAbs.prototype.toString=function(){return"[object SVGPathSegLinetoAbs]"},window.SVGPathSegLinetoAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoAbs.prototype.clone=function(){return new window.SVGPathSegLinetoAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoRel=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_REL,"l",t),this._x=e,this._y=n},window.SVGPathSegLinetoRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoRel.prototype.toString=function(){return"[object SVGPathSegLinetoRel]"},window.SVGPathSegLinetoRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegLinetoRel.prototype.clone=function(){return new window.SVGPathSegLinetoRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegLinetoRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicAbs=function(t,e,n,r,i,a,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS,"C",t),this._x=e,this._y=n,this._x1=r,this._y1=i,this._x2=a,this._y2=o},window.SVGPathSegCurvetoCubicAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicAbs]"},window.SVGPathSegCurvetoCubicAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicAbs(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicRel=function(t,e,n,r,i,a,o){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL,"c",t),this._x=e,this._y=n,this._x1=r,this._y1=i,this._x2=a,this._y2=o},window.SVGPathSegCurvetoCubicRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicRel]"},window.SVGPathSegCurvetoCubicRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicRel(void 0,this._x,this._y,this._x1,this._y1,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticAbs=function(t,e,n,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS,"Q",t),this._x=e,this._y=n,this._x1=r,this._y1=i},window.SVGPathSegCurvetoQuadraticAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticAbs]"},window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticRel=function(t,e,n,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL,"q",t),this._x=e,this._y=n,this._x1=r,this._y1=i},window.SVGPathSegCurvetoQuadraticRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticRel]"},window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x1+" "+this._y1+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticRel(void 0,this._x,this._y,this._x1,this._y1)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"x1",{get:function(){return this._x1},set:function(t){this._x1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype,"y1",{get:function(){return this._y1},set:function(t){this._y1=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcAbs=function(t,e,n,r,i,a,o,u){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_ABS,"A",t),this._x=e,this._y=n,this._r1=r,this._r2=i,this._angle=a,this._largeArcFlag=o,this._sweepFlag=u},window.SVGPathSegArcAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcAbs.prototype.toString=function(){return"[object SVGPathSegArcAbs]"},window.SVGPathSegArcAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcAbs.prototype.clone=function(){return new window.SVGPathSegArcAbs(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcAbs.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegArcRel=function(t,e,n,r,i,a,o,u){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_ARC_REL,"a",t),this._x=e,this._y=n,this._r1=r,this._r2=i,this._angle=a,this._largeArcFlag=o,this._sweepFlag=u},window.SVGPathSegArcRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegArcRel.prototype.toString=function(){return"[object SVGPathSegArcRel]"},window.SVGPathSegArcRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._r1+" "+this._r2+" "+this._angle+" "+(this._largeArcFlag?"1":"0")+" "+(this._sweepFlag?"1":"0")+" "+this._x+" "+this._y},window.SVGPathSegArcRel.prototype.clone=function(){return new window.SVGPathSegArcRel(void 0,this._x,this._y,this._r1,this._r2,this._angle,this._largeArcFlag,this._sweepFlag)},Object.defineProperty(window.SVGPathSegArcRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r1",{get:function(){return this._r1},set:function(t){this._r1=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"r2",{get:function(){return this._r2},set:function(t){this._r2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"largeArcFlag",{get:function(){return this._largeArcFlag},set:function(t){this._largeArcFlag=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegArcRel.prototype,"sweepFlag",{get:function(){return this._sweepFlag},set:function(t){this._sweepFlag=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS,"H",t),this._x=e},window.SVGPathSegLinetoHorizontalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalAbs]"},window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalAbs(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoHorizontalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL,"h",t),this._x=e},window.SVGPathSegLinetoHorizontalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoHorizontalRel.prototype.toString=function(){return"[object SVGPathSegLinetoHorizontalRel]"},window.SVGPathSegLinetoHorizontalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x},window.SVGPathSegLinetoHorizontalRel.prototype.clone=function(){return new window.SVGPathSegLinetoHorizontalRel(void 0,this._x)},Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalAbs=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS,"V",t),this._y=e},window.SVGPathSegLinetoVerticalAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalAbs.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalAbs]"},window.SVGPathSegLinetoVerticalAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalAbs.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalAbs(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegLinetoVerticalRel=function(t,e){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL,"v",t),this._y=e},window.SVGPathSegLinetoVerticalRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegLinetoVerticalRel.prototype.toString=function(){return"[object SVGPathSegLinetoVerticalRel]"},window.SVGPathSegLinetoVerticalRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._y},window.SVGPathSegLinetoVerticalRel.prototype.clone=function(){return new window.SVGPathSegLinetoVerticalRel(void 0,this._y)},Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothAbs=function(t,e,n,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS,"S",t),this._x=e,this._y=n,this._x2=r,this._y2=i},window.SVGPathSegCurvetoCubicSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothAbs]"},window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoCubicSmoothRel=function(t,e,n,r,i){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL,"s",t),this._x=e,this._y=n,this._x2=r,this._y2=i},window.SVGPathSegCurvetoCubicSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoCubicSmoothRel]"},window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x2+" "+this._y2+" "+this._x+" "+this._y},window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,this._x,this._y,this._x2,this._y2)},Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"x2",{get:function(){return this._x2},set:function(t){this._x2=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype,"y2",{get:function(){return this._y2},set:function(t){this._y2=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothAbs=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS,"T",t),this._x=e,this._y=n},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothAbs]"},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathSegCurvetoQuadraticSmoothRel=function(t,e,n){window.SVGPathSeg.call(this,window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL,"t",t),this._x=e,this._y=n},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype=Object.create(window.SVGPathSeg.prototype),window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString=function(){return"[object SVGPathSegCurvetoQuadraticSmoothRel]"},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString=function(){return this.pathSegTypeAsLetter+" "+this._x+" "+this._y},window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone=function(){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,this._x,this._y)},Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._segmentChanged()},enumerable:!0}),Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._segmentChanged()},enumerable:!0}),window.SVGPathElement.prototype.createSVGPathSegClosePath=function(){return new window.SVGPathSegClosePath(void 0)},window.SVGPathElement.prototype.createSVGPathSegMovetoAbs=function(t,e){return new window.SVGPathSegMovetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegMovetoRel=function(t,e){return new window.SVGPathSegMovetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoAbs=function(t,e){return new window.SVGPathSegLinetoAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegLinetoRel=function(t,e){return new window.SVGPathSegLinetoRel(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs=function(t,e,n,r,i,a){return new window.SVGPathSegCurvetoCubicAbs(void 0,t,e,n,r,i,a)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel=function(t,e,n,r,i,a){return new window.SVGPathSegCurvetoCubicRel(void 0,t,e,n,r,i,a)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs=function(t,e,n,r){return new window.SVGPathSegCurvetoQuadraticAbs(void 0,t,e,n,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel=function(t,e,n,r){return new window.SVGPathSegCurvetoQuadraticRel(void 0,t,e,n,r)},window.SVGPathElement.prototype.createSVGPathSegArcAbs=function(t,e,n,r,i,a,o){return new window.SVGPathSegArcAbs(void 0,t,e,n,r,i,a,o)},window.SVGPathElement.prototype.createSVGPathSegArcRel=function(t,e,n,r,i,a,o){return new window.SVGPathSegArcRel(void 0,t,e,n,r,i,a,o)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs=function(t){return new window.SVGPathSegLinetoHorizontalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel=function(t){return new window.SVGPathSegLinetoHorizontalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs=function(t){return new window.SVGPathSegLinetoVerticalAbs(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel=function(t){return new window.SVGPathSegLinetoVerticalRel(void 0,t)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs=function(t,e,n,r){return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0,t,e,n,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel=function(t,e,n,r){return new window.SVGPathSegCurvetoCubicSmoothRel(void 0,t,e,n,r)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0,t,e)},window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel=function(t,e){return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0,t,e)},"getPathSegAtLength"in window.SVGPathElement.prototype||(window.SVGPathElement.prototype.getPathSegAtLength=function(t){if(void 0===t||!isFinite(t))throw"Invalid arguments.";var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",this.getAttribute("d"));var n=e.pathSegList.numberOfItems-1;if(n<=0)return 0;do{if(e.pathSegList.removeItem(n),t>e.getTotalLength())break;n--}while(n>0);return n})),"SVGPathSegList"in window||(window.SVGPathSegList=function(t){this._pathElement=t,this._list=this._parsePath(this._pathElement.getAttribute("d")),this._mutationObserverConfig={attributes:!0,attributeFilter:["d"]},this._pathElementMutationObserver=new MutationObserver(this._updateListFromPathMutations.bind(this)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.classname="SVGPathSegList",Object.defineProperty(window.SVGPathSegList.prototype,"numberOfItems",{get:function(){return this._checkPathSynchronizedToList(),this._list.length},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"pathSegList",{get:function(){return this._pathSegList||(this._pathSegList=new window.SVGPathSegList(this)),this._pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"normalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),Object.defineProperty(window.SVGPathElement.prototype,"animatedNormalizedPathSegList",{get:function(){return this.pathSegList},enumerable:!0}),window.SVGPathSegList.prototype._checkPathSynchronizedToList=function(){this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())},window.SVGPathSegList.prototype._updateListFromPathMutations=function(t){if(this._pathElement){var e=!1;t.forEach(function(t){"d"==t.attributeName&&(e=!0)}),e&&(this._list=this._parsePath(this._pathElement.getAttribute("d")))}},window.SVGPathSegList.prototype._writeListToPath=function(){this._pathElementMutationObserver.disconnect(),this._pathElement.setAttribute("d",window.SVGPathSegList._pathSegArrayAsString(this._list)),this._pathElementMutationObserver.observe(this._pathElement,this._mutationObserverConfig)},window.SVGPathSegList.prototype.segmentChanged=function(t){this._writeListToPath()},window.SVGPathSegList.prototype.clear=function(){this._checkPathSynchronizedToList(),this._list.forEach(function(t){t._owningPathSegList=null}),this._list=[],this._writeListToPath()},window.SVGPathSegList.prototype.initialize=function(t){return this._checkPathSynchronizedToList(),this._list=[t],t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype._checkValidIndex=function(t){if(isNaN(t)||t<0||t>=this.numberOfItems)throw"INDEX_SIZE_ERR"},window.SVGPathSegList.prototype.getItem=function(t){return this._checkPathSynchronizedToList(),this._checkValidIndex(t),this._list[t]},window.SVGPathSegList.prototype.insertItemBefore=function(t,e){return this._checkPathSynchronizedToList(),e>this.numberOfItems&&(e=this.numberOfItems),t._owningPathSegList&&(t=t.clone()),this._list.splice(e,0,t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.replaceItem=function(t,e){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._checkValidIndex(e),this._list[e]=t,t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList.prototype.removeItem=function(t){this._checkPathSynchronizedToList(),this._checkValidIndex(t);var e=this._list[t];return this._list.splice(t,1),this._writeListToPath(),e},window.SVGPathSegList.prototype.appendItem=function(t){return this._checkPathSynchronizedToList(),t._owningPathSegList&&(t=t.clone()),this._list.push(t),t._owningPathSegList=this,this._writeListToPath(),t},window.SVGPathSegList._pathSegArrayAsString=function(t){var e="",n=!0;return t.forEach(function(t){n?(n=!1,e+=t._asPathString()):e+=" "+t._asPathString()}),e},window.SVGPathSegList.prototype._parsePath=function(t){if(!t||0==t.length)return[];var e=this,n=function(){this.pathSegList=[]};n.prototype.appendSegment=function(t){this.pathSegList.push(t)};var r=function(t){this._string=t,this._currentIndex=0,this._endIndex=this._string.length,this._previousCommand=window.SVGPathSeg.PATHSEG_UNKNOWN,this._skipOptionalSpaces()};r.prototype._isCurrentSpace=function(){var t=this._string[this._currentIndex];return t<=" "&&(" "==t||"\n"==t||"\t"==t||"\r"==t||"\f"==t)},r.prototype._skipOptionalSpaces=function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex++;return this._currentIndex<this._endIndex},r.prototype._skipOptionalSpacesOrDelimiter=function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!=this._string.charAt(this._currentIndex))&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","==this._string.charAt(this._currentIndex)&&(this._currentIndex++,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},r.prototype.hasMoreData=function(){return this._currentIndex<this._endIndex},r.prototype.peekSegmentType=function(){var t=this._string[this._currentIndex];return this._pathSegTypeFromChar(t)},r.prototype._pathSegTypeFromChar=function(t){switch(t){case"Z":case"z":return window.SVGPathSeg.PATHSEG_CLOSEPATH;case"M":return window.SVGPathSeg.PATHSEG_MOVETO_ABS;case"m":return window.SVGPathSeg.PATHSEG_MOVETO_REL;case"L":return window.SVGPathSeg.PATHSEG_LINETO_ABS;case"l":return window.SVGPathSeg.PATHSEG_LINETO_REL;case"C":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;case"c":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;case"Q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;case"q":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;case"A":return window.SVGPathSeg.PATHSEG_ARC_ABS;case"a":return window.SVGPathSeg.PATHSEG_ARC_REL;case"H":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;case"h":return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;case"V":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;case"v":return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;case"S":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;case"s":return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;case"T":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;case"t":return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;default:return window.SVGPathSeg.PATHSEG_UNKNOWN}},r.prototype._nextCommandHelper=function(t,e){return("+"==t||"-"==t||"."==t||t>="0"&&t<="9")&&e!=window.SVGPathSeg.PATHSEG_CLOSEPATH?e==window.SVGPathSeg.PATHSEG_MOVETO_ABS?window.SVGPathSeg.PATHSEG_LINETO_ABS:e==window.SVGPathSeg.PATHSEG_MOVETO_REL?window.SVGPathSeg.PATHSEG_LINETO_REL:e:window.SVGPathSeg.PATHSEG_UNKNOWN},r.prototype.initialCommandIsMoveTo=function(){if(!this.hasMoreData())return!0;var t=this.peekSegmentType();return t==window.SVGPathSeg.PATHSEG_MOVETO_ABS||t==window.SVGPathSeg.PATHSEG_MOVETO_REL},r.prototype._parseNumber=function(){var t=0,e=0,n=1,r=0,i=1,a=1,o=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:this._currentIndex<this._endIndex&&"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,i=-1),!(this._currentIndex==this._endIndex||(this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")&&"."!=this._string.charAt(this._currentIndex))){for(var u=this._currentIndex;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)this._currentIndex++;if(this._currentIndex!=u)for(var c=this._currentIndex-1,s=1;c>=u;)e+=s*(this._string.charAt(c--)-"0"),s*=10;if(this._currentIndex<this._endIndex&&"."==this._string.charAt(this._currentIndex)){if(this._currentIndex++,this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)n*=10,r+=(this._string.charAt(this._currentIndex)-"0")/n,this._currentIndex+=1}if(this._currentIndex!=o&&this._currentIndex+1<this._endIndex&&("e"==this._string.charAt(this._currentIndex)||"E"==this._string.charAt(this._currentIndex))&&"x"!=this._string.charAt(this._currentIndex+1)&&"m"!=this._string.charAt(this._currentIndex+1)){if(this._currentIndex++,"+"==this._string.charAt(this._currentIndex)?this._currentIndex++:"-"==this._string.charAt(this._currentIndex)&&(this._currentIndex++,a=-1),this._currentIndex>=this._endIndex||this._string.charAt(this._currentIndex)<"0"||this._string.charAt(this._currentIndex)>"9")return;for(;this._currentIndex<this._endIndex&&this._string.charAt(this._currentIndex)>="0"&&this._string.charAt(this._currentIndex)<="9";)t*=10,t+=this._string.charAt(this._currentIndex)-"0",this._currentIndex++}var f=e+r;if(f*=i,t&&(f*=Math.pow(10,a*t)),o!=this._currentIndex)return this._skipOptionalSpacesOrDelimiter(),f}},r.prototype._parseArcFlag=function(){if(!(this._currentIndex>=this._endIndex)){var t=!1,e=this._string.charAt(this._currentIndex++);if("0"==e)t=!1;else{if("1"!=e)return;t=!0}return this._skipOptionalSpacesOrDelimiter(),t}},r.prototype.parseSegment=function(){var t=this._string[this._currentIndex],n=this._pathSegTypeFromChar(t);if(n==window.SVGPathSeg.PATHSEG_UNKNOWN){if(this._previousCommand==window.SVGPathSeg.PATHSEG_UNKNOWN)return null;if((n=this._nextCommandHelper(t,this._previousCommand))==window.SVGPathSeg.PATHSEG_UNKNOWN)return null}else this._currentIndex++;switch(this._previousCommand=n,n){case window.SVGPathSeg.PATHSEG_MOVETO_REL:return new window.SVGPathSegMovetoRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_MOVETO_ABS:return new window.SVGPathSegMovetoAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_REL:return new window.SVGPathSegLinetoRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_ABS:return new window.SVGPathSegLinetoAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:return new window.SVGPathSegLinetoHorizontalRel(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:return new window.SVGPathSegLinetoHorizontalAbs(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:return new window.SVGPathSegLinetoVerticalRel(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:return new window.SVGPathSegLinetoVerticalAbs(e,this._parseNumber());case window.SVGPathSeg.PATHSEG_CLOSEPATH:return this._skipOptionalSpaces(),new window.SVGPathSegClosePath(e);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:var r={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()};return new window.SVGPathSegCurvetoCubicRel(e,r.x,r.y,r.x1,r.y1,r.x2,r.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:return r={x1:this._parseNumber(),y1:this._parseNumber(),x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicAbs(e,r.x,r.y,r.x1,r.y1,r.x2,r.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:return r={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothRel(e,r.x,r.y,r.x2,r.y2);case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:return r={x2:this._parseNumber(),y2:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoCubicSmoothAbs(e,r.x,r.y,r.x2,r.y2);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:return r={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticRel(e,r.x,r.y,r.x1,r.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:return r={x1:this._parseNumber(),y1:this._parseNumber(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegCurvetoQuadraticAbs(e,r.x,r.y,r.x1,r.y1);case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:return new window.SVGPathSegCurvetoQuadraticSmoothRel(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e,this._parseNumber(),this._parseNumber());case window.SVGPathSeg.PATHSEG_ARC_REL:return r={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegArcRel(e,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep);case window.SVGPathSeg.PATHSEG_ARC_ABS:return r={x1:this._parseNumber(),y1:this._parseNumber(),arcAngle:this._parseNumber(),arcLarge:this._parseArcFlag(),arcSweep:this._parseArcFlag(),x:this._parseNumber(),y:this._parseNumber()},new window.SVGPathSegArcAbs(e,r.x,r.y,r.x1,r.y1,r.arcAngle,r.arcLarge,r.arcSweep);default:throw"Unknown path seg type."}};var i=new n,a=new r(t);if(!a.initialCommandIsMoveTo())return[];for(;a.hasMoreData();){var o=a.parseSegment();if(!o)return[];i.appendSegment(o)}return i.pathSegList}),String.prototype.padEnd||(String.prototype.padEnd=function(t,e){return t>>=0,e=String(void 0!==e?e:" "),this.length>t?String(this):((t-=this.length)>e.length&&(e+=e.repeat(t/e.length)),String(this)+e.slice(0,t))}),A.axis=function(){},A.axis.labels=function(t){var e=this.internal;arguments.length&&(Object.keys(t).forEach(function(n){e.axis.setLabelText(n,t[n])}),e.axis.updateLabels())},A.axis.max=function(t){var e=this.internal,n=e.config;if(!arguments.length)return{x:n.axis_x_max,y:n.axis_y_max,y2:n.axis_y2_max};"object"===(void 0===t?"undefined":i(t))?(u(t.x)&&(n.axis_x_max=t.x),u(t.y)&&(n.axis_y_max=t.y),u(t.y2)&&(n.axis_y2_max=t.y2)):n.axis_y_max=n.axis_y2_max=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},A.axis.min=function(t){var e=this.internal,n=e.config;if(!arguments.length)return{x:n.axis_x_min,y:n.axis_y_min,y2:n.axis_y2_min};"object"===(void 0===t?"undefined":i(t))?(u(t.x)&&(n.axis_x_min=t.x),u(t.y)&&(n.axis_y_min=t.y),u(t.y2)&&(n.axis_y2_min=t.y2)):n.axis_y_min=n.axis_y2_min=t,e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})},A.axis.range=function(t){if(!arguments.length)return{max:this.axis.max(),min:this.axis.min()};d(t.max)&&this.axis.max(t.max),d(t.min)&&this.axis.min(t.min)},A.category=function(t,e){var n=this.internal,r=n.config;return arguments.length>1&&(r.axis_x_categories[t]=e,n.redraw()),r.axis_x_categories[t]},A.categories=function(t){var e=this.internal,n=e.config;return arguments.length?(n.axis_x_categories=t,e.redraw(),n.axis_x_categories):n.axis_x_categories},A.resize=function(t){var e=this.internal.config;e.size_width=t?t.width:null,e.size_height=t?t.height:null,this.flush()},A.flush=function(){this.internal.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1})},A.destroy=function(){var t=this.internal;if(window.clearInterval(t.intervalForObserveInserted),void 0!==t.resizeTimeout&&window.clearTimeout(t.resizeTimeout),window.detachEvent)window.detachEvent("onresize",t.resizeIfElementDisplayed);else if(window.removeEventListener)window.removeEventListener("resize",t.resizeIfElementDisplayed);else{var e=window.onresize;e&&e.add&&e.remove&&e.remove(t.resizeFunction)}return t.resizeFunction.remove(),t.selectChart.classed("c3",!1).html(""),Object.keys(t).forEach(function(e){t[e]=null}),null},A.color=function(t){return this.internal.color(t)},A.data=function(t){var e=this.internal.data.targets;return void 0===t?e:e.filter(function(e){return[].concat(t).indexOf(e.id)>=0})},A.data.shown=function(t){return this.internal.filterTargetsToShow(this.data(t))},A.data.values=function(t){var e,n=null;return t&&(n=(e=this.data(t))[0]?e[0].values.map(function(t){return t.value}):null),n},A.data.names=function(t){return this.internal.clearLegendItemTextBoxCache(),this.internal.updateDataAttributes("names",t)},A.data.colors=function(t){return this.internal.updateDataAttributes("colors",t)},A.data.axes=function(t){return this.internal.updateDataAttributes("axes",t)},A.flow=function(t){var e,n,r,i,a,o,c,s=this.internal,f=[],l=s.getMaxDataCount(),h=0,g=0;if(t.json)n=s.convertJsonToData(t.json,t.keys);else if(t.rows)n=s.convertRowsToData(t.rows);else{if(!t.columns)return;n=s.convertColumnsToData(t.columns)}e=s.convertDataToTargets(n,!0),s.data.targets.forEach(function(t){var n,r,i=!1;for(n=0;n<e.length;n++)if(t.id===e[n].id){for(i=!0,t.values[t.values.length-1]&&(g=t.values[t.values.length-1].index+1),h=e[n].values.length,r=0;r<h;r++)e[n].values[r].index=g+r,s.isTimeSeries()||(e[n].values[r].x=g+r);t.values=t.values.concat(e[n].values),e.splice(n,1);break}i||f.push(t.id)}),s.data.targets.forEach(function(t){var e,n;for(e=0;e<f.length;e++)if(t.id===f[e])for(g=t.values[t.values.length-1].index+1,n=0;n<h;n++)t.values.push({id:t.id,index:g+n,x:s.isTimeSeries()?s.getOtherTargetX(g+n):g+n,value:null})}),s.data.targets.length&&e.forEach(function(t){var e,n=[];for(e=s.data.targets[0].values[0].index;e<g;e++)n.push({id:t.id,index:e,x:s.isTimeSeries()?s.getOtherTargetX(e):e,value:null});t.values.forEach(function(t){t.index+=g,s.isTimeSeries()||(t.x+=g)}),t.values=n.concat(t.values)}),s.data.targets=s.data.targets.concat(e),s.getMaxDataCount(),a=(i=s.data.targets[0]).values[0],d(t.to)?(h=0,c=s.isTimeSeries()?s.parseDate(t.to):t.to,i.values.forEach(function(t){t.x<c&&h++})):d(t.length)&&(h=t.length),l?1===l&&s.isTimeSeries()&&(o=(i.values[i.values.length-1].x-a.x)/2,r=[new Date(+a.x-o),new Date(+a.x+o)],s.updateXDomain(null,!0,!0,!1,r)):(o=s.isTimeSeries()?i.values.length>1?i.values[i.values.length-1].x-a.x:a.x-s.getXDomain(s.data.targets)[0]:1,r=[a.x-o,a.x],s.updateXDomain(null,!0,!0,!1,r)),s.updateTargets(s.data.targets),s.redraw({flow:{index:a.index,length:h,duration:u(t.duration)?t.duration:s.config.transition_duration,done:t.done,orgDataCount:l},withLegend:!0,withTransition:l>1,withTrimXDomain:!1,withUpdateXAxis:!0})},T.generateFlow=function(t){var e=this,n=e.config,i=e.d3;return function(){var a,o,u,c,s,f,l,d,h,g,_,y=t.targets,v=t.flow,x=t.drawBar,m=t.drawLine,b=t.drawArea,w=t.cx,S=t.cy,A=t.xv,T=t.xForText,P=t.yForText,C=t.duration,M=v.index,L=v.length,O=e.getValueOnIndex(e.data.targets[0].values,M),E=e.getValueOnIndex(e.data.targets[0].values,M+L),k=e.x.domain(),G=v.duration||C,V=v.done||function(){},R=e.generateWait();e.flowing=!0,e.data.targets.forEach(function(t){t.values.splice(0,L)}),u=e.updateXDomain(y,!0,!0),e.updateXGrid&&e.updateXGrid(!0),c=e.xgrid||i.selectAll([]),s=e.xgridLines||i.selectAll([]),f=e.mainRegion||i.selectAll([]),l=e.mainText||i.selectAll([]),d=e.mainBar||i.selectAll([]),h=e.mainLine||i.selectAll([]),g=e.mainArea||i.selectAll([]),_=e.mainCircle||i.selectAll([]),v.orgDataCount?a=1===v.orgDataCount||(O&&O.x)===(E&&E.x)?e.x(k[0])-e.x(u[0]):e.isTimeSeries()?e.x(k[0])-e.x(u[0]):e.x(O.x)-e.x(E.x):1!==e.data.targets[0].values.length?a=e.x(k[0])-e.x(u[0]):e.isTimeSeries()?(O=e.getValueOnIndex(e.data.targets[0].values,0),E=e.getValueOnIndex(e.data.targets[0].values,e.data.targets[0].values.length-1),a=e.x(O.x)-e.x(E.x)):a=p(u)/2,o="translate("+a+",0) scale("+p(k)/p(u)+",1)",e.hideXGridFocus();var I=i.transition().ease(i.easeLinear).duration(G);R.add(e.xAxis(e.axes.x,I)),R.add(d.transition(I).attr("transform",o)),R.add(h.transition(I).attr("transform",o)),R.add(g.transition(I).attr("transform",o)),R.add(_.transition(I).attr("transform",o)),R.add(l.transition(I).attr("transform",o)),R.add(f.filter(e.isRegionOnX).transition(I).attr("transform",o)),R.add(c.transition(I).attr("transform",o)),R.add(s.transition(I).attr("transform",o)),R(function(){var t,i=[],a=[];if(L){for(t=0;t<L;t++)i.push("."+r.shape+"-"+(M+t)),a.push("."+r.text+"-"+(M+t));e.svg.selectAll("."+r.shapes).selectAll(i).remove(),e.svg.selectAll("."+r.texts).selectAll(a).remove(),e.svg.select("."+r.xgrid).remove()}c.attr("transform",null).attr("x1",e.xgridAttr.x1).attr("x2",e.xgridAttr.x2).attr("y1",e.xgridAttr.y1).attr("y2",e.xgridAttr.y2).style("opacity",e.xgridAttr.opacity),s.attr("transform",null),s.select("line").attr("x1",n.axis_rotated?0:A).attr("x2",n.axis_rotated?e.width:A),s.select("text").attr("x",n.axis_rotated?e.width:0).attr("y",A),d.attr("transform",null).attr("d",x),h.attr("transform",null).attr("d",m),g.attr("transform",null).attr("d",b),_.attr("transform",null).attr("cx",w).attr("cy",S),l.attr("transform",null).attr("x",T).attr("y",P).style("fill-opacity",e.opacityForText.bind(e)),f.attr("transform",null),f.filter(e.isRegionOnX).attr("x",e.regionX.bind(e)).attr("width",e.regionWidth.bind(e)),V(),e.flowing=!1})}},A.focus=function(t){var e,n=this.internal;t=n.mapToTargetIds(t),e=n.svg.selectAll(n.selectorTargets(t.filter(n.isTargetToShow,n))),this.revert(),this.defocus(),e.classed(r.focused,!0).classed(r.defocused,!1),n.hasArcType()&&n.expandArc(t),n.toggleFocusLegend(t,!0),n.focusedTargetIds=t,n.defocusedTargetIds=n.defocusedTargetIds.filter(function(e){return t.indexOf(e)<0})},A.defocus=function(t){var e=this.internal;t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t.filter(e.isTargetToShow,e))).classed(r.focused,!1).classed(r.defocused,!0),e.hasArcType()&&e.unexpandArc(t),e.toggleFocusLegend(t,!1),e.focusedTargetIds=e.focusedTargetIds.filter(function(e){return t.indexOf(e)<0}),e.defocusedTargetIds=t},A.revert=function(t){var e=this.internal;t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t)).classed(r.focused,!1).classed(r.defocused,!1),e.hasArcType()&&e.unexpandArc(t),e.config.legend_show&&(e.showLegend(t.filter(e.isLegendToShow.bind(e))),e.legend.selectAll(e.selectorLegends(t)).filter(function(){return e.d3.select(this).classed(r.legendItemFocused)}).classed(r.legendItemFocused,!1)),e.focusedTargetIds=[],e.defocusedTargetIds=[]},A.xgrids=function(t){var e=this.internal,n=e.config;return t?(n.grid_x_lines=t,e.redrawWithoutRescale(),n.grid_x_lines):n.grid_x_lines},A.xgrids.add=function(t){var e=this.internal;return this.xgrids(e.config.grid_x_lines.concat(t||[]))},A.xgrids.remove=function(t){this.internal.removeGridLines(t,!0)},A.ygrids=function(t){var e=this.internal,n=e.config;return t?(n.grid_y_lines=t,e.redrawWithoutRescale(),n.grid_y_lines):n.grid_y_lines},A.ygrids.add=function(t){var e=this.internal;return this.ygrids(e.config.grid_y_lines.concat(t||[]))},A.ygrids.remove=function(t){this.internal.removeGridLines(t,!1)},A.groups=function(t){var e=this.internal,n=e.config;return l(t)?n.data_groups:(n.data_groups=t,e.redraw(),n.data_groups)},A.legend=function(){},A.legend.show=function(t){var e=this.internal;e.showLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},A.legend.hide=function(t){var e=this.internal;e.hideLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},A.load=function(t){var e=this.internal,n=e.config;t.xs&&e.addXs(t.xs),"names"in t&&A.data.names.bind(this)(t.names),"classes"in t&&Object.keys(t.classes).forEach(function(e){n.data_classes[e]=t.classes[e]}),"categories"in t&&e.isCategorized()&&(n.axis_x_categories=t.categories),"axes"in t&&Object.keys(t.axes).forEach(function(e){n.data_axes[e]=t.axes[e]}),"colors"in t&&Object.keys(t.colors).forEach(function(e){n.data_colors[e]=t.colors[e]}),"cacheIds"in t&&e.hasCaches(t.cacheIds)?e.load(e.getCaches(t.cacheIds),t.done):"unload"in t?e.unload(e.mapToTargetIds("boolean"==typeof t.unload&&t.unload?null:t.unload),function(){e.loadFromArgs(t)}):e.loadFromArgs(t)},A.unload=function(t){var e=this.internal;(t=t||{})instanceof Array?t={ids:t}:"string"==typeof t&&(t={ids:[t]}),e.unload(e.mapToTargetIds(t.ids),function(){e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),t.done&&t.done()})},A.regions=function(t){var e=this.internal,n=e.config;return t?(n.regions=t,e.redrawWithoutRescale(),n.regions):n.regions},A.regions.add=function(t){var e=this.internal,n=e.config;return t?(n.regions=n.regions.concat(t),e.redrawWithoutRescale(),n.regions):n.regions},A.regions.remove=function(t){var e,n,i,a=this.internal,o=a.config;return t=t||{},e=a.getOption(t,"duration",o.transition_duration),n=a.getOption(t,"classes",[r.region]),i=a.main.select("."+r.regions).selectAll(n.map(function(t){return"."+t})),(e?i.transition().duration(e):i).style("opacity",0).remove(),o.regions=o.regions.filter(function(t){var e=!1;return!t.class||(t.class.split(" ").forEach(function(t){n.indexOf(t)>=0&&(e=!0)}),!e)}),o.regions},A.selected=function(t){var e=this.internal,n=e.d3;return n.merge(e.main.selectAll("."+r.shapes+e.getTargetSelectorSuffix(t)).selectAll("."+r.shape).filter(function(){return n.select(this).classed(r.SELECTED)}).map(function(t){return t.map(function(t){var e=t.__data__;return e.data?e.data:e})}))},A.select=function(t,e,n){var i=this.internal,a=i.d3,o=i.config;o.data_selection_enabled&&i.main.selectAll("."+r.shapes).selectAll("."+r.shape).each(function(u,c){var s=a.select(this),f=u.data?u.data.id:u.id,l=i.getToggle(this,u).bind(i),h=o.data_selection_grouped||!t||t.indexOf(f)>=0,g=!e||e.indexOf(c)>=0,p=s.classed(r.SELECTED);s.classed(r.line)||s.classed(r.area)||(h&&g?o.data_selection_isselectable(u)&&!p&&l(!0,s.classed(r.SELECTED,!0),u,c):d(n)&&n&&p&&l(!1,s.classed(r.SELECTED,!1),u,c))})},A.unselect=function(t,e){var n=this.internal,i=n.d3,a=n.config;a.data_selection_enabled&&n.main.selectAll("."+r.shapes).selectAll("."+r.shape).each(function(o,u){var c=i.select(this),s=o.data?o.data.id:o.id,f=n.getToggle(this,o).bind(n),l=a.data_selection_grouped||!t||t.indexOf(s)>=0,d=!e||e.indexOf(u)>=0,h=c.classed(r.SELECTED);c.classed(r.line)||c.classed(r.area)||l&&d&&a.data_selection_isselectable(o)&&h&&f(!1,c.classed(r.SELECTED,!1),o,u)})},A.show=function(t,e){var n,r=this.internal;t=r.mapToTargetIds(t),e=e||{},r.removeHiddenTargetIds(t),(n=r.svg.selectAll(r.selectorTargets(t))).transition().style("display","initial","important").style("opacity",1,"important").call(r.endall,function(){n.style("opacity",null).style("opacity",1)}),e.withLegend&&r.showLegend(t),r.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},A.hide=function(t,e){var n,r=this.internal;t=r.mapToTargetIds(t),e=e||{},r.addHiddenTargetIds(t),(n=r.svg.selectAll(r.selectorTargets(t))).transition().style("opacity",0,"important").call(r.endall,function(){n.style("opacity",null).style("opacity",0),n.style("display","none")}),e.withLegend&&r.hideLegend(t),r.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0})},A.toggle=function(t,e){var n=this,r=this.internal;r.mapToTargetIds(t).forEach(function(t){r.isTargetToShow(t)?n.hide(t,e):n.show(t,e)})},A.tooltip=function(){},A.tooltip.show=function(t){var e,n,r=this.internal,i={};t.mouse?i=t.mouse:(t.data?n=t.data:void 0!==t.x&&(e=t.id?r.data.targets.filter(function(e){return e.id===t.id}):r.data.targets,n=r.filterByX(e,t.x).slice(0,1)[0]),i=n?r.getMousePosition(n):null),r.dispatchEvent("mousemove",i),r.config.tooltip_onshow.call(r,n)},A.tooltip.hide=function(){this.internal.dispatchEvent("mouseout",0),this.internal.config.tooltip_onhide.call(this)},A.transform=function(t,e){var n=this.internal,r=["pie","donut"].indexOf(t)>=0?{withTransform:!0}:null;n.transformTo(e,t,r)},T.transformTo=function(t,e,n){var r=this,i=!r.hasArcType(),a=n||{withTransitionForAxis:i};a.withTransitionForTransform=!1,r.transiting=!1,r.setTargetType(t,e),r.updateTargets(r.data.targets),r.updateAndRedraw(a)},A.x=function(t){var e=this.internal;return arguments.length&&(e.updateTargetX(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},A.xs=function(t){var e=this.internal;return arguments.length&&(e.updateTargetXs(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs},A.zoom=function(t){var e=this.internal;return t?(e.isTimeSeries()&&(t=t.map(function(t){return e.parseDate(t)})),e.config.subchart_show?e.brush.selectionAsValue(t,!0):(e.updateXDomain(null,!0,!1,!1,t),e.redraw({withY:e.config.zoom_rescale,withSubchart:!1})),e.config.zoom_onzoom.call(this,e.x.orgDomain()),t):e.x.domain()},A.zoom.enable=function(t){var e=this.internal;e.config.zoom_enabled=t,e.updateAndRedraw()},A.unzoom=function(){var t=this.internal;t.config.subchart_show?t.brush.clear():(t.updateXDomain(null,!0,!1,!1,t.subX.domain()),t.redraw({withY:t.config.zoom_rescale,withSubchart:!1}))},A.zoom.max=function(t){var e=this.internal,n=e.config,r=e.d3;if(0!==t&&!t)return n.zoom_x_max;n.zoom_x_max=r.max([e.orgXDomain[1],t])},A.zoom.min=function(t){var e=this.internal,n=e.config,r=e.d3;if(0!==t&&!t)return n.zoom_x_min;n.zoom_x_min=r.min([e.orgXDomain[0],t])},A.zoom.range=function(t){if(!arguments.length)return{max:this.domain.max(),min:this.domain.min()};d(t.max)&&this.domain.max(t.max),d(t.min)&&this.domain.min(t.min)},T.initPie=function(){var t=this,e=t.d3;t.pie=e.pie().value(function(t){return t.values.reduce(function(t,e){return t+e.value},0)});var n=t.getOrderFunction();if(n&&(t.isOrderAsc()||t.isOrderDesc())){var r=n;n=function(t,e){return-1*r(t,e)}}t.pie.sort(n||null)},T.updateRadius=function(){var t=this,e=t.config,n=e.gauge_width||e.donut_width,r=t.filterTargetsToShow(t.data.targets).length*t.config.gauge_arcs_minWidth;t.radiusExpanded=Math.min(t.arcWidth,t.arcHeight)/2*(t.hasType("gauge")?.85:1),t.radius=.95*t.radiusExpanded,t.innerRadiusRatio=n?(t.radius-n)/t.radius:.6,t.innerRadius=t.hasType("donut")||t.hasType("gauge")?t.radius*t.innerRadiusRatio:0,t.gaugeArcWidth=n||(r<=t.radius-t.innerRadius?t.radius-t.innerRadius:r<=t.radius?r:t.radius)},T.updateArc=function(){var t=this;t.svgArc=t.getSvgArc(),t.svgArcExpanded=t.getSvgArcExpanded(),t.svgArcExpandedSub=t.getSvgArcExpanded(.98)},T.updateAngle=function(t){var e,n,r,i,a=this,o=a.config,u=!1,c=0;return o?(a.pie(a.filterTargetsToShow(a.data.targets)).forEach(function(e){u||e.data.id!==t.data.id||(u=!0,(t=e).index=c),c++}),isNaN(t.startAngle)&&(t.startAngle=0),isNaN(t.endAngle)&&(t.endAngle=t.startAngle),a.isGaugeType(t.data)&&(e=o.gauge_min,n=o.gauge_max,r=Math.PI*(o.gauge_fullCircle?2:1)/(n-e),i=t.value<e?0:t.value<n?t.value-e:n-e,t.startAngle=o.gauge_startingAngle,t.endAngle=t.startAngle+r*i),u?t:null):null},T.getSvgArc=function(){var t=this,e=t.hasType("gauge"),n=t.gaugeArcWidth/t.filterTargetsToShow(t.data.targets).length,r=t.d3.arc().outerRadius(function(r){return e?t.radius-n*r.index:t.radius}).innerRadius(function(r){return e?t.radius-n*(r.index+1):t.innerRadius}),i=function(e,n){var i;return n?r(e):(i=t.updateAngle(e))?r(i):"M 0 0"};return i.centroid=r.centroid,i},T.getSvgArcExpanded=function(t){t=t||1;var e=this,n=e.hasType("gauge"),r=e.gaugeArcWidth/e.filterTargetsToShow(e.data.targets).length,i=Math.min(e.radiusExpanded*t-e.radius,.8*r-100*(1-t)),a=e.d3.arc().outerRadius(function(a){return n?e.radius-r*a.index+i:e.radiusExpanded*t}).innerRadius(function(t){return n?e.radius-r*(t.index+1):e.innerRadius});return function(t){var n=e.updateAngle(t);return n?a(n):"M 0 0"}},T.getArc=function(t,e,n){return n||this.isArcType(t.data)?this.svgArc(t,e):"M 0 0"},T.transformForArcLabel=function(t){var e,n,r,i,a,o=this,u=o.config,s=o.updateAngle(t),f="",l=o.hasType("gauge");if(s&&!l)e=this.svgArc.centroid(s),n=isNaN(e[0])?0:e[0],r=isNaN(e[1])?0:e[1],i=Math.sqrt(n*n+r*r),f="translate("+n*(a=o.hasType("donut")&&u.donut_label_ratio?c(u.donut_label_ratio)?u.donut_label_ratio(t,o.radius,i):u.donut_label_ratio:o.hasType("pie")&&u.pie_label_ratio?c(u.pie_label_ratio)?u.pie_label_ratio(t,o.radius,i):u.pie_label_ratio:o.radius&&i?(36/o.radius>.375?1.175-36/o.radius:.8)*o.radius/i:0)+","+r*a+")";else if(s&&l&&o.filterTargetsToShow(o.data.targets).length>1){var d=Math.sin(s.endAngle-Math.PI/2);f="translate("+(n=Math.cos(s.endAngle-Math.PI/2)*(o.radiusExpanded+25))+","+(r=d*(o.radiusExpanded+15-Math.abs(10*d))+3)+")"}return f},T.getArcRatio=function(t){var e=this.config,n=Math.PI*(this.hasType("gauge")&&!e.gauge_fullCircle?1:2);return t?(t.endAngle-t.startAngle)/n:null},T.convertToArcData=function(t){return this.addName({id:t.data.id,value:t.value,ratio:this.getArcRatio(t),index:t.index})},T.textForArcLabel=function(t){var e,n,r,i,a,o=this;return o.shouldShowArcLabel()?(n=(e=o.updateAngle(t))?e.value:null,r=o.getArcRatio(e),i=t.data.id,o.hasType("gauge")||o.meetsArcLabelThreshold(r)?(a=o.getArcLabelFormat())?a(n,r,i):o.defaultArcValueFormat(n,r):""):""},T.textForGaugeMinMax=function(t,e){var n=this.getGaugeLabelExtents();return n?n(t,e):t},T.expandArc=function(t){var e,n=this;n.transiting?e=window.setInterval(function(){n.transiting||(window.clearInterval(e),n.legend.selectAll(".c3-legend-item-focused").size()>0&&n.expandArc(t))},10):(t=n.mapToTargetIds(t),n.svg.selectAll(n.selectorTargets(t,"."+r.chartArc)).each(function(t){n.shouldExpand(t.data.id)&&n.d3.select(this).selectAll("path").transition().duration(n.expandDuration(t.data.id)).attr("d",n.svgArcExpanded).transition().duration(2*n.expandDuration(t.data.id)).attr("d",n.svgArcExpandedSub).each(function(t){n.isDonutType(t.data)})}))},T.unexpandArc=function(t){var e=this;e.transiting||(t=e.mapToTargetIds(t),e.svg.selectAll(e.selectorTargets(t,"."+r.chartArc)).selectAll("path").transition().duration(function(t){return e.expandDuration(t.data.id)}).attr("d",e.svgArc),e.svg.selectAll("."+r.arc))},T.expandDuration=function(t){var e=this.config;return this.isDonutType(t)?e.donut_expand_duration:this.isGaugeType(t)?e.gauge_expand_duration:this.isPieType(t)?e.pie_expand_duration:50},T.shouldExpand=function(t){var e=this.config;return this.isDonutType(t)&&e.donut_expand||this.isGaugeType(t)&&e.gauge_expand||this.isPieType(t)&&e.pie_expand},T.shouldShowArcLabel=function(){var t=this.config,e=!0;return this.hasType("donut")?e=t.donut_label_show:this.hasType("pie")&&(e=t.pie_label_show),e},T.meetsArcLabelThreshold=function(t){var e=this.config;return t>=(this.hasType("donut")?e.donut_label_threshold:e.pie_label_threshold)},T.getArcLabelFormat=function(){var t=this.config,e=t.pie_label_format;return this.hasType("gauge")?e=t.gauge_label_format:this.hasType("donut")&&(e=t.donut_label_format),e},T.getGaugeLabelExtents=function(){return this.config.gauge_label_extents},T.getArcTitle=function(){return this.hasType("donut")?this.config.donut_title:""},T.updateTargetsForArc=function(t){var e,n=this,i=n.main,a=n.classChartArc.bind(n),o=n.classArcs.bind(n),u=n.classFocus.bind(n);(e=i.select("."+r.chartArcs).selectAll("."+r.chartArc).data(n.pie(t)).attr("class",function(t){return a(t)+u(t.data)}).enter().append("g").attr("class",a)).append("g").attr("class",o),e.append("text").attr("dy",n.hasType("gauge")?"-.1em":".35em").style("opacity",0).style("text-anchor","middle").style("pointer-events","none")},T.initArc=function(){var t=this;t.arcs=t.main.select("."+r.chart).append("g").attr("class",r.chartArcs).attr("transform",t.getTranslate("arc")),t.arcs.append("text").attr("class",r.chartArcsTitle).style("text-anchor","middle").text(t.getArcTitle())},T.redrawArc=function(t,e,n){var i,a,o,u,c,s=this,f=s.d3,l=s.config,d=s.main,h=s.hasType("gauge");if(a=(i=d.selectAll("."+r.arcs).selectAll("."+r.arc).data(s.arcData.bind(s))).enter().append("path").attr("class",s.classArc.bind(s)).style("fill",function(t){return s.color(t.data)}).style("cursor",function(t){return l.interaction_enabled&&l.data_selection_isselectable(t)?"pointer":null}).each(function(t){s.isGaugeType(t.data)&&(t.startAngle=t.endAngle=l.gauge_startingAngle),this._current=t}).merge(i),h&&(c=(u=d.selectAll("."+r.arcs).selectAll("."+r.arcLabelLine).data(s.arcData.bind(s))).enter().append("rect").attr("class",function(t){return r.arcLabelLine+" "+r.target+" "+r.target+"-"+t.data.id}).merge(u),1===s.filterTargetsToShow(s.data.targets).length?c.style("display","none"):c.style("fill",function(t){return l.color_pattern.length>0?s.levelColor(t.data.values[0].value):s.color(t.data)}).style("display",l.gauge_labelLine_show?"":"none").each(function(t){var e=0,n=0,r=0,i="";if(s.hiddenTargetIds.indexOf(t.data.id)<0){var a=s.updateAngle(t),o=s.gaugeArcWidth/s.filterTargetsToShow(s.data.targets).length*(a.index+1),u=a.endAngle-Math.PI/2,c=s.radius-o,l=u-(0===c?0:1/c);e=s.radiusExpanded-s.radius+o,n=Math.cos(l)*c,r=Math.sin(l)*c,i="rotate("+180*u/Math.PI+", "+n+", "+r+")"}f.select(this).attr("x",n).attr("y",r).attr("width",e).attr("height",2).attr("transform",i).style("stroke-dasharray","0, "+(e+2)+", 0")})),a.attr("transform",function(t){return!s.isGaugeType(t.data)&&n?"scale(0)":""}).on("mouseover",l.interaction_enabled?function(t){var e,n;s.transiting||(e=s.updateAngle(t))&&(n=s.convertToArcData(e),s.expandArc(e.data.id),s.api.focus(e.data.id),s.toggleFocusLegend(e.data.id,!0),s.config.data_onmouseover(n,this))}:null).on("mousemove",l.interaction_enabled?function(t){var e,n=s.updateAngle(t);n&&(e=[s.convertToArcData(n)],s.showTooltip(e,this))}:null).on("mouseout",l.interaction_enabled?function(t){var e,n;s.transiting||(e=s.updateAngle(t))&&(n=s.convertToArcData(e),s.unexpandArc(e.data.id),s.api.revert(),s.revertLegend(),s.hideTooltip(),s.config.data_onmouseout(n,this))}:null).on("click",l.interaction_enabled?function(t,e){var n,r=s.updateAngle(t);r&&(n=s.convertToArcData(r),s.toggleShape&&s.toggleShape(this,n,e),s.config.data_onclick.call(s.api,n,this))}:null).each(function(){s.transiting=!0}).transition().duration(t).attrTween("d",function(t){var e,n=s.updateAngle(t);return n?(isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle),e=f.interpolate(this._current,n),this._current=e(0),function(n){var r=e(n);return r.data=t.data,s.getArc(r,!0)}):function(){return"M 0 0"}}).attr("transform",n?"scale(1)":"").style("fill",function(t){return s.levelColor?s.levelColor(t.data.values[0].value):s.color(t.data.id)}).call(s.endall,function(){s.transiting=!1}),i.exit().transition().duration(e).style("opacity",0).remove(),d.selectAll("."+r.chartArc).select("text").style("opacity",0).attr("class",function(t){return s.isGaugeType(t.data)?r.gaugeValue:""}).text(s.textForArcLabel.bind(s)).attr("transform",s.transformForArcLabel.bind(s)).style("font-size",function(t){return s.isGaugeType(t.data)&&1===s.filterTargetsToShow(s.data.targets).length?Math.round(s.radius/5)+"px":""}).transition().duration(t).style("opacity",function(t){return s.isTargetToShow(t.data.id)&&s.isArcType(t.data)?1:0}),d.select("."+r.chartArcsTitle).style("opacity",s.hasType("donut")||h?1:0),h){var g=0;(o=s.arcs.select("g."+r.chartArcsBackground).selectAll("path."+r.chartArcsBackground).data(s.data.targets)).enter().append("path"),o.attr("class",function(t,e){return r.chartArcsBackground+" "+r.chartArcsBackground+"-"+e}).attr("d",function(t){if(s.hiddenTargetIds.indexOf(t.id)>=0)return"M 0 0";var e={data:[{value:l.gauge_max}],startAngle:l.gauge_startingAngle,endAngle:-1*l.gauge_startingAngle*(l.gauge_fullCircle?Math.PI:1),index:g++};return s.getArc(e,!0,!0)}),o.exit().remove(),s.arcs.select("."+r.chartArcsGaugeUnit).attr("dy",".75em").text(l.gauge_label_show?l.gauge_units:""),s.arcs.select("."+r.chartArcsGaugeMin).attr("dx",-1*(s.innerRadius+(s.radius-s.innerRadius)/(l.gauge_fullCircle?1:2))+"px").attr("dy","1.2em").text(l.gauge_label_show?s.textForGaugeMinMax(l.gauge_min,!1):""),s.arcs.select("."+r.chartArcsGaugeMax).attr("dx",s.innerRadius+(s.radius-s.innerRadius)/(l.gauge_fullCircle?1:2)+"px").attr("dy","1.2em").text(l.gauge_label_show?s.textForGaugeMinMax(l.gauge_max,!0):"")}},T.initGauge=function(){var t=this.arcs;this.hasType("gauge")&&(t.append("g").attr("class",r.chartArcsBackground),t.append("text").attr("class",r.chartArcsGaugeUnit).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",r.chartArcsGaugeMin).style("text-anchor","middle").style("pointer-events","none"),t.append("text").attr("class",r.chartArcsGaugeMax).style("text-anchor","middle").style("pointer-events","none"))},T.getGaugeLabelHeight=function(){return this.config.gauge_label_show?20:0},T.hasCaches=function(t){for(var e=0;e<t.length;e++)if(!(t[e]in this.cache))return!1;return!0},T.addCache=function(t,e){this.cache[t]=this.cloneTarget(e)},T.getCaches=function(t){var e,n=[];for(e=0;e<t.length;e++)t[e]in this.cache&&n.push(this.cloneTarget(this.cache[t[e]]));return n},T.categoryName=function(t){var e=this.config;return t<e.axis_x_categories.length?e.axis_x_categories[t]:t},T.generateTargetClass=function(t){return t||0===t?("-"+t).replace(/\s/g,"-"):""},T.generateClass=function(t,e){return" "+t+" "+t+this.generateTargetClass(e)},T.classText=function(t){return this.generateClass(r.text,t.index)},T.classTexts=function(t){return this.generateClass(r.texts,t.id)},T.classShape=function(t){return this.generateClass(r.shape,t.index)},T.classShapes=function(t){return this.generateClass(r.shapes,t.id)},T.classLine=function(t){return this.classShape(t)+this.generateClass(r.line,t.id)},T.classLines=function(t){return this.classShapes(t)+this.generateClass(r.lines,t.id)},T.classCircle=function(t){return this.classShape(t)+this.generateClass(r.circle,t.index)},T.classCircles=function(t){return this.classShapes(t)+this.generateClass(r.circles,t.id)},T.classBar=function(t){return this.classShape(t)+this.generateClass(r.bar,t.index)},T.classBars=function(t){return this.classShapes(t)+this.generateClass(r.bars,t.id)},T.classArc=function(t){return this.classShape(t.data)+this.generateClass(r.arc,t.data.id)},T.classArcs=function(t){return this.classShapes(t.data)+this.generateClass(r.arcs,t.data.id)},T.classArea=function(t){return this.classShape(t)+this.generateClass(r.area,t.id)},T.classAreas=function(t){return this.classShapes(t)+this.generateClass(r.areas,t.id)},T.classRegion=function(t,e){return this.generateClass(r.region,e)+" "+("class"in t?t.class:"")},T.classEvent=function(t){return this.generateClass(r.eventRect,t.index)},T.classTarget=function(t){var e=this.config.data_classes[t],n="";return e&&(n=" "+r.target+"-"+e),this.generateClass(r.target,t)+n},T.classFocus=function(t){return this.classFocused(t)+this.classDefocused(t)},T.classFocused=function(t){return" "+(this.focusedTargetIds.indexOf(t.id)>=0?r.focused:"")},T.classDefocused=function(t){return" "+(this.defocusedTargetIds.indexOf(t.id)>=0?r.defocused:"")},T.classChartText=function(t){return r.chartText+this.classTarget(t.id)},T.classChartLine=function(t){return r.chartLine+this.classTarget(t.id)},T.classChartBar=function(t){return r.chartBar+this.classTarget(t.id)},T.classChartArc=function(t){return r.chartArc+this.classTarget(t.data.id)},T.getTargetSelectorSuffix=function(t){return this.generateTargetClass(t).replace(/([?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g,"\\$1")},T.selectorTarget=function(t,e){return(e||"")+"."+r.target+this.getTargetSelectorSuffix(t)},T.selectorTargets=function(t,e){var n=this;return(t=t||[]).length?t.map(function(t){return n.selectorTarget(t,e)}):null},T.selectorLegend=function(t){return"."+r.legendItem+this.getTargetSelectorSuffix(t)},T.selectorLegends=function(t){var e=this;return t&&t.length?t.map(function(t){return e.selectorLegend(t)}):null},T.getClipPath=function(t){return"url("+(window.navigator.appVersion.toLowerCase().indexOf("msie 9.")>=0?"":document.URL.split("#")[0])+"#"+t+")"},T.appendClip=function(t,e){return t.append("clipPath").attr("id",e).append("rect")},T.getAxisClipX=function(t){var e=Math.max(30,this.margin.left);return t?-(1+e):-(e-1)},T.getAxisClipY=function(t){return t?-20:-this.margin.top},T.getXAxisClipX=function(){return this.getAxisClipX(!this.config.axis_rotated)},T.getXAxisClipY=function(){return this.getAxisClipY(!this.config.axis_rotated)},T.getYAxisClipX=function(){return this.config.axis_y_inner?-1:this.getAxisClipX(this.config.axis_rotated)},T.getYAxisClipY=function(){return this.getAxisClipY(this.config.axis_rotated)},T.getAxisClipWidth=function(t){var e=Math.max(30,this.margin.left),n=Math.max(30,this.margin.right);return t?this.width+2+e+n:this.margin.left+20},T.getAxisClipHeight=function(t){return(t?this.margin.bottom:this.margin.top+this.height)+20},T.getXAxisClipWidth=function(){return this.getAxisClipWidth(!this.config.axis_rotated)},T.getXAxisClipHeight=function(){return this.getAxisClipHeight(!this.config.axis_rotated)},T.getYAxisClipWidth=function(){return this.getAxisClipWidth(this.config.axis_rotated)+(this.config.axis_y_inner?20:0)},T.getYAxisClipHeight=function(){return this.getAxisClipHeight(this.config.axis_rotated)},T.generateColor=function(){var t=this.config,e=this.d3,n=t.data_colors,r=y(t.color_pattern)?t.color_pattern:e.schemeCategory10,i=t.data_color,a=[];return function(t){var e,o=t.id||t.data&&t.data.id||t;return n[o]instanceof Function?e=n[o](t):n[o]?e=n[o]:(a.indexOf(o)<0&&a.push(o),e=r[a.indexOf(o)%r.length],n[o]=e),i instanceof Function?i(e,t):e}},T.generateLevelColor=function(){var t=this.config,e=t.color_pattern,n=t.color_threshold,r="value"===n.unit,i=n.values&&n.values.length?n.values:[],a=n.max||100;return y(t.color_threshold)?function(t){var n,o=e[e.length-1];for(n=0;n<i.length;n++)if((r?t:100*t/a)<i[n]){o=e[n];break}return o}:null},T.getDefaultConfig=function(){var t={bindto:"#chart",svg_classname:void 0,size_width:void 0,size_height:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,resize_auto:!0,zoom_enabled:!1,zoom_initialRange:void 0,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:function(){},zoom_onzoomstart:function(){},zoom_onzoomend:function(){},zoom_x_min:void 0,zoom_x_max:void 0,interaction_brighten:!0,interaction_enabled:!0,onmouseover:function(){},onmouseout:function(){},onresize:function(){},onresized:function(){},oninit:function(){},onrendered:function(){},transition_duration:350,data_x:void 0,data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_idConverter:function(t){return t},data_names:{},data_classes:{},data_groups:[],data_axes:{},data_type:void 0,data_types:{},data_labels:{},data_order:"desc",data_regions:{},data_color:void 0,data_colors:{},data_hide:!1,data_filter:void 0,data_selection_enabled:!1,data_selection_grouped:!1,data_selection_isselectable:function(){return!0},data_selection_multiple:!0,data_selection_draggable:!1,data_onclick:function(){},data_onmouseover:function(){},data_onmouseout:function(){},data_onselected:function(){},data_onunselected:function(){},data_url:void 0,data_headers:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:void 0,data_keys:void 0,data_empty_label_text:"",subchart_show:!1,subchart_size_height:60,subchart_axis_x_show:!0,subchart_onbrush:function(){},color_pattern:[],color_threshold:{},legend_show:!0,legend_hide:!1,legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onmouseover:void 0,legend_item_onmouseout:void 0,legend_equally:!1,legend_padding:0,legend_item_tile_width:10,legend_item_tile_height:10,axis_rotated:!1,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_count:void 0,axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_multilineMax:0,axis_x_tick_width:null,axis_x_max:void 0,axis_x_min:void 0,axis_x_padding:{},axis_x_height:void 0,axis_x_selection:void 0,axis_x_label:{},axis_x_inner:void 0,axis_y_show:!0,axis_y_type:void 0,axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:void 0,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:void 0,axis_y_tick_time_type:void 0,axis_y_tick_time_interval:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y2_show:!1,axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:void 0,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_count:void 0,axis_y2_padding:{},axis_y2_default:void 0,grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:10,grid_focus_show:!0,grid_lines_front:!0,point_show:!0,point_r:2.5,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_select_r:void 0,line_connectNull:!1,line_step_type:"step",bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0,bar_space:0,area_zerobased:!0,area_above:!1,pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_label_ratio:void 0,pie_expand:{},pie_expand_duration:50,gauge_fullCircle:!1,gauge_label_show:!0,gauge_labelLine_show:!0,gauge_label_format:void 0,gauge_min:0,gauge_max:100,gauge_startingAngle:-1*Math.PI/2,gauge_label_extents:void 0,gauge_units:void 0,gauge_width:void 0,gauge_arcs_minWidth:5,gauge_expand:{},gauge_expand_duration:50,donut_label_show:!0,donut_label_format:void 0,donut_label_threshold:.05,donut_label_ratio:void 0,donut_width:void 0,donut_title:"",donut_expand:{},donut_expand_duration:50,spline_interpolation_type:"cardinal",regions:[],tooltip_show:!0,tooltip_grouped:!0,tooltip_order:void 0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:function(t,e,n,r){return this.getTooltipContent?this.getTooltipContent(t,e,n,r):""},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"},tooltip_onshow:function(){},tooltip_onhide:function(){},title_text:void 0,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"top-center"};return Object.keys(this.additionalConfig).forEach(function(e){t[e]=this.additionalConfig[e]},this),t},T.additionalConfig={},T.loadConfig=function(t){var e,n,r,a=this.config;Object.keys(a).forEach(function(o){e=t,n=o.split("_"),r=function t(){var r=n.shift();return r&&e&&"object"===(void 0===e?"undefined":i(e))&&r in e?(e=e[r],t()):r?void 0:e}(),d(r)&&(a[o]=r)})},T.convertUrlToData=function(t,e,n,r,i){var a,o,u=this,c=e||"csv";"json"===c?(a=u.d3.json,o=u.convertJsonToData):"tsv"===c?(a=u.d3.tsv,o=u.convertXsvToData):(a=u.d3.csv,o=u.convertXsvToData),a(t,n).then(function(t){i.call(u,o.call(u,t,r))}).catch(function(t){throw t})},T.convertXsvToData=function(t){var e=t.columns;return 0===t.length?{keys:e,rows:[e.reduce(function(t,e){return Object.assign(t,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},e,null))},{})]}:{keys:e,rows:[].concat(t)}},T.convertJsonToData=function(t,e){var n,r,i=this,a=[];return e?(e.x?(n=e.value.concat(e.x),i.config.data_x=e.x):n=e.value,a.push(n),t.forEach(function(t){var e=[];n.forEach(function(n){var r=i.findValueInJson(t,n);l(r)&&(r=null),e.push(r)}),a.push(e)}),r=i.convertRowsToData(a)):(Object.keys(t).forEach(function(e){a.push([e].concat(t[e]))}),r=i.convertColumnsToData(a)),r},T.findValueInJson=function(t,e){for(var n=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0;r<n.length;++r){var i=n[r];if(!(i in t))return;t=t[i]}return t},T.convertRowsToData=function(t){for(var e=[],n=t[0],r=1;r<t.length;r++){for(var i={},a=0;a<t[r].length;a++){if(l(t[r][a]))throw new Error("Source data is missing a component at ("+r+","+a+")!");i[n[a]]=t[r][a]}e.push(i)}return{keys:n,rows:e}},T.convertColumnsToData=function(t){for(var e=[],n=[],r=0;r<t.length;r++){for(var i=t[r][0],a=1;a<t[r].length;a++){if(l(e[a-1])&&(e[a-1]={}),l(t[r][a]))throw new Error("Source data is missing a component at ("+r+","+a+")!");e[a-1][i]=t[r][a]}n.push(i)}return{keys:n,rows:e}},T.convertDataToTargets=function(t,e){var n,r,i,a,o=this,c=o.config;return s(t)?a=Object.keys(t[0]):(a=t.keys,t=t.rows),r=a.filter(o.isNotX,o),i=a.filter(o.isX,o),r.forEach(function(n){var r=o.getXKey(n);o.isCustomX()||o.isTimeSeries()?i.indexOf(r)>=0?o.data.xs[n]=(e&&o.data.xs[n]?o.data.xs[n]:[]).concat(t.map(function(t){return t[r]}).filter(u).map(function(t,e){return o.generateTargetX(t,n,e)})):c.data_x?o.data.xs[n]=o.getOtherTargetXs():y(c.data_xs)&&(o.data.xs[n]=o.getXValuesOfXKey(r,o.data.targets)):o.data.xs[n]=t.map(function(t,e){return e})}),r.forEach(function(t){if(!o.data.xs[t])throw new Error('x is not defined for id = "'+t+'".')}),(n=r.map(function(e,n){var r=c.data_idConverter(e);return{id:r,id_org:e,values:t.map(function(t,i){var a,u=t[o.getXKey(e)],s=null===t[e]||isNaN(t[e])?null:+t[e];return o.isCustomX()&&o.isCategorized()&&!l(u)?(0===n&&0===i&&(c.axis_x_categories=[]),-1===(a=c.axis_x_categories.indexOf(u))&&(a=c.axis_x_categories.length,c.axis_x_categories.push(u))):a=o.generateTargetX(u,e,i),(l(t[e])||o.data.xs[e].length<=i)&&(a=void 0),{x:a,value:s,id:r}}).filter(function(t){return d(t.x)})}})).forEach(function(t){var e;c.data_xSort&&(t.values=t.values.sort(function(t,e){return(t.x||0===t.x?t.x:1/0)-(e.x||0===e.x?e.x:1/0)})),e=0,t.values.forEach(function(t){t.index=e++}),o.data.xs[t.id].sort(function(t,e){return t-e})}),o.hasNegativeValue=o.hasNegativeValueInTargets(n),o.hasPositiveValue=o.hasPositiveValueInTargets(n),c.data_type&&o.setTargetType(o.mapToIds(n).filter(function(t){return!(t in c.data_types)}),c.data_type),n.forEach(function(t){o.addCache(t.id_org,t)}),n},T.isX=function(t){var e=this.config;return e.data_x&&t===e.data_x||y(e.data_xs)&&x(e.data_xs,t)},T.isNotX=function(t){return!this.isX(t)},T.getXKey=function(t){var e=this.config;return e.data_x?e.data_x:y(e.data_xs)?e.data_xs[t]:null},T.getXValuesOfXKey=function(t,e){var n,r=this;return(e&&y(e)?r.mapToIds(e):[]).forEach(function(e){r.getXKey(e)===t&&(n=r.data.xs[e])}),n},T.getXValue=function(t,e){return t in this.data.xs&&this.data.xs[t]&&u(this.data.xs[t][e])?this.data.xs[t][e]:e},T.getOtherTargetXs=function(){var t=Object.keys(this.data.xs);return t.length?this.data.xs[t[0]]:null},T.getOtherTargetX=function(t){var e=this.getOtherTargetXs();return e&&t<e.length?e[t]:null},T.addXs=function(t){var e=this;Object.keys(t).forEach(function(n){e.config.data_xs[n]=t[n]})},T.addName=function(t){var e;return t&&(e=this.config.data_names[t.id],t.name=void 0!==e?e:t.id),t},T.getValueOnIndex=function(t,e){var n=t.filter(function(t){return t.index===e});return n.length?n[0]:null},T.updateTargetX=function(t,e){var n=this;t.forEach(function(t){t.values.forEach(function(r,i){r.x=n.generateTargetX(e[i],t.id,i)}),n.data.xs[t.id]=e})},T.updateTargetXs=function(t,e){var n=this;t.forEach(function(t){e[t.id]&&n.updateTargetX([t],e[t.id])})},T.generateTargetX=function(t,e,n){var r=this;return r.isTimeSeries()?t?r.parseDate(t):r.parseDate(r.getXValue(e,n)):r.isCustomX()&&!r.isCategorized()?u(t)?+t:r.getXValue(e,n):n},T.cloneTarget=function(t){return{id:t.id,id_org:t.id_org,values:t.values.map(function(t){return{x:t.x,value:t.value,id:t.id}})}},T.getMaxDataCount=function(){return this.d3.max(this.data.targets,function(t){return t.values.length})},T.mapToIds=function(t){return t.map(function(t){return t.id})},T.mapToTargetIds=function(t){return t?[].concat(t):this.mapToIds(this.data.targets)},T.hasTarget=function(t,e){var n,r=this.mapToIds(t);for(n=0;n<r.length;n++)if(r[n]===e)return!0;return!1},T.isTargetToShow=function(t){return this.hiddenTargetIds.indexOf(t)<0},T.isLegendToShow=function(t){return this.hiddenLegendIds.indexOf(t)<0},T.filterTargetsToShow=function(t){var e=this;return t.filter(function(t){return e.isTargetToShow(t.id)})},T.mapTargetsToUniqueXs=function(t){var e=this.d3.set(this.d3.merge(t.map(function(t){return t.values.map(function(t){return+t.x})}))).values();return(e=this.isTimeSeries()?e.map(function(t){return new Date(+t)}):e.map(function(t){return+t})).sort(function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN})},T.addHiddenTargetIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenTargetIds.indexOf(t[e])<0&&(this.hiddenTargetIds=this.hiddenTargetIds.concat(t[e]))},T.removeHiddenTargetIds=function(t){this.hiddenTargetIds=this.hiddenTargetIds.filter(function(e){return t.indexOf(e)<0})},T.addHiddenLegendIds=function(t){t=t instanceof Array?t:new Array(t);for(var e=0;e<t.length;e++)this.hiddenLegendIds.indexOf(t[e])<0&&(this.hiddenLegendIds=this.hiddenLegendIds.concat(t[e]))},T.removeHiddenLegendIds=function(t){this.hiddenLegendIds=this.hiddenLegendIds.filter(function(e){return t.indexOf(e)<0})},T.getValuesAsIdKeyed=function(t){var e={};return t.forEach(function(t){e[t.id]=[],t.values.forEach(function(n){e[t.id].push(n.value)})}),e},T.checkValueInTargets=function(t,e){var n,r,i,a=Object.keys(t);for(n=0;n<a.length;n++)for(i=t[a[n]].values,r=0;r<i.length;r++)if(e(i[r].value))return!0;return!1},T.hasNegativeValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return t<0})},T.hasPositiveValueInTargets=function(t){return this.checkValueInTargets(t,function(t){return t>0})},T.isOrderDesc=function(){var t=this.config;return"string"==typeof t.data_order&&"desc"===t.data_order.toLowerCase()},T.isOrderAsc=function(){var t=this.config;return"string"==typeof t.data_order&&"asc"===t.data_order.toLowerCase()},T.getOrderFunction=function(){var t=this.config,e=this.isOrderAsc(),n=this.isOrderDesc();if(e||n){var r=function(t,e){return t+Math.abs(e.value)};return function(t,n){var i=t.values.reduce(r,0),a=n.values.reduce(r,0);return e?a-i:i-a}}if(c(t.data_order))return t.data_order;if(s(t.data_order)){var i=t.data_order;return function(t,e){return i.indexOf(t.id)-i.indexOf(e.id)}}},T.orderTargets=function(t){var e=this.getOrderFunction();return e&&t.sort(e),t},T.filterByX=function(t,e){return this.d3.merge(t.map(function(t){return t.values})).filter(function(t){return t.x-e==0})},T.filterRemoveNull=function(t){return t.filter(function(t){return u(t.value)})},T.filterByXDomain=function(t,e){return t.map(function(t){return{id:t.id,id_org:t.id_org,values:t.values.filter(function(t){return e[0]<=t.x&&t.x<=e[1]})}})},T.hasDataLabel=function(){var t=this.config;return!("boolean"!=typeof t.data_labels||!t.data_labels)||!("object"!==i(t.data_labels)||!y(t.data_labels))},T.getDataLabelLength=function(t,e,n){var r=this,i=[0,0];return r.selectChart.select("svg").selectAll(".dummy").data([t,e]).enter().append("text").text(function(t){return r.dataLabelFormat(t.id)(t)}).each(function(t,e){i[e]=1.3*this.getBoundingClientRect()[n]}).remove(),i},T.isNoneArc=function(t){return this.hasTarget(this.data.targets,t.id)},T.isArc=function(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},T.findClosestFromTargets=function(t,e){var n,r=this;return n=t.map(function(t){return r.findClosest(t.values,e)}),r.findClosest(n,e)},T.findClosest=function(t,e){var n,i=this,a=i.config.point_sensitivity;return t.filter(function(t){return t&&i.isBarType(t.id)}).forEach(function(t){var e=i.main.select("."+r.bars+i.getTargetSelectorSuffix(t.id)+" ."+r.bar+"-"+t.index).node();!n&&i.isWithinBar(i.d3.mouse(e),e)&&(n=t)}),t.filter(function(t){return t&&!i.isBarType(t.id)}).forEach(function(t){var r=i.dist(t,e);r<a&&(a=r,n=t)}),n},T.dist=function(t,e){var n=this.config,r=n.axis_rotated?1:0,i=n.axis_rotated?0:1,a=this.circleY(t,t.index),o=this.x(t.x);return Math.sqrt(Math.pow(o-e[r],2)+Math.pow(a-e[i],2))},T.convertValuesToStep=function(t){var e,n=[].concat(t);if(!this.isCategorized())return t;for(e=t.length+1;0<e;e--)n[e]=n[e-1];return n[0]={x:n[0].x-1,value:n[0].value,id:n[0].id},n[t.length+1]={x:n[t.length].x+1,value:n[t.length].value,id:n[t.length].id},n},T.updateDataAttributes=function(t,e){var n=this.config["data_"+t];return void 0===e?n:(Object.keys(e).forEach(function(t){n[t]=e[t]}),this.redraw({withLegend:!0}),n)},T.load=function(t,e){var n=this;t&&(e.filter&&(t=t.filter(e.filter)),(e.type||e.types)&&t.forEach(function(t){var r=e.types&&e.types[t.id]?e.types[t.id]:e.type;n.setTargetType(t.id,r)}),n.data.targets.forEach(function(e){for(var n=0;n<t.length;n++)if(e.id===t[n].id){e.values=t[n].values,t.splice(n,1);break}}),n.data.targets=n.data.targets.concat(t)),n.updateTargets(n.data.targets),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),e.done&&e.done()},T.loadFromArgs=function(t){var e=this;t.data?e.load(e.convertDataToTargets(t.data),t):t.url?e.convertUrlToData(t.url,t.mimeType,t.headers,t.keys,function(n){e.load(e.convertDataToTargets(n),t)}):t.json?e.load(e.convertDataToTargets(e.convertJsonToData(t.json,t.keys)),t):t.rows?e.load(e.convertDataToTargets(e.convertRowsToData(t.rows)),t):t.columns?e.load(e.convertDataToTargets(e.convertColumnsToData(t.columns)),t):e.load(null,t)},T.unload=function(t,e){var n=this;e||(e=function(){}),(t=t.filter(function(t){return n.hasTarget(n.data.targets,t)}))&&0!==t.length?(n.svg.selectAll(t.map(function(t){return n.selectorTarget(t)})).transition().style("opacity",0).remove().call(n.endall,e),t.forEach(function(t){n.withoutFadeIn[t]=!1,n.legend&&n.legend.selectAll("."+r.legendItem+n.getTargetSelectorSuffix(t)).remove(),n.data.targets=n.data.targets.filter(function(e){return e.id!==t})})):e()},T.getYDomainMin=function(t){var e,n,r,i,a,o,u=this,c=u.config,s=u.mapToIds(t),f=u.getValuesAsIdKeyed(t);if(c.data_groups.length>0)for(o=u.hasNegativeValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(i=c.data_groups[e].filter(function(t){return s.indexOf(t)>=0})).length)for(r=i[0],o&&f[r]&&f[r].forEach(function(t,e){f[r][e]=t<0?t:0}),n=1;n<i.length;n++)a=i[n],f[a]&&f[a].forEach(function(t,e){u.axis.getId(a)!==u.axis.getId(r)||!f[r]||o&&+t>0||(f[r][e]+=+t)});return u.d3.min(Object.keys(f).map(function(t){return u.d3.min(f[t])}))},T.getYDomainMax=function(t){var e,n,r,i,a,o,u=this,c=u.config,s=u.mapToIds(t),f=u.getValuesAsIdKeyed(t);if(c.data_groups.length>0)for(o=u.hasPositiveValueInTargets(t),e=0;e<c.data_groups.length;e++)if(0!==(i=c.data_groups[e].filter(function(t){return s.indexOf(t)>=0})).length)for(r=i[0],o&&f[r]&&f[r].forEach(function(t,e){f[r][e]=t>0?t:0}),n=1;n<i.length;n++)a=i[n],f[a]&&f[a].forEach(function(t,e){u.axis.getId(a)!==u.axis.getId(r)||!f[r]||o&&+t<0||(f[r][e]+=+t)});return u.d3.max(Object.keys(f).map(function(t){return u.d3.max(f[t])}))},T.getYDomain=function(t,e,n){var r,i,a,o,c,s,f,l,d,h,g=this,_=g.config,v=t.filter(function(t){return g.axis.getId(t.id)===e}),x=n?g.filterByXDomain(v,n):v,m="y2"===e?_.axis_y2_min:_.axis_y_min,b="y2"===e?_.axis_y2_max:_.axis_y_max,w=g.getYDomainMin(x),S=g.getYDomainMax(x),A="y2"===e?_.axis_y2_center:_.axis_y_center,T=g.hasType("bar",x)&&_.bar_zerobased||g.hasType("area",x)&&_.area_zerobased,P="y2"===e?_.axis_y2_inverted:_.axis_y_inverted,C=g.hasDataLabel()&&_.axis_rotated,M=g.hasDataLabel()&&!_.axis_rotated;return w=u(m)?m:u(b)?w<b?w:b-10:w,S=u(b)?b:u(m)?m<S?S:m+10:S,0===x.length?"y2"===e?g.y2.domain():g.y.domain():(isNaN(w)&&(w=0),isNaN(S)&&(S=w),w===S&&(w<0?S=0:w=0),d=w>=0&&S>=0,h=w<=0&&S<=0,(u(m)&&d||u(b)&&h)&&(T=!1),T&&(d&&(w=0),h&&(S=0)),a=o=.1*(i=Math.abs(S-w)),void 0!==A&&(S=A+(c=Math.max(Math.abs(w),Math.abs(S))),w=A-c),C?(s=g.getDataLabelLength(w,S,"width"),f=p(g.y.range()),a+=i*((l=[s[0]/f,s[1]/f])[1]/(1-l[0]-l[1])),o+=i*(l[0]/(1-l[0]-l[1]))):M&&(s=g.getDataLabelLength(w,S,"height"),a+=g.axis.convertPixelsToAxisPadding(s[1],i),o+=g.axis.convertPixelsToAxisPadding(s[0],i)),"y"===e&&y(_.axis_y_padding)&&(a=g.axis.getPadding(_.axis_y_padding,"top",a,i),o=g.axis.getPadding(_.axis_y_padding,"bottom",o,i)),"y2"===e&&y(_.axis_y2_padding)&&(a=g.axis.getPadding(_.axis_y2_padding,"top",a,i),o=g.axis.getPadding(_.axis_y2_padding,"bottom",o,i)),T&&(d&&(o=w),h&&(a=-S)),r=[w-o,S+a],P?r.reverse():r)},T.getXDomainMin=function(t){var e=this,n=e.config;return d(n.axis_x_min)?e.isTimeSeries()?this.parseDate(n.axis_x_min):n.axis_x_min:e.d3.min(t,function(t){return e.d3.min(t.values,function(t){return t.x})})},T.getXDomainMax=function(t){var e=this,n=e.config;return d(n.axis_x_max)?e.isTimeSeries()?this.parseDate(n.axis_x_max):n.axis_x_max:e.d3.max(t,function(t){return e.d3.max(t.values,function(t){return t.x})})},T.getXDomainPadding=function(t){var e,n,r,a,o=this.config,c=t[1]-t[0];return n=this.isCategorized()?0:this.hasType("bar")?(e=this.getMaxDataCount())>1?c/(e-1)/2:.5:.01*c,"object"===i(o.axis_x_padding)&&y(o.axis_x_padding)?(r=u(o.axis_x_padding.left)?o.axis_x_padding.left:n,a=u(o.axis_x_padding.right)?o.axis_x_padding.right:n):r=a="number"==typeof o.axis_x_padding?o.axis_x_padding:n,{left:r,right:a}},T.getXDomain=function(t){var e=this,n=[e.getXDomainMin(t),e.getXDomainMax(t)],r=n[0],i=n[1],a=e.getXDomainPadding(n),o=0,u=0;return r-i!=0||e.isCategorized()||(e.isTimeSeries()?(r=new Date(.5*r.getTime()),i=new Date(1.5*i.getTime())):(r=0===r?1:.5*r,i=0===i?-1:1.5*i)),(r||0===r)&&(o=e.isTimeSeries()?new Date(r.getTime()-a.left):r-a.left),(i||0===i)&&(u=e.isTimeSeries()?new Date(i.getTime()+a.right):i+a.right),[o,u]},T.updateXDomain=function(t,e,n,r,i){var a=this,o=a.config;return n&&(a.x.domain(i||a.d3.extent(a.getXDomain(t))),a.orgXDomain=a.x.domain(),o.zoom_enabled&&a.zoom.update(),a.subX.domain(a.x.domain()),a.brush&&a.brush.updateScale(a.subX)),e&&a.x.domain(i||(!a.brush||a.brush.empty()?a.orgXDomain:a.brush.selectionAsValue())),r&&a.x.domain(a.trimXDomain(a.x.orgDomain())),a.x.domain()},T.trimXDomain=function(t){var e=this.getZoomDomain(),n=e[0],r=e[1];return t[0]<=n&&(t[1]=+t[1]+(n-t[0]),t[0]=n),r<=t[1]&&(t[0]=+t[0]-(t[1]-r),t[1]=r),t},T.drag=function(t){var e,n,i,a,o,u,c,s,f=this,l=f.config,d=f.main,h=f.d3;f.hasArcType()||l.data_selection_enabled&&l.data_selection_multiple&&(e=f.dragStart[0],n=f.dragStart[1],i=t[0],a=t[1],o=Math.min(e,i),u=Math.max(e,i),c=l.data_selection_grouped?f.margin.top:Math.min(n,a),s=l.data_selection_grouped?f.height:Math.max(n,a),d.select("."+r.dragarea).attr("x",o).attr("y",c).attr("width",u-o).attr("height",s-c),d.selectAll("."+r.shapes).selectAll("."+r.shape).filter(function(t){return l.data_selection_isselectable(t)}).each(function(t,e){var n,i,a,l,d,g,p=h.select(this),_=p.classed(r.SELECTED),y=p.classed(r.INCLUDED),v=!1;if(p.classed(r.circle))n=1*p.attr("cx"),i=1*p.attr("cy"),d=f.togglePoint,v=o<n&&n<u&&c<i&&i<s;else{if(!p.classed(r.bar))return;n=(g=b(this)).x,i=g.y,a=g.width,l=g.height,d=f.togglePath,v=!(u<n||n+a<o||s<i||i+l<c)}v^y&&(p.classed(r.INCLUDED,!y),p.classed(r.SELECTED,!_),d.call(f,!_,p,t,e))}))},T.dragstart=function(t){var e=this,n=e.config;e.hasArcType()||n.data_selection_enabled&&(e.dragStart=t,e.main.select("."+r.chart).append("rect").attr("class",r.dragarea).style("opacity",.1),e.dragging=!0)},T.dragend=function(){var t=this,e=t.config;t.hasArcType()||e.data_selection_enabled&&(t.main.select("."+r.dragarea).transition().duration(100).style("opacity",0).remove(),t.main.selectAll("."+r.shape).classed(r.INCLUDED,!1),t.dragging=!1)},T.getYFormat=function(t){var e=this,n=t&&!e.hasType("gauge")?e.defaultArcValueFormat:e.yFormat,r=t&&!e.hasType("gauge")?e.defaultArcValueFormat:e.y2Format;return function(t,i,a){return("y2"===e.axis.getId(a)?r:n).call(e,t,i)}},T.yFormat=function(t){var e=this.config;return(e.axis_y_tick_format?e.axis_y_tick_format:this.defaultValueFormat)(t)},T.y2Format=function(t){var e=this.config;return(e.axis_y2_tick_format?e.axis_y2_tick_format:this.defaultValueFormat)(t)},T.defaultValueFormat=function(t){return u(t)?+t:""},T.defaultArcValueFormat=function(t,e){return(100*e).toFixed(1)+"%"},T.dataLabelFormat=function(t){var e=this.config.data_labels,n=function(t){return u(t)?+t:""};return"function"==typeof e.format?e.format:"object"===i(e.format)?e.format[t]?!0===e.format[t]?n:e.format[t]:function(){return""}:n},T.initGrid=function(){var t=this,e=t.config,n=t.d3;t.grid=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",r.grid),e.grid_x_show&&t.grid.append("g").attr("class",r.xgrids),e.grid_y_show&&t.grid.append("g").attr("class",r.ygrids),e.grid_focus_show&&t.grid.append("g").attr("class",r.xgridFocus).append("line").attr("class",r.xgridFocus),t.xgrid=n.selectAll([]),e.grid_lines_front||t.initGridLines()},T.initGridLines=function(){var t=this,e=t.d3;t.gridLines=t.main.append("g").attr("clip-path",t.clipPathForGrid).attr("class",r.grid+" "+r.gridLines),t.gridLines.append("g").attr("class",r.xgridLines),t.gridLines.append("g").attr("class",r.ygridLines),t.xgridLines=e.selectAll([])},T.updateXGrid=function(t){var e=this,n=e.config,i=e.d3,a=e.generateGridData(n.grid_x_type,e.x),o=e.isCategorized()?e.xAxis.tickOffset():0;e.xgridAttr=n.axis_rotated?{x1:0,x2:e.width,y1:function(t){return e.x(t)-o},y2:function(t){return e.x(t)-o}}:{x1:function(t){return e.x(t)+o},x2:function(t){return e.x(t)+o},y1:0,y2:e.height},e.xgridAttr.opacity=function(){return+i.select(this).attr(n.axis_rotated?"y1":"x1")===(n.axis_rotated?e.height:0)?0:1};var u=e.main.select("."+r.xgrids).selectAll("."+r.xgrid).data(a),c=u.enter().append("line").attr("class",r.xgrid).attr("x1",e.xgridAttr.x1).attr("x2",e.xgridAttr.x2).attr("y1",e.xgridAttr.y1).attr("y2",e.xgridAttr.y2).style("opacity",0);e.xgrid=c.merge(u),t||e.xgrid.attr("x1",e.xgridAttr.x1).attr("x2",e.xgridAttr.x2).attr("y1",e.xgridAttr.y1).attr("y2",e.xgridAttr.y2).style("opacity",e.xgridAttr.opacity),u.exit().remove()},T.updateYGrid=function(){var t=this,e=t.config,n=t.yAxis.tickValues()||t.y.ticks(e.grid_y_ticks),i=t.main.select("."+r.ygrids).selectAll("."+r.ygrid).data(n),a=i.enter().append("line").attr("class",r.ygrid);t.ygrid=a.merge(i),t.ygrid.attr("x1",e.axis_rotated?t.y:0).attr("x2",e.axis_rotated?t.y:t.width).attr("y1",e.axis_rotated?0:t.y).attr("y2",e.axis_rotated?t.height:t.y),i.exit().remove(),t.smoothLines(t.ygrid,"grid")},T.gridTextAnchor=function(t){return t.position?t.position:"end"},T.gridTextDx=function(t){return"start"===t.position?4:"middle"===t.position?0:-4},T.xGridTextX=function(t){return"start"===t.position?-this.height:"middle"===t.position?-this.height/2:0},T.yGridTextX=function(t){return"start"===t.position?0:"middle"===t.position?this.width/2:this.width},T.updateGrid=function(t){var e,n,i,a,o=this,u=o.main,c=o.config,s=o.xv.bind(o),f=o.yv.bind(o),l=o.xGridTextX.bind(o),d=o.yGridTextX.bind(o);o.grid.style("visibility",o.hasArcType()?"hidden":"visible"),u.select("line."+r.xgridFocus).style("visibility","hidden"),c.grid_x_show&&o.updateXGrid(),(n=(e=u.select("."+r.xgridLines).selectAll("."+r.xgridLine).data(c.grid_x_lines)).enter().append("g").attr("class",function(t){return r.xgridLine+(t.class?" "+t.class:"")})).append("line").attr("x1",c.axis_rotated?0:s).attr("x2",c.axis_rotated?o.width:s).attr("y1",c.axis_rotated?s:0).attr("y2",c.axis_rotated?s:o.height).style("opacity",0),n.append("text").attr("text-anchor",o.gridTextAnchor).attr("transform",c.axis_rotated?"":"rotate(-90)").attr("x",c.axis_rotated?d:l).attr("y",s).attr("dx",o.gridTextDx).attr("dy",-5).style("opacity",0),o.xgridLines=n.merge(e),e.exit().transition().duration(t).style("opacity",0).remove(),c.grid_y_show&&o.updateYGrid(),(a=(i=u.select("."+r.ygridLines).selectAll("."+r.ygridLine).data(c.grid_y_lines)).enter().append("g").attr("class",function(t){return r.ygridLine+(t.class?" "+t.class:"")})).append("line").attr("x1",c.axis_rotated?f:0).attr("x2",c.axis_rotated?f:o.width).attr("y1",c.axis_rotated?0:f).attr("y2",c.axis_rotated?o.height:f).style("opacity",0),a.append("text").attr("text-anchor",o.gridTextAnchor).attr("transform",c.axis_rotated?"rotate(-90)":"").attr("x",c.axis_rotated?l:d).attr("y",f).attr("dx",o.gridTextDx).attr("dy",-5).style("opacity",0),o.ygridLines=a.merge(i),o.ygridLines.select("line").transition().duration(t).attr("x1",c.axis_rotated?f:0).attr("x2",c.axis_rotated?f:o.width).attr("y1",c.axis_rotated?0:f).attr("y2",c.axis_rotated?o.height:f).style("opacity",1),o.ygridLines.select("text").transition().duration(t).attr("x",c.axis_rotated?o.xGridTextX.bind(o):o.yGridTextX.bind(o)).attr("y",f).text(function(t){return t.text}).style("opacity",1),i.exit().transition().duration(t).style("opacity",0).remove()},T.redrawGrid=function(t,e){var n=this,r=n.config,i=n.xv.bind(n),a=n.xgridLines.select("line"),o=n.xgridLines.select("text");return[(t?a.transition(e):a).attr("x1",r.axis_rotated?0:i).attr("x2",r.axis_rotated?n.width:i).attr("y1",r.axis_rotated?i:0).attr("y2",r.axis_rotated?i:n.height).style("opacity",1),(t?o.transition(e):o).attr("x",r.axis_rotated?n.yGridTextX.bind(n):n.xGridTextX.bind(n)).attr("y",i).text(function(t){return t.text}).style("opacity",1)]},T.showXGridFocus=function(t){var e=this,n=e.config,i=t.filter(function(t){return t&&u(t.value)}),a=e.main.selectAll("line."+r.xgridFocus),o=e.xx.bind(e);n.tooltip_show&&(e.hasType("scatter")||e.hasArcType()||(a.style("visibility","visible").data([i[0]]).attr(n.axis_rotated?"y1":"x1",o).attr(n.axis_rotated?"y2":"x2",o),e.smoothLines(a,"grid")))},T.hideXGridFocus=function(){this.main.select("line."+r.xgridFocus).style("visibility","hidden")},T.updateXgridFocus=function(){var t=this.config;this.main.select("line."+r.xgridFocus).attr("x1",t.axis_rotated?0:-10).attr("x2",t.axis_rotated?this.width:-10).attr("y1",t.axis_rotated?-10:0).attr("y2",t.axis_rotated?-10:this.height)},T.generateGridData=function(t,e){var n,i,a,o,u=[],c=this.main.select("."+r.axisX).selectAll(".tick").size();if("year"===t)for(i=(n=this.getXDomain())[0].getFullYear(),a=n[1].getFullYear(),o=i;o<=a;o++)u.push(new Date(o+"-01-01 00:00:00"));else(u=e.ticks(10)).length>c&&(u=u.filter(function(t){return(""+t).indexOf(".")<0}));return u},T.getGridFilterToRemove=function(t){return t?function(e){var n=!1;return[].concat(t).forEach(function(t){("value"in t&&e.value===t.value||"class"in t&&e.class===t.class)&&(n=!0)}),n}:function(){return!0}},T.removeGridLines=function(t,e){var n=this.config,i=this.getGridFilterToRemove(t),a=function(t){return!i(t)},o=e?r.xgridLines:r.ygridLines,u=e?r.xgridLine:r.ygridLine;this.main.select("."+o).selectAll("."+u).filter(i).transition().duration(n.transition_duration).style("opacity",0).remove(),e?n.grid_x_lines=n.grid_x_lines.filter(a):n.grid_y_lines=n.grid_y_lines.filter(a)},T.initEventRect=function(){var t=this,e=t.config;t.main.select("."+r.chart).append("g").attr("class",r.eventRects).style("fill-opacity",0),t.eventRect=t.main.select("."+r.eventRects).append("rect").attr("class",r.eventRect),e.zoom_enabled&&t.zoom&&(t.eventRect.call(t.zoom).on("dblclick.zoom",null),e.zoom_initialRange&&t.eventRect.transition().duration(0).call(t.zoom.transform,t.zoomTransform(e.zoom_initialRange)))},T.redrawEventRect=function(){var t,e,n=this,i=n.d3,a=n.config;function o(){n.svg.select("."+r.eventRect).style("cursor",null),n.hideXGridFocus(),n.hideTooltip(),n.unexpandCircles(),n.unexpandBars()}t=n.width,e=n.height,n.main.select("."+r.eventRects).style("cursor",a.zoom_enabled?a.axis_rotated?"ns-resize":"ew-resize":null),n.eventRect.attr("x",0).attr("y",0).attr("width",t).attr("height",e).on("mouseout",a.interaction_enabled?function(){a&&(n.hasArcType()||o())}:null).on("mousemove",a.interaction_enabled?function(){var t,e,u,c;n.dragging||n.hasArcType(t)||(t=n.filterTargetsToShow(n.data.targets),e=i.mouse(this),u=n.findClosestFromTargets(t,e),!n.mouseover||u&&u.id===n.mouseover.id||(a.data_onmouseout.call(n.api,n.mouseover),n.mouseover=void 0),u?(c=(n.isScatterType(u)||!a.tooltip_grouped?[u]:n.filterByX(t,u.x)).map(function(t){return n.addName(t)}),n.showTooltip(c,this),a.point_focus_expand_enabled&&(n.unexpandCircles(),c.forEach(function(t){n.expandCircles(t.index,t.id,!1)})),n.expandBars(u.index,u.id,!0),n.showXGridFocus(c),(n.isBarType(u.id)||n.dist(u,e)<a.point_sensitivity)&&(n.svg.select("."+r.eventRect).style("cursor","pointer"),n.mouseover||(a.data_onmouseover.call(n.api,u),n.mouseover=u))):o())}:null).on("click",a.interaction_enabled?function(){var t,e,o;n.hasArcType(t)||(t=n.filterTargetsToShow(n.data.targets),e=i.mouse(this),(o=n.findClosestFromTargets(t,e))&&(n.isBarType(o.id)||n.dist(o,e)<a.point_sensitivity)&&(n.isScatterType(o)||!a.data_selection_grouped?[o]:n.filterByX(t,o.x)).forEach(function(t){n.main.selectAll("."+r.shapes+n.getTargetSelectorSuffix(t.id)).selectAll("."+r.shape+"-"+t.index).each(function(){(a.data_selection_grouped||n.isWithinShape(this,t))&&(n.toggleShape(this,t,t.index),a.data_onclick.call(n.api,t,this))})}))}:null).call(a.interaction_enabled&&a.data_selection_draggable&&n.drag?i.drag().on("drag",function(){n.drag(i.mouse(this))}).on("start",function(){n.dragstart(i.mouse(this))}).on("end",function(){n.dragend()}):function(){})},T.getMousePosition=function(t){return[this.x(t.x),this.getYScale(t.id)(t.value)]},T.dispatchEvent=function(t,e){var n="."+r.eventRect,i=this.main.select(n).node(),a=i.getBoundingClientRect(),o=a.left+(e?e[0]:0),u=a.top+(e?e[1]:0),c=document.createEvent("MouseEvents");c.initMouseEvent(t,!0,!0,window,0,o,u,o,u,!1,!1,!1,!1,0,null),i.dispatchEvent(c)},T.initLegend=function(){var t=this;if(t.legendItemTextBox={},t.legendHasRendered=!1,t.legend=t.svg.append("g").attr("transform",t.getTranslate("legend")),!t.config.legend_show)return t.legend.style("visibility","hidden"),void(t.hiddenLegendIds=t.mapToIds(t.data.targets));t.updateLegendWithDefaults()},T.updateLegendWithDefaults=function(){this.updateLegend(this.mapToIds(this.data.targets),{withTransform:!1,withTransitionForTransform:!1,withTransition:!1})},T.updateSizeForLegend=function(t,e){var n=this,r=n.config,i={top:n.isLegendTop?n.getCurrentPaddingTop()+r.legend_inset_y+5.5:n.currentHeight-t-n.getCurrentPaddingBottom()-r.legend_inset_y,left:n.isLegendLeft?n.getCurrentPaddingLeft()+r.legend_inset_x+.5:n.currentWidth-e-n.getCurrentPaddingRight()-r.legend_inset_x+.5};n.margin3={top:n.isLegendRight?0:n.isLegendInset?i.top:n.currentHeight-t,right:NaN,bottom:0,left:n.isLegendRight?n.currentWidth-e:n.isLegendInset?i.left:0}},T.transformLegend=function(t){(t?this.legend.transition():this.legend).attr("transform",this.getTranslate("legend"))},T.updateLegendStep=function(t){this.legendStep=t},T.updateLegendItemWidth=function(t){this.legendItemWidth=t},T.updateLegendItemHeight=function(t){this.legendItemHeight=t},T.getLegendWidth=function(){var t=this;return t.config.legend_show?t.isLegendRight||t.isLegendInset?t.legendItemWidth*(t.legendStep+1):t.currentWidth:0},T.getLegendHeight=function(){var t=this,e=0;return t.config.legend_show&&(e=t.isLegendRight?t.currentHeight:Math.max(20,t.legendItemHeight)*(t.legendStep+1)),e},T.opacityForLegend=function(t){return t.classed(r.legendItemHidden)?null:1},T.opacityForUnfocusedLegend=function(t){return t.classed(r.legendItemHidden)?null:.3},T.toggleFocusLegend=function(t,e){var n=this;t=n.mapToTargetIds(t),n.legend.selectAll("."+r.legendItem).filter(function(e){return t.indexOf(e)>=0}).classed(r.legendItemFocused,e).transition().duration(100).style("opacity",function(){return(e?n.opacityForLegend:n.opacityForUnfocusedLegend).call(n,n.d3.select(this))})},T.revertLegend=function(){var t=this,e=t.d3;t.legend.selectAll("."+r.legendItem).classed(r.legendItemFocused,!1).transition().duration(100).style("opacity",function(){return t.opacityForLegend(e.select(this))})},T.showLegend=function(t){var e=this,n=e.config;n.legend_show||(n.legend_show=!0,e.legend.style("visibility","visible"),e.legendHasRendered||e.updateLegendWithDefaults()),e.removeHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("visibility","visible").transition().style("opacity",function(){return e.opacityForLegend(e.d3.select(this))})},T.hideLegend=function(t){var e=this,n=e.config;n.legend_show&&_(t)&&(n.legend_show=!1,e.legend.style("visibility","hidden")),e.addHiddenLegendIds(t),e.legend.selectAll(e.selectorLegends(t)).style("opacity",0).style("visibility","hidden")},T.clearLegendItemTextBoxCache=function(){this.legendItemTextBox={}},T.updateLegend=function(t,e,n){var i,a,o,u,c,s,f,l,h,g,p,_,y,x,m,b,w=this,S=w.config,A=4,T=10,P=0,C=0,M=10,L=S.legend_item_tile_width+5,O=0,E={},k={},G={},V=[0],R={},I=0;function D(e,n,i){var a,o,u=0===i,c=i===t.length-1,s=function(t,e){return w.legendItemTextBox[e]||(w.legendItemTextBox[e]=w.getTextRect(t.textContent,r.legendItem,t)),w.legendItemTextBox[e]}(e,n),f=s.width+L+(!c||w.isLegendRight||w.isLegendInset?T:0)+S.legend_padding,l=s.height+A,d=w.isLegendRight||w.isLegendInset?l:f,h=w.isLegendRight||w.isLegendInset?w.getLegendHeight():w.getLegendWidth();function g(t,e){e||(a=(h-O-d)/2)<M&&(a=(h-d)/2,O=0,I++),R[t]=I,V[I]=w.isLegendInset?10:a,E[t]=O,O+=d}u&&(O=0,I=0,P=0,C=0),!S.legend_show||w.isLegendToShow(n)?(k[n]=f,G[n]=l,(!P||f>=P)&&(P=f),(!C||l>=C)&&(C=l),o=w.isLegendRight||w.isLegendInset?C:P,S.legend_equally?(Object.keys(k).forEach(function(t){k[t]=P}),Object.keys(G).forEach(function(t){G[t]=C}),(a=(h-o*t.length)/2)<M?(O=0,I=0,t.forEach(function(t){g(t)})):g(n,!0)):g(n)):k[n]=G[n]=R[n]=E[n]=0}t=t.filter(function(t){return!d(S.data_names[t])||null!==S.data_names[t]}),p=v(e=e||{},"withTransition",!0),_=v(e,"withTransitionForTransform",!0),w.isLegendInset&&(I=S.legend_inset_step?S.legend_inset_step:t.length,w.updateLegendStep(I)),w.isLegendRight?(i=function(t){return P*R[t]},u=function(t){return V[R[t]]+E[t]}):w.isLegendInset?(i=function(t){return P*R[t]+10},u=function(t){return V[R[t]]+E[t]}):(i=function(t){return V[R[t]]+E[t]},u=function(t){return C*R[t]}),a=function(t,e){return i(t,e)+4+S.legend_item_tile_width},c=function(t,e){return u(t,e)+9},o=function(t,e){return i(t,e)},s=function(t,e){return u(t,e)-5},f=function(t,e){return i(t,e)-2},l=function(t,e){return i(t,e)-2+S.legend_item_tile_width},h=function(t,e){return u(t,e)+4},(g=w.legend.selectAll("."+r.legendItem).data(t).enter().append("g").attr("class",function(t){return w.generateClass(r.legendItem,t)}).style("visibility",function(t){return w.isLegendToShow(t)?"visible":"hidden"}).style("cursor","pointer").on("click",function(t){S.legend_item_onclick?S.legend_item_onclick.call(w,t):w.d3.event.altKey?(w.api.hide(),w.api.show(t)):(w.api.toggle(t),w.isTargetToShow(t)?w.api.focus(t):w.api.revert())}).on("mouseover",function(t){S.legend_item_onmouseover?S.legend_item_onmouseover.call(w,t):(w.d3.select(this).classed(r.legendItemFocused,!0),!w.transiting&&w.isTargetToShow(t)&&w.api.focus(t))}).on("mouseout",function(t){S.legend_item_onmouseout?S.legend_item_onmouseout.call(w,t):(w.d3.select(this).classed(r.legendItemFocused,!1),w.api.revert())})).append("text").text(function(t){return d(S.data_names[t])?S.data_names[t]:t}).each(function(t,e){D(this,t,e)}).style("pointer-events","none").attr("x",w.isLegendRight||w.isLegendInset?a:-200).attr("y",w.isLegendRight||w.isLegendInset?-200:c),g.append("rect").attr("class",r.legendItemEvent).style("fill-opacity",0).attr("x",w.isLegendRight||w.isLegendInset?o:-200).attr("y",w.isLegendRight||w.isLegendInset?-200:s),g.append("line").attr("class",r.legendItemTile).style("stroke",w.color).style("pointer-events","none").attr("x1",w.isLegendRight||w.isLegendInset?f:-200).attr("y1",w.isLegendRight||w.isLegendInset?-200:h).attr("x2",w.isLegendRight||w.isLegendInset?l:-200).attr("y2",w.isLegendRight||w.isLegendInset?-200:h).attr("stroke-width",S.legend_item_tile_height),b=w.legend.select("."+r.legendBackground+" rect"),w.isLegendInset&&P>0&&0===b.size()&&(b=w.legend.insert("g","."+r.legendItem).attr("class",r.legendBackground).append("rect")),y=w.legend.selectAll("text").data(t).text(function(t){return d(S.data_names[t])?S.data_names[t]:t}).each(function(t,e){D(this,t,e)}),(p?y.transition():y).attr("x",a).attr("y",c),x=w.legend.selectAll("rect."+r.legendItemEvent).data(t),(p?x.transition():x).attr("width",function(t){return k[t]}).attr("height",function(t){return G[t]}).attr("x",o).attr("y",s),m=w.legend.selectAll("line."+r.legendItemTile).data(t),(p?m.transition():m).style("stroke",w.levelColor?function(t){return w.levelColor(w.cache[t].values[0].value)}:w.color).attr("x1",f).attr("y1",h).attr("x2",l).attr("y2",h),b&&(p?b.transition():b).attr("height",w.getLegendHeight()-12).attr("width",P*(I+1)+10),w.legend.selectAll("."+r.legendItem).classed(r.legendItemHidden,function(t){return!w.isTargetToShow(t)}),w.updateLegendItemWidth(P),w.updateLegendItemHeight(C),w.updateLegendStep(I),w.updateSizes(),w.updateScales(),w.updateSvgSize(),w.transformAll(_,n),w.legendHasRendered=!0},T.initRegion=function(){this.region=this.main.append("g").attr("clip-path",this.clipPath).attr("class",r.regions)},T.updateRegion=function(t){var e=this,n=e.config;e.region.style("visibility",e.hasArcType()?"hidden":"visible");var i=e.main.select("."+r.regions).selectAll("."+r.region).data(n.regions),a=i.enter().append("rect").attr("x",e.regionX.bind(e)).attr("y",e.regionY.bind(e)).attr("width",e.regionWidth.bind(e)).attr("height",e.regionHeight.bind(e)).style("fill-opacity",0);e.mainRegion=a.merge(i).attr("class",e.classRegion.bind(e)),i.exit().transition().duration(t).style("opacity",0).remove()},T.redrawRegion=function(t,e){var n=this,r=n.mainRegion;return[(t?r.transition(e):r).attr("x",n.regionX.bind(n)).attr("y",n.regionY.bind(n)).attr("width",n.regionWidth.bind(n)).attr("height",n.regionHeight.bind(n)).style("fill-opacity",function(t){return u(t.opacity)?t.opacity:.1})]},T.regionX=function(t){var e=this,n=e.config,r="y"===t.axis?e.y:e.y2;return"y"===t.axis||"y2"===t.axis?n.axis_rotated&&"start"in t?r(t.start):0:n.axis_rotated?0:"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0},T.regionY=function(t){var e=this,n=e.config,r="y"===t.axis?e.y:e.y2;return"y"===t.axis||"y2"===t.axis?n.axis_rotated?0:"end"in t?r(t.end):0:n.axis_rotated&&"start"in t?e.x(e.isTimeSeries()?e.parseDate(t.start):t.start):0},T.regionWidth=function(t){var e,n=this,r=n.config,i=n.regionX(t),a="y"===t.axis?n.y:n.y2;return(e="y"===t.axis||"y2"===t.axis?r.axis_rotated&&"end"in t?a(t.end):n.width:r.axis_rotated?n.width:"end"in t?n.x(n.isTimeSeries()?n.parseDate(t.end):t.end):n.width)<i?0:e-i},T.regionHeight=function(t){var e,n=this,r=n.config,i=this.regionY(t),a="y"===t.axis?n.y:n.y2;return(e="y"===t.axis||"y2"===t.axis?r.axis_rotated?n.height:"start"in t?a(t.start):n.height:r.axis_rotated&&"end"in t?n.x(n.isTimeSeries()?n.parseDate(t.end):t.end):n.height)<i?0:e-i},T.isRegionOnX=function(t){return!t.axis||"x"===t.axis},T.getScale=function(t,e,n){return(n?this.d3.scaleTime():this.d3.scaleLinear()).range([t,e])},T.getX=function(t,e,n,r){var i,a=this.getScale(t,e,this.isTimeSeries()),o=n?a.domain(n):a;for(i in this.isCategorized()?(r=r||function(){return 0},a=function(t,e){var n=o(t)+r(t);return e?n:Math.ceil(n)}):a=function(t,e){var n=o(t);return e?n:Math.ceil(n)},o)a[i]=o[i];return a.orgDomain=function(){return o.domain()},this.isCategorized()&&(a.domain=function(t){return arguments.length?(o.domain(t),a):[(t=this.orgDomain())[0],t[1]+1]}),a},T.getY=function(t,e,n){var r=this.getScale(t,e,this.isTimeSeriesY());return n&&r.domain(n),r},T.getYScale=function(t){return"y2"===this.axis.getId(t)?this.y2:this.y},T.getSubYScale=function(t){return"y2"===this.axis.getId(t)?this.subY2:this.subY},T.updateScales=function(){var t=this,e=t.config,n=!t.x;t.xMin=e.axis_rotated?1:0,t.xMax=e.axis_rotated?t.height:t.width,t.yMin=e.axis_rotated?0:t.height,t.yMax=e.axis_rotated?t.width:1,t.subXMin=t.xMin,t.subXMax=t.xMax,t.subYMin=e.axis_rotated?0:t.height2,t.subYMax=e.axis_rotated?t.width2:1,t.x=t.getX(t.xMin,t.xMax,n?void 0:t.x.orgDomain(),function(){return t.xAxis.tickOffset()}),t.y=t.getY(t.yMin,t.yMax,n?e.axis_y_default:t.y.domain()),t.y2=t.getY(t.yMin,t.yMax,n?e.axis_y2_default:t.y2.domain()),t.subX=t.getX(t.xMin,t.xMax,t.orgXDomain,function(e){return e%1?0:t.subXAxis.tickOffset()}),t.subY=t.getY(t.subYMin,t.subYMax,n?e.axis_y_default:t.subY.domain()),t.subY2=t.getY(t.subYMin,t.subYMax,n?e.axis_y2_default:t.subY2.domain()),t.xAxisTickFormat=t.axis.getXAxisTickFormat(),t.xAxisTickValues=t.axis.getXAxisTickValues(),t.yAxisTickValues=t.axis.getYAxisTickValues(),t.y2AxisTickValues=t.axis.getY2AxisTickValues(),t.xAxis=t.axis.getXAxis(t.x,t.xOrient,t.xAxisTickFormat,t.xAxisTickValues,e.axis_x_tick_outer),t.subXAxis=t.axis.getXAxis(t.subX,t.subXOrient,t.xAxisTickFormat,t.xAxisTickValues,e.axis_x_tick_outer),t.yAxis=t.axis.getYAxis(t.y,t.yOrient,e.axis_y_tick_format,t.yAxisTickValues,e.axis_y_tick_outer),t.y2Axis=t.axis.getYAxis(t.y2,t.y2Orient,e.axis_y2_tick_format,t.y2AxisTickValues,e.axis_y2_tick_outer),n||t.brush&&t.brush.updateScale(t.subX),t.updateArc&&t.updateArc()},T.selectPoint=function(t,e,n){var i=this,a=i.config,o=(a.axis_rotated?i.circleY:i.circleX).bind(i),u=(a.axis_rotated?i.circleX:i.circleY).bind(i),c=i.pointSelectR.bind(i);a.data_onselected.call(i.api,e,t.node()),i.main.select("."+r.selectedCircles+i.getTargetSelectorSuffix(e.id)).selectAll("."+r.selectedCircle+"-"+n).data([e]).enter().append("circle").attr("class",function(){return i.generateClass(r.selectedCircle,n)}).attr("cx",o).attr("cy",u).attr("stroke",function(){return i.color(e)}).attr("r",function(t){return 1.4*i.pointSelectR(t)}).transition().duration(100).attr("r",c)},T.unselectPoint=function(t,e,n){this.config.data_onunselected.call(this.api,e,t.node()),this.main.select("."+r.selectedCircles+this.getTargetSelectorSuffix(e.id)).selectAll("."+r.selectedCircle+"-"+n).transition().duration(100).attr("r",0).remove()},T.togglePoint=function(t,e,n,r){t?this.selectPoint(e,n,r):this.unselectPoint(e,n,r)},T.selectPath=function(t,e){var n=this;n.config.data_onselected.call(n,e,t.node()),n.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return n.d3.rgb(n.color(e)).brighter(.75)})},T.unselectPath=function(t,e){var n=this;n.config.data_onunselected.call(n,e,t.node()),n.config.interaction_brighten&&t.transition().duration(100).style("fill",function(){return n.color(e)})},T.togglePath=function(t,e,n,r){t?this.selectPath(e,n,r):this.unselectPath(e,n,r)},T.getToggle=function(t,e){var n;return"circle"===t.nodeName?n=this.isStepType(e)?function(){}:this.togglePoint:"path"===t.nodeName&&(n=this.togglePath),n},T.toggleShape=function(t,e,n){var i=this,a=i.d3,o=i.config,u=a.select(t),c=u.classed(r.SELECTED),s=i.getToggle(t,e).bind(i);o.data_selection_enabled&&o.data_selection_isselectable(e)&&(o.data_selection_multiple||i.main.selectAll("."+r.shapes+(o.data_selection_grouped?i.getTargetSelectorSuffix(e.id):"")).selectAll("."+r.shape).each(function(t,e){var n=a.select(this);n.classed(r.SELECTED)&&s(!1,n.classed(r.SELECTED,!1),t,e)}),u.classed(r.SELECTED,!c),s(!c,u,e,n))},T.initBar=function(){this.main.select("."+r.chart).append("g").attr("class",r.chartBars)},T.updateTargetsForBar=function(t){var e=this,n=e.config,i=e.classChartBar.bind(e),a=e.classBars.bind(e),o=e.classFocus.bind(e);e.main.select("."+r.chartBars).selectAll("."+r.chartBar).data(t).attr("class",function(t){return i(t)+o(t)}).enter().append("g").attr("class",i).style("pointer-events","none").append("g").attr("class",a).style("cursor",function(t){return n.data_selection_isselectable(t)?"pointer":null})},T.updateBar=function(t){var e=this,n=e.barData.bind(e),i=e.classBar.bind(e),a=e.initialOpacity.bind(e),o=function(t){return e.color(t.id)},u=e.main.selectAll("."+r.bars).selectAll("."+r.bar).data(n),c=u.enter().append("path").attr("class",i).style("stroke",o).style("fill",o);e.mainBar=c.merge(u).style("opacity",a),u.exit().transition().duration(t).style("opacity",0)},T.redrawBar=function(t,e,n){return[(e?this.mainBar.transition(n):this.mainBar).attr("d",t).style("stroke",this.color).style("fill",this.color).style("opacity",1)]},T.getBarW=function(t,e){var n=this.config,r="number"==typeof n.bar_width?n.bar_width:e?t.tickInterval()*n.bar_width_ratio/e:0;return n.bar_width_max&&r>n.bar_width_max?n.bar_width_max:r},T.getBars=function(t,e){return(e?this.main.selectAll("."+r.bars+this.getTargetSelectorSuffix(e)):this.main).selectAll("."+r.bar+(u(t)?"-"+t:""))},T.expandBars=function(t,e,n){n&&this.unexpandBars(),this.getBars(t,e).classed(r.EXPANDED,!0)},T.unexpandBars=function(t){this.getBars(t).classed(r.EXPANDED,!1)},T.generateDrawBar=function(t,e){var n=this.config,r=this.generateGetBarPoints(t,e);return function(t,e){var i=r(t,e),a=n.axis_rotated?1:0,o=n.axis_rotated?0:1;return"M "+i[0][a]+","+i[0][o]+" L"+i[1][a]+","+i[1][o]+" L"+i[2][a]+","+i[2][o]+" L"+i[3][a]+","+i[3][o]+" z"}},T.generateGetBarPoints=function(t,e){var n=this,r=e?n.subXAxis:n.xAxis,i=t.__max__+1,a=n.getBarW(r,i),o=n.getShapeX(a,i,t,!!e),u=n.getShapeY(!!e),c=n.getShapeOffset(n.isBarType,t,!!e),s=a*(n.config.bar_space/2),f=e?n.getSubYScale:n.getYScale;return function(t,e){var r=f.call(n,t.id)(0),i=c(t,e)||r,l=o(t),d=u(t);return n.config.axis_rotated&&(0<t.value&&d<r||t.value<0&&r<d)&&(d=r),[[l+s,i],[l+s,d-(r-i)],[l+a-s,d-(r-i)],[l+a-s,i]]}},T.isWithinBar=function(t,e){var n=e.getBoundingClientRect(),r=e.pathSegList.getItem(0),i=e.pathSegList.getItem(1),a=Math.min(r.x,i.x),o=Math.min(r.y,i.y),u=a+n.width+2,c=o+n.height+2,s=o-2;return a-2<t[0]&&t[0]<u&&s<t[1]&&t[1]<c},T.getShapeIndices=function(t){var e,n,r=this.config,i={},a=0;return this.filterTargetsToShow(this.data.targets.filter(t,this)).forEach(function(t){for(e=0;e<r.data_groups.length;e++)if(!(r.data_groups[e].indexOf(t.id)<0))for(n=0;n<r.data_groups[e].length;n++)if(r.data_groups[e][n]in i){i[t.id]=i[r.data_groups[e][n]];break}l(i[t.id])&&(i[t.id]=a++)}),i.__max__=a-1,i},T.getShapeX=function(t,e,n,r){var i=r?this.subX:this.x;return function(r){var a=r.id in n?n[r.id]:0;return r.x||0===r.x?i(r.x)-t*(e/2-a):0}},T.getShapeY=function(t){var e=this;return function(n){return(t?e.getSubYScale(n.id):e.getYScale(n.id))(n.value)}},T.getShapeOffset=function(t,e,n){var r=this,i=r.orderTargets(r.filterTargetsToShow(r.data.targets.filter(t,r))),a=i.map(function(t){return t.id});return function(t,o){var u=n?r.getSubYScale(t.id):r.getYScale(t.id),c=u(0),s=c;return i.forEach(function(n){var i=r.isStepType(t)?r.convertValuesToStep(n.values):n.values;n.id!==t.id&&e[n.id]===e[t.id]&&a.indexOf(n.id)<a.indexOf(t.id)&&(void 0!==i[o]&&+i[o].x==+t.x||(o=-1,i.forEach(function(e,n){e.x===t.x&&(o=n)})),o in i&&i[o].value*t.value>=0&&(s+=u(i[o].value)-c))}),s}},T.isWithinShape=function(t,e){var n,i=this,a=i.d3.select(t);return i.isTargetToShow(e.id)?"circle"===t.nodeName?n=i.isStepType(e)?i.isWithinStep(t,i.getYScale(e.id)(e.value)):i.isWithinCircle(t,1.5*i.pointSelectR(e)):"path"===t.nodeName&&(n=!a.classed(r.bar)||i.isWithinBar(i.d3.mouse(t),t)):n=!1,n},T.getInterpolate=function(t){var e=this,n=e.d3,r={linear:n.curveLinear,"linear-closed":n.curveLinearClosed,basis:n.curveBasis,"basis-open":n.curveBasisOpen,"basis-closed":n.curveBasisClosed,bundle:n.curveBundle,cardinal:n.curveCardinal,"cardinal-open":n.curveCardinalOpen,"cardinal-closed":n.curveCardinalClosed,monotone:n.curveMonotoneX,step:n.curveStep};return e.isSplineType(t)?r[e.config.spline_interpolation_type]||r.cardinal:e.isStepType(t)?r[e.config.line_step_type]:r.linear},T.initLine=function(){this.main.select("."+r.chart).append("g").attr("class",r.chartLines)},T.updateTargetsForLine=function(t){var e,n=this,i=n.config,a=n.classChartLine.bind(n),o=n.classLines.bind(n),u=n.classAreas.bind(n),c=n.classCircles.bind(n),s=n.classFocus.bind(n);(e=n.main.select("."+r.chartLines).selectAll("."+r.chartLine).data(t).attr("class",function(t){return a(t)+s(t)}).enter().append("g").attr("class",a).style("opacity",0).style("pointer-events","none")).append("g").attr("class",o),e.append("g").attr("class",u),e.append("g").attr("class",function(t){return n.generateClass(r.selectedCircles,t.id)}),e.append("g").attr("class",c).style("cursor",function(t){return i.data_selection_isselectable(t)?"pointer":null}),t.forEach(function(t){n.main.selectAll("."+r.selectedCircles+n.getTargetSelectorSuffix(t.id)).selectAll("."+r.selectedCircle).each(function(e){e.value=t.values[e.index].value})})},T.updateLine=function(t){var e=this,n=e.main.selectAll("."+r.lines).selectAll("."+r.line).data(e.lineData.bind(e)),i=n.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color);e.mainLine=i.merge(n).style("opacity",e.initialOpacity.bind(e)).style("shape-rendering",function(t){return e.isStepType(t)?"crispEdges":""}).attr("transform",null),n.exit().transition().duration(t).style("opacity",0)},T.redrawLine=function(t,e,n){return[(e?this.mainLine.transition(n):this.mainLine).attr("d",t).style("stroke",this.color).style("opacity",1)]},T.generateDrawLine=function(t,e){var n=this,r=n.config,i=n.d3.line(),a=n.generateGetLinePoints(t,e),o=e?n.getSubYScale:n.getYScale,u=function(t){return(e?n.subxx:n.xx).call(n,t)},c=function(t,e){return r.data_groups.length>0?a(t,e)[0][1]:o.call(n,t.id)(t.value)};return i=r.axis_rotated?i.x(c).y(u):i.x(u).y(c),r.line_connectNull||(i=i.defined(function(t){return null!=t.value})),function(t){var a,u=r.line_connectNull?n.filterRemoveNull(t.values):t.values,c=e?n.subX:n.x,s=o.call(n,t.id),f=0,l=0;return n.isLineType(t)?r.data_regions[t.id]?a=n.lineWithRegions(u,c,s,r.data_regions[t.id]):(n.isStepType(t)&&(u=n.convertValuesToStep(u)),a=i.curve(n.getInterpolate(t))(u)):(u[0]&&(f=c(u[0].x),l=s(u[0].value)),a=r.axis_rotated?"M "+l+" "+f:"M "+f+" "+l),a||"M 0 0"}},T.generateGetLinePoints=function(t,e){var n=this,r=n.config,i=t.__max__+1,a=n.getShapeX(0,i,t,!!e),o=n.getShapeY(!!e),u=n.getShapeOffset(n.isLineType,t,!!e),c=e?n.getSubYScale:n.getYScale;return function(t,e){var i=c.call(n,t.id)(0),s=u(t,e)||i,f=a(t),l=o(t);return r.axis_rotated&&(0<t.value&&l<i||t.value<0&&i<l)&&(l=i),[[f,l-(i-s)],[f,l-(i-s)],[f,l-(i-s)],[f,l-(i-s)]]}},T.lineWithRegions=function(t,e,n,r){var i,a,o,u,c,s,f,h,g,p,_,y=this,v=y.config,x="M",m=y.isCategorized()?.5:0,b=[];function w(t,e){var n;for(n=0;n<e.length;n++)if(e[n].start<t&&t<=e[n].end)return!0;return!1}if(d(r))for(i=0;i<r.length;i++)b[i]={},l(r[i].start)?b[i].start=t[0].x:b[i].start=y.isTimeSeries()?y.parseDate(r[i].start):r[i].start,l(r[i].end)?b[i].end=t[t.length-1].x:b[i].end=y.isTimeSeries()?y.parseDate(r[i].end):r[i].end;function S(t){return"M"+t[0][0]+" "+t[0][1]+" "+t[1][0]+" "+t[1][1]}for(p=v.axis_rotated?function(t){return n(t.value)}:function(t){return e(t.x)},_=v.axis_rotated?function(t){return e(t.x)}:function(t){return n(t.value)},o=y.isTimeSeries()?function(t,r,i,a){var o=t.x.getTime(),u=r.x-t.x,s=new Date(o+u*i),f=new Date(o+u*(i+a));return S(v.axis_rotated?[[n(c(i)),e(s)],[n(c(i+a)),e(f)]]:[[e(s),n(c(i))],[e(f),n(c(i+a))]])}:function(t,r,i,a){return S(v.axis_rotated?[[n(c(i),!0),e(u(i))],[n(c(i+a),!0),e(u(i+a))]]:[[e(u(i),!0),n(c(i))],[e(u(i+a),!0),n(c(i+a))]])},i=0;i<t.length;i++){if(l(b)||!w(t[i].x,b))x+=" "+p(t[i])+" "+_(t[i]);else for(u=y.getScale(t[i-1].x+m,t[i].x+m,y.isTimeSeries()),c=y.getScale(t[i-1].value,t[i].value),s=e(t[i].x)-e(t[i-1].x),f=n(t[i].value)-n(t[i-1].value),g=2*(h=2/Math.sqrt(Math.pow(s,2)+Math.pow(f,2))),a=h;a<=1;a+=g)x+=o(t[i-1],t[i],a,h);t[i].x}return x},T.updateArea=function(t){var e=this,n=e.d3,i=e.main.selectAll("."+r.areas).selectAll("."+r.area).data(e.lineData.bind(e)),a=i.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+n.select(this).style("opacity"),0});e.mainArea=a.merge(i).style("opacity",e.orgAreaOpacity),i.exit().transition().duration(t).style("opacity",0)},T.redrawArea=function(t,e,n){return[(e?this.mainArea.transition(n):this.mainArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)]},T.generateDrawArea=function(t,e){var n=this,r=n.config,i=n.d3.area(),a=n.generateGetAreaPoints(t,e),o=e?n.getSubYScale:n.getYScale,u=function(t){return(e?n.subxx:n.xx).call(n,t)},c=function(t,e){return r.data_groups.length>0?a(t,e)[0][1]:o.call(n,t.id)(n.getAreaBaseValue(t.id))},s=function(t,e){return r.data_groups.length>0?a(t,e)[1][1]:o.call(n,t.id)(t.value)};return i=r.axis_rotated?i.x0(c).x1(s).y(u):i.x(u).y0(r.area_above?0:c).y1(s),r.line_connectNull||(i=i.defined(function(t){return null!==t.value})),function(t){var e,a=r.line_connectNull?n.filterRemoveNull(t.values):t.values,o=0,u=0;return n.isAreaType(t)?(n.isStepType(t)&&(a=n.convertValuesToStep(a)),e=i.curve(n.getInterpolate(t))(a)):(a[0]&&(o=n.x(a[0].x),u=n.getYScale(t.id)(a[0].value)),e=r.axis_rotated?"M "+u+" "+o:"M "+o+" "+u),e||"M 0 0"}},T.getAreaBaseValue=function(){return 0},T.generateGetAreaPoints=function(t,e){var n=this,r=n.config,i=t.__max__+1,a=n.getShapeX(0,i,t,!!e),o=n.getShapeY(!!e),u=n.getShapeOffset(n.isAreaType,t,!!e),c=e?n.getSubYScale:n.getYScale;return function(t,e){var i=c.call(n,t.id)(0),s=u(t,e)||i,f=a(t),l=o(t);return r.axis_rotated&&(0<t.value&&l<i||t.value<0&&i<l)&&(l=i),[[f,s],[f,l-(i-s)],[f,l-(i-s)],[f,s]]}},T.updateCircle=function(t,e){var n=this,i=n.main.selectAll("."+r.circles).selectAll("."+r.circle).data(n.lineOrScatterData.bind(n)),a=i.enter().append("circle").attr("class",n.classCircle.bind(n)).attr("cx",t).attr("cy",e).attr("r",n.pointR.bind(n)).style("fill",n.color);n.mainCircle=a.merge(i).style("opacity",n.initialOpacityForCircle.bind(n)),i.exit().style("opacity",0)},T.redrawCircle=function(t,e,n,i){var a=this,o=a.main.selectAll("."+r.selectedCircle);return[(n?a.mainCircle.transition(i):a.mainCircle).style("opacity",this.opacityForCircle.bind(a)).style("fill",a.color).attr("cx",t).attr("cy",e),(n?o.transition(i):o).attr("cx",t).attr("cy",e)]},T.circleX=function(t){return t.x||0===t.x?this.x(t.x):null},T.updateCircleY=function(){var t,e,n=this;n.config.data_groups.length>0?(t=n.getShapeIndices(n.isLineType),e=n.generateGetLinePoints(t),n.circleY=function(t,n){return e(t,n)[0][1]}):n.circleY=function(t){return n.getYScale(t.id)(t.value)}},T.getCircles=function(t,e){return(e?this.main.selectAll("."+r.circles+this.getTargetSelectorSuffix(e)):this.main).selectAll("."+r.circle+(u(t)?"-"+t:""))},T.expandCircles=function(t,e,n){var i=this.pointExpandedR.bind(this);n&&this.unexpandCircles(),this.getCircles(t,e).classed(r.EXPANDED,!0).attr("r",i)},T.unexpandCircles=function(t){var e=this,n=e.pointR.bind(e);e.getCircles(t).filter(function(){return e.d3.select(this).classed(r.EXPANDED)}).classed(r.EXPANDED,!1).attr("r",n)},T.pointR=function(t){var e=this.config;return this.isStepType(t)?0:c(e.point_r)?e.point_r(t):e.point_r},T.pointExpandedR=function(t){var e=this.config;return e.point_focus_expand_enabled?c(e.point_focus_expand_r)?e.point_focus_expand_r(t):e.point_focus_expand_r?e.point_focus_expand_r:1.75*this.pointR(t):this.pointR(t)},T.pointSelectR=function(t){var e=this.config;return c(e.point_select_r)?e.point_select_r(t):e.point_select_r?e.point_select_r:4*this.pointR(t)},T.isWithinCircle=function(t,e){var n=this.d3,r=n.mouse(t),i=n.select(t),a=+i.attr("cx"),o=+i.attr("cy");return Math.sqrt(Math.pow(a-r[0],2)+Math.pow(o-r[1],2))<e},T.isWithinStep=function(t,e){return Math.abs(e-this.d3.mouse(t)[1])<30},T.getCurrentWidth=function(){var t=this.config;return t.size_width?t.size_width:this.getParentWidth()},T.getCurrentHeight=function(){var t=this.config,e=t.size_height?t.size_height:this.getParentHeight();return e>0?e:320/(this.hasType("gauge")&&!t.gauge_fullCircle?2:1)},T.getCurrentPaddingTop=function(){var t=this.config,e=u(t.padding_top)?t.padding_top:0;return this.title&&this.title.node()&&(e+=this.getTitlePadding()),e},T.getCurrentPaddingBottom=function(){var t=this.config;return u(t.padding_bottom)?t.padding_bottom:0},T.getCurrentPaddingLeft=function(t){var e=this.config;return u(e.padding_left)?e.padding_left:e.axis_rotated?!e.axis_x_show||e.axis_x_inner?1:Math.max(h(this.getAxisWidthByAxisId("x",t)),40):!e.axis_y_show||e.axis_y_inner?this.axis.getYAxisLabelPosition().isOuter?30:1:h(this.getAxisWidthByAxisId("y",t))},T.getCurrentPaddingRight=function(){var t=this,e=t.config,n=t.isLegendRight?t.getLegendWidth()+20:0;return u(e.padding_right)?e.padding_right+1:e.axis_rotated?10+n:!e.axis_y2_show||e.axis_y2_inner?2+n+(t.axis.getY2AxisLabelPosition().isOuter?20:0):h(t.getAxisWidthByAxisId("y2"))+n},T.getParentRectValue=function(t){for(var e,n=this.selectChart.node();n&&"BODY"!==n.tagName;){try{e=n.getBoundingClientRect()[t]}catch(r){"width"===t&&(e=n.offsetWidth)}if(e)break;n=n.parentNode}return e},T.getParentWidth=function(){return this.getParentRectValue("width")},T.getParentHeight=function(){var t=this.selectChart.style("height");return t.indexOf("px")>0?+t.replace("px",""):0},T.getSvgLeft=function(t){var e=this,n=e.config,i=n.axis_rotated||!n.axis_rotated&&!n.axis_y_inner,a=n.axis_rotated?r.axisX:r.axisY,o=e.main.select("."+a).node(),u=o&&i?o.getBoundingClientRect():{right:0},c=e.selectChart.node().getBoundingClientRect(),s=e.hasArcType(),f=u.right-c.left-(s?0:e.getCurrentPaddingLeft(t));return f>0?f:0},T.getAxisWidthByAxisId=function(t,e){var n=this.axis.getLabelPositionById(t);return this.axis.getMaxTickWidth(t,e)+(n.isInner?20:40)},T.getHorizontalAxisHeight=function(t){var e=this,n=e.config,r=30;return"x"!==t||n.axis_x_show?"x"===t&&n.axis_x_height?n.axis_x_height:"y"!==t||n.axis_y_show?"y2"!==t||n.axis_y2_show?("x"===t&&!n.axis_rotated&&n.axis_x_tick_rotate&&(r=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(n.axis_x_tick_rotate))/180)),"y"===t&&n.axis_rotated&&n.axis_y_tick_rotate&&(r=30+e.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(n.axis_y_tick_rotate))/180)),r+(e.axis.getLabelPositionById(t).isInner?0:10)+("y2"===t?-10:0)):e.rotated_padding_top:!n.legend_show||e.isLegendRight||e.isLegendInset?1:10:8},T.initBrush=function(t){var e=this,n=e.d3;return e.brush=(e.config.axis_rotated?n.brushY():n.brushX()).on("brush",function(){var t=n.event.sourceEvent;t&&"zoom"===t.type||e.redrawForBrush()}).on("end",function(){var t=n.event.sourceEvent;t&&"zoom"===t.type||e.brush.empty()&&t&&"end"!==t.type&&e.brush.clear()}),e.brush.updateExtent=function(){var t,n=this.scale.range();return t=e.config.axis_rotated?[[0,n[0]],[e.width2,n[1]]]:[[n[0],0],[n[1],e.height2]],this.extent(t),this},e.brush.updateScale=function(t){return this.scale=t,this},e.brush.update=function(t){this.updateScale(t||e.subX).updateExtent(),e.context.select("."+r.brush).call(this)},e.brush.clear=function(){e.context.select("."+r.brush).call(e.brush.move,null)},e.brush.selection=function(){return n.brushSelection(e.context.select("."+r.brush).node())},e.brush.selectionAsValue=function(t,n){var i,a;return t?(e.context&&(i=[this.scale(t[0]),this.scale(t[1])],a=e.context.select("."+r.brush),n&&(a=a.transition()),e.brush.move(a,i)),[]):(i=e.brush.selection()||[0,0],[this.scale.invert(i[0]),this.scale.invert(i[1])])},e.brush.empty=function(){var t=e.brush.selection();return!t||t[0]===t[1]},e.brush.updateScale(t)},T.initSubchart=function(){var t=this,e=t.config,n=t.context=t.svg.append("g").attr("transform",t.getTranslate("context")),i=e.subchart_show?"visible":"hidden";n.style("visibility",i),n.append("g").attr("clip-path",t.clipPathForSubchart).attr("class",r.chart),n.select("."+r.chart).append("g").attr("class",r.chartBars),n.select("."+r.chart).append("g").attr("class",r.chartLines),n.append("g").attr("clip-path",t.clipPath).attr("class",r.brush),t.axes.subx=n.append("g").attr("class",r.axisX).attr("transform",t.getTranslate("subx")).attr("clip-path",e.axis_rotated?"":t.clipPathForXAxis)},T.initSubchartBrush=function(){this.initBrush(this.subX).updateExtent(),this.context.select("."+r.brush).call(this.brush)},T.updateTargetsForSubchart=function(t){var e,n,i,a,o=this,u=o.context,c=o.config,s=o.classChartBar.bind(o),f=o.classBars.bind(o),l=o.classChartLine.bind(o),d=o.classLines.bind(o),h=o.classAreas.bind(o);c.subchart_show&&((i=(a=u.select("."+r.chartBars).selectAll("."+r.chartBar).data(t)).enter().append("g").style("opacity",0)).merge(a).attr("class",s),i.append("g").attr("class",f),(e=(n=u.select("."+r.chartLines).selectAll("."+r.chartLine).data(t)).enter().append("g").style("opacity",0)).merge(n).attr("class",l),e.append("g").attr("class",d),e.append("g").attr("class",h),u.selectAll("."+r.brush+" rect").attr(c.axis_rotated?"width":"height",c.axis_rotated?o.width2:o.height2))},T.updateBarForSubchart=function(t){var e=this,n=e.context.selectAll("."+r.bars).selectAll("."+r.bar).data(e.barData.bind(e)),i=n.enter().append("path").attr("class",e.classBar.bind(e)).style("stroke","none").style("fill",e.color);n.exit().transition().duration(t).style("opacity",0).remove(),e.contextBar=i.merge(n).style("opacity",e.initialOpacity.bind(e))},T.redrawBarForSubchart=function(t,e,n){(e?this.contextBar.transition(Math.random().toString()).duration(n):this.contextBar).attr("d",t).style("opacity",1)},T.updateLineForSubchart=function(t){var e=this,n=e.context.selectAll("."+r.lines).selectAll("."+r.line).data(e.lineData.bind(e)),i=n.enter().append("path").attr("class",e.classLine.bind(e)).style("stroke",e.color);n.exit().transition().duration(t).style("opacity",0).remove(),e.contextLine=i.merge(n).style("opacity",e.initialOpacity.bind(e))},T.redrawLineForSubchart=function(t,e,n){(e?this.contextLine.transition(Math.random().toString()).duration(n):this.contextLine).attr("d",t).style("opacity",1)},T.updateAreaForSubchart=function(t){var e=this,n=e.d3,i=e.context.selectAll("."+r.areas).selectAll("."+r.area).data(e.lineData.bind(e)),a=i.enter().append("path").attr("class",e.classArea.bind(e)).style("fill",e.color).style("opacity",function(){return e.orgAreaOpacity=+n.select(this).style("opacity"),0});i.exit().transition().duration(t).style("opacity",0).remove(),e.contextArea=a.merge(i).style("opacity",0)},T.redrawAreaForSubchart=function(t,e,n){(e?this.contextArea.transition(Math.random().toString()).duration(n):this.contextArea).attr("d",t).style("fill",this.color).style("opacity",this.orgAreaOpacity)},T.redrawSubchart=function(t,e,n,r,i,a,o){var u,c,s,f=this,l=f.d3,d=f.config;f.context.style("visibility",d.subchart_show?"visible":"hidden"),d.subchart_show&&(l.event&&"zoom"===l.event.type&&f.brush.selectionAsValue(f.x.orgDomain()),t&&(f.brush.empty()||f.brush.selectionAsValue(f.x.orgDomain()),u=f.generateDrawArea(i,!0),c=f.generateDrawBar(a,!0),s=f.generateDrawLine(o,!0),f.updateBarForSubchart(n),f.updateLineForSubchart(n),f.updateAreaForSubchart(n),f.redrawBarForSubchart(c,n,n),f.redrawLineForSubchart(s,n,n),f.redrawAreaForSubchart(u,n,n)))},T.redrawForBrush=function(){var t,e=this,n=e.x,i=e.d3;e.redraw({withTransition:!1,withY:e.config.zoom_rescale,withSubchart:!1,withUpdateXDomain:!0,withEventRect:!1,withDimension:!1}),t=i.event.selection||e.brush.scale.range(),e.main.select("."+r.eventRect).call(e.zoom.transform,i.zoomIdentity.scale(e.width/(t[1]-t[0])).translate(-t[0],0)),e.config.subchart_onbrush.call(e.api,n.orgDomain())},T.transformContext=function(t,e){var n;e&&e.axisSubX?n=e.axisSubX:(n=this.context.select("."+r.axisX),t&&(n=n.transition())),this.context.attr("transform",this.getTranslate("context")),n.attr("transform",this.getTranslate("subx"))},T.getDefaultSelection=function(){var t=this,e=t.config,n=c(e.axis_x_selection)?e.axis_x_selection(t.getXDomain(t.data.targets)):e.axis_x_selection;return t.isTimeSeries()&&(n=[t.parseDate(n[0]),t.parseDate(n[1])]),n},T.initText=function(){this.main.select("."+r.chart).append("g").attr("class",r.chartTexts),this.mainText=this.d3.selectAll([])},T.updateTargetsForText=function(t){var e=this,n=e.classChartText.bind(e),i=e.classTexts.bind(e),a=e.classFocus.bind(e),o=e.main.select("."+r.chartTexts).selectAll("."+r.chartText).data(t),u=o.enter().append("g").attr("class",n).style("opacity",0).style("pointer-events","none");u.append("g").attr("class",i),u.merge(o).attr("class",function(t){return n(t)+a(t)})},T.updateText=function(t,e,n){var i=this,a=i.config,o=i.barOrLineData.bind(i),u=i.classText.bind(i),c=i.main.selectAll("."+r.texts).selectAll("."+r.text).data(o),s=c.enter().append("text").attr("class",u).attr("text-anchor",function(t){return a.axis_rotated?t.value<0?"end":"start":"middle"}).style("stroke","none").attr("x",t).attr("y",e).style("fill",function(t){return i.color(t)}).style("fill-opacity",0);i.mainText=s.merge(c).text(function(t,e,n){return i.dataLabelFormat(t.id)(t.value,t.id,e,n)}),c.exit().transition().duration(n).style("fill-opacity",0).remove()},T.redrawText=function(t,e,n,r,i){return[(r?this.mainText.transition(i):this.mainText).attr("x",t).attr("y",e).style("fill",this.color).style("fill-opacity",n?0:this.opacityForText.bind(this))]},T.getTextRect=function(t,e,n){var r,i=this.d3.select("body").append("div").classed("c3",!0),a=i.append("svg").style("visibility","hidden").style("position","fixed").style("top",0).style("left",0),o=this.d3.select(n).style("font");return a.selectAll(".dummy").data([t]).enter().append("text").classed(e||"",!0).style("font",o).text(t).each(function(){r=this.getBoundingClientRect()}),i.remove(),r},T.generateXYForText=function(t,e,n,r){var i=this,a=i.generateGetAreaPoints(t,!1),o=i.generateGetBarPoints(e,!1),u=i.generateGetLinePoints(n,!1),c=r?i.getXForText:i.getYForText;return function(t,e){var n=i.isAreaType(t)?a:i.isBarType(t)?o:u;return c.call(i,n(t,e),t,this)}},T.getXForText=function(t,e,n){var r,i,a=this,o=n.getBoundingClientRect();return a.config.axis_rotated?(i=a.isBarType(e)?4:6,r=t[2][1]+i*(e.value<0?-1:1)):r=a.hasType("bar")?(t[2][0]+t[0][0])/2:t[0][0],null===e.value&&(r>a.width?r=a.width-o.width:r<0&&(r=4)),r},T.getYForText=function(t,e,n){var r,i=this,a=n.getBoundingClientRect();return i.config.axis_rotated?r=(t[0][0]+t[2][0]+.6*a.height)/2:(r=t[2][1],e.value<0||0===e.value&&!i.hasPositiveValue?(r+=a.height,i.isBarType(e)&&i.isSafari()?r-=3:!i.isBarType(e)&&i.isChrome()&&(r+=3)):r+=i.isBarType(e)?-3:-6),null!==e.value||i.config.axis_rotated||(r<a.height?r=a.height:r>this.height&&(r=this.height-4)),r},T.initTitle=function(){this.title=this.svg.append("text").text(this.config.title_text).attr("class",this.CLASS.title)},T.redrawTitle=function(){var t=this;t.title.attr("x",t.xForTitle.bind(t)).attr("y",t.yForTitle.bind(t))},T.xForTitle=function(){var t=this,e=t.config,n=e.title_position||"left";return n.indexOf("right")>=0?t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width-e.title_padding.right:n.indexOf("center")>=0?(t.currentWidth-t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).width)/2:e.title_padding.left},T.yForTitle=function(){var t=this;return t.config.title_padding.top+t.getTextRect(t.title.node().textContent,t.CLASS.title,t.title.node()).height},T.getTitlePadding=function(){return this.yForTitle()+this.config.title_padding.bottom},T.initTooltip=function(){var t,e=this,n=e.config;if(e.tooltip=e.selectChart.style("position","relative").append("div").attr("class",r.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none"),n.tooltip_init_show){if(e.isTimeSeries()&&f(n.tooltip_init_x)){for(n.tooltip_init_x=e.parseDate(n.tooltip_init_x),t=0;t<e.data.targets[0].values.length&&e.data.targets[0].values[t].x-n.tooltip_init_x!=0;t++);n.tooltip_init_x=t}e.tooltip.html(n.tooltip_contents.call(e,e.data.targets.map(function(t){return e.addName(t.values[n.tooltip_init_x])}),e.axis.getXAxisTickFormat(),e.getYFormat(e.hasArcType()),e.color)),e.tooltip.style("top",n.tooltip_init_position.top).style("left",n.tooltip_init_position.left).style("display","block")}},T.getTooltipSortFunction=function(){var t=this,e=t.config;if(0!==e.data_groups.length&&void 0===e.tooltip_order){var n=t.orderTargets(t.data.targets).map(function(t){return t.id});return(t.isOrderAsc()||t.isOrderDesc())&&(n=n.reverse()),function(t,e){return n.indexOf(t.id)-n.indexOf(e.id)}}var r=e.tooltip_order;void 0===r&&(r=e.data_order);var i=function(t){return t?t.value:null};if(f(r)&&"asc"===r.toLowerCase())return function(t,e){return i(t)-i(e)};if(f(r)&&"desc"===r.toLowerCase())return function(t,e){return i(e)-i(t)};if(c(r)){var a=r;return void 0===e.tooltip_order&&(a=function(t,e){return r(t?{id:t.id,values:[t]}:null,e?{id:e.id,values:[e]}:null)}),a}return s(r)?function(t,e){return r.indexOf(t.id)-r.indexOf(e.id)}:void 0},T.getTooltipContent=function(t,e,n,r){var i,a,o,u,c,s,f=this,l=f.config,d=l.tooltip_format_title||e,h=l.tooltip_format_name||function(t){return t},g=l.tooltip_format_value||n,p=this.getTooltipSortFunction();for(p&&t.sort(p),a=0;a<t.length;a++)if(t[a]&&(t[a].value||0===t[a].value)&&(i||(o=m(d?d(t[a].x):t[a].x),i="<table class='"+f.CLASS.tooltip+"'>"+(o||0===o?"<tr><th colspan='2'>"+o+"</th></tr>":"")),void 0!==(u=m(g(t[a].value,t[a].ratio,t[a].id,t[a].index,t))))){if(null===t[a].name)continue;c=m(h(t[a].name,t[a].ratio,t[a].id,t[a].index)),s=f.levelColor?f.levelColor(t[a].value):r(t[a].id),i+="<tr class='"+f.CLASS.tooltipName+"-"+f.getTargetSelectorSuffix(t[a].id)+"'>",i+="<td class='name'><span style='background-color:"+s+"'></span>"+c+"</td>",i+="<td class='value'>"+u+"</td>",i+="</tr>"}return i+"</table>"},T.tooltipPosition=function(t,e,n,r){var i,a,o,u,c,s=this,f=s.config,l=s.d3,d=s.hasArcType(),h=l.mouse(r);return d?(a=(s.width-(s.isLegendRight?s.getLegendWidth():0))/2+h[0],u=(s.hasType("gauge")?s.height:s.height/2)+h[1]+20):(i=s.getSvgLeft(!0),f.axis_rotated?(o=(a=i+h[0]+100)+e,c=s.currentWidth-s.getCurrentPaddingRight(),u=s.x(t[0].x)+20):(o=(a=i+s.getCurrentPaddingLeft(!0)+s.x(t[0].x)+20)+e,c=i+s.currentWidth-s.getCurrentPaddingRight(),u=h[1]+15),o>c&&(a-=o-c+20),u+n>s.currentHeight&&(u-=n+30)),u<0&&(u=0),{top:u,left:a}},T.showTooltip=function(t,e){var n,r,i,a=this,o=a.config,c=a.hasArcType(),s=t.filter(function(t){return t&&u(t.value)}),f=o.tooltip_position||T.tooltipPosition;0!==s.length&&o.tooltip_show&&(a.tooltip.html(o.tooltip_contents.call(a,t,a.axis.getXAxisTickFormat(),a.getYFormat(c),a.color)).style("display","block"),n=a.tooltip.property("offsetWidth"),r=a.tooltip.property("offsetHeight"),i=f.call(this,s,n,r,e),a.tooltip.style("top",i.top+"px").style("left",i.left+"px"))},T.hideTooltip=function(){this.tooltip.style("display","none")},T.setTargetType=function(t,e){var n=this,r=n.config;n.mapToTargetIds(t).forEach(function(t){n.withoutFadeIn[t]=e===r.data_types[t],r.data_types[t]=e}),t||(r.data_type=e)},T.hasType=function(t,e){var n=this.config.data_types,r=!1;return(e=e||this.data.targets)&&e.length?e.forEach(function(e){var i=n[e.id];(i&&i.indexOf(t)>=0||!i&&"line"===t)&&(r=!0)}):Object.keys(n).length?Object.keys(n).forEach(function(e){n[e]===t&&(r=!0)}):r=this.config.data_type===t,r},T.hasArcType=function(t){return this.hasType("pie",t)||this.hasType("donut",t)||this.hasType("gauge",t)},T.isLineType=function(t){var e=this.config,n=f(t)?t:t.id;return!e.data_types[n]||["line","spline","area","area-spline","step","area-step"].indexOf(e.data_types[n])>=0},T.isStepType=function(t){var e=f(t)?t:t.id;return["step","area-step"].indexOf(this.config.data_types[e])>=0},T.isSplineType=function(t){var e=f(t)?t:t.id;return["spline","area-spline"].indexOf(this.config.data_types[e])>=0},T.isAreaType=function(t){var e=f(t)?t:t.id;return["area","area-spline","area-step"].indexOf(this.config.data_types[e])>=0},T.isBarType=function(t){var e=f(t)?t:t.id;return"bar"===this.config.data_types[e]},T.isScatterType=function(t){var e=f(t)?t:t.id;return"scatter"===this.config.data_types[e]},T.isPieType=function(t){var e=f(t)?t:t.id;return"pie"===this.config.data_types[e]},T.isGaugeType=function(t){var e=f(t)?t:t.id;return"gauge"===this.config.data_types[e]},T.isDonutType=function(t){var e=f(t)?t:t.id;return"donut"===this.config.data_types[e]},T.isArcType=function(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)},T.lineData=function(t){return this.isLineType(t)?[t]:[]},T.arcData=function(t){return this.isArcType(t.data)?[t]:[]},T.barData=function(t){return this.isBarType(t)?t.values:[]},T.lineOrScatterData=function(t){return this.isLineType(t)||this.isScatterType(t)?t.values:[]},T.barOrLineData=function(t){return this.isBarType(t)||this.isLineType(t)?t.values:[]},T.isSafari=function(){var t=window.navigator.userAgent;return t.indexOf("Safari")>=0&&t.indexOf("Chrome")<0},T.isChrome=function(){return window.navigator.userAgent.indexOf("Chrome")>=0},T.initZoom=function(){var t,e=this,n=e.d3,r=e.config;return e.zoom=n.zoom().on("start",function(){var i=n.event.sourceEvent;i&&"brush"===i.type||(t=i,r.zoom_onzoomstart.call(e.api,i))}).on("zoom",function(){var t=n.event.sourceEvent;t&&"brush"===t.type||e.redrawForZoom.call(e)}).on("end",function(){var i=n.event.sourceEvent;i&&"brush"===i.type||i&&t.clientX===i.clientX&&t.clientY===i.clientY||r.zoom_onzoomend.call(e.api,e.x.orgDomain())}),e.zoom.updateDomain=function(){return n.event&&n.event.transform&&e.x.domain(n.event.transform.rescaleX(e.subX).domain()),this},e.zoom.updateExtent=function(){return this.scaleExtent([1,1/0]).translateExtent([[0,0],[e.width,e.height]]).extent([[0,0],[e.width,e.height]]),this},e.zoom.update=function(){return this.updateExtent().updateDomain()},e.zoom.updateExtent()},T.zoomTransform=function(t){var e=[this.x(t[0]),this.x(t[1])];return this.d3.zoomIdentity.scale(this.width/(e[1]-e[0])).translate(-e[0],0)},T.getZoomDomain=function(){var t=this.config,e=this.d3;return[e.min([this.orgXDomain[0],t.zoom_x_min]),e.max([this.orgXDomain[1],t.zoom_x_max])]},T.redrawForZoom=function(){var t=this,e=t.d3,n=t.config,r=t.zoom,i=t.x;n.zoom_enabled&&0!==t.filterTargetsToShow(t.data.targets).length&&(r.update(),t.isCategorized()&&i.orgDomain()[0]===t.orgXDomain[0]&&i.domain([t.orgXDomain[0]-1e-10,i.orgDomain()[1]]),t.redraw({withTransition:!1,withY:n.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),e.event.sourceEvent&&"mousemove"===e.event.sourceEvent.type&&(t.cancelClick=!0),n.zoom_onzoom.call(t.api,i.orgDomain()))},P}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e,n;return function(t){if("undefined"==typeof window)return;window.onresize=window.resize=function(){},window.addEventListener?window.addEventListener("resize",t,!0):window.attachEvent&&window.attachEvent("onresize",t)}(function(){e&&clearTimeout(e),n=t.visuals.length>12?1e3:250,e=setTimeout(function(){(0,i.each)(t.visuals,function(t){t.view._artifacts.c3&&t.view._artifacts.c3.resize()})},n)}),function(){(0,i.each)(["area","area-spline","area-step","bar","donut","gauge","line","pie","step","spline","horizontal-area","horizontal-area-spline","horizontal-area-step","horizontal-bar","horizontal-line","horizontal-step","horizontal-spline"],function(t,e){_[t]={render:function(){var e=function(){var t,e,n;return t={axis:{},color:{},data:{order:null},legend:{position:"right",show:!0},padding:{},point:{focus:{expand:{enabled:!1}},r:2,show:!0},tooltip:{},transition:{duration:0}},e={bindto:this.el().querySelector("."+this.theme()+"-rendering"),color:{pattern:this.colors()},data:{colors:(0,a.extend)({},this.colorMapping()),columns:[],type:this.type().replace("horizontal-","")},size:{height:this.height()?this.height()-this.el().offsetHeight:400,width:this.width()},tooltip:{}},n=(0,o.extendDeep)({},t,this.chartOptions()),(n=(0,o.extendDeep)(n,e)).color.pattern=e.color.pattern,n.data.colors=e.data.colors,n.data.columns=e.data.columns,n}.call(this);if(1!==this.data()[0].length&&1!==this.data().length)if("gauge"===t?(e.legend.position="bottom",e.data.columns=[[this.title()||this.data()[1][0],this.data()[1][1]]]):"pie"===t||"donut"===t?e.data.columns=this.data().slice(1):(t.indexOf("horizontal-")>-1&&(e.axis.rotated=t.indexOf("horizontal-")>-1),(0,u.default)(this.data()[1][0])?(e.axis.x=e.axis.x||{},e.axis.x.type="timeseries",e.axis.x.tick=e.axis.x.tick||{format:this.dateFormat()||(0,c.default)(this.data()[1][0],this.data()[2]?this.data()[2][0]:this.data()[1][0]),culling:{max:5}},e.data.columns[0]=[],(0,i.each)(this.dataset.selectColumn(0),function(t,n){n>0&&(t=new Date(t)),e.data.columns[0][n]=t}),e.data.columns[0][0]="x",e.data.x="x",this.stacked()&&this.data()[0].length>2&&(e.data.groups=[this.dataset.selectRow(0).slice(1)])):(e.axis.x=e.axis.x||{},e.axis.x.type="category",e.axis.x.categories=this.dataset.selectColumn(0).slice(1),this.stacked()&&this.data()[0].length>2&&(e.data.groups=[this.dataset.selectRow(0).slice(1)])),2===this.data()[0].length&&(e.legend.show=!1),(0,i.each)(this.data()[0],function(t,n){n>0&&e.data.columns.push(this.dataset.selectColumn(n))}.bind(this))),!0===e.legend.show&&"right"===e.legend.position&&["gauge"].indexOf(t.replace("horizontal-",""))){e.data.color=function(t,e){var n;return this.view._artifacts.pagination&&"gauge"!==this.type()?(n=this.view._artifacts.pagination.labels,e.id&&n.indexOf(e.id)>-1||e&&!e.id&&n.indexOf(e)>-1?t:"donut"===this.type()||"pie"===this.type()?"rgba(0,0,0,.1)":"rgba(0,0,0,.07)"):t}.bind(this),e.tooltip={contents:f.default,format:{value:function(t,e,n,r){if(!this.view._artifacts.pagination||"gauge"===this.type())return t;if(this.view._artifacts.pagination.labels.indexOf(n)>-1)return t}.bind(this)}},e.legend.show=!1;var n=this.el().querySelector("."+this.theme()+"-rendering").offsetWidth-100;e.size.width=e.size.width||n,this.el().querySelector("."+this.theme()+"-rendering").setAttribute("style","margin-right: 120px;"),this.view._artifacts.c3=r.default.generate(e),s.default.call(this,e.data.columns)}else e.legend.show=!1,this.view._artifacts.c3=r.default.generate(e);else this.message("No data to display")},update:function(){this.render()},destroy:function(){this.view._artifacts.c3&&(this.view._artifacts.c3.destroy(),this.view._artifacts.c3=null)}}})}(),_};var r=p(n(51)),i=(p(n(37)),n(7)),a=n(33),o=n(50),u=p(n(34)),c=p(n(49)),s=p(n(48)),f=p(n(47)),l=p(n(46)),d=p(n(45)),h=p(n(43)),g=p(n(42));function p(t){return t&&t.__esModule?t:{default:t}}var _={message:l.default,metric:d.default,table:h.default,spinner:g.default}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return arguments.length?t instanceof a.default?(this.dataset=t,this):function(t){var e,n,r,i,c,s,f,l,d=[];n=this.indexBy()?this.indexBy():"timestamp.start",r=t.metadata||{},c=void 0!==t.query?t.query:{},"funnel"===(c=(0,o.extend)({analysis_type:null,event_collection:null,filters:[],group_by:null,interval:null,timeframe:null,timezone:null},c)).analysis_type?i="funnel":"extraction"===c.analysis_type?i="extraction":"select_unique"===c.analysis_type?c.group_by||c.interval||(i="list"):c.analysis_type&&(c.group_by||c.interval?c.group_by&&!c.interval?c.group_by instanceof Array&&c.group_by.length>1?(i="double-grouped-metric",d.push(c.group_by)):i="grouped-metric":c.interval&&!c.group_by?(i="interval",d.push(n)):c.group_by&&c.interval&&(c.group_by instanceof Array&&c.group_by.length>1?(i="double-grouped-interval",d.push(c.group_by),d.push(n)):(i="grouped-interval",d.push(n))):i="metric");i||("number"==typeof t.result&&(i="metric"),t.result instanceof Array&&t.result.length>0&&(!t.result[0].timeframe||"number"!=typeof t.result[0].value&&null!=t.result[0].value||(i="interval",d.push(n)),"number"==typeof t.result[0].result&&(i="grouped-metric"),t.result[0].value instanceof Array&&(i="grouped-interval",d.push(n)),"number"==typeof t.result[0]&&void 0!==t.steps&&(i="funnel",c.steps=t.steps),"string"!=typeof t.result[0]&&"number"!=typeof t.result[0]||void 0!==t.steps||(i="list"),i||(i="extraction")));this.title()||(f=r.display_name?r.display_name:function(t){var e,n=t.analysis_type?t.analysis_type.replace("_"," "):"";e=n.replace(/\b./g,function(t){return t.toUpperCase()}),t.event_collection&&(e+=" - "+t.event_collection);return e}(c),this.title(f));this.type()||(l=r.visualization&&r.visualization.chart_type?r.visualization.chart_type:function(t){var e=void 0;switch(t){case"metric":e="metric";break;case"interval":e="area";break;case"grouped-metric":case"double-grouped-metric":e="bar";break;case"grouped-interval":case"double-grouped-interval":e="line";break;case"funnel":e="horizontal-bar";break;case"list":case"extraction":default:e="table"}return e}(i),this.type(l));s=a.default.parser.apply(this,[i].concat(d)),e=s((0,o.extend)(t,{query:c})),i.indexOf("interval")>-1&&e.updateColumn(0,function(t,e){return new Date(t)});return e.updateRow(0,function(t,e){return(0,u.stripHtmlTags)(t)}),this.dataset=e,this}.call(this,t):this.dataset.data()};var r,i=n(40),a=(r=i)&&r.__esModule?r:{default:r},o=n(33),u=n(38)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.flatten=function t(e){var n={};for(var i in e)if(e.hasOwnProperty(i))if("object"==r(e[i])&&null!==e[i]){var a=t(e[i]);for(var o in a)a.hasOwnProperty(o)&&(n[i+"."+o]=a[o])}else n[i]=e[i];return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return a=t,function(t){var e=Array.prototype.slice.call(arguments,1);if(o[t])return o[t].apply(this,e);throw"Requested parser does not exist"}};var r=n(7),i=n(54),a=void 0;var o={metric:function(){return function(t){return(new a).set(["Value","Result"],t.result).type("metric")}},interval:function(){var t=Array.prototype.slice.call(arguments);return function(e){var n=(new a).type("interval");return(0,r.each)(e.result,function(e,r){var i=t[0]&&"timeframe.end"===t[0]?e.timeframe.end:e.timeframe.start;n.set(["Result",i],e.value)}),n}},"grouped-metric":function(){return function(t){var e=(new a).type("grouped-metric");return(0,r.each)(t.result,function(t,n){var i;(0,r.each)(t,function(t,e){"result"!==e&&(i=e)}),e.set(["Result",String(t[i])],t.result)}),e}},"grouped-interval":function(){var t=Array.prototype.slice.call(arguments);return function(e){var n=(new a).type("grouped-interval");return(0,r.each)(e.result,function(e,i){var a=t[0]&&"timeframe.end"===t[0]?e.timeframe.end:e.timeframe.start;e.value.length?(0,r.each)(e.value,function(t,e){var i;(0,r.each)(t,function(t,e){"result"!==e&&(i=e)}),n.set([String(t[i]),a],t.result)}):n.appendRow(a)}),n}},"double-grouped-metric":function(){var t=Array.prototype.slice.call(arguments);if(!t[0])throw"Requested parser requires a sequential list (array) of properties to target as a second argument";return function(e){var n=(new a).type("double-grouped-metric");return(0,r.each)(e.result,function(e,r){var i=e[t[0][0]]+" "+e[t[0][1]];n.set(["Result",i],e.result)}),n}},"double-grouped-interval":function(){var t=Array.prototype.slice.call(arguments);if(!t[0])throw"Requested parser requires a sequential list (array) of properties to target as a second argument";return function(e){var n=(new a).type("double-grouped-interval");return(0,r.each)(e.result,function(e,i){var a=t[1]&&"timeframe.end"===t[1]?e.timeframe.end:e.timeframe.start;(0,r.each)(e.value,function(e,r){var i=e[t[0][0]]+" "+e[t[0][1]];n.set([i,a],e.result)})}),n}},funnel:function(){return function(t){var e,n,i;return void 0!==t.steps&&void 0!==t.result&&t.result instanceof Array?(e=t.result,n=t.steps):void 0!==t.result.steps&&void 0!==t.result.result&&t.result.result instanceof Array&&(e=t.result.result,n=t.result.steps),(i=(new a).type("funnel")).appendColumn("Step Value"),(0,r.each)(e,function(t,e){void 0!==n&&n[e]&&i.appendRow(String(n[e].event_collection),[t])}),i}},list:function(){return function(t){var e=(new a).type("list");return(0,r.each)(t.result,function(t,n){e.set(["Result",String(n+1)],t)}),e}},extraction:function(){return function(t){var e=(new a).type("extraction");return(0,r.each)(t.result,function(t,n){(0,r.each)((0,i.flatten)(t),function(t,r){e.set([r,String(n+1)],t)})}),e.deleteColumn(0),e}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.updateColumn=function(t,e){var n=this,r="number"==typeof t?t:this.matrix[0].indexOf(t);r>-1&&("function"==typeof e?(0,i.each)(n.data(),function(t,i){var a;i>0&&void 0!==(a=e.call(n,t[r],i,t))&&(n.matrix[i][r]=a)}):(!e||e instanceof Array)&&((e=e||[]).length<=n.data().length-1?e=e.concat((0,o.default)(n.data().length-1-e.length)):(0,i.each)(e,function(t,r){n.matrix.length-1<e.length&&u.appendRow.call(n,String(n.matrix.length))}),(0,i.each)(e,function(t,e){n.matrix[e+1][r]=t})));return n},e.updateRow=function(t,e){var n=this,r="number"==typeof t?t:this.selectColumn(0).indexOf(t);r>-1&&("function"==typeof e?(0,i.each)(n.data()[r],function(t,i){var a=n.selectColumn(i),o=e.call(n,t,i,a);void 0!==o&&(n.matrix[r][i]=o)}):(!e||e instanceof Array)&&((e=e||[]).length<=n.matrix[0].length-1?e=e.concat((0,o.default)(n.matrix[0].length-1-e.length)):(0,i.each)(e,function(t,r){n.matrix[0].length-1<e.length&&u.appendColumn.call(n,String(n.matrix[0].length))}),(0,i.each)(e,function(t,e){n.matrix[r][e+1]=t})));return n};var r,i=n(7),a=n(35),o=(r=a)&&r.__esModule?r:{default:r},u=n(36)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sortColumns=function(t,e){var n=this,r=this.matrix[0].slice(1),a=[],u=e||o.default.getColumnLabel;return(0,i.each)(r,function(t,e){a.push(n.selectColumn(e+1).slice(0))}),a.sort(function(e,r){var i=u.call(n,e)>u.call(n,r);return i?"asc"===t?1:-1:i?0:"asc"===t?-1:1}),(0,i.each)(a,function(t,e){n.deleteColumn(e+1).insertColumn(e+1,t[0],t.slice(1))}),n},e.sortRows=function(t,e){var n=this,r=this.matrix.slice(0,1),i=this.matrix.slice(1),a=e||o.default.getRowIndex;return i.sort(function(e,r){var i=a.call(n,e)>a.call(n,r);return i?"asc"===t?1:-1:i?0:"asc"===t?-1:1}),n.data(r.concat(i)),n};var r,i=n(7),a=n(39),o=(r=a)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.selectColumn=function(t){var e=[],n="number"==typeof t?t:this.matrix[0].indexOf(t);n>-1&&void 0!==this.matrix[0][n]&&(0,r.each)(this.matrix,function(t,r){e.push(t[n])});return e},e.selectRow=function(t){var e=[],n="number"==typeof t?t:this.selectColumn(0).indexOf(t);n>-1&&void 0!==this.matrix[n]&&(e=this.matrix[n]);return e};var r=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertColumn=function(t,e,n){var r=this,a=void 0!==e?e:null;"function"==typeof n?(r.matrix[0].splice(t,0,a),(0,i.each)(r.matrix,function(e,i){var a;i>0&&(void 0===(a=n.call(r,e,i))&&(a=null),r.matrix[i].splice(t,0,a))})):(!n||n instanceof Array)&&((n=n||[]).length<=r.matrix.length-1?n=n.concat((0,o.default)(r.matrix.length-1-n.length)):(0,i.each)(n,function(t,e){r.matrix.length-1<n.length&&u.appendRow.call(r,String(r.matrix.length))}),r.matrix[0].splice(t,0,a),(0,i.each)(n,function(e,n){r.matrix[n+1].splice(t,0,e)}));return r},e.insertRow=function(t,e,n){var r=this,a=[],c=void 0!==e?e:null;a.push(c),"function"==typeof n?((0,i.each)(r.matrix[0],function(t,e){var i=void 0,o=void 0;e>0&&(i=r.selectColumn(e),void 0===(o=n.call(r,i,e))&&(o=null),a.push(o))}),r.matrix.splice(t,0,a)):(!n||n instanceof Array)&&((n=n||[]).length<=r.matrix[0].length-1?n=n.concat((0,o.default)(r.matrix[0].length-1-n.length)):(0,i.each)(n,function(t,e){r.matrix[0].length-1<n.length&&u.appendColumn.call(r,String(r.matrix[0].length))}),r.matrix.splice(t,0,a.concat(n)));return r};var r,i=n(7),a=n(35),o=(r=a)&&r.__esModule?r:{default:r},u=n(36)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.filterColumns=function(t){var e=this,n=[];return(0,r.each)(e.matrix,function(t,e){n.push([])}),(0,r.each)(e.matrix[0],function(i,a){var o=e.selectColumn(a);(0==a||t.call(e,o,a))&&(0,r.each)(o,function(t,e){n[e].push(t)})}),e.data(n),e},e.filterRows=function(t){var e=this,n=[];return(0,r.each)(e.matrix,function(r,i){(0==i||t.call(e,r,i))&&n.push(r)}),e.data(n),e};var r=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deleteColumn=function(t){var e=this,n="number"==typeof t?t:this.matrix[0].indexOf(t);n>-1&&(0,r.each)(e.matrix,function(t,r){e.matrix[r].splice(n,1)});return e},e.deleteRow=function(t){var e="number"==typeof t?t:this.selectColumn(0).indexOf(t);e>-1&&this.matrix.splice(e,1);return this};var r=n(7)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Dataset=e.Dataviz=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(40);Object.defineProperty(e,"Dataset",{enumerable:!0,get:function(){return i.Dataset}});var a=l(n(53)),o=n(7),u=l(n(34)),c=n(38),s=n(32),f=l(n(52));function l(t){return t&&t.__esModule?t:{default:t}}var d=e.Dataviz=function t(){if(this instanceof t==!1)return new t;this.dataset=new i.Dataset,this.view={_prepared:!1,_rendered:!1,_artifacts:{},chartOptions:{},colors:["#00bbde","#fe6672","#eeb058","#8a8ad6","#ff855c","#00cfbb","#5a9eed","#73d483","#c879bb","#0099b6","#d74d58","#cb9141","#6b6bb6","#d86945","#00aa99","#4281c9","#57b566","#ac5c9e","#27cceb","#ff818b","#f6bf71","#9b9be1","#ff9b79","#26dfcd","#73aff4","#87e096","#d88bcb"],colorMapping:{},dateFormat:void 0,el:void 0,height:void 0,indexBy:"timeframe.start",labels:[],labelMapping:{},library:"default",notes:void 0,sortGroups:void 0,sortIntervals:void 0,stacked:!1,theme:"keen-dataviz",title:void 0,type:void 0,width:void 0},t.visuals.push(this)};function h(t){"undefined"==typeof document&&"undefined"!=typeof window?(null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t,!1),document.readyState="complete"},!1),document.readyState="loading"),function t(e){/in/.test(document.readyState)?setTimeout(function(){t(e)},9):e()}(t)):t()}d.libraries={default:{}},"undefined"!=typeof window&&(d.libraries.default=(0,f.default)(d)),d.visuals=[],d.register=function(t,e){d.libraries[t]=d.libraries[t]||{},(0,o.each)(e,function(e,n){d.libraries[t][n]=e})},d.find=function(t){if(!arguments.length)return d.visuals;var e=t.nodeName?t:document.querySelector(t),n=null;return(0,o.each)(d.visuals,function(t){if(e==t.el())return n=t,!1}),n},d.prototype.attributes=function(t){if(!arguments.length)return this.view;var e=this.view;return(0,o.each)(t,function(t,n){"chartType"===n&&(n="type"),e[n]=t}),this},d.prototype.call=function(t){return t.call(this),this},d.prototype.chartOptions=function(t){var e=this;return arguments.length?(null===t?this.view.chartOptions={}:"object"===(void 0===t?"undefined":r(t))&&(0,o.each)(t,function(t,n){e.view.chartOptions[n]=t||null}),this):this.view.chartOptions},d.prototype.colors=function(t){return arguments.length?(this.view.colors=t instanceof Array?t:[],this):this.view.colors},d.prototype.colorMapping=function(t){var e=this;return arguments.length?(null===t?this.view.colorMapping={}:"object"===(void 0===t?"undefined":r(t))&&(0,o.each)(t,function(t,n){e.view.colorMapping[n]=t||null}),this):this.view.colorMapping},d.prototype.data=a.default,d.prototype.dateFormat=function(t){return arguments.length?(this.view.dateFormat="string"==typeof t||"function"==typeof t?t:void 0,this):this.view.dateFormat},d.prototype.destroy=function(){var t=this.library(),e=this.type(),n=this.el();return d.libraries[t]&&d.libraries[t][e]&&d.libraries[t][e].destroy.call(this),n&&(n.innerHTML=""),this.view._prepared=!1,this.view._rendered=!1,this.view._artifacts={},this},d.prototype.el=function(t){var e=this;return arguments.length?(h(function(){t&&null!==t?t.nodeName?e.view.el=t:document.querySelector&&(e.view.el=document.querySelector(t)):e.view.el=void 0}),this):this.view.el},d.prototype.height=function(t){return arguments.length?(this.view.height=isNaN(parseInt(t))?null:parseInt(t),this):this.view.height},d.prototype.indexBy=function(t){return arguments.length?(this.view.indexBy=t?String(t):"timeframe.start",this):this.view.indexBy},d.prototype.labels=function(t){return arguments.length?(this.view.labels=t instanceof Array?t:[],2!==this.data()[0].length||(0,u.default)(this.data()[1][0])?this.dataset.updateRow(0,function(t,e){return e>0&&this.view.labels[e-1]?(0,c.stripHtmlTags)(String(this.view.labels[e-1])):(0,c.stripHtmlTags)(t)}.bind(this)):this.dataset.updateColumn(0,function(t,e){return this.view.labels[e-1]?(0,c.stripHtmlTags)(String(this.view.labels[e-1])):(0,c.stripHtmlTags)(t)}.bind(this)),this):this.view.labels},d.prototype.labelMapping=function(t){return arguments.length?(null===t?this.view.labelMapping={}:"object"===(void 0===t?"undefined":r(t))&&(0,o.each)(t,function(t,e){this.view.labelMapping[e]=t||null}.bind(this)),2!==this.data()[0].length||(0,u.default)(this.data()[1][0])?this.dataset.updateRow(0,function(t){return this.view.labelMapping[t]?(0,c.stripHtmlTags)(String(this.view.labelMapping[t])):(0,c.stripHtmlTags)(t)}.bind(this)):this.dataset.updateColumn(0,function(t){return this.view.labelMapping[t]?(0,c.stripHtmlTags)(String(this.view.labelMapping[t])):(0,c.stripHtmlTags)(t)}.bind(this)),this):this.view.labelMapping},d.prototype.library=function(t){return arguments.length?(this.view.library=t?String(t):null,this):this.view.library},d.prototype.message=function(){if(this.view._rendered&&this.destroy(),this.el()){this.el().innerHTML="";var t=d.libraries.default.message;t.render&&t.render.apply(this,arguments)}return this},d.prototype.notes=function(t){return arguments.length?(this.view.notes=t?String(t):null,this):this.view.notes},d.prototype.prepare=function(){var t,e=this;if(!this.el())throw"A DOM element is required. Check out the .el() method.";return h(function(){e.view._rendered&&e.destroy(),e.el()&&(e.el().innerHTML="",(t=d.libraries.default.spinner).render&&t.render.call(e),e.view._prepared=!0)}),this},d.prototype.render=function(){var t=this,e=d.libraries.default.spinner,n=this.library(),r=this.type();this.el();if(!this.el())throw this.message("A DOM element is required. Check out the .el() method."),"A DOM element is required. Check out the .el() method.";if(!this.type())throw this.message("A chart type is required. Check out the .type() method."),"A chart type is required. Check out the .type() method.";return h(function(){if(t.view._prepared&&e.destroy&&e.destroy.apply(t,arguments),t.el().innerHTML="","undefined"===d.libraries[n])throw t.message("Incorrect library"),"Incorrect library";if(void 0===d.libraries[n][r])throw t.message("Incorrect chart type"),"Incorrect chart type";!function(t,e){var n="";n+='<div class="'+e.theme+'">',e.title&&(n+='<div class="'+e.theme+'-title">'+(0,s.escapeHtml)(e.title)+"</div>");n+='<div class="'+e.theme+'-stage"><div class="'+e.theme+'-rendering"></div></div>',e.notes&&(n+='<div class="'+e.theme+'-notes">'+(0,s.escapeHtml)(e.notes)+"</div>");n+="</div>",t.innerHTML=n}(t.el(),{notes:t.notes(),theme:t.theme(),title:t.title()}),d.libraries[n][r].render.call(t),t.view._rendered=!0}),this},d.prototype.sortGroups=function(t){return arguments.length?(this.view.sortGroups=t?String(t):null,this.view.sortGroups&&this.data().length>1&&((0,u.default)(this.data()[1][0])?this.dataset.sortColumns(this.view.sortGroups,this.dataset.getColumnSum):this.dataset.sortRows(this.view.sortGroups,this.dataset.getRowSum)),this):this.view.sortGroups},d.prototype.sortIntervals=function(t){return arguments.length?(this.view.sortIntervals=t?String(t):null,this.view.sortIntervals&&this.dataset.sortRows(this.view.sortIntervals),this):this.view.sortIntervals},d.prototype.stacked=function(t){return arguments.length?(this.view.stacked=!!t,this):this.view.stacked},d.prototype.theme=function(t){return arguments.length?(this.view.theme=t?String(t):null,this):this.view.theme},d.prototype.title=function(t){return arguments.length?(this.view.title=t?String(t):null,this):this.view.title},d.prototype.type=function(t){return arguments.length?(this.view.type=t?function(t){return{areachart:"area",barchart:"horizontal-bar",columnchart:"bar",linechart:"line",piechart:"pie"}[t]||t}(t):null,this):this.view.type},d.prototype.update=function(){var t=this.library(),e=this.type(),n=this.el();return t&&e&&n&&d.libraries[t][e].update&&d.libraries[t][e].update.apply(this,arguments),this},d.prototype.width=function(t){return arguments.length?(this.view.width=isNaN(parseInt(t))?null:parseInt(t),this):this.view.width},d.prototype.chartType=d.prototype.type,d.prototype.error=d.prototype.message,d.prototype.parseRawData=d.prototype.data,d.prototype.parseRequest=function(){return this},d.prototype.initialize=function(){return this},e.default=d},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.Dataset=e.Dataviz=e.extendKeenGlobalObject=void 0;var r=n(62);Object.defineProperty(e,"Dataviz",{enumerable:!0,get:function(){return r.Dataviz}}),Object.defineProperty(e,"Dataset",{enumerable:!0,get:function(){return r.Dataset}});var i=void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};(e.extendKeenGlobalObject=function(t){t.Keen=t.Keen||{},t.Keen.Dataset=r.Dataset,t.Keen.Dataviz=r.Dataviz})(i),e.default=r.Dataviz}).call(this,n(63))}])});
//# sourceMappingURL=keen-dataviz.min.js.map
})((function(){ function newDefine(){ var args = Array.prototype.slice.call(arguments); args.unshift("keen-dataviz"); return define.apply(null, args); }; newDefine.amd = true; return newDefine; })());//# sourceMappingURL=/ember-osf-web/engines-dist/analytics-page/assets/engine-vendor-97575da220a1919659de26fc346f0950.map
