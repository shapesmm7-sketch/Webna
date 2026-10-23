import { n as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mergeClasses = (...classes) =>
  classes
    .filter((className, index, array) => {
      return (
        Boolean(className) &&
        className.trim() !== "" &&
        array.indexOf(className) === index
      );
    })
    .join(" ")
    .trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toKebabCase = (string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toCamelCase = (string) =>
  string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase(),
  );
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hasA11yProp = (props) => {
  for (const prop in props)
    if (prop.startsWith("aria-") || prop === "role" || prop === "title")
      return true;
  return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Icon = (0, import_react.forwardRef)(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    },
    ref,
  ) =>
    (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth,
        className: mergeClasses("lucide", className),
        ...(!children && !hasA11yProp(rest) && { "aria-hidden": "true" }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs]) =>
          (0, import_react.createElement)(tag, attrs),
        ),
        ...(Array.isArray(children) ? children : [children]),
      ],
    ),
);
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(
    ({ className, ...props }, ref) =>
      (0, import_react.createElement)(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className,
        ),
        ...props,
      }),
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Activity = createLucideIcon("activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowLeft = createLucideIcon("arrow-left", [
  [
    "path",
    {
      d: "m12 19-7-7 7-7",
      key: "1l729n",
    },
  ],
  [
    "path",
    {
      d: "M19 12H5",
      key: "x3x0zl",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ArrowRight = createLucideIcon("arrow-right", [
  [
    "path",
    {
      d: "M5 12h14",
      key: "1ays0h",
    },
  ],
  [
    "path",
    {
      d: "m12 5 7 7-7 7",
      key: "xquz4c",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bell = createLucideIcon("bell", [
  [
    "path",
    {
      d: "M10.268 21a2 2 0 0 0 3.464 0",
      key: "vwvbt9",
    },
  ],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bookmark = createLucideIcon("bookmark", [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
      key: "oz39mx",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Check = createLucideIcon("check", [
  [
    "path",
    {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ChevronLeft = createLucideIcon("chevron-left", [
  [
    "path",
    {
      d: "m15 18-6-6 6-6",
      key: "1wnfg3",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ChevronRight = createLucideIcon("chevron-right", [
  [
    "path",
    {
      d: "m9 18 6-6-6-6",
      key: "mthhwq",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleAlert = createLucideIcon("circle-alert", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh",
    },
  ],
  [
    "line",
    {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CircleCheck = createLucideIcon("circle-check", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "m9 12 2 2 4-4",
      key: "dzmm74",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CirclePlay = createLucideIcon("circle-play", [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Clock = createLucideIcon("clock", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "M12 6v6l4 2",
      key: "mmk7yg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Compass = createLucideIcon("compass", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Copy = createLucideIcon("copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var CreditCard = createLucideIcon("credit-card", [
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "5",
      rx: "2",
      key: "ynyp8z",
    },
  ],
  [
    "line",
    {
      x1: "2",
      x2: "22",
      y1: "10",
      y2: "10",
      key: "1b3vmo",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Database = createLucideIcon("database", [
  [
    "ellipse",
    {
      cx: "12",
      cy: "5",
      rx: "9",
      ry: "3",
      key: "msslwz",
    },
  ],
  [
    "path",
    {
      d: "M3 5V19A9 3 0 0 0 21 19V5",
      key: "1wlel7",
    },
  ],
  [
    "path",
    {
      d: "M3 12A9 3 0 0 0 21 12",
      key: "mv7ke4",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Disc = createLucideIcon("disc", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "2",
      key: "1c9p78",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Download = createLucideIcon("download", [
  [
    "path",
    {
      d: "M12 15V3",
      key: "m9g1x1",
    },
  ],
  [
    "path",
    {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h",
    },
  ],
  [
    "path",
    {
      d: "m7 10 5 5 5-5",
      key: "brsn70",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var EllipsisVertical = createLucideIcon("ellipsis-vertical", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "1",
      key: "41hilf",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "5",
      r: "1",
      key: "gxeob9",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "19",
      r: "1",
      key: "lyex9k",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ExternalLink = createLucideIcon("external-link", [
  [
    "path",
    {
      d: "M15 3h6v6",
      key: "1q9fwt",
    },
  ],
  [
    "path",
    {
      d: "M10 14 21 3",
      key: "gplh6r",
    },
  ],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var EyeOff = createLucideIcon("eye-off", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  [
    "path",
    {
      d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
      key: "151rxh",
    },
  ],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  [
    "path",
    {
      d: "m2 2 20 20",
      key: "1ooewy",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Eye = createLucideIcon("eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FileText = createLucideIcon("file-text", [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6",
    },
  ],
  [
    "path",
    {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz",
    },
  ],
  [
    "path",
    {
      d: "M10 9H8",
      key: "b1mrlr",
    },
  ],
  [
    "path",
    {
      d: "M16 13H8",
      key: "t4e002",
    },
  ],
  [
    "path",
    {
      d: "M16 17H8",
      key: "z1uh3a",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Film = createLucideIcon("film", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      key: "afitv7",
    },
  ],
  [
    "path",
    {
      d: "M7 3v18",
      key: "bbkbws",
    },
  ],
  [
    "path",
    {
      d: "M3 7.5h4",
      key: "zfgn84",
    },
  ],
  [
    "path",
    {
      d: "M3 12h18",
      key: "1i2n21",
    },
  ],
  [
    "path",
    {
      d: "M3 16.5h4",
      key: "1230mu",
    },
  ],
  [
    "path",
    {
      d: "M17 3v18",
      key: "in4fa5",
    },
  ],
  [
    "path",
    {
      d: "M17 7.5h4",
      key: "myr1c1",
    },
  ],
  [
    "path",
    {
      d: "M17 16.5h4",
      key: "go4c1d",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FingerprintPattern = createLucideIcon("fingerprint-pattern", [
  [
    "path",
    {
      d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
      key: "1nerag",
    },
  ],
  [
    "path",
    {
      d: "M14 13.12c0 2.38 0 6.38-1 8.88",
      key: "o46ks0",
    },
  ],
  [
    "path",
    {
      d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
      key: "ptglia",
    },
  ],
  [
    "path",
    {
      d: "M2 12a10 10 0 0 1 18-6",
      key: "ydlgp0",
    },
  ],
  [
    "path",
    {
      d: "M2 16h.01",
      key: "1gqxmh",
    },
  ],
  [
    "path",
    {
      d: "M21.8 16c.2-2 .131-5.354 0-6",
      key: "drycrb",
    },
  ],
  [
    "path",
    {
      d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
      key: "1tidbn",
    },
  ],
  [
    "path",
    {
      d: "M8.65 22c.21-.66.45-1.32.57-2",
      key: "13wd9y",
    },
  ],
  [
    "path",
    {
      d: "M9 6.8a6 6 0 0 1 9 5.2v2",
      key: "1fr1j5",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FolderPlus = createLucideIcon("folder-plus", [
  [
    "path",
    {
      d: "M12 10v6",
      key: "1bos4e",
    },
  ],
  [
    "path",
    {
      d: "M9 13h6",
      key: "1uhe8q",
    },
  ],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Globe = createLucideIcon("globe", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay",
    },
  ],
  [
    "path",
    {
      d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
      key: "13o1zl",
    },
  ],
  [
    "path",
    {
      d: "M2 12h20",
      key: "9i4pu4",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Heart = createLucideIcon("heart", [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var House = createLucideIcon("house", [
  [
    "path",
    {
      d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
      key: "5wwlr5",
    },
  ],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var KeyRound = createLucideIcon("key-round", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t",
    },
  ],
  [
    "circle",
    {
      cx: "16.5",
      cy: "7.5",
      r: ".5",
      fill: "currentColor",
      key: "w0ekpg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Laptop = createLucideIcon("laptop", [
  [
    "path",
    {
      d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
      key: "1pdavp",
    },
  ],
  [
    "path",
    {
      d: "M20.054 15.987H3.946",
      key: "14rxg9",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Layers = createLucideIcon("layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo",
    },
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc",
    },
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ListMusic = createLucideIcon("list-music", [
  [
    "path",
    {
      d: "M16 5H3",
      key: "m91uny",
    },
  ],
  [
    "path",
    {
      d: "M11 12H3",
      key: "51ecnj",
    },
  ],
  [
    "path",
    {
      d: "M11 19H3",
      key: "zflm78",
    },
  ],
  [
    "path",
    {
      d: "M21 16V5",
      key: "yxg4q8",
    },
  ],
  [
    "circle",
    {
      cx: "18",
      cy: "16",
      r: "3",
      key: "1hluhg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ListPlus = createLucideIcon("list-plus", [
  [
    "path",
    {
      d: "M16 5H3",
      key: "m91uny",
    },
  ],
  [
    "path",
    {
      d: "M11 12H3",
      key: "51ecnj",
    },
  ],
  [
    "path",
    {
      d: "M16 19H3",
      key: "zzsher",
    },
  ],
  [
    "path",
    {
      d: "M18 9v6",
      key: "1twb98",
    },
  ],
  [
    "path",
    {
      d: "M21 12h-6",
      key: "bt1uis",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ListX = createLucideIcon("list-x", [
  [
    "path",
    {
      d: "M16 5H3",
      key: "m91uny",
    },
  ],
  [
    "path",
    {
      d: "M11 12H3",
      key: "51ecnj",
    },
  ],
  [
    "path",
    {
      d: "M16 19H3",
      key: "zzsher",
    },
  ],
  [
    "path",
    {
      d: "m15.5 9.5 5 5",
      key: "ytk86i",
    },
  ],
  [
    "path",
    {
      d: "m20.5 9.5-5 5",
      key: "17o44f",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lock = createLucideIcon("lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  [
    "path",
    {
      d: "M7 11V7a5 5 0 0 1 10 0v4",
      key: "fwvmzm",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Maximize2 = createLucideIcon("maximize-2", [
  [
    "path",
    {
      d: "M15 3h6v6",
      key: "1q9fwt",
    },
  ],
  [
    "path",
    {
      d: "m21 3-7 7",
      key: "1l2asr",
    },
  ],
  [
    "path",
    {
      d: "m3 21 7-7",
      key: "tjx5ai",
    },
  ],
  [
    "path",
    {
      d: "M9 21H3v-6",
      key: "wtvkvv",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Menu = createLucideIcon("menu", [
  [
    "path",
    {
      d: "M4 5h16",
      key: "1tepv9",
    },
  ],
  [
    "path",
    {
      d: "M4 12h16",
      key: "1lakjw",
    },
  ],
  [
    "path",
    {
      d: "M4 19h16",
      key: "1djgab",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Mic = createLucideIcon("mic", [
  [
    "path",
    {
      d: "M12 19v3",
      key: "npa21l",
    },
  ],
  [
    "path",
    {
      d: "M19 10v2a7 7 0 0 1-14 0v-2",
      key: "1vc78b",
    },
  ],
  [
    "rect",
    {
      x: "9",
      y: "2",
      width: "6",
      height: "13",
      rx: "3",
      key: "s6n7sd",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Minimize2 = createLucideIcon("minimize-2", [
  [
    "path",
    {
      d: "m14 10 7-7",
      key: "oa77jy",
    },
  ],
  [
    "path",
    {
      d: "M20 10h-6V4",
      key: "mjg0md",
    },
  ],
  [
    "path",
    {
      d: "m3 21 7-7",
      key: "tjx5ai",
    },
  ],
  [
    "path",
    {
      d: "M4 14h6v6",
      key: "rmj7iw",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Moon = createLucideIcon("moon", [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Music = createLucideIcon("music", [
  [
    "path",
    {
      d: "M9 18V5l12-2v13",
      key: "1jmyc2",
    },
  ],
  [
    "circle",
    {
      cx: "6",
      cy: "18",
      r: "3",
      key: "fqmcym",
    },
  ],
  [
    "circle",
    {
      cx: "18",
      cy: "16",
      r: "3",
      key: "1hluhg",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Palette = createLucideIcon("palette", [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc",
    },
  ],
  [
    "circle",
    {
      cx: "13.5",
      cy: "6.5",
      r: ".5",
      fill: "currentColor",
      key: "1okk4w",
    },
  ],
  [
    "circle",
    {
      cx: "17.5",
      cy: "10.5",
      r: ".5",
      fill: "currentColor",
      key: "f64h9f",
    },
  ],
  [
    "circle",
    {
      cx: "6.5",
      cy: "12.5",
      r: ".5",
      fill: "currentColor",
      key: "qy21gx",
    },
  ],
  [
    "circle",
    {
      cx: "8.5",
      cy: "7.5",
      r: ".5",
      fill: "currentColor",
      key: "fotxhn",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pause = createLucideIcon("pause", [
  [
    "rect",
    {
      x: "14",
      y: "3",
      width: "5",
      height: "18",
      rx: "1",
      key: "kaeet6",
    },
  ],
  [
    "rect",
    {
      x: "5",
      y: "3",
      width: "5",
      height: "18",
      rx: "1",
      key: "1wsw3u",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Phone = createLucideIcon("phone", [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var PictureInPicture2 = createLucideIcon("picture-in-picture-2", [
  [
    "path",
    {
      d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",
      key: "daa4of",
    },
  ],
  [
    "rect",
    {
      width: "10",
      height: "7",
      x: "12",
      y: "13",
      rx: "2",
      key: "1nb8gs",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Play = createLucideIcon("play", [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Plus = createLucideIcon("plus", [
  [
    "path",
    {
      d: "M5 12h14",
      key: "1ays0h",
    },
  ],
  [
    "path",
    {
      d: "M12 5v14",
      key: "s699le",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var RefreshCw = createLucideIcon("refresh-cw", [
  [
    "path",
    {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
      key: "v9h5vc",
    },
  ],
  [
    "path",
    {
      d: "M21 3v5h-5",
      key: "1q7to0",
    },
  ],
  [
    "path",
    {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
      key: "3uifl3",
    },
  ],
  [
    "path",
    {
      d: "M8 16H3v5",
      key: "1cv678",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Repeat1 = createLucideIcon("repeat-1", [
  [
    "path",
    {
      d: "m17 2 4 4-4 4",
      key: "nntrym",
    },
  ],
  [
    "path",
    {
      d: "M3 11v-1a4 4 0 0 1 4-4h14",
      key: "84bu3i",
    },
  ],
  [
    "path",
    {
      d: "m7 22-4-4 4-4",
      key: "1wqhfi",
    },
  ],
  [
    "path",
    {
      d: "M21 13v1a4 4 0 0 1-4 4H3",
      key: "1rx37r",
    },
  ],
  [
    "path",
    {
      d: "M11 10h1v4",
      key: "70cz1p",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Repeat = createLucideIcon("repeat", [
  [
    "path",
    {
      d: "m17 2 4 4-4 4",
      key: "nntrym",
    },
  ],
  [
    "path",
    {
      d: "M3 11v-1a4 4 0 0 1 4-4h14",
      key: "84bu3i",
    },
  ],
  [
    "path",
    {
      d: "m7 22-4-4 4-4",
      key: "1wqhfi",
    },
  ],
  [
    "path",
    {
      d: "M21 13v1a4 4 0 0 1-4 4H3",
      key: "1rx37r",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var RotateCcw = createLucideIcon("rotate-ccw", [
  [
    "path",
    {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3",
    },
  ],
  [
    "path",
    {
      d: "M3 3v5h5",
      key: "1xhq8a",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var RotateCw = createLucideIcon("rotate-cw", [
  [
    "path",
    {
      d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
      key: "1p45f6",
    },
  ],
  [
    "path",
    {
      d: "M21 3v5h-5",
      key: "1q7to0",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ScanSearch = createLucideIcon("scan-search", [
  [
    "path",
    {
      d: "M3 7V5a2 2 0 0 1 2-2h2",
      key: "aa7l1z",
    },
  ],
  [
    "path",
    {
      d: "M17 3h2a2 2 0 0 1 2 2v2",
      key: "4qcy5o",
    },
  ],
  [
    "path",
    {
      d: "M21 17v2a2 2 0 0 1-2 2h-2",
      key: "6vwrx8",
    },
  ],
  [
    "path",
    {
      d: "M7 21H5a2 2 0 0 1-2-2v-2",
      key: "ioqczr",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd",
    },
  ],
  [
    "path",
    {
      d: "m16 16-1.9-1.9",
      key: "1dq9hf",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Search = createLucideIcon("search", [
  [
    "path",
    {
      d: "m21 21-4.34-4.34",
      key: "14j7rj",
    },
  ],
  [
    "circle",
    {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Send = createLucideIcon("send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  [
    "path",
    {
      d: "m21.854 2.147-10.94 10.939",
      key: "12cjpa",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Settings = createLucideIcon("settings", [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Share2 = createLucideIcon("share-2", [
  [
    "circle",
    {
      cx: "18",
      cy: "5",
      r: "3",
      key: "gq8acd",
    },
  ],
  [
    "circle",
    {
      cx: "6",
      cy: "12",
      r: "3",
      key: "w7nqdw",
    },
  ],
  [
    "circle",
    {
      cx: "18",
      cy: "19",
      r: "3",
      key: "1xt0gg",
    },
  ],
  [
    "line",
    {
      x1: "8.59",
      x2: "15.42",
      y1: "13.51",
      y2: "17.49",
      key: "47mynk",
    },
  ],
  [
    "line",
    {
      x1: "15.41",
      x2: "8.59",
      y1: "6.51",
      y2: "10.49",
      key: "1n3mei",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ShieldCheck = createLucideIcon("shield-check", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  [
    "path",
    {
      d: "m9 12 2 2 4-4",
      key: "dzmm74",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Shield = createLucideIcon("shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Shuffle = createLucideIcon("shuffle", [
  [
    "path",
    {
      d: "m18 14 4 4-4 4",
      key: "10pe0f",
    },
  ],
  [
    "path",
    {
      d: "m18 2 4 4-4 4",
      key: "pucp1d",
    },
  ],
  [
    "path",
    {
      d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
      key: "1ailkh",
    },
  ],
  [
    "path",
    {
      d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
      key: "km57vx",
    },
  ],
  [
    "path",
    {
      d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
      key: "os18l9",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var SkipBack = createLucideIcon("skip-back", [
  [
    "path",
    {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
      key: "15892j",
    },
  ],
  [
    "path",
    {
      d: "M3 20V4",
      key: "1ptbpl",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var SkipForward = createLucideIcon("skip-forward", [
  [
    "path",
    {
      d: "M21 4v16",
      key: "7j8fe9",
    },
  ],
  [
    "path",
    {
      d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
      key: "zs4d6",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sparkles = createLucideIcon("sparkles", [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr",
    },
  ],
  [
    "path",
    {
      d: "M20 2v4",
      key: "1rf3ol",
    },
  ],
  [
    "path",
    {
      d: "M22 4h-4",
      key: "gwowj6",
    },
  ],
  [
    "circle",
    {
      cx: "4",
      cy: "20",
      r: "2",
      key: "6kqj1y",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var SquareCheckBig = createLucideIcon("square-check-big", [
  [
    "path",
    {
      d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
      key: "2acyp4",
    },
  ],
  [
    "path",
    {
      d: "m9 11 3 3L22 4",
      key: "1pflzl",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Square = createLucideIcon("square", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      key: "afitv7",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Star = createLucideIcon("star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sun = createLucideIcon("sun", [
  [
    "circle",
    {
      cx: "12",
      cy: "12",
      r: "4",
      key: "4exip2",
    },
  ],
  [
    "path",
    {
      d: "M12 2v2",
      key: "tus03m",
    },
  ],
  [
    "path",
    {
      d: "M12 20v2",
      key: "1lh1kg",
    },
  ],
  [
    "path",
    {
      d: "m4.93 4.93 1.41 1.41",
      key: "149t6j",
    },
  ],
  [
    "path",
    {
      d: "m17.66 17.66 1.41 1.41",
      key: "ptbguv",
    },
  ],
  [
    "path",
    {
      d: "M2 12h2",
      key: "1t8f8n",
    },
  ],
  [
    "path",
    {
      d: "M20 12h2",
      key: "1q8mjw",
    },
  ],
  [
    "path",
    {
      d: "m6.34 17.66-1.41 1.41",
      key: "1m8zz5",
    },
  ],
  [
    "path",
    {
      d: "m19.07 4.93-1.41 1.41",
      key: "1shlcs",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Trash2 = createLucideIcon("trash-2", [
  [
    "path",
    {
      d: "M10 11v6",
      key: "nco0om",
    },
  ],
  [
    "path",
    {
      d: "M14 11v6",
      key: "outv1u",
    },
  ],
  [
    "path",
    {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
      key: "miytrc",
    },
  ],
  [
    "path",
    {
      d: "M3 6h18",
      key: "d0wm0j",
    },
  ],
  [
    "path",
    {
      d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      key: "e791ji",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TriangleAlert = createLucideIcon("triangle-alert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  [
    "path",
    {
      d: "M12 9v4",
      key: "juzpu7",
    },
  ],
  [
    "path",
    {
      d: "M12 17h.01",
      key: "p32p05",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Upload = createLucideIcon("upload", [
  [
    "path",
    {
      d: "M12 3v12",
      key: "1x0j5s",
    },
  ],
  [
    "path",
    {
      d: "m17 8-5-5-5 5",
      key: "7q97r8",
    },
  ],
  [
    "path",
    {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var User = createLucideIcon("user", [
  [
    "path",
    {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
      key: "975kel",
    },
  ],
  [
    "circle",
    {
      cx: "12",
      cy: "7",
      r: "4",
      key: "17ys0d",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Video = createLucideIcon("video", [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec",
    },
  ],
  [
    "rect",
    {
      x: "2",
      y: "6",
      width: "14",
      height: "12",
      rx: "2",
      key: "158x01",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Volume1 = createLucideIcon("volume-1", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  [
    "path",
    {
      d: "M16 9a5 5 0 0 1 0 6",
      key: "1q6k2b",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Volume2 = createLucideIcon("volume-2", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  [
    "path",
    {
      d: "M16 9a5 5 0 0 1 0 6",
      key: "1q6k2b",
    },
  ],
  [
    "path",
    {
      d: "M19.364 18.364a9 9 0 0 0 0-12.728",
      key: "ijwkga",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var VolumeX = createLucideIcon("volume-x", [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw",
    },
  ],
  [
    "line",
    {
      x1: "22",
      x2: "16",
      y1: "9",
      y2: "15",
      key: "1ewh16",
    },
  ],
  [
    "line",
    {
      x1: "16",
      x2: "22",
      y1: "9",
      y2: "15",
      key: "5ykzw1",
    },
  ],
]);
/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X = createLucideIcon("x", [
  [
    "path",
    {
      d: "M18 6 6 18",
      key: "1bl5f8",
    },
  ],
  [
    "path",
    {
      d: "m6 6 12 12",
      key: "d8bk6v",
    },
  ],
]);
//#endregion
export {
  FingerprintPattern as $,
  Plus as A,
  Menu as B,
  Search as C,
  Activity as Ct,
  Repeat as D,
  RotateCcw as E,
  Palette as F,
  ListMusic as G,
  Lock as H,
  Music as I,
  KeyRound as J,
  Layers as K,
  Moon as L,
  PictureInPicture2 as M,
  Phone as N,
  Repeat1 as O,
  Pause as P,
  FolderPlus as Q,
  Minimize2 as R,
  Send as S,
  ArrowLeft as St,
  RotateCw as T,
  ListX as U,
  Maximize2 as V,
  ListPlus as W,
  Heart as X,
  House as Y,
  Globe as Z,
  Shuffle as _,
  ChevronLeft as _t,
  Video as a,
  EllipsisVertical as at,
  Share2 as b,
  Bell as bt,
  TriangleAlert as c,
  Database as ct,
  Star as d,
  Compass as dt,
  Film as et,
  Square as f,
  Clock as ft,
  SkipBack as g,
  ChevronRight as gt,
  SkipForward as h,
  CircleAlert as ht,
  Volume1 as i,
  ExternalLink as it,
  Play as j,
  RefreshCw as k,
  Trash2 as l,
  CreditCard as lt,
  Sparkles as m,
  CircleCheck as mt,
  VolumeX as n,
  Eye as nt,
  User as o,
  Download as ot,
  SquareCheckBig as p,
  CirclePlay as pt,
  Laptop as q,
  Volume2 as r,
  EyeOff as rt,
  Upload as s,
  Disc as st,
  X as t,
  FileText as tt,
  Sun as u,
  Copy as ut,
  Shield as v,
  Check as vt,
  ScanSearch as w,
  Settings as x,
  ArrowRight as xt,
  ShieldCheck as y,
  Bookmark as yt,
  Mic as z,
};
