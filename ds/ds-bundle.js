/* @ds-bundle: {"format":4,"namespace":"DJCamReeveDesignSystem_bbc5c6","components":[{"name":"SectionTab","sourcePath":"components/brand/SectionTab.jsx"},{"name":"Swatch","sourcePath":"components/brand/Swatch.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DisplayHeading","sourcePath":"components/core/DisplayHeading.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"LetterTile","sourcePath":"components/core/LetterTile.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"SupportText","sourcePath":"components/core/SupportText.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"PhotoFrame","sourcePath":"components/layout/PhotoFrame.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SpecList","sourcePath":"components/layout/SpecList.jsx"},{"name":"StepGrid","sourcePath":"components/layout/StepGrid.jsx"},{"name":"PlayBlock","sourcePath":"components/media/PlayBlock.jsx"},{"name":"Quote","sourcePath":"components/media/Quote.jsx"},{"name":"APPROVED_VENUES","sourcePath":"components/media/VenueList.jsx"},{"name":"VenueList","sourcePath":"components/media/VenueList.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/brand/SectionTab.jsx":"8834a7b373bd","components/brand/Swatch.jsx":"1da756d940fe","components/core/Badge.jsx":"5baff9443c27","components/core/Button.jsx":"a318734ffccc","components/core/DisplayHeading.jsx":"fbfce82a8001","components/core/Eyebrow.jsx":"4e243f2adc3c","components/core/Icon.jsx":"aac1d51fd2ef","components/core/LetterTile.jsx":"04f1113bfa58","components/core/Logo.jsx":"53b63d4c6032","components/core/Rule.jsx":"75fb38c4efa2","components/core/SupportText.jsx":"d848c7ccddcb","components/forms/Input.jsx":"27acead99482","components/layout/Card.jsx":"7d597589ca8e","components/layout/PhotoFrame.jsx":"9c2026c3b89d","components/layout/Section.jsx":"22aafccb8bab","components/layout/SpecList.jsx":"8bcbc6f54fcf","components/layout/StepGrid.jsx":"c66b3e53fe74","components/media/PlayBlock.jsx":"5f95d2f7ced5","components/media/Quote.jsx":"60c08ecf1df1","components/media/VenueList.jsx":"f658d407bf57","components/navigation/SiteFooter.jsx":"e500e524662e","components/navigation/SiteHeader.jsx":"010ab2835883","ui_kits/corporate-landing/corporate-body.jsx":"8b4e64a2c3b4","ui_kits/corporate-landing/corporate-close.jsx":"9e52784ef930","ui_kits/corporate-landing/corporate-hero.jsx":"44f6fa7b4240","ui_kits/wedding-landing/wedding-body.jsx":"87c24222fccb","ui_kits/wedding-landing/wedding-hero.jsx":"44b1ba13ea4a","ui_kits/wedding-landing/wedding-inquiry.jsx":"4568a03db2d5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DJCamReeveDesignSystem_bbc5c6 = window.DJCamReeveDesignSystem_bbc5c6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SectionTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The guidebook's section tab: a solid black box holding letterspaced italic-serif caps.
   This is the one sanctioned use of the editorial serif. */
function SectionTab({
  children,
  field = 'black',
  width = 260,
  style,
  ...rest
}) {
  const fields = {
    black: {
      background: 'var(--dcr-black)',
      color: 'var(--dcr-white)'
    },
    white: {
      background: 'var(--dcr-white)',
      color: 'var(--dcr-black)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-on)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width,
      minHeight: 54,
      padding: 'var(--sp-4) var(--sp-6)',
      ...fields[field],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontStyle: 'italic',
      fontSize: 13,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      textAlign: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionTab.jsx", error: String((e && e.message) || e) }); }

// components/brand/Swatch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The guidebook's own swatch shapes: primaries are hexagons (filled black, outlined white),
   secondaries are vertical bars. Reproduced from the Meldeen 2022 colour-palette spread. */
const HEX = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
function Swatch({
  color = 'var(--dcr-purple)',
  shape = 'bar',
  outline = false,
  width,
  height,
  label,
  hex,
  style,
  ...rest
}) {
  const w = width || (shape === 'hex' ? 92 : 30);
  const h = height || (shape === 'hex' ? 80 : 80);
  const chip = shape === 'hex' ? outline ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: w,
      height: h,
      clipPath: HEX,
      background: 'var(--rule)',
      display: 'block',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1,
      clipPath: HEX,
      background: color,
      display: 'block'
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: w,
      height: h,
      clipPath: HEX,
      background: color,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: w,
      height: h,
      background: color,
      display: 'block',
      border: outline ? '1px solid var(--rule)' : undefined
    }
  });
  if (!label && !hex) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      ...style
    }
  }, rest), chip);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, rest), chip, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 9,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label) : null, hex ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 10,
      letterSpacing: '0.06em',
      color: 'var(--text-muted)'
    }
  }, hex) : null);
}
Object.assign(__ds_scope, { Swatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Swatch.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small tracked-caps marker. Dates, categories, status. Square by rule. */
function Badge({
  children,
  tone = 'accent',
  variant = 'outline',
  style,
  ...rest
}) {
  const c = {
    accent: 'var(--accent)',
    support: 'var(--accent-support)',
    neutral: 'var(--text-secondary)',
    bright: 'var(--text-primary)'
  }[tone] || 'var(--accent)';
  const skins = {
    outline: {
      color: c,
      border: `1px solid ${c}`,
      background: 'transparent'
    },
    solid: {
      color: 'var(--accent-on)',
      border: '1px solid transparent',
      background: c
    },
    wash: {
      color: c,
      border: '1px solid var(--accent-line)',
      background: 'var(--accent-wash)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 10px',
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 'var(--fs-label-xs)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-none)',
      ...skins[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: 11,
    padding: '11px 20px',
    letterSpacing: '0.18em'
  },
  md: {
    fontSize: 13,
    padding: '16px 30px',
    letterSpacing: '0.18em'
  },
  lg: {
    fontSize: 15,
    padding: '21px 40px',
    letterSpacing: '0.16em'
  }
};

/* Accent = the one CTA on a page. Outline/ghost are for everything that is not the CTA. */
function Button({
  variant = 'accent',
  size = 'md',
  as = 'button',
  href,
  disabled = false,
  block = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const skins = {
    accent: {
      background: hover ? 'var(--accent-press)' : 'var(--accent)',
      color: 'var(--accent-on)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: hover ? 'var(--accent)' : 'var(--text-primary)',
      border: `1px solid ${hover ? 'var(--accent)' : 'var(--rule)'}`
    },
    ghost: {
      background: 'transparent',
      color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
      border: '1px solid transparent',
      padding: `${parseInt(s.padding)}px 0`,
      borderBottom: `1px solid ${hover ? 'var(--accent)' : 'var(--rule)'}`
    },
    solid: {
      background: hover ? 'var(--paper-1)' : 'var(--text-primary)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent'
    }
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => !disabled && setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => !disabled && setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-3)',
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      textTransform: 'uppercase',
      fontSize: s.fontSize,
      letterSpacing: s.letterSpacing,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      padding: s.padding,
      borderRadius: 'var(--radius-none)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--op-disabled)' : 1,
      textDecoration: 'none',
      transform: press ? 'var(--press-shift)' : 'none',
      transition: 'var(--t-hover), transform var(--dur-instant) var(--ease-out)',
      WebkitAppearance: 'none',
      ...skins[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DisplayHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LEVELS = {
  1: 'var(--fs-display-1)',
  2: 'var(--fs-display-2)',
  3: 'var(--fs-display-3)',
  4: 'var(--fs-display-4)'
};

/* Condensed caps headline. `accentWord` colours exactly one word — the page's single
   deliberate break from the grid. Never colour two. */
function DisplayHeading({
  children,
  level = 1,
  as,
  accentWord,
  align = 'left',
  measure = true,
  style,
  ...rest
}) {
  const Tag = as || `h${Math.min(level, 4)}`;
  const text = typeof children === 'string' ? children : null;
  let content = children;
  if (text && accentWord) {
    const i = text.toLowerCase().indexOf(String(accentWord).toLowerCase());
    if (i >= 0) {
      content = [text.slice(0, i), /*#__PURE__*/React.createElement("span", {
        key: "a",
        style: {
          color: 'var(--accent)'
        }
      }, text.substr(i, accentWord.length)), text.slice(i + accentWord.length)];
    }
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: LEVELS[level] || LEVELS[1],
      lineHeight: 'var(--lh-display)',
      letterSpacing: level <= 2 ? 'var(--ls-display-tight)' : 'var(--ls-display)',
      color: 'var(--text-primary)',
      maxWidth: measure ? 'var(--measure-display)' : undefined,
      margin: 0,
      textAlign: align,
      textWrap: 'balance',
      ...style
    }
  }, rest), content);
}
Object.assign(__ds_scope, { DisplayHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Small letterspaced caps marker. Section eyebrows, kickers, spec labels. */
function Eyebrow({
  children,
  tone = 'accent',
  size = 'md',
  as = 'div',
  style,
  ...rest
}) {
  const Tag = as;
  const sizes = {
    sm: {
      fontSize: 10,
      letterSpacing: '0.32em'
    },
    md: {
      fontSize: 11,
      letterSpacing: '0.32em'
    },
    lg: {
      fontSize: 13,
      letterSpacing: '0.28em'
    }
  };
  const tones = {
    accent: 'var(--accent)',
    primary: 'var(--text-primary)',
    secondary: 'var(--text-secondary)',
    muted: 'var(--text-muted)',
    support: 'var(--accent-support)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      textTransform: 'uppercase',
      lineHeight: 'var(--lh-label)',
      color: tones[tone] || tones.accent,
      ...sizes[size],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = 'https://unpkg.com/lucide-static@latest/icons/';

/* Tintable icon. Lucide's thin geometric stroke set, loaded from CDN and masked so it
   inherits currentColor. See readme.md > ICONOGRAPHY — the brand ships no icon set of its own. */
function Icon({
  name = 'arrow-right',
  size = 20,
  color = 'currentColor',
  label,
  style,
  ...rest
}) {
  const url = `${BASE}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/LetterTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The guidebook's icon/avatar system: a single logotype letter on a solid tile.
   Approved combos: purple on coral, white on coral, coral on purple. */
const TILE = {
  'coral-purple': {
    bg: 'var(--dcr-coral)',
    letter: 'purple'
  },
  'coral-white': {
    bg: 'var(--dcr-coral)',
    letter: 'white'
  },
  'purple-coral': {
    bg: 'var(--dcr-purple)',
    letter: 'coral'
  },
  'black-white': {
    bg: 'var(--dcr-black)',
    letter: 'white'
  },
  'white-black': {
    bg: 'var(--dcr-white)',
    letter: 'black'
  }
};
function LetterTile({
  letter = 'C',
  combo = 'coral-purple',
  size = 64,
  round = false,
  assetBase = 'assets/logo/letters',
  style,
  ...rest
}) {
  const t = TILE[combo] || TILE['coral-purple'];
  const L = String(letter).toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      background: t.bg,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-none)',
      overflow: 'hidden',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/${L}-${t.letter}.png`,
    alt: L,
    style: {
      height: Math.round(size * 0.5),
      width: 'auto',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { LetterTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LetterTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  white: 'dj-cam-reeve-white.png',
  black: 'dj-cam-reeve-black.png',
  coral: 'dj-cam-reeve-coral.png',
  purple: 'dj-cam-reeve-purple.png',
  magenta: 'dj-cam-reeve-magenta.png',
  'ice-blue': 'dj-cam-reeve-ice-blue.png'
};

/* The primary lockup. Custom lettering, never re-set — this renders the supplied artwork.
   clearSpace adds the guidebook margin (cap height of the DJ • CAM line ~= 0.55 * mark height). */
function Logo({
  colorway = 'white',
  width = 220,
  assetBase = 'assets/logo',
  clearSpace = false,
  bar = false,
  alt = 'DJ Cam Reeve',
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}/${FILES[colorway] || FILES.white}`,
    alt: alt,
    style: {
      width,
      height: 'auto',
      display: 'block'
    }
  });
  const pad = clearSpace ? Math.round(width * 0.145) : 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      padding: bar ? `${Math.round(width * 0.1)}px ${Math.round(width * 0.14)}px` : pad,
      background: bar ? 'var(--dcr-black)' : 'transparent',
      ...style
    }
  }, rest), img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hairline divider. `tone="accent"` gives the thin accent rules that structure grid sections. */
function Rule({
  tone = 'hairline',
  vertical = false,
  weight = 1,
  inset = 0,
  style,
  ...rest
}) {
  const colors = {
    hairline: 'var(--rule)',
    accent: 'var(--accent)',
    'accent-soft': 'var(--accent-line)',
    support: 'var(--accent-support)',
    bright: 'var(--text-primary)'
  };
  const c = colors[tone] || colors.hairline;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "separator",
    style: vertical ? {
      display: 'block',
      width: weight,
      minWidth: weight,
      alignSelf: 'stretch',
      background: c,
      marginBlock: inset,
      ...style
    } : {
      display: 'block',
      height: weight,
      width: '100%',
      background: c,
      marginInline: inset,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/SupportText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Geometric support line. The Brandon Grotesque half of the type system. */
function SupportText({
  children,
  size = 'md',
  tone = 'secondary',
  tracked = true,
  as = 'p',
  measure = true,
  style,
  ...rest
}) {
  const Tag = as;
  const sizes = {
    sm: 'var(--fs-body-sm)',
    md: 'var(--fs-body-lg)',
    lg: 'var(--fs-head-3)'
  };
  const tones = {
    primary: 'var(--text-primary)',
    secondary: 'var(--text-secondary)',
    muted: 'var(--text-muted)',
    accent: 'var(--accent)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-support)',
      fontWeight: 300,
      fontSize: sizes[size] || sizes.md,
      lineHeight: 'var(--lh-body)',
      letterSpacing: tracked ? 'var(--ls-support)' : 'var(--ls-body)',
      color: tones[tone] || tones.secondary,
      maxWidth: measure ? 'var(--measure-support)' : undefined,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SupportText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SupportText.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelCss = {
  fontFamily: 'var(--font-wide)',
  fontWeight: 600,
  fontStretch: '125%',
  fontSize: 'var(--fs-label-sm)',
  letterSpacing: 'var(--ls-label)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)'
};
const fieldCss = {
  width: '100%',
  background: 'var(--surface-inset)',
  color: 'var(--text-primary)',
  border: '1px solid var(--rule)',
  borderRadius: 'var(--radius-none)',
  padding: '14px 16px',
  fontFamily: 'var(--font-text)',
  fontSize: 'var(--fs-body)',
  lineHeight: 1.5,
  outline: 'none',
  transition: 'var(--t-hover)',
  WebkitAppearance: 'none',
  appearance: 'none'
};
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-2)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: labelCss
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...labelCss,
      color: 'var(--dcr-coral)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...fieldCss,
      borderColor: error ? 'var(--dcr-coral)' : f ? 'var(--accent)' : 'var(--rule)',
      ...style
    }
  }, rest)));
}
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...fieldCss,
      resize: 'vertical',
      borderColor: error ? 'var(--dcr-coral)' : f ? 'var(--accent)' : 'var(--rule)',
      ...style
    }
  }, rest)));
}
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...fieldCss,
      paddingRight: 44,
      borderColor: error ? 'var(--dcr-coral)' : f ? 'var(--accent)' : 'var(--rule)',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === 'string' ? o : o.value,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '6px solid var(--text-muted)',
      pointerEvents: 'none'
    }
  })));
}
function Checkbox({
  label,
  checked,
  onChange,
  id,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-3)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      marginTop: 2,
      background: checked ? 'var(--accent)' : 'var(--surface-inset)',
      border: `1px solid ${checked ? 'var(--accent)' : 'var(--rule)'}`,
      display: 'grid',
      placeItems: 'center',
      transition: 'var(--t-hover)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 5,
      borderLeft: '2px solid var(--accent-on)',
      borderBottom: '2px solid var(--accent-on)',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  }) : null), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Field, Input, Textarea, Select, Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hairline card. No radius, no shadow — a border and a value shift. */
function Card({
  children,
  accentBar = false,
  hover = false,
  pad = 'base',
  field = 'raised',
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const pads = {
    none: 0,
    tight: 'var(--sp-5)',
    base: 'var(--card-pad)',
    loose: 'var(--card-pad-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: field === 'none' ? 'transparent' : field === 'inset' ? 'var(--surface-inset)' : 'var(--surface-raised)',
      border: `1px solid ${h ? 'var(--accent)' : 'var(--rule)'}`,
      borderTop: accentBar ? '4px solid var(--accent)' : undefined,
      borderRadius: 'var(--card-radius)',
      padding: pads[pad],
      transition: 'var(--t-hover)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hard-edged photo frame. Real event photography only, graded dark, with an optional
   scrim so type or the logo can sit on it. No rounded corners, ever.
   With no src it renders an honest placeholder well rather than inventing an image. */
function PhotoFrame({
  src,
  alt = '',
  ratio = '16 / 9',
  grade = 'base',
  scrim = 'none',
  caption,
  placeholder = 'Real event photography — dark room, light from the rig',
  children,
  style,
  ...rest
}) {
  const grades = {
    none: 'none',
    base: 'var(--img-grade)',
    hero: 'var(--img-grade-hero)',
    mono: 'var(--img-grade-mono)'
  };
  const scrims = {
    none: null,
    flat: 'var(--scrim-flat)',
    heavy: 'var(--scrim-heavy)',
    top: 'var(--scrim-top)',
    bottom: 'var(--scrim-bottom)'
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)',
      minHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio === 'auto' ? undefined : ratio,
      height: ratio === 'auto' ? '100%' : undefined,
      overflow: 'hidden',
      background: 'var(--ink-1)',
      borderRadius: 'var(--radius-none)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: grades[grade]
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: ratio === 'auto' ? 'start start' : 'center',
      border: '1px solid var(--rule)',
      backgroundImage: 'var(--texture-grid)',
      padding: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 10,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--ink-5)',
      textAlign: 'center',
      maxWidth: '34ch',
      lineHeight: 2
    }
  }, placeholder)), scrims[scrim] ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: scrims[scrim]
    }
  }) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, children) : null), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The page section. Rigid 12-column grid, generous vertical air, optional hairline top rule. */
function Section({
  eyebrow,
  heading,
  accentWord,
  level = 3,
  children,
  width = 'wide',
  pad = 'base',
  topRule = false,
  texture = false,
  field,
  align = 'left',
  style,
  ...rest
}) {
  const maxW = {
    wide: 'var(--grid-max)',
    narrow: 'var(--grid-max-narrow)',
    full: 'none'
  }[width];
  const py = {
    tight: 'var(--section-y-tight)',
    base: 'var(--section-y)',
    loose: 'var(--section-y-loose)'
  }[pad];
  return /*#__PURE__*/React.createElement("section", _extends({
    className: field === 'light' ? 'dcr-field-light' : undefined,
    style: {
      background: field === 'light' ? 'var(--surface-page)' : field === 'raised' ? 'var(--surface-raised)' : 'transparent',
      color: 'var(--text-primary)',
      borderTop: topRule ? '1px solid var(--rule)' : undefined,
      paddingBlock: py,
      paddingInline: 'var(--page-pad)',
      backgroundImage: texture ? 'var(--texture-grid)' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: maxW,
      marginInline: 'auto',
      textAlign: align
    }
  }, (eyebrow || heading) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      marginBottom: 'var(--sp-8)',
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, heading ? /*#__PURE__*/React.createElement(__ds_scope.DisplayHeading, {
    level: level,
    accentWord: accentWord,
    align: align,
    measure: false
  }, heading) : null), children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Spec-sheet rows. Small letterspaced caps label, plain value, hairline between.
   The "structured and organized" half of the brand, used literally. */
function SpecList({
  items = [],
  columns = 1,
  tone = 'hairline',
  dense = false,
  style,
  ...rest
}) {
  const line = tone === 'accent' ? 'var(--accent-line)' : 'var(--rule)';
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      columnGap: 'var(--sp-8)',
      rowGap: 0,
      margin: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '148px 1fr',
      gap: 'var(--sp-5)',
      alignItems: 'baseline',
      paddingBlock: dense ? 'var(--sp-3)' : 'var(--sp-4)',
      borderTop: `1px solid ${line}`,
      borderBottom: i >= items.length - columns ? `1px solid ${line}` : undefined
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-primary)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/layout/StepGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Numbered steps in a rigid grid, divided by thin accent rules.
   This is the "we build it together" / "run like a production" layout. */
function StepGrid({
  steps = [],
  columns,
  numbered = true,
  tone = 'accent',
  style,
  ...rest
}) {
  const cols = columns || Math.min(steps.length || 1, 4);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: 0,
      ...style
    }
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-6) var(--sp-6) var(--sp-7)',
      paddingLeft: i % cols === 0 ? 0 : 'var(--sp-6)',
      borderLeft: i % cols === 0 ? 'none' : `1px solid ${tone === 'accent' ? 'var(--accent-line)' : 'var(--rule)'}`
    }
  }, numbered && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-4)',
      lineHeight: 1,
      color: 'var(--accent)',
      letterSpacing: 'var(--ls-display)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement(__ds_scope.Rule, {
    tone: tone === 'accent' ? 'accent' : 'hairline',
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-support)',
      fontWeight: 400,
      fontSize: 'var(--fs-head-3)',
      lineHeight: 1.4,
      color: 'var(--text-primary)',
      letterSpacing: '0.01em'
    }
  }, s.title), s.body ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, s.body) : null)));
}
Object.assign(__ds_scope, { StepGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StepGrid.jsx", error: String((e && e.message) || e) }); }

// components/media/PlayBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The proof-of-the-set block. Highest-leverage element on the wedding page:
   full width, dark, one accent play affordance, impossible to miss. */
function PlayBlock({
  title = 'Peak hour, Montage Deer Valley',
  meta,
  caption,
  duration,
  playing = false,
  onToggle,
  bars = 56,
  progress = 0,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-7)',
      padding: 'var(--sp-7)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": playing ? 'Pause' : 'Play the set',
    style: {
      width: 84,
      height: 84,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: hover ? 'var(--accent-press)' : 'var(--accent)',
      color: 'var(--accent-on)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'var(--t-hover)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: playing ? 'pause' : 'play',
    size: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-4)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-head-2)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.1
    }
  }, title), duration ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted",
    size: "sm"
  }, duration) : null), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 2,
      height: 46
    }
  }, Array.from({
    length: bars
  }).map((_, i) => {
    const t = i / bars;
    const amp = 0.30 + 0.70 * Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.17) + Math.sin(i * 0.23) * 0.4);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        height: `${Math.min(100, amp * 100)}%`,
        background: t <= progress ? 'var(--accent)' : 'var(--ink-4)',
        transition: 'background-color var(--dur-fast) var(--ease-out)'
      }
    });
  })), meta ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "secondary",
    size: "sm"
  }, meta) : null)), caption ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted",
    size: "sm"
  }, caption) : null);
}
Object.assign(__ds_scope, { PlayBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PlayBlock.jsx", error: String((e && e.message) || e) }); }

// components/media/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Result proof. The headline is the result ("NOBODY LEFT EARLY."), the body is the quote. */
function Quote({
  headline,
  children,
  attribution,
  role,
  level = 3,
  align = 'left',
  style,
  ...rest
}) {
  const sizes = {
    2: 'var(--fs-display-2)',
    3: 'var(--fs-display-3)',
    4: 'var(--fs-display-4)'
  };
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)',
      textAlign: align,
      ...style
    }
  }, rest), headline ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: sizes[level] || sizes[3],
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--accent)'
    }
  }, headline) : null, children ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-support)',
      fontWeight: 300,
      fontSize: 'var(--fs-head-3)',
      lineHeight: 1.55,
      letterSpacing: 'var(--ls-support)',
      color: 'var(--text-primary)',
      maxWidth: '52ch'
    }
  }, children) : null, (attribution || role) && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-3)',
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, attribution ? /*#__PURE__*/React.createElement("span", null, attribution) : null, role ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "/") : null, role ? /*#__PURE__*/React.createElement("span", null, role) : null));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Quote.jsx", error: String((e && e.message) || e) }); }

// components/media/VenueList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Venue proof. The approved public list is closed: Montage Deer Valley,
   High West Distillery, The St. Regis. Do not add to it. */
const APPROVED_VENUES = ['Montage Deer Valley', 'High West Distillery', 'The St. Regis'];
function VenueList({
  venues = APPROVED_VENUES,
  layout = 'row',
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: 13,
    md: 17,
    lg: 22
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: layout === 'row' ? {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--sp-8)',
      ...style
    } : {
      display: 'grid',
      gap: 0,
      ...style
    }
  }, rest), venues.map((v, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 500,
      fontStretch: '125%',
      textTransform: 'uppercase',
      fontSize: sizes[size] || sizes.md,
      letterSpacing: '0.24em',
      color: 'var(--text-primary)',
      paddingBlock: layout === 'stack' ? 'var(--sp-5)' : 0,
      borderTop: layout === 'stack' ? '1px solid var(--rule)' : undefined,
      borderBottom: layout === 'stack' && i === venues.length - 1 ? '1px solid var(--rule)' : undefined
    }
  }, v)));
}
Object.assign(__ds_scope, { APPROVED_VENUES, VenueList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/VenueList.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Site footer. Reeverb appears here as a credit only — never locked up with the mark. */
function SiteFooter({
  tagline = 'Après sets with festival energy',
  columns = [],
  showVenues = true,
  reeverbCredit = 'Sound and light by Reeverb Entertainment',
  legal = '© DJ Cam Reeve',
  assetBase = 'assets/logo',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      borderTop: '1px solid var(--rule)',
      padding: 'var(--sp-9) var(--page-pad) var(--sp-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      marginInline: 'auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-9)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    colorway: "white",
    width: 180,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "secondary",
    size: "sm"
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-9)',
      flexWrap: 'wrap'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "sm"
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--text-secondary)',
      textDecoration: 'none'
    }
  }, l.label)))))), showVenues ? /*#__PURE__*/React.createElement(__ds_scope.VenueList, {
    size: "sm"
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--sp-5)',
      justifyContent: 'space-between',
      borderTop: '1px solid var(--rule)',
      paddingTop: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted",
    size: "sm"
  }, legal), /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "muted",
    size: "sm"
  }, reeverbCredit))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fixed site header. Glass over photography, hairline bottom, one CTA. */
function SiteHeader({
  nav = [],
  cta = 'Let’s talk about your music',
  ctaHref = '#inquire',
  activeHref,
  logoColorway = 'white',
  assetBase = 'assets/logo',
  fixed = true,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: fixed ? 'sticky' : 'relative',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      padding: '18px var(--page-pad)',
      background: 'var(--glass-dark)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid var(--rule)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: onNavigate,
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    colorway: logoColorway,
    width: 132,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-7)'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.href,
    href: n.href,
    onClick: onNavigate,
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: activeHref === n.href ? 'var(--accent)' : 'var(--text-secondary)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'var(--t-hover)'
    }
  }, n.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: ctaHref
  }, cta)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-landing/corporate-body.jsx
try { (() => {
/* Corporate landing page — atmosphere, responsiveness, result proof. */
const DCPb = () => window.DJCamReeveDesignSystem_bbc5c6;

/* This is where the one photo that breaks loose belongs. */
function CorporateAtmosphere() {
  const {
    Section,
    PhotoFrame,
    DisplayHeading,
    SupportText,
    Rule
  } = DCPb();
  return /*#__PURE__*/React.createElement(Section, {
    id: "atmosphere",
    eyebrow: "What you are actually buying",
    heading: "Atmosphere is the deliverable",
    level: 3,
    topRule: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 'var(--sp-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "4 / 3",
    grade: "base",
    placeholder: "THE ONE PHOTO THAT BREAKS LOOSE \u2014 the room at the moment the lights drop.",
    caption: "Sound, light and the arc of the night as one product"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement(SupportText, {
    tone: "primary",
    size: "md"
  }, "You are not hiring a DJ and a microphone. You are hiring the reason the room feels like somewhere people want to stay."), /*#__PURE__*/React.createElement(Rule, {
    tone: "accent",
    style: {
      width: 56
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, "Sound, light and the shape of the evening are designed together, so the energy climbs instead of arriving all at once and burning out by nine."))));
}

/* Responsiveness, never rebellion. A risk answer wearing an energy answer's clothes. */
function CorporateBuiltForRoom() {
  const {
    Section,
    StepGrid
  } = DCPb();
  return /*#__PURE__*/React.createElement(Section, {
    id: "room",
    eyebrow: "Live, not on a template",
    heading: "Built for the room",
    level: 3,
    topRule: true
  }, /*#__PURE__*/React.createElement(StepGrid, {
    steps: [{
      title: 'The program runs long',
      body: 'The set contracts. The peak still lands where it was planned to land.'
    }, {
      title: 'The speeches drag',
      body: 'The room gets picked back up instead of being handed a playlist and left alone.'
    }, {
      title: 'The crowd is older than the brief said',
      body: 'The read happens in the room, not in a spreadsheet three weeks earlier.'
    }]
  }));
}
function CorporateResults() {
  const {
    Section,
    Quote,
    SpecList
  } = DCPb();
  return /*#__PURE__*/React.createElement(Section, {
    id: "results",
    eyebrow: "Results, not promises",
    pad: "tight",
    topRule: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--sp-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    headline: "Nobody left early.",
    level: 2,
    attribution: "Director of events",
    role: "Park City resort"
  }, "The room was still full when the lights came up, and on Monday people were still talking about it."), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'Event',
      value: 'Company party, 340 guests'
    }, {
      label: 'Room',
      value: 'Resort ballroom, hard 11pm out'
    }, {
      label: 'Result',
      value: 'Floor full through the last thirty minutes'
    }]
  })));
}
Object.assign(window, {
  CorporateAtmosphere,
  CorporateBuiltForRoom,
  CorporateResults
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-landing/corporate-body.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-landing/corporate-close.jsx
try { (() => {
/* Corporate landing page — the close. One CTA, and it books a conversation. */
const DCPc = () => window.DJCamReeveDesignSystem_bbc5c6;
function CorporateDateCheck() {
  const {
    Section,
    Input,
    Select,
    Textarea,
    Button,
    DisplayHeading,
    SupportText,
    Eyebrow,
    Icon,
    VenueList
  } = DCPc();
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement(Section, {
      id: "date",
      pad: "base",
      width: "narrow",
      topRule: true,
      align: "center"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-5)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 34,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement(DisplayHeading, {
      level: 3,
      align: "center",
      measure: false
    }, "Date received."), /*#__PURE__*/React.createElement(SupportText, {
      style: {
        textAlign: 'center'
      }
    }, "You\u2019ll hear back with availability and a production outline, not a rate card."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setSent(false)
    }, "Check another date")));
  }
  return /*#__PURE__*/React.createElement(Section, {
    id: "date",
    eyebrow: "Availability",
    heading: "Check your date",
    level: 3,
    pad: "base",
    topRule: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-6) var(--sp-7)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    label: "Your name",
    placeholder: "First and last"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-org",
    label: "Company or client",
    placeholder: "Who the event is for"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    label: "Email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-date",
    label: "Event date",
    placeholder: "MM / DD / YYYY"
  }), /*#__PURE__*/React.createElement(Select, {
    id: "c-type",
    label: "Event type",
    options: ['Conference', 'Gala', 'Company party', 'Resort or destination event', 'Something else']
  }), /*#__PURE__*/React.createElement(Select, {
    id: "c-size",
    label: "Headcount",
    options: ['Under 100', '100–250', '250–500', '500+']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-room",
    rows: 3,
    label: "What does the room need to do?",
    hint: "Program, hard stops, and what happened last time."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted",
    size: "sm"
  }, "Insured \xB7 W-9 and COI on request"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setSent(true)
  }, "Check your date")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      paddingTop: 'var(--sp-6)',
      borderTop: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(VenueList, {
    size: "sm"
  }))));
}
Object.assign(window, {
  CorporateDateCheck
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-landing/corporate-close.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-landing/corporate-hero.jsx
try { (() => {
/* Corporate landing page — hero + fear + production spec.
   Structure follows dj-cam-reeve-design-handoff.md § PAGE B. More composed than the
   wedding page: more air, more grid, one break. */
const DCP = () => window.DJCamReeveDesignSystem_bbc5c6;
function CorporateHero({
  category,
  onSwapCategory
}) {
  const {
    DisplayHeading,
    SupportText,
    Button,
    PhotoFrame,
    Eyebrow,
    Logo,
    Icon
  } = DCP();
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: 700,
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "auto",
    grade: "hero",
    scrim: "bottom",
    style: {
      height: '100%'
    },
    placeholder: "HERO \u2014 a full room, visibly engaged, real production visible in frame."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-flat)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'end',
      width: '100%',
      maxWidth: 'var(--grid-max)',
      marginInline: 'auto',
      padding: '0 var(--page-pad) var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Corporate, galas and resort events \xB7 Utah"), /*#__PURE__*/React.createElement(DisplayHeading, {
    level: 2,
    accentWord: category,
    measure: false,
    style: {
      maxWidth: '22ch'
    }
  }, `Your event deserves ${category} energy`), /*#__PURE__*/React.createElement(SupportText, {
    tone: "primary"
  }, category === 'APRÈS' ? 'Après energy. Run like a production.' : 'Festival energy. Run like a production.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap',
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#date"
  }, "Check your date"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSwapCategory,
    title: "A/B challenger \u2014 the category word swaps without a relayout",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 0,
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--ink-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "repeat",
    size: 13
  }), " A/B: ", category === 'APRÈS' ? 'festival' : 'après')))));
}
function CorporateFear() {
  const {
    Section,
    DisplayHeading
  } = DCP();
  return /*#__PURE__*/React.createElement(Section, {
    id: "fear",
    pad: "tight",
    width: "narrow",
    topRule: true
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    level: 3,
    measure: false,
    style: {
      maxWidth: '28ch'
    }
  }, "Most corporate events die right after dinner."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-6) 0 0',
      fontFamily: 'var(--font-support)',
      fontWeight: 300,
      fontSize: 'var(--fs-head-3)',
      lineHeight: 1.6,
      letterSpacing: 'var(--ls-support)',
      color: 'var(--text-secondary)',
      maxWidth: '44ch'
    }
  }, "The room empties, and somebody gets blamed for it."));
}

/* Leads on this page. A planner has to believe nothing will blow up before they care
   how the room feels — so the spec sheet comes before atmosphere. */
function CorporateProduction() {
  const {
    Section,
    SpecList,
    Eyebrow
  } = DCP();
  return /*#__PURE__*/React.createElement(Section, {
    id: "production",
    eyebrow: "The floor under it",
    heading: "Run like a production",
    level: 3,
    topRule: true,
    texture: true
  }, /*#__PURE__*/React.createElement(SpecList, {
    tone: "accent",
    items: [{
      label: 'Power',
      value: 'Load plan submitted to the venue two weeks out. No shared circuits, no surprises.'
    }, {
      label: 'Load-in',
      value: 'Crew in black, in and out on the venue’s schedule. Nothing improvised on site.'
    }, {
      label: 'Sound',
      value: 'Owned inventory through Reeverb Entertainment. Coverage mapped to the room, not guessed.'
    }, {
      label: 'Light',
      value: 'Rig designed for the space. Colour comes from the fixtures, not from a filter.'
    }, {
      label: 'Redundancy',
      value: 'Backup player, backup mixer, spare mics on the table before doors.'
    }, {
      label: 'Program',
      value: 'Run-of-show reviewed with the planner. Speeches, awards and hard stops honoured.'
    }]
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted",
    size: "sm",
    style: {
      marginTop: 'var(--sp-6)'
    }
  }, "Sound and light by Reeverb Entertainment \u2014 a credit, not a co-brand"));
}
Object.assign(window, {
  CorporateHero,
  CorporateFear,
  CorporateProduction
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-landing/corporate-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-landing/wedding-body.jsx
try { (() => {
/* Wedding landing page — co-creation, venue proof, repel. */
const DCRb = () => window.DJCamReeveDesignSystem_bbc5c6;
function WeddingHowItWorks() {
  const {
    Section,
    StepGrid
  } = DCRb();
  return /*#__PURE__*/React.createElement(Section, {
    id: "how",
    eyebrow: "How it works",
    heading: "We build it together",
    level: 3,
    topRule: true
  }, /*#__PURE__*/React.createElement(StepGrid, {
    steps: [{
      title: 'We talk about what you actually listen to',
      body: 'Artists, sets, the show that was the best night of your life. The request list is an input, not the plan.'
    }, {
      title: 'I build the arc of your night around it',
      body: 'Where it opens, where it turns, where it peaks. Written for your room and your people.'
    }, {
      title: 'I mix it live and read the room as it happens',
      body: 'No template, no autopilot. If the floor moves somewhere else, the set goes with it.'
    }]
  }));
}
function WeddingVenues() {
  const {
    Section,
    VenueList,
    SupportText
  } = DCRb();
  return /*#__PURE__*/React.createElement(Section, {
    id: "venues",
    eyebrow: "Where",
    heading: "Rooms I already know",
    level: 4,
    pad: "tight",
    topRule: true
  }, /*#__PURE__*/React.createElement(VenueList, {
    layout: "stack",
    size: "lg"
  }), /*#__PURE__*/React.createElement(SupportText, {
    size: "sm",
    style: {
      marginTop: 'var(--sp-6)'
    }
  }, "Real sound and real light behind it through Reeverb Entertainment. Nothing goes wrong."));
}
function WeddingRepel() {
  const {
    Section,
    Rule
  } = DCRb();
  const items = ['You want an open request list run start to finish', 'You want the DJ to be furniture', 'You’ve sent another couple’s reception and asked for that', 'Your first question is the price for six hours'];
  return /*#__PURE__*/React.createElement(Section, {
    id: "repel",
    pad: "tight",
    width: "narrow",
    topRule: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontStretch: '125%',
      fontSize: 'var(--fs-label-sm)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "This is not for you if"), /*#__PURE__*/React.createElement("div", null, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      paddingBlock: 'var(--sp-4)',
      borderTop: '1px solid var(--rule)',
      borderBottom: i === items.length - 1 ? '1px solid var(--rule)' : undefined,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-secondary)'
    }
  }, t))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, "No hard feelings. There are good DJs who do exactly that, and I\u2019ll point you at one.")));
}
Object.assign(window, {
  WeddingHowItWorks,
  WeddingVenues,
  WeddingRepel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-landing/wedding-body.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-landing/wedding-hero.jsx
try { (() => {
/* Wedding landing page — hero + tension + proof of the set.
   Structure follows dj-cam-reeve-design-handoff.md § PAGE A. */
const DCR = () => window.DJCamReeveDesignSystem_bbc5c6;
function WeddingHero({
  category,
  onSwapCategory,
  playing,
  onPlay
}) {
  const {
    DisplayHeading,
    SupportText,
    Button,
    PhotoFrame,
    Eyebrow,
    Logo,
    Icon
  } = DCR();
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: 760,
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    ratio: "auto",
    grade: "hero",
    scrim: "bottom",
    style: {
      height: '100%'
    },
    placeholder: "HERO \u2014 one wide, dark, peak-hour crowd shot. Light from the rig, not a filter."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-flat)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      alignSelf: 'end',
      width: '100%',
      maxWidth: 'var(--grid-max)',
      marginInline: 'auto',
      padding: '0 var(--page-pad) var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)',
      maxWidth: 940
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Apr\xE8s sets with festival energy"), /*#__PURE__*/React.createElement(DisplayHeading, {
    level: 1,
    accentWord: category,
    measure: false,
    style: {
      maxWidth: '19ch'
    }
  }, `Your wedding deserves ${category === 'APRÈS' ? 'an' : 'a'} ${category} set`), /*#__PURE__*/React.createElement(SupportText, {
    tone: "primary"
  }, "A set, not a playlist. Played once, never again."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap',
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "#inquire"
  }, "Let\u2019s talk about your music"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSwapCategory,
    title: "A/B challenger \u2014 the category word swaps without a relayout",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 0,
      fontFamily: 'var(--font-wide)',
      fontWeight: 600,
      fontSize: 10,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--ink-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "repeat",
    size: 13
  }), " A/B: ", category === 'APRÈS' ? 'festival' : 'après')))));
}
function WeddingTension() {
  const {
    Section,
    DisplayHeading
  } = DCR();
  return /*#__PURE__*/React.createElement(Section, {
    id: "tension",
    pad: "tight",
    width: "narrow",
    topRule: true
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    level: 3,
    measure: false,
    style: {
      maxWidth: '30ch'
    }
  }, "Most wedding DJs run the same forty songs off a template every Saturday."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-6) 0 0',
      fontFamily: 'var(--font-support)',
      fontWeight: 300,
      fontSize: 'var(--fs-head-3)',
      lineHeight: 1.6,
      letterSpacing: 'var(--ls-support)',
      color: 'var(--text-secondary)',
      maxWidth: '44ch'
    }
  }, "If two couples could have the same night, it was never their night."));
}
function WeddingProof({
  playing,
  onPlay,
  progress
}) {
  const {
    Section,
    PlayBlock
  } = DCR();
  return /*#__PURE__*/React.createElement(Section, {
    id: "set",
    eyebrow: "Proof of the set",
    heading: "Hear it before you ask what it costs",
    level: 3,
    pad: "base",
    topRule: true
  }, /*#__PURE__*/React.createElement(PlayBlock, {
    title: "Peak hour, Montage Deer Valley",
    duration: "1:04",
    playing: playing,
    progress: progress,
    onToggle: onPlay,
    meta: "Built for that room \xB7 mixed live \xB7 never run again",
    caption: "Recorded at a real wedding. Never played again."
  }));
}
Object.assign(window, {
  WeddingHero,
  WeddingTension,
  WeddingProof
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-landing/wedding-hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-landing/wedding-inquiry.jsx
try { (() => {
/* Wedding landing page — the close. The inquiry form is a filter, not a lead capture. */
const DCRc = () => window.DJCamReeveDesignSystem_bbc5c6;
function WeddingInquiry() {
  const {
    Section,
    Input,
    Textarea,
    Select,
    Button,
    DisplayHeading,
    SupportText,
    Eyebrow,
    Icon
  } = DCRc();
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement(Section, {
      id: "inquire",
      pad: "base",
      width: "narrow",
      topRule: true,
      align: "center"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-5)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 34,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement(DisplayHeading, {
      level: 3,
      align: "center",
      measure: false
    }, "Got it. I\u2019ll call you."), /*#__PURE__*/React.createElement(SupportText, {
      style: {
        textAlign: 'center'
      }
    }, "I read these myself. Expect a real conversation about music, not a price sheet."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setSent(false)
    }, "Send another")));
  }
  return /*#__PURE__*/React.createElement(Section, {
    id: "inquire",
    eyebrow: "Let\u2019s talk",
    heading: "Tell me what you listen to",
    level: 3,
    pad: "base",
    topRule: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-6) var(--sp-7)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "w-names",
    label: "Names",
    placeholder: "Both of you"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "w-email",
    label: "Email",
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "w-date",
    label: "Date",
    placeholder: "MM / DD / YYYY"
  }), /*#__PURE__*/React.createElement(Select, {
    id: "w-venue",
    label: "Venue",
    options: ['Montage Deer Valley', 'High West Distillery', 'The St. Regis', 'Somewhere else']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "w-listen",
    rows: 3,
    label: "What do you actually listen to?",
    hint: "Artists, sets, a playlist link \u2014 whatever\u2019s honest."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "w-best",
    rows: 2,
    label: "What show or festival was the best night of your life?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "w-never",
    rows: 2,
    label: "What should never be played?",
    hint: "Be specific. This one saves us both a lot of time."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted",
    size: "sm"
  }, "No price on this page. On purpose."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => setSent(true)
  }, "Let\u2019s talk about your music"))));
}
Object.assign(window, {
  WeddingInquiry
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-landing/wedding-inquiry.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionTab = __ds_scope.SectionTab;

__ds_ns.Swatch = __ds_scope.Swatch;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DisplayHeading = __ds_scope.DisplayHeading;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LetterTile = __ds_scope.LetterTile;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.SupportText = __ds_scope.SupportText;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.StepGrid = __ds_scope.StepGrid;

__ds_ns.PlayBlock = __ds_scope.PlayBlock;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.APPROVED_VENUES = __ds_scope.APPROVED_VENUES;

__ds_ns.VenueList = __ds_scope.VenueList;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
