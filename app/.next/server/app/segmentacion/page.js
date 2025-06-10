(() => {
var exports = {};
exports.id = "app/segmentacion/page";
exports.ids = ["app/segmentacion/page"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fsegmentacion%2Fpage&page=%2Fsegmentacion%2Fpage&appPaths=%2Fsegmentacion%2Fpage&pagePath=private-next-app-dir%2Fsegmentacion%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fsegmentacion%2Fpage&page=%2Fsegmentacion%2Fpage&appPaths=%2Fsegmentacion%2Fpage&pagePath=private-next-app-dir%2Fsegmentacion%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ "(ssr)/../node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?41d8");
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/../node_modules/next/dist/server/future/route-kind.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ "(rsc)/../node_modules/next/dist/client/components/error-boundary.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ "(rsc)/../node_modules/next/dist/server/app-render/entry-base.js");
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'segmentacion',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/segmentacion/page.tsx */ "(rsc)/./app/segmentacion/page.tsx")), "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/layout.tsx */ "(rsc)/./app/layout.tsx")), "/home/ubuntu/vlu_estrategia_general_website/app/app/layout.tsx"],
'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ "(rsc)/../node_modules/next/dist/client/components/not-found-error.js", 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/segmentacion/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/segmentacion/page",
        pathname: "/segmentacion",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ "(ssr)/../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fcomponents%2Fnavigation.tsx%22%2C%22ids%22%3A%5B%22Navigation%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fimage-component.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Flink.js%22%2C%22ids%22%3A%5B%22*%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fcomponents%2Fnavigation.tsx%22%2C%22ids%22%3A%5B%22Navigation%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fimage-component.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Flink.js%22%2C%22ids%22%3A%5B%22*%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/navigation.tsx */ "(ssr)/./components/navigation.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/image-component.js */ "(ssr)/../node_modules/next/dist/client/image-component.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/link.js */ "(ssr)/../node_modules/next/dist/client/link.js", 23));


/***/ }),

/***/ "(ssr)/../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fapp%2Fsegmentacion%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fapp%2Fsegmentacion%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/segmentacion/page.tsx */ "(ssr)/./app/segmentacion/page.tsx"));


/***/ }),

/***/ "(ssr)/../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/components/app-router.js */ "(ssr)/../node_modules/next/dist/client/components/app-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/components/client-page.js */ "(ssr)/../node_modules/next/dist/client/components/client-page.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/components/error-boundary.js */ "(ssr)/../node_modules/next/dist/client/components/error-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/components/layout-router.js */ "(ssr)/../node_modules/next/dist/client/components/layout-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/components/not-found-boundary.js */ "(ssr)/../node_modules/next/dist/client/components/not-found-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ../node_modules/next/dist/client/components/render-from-template-context.js */ "(ssr)/../node_modules/next/dist/client/components/render-from-template-context.js", 23));


/***/ }),

/***/ "(ssr)/./app/segmentacion/page.tsx":
/*!***********************************!*\
  !*** ./app/segmentacion/page.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SegmentacionPage)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "(ssr)/../node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Briefcase,Calendar,Heart,MapPin,Target,Users!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/heart.js");
/* harmony import */ var _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Briefcase,Calendar,Heart,MapPin,Target,Users!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Briefcase,Calendar,Heart,MapPin,Target,Users!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/briefcase.js");
/* harmony import */ var _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Briefcase,Calendar,Heart,MapPin,Target,Users!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/target.js");
/* harmony import */ var _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Briefcase,Calendar,Heart,MapPin,Target,Users!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Briefcase,Calendar,Heart,MapPin,Target,Users!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/section-header */ "(ssr)/./components/section-header.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 



function SegmentacionPage() {
    const segmentosTequesquitengo = [
        {
            nombre: "El Escapista de Fin de Semana Consciente",
            prioridad: "Alta",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
            demografia: "Adultos 25-45 a\xf1os, parejas sin hijos, ingresos medios-altos, Ciudad de M\xe9xico y alrededores",
            psicografia: "Conscientes de salud y bienestar, aprecian naturaleza, valoran experiencias aut\xe9nticas",
            necesidades: [
                "Ambiente sereno y relajante",
                "Conexi\xf3n con entorno natural",
                "Actividades de bienestar (yoga, masajes, temazcal)",
                "Servicio atento y personalizado",
                "Instalaciones modernas y limpias"
            ],
            sensibilidades: [
                "Valor por dinero",
                "Ruido o interrupciones",
                "Inconsistencia en servicio",
                "Falta de autenticidad"
            ],
            color: "bg-green-50 border-green-200",
            iconColor: "text-green-600"
        },
        {
            nombre: "El Organizador de Fiestas Privadas",
            prioridad: "Alta",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"],
            demografia: "Adultos 25-50 a\xf1os, ingresos medios-altos, organizadores de eventos sociales",
            psicografia: "Buscan exclusividad y privacidad para celebraciones especiales",
            necesidades: [
                "Espacio para 30-35 personas",
                "Paquete integral (estancia, alimentos, bebidas)",
                "Privacidad y exclusividad",
                "Servicio profesional de organizaci\xf3n"
            ],
            sensibilidades: [
                "Restricciones de ruido o horario",
                "Falta de flexibilidad en paquetes",
                "Calidad de comida y bebidas"
            ],
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-600"
        },
        {
            nombre: "El Trabajador Remoto en Vacaciones",
            prioridad: "Alta",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"],
            demografia: "Profesionales 30-55 a\xf1os con familias, trabajo remoto flexible",
            psicografia: "Buscan equilibrio entre trabajo y descanso en entornos inspiradores",
            necesidades: [
                "Internet fiable y alta velocidad",
                "Espacios de trabajo c\xf3modos",
                "Ambiente tranquilo para concentraci\xf3n",
                "Entretenimiento familiar",
                "Flexibilidad para estancias prolongadas"
            ],
            sensibilidades: [
                "Conexi\xf3n internet deficiente",
                "Falta de espacios trabajo",
                "Precios no ajustados a estancias largas"
            ],
            color: "bg-purple-50 border-purple-200",
            iconColor: "text-purple-600"
        }
    ];
    const segmentosAcapulco = [
        {
            nombre: "El Viajero de Lujo Contempor\xe1neo",
            prioridad: "Alta",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
            demografia: "Adultos 35+ a\xf1os, alto poder adquisitivo, viajeros frecuentes de lujo",
            psicografia: "Sofisticados, exigentes, valoran dise\xf1o y servicio excepcional",
            necesidades: [
                "Dise\xf1o arquitect\xf3nico sofisticado",
                "Servicio anticipatorio e impecable",
                "Vistas impresionantes al Pac\xedfico",
                "Experiencias curadas de alto valor",
                "Privacidad e intimidad"
            ],
            sensibilidades: [
                "Servicio gen\xe9rico o masificado",
                "Falta de atenci\xf3n al detalle",
                "Instalaciones desactualizadas",
                "Percepciones de seguridad"
            ],
            color: "bg-indigo-50 border-indigo-200",
            iconColor: "text-indigo-600"
        },
        {
            nombre: "El Celebrador de Momentos Especiales",
            prioridad: "Alta",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
            demografia: "Parejas comprometidas, planificadores eventos, familias con alto poder adquisitivo",
            psicografia: "Buscan crear memorias \xfanicas e inolvidables para ocasiones especiales",
            necesidades: [
                "Espacios vers\xe1tiles para eventos",
                "Servicio planificaci\xf3n dedicado",
                "Catering alta calidad personalizado",
                "Alojamiento lujo para invitados",
                "Privacidad y exclusividad"
            ],
            sensibilidades: [
                "Falta de personalizaci\xf3n",
                "Limitaciones en servicios",
                "Problemas de coordinaci\xf3n"
            ],
            color: "bg-pink-50 border-pink-200",
            iconColor: "text-pink-600"
        },
        {
            nombre: "El Aficionado al Golf y Recreaci\xf3n de Alta Gama",
            prioridad: "Media",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
            demografia: "Adultos mediana/tercera edad, alto poder adquisitivo, deportistas \xe9lite",
            psicografia: "Activos, sociales, valoran experiencias deportivas de calidad",
            necesidades: [
                "Proximidad a campos golf clase mundial",
                "Servicios conserjer\xeda eficientes",
                "Opciones relajaci\xf3n post-actividad",
                "Comida y bebida alta calidad"
            ],
            sensibilidades: [
                "Distancia a actividades",
                "Falta de servicios especializados",
                "Horarios inflexibles"
            ],
            color: "bg-orange-50 border-orange-200",
            iconColor: "text-orange-600"
        }
    ];
    const segmentosConsolidados = [
        {
            nombre: "El Buscador de Autenticidad y Dise\xf1o",
            descripcion: "Valora est\xe9tica \xfanica, conexi\xf3n cultural y dise\xf1o distintivo en ambas propiedades",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
            color: "bg-teal-50 border-teal-200",
            iconColor: "text-teal-600"
        },
        {
            nombre: "El Apreciador del Servicio Personalizado",
            descripcion: "Busca atenci\xf3n al detalle que va m\xe1s all\xe1 de lo est\xe1ndar, diferenciador clave vs cadenas y Airbnb",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
            color: "bg-rose-50 border-rose-200",
            iconColor: "text-rose-600"
        },
        {
            nombre: "El Viajero de Experiencias Curadas",
            descripcion: "Busca experiencias cuidadosamente seleccionadas y personalizadas que enriquezcan su viaje",
            icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
            color: "bg-amber-50 border-amber-200",
            iconColor: "text-amber-600"
        }
    ];
    const PersonaCard = ({ persona, index })=>{
        const Icon = persona.icon;
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6,
                delay: index * 0.1
            },
            viewport: {
                once: true
            },
            className: `${persona.color} p-6 rounded-xl shadow-lg card-hover`,
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "p-2 bg-white rounded-lg shadow-sm",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                                        className: `w-5 h-5 ${persona.iconColor}`
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                    className: "text-lg font-bold text-gray-900",
                                    children: persona.nombre
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            className: `px-3 py-1 rounded-full text-xs font-medium ${persona.prioridad === "Alta" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`,
                            children: persona.prioridad
                        }, void 0, false, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "font-semibold text-gray-900 mb-2",
                                    children: "Demograf\xeda"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-sm text-gray-700",
                                    children: persona.demografia
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        persona.psicografia && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "font-semibold text-gray-900 mb-2",
                                    children: "Psicograf\xeda"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-sm text-gray-700",
                                    children: persona.psicografia
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "font-semibold text-gray-900 mb-2",
                                    children: "Necesidades Clave"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                    className: "space-y-1",
                                    children: persona.necesidades.map((necesidad, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            className: "text-sm text-gray-700 flex items-start space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    children: necesidad
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "font-semibold text-gray-900 mb-2",
                                    children: "Sensibilidades"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                    className: "space-y-1",
                                    children: persona.sensibilidades.map((sensibilidad, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                            className: "text-sm text-red-600 flex items-start space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    children: sensibilidad
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
            lineNumber: 168,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pt-16",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 bg-gradient-to-br from-orange-50 to-red-100",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_header__WEBPACK_IMPORTED_MODULE_1__.SectionHeader, {
                        icon: _barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
                        title: "Segmentaci\xf3n de Mercado",
                        subtitle: "Personas y Segmentos Prioritarios",
                        description: "An\xe1lisis detallado de segmentos objetivo y desarrollo de personas espec\xedficas para VLU Tequesquitengo y VLU Acapulco Diamante, basado en un enfoque multidimensional que integra variables ocasional-motivacionales, psicogr\xe1ficas y conductuales."
                    }, void 0, false, {
                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        viewport: {
                            once: true
                        },
                        className: "bg-white p-8 rounded-xl shadow-lg",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                className: "text-2xl font-bold text-gray-900 mb-4",
                                children: "Modelo de Segmentaci\xf3n"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-lg text-gray-600 leading-relaxed",
                                children: "Enfoque multidimensional integrando variables ocasional-motivacionales, psicogr\xe1ficas y conductuales para identificar segmentos de alto valor y desarrollar estrategias de targeting precisas."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 bg-gray-50",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                    className: "text-3xl font-bold text-gray-900 mb-4",
                                    children: "Segmentos VLU Tequesquitengo"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-lg text-gray-600 max-w-3xl mx-auto",
                                    children: "Personas prioritarias para el santuario exclusivo junto al lago, enfocadas en bienestar, eventos privados y trabajo remoto."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8",
                            children: segmentosTequesquitengo.map((persona, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PersonaCard, {
                                    persona: persona,
                                    index: index
                                }, index, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                    className: "text-3xl font-bold text-gray-900 mb-4",
                                    children: "Segmentos VLU Acapulco Diamante"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-lg text-gray-600 max-w-3xl mx-auto",
                                    children: "Personas de lujo para el enclave \xedntimo mexicano contempor\xe1neo, centradas en experiencias premium y celebraciones especiales."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8",
                            children: segmentosAcapulco.map((persona, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PersonaCard, {
                                    persona: persona,
                                    index: index
                                }, index, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 294,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 bg-vlu-dark text-white",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                    className: "text-3xl font-bold mb-4",
                                    children: "Segmentos Consolidados VLU"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-xl text-gray-300 max-w-3xl mx-auto",
                                    children: "Segmentos transversales que aplican a ambas propiedades, representando valores y comportamientos compartidos de la marca VLU."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: segmentosConsolidados.map((segmento, index)=>{
                                const Icon = segmento.icon;
                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: index * 0.1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "bg-vlu-medium/20 p-8 rounded-xl text-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex justify-center mb-4",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "p-3 bg-vlu-turquoise/20 rounded-full",
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                                                    className: "w-8 h-8 text-vlu-turquoise"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                lineNumber: 351,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                            className: "text-xl font-bold mb-4",
                                            children: segmento.nombre
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 355,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-gray-300 leading-relaxed",
                                            children: segmento.descripcion
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 bg-gray-50",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                    className: "text-3xl font-bold text-gray-900 mb-4",
                                    children: "Implicaciones Estrat\xe9gicas"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-lg text-gray-600 max-w-3xl mx-auto",
                                    children: "C\xf3mo la segmentaci\xf3n informa las decisiones de producto, marketing y operaciones."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "bg-white p-6 rounded-xl shadow-lg card-hover",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center space-x-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "p-2 bg-blue-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                        className: "w-5 h-5 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                    className: "font-bold text-gray-900",
                                                    children: "Desarrollo de Producto"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Dise\xf1ar experiencias y servicios espec\xedficos para cada persona, desde paquetes de bienestar hasta espacios de trabajo remoto y eventos de lujo."
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "bg-white p-6 rounded-xl shadow-lg card-hover",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center space-x-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "p-2 bg-green-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                                        className: "w-5 h-5 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                    className: "font-bold text-gray-900",
                                                    children: "Estrategia de Marketing"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Personalizar mensajes, canales y campa\xf1as para resonar con las motivaciones y sensibilidades espec\xedficas de cada segmento."
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.3
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "bg-white p-6 rounded-xl shadow-lg card-hover",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center space-x-3 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "p-2 bg-purple-100 rounded-lg",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Briefcase_Calendar_Heart_MapPin_Target_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                        className: "w-5 h-5 text-purple-600"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                    className: "font-bold text-gray-900",
                                                    children: "Excelencia Operacional"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-sm text-gray-600",
                                            children: "Entrenar al personal para reconocer y atender las necesidades espec\xedficas de cada segmento, evitando sus sensibilidades identificadas."
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navigation: () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/../node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "(ssr)/../node_modules/next/dist/api/link.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "(ssr)/../node_modules/next/dist/api/image.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/trending-up.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/chart-column.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/target.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/award.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/lightbulb.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Award,BarChart3,Lightbulb,Menu,Target,TrendingUp,Users,X!=!lucide-react */ "(ssr)/../node_modules/lucide-react/dist/esm/icons/menu.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ "(ssr)/../node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ "(ssr)/../node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* __next_internal_client_entry_do_not_use__ Navigation auto */ 





function Navigation() {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const navItems = [
        {
            href: "/",
            label: "Inicio",
            icon: _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"]
        },
        {
            href: "/analisis-mercado",
            label: "An\xe1lisis de Mercado",
            icon: _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"]
        },
        {
            href: "/analisis-swot",
            label: "An\xe1lisis SWOT",
            icon: _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"]
        },
        {
            href: "/reputacion",
            label: "Reputaci\xf3n Digital",
            icon: _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"]
        },
        {
            href: "/segmentacion",
            label: "Segmentaci\xf3n",
            icon: _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"]
        },
        {
            href: "/posicionamiento",
            label: "Posicionamiento",
            icon: _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"]
        },
        {
            href: "/pilares-estrategicos",
            label: "Pilares Estrat\xe9gicos",
            icon: _barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            href: "/",
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "relative w-10 h-10",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        src: "/vlu-logo.png",
                                        alt: "VLU Hospitality",
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                                            className: "text-xl font-bold text-vlu-primary",
                                            children: "VLU Hospitality"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-xs text-vlu-medium",
                                            children: "Estrategia General"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "hidden lg:flex items-center space-x-1",
                            children: navItems.map((item)=>{
                                const Icon = item.icon;
                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: item.href,
                                    className: "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-vlu-primary hover:bg-vlu-turquoise/10 transition-all duration-200",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.href, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "lg:hidden p-2 rounded-lg text-gray-700 hover:text-vlu-primary hover:bg-gray-100 transition-colors",
                            children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                lineNumber: 65,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Award_BarChart3_Lightbulb_Menu_Target_TrendingUp_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                lineNumber: 65,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_12__.AnimatePresence, {
                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "lg:hidden bg-white border-t border-gray-200",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "px-4 py-2 space-y-1",
                        children: navItems.map((item)=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: item.href,
                                onClick: ()=>setIsOpen(false),
                                className: "flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-vlu-primary hover:bg-vlu-turquoise/10 transition-all duration-200",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                        lineNumber: 89,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                        lineNumber: 90,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                                lineNumber: 83,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/section-header.tsx":
/*!***************************************!*\
  !*** ./components/section-header.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionHeader: () => (/* binding */ SectionHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/../node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionHeader({ icon: Icon, title, subtitle, description }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-center mb-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex justify-center mb-4",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "p-3 bg-vlu-turquoise/10 rounded-full",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                        className: "w-8 h-8 text-vlu-primary"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/section-header.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/section-header.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/section-header.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                children: title
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/section-header.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "text-xl md:text-2xl text-vlu-medium mb-4",
                children: subtitle
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/section-header.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/section-header.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/section-header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(rsc)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("4412337f19ec");
if (false) {}


/***/ }),

/***/ "(rsc)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/../node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"} */ "(rsc)/../node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"}");
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ "(rsc)/./app/globals.css");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/navigation */ "(rsc)/./components/navigation.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/footer */ "(rsc)/./components/footer.tsx");





const metadata = {
    title: "VLU Hospitality - Estrategia General",
    description: "Estrategia General y An\xe1lisis de Mercado para VLU Hospitality - Hoteles Boutique de Lujo en M\xe9xico",
    keywords: "VLU, hospitality, estrategia, hoteles boutique, lujo, M\xe9xico, Tequesquitengo, Acapulco"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("html", {
        lang: "es",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default().className),
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_2__.Navigation, {}, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/layout.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
                    className: "min-h-screen",
                    children: children
                }, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__.Footer, {}, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/layout.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/layout.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/app/layout.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(rsc)/./app/segmentacion/page.tsx":
/*!***********************************!*\
  !*** ./app/segmentacion/page.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/vlu_estrategia_general_website/app/app/segmentacion/page.tsx#default`));


/***/ }),

/***/ "(rsc)/./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/../node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "(rsc)/../node_modules/next/dist/api/link.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "(rsc)/../node_modules/next/dist/api/image.js");
/* harmony import */ var _barrel_optimize_names_Building2_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Building2!=!lucide-react */ "(rsc)/../node_modules/lucide-react/dist/esm/icons/building-2.js");




function Footer() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "bg-vlu-dark text-white",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "relative w-10 h-10",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                src: "/vlu-logo.png",
                                                alt: "VLU Hospitality",
                                                fill: true,
                                                className: "object-contain filter brightness-0 invert"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                lineNumber: 15,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 14,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                    className: "text-xl font-bold",
                                                    children: "VLU Hospitality"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                    className: "text-sm text-vlu-turquoise",
                                                    children: "Estrategia General"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-gray-300 text-sm leading-relaxed",
                                    children: "Consolid\xe1ndose como marca l\xedder en hoteler\xeda boutique de lujo y experiencias aut\xe9nticas en el din\xe1mico mercado mexicano."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "text-lg font-semibold text-vlu-turquoise",
                                    children: "Estrategia"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/analisis-mercado",
                                            className: "block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm",
                                            children: "An\xe1lisis de Mercado"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/analisis-swot",
                                            className: "block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm",
                                            children: "An\xe1lisis SWOT"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/segmentacion",
                                            className: "block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm",
                                            children: "Segmentaci\xf3n"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/pilares-estrategicos",
                                            className: "block text-gray-300 hover:text-vlu-turquoise transition-colors text-sm",
                                            children: "Pilares Estrat\xe9gicos"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                    className: "text-lg font-semibold text-vlu-turquoise",
                                    children: "Propiedades"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Building2_lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                    className: "w-5 h-5 text-vlu-turquoise mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "font-medium text-sm",
                                                            children: "VLU Tequesquitengo"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-gray-300 text-xs",
                                                            children: "Santuario exclusivo junto al lago"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-start space-x-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Building2_lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                    className: "w-5 h-5 text-vlu-turquoise mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "font-medium text-sm",
                                                            children: "VLU Acapulco Diamante"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                            lineNumber: 65,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "text-gray-300 text-xs",
                                                            children: "Enclave \xedntimo de lujo mexicano"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "border-t border-vlu-medium mt-8 pt-8 text-center",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                        className: "text-gray-300 text-sm",
                        children: "\xa9 2025 VLU Hospitality. Estrategia General y An\xe1lisis de Mercado."
                    }, void 0, false, {
                        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/vlu_estrategia_general_website/app/components/footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(rsc)/./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navigation: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/../node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/vlu_estrategia_general_website/app/components/navigation.tsx#Navigation`);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/framer-motion","vendor-chunks/lucide-react","vendor-chunks/@swc"], () => (__webpack_exec__("(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fsegmentacion%2Fpage&page=%2Fsegmentacion%2Fpage&appPaths=%2Fsegmentacion%2Fpage&pagePath=private-next-app-dir%2Fsegmentacion%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fvlu_estrategia_general_website%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();