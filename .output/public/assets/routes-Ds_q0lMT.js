import {
  a as e,
  c as t,
  i as n,
  l as r,
  n as i,
  o as a,
  r as o,
  s,
  t as c,
  u as l,
} from "./index-Dbkm8fxc.js";
function u(e) {
  if (Array.isArray(e)) return e.flatMap((e) => u(e));
  if (typeof e != `string`) return [];
  let t = [],
    n = 0,
    r,
    i,
    a,
    o,
    s,
    c = () => {
      for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
      return n < e.length;
    },
    l = () => ((i = e.charAt(n)), i !== `=` && i !== `;` && i !== `,`);
  for (; n < e.length;) {
    for (r = n, s = !1; c();)
      if (((i = e.charAt(n)), i === `,`)) {
        for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
        n < e.length && e.charAt(n) === `=`
          ? ((s = !0), (n = o), t.push(e.slice(r, a)), (r = n))
          : (n = a + 1);
      } else n += 1;
    (!s || n >= e.length) && t.push(e.slice(r));
  }
  return t;
}
function d(e) {
  return e instanceof Headers
    ? e
    : Array.isArray(e) || typeof e == `object`
      ? new Headers(e)
      : null;
}
function f(...e) {
  return e.reduce((e, t) => {
    let n = d(t);
    if (!n) return e;
    for (let [t, r] of n.entries())
      t === `set-cookie`
        ? u(r).forEach((t) => e.append(`set-cookie`, t))
        : e.set(t, r);
    return e;
  }, new Headers());
}
function p(e) {
  return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function m(e, t) {
  let n = Object.create(null);
  if (e) for (let t of Object.keys(e)) p(t) && (n[t] = e[t]);
  if (t && typeof t == `object`)
    for (let e of Object.keys(t)) p(e) && (n[e] = t[e]);
  return n;
}
function h(e) {
  if (!e) return Object.create(null);
  let t = Object.create(null);
  for (let n of Object.keys(e)) p(n) && (t[n] = e[n]);
  return t;
}
var g = () => {
    throw Error(
      `createServerOnlyFn() functions can only be called on the server!`,
    );
  },
  _ = (e, n) => {
    let r = n || e || {};
    r.method === void 0 && (r.method = `GET`);
    let i = (e) => _(void 0, { ...r, validator: e, inputValidator: e });
    return Object.assign((e) => _(void 0, { ...r, ...e }), {
      options: r,
      middleware: (e) => {
        let n = [...(r.middleware || [])];
        e.forEach((e) => {
          t in e
            ? e.options.middleware && n.push(...e.options.middleware)
            : n.push(e);
        });
        let i = _(void 0, { ...r, middleware: n });
        return ((i[t] = !0), i);
      },
      validator: i,
      inputValidator: i,
      handler: (...e) => {
        let [t, n] = e,
          i = { ...r, extractedFn: t, serverFn: n },
          o = [...(i.middleware || []), b(i)];
        return (
          (t.method = r.method),
          Object.assign(
            async (e) => {
              let n = await v(o, `client`, {
                  ...t,
                  ...i,
                  data: e?.data,
                  headers: e?.headers,
                  signal: e?.signal,
                  fetch: e?.fetch,
                  context: h(),
                }),
                r = a(n.error);
              if (r) throw r;
              if (n.error) throw n.error;
              return n.result;
            },
            {
              ...t,
              method: r.method,
              __executeServer: async (e) => {
                let n = g(),
                  i = n.contextAfterGlobalMiddlewares;
                return await v(o, `server`, {
                  ...t,
                  data: e.data,
                  method: e.method ?? r.method,
                  serverFnMeta: t.serverFnMeta,
                  context: m(e.context, i),
                  request: n.request,
                }).then((e) => ({
                  result: e.result,
                  error: e.error,
                  context: e.sendContext,
                }));
              },
            },
          )
        );
      },
    });
  };
async function v(t, n, r) {
  let i = ee([...(s()?.functionMiddleware || []), ...t]);
  if (n === `server`) {
    let e = g({ throwIfNotFound: !1 });
    e?.executedRequestMiddlewares &&
      (i = i.filter((t) => !e.executedRequestMiddlewares.has(t)));
  }
  let a = async (t) => {
    let r = i.shift();
    if (!r) return t;
    try {
      let i = `validator` in r.options ? r.options.validator : void 0;
      (!i && `inputValidator` in r.options && (i = r.options.inputValidator),
        i && n === `server` && (t.data = await y(i, t.data)));
      let o;
      if (
        (n === `client`
          ? `client` in r.options && (o = r.options.client)
          : `server` in r.options && (o = r.options.server),
        o)
      ) {
        let n = async (e = {}) => {
            let n = await a({
              ...t,
              ...e,
              context: m(t.context, e.context),
              sendContext: m(t.sendContext, e.sendContext),
              headers: f(t.headers, e.headers),
              _callSiteFetch: t._callSiteFetch,
              fetch: t._callSiteFetch ?? e.fetch ?? t.fetch,
              result:
                e.result === void 0
                  ? e instanceof Response
                    ? e
                    : t.result
                  : e.result,
              error: e.error ?? t.error,
            });
            if (n.error) throw n.error;
            return n;
          },
          r = await o({ ...t, next: n });
        if (e(r)) return { ...t, error: r };
        if (r instanceof Response) return { ...t, result: r };
        if (!r)
          throw Error(
            `User middleware returned undefined. You must call next() or return a result in your middlewares.`,
          );
        return r;
      }
      return a(t);
    } catch (e) {
      return { ...t, error: e };
    }
  };
  return a({
    ...r,
    headers: r.headers || {},
    sendContext: r.sendContext || {},
    context: r.context || h(),
    _callSiteFetch: r.fetch,
  });
}
function ee(e, t = 100) {
  let n = new Set(),
    r = [],
    i = (e, a) => {
      if (a > t)
        throw Error(
          `Middleware nesting depth exceeded maximum of ${t}. Check for circular references.`,
        );
      e.forEach((e) => {
        (e.options.middleware && i(e.options.middleware, a + 1),
          n.has(e) || (n.add(e), r.push(e)));
      });
    };
  return (i(e, 0), r);
}
async function y(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = await e[`~standard`].validate(t);
    if (n.issues) throw Error(JSON.stringify(n.issues, void 0, 2));
    return n.value;
  }
  if (`parse` in e) return e.parse(t);
  if (typeof e == `function`) return e(t);
  throw Error(`Invalid validator type!`);
}
function b(e) {
  return {
    "~types": void 0,
    options: {
      inputValidator: e.validator ?? e.inputValidator,
      client: async ({ next: t, sendContext: n, fetch: r, ...i }) => {
        let a = { ...i, context: n, fetch: r };
        return t(await e.extractedFn?.(a));
      },
      server: async ({ next: t, ...n }) => {
        let r = await e.serverFn?.(n);
        return t({ ...n, result: r });
      },
    },
  };
}
var te = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  x = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  S = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  C = (e) => {
    let t = S(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  w = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  ne = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  T = l(r()),
  re = (0, T.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, T.createElement)(
        `svg`,
        {
          ref: c,
          ...w,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: te(`lucide`, i),
          ...(!a && !ne(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, T.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  E = (e, t) => {
    let n = (0, T.forwardRef)(({ className: n, ...r }, i) =>
      (0, T.createElement)(re, {
        ref: i,
        iconNode: t,
        className: te(`lucide-${x(C(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = C(e)), n);
  },
  D = E(`activity`, [
    [
      `path`,
      {
        d: `M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,
        key: `169zse`,
      },
    ],
  ]),
  O = E(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  k = E(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  A = E(`bell`, [
    [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
    [
      `path`,
      {
        d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
        key: `11g9vi`,
      },
    ],
  ]),
  j = E(`bookmark`, [
    [
      `path`,
      {
        d: `M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,
        key: `oz39mx`,
      },
    ],
  ]),
  ie = E(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  M = E(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  N = E(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  ae = E(`circle-alert`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
    [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
  ]),
  oe = E(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  P = E(`circle-play`, [
    [
      `path`,
      {
        d: `M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z`,
        key: `kmsa83`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
  ]),
  F = E(`clock`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
  ]),
  I = E(`compass`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `path`,
      {
        d: `m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,
        key: `9ktpf1`,
      },
    ],
  ]),
  L = E(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  se = E(`credit-card`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `2`, key: `ynyp8z` },
    ],
    [`line`, { x1: `2`, x2: `22`, y1: `10`, y2: `10`, key: `1b3vmo` }],
  ]),
  ce = E(`database`, [
    [`ellipse`, { cx: `12`, cy: `5`, rx: `9`, ry: `3`, key: `msslwz` }],
    [`path`, { d: `M3 5V19A9 3 0 0 0 21 19V5`, key: `1wlel7` }],
    [`path`, { d: `M3 12A9 3 0 0 0 21 12`, key: `mv7ke4` }],
  ]),
  R = E(`disc`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`circle`, { cx: `12`, cy: `12`, r: `2`, key: `1c9p78` }],
  ]),
  le = E(`download`, [
    [`path`, { d: `M12 15V3`, key: `m9g1x1` }],
    [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }],
    [`path`, { d: `m7 10 5 5 5-5`, key: `brsn70` }],
  ]),
  ue = E(`ellipsis-vertical`, [
    [`circle`, { cx: `12`, cy: `12`, r: `1`, key: `41hilf` }],
    [`circle`, { cx: `12`, cy: `5`, r: `1`, key: `gxeob9` }],
    [`circle`, { cx: `12`, cy: `19`, r: `1`, key: `lyex9k` }],
  ]),
  de = E(`external-link`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
    [
      `path`,
      {
        d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
        key: `a6xqqp`,
      },
    ],
  ]),
  fe = E(`eye-off`, [
    [
      `path`,
      {
        d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
        key: `ct8e1f`,
      },
    ],
    [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }],
    [
      `path`,
      {
        d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
        key: `13bj9a`,
      },
    ],
    [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
  ]),
  pe = E(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  z = E(`file-text`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
    [`path`, { d: `M16 13H8`, key: `t4e002` }],
    [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
  ]),
  me = E(`film`, [
    [
      `rect`,
      { width: `18`, height: `18`, x: `3`, y: `3`, rx: `2`, key: `afitv7` },
    ],
    [`path`, { d: `M7 3v18`, key: `bbkbws` }],
    [`path`, { d: `M3 7.5h4`, key: `zfgn84` }],
    [`path`, { d: `M3 12h18`, key: `1i2n21` }],
    [`path`, { d: `M3 16.5h4`, key: `1230mu` }],
    [`path`, { d: `M17 3v18`, key: `in4fa5` }],
    [`path`, { d: `M17 7.5h4`, key: `myr1c1` }],
    [`path`, { d: `M17 16.5h4`, key: `go4c1d` }],
  ]),
  he = E(`fingerprint-pattern`, [
    [`path`, { d: `M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4`, key: `1nerag` }],
    [`path`, { d: `M14 13.12c0 2.38 0 6.38-1 8.88`, key: `o46ks0` }],
    [`path`, { d: `M17.29 21.02c.12-.6.43-2.3.5-3.02`, key: `ptglia` }],
    [`path`, { d: `M2 12a10 10 0 0 1 18-6`, key: `ydlgp0` }],
    [`path`, { d: `M2 16h.01`, key: `1gqxmh` }],
    [`path`, { d: `M21.8 16c.2-2 .131-5.354 0-6`, key: `drycrb` }],
    [`path`, { d: `M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2`, key: `1tidbn` }],
    [`path`, { d: `M8.65 22c.21-.66.45-1.32.57-2`, key: `13wd9y` }],
    [`path`, { d: `M9 6.8a6 6 0 0 1 9 5.2v2`, key: `1fr1j5` }],
  ]),
  ge = E(`folder-plus`, [
    [`path`, { d: `M12 10v6`, key: `1bos4e` }],
    [`path`, { d: `M9 13h6`, key: `1uhe8q` }],
    [
      `path`,
      {
        d: `M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,
        key: `1kt360`,
      },
    ],
  ]),
  B = E(`globe`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `path`,
      { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`, key: `13o1zl` },
    ],
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
  ]),
  V = E(`heart`, [
    [
      `path`,
      {
        d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
        key: `mvr1a0`,
      },
    ],
  ]),
  H = E(`house`, [
    [
      `path`,
      { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` },
    ],
    [
      `path`,
      {
        d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
        key: `r6nss1`,
      },
    ],
  ]),
  _e = E(`key-round`, [
    [
      `path`,
      {
        d: `M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,
        key: `1s6t7t`,
      },
    ],
    [
      `circle`,
      { cx: `16.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `w0ekpg` },
    ],
  ]),
  ve = E(`laptop`, [
    [
      `path`,
      {
        d: `M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z`,
        key: `1pdavp`,
      },
    ],
    [`path`, { d: `M20.054 15.987H3.946`, key: `14rxg9` }],
  ]),
  ye = E(`layers`, [
    [
      `path`,
      {
        d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,
        key: `zw3jo`,
      },
    ],
    [
      `path`,
      {
        d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,
        key: `1wduqc`,
      },
    ],
    [
      `path`,
      {
        d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,
        key: `kqbvx6`,
      },
    ],
  ]),
  be = E(`list-music`, [
    [`path`, { d: `M16 5H3`, key: `m91uny` }],
    [`path`, { d: `M11 12H3`, key: `51ecnj` }],
    [`path`, { d: `M11 19H3`, key: `zflm78` }],
    [`path`, { d: `M21 16V5`, key: `yxg4q8` }],
    [`circle`, { cx: `18`, cy: `16`, r: `3`, key: `1hluhg` }],
  ]),
  xe = E(`list-plus`, [
    [`path`, { d: `M16 5H3`, key: `m91uny` }],
    [`path`, { d: `M11 12H3`, key: `51ecnj` }],
    [`path`, { d: `M16 19H3`, key: `zzsher` }],
    [`path`, { d: `M18 9v6`, key: `1twb98` }],
    [`path`, { d: `M21 12h-6`, key: `bt1uis` }],
  ]),
  Se = E(`list-x`, [
    [`path`, { d: `M16 5H3`, key: `m91uny` }],
    [`path`, { d: `M11 12H3`, key: `51ecnj` }],
    [`path`, { d: `M16 19H3`, key: `zzsher` }],
    [`path`, { d: `m15.5 9.5 5 5`, key: `ytk86i` }],
    [`path`, { d: `m20.5 9.5-5 5`, key: `17o44f` }],
  ]),
  Ce = E(`lock`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
  ]),
  we = E(`maximize-2`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `m21 3-7 7`, key: `1l2asr` }],
    [`path`, { d: `m3 21 7-7`, key: `tjx5ai` }],
    [`path`, { d: `M9 21H3v-6`, key: `wtvkvv` }],
  ]),
  U = E(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  Te = E(`mic`, [
    [`path`, { d: `M12 19v3`, key: `npa21l` }],
    [`path`, { d: `M19 10v2a7 7 0 0 1-14 0v-2`, key: `1vc78b` }],
    [
      `rect`,
      { x: `9`, y: `2`, width: `6`, height: `13`, rx: `3`, key: `s6n7sd` },
    ],
  ]),
  Ee = E(`minimize-2`, [
    [`path`, { d: `m14 10 7-7`, key: `oa77jy` }],
    [`path`, { d: `M20 10h-6V4`, key: `mjg0md` }],
    [`path`, { d: `m3 21 7-7`, key: `tjx5ai` }],
    [`path`, { d: `M4 14h6v6`, key: `rmj7iw` }],
  ]),
  De = E(`moon`, [
    [
      `path`,
      {
        d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
        key: `kfwtm`,
      },
    ],
  ]),
  Oe = E(`music`, [
    [`path`, { d: `M9 18V5l12-2v13`, key: `1jmyc2` }],
    [`circle`, { cx: `6`, cy: `18`, r: `3`, key: `fqmcym` }],
    [`circle`, { cx: `18`, cy: `16`, r: `3`, key: `1hluhg` }],
  ]),
  W = E(`palette`, [
    [
      `path`,
      {
        d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,
        key: `e79jfc`,
      },
    ],
    [
      `circle`,
      { cx: `13.5`, cy: `6.5`, r: `.5`, fill: `currentColor`, key: `1okk4w` },
    ],
    [
      `circle`,
      { cx: `17.5`, cy: `10.5`, r: `.5`, fill: `currentColor`, key: `f64h9f` },
    ],
    [
      `circle`,
      { cx: `6.5`, cy: `12.5`, r: `.5`, fill: `currentColor`, key: `qy21gx` },
    ],
    [
      `circle`,
      { cx: `8.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `fotxhn` },
    ],
  ]),
  ke = E(`pause`, [
    [
      `rect`,
      { x: `14`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `kaeet6` },
    ],
    [
      `rect`,
      { x: `5`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `1wsw3u` },
    ],
  ]),
  Ae = E(`phone`, [
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  je = E(`picture-in-picture-2`, [
    [
      `path`,
      {
        d: `M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4`,
        key: `daa4of`,
      },
    ],
    [
      `rect`,
      { width: `10`, height: `7`, x: `12`, y: `13`, rx: `2`, key: `1nb8gs` },
    ],
  ]),
  G = E(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  Me = E(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  K = E(`refresh-cw`, [
    [
      `path`,
      {
        d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,
        key: `v9h5vc`,
      },
    ],
    [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
    [
      `path`,
      {
        d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,
        key: `3uifl3`,
      },
    ],
    [`path`, { d: `M8 16H3v5`, key: `1cv678` }],
  ]),
  Ne = E(`repeat-1`, [
    [`path`, { d: `m17 2 4 4-4 4`, key: `nntrym` }],
    [`path`, { d: `M3 11v-1a4 4 0 0 1 4-4h14`, key: `84bu3i` }],
    [`path`, { d: `m7 22-4-4 4-4`, key: `1wqhfi` }],
    [`path`, { d: `M21 13v1a4 4 0 0 1-4 4H3`, key: `1rx37r` }],
    [`path`, { d: `M11 10h1v4`, key: `70cz1p` }],
  ]),
  Pe = E(`repeat`, [
    [`path`, { d: `m17 2 4 4-4 4`, key: `nntrym` }],
    [`path`, { d: `M3 11v-1a4 4 0 0 1 4-4h14`, key: `84bu3i` }],
    [`path`, { d: `m7 22-4-4 4-4`, key: `1wqhfi` }],
    [`path`, { d: `M21 13v1a4 4 0 0 1-4 4H3`, key: `1rx37r` }],
  ]),
  Fe = E(`rotate-ccw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  q = E(`rotate-cw`, [
    [
      `path`,
      { d: `M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`, key: `1p45f6` },
    ],
    [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
  ]),
  Ie = E(`scan-search`, [
    [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
    [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
    [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
    [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
    [`path`, { d: `m16 16-1.9-1.9`, key: `1dq9hf` }],
  ]),
  Le = E(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  Re = E(`send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }],
  ]),
  ze = E(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  Be = E(`share-2`, [
    [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
    [`circle`, { cx: `6`, cy: `12`, r: `3`, key: `w7nqdw` }],
    [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
    [
      `line`,
      { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49`, key: `47mynk` },
    ],
    [
      `line`,
      { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49`, key: `1n3mei` },
    ],
  ]),
  Ve = E(`shield-check`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  He = E(`shield`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
  ]),
  Ue = E(`shuffle`, [
    [`path`, { d: `m18 14 4 4-4 4`, key: `10pe0f` }],
    [`path`, { d: `m18 2 4 4-4 4`, key: `pucp1d` }],
    [
      `path`,
      {
        d: `M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`,
        key: `1ailkh`,
      },
    ],
    [`path`, { d: `M2 6h1.972a4 4 0 0 1 3.6 2.2`, key: `km57vx` }],
    [`path`, { d: `M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`, key: `os18l9` }],
  ]),
  We = E(`skip-back`, [
    [
      `path`,
      {
        d: `M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z`,
        key: `15892j`,
      },
    ],
    [`path`, { d: `M3 20V4`, key: `1ptbpl` }],
  ]),
  Ge = E(`skip-forward`, [
    [`path`, { d: `M21 4v16`, key: `7j8fe9` }],
    [
      `path`,
      {
        d: `M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z`,
        key: `zs4d6`,
      },
    ],
  ]),
  Ke = E(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  qe = E(`square-check-big`, [
    [
      `path`,
      {
        d: `M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344`,
        key: `2acyp4`,
      },
    ],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  Je = E(`square`, [
    [
      `rect`,
      { width: `18`, height: `18`, x: `3`, y: `3`, rx: `2`, key: `afitv7` },
    ],
  ]),
  Ye = E(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  Xe = E(`sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  J = E(`trash-2`, [
    [`path`, { d: `M10 11v6`, key: `nco0om` }],
    [`path`, { d: `M14 11v6`, key: `outv1u` }],
    [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }],
  ]),
  Ze = E(`triangle-alert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  Y = E(`upload`, [
    [`path`, { d: `M12 3v12`, key: `1x0j5s` }],
    [`path`, { d: `m17 8-5-5-5 5`, key: `7q97r8` }],
    [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }],
  ]),
  Qe = E(`user`, [
    [`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }],
    [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }],
  ]),
  $e = E(`video`, [
    [
      `path`,
      {
        d: `m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,
        key: `ftymec`,
      },
    ],
    [
      `rect`,
      { x: `2`, y: `6`, width: `14`, height: `12`, rx: `2`, key: `158x01` },
    ],
  ]),
  et = E(`volume-1`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
  ]),
  tt = E(`volume-2`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
    [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
  ]),
  nt = E(`volume-x`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`line`, { x1: `22`, x2: `16`, y1: `9`, y2: `15`, key: `1ewh16` }],
    [`line`, { x1: `16`, x2: `22`, y1: `9`, y2: `15`, key: `5ykzw1` }],
  ]),
  X = E(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  rt = {
    en: {
      settings: `Settings`,
      language: `Language`,
      appearance: `Appearance`,
      rateUs: `Rate us`,
      shareApp: `Share app`,
      notifications: `Notifications`,
      safetyHub: `Safety hub`,
      dataBackup: `Data backup`,
      passwords: `Passwords`,
      privacyPolicy: `Privacy policy`,
      blockingsAndShields: `Blockings & Shields`,
      clearBrowsingData: `Clear browsing data`,
      clearAllBrowsingData: `Clear all browsing data`,
      aboutWebNa: `About WebNa`,
      active: `Active`,
      rateSupportOnPlay: `Support WebNa on Google Play`,
      ratedStars: `Rated ★★★★★`,
      shareWithFriends: `Share with friends and family`,
      notificationsSub: `Downloads, news, and safe alerts`,
      safetyHubSub: `Safe browsing, HTTPS & shields`,
      dataBackupSub: `Export, restore and cloud sync`,
      savedCredentialsCount: `saved credentials`,
      privacySub: `Zero logs, local data & permissions`,
      shieldsSub: `Ads, trackers, cookies, media permissions`,
      home: `Home`,
      discover: `Discover`,
      player: `Player`,
      audioPlayer: `Audio player`,
      videoPlayer: `Video player`,
      shortcuts: `Shortcuts`,
      categories: `Categories`,
      addCategory: `+ Add Category`,
      siteAppHub: `Site/App Hub`,
      siteAppHubSub: `You can keep your favorite sites or apps here for quick access.`,
      bookmarks: `Bookmarks`,
      history: `History`,
      savedLinks: `Saved links`,
      searchEngines: `Search engines`,
      setDefaultBrowser: `Set WebNa as default browser`,
      searchWithOrType: `Search with {engine} or type URL`,
      askOrType: `Ask {engine} or type URL`,
      cancel: `Cancel`,
      save: `Save`,
      add: `Add`,
      delete: `Delete`,
      copied: `Copied`,
      copy: `Copy`,
      back: `Back`,
      close: `Close`,
      displayAndSearchLanguage: `Display & Search Language`,
      chooseLanguageSub: `Choose the preferred language for menus, search queries, and content.`,
      autoTranslateForeign: `Auto-translate foreign sites`,
      autoTranslateSub: `Offer Google translate bar for foreign languages`,
      supportedLanguages: `Supported Languages`,
      themeAndDisplay: `Theme & Display`,
      appearanceSub: `Customize colors, font scaling, and navigation toolbar placement.`,
      colorTheme: `Color Theme`,
      lightTheme: `Light`,
      darkTheme: `Dark`,
      systemTheme: `System`,
      textScaling: `Text Scaling`,
      small: `Small`,
      normal: `Normal`,
      large: `Large`,
      huge: `Huge`,
      addressBarPosition: `Address Bar Position`,
      topStandard: `Top (Standard)`,
      bottomEasy: `Bottom (Easy reach)`,
      highContrast: `AMOLED / High Contrast`,
      highContrastSub: `Deep pure blacks to save battery on OLED Android displays`,
      androidNotificationPermission: `Android Notification Permission`,
      permissionRequiredSub: `Required for download completions and background audio`,
      requestPermission: `Request Permission`,
      notificationCategories: `Notification Categories`,
      downloadCompletedAlerts: `Download completed alerts`,
      downloadCompletedSub: `Notify when videos, MP3s, or files finish downloading`,
      safeBrowsingAlerts: `Safe browsing alerts`,
      safeBrowsingSub: `Warn when a site has known security risks or scams`,
      newsTrendingUpdates: `News & trending updates`,
      newsTrendingSub: `Daily morning highlights from the Discover feed`,
      mediaBackgroundPlayback: `Media background playback`,
      mediaPlaybackSub: `Keep playback controls in your Android notification shade`,
      vibrationSoundAlerts: `Vibration & Sound alerts`,
      vibrationSub: `Vibrate on high-priority download or security warnings`,
      sendTestNotification: `Send Test Notification`,
      shieldActive: `WebNa Sentinel Shield`,
      shieldActiveSub: `On-device privacy filters and encrypted network guard active`,
      safetyControlsTab: `Protection Controls`,
      safetyAuditTab: `Safety Health & Audit`,
      privacyAndIdentity: `Privacy & Anti-Tracking Shield`,
      privacyAndIdentitySub: `Guard device identifiers, URL parameters, and suppress web push noise`,
      connectionAndThreat: `Connection & Threat Defense`,
      connectionAndThreatSub: `Enforce encrypted transport, pop-up barriers, and malicious domain blocking`,
      adsAndTrackers: `Intrusive Ads & Web Trackers`,
      adsAndTrackersSub: `Hides banner ads, video overlays, and stops invisible telemetry beacons.`,
      fingerprintProtection: `Device Anti-Fingerprinting`,
      fingerprintProtectionSub: `Masks canvas rendering, audio context, and hardware signatures from cross-site profilers.`,
      cleanLinks: `Link Sanitizer (URL Tracking Stripper)`,
      cleanLinksSub: `Automatically strips utm_, fbclid, gclid, and referral trackers when navigating or sharing links.`,
      blockNotificationRequests: `Silent Browsing (Mute Push Requests)`,
      blockNotificationRequestsSub: `Silently drops website prompts asking permission to send push notifications.`,
      cookieManagement: `Cookie & Storage Isolation Policy`,
      cookieManagementSub: `Choose how cookies and site storage behave across browsing sessions.`,
      cookieAllow: `Allow All`,
      cookieBlock3rd: `Block 3rd-Party`,
      cookieBlockAll: `Block All Cookies`,
      httpsOnlyMode: `Strict HTTPS Upgrade`,
      httpsOnlySub: `Enforce encrypted connections; warn before loading unencrypted HTTP.`,
      antiPhishing: `Phishing & Malware Sentry`,
      antiPhishingSub: `Proactively inspects domains against known malicious databases and deceptive web traps.`,
      blockPopupsTitle: `Pop-up & Window Blocker`,
      blockPopupsSub: `Intercepts unauthorized new windows, hidden tabs, and deceptive redirect loops.`,
      blockMixedContent: `Insecure Mixed Content Barrier`,
      blockMixedContentSub: `Blocks unencrypted HTTP elements, images, and scripts from executing on HTTPS pages.`,
      sendDntHeader: `Global Privacy Control (Do Not Track)`,
      sendDntSub: `Transmits DNT and Sec-GPC signals requesting websites not to sell or profile your data.`,
      strictDownloads: `Drive-by Download Guard`,
      strictDownloadsSub: `Blocks automatic background downloads unless explicitly initiated by your tap.`,
      dnsLeakMitigation: `DNS & WebRTC Leak Shield`,
      dnsLeakSub: `Prevents real IP address leaks through WebRTC peer connections and encrypted DNS.`,
      auditScoreTitle: `Protection Rating`,
      auditScoreSub: `Calculated in real-time from your active privacy & security defenses`,
      auditStatusExcellent: `Hardened Protection`,
      auditStatusGood: `Good Defense`,
      auditStatusFair: `Moderate Protection`,
      runAudit: `Run Live Security Audit`,
      runningAudit: `Auditing browser subsystems...`,
      auditComplete: `Security Audit Complete`,
      optimizeAll: `Auto-Harden All Defenses`,
      allProtected: `All defenses enabled at maximum security!`,
      auditChecklist: `Diagnostic Health Checklist`,
      detailedShieldPermissions: `Detailed Shield & Permissions`,
      detailedShieldSub: `Configure ads, pop-ups, cookies, camera & location permissions`,
      backupAndSync: `Backup & Synchronization`,
      backupSub: `Never lose your bookmarks, saved links, custom search engines, or history.`,
      cloudSync: `Cloud Sync`,
      syncNow: `Sync Now`,
      lastCloudSync: `Last Cloud Sync:`,
      exportToJson: `Export to JSON File`,
      exportSub: `Download a full backup of bookmarks, saved links, and history.`,
      downloadBackupFile: `Download Backup File (.json)`,
      restoreFromBackup: `Restore from Backup`,
      restoreSub: `Load a previously saved WebNa backup file into this device.`,
      chooseBackupFile: `Choose Backup File (.json)`,
      savedPasswords: `Saved Passwords`,
      passwordVaultSub: `Secure local credential vault with one-tap copy & autofill`,
      searchAccounts: `Search accounts or websites...`,
      offerToSavePasswords: `Offer to save web passwords`,
      autoFillWebForms: `Auto-fill web forms`,
      saveNewCredential: `Save New Credential`,
      websiteDomain: `Website domain or URL`,
      usernameEmail: `Username / Email`,
      passwordLabel: `Password`,
      generateStrong: `Generate Strong`,
      clearDataTitle: `Clear Browsing Data`,
      clearDataSub: `Select items you wish to remove from this device.`,
      timeRange: `Time Range`,
      lastHour: `Last hour`,
      twentyFourHours: `24 hours`,
      sevenDays: `7 days`,
      allTime: `All time`,
      browsingHistory: `Browsing History`,
      cookiesSiteData: `Cookies & Site Data`,
      cachedImages: `Cached Images & Files`,
      clearDataNow: `Clear Data Now`,
      privacyCommitment: `WebNa Privacy Commitment`,
      iUnderstandAndAcknowledge: `I Understand & Acknowledge`,
    },
    es: {
      settings: `Configuración`,
      language: `Idioma`,
      appearance: `Apariencia`,
      rateUs: `Califícanos`,
      shareApp: `Compartir aplicación`,
      notifications: `Notificaciones`,
      safetyHub: `Centro de seguridad`,
      dataBackup: `Copia de seguridad`,
      passwords: `Contraseñas`,
      privacyPolicy: `Política de privacidad`,
      blockingsAndShields: `Bloqueos y escudos`,
      clearBrowsingData: `Borrar datos de navegación`,
      clearAllBrowsingData: `Borrar todos los datos de navegación`,
      aboutWebNa: `Acerca de WebNa`,
      active: `Activo`,
      rateSupportOnPlay: `Apoya a WebNa en Google Play`,
      ratedStars: `Calificado ★★★★★`,
      shareWithFriends: `Compartir con amigos y familiares`,
      notificationsSub: `Descargas, noticias y alertas de seguridad`,
      safetyHubSub: `Navegación segura, HTTPS y escudos`,
      dataBackupSub: `Exportar, restaurar y sincronización en la nube`,
      savedCredentialsCount: `credenciales guardadas`,
      privacySub: `Sin registros, datos locales y permisos`,
      shieldsSub: `Anuncios, rastreadores, cookies, permisos`,
      home: `Inicio`,
      discover: `Descubrir`,
      player: `Reproductor`,
      audioPlayer: `Reproductor de audio`,
      videoPlayer: `Reproductor de video`,
      shortcuts: `Accesos directos`,
      categories: `Categorías`,
      addCategory: `+ Añadir categoría`,
      bookmarks: `Marcadores`,
      history: `Historial`,
      savedLinks: `Enlaces guardados`,
      searchEngines: `Motores de búsqueda`,
      setDefaultBrowser: `Establecer WebNa como navegador predeterminado`,
      searchWithOrType: `Buscar con {engine} o escribir URL`,
      askOrType: `Preguntar a {engine} o escribir URL`,
      cancel: `Cancelar`,
      save: `Guardar`,
      add: `Añadir`,
      delete: `Eliminar`,
      copied: `Copiado`,
      copy: `Copiar`,
      back: `Atrás`,
      close: `Cerrar`,
      displayAndSearchLanguage: `Idioma de pantalla y búsqueda`,
      chooseLanguageSub: `Elige el idioma preferido para menús, consultas de búsqueda y contenido.`,
      autoTranslateForeign: `Traducir sitios extranjeros automáticamente`,
      autoTranslateSub: `Ofrecer barra de Google Traductor para idiomas extranjeros`,
      supportedLanguages: `Idiomas compatibles`,
      themeAndDisplay: `Tema y visualización`,
      appearanceSub: `Personaliza colores, tamaño de fuente y posición de la barra de navegación.`,
      colorTheme: `Tema de color`,
      lightTheme: `Claro`,
      darkTheme: `Oscuro`,
      systemTheme: `Sistema`,
      textScaling: `Escala de texto`,
      small: `Pequeño`,
      normal: `Normal`,
      large: `Grande`,
      huge: `Enorme`,
      addressBarPosition: `Posición de la barra de direcciones`,
      topStandard: `Superior (Estándar)`,
      bottomEasy: `Inferior (Fácil alcance)`,
      highContrast: `AMOLED / Alto contraste`,
      highContrastSub: `Negros puros y profundos para ahorrar batería en pantallas OLED`,
      androidNotificationPermission: `Permiso de notificaciones de Android`,
      permissionRequiredSub: `Requerido para descargas completadas y audio en segundo plano`,
      requestPermission: `Solicitar permiso`,
      notificationCategories: `Categorías de notificaciones`,
      downloadCompletedAlerts: `Alertas de descarga completada`,
      downloadCompletedSub: `Avisar cuando se descarguen videos, MP3 o archivos`,
      safeBrowsingAlerts: `Alertas de navegación segura`,
      safeBrowsingSub: `Avisar si un sitio web tiene riesgos de seguridad conocidos`,
      newsTrendingUpdates: `Noticias y tendencias`,
      newsTrendingSub: `Destacados diarios de la mañana desde la pestaña Descubrir`,
      mediaBackgroundPlayback: `Reproducción multimedia en segundo plano`,
      mediaPlaybackSub: `Mantener controles en la barra de notificaciones de Android`,
      vibrationSoundAlerts: `Alertas con vibración y sonido`,
      vibrationSub: `Vibrar con avisos de seguridad o descargas importantes`,
      sendTestNotification: `Enviar notificación de prueba`,
      shieldActive: `Escudo Centinela WebNa`,
      shieldActiveSub: `Filtros de privacidad en el dispositivo y guardia de red cifrada activos`,
      safetyControlsTab: `Controles de protección`,
      safetyAuditTab: `Auditoría de seguridad`,
      privacyAndIdentity: `Privacidad y protección contra rastreo`,
      privacyAndIdentitySub: `Protege identificadores de dispositivo, limpia URLs y silencia avisos web`,
      connectionAndThreat: `Seguridad de red y amenazas`,
      connectionAndThreatSub: `Fuerza transporte cifrado, barrera de pop-ups y bloqueo de dominios maliciosos`,
      adsAndTrackers: `Anuncios y rastreadores invasivos`,
      adsAndTrackersSub: `Oculta anuncios molestos, capas de video y detiene balizas de telemetría invisibles.`,
      fingerprintProtection: `Protección contra huellas digitales`,
      fingerprintProtectionSub: `Oculta el renderizado de canvas, contexto de audio y firmas de hardware ante rastreadores.`,
      cleanLinks: `Limpiador de enlaces (Sin rastreadores)`,
      cleanLinksSub: `Elimina automáticamente utm_, fbclid, gclid y etiquetas de seguimiento al abrir o compartir enlaces.`,
      blockNotificationRequests: `Navegación silenciosa (Sin avisos de push)`,
      blockNotificationRequestsSub: `Rechaza silenciosamente las molestas solicitudes de sitios para enviarte notificaciones push.`,
      cookieManagement: `Política de aislamiento de cookies`,
      cookieManagementSub: `Define cómo interactúan las cookies y el almacenamiento de datos entre sitios.`,
      cookieAllow: `Permitir todas`,
      cookieBlock3rd: `Bloquear de 3ros`,
      cookieBlockAll: `Bloquear todas`,
      httpsOnlyMode: `Modo HTTPS estricto`,
      httpsOnlySub: `Fuerza conexiones cifradas; avisa antes de cargar páginas HTTP no seguras.`,
      antiPhishing: `Protección antiphishing y malware`,
      antiPhishingSub: `Inspecciona dominios contra listas de amenazas y sitios fraudulentos en tiempo real.`,
      blockPopupsTitle: `Bloqueador de ventanas emergentes`,
      blockPopupsSub: `Impide la apertura de ventanas emergentes no autorizadas y bucles de redirección.`,
      blockMixedContent: `Filtro de contenido mixto no seguro`,
      blockMixedContentSub: `Bloquea elementos, scripts e imágenes HTTP sin cifrar en páginas HTTPS seguras.`,
      sendDntHeader: `Control de privacidad global (No rastrear)`,
      sendDntSub: `Transmite señales DNT y Sec-GPC solicitando a los sitios no vender ni perfilar tus datos.`,
      strictDownloads: `Protección contra descargas silenciosas`,
      strictDownloadsSub: `Detiene descargas automáticas en segundo plano a menos que toques el enlace directamente.`,
      dnsLeakMitigation: `Protección contra fugas DNS y WebRTC`,
      dnsLeakSub: `Evita fugas de tu dirección IP real a través de conexiones WebRTC y fuerza DNS privado.`,
      auditScoreTitle: `Calificación de protección`,
      auditScoreSub: `Calculado en tiempo real según tus defensas de privacidad y seguridad activas`,
      auditStatusExcellent: `Protección blindada`,
      auditStatusGood: `Buena defensa`,
      auditStatusFair: `Protección moderada`,
      runAudit: `Ejecutar auditoría de seguridad`,
      runningAudit: `Auditando subsistemas del navegador...`,
      auditComplete: `Auditoría de seguridad completada`,
      optimizeAll: `Activar todas las protecciones`,
      allProtected: `¡Todas las defensas activadas con la máxima seguridad!`,
      auditChecklist: `Lista de diagnóstico de salud`,
      detailedShieldPermissions: `Escudo y permisos detallados`,
      detailedShieldSub: `Configurar anuncios, ventanas emergentes, cookies y cámara`,
      backupAndSync: `Copia de seguridad y sincronización`,
      backupSub: `No pierdas nunca tus marcadores, enlaces guardados o historial.`,
      cloudSync: `Sincronización en la nube`,
      syncNow: `Sincronizar ahora`,
      lastCloudSync: `Última sincronización:`,
      exportToJson: `Exportar a archivo JSON`,
      exportSub: `Descarga una copia completa de marcadores, enlaces e historial.`,
      downloadBackupFile: `Descargar copia de seguridad (.json)`,
      restoreFromBackup: `Restaurar desde copia`,
      restoreSub: `Carga un archivo de respaldo WebNa previamente guardado.`,
      chooseBackupFile: `Elegir archivo (.json)`,
      savedPasswords: `Contraseñas guardadas`,
      passwordVaultSub: `Bóveda local segura con copia y autorrelleno en un toque`,
      searchAccounts: `Buscar cuentas o sitios web...`,
      offerToSavePasswords: `Ofrecer guardar contraseñas web`,
      autoFillWebForms: `Autorrellenar formularios web`,
      saveNewCredential: `Guardar nueva credencial`,
      websiteDomain: `Dominio web o URL`,
      usernameEmail: `Usuario / Correo electrónico`,
      passwordLabel: `Contraseña`,
      generateStrong: `Generar segura`,
      clearDataTitle: `Borrar datos de navegación`,
      clearDataSub: `Selecciona los elementos que deseas eliminar de este dispositivo.`,
      timeRange: `Rango de tiempo`,
      lastHour: `Última hora`,
      twentyFourHours: `24 horas`,
      sevenDays: `7 días`,
      allTime: `Todo el tiempo`,
      browsingHistory: `Historial de navegación`,
      cookiesSiteData: `Cookies y datos del sitio`,
      cachedImages: `Imágenes y archivos en caché`,
      clearDataNow: `Borrar datos ahora`,
      privacyCommitment: `Compromiso de privacidad de WebNa`,
      iUnderstandAndAcknowledge: `Entendido y aceptado`,
    },
    fr: {
      settings: `Paramètres`,
      language: `Langue`,
      appearance: `Apparence`,
      rateUs: `Évaluez-nous`,
      shareApp: `Partager l'application`,
      notifications: `Notifications`,
      safetyHub: `Centre de sécurité`,
      dataBackup: `Sauvegarde des données`,
      passwords: `Mots de passe`,
      privacyPolicy: `Politique de confidentialité`,
      blockingsAndShields: `Blocages et boucliers`,
      clearBrowsingData: `Effacer les données de navigation`,
      clearAllBrowsingData: `Effacer toutes les données`,
      aboutWebNa: `À propos de WebNa`,
      active: `Actif`,
      rateSupportOnPlay: `Soutenir WebNa sur Google Play`,
      ratedStars: `Noté ★★★★★`,
      shareWithFriends: `Partager avec amis et famille`,
      notificationsSub: `Téléchargements, actualités et alertes`,
      safetyHubSub: `Navigation sécurisée, HTTPS et protection`,
      dataBackupSub: `Exporter, restaurer et synchroniser`,
      savedCredentialsCount: `identifiants enregistrés`,
      privacySub: `Zéro journal, données locales et permissions`,
      shieldsSub: `Publicités, trackers, cookies, permissions`,
      home: `Accueil`,
      discover: `Découvrir`,
      player: `Lecteur`,
      audioPlayer: `Lecteur audio`,
      videoPlayer: `Lecteur vidéo`,
      shortcuts: `Raccourcis`,
      categories: `Catégories`,
      addCategory: `+ Ajouter catégorie`,
      bookmarks: `Favoris`,
      history: `Historique`,
      savedLinks: `Liens enregistrés`,
      searchEngines: `Moteurs de recherche`,
      setDefaultBrowser: `Définir WebNa par défaut`,
      searchWithOrType: `Rechercher avec {engine} ou taper une URL`,
      askOrType: `Demander à {engine} ou taper une URL`,
      cancel: `Annuler`,
      save: `Enregistrer`,
      add: `Ajouter`,
      delete: `Supprimer`,
      copied: `Copié`,
      copy: `Copier`,
      back: `Retour`,
      close: `Fermer`,
      displayAndSearchLanguage: `Langue d'affichage et de recherche`,
      chooseLanguageSub: `Choisissez la langue pour les menus et le contenu.`,
      autoTranslateForeign: `Traduire automatiquement`,
      autoTranslateSub: `Proposer la barre Google Traduction`,
      supportedLanguages: `Langues prises en charge`,
      themeAndDisplay: `Thème et affichage`,
      appearanceSub: `Personnalisez les couleurs, la police et la barre.`,
      colorTheme: `Thème de couleur`,
      lightTheme: `Clair`,
      darkTheme: `Sombre`,
      systemTheme: `Système`,
      textScaling: `Taille du texte`,
      small: `Petit`,
      normal: `Normal`,
      large: `Grand`,
      huge: `Très grand`,
      addressBarPosition: `Position de la barre d'adresse`,
      topStandard: `Haut (Standard)`,
      bottomEasy: `Bas (Accès facile)`,
      highContrast: `AMOLED / Contraste élevé`,
      highContrastSub: `Noirs profonds pour économiser la batterie`,
      androidNotificationPermission: `Autorisation de notification Android`,
      permissionRequiredSub: `Requis pour les téléchargements et le lecteur`,
      requestPermission: `Demander l'autorisation`,
      notificationCategories: `Catégories de notifications`,
      downloadCompletedAlerts: `Alertes de téléchargement terminé`,
      downloadCompletedSub: `Avertir quand un fichier est prêt`,
      safeBrowsingAlerts: `Alertes de navigation sécurisée`,
      safeBrowsingSub: `Avertir en cas de site malveillant`,
      newsTrendingUpdates: `Actualités et tendances`,
      newsTrendingSub: `Actualités quotidiennes dans Découvrir`,
      mediaBackgroundPlayback: `Lecture en arrière-plan`,
      mediaPlaybackSub: `Contrôles dans la barre de notifications`,
      vibrationSoundAlerts: `Alertes vibration et son`,
      vibrationSub: `Vibrer pour les alertes de sécurité`,
      sendTestNotification: `Envoyer une notification test`,
      shieldActive: `Bouclier WebNa actif`,
      shieldActiveSub: `Votre navigation est protégée contre les menaces.`,
      httpsOnlyMode: `Mode HTTPS uniquement`,
      httpsOnlySub: `Mettre à niveau la navigation vers HTTPS chiffré`,
      antiPhishing: `Anti-phishing et navigation sûre`,
      antiPhishingSub: `Vérifier les sites contre les fraudes`,
      sendDntHeader: `Envoyer l'en-tête 'Ne pas suivre' (DNT)`,
      sendDntSub: `Demander aux sites de ne pas vous pister`,
      dnsLeakMitigation: `Protection contre les fuites DNS`,
      dnsLeakSub: `Masquer l'adresse IP réelle sur VPN`,
      detailedShieldPermissions: `Bouclier et autorisations détaillés`,
      detailedShieldSub: `Gérer pubs, pop-ups, cookies et micro`,
      backupAndSync: `Sauvegarde et synchronisation`,
      backupSub: `Ne perdez plus vos favoris ou votre historique.`,
      cloudSync: `Synchronisation Cloud`,
      syncNow: `Synchroniser maintenant`,
      lastCloudSync: `Dernière synchro :`,
      exportToJson: `Exporter au format JSON`,
      exportSub: `Télécharger une copie complète de vos données.`,
      downloadBackupFile: `Télécharger le fichier (.json)`,
      restoreFromBackup: `Restaurer depuis sauvegarde`,
      restoreSub: `Charger un fichier de sauvegarde WebNa.`,
      chooseBackupFile: `Choisir un fichier (.json)`,
      savedPasswords: `Mots de passe enregistrés`,
      passwordVaultSub: `Coffre-fort local sécurisé avec copie rapide`,
      searchAccounts: `Rechercher des comptes...`,
      offerToSavePasswords: `Proposer d'enregistrer les mots de passe`,
      autoFillWebForms: `Remplissage automatique`,
      saveNewCredential: `Enregistrer un identifiant`,
      websiteDomain: `Domaine web ou URL`,
      usernameEmail: `Identifiant / E-mail`,
      passwordLabel: `Mot de passe`,
      generateStrong: `Générer fort`,
      clearDataTitle: `Effacer les données de navigation`,
      clearDataSub: `Sélectionnez les données à supprimer.`,
      timeRange: `Période`,
      lastHour: `Dernière heure`,
      twentyFourHours: `24 heures`,
      sevenDays: `7 jours`,
      allTime: `Tout l'historique`,
      browsingHistory: `Historique de navigation`,
      cookiesSiteData: `Cookies et données de site`,
      cachedImages: `Images et fichiers en cache`,
      clearDataNow: `Effacer maintenant`,
      privacyCommitment: `Engagement de confidentialité WebNa`,
      iUnderstandAndAcknowledge: `J'ai compris et j'accepte`,
    },
    de: {
      settings: `Einstellungen`,
      language: `Sprache`,
      appearance: `Erscheinungsbild`,
      rateUs: `Bewerten`,
      shareApp: `App teilen`,
      notifications: `Benachrichtigungen`,
      safetyHub: `Sicherheitscenter`,
      dataBackup: `Datensicherung`,
      passwords: `Passwörter`,
      privacyPolicy: `Datenschutzerklärung`,
      blockingsAndShields: `Blockaden & Schilde`,
      clearBrowsingData: `Browserdaten löschen`,
      clearAllBrowsingData: `Alle Browserdaten löschen`,
      aboutWebNa: `Über WebNa`,
      active: `Aktiv`,
      rateSupportOnPlay: `WebNa auf Google Play bewerten`,
      ratedStars: `Bewertet ★★★★★`,
      shareWithFriends: `Mit Freunden teilen`,
      notificationsSub: `Downloads, News und Sicherheitswarnungen`,
      safetyHubSub: `Sicheres Surfen, HTTPS & Schilde`,
      dataBackupSub: `Exportieren, wiederherstellen & Cloud-Sync`,
      savedCredentialsCount: `gespeicherte Passwörter`,
      privacySub: `Keine Logs, lokale Daten & Rechte`,
      shieldsSub: `Werbung, Tracker, Cookies, Berechtigungen`,
      home: `Startseite`,
      discover: `Entdecken`,
      player: `Player`,
      audioPlayer: `Audio-Player`,
      videoPlayer: `Video-Player`,
      shortcuts: `Verknüpfungen`,
      categories: `Kategorien`,
      addCategory: `+ Kategorie hinzufügen`,
      bookmarks: `Lesezeichen`,
      history: `Verlauf`,
      savedLinks: `Gespeicherte Links`,
      searchEngines: `Suchmaschinen`,
      setDefaultBrowser: `WebNa als Standardbrowser festlegen`,
      searchWithOrType: `Mit {engine} suchen oder URL eingeben`,
      askOrType: `{engine} fragen oder URL eingeben`,
      cancel: `Abbrechen`,
      save: `Speichern`,
      add: `Hinzufügen`,
      delete: `Löschen`,
      copied: `Kopiert`,
      copy: `Kopieren`,
      back: `Zurück`,
      close: `Schließen`,
      displayAndSearchLanguage: `Anzeige- & Suchsprache`,
      chooseLanguageSub: `Wähle die bevorzugte Sprache für Menüs und Inhalte.`,
      autoTranslateForeign: `Fremdsprachige Seiten automatisch übersetzen`,
      autoTranslateSub: `Google Übersetzer-Leiste anbieten`,
      supportedLanguages: `Unterstützte Sprachen`,
      themeAndDisplay: `Design & Anzeige`,
      appearanceSub: `Passe Farben, Schriftgröße und Leiste an.`,
      colorTheme: `Farbdesign`,
      lightTheme: `Hell`,
      darkTheme: `Dunkel`,
      systemTheme: `System`,
      textScaling: `Textgröße`,
      small: `Klein`,
      normal: `Normal`,
      large: `Groß`,
      huge: `Sehr groß`,
      addressBarPosition: `Adressleistenposition`,
      topStandard: `Oben (Standard)`,
      bottomEasy: `Unten (Leicht erreichbar)`,
      highContrast: `AMOLED / Hoher Kontrast`,
      highContrastSub: `Tiefes Schwarz zum Energiesparen auf OLED`,
      androidNotificationPermission: `Android-Benachrichtigungsberechtigung`,
      permissionRequiredSub: `Erforderlich für Downloads und Hintergrund-Audio`,
      requestPermission: `Berechtigung anfordern`,
      notificationCategories: `Benachrichtigungskategorien`,
      downloadCompletedAlerts: `Download-Benachrichtigungen`,
      downloadCompletedSub: `Melden, wenn Dateien fertig geladen sind`,
      safeBrowsingAlerts: `Sicherheitswarnungen`,
      safeBrowsingSub: `Vor betrügerischen Webseiten warnen`,
      newsTrendingUpdates: `News & Trends`,
      newsTrendingSub: `Tägliche Highlights aus Entdecken`,
      mediaBackgroundPlayback: `Hintergrund-Wiedergabe`,
      mediaPlaybackSub: `Steuerung in Android-Benachrichtigungen`,
      vibrationSoundAlerts: `Vibration & Ton`,
      vibrationSub: `Vibrieren bei Sicherheitswarnungen`,
      sendTestNotification: `Test-Benachrichtigung senden`,
      shieldActive: `WebNa-Schild aktiv`,
      shieldActiveSub: `Surfen ist vor Schadsoftware und Tracking geschützt.`,
      httpsOnlyMode: `Nur HTTPS-Modus`,
      httpsOnlySub: `Verbindungen automatisch verschlüsseln`,
      antiPhishing: `Anti-Phishing & Schutz`,
      antiPhishingSub: `URLs gegen Betrugsseiten prüfen`,
      sendDntHeader: `'Do Not Track' (DNT) senden`,
      sendDntSub: `Websites auffordern, Tracking zu stoppen`,
      dnsLeakMitigation: `DNS-Leckschutz`,
      dnsLeakSub: `Echte IP-Adresse in VPNs schützen`,
      detailedShieldPermissions: `Detaillierte Schilde & Rechte`,
      detailedShieldSub: `Werbung, Cookies und Kamera einstellen`,
      backupAndSync: `Datensicherung & Synchronisation`,
      backupSub: `Verliere nie Lesezeichen oder deinen Verlauf.`,
      cloudSync: `Cloud-Synchronisation`,
      syncNow: `Jetzt synchronisieren`,
      lastCloudSync: `Letzter Sync:`,
      exportToJson: `Als JSON-Datei exportieren`,
      exportSub: `Vollständige Sicherung herunterladen.`,
      downloadBackupFile: `Sicherungsdatei (.json) herunterladen`,
      restoreFromBackup: `Aus Sicherung wiederherstellen`,
      restoreSub: `Gespeicherte WebNa-Datei importieren.`,
      chooseBackupFile: `Datei auswählen (.json)`,
      savedPasswords: `Gespeicherte Passwörter`,
      passwordVaultSub: `Sicherer lokaler Tresor mit 1-Klick-Kopieren`,
      searchAccounts: `Konten oder Websites suchen...`,
      offerToSavePasswords: `Passwortspeichern anbieten`,
      autoFillWebForms: `Automatisches Ausfüllen`,
      saveNewCredential: `Neues Passwort speichern`,
      websiteDomain: `Webseite / URL`,
      usernameEmail: `Benutzername / E-Mail`,
      passwordLabel: `Passwort`,
      generateStrong: `Sicheres generieren`,
      clearDataTitle: `Browserdaten löschen`,
      clearDataSub: `Wähle die zu entfernenden Elemente.`,
      timeRange: `Zeitraum`,
      lastHour: `Letzte Stunde`,
      twentyFourHours: `24 Stunden`,
      sevenDays: `7 Tage`,
      allTime: `Gesamter Zeitraum`,
      browsingHistory: `Browserverlauf`,
      cookiesSiteData: `Cookies & Websitedaten`,
      cachedImages: `Bilder & Dateien im Cache`,
      clearDataNow: `Jetzt löschen`,
      privacyCommitment: `WebNa Datenschutzversprechen`,
      iUnderstandAndAcknowledge: `Verstanden & Zustimmen`,
    },
    pt: {
      settings: `Configurações`,
      language: `Idioma`,
      appearance: `Aparência`,
      rateUs: `Avalie-nos`,
      shareApp: `Compartilhar aplicativo`,
      notifications: `Notificações`,
      safetyHub: `Central de segurança`,
      dataBackup: `Backup de dados`,
      passwords: `Senhas`,
      privacyPolicy: `Política de privacidade`,
      blockingsAndShields: `Bloqueios e escudos`,
      clearBrowsingData: `Limpar dados de navegação`,
      clearAllBrowsingData: `Limpar todos os dados`,
      aboutWebNa: `Sobre o WebNa`,
      active: `Ativo`,
      rateSupportOnPlay: `Avalie o WebNa no Google Play`,
      ratedStars: `Avaliado ★★★★★`,
      shareWithFriends: `Compartilhe com amigos`,
      notificationsSub: `Downloads, notícias e alertas`,
      safetyHubSub: `Navegação segura, HTTPS e proteção`,
      dataBackupSub: `Exportar, restaurar e sincronizar`,
      savedCredentialsCount: `senhas salvas`,
      privacySub: `Zero registros, dados locais e privacidade`,
      shieldsSub: `Anúncios, rastreadores, cookies, permissões`,
      home: `Início`,
      discover: `Descobrir`,
      player: `Player`,
      audioPlayer: `Player de áudio`,
      videoPlayer: `Player de vídeo`,
      shortcuts: `Atalhos`,
      categories: `Categorias`,
      addCategory: `+ Adicionar categoria`,
      bookmarks: `Favoritos`,
      history: `Histórico`,
      savedLinks: `Links salvos`,
      searchEngines: `Mecanismos de busca`,
      setDefaultBrowser: `Definir WebNa como padrão`,
      searchWithOrType: `Pesquisar com {engine} ou digitar URL`,
      askOrType: `Perguntar ao {engine} ou digitar URL`,
      cancel: `Cancelar`,
      save: `Salvar`,
      add: `Adicionar`,
      delete: `Excluir`,
      copied: `Copiado`,
      copy: `Copiar`,
      back: `Voltar`,
      close: `Fechar`,
      displayAndSearchLanguage: `Idioma de exibição e busca`,
      chooseLanguageSub: `Escolha o idioma para menus e conteúdo.`,
      autoTranslateForeign: `Traduzir automaticamente páginas em outro idioma`,
      autoTranslateSub: `Oferecer barra do Google Tradutor`,
      supportedLanguages: `Idiomas suportados`,
      themeAndDisplay: `Tema e exibição`,
      appearanceSub: `Personalize cores, tamanho do texto e barra.`,
      colorTheme: `Tema de cor`,
      lightTheme: `Claro`,
      darkTheme: `Escuro`,
      systemTheme: `Sistema`,
      textScaling: `Tamanho do texto`,
      small: `Pequeno`,
      normal: `Normal`,
      large: `Grande`,
      huge: `Enorme`,
      addressBarPosition: `Posição da barra de endereço`,
      topStandard: `Superior (Padrão)`,
      bottomEasy: `Inferior (Fácil acesso)`,
      highContrast: `AMOLED / Alto contraste`,
      highContrastSub: `Preto puro para economizar bateria em telas OLED`,
      androidNotificationPermission: `Permissão de notificações do Android`,
      permissionRequiredSub: `Necessário para downloads e áudio em segundo plano`,
      requestPermission: `Solicitar permissão`,
      notificationCategories: `Categorias de notificações`,
      downloadCompletedAlerts: `Alertas de download concluído`,
      downloadCompletedSub: `Avisar quando arquivos terminarem de baixar`,
      safeBrowsingAlerts: `Alertas de navegação segura`,
      safeBrowsingSub: `Avisar sobre sites com riscos de segurança`,
      newsTrendingUpdates: `Notícias e tendências`,
      newsTrendingSub: `Destaques diários na aba Descobrir`,
      mediaBackgroundPlayback: `Reprodução em segundo plano`,
      mediaPlaybackSub: `Controles na barra de notificações`,
      vibrationSoundAlerts: `Alertas com vibração e som`,
      vibrationSub: `Vibrar em avisos de segurança`,
      sendTestNotification: `Enviar notificação de teste`,
      shieldActive: `Escudo WebNa ativo`,
      shieldActiveSub: `Sua navegação está filtrada e protegida contra ameaças.`,
      httpsOnlyMode: `Modo somente HTTPS`,
      httpsOnlySub: `Atualizar conexões automaticamente para HTTPS`,
      antiPhishing: `Anti-phishing e proteção`,
      antiPhishingSub: `Verificar URLs contra fraudes e malware`,
      sendDntHeader: `Enviar cabeçalho 'Não rastrear' (DNT)`,
      sendDntSub: `Pedir aos sites para não rastrear atividade`,
      dnsLeakMitigation: `Proteção contra vazamento de DNS`,
      dnsLeakSub: `Proteger IP real ao usar VPN ou proxy`,
      detailedShieldPermissions: `Escudo e permissões detalhadas`,
      detailedShieldSub: `Configurar anúncios, pop-ups, cookies e câmera`,
      backupAndSync: `Backup e sincronização`,
      backupSub: `Nunca perca seus favoritos ou histórico.`,
      cloudSync: `Sincronização na nuvem`,
      syncNow: `Sincronizar agora`,
      lastCloudSync: `Última sincronização:`,
      exportToJson: `Exportar para arquivo JSON`,
      exportSub: `Baixar backup completo dos seus dados.`,
      downloadBackupFile: `Baixar arquivo (.json)`,
      restoreFromBackup: `Restaurar do backup`,
      restoreSub: `Carregar arquivo salvo anteriormente.`,
      chooseBackupFile: `Escolher arquivo (.json)`,
      savedPasswords: `Senhas salvas`,
      passwordVaultSub: `Cofre local seguro com cópia em 1 toque`,
      searchAccounts: `Buscar contas ou sites...`,
      offerToSavePasswords: `Perguntar se deseja salvar senhas`,
      autoFillWebForms: `Preenchimento automático`,
      saveNewCredential: `Salvar nova credencial`,
      websiteDomain: `Domínio ou URL`,
      usernameEmail: `Usuário / E-mail`,
      passwordLabel: `Senha`,
      generateStrong: `Gerar senha forte`,
      clearDataTitle: `Limpar dados de navegação`,
      clearDataSub: `Selecione o que deseja remover deste dispositivo.`,
      timeRange: `Período`,
      lastHour: `Última hora`,
      twentyFourHours: `24 horas`,
      sevenDays: `7 dias`,
      allTime: `Todo o período`,
      browsingHistory: `Histórico de navegação`,
      cookiesSiteData: `Cookies e dados do site`,
      cachedImages: `Imagens e arquivos em cache`,
      clearDataNow: `Limpar dados agora`,
      privacyCommitment: `Compromisso de privacidade WebNa`,
      iUnderstandAndAcknowledge: `Entendi e concordo`,
    },
    ar: {
      settings: `الإعدادات`,
      language: `اللغة`,
      appearance: `المظهر`,
      rateUs: `قيّمنا`,
      shareApp: `مشاركة التطبيق`,
      notifications: `الإشعارات`,
      safetyHub: `مركز الأمان`,
      dataBackup: `النسخ الاحتياطي`,
      passwords: `كلمات المرور`,
      privacyPolicy: `سياسة الخصوصية`,
      blockingsAndShields: `الحظر والحماية`,
      clearBrowsingData: `مسح بيانات التصفح`,
      clearAllBrowsingData: `مسح جميع بيانات التصفح`,
      aboutWebNa: `حول WebNa`,
      active: `مفعل`,
      rateSupportOnPlay: `ادعم WebNa على Google Play`,
      ratedStars: `تم التقييم ★★★★★`,
      shareWithFriends: `شارك مع الأصدقاء والعائلة`,
      notificationsSub: `التنزيلات، الأخبار وتنبيهات الأمان`,
      safetyHubSub: `تصفح آمن، HTTPS ودروع الحماية`,
      dataBackupSub: `تصدير، استعادة والمزامنة السحابية`,
      savedCredentialsCount: `كلمات مرور محفوظة`,
      privacySub: `بلا سجلات، بيانات محلية وأذونات شفافة`,
      shieldsSub: `إعلانات، متتبعات، ملفات تعريف الارتباط`,
      home: `الرئيسية`,
      discover: `اكتشف`,
      player: `المشغل`,
      audioPlayer: `مشغل الصوت`,
      videoPlayer: `مشغل الفيديو`,
      shortcuts: `الاختصارات`,
      categories: `الفئات`,
      addCategory: `+ إضافة فئة`,
      bookmarks: `الإشارات المرجعية`,
      history: `السجل`,
      savedLinks: `الروابط المحفوظة`,
      searchEngines: `محركات البحث`,
      setDefaultBrowser: `تعيين WebNa كمتصفح افتراضي`,
      searchWithOrType: `ابحث باستخدام {engine} أو اكتب عنوان URL`,
      askOrType: `اسأل {engine} أو اكتب عنوان URL`,
      cancel: `إلغاء`,
      save: `حفظ`,
      add: `إضافة`,
      delete: `حذف`,
      copied: `تم النسخ`,
      copy: `نسخ`,
      back: `رجوع`,
      close: `إغلاق`,
      displayAndSearchLanguage: `لغة العرض والبحث`,
      chooseLanguageSub: `اختر اللغة المفضلة للقوائم والبحث والمحتوى.`,
      autoTranslateForeign: `ترجمة المواقع الأجنبية تلقائيًا`,
      autoTranslateSub: `عرض شريط ترجمة Google للمواقع الأجنبية`,
      supportedLanguages: `اللغات المدعومة`,
      themeAndDisplay: `المظهر والشاشة`,
      appearanceSub: `خصص الألوان، حجم الخط وموقع شريط العنوان.`,
      colorTheme: `سمة الألوان`,
      lightTheme: `فاتح`,
      darkTheme: `داكن`,
      systemTheme: `النظام`,
      textScaling: `حجم النص`,
      small: `صغير`,
      normal: `عادي`,
      large: `كبير`,
      huge: `ضخم`,
      addressBarPosition: `موضع شريط العنوان`,
      topStandard: `أعلى (قياسي)`,
      bottomEasy: `أسفل (سهل الوصول)`,
      highContrast: `AMOLED / تباين عالي`,
      highContrastSub: `أسود نقي لتوفير طاقة البطارية على شاشات OLED`,
      androidNotificationPermission: `إذن إشعارات أندرويد`,
      permissionRequiredSub: `مطلوب لتنبيهات اكتمال التنزيل والصوت بالخلفية`,
      requestPermission: `طلب الإذن`,
      notificationCategories: `فئات الإشعارات`,
      downloadCompletedAlerts: `تنبيهات اكتمال التنزيل`,
      downloadCompletedSub: `إشعارك عند اكتمال تنزيل مقاطع الفيديو والملفات`,
      safeBrowsingAlerts: `تنبيهات التصفح الآمن`,
      safeBrowsingSub: `تحذيرك عند زيارة مواقع ذات مخاطر أمنية`,
      newsTrendingUpdates: `الأخبار والمستجدات`,
      newsTrendingSub: `ملخصات صباحية من خلاصة اكتشف`,
      mediaBackgroundPlayback: `تشغيل الوسائط بالخلفية`,
      mediaPlaybackSub: `إبقاء أزرار التحكم في لوحة إشعارات أندرويد`,
      vibrationSoundAlerts: `تنبيهات الاهتزاز والصوت`,
      vibrationSub: `الاهتزاز عند التحذيرات الأمنية العالية`,
      sendTestNotification: `إرسال إشعار تجريبي`,
      shieldActive: `درع WebNa نشط`,
      shieldActiveSub: `جلسات التصفح مفلترة ومحمية ضد المواقع الضارة.`,
      httpsOnlyMode: `وضع HTTPS فقط`,
      httpsOnlySub: `ترقية جميع الاتصالات تلقائيًا إلى HTTPS المشفر`,
      antiPhishing: `مكافحة التصيد والاحتيال`,
      antiPhishingSub: `فحص الروابط ضد البرمجيات الخبيثة`,
      sendDntHeader: `إرسال ترويسة 'عدم التتبع' (DNT)`,
      sendDntSub: `مطالبة المواقع بعدم تسجيل نشاطك`,
      dnsLeakMitigation: `حماية تسريب DNS و WebRTC`,
      dnsLeakSub: `منع كشف عنوان IP الحقيقي على شبكات VPN`,
      detailedShieldPermissions: `الحماية والأذونات التفصيلية`,
      detailedShieldSub: `التحكم في الإعلانات، النوافذ المنبثقة، والكاميرا`,
      backupAndSync: `النسخ الاحتياطي والمزامنة`,
      backupSub: `لا تفقد إشاراتك المرجعية أو روابطك أو سجلك أبدًا.`,
      cloudSync: `المزامنة السحابية`,
      syncNow: `مزامنة الآن`,
      lastCloudSync: `آخر مزامنة:`,
      exportToJson: `تصدير إلى ملف JSON`,
      exportSub: `تنزيل نسخة احتياطية كاملة من بياناتك.`,
      downloadBackupFile: `تنزيل ملف النسخة الاحتياطية (.json)`,
      restoreFromBackup: `استعادة من نسخة احتياطية`,
      restoreSub: `تحميل ملف نسخة احتياطية محفوظ سابقًا.`,
      chooseBackupFile: `اختر ملف (.json)`,
      savedPasswords: `كلمات المرور المحفوظة`,
      passwordVaultSub: `خزينة محلية آمنة مع نسخ وتعبئة سريعة`,
      searchAccounts: `ابحث في الحسابات أو المواقع...`,
      offerToSavePasswords: `عرض حفظ كلمات المرور`,
      autoFillWebForms: `التعبئة التلقائية للنماذج`,
      saveNewCredential: `حفظ كلمة مرور جديدة`,
      websiteDomain: `نطاق الموقع أو الرابط`,
      usernameEmail: `اسم المستخدم / البريد الإلكتروني`,
      passwordLabel: `كلمة المرور`,
      generateStrong: `توليد كلمة قوية`,
      clearDataTitle: `مسح بيانات التصفح`,
      clearDataSub: `حدد العناصر التي تريد إزالتها من هذا الجهاز.`,
      timeRange: `النطاق الزمني`,
      lastHour: `آخر ساعة`,
      twentyFourHours: `24 ساعة`,
      sevenDays: `7 أيام`,
      allTime: `كل الوقت`,
      browsingHistory: `سجل التصفح`,
      cookiesSiteData: `ملفات تعريف الارتباط وبيانات المواقع`,
      cachedImages: `الصور والملفات المخزنة مؤقتًا`,
      clearDataNow: `مسح البيانات الآن`,
      privacyCommitment: `التزام WebNa بالخصوصية`,
      iUnderstandAndAcknowledge: `فهمت وأوافق`,
    },
    zh: {
      settings: `设置`,
      language: `语言`,
      appearance: `外观`,
      rateUs: `给我们评分`,
      shareApp: `分享应用`,
      notifications: `通知`,
      safetyHub: `安全中心`,
      dataBackup: `数据备份`,
      passwords: `密码管理`,
      privacyPolicy: `隐私政策`,
      blockingsAndShields: `拦截与防护`,
      clearBrowsingData: `清除浏览数据`,
      clearAllBrowsingData: `清除全部浏览数据`,
      aboutWebNa: `关于 WebNa`,
      active: `已开启`,
      rateSupportOnPlay: `在 Google Play 上支持 WebNa`,
      ratedStars: `已评 ★★★★★`,
      shareWithFriends: `与朋友和家人分享`,
      notificationsSub: `下载、新闻与安全提醒`,
      safetyHubSub: `安全浏览、HTTPS 与防护盾`,
      dataBackupSub: `导出、恢复与云端同步`,
      savedCredentialsCount: `条已保存凭据`,
      privacySub: `零日志、本地存储与透明权限`,
      shieldsSub: `广告、追踪器、Cookie、媒体权限`,
      home: `首页`,
      discover: `探索`,
      player: `播放器`,
      audioPlayer: `音频播放器`,
      videoPlayer: `视频播放器`,
      shortcuts: `快捷方式`,
      categories: `分类`,
      addCategory: `+ 添加分类`,
      bookmarks: `书签`,
      history: `历史记录`,
      savedLinks: `已存链接`,
      searchEngines: `搜索引擎`,
      setDefaultBrowser: `将 WebNa 设为默认浏览器`,
      searchWithOrType: `使用 {engine} 搜索或输入网址`,
      askOrType: `向 {engine} 提问或输入网址`,
      cancel: `取消`,
      save: `保存`,
      add: `添加`,
      delete: `删除`,
      copied: `已复制`,
      copy: `复制`,
      back: `返回`,
      close: `关闭`,
      displayAndSearchLanguage: `显示与搜索语言`,
      chooseLanguageSub: `选择菜单、搜索及内容的优先语言。`,
      autoTranslateForeign: `自动翻译外语网页`,
      autoTranslateSub: `遇到外语时显示 Google 翻译栏`,
      supportedLanguages: `支持的语言`,
      themeAndDisplay: `主题与显示`,
      appearanceSub: `自定义主题颜色、文字缩放及导航栏位置。`,
      colorTheme: `颜色主题`,
      lightTheme: `浅色`,
      darkTheme: `深色`,
      systemTheme: `跟随系统`,
      textScaling: `字体大小`,
      small: `小`,
      normal: `标准`,
      large: `大`,
      huge: `超大`,
      addressBarPosition: `地址栏位置`,
      topStandard: `顶部 (标准)`,
      bottomEasy: `底部 (便于单手触达)`,
      highContrast: `AMOLED / 高对比度`,
      highContrastSub: `纯黑色彩，省电并保护 OLED 屏幕`,
      androidNotificationPermission: `Android 通知权限`,
      permissionRequiredSub: `用于下载完成通知及后台音频控制`,
      requestPermission: `请求权限`,
      notificationCategories: `通知类别`,
      downloadCompletedAlerts: `下载完成提醒`,
      downloadCompletedSub: `当视频、音频或文件下载完成时提醒`,
      safeBrowsingAlerts: `安全浏览提醒`,
      safeBrowsingSub: `发现恶意欺诈或高风险网站时发出警告`,
      newsTrendingUpdates: `新闻与热点推荐`,
      newsTrendingSub: `每天早晨推送“探索”频道的精选摘要`,
      mediaBackgroundPlayback: `媒体后台播放`,
      mediaPlaybackSub: `在 Android 通知栏保留快捷播放控制面板`,
      vibrationSoundAlerts: `振动与声音提醒`,
      vibrationSub: `高优先级安全警告或完成时振动`,
      sendTestNotification: `发送测试通知`,
      shieldActive: `WebNa 防护盾已开启`,
      shieldActiveSub: `您的浏览已开启恶意网址过滤与隐私防护。`,
      httpsOnlyMode: `仅限 HTTPS 模式`,
      httpsOnlySub: `自动将所有网页导航升级为加密的 HTTPS`,
      antiPhishing: `防钓鱼与安全浏览`,
      antiPhishingSub: `根据恶意威胁库实时检查访问网址`,
      sendDntHeader: `发送“不追踪”(DNT) 请求头`,
      sendDntSub: `要求网站不记录或转售您的浏览数据`,
      dnsLeakMitigation: `DNS 与 WebRTC 防泄漏`,
      dnsLeakSub: `在使用网络代理时保护真实 IP 地址`,
      detailedShieldPermissions: `高级防护与网站权限`,
      detailedShieldSub: `配置广告、弹窗、Cookie、相机与麦克风权限`,
      backupAndSync: `数据备份与同步`,
      backupSub: `书签、已存链接和历史记录永不丢失。`,
      cloudSync: `云端同步`,
      syncNow: `立即同步`,
      lastCloudSync: `上次同步：`,
      exportToJson: `导出为 JSON 文件`,
      exportSub: `下载包含书签、链接与历史的完整备份文件。`,
      downloadBackupFile: `下载备份文件 (.json)`,
      restoreFromBackup: `从备份中恢复`,
      restoreSub: `导入之前导出的 WebNa 备份文件。`,
      chooseBackupFile: `选择备份文件 (.json)`,
      savedPasswords: `已存密码`,
      passwordVaultSub: `安全本地密码保险库，支持一键复制与自动填充`,
      searchAccounts: `搜索账户或网站域名...`,
      offerToSavePasswords: `提示保存网站密码`,
      autoFillWebForms: `自动填充网页表单`,
      saveNewCredential: `保存新密码凭据`,
      websiteDomain: `网站域名或网址`,
      usernameEmail: `用户名 / 邮箱`,
      passwordLabel: `密码`,
      generateStrong: `生成强密码`,
      clearDataTitle: `清除浏览数据`,
      clearDataSub: `选择要从此设备中彻底清除的数据项。`,
      timeRange: `时间范围`,
      lastHour: `过去 1 小时`,
      twentyFourHours: `过去 24 小时`,
      sevenDays: `过去 7 天`,
      allTime: `全部时间`,
      browsingHistory: `浏览历史记录`,
      cookiesSiteData: `Cookie 及网站数据`,
      cachedImages: `缓存的图片和文件`,
      clearDataNow: `立即清除数据`,
      privacyCommitment: `WebNa 隐私承诺`,
      iUnderstandAndAcknowledge: `我已阅读并知晓`,
    },
  },
  it = new Set();
function at() {
  if (typeof window > `u`) return `en`;
  let e = localStorage.getItem(`webna-language`);
  return e && rt[e] ? e : `en`;
}
function ot(e) {
  (typeof window < `u` &&
    (localStorage.setItem(`webna-language`, e),
    window.dispatchEvent(
      new CustomEvent(`webna-language-change`, { detail: e }),
    )),
    it.forEach((t) => t(e)));
}
function Z() {
  let [e, t] = (0, T.useState)(at);
  return (
    (0, T.useEffect)(() => {
      let e = (e) => t(e);
      it.add(e);
      let n = (e) => {
        let n = e;
        n.detail && t(n.detail);
      };
      return (
        window.addEventListener(`webna-language-change`, n),
        () => {
          (it.delete(e),
            window.removeEventListener(`webna-language-change`, n));
        }
      );
    }, []),
    {
      lang: e,
      setLanguage: ot,
      t: (t, n) => (rt[e] || rt.en)[t] || rt.en[t] || n || t,
    }
  );
}
var Q = o();
function st({ active: e, onChange: t, tabCount: n = 1 }) {
  let { t: r, lang: i } = Z(),
    a = [
      { id: `home`, label: r(`home`), Icon: H },
      { id: `discover`, label: r(`discover`), Icon: I },
      { id: `player`, label: r(`player`), Icon: P },
      {
        id: `tabs`,
        label: i === `es` ? `Pestañas` : `Tabs`,
        Icon: ye,
        badge: n,
      },
    ];
  return (0, Q.jsx)(`nav`, {
    className: `fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t bg-background py-2 shadow-lg`,
    children: a.map(({ id: n, label: r, Icon: i, badge: a }) => {
      let o = e === n;
      return (0, Q.jsxs)(
        `button`,
        {
          onClick: () => t(n),
          className: `relative flex flex-col items-center justify-center gap-1 px-3 py-1 text-xs font-medium ${o ? `text-primary` : `text-muted-foreground`}`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, Q.jsx)(i, {
                  className: `size-6 ${o ? `stroke-[2.5]` : `stroke-2`}`,
                }),
                a !== void 0 &&
                  a > 0 &&
                  (0, Q.jsx)(`span`, {
                    className: `absolute -top-1.5 -right-2 flex size-4 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-brand-foreground`,
                    children: a,
                  }),
              ],
            }),
            r,
          ],
        },
        n,
      );
    }),
  });
}
function $({
  value: e = ``,
  onSubmit: t,
  onLens: n,
  engineName: r = `Google`,
  engineDomain: i = `google.com`,
  onEngineClick: a,
}) {
  let { t: o } = Z(),
    [s, c] = (0, T.useState)(e),
    [l, u] = (0, T.useState)(!1);
  ((0, T.useEffect)(() => c(e), [e]),
    (0, T.useEffect)(() => {
      u(!1);
    }, [i, r]));
  let [d, f] = (0, T.useState)(!1),
    p = () => {
      let e = window,
        n = e.SpeechRecognition || e.webkitSpeechRecognition;
      if (!n) {
        alert(
          `Voice search is not supported in this browser. Try Chrome or Safari.`,
        );
        return;
      }
      try {
        let e = new n();
        ((e.lang = navigator.language || `en-US`),
          (e.interimResults = !1),
          (e.maxAlternatives = 1),
          (e.onstart = () => {
            f(!0);
          }),
          (e.onresult = (e) => {
            f(!1);
            let n = e.results?.[0]?.[0]?.transcript;
            n && (c(n), t(n));
          }),
          (e.onerror = (e) => {
            (f(!1),
              e.error === `not-allowed`
                ? alert(
                    `Microphone permission was denied. Please allow microphone access in your browser settings.`,
                  )
                : console.warn(`Speech recognition error:`, e.error));
          }),
          (e.onend = () => {
            f(!1);
          }),
          e.start());
      } catch (e) {
        (f(!1),
          console.error(`Voice search start error:`, e),
          alert(
            `Could not start voice recognition. Please check microphone permissions.`,
          ));
      }
    },
    m = [
      `Gemini`,
      `ChatGPT`,
      `Claude`,
      `Perplexity`,
      `Copilot`,
      `DeepSeek`,
      `Grok`,
      `Poe`,
      `Phind`,
      `You.com`,
      `Meta AI`,
      `Mistral`,
      `HuggingChat`,
      `Pi AI`,
    ].includes(r)
      ? o(`askOrType`).replace(`{engine}`, r)
      : o(`searchWithOrType`).replace(`{engine}`, r);
  return (0, Q.jsxs)(`form`, {
    onSubmit: (e) => {
      (e.preventDefault(), s.trim() && t(s.trim()));
    },
    className: `flex items-center gap-2 rounded-full bg-card px-3.5 py-2 shadow-sm border border-border/50`,
    children: [
      (0, Q.jsx)(`button`, {
        type: `button`,
        onClick: a,
        className: `flex items-center justify-center -ml-1 p-1 rounded-full hover:bg-muted/70 active:scale-95 transition-all shrink-0`,
        title: `Current engine: ${r}. Tap to change.`,
        "aria-label": `Change search engine, currently ${r}`,
        children:
          r === `Google`
            ? (0, Q.jsx)(`span`, {
                className: `text-lg font-bold leading-none px-0.5`,
                style: {
                  background: `var(--gradient-google)`,
                  WebkitBackgroundClip: `text`,
                  color: `transparent`,
                },
                children: `G`,
              })
            : l
              ? (0, Q.jsx)(`span`, {
                  className: `size-5 rounded-full bg-brand/10 text-brand text-xs font-bold flex items-center justify-center`,
                  children: r.charAt(0),
                })
              : (0, Q.jsx)(`img`, {
                  src: `https://www.google.com/s2/favicons?domain=${i}&sz=64`,
                  alt: r,
                  onError: () => u(!0),
                  className: `size-5 rounded-full object-contain`,
                }),
      }),
      (0, Q.jsx)(`input`, {
        value: s,
        onChange: (e) => c(e.target.value),
        onFocus: (e) => e.target.select(),
        placeholder: m,
        className: `min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/70`,
      }),
      (0, Q.jsx)(`button`, {
        type: `button`,
        onClick: p,
        "aria-label": `Voice search`,
        title: d ? `Listening... Speak now` : `Search with voice`,
        className: `p-1 rounded-full transition-colors ${d ? `bg-brand/20 animate-pulse text-brand` : `text-muted-foreground hover:text-foreground`}`,
        children: (0, Q.jsx)(Te, {
          className: `size-4.5 ${d ? `text-brand` : `text-muted-foreground hover:text-foreground`}`,
        }),
      }),
      (0, Q.jsx)(`button`, {
        type: `button`,
        onClick: n,
        "aria-label": `Google Lens`,
        children: (0, Q.jsx)(Ie, {
          className: `size-4.5 text-muted-foreground hover:text-foreground`,
        }),
      }),
      (0, Q.jsx)(`button`, {
        type: `submit`,
        "aria-label": `Search`,
        className: `p-1`,
        children: (0, Q.jsx)(Le, {
          className: `size-4.5 text-brand hover:scale-105 transition-transform`,
        }),
      }),
    ],
  });
}
var ct = [
  `utm_`,
  `fbclid`,
  `gclid`,
  `gclsrc`,
  `dclid`,
  `msclkid`,
  `mc_eid`,
  `zanpid`,
  `igshid`,
  `_hsenc`,
  `_hsmi`,
  `yclid`,
  `_openstat`,
  `wickedid`,
  `twclid`,
  `ttclid`,
  `si`,
  `ref_src`,
  `fbadid`,
];
function lt(e) {
  if (!e) return ``;
  try {
    let t = new URL(e),
      n = [];
    return (
      t.searchParams.forEach((e, t) => {
        let r = t.toLowerCase();
        ct.some((e) => r === e || r.startsWith(e)) && n.push(t);
      }),
      n.length > 0
        ? (n.forEach((e) => t.searchParams.delete(e)), t.toString())
        : e
    );
  } catch {
    return e;
  }
}
function ut() {
  return (
    typeof window > `u` || localStorage.getItem(`webna-clean-links`) !== `false`
  );
}
function dt(e) {
  if (!e) return ``;
  try {
    let t = new URL(e),
      n = t.hostname.toLowerCase();
    return n.includes(`google.`) && !t.searchParams.has(`igu`)
      ? (t.searchParams.set(`igu`, `1`), t.toString())
      : n.includes(`google.`) ||
          n.includes(`wikipedia.org`) ||
          n.includes(`archive.org`)
        ? e
        : n.includes(`openstreetmap.org`)
          ? t.pathname === `/` || !t.pathname.includes(`export/embed.html`)
            ? `https://www.openstreetmap.org/export/embed.html`
            : e
          : `/api/proxy?url=${encodeURIComponent(e)}`;
  } catch {
    return e;
  }
}
function ft(e) {
  if (!e) return ``;
  try {
    if (e.startsWith(`/api/proxy`)) {
      let t = new URL(e, `http://localhost:3000`).searchParams.get(`url`);
      if (t) return t;
    }
    return e
      .replace(`?igu=1&`, `?`)
      .replace(`&igu=1`, ``)
      .replace(`?igu=1`, ``);
  } catch {
    return e;
  }
}
function pt({
  stack: e,
  idx: t,
  onNav: n,
  onMove: r,
  onHome: a,
  isSaved: o,
  onToggleSave: s,
  onOpenPanel: c,
  onOpenPlayer: l,
}) {
  let u = e[t] ?? ``,
    [d, f] = (0, T.useState)(0),
    [p, m] = (0, T.useState)(!1),
    [h, g] = (0, T.useState)(null),
    _ = `p-2 rounded-full disabled:opacity-30`,
    v = ft(u),
    ee = dt(u);
  return (0, Q.jsxs)(`div`, {
    className: `flex h-full flex-col`,
    children: [
      (0, Q.jsxs)(`form`, {
        onSubmit: (e) => {
          (e.preventDefault(), h && n(h), g(null));
        },
        className: `mx-3 mt-3 flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-sm border border-border/40`,
        children: [
          (0, Q.jsx)(`input`, {
            value: h ?? v,
            onChange: (e) => g(e.target.value),
            onFocus: (e) => e.target.select(),
            className: `min-w-0 flex-1 bg-transparent text-sm outline-none`,
            inputMode: `url`,
            placeholder: `Search or enter URL`,
          }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            onClick: s,
            "aria-label": o ? `Remove from bookmarks` : `Add to bookmarks`,
            title: o ? `Bookmarked (tap to remove)` : `Bookmark this page`,
            className: `p-1 rounded-full transition-transform active:scale-90`,
            children: (0, Q.jsx)(Ye, {
              className: `size-4.5 transition-colors ${o ? `fill-amber-400 text-amber-500 drop-shadow-xs` : `text-muted-foreground hover:text-foreground`}`,
            }),
          }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            onClick: () => f(d + 1),
            "aria-label": `Reload`,
            title: `Reload`,
            children: (0, Q.jsx)(q, {
              className: `size-4 text-muted-foreground hover:text-foreground`,
            }),
          }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            onClick: () => {
              window.open(v, `_blank`);
            },
            "aria-label": `Open in external browser`,
            title: `Open in new window`,
            children: (0, Q.jsx)(de, {
              className: `size-4 text-muted-foreground hover:text-foreground`,
            }),
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `mx-3 mt-1.5 flex items-center justify-between rounded-xl bg-muted/60 px-3 py-1 text-[11px] text-muted-foreground border border-border/30`,
        children: [
          (0, Q.jsx)(`span`, {
            className: `truncate pr-2 font-medium`,
            children: (() => {
              try {
                return new URL(v).hostname.replace(`www.`, ``);
              } catch {
                return v || `Web page`;
              }
            })(),
          }),
          (0, Q.jsxs)(`button`, {
            type: `button`,
            onClick: () => {
              window.open(v, `_blank`);
            },
            className: `flex items-center gap-1 shrink-0 font-semibold text-brand hover:underline`,
            children: [
              (0, Q.jsx)(`span`, { children: `Open Full Site` }),
              (0, Q.jsx)(de, { className: `size-3` }),
            ],
          }),
        ],
      }),
      (0, Q.jsx)(
        `iframe`,
        {
          src: ee,
          title: `Web page`,
          className: `mt-2 w-full flex-1 border-0 bg-card`,
          allow: `fullscreen; clipboard-read; clipboard-write; encrypted-media; picture-in-picture; web-share; geolocation; microphone; camera`,
          sandbox: `allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads`,
        },
        ee + d,
      ),
      (0, Q.jsxs)(`div`, {
        className: `mb-24 flex items-center justify-around border-t bg-card py-1`,
        children: [
          (0, Q.jsx)(`button`, {
            className: _,
            disabled: t === 0,
            onClick: () => r(-1),
            "aria-label": `Back`,
            children: (0, Q.jsx)(O, { className: `size-5` }),
          }),
          (0, Q.jsx)(`button`, {
            className: _,
            disabled: t >= e.length - 1,
            onClick: () => r(1),
            "aria-label": `Forward`,
            children: (0, Q.jsx)(k, { className: `size-5` }),
          }),
          (0, Q.jsx)(`button`, {
            className: _,
            onClick: a,
            "aria-label": `Home`,
            children: (0, Q.jsx)(H, { className: `size-5` }),
          }),
          (0, Q.jsx)(`button`, {
            className: _,
            onClick: () => m(!0),
            "aria-label": `Menu`,
            children: (0, Q.jsx)(U, { className: `size-5` }),
          }),
        ],
      }),
      p &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs`,
          onClick: () => m(!1),
          children: (0, Q.jsxs)(`div`, {
            className: `w-full rounded-t-3xl bg-card p-4 pb-8 shadow-2xl`,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, Q.jsxs)(`div`, {
                className: `mb-2 flex items-center justify-between border-b pb-2`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `text-sm font-bold text-foreground`,
                    children: `Menu`,
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => m(!1),
                    "aria-label": `Close menu`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              [
                { l: `Bookmarks`, I: Ye, f: () => c(`bookmarks`) },
                { l: `Saved links`, I: j, f: () => c(`saved-links`) },
                { l: `History`, I: q, f: () => c(`history`) },
                { l: `Audio player`, I: Oe, f: () => l(`audio`) },
                { l: `Video player`, I: me, f: () => l(`video`) },
                { l: `Settings`, I: U, f: () => c(`settings`) },
                { l: `Account`, I: H, f: () => c(`account`) },
                {
                  l: `Share clean link`,
                  I: Be,
                  f: async () => {
                    let e = v;
                    if ((ut() && (e = lt(e)), navigator.share))
                      try {
                        await navigator.share({
                          title: `WebNa Browser`,
                          url: e,
                        });
                        return;
                      } catch {}
                    (navigator.clipboard.writeText(e),
                      i.success(`Clean link copied to clipboard!`));
                  },
                },
                {
                  l: `Open in external browser`,
                  I: de,
                  f: () => {
                    window.open(v, `_blank`);
                  },
                },
                { l: `Quit app`, I: X, f: () => a() },
              ].map(({ l: e, I: t, f: n }) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    onClick: () => {
                      (n(), m(!1));
                    },
                    className: `flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors`,
                    children: [
                      (0, Q.jsx)(t, { className: `size-5 text-brand` }),
                      (0, Q.jsx)(`span`, { children: e }),
                    ],
                  },
                  e,
                ),
              ),
            ],
          }),
        }),
    ],
  });
}
var mt = _({ method: `GET` }).handler(
    n(`bfbec92a60869ea1e09c7f95f0839b6952da957ddfb9e9d7e780b3072625bd4f`),
  ),
  ht = _({ method: `POST` }).handler(
    n(`a3071d49fef0c4e200c04884cdb0bdc49a01a98fd796e18ba9329ca56e4dd094`),
  ),
  gt = _({ method: `POST` }).handler(
    n(`2d9ab34da3812c140e34a8ff8418d3b07aa14e8e0c4153bb9620ccb96a43fc49`),
  ),
  _t = _({ method: `GET` }).handler(
    n(`12a3673b12ef95769a4fee1fda32b154c332c312b544598c49533b3b6a9a999c`),
  ),
  vt = _({ method: `GET` }).handler(
    n(`95383726419c8d41b607b329c198f2eb5226890e770792a1efa653ff18c70c69`),
  ),
  yt = (e) => `https://images.unsplash.com/photo-${e}?w=600`,
  bt = yt(`1504711434969-e33886168f5c`),
  xt = {
    WORLD: yt(`1521295121783-8a321d551ad2`),
    TECHNOLOGY: yt(`1518770660439-4636190af475`),
    SPORTS: yt(`1461896836934-ffe607ba8211`),
    BUSINESS: yt(`1611974789855-9c2a0a7236a3`),
    SCIENCE: yt(`1446776653964-20c1d3a81b06`),
    ENTERTAINMENT: yt(`1514525253161-7a46d19cd819`),
  },
  St = (e, t) => xt[e] ?? bt,
  Ct = (e) => !!e && e.length >= 10 && e.startsWith(`http`),
  wt = [
    { l: `For You`, t: `` },
    { l: `World`, t: `WORLD` },
    { l: `Technology`, t: `TECHNOLOGY` },
    { l: `Sports`, t: `SPORTS` },
    { l: `Business`, t: `BUSINESS` },
    { l: `Science`, t: `SCIENCE` },
    { l: `Entertainment`, t: `ENTERTAINMENT` },
  ];
function Tt(e) {
  return (
    {
      "": `https://feeds.bbci.co.uk/news/rss.xml`,
      WORLD: `https://feeds.bbci.co.uk/news/world/rss.xml`,
      TECHNOLOGY: `https://feeds.bbci.co.uk/news/technology/rss.xml`,
      SPORTS: `https://feeds.bbci.co.uk/sport/rss.xml`,
      BUSINESS: `https://feeds.bbci.co.uk/news/business/rss.xml`,
      SCIENCE: `https://feeds.bbci.co.uk/news/science_and_environment/rss.xml`,
      ENTERTAINMENT: `https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml`,
    }[e] || `https://feeds.bbci.co.uk/news/rss.xml`
  );
}
function Et(e) {
  let t = (Date.now() - new Date(e).getTime()) / 1e3;
  return isFinite(t)
    ? t < 3600
      ? `${Math.max(1, Math.floor(t / 60))}m ago`
      : t < 86400
        ? `${Math.floor(t / 3600)}h ago`
        : `${Math.floor(t / 86400)}d ago`
    : ``;
}
function Dt({ onOpen: e }) {
  let [t, n] = (0, T.useState)(``),
    [r, i] = (0, T.useState)(`news`),
    [a, o] = (0, T.useState)(null),
    [s, c] = (0, T.useState)(null),
    [l, u] = (0, T.useState)(!1),
    [d, f] = (0, T.useState)(!1),
    [p, m] = (0, T.useState)([]),
    [h, g] = (0, T.useState)(``),
    [_, v] = (0, T.useState)(8),
    [ee, y] = (0, T.useState)(0),
    b = (0, T.useRef)(null),
    te = (0, T.useRef)(null),
    x = `webna-feed-v4-` + t,
    S = async (e = !1) => {
      if (r !== `news`) return;
      let n = localStorage.getItem(x);
      if (n && !e)
        try {
          let e = JSON.parse(n),
            t = new Set(),
            r = e.filter((e) => {
              let n = e.link || e.title;
              return !n || t.has(n) ? !1 : (t.add(n), !0);
            });
          o(r);
        } catch {
          o(null);
        }
      else o(null);
      try {
        let e = await mt({ data: { rss: Tt(t) } });
        if (!e.length) throw Error(`empty`);
        let n = new Set(),
          r = e.filter((e) => {
            let t = e.link || e.title;
            return !t || n.has(t) ? !1 : (n.add(t), !0);
          });
        (o(r), v(8), localStorage.setItem(x, JSON.stringify(r)));
      } catch {
        n || o([]);
      }
    };
  return (
    (0, T.useEffect)(() => {
      (S(), r === `tiktok` && p.length === 0 && vt({ data: {} }).then(m));
    }, [t, r]),
    (0, T.useEffect)(() => {
      r === `tiktok` &&
        (u(!0),
        f(!1),
        _t({ data: { hashtag: h } })
          .then((e) => {
            (c(e), u(!1));
          })
          .catch(() => {
            (f(!0), u(!1));
          }));
    }, [r, h]),
    (0, T.useEffect)(() => {
      let e = te.current;
      if (!e) return;
      let t = new IntersectionObserver((e) => {
        e[0]?.isIntersecting && v((e) => e + 6);
      });
      return (t.observe(e), () => t.disconnect());
    }, [a]),
    (0, Q.jsxs)(`div`, {
      onTouchStart: (e) => {
        window.scrollY <= 0 &&
          (e.currentTarget.parentElement?.scrollTop ?? 0) <= 0 &&
          (b.current = e.touches[0].clientY);
      },
      onTouchMove: (e) => {
        b.current !== null &&
          y(Math.min(80, Math.max(0, e.touches[0].clientY - b.current)));
      },
      onTouchEnd: () => {
        (ee > 60 && S(!0), y(0), (b.current = null));
      },
      children: [
        (0, Q.jsx)(`div`, {
          style: { height: ee },
          className: `flex items-center justify-center text-xs text-muted-foreground`,
          children:
            ee > 60 ? `Release to refresh` : ee > 0 ? `Pull to refresh` : ``,
        }),
        (0, Q.jsxs)(`div`, {
          className: `mb-4 flex gap-1 rounded-xl bg-card p-1 shadow-sm`,
          children: [
            (0, Q.jsx)(`button`, {
              onClick: () => i(`news`),
              className: `flex-1 rounded-lg py-2 text-sm font-medium ${r === `news` ? `bg-brand text-brand-foreground` : `text-muted-foreground`}`,
              children: `News`,
            }),
            (0, Q.jsx)(`button`, {
              onClick: () => i(`tiktok`),
              className: `flex-1 rounded-lg py-2 text-sm font-medium ${r === `tiktok` ? `bg-brand text-brand-foreground` : `text-muted-foreground`}`,
              children: `TikTok Trends`,
            }),
          ],
        }),
        r === `tiktok`
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2`,
                  children: p.map((e) =>
                    (0, Q.jsxs)(
                      `button`,
                      {
                        onClick: () => g(e),
                        className: `shrink-0 rounded-full px-4 py-1.5 text-sm ${h === e ? `bg-brand text-brand-foreground` : `bg-card shadow-sm`}`,
                        children: [`#`, e],
                      },
                      e,
                    ),
                  ),
                }),
                l
                  ? (0, Q.jsx)(`div`, {
                      className: `py-20 text-center text-sm text-muted-foreground`,
                      children: `Loading...`,
                    })
                  : d
                    ? (0, Q.jsxs)(`div`, {
                        className: `py-20 text-center`,
                        children: [
                          (0, Q.jsx)(`p`, {
                            className: `mb-4 text-sm text-red-500`,
                            children: `Failed to load trends`,
                          }),
                          (0, Q.jsx)(`button`, {
                            onClick: () => {
                              (f(!1),
                                _t({ data: { hashtag: h } })
                                  .then((e) => c(e))
                                  .catch(() => f(!0)));
                            },
                            className: `rounded-full bg-brand px-6 py-2 text-sm text-brand-foreground`,
                            children: `Retry`,
                          }),
                        ],
                      })
                    : s?.map((t) =>
                        (0, Q.jsxs)(
                          `button`,
                          {
                            onClick: () => e(t.play),
                            className: `mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-sm`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, Q.jsx)(`img`, {
                                    src: t.cover,
                                    alt: ``,
                                    className: `aspect-video w-full bg-muted object-cover`,
                                    loading: `lazy`,
                                  }),
                                  (0, Q.jsx)(`div`, {
                                    className: `absolute inset-0 flex items-center justify-center`,
                                    children: (0, Q.jsx)(`div`, {
                                      className: `flex size-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm`,
                                      children: `▶`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `p-3`,
                                children: [
                                  (0, Q.jsx)(`p`, {
                                    className: `line-clamp-2 font-bold`,
                                    children: t.title,
                                  }),
                                  (0, Q.jsxs)(`div`, {
                                    className: `mt-2 flex items-center gap-2 text-xs text-muted-foreground`,
                                    children: [
                                      (0, Q.jsxs)(`span`, {
                                        className: `truncate`,
                                        children: [`@`, t.author_id],
                                      }),
                                      (0, Q.jsxs)(`span`, {
                                        className: `ml-auto shrink-0`,
                                        children: [
                                          t.play_count.toLocaleString(),
                                          ` views`,
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          t.video_id,
                        ),
                      ),
              ],
            })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`div`, {
                  className: `no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4`,
                  children: wt.map((e) =>
                    (0, Q.jsx)(
                      `button`,
                      {
                        onClick: () => n(e.t),
                        className: `shrink-0 rounded-full px-4 py-1.5 text-sm ${t === e.t ? `bg-brand text-brand-foreground` : `bg-card shadow-sm`}`,
                        children: e.l,
                      },
                      e.l,
                    ),
                  ),
                }),
                !a &&
                  Array.from({ length: 3 }).map((e, t) =>
                    (0, Q.jsxs)(
                      `div`,
                      {
                        className: `mb-3 overflow-hidden rounded-2xl bg-card shadow-sm`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `aspect-video animate-pulse bg-muted`,
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `space-y-2 p-3`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `h-4 animate-pulse rounded bg-muted`,
                              }),
                              (0, Q.jsx)(`div`, {
                                className: `h-4 w-2/3 animate-pulse rounded bg-muted`,
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                a?.length === 0 &&
                  (0, Q.jsx)(`p`, {
                    className: `py-10 text-center text-sm text-muted-foreground`,
                    children: `Couldn't load news. Pull down to retry.`,
                  }),
                a?.slice(0, _).map((n, r) => {
                  let i = n.thumbnail;
                  return (0, Q.jsxs)(
                    `button`,
                    {
                      onClick: () => e(n.link),
                      className: `mb-3 block w-full overflow-hidden rounded-2xl bg-card p-0 text-left shadow-sm`,
                      children: [
                        (0, Q.jsx)(Ot, { src: i, fallback: St(t) }),
                        (0, Q.jsxs)(`div`, {
                          className: `p-3`,
                          children: [
                            (0, Q.jsx)(`p`, {
                              className: `line-clamp-2 font-bold`,
                              children: n.title,
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `mt-2 flex items-center gap-2 text-xs text-muted-foreground`,
                              children: [
                                (0, Q.jsx)(`img`, {
                                  src: `https://www.google.com/s2/favicons?domain=${(() => {
                                    try {
                                      return new URL(n.link).hostname;
                                    } catch {
                                      return `bbc.co.uk`;
                                    }
                                  })()}&sz=32`,
                                  alt: ``,
                                  className: `size-4 rounded-full`,
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `truncate`,
                                  children: n.source,
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `ml-auto shrink-0`,
                                  children: Et(n.pubDate),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    `${n.link || n.title}-${r}`,
                  );
                }),
                a &&
                  _ < a.length &&
                  (0, Q.jsx)(`div`, { ref: te, className: `h-10` }),
              ],
            }),
      ],
    })
  );
}
function Ot({ src: e, fallback: t }) {
  let [n, r] = (0, T.useState)(0);
  (0, T.useEffect)(() => {
    r(0);
  }, [e]);
  let i = t;
  return (
    (i = Ct(e)
      ? n === 0
        ? e
        : n === 1 && e.includes(`/standard/800/`)
          ? e.replace(`/standard/800/`, `/standard/240/`)
          : n < 3
            ? t
            : bt
      : n >= 1
        ? bt
        : t),
    (0, Q.jsx)(`img`, {
      src: i,
      alt: ``,
      referrerPolicy: `no-referrer`,
      onError: () => r((e) => e + 1),
      className: `aspect-video w-full bg-muted object-cover`,
      loading: `lazy`,
    })
  );
}
function kt({ link: e, onBack: t, onOpenWeb: n, isSaved: r, onToggleSave: i }) {
  let [a, o] = (0, T.useState)(null);
  return (
    (0, T.useEffect)(() => {
      let t = !0;
      return (
        o(null),
        (async () => {
          let n = await gt({ data: { url: await ht({ data: { url: e } }) } });
          t && o(n);
        })().catch(
          () => t && o({ url: e, site: ``, title: ``, paragraphs: [] }),
        ),
        () => {
          t = !1;
        }
      );
    }, [e]),
    (0, Q.jsxs)(`div`, {
      className: `fixed inset-0 z-30 overflow-y-auto bg-background pb-28`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `sticky top-0 z-10 flex items-center gap-2 bg-background/95 px-3 py-3 backdrop-blur`,
          children: [
            (0, Q.jsx)(`button`, {
              onClick: t,
              className: `rounded-full bg-card p-2 shadow-sm`,
              "aria-label": `Back`,
              children: (0, Q.jsx)(O, { className: `size-5` }),
            }),
            (0, Q.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-sm text-muted-foreground`,
              children: a?.site || `Loading…`,
            }),
            a &&
              i &&
              (0, Q.jsxs)(`button`, {
                onClick: () => i(a.url, a.title || a.site || `Article`),
                className: `flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm hover:bg-muted`,
                title: r ? `Saved to links` : `Save to saved links`,
                "aria-label": `Save link`,
                children: [
                  (0, Q.jsx)(j, {
                    className: `size-4 ${r ? `fill-brand text-brand` : `text-muted-foreground`}`,
                  }),
                  (0, Q.jsx)(`span`, {
                    className: r ? `text-brand font-semibold` : ``,
                    children: r ? `Saved` : `Save`,
                  }),
                ],
              }),
            a &&
              (0, Q.jsxs)(`button`, {
                onClick: () => n(a.url),
                className: `flex items-center gap-1 rounded-full bg-card px-3 py-2 text-xs shadow-sm`,
                children: [(0, Q.jsx)(B, { className: `size-4` }), `Web`],
              }),
            a &&
              (0, Q.jsx)(`a`, {
                href: a.url,
                target: `_blank`,
                rel: `noreferrer`,
                className: `rounded-full bg-card p-2 shadow-sm`,
                "aria-label": `Open externally`,
                children: (0, Q.jsx)(de, { className: `size-4` }),
              }),
          ],
        }),
        (0, Q.jsx)(`article`, {
          className: `mx-auto max-w-xl px-4`,
          children: a
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [
                  a.image &&
                    (0, Q.jsx)(`img`, {
                      src: a.image,
                      alt: ``,
                      referrerPolicy: `no-referrer`,
                      className: `mb-4 aspect-video w-full rounded-2xl object-cover`,
                    }),
                  (0, Q.jsx)(`h1`, {
                    className: `mb-4 text-2xl font-bold leading-tight`,
                    children: a.title,
                  }),
                  a.paragraphs.length
                    ? a.paragraphs.map((e, t) =>
                        (0, Q.jsx)(
                          `p`,
                          { className: `mb-4 leading-relaxed`, children: e },
                          t,
                        ),
                      )
                    : (0, Q.jsxs)(`div`, {
                        className: `rounded-2xl bg-card p-4 text-sm`,
                        children: [
                          `This article can't be shown in reader mode.`,
                          (0, Q.jsx)(`button`, {
                            onClick: () => n(a.url),
                            className: `mt-3 block font-medium text-brand`,
                            children: `Open web page`,
                          }),
                        ],
                      }),
                ],
              })
            : (0, Q.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: `aspect-video animate-pulse rounded-2xl bg-muted`,
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `h-6 animate-pulse rounded bg-muted`,
                  }),
                  Array.from({ length: 6 }).map((e, t) =>
                    (0, Q.jsx)(
                      `div`,
                      { className: `h-4 animate-pulse rounded bg-muted` },
                      t,
                    ),
                  ),
                ],
              }),
        }),
      ],
    })
  );
}
var At = _({ method: `GET` }).handler(
    n(`97e1a958bec61df73a8a1ce3772a8baf60a8f1834a030a737d0f54ea4bd00ca6`),
  ),
  jt = _({ method: `GET` }).handler(
    n(`d5ad5c168ed267caa21a1daa8ba917515e0823eda4b83fba634b4e0e54957fe4`),
  ),
  Mt = [
    {
      id: `flower-1`,
      title: `Blooming Flower - Nature Macro Time-Lapse`,
      channel: `Nature & Botanical Wonders`,
      videoUrl: `/videos/flower.mp4`,
      fallbackUrl: `https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4`,
      thumbnailUrl: `https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80`,
      duration: `00:05`,
      durationSeconds: 5,
      quality: `1080p HD`,
    },
    {
      id: `bbb-2`,
      title: `Big Buck Bunny - Animated Short Film`,
      channel: `Blender Animation Studio`,
      videoUrl: `https://media.w3.org/2010/05/bunny/trailer.mp4`,
      fallbackUrl: `/videos/flower.mp4`,
      thumbnailUrl: `https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80`,
      duration: `00:33`,
      durationSeconds: 33,
      quality: `720p HD`,
    },
    {
      id: `sintel-3`,
      title: `Sintel - Fantasy Quest Film`,
      channel: `Durian Open Movie Project`,
      videoUrl: `https://media.w3.org/2010/05/sintel/trailer.mp4`,
      fallbackUrl: `/videos/movie_300.mp4`,
      thumbnailUrl: `https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80`,
      duration: `00:52`,
      durationSeconds: 52,
      quality: `720p HD`,
    },
    {
      id: `movie-4`,
      title: `Cinematic Motion Odyssey`,
      channel: `World Cinema Arts`,
      videoUrl: `/videos/movie_300.mp4`,
      fallbackUrl: `https://media.w3.org/2010/05/video/movie_300.mp4`,
      thumbnailUrl: `https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80`,
      duration: `00:12`,
      durationSeconds: 12,
      quality: `1080p HD`,
    },
    {
      id: `bbb-webm-5`,
      title: `Big Buck Bunny - WebM 480p Edition`,
      channel: `Blender Foundation`,
      videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm`,
      fallbackUrl: `/videos/flower.mp4`,
      thumbnailUrl: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80`,
      duration: `09:56`,
      durationSeconds: 596,
      quality: `480p WebM`,
    },
    {
      id: `sintel-webm-6`,
      title: `Sintel - 4K Remaster Showcase`,
      channel: `Open Movie Project`,
      videoUrl: `https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.480p.vp9.webm`,
      fallbackUrl: `/videos/movie_300.mp4`,
      thumbnailUrl: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80`,
      duration: `14:48`,
      durationSeconds: 888,
      quality: `480p WebM`,
    },
  ];
async function Nt() {
  return Mt;
}
function Pt(e) {
  return !!e && !(`size` in e) && `title` in e;
}
function Ft(e) {
  return e ? (Pt(e) ? `${e.artist} - ${e.title}` : e.name) : ``;
}
function It(e) {
  return e ? (Pt(e) ? e.title : e.name.replace(/\.[^/.]+$/, ``)) : ``;
}
function Lt(e) {
  return e && Pt(e) ? e.coverUrl : null;
}
function Rt(e) {
  if (e.type && e.type.startsWith(`audio/`)) return e;
  let t = e.name.split(`.`).pop()?.toLowerCase(),
    n = e.type;
  return (
    t === `mp3`
      ? (n = `audio/mpeg`)
      : t === `wav`
        ? (n = `audio/wav`)
        : t === `ogg`
          ? (n = `audio/ogg`)
          : t === `m4a` || t === `aac`
            ? (n = `audio/mp4`)
            : t === `flac`
              ? (n = `audio/flac`)
              : (t === `weba` || t === `webm`) && (n = `audio/webm`),
    n && n !== e.type ? new Blob([e], { type: n }) : e
  );
}
function zt(e) {
  if (!e)
    return {
      artist: `Unknown Artist`,
      title: `Music Track`,
      album: `Music Album`,
    };
  if (typeof e == `object` && Pt(e))
    return {
      artist: e.artist || `Artist`,
      title: e.title || `Track`,
      album: `${e.artist || `Artist`} Essentials`,
    };
  let t = (typeof e == `string` ? e : e.name || `Track`).replace(
      /\.[^/.]+$/,
      ``,
    ),
    n = `Unknown Artist`,
    r = t;
  if (t.includes(` by `)) {
    let e = t.split(` by `);
    ((r = e[0].replace(/^\d+[\s._-]+/, ``).trim()), (n = e[1].trim()));
  } else if (t.includes(` - `)) {
    let e = t.split(` - `);
    ((n = e[0].trim()), (r = e[1].replace(/^\d+[\s._-]+/, ``).trim()));
  } else r = t.replace(/^\d+[\s._-]+/, ``).trim();
  let i = `${n} Album`;
  return { title: r, artist: n, album: i };
}
var Bt = [
  0.22, 0.26, 0.3, 0.35, 0.42, 0.5, 0.6, 0.72, 0.82, 0.9, 0.96, 0.92, 0.82,
  0.72, 0.64, 0.58, 0.62, 0.72, 0.84, 0.94, 1, 0.96, 0.88, 0.78, 0.7, 0.62,
  0.54, 0.48, 0.44, 0.46, 0.52, 0.58, 0.66, 0.74, 0.82, 0.88, 0.86, 0.8, 0.72,
  0.64, 0.56, 0.5, 0.46, 0.48, 0.54, 0.62, 0.7, 0.76, 0.8, 0.82, 0.8, 0.74,
  0.68, 0.6, 0.54, 0.46, 0.38, 0.32, 0.28, 0.24, 0.2, 0.16,
];
function Vt({
  file: e,
  tracks: t = [],
  initialIndex: n = 0,
  onClose: r,
  onSwitchToVideo: i,
}) {
  let a = (0, T.useMemo)(() => (t && t.length > 0 ? t : e ? [e] : []), [t, e]),
    [o, s] = (0, T.useState)(() => {
      if (n >= 0 && n < a.length) return n;
      if (e) {
        let t = Ft(e),
          n = a.findIndex((e) => Ft(e) === t);
        return n >= 0 ? n : 0;
      }
      return 0;
    }),
    c = a[o] || e;
  Ft(c);
  let l = (0, T.useMemo)(
      () =>
        c
          ? Pt(c)
            ? {
                artist: c.artist || `Artist`,
                title: c.title || `Track`,
                album: `${c.artist} Essentials`,
              }
            : zt(c)
          : {
              artist: `Unknown Artist`,
              title: `Music Track`,
              album: `Music Album`,
            },
      [c],
    ),
    [u, d] = (0, T.useState)(!1),
    [f, p] = (0, T.useState)(0),
    [m, h] = (0, T.useState)(0),
    [g, _] = (0, T.useState)(1),
    [v, ee] = (0, T.useState)(`off`),
    [y, b] = (0, T.useState)(!1),
    [te, x] = (0, T.useState)(null),
    [S, C] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_music_volume`);
        return e === null ? 1 : Math.max(0, Math.min(1, Number(e)));
      } catch {
        return 1;
      }
    }),
    [w, ne] = (0, T.useState)(!1),
    re = (0, T.useRef)(1),
    [E, D] = (0, T.useState)(!1),
    [O, k] = (0, T.useState)(!1),
    [A, j] = (0, T.useState)(!1),
    [M, N] = (0, T.useState)(!1),
    [oe, I] = (0, T.useState)(!1),
    [L, ce] = (0, T.useState)(!1),
    [le, fe] = (0, T.useState)(!1),
    [pe, z] = (0, T.useState)(null),
    [he, B] = (0, T.useState)(!1),
    [H, _e] = (0, T.useState)(`playlists`),
    [ve, ye] = (0, T.useState)(null),
    Ce = (0, T.useMemo)(() => {
      let e = new Map();
      return (
        a.forEach((t, n) => {
          let r = zt(t),
            i = r.album || `Default Album`;
          (e.has(i) || e.set(i, { albumName: i, artist: r.artist, tracks: [] }),
            e.get(i).tracks.push({ file: t, index: n }));
        }),
        Array.from(e.values())
      );
    }, [a]),
    [we, U] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_user_playlists`);
        if (e) return JSON.parse(e);
      } catch {}
      return [
        {
          id: `default-1`,
          name: `My Favorite Mix`,
          createdAt: Date.now(),
          trackNames: [],
        },
        {
          id: `default-2`,
          name: `Chill & Focus`,
          createdAt: Date.now(),
          trackNames: [],
        },
      ];
    }),
    [Te, Ee] = (0, T.useState)(``),
    [W, je] = (0, T.useState)(null),
    K = (e) => {
      U(e);
      try {
        localStorage.setItem(`webna_user_playlists`, JSON.stringify(e));
      } catch {}
    },
    Ie = (e) => {
      e.preventDefault();
      let t = Te.trim();
      if (!t) return;
      let n = [
        {
          id: `pl-` + Date.now(),
          name: t,
          createdAt: Date.now(),
          trackNames: c ? [c.name] : [],
        },
        ...we,
      ];
      (K(n), Ee(``), Z(`Created playlist "${t}"`));
    },
    Le = (e, t) => {
      let n = we.filter((t) => t.id !== e);
      (K(n), W === e && je(null), Z(`Deleted playlist "${t}"`));
    },
    ze = (e) => {
      if (!c) return;
      let t = we.map((t) =>
        t.id === e
          ? t.trackNames.includes(c.name)
            ? (Z(`Track is already in "${t.name}"`), t)
            : (Z(`Added to "${t.name}"`),
              { ...t, trackNames: [...t.trackNames, c.name] })
          : t,
      );
      K(t);
    },
    Ve = (e, t) => {
      let n = we.map((n) =>
        n.id === e
          ? { ...n, trackNames: n.trackNames.filter((e) => e !== t) }
          : n,
      );
      (K(n), Z(`Removed track from playlist`));
    },
    [He, qe] = (0, T.useState)(`Flat (Original)`),
    [Je, Ye] = (0, T.useState)(null),
    [Xe, Ze] = (0, T.useState)(null),
    [Y, $e] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_music_favorites`);
        return e ? JSON.parse(e) : [];
      } catch {
        return [];
      }
    }),
    rt = c ? Y.includes(c.name) : !1,
    it = () => {
      c &&
        $e((e) => {
          let t = e.includes(c.name)
            ? e.filter((e) => e !== c.name)
            : [...e, c.name];
          try {
            localStorage.setItem(`webna_music_favorites`, JSON.stringify(t));
          } catch {}
          return (
            Z(
              t.includes(c.name)
                ? `Added to favorites ❤️`
                : `Removed from favorites`,
            ),
            t
          );
        });
    },
    at = (e) => {
      $e((t) => {
        let n = t.filter((t) => t !== e);
        try {
          localStorage.setItem(`webna_music_favorites`, JSON.stringify(n));
        } catch {}
        return (Z(`Removed from favorites`), n);
      });
    },
    ot = (e) => {
      let t = a.findIndex((t) => t.name === e);
      t === -1
        ? Z(`Track not loaded in current session`)
        : (s(t), B(!1), I(!1), Z(`Playing ${e}`));
    },
    Z = (e) => {
      (z(e),
        setTimeout(() => {
          z((t) => (t === e ? null : t));
        }, 2500));
    };
  (0, T.useEffect)(() => {
    if (Xe === null) return;
    if (Xe <= 0) {
      ($.current && $.current.pause(),
        d(!1),
        Ye(null),
        Ze(null),
        Z(`Sleep timer ended. Playback paused.`));
      return;
    }
    let e = setInterval(() => {
      Ze((e) => (e === null ? null : e - 1));
    }, 1e3);
    return () => clearInterval(e);
  }, [Xe]);
  let st = (e) => {
      (Ye(e),
        Ze(e ? e * 60 : null),
        fe(!1),
        Z(e ? `Sleep timer set for ${e} min` : `Sleep timer turned off`));
    },
    $ = (0, T.useRef)(null),
    [ct, lt] = (0, T.useState)(``);
  ((0, T.useEffect)(() => {
    if (!c) return;
    if (Pt(c)) {
      let e =
        c.previewUrl ||
        `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`;
      lt(e);
      return;
    }
    let e = Rt(c),
      t = URL.createObjectURL(e);
    return (
      lt(t),
      () => {
        URL.revokeObjectURL(t);
      }
    );
  }, [c]),
    (0, T.useEffect)(() => {
      if (!ct) return;
      let e = $.current;
      if (!e) return;
      (x(null),
        (e.src = ct),
        (e.playbackRate = g),
        (e.volume = w ? 0 : S),
        e.load());
      let t = e.play();
      return (
        t !== void 0 &&
          t
            .then(() => {
              d(!0);
            })
            .catch((e) => {
              (console.warn(`Autoplay deferred or blocked:`, e), d(!1));
            }),
        () => {
          e.pause();
        }
      );
    }, [ct]),
    (0, T.useEffect)(() => {
      $.current && ($.current.volume = w ? 0 : S);
    }, [S, w]));
  let ut = (e) => {
      let t = Math.max(0, Math.min(1, parseFloat(e.target.value)));
      (C(t), $.current && ($.current.volume = t), t > 0 && w && ne(!1));
      try {
        localStorage.setItem(`webna_music_volume`, t.toString());
      } catch {}
    },
    dt = () => {
      if (w) {
        let e = re.current > 0 ? re.current : 0.8;
        (ne(!1),
          C(e),
          $.current && ($.current.volume = e),
          Z(`Volume unmuted (${Math.round(e * 100)}%)`));
      } else
        ((re.current = S > 0 ? S : 0.8),
          ne(!0),
          $.current && ($.current.volume = 0),
          Z(`Muted`));
    },
    ft = () => {
      let e = $.current;
      e &&
        (e.paused
          ? e
              .play()
              .then(() => d(!0))
              .catch((e) => {
                (console.error(`Playback error:`, e),
                  x(`Failed to play audio.`));
              })
          : (e.pause(), d(!1)));
    },
    pt = (0, T.useCallback)(() => {
      if (a.length <= 1) {
        $.current &&
          (($.current.currentTime = 0), $.current.play().catch(() => {}));
        return;
      }
      if (y) {
        let e = Math.floor(Math.random() * a.length);
        (e === o && a.length > 1 && (e = (o + 1) % a.length), s(e));
      } else s((e) => (e + 1) % a.length);
    }, [a.length, y, o]),
    mt = (0, T.useCallback)(() => {
      if ($.current && $.current.currentTime > 3) {
        (($.current.currentTime = 0), p(0));
        return;
      }
      if (a.length <= 1) {
        $.current && ($.current.currentTime = 0);
        return;
      }
      s((e) => (e - 1 + a.length) % a.length);
    }, [a.length]),
    ht = (e) => {
      if ($.current) {
        let t = Math.min(Math.max(0, $.current.currentTime + e), m || 1 / 0);
        (($.current.currentTime = t), p(t));
      }
    },
    gt = (e) => {
      (p(e), $.current && ($.current.currentTime = e));
    },
    _t = () => {
      ee((e) =>
        e === `off`
          ? (Z(`Repeat All playlist`), `all`)
          : e === `all`
            ? (Z(`Repeat Current song`), `one`)
            : (Z(`Repeat Off`), `off`),
      );
    },
    vt = () => {
      let e = [0.75, 1, 1.25, 1.5, 2],
        t = e[(e.indexOf(g) + 1) % e.length];
      (_(t), $.current && ($.current.playbackRate = t), Z(`Speed: ${t}x`));
    },
    yt = async () => {
      if (c)
        if (navigator.share)
          try {
            await navigator.share({
              title: c.name,
              text: `Listening to ${c.name} on WebNa Music Player`,
            });
          } catch {}
        else
          try {
            (await navigator.clipboard.writeText(c.name),
              Z(`Track title copied to clipboard!`));
          } catch {
            Z(`Sharing not supported on this browser`);
          }
    },
    bt = () => {
      if (!c) return;
      let e = Rt(c),
        t = URL.createObjectURL(e),
        n = document.createElement(`a`);
      ((n.href = t),
        (n.download = `${c.name.replace(/\.[^/.]+$/, ``)}_ringtone.mp3`),
        document.body.appendChild(n),
        n.click(),
        document.body.removeChild(n),
        URL.revokeObjectURL(t),
        D(!1),
        Z(`Downloaded! Set it in Settings > Sound > Ringtone`));
    },
    xt = () => {
      if (!c) return;
      let e = c.name;
      (D(!1),
        a.length <= 1
          ? (Z(`Removed "${e}"`), r())
          : (Z(`Removed "${e}" from queue`), pt()));
    },
    St = () => {
      if (O) {
        (d(!1), p(0), k(!1), Z(`Stopped playback after track finished`));
        return;
      }
      v === `one`
        ? $.current &&
          (($.current.currentTime = 0), $.current.play().catch(() => {}))
        : v === `all` || o < a.length - 1
          ? pt()
          : (d(!1), p(0));
    },
    [Ct, wt] = (0, T.useState)(0),
    Tt = (0, T.useRef)(null);
  (0, T.useEffect)(() => {
    if (!u) {
      Tt.current && cancelAnimationFrame(Tt.current);
      return;
    }
    let e = performance.now(),
      t = (n) => {
        let r = (n - e) / 1e3;
        (wt(r), (Tt.current = requestAnimationFrame(t)));
      };
    return (
      (Tt.current = requestAnimationFrame(t)),
      () => {
        Tt.current && cancelAnimationFrame(Tt.current);
      }
    );
  }, [u]);
  let Et = (0, T.useRef)(null),
    Dt = (0, T.useRef)(!1),
    Ot = (e) => {
      if (!Et.current || !m) return;
      let t = Et.current.getBoundingClientRect(),
        n = Math.max(0, Math.min(1, (e - t.left) / t.width));
      gt(n * m);
    },
    kt = (e) => {
      if (isNaN(e) || e < 0 || !isFinite(e)) return `00:00`;
      let t = Math.floor(e / 60),
        n = Math.floor(e % 60);
      return `${t.toString().padStart(2, `0`)}:${n.toString().padStart(2, `0`)}`;
    },
    At = m > 0 ? Math.min(1, f / m) : 0,
    jt = Math.floor(At * Bt.length),
    Mt = a.filter((e) => Y.includes(e.name));
  return (0, Q.jsxs)(`div`, {
    className: `fixed inset-0 z-[60] flex flex-col bg-[#fbf9f6] text-[#2b2520] select-none overflow-hidden`,
    children: [
      pe &&
        (0, Q.jsx)(`div`, {
          className: `absolute top-14 left-1/2 -translate-x-1/2 z-[90] bg-[#3a322c]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-fade-in pointer-events-none`,
          children: pe,
        }),
      (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-2 px-4 pt-3 pb-2 shrink-0 border-b border-[#eee7de]`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-2`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-1 bg-[#f0eae0] p-1 rounded-xl shrink-0`,
                children: [
                  (0, Q.jsxs)(`button`, {
                    className: `flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-brand shadow-xs transition-all`,
                    title: `Audio Player (Active)`,
                    children: [
                      (0, Q.jsx)(Oe, { className: `size-3.5 text-brand` }),
                      (0, Q.jsx)(`span`, { children: `Audio player` }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      ($.current && $.current.pause(), i ? i() : r());
                    },
                    className: `flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#7c726a] hover:text-[#2b2520] hover:bg-white/60 transition-all`,
                    title: `Switch to Video Player`,
                    children: [
                      (0, Q.jsx)(me, { className: `size-3.5` }),
                      (0, Q.jsx)(`span`, { children: `Video player` }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-0.5`,
                children: [
                  (0, Q.jsx)(`button`, {
                    onClick: () => D(!0),
                    className: `p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform`,
                    "aria-label": `More options`,
                    title: `Options`,
                    children: (0, Q.jsx)(ue, {
                      className: `size-5 text-[#4a423a]`,
                    }),
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: r,
                    className: `p-2 rounded-full hover:bg-black/5 active:scale-95 transition-transform`,
                    "aria-label": `Close player`,
                    children: (0, Q.jsx)(X, {
                      className: `size-5 text-[#4a423a]`,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsx)(`div`, {
            className: `min-w-0 flex items-center justify-between px-1`,
            children: (0, Q.jsxs)(`div`, {
              className: `min-w-0 flex-1 pr-2`,
              children: [
                (0, Q.jsx)(`h2`, {
                  className: `text-sm font-semibold truncate leading-tight`,
                  children: It(c) || `Music Player`,
                }),
                (0, Q.jsx)(`p`, {
                  className: `text-[11px] text-[#8c827a] truncate mt-0.5`,
                  children: Pt(c)
                    ? c.artist
                    : a.length > 1
                      ? `Track ${o + 1} of ${a.length}`
                      : `Local Audio`,
                }),
              ],
            }),
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `flex-1 flex flex-col items-center justify-center px-6 py-1 min-h-0`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `relative size-48 sm:size-56 rounded-full bg-[#f1ebe3] flex items-center justify-center shadow-inner my-auto transition-transform`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `size-40 sm:size-44 rounded-full bg-gradient-to-tr from-[#6d5b97]/20 to-[#9e8ec2]/30 flex items-center justify-center border-4 border-white/60 shadow-sm overflow-hidden transition-transform duration-700 ${u ? `rotate-360 duration-[12000ms] ease-linear repeat-infinite` : ``}`,
                children: Lt(c)
                  ? (0, Q.jsx)(`img`, {
                      src: Lt(c),
                      alt: ``,
                      className: `size-full object-cover`,
                    })
                  : (0, Q.jsx)(`span`, {
                      className: `text-4xl sm:text-5xl select-none`,
                      children: `🎵`,
                    }),
              }),
              u &&
                (0, Q.jsx)(`div`, {
                  className: `absolute inset-0 rounded-full border-2 border-dashed border-[#6d5b97]/30 animate-spin duration-[16000ms]`,
                }),
            ],
          }),
          te &&
            (0, Q.jsxs)(`div`, {
              className: `flex items-center gap-2 p-2 rounded-xl bg-destructive/10 text-destructive text-xs text-center w-full max-w-sm mt-2`,
              children: [
                (0, Q.jsx)(ae, { className: `size-4 shrink-0` }),
                (0, Q.jsx)(`span`, { children: te }),
              ],
            }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `w-full max-w-md mx-auto px-5 pb-2 pt-1 flex flex-col gap-3.5 shrink-0`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between text-[#574d46] px-1`,
            children: [
              (0, Q.jsxs)(`button`, {
                onClick: () => I(!0),
                className: `p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform relative`,
                title: `Playlist queue`,
                children: [
                  (0, Q.jsx)(be, { className: `size-5` }),
                  a.length > 1 &&
                    (0, Q.jsx)(`span`, {
                      className: `absolute -top-0.5 -right-0.5 bg-[#6d5b97] text-white text-[9px] size-3.5 rounded-full flex items-center justify-center font-bold`,
                      children: a.length,
                    }),
                ],
              }),
              (0, Q.jsx)(`button`, {
                onClick: () => ce(!0),
                className: `p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform`,
                title: `Equalizer & Track Info`,
                children: (0, Q.jsx)(se, { className: `size-5` }),
              }),
              (0, Q.jsx)(`button`, {
                onClick: it,
                className: `p-1.5 active:scale-90 transition-transform ${rt ? `text-[#d14343]` : `hover:text-[#6d5b97]`}`,
                title: rt ? `Favorited` : `Add to favorites`,
                children: (0, Q.jsx)(V, {
                  className: `size-5 transition-colors ${rt ? `fill-[#d14343] text-[#d14343]` : ``}`,
                }),
              }),
              (0, Q.jsxs)(`button`, {
                onClick: _t,
                className: `p-1.5 relative active:scale-90 transition-transform ${v === `off` ? `hover:text-[#6d5b97]` : `text-[#6d5b97]`}`,
                title: `Repeat: ${v}`,
                children: [
                  v === `one`
                    ? (0, Q.jsx)(Ne, { className: `size-5 text-[#6d5b97]` })
                    : (0, Q.jsx)(Pe, { className: `size-5` }),
                  v === `all` &&
                    (0, Q.jsx)(`span`, {
                      className: `absolute bottom-1 right-1 size-1.5 rounded-full bg-[#6d5b97]`,
                    }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: () => fe(!0),
                className: `p-1.5 relative active:scale-90 transition-transform ${Xe === null ? `hover:text-[#6d5b97]` : `text-[#6d5b97]`}`,
                title: `Sleep timer`,
                children: [
                  (0, Q.jsx)(De, { className: `size-5` }),
                  Xe !== null &&
                    (0, Q.jsxs)(`span`, {
                      className: `absolute -top-1 -right-2 bg-[#6d5b97] text-white text-[8px] px-1 rounded-full font-mono`,
                      children: [Math.ceil(Xe / 60), `m`],
                    }),
                ],
              }),
              (0, Q.jsx)(`button`, {
                onClick: yt,
                className: `p-1.5 hover:text-[#6d5b97] active:scale-90 transition-transform`,
                title: `Share track`,
                children: (0, Q.jsx)(Be, { className: `size-5` }),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [
              (0, Q.jsx)(`div`, {
                ref: Et,
                className: `h-12 w-full flex items-center justify-between gap-[2.5px] sm:gap-[3px] cursor-pointer select-none py-1 relative group`,
                onPointerDown: (e) => {
                  ((Dt.current = !0), Ot(e.clientX));
                },
                onPointerMove: (e) => {
                  Dt.current && Ot(e.clientX);
                },
                onPointerUp: () => {
                  Dt.current = !1;
                },
                onPointerLeave: () => {
                  Dt.current = !1;
                },
                children: Bt.map((e, t) => {
                  let n = t <= jt,
                    r = t === jt,
                    i = 1;
                  if (u) {
                    let e =
                      Math.sin(Ct * 6 + t * 0.35) * 0.28 +
                      Math.cos(Ct * 4 - t * 0.2) * 0.15;
                    i = Math.max(0.3, 1 + e);
                  }
                  let a = Math.min(100, Math.max(14, e * 100 * i));
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `flex-1 flex flex-col justify-center items-center h-full relative`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `w-[2.5px] sm:w-[3px] rounded-full transition-all duration-75 ${n ? `bg-[#6d5b97]` : `bg-[#cfc8c2] dark:bg-muted-foreground/30`}`,
                          style: { height: `${a}%` },
                        }),
                        r &&
                          (0, Q.jsx)(`div`, {
                            className: `absolute top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#6d5b97] shadow-md border-2 border-white pointer-events-none ring-2 ring-[#6d5b97]/30 scale-110`,
                          }),
                      ],
                    },
                    t,
                  );
                }),
              }),
              (0, Q.jsxs)(`div`, {
                className: `flex justify-between text-xs font-medium text-[#7a6f67] px-0.5`,
                children: [
                  (0, Q.jsx)(`span`, { children: kt(f) }),
                  (0, Q.jsx)(`span`, { children: kt(m) }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between px-1`,
            children: [
              (0, Q.jsx)(`button`, {
                onClick: () => {
                  (b(!y), Z(y ? `Shuffle Off` : `Shuffle On`));
                },
                className: `p-2 transition-transform active:scale-90 ${y ? `text-[#6d5b97]` : `text-[#574d46] hover:text-[#6d5b97]`}`,
                title: `Toggle shuffle`,
                children: (0, Q.jsx)(Ue, { className: `size-5` }),
              }),
              (0, Q.jsx)(`button`, {
                onClick: mt,
                className: `p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform`,
                title: `Previous track`,
                children: (0, Q.jsx)(We, { className: `size-6 fill-current` }),
              }),
              (0, Q.jsx)(`button`, {
                onClick: ft,
                className: `size-16 rounded-full bg-[#6d5b97] hover:bg-[#5e4d87] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all mx-2`,
                "aria-label": u ? `Pause` : `Play`,
                children: u
                  ? (0, Q.jsx)(ke, { className: `size-8 fill-current` })
                  : (0, Q.jsx)(G, { className: `size-8 fill-current ml-1` }),
              }),
              (0, Q.jsx)(`button`, {
                onClick: pt,
                className: `p-2 text-[#2b2520] hover:text-[#6d5b97] active:scale-90 transition-transform`,
                title: `Next track`,
                children: (0, Q.jsx)(Ge, { className: `size-6 fill-current` }),
              }),
              (0, Q.jsxs)(`button`, {
                onClick: vt,
                className: `px-2.5 py-1 rounded-full bg-[#ece6f2] hover:bg-[#dfd7e8] text-[#6d5b97] font-semibold text-xs tracking-tight active:scale-95 transition-all shadow-xs`,
                title: `Change playback speed`,
                children: [g.toFixed(1), `x`],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-center gap-12 text-[#685d55]`,
            children: [
              (0, Q.jsxs)(`button`, {
                onClick: () => ht(-10),
                className: `flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative`,
                title: `Rewind 10 seconds`,
                children: [
                  (0, Q.jsx)(Fe, { className: `size-5` }),
                  (0, Q.jsx)(`span`, {
                    className: `text-[7.5px] font-bold absolute top-[5px]`,
                    children: `10`,
                  }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: () => ht(10),
                className: `flex flex-col items-center gap-0.5 p-1 hover:text-[#6d5b97] active:scale-90 transition-transform relative`,
                title: `Forward 10 seconds`,
                children: [
                  (0, Q.jsx)(q, { className: `size-5` }),
                  (0, Q.jsx)(`span`, {
                    className: `text-[7.5px] font-bold absolute top-[5px]`,
                    children: `10`,
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `border-t border-[#e8e2d9] pt-2.5 pb-1 mt-0.5 flex flex-col gap-2`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2.5 px-3 py-1.5 bg-white/80 rounded-2xl border border-[#e8e2d9] shadow-2xs`,
                children: [
                  (0, Q.jsx)(`button`, {
                    type: `button`,
                    onClick: dt,
                    className: `p-1 rounded-lg text-[#685d55] hover:text-[#6d5b97] hover:bg-black/5 active:scale-90 transition-all shrink-0`,
                    title: w || S === 0 ? `Unmute` : `Mute`,
                    "aria-label": w || S === 0 ? `Unmute` : `Mute`,
                    children:
                      w || S === 0
                        ? (0, Q.jsx)(nt, {
                            className: `size-4.5 text-[#d14343]`,
                          })
                        : S < 0.5
                          ? (0, Q.jsx)(et, {
                              className: `size-4.5 text-[#6d5b97]`,
                            })
                          : (0, Q.jsx)(tt, {
                              className: `size-4.5 text-[#6d5b97]`,
                            }),
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex-1 flex items-center gap-2.5`,
                    children: [
                      (0, Q.jsx)(`input`, {
                        type: `range`,
                        min: `0`,
                        max: `1`,
                        step: `0.01`,
                        value: w ? 0 : S,
                        onChange: ut,
                        className: `w-full h-1.5 bg-[#e4ddd5] rounded-lg appearance-none cursor-pointer accent-[#6d5b97] transition-all`,
                        "aria-label": `Playback volume`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[11px] font-semibold text-[#7a6f67] w-9 text-right font-mono shrink-0 select-none`,
                        children: w ? `0%` : `${Math.round(S * 100)}%`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between text-xs gap-1.5`,
                children: [
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (_e(`playlists`), je(null), B(!0));
                    },
                    className: `flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]`,
                    title: `View playlists`,
                    children: [
                      (0, Q.jsx)(be, {
                        className: `size-4 text-[#6d5b97] shrink-0`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `font-semibold text-xs`,
                        children: `Playlist`,
                      }),
                      we.length > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0`,
                          children: we.length,
                        }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (_e(`favorites`), B(!0));
                    },
                    className: `flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#d14343]`,
                    title: `View favorites`,
                    children: [
                      (0, Q.jsx)(V, {
                        className: `size-4 fill-[#d14343] text-[#d14343] shrink-0`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `font-semibold text-xs`,
                        children: `Favorites`,
                      }),
                      Y.length > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `text-[10px] bg-red-50 text-[#d14343] font-bold px-1.5 py-0.2 rounded-full shrink-0`,
                          children: Y.length,
                        }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (_e(`albums`), ye(null), B(!0));
                    },
                    className: `flex items-center justify-center gap-1.5 flex-1 py-2 px-2 rounded-xl bg-white hover:bg-[#f6f2ec] border border-[#e8e2d9] shadow-xs active:scale-95 transition-all text-[#3c342d] hover:text-[#6d5b97]`,
                    title: `View albums`,
                    children: [
                      (0, Q.jsx)(R, {
                        className: `size-4 text-[#6d5b97] shrink-0`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `font-semibold text-xs`,
                        children: `Albums`,
                      }),
                      Ce.length > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `text-[10px] bg-[#ece6f2] text-[#6d5b97] font-bold px-1.5 py-0.2 rounded-full shrink-0`,
                          children: Ce.length,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, Q.jsx)(`audio`, {
        ref: $,
        preload: `auto`,
        onPlay: () => d(!0),
        onPause: () => d(!1),
        onEnded: St,
        onTimeUpdate: () => p($.current?.currentTime || 0),
        onLoadedMetadata: () => h($.current?.duration || 0),
        onError: () => {
          (d(!1), x(`Unable to play this audio file.`));
        },
      }),
      E &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex flex-col justify-end`,
          onClick: () => D(!1),
          children: (0, Q.jsxs)(`div`, {
            className: `bg-white rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-200 text-[#1a1a1a]`,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between pb-3 mb-2 border-b border-[#f0ece5]`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `min-w-0 flex-1`,
                    children: [
                      (0, Q.jsx)(`p`, {
                        className: `font-semibold text-sm truncate`,
                        children: l.title,
                      }),
                      (0, Q.jsx)(`p`, {
                        className: `text-xs text-[#8c827a] truncate`,
                        children: l.artist,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => D(!1),
                    className: `p-1 rounded-full hover:bg-black/5 text-[#7a6f67]`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `divide-y divide-[#f5f1eb] text-sm font-medium`,
                children: [
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (D(!1), j(!0));
                    },
                    className: `w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsx)(R, { className: `size-5 text-[#2b2520]` }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[15px]`,
                        children: `Go to album`,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (D(!1), N(!0));
                    },
                    className: `w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsx)(Qe, { className: `size-5 text-[#2b2520]` }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[15px]`,
                        children: `Go to artist`,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (D(!1), _e(`playlists`), je(null), B(!0));
                    },
                    className: `w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsx)(xe, { className: `size-5 text-[#2b2520]` }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[15px]`,
                        children: `Add to playlist`,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: bt,
                    className: `w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsx)(Ae, { className: `size-5 text-[#2b2520]` }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[15px]`,
                        children: `Set as ringtone`,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (it(), D(!1));
                    },
                    className: `w-full flex items-center gap-4 py-3.5 hover:text-[#d14343] active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsx)(V, {
                        className: `size-5 ${rt ? `fill-[#d14343] text-[#d14343]` : `text-[#2b2520]`}`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[15px]`,
                        children: rt
                          ? `Remove from favorites`
                          : `Add to favorites`,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: xt,
                    className: `w-full flex items-center gap-4 py-3.5 text-[#d14343] hover:opacity-80 active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsx)(Se, { className: `size-5` }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[15px]`,
                        children: `Remove`,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      let e = !O;
                      (k(e),
                        D(!1),
                        Z(
                          e
                            ? `Will stop playback after this track`
                            : `Stop after this track disabled`,
                        ));
                    },
                    className: `w-full flex items-center justify-between py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-4`,
                        children: [
                          (0, Q.jsx)(Re, {
                            className: `size-5 text-[#2b2520]`,
                          }),
                          (0, Q.jsx)(`span`, {
                            className: `text-[15px]`,
                            children: `Stop after this track`,
                          }),
                        ],
                      }),
                      O &&
                        (0, Q.jsx)(ie, {
                          className: `size-4 text-[#6d5b97] font-bold`,
                        }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (D(!1), yt());
                    },
                    className: `w-full flex items-center gap-4 py-3.5 hover:text-[#6d5b97] active:bg-black/5 transition-colors text-left`,
                    children: [
                      (0, Q.jsx)(Be, { className: `size-5 text-[#2b2520]` }),
                      (0, Q.jsx)(`span`, {
                        className: `text-[15px]`,
                        children: `Share`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      A &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4`,
          children: (0, Q.jsxs)(`div`, {
            className: `bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between pb-3 border-b border-[#e8e2d9]`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Q.jsx)(R, { className: `size-5 text-[#6d5b97]` }),
                      (0, Q.jsx)(`h3`, {
                        className: `font-semibold text-base`,
                        children: `Album Overview`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => j(!1),
                    className: `p-1 rounded-full hover:bg-black/5`,
                    children: (0, Q.jsx)(X, {
                      className: `size-5 text-[#5e534a]`,
                    }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `mt-4 space-y-4`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]`,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `size-16 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0`,
                        children: (0, Q.jsx)(R, {
                          className: `size-8 text-[#6d5b97]`,
                        }),
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, Q.jsx)(`h4`, {
                            className: `font-bold text-sm text-[#2b2520] truncate`,
                            children: l.album,
                          }),
                          (0, Q.jsx)(`p`, {
                            className: `text-xs text-[#8c827a] truncate mt-0.5`,
                            children: l.artist,
                          }),
                          (0, Q.jsxs)(`p`, {
                            className: `text-[11px] text-[#6d5b97] font-medium mt-1`,
                            children: [
                              a.length,
                              ` `,
                              a.length === 1 ? `track` : `tracks`,
                              ` available`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `space-y-1.5 max-h-48 overflow-y-auto`,
                    children: [
                      (0, Q.jsx)(`p`, {
                        className: `text-xs font-semibold text-[#8c827a] uppercase`,
                        children: `Tracks in this Album / Session`,
                      }),
                      a.map((e, t) =>
                        (0, Q.jsxs)(
                          `button`,
                          {
                            onClick: () => {
                              (s(t), j(!1));
                            },
                            className: `w-full flex items-center justify-between p-2.5 rounded-xl text-xs text-left transition-colors ${t === o ? `bg-[#ece6f2] text-[#6d5b97] font-semibold` : `bg-white border border-[#e8e2d9] hover:bg-[#f6f2ec]`}`,
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `truncate flex-1`,
                                children: e.name,
                              }),
                              t === o &&
                                (0, Q.jsx)(`span`, {
                                  className: `text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full ml-2`,
                                  children: `Playing`,
                                }),
                            ],
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => j(!1),
                    className: `w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]`,
                    children: `Close`,
                  }),
                ],
              }),
            ],
          }),
        }),
      M &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[85] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4`,
          children: (0, Q.jsxs)(`div`, {
            className: `bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between pb-3 border-b border-[#e8e2d9]`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Q.jsx)(Qe, { className: `size-5 text-[#6d5b97]` }),
                      (0, Q.jsx)(`h3`, {
                        className: `font-semibold text-base`,
                        children: `Artist Profile`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => N(!1),
                    className: `p-1 rounded-full hover:bg-black/5`,
                    children: (0, Q.jsx)(X, {
                      className: `size-5 text-[#5e534a]`,
                    }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `mt-4 space-y-4`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#e8e2d9]`,
                    children: [
                      (0, Q.jsx)(`div`, {
                        className: `size-16 rounded-full bg-[#ece6f2] flex items-center justify-center shrink-0`,
                        children: (0, Q.jsx)(Qe, {
                          className: `size-8 text-[#6d5b97]`,
                        }),
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, Q.jsx)(`h4`, {
                            className: `font-bold text-base text-[#2b2520] truncate`,
                            children: l.artist,
                          }),
                          (0, Q.jsxs)(`p`, {
                            className: `text-xs text-[#8c827a] mt-0.5`,
                            children: [`Track: `, l.title],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`a`, {
                    href: `https://www.google.com/search?q=${encodeURIComponent(l.artist + ` music`)}`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#e8e2d9] text-xs font-semibold text-[#6d5b97] hover:bg-[#ece6f2]/50 transition-colors`,
                    children: [
                      (0, Q.jsx)(de, { className: `size-3.5` }),
                      (0, Q.jsxs)(`span`, {
                        children: [`Search `, l.artist, ` on Google`],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => N(!1),
                    className: `w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87]`,
                    children: `Close`,
                  }),
                ],
              }),
            ],
          }),
        }),
      he &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end`,
          children: (0, Q.jsxs)(`div`, {
            className: `bg-[#fbf9f6] rounded-t-3xl max-h-[75vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between px-4 pt-4 pb-2 border-b border-[#e8e2d9]`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2 bg-[#ece6f2]/80 p-1 rounded-xl`,
                    children: [
                      (0, Q.jsxs)(`button`, {
                        onClick: () => {
                          (_e(`playlists`), je(null));
                        },
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${H === `playlists` ? `bg-white text-[#6d5b97] shadow-xs` : `text-[#685d55] hover:text-[#2b2520]`}`,
                        children: [
                          (0, Q.jsx)(be, { className: `size-3.5` }),
                          (0, Q.jsx)(`span`, { children: `Playlist` }),
                        ],
                      }),
                      (0, Q.jsxs)(`button`, {
                        onClick: () => _e(`favorites`),
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${H === `favorites` ? `bg-white text-[#d14343] shadow-xs` : `text-[#685d55] hover:text-[#2b2520]`}`,
                        children: [
                          (0, Q.jsx)(V, {
                            className: `size-3.5 fill-[#d14343] text-[#d14343]`,
                          }),
                          (0, Q.jsx)(`span`, { children: `Favorites` }),
                          Y.length > 0 &&
                            (0, Q.jsx)(`span`, {
                              className: `text-[10px] bg-red-100 text-[#d14343] px-1.5 rounded-full`,
                              children: Y.length,
                            }),
                        ],
                      }),
                      (0, Q.jsxs)(`button`, {
                        onClick: () => {
                          (_e(`albums`), ye(null));
                        },
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${H === `albums` ? `bg-white text-[#6d5b97] shadow-xs` : `text-[#685d55] hover:text-[#2b2520]`}`,
                        children: [
                          (0, Q.jsx)(R, { className: `size-3.5` }),
                          (0, Q.jsx)(`span`, { children: `Albums` }),
                          Ce.length > 0 &&
                            (0, Q.jsx)(`span`, {
                              className: `text-[10px] bg-[#ece6f2] text-[#6d5b97] px-1.5 rounded-full`,
                              children: Ce.length,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => B(!1),
                    className: `p-1 rounded-full hover:bg-black/5`,
                    children: (0, Q.jsx)(X, {
                      className: `size-5 text-[#5e534a]`,
                    }),
                  }),
                ],
              }),
              H === `playlists` &&
                (0, Q.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto p-4 space-y-4`,
                  children: W
                    ? (() => {
                        let e = we.find((e) => e.id === W);
                        return e
                          ? (0, Q.jsxs)(`div`, {
                              className: `space-y-3`,
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    (0, Q.jsx)(`button`, {
                                      onClick: () => je(null),
                                      className: `text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1`,
                                      children: `← Back to all playlists`,
                                    }),
                                    (0, Q.jsxs)(`span`, {
                                      className: `text-xs text-[#8c827a]`,
                                      children: [
                                        e.trackNames.length,
                                        ` tracks`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center justify-between pb-2 border-b border-[#e8e2d9]`,
                                  children: [
                                    (0, Q.jsx)(`h4`, {
                                      className: `font-bold text-base text-[#2b2520]`,
                                      children: e.name,
                                    }),
                                    (0, Q.jsxs)(`button`, {
                                      onClick: () => ze(e.id),
                                      className: `flex items-center gap-1 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]`,
                                      children: [
                                        (0, Q.jsx)(Me, {
                                          className: `size-3.5`,
                                        }),
                                        `Add Current Track`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `space-y-1.5`,
                                  children: [
                                    e.trackNames.map((t, n) =>
                                      (0, Q.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9] text-xs hover:border-[#6d5b97]/40 transition-colors`,
                                          children: [
                                            (0, Q.jsxs)(`button`, {
                                              onClick: () => ot(t),
                                              className: `flex items-center gap-2 min-w-0 flex-1 text-left`,
                                              children: [
                                                (0, Q.jsx)(P, {
                                                  className: `size-4 text-[#6d5b97] shrink-0`,
                                                }),
                                                (0, Q.jsx)(`span`, {
                                                  className: `font-medium truncate`,
                                                  children: t,
                                                }),
                                              ],
                                            }),
                                            (0, Q.jsx)(`button`, {
                                              onClick: () => Ve(e.id, t),
                                              className: `p-1 text-[#a3978e] hover:text-destructive`,
                                              title: `Remove track`,
                                              children: (0, Q.jsx)(J, {
                                                className: `size-3.5`,
                                              }),
                                            }),
                                          ],
                                        },
                                        n,
                                      ),
                                    ),
                                    e.trackNames.length === 0 &&
                                      (0, Q.jsx)(`p`, {
                                        className: `text-center py-8 text-xs text-[#8c827a]`,
                                        children: `No tracks in this playlist yet. Tap "Add Current Track" above to add one!`,
                                      }),
                                  ],
                                }),
                              ],
                            })
                          : null;
                      })()
                    : (0, Q.jsxs)(Q.Fragment, {
                        children: [
                          (0, Q.jsxs)(`form`, {
                            onSubmit: Ie,
                            className: `flex gap-2`,
                            children: [
                              (0, Q.jsx)(`input`, {
                                type: `text`,
                                value: Te,
                                onChange: (e) => Ee(e.target.value),
                                placeholder: `New playlist name...`,
                                className: `flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#e8e2d9] focus:outline-none focus:ring-2 focus:ring-[#6d5b97]`,
                              }),
                              (0, Q.jsxs)(`button`, {
                                type: `submit`,
                                className: `flex items-center gap-1.5 px-3 py-2 bg-[#6d5b97] text-white text-xs font-semibold rounded-xl hover:bg-[#5e4d87] transition-colors shadow-xs`,
                                children: [
                                  (0, Q.jsx)(ge, { className: `size-3.5` }),
                                  (0, Q.jsx)(`span`, { children: `Create` }),
                                ],
                              }),
                            ],
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Q.jsxs)(`h4`, {
                                className: `text-xs font-semibold text-[#8c827a] uppercase tracking-wider`,
                                children: [`Your Playlists (`, we.length, `)`],
                              }),
                              we.map((e) =>
                                (0, Q.jsxs)(
                                  `div`,
                                  {
                                    className: `flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-[#6d5b97]/50 shadow-xs transition-all`,
                                    children: [
                                      (0, Q.jsxs)(`button`, {
                                        onClick: () => je(e.id),
                                        className: `flex items-center gap-3 min-w-0 flex-1 text-left`,
                                        children: [
                                          (0, Q.jsx)(`div`, {
                                            className: `size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center shrink-0`,
                                            children: (0, Q.jsx)(be, {
                                              className: `size-5 text-[#6d5b97]`,
                                            }),
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            className: `min-w-0 flex-1`,
                                            children: [
                                              (0, Q.jsx)(`p`, {
                                                className: `font-semibold text-sm truncate`,
                                                children: e.name,
                                              }),
                                              (0, Q.jsxs)(`p`, {
                                                className: `text-xs text-[#8c827a]`,
                                                children: [
                                                  e.trackNames.length,
                                                  ` `,
                                                  e.trackNames.length === 1
                                                    ? `track`
                                                    : `tracks`,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center gap-1.5`,
                                        children: [
                                          (0, Q.jsx)(`button`, {
                                            onClick: () => ze(e.id),
                                            className: `p-1.5 text-[#6d5b97] hover:bg-[#ece6f2] rounded-lg`,
                                            title: `Add current track`,
                                            children: (0, Q.jsx)(Me, {
                                              className: `size-4`,
                                            }),
                                          }),
                                          (0, Q.jsx)(`button`, {
                                            onClick: () => Le(e.id, e.name),
                                            className: `p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg`,
                                            title: `Delete playlist`,
                                            children: (0, Q.jsx)(J, {
                                              className: `size-4`,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                }),
              H === `favorites` &&
                (0, Q.jsxs)(`div`, {
                  className: `flex-1 overflow-y-auto p-4 space-y-3`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between pb-2 border-b border-[#e8e2d9]`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsx)(`h4`, {
                              className: `font-bold text-sm text-[#2b2520]`,
                              children: `Favorite Tracks`,
                            }),
                            (0, Q.jsxs)(`p`, {
                              className: `text-xs text-[#8c827a]`,
                              children: [
                                Y.length,
                                ` `,
                                Y.length === 1 ? `song` : `songs`,
                                ` saved`,
                              ],
                            }),
                          ],
                        }),
                        Y.length > 0 &&
                          Mt.length > 0 &&
                          (0, Q.jsxs)(`button`, {
                            onClick: () => ot(Mt[0].name),
                            className: `flex items-center gap-1.5 text-xs bg-[#6d5b97] text-white px-3 py-1.5 rounded-xl font-medium shadow-xs hover:bg-[#5e4d87]`,
                            children: [
                              (0, Q.jsx)(P, { className: `size-3.5` }),
                              `Play Favorites`,
                            ],
                          }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `space-y-1.5`,
                      children: [
                        Y.map((e, t) => {
                          let n = c?.name === e;
                          return (0, Q.jsxs)(
                            `div`,
                            {
                              className: `flex items-center justify-between p-3 rounded-xl border text-xs transition-colors ${n ? `bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]` : `bg-white border-[#e8e2d9] text-[#2b2520]`}`,
                              children: [
                                (0, Q.jsxs)(`button`, {
                                  onClick: () => ot(e),
                                  className: `flex items-center gap-2.5 min-w-0 flex-1 text-left`,
                                  children: [
                                    (0, Q.jsx)(P, {
                                      className: `size-4.5 ${n ? `text-[#6d5b97]` : `text-[#7a6f67]`}`,
                                    }),
                                    (0, Q.jsxs)(`div`, {
                                      className: `min-w-0 flex-1`,
                                      children: [
                                        (0, Q.jsx)(`p`, {
                                          className: `font-medium truncate`,
                                          children: e,
                                        }),
                                        n &&
                                          (0, Q.jsx)(`p`, {
                                            className: `text-[10px] text-[#6d5b97] font-semibold`,
                                            children: `Currently Playing`,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`button`, {
                                  onClick: () => at(e),
                                  className: `p-1 text-[#d14343] hover:bg-red-50 rounded-lg transition-colors ml-2`,
                                  title: `Remove from favorites`,
                                  children: (0, Q.jsx)(V, {
                                    className: `size-4 fill-[#d14343]`,
                                  }),
                                }),
                              ],
                            },
                            t,
                          );
                        }),
                        Y.length === 0 &&
                          (0, Q.jsxs)(`div`, {
                            className: `text-center py-10 space-y-3`,
                            children: [
                              (0, Q.jsx)(`div`, {
                                className: `size-12 rounded-full bg-red-50 text-[#d14343] flex items-center justify-center mx-auto`,
                                children: (0, Q.jsx)(V, {
                                  className: `size-6 fill-[#d14343]`,
                                }),
                              }),
                              (0, Q.jsx)(`p`, {
                                className: `text-xs text-[#8c827a]`,
                                children: `No favorite tracks yet.`,
                              }),
                              c &&
                                (0, Q.jsxs)(`button`, {
                                  onClick: it,
                                  className: `inline-flex items-center gap-1.5 text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-4 py-2 rounded-xl hover:bg-[#dfd7e8] transition-colors`,
                                  children: [
                                    (0, Q.jsx)(V, { className: `size-3.5` }),
                                    `Favorite Current Song`,
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              H === `albums` &&
                (0, Q.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto p-4 space-y-4`,
                  children: ve
                    ? (() => {
                        let e = Ce.find((e) => e.albumName === ve);
                        return e
                          ? (0, Q.jsxs)(`div`, {
                              className: `space-y-3`,
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    (0, Q.jsx)(`button`, {
                                      onClick: () => ye(null),
                                      className: `text-xs font-medium text-[#6d5b97] hover:underline flex items-center gap-1`,
                                      children: `← Back to all albums`,
                                    }),
                                    (0, Q.jsxs)(`span`, {
                                      className: `text-xs text-[#8c827a]`,
                                      children: [
                                        e.tracks.length,
                                        ` `,
                                        e.tracks.length === 1
                                          ? `track`
                                          : `tracks`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs`,
                                  children: [
                                    (0, Q.jsx)(`div`, {
                                      className: `size-12 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0`,
                                      children: (0, Q.jsx)(R, {
                                        className: `size-6 animate-spin [animation-duration:8s]`,
                                      }),
                                    }),
                                    (0, Q.jsxs)(`div`, {
                                      className: `min-w-0 flex-1`,
                                      children: [
                                        (0, Q.jsx)(`h4`, {
                                          className: `font-bold text-sm text-[#2b2520] truncate`,
                                          children: e.albumName,
                                        }),
                                        (0, Q.jsx)(`p`, {
                                          className: `text-xs text-[#8c827a] truncate`,
                                          children: e.artist,
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsxs)(`button`, {
                                      onClick: () => {
                                        e.tracks.length > 0 &&
                                          (s(e.tracks[0].index),
                                          Z(`Playing "${e.albumName}"`));
                                      },
                                      className: `flex items-center gap-1.5 px-3 py-1.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] shadow-xs`,
                                      children: [
                                        (0, Q.jsx)(G, {
                                          className: `size-3.5 fill-current`,
                                        }),
                                        (0, Q.jsx)(`span`, {
                                          children: `Play All`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `space-y-1.5`,
                                  children: e.tracks.map(
                                    ({ file: e, index: t }) => {
                                      let n = t === o,
                                        r = zt(e);
                                      return (0, Q.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${n ? `bg-[#ece6f2] border-[#6d5b97] text-[#6d5b97]` : `bg-white border-[#e8e2d9] hover:bg-[#f6f2ec] text-[#2b2520]`}`,
                                          children: [
                                            (0, Q.jsxs)(`button`, {
                                              onClick: () => s(t),
                                              className: `flex items-center gap-2.5 min-w-0 flex-1 text-left`,
                                              children: [
                                                (0, Q.jsx)(P, {
                                                  className: `size-4 ${n ? `text-[#6d5b97]` : `text-[#8c827a]`}`,
                                                }),
                                                (0, Q.jsxs)(`div`, {
                                                  className: `min-w-0 flex-1`,
                                                  children: [
                                                    (0, Q.jsx)(`p`, {
                                                      className: `font-medium truncate`,
                                                      children: r.title,
                                                    }),
                                                    (0, Q.jsx)(`p`, {
                                                      className: `text-[10px] text-[#8c827a] truncate`,
                                                      children: r.artist,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            n &&
                                              (0, Q.jsx)(`span`, {
                                                className: `text-[10px] bg-[#6d5b97] text-white px-2 py-0.5 rounded-full font-semibold`,
                                                children: `Playing`,
                                              }),
                                          ],
                                        },
                                        t,
                                      );
                                    },
                                  ),
                                }),
                              ],
                            })
                          : null;
                      })()
                    : (0, Q.jsxs)(Q.Fragment, {
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `p-3.5 rounded-2xl bg-gradient-to-r from-[#ece6f2] to-[#f4eff8] border border-[#ded5e5] flex items-center justify-between gap-3 shadow-xs`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-3 min-w-0 flex-1`,
                                children: [
                                  (0, Q.jsx)(`div`, {
                                    className: `size-11 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#6d5b97] shrink-0`,
                                    children: (0, Q.jsx)(R, {
                                      className: `size-6`,
                                    }),
                                  }),
                                  (0, Q.jsxs)(`div`, {
                                    className: `min-w-0 flex-1`,
                                    children: [
                                      (0, Q.jsx)(`span`, {
                                        className: `text-[10px] uppercase font-bold text-[#6d5b97] tracking-wider`,
                                        children: `Now Playing Album`,
                                      }),
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-bold text-sm text-[#2b2520] truncate`,
                                        children: l.album,
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-xs text-[#685d55] truncate`,
                                        children: l.artist,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`button`, {
                                onClick: () => ye(l.album),
                                className: `px-3 py-1.5 rounded-xl bg-white text-[#6d5b97] text-xs font-semibold hover:bg-white/80 shadow-2xs shrink-0`,
                                children: `View Tracks`,
                              }),
                            ],
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Q.jsxs)(`h4`, {
                                className: `text-xs font-semibold text-[#8c827a] uppercase tracking-wider`,
                                children: [
                                  `Available Albums (`,
                                  Ce.length,
                                  `)`,
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `grid grid-cols-1 gap-2`,
                                children: [
                                  Ce.map((e) => {
                                    let t = l.album === e.albumName;
                                    return (0, Q.jsxs)(
                                      `button`,
                                      {
                                        onClick: () => ye(e.albumName),
                                        className: `w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:scale-[1.01] ${t ? `bg-white border-[#6d5b97]/60 shadow-xs ring-1 ring-[#6d5b97]/30` : `bg-white border-[#e8e2d9] hover:border-[#6d5b97]/40 shadow-xs`}`,
                                        children: [
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-3 min-w-0 flex-1`,
                                            children: [
                                              (0, Q.jsx)(`div`, {
                                                className: `size-10 rounded-xl bg-[#ece6f2] flex items-center justify-center text-[#6d5b97] shrink-0`,
                                                children: (0, Q.jsx)(R, {
                                                  className: `size-5`,
                                                }),
                                              }),
                                              (0, Q.jsxs)(`div`, {
                                                className: `min-w-0 flex-1`,
                                                children: [
                                                  (0, Q.jsx)(`p`, {
                                                    className: `font-semibold text-sm text-[#2b2520] truncate`,
                                                    children: e.albumName,
                                                  }),
                                                  (0, Q.jsxs)(`p`, {
                                                    className: `text-xs text-[#8c827a] truncate`,
                                                    children: [
                                                      e.artist,
                                                      ` • `,
                                                      e.tracks.length,
                                                      ` `,
                                                      e.tracks.length === 1
                                                        ? `track`
                                                        : `tracks`,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsx)(`span`, {
                                            className: `text-xs text-[#6d5b97] font-medium ml-2 shrink-0`,
                                            children: `Browse →`,
                                          }),
                                        ],
                                      },
                                      e.albumName,
                                    );
                                  }),
                                  Ce.length === 0 &&
                                    (0, Q.jsx)(`p`, {
                                      className: `text-center py-8 text-xs text-[#8c827a]`,
                                      children: `No albums found in current playlist`,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
            ],
          }),
        }),
      oe &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex flex-col justify-end`,
          children: (0, Q.jsxs)(`div`, {
            className: `bg-[#fbf9f6] rounded-t-3xl max-h-[70vh] flex flex-col shadow-2xl animate-in slide-in-from-bottom duration-200`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between p-4 border-b border-[#e8e2d9]`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Q.jsx)(be, { className: `size-5 text-[#6d5b97]` }),
                      (0, Q.jsx)(`h3`, {
                        className: `font-semibold text-base`,
                        children: `Playing Queue`,
                      }),
                      (0, Q.jsx)(`span`, {
                        className: `text-xs bg-[#ece6f2] text-[#6d5b97] font-semibold px-2 py-0.5 rounded-full`,
                        children: a.length,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => I(!1),
                    className: `p-1 rounded-full hover:bg-black/5`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `overflow-y-auto p-3 space-y-1 divide-y divide-[#ece6f2]/50`,
                children: [
                  a.map((e, t) => {
                    let n = t === o;
                    return (0, Q.jsxs)(
                      `button`,
                      {
                        onClick: () => {
                          (s(t), I(!1));
                        },
                        className: `w-full flex items-center gap-3 p-3 rounded-xl text-left text-sm transition-colors ${n ? `bg-[#ece6f2] text-[#6d5b97] font-medium` : `hover:bg-black/5 text-[#3b322a]`}`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `w-5 text-center text-xs opacity-60`,
                            children: t + 1,
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `flex-1 truncate`,
                            children: (0, Q.jsx)(`p`, {
                              className: `truncate`,
                              children: e.name,
                            }),
                          }),
                          n &&
                            (0, Q.jsxs)(`span`, {
                              className: `flex gap-0.5 items-end h-4`,
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `w-0.5 h-3 bg-[#6d5b97] animate-pulse`,
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `w-0.5 h-4 bg-[#6d5b97] animate-pulse delay-75`,
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `w-0.5 h-2 bg-[#6d5b97] animate-pulse delay-150`,
                                }),
                              ],
                            }),
                        ],
                      },
                      t,
                    );
                  }),
                  a.length === 0 &&
                    (0, Q.jsx)(`p`, {
                      className: `text-center py-8 text-xs text-[#8c827a]`,
                      children: `No songs in queue`,
                    }),
                ],
              }),
            ],
          }),
        }),
      L &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4`,
          children: (0, Q.jsxs)(`div`, {
            className: `bg-[#fbf9f6] rounded-2xl w-full max-w-sm p-5 shadow-2xl animate-in zoom-in-95 duration-150`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between pb-3 border-b border-[#e8e2d9]`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Q.jsx)(Ke, { className: `size-5 text-[#6d5b97]` }),
                      (0, Q.jsx)(`h3`, {
                        className: `font-semibold text-base`,
                        children: `Sound & Track Info`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => ce(!1),
                    className: `p-1 rounded-full hover:bg-black/5`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `mt-4 space-y-4`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `bg-[#f1ebe3] p-3 rounded-xl text-xs space-y-1.5 text-[#5e534a]`,
                    children: [
                      (0, Q.jsx)(`p`, {
                        className: `font-medium text-[#2b2520] truncate`,
                        children: c?.name,
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [
                          (0, Q.jsx)(`span`, { children: `File size:` }),
                          (0, Q.jsx)(`span`, {
                            className: `font-mono`,
                            children: c
                              ? `${(c.size / 1048576).toFixed(2)} MB`
                              : `Unknown`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [
                          (0, Q.jsx)(`span`, { children: `Format:` }),
                          (0, Q.jsx)(`span`, {
                            className: `font-mono uppercase`,
                            children: c?.name.split(`.`).pop() || `Audio`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [
                          (0, Q.jsx)(`span`, { children: `Length:` }),
                          (0, Q.jsx)(`span`, {
                            className: `font-mono`,
                            children: kt(m),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`p`, {
                        className: `text-xs font-semibold text-[#5e534a] mb-2`,
                        children: `Sound Profile Preset`,
                      }),
                      (0, Q.jsx)(`div`, {
                        className: `grid grid-cols-2 gap-2 text-xs`,
                        children: [
                          `Flat (Original)`,
                          `Bass Boost`,
                          `Vocal Enhance`,
                          `Treble Boost`,
                        ].map((e) =>
                          (0, Q.jsx)(
                            `button`,
                            {
                              onClick: () => {
                                (qe(e), Z(`Preset: ${e}`));
                              },
                              className: `p-2.5 rounded-lg border text-left transition-all ${He === e ? `border-[#6d5b97] bg-[#ece6f2] text-[#6d5b97] font-semibold` : `border-[#e0d8cd] hover:bg-black/5 text-[#4a423a]`}`,
                              children: (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between`,
                                children: [
                                  (0, Q.jsx)(`span`, { children: e }),
                                  He === e &&
                                    (0, Q.jsx)(ie, {
                                      className: `size-3.5 text-[#6d5b97]`,
                                    }),
                                ],
                              }),
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => ce(!1),
                    className: `w-full py-2.5 bg-[#6d5b97] text-white rounded-xl text-xs font-semibold hover:bg-[#5e4d87] transition-colors`,
                    children: `Done`,
                  }),
                ],
              }),
            ],
          }),
        }),
      le &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[80] bg-black/40 backdrop-blur-xs flex items-center justify-center p-4`,
          children: (0, Q.jsxs)(`div`, {
            className: `bg-[#fbf9f6] rounded-2xl w-full max-w-xs p-5 shadow-2xl animate-in zoom-in-95 duration-150`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between pb-3 border-b border-[#e8e2d9]`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, Q.jsx)(F, { className: `size-5 text-[#6d5b97]` }),
                      (0, Q.jsx)(`h3`, {
                        className: `font-semibold text-base`,
                        children: `Sleep Timer`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => fe(!1),
                    className: `p-1 rounded-full hover:bg-black/5`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsx)(`div`, {
                className: `mt-3 space-y-1.5 text-xs`,
                children: [
                  { label: `Turn off timer`, value: null },
                  { label: `15 minutes`, value: 15 },
                  { label: `30 minutes`, value: 30 },
                  { label: `45 minutes`, value: 45 },
                  { label: `60 minutes`, value: 60 },
                ].map((e) =>
                  (0, Q.jsxs)(
                    `button`,
                    {
                      onClick: () => st(e.value),
                      className: `w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors ${Je === e.value ? `bg-[#ece6f2] text-[#6d5b97] font-semibold` : `hover:bg-black/5 text-[#3b322a]`}`,
                      children: [
                        (0, Q.jsx)(`span`, { children: e.label }),
                        Je === e.value &&
                          (0, Q.jsx)(ie, {
                            className: `size-4 text-[#6d5b97]`,
                          }),
                      ],
                    },
                    String(e.value),
                  ),
                ),
              }),
            ],
          }),
        }),
    ],
  });
}
function Ht({
  tracks: e = [],
  file: t,
  initialIndex: n = 0,
  onClose: r,
  onSwitchToAudio: i,
}) {
  let a = (0, T.useMemo)(() => (e.length > 0 ? e : t ? [t] : []), [e, t]),
    [o, s] = (0, T.useState)(Math.min(n, Math.max(0, a.length - 1))),
    c = (0, T.useRef)(null),
    l = (0, T.useRef)(null),
    [u, d] = (0, T.useState)(!1),
    [f, p] = (0, T.useState)(0),
    [m, h] = (0, T.useState)(0),
    [g, _] = (0, T.useState)(null),
    [v, ee] = (0, T.useState)(!1),
    [y, b] = (0, T.useState)(!0),
    te = (0, T.useRef)(null),
    [x, S] = (0, T.useState)(`off`),
    [C, w] = (0, T.useState)(!1),
    [ne, re] = (0, T.useState)(1),
    [E, D] = (0, T.useState)(!1),
    [O, k] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_player_volume`);
        return e === null ? 1 : Number(e);
      } catch {
        return 1;
      }
    }),
    [A, j] = (0, T.useState)(!1),
    ie = (0, T.useRef)(O > 0 ? O : 0.8),
    [M, N] = (0, T.useState)(null),
    [oe, P] = (0, T.useState)(null),
    I = (0, T.useMemo)(() => {
      let e = new Map();
      return (
        a.forEach((t, n) => {
          let r = `Featured Video Collection`,
            i = `Curated video selection`,
            a;
          (`channel` in t
            ? ((r = t.channel),
              (i = `${t.channel} Series`),
              (a = t.thumbnailUrl))
            : ((r = `Uploaded Video Library`),
              (i = `Personal uploaded video files`)),
            e.has(r) ||
              e.set(r, {
                id: `album-${r.toLowerCase().replace(/[^a-z0-9]+/g, `-`)}`,
                title: r,
                description: i,
                thumbnailUrl: a,
                items: [],
              }));
          let o = e.get(r);
          (!o.thumbnailUrl &&
            `thumbnailUrl` in t &&
            (o.thumbnailUrl = t.thumbnailUrl),
            o.items.push({ item: t, index: n }));
        }),
        Array.from(e.values())
      );
    }, [a]),
    [L, se] = (0, T.useState)(null),
    ce = (0, T.useRef)(null),
    [le, de] = (0, T.useState)(!1),
    [fe, pe] = (0, T.useState)(!1),
    [z, he] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_video_favorites`);
        return e ? JSON.parse(e) : [];
      } catch {
        return [];
      }
    }),
    [B, H] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_video_playlists`);
        return e
          ? JSON.parse(e)
          : [
              {
                id: `favs-default`,
                name: `Featured Clips`,
                createdAt: Date.now(),
                trackNames: [],
              },
            ];
      } catch {
        return [];
      }
    }),
    [_e, ve] = (0, T.useState)(``),
    [ye, xe] = (0, T.useState)(!1),
    [Se, Ce] = (0, T.useState)(null),
    U = a[o],
    Te = (e) => (e ? (`name` in e ? e.name : e.title) : `Video Player`),
    De = (e) =>
      e
        ? `channel` in e
          ? e.channel
          : `${(e.size / 1048576).toFixed(1)} MB • ${e.name.split(`.`).pop()?.toUpperCase()}`
        : `Video`,
    W = Te(U),
    Ae = De(U),
    K = (e) => {
      (ce.current && clearTimeout(ce.current),
        se(e),
        (ce.current = setTimeout(() => {
          se(null);
        }, 2400)));
    },
    [Ie, Le] = (0, T.useState)(``),
    [Re, ze] = (0, T.useState)(!1),
    Ve = (0, T.useRef)(null);
  (0, T.useEffect)(() => {
    if (
      ((Ve.current &&= (URL.revokeObjectURL(Ve.current), null)),
      ze(!1),
      _(null),
      p(0),
      h(0),
      !U)
    ) {
      Le(``);
      return;
    }
    if (`videoUrl` in U) Le(U.videoUrl);
    else {
      let e = URL.createObjectURL(U);
      ((Ve.current = e), Le(e));
    }
    return () => {
      Ve.current &&= (URL.revokeObjectURL(Ve.current), null);
    };
  }, [U]);
  let He = (0, T.useCallback)(() => {
    let e = c.current;
    if (
      (console.warn(`Video load error for:`, Ie, e?.error?.message),
      !Re && U && `fallbackUrl` in U && U.fallbackUrl && Ie !== U.fallbackUrl)
    ) {
      (ze(!0), Le(U.fallbackUrl), K(`Switching to backup video stream...`));
      return;
    }
    if (!Re && U && `videoUrl` in U && Ie !== `/videos/flower.mp4`) {
      (ze(!0), Le(`/videos/flower.mp4`), K(`Loading local backup video...`));
      return;
    }
    (d(!1),
      U && `name` in U
        ? _(
            `Unable to decode "${U.name}". Your browser may not support this video format.`,
          )
        : _(`Video source could not be played. Please check your connection.`));
  }, [Ie, Re, U]);
  ((0, T.useEffect)(() => {
    let e = c.current;
    if (!e || !Ie) return;
    (_(null), (e.playbackRate = ne), (e.volume = A ? 0 : O));
    try {
      e.load();
    } catch {}
    let t = e.play();
    return (
      t !== void 0 &&
        t
          .then(() => {
            (d(!0), _(null));
          })
          .catch((e) => {
            (console.warn(
              `Autoplay deferred or awaiting user tap:`,
              e?.message || e,
            ),
              d(!1));
          }),
      () => {
        e.pause();
      }
    );
  }, [Ie]),
    (0, T.useEffect)(() => {
      c.current && (c.current.volume = A ? 0 : O);
      try {
        localStorage.setItem(`webna_player_volume`, O.toString());
      } catch {}
    }, [O, A]));
  let qe = (0, T.useCallback)(() => {
    (b(!0),
      te.current && clearTimeout(te.current),
      u &&
        (te.current = setTimeout(() => {
          b(!1);
        }, 3500)));
  }, [u]);
  (0, T.useEffect)(
    () => (
      qe(),
      () => {
        te.current && clearTimeout(te.current);
      }
    ),
    [u, qe],
  );
  let Je = () => {
      let e = c.current;
      e &&
        (e.paused
          ? (!e.src && Ie && (e.src = Ie),
            e.error && e.load(),
            e
              .play()
              .then(() => {
                (d(!0), _(null));
              })
              .catch((e) => {
                (console.warn(`Video playback note:`, e?.message || e),
                  e?.name === `NotSupportedError` ||
                  String(e?.message)
                    .toLowerCase()
                    .includes(`no supported sources`)
                    ? He()
                    : d(!1));
              }))
          : (e.pause(), d(!1)),
        qe());
    },
    Ye = (0, T.useCallback)(() => {
      if (a.length <= 1) {
        c.current &&
          ((c.current.currentTime = 0), c.current.play().catch(() => {}));
        return;
      }
      if (C) {
        let e = Math.floor(Math.random() * a.length);
        (e === o && a.length > 1 && (e = (o + 1) % a.length), s(e));
      } else s((e) => (e + 1) % a.length);
    }, [a.length, C, o]),
    Xe = (0, T.useCallback)(() => {
      if (c.current && c.current.currentTime > 3) {
        ((c.current.currentTime = 0), p(0));
        return;
      }
      if (a.length <= 1) {
        c.current && (c.current.currentTime = 0);
        return;
      }
      s((e) => (e - 1 + a.length) % a.length);
    }, [a.length]),
    Ze = (e) => {
      if (c.current) {
        let t = Math.min(Math.max(0, c.current.currentTime + e), m || 1 / 0);
        ((c.current.currentTime = t), p(t), qe());
      }
    },
    Y = (e) => {
      (p(e), c.current && (c.current.currentTime = e), qe());
    },
    Qe = () => {
      S((e) =>
        e === `off`
          ? (K(`Repeat All videos`), `all`)
          : e === `all`
            ? (K(`Repeat Current video`), `one`)
            : (K(`Repeat Off`), `off`),
      );
    },
    $e = () => {
      let e = [0.5, 0.75, 1, 1.25, 1.5, 2],
        t = e[(e.indexOf(ne) + 1) % e.length];
      (re(t), c.current && (c.current.playbackRate = t), K(`Speed: ${t}x`));
    },
    rt = async () => {
      if (l.current)
        try {
          document.fullscreenElement
            ? (await document.exitFullscreen(), ee(!1))
            : (await l.current.requestFullscreen(), ee(!0));
        } catch (e) {
          console.warn(`Fullscreen toggle error:`, e);
        }
    },
    it = async () => {
      let e = c.current;
      if (e)
        try {
          document.pictureInPictureElement
            ? (await document.exitPictureInPicture(),
              K(`Picture-in-Picture disabled`))
            : document.pictureInPictureEnabled &&
              (await e.requestPictureInPicture(),
              K(`Picture-in-Picture enabled`));
        } catch (e) {
          (console.warn(`PiP error:`, e),
            K(`Picture-in-Picture not supported`));
        }
    },
    at = (e) => {
      he((t) => {
        let n = t.includes(e) ? t.filter((t) => t !== e) : [...t, e];
        try {
          localStorage.setItem(`webna_video_favorites`, JSON.stringify(n));
        } catch {}
        return n;
      });
    },
    ot = (e) => {
      let t = parseFloat(e.target.value);
      (k(t), t > 0 && A && j(!1), c.current && (c.current.volume = t));
    },
    Z = () => {
      if (A) {
        let e = ie.current > 0 ? ie.current : 0.8;
        (j(!1),
          k(e),
          c.current && (c.current.volume = e),
          K(`Volume unmuted (${Math.round(e * 100)}%)`));
      } else
        ((ie.current = O > 0 ? O : 0.8),
          j(!0),
          c.current && (c.current.volume = 0),
          K(`Muted`));
    },
    st = () => {
      if (E) {
        (d(!1), p(0), D(!1), K(`Stopped playback after video finished`));
        return;
      }
      x === `one`
        ? c.current &&
          ((c.current.currentTime = 0), c.current.play().catch(() => {}))
        : x === `all` || o < a.length - 1
          ? Ye()
          : (d(!1), p(0));
    },
    $ = (e) => {
      if (isNaN(e) || e < 0 || !isFinite(e)) return `00:00`;
      let t = Math.floor(e / 60),
        n = Math.floor(e % 60);
      return `${t.toString().padStart(2, `0`)}:${n.toString().padStart(2, `0`)}`;
    },
    ct = W ? z.includes(W) : !1;
  return (0, Q.jsxs)(`div`, {
    ref: l,
    onMouseMove: qe,
    onClick: qe,
    className: `fixed inset-0 z-[60] flex flex-col bg-black text-white select-none overflow-hidden`,
    children: [
      (0, Q.jsx)(`video`, {
        ref: c,
        src: Ie || void 0,
        playsInline: !0,
        preload: `auto`,
        className: `absolute inset-0 w-full h-full object-contain cursor-pointer`,
        onClick: Je,
        onTimeUpdate: () => {
          c.current && p(c.current.currentTime);
        },
        onLoadedMetadata: () => {
          c.current && h(c.current.duration);
        },
        onCanPlay: () => {
          _(null);
        },
        onEnded: st,
        onError: He,
      }),
      L &&
        (0, Q.jsx)(`div`, {
          className: `absolute top-16 left-1/2 -translate-x-1/2 z-[90] bg-[#1a1715]/90 text-white text-xs px-4 py-2 rounded-full shadow-lg backdrop-blur-md animate-fade-in pointer-events-none border border-white/10`,
          children: L,
        }),
      (0, Q.jsxs)(`div`, {
        className: `relative z-20 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${y || !u ? `opacity-100` : `opacity-0 pointer-events-none`}`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/10`,
            children: [
              (0, Q.jsxs)(`button`, {
                onClick: () => {
                  (c.current && c.current.pause(), i ? i() : r());
                },
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white transition-all hover:bg-white/10`,
                title: `Switch to Audio Player`,
                children: [
                  (0, Q.jsx)(Oe, { className: `size-3.5` }),
                  (0, Q.jsx)(`span`, { children: `Audio player` }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-black shadow-xs transition-all`,
                title: `Video Player (Active)`,
                children: [
                  (0, Q.jsx)(me, { className: `size-3.5` }),
                  (0, Q.jsx)(`span`, { children: `Video player` }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `hidden sm:block min-w-0 flex-1 px-4 text-center`,
            children: [
              (0, Q.jsx)(`h2`, {
                className: `text-sm font-semibold truncate text-white drop-shadow-sm`,
                children: W,
              }),
              (0, Q.jsxs)(`p`, {
                className: `text-[11px] text-white/70 truncate`,
                children: [Ae, ` • Track `, o + 1, ` of `, a.length],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [
              (0, Q.jsx)(`button`, {
                onClick: it,
                className: `p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors`,
                title: `Picture in Picture`,
                children: (0, Q.jsx)(je, { className: `size-4.5` }),
              }),
              (0, Q.jsx)(`button`, {
                onClick: () => de(!0),
                className: `p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors`,
                title: `Options`,
                children: (0, Q.jsx)(ue, { className: `size-5` }),
              }),
              (0, Q.jsx)(`button`, {
                onClick: r,
                className: `p-2 rounded-full hover:bg-white/15 text-white/80 hover:text-white transition-colors`,
                title: `Close`,
                children: (0, Q.jsx)(X, { className: `size-5` }),
              }),
            ],
          }),
        ],
      }),
      !u &&
        (0, Q.jsx)(`button`, {
          onClick: Je,
          className: `absolute inset-0 z-10 m-auto size-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl`,
          "aria-label": `Play video`,
          children: (0, Q.jsx)(G, {
            className: `size-10 fill-white text-white ml-1`,
          }),
        }),
      g &&
        (0, Q.jsxs)(`div`, {
          className: `absolute top-20 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 p-3 rounded-2xl bg-destructive/90 text-white text-xs backdrop-blur-md shadow-xl max-w-sm`,
          children: [
            (0, Q.jsx)(ae, { className: `size-4 shrink-0` }),
            (0, Q.jsx)(`span`, { className: `flex-1 text-left`, children: g }),
            (0, Q.jsx)(`button`, {
              onClick: () => {
                a.length > 1
                  ? Ye()
                  : c.current &&
                    (c.current.load(), c.current.play().catch(() => {}));
              },
              className: `px-2.5 py-1 bg-white/20 hover:bg-white/30 rounded-lg font-semibold shrink-0 transition-colors`,
              children: a.length > 1 ? `Next Video` : `Retry`,
            }),
          ],
        }),
      (0, Q.jsx)(`div`, { className: `flex-1`, onClick: Je }),
      (0, Q.jsxs)(`div`, {
        className: `relative z-20 flex flex-col gap-2.5 px-4 pt-6 pb-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent transition-opacity duration-300 ${y || !u ? `opacity-100` : `opacity-0 pointer-events-none`}`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, Q.jsx)(`span`, {
                className: `text-xs font-mono text-white/80 min-w-[42px] text-right`,
                children: $(f),
              }),
              (0, Q.jsx)(`div`, {
                className: `relative flex-1 group flex items-center h-6 cursor-pointer`,
                children: (0, Q.jsx)(`input`, {
                  type: `range`,
                  min: 0,
                  max: m || 100,
                  step: 0.1,
                  value: f,
                  onChange: (e) => Y(parseFloat(e.target.value)),
                  className: `w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none transition-all group-hover:h-2.5`,
                }),
              }),
              (0, Q.jsx)(`span`, {
                className: `text-xs font-mono text-white/60 min-w-[42px]`,
                children: $(m),
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-2`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  (0, Q.jsx)(`button`, {
                    onClick: Qe,
                    className: `p-2 rounded-xl transition-all ${x === `off` ? `text-white/60 hover:text-white` : `bg-white/20 text-white shadow-xs`}`,
                    title: `Repeat: ${x}`,
                    children:
                      x === `one`
                        ? (0, Q.jsx)(Ne, { className: `size-4.5` })
                        : (0, Q.jsx)(Pe, { className: `size-4.5` }),
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => {
                      (w((e) => !e), K(C ? `Shuffle Off` : `Shuffle On`));
                    },
                    className: `p-2 rounded-xl transition-all ${C ? `bg-white/20 text-white shadow-xs` : `text-white/60 hover:text-white`}`,
                    title: `Shuffle`,
                    children: (0, Q.jsx)(Ue, { className: `size-4.5` }),
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: $e,
                    className: `px-2 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors`,
                    title: `Playback speed`,
                    children: [ne, `x`],
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, Q.jsx)(`button`, {
                    onClick: Xe,
                    className: `p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all`,
                    title: `Previous Video`,
                    children: (0, Q.jsx)(We, { className: `size-5` }),
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => Ze(-10),
                    className: `p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all`,
                    title: `Rewind 10s`,
                    children: (0, Q.jsx)(Fe, { className: `size-5` }),
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: Je,
                    className: `size-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg`,
                    title: u ? `Pause` : `Play`,
                    children: u
                      ? (0, Q.jsx)(ke, { className: `size-6 fill-black` })
                      : (0, Q.jsx)(G, {
                          className: `size-6 fill-black ml-0.5`,
                        }),
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => Ze(10),
                    className: `p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all`,
                    title: `Forward 10s`,
                    children: (0, Q.jsx)(q, { className: `size-5` }),
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: Ye,
                    className: `p-2 rounded-full hover:bg-white/15 active:scale-95 text-white/80 hover:text-white transition-all`,
                    title: `Next Video`,
                    children: (0, Q.jsx)(Ge, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [
                  (0, Q.jsx)(`button`, {
                    onClick: () => at(W),
                    className: `p-2 rounded-xl transition-all ${ct ? `text-red-500 hover:text-red-400` : `text-white/60 hover:text-white`}`,
                    title: ct ? `Remove from Favorites` : `Add to Favorites`,
                    children: (0, Q.jsx)(V, {
                      className: `size-5 ${ct ? `fill-current` : ``}`,
                    }),
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: rt,
                    className: `p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/15 transition-all`,
                    title: v ? `Exit Fullscreen` : `Fullscreen`,
                    children: v
                      ? (0, Q.jsx)(Ee, { className: `size-5` })
                      : (0, Q.jsx)(we, { className: `size-5` }),
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-4 pt-2 border-t border-white/10`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2 max-w-[200px] w-full`,
                children: [
                  (0, Q.jsx)(`button`, {
                    onClick: Z,
                    className: `p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors`,
                    title: A ? `Unmute` : `Mute`,
                    children:
                      A || O === 0
                        ? (0, Q.jsx)(nt, { className: `size-4 text-red-400` })
                        : O < 0.5
                          ? (0, Q.jsx)(et, { className: `size-4` })
                          : (0, Q.jsx)(tt, { className: `size-4` }),
                  }),
                  (0, Q.jsx)(`input`, {
                    type: `range`,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: A ? 0 : O,
                    onChange: ot,
                    className: `w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white focus:outline-none`,
                    title: `Volume: ${Math.round((A ? 0 : O) * 100)}%`,
                  }),
                  (0, Q.jsxs)(`span`, {
                    className: `text-[11px] font-mono text-white/60 min-w-[32px]`,
                    children: [Math.round((A ? 0 : O) * 100), `%`],
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-1.5 sm:gap-2 shrink-0`,
                children: [
                  (0, Q.jsxs)(`button`, {
                    onClick: () => N(M === `playlists` ? null : `playlists`),
                    className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${M === `playlists` ? `bg-white text-black shadow-md` : `bg-white/10 text-white/80 hover:bg-white/20 hover:text-white`}`,
                    title: `View playlists`,
                    children: [
                      (0, Q.jsx)(be, { className: `size-3.5` }),
                      (0, Q.jsx)(`span`, { children: `Playlist` }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => N(M === `favorites` ? null : `favorites`),
                    className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${M === `favorites` ? `bg-white text-black shadow-md` : `bg-white/10 text-white/80 hover:bg-white/20 hover:text-white`}`,
                    title: `View favorites`,
                    children: [
                      (0, Q.jsx)(V, {
                        className: `size-3.5 fill-current text-red-500`,
                      }),
                      (0, Q.jsx)(`span`, { children: `Favorites` }),
                      z.length > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `text-[10px] bg-red-500/20 text-red-300 font-bold px-1.5 py-0.2 rounded-full`,
                          children: z.length,
                        }),
                    ],
                  }),
                  (0, Q.jsxs)(`button`, {
                    onClick: () => {
                      (P(null), N(M === `albums` ? null : `albums`));
                    },
                    className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${M === `albums` ? `bg-white text-black shadow-md` : `bg-white/10 text-white/80 hover:bg-white/20 hover:text-white`}`,
                    title: `View video albums`,
                    children: [
                      (0, Q.jsx)(R, { className: `size-3.5 text-brand` }),
                      (0, Q.jsx)(`span`, { children: `Albums` }),
                      I.length > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `text-[10px] bg-white/20 text-white font-bold px-1.5 py-0.2 rounded-full`,
                          children: I.length,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      M &&
        (0, Q.jsxs)(`div`, {
          className: `absolute inset-x-0 bottom-0 z-50 max-h-[75vh] flex flex-col bg-[#141210] border-t border-white/15 rounded-t-3xl shadow-2xl p-5 text-white animate-in slide-in-from-bottom duration-300`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `flex items-center justify-between pb-3 border-b border-white/10`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center gap-1 bg-white/10 p-1 rounded-xl`,
                  children: [
                    (0, Q.jsxs)(`button`, {
                      onClick: () => N(`playlists`),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${M === `playlists` ? `bg-white text-black shadow-xs` : `text-white/70 hover:text-white`}`,
                      children: [
                        (0, Q.jsx)(be, { className: `size-3.5` }),
                        (0, Q.jsx)(`span`, { children: `Playlist` }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => N(`favorites`),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${M === `favorites` ? `bg-white text-black shadow-xs` : `text-white/70 hover:text-white`}`,
                      children: [
                        (0, Q.jsx)(V, {
                          className: `size-3.5 fill-current text-red-500`,
                        }),
                        (0, Q.jsx)(`span`, { children: `Favorites` }),
                        z.length > 0 &&
                          (0, Q.jsx)(`span`, {
                            className: `text-[10px] bg-red-500/20 text-red-300 px-1.5 rounded-full`,
                            children: z.length,
                          }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => {
                        (N(`albums`), P(null));
                      },
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${M === `albums` ? `bg-white text-black shadow-xs` : `text-white/70 hover:text-white`}`,
                      children: [
                        (0, Q.jsx)(R, { className: `size-3.5` }),
                        (0, Q.jsx)(`span`, { children: `Albums` }),
                        I.length > 0 &&
                          (0, Q.jsx)(`span`, {
                            className: `text-[10px] bg-white/20 text-white px-1.5 rounded-full`,
                            children: I.length,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsx)(`button`, {
                  onClick: () => N(null),
                  className: `p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white`,
                  children: (0, Q.jsx)(X, { className: `size-5` }),
                }),
              ],
            }),
            (0, Q.jsx)(`div`, {
              className: `flex-1 overflow-y-auto py-3 space-y-3`,
              children:
                M === `favorites`
                  ? z.length === 0
                    ? (0, Q.jsx)(`div`, {
                        className: `text-center py-8 text-white/50 text-xs`,
                        children: `No favorite videos yet. Tap the heart icon while watching to add videos to your favorites.`,
                      })
                    : (0, Q.jsx)(`div`, {
                        className: `space-y-1.5`,
                        children: z.map((e, t) => {
                          let n = a.findIndex((t) => Te(t) === e);
                          return (0, Q.jsxs)(
                            `div`,
                            {
                              className: `flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors`,
                              children: [
                                (0, Q.jsxs)(`button`, {
                                  onClick: () => {
                                    n === -1
                                      ? K(
                                          `Video "${e}" is not in current queue`,
                                        )
                                      : (s(n), N(null));
                                  },
                                  className: `flex-1 min-w-0 text-left`,
                                  children: [
                                    (0, Q.jsx)(`p`, {
                                      className: `text-sm font-semibold truncate`,
                                      children: e,
                                    }),
                                    (0, Q.jsx)(`p`, {
                                      className: `text-xs text-white/50`,
                                      children:
                                        n === -1
                                          ? `Saved favorite`
                                          : `Tap to play from queue`,
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`button`, {
                                  onClick: () => at(e),
                                  className: `p-2 text-red-400 hover:text-red-300`,
                                  title: `Remove favorite`,
                                  children: (0, Q.jsx)(J, {
                                    className: `size-4`,
                                  }),
                                }),
                              ],
                            },
                            t,
                          );
                        }),
                      })
                  : M === `albums`
                    ? (0, Q.jsx)(`div`, {
                        className: `space-y-4`,
                        children: oe
                          ? (() => {
                              let e = I.find((e) => e.id === oe);
                              return e
                                ? (0, Q.jsxs)(`div`, {
                                    className: `space-y-3`,
                                    children: [
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center justify-between`,
                                        children: [
                                          (0, Q.jsx)(`button`, {
                                            onClick: () => P(null),
                                            className: `text-xs font-medium text-brand hover:underline flex items-center gap-1`,
                                            children: `← Back to all video albums`,
                                          }),
                                          (0, Q.jsxs)(`span`, {
                                            className: `text-xs text-white/50`,
                                            children: [
                                              e.items.length,
                                              ` `,
                                              e.items.length === 1
                                                ? `video`
                                                : `videos`,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/15`,
                                        children: [
                                          e.thumbnailUrl
                                            ? (0, Q.jsx)(`img`, {
                                                src: e.thumbnailUrl,
                                                alt: e.title,
                                                className: `size-14 rounded-xl object-cover shrink-0`,
                                              })
                                            : (0, Q.jsx)(`div`, {
                                                className: `size-14 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0`,
                                                children: (0, Q.jsx)(me, {
                                                  className: `size-7`,
                                                }),
                                              }),
                                          (0, Q.jsxs)(`div`, {
                                            className: `min-w-0 flex-1`,
                                            children: [
                                              (0, Q.jsx)(`h4`, {
                                                className: `font-bold text-sm text-white truncate`,
                                                children: e.title,
                                              }),
                                              (0, Q.jsx)(`p`, {
                                                className: `text-xs text-white/60 truncate mt-0.5`,
                                                children: e.description,
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsxs)(`button`, {
                                            onClick: () => {
                                              e.items.length > 0 &&
                                                (s(e.items[0].index),
                                                K(`Playing "${e.title}"`));
                                            },
                                            className: `flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md shrink-0`,
                                            children: [
                                              (0, Q.jsx)(G, {
                                                className: `size-3.5 fill-black ml-0.5`,
                                              }),
                                              (0, Q.jsx)(`span`, {
                                                children: `Play All`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Q.jsx)(`div`, {
                                        className: `space-y-1.5`,
                                        children: e.items.map(
                                          ({ item: e, index: t }) => {
                                            let n = t === o,
                                              r = Te(e),
                                              i = De(e);
                                            return (0, Q.jsxs)(
                                              `div`,
                                              {
                                                className: `flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${n ? `bg-white/20 border-white/40 text-white` : `bg-white/5 border-white/10 hover:bg-white/10 text-white`}`,
                                                children: [
                                                  (0, Q.jsxs)(`button`, {
                                                    onClick: () => {
                                                      (s(t), N(null));
                                                    },
                                                    className: `flex items-center gap-3 min-w-0 flex-1 text-left`,
                                                    children: [
                                                      `thumbnailUrl` in e
                                                        ? (0, Q.jsx)(`img`, {
                                                            src: e.thumbnailUrl,
                                                            alt: r,
                                                            className: `w-12 h-8 rounded-lg object-cover shrink-0`,
                                                          })
                                                        : (0, Q.jsx)(`div`, {
                                                            className: `size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0`,
                                                            children: (0,
                                                            Q.jsx)(me, {
                                                              className: `size-4 text-white/60`,
                                                            }),
                                                          }),
                                                      (0, Q.jsxs)(`div`, {
                                                        className: `min-w-0 flex-1`,
                                                        children: [
                                                          (0, Q.jsx)(`p`, {
                                                            className: `font-semibold text-xs truncate`,
                                                            children: r,
                                                          }),
                                                          (0, Q.jsx)(`p`, {
                                                            className: `text-[10px] text-white/50 truncate`,
                                                            children: i,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  n
                                                    ? (0, Q.jsx)(`span`, {
                                                        className: `text-[10px] bg-brand text-brand-foreground px-2 py-0.5 rounded-full font-semibold ml-2`,
                                                        children: `Playing`,
                                                      })
                                                    : (0, Q.jsx)(`button`, {
                                                        onClick: () => {
                                                          (s(t), N(null));
                                                        },
                                                        className: `p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white ml-2`,
                                                        title: `Play this video`,
                                                        children: (0, Q.jsx)(
                                                          G,
                                                          {
                                                            className: `size-3.5 fill-current ml-0.5`,
                                                          },
                                                        ),
                                                      }),
                                                ],
                                              },
                                              t,
                                            );
                                          },
                                        ),
                                      }),
                                    ],
                                  })
                                : null;
                            })()
                          : (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between gap-3`,
                                  children: [
                                    (0, Q.jsxs)(`div`, {
                                      className: `flex items-center gap-3 min-w-0 flex-1`,
                                      children: [
                                        (0, Q.jsx)(`div`, {
                                          className: `size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0`,
                                          children: (0, Q.jsx)(R, {
                                            className: `size-6`,
                                          }),
                                        }),
                                        (0, Q.jsxs)(`div`, {
                                          className: `min-w-0 flex-1`,
                                          children: [
                                            (0, Q.jsx)(`span`, {
                                              className: `text-[10px] uppercase font-bold text-brand tracking-wider`,
                                              children: `Current Video Album / Channel`,
                                            }),
                                            (0, Q.jsx)(`h4`, {
                                              className: `font-bold text-sm text-white truncate`,
                                              children:
                                                U && `channel` in U
                                                  ? U.channel
                                                  : `Uploaded Video Library`,
                                            }),
                                            (0, Q.jsx)(`p`, {
                                              className: `text-xs text-white/60 truncate`,
                                              children: W,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsx)(`button`, {
                                      onClick: () => {
                                        let e = I.find((e) =>
                                          e.items.some((e) => e.index === o),
                                        );
                                        e && P(e.id);
                                      },
                                      className: `px-3 py-1.5 rounded-xl bg-white text-black text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shrink-0`,
                                      children: `View Album`,
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `space-y-2`,
                                  children: [
                                    (0, Q.jsxs)(`h4`, {
                                      className: `text-xs font-semibold text-white/60 uppercase tracking-wider`,
                                      children: [
                                        `Available Video Albums (`,
                                        I.length,
                                        `)`,
                                      ],
                                    }),
                                    (0, Q.jsxs)(`div`, {
                                      className: `grid grid-cols-1 gap-2`,
                                      children: [
                                        I.map((e) => {
                                          let t = e.items.some(
                                            (e) => e.index === o,
                                          );
                                          return (0, Q.jsxs)(
                                            `button`,
                                            {
                                              onClick: () => P(e.id),
                                              className: `w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all hover:bg-white/10 ${t ? `bg-white/10 border-brand/50 ring-1 ring-brand/30` : `bg-white/5 border-white/10`}`,
                                              children: [
                                                (0, Q.jsxs)(`div`, {
                                                  className: `flex items-center gap-3 min-w-0 flex-1`,
                                                  children: [
                                                    e.thumbnailUrl
                                                      ? (0, Q.jsx)(`img`, {
                                                          src: e.thumbnailUrl,
                                                          alt: e.title,
                                                          className: `size-11 rounded-xl object-cover shrink-0`,
                                                        })
                                                      : (0, Q.jsx)(`div`, {
                                                          className: `size-11 rounded-xl bg-white/10 flex items-center justify-center text-brand shrink-0`,
                                                          children: (0, Q.jsx)(
                                                            me,
                                                            {
                                                              className: `size-5`,
                                                            },
                                                          ),
                                                        }),
                                                    (0, Q.jsxs)(`div`, {
                                                      className: `min-w-0 flex-1`,
                                                      children: [
                                                        (0, Q.jsx)(`p`, {
                                                          className: `font-semibold text-sm text-white truncate`,
                                                          children: e.title,
                                                        }),
                                                        (0, Q.jsxs)(`p`, {
                                                          className: `text-xs text-white/60 truncate`,
                                                          children: [
                                                            e.items.length,
                                                            ` `,
                                                            e.items.length === 1
                                                              ? `video`
                                                              : `videos`,
                                                            ` `,
                                                            `• `,
                                                            e.description,
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, Q.jsx)(`span`, {
                                                  className: `text-xs text-brand font-medium ml-2 shrink-0`,
                                                  children: `Browse →`,
                                                }),
                                              ],
                                            },
                                            e.id,
                                          );
                                        }),
                                        I.length === 0 &&
                                          (0, Q.jsx)(`p`, {
                                            className: `text-center py-8 text-xs text-white/50`,
                                            children: `No video albums available`,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      })
                    : (0, Q.jsxs)(`div`, {
                        className: `space-y-4`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, Q.jsx)(`input`, {
                                type: `text`,
                                placeholder: `New playlist name...`,
                                value: _e,
                                onChange: (e) => ve(e.target.value),
                                className: `flex-1 px-3 py-2 bg-white/10 rounded-xl text-sm border border-white/15 focus:outline-none focus:border-white/40 text-white`,
                              }),
                              (0, Q.jsxs)(`button`, {
                                onClick: () => {
                                  if (!_e.trim()) return;
                                  let e = {
                                      id: `pl-${Date.now()}`,
                                      name: _e.trim(),
                                      createdAt: Date.now(),
                                      trackNames: [W],
                                    },
                                    t = [...B, e];
                                  (H(t),
                                    localStorage.setItem(
                                      `webna_video_playlists`,
                                      JSON.stringify(t),
                                    ),
                                    ve(``),
                                    K(`Created "${e.name}"`));
                                },
                                className: `flex items-center gap-1.5 px-3 py-2 bg-white text-black text-xs font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all`,
                                children: [
                                  (0, Q.jsx)(Me, { className: `size-4` }),
                                  (0, Q.jsx)(`span`, { children: `Create` }),
                                ],
                              }),
                            ],
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `space-y-2`,
                            children: B.map((e) =>
                              (0, Q.jsxs)(
                                `div`,
                                {
                                  className: `p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2`,
                                  children: [
                                    (0, Q.jsxs)(`div`, {
                                      className: `flex items-center justify-between`,
                                      children: [
                                        (0, Q.jsxs)(`div`, {
                                          children: [
                                            (0, Q.jsx)(`p`, {
                                              className: `text-sm font-semibold`,
                                              children: e.name,
                                            }),
                                            (0, Q.jsxs)(`p`, {
                                              className: `text-xs text-white/50`,
                                              children: [
                                                e.trackNames.length,
                                                ` `,
                                                e.trackNames.length === 1
                                                  ? `video`
                                                  : `videos`,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, Q.jsxs)(`div`, {
                                          className: `flex items-center gap-1.5`,
                                          children: [
                                            (0, Q.jsxs)(`button`, {
                                              onClick: () => {
                                                if (e.trackNames.includes(W)) {
                                                  K(
                                                    `Video already in this playlist`,
                                                  );
                                                  return;
                                                }
                                                let t = B.map((t) =>
                                                  t.id === e.id
                                                    ? {
                                                        ...t,
                                                        trackNames: [
                                                          ...t.trackNames,
                                                          W,
                                                        ],
                                                      }
                                                    : t,
                                                );
                                                (H(t),
                                                  localStorage.setItem(
                                                    `webna_video_playlists`,
                                                    JSON.stringify(t),
                                                  ),
                                                  K(`Added to "${e.name}"`));
                                              },
                                              className: `flex items-center gap-1 px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg`,
                                              children: [
                                                (0, Q.jsx)(ge, {
                                                  className: `size-3.5`,
                                                }),
                                                (0, Q.jsx)(`span`, {
                                                  children: `Add Current`,
                                                }),
                                              ],
                                            }),
                                            (0, Q.jsx)(`button`, {
                                              onClick: () => {
                                                let t = B.filter(
                                                  (t) => t.id !== e.id,
                                                );
                                                (H(t),
                                                  localStorage.setItem(
                                                    `webna_video_playlists`,
                                                    JSON.stringify(t),
                                                  ),
                                                  K(`Deleted "${e.name}"`));
                                              },
                                              className: `p-1.5 text-white/40 hover:text-red-400 hover:bg-white/10 rounded-lg transition-colors`,
                                              title: `Delete playlist`,
                                              children: (0, Q.jsx)(J, {
                                                className: `size-3.5`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.trackNames.length > 0 &&
                                      (0, Q.jsx)(`div`, {
                                        className: `pt-2 border-t border-white/10 space-y-1`,
                                        children: e.trackNames.map((t, n) => {
                                          let r = a.findIndex(
                                            (e) => Te(e) === t,
                                          );
                                          return (0, Q.jsxs)(
                                            `div`,
                                            {
                                              className: `flex items-center justify-between p-1.5 rounded-lg bg-white/5 text-xs hover:bg-white/10`,
                                              children: [
                                                (0, Q.jsxs)(`button`, {
                                                  onClick: () => {
                                                    r === -1
                                                      ? K(
                                                          `Video "${t}" is not in current queue`,
                                                        )
                                                      : (s(r), N(null));
                                                  },
                                                  className: `flex items-center gap-2 min-w-0 flex-1 text-left`,
                                                  children: [
                                                    (0, Q.jsx)(G, {
                                                      className: `size-3 text-brand shrink-0 ml-0.5`,
                                                    }),
                                                    (0, Q.jsx)(`span`, {
                                                      className: `truncate`,
                                                      children: t,
                                                    }),
                                                  ],
                                                }),
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => {
                                                    let t = B.map((t) =>
                                                      t.id === e.id
                                                        ? {
                                                            ...t,
                                                            trackNames:
                                                              t.trackNames.filter(
                                                                (e, t) =>
                                                                  t !== n,
                                                              ),
                                                          }
                                                        : t,
                                                    );
                                                    (H(t),
                                                      localStorage.setItem(
                                                        `webna_video_playlists`,
                                                        JSON.stringify(t),
                                                      ));
                                                  },
                                                  className: `p-1 text-white/40 hover:text-red-400`,
                                                  title: `Remove video from playlist`,
                                                  children: (0, Q.jsx)(J, {
                                                    className: `size-3`,
                                                  }),
                                                }),
                                              ],
                                            },
                                            n,
                                          );
                                        }),
                                      }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
            }),
          ],
        }),
      le &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[80] bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4`,
          children: (0, Q.jsxs)(`div`, {
            className: `w-full max-w-sm bg-[#1a1715] border border-white/15 rounded-3xl p-4 shadow-2xl text-white space-y-2 animate-in zoom-in-95 duration-200`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between pb-2 border-b border-white/10`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `min-w-0 pr-2`,
                    children: [
                      (0, Q.jsx)(`p`, {
                        className: `text-sm font-semibold truncate`,
                        children: W,
                      }),
                      (0, Q.jsx)(`p`, {
                        className: `text-xs text-white/60`,
                        children: `Options`,
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => de(!1),
                    className: `p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: () => {
                  (de(!1), pe(!0));
                },
                className: `flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left`,
                children: [
                  (0, Q.jsx)(Ke, { className: `size-4.5 text-brand` }),
                  (0, Q.jsx)(`span`, { children: `Video details & specs` }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: () => {
                  (D(
                    (e) => (
                      K(
                        e
                          ? `Stop after video cancelled`
                          : `Will stop after this video finishes`,
                      ),
                      !e
                    ),
                  ),
                    de(!1));
                },
                className: `flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left`,
                children: [
                  (0, Q.jsx)(F, { className: `size-4.5 text-amber-400` }),
                  (0, Q.jsx)(`span`, {
                    children: E
                      ? `Cancel Stop After Video`
                      : `Stop after this video`,
                  }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: async () => {
                  if ((de(!1), navigator.share))
                    try {
                      await navigator.share({
                        title: W,
                        text: `Watching ${W} on WebNa Video Player`,
                      });
                    } catch {}
                  else
                    (await navigator.clipboard.writeText(W),
                      K(`Video title copied to clipboard`));
                },
                className: `flex items-center gap-3 w-full p-2.5 rounded-xl hover:bg-white/10 text-sm font-medium transition-colors text-left`,
                children: [
                  (0, Q.jsx)(Be, { className: `size-4.5 text-blue-400` }),
                  (0, Q.jsx)(`span`, { children: `Share video` }),
                ],
              }),
            ],
          }),
        }),
      fe &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4`,
          children: (0, Q.jsxs)(`div`, {
            className: `w-full max-w-sm bg-[#1c1917] border border-white/15 rounded-3xl p-5 shadow-2xl text-white space-y-3`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between pb-2 border-b border-white/10`,
                children: [
                  (0, Q.jsx)(`h3`, {
                    className: `text-base font-semibold`,
                    children: `Video Details`,
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => pe(!1),
                    className: `p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `text-xs space-y-2 text-white/80`,
                children: [
                  (0, Q.jsxs)(`p`, {
                    children: [
                      (0, Q.jsx)(`strong`, {
                        className: `text-white`,
                        children: `Title:`,
                      }),
                      ` `,
                      W,
                    ],
                  }),
                  (0, Q.jsxs)(`p`, {
                    children: [
                      (0, Q.jsx)(`strong`, {
                        className: `text-white`,
                        children: `Duration:`,
                      }),
                      ` `,
                      $(m),
                    ],
                  }),
                  (0, Q.jsxs)(`p`, {
                    children: [
                      (0, Q.jsx)(`strong`, {
                        className: `text-white`,
                        children: `Source:`,
                      }),
                      ` `,
                      `channel` in (U || {})
                        ? `Streaming Catalog`
                        : `Device Storage`,
                    ],
                  }),
                  `quality` in (U || {}) &&
                    (0, Q.jsxs)(`p`, {
                      children: [
                        (0, Q.jsx)(`strong`, {
                          className: `text-white`,
                          children: `Quality:`,
                        }),
                        ` `,
                        U.quality,
                      ],
                    }),
                  `size` in (U || {}) &&
                    (0, Q.jsxs)(`p`, {
                      children: [
                        (0, Q.jsx)(`strong`, {
                          className: `text-white`,
                          children: `File Size:`,
                        }),
                        ` `,
                        ((U.size || 0) / 1048576).toFixed(2),
                        ` `,
                        `MB`,
                      ],
                    }),
                ],
              }),
              (0, Q.jsx)(`button`, {
                onClick: () => pe(!1),
                className: `w-full py-2 bg-white text-black text-xs font-semibold rounded-xl mt-2`,
                children: `Close`,
              }),
            ],
          }),
        }),
    ],
  });
}
function Ut({ playerMode: e, onPlayerModeChange: t }) {
  let [n, r] = (0, T.useState)(`audio`),
    i = e ?? n,
    a = (e) => {
      t ? t(e) : r(e);
    },
    [o, s] = (0, T.useState)(`foryou`),
    [c, l] = (0, T.useState)([]),
    [u, d] = (0, T.useState)([]),
    [f, p] = (0, T.useState)(new Set()),
    [m, h] = (0, T.useState)(null),
    [g, _] = (0, T.useState)(null),
    [v, ee] = (0, T.useState)(``),
    [y, b] = (0, T.useState)([]),
    [te, x] = (0, T.useState)(!1),
    [S, C] = (0, T.useState)(`spotify`),
    w = async (e, t) => {
      e && e.preventDefault();
      let n = (t ?? v).trim();
      if (!n) {
        (b([]), x(!1));
        return;
      }
      x(!0);
      try {
        let e = await jt({ data: n });
        b(e);
      } catch (e) {
        console.error(`Music search error:`, e);
        let t = n.toLowerCase(),
          r = c.filter(
            (e) =>
              e.title.toLowerCase().includes(t) ||
              e.artist.toLowerCase().includes(t),
          );
        b(r);
      } finally {
        x(!1);
      }
    },
    ne = async (e) => {
      if ((C(e), v.trim())) w(void 0, v.trim());
      else {
        let t =
          {
            all: `Top Hits`,
            spotify: `Spotify Top Hits`,
            apple: `Apple Music Pop`,
            itunes: `Top 40`,
            youtube: `Trending Viral`,
            amazon: `Amazon Music Prime`,
            tidal: `Master Audio Hits`,
            deezer: `Deezer Top Chart`,
            soundcloud: `SoundCloud Trending`,
            bandcamp: `Indie Essentials`,
            pandora: `Top Radio Hits`,
            qobuz: `Hi-Res Audio Hits`,
            napster: `Trending Classics`,
            boomplay: `Afrobeats & Pop`,
            audiomack: `Hip-Hop Hits`,
          }[e] || `Top Hits`;
        x(!0);
        try {
          let e = await jt({ data: t });
          e && e.length > 0 && b(e);
        } catch (e) {
          console.error(`Platform fetch error:`, e);
        } finally {
          x(!1);
        }
      }
    },
    [re, E] = (0, T.useState)(`foryou`),
    [D, O] = (0, T.useState)([]),
    [k, A] = (0, T.useState)([]),
    [j, ie] = (0, T.useState)(new Set()),
    [N, ae] = (0, T.useState)(null),
    [oe, P] = (0, T.useState)(null);
  ((0, T.useEffect)(() => {
    i === `audio` && o === `foryou` && At().then(l);
  }, [i, o]),
    (0, T.useEffect)(() => {
      i === `video` && re === `foryou` && Nt().then(O);
    }, [i, re]));
  let [F, I] = (0, T.useState)(null),
    [L, se] = (0, T.useState)(null),
    [ce, le] = (0, T.useState)(null),
    [ue, de] = (0, T.useState)(``),
    [fe, pe] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_user_playlists`);
        if (e) return JSON.parse(e);
      } catch {}
      return [
        { id: `default-1`, name: `My Favorite Mix`, trackNames: [] },
        { id: `default-2`, name: `Chill & Focus`, trackNames: [] },
      ];
    }),
    [z, he] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_favorites`);
        if (e) return JSON.parse(e);
      } catch {}
      return [];
    }),
    [ge, B] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_video_playlists`);
        if (e) return JSON.parse(e);
      } catch {}
      return [{ id: `favs-default`, name: `Featured Clips`, trackNames: [] }];
    }),
    [H, _e] = (0, T.useState)(() => {
      try {
        let e = localStorage.getItem(`webna_video_favorites`);
        if (e) return JSON.parse(e);
      } catch {}
      return [];
    });
  (0, T.useEffect)(() => {
    try {
      let e = localStorage.getItem(`webna_user_playlists`);
      e && pe(JSON.parse(e));
      let t = localStorage.getItem(`webna_favorites`);
      t && he(JSON.parse(t));
      let n = localStorage.getItem(`webna_video_playlists`);
      n && B(JSON.parse(n));
      let r = localStorage.getItem(`webna_video_favorites`);
      r && _e(JSON.parse(r));
    } catch {}
  }, [F]);
  let ve = (0, T.useMemo)(() => {
      let e = new Map();
      return (
        u.forEach((t) => {
          let n = t.name.replace(/\.[^/.]+$/, ``),
            r = `My Phone Audio`,
            i = `Local Phone Tracks`,
            a = n;
          if (n.includes(` - `)) {
            let e = n.split(` - `);
            ((r = e[0].trim()), (a = e[1].trim()), (i = `${r} Album`));
          }
          (e.has(i) || e.set(i, { albumName: i, artist: r, tracks: [] }),
            e.get(i).tracks.push({ title: a, file: t }));
        }),
        c.forEach((t) => {
          let n = `${t.artist} Essentials`;
          (e.has(n) || e.set(n, { albumName: n, artist: t.artist, tracks: [] }),
            e.get(n).tracks.push({ title: t.title, trending: t }));
        }),
        Array.from(e.values())
      );
    }, [u, c]),
    ye = (0, T.useMemo)(() => {
      let e = new Map();
      return (
        D.forEach((t) => {
          let n = t.channel || `Curated Collection`;
          (e.has(n) ||
            e.set(n, {
              albumName: n,
              description: `${n} Video Series`,
              thumbnailUrl: t.thumbnailUrl,
              items: [],
            }),
            e.get(n).items.push(t));
        }),
        k.length > 0 &&
          e.set(`My Uploaded Videos`, {
            albumName: `My Uploaded Videos`,
            description: `Videos from your phone storage`,
            items: k,
          }),
        Array.from(e.values())
      );
    }, [D, k]),
    xe = (e) => {
      e.preventDefault();
      let t = ue.trim();
      if (t) {
        if (i === `audio`) {
          let e = [{ id: `pl-${Date.now()}`, name: t, trackNames: [] }, ...fe];
          pe(e);
          try {
            localStorage.setItem(`webna_user_playlists`, JSON.stringify(e));
          } catch (e) {
            console.error(e);
          }
        } else {
          let e = [{ id: `vpl-${Date.now()}`, name: t, trackNames: [] }, ...ge];
          B(e);
          try {
            localStorage.setItem(`webna_video_playlists`, JSON.stringify(e));
          } catch (e) {
            console.error(e);
          }
        }
        de(``);
      }
    },
    Se = (e) => {
      if (i === `audio`) {
        let t = fe.filter((t) => t.id !== e);
        pe(t);
        try {
          localStorage.setItem(`webna_user_playlists`, JSON.stringify(t));
        } catch (e) {
          console.error(e);
        }
      } else {
        let t = ge.filter((t) => t.id !== e);
        B(t);
        try {
          localStorage.setItem(`webna_video_playlists`, JSON.stringify(t));
        } catch (e) {
          console.error(e);
        }
      }
      ce === e && le(null);
    },
    Ce = (e) => {
      if (i === `audio`) {
        let t = z.filter((t) => t !== e);
        he(t);
        try {
          localStorage.setItem(`webna_favorites`, JSON.stringify(t));
        } catch (e) {
          console.error(e);
        }
      } else {
        let t = H.filter((t) => t !== e);
        _e(t);
        try {
          localStorage.setItem(`webna_video_favorites`, JSON.stringify(t));
        } catch (e) {
          console.error(e);
        }
      }
    },
    we = (e) =>
      u.find(
        (t) =>
          t.name === e ||
          t.name.replace(/\.[^/.]+$/, ``) === e ||
          t.name.toLowerCase() === e.toLowerCase(),
      ) ||
      c.find(
        (t) =>
          t.title === e ||
          `${t.artist} - ${t.title}` === e ||
          t.title.toLowerCase().includes(e.toLowerCase()),
      ) ||
      y.find(
        (t) => t.title === e || t.title.toLowerCase().includes(e.toLowerCase()),
      ) || {
        title: e,
        artist: `Popular Artist`,
        coverUrl: `https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&auto=format&fit=crop&q=80`,
        rank: 1,
        previewUrl: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`,
      },
    U = (e) => {
      let t = u.findIndex(
        (t) =>
          t.name === e ||
          t.name.replace(/\.[^/.]+$/, ``) === e ||
          t.name.toLowerCase() === e.toLowerCase(),
      );
      if (t !== -1) {
        (q(u, t), I(null));
        return;
      }
      let n = c.findIndex(
        (t) =>
          t.title === e ||
          `${t.artist} - ${t.title}` === e ||
          t.title.toLowerCase().includes(e.toLowerCase()),
      );
      if (n !== -1) {
        (q(c, n), I(null));
        return;
      }
      let r = y.findIndex(
        (t) => t.title === e || t.title.toLowerCase().includes(e.toLowerCase()),
      );
      if (r !== -1) {
        (q(y, r), I(null));
        return;
      }
      let i = we(e);
      (q([i], 0), I(null));
    },
    Te = (e, t = 0) => {
      if (e.trackNames.length === 0) return;
      let n = e.trackNames.map((e) => we(e));
      (q(n, Math.max(0, Math.min(t, n.length - 1))), I(null));
    },
    Ee = (e) => {
      let t = k.findIndex((t) => t.name === e);
      if (t !== -1) {
        (We(k, t), I(null));
        return;
      }
      let n = D.findIndex((t) => t.title === e);
      if (n !== -1) {
        (We(D, n), I(null));
        return;
      }
      D.length > 0 && (We(D, 0), I(null));
    },
    De = (e) => {
      he((t) => {
        let n = t.includes(e) ? t.filter((t) => t !== e) : [...t, e];
        try {
          localStorage.setItem(`webna_favorites`, JSON.stringify(n));
        } catch (e) {
          console.error(e);
        }
        return n;
      });
    },
    W = (e) => {
      _e((t) => {
        let n = t.includes(e) ? t.filter((t) => t !== e) : [...t, e];
        try {
          localStorage.setItem(`webna_video_favorites`, JSON.stringify(n));
        } catch (e) {
          console.error(e);
        }
        return n;
      });
    },
    ke = (e, t) => {
      if (t.trim())
        if (i === `audio`) {
          let n = fe.map((n) =>
            n.id === e
              ? n.trackNames.includes(t)
                ? n
                : { ...n, trackNames: [...n.trackNames, t] }
              : n,
          );
          pe(n);
          try {
            localStorage.setItem(`webna_user_playlists`, JSON.stringify(n));
          } catch (e) {
            console.error(e);
          }
        } else {
          let n = ge.map((n) =>
            n.id === e
              ? n.trackNames.includes(t)
                ? n
                : { ...n, trackNames: [...n.trackNames, t] }
              : n,
          );
          B(n);
          try {
            localStorage.setItem(`webna_video_playlists`, JSON.stringify(n));
          } catch (e) {
            console.error(e);
          }
        }
    },
    Ae = (e, t) => {
      if (i === `audio`) {
        let n = fe.map((n) =>
          n.id === e
            ? { ...n, trackNames: n.trackNames.filter((e) => e !== t) }
            : n,
        );
        pe(n);
        try {
          localStorage.setItem(`webna_user_playlists`, JSON.stringify(n));
        } catch (e) {
          console.error(e);
        }
      } else {
        let n = ge.map((n) =>
          n.id === e
            ? { ...n, trackNames: n.trackNames.filter((e) => e !== t) }
            : n,
        );
        B(n);
        try {
          localStorage.setItem(`webna_video_playlists`, JSON.stringify(n));
        } catch (e) {
          console.error(e);
        }
      }
    },
    je = (e) => {
      if (!e || e.length === 0) return;
      let t = Array.from(e);
      d((e) => {
        let n = new Set(e.map((e) => `${e.name}-${e.size}`)),
          r = t.filter((e) => !n.has(`${e.name}-${e.size}`)),
          i = [...e, ...r];
        return (
          p((e) => {
            let t = new Set(e);
            return (r.forEach((e) => t.add(e.name)), t);
          }),
          i
        );
      });
    },
    K = (e) => {
      p((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    },
    Ne = () => {
      f.size === u.length ? p(new Set()) : p(new Set(u.map((e) => e.name)));
    },
    Pe = (e) => {
      let t = u[e];
      (d((t) => t.filter((t, n) => n !== e)),
        t &&
          p((e) => {
            let n = new Set(e);
            return (n.delete(t.name), n);
          }));
    },
    Fe = () => {
      (d([]), p(new Set()));
    },
    q = (e, t = 0) => {
      e.length !== 0 && (h(e), _(t));
    },
    Ie = () => {
      let e = u.filter((e) => f.has(e.name));
      e.length > 0 ? q(e, 0) : u.length > 0 && q(u, 0);
    },
    Re = (e) => {
      let t = u[e],
        n = u.filter((e) => f.has(e.name));
      if (n.length > 1 && f.has(t.name)) {
        let e = n.findIndex((e) => e.name === t.name);
        q(n, Math.max(0, e));
      } else q(u, e);
    },
    ze = (e) => {
      if (!e || e.length === 0) return;
      let t = Array.from(e);
      A((e) => {
        let n = new Set(e.map((e) => `${e.name}-${e.size}`)),
          r = t.filter((e) => !n.has(`${e.name}-${e.size}`)),
          i = [...e, ...r];
        return (
          ie((e) => {
            let t = new Set(e);
            return (r.forEach((e) => t.add(e.name)), t);
          }),
          i
        );
      });
    },
    Be = (e) => {
      ie((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    },
    Ve = () => {
      j.size === k.length ? ie(new Set()) : ie(new Set(k.map((e) => e.name)));
    },
    He = (e) => {
      let t = k[e];
      (A((t) => t.filter((t, n) => n !== e)),
        t &&
          ie((e) => {
            let n = new Set(e);
            return (n.delete(t.name), n);
          }));
    },
    Ue = () => {
      (A([]), ie(new Set()));
    },
    We = (e, t = 0) => {
      e.length !== 0 && (ae(e), P(t));
    },
    Ge = () => {
      let e = k.filter((e) => j.has(e.name));
      e.length > 0 ? We(e, 0) : k.length > 0 && We(k, 0);
    },
    Ye = (e) => {
      let t = k[e],
        n = k.filter((e) => j.has(e.name));
      if (n.length > 1 && j.has(t.name)) {
        let e = n.findIndex((e) => e.name === t.name);
        We(n, Math.max(0, e));
      } else We(k, e);
    },
    Xe = f.size,
    Ze = u.length > 0 && Xe === u.length,
    Y = j.size,
    Qe = k.length > 0 && Y === k.length,
    et = i === `audio` ? fe.length : ge.length,
    tt = i === `audio` ? z.length : H.length,
    nt = i === `audio` ? ve.length : ye.length;
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex flex-col h-full select-none`,
        children: [
          F
            ? (0, Q.jsxs)(`div`, {
                className: `flex-1 overflow-y-auto min-h-0 space-y-4 px-4 py-3`,
                children: [
                  F === `favorites` &&
                    (0, Q.jsxs)(`div`, {
                      className: `space-y-4`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center justify-between pb-2 border-b border-[#e8e2d9]`,
                          children: [
                            (0, Q.jsxs)(`button`, {
                              onClick: () => I(null),
                              className: `flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline`,
                              children: [
                                (0, Q.jsx)(M, { className: `size-4` }),
                                (0, Q.jsx)(`span`, {
                                  children: `Back to Player`,
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`span`, {
                              className: `text-xs font-semibold text-muted-foreground`,
                              children: [
                                i === `audio`
                                  ? `Audio Favorites`
                                  : `Video Favorites`,
                                ` `,
                                `(`,
                                i === `audio` ? z.length : H.length,
                                `)`,
                              ],
                            }),
                          ],
                        }),
                        (i === `audio` ? z : H).length > 0
                          ? (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    (0, Q.jsx)(`p`, {
                                      className: `text-xs text-muted-foreground font-medium`,
                                      children:
                                        i === `audio`
                                          ? `Your favorited songs`
                                          : `Your favorited videos`,
                                    }),
                                    (0, Q.jsxs)(`button`, {
                                      onClick: () => {
                                        i === `audio`
                                          ? z.length > 0 && U(z[0])
                                          : H.length > 0 && Ee(H[0]);
                                      },
                                      className: `flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 transition-all`,
                                      children: [
                                        (0, Q.jsx)(G, {
                                          className: `size-3.5 fill-current`,
                                        }),
                                        (0, Q.jsx)(`span`, {
                                          children: `Play All Favorites`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `space-y-2`,
                                  children: (i === `audio` ? z : H).map(
                                    (e, t) =>
                                      (0, Q.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/30 transition-all`,
                                          children: [
                                            (0, Q.jsxs)(`div`, {
                                              className: `flex items-center gap-3 min-w-0 flex-1`,
                                              children: [
                                                (0, Q.jsx)(`div`, {
                                                  className: `size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0`,
                                                  children:
                                                    i === `audio`
                                                      ? (0, Q.jsx)(Oe, {
                                                          className: `size-5`,
                                                        })
                                                      : (0, Q.jsx)(me, {
                                                          className: `size-5`,
                                                        }),
                                                }),
                                                (0, Q.jsxs)(`div`, {
                                                  className: `min-w-0 flex-1`,
                                                  children: [
                                                    (0, Q.jsx)(`p`, {
                                                      className: `font-semibold text-xs sm:text-sm text-[#2b2520] truncate`,
                                                      children: e,
                                                    }),
                                                    (0, Q.jsxs)(`p`, {
                                                      className: `text-[11px] text-[#8c827a] mt-0.5`,
                                                      children: [
                                                        `Favorite #`,
                                                        t + 1,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, Q.jsxs)(`div`, {
                                              className: `flex items-center gap-2`,
                                              children: [
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => {
                                                    i === `audio`
                                                      ? U(e)
                                                      : Ee(e);
                                                  },
                                                  className: `size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs`,
                                                  title: `Play`,
                                                  children: (0, Q.jsx)(G, {
                                                    className: `size-4 fill-current ml-0.5`,
                                                  }),
                                                }),
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => Ce(e),
                                                  className: `p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors`,
                                                  title: `Remove from favorites`,
                                                  children: (0, Q.jsx)(J, {
                                                    className: `size-4`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e,
                                      ),
                                  ),
                                }),
                              ],
                            })
                          : (0, Q.jsxs)(`div`, {
                              className: `text-center text-muted-foreground py-12 flex flex-col items-center justify-center gap-3`,
                              children: [
                                (0, Q.jsx)(`div`, {
                                  className: `size-16 rounded-full bg-red-50 text-red-400 flex items-center justify-center`,
                                  children: (0, Q.jsx)(V, {
                                    className: `size-8`,
                                  }),
                                }),
                                (0, Q.jsxs)(`div`, {
                                  children: [
                                    (0, Q.jsx)(`p`, {
                                      className: `text-sm font-semibold text-[#3c342d]`,
                                      children: `No favorites yet`,
                                    }),
                                    (0, Q.jsxs)(`p`, {
                                      className: `text-xs text-[#8c827a] mt-1 max-w-xs`,
                                      children: [
                                        `Tap the heart icon on any`,
                                        ` `,
                                        i === `audio` ? `song` : `video`,
                                        ` in your library or trending feed to add it here.`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`button`, {
                                  onClick: () => I(null),
                                  className: `mt-2 px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl hover:opacity-90 transition-all`,
                                  children: [
                                    `Browse `,
                                    i === `audio` ? `Songs` : `Videos`,
                                  ],
                                }),
                              ],
                            }),
                      ],
                    }),
                  F === `playlists` &&
                    (0, Q.jsxs)(`div`, {
                      className: `space-y-4`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center justify-between pb-2 border-b border-[#e8e2d9]`,
                          children: [
                            (0, Q.jsxs)(`button`, {
                              onClick: () => {
                                ce ? le(null) : I(null);
                              },
                              className: `flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline`,
                              children: [
                                (0, Q.jsx)(M, { className: `size-4` }),
                                (0, Q.jsx)(`span`, {
                                  children: ce
                                    ? `Back to Playlists`
                                    : `Back to Player`,
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`span`, {
                              className: `text-xs font-semibold text-muted-foreground`,
                              children:
                                i === `audio`
                                  ? `Audio Playlists`
                                  : `Video Playlists`,
                            }),
                          ],
                        }),
                        ce
                          ? (() => {
                              let e = (i === `audio` ? fe : ge).find(
                                (e) => e.id === ce,
                              );
                              return e
                                ? (0, Q.jsxs)(`div`, {
                                    className: `space-y-4`,
                                    children: [
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center justify-between bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs`,
                                        children: [
                                          (0, Q.jsxs)(`div`, {
                                            children: [
                                              (0, Q.jsx)(`h4`, {
                                                className: `font-bold text-base text-[#2b2520]`,
                                                children: e.name,
                                              }),
                                              (0, Q.jsxs)(`p`, {
                                                className: `text-xs text-muted-foreground mt-0.5`,
                                                children: [
                                                  e.trackNames.length,
                                                  ` `,
                                                  e.trackNames.length === 1
                                                    ? `track`
                                                    : `tracks`,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-2`,
                                            children: [
                                              (0, Q.jsxs)(`button`, {
                                                onClick: () => {
                                                  e.trackNames.length > 0 &&
                                                    (i === `audio`
                                                      ? Te(e, 0)
                                                      : Ee(e.trackNames[0]));
                                                },
                                                disabled:
                                                  e.trackNames.length === 0,
                                                className: `flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 disabled:opacity-50`,
                                                children: [
                                                  (0, Q.jsx)(G, {
                                                    className: `size-3.5 fill-current`,
                                                  }),
                                                  (0, Q.jsx)(`span`, {
                                                    children: `Play`,
                                                  }),
                                                ],
                                              }),
                                              (0, Q.jsx)(`button`, {
                                                onClick: () => Se(e.id),
                                                className: `p-1.5 text-muted-foreground hover:text-destructive`,
                                                title: `Delete playlist`,
                                                children: (0, Q.jsx)(J, {
                                                  className: `size-4`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Q.jsxs)(`div`, {
                                        className: `space-y-2`,
                                        children: [
                                          (0, Q.jsx)(`p`, {
                                            className: `text-xs font-semibold text-muted-foreground`,
                                            children: `Add tracks to this playlist`,
                                          }),
                                          (0, Q.jsxs)(`select`, {
                                            className: `w-full rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs text-[#2b2520]`,
                                            defaultValue: ``,
                                            onChange: (t) => {
                                              t.target.value &&
                                                (ke(e.id, t.target.value),
                                                (t.target.value = ``));
                                            },
                                            children: [
                                              (0, Q.jsx)(`option`, {
                                                value: ``,
                                                disabled: !0,
                                                children: `Choose from your uploads...`,
                                              }),
                                              (i === `audio` ? u : k).map((e) =>
                                                (0, Q.jsx)(
                                                  `option`,
                                                  {
                                                    value: e.name,
                                                    children: e.name,
                                                  },
                                                  e.name,
                                                ),
                                              ),
                                              (i === `audio` ? c : D).map(
                                                (e) => {
                                                  let t =
                                                    `title` in e ? e.title : ``;
                                                  return (0, Q.jsx)(
                                                    `option`,
                                                    { value: t, children: t },
                                                    t,
                                                  );
                                                },
                                              ),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Q.jsxs)(`div`, {
                                        className: `space-y-2`,
                                        children: [
                                          e.trackNames.map((t, n) =>
                                            (0, Q.jsxs)(
                                              `div`,
                                              {
                                                className: `flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]`,
                                                children: [
                                                  (0, Q.jsxs)(`div`, {
                                                    className: `flex items-center gap-2.5 min-w-0 flex-1`,
                                                    children: [
                                                      (0, Q.jsx)(`span`, {
                                                        className: `text-xs font-mono text-muted-foreground w-4 text-center`,
                                                        children: n + 1,
                                                      }),
                                                      (0, Q.jsx)(`p`, {
                                                        className: `text-xs font-medium truncate text-[#2b2520]`,
                                                        children: t,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, Q.jsxs)(`div`, {
                                                    className: `flex items-center gap-1.5`,
                                                    children: [
                                                      (0, Q.jsx)(`button`, {
                                                        onClick: () => {
                                                          i === `audio`
                                                            ? Te(e, n)
                                                            : Ee(t);
                                                        },
                                                        className: `size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors`,
                                                        title: `Play`,
                                                        children: (0, Q.jsx)(
                                                          G,
                                                          {
                                                            className: `size-3.5 fill-current ml-0.5`,
                                                          },
                                                        ),
                                                      }),
                                                      (0, Q.jsx)(`button`, {
                                                        onClick: () =>
                                                          Ae(e.id, t),
                                                        className: `p-1 text-muted-foreground hover:text-destructive`,
                                                        title: `Remove from playlist`,
                                                        children: (0, Q.jsx)(
                                                          J,
                                                          {
                                                            className: `size-3.5`,
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              `${t}-${n}`,
                                            ),
                                          ),
                                          e.trackNames.length === 0 &&
                                            (0, Q.jsx)(`p`, {
                                              className: `text-center text-xs text-muted-foreground py-6`,
                                              children: `No tracks in this playlist yet. Add tracks using the selector above.`,
                                            }),
                                        ],
                                      }),
                                    ],
                                  })
                                : null;
                            })()
                          : (0, Q.jsxs)(`div`, {
                              className: `space-y-4`,
                              children: [
                                (0, Q.jsxs)(`form`, {
                                  onSubmit: xe,
                                  className: `flex gap-2`,
                                  children: [
                                    (0, Q.jsx)(`input`, {
                                      type: `text`,
                                      placeholder: `New playlist name...`,
                                      value: ue,
                                      onChange: (e) => de(e.target.value),
                                      className: `flex-1 rounded-xl border border-[#e8e2d9] bg-white px-3 py-2 text-xs focus:outline-hidden focus:border-brand`,
                                    }),
                                    (0, Q.jsxs)(`button`, {
                                      type: `submit`,
                                      className: `px-4 py-2 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shrink-0 hover:opacity-90 flex items-center gap-1`,
                                      children: [
                                        (0, Q.jsx)(Me, {
                                          className: `size-3.5`,
                                        }),
                                        (0, Q.jsx)(`span`, {
                                          children: `Create`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `space-y-2.5`,
                                  children: (i === `audio` ? fe : ge).map((e) =>
                                    (0, Q.jsxs)(
                                      `div`,
                                      {
                                        className: `flex items-center justify-between p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-xs hover:border-brand/40 transition-all cursor-pointer`,
                                        onClick: () => le(e.id),
                                        children: [
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-3 min-w-0 flex-1`,
                                            children: [
                                              (0, Q.jsx)(`div`, {
                                                className: `size-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0`,
                                                children: (0, Q.jsx)(be, {
                                                  className: `size-5.5`,
                                                }),
                                              }),
                                              (0, Q.jsxs)(`div`, {
                                                className: `min-w-0 flex-1`,
                                                children: [
                                                  (0, Q.jsx)(`h4`, {
                                                    className: `font-semibold text-xs sm:text-sm text-[#2b2520] truncate`,
                                                    children: e.name,
                                                  }),
                                                  (0, Q.jsxs)(`p`, {
                                                    className: `text-[11px] text-[#8c827a] mt-0.5`,
                                                    children: [
                                                      e.trackNames.length,
                                                      ` `,
                                                      e.trackNames.length === 1
                                                        ? `track`
                                                        : `tracks`,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-1.5`,
                                            onClick: (e) => e.stopPropagation(),
                                            children: [
                                              e.trackNames.length > 0 &&
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => {
                                                    i === `audio`
                                                      ? Te(e, 0)
                                                      : Ee(e.trackNames[0]);
                                                  },
                                                  className: `size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs`,
                                                  title: `Play playlist`,
                                                  children: (0, Q.jsx)(G, {
                                                    className: `size-4 fill-current ml-0.5`,
                                                  }),
                                                }),
                                              (0, Q.jsx)(`button`, {
                                                onClick: () => Se(e.id),
                                                className: `p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors`,
                                                title: `Delete playlist`,
                                                children: (0, Q.jsx)(J, {
                                                  className: `size-3.5`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                      ],
                    }),
                  F === `albums` &&
                    (0, Q.jsxs)(`div`, {
                      className: `space-y-4`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center justify-between pb-2 border-b border-[#e8e2d9]`,
                          children: [
                            (0, Q.jsxs)(`button`, {
                              onClick: () => {
                                L ? se(null) : I(null);
                              },
                              className: `flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline`,
                              children: [
                                (0, Q.jsx)(M, { className: `size-4` }),
                                (0, Q.jsx)(`span`, {
                                  children: L
                                    ? `Back to Albums`
                                    : `Back to Player`,
                                }),
                              ],
                            }),
                            (0, Q.jsx)(`span`, {
                              className: `text-xs font-semibold text-muted-foreground`,
                              children:
                                i === `audio`
                                  ? `Audio Albums`
                                  : `Video Collections`,
                            }),
                          ],
                        }),
                        L
                          ? (() => {
                              if (i === `audio`) {
                                let e = ve.find((e) => e.albumName === L);
                                return e
                                  ? (0, Q.jsxs)(`div`, {
                                      className: `space-y-4`,
                                      children: [
                                        (0, Q.jsxs)(`div`, {
                                          className: `flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs`,
                                          children: [
                                            (0, Q.jsx)(`div`, {
                                              className: `size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0`,
                                              children: (0, Q.jsx)(R, {
                                                className: `size-7`,
                                              }),
                                            }),
                                            (0, Q.jsxs)(`div`, {
                                              className: `min-w-0 flex-1`,
                                              children: [
                                                (0, Q.jsx)(`h4`, {
                                                  className: `font-bold text-sm sm:text-base text-[#2b2520] truncate`,
                                                  children: e.albumName,
                                                }),
                                                (0, Q.jsxs)(`p`, {
                                                  className: `text-xs text-muted-foreground mt-0.5`,
                                                  children: [
                                                    e.artist,
                                                    ` • `,
                                                    e.tracks.length,
                                                    ` tracks`,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, Q.jsxs)(`button`, {
                                              onClick: () => {
                                                let t = e.tracks
                                                  .map(
                                                    (e) => e.file || e.trending,
                                                  )
                                                  .filter((e) => !!e);
                                                t.length > 0 &&
                                                  (q(t, 0), I(null));
                                              },
                                              className: `flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90`,
                                              children: [
                                                (0, Q.jsx)(G, {
                                                  className: `size-3.5 fill-current`,
                                                }),
                                                (0, Q.jsx)(`span`, {
                                                  children: `Play Album`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, Q.jsx)(`div`, {
                                          className: `space-y-1.5`,
                                          children: e.tracks.map((t, n) =>
                                            (0, Q.jsxs)(
                                              `div`,
                                              {
                                                className: `flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]`,
                                                children: [
                                                  (0, Q.jsxs)(`div`, {
                                                    className: `flex items-center gap-2.5 min-w-0 flex-1`,
                                                    children: [
                                                      (0, Q.jsx)(`span`, {
                                                        className: `text-xs font-mono text-muted-foreground w-4 text-center`,
                                                        children: n + 1,
                                                      }),
                                                      (0, Q.jsx)(`p`, {
                                                        className: `text-xs font-medium truncate text-[#2b2520]`,
                                                        children: t.title,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, Q.jsx)(`button`, {
                                                    onClick: () => {
                                                      let t = e.tracks
                                                        .map(
                                                          (e) =>
                                                            e.file ||
                                                            e.trending,
                                                        )
                                                        .filter((e) => !!e);
                                                      (q(t, n), I(null));
                                                    },
                                                    className: `size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors`,
                                                    title: `Play song`,
                                                    children: (0, Q.jsx)(G, {
                                                      className: `size-3.5 fill-current ml-0.5`,
                                                    }),
                                                  }),
                                                ],
                                              },
                                              `${t.title}-${n}`,
                                            ),
                                          ),
                                        }),
                                      ],
                                    })
                                  : null;
                              }
                              {
                                let e = ye.find((e) => e.albumName === L);
                                return e
                                  ? (0, Q.jsxs)(`div`, {
                                      className: `space-y-4`,
                                      children: [
                                        (0, Q.jsxs)(`div`, {
                                          className: `flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-[#e8e2d9] shadow-xs`,
                                          children: [
                                            (0, Q.jsx)(`div`, {
                                              className: `size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0`,
                                              children: (0, Q.jsx)(me, {
                                                className: `size-7`,
                                              }),
                                            }),
                                            (0, Q.jsxs)(`div`, {
                                              className: `min-w-0 flex-1`,
                                              children: [
                                                (0, Q.jsx)(`h4`, {
                                                  className: `font-bold text-sm sm:text-base text-[#2b2520] truncate`,
                                                  children: e.albumName,
                                                }),
                                                (0, Q.jsxs)(`p`, {
                                                  className: `text-xs text-muted-foreground mt-0.5`,
                                                  children: [
                                                    e.description,
                                                    ` • `,
                                                    e.items.length,
                                                    ` videos`,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, Q.jsxs)(`button`, {
                                              onClick: () => {
                                                e.items.length > 0 &&
                                                  We(e.items, 0);
                                              },
                                              className: `flex items-center gap-1.5 px-3 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90`,
                                              children: [
                                                (0, Q.jsx)(G, {
                                                  className: `size-3.5 fill-current`,
                                                }),
                                                (0, Q.jsx)(`span`, {
                                                  children: `Play`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, Q.jsx)(`div`, {
                                          className: `space-y-1.5`,
                                          children: e.items.map((t, n) => {
                                            let r =
                                              `title` in t ? t.title : t.name;
                                            return (0, Q.jsxs)(
                                              `div`,
                                              {
                                                className: `flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e8e2d9]`,
                                                children: [
                                                  (0, Q.jsxs)(`div`, {
                                                    className: `flex items-center gap-2.5 min-w-0 flex-1`,
                                                    children: [
                                                      (0, Q.jsx)(`span`, {
                                                        className: `text-xs font-mono text-muted-foreground w-4 text-center`,
                                                        children: n + 1,
                                                      }),
                                                      (0, Q.jsx)(`p`, {
                                                        className: `text-xs font-medium truncate text-[#2b2520]`,
                                                        children: r,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, Q.jsx)(`button`, {
                                                    onClick: () =>
                                                      We(e.items, n),
                                                    className: `size-7 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors`,
                                                    children: (0, Q.jsx)(G, {
                                                      className: `size-3.5 fill-current ml-0.5`,
                                                    }),
                                                  }),
                                                ],
                                              },
                                              `${r}-${n}`,
                                            );
                                          }),
                                        }),
                                      ],
                                    })
                                  : null;
                              }
                            })()
                          : (0, Q.jsxs)(`div`, {
                              className: `space-y-3`,
                              children: [
                                (0, Q.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground font-medium`,
                                  children:
                                    i === `audio`
                                      ? `Albums organized by artist and uploads`
                                      : `Curated video series and collections`,
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `grid grid-cols-2 gap-3`,
                                  children: (i === `audio` ? ve : ye).map(
                                    (e) => {
                                      let t = e.albumName,
                                        n =
                                          `artist` in e
                                            ? e.artist
                                            : e.description,
                                        r =
                                          `tracks` in e
                                            ? e.tracks.length
                                            : e.items.length,
                                        a =
                                          `thumbnailUrl` in e
                                            ? e.thumbnailUrl
                                            : void 0;
                                      return (0, Q.jsxs)(
                                        `div`,
                                        {
                                          onClick: () => se(t),
                                          className: `group p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-2.5`,
                                          children: [
                                            (0, Q.jsx)(`div`, {
                                              className: `size-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform`,
                                              children: a
                                                ? (0, Q.jsx)(`img`, {
                                                    src: a,
                                                    alt: t,
                                                    className: `w-full h-full object-cover`,
                                                  })
                                                : i === `audio`
                                                  ? (0, Q.jsx)(R, {
                                                      className: `size-8`,
                                                    })
                                                  : (0, Q.jsx)(me, {
                                                      className: `size-8`,
                                                    }),
                                            }),
                                            (0, Q.jsxs)(`div`, {
                                              className: `w-full min-w-0`,
                                              children: [
                                                (0, Q.jsx)(`h4`, {
                                                  className: `font-semibold text-xs text-[#2b2520] truncate group-hover:text-brand transition-colors`,
                                                  children: t,
                                                }),
                                                (0, Q.jsx)(`p`, {
                                                  className: `text-[10px] text-muted-foreground truncate mt-0.5`,
                                                  children: n,
                                                }),
                                                (0, Q.jsxs)(`span`, {
                                                  className: `inline-block mt-1 text-[9px] font-semibold bg-[#f2ede4] text-[#6b6158] px-2 py-0.5 rounded-full`,
                                                  children: [
                                                    r,
                                                    ` `,
                                                    r === 1
                                                      ? `track`
                                                      : `tracks`,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        t,
                                      );
                                    },
                                  ),
                                }),
                              ],
                            }),
                      ],
                    }),
                ],
              })
            : (0, Q.jsxs)(Q.Fragment, {
                children: [
                  i === `audio`
                    ? (0, Q.jsxs)(`div`, {
                        className: `flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1`,
                        children: [
                          (0, Q.jsx)(`button`, {
                            className: `flex-1 py-2 text-sm font-semibold transition-colors ${o === `foryou` ? `border-b-2 border-brand text-brand` : `text-muted-foreground hover:text-foreground`}`,
                            onClick: () => s(`foryou`),
                            children: `For you`,
                          }),
                          (0, Q.jsxs)(`button`, {
                            className: `flex-1 py-2 text-sm font-semibold transition-colors ${o === `phone` ? `border-b-2 border-brand text-brand` : `text-muted-foreground hover:text-foreground`}`,
                            onClick: () => s(`phone`),
                            children: [
                              `My phone`,
                              ` `,
                              u.length > 0 && `(${u.length})`,
                            ],
                          }),
                        ],
                      })
                    : (0, Q.jsxs)(`div`, {
                        className: `flex border-b border-[#e8e2d9] mb-3 shrink-0 px-4 pt-1`,
                        children: [
                          (0, Q.jsx)(`button`, {
                            className: `flex-1 py-2 text-sm font-semibold transition-colors ${re === `foryou` ? `border-b-2 border-brand text-brand` : `text-muted-foreground hover:text-foreground`}`,
                            onClick: () => E(`foryou`),
                            children: `For you`,
                          }),
                          (0, Q.jsxs)(`button`, {
                            className: `flex-1 py-2 text-sm font-semibold transition-colors ${re === `phone` ? `border-b-2 border-brand text-brand` : `text-muted-foreground hover:text-foreground`}`,
                            onClick: () => E(`phone`),
                            children: [
                              `My phone`,
                              ` `,
                              k.length > 0 && `(${k.length})`,
                            ],
                          }),
                        ],
                      }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex-1 overflow-y-auto min-h-0 space-y-4 px-4 pb-4`,
                    children: [
                      i === `audio` &&
                        (o === `phone`
                          ? (0, Q.jsxs)(`div`, {
                              className: `space-y-3 pb-6`,
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex flex-col gap-2`,
                                  children: [
                                    (0, Q.jsxs)(`label`, {
                                      className: `flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all`,
                                      children: [
                                        (0, Q.jsx)(Me, {
                                          className: `size-4.5`,
                                        }),
                                        (0, Q.jsx)(`span`, {
                                          children:
                                            u.length === 0
                                              ? `Select audio files`
                                              : `Upload / Add more songs`,
                                        }),
                                        (0, Q.jsx)(`input`, {
                                          type: `file`,
                                          multiple: !0,
                                          accept: `audio/*`,
                                          className: `hidden`,
                                          onChange: (e) => {
                                            (je(e.target.files),
                                              (e.target.value = ``));
                                          },
                                        }),
                                      ],
                                    }),
                                    u.length > 0 &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]`,
                                        children: [
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-2 pl-1`,
                                            children: [
                                              (0, Q.jsxs)(`button`, {
                                                onClick: Ne,
                                                className: `flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand`,
                                                children: [
                                                  Ze
                                                    ? (0, Q.jsx)(qe, {
                                                        className: `size-4 text-brand`,
                                                      })
                                                    : (0, Q.jsx)(Je, {
                                                        className: `size-4 text-[#8c827a]`,
                                                      }),
                                                  (0, Q.jsx)(`span`, {
                                                    children: Ze
                                                      ? `Deselect All`
                                                      : `Select All`,
                                                  }),
                                                ],
                                              }),
                                              (0, Q.jsxs)(`span`, {
                                                className: `text-[11px] text-[#8c827a]`,
                                                children: [
                                                  `(`,
                                                  Xe,
                                                  `/`,
                                                  u.length,
                                                  `)`,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-1.5`,
                                            children: [
                                              (0, Q.jsxs)(`button`, {
                                                onClick: Ie,
                                                disabled:
                                                  Xe === 0 && u.length === 0,
                                                className: `flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all`,
                                                children: [
                                                  (0, Q.jsx)(G, {
                                                    className: `size-3.5 fill-current`,
                                                  }),
                                                  (0, Q.jsxs)(`span`, {
                                                    children: [
                                                      `Play`,
                                                      ` `,
                                                      Xe > 0
                                                        ? `Selected (${Xe})`
                                                        : `All`,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, Q.jsx)(`button`, {
                                                onClick: Fe,
                                                className: `p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors`,
                                                title: `Clear all songs`,
                                                children: (0, Q.jsx)(J, {
                                                  className: `size-4`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `space-y-1.5`,
                                  children: [
                                    u.map((e, t) => {
                                      let n = f.has(e.name);
                                      return (0, Q.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center justify-between p-2.5 rounded-2xl border transition-all ${n ? `bg-white border-brand/40 shadow-xs` : `bg-white/60 border-[#e8e2d9] opacity-75`}`,
                                          children: [
                                            (0, Q.jsx)(`button`, {
                                              onClick: () => K(e.name),
                                              className: `p-1.5 text-[#574d46] hover:text-brand`,
                                              title: n
                                                ? `Unselect`
                                                : `Select for playback`,
                                              children: n
                                                ? (0, Q.jsx)(qe, {
                                                    className: `size-4.5 text-brand`,
                                                  })
                                                : (0, Q.jsx)(Je, {
                                                    className: `size-4.5 text-[#8c827a]`,
                                                  }),
                                            }),
                                            (0, Q.jsxs)(`button`, {
                                              className: `min-w-0 flex-1 text-left px-2`,
                                              onClick: () => Re(t),
                                              children: [
                                                (0, Q.jsx)(`p`, {
                                                  className: `font-semibold text-xs sm:text-sm text-[#2b2520] truncate`,
                                                  children: e.name,
                                                }),
                                                (0, Q.jsxs)(`p`, {
                                                  className: `text-[11px] text-[#8c827a] truncate mt-0.5`,
                                                  children: [
                                                    (e.size / 1048576).toFixed(
                                                      2,
                                                    ),
                                                    ` MB •`,
                                                    ` `,
                                                    e.name
                                                      .split(`.`)
                                                      .pop()
                                                      ?.toUpperCase(),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, Q.jsxs)(`div`, {
                                              className: `flex items-center gap-1`,
                                              children: [
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => De(e.name),
                                                  className: `p-1.5 rounded-lg transition-colors ${z.includes(e.name) ? `text-red-500` : `text-[#a3978e] hover:text-red-500`}`,
                                                  title: z.includes(e.name)
                                                    ? `Remove from favorites`
                                                    : `Add to favorites`,
                                                  children: (0, Q.jsx)(V, {
                                                    className: `size-4 ${z.includes(e.name) ? `fill-red-500 text-red-500` : ``}`,
                                                  }),
                                                }),
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => Re(t),
                                                  className: `size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs`,
                                                  title: `Play now`,
                                                  children: (0, Q.jsx)(G, {
                                                    className: `size-4 fill-current ml-0.5`,
                                                  }),
                                                }),
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => Pe(t),
                                                  className: `p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors`,
                                                  title: `Remove from list`,
                                                  children: (0, Q.jsx)(J, {
                                                    className: `size-3.5`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        `${e.name}-${t}`,
                                      );
                                    }),
                                    u.length === 0 &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3`,
                                        children: [
                                          (0, Q.jsx)(`div`, {
                                            className: `size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand`,
                                            children: (0, Q.jsx)(Oe, {
                                              className: `size-8`,
                                            }),
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            children: [
                                              (0, Q.jsx)(`p`, {
                                                className: `text-sm font-semibold text-[#3c342d]`,
                                                children: `No songs uploaded yet`,
                                              }),
                                              (0, Q.jsx)(`p`, {
                                                className: `text-xs text-[#8c827a] mt-1 max-w-xs`,
                                                children: `Tap "Select audio files" above to upload your songs (MP3, WAV, etc.) and play them one by one.`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            })
                          : (0, Q.jsxs)(`div`, {
                              className: `space-y-4 pb-6`,
                              children: [
                                (0, Q.jsxs)(`h3`, {
                                  className: `font-semibold text-lg flex items-center gap-2`,
                                  children: [
                                    (0, Q.jsx)(Ke, {
                                      className: `size-5 text-brand`,
                                    }),
                                    (0, Q.jsx)(`span`, {
                                      children: `Popular now`,
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `space-y-3`,
                                  children: [
                                    (0, Q.jsxs)(`form`, {
                                      onSubmit: w,
                                      className: `flex gap-2`,
                                      children: [
                                        (0, Q.jsxs)(`div`, {
                                          className: `relative flex-1`,
                                          children: [
                                            (0, Q.jsx)(`input`, {
                                              type: `text`,
                                              placeholder:
                                                S === `all`
                                                  ? `Search any song, artist across all platforms...`
                                                  : `Search tracks on ${S.charAt(0).toUpperCase() + S.slice(1)}...`,
                                              value: v,
                                              onChange: (e) => {
                                                (ee(e.target.value),
                                                  e.target.value.trim() ||
                                                    (b([]), x(!1)));
                                              },
                                              className: `w-full rounded-2xl border border-[#e8e2d9] bg-white px-4 py-2.5 pl-9 text-sm shadow-inner outline-none focus:border-[#6d5b97]`,
                                            }),
                                            (0, Q.jsx)(Le, {
                                              className: `absolute left-3 top-3 size-4 text-muted-foreground`,
                                            }),
                                          ],
                                        }),
                                        (0, Q.jsx)(`button`, {
                                          type: `submit`,
                                          className: `rounded-2xl bg-[#6d5b97] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity`,
                                          children: te
                                            ? `Searching...`
                                            : `Search`,
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsx)(`div`, {
                                      className: `flex gap-1.5 overflow-x-auto no-scrollbar py-1`,
                                      children: [
                                        { id: `all`, label: `All Platforms` },
                                        { id: `spotify`, label: `Spotify` },
                                        { id: `apple`, label: `Apple Music` },
                                        { id: `itunes`, label: `iTunes` },
                                        {
                                          id: `youtube`,
                                          label: `YouTube Music`,
                                        },
                                        { id: `amazon`, label: `Amazon Music` },
                                        { id: `tidal`, label: `Tidal` },
                                        { id: `deezer`, label: `Deezer` },
                                        {
                                          id: `soundcloud`,
                                          label: `SoundCloud`,
                                        },
                                        { id: `bandcamp`, label: `Bandcamp` },
                                        { id: `pandora`, label: `Pandora` },
                                        { id: `qobuz`, label: `Qobuz` },
                                        { id: `napster`, label: `Napster` },
                                        { id: `boomplay`, label: `Boomplay` },
                                        { id: `audiomack`, label: `Audiomack` },
                                      ].map((e) =>
                                        (0, Q.jsx)(
                                          `button`,
                                          {
                                            type: `button`,
                                            "data-id": e.id,
                                            onClick: () => ne(e.id),
                                            className: `px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${S === e.id ? `bg-[#6d5b97] text-white shadow-xs` : `bg-white border border-[#e8e2d9] text-[#685d55] hover:bg-[#f6f2ec]`}`,
                                            children: e.label,
                                          },
                                          e.id,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                te
                                  ? (0, Q.jsx)(`div`, {
                                      className: `py-12 text-center text-sm text-muted-foreground`,
                                      children: `Searching across music platforms...`,
                                    })
                                  : (v.trim() ? y : c).map((e, t) => {
                                      let n = v.trim() ? y : c;
                                      return (
                                        encodeURIComponent(
                                          `${e.title} ${e.artist}`,
                                        ),
                                        (0, Q.jsxs)(
                                          `div`,
                                          {
                                            onClick: () => q(n, t),
                                            className: `flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#f5efe8] border border-transparent hover:border-[#e8e2d9] transition-all cursor-pointer group`,
                                            children: [
                                              (0, Q.jsx)(`span`, {
                                                className: `text-muted-foreground w-6 text-right font-mono text-sm`,
                                                children: t + 1,
                                              }),
                                              (0, Q.jsx)(`img`, {
                                                src: e.coverUrl,
                                                alt: e.title,
                                                className: `size-12 rounded-xl object-cover shadow-xs shrink-0`,
                                              }),
                                              (0, Q.jsxs)(`div`, {
                                                className: `min-w-0 flex-1`,
                                                children: [
                                                  (0, Q.jsx)(`p`, {
                                                    className: `font-semibold text-sm truncate`,
                                                    children: e.title,
                                                  }),
                                                  (0, Q.jsx)(`p`, {
                                                    className: `text-xs text-muted-foreground truncate`,
                                                    children: e.artist,
                                                  }),
                                                ],
                                              }),
                                              (0, Q.jsx)(`button`, {
                                                onClick: (t) => {
                                                  (t.stopPropagation(),
                                                    De(e.title));
                                                },
                                                className: `p-2 rounded-xl transition-colors ${z.includes(e.title) ? `text-red-500` : `text-[#a3978e] hover:text-red-500`}`,
                                                title: z.includes(e.title)
                                                  ? `Remove from favorites`
                                                  : `Add to favorites`,
                                                children: (0, Q.jsx)(V, {
                                                  className: `size-4.5 ${z.includes(e.title) ? `fill-red-500 text-red-500` : ``}`,
                                                }),
                                              }),
                                            ],
                                          },
                                          e.rank || t,
                                        )
                                      );
                                    }),
                              ],
                            })),
                      i === `video` &&
                        (re === `phone`
                          ? (0, Q.jsxs)(`div`, {
                              className: `space-y-3 pb-6`,
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex flex-col gap-2`,
                                  children: [
                                    (0, Q.jsxs)(`label`, {
                                      className: `flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand hover:opacity-90 active:scale-[0.99] text-brand-foreground rounded-2xl text-center text-sm font-semibold cursor-pointer shadow-sm transition-all`,
                                      children: [
                                        (0, Q.jsx)(Me, {
                                          className: `size-4.5`,
                                        }),
                                        (0, Q.jsx)(`span`, {
                                          children:
                                            k.length === 0
                                              ? `Select video files`
                                              : `Upload / Add more videos`,
                                        }),
                                        (0, Q.jsx)(`input`, {
                                          type: `file`,
                                          multiple: !0,
                                          accept: `video/*`,
                                          className: `hidden`,
                                          onChange: (e) => {
                                            (ze(e.target.files),
                                              (e.target.value = ``));
                                          },
                                        }),
                                      ],
                                    }),
                                    k.length > 0 &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center justify-between gap-2 bg-[#f4eee6] p-2 rounded-2xl border border-[#e8e2d9]`,
                                        children: [
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-2 pl-1`,
                                            children: [
                                              (0, Q.jsxs)(`button`, {
                                                onClick: Ve,
                                                className: `flex items-center gap-1.5 text-xs font-semibold text-[#574d46] hover:text-brand`,
                                                children: [
                                                  Qe
                                                    ? (0, Q.jsx)(qe, {
                                                        className: `size-4 text-brand`,
                                                      })
                                                    : (0, Q.jsx)(Je, {
                                                        className: `size-4 text-[#8c827a]`,
                                                      }),
                                                  (0, Q.jsx)(`span`, {
                                                    children: Qe
                                                      ? `Deselect All`
                                                      : `Select All`,
                                                  }),
                                                ],
                                              }),
                                              (0, Q.jsxs)(`span`, {
                                                className: `text-[11px] text-[#8c827a]`,
                                                children: [
                                                  `(`,
                                                  Y,
                                                  `/`,
                                                  k.length,
                                                  `)`,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            className: `flex items-center gap-1.5`,
                                            children: [
                                              (0, Q.jsxs)(`button`, {
                                                onClick: Ge,
                                                disabled:
                                                  Y === 0 && k.length === 0,
                                                className: `flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-brand-foreground text-xs font-semibold rounded-xl shadow-xs hover:opacity-90 active:scale-95 transition-all`,
                                                children: [
                                                  (0, Q.jsx)(G, {
                                                    className: `size-3.5 fill-current`,
                                                  }),
                                                  (0, Q.jsxs)(`span`, {
                                                    children: [
                                                      `Play`,
                                                      ` `,
                                                      Y > 0
                                                        ? `Selected (${Y})`
                                                        : `All`,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, Q.jsx)(`button`, {
                                                onClick: Ue,
                                                className: `p-1.5 text-[#8c827a] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors`,
                                                title: `Clear all videos`,
                                                children: (0, Q.jsx)(J, {
                                                  className: `size-4`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `space-y-1.5`,
                                  children: [
                                    k.map((e, t) => {
                                      let n = j.has(e.name);
                                      return (0, Q.jsxs)(
                                        `div`,
                                        {
                                          className: `flex items-center justify-between p-2.5 rounded-2xl border transition-all ${n ? `bg-white border-brand/40 shadow-xs` : `bg-white/60 border-[#e8e2d9] opacity-75`}`,
                                          children: [
                                            (0, Q.jsx)(`button`, {
                                              onClick: () => Be(e.name),
                                              className: `p-1.5 text-[#574d46] hover:text-brand`,
                                              title: n
                                                ? `Unselect`
                                                : `Select for playback`,
                                              children: n
                                                ? (0, Q.jsx)(qe, {
                                                    className: `size-4.5 text-brand`,
                                                  })
                                                : (0, Q.jsx)(Je, {
                                                    className: `size-4.5 text-[#8c827a]`,
                                                  }),
                                            }),
                                            (0, Q.jsxs)(`button`, {
                                              className: `min-w-0 flex-1 text-left px-2 flex items-center gap-3`,
                                              onClick: () => Ye(t),
                                              children: [
                                                (0, Q.jsx)(`div`, {
                                                  className: `size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0`,
                                                  children: (0, Q.jsx)(me, {
                                                    className: `size-5`,
                                                  }),
                                                }),
                                                (0, Q.jsxs)(`div`, {
                                                  className: `min-w-0 flex-1`,
                                                  children: [
                                                    (0, Q.jsx)(`p`, {
                                                      className: `font-semibold text-xs sm:text-sm text-[#2b2520] truncate`,
                                                      children: e.name,
                                                    }),
                                                    (0, Q.jsxs)(`p`, {
                                                      className: `text-[11px] text-[#8c827a] truncate mt-0.5`,
                                                      children: [
                                                        (
                                                          e.size / 1048576
                                                        ).toFixed(2),
                                                        ` MB •`,
                                                        ` `,
                                                        e.name
                                                          .split(`.`)
                                                          .pop()
                                                          ?.toUpperCase(),
                                                        ` `,
                                                        `Video`,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, Q.jsxs)(`div`, {
                                              className: `flex items-center gap-1`,
                                              children: [
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => W(e.name),
                                                  className: `p-1.5 rounded-lg transition-colors ${H.includes(e.name) ? `text-red-500` : `text-[#a3978e] hover:text-red-500`}`,
                                                  title: H.includes(e.name)
                                                    ? `Remove from favorites`
                                                    : `Add to favorites`,
                                                  children: (0, Q.jsx)(V, {
                                                    className: `size-4 ${H.includes(e.name) ? `fill-red-500 text-red-500` : ``}`,
                                                  }),
                                                }),
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => Ye(t),
                                                  className: `size-8 rounded-full bg-[#ece6f2] hover:bg-brand hover:text-brand-foreground text-brand flex items-center justify-center transition-colors shadow-xs`,
                                                  title: `Watch video`,
                                                  children: (0, Q.jsx)(G, {
                                                    className: `size-4 fill-current ml-0.5`,
                                                  }),
                                                }),
                                                (0, Q.jsx)(`button`, {
                                                  onClick: () => He(t),
                                                  className: `p-1.5 text-[#a3978e] hover:text-destructive hover:bg-red-50 rounded-lg transition-colors`,
                                                  title: `Remove from list`,
                                                  children: (0, Q.jsx)(J, {
                                                    className: `size-3.5`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        `${e.name}-${t}`,
                                      );
                                    }),
                                    k.length === 0 &&
                                      (0, Q.jsxs)(`div`, {
                                        className: `text-center text-muted-foreground py-14 flex flex-col items-center justify-center gap-3`,
                                        children: [
                                          (0, Q.jsx)(`div`, {
                                            className: `size-16 rounded-full bg-[#f4eee6] flex items-center justify-center text-brand`,
                                            children: (0, Q.jsx)($e, {
                                              className: `size-8`,
                                            }),
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            children: [
                                              (0, Q.jsx)(`p`, {
                                                className: `text-sm font-semibold text-[#3c342d]`,
                                                children: `No videos uploaded yet`,
                                              }),
                                              (0, Q.jsx)(`p`, {
                                                className: `text-xs text-[#8c827a] mt-1 max-w-xs`,
                                                children: `Tap "Select video files" above to upload your movies or clips (MP4, WebM, etc.) and watch them here.`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            })
                          : (0, Q.jsxs)(`div`, {
                              className: `space-y-4 pb-6`,
                              children: [
                                (0, Q.jsxs)(`h3`, {
                                  className: `font-semibold text-lg flex items-center gap-2`,
                                  children: [
                                    (0, Q.jsx)(Ke, {
                                      className: `size-5 text-brand`,
                                    }),
                                    (0, Q.jsx)(`span`, {
                                      children: `Trending Videos`,
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`div`, {
                                  className: `grid grid-cols-1 gap-3`,
                                  children: D.map((e, t) =>
                                    (0, Q.jsxs)(
                                      `div`,
                                      {
                                        onClick: () => We(D, t),
                                        className: `group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-2xl bg-white border border-[#e8e2d9] hover:border-brand/40 hover:shadow-md transition-all cursor-pointer`,
                                        children: [
                                          (0, Q.jsxs)(`div`, {
                                            className: `relative aspect-video w-full sm:w-40 rounded-xl overflow-hidden bg-black shrink-0`,
                                            children: [
                                              (0, Q.jsx)(`img`, {
                                                src: e.thumbnailUrl,
                                                alt: e.title,
                                                className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`,
                                              }),
                                              (0, Q.jsx)(`div`, {
                                                className: `absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center`,
                                                children: (0, Q.jsx)(`div`, {
                                                  className: `size-10 rounded-full bg-white/90 text-brand flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`,
                                                  children: (0, Q.jsx)(G, {
                                                    className: `size-4.5 fill-current ml-0.5`,
                                                  }),
                                                }),
                                              }),
                                              (0, Q.jsx)(`span`, {
                                                className: `absolute bottom-1.5 right-1.5 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5 rounded-md backdrop-blur-xs`,
                                                children: e.duration,
                                              }),
                                              (0, Q.jsx)(`span`, {
                                                className: `absolute top-1.5 left-1.5 bg-brand text-brand-foreground font-semibold text-[9px] px-1.5 py-0.5 rounded-md`,
                                                children: e.quality,
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsxs)(`div`, {
                                            className: `min-w-0 flex-1`,
                                            children: [
                                              (0, Q.jsx)(`h4`, {
                                                className: `font-semibold text-sm text-[#2b2520] group-hover:text-brand transition-colors line-clamp-2`,
                                                children: e.title,
                                              }),
                                              (0, Q.jsx)(`p`, {
                                                className: `text-xs text-[#8c827a] mt-1`,
                                                children: e.channel,
                                              }),
                                            ],
                                          }),
                                          (0, Q.jsx)(`button`, {
                                            onClick: (t) => {
                                              (t.stopPropagation(), W(e.title));
                                            },
                                            className: `p-2 rounded-xl transition-colors ${H.includes(e.title) ? `text-red-500` : `text-[#a3978e] hover:text-red-500`}`,
                                            title: H.includes(e.title)
                                              ? `Remove from favorites`
                                              : `Add to favorites`,
                                            children: (0, Q.jsx)(V, {
                                              className: `size-4.5 ${H.includes(e.title) ? `fill-red-500 text-red-500` : ``}`,
                                            }),
                                          }),
                                        ],
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              ],
                            })),
                    ],
                  }),
                ],
              }),
          (0, Q.jsxs)(`div`, {
            className: `shrink-0 border-t border-[#e8e2d9] bg-[#fbf9f5] px-6 py-2.5 flex items-center justify-around shadow-xs z-10`,
            children: [
              (0, Q.jsxs)(`button`, {
                onClick: () =>
                  I((e) => (e === `favorites` ? null : `favorites`)),
                className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${F === `favorites` ? `text-brand font-bold scale-105` : `text-[#7b7167] hover:text-foreground active:scale-95`}`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, Q.jsx)(V, {
                        className: `size-5 ${tt > 0 && F !== `favorites` ? `text-red-500 fill-red-500/20` : F === `favorites` ? `fill-red-500 text-red-500` : ``}`,
                      }),
                      tt > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center`,
                          children: tt,
                        }),
                    ],
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `text-[11px] font-medium`,
                    children: `Favorites`,
                  }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: () => {
                  (le(null),
                    I((e) => (e === `playlists` ? null : `playlists`)));
                },
                className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${F === `playlists` ? `text-brand font-bold scale-105` : `text-[#7b7167] hover:text-foreground active:scale-95`}`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, Q.jsx)(be, { className: `size-5` }),
                      et > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center`,
                          children: et,
                        }),
                    ],
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `text-[11px] font-medium`,
                    children: `Playlist`,
                  }),
                ],
              }),
              (0, Q.jsxs)(`button`, {
                onClick: () => {
                  (se(null), I((e) => (e === `albums` ? null : `albums`)));
                },
                className: `flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${F === `albums` ? `text-brand font-bold scale-105` : `text-[#7b7167] hover:text-foreground active:scale-95`}`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, Q.jsx)(R, { className: `size-5` }),
                      nt > 0 &&
                        (0, Q.jsx)(`span`, {
                          className: `absolute -top-1.5 -right-2 bg-brand text-brand-foreground text-[10px] font-bold rounded-full size-4 flex items-center justify-center`,
                          children: nt,
                        }),
                    ],
                  }),
                  (0, Q.jsx)(`span`, {
                    className: `text-[11px] font-medium`,
                    children: `Albums`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      m &&
        m.length > 0 &&
        g !== null &&
        (0, Q.jsx)(Vt, {
          tracks: m,
          initialIndex: g,
          file: m[g],
          onClose: () => {
            (h(null), _(null));
          },
          onSwitchToVideo: () => {
            (h(null), _(null), a(`video`));
          },
        }),
      N &&
        N.length > 0 &&
        oe !== null &&
        (0, Q.jsx)(Ht, {
          tracks: N,
          initialIndex: oe,
          file: N[oe],
          onClose: () => {
            (ae(null), P(null));
          },
          onSwitchToAudio: () => {
            (ae(null), P(null), a(`audio`));
          },
        }),
    ],
  });
}
var Wt = (e) => {
  try {
    return new URL(e).hostname.replace(`www.`, ``);
  } catch {
    return e;
  }
};
function Gt({ items: e, onGo: t, onRemove: n, onAdd: r }) {
  let [i, a] = (0, T.useState)(``),
    [o, s] = (0, T.useState)(!1),
    [c, l] = (0, T.useState)(``),
    [u, d] = (0, T.useState)(``),
    f = e.filter(
      (e) =>
        e.title.toLowerCase().includes(i.toLowerCase()) ||
        e.url.toLowerCase().includes(i.toLowerCase()),
    );
  return (0, Q.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `flex size-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500`,
                children: (0, Q.jsx)(Ye, {
                  className: `size-4.5 fill-amber-500`,
                }),
              }),
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`h3`, {
                    className: `text-sm font-bold text-foreground`,
                    children: `Bookmarks`,
                  }),
                  (0, Q.jsxs)(`p`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      e.length,
                      ` `,
                      e.length === 1 ? `page` : `pages`,
                      ` bookmarked`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`button`, {
            type: `button`,
            onClick: () => s(!o),
            className: `flex items-center gap-1 rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-xs transition-opacity hover:opacity-90`,
            children: [
              o
                ? (0, Q.jsx)(X, { className: `size-3.5` })
                : (0, Q.jsx)(Me, { className: `size-3.5` }),
              (0, Q.jsx)(`span`, { children: o ? `Cancel` : `Add Bookmark` }),
            ],
          }),
        ],
      }),
      o &&
        (0, Q.jsxs)(`form`, {
          onSubmit: (e) => {
            e.preventDefault();
            let t = u.trim();
            if (!t) return;
            !t.startsWith(`http://`) &&
              !t.startsWith(`https://`) &&
              (t = `https://` + t);
            let n = c.trim() || Wt(t);
            (r({ url: t, title: n, at: Date.now() }), l(``), d(``), s(!1));
          },
          className: `rounded-2xl border border-amber-500/30 bg-amber-500/5 p-3.5 space-y-2.5`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `text-xs font-bold text-foreground flex items-center gap-1.5`,
              children: [
                (0, Q.jsx)(Ye, {
                  className: `size-3.5 fill-amber-500 text-amber-500`,
                }),
                (0, Q.jsx)(`span`, { children: `Add New Bookmark` }),
              ],
            }),
            (0, Q.jsx)(`input`, {
              type: `text`,
              placeholder: `Title (e.g. My Favorite Site)`,
              value: c,
              onChange: (e) => l(e.target.value),
              className: `w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand`,
            }),
            (0, Q.jsx)(`input`, {
              type: `text`,
              placeholder: `URL (e.g. https://example.com)`,
              value: u,
              onChange: (e) => d(e.target.value),
              required: !0,
              className: `w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand`,
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex justify-end gap-2 pt-1`,
              children: [
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  onClick: () => s(!1),
                  className: `rounded-xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted`,
                  children: `Cancel`,
                }),
                (0, Q.jsx)(`button`, {
                  type: `submit`,
                  className: `rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground`,
                  children: `Save Bookmark`,
                }),
              ],
            }),
          ],
        }),
      e.length > 2 &&
        (0, Q.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, Q.jsx)(Le, {
              className: `absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground`,
            }),
            (0, Q.jsx)(`input`, {
              type: `text`,
              value: i,
              onChange: (e) => a(e.target.value),
              placeholder: `Search bookmarks...`,
              className: `w-full rounded-xl border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-brand`,
            }),
          ],
        }),
      f.length === 0
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-dashed border-border`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `mb-3 flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500`,
                children: (0, Q.jsx)(Ye, {
                  className: `size-7 fill-amber-500/40`,
                }),
              }),
              (0, Q.jsx)(`h4`, {
                className: `text-sm font-semibold text-foreground`,
                children: i ? `No matching bookmarks` : `No bookmarks yet`,
              }),
              (0, Q.jsx)(`p`, {
                className: `mt-1 max-w-xs text-xs text-muted-foreground`,
                children: i
                  ? `Try searching for a different keyword.`
                  : `Bookmark your favorite sites while browsing with the star icon in the address bar, or add one using the button above.`,
              }),
            ],
          })
        : (0, Q.jsx)(`div`, {
            className: `overflow-hidden rounded-2xl border bg-card divide-y shadow-2xs`,
            children: f.map((e, r) =>
              (0, Q.jsxs)(
                `div`,
                {
                  className: `group flex items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/40`,
                  children: [
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => t(e.url),
                      className: `flex min-w-0 flex-1 items-center gap-3 text-left`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `flex size-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/10`,
                          children: (0, Q.jsx)(`img`, {
                            src: `https://www.google.com/s2/favicons?domain=${Wt(e.url)}&sz=64`,
                            alt: ``,
                            className: `size-4.5 rounded-xs object-contain`,
                            onError: (e) => {
                              e.target.style.display = `none`;
                            },
                          }),
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `min-w-0 flex-1`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `truncate text-sm font-semibold text-foreground`,
                              children: e.title || Wt(e.url),
                            }),
                            (0, Q.jsx)(`div`, {
                              className: `truncate text-[11px] text-muted-foreground`,
                              children: Wt(e.url),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-1 shrink-0`,
                      children: [
                        (0, Q.jsx)(`button`, {
                          type: `button`,
                          onClick: () => t(e.url),
                          title: `Open bookmark`,
                          className: `rounded-lg p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand`,
                          children: (0, Q.jsx)(de, { className: `size-4` }),
                        }),
                        (0, Q.jsx)(`button`, {
                          type: `button`,
                          onClick: () => n(e),
                          title: `Delete bookmark`,
                          className: `rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive`,
                          children: (0, Q.jsx)(J, { className: `size-4` }),
                        }),
                      ],
                    }),
                  ],
                },
                `${e.url}-${r}`,
              ),
            ),
          }),
    ],
  });
}
var Kt = (e) => {
  try {
    return new URL(e).hostname.replace(`www.`, ``);
  } catch {
    return e;
  }
};
function qt({ items: e, onGo: t, onRemove: n, onAdd: r }) {
  let [i, a] = (0, T.useState)(``),
    [o, s] = (0, T.useState)(!1),
    [c, l] = (0, T.useState)(``),
    [u, d] = (0, T.useState)(``),
    f = e.filter(
      (e) =>
        e.title.toLowerCase().includes(i.toLowerCase()) ||
        e.url.toLowerCase().includes(i.toLowerCase()),
    );
  return (0, Q.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand`,
                children: (0, Q.jsx)(j, {
                  className: `size-4.5 fill-brand/20 text-brand`,
                }),
              }),
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`h3`, {
                    className: `text-sm font-bold text-foreground`,
                    children: `Saved Links`,
                  }),
                  (0, Q.jsxs)(`p`, {
                    className: `text-[11px] text-muted-foreground`,
                    children: [
                      e.length,
                      ` `,
                      e.length === 1 ? `link` : `links`,
                      ` saved to read later`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`button`, {
            type: `button`,
            onClick: () => s(!o),
            className: `flex items-center gap-1 rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-xs transition-opacity hover:opacity-90`,
            children: [
              o
                ? (0, Q.jsx)(X, { className: `size-3.5` })
                : (0, Q.jsx)(Me, { className: `size-3.5` }),
              (0, Q.jsx)(`span`, { children: o ? `Cancel` : `Save Link` }),
            ],
          }),
        ],
      }),
      o &&
        (0, Q.jsxs)(`form`, {
          onSubmit: (e) => {
            e.preventDefault();
            let t = u.trim();
            if (!t) return;
            !t.startsWith(`http://`) &&
              !t.startsWith(`https://`) &&
              (t = `https://` + t);
            let n = c.trim() || Kt(t);
            (r({ url: t, title: n, at: Date.now() }), l(``), d(``), s(!1));
          },
          className: `rounded-2xl border border-brand/30 bg-brand/5 p-3.5 space-y-2.5`,
          children: [
            (0, Q.jsxs)(`div`, {
              className: `text-xs font-bold text-foreground flex items-center gap-1.5`,
              children: [
                (0, Q.jsx)(j, { className: `size-3.5 text-brand` }),
                (0, Q.jsx)(`span`, { children: `Save a New Link` }),
              ],
            }),
            (0, Q.jsx)(`input`, {
              type: `text`,
              placeholder: `Link Title (e.g. Interesting Article)`,
              value: c,
              onChange: (e) => l(e.target.value),
              className: `w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand`,
            }),
            (0, Q.jsx)(`input`, {
              type: `text`,
              placeholder: `URL (e.g. https://example.com/article)`,
              value: u,
              onChange: (e) => d(e.target.value),
              required: !0,
              className: `w-full rounded-xl border bg-card px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-brand`,
            }),
            (0, Q.jsxs)(`div`, {
              className: `flex justify-end gap-2 pt-1`,
              children: [
                (0, Q.jsx)(`button`, {
                  type: `button`,
                  onClick: () => s(!1),
                  className: `rounded-xl px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted`,
                  children: `Cancel`,
                }),
                (0, Q.jsx)(`button`, {
                  type: `submit`,
                  className: `rounded-xl bg-brand px-4 py-1.5 text-xs font-semibold text-brand-foreground`,
                  children: `Save Link`,
                }),
              ],
            }),
          ],
        }),
      e.length > 2 &&
        (0, Q.jsxs)(`div`, {
          className: `relative`,
          children: [
            (0, Q.jsx)(Le, {
              className: `absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground`,
            }),
            (0, Q.jsx)(`input`, {
              type: `text`,
              value: i,
              onChange: (e) => a(e.target.value),
              placeholder: `Search saved links...`,
              className: `w-full rounded-xl border bg-card py-2 pl-9 pr-3 text-xs outline-none focus:ring-1 focus:ring-brand`,
            }),
          ],
        }),
      f.length === 0
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center border border-dashed border-border`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `mb-3 flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand`,
                children: (0, Q.jsx)(j, {
                  className: `size-7 fill-brand/20 text-brand`,
                }),
              }),
              (0, Q.jsx)(`h4`, {
                className: `text-sm font-semibold text-foreground`,
                children: i ? `No matching saved links` : `No saved links yet`,
              }),
              (0, Q.jsx)(`p`, {
                className: `mt-1 max-w-xs text-xs text-muted-foreground`,
                children: i
                  ? `Try searching for another title or URL.`
                  : `Save news stories, articles, and useful websites to read them anytime from this page.`,
              }),
            ],
          })
        : (0, Q.jsx)(`div`, {
            className: `overflow-hidden rounded-2xl border bg-card divide-y shadow-2xs`,
            children: f.map((e, r) =>
              (0, Q.jsxs)(
                `div`,
                {
                  className: `group flex items-center justify-between gap-3 p-3 transition-colors hover:bg-muted/40`,
                  children: [
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => t(e.url),
                      className: `flex min-w-0 flex-1 items-center gap-3 text-left`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand/10`,
                          children: (0, Q.jsx)(`img`, {
                            src: `https://www.google.com/s2/favicons?domain=${Kt(e.url)}&sz=64`,
                            alt: ``,
                            className: `size-4.5 rounded-xs object-contain`,
                            onError: (e) => {
                              e.target.style.display = `none`;
                            },
                          }),
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `min-w-0 flex-1`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `truncate text-sm font-semibold text-foreground`,
                              children: e.title || Kt(e.url),
                            }),
                            (0, Q.jsx)(`div`, {
                              className: `truncate text-[11px] text-muted-foreground`,
                              children: Kt(e.url),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-1 shrink-0`,
                      children: [
                        (0, Q.jsx)(`button`, {
                          type: `button`,
                          onClick: () => t(e.url),
                          title: `Open link`,
                          className: `rounded-lg p-1.5 text-muted-foreground hover:bg-brand/10 hover:text-brand`,
                          children: (0, Q.jsx)(de, { className: `size-4` }),
                        }),
                        (0, Q.jsx)(`button`, {
                          type: `button`,
                          onClick: () => n(e),
                          title: `Delete saved link`,
                          className: `rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive`,
                          children: (0, Q.jsx)(J, { className: `size-4` }),
                        }),
                      ],
                    }),
                  ],
                },
                `${e.url}-${r}`,
              ),
            ),
          }),
    ],
  });
}
var Jt = [
    { code: `en`, name: `English (US)`, native: `English` },
    { code: `es`, name: `Spanish`, native: `Español` },
    { code: `fr`, name: `French`, native: `Français` },
    { code: `de`, name: `German`, native: `Deutsch` },
    { code: `pt`, name: `Portuguese`, native: `Português` },
    { code: `hi`, name: `Hindi`, native: `हिन्दी` },
    { code: `ar`, name: `Arabic`, native: `العربية` },
    { code: `zh`, name: `Chinese (Simplified)`, native: `简体中文` },
    { code: `ja`, name: `Japanese`, native: `日本語` },
    { code: `ru`, name: `Russian`, native: `Русский` },
    { code: `id`, name: `Indonesian`, native: `Bahasa Indonesia` },
    { code: `ko`, name: `Korean`, native: `한국어` },
    { code: `tr`, name: `Turkish`, native: `Türkçe` },
    { code: `it`, name: `Italian`, native: `Italiano` },
    { code: `nl`, name: `Dutch`, native: `Nederlands` },
  ],
  Yt = [
    {
      id: `pwd-1`,
      domain: `google.com`,
      username: `musichub661@gmail.com`,
      password: `••••••••••••`,
      updatedAt: Date.now() - 432e6,
    },
    {
      id: `pwd-2`,
      domain: `github.com`,
      username: `webna-developer`,
      password: `••••••••••••`,
      updatedAt: Date.now() - 10368e5,
    },
    {
      id: `pwd-3`,
      domain: `reddit.com`,
      username: `tech_surfer99`,
      password: `••••••••••••`,
      updatedAt: Date.now() - 1728e6,
    },
  ];
function Xt({
  onClose: e,
  initialSubView: t = null,
  bookmarks: n,
  setBookmarks: r,
  history: a,
  setHistory: o,
  savedLinks: s,
  setSavedLinks: c,
  categories: l,
  setCategories: u,
  blockAds: d,
  setBlockAds: f,
  blockPopups: p,
  setBlockPopups: m,
  blockTrackers: h,
  setBlockTrackers: g,
  blockCookies: _,
  setBlockCookies: v,
  blockLocation: ee,
  setBlockLocation: y,
  blockMic: b,
  setBlockMic: te,
  blockCamera: x,
  setBlockCamera: S,
  blockNotifications: C,
  setBlockNotifications: w,
  blockAutoplay: ne,
  setBlockAutoplay: re,
  blockJs: E,
  setBlockJs: O,
}) {
  let { lang: k, setLanguage: j, t: P } = Z(),
    [F, I] = (0, T.useState)(t),
    [R, ue] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-auto-translate`);
    e !== null && ue(e !== `false`);
  }, []);
  let me = (e) => {
      j(e);
      let t = Jt.find((t) => t.code === e);
      i.success(
        e === `es`
          ? `Idioma cambiado a Español`
          : `Language changed to ${t?.name || e}`,
      );
    },
    [ge, V] = (0, T.useState)(`system`);
  useEffect(() => {
    let e = localStorage.getItem(`webna-theme`);
    e && V(e);
  }, []);
  let [H, ye] = (0, T.useState)(`medium`);
  useEffect(() => {
    let e = localStorage.getItem(`webna-font-size`);
    e && ye(e);
  }, []);
  let [be, xe] = (0, T.useState)(`top`);
  useEffect(() => {
    let e = localStorage.getItem(`webna-address-bar`);
    e && xe(e);
  }, []);
  let [Se, we] = (0, T.useState)(!1);
  useEffect(() => {
    let e = localStorage.getItem(`webna-high-contrast`);
    e !== null && we(e === `true`);
  }, []);
  let U = (e) => {
      if ((V(e), localStorage.setItem(`webna-theme`, e), e === `dark`))
        document.documentElement.classList.add(`dark`);
      else if (e === `light`) document.documentElement.classList.remove(`dark`);
      else {
        let e = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
        document.documentElement.classList.toggle(`dark`, e);
      }
      i.success(`${P(`themeAndDisplay`)}: ${e}`);
    },
    Te = (e) => {
      (ye(e),
        localStorage.setItem(`webna-font-size`, e),
        i.success(`${P(`textScaling`)}: ${e}`));
    },
    Ee = () => {
      let e = `https://play.google.com/store/apps/details?id=com.webna.browser`;
      i.success(
        k === `es`
          ? `Abriendo Google Play Store para calificar...`
          : `Opening Google Play Store to rate WebNa...`,
      );
      try {
        ((window.location.href = `market://details?id=com.webna.browser`),
          setTimeout(() => {
            window.open(e, `_blank`);
          }, 500));
      } catch {
        window.open(e, `_blank`);
      }
    },
    Oe = async () => {
      let e = `https://webna.app`,
        t =
          k === `es`
            ? `Navegador WebNa: Navegador móvil ultrarrápido y privado con bloqueo de anuncios, reproductor multimedia y descargas. ¡Descárgalo ahora!`
            : `WebNa Browser: Lightning fast, privacy-first mobile browser with ad blocking, audio/video player and downloader. Download now!`;
      if (navigator.share)
        try {
          (await navigator.share({ title: `WebNa Browser`, text: t, url: e }),
            i.success(
              k === `es`
                ? `¡Gracias por compartir WebNa!`
                : `Thanks for sharing WebNa!`,
            ));
          return;
        } catch (e) {
          if (
            e &&
            typeof e == `object` &&
            `name` in e &&
            e.name === `AbortError`
          )
            return;
        }
      (navigator.clipboard.writeText(`${t}\n${e}`),
        i.success(
          k === `es`
            ? `¡Enlace de descarga de WebNa copiado al portapapeles!`
            : `WebNa download link copied to clipboard!`,
        ));
    },
    [ke, Ae] = (0, T.useState)(`default`);
  useEffect(() => {
    typeof window < `u` &&
      `Notification` in window &&
      Ae(Notification.permission);
  }, []);
  let [je, G] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-notif-downloads`);
    e !== null && G(e !== `false`);
  }, []);
  let [Ne, Pe] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-notif-security`);
    e !== null && Pe(e !== `false`);
  }, []);
  let [Fe, q] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-notif-news`);
    e !== null && q(e !== `false`);
  }, []);
  let [Ie, Le] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-notif-playback`);
    e !== null && Le(e !== `false`);
  }, []);
  let [ze, Ue] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-notif-vibration`);
    e !== null && Ue(e !== `false`);
  }, []);
  let We = async () => {
      if (`Notification` in window)
        try {
          let e = await Notification.requestPermission();
          (Ae(e),
            e === `granted`
              ? i.success(`Notification permissions enabled for WebNa!`)
              : i.error(`Notification permission was denied.`));
        } catch {
          i.error(`Could not request notification permissions on this device.`);
        }
      else i.info(`Notifications are handled natively by your Android system.`);
    },
    Ge = () => {
      (`Notification` in window &&
        Notification.permission === `granted` &&
        new Notification(`WebNa Browser`, {
          body: `Test notification: Download completed! Sample song was saved.`,
          icon: `/favicon.ico`,
        }),
        i(
          k === `es`
            ? `Alerta de notificación WebNa`
            : `WebNa Notification Alert`,
          {
            description:
              k === `es`
                ? `Prueba: ¡Descarga completada! Archivo multimedia guardado.`
                : `Sample test: Download completed! Sample media was saved.`,
            icon: (0, Q.jsx)(A, { className: `size-4 text-brand` }),
          },
        ));
    },
    [qe, Je] = (0, T.useState)(`controls`),
    [Qe, $e] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-https-only`);
    e !== null && $e(e !== `false`);
  }, []);
  let [et, tt] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-phishing-prot`);
    e !== null && tt(e !== `false`);
  }, []);
  let [nt, rt] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-dnt`);
    e !== null && rt(e !== `false`);
  }, []);
  let [it, at] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-dns-leak`);
    e !== null && at(e !== `false`);
  }, []);
  let [ot, st] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-fingerprint-prot`);
    e !== null && st(e !== `false`);
  }, []);
  let [$, ct] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-clean-links`);
    e !== null && ct(e !== `false`);
  }, []);
  let [lt, ut] = (0, T.useState)(`block-3rd`);
  useEffect(() => {
    let e = localStorage.getItem(`webna-cookie-mode`);
    (e === `allow` || e === `block-3rd` || e === `block-all`) && ut(e);
  }, []);
  let [dt, ft] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-strict-downloads`);
    e !== null && ft(e !== `false`);
  }, []);
  let [pt, mt] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-block-mixed-content`);
    e !== null && mt(e !== `false`);
  }, []);
  let [ht, gt] = (0, T.useState)(!1),
    [_t, vt] = (0, T.useState)(0),
    [yt, bt] = (0, T.useState)(null);
  useEffect(() => {
    let e = localStorage.getItem(`webna-last-audit`);
    e && bt(Number(e));
  }, []);
  let [xt, St] = (0, T.useState)([]);
  useEffect(() => {
    let e = localStorage.getItem(`webna-saved-cards`);
    if (e)
      try {
        St(JSON.parse(e));
      } catch {}
    else
      St([
        {
          id: `card-1`,
          cardNumber: `•••• •••• •••• 4242`,
          cardHolder: `Alex Morgan`,
          expiryMonth: `08`,
          expiryYear: `28`,
          cvv: `•••`,
          billingAddress: `123 Silicon Valley Way, CA`,
          isDefault: !0,
          cardBrand: `Visa`,
          updatedAt: Date.now() - 864e6,
        },
      ]);
  }, []);
  let [Ct, wt] = (0, T.useState)(!0);
  useEffect(() => {
    let e = localStorage.getItem(`webna-autofill-cards`);
    e !== null && wt(e !== `false`);
  }, []);
  let [Tt, Et] = (0, T.useState)(!1),
    [Dt, Ot] = (0, T.useState)(null),
    [kt, At] = (0, T.useState)(``),
    [jt, Mt] = (0, T.useState)(``),
    [Nt, Pt] = (0, T.useState)(`12`),
    [Ft, It] = (0, T.useState)(`28`),
    [Lt, Rt] = (0, T.useState)(``),
    [zt, Bt] = (0, T.useState)(``),
    Vt = () => {
      (Ot(null), At(``), Mt(``), Pt(`12`), It(`28`), Rt(``), Bt(``), Et(!0));
    },
    Ht = (e) => {
      (Ot(e.id),
        At(e.cardNumber),
        Mt(e.cardHolder),
        Pt(e.expiryMonth),
        It(e.expiryYear),
        Rt(`•••`),
        Bt(e.billingAddress),
        Et(!0));
    },
    Ut = () => {
      if (!kt.trim() || !jt.trim()) {
        i.error(
          k === `es`
            ? `Por favor ingrese el número de tarjeta y titular.`
            : `Please enter card number and cardholder name.`,
        );
        return;
      }
      let e = kt.replace(/\s+/g, ``),
        t = `Card`;
      e.startsWith(`4`)
        ? (t = `Visa`)
        : e.startsWith(`5`) || e.startsWith(`2`)
          ? (t = `Mastercard`)
          : e.startsWith(`3`)
            ? (t = `American Express`)
            : e.startsWith(`6`) && (t = `Discover`);
      let n = e.length >= 4 ? e.slice(-4) : `4242`,
        r = e.includes(`•`) ? kt : `•••• •••• •••• ${n}`;
      if (Dt) {
        let e = xt.map((e) =>
          e.id === Dt
            ? {
                ...e,
                cardNumber: r,
                cardHolder: jt.trim(),
                expiryMonth: Nt,
                expiryYear: Ft,
                billingAddress: zt.trim() || e.billingAddress,
                cardBrand: t === `Card` ? e.cardBrand : t,
                updatedAt: Date.now(),
              }
            : e,
        );
        (St(e),
          localStorage.setItem(`webna-saved-cards`, JSON.stringify(e)),
          Et(!1),
          Ot(null),
          i.success(
            k === `es`
              ? `¡Tarjeta de pago actualizada con éxito!`
              : `Payment card updated successfully!`,
          ));
      } else {
        let e = [
          {
            id: `card-${Date.now()}`,
            cardNumber: r,
            cardHolder: jt.trim(),
            expiryMonth: Nt,
            expiryYear: Ft,
            cvv: `•••`,
            billingAddress: zt.trim() || `Default Address`,
            isDefault: xt.length === 0,
            cardBrand: t,
            updatedAt: Date.now(),
          },
          ...xt,
        ];
        (St(e),
          localStorage.setItem(`webna-saved-cards`, JSON.stringify(e)),
          Et(!1),
          i.success(
            k === `es`
              ? `¡Tarjeta de pago guardada de forma segura!`
              : `Payment card saved securely for online checkout!`,
          ));
      }
      (At(``), Mt(``), Rt(``), Bt(``));
    },
    Wt = (e) => {
      let t = xt.filter((t) => t.id !== e);
      (St(t),
        localStorage.setItem(`webna-saved-cards`, JSON.stringify(t)),
        i.success(k === `es` ? `Tarjeta eliminada.` : `Payment card removed.`));
    },
    Gt = (e) => {
      let t = xt.map((t) => ({ ...t, isDefault: t.id === e }));
      (St(t),
        localStorage.setItem(`webna-saved-cards`, JSON.stringify(t)),
        i.success(
          k === `es`
            ? `Tarjeta predeterminada actualizada.`
            : `Default payment card updated.`,
        ));
    },
    Kt = [d && h, ot, $, C, lt !== `allow`, Qe, et, p, pt, nt, dt].filter(
      Boolean,
    ).length,
    qt = Math.round((Kt / 11) * 100),
    Xt = () => {
      (gt(!0),
        vt(1),
        setTimeout(() => vt(2), 350),
        setTimeout(() => vt(3), 700),
        setTimeout(() => vt(4), 1050),
        setTimeout(() => {
          gt(!1);
          let e = Date.now();
          (bt(e),
            localStorage.setItem(`webna-last-audit`, String(e)),
            i.success(
              k === `es`
                ? `¡Auditoría completada! Protección del navegador: ${qt}%`
                : `Audit completed! Browser protection rated at ${qt}%`,
            ));
        }, 1400));
    },
    Zt = () => {
      (f(!0),
        g(!0),
        st(!0),
        ct(!0),
        w(!0),
        ut(`block-3rd`),
        v(!0),
        $e(!0),
        tt(!0),
        m(!0),
        mt(!0),
        rt(!0),
        ft(!0),
        at(!0),
        localStorage.setItem(`webna-block-ads`, `true`),
        localStorage.setItem(`webna-block-trackers`, `true`),
        localStorage.setItem(`webna-fingerprint-prot`, `true`),
        localStorage.setItem(`webna-clean-links`, `true`),
        localStorage.setItem(`webna-block-notifications`, `true`),
        localStorage.setItem(`webna-cookie-mode`, `block-3rd`),
        localStorage.setItem(`webna-block-cookies`, `true`),
        localStorage.setItem(`webna-https-only`, `true`),
        localStorage.setItem(`webna-phishing-prot`, `true`),
        localStorage.setItem(`webna-block-popups`, `true`),
        localStorage.setItem(`webna-block-mixed-content`, `true`),
        localStorage.setItem(`webna-dnt`, `true`),
        localStorage.setItem(`webna-strict-downloads`, `true`),
        localStorage.setItem(`webna-dns-leak`, `true`),
        i.success(P(`allProtected`)));
    },
    [Qt, $t] = (0, T.useState)(!1),
    [en, tn] = (0, T.useState)(!1),
    [nn, rn] = (0, T.useState)(`synced`),
    [an, on] = (0, T.useState)(`Just now`),
    sn = (0, T.useRef)(null),
    cn = () => {
      $t(!0);
      try {
        let e = {
            app: `WebNa Browser`,
            version: `2.4.0`,
            exportedAt: new Date().toISOString(),
            bookmarks: n,
            savedLinks: s,
            history: a,
            categories: l,
            settings: {
              language: k,
              theme: ge,
              fontSize: H,
              blockAds: d,
              blockPopups: p,
              blockTrackers: h,
              blockCookies: _,
              httpsOnly: Qe,
              phishingProtection: et,
            },
          },
          t =
            `data:text/json;charset=utf-8,` +
            encodeURIComponent(JSON.stringify(e, null, 2)),
          r = document.createElement(`a`);
        r.setAttribute(`href`, t);
        let o = new Date().toISOString().split(`T`)[0];
        (r.setAttribute(`download`, `webna-backup-${o}.json`),
          document.body.appendChild(r),
          r.click(),
          r.remove(),
          i.success(
            k === `es`
              ? `¡Copia de seguridad descargada exitosamente!`
              : `Backup downloaded successfully!`,
          ));
      } catch {
        i.error(`Failed to generate backup file.`);
      } finally {
        $t(!1);
      }
    },
    ln = (e) => {
      let t = e.target.files?.[0];
      if (!t) return;
      tn(!0);
      let n = new FileReader();
      ((n.onload = (e) => {
        try {
          let t = JSON.parse(e.target?.result);
          if (!t || typeof t != `object`) throw Error(`Invalid format`);
          let n = 0,
            a = 0,
            s = 0;
          (Array.isArray(t.bookmarks) &&
            (r(t.bookmarks), (n = t.bookmarks.length)),
            Array.isArray(t.savedLinks) &&
              (c(t.savedLinks), (s = t.savedLinks.length)),
            Array.isArray(t.history) && (o(t.history), (a = t.history.length)),
            t.categories && typeof t.categories == `object` && u(t.categories),
            i.success(
              k === `es`
                ? `¡Copia restaurada! (${n} marcadores, ${s} enlaces, ${a} historial)`
                : `Backup restored! (${n} bookmarks, ${s} saved links, ${a} history items)`,
            ),
            I(null));
        } catch {
          i.error(
            k === `es`
              ? `No se pudo restaurar. El archivo no es un JSON de WebNa válido.`
              : `Could not restore backup. Please ensure the file is a valid WebNa backup JSON.`,
          );
        } finally {
          (tn(!1), sn.current && (sn.current.value = ``));
        }
      }),
        n.readAsText(t));
    },
    un = () => {
      (rn(`syncing`),
        setTimeout(() => {
          (rn(`synced`),
            on(k === `es` ? `Ahora mismo` : `Just now`),
            i.success(
              k === `es`
                ? `Sincronización en la nube completada.`
                : `Cloud sync complete: All bookmarks and settings are up to date.`,
            ));
        }, 1200));
    },
    [dn, fn] = (0, T.useState)(() => {
      let e = localStorage.getItem(`webna-passwords`);
      if (e)
        try {
          return JSON.parse(e);
        } catch {
          return Yt;
        }
      return Yt;
    }),
    [pn, mn] = (0, T.useState)(``),
    [hn, gn] = (0, T.useState)({}),
    [_n, vn] = (0, T.useState)(!1),
    [yn, bn] = (0, T.useState)(null),
    [xn, Sn] = (0, T.useState)(``),
    [Cn, wn] = (0, T.useState)(``),
    [Tn, En] = (0, T.useState)(``),
    [Dn, On] = (0, T.useState)(
      () => localStorage.getItem(`webna-save-password-prompt`) !== `false`,
    ),
    [kn, An] = (0, T.useState)(
      () => localStorage.getItem(`webna-autofill-passwords`) !== `false`,
    ),
    jn = (e) => {
      (fn(e), localStorage.setItem(`webna-passwords`, JSON.stringify(e)));
    },
    Mn = (e) => {
      gn((t) => ({ ...t, [e]: !t[e] }));
    },
    Nn = (e, t) => {
      (navigator.clipboard.writeText(e),
        i.success(
          k === `es`
            ? `${t} copiado al portapapeles`
            : `${t} copied to clipboard!`,
        ));
    },
    Pn = (e) => {
      let t = dn.filter((t) => t.id !== e);
      (jn(t),
        i.success(
          k === `es`
            ? `Credencial eliminada`
            : `Credential removed from saved passwords.`,
        ));
    },
    Fn = () => {
      (bn(null), Sn(``), wn(``), En(``), vn(!0));
    },
    In = (e) => {
      (bn(e.id), Sn(e.domain), wn(e.username), En(e.password), vn(!0));
    },
    Ln = () => {
      if (!xn.trim() || !Cn.trim() || !Tn.trim()) {
        i.error(
          k === `es`
            ? `Por favor completa todos los campos`
            : `Please fill in all fields.`,
        );
        return;
      }
      let e = xn
        .trim()
        .replace(/^https?:\/\//i, ``)
        .replace(/\/.*$/, ``);
      if (yn) {
        let t = dn.map((t) =>
          t.id === yn
            ? {
                ...t,
                domain: e,
                username: Cn.trim(),
                password: Tn.trim(),
                updatedAt: Date.now(),
              }
            : t,
        );
        (jn(t),
          bn(null),
          Sn(``),
          wn(``),
          En(``),
          vn(!1),
          i.success(
            k === `es`
              ? `Credencial actualizada`
              : `Password credential updated successfully.`,
          ));
      } else {
        let t = [
          {
            id: `pwd-` + Date.now(),
            domain: e,
            username: Cn.trim(),
            password: Tn.trim(),
            updatedAt: Date.now(),
          },
          ...dn,
        ];
        (jn(t),
          Sn(``),
          wn(``),
          En(``),
          vn(!1),
          i.success(
            k === `es`
              ? `¡Contraseña guardada para ${e}!`
              : `Saved password for ${e}!`,
          ));
      }
    },
    Rn = () => {
      let e = ``;
      for (let t = 0; t < 16; t++)
        e +=
          `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+`.charAt(
            Math.floor(Math.random() * 74),
          );
      (En(e),
        i.success(
          k === `es`
            ? `¡Contraseña segura generada!`
            : `Strong password generated!`,
        ));
    },
    [zn, Bn] = (0, T.useState)(!0),
    [Vn, Hn] = (0, T.useState)(!0),
    [Un, Wn] = (0, T.useState)(!0),
    [Gn, Kn] = (0, T.useState)(!1),
    [qn, Jn] = (0, T.useState)(!1),
    [Yn, Xn] = (0, T.useState)(`all`),
    Zn = () => {
      let e = [];
      (zn && (o([]), e.push(P(`browsingHistory`))),
        Gn && (r([]), e.push(P(`bookmarks`))),
        Vn && e.push(P(`cookiesSiteData`)),
        Un && e.push(P(`cachedImages`)),
        qn && (jn([]), e.push(P(`savedPasswords`))),
        i.success(
          k === `es` ? `Borrado: ${e.join(`, `)}` : `Cleared: ${e.join(`, `)}`,
        ),
        I(null));
    },
    Qn = Jt.find((e) => e.code === k)?.name || `English (US)`,
    $n = {
      language: P(`language`),
      appearance: P(`appearance`),
      notifications: P(`notifications`),
      safety: P(`safetyHub`),
      backup: P(`dataBackup`),
      passwords: P(`passwords`),
      privacy: P(`privacyPolicy`),
      blockings: P(`blockingsAndShields`),
      "clear-data": P(`clearBrowsingData`),
    };
  return (0, Q.jsxs)(`div`, {
    className: `flex flex-col h-full bg-background`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between border-b px-4 py-3 shrink-0`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              F !== null &&
                (0, Q.jsx)(`button`, {
                  onClick: () => I(null),
                  className: `p-1 -ml-1 text-foreground hover:bg-muted rounded-full transition-colors`,
                  "aria-label": P(`back`),
                  children: (0, Q.jsx)(M, { className: `size-6` }),
                }),
              (0, Q.jsx)(`h2`, {
                className: `text-xl font-bold tracking-tight text-foreground`,
                children: F ? $n[F] : P(`settings`),
              }),
            ],
          }),
          (0, Q.jsx)(`button`, {
            onClick: e,
            className: `p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors`,
            "aria-label": P(`close`),
            children: (0, Q.jsx)(X, { className: `size-5` }),
          }),
        ],
      }),
      (0, Q.jsxs)(`div`, {
        className: `flex-1 overflow-y-auto p-4 space-y-3`,
        children: [
          F === null &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-3 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `space-y-2.5`,
                  children: [
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`language`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400`,
                              children: (0, Q.jsx)(B, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`language`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: Qn,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`appearance`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400`,
                              children: (0, Q.jsx)(W, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`appearance`),
                                }),
                                (0, Q.jsxs)(`span`, {
                                  className: `text-xs text-muted-foreground capitalize`,
                                  children: [ge, ` • `, H],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: Ee,
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors group`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500`,
                              children: (0, Q.jsx)(Ye, {
                                className: `size-5 fill-amber-500`,
                              }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`rateUs`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: P(`rateSupportOnPlay`),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `flex items-center gap-1 text-xs font-semibold text-brand`,
                          children: (0, Q.jsx)(de, { className: `size-4` }),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: Oe,
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400`,
                              children: (0, Q.jsx)(Be, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`shareApp`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: P(`shareWithFriends`),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(Be, {
                          className: `size-4 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`notifications`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-red-500/10 text-red-500`,
                              children: (0, Q.jsx)(A, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`notifications`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: P(`notificationsSub`),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`safety`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-brand/10 text-brand`,
                              children: (0, Q.jsx)(Ve, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`safetyHub`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: P(`safetyHubSub`),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`backup`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400`,
                              children: (0, Q.jsx)(ce, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`dataBackup`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: P(`dataBackupSub`),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`passwords`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500`,
                              children: (0, Q.jsx)(_e, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`passwords`),
                                }),
                                (0, Q.jsxs)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: [
                                    dn.length,
                                    ` `,
                                    P(`savedCredentialsCount`),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`payments`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400`,
                              children: (0, Q.jsx)(se, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children:
                                    k === `es`
                                      ? `Métodos de pago`
                                      : `Payment Methods`,
                                }),
                                (0, Q.jsxs)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: [
                                    xt.length,
                                    ` `,
                                    k === `es`
                                      ? `tarjetas guardadas, autocompletar`
                                      : `saved cards, autofill`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`privacy`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500`,
                              children: (0, Q.jsx)(z, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`privacyPolicy`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: P(`privacySub`),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(N, {
                          className: `size-5 text-muted-foreground/60`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => I(`blockings`),
                      className: `flex w-full items-center justify-between rounded-2xl border border-border/80 bg-card p-4 text-left shadow-2xs hover:bg-muted/40 transition-colors`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `flex size-9 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500`,
                              children: (0, Q.jsx)(Ce, { className: `size-5` }),
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-medium text-sm text-foreground block`,
                                  children: P(`blockingsAndShields`),
                                }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: P(`shieldsSub`),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`span`, {
                          className: `text-xs text-brand font-semibold px-2.5 py-0.5 rounded-full bg-brand/10`,
                          children: P(`active`),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsx)(`div`, {
                  className: `pt-2`,
                  children: (0, Q.jsxs)(`button`, {
                    onClick: () => I(`clear-data`),
                    className: `flex w-full items-center justify-center gap-2 rounded-2xl bg-destructive/10 hover:bg-destructive/15 text-destructive p-4 font-semibold text-sm transition-colors border border-destructive/20`,
                    children: [
                      (0, Q.jsx)(J, { className: `size-4` }),
                      (0, Q.jsx)(`span`, {
                        children: P(`clearAllBrowsingData`),
                      }),
                    ],
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `text-center pt-3 text-xs text-muted-foreground space-y-1`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `font-medium`,
                      children: `WebNa Browser v2.4.0 (Android & Web)`,
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-[11px] text-muted-foreground/70`,
                      children: `Fast • Secure • Ad-Free`,
                    }),
                  ],
                }),
              ],
            }),
          F === `language` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs`,
                  children: [
                    (0, Q.jsx)(`h3`, {
                      className: `font-semibold text-sm text-foreground`,
                      children: P(`displayAndSearchLanguage`),
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-xs text-muted-foreground mt-0.5`,
                      children: P(`chooseLanguageSub`),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-semibold text-sm`,
                          children: P(`autoTranslateForeign`),
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: P(`autoTranslateSub`),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`button`, {
                      type: `button`,
                      role: `switch`,
                      "aria-checked": R,
                      onClick: () => {
                        let e = !R;
                        (ue(e),
                          localStorage.setItem(
                            `webna-auto-translate`,
                            String(e),
                          ));
                      },
                      className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${R ? `bg-brand` : `bg-muted`}`,
                      children: (0, Q.jsx)(`span`, {
                        className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${R ? `translate-x-5` : `translate-x-0`}`,
                      }),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1`,
                      children: P(`supportedLanguages`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs`,
                      children: Jt.map((e) => {
                        let t = k === e.code;
                        return (0, Q.jsxs)(
                          `button`,
                          {
                            onClick: () => me(e.code),
                            className: `flex w-full items-center justify-between p-3.5 text-left hover:bg-muted/40 transition-colors`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                children: [
                                  (0, Q.jsx)(`span`, {
                                    className: `font-medium text-sm text-foreground block`,
                                    children: e.name,
                                  }),
                                  (0, Q.jsx)(`span`, {
                                    className: `text-xs text-muted-foreground`,
                                    children: e.native,
                                  }),
                                ],
                              }),
                              t &&
                                (0, Q.jsx)(`div`, {
                                  className: `flex size-6 items-center justify-center rounded-full bg-brand text-brand-foreground`,
                                  children: (0, Q.jsx)(ie, {
                                    className: `size-3.5 stroke-[3]`,
                                  }),
                                }),
                            ],
                          },
                          e.code,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          F === `appearance` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs`,
                  children: [
                    (0, Q.jsx)(`h3`, {
                      className: `font-semibold text-sm text-foreground`,
                      children: P(`themeAndDisplay`),
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-xs text-muted-foreground mt-0.5`,
                      children: P(`appearanceSub`),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1`,
                      children: P(`colorTheme`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `grid grid-cols-3 gap-2`,
                      children: [
                        { id: `light`, label: P(`lightTheme`), Icon: Xe },
                        { id: `dark`, label: P(`darkTheme`), Icon: De },
                        { id: `system`, label: P(`systemTheme`), Icon: ve },
                      ].map(({ id: e, label: t, Icon: n }) =>
                        (0, Q.jsxs)(
                          `button`,
                          {
                            onClick: () => U(e),
                            className: `flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl border text-center transition-all ${ge === e ? `border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold shadow-xs` : `border-border/80 bg-card hover:bg-muted/40 text-foreground`}`,
                            children: [
                              (0, Q.jsx)(n, { className: `size-5` }),
                              (0, Q.jsx)(`span`, {
                                className: `text-xs`,
                                children: t,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1`,
                      children: P(`textScaling`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `grid grid-cols-4 gap-2`,
                      children: [
                        { id: `small`, label: P(`small`), size: `85%` },
                        { id: `medium`, label: P(`normal`), size: `100%` },
                        { id: `large`, label: P(`large`), size: `115%` },
                        { id: `xlarge`, label: P(`huge`), size: `130%` },
                      ].map(({ id: e, label: t, size: n }) =>
                        (0, Q.jsxs)(
                          `button`,
                          {
                            onClick: () => Te(e),
                            className: `flex flex-col items-center justify-center p-2.5 rounded-2xl border text-center transition-all ${H === e ? `border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold` : `border-border/80 bg-card hover:bg-muted/40 text-foreground`}`,
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `text-xs font-bold`,
                                children: t,
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `text-[10px] text-muted-foreground`,
                                children: n,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1`,
                      children: P(`addressBarPosition`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `grid grid-cols-2 gap-2`,
                      children: [
                        { id: `top`, label: P(`topStandard`) },
                        { id: `bottom`, label: P(`bottomEasy`) },
                      ].map(({ id: e, label: t }) =>
                        (0, Q.jsx)(
                          `button`,
                          {
                            onClick: () => {
                              (xe(e),
                                localStorage.setItem(`webna-address-bar`, e),
                                i.success(`${P(`addressBarPosition`)}: ${t}`));
                            },
                            className: `p-3 rounded-2xl border text-center text-xs font-medium transition-all ${be === e ? `border-brand bg-brand/10 text-brand ring-1 ring-brand font-semibold` : `border-border/80 bg-card hover:bg-muted/40 text-foreground`}`,
                            children: t,
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-semibold text-sm`,
                          children: P(`highContrast`),
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: P(`highContrastSub`),
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`button`, {
                      type: `button`,
                      role: `switch`,
                      "aria-checked": Se,
                      onClick: () => {
                        let e = !Se;
                        (we(e),
                          localStorage.setItem(
                            `webna-high-contrast`,
                            String(e),
                          ),
                          i.success(
                            e
                              ? `High contrast enabled`
                              : `High contrast disabled`,
                          ));
                      },
                      className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${Se ? `bg-brand` : `bg-muted`}`,
                      children: (0, Q.jsx)(`span`, {
                        className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${Se ? `translate-x-5` : `translate-x-0`}`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          F === `notifications` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsx)(`h3`, {
                              className: `font-semibold text-sm text-foreground`,
                              children: P(`androidNotificationPermission`),
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground mt-0.5`,
                              children: P(`permissionRequiredSub`),
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`span`, {
                          className: `text-xs font-bold px-2.5 py-1 rounded-full uppercase ${ke === `granted` ? `bg-emerald-500/10 text-emerald-600` : ke === `denied` ? `bg-destructive/10 text-destructive` : `bg-amber-500/10 text-amber-600`}`,
                          children: ke,
                        }),
                      ],
                    }),
                    ke !== `granted` &&
                      (0, Q.jsxs)(`button`, {
                        onClick: We,
                        className: `flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs`,
                        children: [
                          (0, Q.jsx)(A, { className: `size-3.5` }),
                          (0, Q.jsx)(`span`, {
                            children: P(`requestPermission`),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1`,
                      children: P(`notificationCategories`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `space-y-2.5`,
                      children: [
                        {
                          title: P(`downloadCompletedAlerts`),
                          desc: P(`downloadCompletedSub`),
                          val: je,
                          set: (e) => {
                            (G(e),
                              localStorage.setItem(
                                `webna-notif-downloads`,
                                String(e),
                              ));
                          },
                        },
                        {
                          title: P(`safeBrowsingAlerts`),
                          desc: P(`safeBrowsingSub`),
                          val: Ne,
                          set: (e) => {
                            (Pe(e),
                              localStorage.setItem(
                                `webna-notif-security`,
                                String(e),
                              ));
                          },
                        },
                        {
                          title: P(`newsTrendingUpdates`),
                          desc: P(`newsTrendingSub`),
                          val: Fe,
                          set: (e) => {
                            (q(e),
                              localStorage.setItem(
                                `webna-notif-news`,
                                String(e),
                              ));
                          },
                        },
                        {
                          title: P(`mediaBackgroundPlayback`),
                          desc: P(`mediaPlaybackSub`),
                          val: Ie,
                          set: (e) => {
                            (Le(e),
                              localStorage.setItem(
                                `webna-notif-playback`,
                                String(e),
                              ));
                          },
                        },
                        {
                          title: P(`vibrationSoundAlerts`),
                          desc: P(`vibrationSub`),
                          val: ze,
                          set: (e) => {
                            (Ue(e),
                              localStorage.setItem(
                                `webna-notif-vibration`,
                                String(e),
                              ));
                          },
                        },
                      ].map((e, t) =>
                        (0, Q.jsxs)(
                          `div`,
                          {
                            className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `space-y-0.5 pr-4`,
                                children: [
                                  (0, Q.jsx)(`h4`, {
                                    className: `font-semibold text-sm`,
                                    children: e.title,
                                  }),
                                  (0, Q.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground`,
                                    children: e.desc,
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`button`, {
                                type: `button`,
                                role: `switch`,
                                "aria-checked": e.val,
                                onClick: () => e.set(!e.val),
                                className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${e.val ? `bg-brand` : `bg-muted`}`,
                                children: (0, Q.jsx)(`span`, {
                                  className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${e.val ? `translate-x-5` : `translate-x-0`}`,
                                }),
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`button`, {
                  onClick: Ge,
                  className: `flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-foreground font-medium text-xs hover:bg-muted/40 transition-colors`,
                  children: [
                    (0, Q.jsx)(Re, { className: `size-3.5 text-brand` }),
                    (0, Q.jsx)(`span`, { children: P(`sendTestNotification`) }),
                  ],
                }),
              ],
            }),
          F === `safety` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 p-4 shadow-2xs`,
                  children: (0, Q.jsxs)(`div`, {
                    className: `flex items-start justify-between gap-3`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30`,
                            children: (0, Q.jsx)(Ve, {
                              className: `size-6 stroke-[2.2]`,
                            }),
                          }),
                          (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, Q.jsx)(`h3`, {
                                    className: `font-bold text-sm text-foreground`,
                                    children: P(`shieldActive`),
                                  }),
                                  (0, Q.jsxs)(`span`, {
                                    className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300`,
                                    children: [
                                      (0, Q.jsx)(`span`, {
                                        className: `size-1.5 rounded-full bg-emerald-500 animate-pulse`,
                                      }),
                                      P(
                                        qt >= 90
                                          ? `auditStatusExcellent`
                                          : qt >= 70
                                            ? `auditStatusGood`
                                            : `auditStatusFair`,
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`p`, {
                                className: `text-xs text-muted-foreground mt-0.5 line-clamp-1`,
                                children: P(`shieldActiveSub`),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `shrink-0 text-right`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `text-lg font-black text-emerald-600 dark:text-emerald-400 leading-none`,
                            children: [qt, `%`],
                          }),
                          (0, Q.jsxs)(`span`, {
                            className: `text-[10px] text-muted-foreground uppercase font-semibold`,
                            children: [Kt, `/11 active`],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `grid grid-cols-2 p-1 rounded-2xl bg-muted/60 border border-border/60`,
                  children: [
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => Je(`controls`),
                      className: `flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${qe === `controls` ? `bg-card text-foreground shadow-xs border border-border/60` : `text-muted-foreground hover:text-foreground`}`,
                      children: [
                        (0, Q.jsx)(He, { className: `size-3.5 text-brand` }),
                        (0, Q.jsx)(`span`, {
                          children: P(`safetyControlsTab`),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => Je(`audit`),
                      className: `flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${qe === `audit` ? `bg-card text-foreground shadow-xs border border-border/60` : `text-muted-foreground hover:text-foreground`}`,
                      children: [
                        (0, Q.jsx)(D, {
                          className: `size-3.5 text-emerald-600 dark:text-emerald-400`,
                        }),
                        (0, Q.jsx)(`span`, { children: P(`safetyAuditTab`) }),
                        (0, Q.jsx)(`span`, {
                          className: `size-2 rounded-full bg-emerald-500`,
                        }),
                      ],
                    }),
                  ],
                }),
                qe === `controls` &&
                  (0, Q.jsxs)(`div`, {
                    className: `space-y-4`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `space-y-2.5`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center justify-between px-1`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, Q.jsx)(he, {
                                    className: `size-3.5 text-brand`,
                                  }),
                                  (0, Q.jsx)(`span`, {
                                    className: `text-xs font-bold uppercase tracking-wider text-muted-foreground`,
                                    children: P(`privacyAndIdentity`),
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `text-[10px] font-semibold text-brand px-2 py-0.5 rounded-full bg-brand/10`,
                                children: `Privacy`,
                              }),
                            ],
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`adsAndTrackers`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`adsAndTrackersSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": d && h,
                                    onClick: () => {
                                      let e = !(d && h);
                                      (f(e),
                                        g(e),
                                        localStorage.setItem(
                                          `webna-block-ads`,
                                          String(e),
                                        ),
                                        localStorage.setItem(
                                          `webna-block-trackers`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Ad & Tracker Shield enabled`
                                            : `Ad & Tracker Shield disabled`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${d && h ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${d && h ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`fingerprintProtection`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`fingerprintProtectionSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": ot,
                                    onClick: () => {
                                      let e = !ot;
                                      (st(e),
                                        localStorage.setItem(
                                          `webna-fingerprint-prot`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Anti-Fingerprint masking enabled`
                                            : `Anti-Fingerprint masking disabled`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${ot ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${ot ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`cleanLinks`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`cleanLinksSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": $,
                                    onClick: () => {
                                      let e = !$;
                                      (ct(e),
                                        localStorage.setItem(
                                          `webna-clean-links`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Link Sanitizer active (tracking tags stripped)`
                                            : `Link Sanitizer disabled`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${$ ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${$ ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(
                                          `blockNotificationRequests`,
                                        ),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(
                                          `blockNotificationRequestsSub`,
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": C,
                                    onClick: () => {
                                      let e = !C;
                                      (w(e),
                                        localStorage.setItem(
                                          `webna-block-notifications`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Silent browsing enabled (push requests muted)`
                                            : `Notification requests allowed`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${C ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${C ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`cookieManagement`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground`,
                                        children: P(`cookieManagementSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`div`, {
                                    className: `grid grid-cols-3 gap-1.5 pt-1`,
                                    children: [
                                      {
                                        id: `allow`,
                                        label: P(`cookieAllow`),
                                        desc: `Standard`,
                                      },
                                      {
                                        id: `block-3rd`,
                                        label: P(`cookieBlock3rd`),
                                        desc: `Recommended`,
                                      },
                                      {
                                        id: `block-all`,
                                        label: P(`cookieBlockAll`),
                                        desc: `Strict`,
                                      },
                                    ].map((e) => {
                                      let t = lt === e.id;
                                      return (0, Q.jsxs)(
                                        `button`,
                                        {
                                          type: `button`,
                                          onClick: () => {
                                            (ut(e.id),
                                              localStorage.setItem(
                                                `webna-cookie-mode`,
                                                e.id,
                                              ),
                                              v(e.id !== `allow`),
                                              localStorage.setItem(
                                                `webna-block-cookies`,
                                                String(e.id !== `allow`),
                                              ),
                                              i.success(
                                                `Cookie policy set: ${e.label}`,
                                              ));
                                          },
                                          className: `p-2 rounded-xl text-center border transition-all ${t ? `border-brand bg-brand/10 text-brand ring-1 ring-brand font-bold shadow-2xs` : `border-border/60 bg-muted/30 hover:bg-muted/60 text-muted-foreground`}`,
                                          children: [
                                            (0, Q.jsx)(`span`, {
                                              className: `text-[11px] block leading-tight`,
                                              children: e.label,
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              className: `text-[9px] opacity-75 font-normal`,
                                              children: e.desc,
                                            }),
                                          ],
                                        },
                                        e.id,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `space-y-2.5 pt-2`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center justify-between px-1`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, Q.jsx)(Ce, {
                                    className: `size-3.5 text-emerald-600 dark:text-emerald-400`,
                                  }),
                                  (0, Q.jsx)(`span`, {
                                    className: `text-xs font-bold uppercase tracking-wider text-muted-foreground`,
                                    children: P(`connectionAndThreat`),
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10`,
                                children: `Security`,
                              }),
                            ],
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`httpsOnlyMode`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`httpsOnlySub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": Qe,
                                    onClick: () => {
                                      let e = !Qe;
                                      ($e(e),
                                        localStorage.setItem(
                                          `webna-https-only`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Strict HTTPS enforcement enabled`
                                            : `HTTPS enforcement relaxed`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${Qe ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${Qe ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`antiPhishing`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`antiPhishingSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": et,
                                    onClick: () => {
                                      let e = !et;
                                      (tt(e),
                                        localStorage.setItem(
                                          `webna-phishing-prot`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Phishing & malware sentry active`
                                            : `Phishing sentry disabled`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${et ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${et ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`blockPopupsTitle`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`blockPopupsSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": p,
                                    onClick: () => {
                                      let e = !p;
                                      (m(e),
                                        localStorage.setItem(
                                          `webna-block-popups`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Pop-up blocker active`
                                            : `Pop-ups allowed`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${p ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${p ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`blockMixedContent`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`blockMixedContentSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": pt,
                                    onClick: () => {
                                      let e = !pt;
                                      (mt(e),
                                        localStorage.setItem(
                                          `webna-block-mixed-content`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Mixed content blocked`
                                            : `Mixed content permitted`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${pt ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${pt ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`sendDntHeader`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`sendDntSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": nt,
                                    onClick: () => {
                                      let e = !nt;
                                      (rt(e),
                                        localStorage.setItem(
                                          `webna-dnt`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Global Privacy Control & DNT enabled`
                                            : `DNT headers disabled`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${nt ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${nt ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`strictDownloads`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`strictDownloadsSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": dt,
                                    onClick: () => {
                                      let e = !dt;
                                      (ft(e),
                                        localStorage.setItem(
                                          `webna-strict-downloads`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `Drive-by download guard enabled`
                                            : `Strict download guard disabled`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${dt ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${dt ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs`,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: `space-y-0.5 pr-3`,
                                    children: [
                                      (0, Q.jsx)(`h4`, {
                                        className: `font-semibold text-xs text-foreground`,
                                        children: P(`dnsLeakMitigation`),
                                      }),
                                      (0, Q.jsx)(`p`, {
                                        className: `text-[11px] text-muted-foreground leading-snug`,
                                        children: P(`dnsLeakSub`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`button`, {
                                    type: `button`,
                                    role: `switch`,
                                    "aria-checked": it,
                                    onClick: () => {
                                      let e = !it;
                                      (at(e),
                                        localStorage.setItem(
                                          `webna-dns-leak`,
                                          String(e),
                                        ),
                                        i.success(
                                          e
                                            ? `DNS leak mitigation active`
                                            : `DNS leak mitigation disabled`,
                                        ));
                                    },
                                    className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${it ? `bg-brand` : `bg-muted`}`,
                                    children: (0, Q.jsx)(`span`, {
                                      className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${it ? `translate-x-5` : `translate-x-0`}`,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => I(`blockings`),
                        className: `flex w-full items-center justify-between rounded-2xl border border-brand/30 bg-brand/5 p-4 text-left hover:bg-brand/10 transition-colors`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `font-semibold text-xs text-brand block`,
                                children: P(`detailedShieldPermissions`),
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `text-[11px] text-muted-foreground`,
                                children: P(`detailedShieldSub`),
                              }),
                            ],
                          }),
                          (0, Q.jsx)(N, { className: `size-4 text-brand` }),
                        ],
                      }),
                    ],
                  }),
                qe === `audit` &&
                  (0, Q.jsxs)(`div`, {
                    className: `space-y-4`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center justify-between`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                children: [
                                  (0, Q.jsx)(`h4`, {
                                    className: `font-bold text-sm text-foreground`,
                                    children: P(`auditScoreTitle`),
                                  }),
                                  (0, Q.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground`,
                                    children: P(`auditScoreSub`),
                                  }),
                                ],
                              }),
                              (0, Q.jsxs)(`div`, {
                                className: `flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-black text-xl`,
                                children: [qt, `%`],
                              }),
                            ],
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `h-2 w-full rounded-full bg-muted overflow-hidden`,
                            children: (0, Q.jsx)(`div`, {
                              className: `h-full transition-all duration-500 ${qt >= 90 ? `bg-emerald-500` : qt >= 70 ? `bg-amber-500` : `bg-destructive`}`,
                              style: { width: `${qt}%` },
                            }),
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center justify-between text-xs text-muted-foreground pt-1`,
                            children: [
                              (0, Q.jsx)(`span`, {
                                children:
                                  qt >= 90
                                    ? `✓ ${P(`auditStatusExcellent`)}`
                                    : qt >= 70
                                      ? `! ${P(`auditStatusGood`)}`
                                      : `⚠ ${P(`auditStatusFair`)}`,
                              }),
                              yt &&
                                (0, Q.jsxs)(`span`, {
                                  className: `text-[10px]`,
                                  children: [
                                    `Last audit: `,
                                    new Date(yt).toLocaleTimeString(),
                                  ],
                                }),
                            ],
                          }),
                          qt < 100 &&
                            (0, Q.jsxs)(`button`, {
                              type: `button`,
                              onClick: Zt,
                              className: `flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 px-3 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity`,
                              children: [
                                (0, Q.jsx)(Ke, { className: `size-3.5` }),
                                (0, Q.jsx)(`span`, {
                                  children: P(`optimizeAll`),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `rounded-2xl border border-border/80 bg-card p-4 shadow-2xs space-y-3`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `flex items-center justify-between`,
                            children: (0, Q.jsxs)(`div`, {
                              className: `flex items-center gap-2.5`,
                              children: [
                                (0, Q.jsx)(`div`, {
                                  className: `flex size-9 items-center justify-center rounded-xl bg-muted text-foreground`,
                                  children: (0, Q.jsx)(D, {
                                    className: `size-4 ${ht ? `animate-spin text-brand` : `text-emerald-600`}`,
                                  }),
                                }),
                                (0, Q.jsxs)(`div`, {
                                  children: [
                                    (0, Q.jsx)(`h4`, {
                                      className: `font-semibold text-xs text-foreground`,
                                      children: P(
                                        ht ? `runningAudit` : `runAudit`,
                                      ),
                                    }),
                                    (0, Q.jsx)(`p`, {
                                      className: `text-[11px] text-muted-foreground`,
                                      children: ht
                                        ? _t === 1
                                          ? `Auditing TLS cipher suites & HTTPS...`
                                          : _t === 2
                                            ? `Testing tracker & telemetry filter rules...`
                                            : _t === 3
                                              ? `Validating canvas fingerprint obfuscation...`
                                              : `Checking link sanitizer rules...`
                                        : `Performs full integrity check of device shields`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, Q.jsxs)(`button`, {
                            type: `button`,
                            onClick: Xt,
                            disabled: ht,
                            className: `flex w-full items-center justify-center gap-2 rounded-xl bg-muted hover:bg-muted/80 border border-border py-2.5 text-foreground font-semibold text-xs transition-colors`,
                            children: [
                              (0, Q.jsx)(K, {
                                className: `size-3.5 text-brand ${ht ? `animate-spin` : ``}`,
                              }),
                              (0, Q.jsx)(`span`, {
                                children: P(ht ? `runningAudit` : `runAudit`),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [
                          (0, Q.jsx)(`p`, {
                            className: `text-xs font-bold uppercase tracking-wider text-muted-foreground px-1`,
                            children: P(`auditChecklist`),
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `rounded-2xl border border-border/80 bg-card divide-y divide-border/60 overflow-hidden shadow-2xs`,
                            children: [
                              {
                                name: P(`adsAndTrackers`),
                                active: d && h,
                                fix: () => {
                                  (f(!0),
                                    g(!0),
                                    localStorage.setItem(
                                      `webna-block-ads`,
                                      `true`,
                                    ),
                                    localStorage.setItem(
                                      `webna-block-trackers`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`fingerprintProtection`),
                                active: ot,
                                fix: () => {
                                  (st(!0),
                                    localStorage.setItem(
                                      `webna-fingerprint-prot`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`cleanLinks`),
                                active: $,
                                fix: () => {
                                  (ct(!0),
                                    localStorage.setItem(
                                      `webna-clean-links`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`blockNotificationRequests`),
                                active: C,
                                fix: () => {
                                  (w(!0),
                                    localStorage.setItem(
                                      `webna-block-notifications`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`cookieManagement`),
                                active: lt !== `allow`,
                                fix: () => {
                                  (ut(`block-3rd`),
                                    localStorage.setItem(
                                      `webna-cookie-mode`,
                                      `block-3rd`,
                                    ),
                                    v(!0),
                                    localStorage.setItem(
                                      `webna-block-cookies`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`httpsOnlyMode`),
                                active: Qe,
                                fix: () => {
                                  ($e(!0),
                                    localStorage.setItem(
                                      `webna-https-only`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`antiPhishing`),
                                active: et,
                                fix: () => {
                                  (tt(!0),
                                    localStorage.setItem(
                                      `webna-phishing-prot`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`blockPopupsTitle`),
                                active: p,
                                fix: () => {
                                  (m(!0),
                                    localStorage.setItem(
                                      `webna-block-popups`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`blockMixedContent`),
                                active: pt,
                                fix: () => {
                                  (mt(!0),
                                    localStorage.setItem(
                                      `webna-block-mixed-content`,
                                      `true`,
                                    ));
                                },
                              },
                              {
                                name: P(`sendDntHeader`),
                                active: nt,
                                fix: () => {
                                  (rt(!0),
                                    localStorage.setItem(`webna-dnt`, `true`));
                                },
                              },
                              {
                                name: P(`strictDownloads`),
                                active: dt,
                                fix: () => {
                                  (ft(!0),
                                    localStorage.setItem(
                                      `webna-strict-downloads`,
                                      `true`,
                                    ));
                                },
                              },
                            ].map((e, t) =>
                              (0, Q.jsxs)(
                                `div`,
                                {
                                  className: `flex items-center justify-between p-3 text-xs`,
                                  children: [
                                    (0, Q.jsxs)(`div`, {
                                      className: `flex items-center gap-2`,
                                      children: [
                                        e.active
                                          ? (0, Q.jsx)(oe, {
                                              className: `size-4 text-emerald-600 dark:text-emerald-400 shrink-0`,
                                            })
                                          : (0, Q.jsx)(ae, {
                                              className: `size-4 text-amber-500 shrink-0`,
                                            }),
                                        (0, Q.jsx)(`span`, {
                                          className: `font-medium text-foreground`,
                                          children: e.name,
                                        }),
                                      ],
                                    }),
                                    e.active
                                      ? (0, Q.jsx)(`span`, {
                                          className: `text-[10px] font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10`,
                                          children: `Protected`,
                                        })
                                      : (0, Q.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => {
                                            (e.fix(),
                                              i.success(`Enabled: ${e.name}`));
                                          },
                                          className: `text-[10px] font-bold text-brand px-2 py-0.5 rounded-full bg-brand/10 hover:bg-brand/20 transition-colors`,
                                          children: `Enable`,
                                        }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          F === `backup` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs`,
                  children: [
                    (0, Q.jsx)(`h3`, {
                      className: `font-semibold text-sm text-foreground`,
                      children: P(`backupAndSync`),
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-xs text-muted-foreground mt-0.5`,
                      children: P(`backupSub`),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-3`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `size-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-base shrink-0`,
                              children: `M`,
                            }),
                            (0, Q.jsxs)(`div`, {
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `font-bold text-sm block`,
                                  children: `musichub661@gmail.com`,
                                }),
                                (0, Q.jsxs)(`span`, {
                                  className: `text-xs text-muted-foreground`,
                                  children: [
                                    P(`cloudSync`),
                                    `:`,
                                    ` `,
                                    nn === `syncing`
                                      ? `Syncing...`
                                      : `Connected`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`button`, {
                          onClick: un,
                          disabled: nn === `syncing`,
                          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground text-xs font-semibold transition-colors disabled:opacity-50`,
                          children: [
                            (0, Q.jsx)(K, {
                              className: `size-3.5 ${nn === `syncing` ? `animate-spin text-brand` : ``}`,
                            }),
                            (0, Q.jsx)(`span`, { children: P(`syncNow`) }),
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex justify-between text-xs text-muted-foreground pt-1 border-t`,
                      children: [
                        (0, Q.jsx)(`span`, { children: P(`lastCloudSync`) }),
                        (0, Q.jsx)(`span`, {
                          className: `font-medium text-foreground`,
                          children: an,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `size-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0`,
                          children: (0, Q.jsx)(le, { className: `size-5` }),
                        }),
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsx)(`h4`, {
                              className: `font-semibold text-sm`,
                              children: P(`exportToJson`),
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: P(`exportSub`),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: cn,
                      disabled: Qt,
                      className: `flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-brand-foreground font-semibold text-xs shadow-xs hover:opacity-90 transition-opacity mt-2`,
                      children: [
                        (0, Q.jsx)(le, { className: `size-3.5` }),
                        (0, Q.jsx)(`span`, {
                          children: Qt
                            ? `Exporting...`
                            : P(`downloadBackupFile`),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-2`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `size-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0`,
                          children: (0, Q.jsx)(Y, { className: `size-5` }),
                        }),
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsx)(`h4`, {
                              className: `font-semibold text-sm`,
                              children: P(`restoreFromBackup`),
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: P(`restoreSub`),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`input`, {
                      ref: sn,
                      type: `file`,
                      accept: `.json,application/json`,
                      onChange: ln,
                      className: `hidden`,
                      id: `restore-file-input`,
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: () => sn.current?.click(),
                      disabled: en,
                      className: `flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card py-2.5 text-foreground font-semibold text-xs hover:bg-muted/40 transition-colors mt-2`,
                      children: [
                        (0, Q.jsx)(Y, { className: `size-3.5 text-brand` }),
                        (0, Q.jsx)(`span`, {
                          children: en
                            ? `Reading File...`
                            : P(`chooseBackupFile`),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          F === `passwords` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`h3`, {
                          className: `font-semibold text-sm text-foreground`,
                          children: P(`savedPasswords`),
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: P(`passwordVaultSub`),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      onClick: Fn,
                      className: `flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90`,
                      children: [
                        (0, Q.jsx)(Me, { className: `size-3.5` }),
                        (0, Q.jsx)(`span`, { children: P(`add`) }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `relative`,
                  children: [
                    (0, Q.jsx)(`input`, {
                      type: `text`,
                      placeholder: P(`searchAccounts`),
                      value: pn,
                      onChange: (e) => mn(e.target.value),
                      className: `w-full rounded-2xl border border-border bg-card py-2.5 pl-9 pr-4 text-xs outline-none focus:border-brand`,
                    }),
                    (0, Q.jsx)(Ce, {
                      className: `absolute left-3 top-3 size-3.5 text-muted-foreground`,
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl border border-border/80 bg-card p-3 space-y-2 text-xs`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, Q.jsx)(`span`, {
                          children: P(`offerToSavePasswords`),
                        }),
                        (0, Q.jsx)(`button`, {
                          type: `button`,
                          role: `switch`,
                          "aria-checked": Dn,
                          onClick: () => {
                            let e = !Dn;
                            (On(e),
                              localStorage.setItem(
                                `webna-save-password-prompt`,
                                String(e),
                              ));
                          },
                          className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${Dn ? `bg-brand` : `bg-muted`}`,
                          children: (0, Q.jsx)(`span`, {
                            className: `pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${Dn ? `translate-x-4` : `translate-x-0`}`,
                          }),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between border-t pt-2`,
                      children: [
                        (0, Q.jsx)(`span`, { children: P(`autoFillWebForms`) }),
                        (0, Q.jsx)(`button`, {
                          type: `button`,
                          role: `switch`,
                          "aria-checked": kn,
                          onClick: () => {
                            let e = !kn;
                            (An(e),
                              localStorage.setItem(
                                `webna-autofill-passwords`,
                                String(e),
                              ));
                          },
                          className: `relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${kn ? `bg-brand` : `bg-muted`}`,
                          children: (0, Q.jsx)(`span`, {
                            className: `pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ${kn ? `translate-x-4` : `translate-x-0`}`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsx)(`div`, {
                  className: `space-y-2.5`,
                  children: dn
                    .filter(
                      (e) =>
                        e.domain.toLowerCase().includes(pn.toLowerCase()) ||
                        e.username.toLowerCase().includes(pn.toLowerCase()),
                    )
                    .map((e) => {
                      let t = hn[e.id];
                      return (0, Q.jsxs)(
                        `div`,
                        {
                          onClick: () => In(e),
                          className: `rounded-2xl border border-border/80 bg-card p-3.5 shadow-2xs space-y-2.5 cursor-pointer hover:border-brand/50 transition-all`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-center justify-between`,
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center gap-2.5 min-w-0`,
                                  children: [
                                    (0, Q.jsx)(`img`, {
                                      src: `https://www.google.com/s2/favicons?domain=${e.domain}&sz=32`,
                                      alt: ``,
                                      className: `size-5 rounded-sm shrink-0`,
                                      onError: (e) => {
                                        e.target.style.display = `none`;
                                      },
                                    }),
                                    (0, Q.jsx)(`span`, {
                                      className: `font-semibold text-sm text-foreground truncate`,
                                      children: e.domain,
                                    }),
                                  ],
                                }),
                                (0, Q.jsx)(`button`, {
                                  onClick: (t) => {
                                    (t.stopPropagation(), Pn(e.id));
                                  },
                                  className: `text-muted-foreground hover:text-destructive p-1 rounded-lg`,
                                  "aria-label": P(`delete`),
                                  children: (0, Q.jsx)(J, {
                                    className: `size-4`,
                                  }),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-1.5 text-xs`,
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl`,
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      className: `text-muted-foreground truncate mr-2`,
                                      children: e.username,
                                    }),
                                    (0, Q.jsx)(`button`, {
                                      onClick: (t) => {
                                        (t.stopPropagation(),
                                          Nn(e.username, `Username`));
                                      },
                                      className: `p-1 hover:text-brand`,
                                      "aria-label": P(`copy`),
                                      children: (0, Q.jsx)(L, {
                                        className: `size-3.5`,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center justify-between bg-muted/40 px-2.5 py-1.5 rounded-xl`,
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      className: `font-mono text-xs tracking-wider truncate mr-2`,
                                      children: t ? e.password : `••••••••••••`,
                                    }),
                                    (0, Q.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, Q.jsx)(`button`, {
                                          onClick: (t) => {
                                            (t.stopPropagation(), Mn(e.id));
                                          },
                                          className: `p-1 hover:text-foreground text-muted-foreground`,
                                          "aria-label": `Toggle password view`,
                                          children: t
                                            ? (0, Q.jsx)(fe, {
                                                className: `size-3.5`,
                                              })
                                            : (0, Q.jsx)(pe, {
                                                className: `size-3.5`,
                                              }),
                                        }),
                                        (0, Q.jsx)(`button`, {
                                          onClick: (t) => {
                                            (t.stopPropagation(),
                                              Nn(e.password, `Password`));
                                          },
                                          className: `p-1 hover:text-brand text-muted-foreground`,
                                          "aria-label": P(`copy`),
                                          children: (0, Q.jsx)(L, {
                                            className: `size-3.5`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                }),
              ],
            }),
          _n &&
            (0, Q.jsx)(`div`, {
              className: `fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4`,
              children: (0, Q.jsxs)(`div`, {
                className: `w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, Q.jsx)(`h3`, {
                        className: `font-bold text-base text-foreground`,
                        children: yn
                          ? k === `es`
                            ? `Editar credencial`
                            : `Edit Credential`
                          : P(`saveNewCredential`),
                      }),
                      (0, Q.jsx)(`button`, {
                        onClick: () => vn(!1),
                        className: `p-1 text-muted-foreground`,
                        children: (0, Q.jsx)(X, { className: `size-4` }),
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`label`, {
                            className: `text-xs font-semibold text-muted-foreground block mb-1`,
                            children: P(`websiteDomain`),
                          }),
                          (0, Q.jsx)(`input`, {
                            type: `text`,
                            placeholder: `e.g. netflix.com`,
                            value: xn,
                            onChange: (e) => Sn(e.target.value),
                            className: `w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`label`, {
                            className: `text-xs font-semibold text-muted-foreground block mb-1`,
                            children: P(`usernameEmail`),
                          }),
                          (0, Q.jsx)(`input`, {
                            type: `text`,
                            placeholder: `e.g. user@example.com`,
                            value: Cn,
                            onChange: (e) => wn(e.target.value),
                            className: `w-full rounded-xl border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center justify-between mb-1`,
                            children: [
                              (0, Q.jsx)(`label`, {
                                className: `text-xs font-semibold text-muted-foreground`,
                                children: P(`passwordLabel`),
                              }),
                              (0, Q.jsx)(`button`, {
                                type: `button`,
                                onClick: Rn,
                                className: `text-[11px] font-semibold text-brand hover:underline`,
                                children: P(`generateStrong`),
                              }),
                            ],
                          }),
                          (0, Q.jsx)(`input`, {
                            type: `text`,
                            placeholder: `Password`,
                            value: Tn,
                            onChange: (e) => En(e.target.value),
                            className: `w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-mono outline-none focus:border-brand`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex gap-2 pt-2`,
                    children: [
                      (0, Q.jsx)(`button`, {
                        onClick: () => vn(!1),
                        className: `flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground`,
                        children: P(`cancel`),
                      }),
                      (0, Q.jsx)(`button`, {
                        onClick: Ln,
                        className: `flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground shadow-xs`,
                        children: yn
                          ? k === `es`
                            ? `Actualizar`
                            : `Update`
                          : P(`save`),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          F === `privacy` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8 text-foreground`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs space-y-1`,
                  children: [
                    (0, Q.jsx)(`h3`, {
                      className: `font-bold text-base`,
                      children: P(`privacyCommitment`),
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: `Last updated: October 2026 • Valid for Android APK & Web App`,
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl border border-border/80 bg-card p-4 space-y-4 text-xs leading-relaxed shadow-2xs text-muted-foreground`,
                  children: [
                    (0, Q.jsxs)(`section`, {
                      className: `space-y-1`,
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-bold text-sm text-foreground`,
                          children: `1. Zero-Log Browsing Policy`,
                        }),
                        (0, Q.jsx)(`p`, {
                          children: `WebNa does not track, collect, store, or sell your search history, URLs, or personal browsing habits. All history, saved bookmarks, and downloads are stored locally on your device storage.`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`section`, {
                      className: `space-y-1`,
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-bold text-sm text-foreground`,
                          children: `2. Android Permissions Transparency`,
                        }),
                        (0, Q.jsx)(`p`, {
                          children: `WebNa only requests permissions when strictly required for user-initiated actions:`,
                        }),
                        (0, Q.jsxs)(`ul`, {
                          className: `list-disc pl-4 space-y-1 mt-1`,
                          children: [
                            (0, Q.jsxs)(`li`, {
                              children: [
                                (0, Q.jsx)(`strong`, {
                                  className: `text-foreground`,
                                  children: `Storage / Downloads:`,
                                }),
                                ` `,
                                `Used solely to save downloaded audio, video, or files to your device.`,
                              ],
                            }),
                            (0, Q.jsxs)(`li`, {
                              children: [
                                (0, Q.jsx)(`strong`, {
                                  className: `text-foreground`,
                                  children: `Camera & Microphone:`,
                                }),
                                ` `,
                                `Only enabled if you explicitly grant access to a specific site for video calls or audio recording.`,
                              ],
                            }),
                            (0, Q.jsxs)(`li`, {
                              children: [
                                (0, Q.jsx)(`strong`, {
                                  className: `text-foreground`,
                                  children: `Notifications:`,
                                }),
                                ` `,
                                `Used for alerting when downloads finish and playing media in the background.`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`section`, {
                      className: `space-y-1`,
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-bold text-sm text-foreground`,
                          children: `3. Ad & Tracker Blocking`,
                        }),
                        (0, Q.jsx)(`p`, {
                          children: `WebNa features built-in shield filters that intercept telemetry requests, known third-party advertising scripts, and cross-site tracking cookies.`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`section`, {
                      className: `space-y-1`,
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-bold text-sm text-foreground`,
                          children: `4. User Data Control`,
                        }),
                        (0, Q.jsx)(`p`, {
                          children: `You retain complete sovereignty over your data. You may export all browser data to JSON or completely wipe history, cookies, and cache at any time using the "Clear Browsing Data" tool.`,
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`section`, {
                      className: `space-y-1`,
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-bold text-sm text-foreground`,
                          children: `5. Contact & Data Protection`,
                        }),
                        (0, Q.jsxs)(`p`, {
                          children: [
                            `For any privacy questions or data inquiries, contact:`,
                            ` `,
                            (0, Q.jsx)(`span`, {
                              className: `font-semibold text-brand`,
                              children: `privacy@webna.app`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Q.jsxs)(`button`, {
                  onClick: () => {
                    (i.success(
                      k === `es`
                        ? `¡Política de privacidad confirmada!`
                        : `Privacy policy acknowledged!`,
                    ),
                      I(null));
                  },
                  className: `flex w-full items-center justify-center gap-2 rounded-2xl bg-brand p-3.5 text-brand-foreground font-semibold text-sm shadow-md`,
                  children: [
                    (0, Q.jsx)(ie, { className: `size-4` }),
                    (0, Q.jsx)(`span`, {
                      children: P(`iUnderstandAndAcknowledge`),
                    }),
                  ],
                }),
              ],
            }),
          F === `blockings` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 space-y-1 shadow-2xs`,
                  children: [
                    (0, Q.jsx)(`h3`, {
                      className: `font-semibold text-sm text-foreground`,
                      children: P(`blockingsAndShields`),
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: P(`shieldsSub`),
                    }),
                  ],
                }),
                [
                  {
                    title: `Block Ads & Banners`,
                    desc: `Prevent intrusive banner ads and video overlays.`,
                    val: d,
                    set: f,
                  },
                  {
                    title: `Block Pop-ups & Redirects`,
                    desc: `Prevent malicious new tabs and forced page redirections.`,
                    val: p,
                    set: m,
                  },
                  {
                    title: `Block Cross-site Trackers`,
                    desc: `Block hidden scripts tracking your browsing behavior.`,
                    val: h,
                    set: g,
                  },
                  {
                    title: `Block Third-party Cookies`,
                    desc: `Block external cookies used for behavioral advertising.`,
                    val: _,
                    set: v,
                  },
                  {
                    title: `Location Access`,
                    desc: `Require permission before any site uses device GPS coordinates.`,
                    val: ee,
                    set: y,
                  },
                  {
                    title: `Microphone Access`,
                    desc: `Shield device microphone from unauthorized access.`,
                    val: b,
                    set: te,
                  },
                  {
                    title: `Camera Access`,
                    desc: `Shield device camera from unauthorized web access.`,
                    val: x,
                    set: S,
                  },
                  {
                    title: `Site Notifications`,
                    desc: `Block push notification spam prompts on websites.`,
                    val: C,
                    set: w,
                  },
                  {
                    title: `Sound Auto Play`,
                    desc: `Prevent videos and background audio from playing automatically.`,
                    val: ne,
                    set: re,
                  },
                  {
                    title: `Strict JavaScript Mode`,
                    desc: `Disable JavaScript on unverified sites for extreme security.`,
                    val: E,
                    set: O,
                  },
                ].map((e, t) =>
                  (0, Q.jsxs)(
                    `div`,
                    {
                      className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-0.5 pr-4`,
                          children: [
                            (0, Q.jsx)(`h4`, {
                              className: `font-semibold text-sm`,
                              children: e.title,
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground`,
                              children: e.desc,
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`button`, {
                          type: `button`,
                          role: `switch`,
                          "aria-checked": e.val,
                          onClick: () => e.set(!e.val),
                          className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${e.val ? `bg-brand` : `bg-muted`}`,
                          children: (0, Q.jsx)(`span`, {
                            className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${e.val ? `translate-x-5` : `translate-x-0`}`,
                          }),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              ],
            }),
          F === `clear-data` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `rounded-2xl bg-destructive/10 border border-destructive/20 p-4 space-y-1`,
                  children: [
                    (0, Q.jsxs)(`h3`, {
                      className: `font-bold text-sm text-destructive flex items-center gap-2`,
                      children: [
                        (0, Q.jsx)(Ze, { className: `size-4` }),
                        P(`clearDataTitle`),
                      ],
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `text-xs text-muted-foreground`,
                      children: P(`clearDataSub`),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, Q.jsx)(`label`, {
                      className: `text-xs font-semibold text-foreground`,
                      children: P(`timeRange`),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `grid grid-cols-4 gap-1.5`,
                      children: [
                        { id: `hour`, label: P(`lastHour`) },
                        { id: `day`, label: P(`twentyFourHours`) },
                        { id: `week`, label: P(`sevenDays`) },
                        { id: `all`, label: P(`allTime`) },
                      ].map(({ id: e, label: t }) =>
                        (0, Q.jsx)(
                          `button`,
                          {
                            onClick: () => Xn(e),
                            className: `py-2 px-1 text-center rounded-xl text-xs font-medium transition-colors ${Yn === e ? `bg-brand text-brand-foreground font-semibold` : `bg-muted text-muted-foreground hover:bg-muted/80`}`,
                            children: t,
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, Q.jsx)(`div`, {
                  className: `rounded-2xl border border-border/80 bg-card divide-y overflow-hidden shadow-2xs`,
                  children: [
                    {
                      id: `hist`,
                      label: P(`browsingHistory`),
                      desc: `${a.length} items logged`,
                      checked: zn,
                      set: Bn,
                    },
                    {
                      id: `cookies`,
                      label: P(`cookiesSiteData`),
                      desc: `Signs you out of most websites`,
                      checked: Vn,
                      set: Hn,
                    },
                    {
                      id: `cache`,
                      label: P(`cachedImages`),
                      desc: `Frees up storage space`,
                      checked: Un,
                      set: Wn,
                    },
                    {
                      id: `saved`,
                      label: P(`bookmarks`),
                      desc: `${n.length + s.length} items`,
                      checked: Gn,
                      set: Kn,
                    },
                    {
                      id: `pwds`,
                      label: P(`savedPasswords`),
                      desc: `${dn.length} credentials`,
                      checked: qn,
                      set: Jn,
                    },
                  ].map((e) =>
                    (0, Q.jsxs)(
                      `label`,
                      {
                        className: `flex items-center justify-between p-3.5 hover:bg-muted/40 cursor-pointer`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `font-semibold text-xs block text-foreground`,
                                children: e.label,
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `text-[11px] text-muted-foreground`,
                                children: e.desc,
                              }),
                            ],
                          }),
                          (0, Q.jsx)(`input`, {
                            type: `checkbox`,
                            checked: e.checked,
                            onChange: (t) => e.set(t.target.checked),
                            className: `size-4 accent-brand rounded`,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex gap-2 pt-2`,
                  children: [
                    (0, Q.jsx)(`button`, {
                      onClick: () => I(null),
                      className: `flex-1 rounded-2xl bg-muted py-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80`,
                      children: P(`cancel`),
                    }),
                    (0, Q.jsx)(`button`, {
                      onClick: Zn,
                      className: `flex-1 rounded-2xl bg-destructive py-3 text-xs font-semibold text-destructive-foreground shadow-sm hover:opacity-90`,
                      children: P(`clearDataNow`),
                    }),
                  ],
                }),
              ],
            }),
          F === `payments` &&
            (0, Q.jsxs)(`div`, {
              className: `space-y-4 pb-8`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `rounded-2xl bg-card p-4 border border-border/80 shadow-2xs`,
                  children: (0, Q.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`h3`, {
                            className: `font-semibold text-sm text-foreground`,
                            children:
                              k === `es`
                                ? `Métodos de pago y tarjetas`
                                : `Payment Methods & Cards`,
                          }),
                          (0, Q.jsx)(`p`, {
                            className: `text-xs text-muted-foreground mt-0.5`,
                            children:
                              k === `es`
                                ? `Guarde tarjetas de débito o crédito para compras rápidas online al estilo Google Pay`
                                : `Save debit or credit cards for fast online checkout like Google Pay`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`button`, {
                        onClick: Vt,
                        className: `flex items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-xs font-semibold text-brand-foreground shadow-xs hover:opacity-90 transition-opacity`,
                        children: [
                          (0, Q.jsx)(Me, { className: `size-4` }),
                          (0, Q.jsx)(`span`, {
                            children:
                              k === `es` ? `Añadir tarjeta` : `Add Card`,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-2xs`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`h4`, {
                          className: `font-semibold text-sm`,
                          children:
                            k === `es`
                              ? `Rellenar métodos de pago automáticamente`
                              : `Autofill payment methods`,
                        }),
                        (0, Q.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children:
                            k === `es`
                              ? `Permitir que WebNa rellene tarjetas guardadas en formularios de pago online`
                              : `Allow WebNa to fill in saved cards on online checkout forms`,
                        }),
                      ],
                    }),
                    (0, Q.jsx)(`button`, {
                      type: `button`,
                      role: `switch`,
                      "aria-checked": Ct,
                      onClick: () => {
                        let e = !Ct;
                        (wt(e),
                          localStorage.setItem(
                            `webna-autofill-cards`,
                            String(e),
                          ),
                          i.success(
                            e
                              ? `Autofill payments enabled`
                              : `Autofill payments disabled`,
                          ));
                      },
                      className: `relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${Ct ? `bg-brand` : `bg-muted`}`,
                      children: (0, Q.jsx)(`span`, {
                        className: `pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${Ct ? `translate-x-5` : `translate-x-0`}`,
                      }),
                    }),
                  ],
                }),
                (0, Q.jsxs)(`div`, {
                  className: `space-y-3`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between px-1`,
                      children: [
                        (0, Q.jsxs)(`p`, {
                          className: `text-xs font-semibold uppercase tracking-wider text-muted-foreground`,
                          children: [
                            k === `es` ? `Tarjetas guardadas` : `Saved Cards`,
                            ` (`,
                            xt.length,
                            `)`,
                          ],
                        }),
                        (0, Q.jsx)(`span`, {
                          className: `text-[11px] text-muted-foreground`,
                          children:
                            k === `es`
                              ? `Encriptado local seguro`
                              : `Secure Local Encryption`,
                        }),
                      ],
                    }),
                    xt.length === 0
                      ? (0, Q.jsxs)(`div`, {
                          className: `rounded-2xl border border-dashed border-border/80 bg-card/50 p-8 text-center`,
                          children: [
                            (0, Q.jsx)(se, {
                              className: `size-8 mx-auto text-muted-foreground/50 mb-2`,
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-sm font-medium text-foreground`,
                              children:
                                k === `es`
                                  ? `No hay tarjetas guardadas`
                                  : `No payment cards saved`,
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-xs text-muted-foreground mt-1 mb-4`,
                              children:
                                k === `es`
                                  ? `Añada una tarjeta para compras rápidas en la web.`
                                  : `Add a card for fast and secure web checkouts.`,
                            }),
                            (0, Q.jsxs)(`button`, {
                              onClick: Vt,
                              className: `inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground`,
                              children: [
                                (0, Q.jsx)(Me, { className: `size-4` }),
                                (0, Q.jsx)(`span`, {
                                  children:
                                    k === `es`
                                      ? `Añadir primera tarjeta`
                                      : `Add first card`,
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, Q.jsx)(`div`, {
                          className: `space-y-3`,
                          children: xt.map((e) =>
                            (0, Q.jsxs)(
                              `div`,
                              {
                                onClick: () => Ht(e),
                                className: `rounded-2xl border border-border/80 bg-card p-4 shadow-2xs relative overflow-hidden group cursor-pointer hover:border-brand/50 transition-all`,
                                children: [
                                  e.isDefault &&
                                    (0, Q.jsx)(`div`, {
                                      className: `absolute top-0 right-0 bg-brand text-brand-foreground text-[10px] font-bold px-3 py-0.5 rounded-bl-xl`,
                                      children:
                                        k === `es`
                                          ? `Predeterminada`
                                          : `Default`,
                                    }),
                                  (0, Q.jsx)(`div`, {
                                    className: `flex items-start justify-between`,
                                    children: (0, Q.jsxs)(`div`, {
                                      className: `flex items-center gap-3`,
                                      children: [
                                        (0, Q.jsx)(`div`, {
                                          className: `flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand font-bold text-xs`,
                                          children:
                                            e.cardBrand === `Visa`
                                              ? `VISA`
                                              : e.cardBrand === `Mastercard`
                                                ? `MC`
                                                : e.cardBrand ===
                                                    `American Express`
                                                  ? `AMEX`
                                                  : `CARD`,
                                        }),
                                        (0, Q.jsxs)(`div`, {
                                          children: [
                                            (0, Q.jsx)(`h4`, {
                                              className: `font-semibold text-sm font-mono tracking-wider`,
                                              children: e.cardNumber,
                                            }),
                                            (0, Q.jsxs)(`p`, {
                                              className: `text-xs text-muted-foreground mt-0.5`,
                                              children: [
                                                e.cardHolder,
                                                ` • Exp `,
                                                e.expiryMonth,
                                                `/`,
                                                e.expiryYear,
                                              ],
                                            }),
                                            (0, Q.jsx)(`p`, {
                                              className: `text-[11px] text-muted-foreground/70 mt-0.5`,
                                              children: e.billingAddress,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, Q.jsxs)(`div`, {
                                    className: `flex items-center justify-between mt-4 pt-3 border-t border-border/60`,
                                    children: [
                                      (0, Q.jsxs)(`div`, {
                                        className: `flex items-center gap-3`,
                                        children: [
                                          !e.isDefault &&
                                            (0, Q.jsx)(`button`, {
                                              onClick: (t) => {
                                                (t.stopPropagation(), Gt(e.id));
                                              },
                                              className: `text-xs font-medium text-brand hover:underline`,
                                              children:
                                                k === `es`
                                                  ? `Hacer predeterminada`
                                                  : `Set as default`,
                                            }),
                                          (0, Q.jsx)(`span`, {
                                            className: `text-xs font-medium text-muted-foreground hover:text-brand`,
                                            children:
                                              k === `es` ? `Editar` : `Edit`,
                                          }),
                                        ],
                                      }),
                                      (0, Q.jsx)(`div`, {
                                        className: `flex items-center gap-1`,
                                        children: (0, Q.jsxs)(`button`, {
                                          onClick: (t) => {
                                            (t.stopPropagation(), Wt(e.id));
                                          },
                                          className: `flex items-center gap-1 text-xs text-destructive hover:underline p-1.5`,
                                          children: [
                                            (0, Q.jsx)(J, {
                                              className: `size-3.5`,
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              children:
                                                k === `es`
                                                  ? `Eliminar`
                                                  : `Remove`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          Tt &&
            (0, Q.jsx)(`div`, {
              className: `fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4`,
              children: (0, Q.jsxs)(`div`, {
                className: `w-full max-w-md rounded-3xl bg-card border border-border p-6 shadow-2xl space-y-4`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, Q.jsx)(`h3`, {
                        className: `font-bold text-base text-foreground`,
                        children: Dt
                          ? k === `es`
                            ? `Editar tarjeta de pago`
                            : `Edit Payment Card`
                          : k === `es`
                            ? `Añadir tarjeta de pago`
                            : `Add Payment Card`,
                      }),
                      (0, Q.jsx)(`button`, {
                        onClick: () => Et(!1),
                        className: `size-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground`,
                        children: (0, Q.jsx)(X, { className: `size-4` }),
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`label`, {
                            className: `text-xs font-medium text-muted-foreground block mb-1`,
                            children:
                              k === `es` ? `Número de tarjeta` : `Card Number`,
                          }),
                          (0, Q.jsx)(`input`, {
                            type: `text`,
                            placeholder: `4532 0000 0000 0000`,
                            value: kt,
                            onChange: (e) => At(e.target.value),
                            className: `w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`label`, {
                            className: `text-xs font-medium text-muted-foreground block mb-1`,
                            children:
                              k === `es`
                                ? `Nombre del titular`
                                : `Cardholder Name`,
                          }),
                          (0, Q.jsx)(`input`, {
                            type: `text`,
                            placeholder: `Alex Morgan`,
                            value: jt,
                            onChange: (e) => Mt(e.target.value),
                            className: `w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `grid grid-cols-3 gap-2`,
                        children: [
                          (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsx)(`label`, {
                                className: `text-xs font-medium text-muted-foreground block mb-1`,
                                children: k === `es` ? `Mes` : `Exp Month`,
                              }),
                              (0, Q.jsx)(`select`, {
                                value: Nt,
                                onChange: (e) => Pt(e.target.value),
                                className: `w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand`,
                                children: Array.from({ length: 12 }, (e, t) => {
                                  let n = String(t + 1).padStart(2, `0`);
                                  return (0, Q.jsx)(
                                    `option`,
                                    { value: n, children: n },
                                    n,
                                  );
                                }),
                              }),
                            ],
                          }),
                          (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsx)(`label`, {
                                className: `text-xs font-medium text-muted-foreground block mb-1`,
                                children: k === `es` ? `Año` : `Exp Year`,
                              }),
                              (0, Q.jsx)(`select`, {
                                value: Ft,
                                onChange: (e) => It(e.target.value),
                                className: `w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand`,
                                children: [
                                  `26`,
                                  `27`,
                                  `28`,
                                  `29`,
                                  `30`,
                                  `31`,
                                  `32`,
                                  `33`,
                                ].map((e) =>
                                  (0, Q.jsxs)(
                                    `option`,
                                    { value: e, children: [`20`, e] },
                                    e,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, Q.jsxs)(`div`, {
                            children: [
                              (0, Q.jsx)(`label`, {
                                className: `text-xs font-medium text-muted-foreground block mb-1`,
                                children: `CVV / CVC`,
                              }),
                              (0, Q.jsx)(`input`, {
                                type: `password`,
                                maxLength: 4,
                                placeholder: `123`,
                                value: Lt,
                                onChange: (e) => Rt(e.target.value),
                                className: `w-full rounded-xl border bg-background p-3 text-sm font-mono outline-none focus:border-brand`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        children: [
                          (0, Q.jsx)(`label`, {
                            className: `text-xs font-medium text-muted-foreground block mb-1`,
                            children:
                              k === `es`
                                ? `Dirección de facturación`
                                : `Billing Address`,
                          }),
                          (0, Q.jsx)(`input`, {
                            type: `text`,
                            placeholder: `123 Main St, City, Country`,
                            value: zt,
                            onChange: (e) => Bt(e.target.value),
                            className: `w-full rounded-xl border bg-background p-3 text-sm outline-none focus:border-brand`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex gap-2 pt-2`,
                    children: [
                      (0, Q.jsx)(`button`, {
                        onClick: () => Et(!1),
                        className: `flex-1 rounded-xl bg-muted p-3 text-xs font-semibold text-muted-foreground hover:bg-muted/80 transition-colors`,
                        children: k === `es` ? `Cancelar` : `Cancel`,
                      }),
                      (0, Q.jsx)(`button`, {
                        onClick: Ut,
                        className: `flex-1 rounded-xl bg-brand p-3 text-xs font-semibold text-brand-foreground hover:opacity-90 transition-opacity`,
                        children: Dt
                          ? k === `es`
                            ? `Actualizar tarjeta`
                            : `Update Card`
                          : k === `es`
                            ? `Guardar tarjeta`
                            : `Save Card`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}
var Zt = (e) => {
  try {
    return new URL(e).hostname.replace(`www.`, ``);
  } catch {
    return e;
  }
};
function Qt({
  tabs: e,
  activeTabId: t,
  onSelectTab: n,
  onCloseTab: r,
  onNewTab: i,
  onCloseAll: a,
}) {
  let { lang: o } = Z();
  return (0, Q.jsxs)(`div`, {
    className: `h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col bg-background px-4 py-3 overflow-y-auto`,
    children: [
      (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between mb-4 pb-3 border-b border-border/80`,
        children: [
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `flex size-8 items-center justify-center rounded-xl bg-brand/10 text-brand`,
                children: (0, Q.jsx)(ye, { className: `size-4` }),
              }),
              (0, Q.jsxs)(`div`, {
                children: [
                  (0, Q.jsx)(`h2`, {
                    className: `font-bold text-base text-foreground`,
                    children:
                      o === `es` ? `Pestañas del navegador` : `Browser Tabs`,
                  }),
                  (0, Q.jsxs)(`p`, {
                    className: `text-xs text-muted-foreground`,
                    children: [
                      e.length,
                      ` `,
                      o === `es` ? `pestañas abiertas` : `open tabs`,
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, Q.jsxs)(`button`, {
                onClick: i,
                className: `flex items-center gap-1 px-3 py-1.5 rounded-xl bg-brand text-brand-foreground text-xs font-semibold shadow-xs hover:opacity-90 transition-opacity`,
                children: [
                  (0, Q.jsx)(Me, { className: `size-3.5` }),
                  (0, Q.jsx)(`span`, {
                    children: o === `es` ? `Nueva` : `New Tab`,
                  }),
                ],
              }),
              e.length > 0 &&
                (0, Q.jsx)(`button`, {
                  onClick: a,
                  title: o === `es` ? `Cerrar todas` : `Close all`,
                  className: `flex items-center justify-center size-8 rounded-xl bg-muted text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors`,
                  children: (0, Q.jsx)(J, { className: `size-4` }),
                }),
            ],
          }),
        ],
      }),
      e.length === 0
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center flex-1 py-16 text-center`,
            children: [
              (0, Q.jsx)(`div`, {
                className: `flex size-16 items-center justify-center rounded-full bg-muted/60 text-muted-foreground mb-3`,
                children: (0, Q.jsx)(ye, { className: `size-8` }),
              }),
              (0, Q.jsx)(`p`, {
                className: `font-semibold text-sm text-foreground`,
                children:
                  o === `es` ? `No hay pestañas abiertas` : `No open tabs`,
              }),
              (0, Q.jsx)(`p`, {
                className: `text-xs text-muted-foreground mt-1 mb-4`,
                children:
                  o === `es`
                    ? `Abre una nueva pestaña para empezar a navegar.`
                    : `Open a new tab to start browsing the web.`,
              }),
              (0, Q.jsxs)(`button`, {
                onClick: i,
                className: `flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand text-brand-foreground text-xs font-semibold`,
                children: [
                  (0, Q.jsx)(Me, { className: `size-4` }),
                  (0, Q.jsx)(`span`, {
                    children: o === `es` ? `Abrir pestaña` : `Open Tab`,
                  }),
                ],
              }),
            ],
          })
        : (0, Q.jsx)(`div`, {
            className: `grid grid-cols-2 gap-3 pb-24`,
            children: e.map((e) => {
              let i = e.id === t;
              return (0, Q.jsxs)(
                `div`,
                {
                  onClick: () => n(e.id),
                  className: `group relative flex flex-col rounded-2xl border bg-card overflow-hidden shadow-xs cursor-pointer transition-all ${i ? `border-brand ring-2 ring-brand/30 shadow-md` : `border-border/80 hover:border-brand/40`}`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-center justify-between bg-muted/60 px-3 py-2 border-b border-border/60`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-2 min-w-0`,
                          children: [
                            (0, Q.jsx)(`img`, {
                              src: `https://www.google.com/s2/favicons?domain=${Zt(e.url)}&sz=32`,
                              alt: ``,
                              className: `size-4 rounded-xs shrink-0`,
                              onError: (e) => {
                                e.target.style.display = `none`;
                              },
                            }),
                            (0, Q.jsx)(`span`, {
                              className: `font-medium text-[11px] text-foreground truncate`,
                              children: e.title || Zt(e.url) || `New Tab`,
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`button`, {
                          onClick: (t) => {
                            (t.stopPropagation(), r(e.id));
                          },
                          title: o === `es` ? `Cerrar pestaña` : `Close tab`,
                          className: `flex size-5 items-center justify-center rounded-full bg-background/80 text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors`,
                          children: (0, Q.jsx)(X, { className: `size-3` }),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `h-28 bg-background/50 p-3 flex flex-col justify-between relative overflow-hidden`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `absolute inset-0 opacity-10 bg-gradient-to-br from-brand to-transparent pointer-events-none`,
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `space-y-1 z-10`,
                          children: [
                            (0, Q.jsx)(`p`, {
                              className: `text-xs font-semibold text-foreground line-clamp-2`,
                              children: e.title || `WebNa Browser Page`,
                            }),
                            (0, Q.jsx)(`p`, {
                              className: `text-[10px] text-muted-foreground truncate font-mono`,
                              children: e.url,
                            }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          className: `flex items-center justify-between z-10 pt-2 border-t border-border/40`,
                          children: [
                            (0, Q.jsx)(`span`, {
                              className: `text-[10px] text-brand font-medium`,
                              children: Zt(e.url),
                            }),
                            i &&
                              (0, Q.jsx)(`span`, {
                                className: `text-[9px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full`,
                                children: o === `es` ? `Activa` : `Active`,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
    ],
  });
}
var $t = (e) => {
    try {
      return new URL(e).hostname.replace(`www.`, ``);
    } catch {
      return e;
    }
  },
  en = [
    { t: `Google`, u: `https://www.google.com/?igu=1` },
    { t: `Wikipedia`, u: `https://en.wikipedia.org` },
    {
      t: `OpenStreetMap`,
      u: `https://www.openstreetmap.org/export/embed.html`,
    },
    { t: `Hacker News`, u: `https://news.ycombinator.com` },
    { t: `Archive`, u: `https://archive.org` },
    { t: `MDN`, u: `https://developer.mozilla.org` },
    { t: `Bing`, u: `https://www.bing.com` },
    { t: `DuckDuckGo`, u: `https://html.duckduckgo.com/html/` },
  ];
function tn(e, t) {
  let [n, r] = (0, T.useState)(t);
  return (
    (0, T.useEffect)(() => {
      let t = localStorage.getItem(e);
      t && r(JSON.parse(t));
    }, [e]),
    [
      n,
      (t) => {
        (r(t), localStorage.setItem(e, JSON.stringify(t)));
      },
    ]
  );
}
var nn = {
  Google: `https://www.google.com/search?igu=1&q=`,
  Bing: `https://www.bing.com/search?q=`,
  DuckDuckGo: `https://html.duckduckgo.com/html/?q=`,
  Brave: `https://search.brave.com/search?q=`,
  Ecosia: `https://www.ecosia.org/search?q=`,
  Yahoo: `https://search.yahoo.com/search?p=`,
  Startpage: `https://www.startpage.com/do/search?query=`,
  Yandex: `https://yandex.com/search/?text=`,
  Kagi: `https://kagi.com/search?q=`,
  Baidu: `https://www.baidu.com/s?wd=`,
  Sogou: `https://www.sogou.com/web?query=`,
};
function rn(e) {
  try {
    let t = new URL(e);
    return t.hostname.includes(`google.`) && !t.searchParams.has(`igu`)
      ? (t.searchParams.set(`igu`, `1`), t.toString())
      : e;
  } catch {
    return e.includes(`google.`) && !e.includes(`igu=1`)
      ? `${e}${e.includes(`?`) ? `&` : `?`}igu=1`
      : e;
  }
}
function an(e) {
  let t = {
    Google: `google.com`,
    Bing: `bing.com`,
    DuckDuckGo: `duckduckgo.com`,
    Brave: `brave.com`,
    Ecosia: `ecosia.org`,
    Yahoo: `yahoo.com`,
    Startpage: `startpage.com`,
    Yandex: `yandex.com`,
    Kagi: `kagi.com`,
    Baidu: `baidu.com`,
    Sogou: `sogou.com`,
    Gemini: `gemini.google.com`,
    ChatGPT: `chatgpt.com`,
    Perplexity: `perplexity.ai`,
    Claude: `claude.ai`,
    Copilot: `copilot.microsoft.com`,
    DeepSeek: `deepseek.com`,
    Grok: `x.ai`,
    Poe: `poe.com`,
    Phind: `phind.com`,
    "You.com": `you.com`,
    "Meta AI": `meta.ai`,
    Mistral: `mistral.ai`,
    HuggingChat: `huggingface.co`,
    "Pi AI": `pi.ai`,
  };
  return t[e]
    ? t[e]
    : c[e]
      ? c[e].domain
      : `${e.toLowerCase().replace(/[^a-z0-9]/g, ``)}.com`;
}
function on() {
  let [e, t] = tn(`webna-tab`, `home`),
    [n, r] = tn(`webna-engines`, nn);
  (0, T.useEffect)(() => {
    if (n) {
      let e = !1,
        t = { ...n };
      (t.Google &&
        !t.Google.includes(`igu=1`) &&
        ((t.Google = `https://www.google.com/search?igu=1&q=`), (e = !0)),
        t.ChatGPT && (delete t.ChatGPT, (e = !0)),
        e && r(t));
    }
  }, [n, r]);
  let i = {
      Social: [
        { t: `YouTube`, u: `https://youtube.com` },
        { t: `Reddit`, u: `https://reddit.com` },
        { t: `Twitter / X`, u: `https://x.com` },
        { t: `Instagram`, u: `https://instagram.com` },
      ],
      Media: [
        { t: `Netflix`, u: `https://netflix.com` },
        { t: `Spotify`, u: `https://spotify.com` },
        { t: `Twitch`, u: `https://twitch.tv` },
        { t: `SoundCloud`, u: `https://soundcloud.com` },
      ],
      News: [
        { t: `BBC News`, u: `https://bbc.com` },
        { t: `CNN`, u: `https://cnn.com` },
        { t: `Reuters`, u: `https://reuters.com` },
      ],
    },
    { t: a } = Z(),
    [o, s] = tn(`webna-engine`, `Google`),
    [l, u] = tn(`webna-categories-data`, i),
    [d, f] = (0, T.useState)(!1),
    [p, m] = (0, T.useState)(``),
    [h, g] = (0, T.useState)(null),
    _ = (0, T.useMemo)(() => {
      if (!l || typeof l != `object`) return i;
      if (Array.isArray(l)) {
        let e = {};
        return (
          l.forEach((t) => {
            typeof t == `string` && (e[t] = []);
          }),
          Object.keys(e).length > 0 ? e : i
        );
      }
      return Object.keys(l).length > 0 ? l : i;
    }, [l]);
  ((0, T.useEffect)(() => {
    let e = Object.keys(_);
    h && !_[h] && e.length > 0 && g(null);
  }, [_, h]),
    (0, T.useEffect)(() => {
      let e = localStorage.getItem(`webna-theme`);
      e === `dark`
        ? document.documentElement.classList.add(`dark`)
        : e === `light`
          ? document.documentElement.classList.remove(`dark`)
          : window.matchMedia(`(prefers-color-scheme: dark)`).matches &&
            document.documentElement.classList.add(`dark`);
    }, []));
  let [v, ee] = (0, T.useState)(null),
    [y, b] = (0, T.useState)(``),
    [te, x] = (0, T.useState)(``),
    [S, C] = tn(`webna-bm`, []),
    [w, ne] = tn(`webna-saved-links`, []),
    [re, E] = tn(`webna-hist`, []),
    [D, O] = (0, T.useState)([]);
  (0, T.useEffect)(() => {
    let e = localStorage.getItem(`webna-browser-tabs`);
    if (e)
      try {
        O(JSON.parse(e));
      } catch {}
    else
      O([
        {
          id: `tab-1`,
          url: `https://www.google.com/?igu=1`,
          title: `Google Search`,
          active: !0,
        },
      ]);
  }, []);
  let [k, A] = (0, T.useState)(`tab-1`);
  (0, T.useEffect)(() => {
    let e = D.find((e) => e.active);
    e && A(e.id);
  }, [D]);
  let [M, N] = (0, T.useState)([]),
    [ae, oe] = (0, T.useState)(-1),
    [P, F] = (0, T.useState)(!1),
    [I, L] = (0, T.useState)(null),
    [se, ce] = tn(`webna-block-ads`, !0),
    [R, le] = tn(`webna-block-popups`, !0),
    [ue, de] = tn(`webna-block-trackers`, !0),
    [fe, pe] = tn(`webna-block-cookies`, !1),
    [z, he] = tn(`webna-block-location`, !0),
    [ge, V] = tn(`webna-block-mic`, !0),
    [_e, ve] = tn(`webna-block-camera`, !0),
    [ye, be] = tn(`webna-block-notifications`, !0),
    [xe, Se] = tn(`webna-block-autoplay`, !0),
    [Ce, we] = tn(`webna-block-js`, !1),
    [U, Te] = (0, T.useState)(`audio`),
    [Ee, De] = (0, T.useState)(null),
    W = ae >= 0,
    ke = M[ae] ?? ``,
    Ae = (e) => {
      let t = e;
      (ut() && (t = lt(t)),
        typeof window < `u` &&
          localStorage.getItem(`webna-https-only`) !== `false` &&
          t.startsWith(`http://`) &&
          !t.includes(`localhost`) &&
          (t = t.replace(`http://`, `https://`)));
      let n = rn(t),
        r = [...M.slice(0, ae + 1), n];
      (N(r),
        oe(r.length - 1),
        L(null),
        E([{ url: n, title: $t(n), at: Date.now() }, ...re].slice(0, 300)));
    },
    je = (e) => {
      let t = e.trim();
      if (!t) return;
      if (/^https?:\/\//i.test(t)) return Ae(t);
      if (/^[^\s]+\.[a-z]{2,}(\/.*)?$/i.test(t)) return Ae(`https://` + t);
      if (c[o]) {
        let e = c[o];
        return e.url.includes(`?q=`) || e.url.includes(`search?q=`)
          ? Ae(e.url + encodeURIComponent(t))
          : Ae(e.url);
      }
      if (o === `Google`)
        return Ae(
          `https://www.google.com/search?igu=1&q=${encodeURIComponent(t)}`,
        );
      let r =
        n?.[o] ||
        nn[o] ||
        nn.Google ||
        `https://www.google.com/search?igu=1&q=`;
      Ae(r + encodeURIComponent(t));
    },
    G = () => {
      (oe(-1), N([]));
    },
    Me = S.some((e) => e.url === ke);
  return (0, Q.jsxs)(`div`, {
    className: `min-h-[100dvh] bg-background`,
    children: [
      W
        ? (0, Q.jsx)(`div`, {
            className: `fixed inset-0 flex flex-col`,
            children: (0, Q.jsx)(pt, {
              stack: M,
              idx: ae,
              onNav: je,
              onMove: (e) => oe(Math.min(M.length - 1, Math.max(0, ae + e))),
              onHome: G,
              isSaved: Me,
              onToggleSave: () =>
                C(
                  Me
                    ? S.filter((e) => e.url !== ke)
                    : [{ url: ke, title: $t(ke), at: Date.now() }, ...S],
                ),
              onOpenPanel: L,
              onOpenPlayer: (e) => {
                (Te(e), t(`player`), G());
              },
            }),
          })
        : (0, Q.jsxs)(`div`, {
            className: `mx-auto max-w-xl px-4 pb-28`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `sticky top-0 z-30 -mx-4 bg-background px-4 pb-3 pt-4`,
                children: [
                  e === `home` &&
                    (0, Q.jsxs)(`div`, {
                      className: `relative mb-3 flex items-center justify-center`,
                      children: [
                        (0, Q.jsx)(`h1`, {
                          className: `text-2xl font-bold tracking-tight text-brand`,
                          children: `WebNa`,
                        }),
                        (0, Q.jsx)(`button`, {
                          onClick: () => F(!0),
                          className: `absolute right-0 p-2 text-muted-foreground`,
                          "aria-label": `Settings`,
                          children: (0, Q.jsx)(`div`, {
                            className: `size-6 rounded-full bg-card flex items-center justify-center`,
                            children: `⚙️`,
                          }),
                        }),
                      ],
                    }),
                  e === `player`
                    ? (0, Q.jsx)(`div`, {
                        className: `flex items-center justify-center py-1`,
                        children: (0, Q.jsxs)(`div`, {
                          className: `flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner`,
                          children: [
                            (0, Q.jsxs)(`button`, {
                              onClick: () => Te(`audio`),
                              className: `flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${U === `audio` ? `bg-white dark:bg-background text-brand shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                              "aria-label": `Switch to Audio Player`,
                              children: [
                                (0, Q.jsx)(Oe, { className: `size-3.5` }),
                                (0, Q.jsx)(`span`, {
                                  children: a(`audioPlayer`),
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`button`, {
                              onClick: () => Te(`video`),
                              className: `flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${U === `video` ? `bg-white dark:bg-background text-brand shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                              "aria-label": `Switch to Video Player`,
                              children: [
                                (0, Q.jsx)(me, { className: `size-3.5` }),
                                (0, Q.jsx)(`span`, {
                                  children: a(`videoPlayer`),
                                }),
                              ],
                            }),
                          ],
                        }),
                      })
                    : (0, Q.jsx)($, {
                        onSubmit: je,
                        onLens: () =>
                          window.open(`https://lens.google.com`, `_blank`),
                        engineName: o,
                        engineDomain: an(o),
                        onEngineClick: () => L(`search`),
                      }),
                ],
              }),
              e === `home`
                ? (0, Q.jsxs)(`div`, {
                    className: `space-y-6`,
                    children: [
                      (0, Q.jsxs)(`section`, {
                        children: [
                          (0, Q.jsx)(`h2`, {
                            className: `mb-3 text-sm font-semibold text-muted-foreground`,
                            children: a(`shortcuts`),
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `grid grid-cols-4 gap-4`,
                            children: en.map((e) =>
                              (0, Q.jsxs)(
                                `button`,
                                {
                                  onClick: () => Ae(e.u),
                                  className: `flex flex-col items-center gap-1`,
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      className: `flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm`,
                                      children: (0, Q.jsx)(`img`, {
                                        src: `https://www.google.com/s2/favicons?domain=${$t(e.u)}&sz=64`,
                                        alt: ``,
                                        className: `size-7`,
                                      }),
                                    }),
                                    (0, Q.jsx)(`span`, {
                                      className: `w-full truncate text-xs`,
                                      children: e.t,
                                    }),
                                  ],
                                },
                                e.u,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `my-3`,
                        children: [
                          (0, Q.jsx)(`h2`, {
                            className: `text-xl font-bold tracking-tight text-foreground`,
                            children: `Site/App Hub`,
                          }),
                          (0, Q.jsx)(`p`, {
                            className: `text-xs text-muted-foreground mt-0.5`,
                            children: `You can keep your favorite sites or apps here for quick access.`,
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`section`, {
                        children: [
                          (0, Q.jsxs)(`div`, {
                            className: `flex items-center justify-between mb-2`,
                            children: [
                              (0, Q.jsx)(`h2`, {
                                className: `text-sm font-semibold text-muted-foreground`,
                                children: a(`categories`),
                              }),
                              (0, Q.jsx)(`button`, {
                                onClick: () => f(!0),
                                className: `text-xs font-medium text-brand hover:underline`,
                                children: a(`addCategory`),
                              }),
                            ],
                          }),
                          d &&
                            (0, Q.jsxs)(`div`, {
                              className: `flex gap-2 mb-3`,
                              children: [
                                (0, Q.jsx)(`input`, {
                                  type: `text`,
                                  placeholder: `Category name`,
                                  value: p,
                                  onChange: (e) => m(e.target.value),
                                  onKeyDown: (e) => {
                                    if (e.key === `Enter` && p.trim()) {
                                      let e = p.trim();
                                      (u({ ..._, [e]: [] }),
                                        g(e),
                                        m(``),
                                        f(!1));
                                    }
                                  },
                                  className: `flex-1 rounded-xl border bg-card p-2 text-sm outline-none focus:border-brand`,
                                  autoFocus: !0,
                                }),
                                (0, Q.jsx)(`button`, {
                                  onClick: () => {
                                    let e = p.trim();
                                    e &&
                                      (u({ ..._, [e]: [] }),
                                      g(e),
                                      m(``),
                                      f(!1));
                                  },
                                  className: `rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-brand-foreground`,
                                  children: `Save`,
                                }),
                                (0, Q.jsx)(`button`, {
                                  onClick: () => {
                                    (m(``), f(!1));
                                  },
                                  className: `rounded-xl bg-muted px-3 py-2 text-xs font-medium text-muted-foreground`,
                                  children: `Cancel`,
                                }),
                              ],
                            }),
                          (0, Q.jsx)(`div`, {
                            className: `no-scrollbar -mx-4 mb-3 flex gap-2 overflow-x-auto px-4 py-1`,
                            children: Object.keys(_).map((e) =>
                              (0, Q.jsx)(
                                `button`,
                                {
                                  onClick: () => g(h === e ? null : e),
                                  className: `shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${h === e ? `bg-brand text-brand-foreground font-semibold shadow-xs` : `text-muted-foreground hover:text-foreground bg-transparent`}`,
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                          h &&
                            (0, Q.jsxs)(`div`, {
                              className: `grid grid-cols-4 gap-4`,
                              children: [
                                (_[h] || []).map((e, t) =>
                                  (0, Q.jsxs)(
                                    `div`,
                                    {
                                      className: `relative group flex flex-col items-center`,
                                      children: [
                                        (0, Q.jsxs)(`button`, {
                                          onClick: () => Ae(e.u),
                                          className: `flex flex-col items-center gap-1 w-full`,
                                          children: [
                                            (0, Q.jsx)(`span`, {
                                              className: `flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-border/40 group-hover:border-brand/40 transition-colors`,
                                              children: (0, Q.jsx)(`img`, {
                                                src: `https://www.google.com/s2/favicons?domain=${$t(e.u)}&sz=64`,
                                                alt: ``,
                                                className: `size-7`,
                                                onError: (e) => {
                                                  e.target.style.display = `none`;
                                                },
                                              }),
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              className: `w-full truncate text-xs text-center`,
                                              children: e.t,
                                            }),
                                          ],
                                        }),
                                        (0, Q.jsx)(`button`, {
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            let n = (_[h] || []).filter(
                                              (e, n) => n !== t,
                                            );
                                            u({ ..._, [h]: n });
                                          },
                                          title: `Remove shortcut`,
                                          className: `absolute -top-1 -right-1 hidden group-hover:flex size-5 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground text-[10px]`,
                                          children: `✕`,
                                        }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                                (0, Q.jsxs)(`button`, {
                                  onClick: () => {
                                    (ee(h), b(``), x(``));
                                  },
                                  className: `flex flex-col items-center gap-1 group`,
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      className: `flex size-14 items-center justify-center rounded-2xl bg-card shadow-sm border border-dashed border-border group-hover:border-brand text-2xl text-muted-foreground transition-colors`,
                                      children: `+`,
                                    }),
                                    (0, Q.jsx)(`span`, {
                                      className: `w-full truncate text-xs text-center font-medium`,
                                      children: `Add shortcut`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  })
                : e === `discover`
                  ? (0, Q.jsx)(Dt, { onOpen: De })
                  : e === `player`
                    ? (0, Q.jsx)(`div`, {
                        className: `h-[calc(100dvh-130px)] -mx-4 -mb-28 flex flex-col`,
                        children: (0, Q.jsx)(Ut, {
                          playerMode: U,
                          onPlayerModeChange: Te,
                        }),
                      })
                    : null,
            ],
          }),
      Ee &&
        !W &&
        (0, Q.jsx)(kt, {
          link: Ee,
          onBack: () => De(null),
          onOpenWeb: Ae,
          isSaved: w.some((e) => e.url === Ee),
          onToggleSave: (e, t) => {
            w.some((t) => t.url === e)
              ? ne(w.filter((t) => t.url !== e))
              : ne([{ url: e, title: t, at: Date.now() }, ...w]);
          },
        }),
      (0, Q.jsx)(st, {
        active: e,
        tabCount: D.length,
        onChange: (e) => {
          (t(e), G(), De(null), L(e === `tabs` ? `tabs` : null));
        },
      }),
      I === `tabs`
        ? (0, Q.jsx)(Qt, {
            tabs: D,
            activeTabId: k,
            onSelectTab: (e) => {
              (A(e), t(`home`), L(null));
            },
            onCloseTab: (e) => {
              let t = D.filter((t) => t.id !== e);
              (O(t),
                localStorage.setItem(`webna-browser-tabs`, JSON.stringify(t)),
                k === e && t.length > 0 && A(t[0].id));
            },
            onNewTab: () => {
              let e = {
                  id: `tab-${Date.now()}`,
                  url: `https://www.google.com/?igu=1`,
                  title: `New Tab`,
                  active: !0,
                },
                n = [...D.map((e) => ({ ...e, active: !1 })), e];
              (O(n),
                A(e.id),
                localStorage.setItem(`webna-browser-tabs`, JSON.stringify(n)),
                t(`home`),
                L(null));
            },
            onCloseAll: () => {
              (O([]),
                localStorage.removeItem(`webna-browser-tabs`),
                t(`home`),
                L(null));
            },
          })
        : I &&
          (0, Q.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex flex-col bg-background`,
            children:
              I === `settings` || I === `blockings`
                ? (0, Q.jsx)(Xt, {
                    onClose: () => L(null),
                    initialSubView: I === `blockings` ? `blockings` : null,
                    bookmarks: S,
                    setBookmarks: C,
                    history: re,
                    setHistory: E,
                    savedLinks: w,
                    setSavedLinks: ne,
                    categories: _,
                    setCategories: u,
                    blockAds: se,
                    setBlockAds: ce,
                    blockPopups: R,
                    setBlockPopups: le,
                    blockTrackers: ue,
                    setBlockTrackers: de,
                    blockCookies: fe,
                    setBlockCookies: pe,
                    blockLocation: z,
                    setBlockLocation: he,
                    blockMic: ge,
                    setBlockMic: V,
                    blockCamera: _e,
                    setBlockCamera: ve,
                    blockNotifications: ye,
                    setBlockNotifications: be,
                    blockAutoplay: xe,
                    setBlockAutoplay: Se,
                    blockJs: Ce,
                    setBlockJs: we,
                  })
                : (0, Q.jsxs)(Q.Fragment, {
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex items-center justify-between border-b p-3 sm:p-4`,
                        children: [
                          I === `player`
                            ? (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-1.5 bg-[#f1ebe3] dark:bg-muted p-1 rounded-2xl border border-[#e8e2d9] shadow-inner`,
                                children: [
                                  (0, Q.jsxs)(`button`, {
                                    onClick: () => Te(`audio`),
                                    className: `flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${U === `audio` ? `bg-white dark:bg-background text-brand shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                                    "aria-label": `Switch to Audio Player`,
                                    children: [
                                      (0, Q.jsx)(Oe, { className: `size-3.5` }),
                                      (0, Q.jsx)(`span`, {
                                        children: a(`audioPlayer`),
                                      }),
                                    ],
                                  }),
                                  (0, Q.jsxs)(`button`, {
                                    onClick: () => Te(`video`),
                                    className: `flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${U === `video` ? `bg-white dark:bg-background text-brand shadow-sm` : `text-muted-foreground hover:text-foreground`}`,
                                    "aria-label": `Switch to Video Player`,
                                    children: [
                                      (0, Q.jsx)(me, { className: `size-3.5` }),
                                      (0, Q.jsx)(`span`, {
                                        children: a(`videoPlayer`),
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, Q.jsx)(`h2`, {
                                className: `text-lg font-semibold`,
                                children: {
                                  bookmarks: a(`bookmarks`),
                                  "saved-links": a(`savedLinks`),
                                  history: a(`history`),
                                  settings: a(`settings`),
                                  player: a(`player`),
                                  account: `Account`,
                                  search: a(`searchEngines`),
                                  "search-add": a(`add`),
                                }[I],
                              }),
                          (0, Q.jsx)(`button`, {
                            onClick: () => L(null),
                            "aria-label": `Close`,
                            children: (0, Q.jsx)(X, { className: `size-5` }),
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex-1 flex flex-col min-h-0 ${I === `player` ? `p-0 overflow-hidden` : `p-4 overflow-y-auto`}`,
                        children: [
                          I === `player` &&
                            (0, Q.jsx)(Ut, {
                              playerMode: U,
                              onPlayerModeChange: Te,
                            }),
                          I === `search` &&
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-6 pb-6`,
                              children: [
                                (0, Q.jsxs)(`section`, {
                                  children: [
                                    (0, Q.jsxs)(`div`, {
                                      className: `mb-3 flex items-center justify-between`,
                                      children: [
                                        (0, Q.jsxs)(`h3`, {
                                          className: `text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5`,
                                          children: [
                                            (0, Q.jsx)(B, {
                                              className: `size-3.5 text-brand`,
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              children: `Search engines`,
                                            }),
                                          ],
                                        }),
                                        (0, Q.jsxs)(`span`, {
                                          className: `text-[11px] text-muted-foreground`,
                                          children: [
                                            `Active:`,
                                            ` `,
                                            (0, Q.jsx)(`strong`, {
                                              className: `text-brand font-semibold`,
                                              children: o,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsxs)(`div`, {
                                      className: `grid grid-cols-3 gap-2.5 sm:gap-3`,
                                      children: [
                                        Object.entries(n)
                                          .filter(([e]) => e !== `ChatGPT`)
                                          .map(([e]) => {
                                            let t = o === e,
                                              n = an(e);
                                            return (0, Q.jsxs)(
                                              `button`,
                                              {
                                                type: `button`,
                                                onClick: () => {
                                                  (s(e), L(null));
                                                },
                                                className: `group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${t ? `border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand` : `border-border/60 hover:border-border`}`,
                                                "aria-label": `Select ${e} search engine`,
                                                children: [
                                                  t &&
                                                    (0, Q.jsx)(`span`, {
                                                      className: `absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs`,
                                                      children: (0, Q.jsx)(ie, {
                                                        className: `size-2.5 stroke-[3]`,
                                                      }),
                                                    }),
                                                  (0, Q.jsx)(`div`, {
                                                    className: `flex size-7 items-center justify-center rounded-full`,
                                                    children:
                                                      e === `Google`
                                                        ? (0, Q.jsx)(`span`, {
                                                            className: `text-xl font-bold leading-none`,
                                                            style: {
                                                              background: `var(--gradient-google)`,
                                                              WebkitBackgroundClip: `text`,
                                                              color: `transparent`,
                                                            },
                                                            children: `G`,
                                                          })
                                                        : (0, Q.jsx)(`img`, {
                                                            src: `https://www.google.com/s2/favicons?domain=${n}&sz=64`,
                                                            alt: e,
                                                            className: `size-6 object-contain rounded-full`,
                                                            onError: (e) => {
                                                              e.target.style.display = `none`;
                                                            },
                                                          }),
                                                  }),
                                                  (0, Q.jsx)(`span`, {
                                                    className: `text-xs font-medium truncate w-full text-foreground group-hover:text-foreground`,
                                                    children: e,
                                                  }),
                                                ],
                                              },
                                              e,
                                            );
                                          }),
                                        (0, Q.jsxs)(`button`, {
                                          type: `button`,
                                          onClick: () => L(`search-add`),
                                          className: `flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-dashed border-border/80 bg-card/60 p-3 text-center transition-all hover:border-brand hover:bg-card active:scale-95 text-muted-foreground hover:text-foreground`,
                                          children: [
                                            (0, Q.jsx)(`div`, {
                                              className: `flex size-7 items-center justify-center rounded-full bg-muted font-bold text-sm`,
                                              children: `+`,
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              className: `text-xs font-medium truncate w-full`,
                                              children: `Add`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`section`, {
                                  className: `pt-4 border-t border-border/60`,
                                  children: [
                                    (0, Q.jsxs)(`div`, {
                                      className: `mb-3`,
                                      children: [
                                        (0, Q.jsxs)(`h3`, {
                                          className: `text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5`,
                                          children: [
                                            (0, Q.jsx)(Ke, {
                                              className: `size-3.5 text-brand`,
                                            }),
                                            (0, Q.jsx)(`span`, {
                                              children: `AI search & chats`,
                                            }),
                                          ],
                                        }),
                                        (0, Q.jsx)(`p`, {
                                          className: `text-[11px] text-muted-foreground mt-0.5`,
                                          children: `Choose popular AI sites and apps to search or chat with`,
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsx)(`div`, {
                                      className: `grid grid-cols-3 gap-2.5 sm:gap-3`,
                                      children: Object.values(c).map((e) => {
                                        let t = o === e.name;
                                        return (0, Q.jsxs)(
                                          `button`,
                                          {
                                            type: `button`,
                                            onClick: () => {
                                              (s(e.name), L(null));
                                            },
                                            className: `group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border bg-card p-3 text-center transition-all hover:bg-muted/50 active:scale-95 shadow-2xs ${t ? `border-brand ring-1 ring-brand bg-brand/5 shadow-xs font-semibold text-brand` : `border-border/60 hover:border-border`}`,
                                            title: e.desc,
                                            "aria-label": `Select ${e.name}`,
                                            children: [
                                              t &&
                                                (0, Q.jsx)(`span`, {
                                                  className: `absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-2xs`,
                                                  children: (0, Q.jsx)(ie, {
                                                    className: `size-2.5 stroke-[3]`,
                                                  }),
                                                }),
                                              (0, Q.jsx)(`div`, {
                                                className: `flex size-7 items-center justify-center rounded-full`,
                                                children: (0, Q.jsx)(`img`, {
                                                  src: `https://www.google.com/s2/favicons?domain=${e.domain}&sz=64`,
                                                  alt: e.name,
                                                  className: `size-6 object-contain rounded-full`,
                                                  onError: (e) => {
                                                    e.target.style.display = `none`;
                                                  },
                                                }),
                                              }),
                                              (0, Q.jsx)(`span`, {
                                                className: `text-xs font-medium truncate w-full text-foreground group-hover:text-foreground`,
                                                children: e.name,
                                              }),
                                            ],
                                          },
                                          e.name,
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          I === `search-add` &&
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-4`,
                              children: [
                                (0, Q.jsx)(`input`, {
                                  type: `text`,
                                  placeholder: `Engine Name`,
                                  id: `new-engine-name`,
                                  className: `w-full rounded-xl border bg-card p-3`,
                                }),
                                (0, Q.jsx)(`input`, {
                                  type: `text`,
                                  placeholder: `Query URL (e.g. https://example.com/search?q=)`,
                                  id: `new-engine-url`,
                                  className: `w-full rounded-xl border bg-card p-3`,
                                }),
                                (0, Q.jsx)(`button`, {
                                  onClick: () => {
                                    let e =
                                        document.getElementById(
                                          `new-engine-name`,
                                        ).value,
                                      t =
                                        document.getElementById(
                                          `new-engine-url`,
                                        ).value;
                                    e &&
                                      t &&
                                      (r({ ...n, [e]: t }), L(`search`));
                                  },
                                  className: `w-full rounded-xl bg-brand p-3 text-brand-foreground`,
                                  children: `Add Search Engine`,
                                }),
                                (0, Q.jsx)(`button`, {
                                  onClick: () => L(`search`),
                                  className: `w-full rounded-xl bg-card p-3`,
                                  children: `Cancel`,
                                }),
                              ],
                            }),
                          I === `bookmarks` &&
                            (0, Q.jsx)(Gt, {
                              items: S,
                              onGo: Ae,
                              onRemove: (e) => C(S.filter((t) => t !== e)),
                              onAdd: (e) => C([e, ...S]),
                            }),
                          I === `saved-links` &&
                            (0, Q.jsx)(qt, {
                              items: w,
                              onGo: Ae,
                              onRemove: (e) => ne(w.filter((t) => t !== e)),
                              onAdd: (e) => ne([e, ...w]),
                            }),
                          I === `history` &&
                            (0, Q.jsxs)(Q.Fragment, {
                              children: [
                                re.length > 0 &&
                                  (0, Q.jsx)(`button`, {
                                    onClick: () => E([]),
                                    className: `mb-3 text-sm text-destructive`,
                                    children: `Clear history`,
                                  }),
                                (0, Q.jsx)(sn, {
                                  items: re,
                                  onGo: Ae,
                                  onRemove: (e) => E(re.filter((t) => t !== e)),
                                }),
                              ],
                            }),
                          I === `account` &&
                            (0, Q.jsxs)(`div`, {
                              className: `space-y-4 p-2`,
                              children: [
                                (0, Q.jsxs)(`div`, {
                                  className: `flex items-center gap-4 rounded-2xl bg-card p-4 border shadow-xs`,
                                  children: [
                                    (0, Q.jsx)(`div`, {
                                      className: `size-14 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xl shrink-0`,
                                      children: `M`,
                                    }),
                                    (0, Q.jsxs)(`div`, {
                                      className: `min-w-0 flex-1`,
                                      children: [
                                        (0, Q.jsx)(`h3`, {
                                          className: `font-bold text-base truncate`,
                                          children: `musichub661@gmail.com`,
                                        }),
                                        (0, Q.jsx)(`p`, {
                                          className: `text-xs text-muted-foreground mt-0.5`,
                                          children: `Connected Account & Cloud Sync`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `rounded-2xl bg-card p-4 border space-y-3 text-xs text-muted-foreground`,
                                  children: [
                                    (0, Q.jsxs)(`div`, {
                                      className: `flex justify-between`,
                                      children: [
                                        (0, Q.jsx)(`span`, {
                                          children: `Account Status:`,
                                        }),
                                        (0, Q.jsx)(`span`, {
                                          className: `font-semibold text-brand`,
                                          children: `Active & Verified`,
                                        }),
                                      ],
                                    }),
                                    (0, Q.jsxs)(`div`, {
                                      className: `flex justify-between`,
                                      children: [
                                        (0, Q.jsx)(`span`, {
                                          children: `Sync Storage:`,
                                        }),
                                        (0, Q.jsx)(`span`, {
                                          className: `font-medium`,
                                          children: `Playlists & Favorites Synced`,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
          }),
      P &&
        (0, Q.jsx)(`div`, {
          className: `fixed inset-0 z-50 flex items-end bg-foreground/40 backdrop-blur-xs animate-in fade-in duration-200`,
          onClick: () => F(!1),
          children: (0, Q.jsxs)(`div`, {
            className: `w-full rounded-t-3xl bg-card p-4 pb-10 shadow-2xl animate-in slide-in-from-bottom duration-300`,
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, Q.jsx)(`div`, {
                className: `mb-3 flex items-center justify-end border-b pb-2`,
                children: (0, Q.jsx)(`button`, {
                  onClick: () => F(!1),
                  "aria-label": `Close menu`,
                  children: (0, Q.jsx)(X, { className: `size-5` }),
                }),
              }),
              [
                {
                  l: a(`setDefaultBrowser`),
                  I: B,
                  f: () => {
                    if ((F(!1), navigator.setAppBadge))
                      try {
                        navigator.setAppBadge(1);
                      } catch (e) {
                        console.log(e);
                      }
                    alert(
                      `WebNa is now set as your preferred in-app browser experience! To make WebNa your system default browser on Android/iOS, use your browser's 'Add to Home Screen' or default browser settings.`,
                    );
                  },
                },
                {
                  l: a(`bookmarks`),
                  I: Ye,
                  f: () => {
                    (F(!1), L(`bookmarks`));
                  },
                },
                {
                  l: a(`history`),
                  I: q,
                  f: () => {
                    (F(!1), L(`history`));
                  },
                },
                {
                  l: a(`savedLinks`),
                  I: j,
                  f: () => {
                    (F(!1), L(`saved-links`));
                  },
                },
                {
                  l: a(`searchEngines`),
                  I: Le,
                  f: () => {
                    (F(!1), L(`search`));
                  },
                },
                {
                  l: a(`settings`),
                  I: ze,
                  f: () => {
                    (F(!1), L(`settings`));
                  },
                },
                {
                  l: a(`home`),
                  I: H,
                  f: () => {
                    (F(!1), G(), t(`home`), De(null));
                  },
                },
              ].map(({ l: e, I: t, f: n }) =>
                (0, Q.jsxs)(
                  `button`,
                  {
                    onClick: n,
                    className: `flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-muted font-medium text-sm transition-colors`,
                    children: [
                      (0, Q.jsx)(t, { className: `size-5 text-brand` }),
                      (0, Q.jsx)(`span`, { children: e }),
                    ],
                  },
                  e,
                ),
              ),
            ],
          }),
        }),
      v &&
        (0, Q.jsx)(`div`, {
          role: `dialog`,
          "aria-modal": `true`,
          className: `fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-150`,
          onClick: (e) => {
            e.target === e.currentTarget && (ee(null), b(``), x(``));
          },
          children: (0, Q.jsxs)(`div`, {
            className: `w-full max-w-sm rounded-2xl bg-card p-5 shadow-2xl border border-border space-y-4`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`h3`, {
                        className: `font-semibold text-base text-foreground`,
                        children: `Add shortcut`,
                      }),
                      (0, Q.jsxs)(`p`, {
                        className: `text-xs text-muted-foreground`,
                        children: [
                          `To category:`,
                          ` `,
                          (0, Q.jsx)(`span`, {
                            className: `font-medium text-foreground`,
                            children: v,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`button`, {
                    onClick: () => {
                      (ee(null), b(``), x(``));
                    },
                    className: `text-muted-foreground hover:text-foreground p-1 rounded-lg`,
                    "aria-label": `Close`,
                    children: (0, Q.jsx)(X, { className: `size-5` }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`label`, {
                        className: `block text-xs font-medium text-muted-foreground mb-1`,
                        children: `Shortcut name`,
                      }),
                      (0, Q.jsx)(`input`, {
                        type: `text`,
                        placeholder: `e.g. YouTube`,
                        value: y,
                        onChange: (e) => b(e.target.value),
                        className: `w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand`,
                        autoFocus: !0,
                      }),
                    ],
                  }),
                  (0, Q.jsxs)(`div`, {
                    children: [
                      (0, Q.jsx)(`label`, {
                        className: `block text-xs font-medium text-muted-foreground mb-1`,
                        children: `Shortcut link`,
                      }),
                      (0, Q.jsx)(`input`, {
                        type: `text`,
                        placeholder: `e.g. https://youtube.com or youtube.com`,
                        value: te,
                        onChange: (e) => x(e.target.value),
                        onKeyDown: (e) => {
                          if (e.key === `Enter`) {
                            let e = y.trim(),
                              t = te.trim();
                            if (e && t && v) {
                              let n =
                                  t.startsWith(`http://`) ||
                                  t.startsWith(`https://`)
                                    ? t
                                    : `https://${t}`,
                                r = _[v] || [];
                              (u({ ..._, [v]: [...r, { t: e, u: n }] }),
                                ee(null),
                                b(``),
                                x(``));
                            }
                          }
                        },
                        className: `w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-1 focus:ring-brand`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `flex gap-2 pt-1`,
                children: [
                  (0, Q.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                      (ee(null), b(``), x(``));
                    },
                    className: `flex-1 rounded-xl bg-muted py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors`,
                    children: `Cancel`,
                  }),
                  (0, Q.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                      let e = y.trim(),
                        t = te.trim();
                      if (e && t && v) {
                        let n =
                            t.startsWith(`http://`) || t.startsWith(`https://`)
                              ? t
                              : `https://${t}`,
                          r = _[v] || [];
                        (u({ ..._, [v]: [...r, { t: e, u: n }] }),
                          ee(null),
                          b(``),
                          x(``));
                      }
                    },
                    disabled: !y.trim() || !te.trim(),
                    className: `flex-1 rounded-xl bg-brand py-2.5 text-xs font-semibold text-brand-foreground hover:opacity-90 disabled:opacity-50 transition-opacity`,
                    children: `Add shortcut`,
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function sn({ items: e, onGo: t, onRemove: n }) {
  return e.length
    ? (0, Q.jsx)(`div`, {
        className: `rounded-2xl bg-card px-3 shadow-sm`,
        children: e.map((e, r) =>
          (0, Q.jsxs)(
            `div`,
            {
              className: `flex items-center gap-3 border-b py-3 last:border-0`,
              children: [
                (0, Q.jsx)(`img`, {
                  src: `https://www.google.com/s2/favicons?domain=${$t(e.url)}&sz=32`,
                  alt: ``,
                  className: `size-5`,
                }),
                (0, Q.jsxs)(`button`, {
                  onClick: () => t(e.url),
                  className: `min-w-0 flex-1 text-left`,
                  children: [
                    (0, Q.jsx)(`p`, {
                      className: `truncate text-sm font-medium`,
                      children: e.title,
                    }),
                    (0, Q.jsx)(`p`, {
                      className: `truncate text-xs text-muted-foreground`,
                      children: e.url,
                    }),
                  ],
                }),
                (0, Q.jsx)(`button`, {
                  onClick: () => n(e),
                  "aria-label": `Remove`,
                  children: (0, Q.jsx)(X, {
                    className: `size-4 text-muted-foreground`,
                  }),
                }),
              ],
            },
            r,
          ),
        ),
      })
    : (0, Q.jsx)(`p`, {
        className: `rounded-2xl bg-card p-4 text-center text-sm text-muted-foreground`,
        children: `Nothing here yet`,
      });
}
export { on as component, an as getEngineDomain };
