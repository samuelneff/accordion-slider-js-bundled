
declare interface AccordionSliderConstructor {
  new(id: string, options: AccordionSliderOptions): AccordionSlider;
}

declare interface AccordionSlider {
  /**
    * Gets all the data of the panel at the specified index. Returns an object that contains all the data specified for that panel.
   */
  getPanelAt(index: number): number;

  /**
    * Gets the index of the current panel.
   */
  getCurrentIndex(): number;

  /**
    * Gets the total number of panels.
   */
  getTotalPanels(): number;

  /**
    * Opens the next panel.
   */
  nextPanel(): void;

  /**
    * Opens the previous panel.
   */
  previousPanel(): void;

  /**
    * Opens the panel at the specified index.
   */
  openPanel(index: number): void;

  /**
    * Closes all the panels.
   */
  closePanels(): void;

  /**
    * Gets the number of visible panels.
   */
  getVisiblePanels(): number;

  /**
    * Gets the number of pages.
   */
  getTotalPages(): number;

  /**
    * Gets the index of the page currently displayed.
   */
  getCurrentPage(): number;

  /**
    * Scrolls to the specified page.
   */
  gotoPage(index: number): void;

  /**
    * Goes to the next page.
   */
  nextPage(): void;

  /**
    * Goes to the previous page.
   */
  previousPage(): void;

  /**
    * Destroys an accordion by removing all the visual elements and functionality added by the plugin. Basically, it
    * leaves the accordion in the state it was before the plugin was instantiated.
   */
  destroy(): void;

  /**
    * This is called by the plugin automatically when a property is changed. You can call this manually in order to
    * refresh the accordion after changing its HTML, like removing or adding panels.
   */
  update(): void;

  /**
    * This is called by the plugin automatically, when the browser window is resized. You can also call it manually if
    * you find it necessary to have the accordion resize itself.
   */
  resize(): void;


  /**
    * Triggered before the accordion begins its initialization.
   */
  addEventListener(type: 'beforeInit', handler: (event: Event) => void): void;

  /**
    * Triggered after the accordion was setup.
   */
  addEventListener(type: 'init', handler: (event: Event) => void): void;

  /**
    * Triggered before the accordion is updates.
   */
  addEventListener(type: 'beforeUpdate', handler: (event: Event) => void): void;

  /**
    * Triggered when the 'update' method is called, either automatically or manually.
   */
  addEventListener(type: 'update', handler: (event: Event) => void): void;

  /**
    * Triggered before the accordion is resized.
   */
  addEventListener(type: 'beforeResize', handler: (event: Event) => void): void;

  /**
    * Triggered when the 'resize' method is called, either automatically or manually.
   */
  addEventListener(type: 'resize', handler: (event: Event) => void): void;

  /**
    * Triggered when the mouse pointer moves over the accordion.
   */
  addEventListener(type: 'accordionMouseOver', handler: (event: Event) => void): void;

  /**
    * Triggered when the mouse pointer leaves the accordion.
   */
  addEventListener(type: 'accordionMouseOut', handler: (event: Event) => void): void;

  /**
    * Triggered when a panel is clicked.Available details: index: the index of the clicked panel
   */
  addEventListener(type: 'panelClick', handler: (event: AccordionSliderIndexEvent) => void): void;

  /**
    * Triggered when the mouse pointer moves over a panel. Available details: index: the index of the panel over which the mouse pointer has moved
   */
  addEventListener(type: 'panelMouseOver', handler: (event: AccordionSliderIndexEvent) => void): void;

  /**
    * Triggered when the mouse pointer leaves a panel. Available details: index: the index of panel from which the mouse pointer has moved away
   */
  addEventListener(type: 'panelMouseOut', handler: (event: AccordionSliderIndexEvent) => void): void;

  /**
    * Triggered when a panel is opened. Available details: index: the index of the opened panel<br/>*previousIndex*: the index of the previously opened panel
   */
  addEventListener(type: 'panelOpen', handler: (event: AccordionSliderIndexEvent) => void): void;

  /**
    * Triggered when the panels are closed. <br>Available details:<br>*previousIndex*: the index of the previously opened panel
   */
  addEventListener(type: 'panelsClose', handler: (event: Event) => void): void;

  /**
    * Triggered when the accordion scrolls to another page. Available details: index: the index of the current page
   */
  addEventListener(type: 'pageScroll', handler: (event: AccordionSliderIndexEvent) => void): void;

  /**
    * Triggered when the opening of a panel is completed. Available details: index: the index of the opened panel
   */
  addEventListener(type: 'panelOpenComplete', handler: (event: AccordionSliderIndexEvent) => void): void;

  /**
    * Triggered when the closing of the panels is completed. <br>Available details:<br>*previousIndex*: the index of the previously opened panel
   */
  addEventListener(type: 'panelsCloseComplete', handler: (event: Event) => void): void;

  /**
    * Triggered when the scroll to a page is completed. Available details: index: the index of the current page
   */
  addEventListener(type: 'pageScrollComplete', handler: (event: AccordionSliderIndexEvent) => void): void;


  /**
    Removes a previously registered `beforeInit` handler.
   */
  removeEventListener(type: 'beforeInit', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `init` handler.
   */
  removeEventListener(type: 'init', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `beforeUpdate` handler.
   */
  removeEventListener(type: 'beforeUpdate', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `update` handler.
   */
  removeEventListener(type: 'update', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `beforeResize` handler.
   */
  removeEventListener(type: 'beforeResize', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `resize` handler.
   */
  removeEventListener(type: 'resize', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `accordionMouseOver` handler.
   */
  removeEventListener(type: 'accordionMouseOver', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `accordionMouseOut` handler.
   */
  removeEventListener(type: 'accordionMouseOut', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `panelClick` handler.
   */
  removeEventListener(type: 'panelClick', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `panelMouseOver` handler.
   */
  removeEventListener(type: 'panelMouseOver', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `panelMouseOut` handler.
   */
  removeEventListener(type: 'panelMouseOut', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `panelOpen` handler.
   */
  removeEventListener(type: 'panelOpen', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `panelsClose` handler.
   */
  removeEventListener(type: 'panelsClose', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `pageScroll` handler.
   */
  removeEventListener(type: 'pageScroll', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `panelOpenComplete` handler.
   */
  removeEventListener(type: 'panelOpenComplete', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `panelsCloseComplete` handler.
   */
  removeEventListener(type: 'panelsCloseComplete', handler: (event: Event) => void): void;

  /**
    Removes a previously registered `pageScrollComplete` handler.
   */
  removeEventListener(type: 'pageScrollComplete', handler: (event: Event) => void): void;
}

declare interface AccordionSliderOptions {

  /**
    * Sets the width of the accordion. Can be set to a fixed value, like 900 (indicating 900 pixels), or to a
    * percentage value, like '100%'. It's important to note that percentage values need to be specified inside
    * quotes. For fixed values, the quotes are not necessary. Default 800.
   */
  width?: number | string;

  /**
    * Sets the height of the accordion. The same rules available for the 'width' property also apply for the 'height'
    * property. Default 400.
   */
  height?: number | string;

  /**
    * Makes the accordion responsive. The accordion can be responsive even if the 'width' and/or 'height' properties
    * are set to fixed values. In this situation, 'width' and 'height' will act as the maximum width and height of the
    * accordion. Default true.
   */
  responsive?: boolean;

  /**
    * Sets the responsive mode of the accordion. Possible values are 'auto' and 'custom'. 'auto' resizes the accordion
    * and all of its elements (e.g., layers, videos) automatically, while 'custom' resizes only the accordion container
    * and panels, and you are given flexibility over the way inner elements (e.g., layers, videos) will respond to
    * smaller sizes. For example, you could use CSS media queries to define different text sizes or to hide certain
    * elements when the accordion becomes smaller, ensuring that all content remains readable without having to zoom in.
    *
    * It's important to note that, if 'auto' responsiveness is used, the 'width' and 'height' need to be set to fixed
    * values, so that the accordion can calculate correctly how much it needs to scale. Default 'auto'.
   */
  responsiveMode?: 'auto' | 'custom';

  /**
    * Sets the aspect ratio of the accordion. The accordion will set its height depending on what value its width has,
    * so that this ratio is maintained. For this reason, the set 'height' might be overridden. This property can be used
    * only when 'responsiveMode' is set to 'custom'. When it's set to 'auto', the 'aspectRatio' needs to remain -1.
    * Default -1.
   */
  aspectRatio?: number;

  /**
    * Sets the orientation of the panels. Possible values are 'horizontal' and 'vertical'. Default 'horizontal'.
   */
  orientation?: AccordionSliderOrientation;

  /**
    * Indicates which panel will be opened when the accordion loads (0 for the first panel, 1 for the second panel,
    * etc.). If set to -1, no panel will be opened. Default -1.
   */
  startPanel?: number;

  /**
    * Sets the size (width if the accordion's orientation is horizontal; height if the accordion's orientation is
    * vertical) of the opened panel. Possible values are: 'max', which will open the panel to its maximum size, so that
    * all the inner content is visible, a percentage value, like '50%', which indicates the percentage of the total size
    * (width or height, depending on the orientation) of the accordion, or a fixed value. Default 'max'.
   */
  openedPanelSize?: 'max' | number | string;

  /**
    * Sets the maximum allowed size of the opened panel. This should be used when the 'openedPanelSize' is set to 'max',
    *  because sometimes the maximum size of the panel might be too big and we want to set a limit. The property can be
    * set to a percentage (of the total size of the accordion) or to a fixed value. Default '80%'.
   */
  maxOpenedPanelSize?: number | string;

  /**
    * If set to 'hover', the panels will be opened by moving the mouse pointer over them; if set to 'click', the panels
    *  will open when clicked. Can also be set to 'never' to disable the opening of the panels. Default 'hover'.
   */
  openPanelOn?: 'hover' | 'click';

  /**
    * Determines whether the opened panel closes or remains open when the mouse pointer is moved away. Default true.
   */
  closePanelsOnMouseOut?: boolean;

  /**
    * Sets the delay in milliseconds between the movement of the mouse pointer and the opening of the panel. Setting a
    *  delay ensures that panels are not opened if the mouse pointer only moves over them without an intent to open the
    *  panel. Default 200.
   */
  mouseDelay?: number;

  /**
    * Sets the distance between consecutive panels. Can be set to a percentage or fixed value. Default 0.
   */
  panelDistance?: number;

  /**
    * Determines the duration in milliseconds for the opening of a panel. Default 700.
   */
  openPanelDuration?: number;

  /**
    * Determines the duration in milliseconds for the closing of a panel. Default 700.
   */
  closePanelDuration?: number;

  /**
    * Indicates the duration of the page scroll. Default 500.
   */
  pageScrollDuration?: number;

  /**
    * Indicates the number of panels visible per page. If set to -1, all the panels will be displayed on one page.
    * Default -1.
   */
  visiblePanels?: number;

  /**
    * Indicates which page will be opened when the accordion loads, if the panels are displayed on more than one page.
    * Default 0.
   */
  startPage?: number;

  /**
    * Indicates if the panels will have a drop shadow effect. Default true.
   */
  shadow?: boolean;

  /**
    * Indicates if the panels will be overlapped. If set to false, the panels will have their width or height set so
    * that they are next to each other, but not overlapped. Default true.
   */
  panelOverlap?: boolean;

  /**
    * Indicates if the panels will be shuffled/randomized. Default false.
   */
  shuffle?: boolean;

  // Add-on options

  /**
    * If the add-ons are imported as modules, each module needs to be added to this array. Default [].
   */
  addOns?: AccordionSliderAddOn[];

  /**
    * Sets specific breakpoints which allow changing the look and behavior of the accordion when the page resizes.
    * Default null.
   */
  breakpoints?: Record<number, AccordionSliderBreakpoint>;

  /**
    * Indicates if the autoplay will be enabled. Default true.
   */
  autoplay?: boolean;

  /**
    * Sets the delay, in milliseconds, of the autoplay cycle. Default 5000.
   */
  autoplayDelay?: number;

  /**
    * Sets the direction in which the panels will be opened. Can be set to 'normal' (ascending order) or 'backwards'
    * (descending order). Default 'normal'.
   */
  autoplayDirection?: 'normal' | 'backwards';

  /**
    * Indicates if the autoplay will be paused or stopped when the accordion is hovered. Can be set to 'pause', 'stop'
    * or 'none'. Default 'pause'.
   */
  autoplayOnHover?: 'pause' | 'stop' |'none';

  /**
    * Indicates if the accordion will respond to mouse wheel input. Default true.
   */
  mouseWheel?: boolean;

  /**
    * Sets how sensitive the accordion will be to mouse wheel input. Lower values indicate stronger sensitivity.
    * Default 50.
   */
  mouseWheelSensitivity?: number;

  /**
    * Sets what elements will be targeted by the mouse wheel input. Can be set to 'panel' or 'page'. Setting it to
    * 'panel' will indicate that the panels will be scrolled, while setting it to 'page' indicate that the pages will
    * be scrolled. Default 'panel'.
   */
  mouseWheelTarget?: 'panel' | 'page';

  /**
    * Indicates if the accordion will respond to keyboard input. Default true.
   */
  keyboard?: boolean;

  /**
    * Indicates if the accordion will respond to keyboard input only if the accordion has focus. Default false.
   */
  keyboardOnlyOnFocus?: boolean;

  /**
    * Sets what elements will be targeted by the keyboard input. Can be set to 'panel' or 'page'. Setting it to
    * 'panel' will indicate that the panels will be scrolled, while setting it to 'page' indicate that the pages will
    * be scrolled. Default 'panel'.
   */
  keyboardTarget?: 'panel' | 'page';

  /**
    * Enables button controls below the accordion. Default true.
   */
  buttons?: boolean;

  /**
    * Sets the duration, in milliseconds, of the transition effect. Default 700.
   */
  swapBackgroundDuration?: number;

  /**
    * Indicates if the main image background will be faded out when the opened/alternative background fades in.
    * Default false.
   */
  fadeOutBackground?: boolean;

  /**
    * Indicates if the touch swipe functionality will be enabled. Default true.
   */
  touchSwipe?: boolean;

  /**
    * Sets how many pixels the distance of the swipe gesture needs to be in order to trigger a page change. Default 50.
   */
  touchSwipeThreshold?: number;

  /**
    * Sets what the video will do when the panel is opened. Can be set to 'playVideo' or 'none'. Default 'playVideo'.
   */
  openPanelVideoAction?: 'playVideo' | 'none';

  /**
    * Sets what the video will do when the panel is closed. Can be set to 'pauseVideo' or 'stopVideo.' Default
    * 'pauseVideo'.
   */
  closePanelVideoAction?: number;

  /**
    * Sets what the accordion will do when a video starts playing. Can be set to 'stopAutoplay' or 'none'. Default
    * 'stopAutoplay'.
   */
  playVideoAction?: number;

  /**
    * Sets what the accordion will do when a video is paused. Can be set to 'startAutoplay' or 'none'. Default 'none'.
   */
  pauseVideoAction?: 'startAutoplay' | 'none';

  /**
    * Sets what the accordion will do when a video ends. Can be set to 'startAutoplay', 'nextPanel', 'replayVideo' or
    * 'none'. Default 'none'.
   */
  endVideoAction?: 'startAutoplay' | 'nextPanel' | 'replayVideo' | 'none';
}

declare interface AccordionSliderBreakpoint {
  visiblePanels?: number;
  orientation?: AccordionSliderOrientation;
  width?: 'max' | string | number;
  height?: 'max' | string | number;
  aspectRatio?: number;
}

declare type AccordionSliderOrientation = 'horizontal' | 'vertical';

declare interface AccordionSliderEvent<AvailableDetail> extends Event {
  detail: AvailableDetail;
}

declare interface AvailableDetailIndex {
  index: number;
}

declare interface AvailableDetailPreviousIndex {
  previousIndex: number;
}

declare interface AccordionSliderIndexEvent extends AccordionSliderEvent<AvailableDetailIndex> { }
declare interface AccordionSliderPreviousIndexEvent extends AccordionSliderEvent<AvailableDetailPreviousIndex> { }

declare interface AccordionSliderAddOn { }

declare const AccordionSlider: AccordionSliderConstructor;

declare const Autoplay: AccordionSliderAddOn;
declare const Breakpoints: AccordionSliderAddOn;
declare const Buttons: AccordionSliderAddOn;
declare const DeepLinking: AccordionSliderAddOn;
declare const Keyboard: AccordionSliderAddOn;
declare const Layers: AccordionSliderAddOn;
declare const LazyLoading: AccordionSliderAddOn;
declare const Retina: AccordionSliderAddOn;
declare const TouchSwipe: AccordionSliderAddOn;
declare const SwapBackground: AccordionSliderAddOn;
declare const MouseWheel: AccordionSliderAddOn;
declare const Video: AccordionSliderAddOn;
