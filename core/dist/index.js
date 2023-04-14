var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/JsonEditor.tsx
import {
  JSONEditor,
  Mode as ModeEnum
} from "gm-vanilla-jsoneditor";
import {
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { jsx } from "react/jsx-runtime";
var JsonEditor = (_a) => {
  var _props = __objRest(_a, []);
  const _a2 = _props, { mode: _mode } = _a2, restProps = __objRest(_a2, ["mode"]);
  const mode = useMemo(
    () => _mode === void 0 ? void 0 : {
      text: ModeEnum.text,
      tree: ModeEnum.tree,
      table: ModeEnum.table
    }[_mode],
    [_mode]
  );
  const props = useMemo(() => __spreadValues({ mode }, restProps), [mode, restProps]);
  const [container, setContainer] = useState(null);
  const refEditor = useRef(null);
  useEffect(() => {
    if (container !== null) {
      refEditor.current = new JSONEditor({
        target: container,
        props: {}
      });
    }
    return () => {
      if (refEditor.current !== null) {
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, [container]);
  useEffect(() => {
    if (refEditor.current !== null) {
      refEditor.current.updateProps(props).then(() => {
        if (props.mode === "tree") {
          refEditor.current.expand((path) => path.length < 1);
        }
      });
    }
  }, [props]);
  return /* @__PURE__ */ jsx("div", { ref: (node) => setContainer(node) });
};
var JsonEditor_default = JsonEditor;
export {
  JsonEditor_default as JsonEditor
};
