/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var CssClasses;
(function (CssClasses) {
    CssClasses["SHOWN"] = "mdc-tooltip--shown";
    CssClasses["SHOWING"] = "mdc-tooltip--showing";
    CssClasses["SHOWING_TRANSITION"] = "mdc-tooltip--showing-transition";
    CssClasses["HIDE"] = "mdc-tooltip--hide";
    CssClasses["HIDE_TRANSITION"] = "mdc-tooltip--hide-transition";
})(CssClasses || (CssClasses = {}));
var numbers = {
    BOUNDED_ANCHOR_GAP: 4,
    UNBOUNDED_ANCHOR_GAP: 8,
    MIN_VIEWPORT_TOOLTIP_THRESHOLD: 32,
    HIDE_DELAY_MS: 600,
};
var events = {
    HIDDEN: 'MDCTooltip:hidden',
};
/** Enum for possible tooltip positioning relative to its anchor element. */
var Position;
(function (Position) {
    Position[Position["DETECTED"] = 0] = "DETECTED";
    Position[Position["START"] = 1] = "START";
    Position[Position["CENTER"] = 2] = "CENTER";
    Position[Position["END"] = 3] = "END";
})(Position || (Position = {}));
/**
 * Enum for possible anchor boundary types. This determines the gap between the
 * bottom of the anchor and the tooltip element.
 * Bounded anchors have an identifiable boundary (e.g. buttons).
 * Unbounded anchors don't have a visually declared boundary (e.g. plain text).
 */
var AnchorBoundaryType;
(function (AnchorBoundaryType) {
    AnchorBoundaryType[AnchorBoundaryType["BOUNDED"] = 0] = "BOUNDED";
    AnchorBoundaryType[AnchorBoundaryType["UNBOUNDED"] = 1] = "UNBOUNDED";
})(AnchorBoundaryType || (AnchorBoundaryType = {}));
export { CssClasses, numbers, events, Position, AnchorBoundaryType };
//# sourceMappingURL=constants.js.map