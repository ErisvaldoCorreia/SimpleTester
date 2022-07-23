var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  somarValores: () => somarValores,
  subtrairValores: () => subtrairValores
});
function somarValores(valueA, valueB) {
  return valueA + valueB;
}
function subtrairValores(valueA, valueB) {
  return valueA - valueB;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  somarValores,
  subtrairValores
});
//# sourceMappingURL=functions.js.map
