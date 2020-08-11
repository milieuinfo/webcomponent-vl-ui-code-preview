import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlCodePreview
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-code-preview/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-code-preview/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-code-preview.html|Demo}
 *
 */
export class VlCodePreview extends vlElement(HTMLElement) {}

define('vl-code-preview', VlCodePreview);
