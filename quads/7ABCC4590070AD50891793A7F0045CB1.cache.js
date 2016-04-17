var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.quads;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '7ABCC4590070AD50891793A7F0045CB1';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 5:1}, $intern_2 = {190:1, 3:1}, $intern_3 = 65535, $intern_4 = {93:1}, $intern_5 = {24:1}, $intern_6 = {54:1, 3:1, 7:1}, $intern_7 = {58:1, 3:1, 25:1, 32:1}, $intern_8 = {148:1, 94:1, 3:1, 7:1, 6:1}, $intern_9 = {45:1}, $intern_10 = {61:1}, $intern_11 = {3:1, 16:1, 8:1, 10:1}, $intern_12 = {64:1, 15:1, 3:1, 7:1, 6:1}, $intern_13 = {50:1, 15:1, 3:1, 7:1, 6:1}, $intern_14 = {15:1, 51:1, 3:1, 7:1, 6:1}, $intern_15 = {15:1, 52:1, 3:1, 7:1, 6:1}, $intern_16 = {20:1, 3:1, 7:1, 6:1}, $intern_17 = {15:1, 83:1, 3:1, 7:1, 6:1}, $intern_18 = {15:1, 36:1, 3:1, 7:1, 6:1}, $intern_19 = 4194303, $intern_20 = {12:1, 11:1}, $intern_21 = {37:1, 3:1, 7:1, 6:1}, $intern_22 = 0.009999999776482582, $intern_23 = 16777215, $intern_24 = {12:1, 18:1, 11:1}, $intern_25 = -16777216, $intern_26 = {14:1}, $intern_27 = 0.9400000013411045, $intern_28 = 0.029999999329447746, $intern_29 = {55:1, 3:1, 7:1, 6:1}, $intern_30 = 10.000000149011612, $intern_31 = 20.000000298023224, $intern_32 = -16731380, $intern_33 = 15.000000953674316, $intern_34 = -1118482, $intern_35 = {3:1, 71:1, 10:1}, $intern_36 = {3:1, 25:1, 32:1}, $intern_37 = {589:1, 3:1}, $intern_38 = {3:1, 7:1, 6:1, 60:1}, $intern_39 = {35:1, 30:1}, $intern_40 = {35:1, 30:1, 47:1, 46:1}, $intern_41 = {44:1, 3:1}, $intern_42 = 0.10000000149011612, $intern_43 = 0.699999988079071, $intern_44 = {3:1, 7:1, 6:1, 70:1}, $intern_45 = 3.4028234663852886E38, $intern_46 = {3:1, 192:1}, $intern_47 = {97:1, 3:1}, $intern_48 = 34962, $intern_49 = 34963, $intern_50 = 6.283185307179586, $intern_51 = {3:1, 7:1, 6:1, 19:1}, $intern_52 = {170:1, 46:1}, $intern_53 = -3.4028234663852886E38, $intern_54 = {96:1}, $intern_55 = {12:1, 11:1, 126:1}, $intern_56 = 1.401298464324817E-45, $intern_57 = -5592406, $intern_58 = {77:1, 14:1}, $intern_59 = {3:1, 7:1, 6:1, 67:1}, $intern_60 = {3:1, 7:1, 6:1, 147:1, 39:1}, $intern_61 = {3:1, 7:1, 6:1, 68:1}, $intern_62 = {3:1, 7:1, 6:1, 53:1}, $intern_63 = 1.4285714626312256;
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function $toString(this$static){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this$static)) + '@' + toUnsignedRadixString(hashCode__I__devirtual$(this$static), 16);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals_0(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $toString(this);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 588:1, 7:1, 2:1};
modernizeBrowser();
function charToString(x_0){
  return String.fromCharCode(x_0);
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && (isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId]);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function narrow_short(x_0){
  return x_0 << 16 >> 16;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId, superclass){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.superclass = superclass;
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.superclass = superclass;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_1('.', [packageName, join_1('$', compoundName)]);
  clazz.canonicalName = join_1('.', [packageName, join_1('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_1(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(193, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  clazz.superclass = Ljava_lang_Object_2_classLit;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_27(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1, null), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0, Ljava_lang_Object_2_classLit), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 193, Ljava_lang_Object_2_classLit);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $setPreferredSoundTypes(this$static, soundTypes){
  var s$index, s$max;
  for (s$index = 0 , s$max = soundTypes.length; s$index < s$max; ++s$index)
  ;
  this$static.preferredSoundTypes = soundTypes;
}

function SoundController(){
  var s, i, gwtVoices, style;
  $clinit_SoundController();
  this.soundContainer = ($clinit_DOM() , $doc.createElement('div'));
  s = $doc.location.href;
  i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  s.length > 0?s + '/':'';
  gwtVoices = getParameter('gwt-voices');
  $equals_0(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 41, 0, [FLASH])):$equals_0(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 41, 0, [HTML5])):$equals_0(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 41, 0, [WEB_AUDIO])):$equals_0(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 41, 0, [NATIVE])):$setPreferredSoundTypes(this, initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 41, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(($clinit_RootPanel() , $doc.body), this.soundContainer);
  style = this.soundContainer.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '-500.0px'));
  $setPropertyImpl(style, 'top', '-500.0px');
  $setPropertyImpl(style, 'width', '0.0px');
  $setPropertyImpl(style, 'height', '0.0px');
}

defineClass(400, 1, {}, SoundController);
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass('com.allen_sauer.gwt.voices.client', 'SoundController', 400, Ljava_lang_Object_2_classLit);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, {3:1, 7:1, 6:1});
_.compareTo = function compareTo(other){
  return this.ordinal - other.ordinal;
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 6, Ljava_lang_Object_2_classLit);
function $clinit_SoundType(){
  $clinit_SoundType = emptyMethod;
  FLASH = new SoundType('FLASH', 0, 'flash');
  HTML5 = new SoundType('HTML5', 1, 'html5');
  NATIVE = new SoundType('NATIVE', 2, 'native');
  WEB_AUDIO = new SoundType('WEB_AUDIO', 3, 'webaudio');
}

function SoundType(enum$name, enum$ordinal, queryParameterValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.queryParameterValue = queryParameterValue;
}

function values_0(){
  $clinit_SoundType();
  return initValues(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 41, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(41, 6, {41:1, 3:1, 7:1, 6:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum('com.allen_sauer.gwt.voices.client', 'SoundType', 41, Ljava_lang_Enum_2_classLit, values_0);
defineClass(645, 1, {3:1});
var Lcom_google_common_base_Optional_2_classLit = createForClass('com.google.common.base', 'Optional', 645, Ljava_lang_Object_2_classLit);
function $clinit_Absent(){
  $clinit_Absent = emptyMethod;
  INSTANCE = new Absent;
}

function Absent(){
}

defineClass(564, 645, {3:1}, Absent);
_.equals$ = function equals_1(object){
  return object === this;
}
;
_.get_0 = function get_0(){
  throw new IllegalStateException_0('Optional.get() cannot be called on an absent value');
}
;
_.hashCode$ = function hashCode_2(){
  return 2040732332;
}
;
_.isPresent = function isPresent(){
  return false;
}
;
_.toString$ = function toString_2(){
  return 'Optional.absent()';
}
;
var INSTANCE;
var Lcom_google_common_base_Absent_2_classLit = createForClass('com.google.common.base', 'Absent', 564, Lcom_google_common_base_Optional_2_classLit);
function $hasNext(this$static){
  checkState(this$static.state != 3);
  switch (this$static.state) {
    case 0:
      return true;
    case 2:
      return false;
  }
  return $tryToComputeNext(this$static);
}

function $next(this$static){
  var result;
  if (!$hasNext(this$static)) {
    throw new NoSuchElementException;
  }
  this$static.state = 1;
  result = this$static.next;
  this$static.next = null;
  return result;
}

function $tryToComputeNext(this$static){
  this$static.state = 3;
  this$static.next = $computeNext(this$static);
  if (this$static.state != 2) {
    this$static.state = 0;
    return true;
  }
  return false;
}

defineClass(526, 1, {});
_.hasNext = function hasNext(){
  return $hasNext(this);
}
;
_.next_0 = function next(){
  return $next(this);
}
;
_.state = 1;
var Lcom_google_common_base_AbstractIterator_2_classLit = createForClass('com.google.common.base', 'AbstractIterator', 526, Ljava_lang_Object_2_classLit);
function $clinit_CharMatcher(){
  $clinit_CharMatcher = emptyMethod;
  $clinit_CharMatcher$Whitespace();
  $clinit_CharMatcher();
  $clinit_CharMatcher$Ascii();
  $clinit_CharMatcher$Digit();
  $clinit_CharMatcher$JavaIsoControl();
  $clinit_CharMatcher$Invisible();
  $clinit_CharMatcher$SingleWidth();
  $clinit_CharMatcher$Any();
  $clinit_CharMatcher$None();
}

function $indexIn(this$static, sequence, start_0){
  var i, length_0;
  length_0 = sequence.length;
  checkPositionIndex(start_0, length_0);
  for (i = start_0; i < length_0; i++) {
    if ($matches(this$static, sequence.charCodeAt(i))) {
      return i;
    }
  }
  return -1;
}

function showCharacter(c){
  var i, tmp;
  tmp = initValues(getClassLiteralForArray(C_classLit, 1), $intern_2, 0, 7, [92, 117, 0, 0, 0, 0]);
  for (i = 0; i < 4; i++) {
    tmp[5 - i] = '0123456789ABCDEF'.charCodeAt(c & 15);
    c = c >> 4 & $intern_3;
  }
  return __valueOf(tmp, 0, tmp.length);
}

defineClass(651, 1, {});
_.toString$ = function toString_3(){
  return $getName(this.___clazz$) + '@' + toUnsignedRadixString(getHashCode(this), 16);
}
;
var Lcom_google_common_base_CharMatcher_2_classLit = createForClass('com.google.common.base', 'CharMatcher', 651, Ljava_lang_Object_2_classLit);
defineClass(652, 651, {});
var Lcom_google_common_base_CharMatcher$FastMatcher_2_classLit = createForClass('com.google.common.base', 'CharMatcher/FastMatcher', 652, Lcom_google_common_base_CharMatcher_2_classLit);
function CharMatcher$NamedFastMatcher(description){
  $clinit_CharMatcher();
  this.description = checkNotNull(description);
}

defineClass(117, 652, {});
_.toString$ = function toString_4(){
  return this.description;
}
;
var Lcom_google_common_base_CharMatcher$NamedFastMatcher_2_classLit = createForClass('com.google.common.base', 'CharMatcher/NamedFastMatcher', 117, Lcom_google_common_base_CharMatcher$FastMatcher_2_classLit);
function $clinit_CharMatcher$Any(){
  $clinit_CharMatcher$Any = emptyMethod;
  $clinit_CharMatcher();
  new CharMatcher$Any;
}

function CharMatcher$Any(){
  CharMatcher$NamedFastMatcher.call(this, 'CharMatcher.any()');
}

defineClass(555, 117, {}, CharMatcher$Any);
var Lcom_google_common_base_CharMatcher$Any_2_classLit = createForClass('com.google.common.base', 'CharMatcher/Any', 555, Lcom_google_common_base_CharMatcher$NamedFastMatcher_2_classLit);
function $clinit_CharMatcher$Ascii(){
  $clinit_CharMatcher$Ascii = emptyMethod;
  $clinit_CharMatcher();
  new CharMatcher$Ascii;
}

function CharMatcher$Ascii(){
  CharMatcher$NamedFastMatcher.call(this, 'CharMatcher.ascii()');
}

defineClass(558, 117, {}, CharMatcher$Ascii);
var Lcom_google_common_base_CharMatcher$Ascii_2_classLit = createForClass('com.google.common.base', 'CharMatcher/Ascii', 558, Lcom_google_common_base_CharMatcher$NamedFastMatcher_2_classLit);
function CharMatcher$RangesMatcher(description, rangeStarts, rangeEnds){
  $clinit_CharMatcher();
  var i;
  this.description = description;
  checkArgument(rangeStarts.length == rangeEnds.length);
  for (i = 0; i < rangeStarts.length; i++) {
    checkArgument(rangeStarts[i] <= rangeEnds[i]);
    i + 1 < rangeStarts.length && checkArgument(rangeEnds[i] < rangeStarts[i + 1]);
  }
}

defineClass(186, 651, {});
_.toString$ = function toString_5(){
  return this.description;
}
;
var Lcom_google_common_base_CharMatcher$RangesMatcher_2_classLit = createForClass('com.google.common.base', 'CharMatcher/RangesMatcher', 186, Lcom_google_common_base_CharMatcher_2_classLit);
function $clinit_CharMatcher$Digit(){
  $clinit_CharMatcher$Digit = emptyMethod;
  $clinit_CharMatcher();
  new CharMatcher$Digit;
}

function CharMatcher$Digit(){
  CharMatcher$RangesMatcher.call(this, 'CharMatcher.digit()', $toCharArray('0\u0660\u06F0\u07C0\u0966\u09E6\u0A66\u0AE6\u0B66\u0BE6\u0C66\u0CE6\u0D66\u0E50\u0ED0\u0F20\u1040\u1090\u17E0\u1810\u1946\u19D0\u1B50\u1BB0\u1C40\u1C50\uA620\uA8D0\uA900\uAA50\uFF10'), nines_0());
}

function nines_0(){
  var i, nines;
  nines = initDim(C_classLit, $intern_2, 0, 31, 7, 1);
  for (i = 0; i < 31; i++) {
    nines[i] = '0\u0660\u06F0\u07C0\u0966\u09E6\u0A66\u0AE6\u0B66\u0BE6\u0C66\u0CE6\u0D66\u0E50\u0ED0\u0F20\u1040\u1090\u17E0\u1810\u1946\u19D0\u1B50\u1BB0\u1C40\u1C50\uA620\uA8D0\uA900\uAA50\uFF10'.charCodeAt(i) + 9 & $intern_3;
  }
  return nines;
}

defineClass(559, 186, {}, CharMatcher$Digit);
var Lcom_google_common_base_CharMatcher$Digit_2_classLit = createForClass('com.google.common.base', 'CharMatcher/Digit', 559, Lcom_google_common_base_CharMatcher$RangesMatcher_2_classLit);
function $clinit_CharMatcher$Invisible(){
  $clinit_CharMatcher$Invisible = emptyMethod;
  $clinit_CharMatcher();
  new CharMatcher$Invisible;
}

function CharMatcher$Invisible(){
  CharMatcher$RangesMatcher.call(this, 'CharMatcher.invisible()', $toCharArray('\0\x7F\xAD\u0600\u061C\u06DD\u070F\u1680\u180E\u2000\u2028\u205F\u2066\u2067\u2068\u2069\u206A\u3000\uD800\uFEFF\uFFF9\uFFFA'), $toCharArray(' \xA0\xAD\u0604\u061C\u06DD\u070F\u1680\u180E\u200F\u202F\u2064\u2066\u2067\u2068\u2069\u206F\u3000\uF8FF\uFEFF\uFFF9\uFFFB'));
}

defineClass(561, 186, {}, CharMatcher$Invisible);
var Lcom_google_common_base_CharMatcher$Invisible_2_classLit = createForClass('com.google.common.base', 'CharMatcher/Invisible', 561, Lcom_google_common_base_CharMatcher$RangesMatcher_2_classLit);
function $matches(this$static, c){
  return c == this$static.match_0;
}

function CharMatcher$Is(){
  $clinit_CharMatcher();
  this.match_0 = 10;
}

defineClass(563, 652, {}, CharMatcher$Is);
_.toString$ = function toString_6(){
  return "CharMatcher.is('" + showCharacter(this.match_0) + "')";
}
;
_.match_0 = 0;
var Lcom_google_common_base_CharMatcher$Is_2_classLit = createForClass('com.google.common.base', 'CharMatcher/Is', 563, Lcom_google_common_base_CharMatcher$FastMatcher_2_classLit);
function $clinit_CharMatcher$JavaIsoControl(){
  $clinit_CharMatcher$JavaIsoControl = emptyMethod;
  $clinit_CharMatcher();
  new CharMatcher$JavaIsoControl;
}

function CharMatcher$JavaIsoControl(){
  CharMatcher$NamedFastMatcher.call(this, 'CharMatcher.javaIsoControl()');
}

defineClass(560, 117, {}, CharMatcher$JavaIsoControl);
var Lcom_google_common_base_CharMatcher$JavaIsoControl_2_classLit = createForClass('com.google.common.base', 'CharMatcher/JavaIsoControl', 560, Lcom_google_common_base_CharMatcher$NamedFastMatcher_2_classLit);
function $clinit_CharMatcher$None(){
  $clinit_CharMatcher$None = emptyMethod;
  $clinit_CharMatcher();
  new CharMatcher$None;
}

function CharMatcher$None(){
  CharMatcher$NamedFastMatcher.call(this, 'CharMatcher.none()');
}

defineClass(556, 117, {}, CharMatcher$None);
var Lcom_google_common_base_CharMatcher$None_2_classLit = createForClass('com.google.common.base', 'CharMatcher/None', 556, Lcom_google_common_base_CharMatcher$NamedFastMatcher_2_classLit);
function $clinit_CharMatcher$SingleWidth(){
  $clinit_CharMatcher$SingleWidth = emptyMethod;
  $clinit_CharMatcher();
  new CharMatcher$SingleWidth;
}

function CharMatcher$SingleWidth(){
  CharMatcher$RangesMatcher.call(this, 'CharMatcher.singleWidth()', $toCharArray('\0\u05BE\u05D0\u05F3\u0600\u0750\u0E00\u1E00\u2100\uFB50\uFE70\uFF61'), $toCharArray('\u04F9\u05BE\u05EA\u05F4\u06FF\u077F\u0E7F\u20AF\u213A\uFDFF\uFEFF\uFFDC'));
}

defineClass(562, 186, {}, CharMatcher$SingleWidth);
var Lcom_google_common_base_CharMatcher$SingleWidth_2_classLit = createForClass('com.google.common.base', 'CharMatcher/SingleWidth', 562, Lcom_google_common_base_CharMatcher$RangesMatcher_2_classLit);
function $clinit_CharMatcher$Whitespace(){
  $clinit_CharMatcher$Whitespace = emptyMethod;
  $clinit_CharMatcher();
  numberOfLeadingZeros(31);
  new CharMatcher$Whitespace;
}

function CharMatcher$Whitespace(){
  CharMatcher$NamedFastMatcher.call(this, 'CharMatcher.whitespace()');
}

defineClass(557, 117, {}, CharMatcher$Whitespace);
var Lcom_google_common_base_CharMatcher$Whitespace_2_classLit = createForClass('com.google.common.base', 'CharMatcher/Whitespace', 557, Lcom_google_common_base_CharMatcher$NamedFastMatcher_2_classLit);
function Joiner(){
  this.separator = checkNotNull(', ');
}

defineClass(251, 1, {}, Joiner);
_.useForNull = function useForNull(nullText){
  checkNotNull(nullText);
  return new Joiner$1(this);
}
;
var Lcom_google_common_base_Joiner_2_classLit = createForClass('com.google.common.base', 'Joiner', 251, Ljava_lang_Object_2_classLit);
function Joiner$1($anonymous0){
  this.separator = $anonymous0.separator;
}

defineClass(570, 251, {}, Joiner$1);
_.useForNull = function useForNull_0(nullText){
  throw new UnsupportedOperationException_0('already specified useForNull');
}
;
var Lcom_google_common_base_Joiner$1_2_classLit = createForClass('com.google.common.base', 'Joiner/1', 570, Lcom_google_common_base_Joiner_2_classLit);
function Joiner$MapJoiner(keyValueSeparator){
  checkNotNull(keyValueSeparator);
}

defineClass(569, 1, {}, Joiner$MapJoiner);
var Lcom_google_common_base_Joiner$MapJoiner_2_classLit = createForClass('com.google.common.base', 'Joiner/MapJoiner', 569, Ljava_lang_Object_2_classLit);
function $addHolder(this$static, name_0, value_0){
  var valueHolder, valueHolder_0;
  valueHolder = (valueHolder_0 = new MoreObjects$ToStringHelper$ValueHolder , this$static.holderTail = this$static.holderTail.next = valueHolder_0 , valueHolder_0);
  valueHolder.value_0 = value_0;
  valueHolder.name_0 = checkNotNull(name_0);
  return this$static;
}

function $toString_0(this$static){
  var arrayString, builder, nextSeparator, objectArray, value_0, valueHolder;
  nextSeparator = '';
  builder = $append_1($append_6(new StringBuilder_0, this$static.className), 123);
  for (valueHolder = this$static.holderHead.next; valueHolder; valueHolder = valueHolder.next) {
    value_0 = valueHolder.value_0;
    builder.string += nextSeparator;
    nextSeparator = ', ';
    valueHolder.name_0 != null && $append_1($append_6(builder, valueHolder.name_0), 61);
    if (value_0 != null && (getClass__Ljava_lang_Class___devirtual$(value_0).modifiers & 4) != 0) {
      objectArray = initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [value_0]);
      arrayString = deepToString(objectArray, new HashSet);
      $append_6(builder, $substring_0(arrayString, 1, arrayString.length - 1));
    }
     else {
      builder.string += value_0;
    }
  }
  return (builder.string += '}' , builder).string;
}

function MoreObjects$ToStringHelper(className){
  this.holderHead = new MoreObjects$ToStringHelper$ValueHolder;
  this.holderTail = this.holderHead;
  this.className = checkNotNull(className);
}

defineClass(575, 1, {}, MoreObjects$ToStringHelper);
_.toString$ = function toString_7(){
  return $toString_0(this);
}
;
var Lcom_google_common_base_MoreObjects$ToStringHelper_2_classLit = createForClass('com.google.common.base', 'MoreObjects/ToStringHelper', 575, Ljava_lang_Object_2_classLit);
function MoreObjects$ToStringHelper$ValueHolder(){
}

defineClass(252, 1, {}, MoreObjects$ToStringHelper$ValueHolder);
var Lcom_google_common_base_MoreObjects$ToStringHelper$ValueHolder_2_classLit = createForClass('com.google.common.base', 'MoreObjects/ToStringHelper/ValueHolder', 252, Ljava_lang_Object_2_classLit);
function equal(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function badPositionIndex(index_0, size_0){
  if (index_0 < 0) {
    return format_0('%s (%s) must not be negative', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['index', valueOf_0(index_0)]));
  }
   else if (size_0 < 0) {
    throw new IllegalArgumentException_0('negative size: ' + size_0);
  }
   else {
    return format_0('%s (%s) must not be greater than size (%s)', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['index', valueOf_0(index_0), valueOf_0(size_0)]));
  }
}

function checkArgument(expression){
  if (!expression) {
    throw new IllegalArgumentException;
  }
}

function checkArgument_0(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0(badPositionIndex(index_0, size_0));
  }
  return index_0;
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression, errorMessage){
  if (!expression) {
    throw new IllegalStateException_0('' + errorMessage);
  }
}

function format_0(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_6(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_5(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_6(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_5(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_5(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function Present(reference){
  this.reference = reference;
}

defineClass(189, 645, {189:1, 3:1}, Present);
_.equals$ = function equals_2(object){
  var other;
  if (instanceOf(object, 189)) {
    other = object;
    return equals_Ljava_lang_Object__Z__devirtual$(this.reference, other.reference);
  }
  return false;
}
;
_.get_0 = function get_1(){
  return this.reference;
}
;
_.hashCode$ = function hashCode_3(){
  return 1502476572 + hashCode__I__devirtual$(this.reference);
}
;
_.isPresent = function isPresent_0(){
  return true;
}
;
_.toString$ = function toString_8(){
  return 'Optional.of(' + this.reference + ')';
}
;
var Lcom_google_common_base_Present_2_classLit = createForClass('com.google.common.base', 'Present', 189, Lcom_google_common_base_Optional_2_classLit);
function $splitToList(this$static, sequence){
  var iterator, result;
  checkNotNull(sequence);
  iterator = $iterator(this$static.strategy, this$static, sequence);
  result = new ArrayList;
  while ($hasNext(iterator)) {
    $add_1(result, $next(iterator));
  }
  return $clinit_Collections() , new Collections$UnmodifiableRandomAccessList(result);
}

function Splitter(strategy){
  Splitter_0.call(this, strategy, $clinit_CharMatcher());
}

function Splitter_0(strategy){
  this.strategy = strategy;
  this.omitEmptyStrings = false;
  this.limit = $intern_0;
}

function on_0(separatorMatcher){
  checkNotNull(separatorMatcher);
  return new Splitter(new Splitter$1(separatorMatcher));
}

defineClass(243, 1, {}, Splitter);
_.limit = 0;
_.omitEmptyStrings = false;
var Lcom_google_common_base_Splitter_2_classLit = createForClass('com.google.common.base', 'Splitter', 243, Ljava_lang_Object_2_classLit);
function $iterator(this$static, splitter, toSplit){
  return new Splitter$1$1(splitter, toSplit, this$static.val$separatorMatcher1);
}

function Splitter$1(val$separatorMatcher){
  this.val$separatorMatcher1 = val$separatorMatcher;
}

defineClass(528, 1, {}, Splitter$1);
var Lcom_google_common_base_Splitter$1_2_classLit = createForClass('com.google.common.base', 'Splitter/1', 528, Ljava_lang_Object_2_classLit);
function $computeNext(this$static){
  var end, nextStart, separatorPosition, start_0;
  nextStart = this$static.offset;
  while (this$static.offset != -1) {
    start_0 = nextStart;
    separatorPosition = $separatorStart(this$static, this$static.offset);
    if (separatorPosition == -1) {
      end = this$static.toSplit.length;
      this$static.offset = -1;
    }
     else {
      end = separatorPosition;
      this$static.offset = separatorPosition + 1;
    }
    if (this$static.offset == nextStart) {
      ++this$static.offset;
      this$static.offset >= this$static.toSplit.length && (this$static.offset = -1);
      continue;
    }
    while (start_0 < end && ($charAt_0(this$static.toSplit, start_0) , false)) {
      ++start_0;
    }
    while (end > start_0 && ($charAt_0(this$static.toSplit, end - 1) , false)) {
      --end;
    }
    if (this$static.omitEmptyStrings && start_0 == end) {
      nextStart = this$static.offset;
      continue;
    }
    if (this$static.limit == 1) {
      end = this$static.toSplit.length;
      this$static.offset = -1;
      while (end > start_0 && ($charAt_0(this$static.toSplit, end - 1) , false)) {
        --end;
      }
    }
     else {
      --this$static.limit;
    }
    return $subSequence(this$static.toSplit, start_0, end);
  }
  return this$static.state = 2 , null;
}

defineClass(527, 526, {});
_.limit = 0;
_.offset = 0;
_.omitEmptyStrings = false;
var Lcom_google_common_base_Splitter$SplittingIterator_2_classLit = createForClass('com.google.common.base', 'Splitter/SplittingIterator', 527, Lcom_google_common_base_AbstractIterator_2_classLit);
function $separatorStart(this$static, start_0){
  return $indexIn(this$static.val$separatorMatcher4, this$static.toSplit, start_0);
}

function Splitter$1$1($anonymous0, $anonymous1, val$separatorMatcher){
  this.val$separatorMatcher4 = val$separatorMatcher;
  this.omitEmptyStrings = $anonymous0.omitEmptyStrings;
  this.limit = $anonymous0.limit;
  this.toSplit = $anonymous1;
}

defineClass(529, 527, {}, Splitter$1$1);
var Lcom_google_common_base_Splitter$1$1_2_classLit = createForClass('com.google.common.base', 'Splitter/1/1', 529, Lcom_google_common_base_Splitter$SplittingIterator_2_classLit);
defineClass(93, 1, $intern_4);
var Lcom_google_common_collect_UnmodifiableIterator_2_classLit = createForClass('com.google.common.collect', 'UnmodifiableIterator', 93, Ljava_lang_Object_2_classLit);
defineClass(642, 93, $intern_4);
var Lcom_google_common_collect_UnmodifiableListIterator_2_classLit = createForClass('com.google.common.collect', 'UnmodifiableListIterator', 642, Lcom_google_common_collect_UnmodifiableIterator_2_classLit);
defineClass(512, 642, $intern_4);
_.hasNext = function hasNext_0(){
  return this.position_0 < this.size_0;
}
;
_.next_0 = function next_0(){
  if (this.position_0 >= this.size_0) {
    throw new NoSuchElementException;
  }
  return $get_0(this, this.position_0++);
}
;
_.position_0 = 0;
_.size_0 = 0;
var Lcom_google_common_collect_AbstractIndexedListIterator_2_classLit = createForClass('com.google.common.collect', 'AbstractIndexedListIterator', 512, Lcom_google_common_collect_UnmodifiableListIterator_2_classLit);
defineClass(649, 1, $intern_5);
_.equals$ = function equals_3(object){
  var that;
  if (instanceOf(object, 24)) {
    that = object;
    return equal(this.val$entry1.getKey(), that.getKey()) && equal($transformEntry(this.val$transformer2, (this.val$entry1.getKey() , this.val$entry1.getValue())), that.getValue());
  }
  return false;
}
;
_.hashCode$ = function hashCode_4(){
  var k, v;
  k = this.val$entry1.getKey();
  v = $transformEntry(this.val$transformer2, (this.val$entry1.getKey() , this.val$entry1.getValue()));
  return (k == null?0:hashCode__I__devirtual$(k)) ^ getHashCode(v);
}
;
_.setValue = function setValue(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_9(){
  return this.val$entry1.getKey() + '=' + $transformEntry(this.val$transformer2, (this.val$entry1.getKey() , this.val$entry1.getValue()));
}
;
var Lcom_google_common_collect_AbstractMapEntry_2_classLit = createForClass('com.google.common.collect', 'AbstractMapEntry', 649, Ljava_lang_Object_2_classLit);
function $clinit_Collections2(){
  $clinit_Collections2 = emptyMethod;
  (new Joiner).useForNull('null');
}

function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkNotNull_0(c);
  changed = false;
  for (e$iterator = $iterator_0(new AbstractMap$1(c.map_0)); $hasNext_0(e$iterator.val$outerIter2);) {
    e = $next_3(e$iterator);
    changed = changed | $add_2(this$static, e);
  }
  return changed;
}

function $advanceToFind(this$static, o){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull_0(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains(e)) {
      return false;
    }
  }
  return true;
}

function $toArray(this$static){
  return this$static.toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, this$static.size_1(), 3, 1));
}

function $toArray_0(this$static, a){
  var i, it, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    a[i] = it.next_0();
  }
  a.length > size_0 && (a[size_0] = null);
  return a;
}

function $toString_1(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(604, 1, {});
_.contains = function contains(o){
  return $advanceToFind(this, o);
}
;
_.toArray = function toArray(){
  return $toArray(this);
}
;
_.toArray_0 = function toArray_0(a){
  return $toArray_0(this, a);
}
;
_.toString$ = function toString_10(){
  return $toString_1(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 604, Ljava_lang_Object_2_classLit);
function Collections2$TransformedCollection(fromCollection, function_$){
  this.fromCollection = checkNotNull(fromCollection);
  this.function_$ = checkNotNull(function_$);
}

defineClass(548, 604, {}, Collections2$TransformedCollection);
_.iterator = function iterator_0(){
  return transform(this.fromCollection.iterator(), this.function_$);
}
;
_.size_1 = function size_1(){
  return this.fromCollection.size_1();
}
;
var Lcom_google_common_collect_Collections2$TransformedCollection_2_classLit = createForClass('com.google.common.collect', 'Collections2/TransformedCollection', 548, Ljava_util_AbstractCollection_2_classLit);
function $equals(this$static, obj){
  var compareResult, that;
  if (instanceOf(obj, 54)) {
    that = obj;
    try {
      compareResult = this$static.compareTo_0(that);
      return compareResult == 0;
    }
     catch ($e0) {
      $e0 = wrap_0($e0);
      if (!instanceOf($e0, 56))
        throw unwrap($e0);
    }
  }
  return false;
}

function Cut(endpoint){
  this.endpoint = endpoint;
}

defineClass(54, 1, $intern_6);
_.compareTo_0 = function compareTo_0(that){
  var result;
  if (that == ($clinit_Cut$BelowAll() , INSTANCE_1)) {
    return 1;
  }
  if (that == ($clinit_Cut$AboveAll() , INSTANCE_0)) {
    return -1;
  }
  result = ($clinit_Range() , compareTo_Ljava_lang_Object__I__devirtual$(this.endpoint, that.endpoint));
  if (result != 0) {
    return result;
  }
  return instanceOf(this, 118) == instanceOf(that, 118)?0:instanceOf(this, 118)?1:-1;
}
;
_.compareTo = function compareTo_1(that){
  return this.compareTo_0(that);
}
;
_.equals$ = function equals_4(obj){
  return $equals(this, obj);
}
;
var Lcom_google_common_collect_Cut_2_classLit = createForClass('com.google.common.collect', 'Cut', 54, Ljava_lang_Object_2_classLit);
function $clinit_Cut$AboveAll(){
  $clinit_Cut$AboveAll = emptyMethod;
  INSTANCE_0 = new Cut$AboveAll;
}

function Cut$AboveAll(){
  Cut.call(this, null);
}

defineClass(572, 54, $intern_6, Cut$AboveAll);
_.compareTo_0 = function compareTo_2(o){
  return o == this?0:1;
}
;
_.describeAsLowerBound = function describeAsLowerBound(sb){
  throw new AssertionError;
}
;
_.describeAsUpperBound = function describeAsUpperBound(sb){
  sb.string += '+\u221E)';
}
;
_.isLessThan = function isLessThan(value_0){
  return false;
}
;
_.toString$ = function toString_11(){
  return '+\u221E';
}
;
var INSTANCE_0;
var Lcom_google_common_collect_Cut$AboveAll_2_classLit = createForClass('com.google.common.collect', 'Cut/AboveAll', 572, Lcom_google_common_collect_Cut_2_classLit);
function Cut$AboveValue(endpoint){
  Cut.call(this, checkNotNull(endpoint));
}

defineClass(118, 54, {54:1, 118:1, 3:1, 7:1}, Cut$AboveValue);
_.describeAsLowerBound = function describeAsLowerBound_0(sb){
  $append_5((sb.string += '(' , sb), this.endpoint);
}
;
_.describeAsUpperBound = function describeAsUpperBound_0(sb){
  $append_1($append_5(sb, this.endpoint), 93);
}
;
_.hashCode$ = function hashCode_5(){
  return ~hashCode__I__devirtual$(this.endpoint);
}
;
_.isLessThan = function isLessThan_0(value_0){
  return $clinit_Range() , compareTo_Ljava_lang_Object__I__devirtual$(this.endpoint, value_0) < 0;
}
;
_.toString$ = function toString_12(){
  return '/' + this.endpoint + '\\';
}
;
var Lcom_google_common_collect_Cut$AboveValue_2_classLit = createForClass('com.google.common.collect', 'Cut/AboveValue', 118, Lcom_google_common_collect_Cut_2_classLit);
function $clinit_Cut$BelowAll(){
  $clinit_Cut$BelowAll = emptyMethod;
  INSTANCE_1 = new Cut$BelowAll;
}

function Cut$BelowAll(){
  Cut.call(this, null);
}

defineClass(571, 54, $intern_6, Cut$BelowAll);
_.compareTo_0 = function compareTo_3(o){
  return o == this?0:-1;
}
;
_.describeAsLowerBound = function describeAsLowerBound_1(sb){
  sb.string += '(-\u221E';
}
;
_.describeAsUpperBound = function describeAsUpperBound_1(sb){
  throw new AssertionError;
}
;
_.isLessThan = function isLessThan_1(value_0){
  return true;
}
;
_.toString$ = function toString_13(){
  return '-\u221E';
}
;
var INSTANCE_1;
var Lcom_google_common_collect_Cut$BelowAll_2_classLit = createForClass('com.google.common.collect', 'Cut/BelowAll', 571, Lcom_google_common_collect_Cut_2_classLit);
function Cut$BelowValue(endpoint){
  Cut.call(this, checkNotNull(endpoint));
}

defineClass(573, 54, $intern_6, Cut$BelowValue);
_.describeAsLowerBound = function describeAsLowerBound_2(sb){
  $append_5((sb.string += '[' , sb), this.endpoint);
}
;
_.describeAsUpperBound = function describeAsUpperBound_2(sb){
  $append_1($append_5(sb, this.endpoint), 41);
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode__I__devirtual$(this.endpoint);
}
;
_.isLessThan = function isLessThan_2(value_0){
  return $clinit_Range() , compareTo_Ljava_lang_Object__I__devirtual$(this.endpoint, value_0) <= 0;
}
;
_.toString$ = function toString_14(){
  return '\\' + this.endpoint + '/';
}
;
var Lcom_google_common_collect_Cut$BelowValue_2_classLit = createForClass('com.google.common.collect', 'Cut/BelowValue', 573, Lcom_google_common_collect_Cut_2_classLit);
function $clinit_ImmutableCollection(){
  $clinit_ImmutableCollection = emptyMethod;
  new ForwardingImmutableCollection(($clinit_Collections() , $clinit_Collections() , EMPTY_LIST));
}

function $createAsList(this$static){
  switch (this$static.size_1()) {
    case 0:
      return $clinit_ImmutableList() , $clinit_ImmutableList() , EMPTY;
    case 1:
      return $clinit_ImmutableList() , new SingletonImmutableList(this$static.iterator_0().next_0());
    default:return new RegularImmutableAsList_0(this$static, this$static.toArray());
  }
}

defineClass(58, 604, {58:1, 3:1});
_.add_0 = function add_0(e){
  throw new UnsupportedOperationException;
}
;
_.asList_0 = function asList(){
  var list;
  list = this.asList;
  return !list?(this.asList = $createAsList(this)):list;
}
;
_.contains = function contains_0(object){
  return object != null && $advanceToFind(this, object);
}
;
_.iterator = function iterator_1(){
  return this.iterator_0();
}
;
var Lcom_google_common_collect_ImmutableCollection_2_classLit = createForClass('com.google.common.collect', 'ImmutableCollection', 58, Ljava_util_AbstractCollection_2_classLit);
function ForwardingImmutableCollection(delegate){
  this.delegate = delegate;
}

defineClass(530, 58, {58:1, 3:1}, ForwardingImmutableCollection);
_.contains = function contains_1(object){
  return false;
}
;
_.iterator_0 = function iterator_2(){
  return unmodifiableIterator(($clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_3));
}
;
_.size_1 = function size_2(){
  return 0;
}
;
_.toArray = function toArray_1(){
  return $toArray(this.delegate);
}
;
_.toArray_0 = function toArray_2(other){
  return $toArray_0(this.delegate, other);
}
;
_.toString$ = function toString_15(){
  return $toString_1(this.delegate);
}
;
var Lcom_google_common_collect_ForwardingImmutableCollection_2_classLit = createForClass('com.google.common.collect', 'ForwardingImmutableCollection', 530, Lcom_google_common_collect_ImmutableCollection_2_classLit);
function $clinit_ImmutableList(){
  $clinit_ImmutableList = emptyMethod;
  $clinit_ImmutableCollection();
  EMPTY = new RegularImmutableList(($clinit_Collections() , $clinit_Collections() , EMPTY_LIST));
}

function $listIterator(this$static, index_0){
  return new ImmutableList$1(this$static, this$static.size_1(), index_0);
}

function copyFromCollection(collection){
  var elements, list;
  elements = collection.toArray();
  switch (elements.length) {
    case 0:
      return EMPTY;
    case 1:
      list = new SingletonImmutableList(elements[0]);
      return list;
    default:return new RegularImmutableList(nullCheckedList(elements));
  }
}

function copyOf(elements){
  $clinit_ImmutableList();
  var list;
  if (instanceOf(elements, 58)) {
    list = elements;
    return list.asList_0();
  }
  return copyFromCollection(elements);
}

function nullCheckedList(array){
  $clinit_ImmutableList();
  var i, len;
  for (i = 0 , len = array.length; i < len; i++) {
    if (array[i] == null) {
      throw new NullPointerException_0('at index ' + i);
    }
  }
  return new Arrays$ArrayList(array);
}

function unsafeDelegateList(list){
  switch (list.array.length) {
    case 0:
      return EMPTY;
    case 1:
      return new SingletonImmutableList($next_2(new AbstractList$IteratorImpl(list)));
    default:return new RegularImmutableList(list);
  }
}

defineClass(640, 58, $intern_7);
_.asList_0 = function asList_0(){
  return this;
}
;
_.equals$ = function equals_5(obj){
  return equalsImpl(this, obj);
}
;
_.hashCode$ = function hashCode_7(){
  return hashCodeImpl(this);
}
;
_.indexOf_0 = function indexOf(object){
  return object == null?-1:indexOfRandomAccess(this, object);
}
;
_.iterator_0 = function iterator_3(){
  return this.listIterator(0);
}
;
_.iterator = function iterator_4(){
  return this.iterator_0();
}
;
_.listIterator = function listIterator(index_0){
  return $listIterator(this, index_0);
}
;
var EMPTY;
var Lcom_google_common_collect_ImmutableList_2_classLit = createForClass('com.google.common.collect', 'ImmutableList', 640, Lcom_google_common_collect_ImmutableCollection_2_classLit);
function $get(this$static, index_0){
  return this$static.delegateList_0().get_1(index_0);
}

function $indexOf(this$static, object){
  return this$static.delegateList_0().indexOf_0(object);
}

defineClass(644, 640, $intern_7);
_.contains = function contains_2(object){
  return object != null && this.delegateList_0().contains(object);
}
;
_.equals$ = function equals_6(obj){
  return this.delegateList_0().equals$(obj);
}
;
_.get_1 = function get_2(index_0){
  return $get(this, index_0);
}
;
_.hashCode$ = function hashCode_8(){
  return this.delegateList_0().hashCode$();
}
;
_.indexOf_0 = function indexOf_0(object){
  return $indexOf(this, object);
}
;
_.iterator_0 = function iterator_5(){
  return unmodifiableIterator(this.delegateList_0().iterator());
}
;
_.size_1 = function size_3(){
  return this.delegateList_0().size_1();
}
;
_.toArray = function toArray_3(){
  return this.delegateList_0().toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, this.delegateList_0().size_1(), 3, 1));
}
;
_.toArray_0 = function toArray_4(other){
  return this.delegateList_0().toArray_0(other);
}
;
_.toString$ = function toString_16(){
  return this.delegateList_0().toString$();
}
;
var Lcom_google_common_collect_ForwardingImmutableList_2_classLit = createForClass('com.google.common.collect', 'ForwardingImmutableList', 644, Lcom_google_common_collect_ImmutableList_2_classLit);
defineClass(653, 640, $intern_7);
_.contains = function contains_3(target){
  return this.delegate.contains(target);
}
;
_.size_1 = function size_4(){
  return this.delegate.size_1();
}
;
var Lcom_google_common_collect_ImmutableAsList_2_classLit = createForClass('com.google.common.collect', 'ImmutableAsList', 653, Lcom_google_common_collect_ImmutableList_2_classLit);
defineClass(641, 1, {});
var Lcom_google_common_collect_ImmutableCollection$Builder_2_classLit = createForClass('com.google.common.collect', 'ImmutableCollection/Builder', 641, Ljava_lang_Object_2_classLit);
function $get_0(this$static, index_0){
  return this$static.this$01.get_1(index_0);
}

function ImmutableList$1(this$0, $anonymous0, $anonymous1){
  this.this$01 = this$0;
  checkPositionIndex($anonymous1, $anonymous0);
  this.size_0 = $anonymous0;
  this.position_0 = $anonymous1;
}

defineClass(513, 512, $intern_4, ImmutableList$1);
var Lcom_google_common_collect_ImmutableList$1_2_classLit = createForClass('com.google.common.collect', 'ImmutableList/1', 513, Lcom_google_common_collect_AbstractIndexedListIterator_2_classLit);
function ImmutableList$Builder(){
  this.contents = new ArrayList;
}

defineClass(511, 641, {}, ImmutableList$Builder);
var Lcom_google_common_collect_ImmutableList$Builder_2_classLit = createForClass('com.google.common.collect', 'ImmutableList/Builder', 511, Lcom_google_common_collect_ImmutableCollection$Builder_2_classLit);
function elementsEqual(iterator1, iterator2){
  var o1, o2;
  while (iterator1.hasNext()) {
    if (!iterator2.hasNext()) {
      return false;
    }
    o1 = iterator1.next_0();
    o2 = iterator2.next_0();
    if (!(maskUndefined(o1) === maskUndefined(o2) || o1 != null && equals_Ljava_lang_Object__Z__devirtual$(o1, o2))) {
      return false;
    }
  }
  return !iterator2.hasNext();
}

function indexOf_1(iterator){
  var current, i;
  for (i = 0; iterator.i < iterator.this$01.size_1(); i++) {
    current = (checkCriticalElement(iterator.i < iterator.this$01.size_1()) , iterator.this$01.get_1(iterator.i++));
    if (current.keepPlayerTailOnEnter()) {
      return i;
    }
  }
  return -1;
}

function transform(fromIterator, function_$){
  checkNotNull(function_$);
  return new Iterators$8(fromIterator, function_$);
}

function unmodifiableIterator(iterator){
  checkNotNull(iterator);
  if (instanceOf(iterator, 93)) {
    return iterator;
  }
  return new Iterators$3(iterator);
}

function Iterators$3(val$iterator){
  this.val$iterator1 = val$iterator;
}

defineClass(576, 93, $intern_4, Iterators$3);
_.hasNext = function hasNext_1(){
  return this.val$iterator1.hasNext();
}
;
_.next_0 = function next_1(){
  return this.val$iterator1.next_0();
}
;
var Lcom_google_common_collect_Iterators$3_2_classLit = createForClass('com.google.common.collect', 'Iterators/3', 576, Lcom_google_common_collect_UnmodifiableIterator_2_classLit);
defineClass(549, 1, {});
_.hasNext = function hasNext_2(){
  return this.backingIterator.hasNext();
}
;
_.next_0 = function next_2(){
  return $transform(this, this.backingIterator.next_0());
}
;
var Lcom_google_common_collect_TransformedIterator_2_classLit = createForClass('com.google.common.collect', 'TransformedIterator', 549, Ljava_lang_Object_2_classLit);
function $transform(this$static, from){
  return this$static.val$function2.apply_0(from);
}

function Iterators$8($anonymous0, val$function){
  this.val$function2 = val$function;
  this.backingIterator = checkNotNull($anonymous0);
}

defineClass(577, 549, {}, Iterators$8);
var Lcom_google_common_collect_Iterators$8_2_classLit = createForClass('com.google.common.collect', 'Iterators/8', 577, Lcom_google_common_collect_TransformedIterator_2_classLit);
function equalsImpl(thisList, other){
  var i, otherList, size_0;
  if (maskUndefined(other) === maskUndefined(checkNotNull(thisList))) {
    return true;
  }
  if (!instanceOf(other, 25)) {
    return false;
  }
  otherList = other;
  size_0 = thisList.size_1();
  if (size_0 != otherList.size_1()) {
    return false;
  }
  if (instanceOf(otherList, 32)) {
    for (i = 0; i < size_0; i++) {
      if (!equal(thisList.get_1(i), otherList.get_1(i))) {
        return false;
      }
    }
    return true;
  }
   else {
    return elementsEqual(thisList.iterator_0(), otherList.iterator());
  }
}

function hashCodeImpl(list){
  var hashCode, o, o$iterator;
  hashCode = 1;
  for (o$iterator = list.iterator_0(); o$iterator.hasNext();) {
    o = o$iterator.next_0();
    hashCode = 31 * hashCode + (o == null?0:hashCode__I__devirtual$(o));
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function indexOfRandomAccess(list, element){
  var i, size_0;
  size_0 = list.size_1();
  if (element == null) {
    for (i = 0; i < size_0; i++) {
      if (list.get_1(i) == null) {
        return i;
      }
    }
  }
   else {
    for (i = 0; i < size_0; i++) {
      if (equals_Ljava_lang_Object__Z__devirtual$(element, list.get_1(i))) {
        return i;
      }
    }
  }
  return -1;
}

function $clinit_Maps(){
  $clinit_Maps = emptyMethod;
  new Joiner$MapJoiner(($clinit_Collections2() , '='));
}

function asEntryToEntryFunction(transformer){
  $clinit_Maps();
  checkNotNull(transformer);
  return new Maps$10(transformer);
}

function asEntryTransformer(function_$){
  $clinit_Maps();
  checkNotNull(function_$);
  return new Maps$6(function_$);
}

function safeGet(map_0, key){
  $clinit_Maps();
  checkNotNull(map_0);
  try {
    return map_0.get_2(key);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 56)) {
      return null;
    }
     else if (instanceOf($e0, 34)) {
      return null;
    }
     else 
      throw unwrap($e0);
  }
}

function transformEntry(transformer, entry){
  $clinit_Maps();
  checkNotNull(transformer);
  checkNotNull(entry);
  return new Maps$9(entry, transformer);
}

function Maps$10(val$transformer){
  this.val$transformer1 = val$transformer;
}

defineClass(547, 1, {148:1}, Maps$10);
_.apply_0 = function apply_0(entry){
  return transformEntry(this.val$transformer1, entry);
}
;
var Lcom_google_common_collect_Maps$10_2_classLit = createForClass('com.google.common.collect', 'Maps/10', 547, Ljava_lang_Object_2_classLit);
function $transformEntry(this$static, value_0){
  return $apply(value_0);
}

function Maps$6(val$function){
  this.val$function1 = val$function;
}

defineClass(545, 1, {}, Maps$6);
var Lcom_google_common_collect_Maps$6_2_classLit = createForClass('com.google.common.collect', 'Maps/6', 545, Ljava_lang_Object_2_classLit);
function Maps$9(val$entry, val$transformer){
  this.val$entry1 = val$entry;
  this.val$transformer2 = val$transformer;
}

defineClass(546, 649, $intern_5, Maps$9);
_.getKey = function getKey(){
  return this.val$entry1.getKey();
}
;
_.getValue = function getValue(){
  return $transformEntry(this.val$transformer2, (this.val$entry1.getKey() , this.val$entry1.getValue()));
}
;
var Lcom_google_common_collect_Maps$9_2_classLit = createForClass('com.google.common.collect', 'Maps/9', 546, Lcom_google_common_collect_AbstractMapEntry_2_classLit);
function $clinit_Maps$EntryFunction(){
  $clinit_Maps$EntryFunction = emptyMethod;
  KEY = new Maps$EntryFunction$1;
  VALUE = new Maps$EntryFunction$2;
}

function Maps$EntryFunction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Maps$EntryFunction();
  return initValues(getClassLiteralForArray(Lcom_google_common_collect_Maps$EntryFunction_2_classLit, 1), $intern_1, 94, 0, [KEY, VALUE]);
}

defineClass(94, 6, $intern_8);
var KEY, VALUE;
var Lcom_google_common_collect_Maps$EntryFunction_2_classLit = createForEnum('com.google.common.collect', 'Maps/EntryFunction', 94, Ljava_lang_Enum_2_classLit, values_1);
function Maps$EntryFunction$1(){
  Maps$EntryFunction.call(this, 'KEY', 0);
}

defineClass(542, 94, $intern_8, Maps$EntryFunction$1);
_.apply_0 = function apply_1(entry){
  return entry.getKey();
}
;
var Lcom_google_common_collect_Maps$EntryFunction$1_2_classLit = createForEnum('com.google.common.collect', 'Maps/EntryFunction/1', 542, Lcom_google_common_collect_Maps$EntryFunction_2_classLit, null);
function Maps$EntryFunction$2(){
  Maps$EntryFunction.call(this, 'VALUE', 1);
}

defineClass(543, 94, $intern_8, Maps$EntryFunction$2);
_.apply_0 = function apply_2(entry){
  return entry.getValue();
}
;
var Lcom_google_common_collect_Maps$EntryFunction$2_2_classLit = createForEnum('com.google.common.collect', 'Maps/EntryFunction/2', 543, Lcom_google_common_collect_Maps$EntryFunction_2_classLit, null);
defineClass(605, 604, $intern_9);
_.equals$ = function equals_7(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 45)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_9(){
  return hashCode_25(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 605, Ljava_util_AbstractCollection_2_classLit);
defineClass(647, 605, $intern_9);
var Lcom_google_common_collect_Sets$ImprovedAbstractSet_2_classLit = createForClass('com.google.common.collect', 'Sets/ImprovedAbstractSet', 647, Ljava_util_AbstractSet_2_classLit);
function $contains(this$static, o){
  var entry, key, value_0;
  if (instanceOf(o, 24)) {
    entry = o;
    key = entry.getKey();
    value_0 = safeGet(this$static.this$11, key);
    return equal(value_0, entry.getValue()) && (value_0 != null || this$static.this$11.containsKey(key));
  }
  return false;
}

defineClass(648, 647, $intern_9);
_.contains = function contains_4(o){
  return $contains(this, o);
}
;
_.size_1 = function size_5(){
  return this.this$11.size_1();
}
;
var Lcom_google_common_collect_Maps$EntrySet_2_classLit = createForClass('com.google.common.collect', 'Maps/EntrySet', 648, Lcom_google_common_collect_Sets$ImprovedAbstractSet_2_classLit);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_2(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext();) {
    entry = iter.next_0();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      return entry;
    }
  }
  return null;
}

function $toString_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(603, 1, $intern_10);
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key);
}
;
_.containsValue = function containsValue(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    v = entry.getValue();
    if (maskUndefined(value_0) === maskUndefined(v) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals$ = function equals_8(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 61)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_2 = function get_3(key){
  return getEntryValueOrNull($implFindEntry(this, key));
}
;
_.hashCode$ = function hashCode_10(){
  return hashCode_25(this.entrySet_0());
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.size_1 = function size_6(){
  return this.entrySet_0().size_1();
}
;
_.toString$ = function toString_17(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_6(sb, $toString_2(this, entry.getKey()));
    sb.string += '=';
    $append_6(sb, $toString_2(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 603, Ljava_lang_Object_2_classLit);
defineClass(646, 603, $intern_10);
_.entrySet_0 = function entrySet(){
  return new Maps$IteratorBasedAbstractMap$1(this);
}
;
var Lcom_google_common_collect_Maps$IteratorBasedAbstractMap_2_classLit = createForClass('com.google.common.collect', 'Maps/IteratorBasedAbstractMap', 646, Ljava_util_AbstractMap_2_classLit);
function Maps$IteratorBasedAbstractMap$1(this$1){
  this.this$11 = this$1;
}

defineClass(544, 648, $intern_9, Maps$IteratorBasedAbstractMap$1);
_.iterator = function iterator_6(){
  return this.this$11.entryIterator();
}
;
var Lcom_google_common_collect_Maps$IteratorBasedAbstractMap$1_2_classLit = createForClass('com.google.common.collect', 'Maps/IteratorBasedAbstractMap/1', 544, Lcom_google_common_collect_Maps$EntrySet_2_classLit);
defineClass(539, 646, $intern_10);
_.containsKey = function containsKey_0(key){
  return this.fromMap.containsKey(key);
}
;
_.entryIterator = function entryIterator(){
  return transform(this.fromMap.entrySet_0().iterator(), asEntryToEntryFunction(this.transformer));
}
;
_.get_2 = function get_4(key){
  var value_0;
  value_0 = this.fromMap.get_2(key);
  return value_0 != null || this.fromMap.containsKey(key)?$transformEntry(this.transformer, value_0):null;
}
;
_.size_1 = function size_7(){
  return this.fromMap.size_1();
}
;
var Lcom_google_common_collect_Maps$TransformedEntriesMap_2_classLit = createForClass('com.google.common.collect', 'Maps/TransformedEntriesMap', 539, Lcom_google_common_collect_Maps$IteratorBasedAbstractMap_2_classLit);
function Maps$TransformedEntriesSortedMap(fromMap, transformer){
  this.fromMap = checkNotNull(fromMap);
  this.transformer = checkNotNull(transformer);
}

defineClass(540, 539, $intern_10, Maps$TransformedEntriesSortedMap);
var Lcom_google_common_collect_Maps$TransformedEntriesSortedMap_2_classLit = createForClass('com.google.common.collect', 'Maps/TransformedEntriesSortedMap', 540, Lcom_google_common_collect_Maps$TransformedEntriesMap_2_classLit);
function Maps$Values(map_0){
  this.map_0 = checkNotNull(map_0);
}

defineClass(541, 604, {}, Maps$Values);
_.contains = function contains_5(o){
  return this.map_0.containsValue(o);
}
;
_.iterator = function iterator_7(){
  return $clinit_Maps() , transform(this.map_0.entrySet_0().iterator(), ($clinit_Maps$EntryFunction() , VALUE));
}
;
_.size_1 = function size_8(){
  return this.map_0.size_1();
}
;
var Lcom_google_common_collect_Maps$Values_2_classLit = createForClass('com.google.common.collect', 'Maps/Values', 541, Ljava_util_AbstractCollection_2_classLit);
function mapsTransformEntriesSortedMap(fromMap, transformer){
  return $clinit_Maps() , new Maps$TransformedEntriesSortedMap(fromMap, transformer);
}

function $clinit_Range(){
  $clinit_Range = emptyMethod;
  new Range_0(($clinit_Cut$BelowAll() , INSTANCE_1), ($clinit_Cut$AboveAll() , INSTANCE_0));
}

function $contains_0(this$static, value_0){
  checkNotNull(value_0);
  return this$static.lowerBound.isLessThan(value_0) && !this$static.upperBound.isLessThan(value_0);
}

function Range_0(lowerBound, upperBound){
  this.lowerBound = checkNotNull(lowerBound);
  this.upperBound = checkNotNull(upperBound);
  if (lowerBound.compareTo_0(upperBound) > 0 || lowerBound == ($clinit_Cut$AboveAll() , INSTANCE_0) || upperBound == ($clinit_Cut$BelowAll() , INSTANCE_1)) {
    throw new IllegalArgumentException_0('Invalid range: ' + toString_19(lowerBound, upperBound));
  }
}

function closed_0(lower, upper){
  $clinit_Range();
  return new Range_0(new Cut$BelowValue(lower), new Cut$AboveValue(upper));
}

function toString_19(lowerBound, upperBound){
  var sb;
  sb = new StringBuilder_0;
  lowerBound.describeAsLowerBound(sb);
  sb.string += '\u2025';
  upperBound.describeAsUpperBound(sb);
  return sb.string;
}

defineClass(145, 1, {145:1, 3:1}, Range_0);
_.equals$ = function equals_9(object){
  var other;
  if (instanceOf(object, 145)) {
    other = object;
    return $equals(this.lowerBound, other.lowerBound) && $equals(this.upperBound, other.upperBound);
  }
  return false;
}
;
_.hashCode$ = function hashCode_11(){
  return this.lowerBound.hashCode$() * 31 + this.upperBound.hashCode$();
}
;
_.toString$ = function toString_18(){
  return toString_19(this.lowerBound, this.upperBound);
}
;
var Lcom_google_common_collect_Range_2_classLit = createForClass('com.google.common.collect', 'Range', 145, Ljava_lang_Object_2_classLit);
function RegularImmutableAsList(delegate, delegateList){
  this.delegate = delegate;
  this.delegateList = delegateList;
}

function RegularImmutableAsList_0(delegate, array){
  $clinit_ImmutableList();
  RegularImmutableAsList.call(this, delegate, unsafeDelegateList(new Arrays$ArrayList(array)));
}

defineClass(254, 653, $intern_7, RegularImmutableAsList_0);
_.get_1 = function get_5(index_0){
  return $get(this.delegateList, index_0);
}
;
_.listIterator = function listIterator_0(index_0){
  return $listIterator(this.delegateList, index_0);
}
;
var Lcom_google_common_collect_RegularImmutableAsList_2_classLit = createForClass('com.google.common.collect', 'RegularImmutableAsList', 254, Lcom_google_common_collect_ImmutableAsList_2_classLit);
function RegularImmutableList(delegate){
  $clinit_ImmutableList();
  this.delegate = ($clinit_Collections() , instanceOf(delegate, 32)?new Collections$UnmodifiableRandomAccessList(delegate):new Collections$UnmodifiableList(delegate));
}

defineClass(141, 644, $intern_7, RegularImmutableList);
_.delegateList_0 = function delegateList_0(){
  return this.delegate;
}
;
var Lcom_google_common_collect_RegularImmutableList_2_classLit = createForClass('com.google.common.collect', 'RegularImmutableList', 141, Lcom_google_common_collect_ForwardingImmutableList_2_classLit);
function SingletonImmutableList(element){
  $clinit_ImmutableList();
  this.delegate = ($clinit_Collections() , new Collections$SingletonList(checkNotNull(element)));
}

defineClass(188, 644, $intern_7, SingletonImmutableList);
_.delegateList_0 = function delegateList_1(){
  return this.delegate;
}
;
var Lcom_google_common_collect_SingletonImmutableList_2_classLit = createForClass('com.google.common.collect', 'SingletonImmutableList', 188, Lcom_google_common_collect_ForwardingImmutableList_2_classLit);
function $addColorStop(this$static, offset, color_0){
  this$static.addColorStop(offset, color_0);
}

function $arc(this$static, x_0, y_0, radius, startAngle, endAngle){
  this$static.arc(x_0, y_0, radius, startAngle, endAngle, false);
}

function $arcTo(this$static, x1, y1, x2, y2, radius){
  this$static.arcTo(x1, y1, x2, y2, radius);
}

function $beginPath(this$static){
  this$static.beginPath();
}

function $clearRect(this$static, x_0, y_0, w, h){
  this$static.clearRect(x_0, y_0, w, h);
}

function $closePath(this$static){
  this$static.closePath();
}

function $createLinearGradient(this$static, x0, y0, x1, y1){
  return this$static.createLinearGradient(x0, y0, x1, y1);
}

function $drawImage(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $fill(this$static){
  this$static.fill();
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $fillText(this$static, text_0, x_0, y_0){
  this$static.fillText && this$static.fillText(text_0, x_0, y_0);
}

function $lineTo(this$static, x_0, y_0){
  this$static.lineTo(x_0, y_0);
}

function $moveTo(this$static, x_0, y_0){
  this$static.moveTo(x_0, y_0);
}

function $restore(this$static){
  this$static.restore();
}

function $save(this$static){
  this$static.save();
}

function $scale(this$static, x_0, y_0){
  this$static.scale(x_0, y_0);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function $setFont(this$static, f){
  this$static.font = f;
}

function $setLineCap(this$static, lineCap){
  this$static.lineCap = lineCap;
}

function $setLineJoin(this$static, lineJoin){
  this$static.lineJoin = lineJoin;
}

function $setLineWidth(this$static, lineWidth){
  this$static.lineWidth = lineWidth;
}

function $setStrokeStyleWeb(this$static, strokeStyle){
  this$static.strokeStyle = strokeStyle;
}

function $setTextBaseline(this$static, baseline){
  this$static.textBaseline = baseline;
}

function $stroke(this$static){
  this$static.stroke();
}

function $strokeText(this$static, text_0, x_0, y_0){
  this$static.strokeText(text_0, x_0, y_0);
}

function $translate(this$static, x_0, y_0){
  this$static.translate(x_0, y_0);
}

function $clinit_Context2d$LineCap(){
  $clinit_Context2d$LineCap = emptyMethod;
  BUTT = new Context2d$LineCap('BUTT', 0, 'butt');
  ROUND = new Context2d$LineCap('ROUND', 1, 'round');
  SQUARE = new Context2d$LineCap('SQUARE', 2, 'square');
}

function Context2d$LineCap(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_2(){
  $clinit_Context2d$LineCap();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit, 1), $intern_1, 107, 0, [BUTT, ROUND, SQUARE]);
}

defineClass(107, 6, {107:1, 3:1, 7:1, 6:1}, Context2d$LineCap);
var BUTT, ROUND, SQUARE;
var Lcom_google_gwt_canvas_dom_client_Context2d$LineCap_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/LineCap', 107, Ljava_lang_Enum_2_classLit, values_2);
function $clinit_Context2d$LineJoin(){
  $clinit_Context2d$LineJoin = emptyMethod;
  BEVEL = new Context2d$LineJoin('BEVEL', 0, 'bevel');
  MITER = new Context2d$LineJoin('MITER', 1, 'miter');
  ROUND_0 = new Context2d$LineJoin('ROUND', 2, 'round');
}

function Context2d$LineJoin(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_3(){
  $clinit_Context2d$LineJoin();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$LineJoin_2_classLit, 1), $intern_1, 108, 0, [BEVEL, MITER, ROUND_0]);
}

defineClass(108, 6, {108:1, 3:1, 7:1, 6:1}, Context2d$LineJoin);
var BEVEL, MITER, ROUND_0;
var Lcom_google_gwt_canvas_dom_client_Context2d$LineJoin_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/LineJoin', 108, Ljava_lang_Enum_2_classLit, values_3);
function $clinit_Context2d$TextBaseline(){
  $clinit_Context2d$TextBaseline = emptyMethod;
  ALPHABETIC = new Context2d$TextBaseline('ALPHABETIC', 0, 'alphabetic');
  BOTTOM = new Context2d$TextBaseline('BOTTOM', 1, 'bottom');
  HANGING = new Context2d$TextBaseline('HANGING', 2, 'hanging');
  IDEOGRAPHIC = new Context2d$TextBaseline('IDEOGRAPHIC', 3, 'ideographic');
  MIDDLE = new Context2d$TextBaseline('MIDDLE', 4, 'middle');
  TOP = new Context2d$TextBaseline('TOP', 5, 'top');
}

function Context2d$TextBaseline(enum$name, enum$ordinal, value_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.value_0 = value_0;
}

function values_4(){
  $clinit_Context2d$TextBaseline();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit, 1), $intern_1, 63, 0, [ALPHABETIC, BOTTOM, HANGING, IDEOGRAPHIC, MIDDLE, TOP]);
}

defineClass(63, 6, {63:1, 3:1, 7:1, 6:1}, Context2d$TextBaseline);
var ALPHABETIC, BOTTOM, HANGING, IDEOGRAPHIC, MIDDLE, TOP;
var Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit = createForEnum('com.google.gwt.canvas.dom.client', 'Context2d/TextBaseline', 63, Ljava_lang_Enum_2_classLit, values_4);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $addSuppressed(this$static, exception){
  checkNotNull_1(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = initValues(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_1, 10, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $initCause(this$static, cause){
  checkState_1(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $toString_3(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(){
  this.fillInStackTrace();
}

defineClass(10, 1, {3:1, 10:1});
_.fillInStackTrace = function fillInStackTrace(){
  this.stackTrace = null;
  captureStackTrace(this, this.detailMessage);
  return this;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.printStackTrace = function printStackTrace(out){
  var element$array, element$index, element$max, t, stackTrace;
  for (t = this; t; t = t.cause) {
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
    ;
  }
}
;
_.toString$ = function toString_20(){
  return $toString_3(this);
}
;
_.disableSuppression = false;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 10, Ljava_lang_Object_2_classLit);
defineClass(16, 10, {3:1, 16:1, 10:1});
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 16, Ljava_lang_Throwable_2_classLit);
function RuntimeException(){
  Throwable.call(this);
}

function RuntimeException_0(message){
  this.detailMessage = message;
  this.fillInStackTrace();
}

function RuntimeException_1(cause){
  this.detailMessage = !cause?null:$toString_3(cause);
  this.cause = cause;
  this.fillInStackTrace();
}

defineClass(8, 16, $intern_11, RuntimeException, RuntimeException_0, RuntimeException_1);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 8, Ljava_lang_Exception_2_classLit);
defineClass(255, 8, $intern_11);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 255, Ljava_lang_RuntimeException_2_classLit);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.disableSuppression = !true;
  this.description = '';
  this.e = e;
  this.description = '';
}

defineClass(80, 255, {80:1, 3:1, 16:1, 8:1, 10:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 80, Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_1(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(590, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 590, Ljava_lang_Object_2_classLit);
function apply_3(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE_2));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_3(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (instanceOf($e0, 10)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap($e0);
      }
    }
     else {
      return apply_3(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE_2));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $reportError(handler.this$01, 'Uncaught Exception: ', e);
    return;
  }
  reportToBrowser(instanceOf(e, 80)?e.getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE_2 = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl(){
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push_0(rescheduled, t)):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = wrap_0($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(410, 590, {}, SchedulerImpl);
var INSTANCE_2;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 410, Lcom_google_gwt_core_client_Scheduler_2_classLit);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_1(stackTrace.length, 5);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(601, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 601, Ljava_lang_Object_2_classLit);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(256, 601, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 72, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 256, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_0(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(602, 601, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_1, 72, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 602, Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(257, 602, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 257, Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit);
function checkArrayType(expression, errorMessage){
  if (!expression) {
    throw new ArrayStoreException('' + errorMessage);
  }
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalArgument_0(expression, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException_0(format_1('%s > %s', errorMessageArgs));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull_0(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkNotNull_1(reference, errorMessage){
  if (reference == null) {
    throw new NullPointerException_0('' + errorMessage);
  }
}

function checkPositionIndex_0(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState_1(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function format_1(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_6(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_5(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_6(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_5(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_5(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $getSubPixelOffsetHeight(this$static){
  return this$static.offsetHeight || 0;
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $getSubPixelScrollTop(this$static){
  return this$static.scrollTop || 0;
}

function $getContext2d(this$static){
  return this$static.getContext('2d');
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = getBoundingClientRect(elem);
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = getBoundingClientRect(elem);
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase('body', elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ($getSubPixelScrollLeft(elem) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function getBoundingClientRect(element){
  return element.getBoundingClientRect && element.getBoundingClientRect();
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$FontStyle(){
  $clinit_Style$FontStyle = emptyMethod;
  NORMAL = new Style$FontStyle$1;
  ITALIC = new Style$FontStyle$2;
  OBLIQUE = new Style$FontStyle$3;
}

function Style$FontStyle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$FontStyle();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, 1), $intern_1, 64, 0, [NORMAL, ITALIC, OBLIQUE]);
}

defineClass(64, 6, $intern_12);
var ITALIC, NORMAL, OBLIQUE;
var Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle', 64, Ljava_lang_Enum_2_classLit, values_5);
function Style$FontStyle$1(){
  Style$FontStyle.call(this, 'NORMAL', 0);
}

defineClass(378, 64, $intern_12, Style$FontStyle$1);
var Lcom_google_gwt_dom_client_Style$FontStyle$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/1', 378, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null);
function Style$FontStyle$2(){
  Style$FontStyle.call(this, 'ITALIC', 1);
}

defineClass(379, 64, $intern_12, Style$FontStyle$2);
var Lcom_google_gwt_dom_client_Style$FontStyle$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/2', 379, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null);
function Style$FontStyle$3(){
  Style$FontStyle.call(this, 'OBLIQUE', 2);
}

defineClass(380, 64, $intern_12, Style$FontStyle$3);
var Lcom_google_gwt_dom_client_Style$FontStyle$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontStyle/3', 380, Lcom_google_gwt_dom_client_Style$FontStyle_2_classLit, null);
function $clinit_Style$FontWeight(){
  $clinit_Style$FontWeight = emptyMethod;
  NORMAL_0 = new Style$FontWeight$1;
  BOLD = new Style$FontWeight$2;
  BOLDER = new Style$FontWeight$3;
  LIGHTER = new Style$FontWeight$4;
}

function Style$FontWeight(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$FontWeight();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, 1), $intern_1, 50, 0, [NORMAL_0, BOLD, BOLDER, LIGHTER]);
}

defineClass(50, 6, $intern_13);
var BOLD, BOLDER, LIGHTER, NORMAL_0;
var Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight', 50, Ljava_lang_Enum_2_classLit, values_6);
function Style$FontWeight$1(){
  Style$FontWeight.call(this, 'NORMAL', 0);
}

defineClass(381, 50, $intern_13, Style$FontWeight$1);
var Lcom_google_gwt_dom_client_Style$FontWeight$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/1', 381, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function Style$FontWeight$2(){
  Style$FontWeight.call(this, 'BOLD', 1);
}

defineClass(382, 50, $intern_13, Style$FontWeight$2);
var Lcom_google_gwt_dom_client_Style$FontWeight$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/2', 382, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function Style$FontWeight$3(){
  Style$FontWeight.call(this, 'BOLDER', 2);
}

defineClass(383, 50, $intern_13, Style$FontWeight$3);
var Lcom_google_gwt_dom_client_Style$FontWeight$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/3', 383, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function Style$FontWeight$4(){
  Style$FontWeight.call(this, 'LIGHTER', 3);
}

defineClass(384, 50, $intern_13, Style$FontWeight$4);
var Lcom_google_gwt_dom_client_Style$FontWeight$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/FontWeight/4', 384, Lcom_google_gwt_dom_client_Style$FontWeight_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 51, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(51, 6, $intern_14);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 51, Ljava_lang_Enum_2_classLit, values_7);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(385, 51, $intern_14, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 385, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(386, 51, $intern_14, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 386, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(387, 51, $intern_14, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 387, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(388, 51, $intern_14, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 388, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 52, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(52, 6, $intern_15);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 52, Ljava_lang_Enum_2_classLit, values_8);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(389, 52, $intern_15, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 389, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(390, 52, $intern_15, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 390, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(391, 52, $intern_15, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 391, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(392, 52, $intern_15, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 392, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 20, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(20, 6, $intern_16);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 20, Ljava_lang_Enum_2_classLit, values_9);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(369, 20, $intern_16, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 369, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(370, 20, $intern_16, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 370, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(371, 20, $intern_16, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 371, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(372, 20, $intern_16, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 372, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(373, 20, $intern_16, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 373, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(374, 20, $intern_16, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 374, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(375, 20, $intern_16, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 375, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(376, 20, $intern_16, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 376, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(377, 20, $intern_16, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 377, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 83, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(83, 6, $intern_17);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 83, Ljava_lang_Enum_2_classLit, values_10);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(393, 83, $intern_17, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 393, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(394, 83, $intern_17, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 394, Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL_1 = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_Style$WhiteSpace();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 36, 0, [NORMAL_1, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(36, 6, $intern_18);
var NORMAL_1, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 36, Ljava_lang_Enum_2_classLit, values_11);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(395, 36, $intern_18, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 395, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(396, 36, $intern_18, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 396, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(397, 36, $intern_18, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 397, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(398, 36, $intern_18, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 398, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(399, 36, $intern_18, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 399, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ($getSubPixelScrollTop(target) | 0) + $getScrollTop(target.ownerDocument);
}

function throwIfNull(value_0){
  if (null == value_0) {
    throw new NullPointerException_0('encodedURLComponent cannot be null');
  }
}

function clone(array){
  return cloneSubrange(array, array.length);
}

function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 80)) {
    jse = e;
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap_0(e){
  var jse;
  if (instanceOf(e, 10)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_19;
  a1 = value_0 >> 22 & $intern_19;
  a2 = value_0 < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_1, 657, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_19, $intern_19, 524287);
  MIN_VALUE = create0(0, 0, 524288);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  var config, plat;
  $onModuleLoad();
  config = new HtmlPlatform$Config;
  plat = new HtmlPlatform(config);
  plat.assets.pathPrefix = 'quads/';
  new MainGame(plat);
  $listenForVisibilityChange(plat);
  $requestAnimationFrame(new HtmlPlatform$2(plat));
}

function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(401, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass('com.google.gwt.storage.client', 'Storage', 401, Ljava_lang_Object_2_classLit);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $getLength(storage){
  return $wnd[storage].length;
}

function $key_0(storage, index_0){
  return index_0 >= 0 && index_0 < $wnd[storage].length?$wnd[storage].key(index_0):null;
}

function $setItem_0(storage, key, data_0){
  $getItem_0(storage, key);
  $wnd[storage].setItem(key, data_0);
}

function $get_1(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $getItem(this$static.storage, isJavaString(key)?key:hasJavaObjectVirtualDispatch(key)?key.toString$():isJavaArray(key)?$toString(key):key.toString?key.toString():'[JavaScriptObject]');
}

function $put(this$static, key, value_0){
  var old;
  if (key == null || value_0 == null) {
    throw new NullPointerException;
  }
  old = $getItem(this$static.storage, key);
  $setItem(this$static.storage, key, value_0);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(402, 603, $intern_10, StorageMap);
_.containsKey = function containsKey_1(key){
  return $get_1(this, key) != null;
}
;
_.containsValue = function containsValue_0(value_0){
  var i, s;
  if (value_0 == null) {
    throw new NullPointerException;
  }
  s = $getLength(this.storage.storage);
  for (i = 0; i < s; i++) {
    if (equals_Ljava_lang_Object__Z__devirtual$(value_0, $getItem(this.storage, $key(this.storage, i)))) {
      return true;
    }
  }
  return false;
}
;
_.entrySet_0 = function entrySet_0(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.get_2 = function get_6(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.size_1 = function size_9(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap', 402, Ljava_util_AbstractMap_2_classLit);
function $eq(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && $equals_0(a, b);
}

function $hashCode(o){
  return o != null?getHashCode_0(o):0;
}

function StorageMap$StorageEntry(this$0, key){
  this.this$01 = this$0;
  this.key_0 = key;
}

defineClass(403, 1, $intern_5, StorageMap$StorageEntry);
_.equals$ = function equals_10(obj){
  var e;
  if (!instanceOf(obj, 24)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get_1(this.this$01, this.key_0), e.getValue());
}
;
_.getKey = function getKey_0(){
  return this.key_0;
}
;
_.getValue = function getValue_0(){
  return $get_1(this.this$01, this.key_0);
}
;
_.hashCode$ = function hashCode_12(){
  return $hashCode(this.key_0) ^ $hashCode($get_1(this.this$01, this.key_0));
}
;
_.setValue = function setValue_0(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntry', 403, Ljava_lang_Object_2_classLit);
function $next_0(this$static){
  if (this$static.index_0 >= $getLength(this$static.this$01.storage.storage) - 1) {
    throw new NoSuchElementException;
  }
  ++this$static.index_0;
  this$static.lastKey = $key(this$static.this$01.storage, this$static.index_0);
  return new StorageMap$StorageEntry(this$static.this$01, this$static.lastKey);
}

function StorageMap$StorageEntryIterator(this$0){
  this.this$01 = this$0;
}

defineClass(404, 1, {}, StorageMap$StorageEntryIterator);
_.hasNext = function hasNext_3(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.next_0 = function next_3(){
  return $next_0(this);
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntryIterator', 404, Ljava_lang_Object_2_classLit);
function $contains_1(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 24)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get_1(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(405, 605, $intern_9, StorageMap$StorageEntrySet);
_.contains = function contains_6(o){
  return $contains_1(this, o);
}
;
_.iterator = function iterator_8(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.size_1 = function size_10(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass('com.google.gwt.storage.client', 'StorageMap/StorageEntrySet', 405, Ljava_util_AbstractSet_2_classLit);
function create_0(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_1(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function $set(this$static, index_0, value_0){
  this$static[index_0] = value_0;
}

function create_2(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_3(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_5(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_1, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function alert_0(msg){
  $wnd.alert(msg);
}

function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (!instanceOf($e0, 80))
          throw unwrap($e0);
      }
      values = out.get_2(key);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = entry$iterator.next_0();
    entry.setValue(unmodifiableList(entry.getValue()));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals_0(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = listParamMap.get_2(name_0);
  return !paramsForName?null:paramsForName.get_1(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  new HashMap;
  new HashSet;
}

function $setAntialias(this$static, antialias){
  this$static.antialias = antialias;
}

function $activeTexture(this$static, texture){
  this$static.activeTexture(texture);
}

function $attachShader(this$static, program, shader){
  this$static.attachShader(program, shader);
}

function $bindBuffer(this$static, target, buffer){
  this$static.bindBuffer(target, buffer);
}

function $bindFramebuffer(this$static, target, framebuffer){
  this$static.bindFramebuffer(target, framebuffer);
}

function $bindTexture(this$static, target, texture){
  this$static.bindTexture(target, texture);
}

function $bufferData(this$static, target, data_0, usage){
  this$static.bufferData(target, data_0, usage);
}

function $clearColor(this$static, red, green, blue, alpha_0){
  this$static.clearColor(red, green, blue, alpha_0);
}

function $compileShader(this$static, shader){
  this$static.compileShader(shader);
}

function $createShader(this$static, type_0){
  return this$static.createShader(type_0);
}

function $deleteBuffer(this$static, buffer){
  this$static.deleteBuffer(buffer);
}

function $deleteFramebuffer(this$static, framebuffer){
  this$static.deleteFramebuffer(framebuffer);
}

function $deleteProgram(this$static, program){
  this$static.deleteProgram(program);
}

function $deleteRenderbuffer(this$static, renderbuffer){
  this$static.deleteRenderbuffer(renderbuffer);
}

function $deleteShader(this$static, shader){
  this$static.deleteShader(shader);
}

function $deleteTexture(this$static, texture){
  this$static.deleteTexture(texture);
}

function $disable(this$static, cap){
  this$static.disable(cap);
}

function $disableVertexAttribArray(this$static, index_0){
  this$static.disableVertexAttribArray(index_0);
}

function $drawElements(this$static, mode, count, type_0, offset){
  this$static.drawElements(mode, count, type_0, offset);
}

function $enable(this$static, cap){
  this$static.enable(cap);
}

function $enableVertexAttribArray(this$static, index_0){
  this$static.enableVertexAttribArray(index_0);
}

function $getAttribLocation(this$static, program, name_0){
  return this$static.getAttribLocation(program, name_0);
}

function $getProgramInfoLog(this$static, program){
  return this$static.getProgramInfoLog(program);
}

function $getProgramParameterb(this$static, program, pname){
  return this$static.getProgramParameter(program, pname);
}

function $getShaderInfoLog(this$static, shader){
  return this$static.getShaderInfoLog(shader);
}

function $getShaderParameterb(this$static, shader, pname){
  return this$static.getShaderParameter(shader, pname);
}

function $getUniformLocation(this$static, program, name_0){
  return this$static.getUniformLocation(program, name_0);
}

function $linkProgram(this$static, program){
  this$static.linkProgram(program);
}

function $scissor(this$static, x_0, y_0, width_0, height){
  this$static.scissor(x_0, y_0, width_0, height);
}

function $shaderSource(this$static, shader, source){
  this$static.shaderSource(shader, source);
}

function $texImage2D(this$static, target, level, internalformat, format, type_0, image){
  this$static.texImage2D(target, level, internalformat, format, type_0, image);
}

function $texParameteri(this$static, target, pname, param){
  this$static.texParameteri(target, pname, param);
}

function $uniform1f(this$static, location_0, x_0){
  this$static.uniform1f(location_0, x_0);
}

function $uniform1i(this$static, location_0, x_0){
  this$static.uniform1i(location_0, x_0);
}

function $uniform2f(this$static, location_0, x_0, y_0){
  this$static.uniform2f(location_0, x_0, y_0);
}

function $uniform4fv(this$static, location_0, v){
  this$static.uniform4fv(location_0, v);
}

function $useProgram(this$static, program){
  this$static.useProgram(program);
}

function $vertexAttribPointer(this$static, indx, size_0, type_0, normalized, stride, offset){
  this$static.vertexAttribPointer(indx, size_0, type_0, normalized, stride, offset);
}

function $viewport(this$static, x_0, y_0, width_0, height){
  this$static.viewport(x_0, y_0, width_0, height);
}

function getContext(canvas, attributes){
  var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
  for (var i = 0; i < names.length; i++) {
    try {
      var ctx = canvas.getContext(names[i], attributes);
      if (ctx != null) {
        if ($wnd.WebGLDebugUtils) {
          $wnd.console && $wnd.console.log && console.log('WebGL debugging enabled');
          return $wnd.WebGLDebugUtils.makeDebugContext(ctx);
        }
        return ctx;
      }
    }
     catch (e) {
    }
  }
  return null;
}

function DialogKeeper(screen_0){
  this.dialogs = new ArrayList;
  this.screen_0 = screen_0;
}

defineClass(416, 1, {}, DialogKeeper);
_.dialogDepth = 100;
var Lde_cdietze_playn_1util_DialogKeeper_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper', 416, Ljava_lang_Object_2_classLit);
function $close(this$static){
  if ($disposeRoot(this$static.screen_0.iface, this$static.root)) {
    this$static.this$01.dialogDepth -= 2;
    !!this$static._shade && $close_0(this$static._shade);
  }
}

function $dismiss(this$static){
  if (!this$static._showing._value.value_0)
    return;
  $close_6(this$static.conns);
  !!this$static._shade && $in($to($add_8(this$static.screen_0.iface.anim, new Animation$One(new DialogKeeper$ShaderLayer$1(this$static._shade))), 0), this$static._duration);
  $add_7($then($add_7($then(this$static._anim.hide(this$static.screen_0, this$static.root, this$static._duration)), new Animation$Action(new DialogKeeper$Dialog$3(this$static)))), new Animation$Action(new AnimBuilder$16(this$static.shown, ($clinit_Boolean() , $clinit_Boolean() , FALSE))));
  this$static._showing.updateAndNotify((null , FALSE), false);
}

function $display(this$static){
  return $display_0(this$static, this$static.screen_0.game_0.plat.graphics.viewSize.width_0 - 20);
}

function $display_0(this$static, packWidth){
  var height;
  checkState_0(!this$static._showing._value.value_0, 'Dialog is already displayed.');
  $setDepth(this$static.root.layer, this$static.this$01.dialogDepth);
  $pack(this$static.root, packWidth);
  $add_1(this$static.this$01.dialogs, this$static);
  $add_7($then($add_7($then(this$static._anim.show(this$static.screen_0, this$static.root, this$static._duration, (height = this$static.root._size.height_0 , (this$static.screen_0.game_0.plat.graphics.viewSize.height_0 - height) / 2))), new Animation$Delay(this$static._duration))), new Animation$Action(new AnimBuilder$16(this$static.shown, ($clinit_Boolean() , $clinit_Boolean() , TRUE))));
  !!this$static._shade && $in($to($from($add_7($then($add_8(this$static.screen_0.iface.anim, new Animation$Action(new AnimBuilder$4(this$static.screen_0.layer, this$static._shade)))), new Animation$One(new DialogKeeper$ShaderLayer$1(this$static._shade)))), 0.375), this$static._duration);
  this$static.this$01.dialogDepth += 2;
  this$static._showing.updateAndNotify((null , TRUE), false);
  return this$static;
}

function $slideTopDown(this$static){
  this$static._anim = ($clinit_DialogKeeper$DialogAnim() , SLIDE_TOP_DOWN);
  return this$static;
}

function $useShade(this$static){
  checkState_0(!this$static._shade, 'Already called useShade on this dialog.');
  this$static._shade = new DialogKeeper$ShaderLayer(this$static.this$01);
  $setHitTester(this$static._shade, new DialogKeeper$Dialog$2(this$static));
  $setInteractive(this$static._shade, true);
  $setDepth(this$static._shade, this$static.this$01.dialogDepth - 1);
  return this$static;
}

function DialogKeeper$Dialog(this$0, screen_0, root){
  this.this$01 = this$0;
  this.conns = new Closeable$Set;
  this.shown = ($clinit_AbstractSignal() , new Signal);
  this._showing = ($clinit_AbstractValue() , new Value(($clinit_Boolean() , $clinit_Boolean() , FALSE)));
  this._anim = ($clinit_DialogKeeper$DialogAnim() , GROW_SHRINK);
  this.screen_0 = screen_0;
  this.root = root;
}

defineClass(417, 1, $intern_20, DialogKeeper$Dialog);
_.close_0 = function close_0(){
  $close(this);
}
;
_._duration = 500;
var Lde_cdietze_playn_1util_DialogKeeper$Dialog_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/Dialog', 417, Ljava_lang_Object_2_classLit);
function DialogKeeper$Dialog$2(this$1){
  this.this$11 = this$1;
}

defineClass(419, 1, {}, DialogKeeper$Dialog$2);
_.hitTest = function hitTest(layer, p){
  return this.this$11._shade;
}
;
var Lde_cdietze_playn_1util_DialogKeeper$Dialog$2_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/Dialog/2', 419, Ljava_lang_Object_2_classLit);
function DialogKeeper$Dialog$3(this$1){
  this.this$11 = this$1;
}

defineClass(420, 1, {}, DialogKeeper$Dialog$3);
_.run = function run_1(){
  $remove_2(this.this$11.this$01.dialogs, this.this$11);
  $close(this.this$11);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$Dialog$3_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/Dialog/3', 420, Ljava_lang_Object_2_classLit);
function $onChange(this$static, value_0){
  this$static.onEmit_0(value_0);
}

defineClass(607, 1, {});
_.onChange = function onChange(value_0, oldValue){
  $onChange(this, value_0);
}
;
var Lreact_Slot_2_classLit = createForClass('react', 'Slot', 607, Ljava_lang_Object_2_classLit);
defineClass(614, 607, {});
_.onEmit_0 = function onEmit(event_0){
  this.onEmit();
}
;
_.run = function run_2(){
  this.onEmit();
}
;
var Lreact_UnitSlot_2_classLit = createForClass('react', 'UnitSlot', 614, Lreact_Slot_2_classLit);
function DialogKeeper$Dialog$4(this$1){
  this.this$11 = this$1;
}

defineClass(215, 614, {}, DialogKeeper$Dialog$4);
_.onEmit = function onEmit_0(){
  $dismiss(this.this$11);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$Dialog$4_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/Dialog/4', 215, Lreact_UnitSlot_2_classLit);
function $clinit_DialogKeeper$DialogAnim(){
  $clinit_DialogKeeper$DialogAnim = emptyMethod;
  NONE = new DialogKeeper$DialogAnim$1;
  SLIDE_LEFT_RIGHT = new DialogKeeper$DialogAnim$2;
  SLIDE_TOP_DOWN = new DialogKeeper$DialogAnim$3;
  FADE_INOUT = new DialogKeeper$DialogAnim$4;
  GROW_SHRINK = new DialogKeeper$DialogAnim$5;
}

function DialogKeeper$DialogAnim(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_DialogKeeper$DialogAnim();
  return initValues(getClassLiteralForArray(Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, 1), $intern_1, 37, 0, [NONE, SLIDE_LEFT_RIGHT, SLIDE_TOP_DOWN, FADE_INOUT, GROW_SHRINK]);
}

defineClass(37, 6, $intern_21);
var FADE_INOUT, GROW_SHRINK, NONE, SLIDE_LEFT_RIGHT, SLIDE_TOP_DOWN;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim', 37, Ljava_lang_Enum_2_classLit, values_12);
function DialogKeeper$DialogAnim$1(){
  DialogKeeper$DialogAnim.call(this, 'NONE', 0);
}

defineClass(421, 37, $intern_21, DialogKeeper$DialogAnim$1);
_.hide = function hide(screen_0, root, duration){
  return $add_8(screen_0.iface.anim, new Animation$Delay(0));
}
;
_.show = function show(screen_0, root, duration, y_0){
  $setTranslation(root.layer, (screen_0.game_0.plat.graphics.viewSize.width_0 - root._size.width_0) / 2, y_0);
  return $add_8(screen_0.iface.anim, new Animation$Delay(0));
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$1_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/1', 421, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$2(){
  DialogKeeper$DialogAnim.call(this, 'SLIDE_LEFT_RIGHT', 1);
}

defineClass(422, 37, $intern_21, DialogKeeper$DialogAnim$2);
_.hide = function hide_0(screen_0, root, duration){
  return $in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$19(root.layer))), ($clinit_Interpolator() , EASE_OUT)), screen_0.game_0.plat.graphics.viewSize.width_0), duration);
}
;
_.show = function show_0(screen_0, root, duration, y_0){
  var dwidth, tx;
  dwidth = root._size.width_0;
  tx = (screen_0.game_0.plat.graphics.viewSize.width_0 - dwidth) / 2;
  $setTranslation(root.layer, -dwidth, y_0);
  return $in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$19(root.layer))), ($clinit_Interpolator() , EASE_IN)), tx), duration);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$2_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/2', 422, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$3(){
  DialogKeeper$DialogAnim.call(this, 'SLIDE_TOP_DOWN', 2);
}

defineClass(423, 37, $intern_21, DialogKeeper$DialogAnim$3);
_.hide = function hide_1(screen_0, root, duration){
  return $in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$20(root.layer))), ($clinit_Interpolator() , EASE_OUT)), screen_0.game_0.plat.graphics.viewSize.height_0), duration);
}
;
_.show = function show_1(screen_0, root, duration, y_0){
  var dheight;
  dheight = root._size.height_0;
  $setTranslation(root.layer, (screen_0.game_0.plat.graphics.viewSize.width_0 - root._size.width_0) / 2, -dheight);
  return $in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$20(root.layer))), ($clinit_Interpolator() , EASE_OUT)), y_0), duration);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$3_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/3', 423, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$4(){
  DialogKeeper$DialogAnim.call(this, 'FADE_INOUT', 3);
}

defineClass(424, 37, $intern_21, DialogKeeper$DialogAnim$4);
_.hide = function hide_2(screen_0, root, duration){
  return $in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$3(root.layer))), ($clinit_Interpolator() , EASE_OUT)), 0), duration);
}
;
_.show = function show_2(screen_0, root, duration, y_0){
  $setTranslation(root.layer, (screen_0.game_0.plat.graphics.viewSize.width_0 - root._size.width_0) / 2, y_0);
  $setAlpha(root.layer, 0);
  return $in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$3(root.layer))), ($clinit_Interpolator() , EASE_IN)), 1), duration);
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$4_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/4', 424, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$5(){
  DialogKeeper$DialogAnim.call(this, 'GROW_SHRINK', 4);
}

defineClass(425, 37, $intern_21, DialogKeeper$DialogAnim$5);
_.hide = function hide_3(screen_0, root, duration){
  var dsize;
  dsize = root._size;
  $setOrigin(root.layer, dsize.width_0 / 2, dsize.height_0 / 2);
  $setTranslation(root.layer, root.layer.transform.tx + dsize.width_0 / 2, root.layer.transform.ty + dsize.height_0 / 2);
  return $in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$2(root.layer))), ($clinit_Interpolator() , EASE_INOUT)), $intern_22), duration);
}
;
_.show = function show_3(screen_0, root, duration, y_0){
  var dsize;
  dsize = root._size;
  $setOrigin(root.layer, dsize.width_0 / 2, dsize.height_0 / 2);
  $setTranslation(root.layer, screen_0.game_0.plat.graphics.viewSize.width_0 / 2, y_0 + dsize.height_0 / 2);
  $setScale(root.layer, $intern_22);
  return $add_7($then($in($to($using($add_8(screen_0.iface.anim, new Animation$One(new AnimBuilder$2(root.layer))), ($clinit_Interpolator() , EASE_INOUT)), 1), duration)), new Animation$Action(new DialogKeeper$DialogAnim$5$1(root, screen_0, dsize, y_0)));
}
;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$5_2_classLit = createForEnum('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/5', 425, Lde_cdietze_playn_1util_DialogKeeper$DialogAnim_2_classLit, null);
function DialogKeeper$DialogAnim$5$1(val$root, val$screen, val$dsize, val$y){
  this.val$root2 = val$root;
  this.val$screen3 = val$screen;
  this.val$dsize4 = val$dsize;
  this.val$y5 = val$y;
}

defineClass(426, 1, {}, DialogKeeper$DialogAnim$5$1);
_.run = function run_3(){
  $setOrigin(this.val$root2.layer, 0, 0);
  $setTranslation(this.val$root2.layer, (this.val$screen3.game_0.plat.graphics.viewSize.width_0 - this.val$dsize4.width_0) / 2, this.val$y5);
}
;
_.val$y5 = 0;
var Lde_cdietze_playn_1util_DialogKeeper$DialogAnim$5$1_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/DialogAnim/5/1', 426, Ljava_lang_Object_2_classLit);
function $close_0(this$static){
  !!this$static.parent_0 && $remove_6(this$static.parent_0, this$static);
  $setState(this$static, ($clinit_Layer$State() , DISPOSED));
}

function $events(this$static){
  !this$static.events && (this$static.events = new Layer$1(this$static));
  return this$static.events;
}

function $isSet(this$static, flag){
  return (this$static.flags & flag.bitmask) != 0;
}

function $onAdd(this$static){
  if (maskUndefined(this$static.state._value) === maskUndefined(($clinit_Layer$State() , DISPOSED)))
    throw new IllegalStateException_0('Illegal to use disposed layer: ' + this$static);
  $setState(this$static, ADDED);
}

function $originX(this$static){
  var width_0;
  if ($isSet(this$static, ($clinit_Layer$Flag() , ODIRTY))) {
    width_0 = this$static.width_1();
    if (width_0 > 0) {
      this$static.originX = this$static.origin.ox(width_0);
      this$static.originY = this$static.origin.oy(this$static.height_1());
      $setFlag(this$static, ODIRTY, false);
    }
  }
  return this$static.originX;
}

function $originY(this$static){
  var height;
  if ($isSet(this$static, ($clinit_Layer$Flag() , ODIRTY))) {
    height = this$static.height_1();
    if (height > 0) {
      this$static.originX = this$static.origin.ox(this$static.width_1());
      this$static.originY = this$static.origin.oy(height);
      $setFlag(this$static, ODIRTY, false);
    }
  }
  return this$static.originY;
}

function $paint(this$static, surf){
  var otint;
  if (!$isSet(this$static, ($clinit_Layer$Flag() , VISIBLE_1)))
    return;
  otint = $combineTint(surf, this$static.tint);
  $concatenate(surf, $transform_0(this$static), $originX(this$static), $originY(this$static));
  try {
    this$static.paintImpl(surf);
  }
   finally {
    surf.tint = otint;
  }
}

function $setAlpha(this$static, alpha_0){
  var ialpha;
  this$static.alpha_1 = alpha_0;
  ialpha = round_int(255 * (alpha_0 < 0?0:alpha_0 > 1?1:alpha_0));
  this$static.tint = ialpha << 24 | this$static.tint & $intern_23;
  return this$static;
}

function $setDepth(this$static, depth){
  var oldDepth;
  oldDepth = this$static.depth;
  if (depth != oldDepth) {
    this$static.depth = depth;
    !!this$static.parent_0 && $depthChanged(this$static.parent_0, this$static, oldDepth);
  }
  return this$static;
}

function $setFlag(this$static, flag, active){
  active?(this$static.flags |= flag.bitmask):(this$static.flags &= ~flag.bitmask);
}

function $setHitTester(this$static, tester){
  this$static.hitTester = tester;
  return this$static;
}

function $setInteractive(this$static, interactive){
  if ($isSet(this$static, ($clinit_Layer$Flag() , INTERACTIVE)) != interactive) {
    interactive && !!this$static.parent_0 && $setInteractive(this$static.parent_0, true);
    $setFlag(this$static, INTERACTIVE, interactive);
  }
  return this$static;
}

function $setOrigin(this$static, x_0, y_0){
  this$static.originX = x_0;
  this$static.originY = y_0;
  this$static.origin = ($clinit_Layer$Origin() , FIXED_0);
  $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), false);
  return this$static;
}

function $setOrigin_0(this$static, origin){
  this$static.origin = origin;
  $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

function $setScale(this$static, scale){
  return $setScale_0(this$static, scale, scale);
}

function $setScale_0(this$static, sx, sy){
  if (sx != this$static.scaleX || sy != this$static.scaleY) {
    this$static.scaleX = sx;
    this$static.scaleY = sy;
    $setFlag(this$static, ($clinit_Layer$Flag() , XFDIRTY), true);
  }
  return this$static;
}

function $setState(this$static, state){
  this$static.state.updateAndNotify(state, false);
}

function $setTint(this$static, tint){
  this$static.tint = tint;
  this$static.alpha_1 = (tint >> 24 & 255) / 255;
  return this$static;
}

function $setTranslation(this$static, x_0, y_0){
  $setTranslation_0(this$static.transform, x_0, y_0);
  return this$static;
}

function $setTx(this$static, x_0){
  $setTx_0(this$static.transform, x_0);
  return this$static;
}

function $setTy(this$static, y_0){
  $setTy_0(this$static.transform, y_0);
  return this$static;
}

function $transform_0(this$static){
  var cosa, m00, m01, m10, m11, sina, tx, ty;
  if ($isSet(this$static, ($clinit_Layer$Flag() , XFDIRTY))) {
    sina = sin_0(this$static.rotation);
    cosa = cos_0(this$static.rotation);
    m00 = cosa * this$static.scaleX;
    m01 = sina * this$static.scaleY;
    m10 = -sina * this$static.scaleX;
    m11 = cosa * this$static.scaleY;
    tx = this$static.transform.tx;
    ty = this$static.transform.ty;
    $setTransform(this$static.transform, m00, m01, m10, m11, tx, ty);
    $setFlag(this$static, XFDIRTY, false);
  }
  return this$static.transform;
}

function Layer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  this.origin = ($clinit_Layer$Origin() , FIXED_0);
  $setFlag(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
}

defineClass(18, 1, $intern_24);
_.close_0 = function close_1(){
  $close_0(this);
}
;
_.deactivateOnNoListeners = function deactivateOnNoListeners(){
  return true;
}
;
_.height_1 = function height_0(){
  return 0;
}
;
_.hitTestDefault = function hitTestDefault(p){
  return p.x_0 >= 0 && p.y_0 >= 0 && p.x_0 < this.width_1() && p.y_0 < this.height_1()?this:null;
}
;
_.name_1 = function name_2(){
  if (this.name_0 == null) {
    this.name_0 = $getName(this.___clazz$);
    this.name_0 = $substring(this.name_0, this.name_0.lastIndexOf('.') + 1);
  }
  return this.name_0;
}
;
_.onAdd = function onAdd(){
  $onAdd(this);
}
;
_.onRemove = function onRemove(){
  $setState(this, ($clinit_Layer$State() , REMOVED));
}
;
_.toString$ = function toString_21(){
  var buf;
  buf = new StringBuilder_1(this.name_1());
  $append_6($append_4((buf.string += ' @ ' , buf), getHashCode(this)), ' [');
  this.toString_0(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_0 = function toString_22(buf){
  $append_5((buf.string += 'tx=' , buf), $transform_0(this));
  !!this.hitTester && $append_5((buf.string += ', hitTester=' , buf), this.hitTester);
}
;
_.width_1 = function width_1(){
  return 0;
}
;
_.alpha_1 = 1;
_.depth = 0;
_.flags = 0;
_.originX = 0;
_.originY = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
_.tint = -1;
var Lplayn_scene_Layer_2_classLit = createForClass('playn.scene', 'Layer', 18, Ljava_lang_Object_2_classLit);
function DialogKeeper$ShaderLayer(this$0){
  this.this$01 = this$0;
  Layer.call(this);
  this.alpha_0 = 0;
}

defineClass(418, 18, $intern_24, DialogKeeper$ShaderLayer);
_.paintImpl = function paintImpl(surf){
  $setAlpha_0(surf, this.alpha_0);
  $fillRect_0((surf.fillColor = $intern_25 , surf), 0, 0, this.this$01.screen_0.game_0.plat.graphics.viewSize.width_0, this.this$01.screen_0.game_0.plat.graphics.viewSize.height_0);
}
;
_.alpha_0 = 0;
var Lde_cdietze_playn_1util_DialogKeeper$ShaderLayer_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/ShaderLayer', 418, Lplayn_scene_Layer_2_classLit);
function DialogKeeper$ShaderLayer$1(this$1){
  this.this$11 = this$1;
}

defineClass(216, 1, {}, DialogKeeper$ShaderLayer$1);
_.initial = function initial(){
  return this.this$11.alpha_0;
}
;
_.set_0 = function set_0(value_0){
  this.this$11.alpha_0 = value_0;
}
;
var Lde_cdietze_playn_1util_DialogKeeper$ShaderLayer$1_2_classLit = createForClass('de.cdietze.playn_util', 'DialogKeeper/ShaderLayer/1', 216, Ljava_lang_Object_2_classLit);
function $addStyles(this$static, styles){
  this$static._styles = $merge(this$static._styles, styles);
  this$static._ldata = null;
  $invalidate(this$static);
  return this$static;
}

function $addStyles_0(this$static, styles){
  return $addStyles(this$static, ($clinit_Styles() , $add_10((null , _noneSingleton), 0, styles)));
}

function $computeSize(this$static, hintX, hintY){
  var insets, ldata, size_0;
  if (this$static._constraint) {
    hintX = hintX;
    hintY = hintY;
  }
  ldata = this$static._ldata = this$static.createLayoutData(hintX, hintY);
  insets = ldata.bg.insets;
  size_0 = this$static.computeSize(ldata, hintX - (insets._left + insets._right), hintY - (insets._top + insets._bottom));
  size_0.width_0 += insets._left + insets._right;
  size_0.height_0 += insets._top + insets._bottom;
  size_0.width_0 = iceil(size_0.width_0);
  size_0.height_0 = iceil(size_0.height_0);
  return size_0;
}

function $contains_2(this$static, x_0, y_0){
  return !(x_0 < 0 || x_0 > this$static._size.width_0 || y_0 < 0 || y_0 > this$static._size.height_0);
}

function $invalidate(this$static){
  this$static._preferredSize = null;
  if ($isSet_0(this$static, ($clinit_Element$Flag() , VALID))) {
    $set_0(this$static, VALID, false);
    !!this$static._parent && $invalidate(this$static._parent);
  }
}

function $isSet_0(this$static, flag){
  return (flag.mask & this$static._flags) != 0;
}

function $layout(this$static){
  var bginst, bgok, height, insets, ldata, width_0;
  if (!$isSet_0(this$static, ($clinit_Element$Flag() , VISIBLE_2)))
    return;
  width_0 = this$static._size.width_0;
  height = this$static._size.height_0;
  ldata = this$static._ldata?this$static._ldata:this$static.createLayoutData(width_0, height);
  bginst = this$static._bginst._target;
  bgok = !!bginst && bginst.this$01 == ldata.bg && $equals_5(bginst.size_0, this$static._size);
  bgok || $clear_3(this$static._bginst);
  if (width_0 > 0 && height > 0 && !bgok) {
    bginst = $set_6(this$static._bginst, ldata.bg.instantiate(this$static._size));
    bginst.addTo(this$static.layer, 0, 0, 0);
  }
  insets = ldata.bg.insets;
  this$static.layout_0(ldata, insets._left, insets._top, width_0 - (insets._left + insets._right), height - (insets._top + insets._bottom));
  this$static._ldata = null;
}

function $root(this$static){
  return !this$static._parent?null:this$static._parent.root_0();
}

function $set_0(this$static, flag, on){
  on?(this$static._flags |= flag.mask):(this$static._flags &= ~flag.mask);
}

function $setConstraint(this$static, constraint){
  this$static._constraint = constraint;
  $invalidate(this$static);
  return this$static;
}

function $setStyles(this$static, styles){
  this$static._styles = styles;
  this$static._ldata = null;
  $invalidate(this$static);
  return this$static;
}

function $setStyles_0(this$static, styles){
  return $setStyles(this$static, ($clinit_Styles() , $add_10((null , _noneSingleton), 0, styles)));
}

function $validate(this$static){
  if (!$isSet_0(this$static, ($clinit_Element$Flag() , VALID))) {
    this$static.layout();
    $set_0(this$static, VALID, true);
    this$static.wasValidated();
  }
}

function $wasAdded(this$static){
  var b;
  $invalidate(this$static);
  $set_0(this$static, ($clinit_Element$Flag() , IS_ADDING), false);
  for (b = this$static._bindings; b != ($clinit_Element$Binding() , NONE_0); b = b.next)
    $clinit_Closeable$Util();
}

function $wasRemoved(this$static){
  var b;
  $clear_3(this$static._bginst);
  $set_0(this$static, ($clinit_Element$Flag() , IS_REMOVING), false);
  for (b = this$static._bindings; b != ($clinit_Element$Binding() , NONE_0); b = b.next)
    $clinit_Closeable$Util();
}

function $willAdd(this$static){
  return $isSet_0(this$static, ($clinit_Element$Flag() , IS_ADDING)) || !!this$static._parent && $willAdd(this$static._parent);
}

function $willRemove(this$static){
  return $isSet_0(this$static, ($clinit_Element$Flag() , IS_REMOVING)) || !!this$static._parent && $willRemove(this$static._parent);
}

function Element_0(){
  var ref;
  this.layer = new Element$7(this);
  this._flags = ($clinit_Element$Flag() , VISIBLE_2).mask | ENABLED.mask;
  this._size = new Dimension;
  this._styles = ($clinit_Styles() , $clinit_Styles() , _noneSingleton);
  this._bindings = ($clinit_Element$Binding() , NONE_0);
  this._bginst = (ref = new Ref$1 , $set_6(ref, null) , ref);
  $setHitTester(this.layer, new Element$1(this));
  $set_0(this, HIT_DESCEND, true);
}

defineClass(14, 1, $intern_26);
_.computeSize = function computeSize(ldata, hintX, hintY){
  return ldata.computeSize_0(hintX, hintY);
}
;
_.createLayoutData = function createLayoutData(hintX, hintY){
  return new Element$LayoutData(this);
}
;
_.layout = function layout_0(){
  $layout(this);
}
;
_.layout_0 = function layout_1(ldata, left, top_0, width_0, height){
  ldata.layout_1(left, top_0, width_0, height);
}
;
_.preferredSize = function preferredSize(hintX, hintY){
  return !this._preferredSize && (this._preferredSize = $computeSize(this, hintX, hintY)) , this._preferredSize;
}
;
_.root_0 = function root_0(){
  return $root(this);
}
;
_.setLocation = function setLocation(x_0, y_0){
  $setTranslation(this.layer, ifloor(x_0), ifloor(y_0));
}
;
_.setSize = function setSize(width_0, height){
  var changed;
  changed = this._size.width_0 != width_0 || this._size.height_0 != height;
  $setSize_3(this._size, width_0, height);
  !!this._preferredSize && !$equals_5(this._size, this._preferredSize) && (this._ldata = null);
  changed && $invalidate(this);
  return this;
}
;
_.validate = function validate(){
  $validate(this);
}
;
_.wasAdded = function wasAdded(){
  $wasAdded(this);
}
;
_.wasRemoved = function wasRemoved(){
  $wasRemoved(this);
}
;
_.wasValidated = function wasValidated(){
}
;
_._flags = 0;
var Ltripleplay_ui_Element_2_classLit = createForClass('tripleplay.ui', 'Element', 14, Ljava_lang_Object_2_classLit);
function ScaledElement(layer){
  Element_0.call(this);
  this.worldLayer = layer;
  checkArgument_0(layer.width_0 > 0 && layer.height_0 > 0, 'The layer must have a size.');
  $add_3(this.layer, layer);
}

defineClass(531, 14, $intern_26, ScaledElement);
_.createLayoutData = function createLayoutData_0(hintX, hintY){
  return new ScaledElement$1(this, this);
}
;
_.getStyleClass = function getStyleClass(){
  return Lde_cdietze_playn_1util_ScaledElement_2_classLit;
}
;
var Lde_cdietze_playn_1util_ScaledElement_2_classLit = createForClass('de.cdietze.playn_util', 'ScaledElement', 531, Ltripleplay_ui_Element_2_classLit);
function Element$LayoutData(this$0){
  this.this$01_0 = this$0;
  this.bg = resolveStyle(this.this$01_0, ($clinit_Style() , BACKGROUND));
}

defineClass(174, 1, {}, Element$LayoutData);
_.computeSize_0 = function computeSize_0(hintX, hintY){
  return new Dimension_0(0, 0);
}
;
_.layout_1 = function layout_2(left, top_0, width_0, height){
}
;
var Ltripleplay_ui_Element$LayoutData_2_classLit = createForClass('tripleplay.ui', 'Element/LayoutData', 174, Ljava_lang_Object_2_classLit);
function ScaledElement$1(this$0, this$0_1){
  this.this$01 = this$0;
  Element$LayoutData.call(this, this$0_1);
}

defineClass(532, 174, {}, ScaledElement$1);
_.layout_1 = function layout_3(left, top_0, width_0, height){
  var ratio, scale, maxWidthIfHeightRestricted, maxWidth;
  ratio = this.this$01.worldLayer.width_0 / this.this$01.worldLayer.height_0;
  scale = (checkArgument(ratio > 0) , checkArgument_0(width_0 > 0 && height > 0, 'view width and height must be greater than 0, are you using a stretching layout?') , maxWidthIfHeightRestricted = height * ratio , maxWidth = width_0 < maxWidthIfHeightRestricted?width_0:maxWidthIfHeightRestricted , maxWidth / width_0);
  $setTranslation(this.this$01.worldLayer, left + width_0 * 0.5, top_0 + height * 0.5);
  $setScale(this.this$01.worldLayer, scale * width_0 / this.this$01.worldLayer.width_0);
}
;
var Lde_cdietze_playn_1util_ScaledElement$1_2_classLit = createForClass('de.cdietze.playn_util', 'ScaledElement/1', 532, Ltripleplay_ui_Element$LayoutData_2_classLit);
function $closeOnHide(this$static, ac){
  $add_4(this$static._closeOnHide, ac);
}

defineClass(277, 1, {});
_.wasAdded = function wasAdded_0(){
}
;
_.wasHidden = function wasHidden(){
  $close_6(this._closeOnHide);
}
;
var Ltripleplay_game_ScreenStack$Screen_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Screen', 277, Ljava_lang_Object_2_classLit);
function ScreenStack$UIScreen(plat){
  this.layer = new GroupLayer;
  this.update = ($clinit_AbstractSignal() , new Signal);
  this.paint = new Signal;
  this._closeOnHide = new Closeable$Set;
  this.iface = new Interface(plat, this.paint);
}

defineClass(278, 277, {});
_.wasHidden = function wasHidden_0(){
  $close_6(this._closeOnHide);
  $clear_2(this.iface.anim);
}
;
var Ltripleplay_game_ScreenStack$UIScreen_2_classLit = createForClass('tripleplay.game', 'ScreenStack/UIScreen', 278, Ltripleplay_game_ScreenStack$Screen_2_classLit);
function $createDialog(this$static, dialog){
  var d;
  d = $createDialog_0(this$static, ($clinit_AxisLayout() , new AxisLayout$Vertical));
  $add_9(d.root, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [dialog]));
  return d;
}

function $createDialog_0(this$static, layout){
  return new DialogKeeper$Dialog(this$static.dialogKeeper, this$static, $createRoot(this$static.iface, layout, $create(newSheetBuilder(this$static.plat.graphics)), this$static.layer));
}

function Screen_0(game){
  ScreenStack$UIScreen.call(this, game.plat);
  this.updateAnim = new Animator;
  this.game_0 = game;
  this.plat = game.plat;
  this.dialogKeeper = new DialogKeeper(this);
  $addConnection(this.update, this.updateAnim.onPaint);
}

defineClass(204, 278, {});
_.game_1 = function game_0(){
  return this.game_0;
}
;
var Lde_cdietze_playn_1util_Screen_2_classLit = createForClass('de.cdietze.playn_util', 'Screen', 204, Ltripleplay_game_ScreenStack$UIScreen_2_classLit);
function BoardScreen(game, level){
  Screen_0.call(this, game);
  this.escapeDialog = ($clinit_Absent() , $clinit_Absent() , INSTANCE);
  this.game = game;
  this.sprites = new Sprites(this.plat);
  this.state = new BoardState(level);
}

function createFieldLayer(){
  var l;
  l = $setOrigin_0(new Layers$2($intern_27, $intern_27, -6710887), ($clinit_Layer$Origin() , CENTER_0));
  return l;
}

defineClass(139, 204, {}, BoardScreen);
_.wasAdded = function wasAdded_1(){
  var board, boardElement, root;
  root = $createRoot(this.iface, new BorderLayout, $create(newSheetBuilder(this.plat.graphics)), this.layer);
  $setSize_6(root, this.plat.graphics.viewSize);
  board = new BoardScreen$Board(this);
  boardElement = new ScaledElement(board.rootLayer);
  $addStyles_0(boardElement, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , BACKGROUND), $inset(new BlankBackground, 10))]));
  $add_9(root, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$setConstraint(boardElement, ($clinit_BorderLayout() , CENTER_3))]));
}
;
var Lde_cdietze_quads_core_BoardScreen_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen', 139, Lde_cdietze_playn_1util_Screen_2_classLit);
function $createFieldLayers(this$static){
  var builder, fieldIndex, fieldLayer, x_0, y_0;
  builder = ($clinit_ImmutableList() , new ImmutableList$Builder);
  for (fieldIndex = 0; fieldIndex < this$static.level.fieldCount; ++fieldIndex) {
    fieldLayer = $setDepth(createFieldLayer(), -1);
    x_0 = toX(this$static.level.dim, fieldIndex);
    y_0 = toY(this$static.level.dim, fieldIndex);
    $addAt(this$static.gridLayer, fieldLayer, x_0, y_0);
    $add_1(builder.contents, checkNotNull(fieldLayer));
  }
  return copyOf(builder.contents);
}

function $createPlayerLayer(this$static, player){
  var group, headLayer, layers;
  group = new GroupLayer;
  layers = new ArrayList;
  $connectNotify_0(player.tail, new BoardScreen$Board$2(this$static, group, layers));
  headLayer = $createHeadLayer(this$static.this$01.sprites);
  $add_3(group, headLayer);
  $setDepth(group, 10);
  $connectNotify(player.fieldIndex, new BoardScreen$Board$3(this$static, headLayer));
  $add_3(this$static.gridLayer, group);
  return group;
}

function $toggleEscapeDialog(this$static){
  var group;
  if (this$static.this$01.escapeDialog.isPresent()) {
    $close(this$static.this$01.escapeDialog.get_0());
    this$static.this$01.escapeDialog = ($clinit_Absent() , $clinit_Absent() , INSTANCE);
    return;
  }
  group = createDialogGroup(this$static.this$01.plat);
  $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$onClick(new Button('Restart'), new BoardScreen$Board$6(this$static))]));
  $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$onClick(new Button('Main Menu'), new BoardScreen$Board$7(this$static))]));
  this$static.this$01.escapeDialog = new Present(checkNotNull($display($slideTopDown($useShade($createDialog(this$static.this$01, group))))));
}

function BoardScreen$Board(this$0){
  var backgroundLayer, entityLayers, conn, group, display;
  this.this$01 = this$0;
  this.rootLayer = new GroupLayer;
  this.gridLayer = new GroupLayer;
  this.level = this.this$01.state.level;
  this.entityLayerProvider = new BoardScreen$Board$1(this);
  $setOrigin_0($setSize_2(this.rootLayer, this.level.dim.width_0, this.level.dim.height_0), ($clinit_Layer$Origin() , CENTER_0));
  $addAt(this.rootLayer, this.gridLayer, 0.5, 0.5);
  backgroundLayer = $setDepth($setOrigin_0(new Layers$2(this.rootLayer.width_0 + $intern_28, this.rootLayer.height_0 + $intern_28, -1436129690), CENTER_0), -1);
  $addAt(this.rootLayer, backgroundLayer, this.rootLayer.width_0 * 0.5, this.rootLayer.height_0 * 0.5);
  $createFieldLayers(this);
  $createPlayerLayer(this, this$0.state.playerEntity);
  entityLayers = new ArrayList;
  $connectNotify_0(this.this$01.state.entities, new BoardScreen$Board$8(this, entityLayers));
  $connectNotify(this.this$01.state.playerWon, new BoardScreen$Board$5(this));
  conn = $addConnection(this.this$01.plat.input_0.keyboardEvents, new BoardScreen$Board$4(this));
  $closeOnHide(this.this$01, conn);
  group = createDialogGroup(this.this$01.plat);
  $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [new Label(fullTitle(this.level))]));
  display = $display($slideTopDown($createDialog(this.this$01, group)));
  $add_7($then($add_8(this.this$01.iface.anim, new Animation$Delay(3000))), new Animation$Action(new DialogKeeper$Dialog$4(display)));
}

defineClass(493, 1, {}, BoardScreen$Board);
var Lde_cdietze_quads_core_BoardScreen$Board_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board', 493, Ljava_lang_Object_2_classLit);
function $createLayer(this$static, entity){
  var door, group, layer;
  switch (entity.type_0.ordinal) {
    case 1:
      return $setDepth($setTint(createFieldLayer(), -14540254), 0);
    case 2:
      return $setDepth($createPusherLayer(this$static.this$11.this$01.sprites), 15);
    case 3:
      return $setDepth($createExpandoLayer(this$static.this$11.this$01.sprites), 0);
    case 5:
      return $setDepth($setTint($createButtonLayer(this$static.this$11.this$01.sprites), -7500309), 5);
    case 4:
      {
        door = entity;
        group = new GroupLayer_0;
        $setDepth($setOrigin_0(group, ($clinit_Layer$Origin() , CENTER_0)), 20);
        layer = $setTint($createDoorLayer(this$static.this$11.this$01.sprites), -7500309);
        $add_3(group, ($setTranslation_0(layer.transform, 0.5, 0.5) , layer));
        $connectNotify(door.isOpen, new BoardScreen$Board$1$1(this$static, layer));
        return group;
      }

    case 6:
      {
        return $setDepth($createGoalLayer(this$static.this$11.this$01.sprites), 0);
      }

    default:throw new AssertionError_0('Unknown entity type: ' + entity.type_0);
  }
}

function BoardScreen$Board$1(this$1){
  this.this$11 = this$1;
}

defineClass(494, 1, {}, BoardScreen$Board$1);
var Lde_cdietze_quads_core_BoardScreen$Board$1_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/1', 494, Ljava_lang_Object_2_classLit);
function $onEmit(this$static, isOpen){
  if (this$static.handle) {
    this$static.handle.this$01._root._canceled = true;
    this$static.handle = null;
  }
  isOpen.value_0?(this$static.handle = new Animation$2($using($to($add_8(this$static.this$21.this$11.this$01.iface.anim, new Animation$One(new AnimBuilder$20(this$static.val$layer2))), 1.2000000476837158), ($clinit_Interpolator() , EASE_INOUT)))):(this$static.handle = new Animation$2($using($to($add_8(this$static.this$21.this$11.this$01.iface.anim, new Animation$One(new AnimBuilder$20(this$static.val$layer2))), 0.5), ($clinit_Interpolator() , EASE_INOUT))));
}

function BoardScreen$Board$1$1(this$2, val$layer){
  this.this$21 = this$2;
  this.val$layer2 = val$layer;
}

defineClass(495, 607, {}, BoardScreen$Board$1$1);
_.onEmit_0 = function onEmit_1(isOpen){
  $onEmit(this, isOpen);
}
;
_.handle = null;
var Lde_cdietze_quads_core_BoardScreen$Board$1$1_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/1/1', 495, Lreact_Slot_2_classLit);
defineClass(637, 1, {});
_.onAdd_0 = function onAdd_0(index_0, elem){
}
;
_.onRemove_0 = function onRemove_0(index_0, elem){
}
;
var Lreact_RList$Listener_2_classLit = createForClass('react', 'RList/Listener', 637, Ljava_lang_Object_2_classLit);
function $onRemove(this$static, index_0){
  this$static.val$layers3.remove(index_0).close_0();
}

function BoardScreen$Board$2(this$1, val$group, val$layers){
  this.this$11 = this$1;
  this.val$group2 = val$group;
  this.val$layers3 = val$layers;
}

defineClass(496, 637, {}, BoardScreen$Board$2);
_.onAdd_0 = function onAdd_1(index_0, fieldIndex){
  var x_0, y_0, layer;
  x_0 = toX(this.this$11.level.dim, fieldIndex.value_0);
  y_0 = toY(this.this$11.level.dim, fieldIndex.value_0);
  layer = $createTailLayer(this.this$11.this$01.sprites);
  $addAt(this.val$group2, layer, x_0, y_0);
  $add_0(this.val$layers3, index_0, layer);
}
;
_.onRemove_0 = function onRemove_1(index_0, fieldIndex){
  $onRemove(this, index_0, fieldIndex);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$2_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/2', 496, Lreact_RList$Listener_2_classLit);
function BoardScreen$Board$3(this$1, val$headLayer){
  this.this$11 = this$1;
  this.val$headLayer2 = val$headLayer;
}

defineClass(497, 607, {}, BoardScreen$Board$3);
_.onEmit_0 = function onEmit_2(headFieldIndex){
  var x_0, y_0;
  x_0 = toX(this.this$11.level.dim, headFieldIndex.value_0);
  y_0 = toY(this.this$11.level.dim, headFieldIndex.value_0);
  $setTranslation(this.val$headLayer2, x_0, y_0);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$3_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/3', 497, Lreact_Slot_2_classLit);
defineClass(632, 607, {});
_.onEmit_0 = function onEmit_3(event_0){
  instanceOf(event_0, 132) && $onEmit_0(this, event_0);
}
;
var Lplayn_core_Keyboard$KeySlot_2_classLit = createForClass('playn.core', 'Keyboard/KeySlot', 632, Lreact_Slot_2_classLit);
function $onEmit_0(this$static, event_0){
  if (!event_0.down)
    return;
  switch (event_0.key_0.ordinal) {
    case 111:
    case 0:
      $tryMovePlayer(this$static.this$11.this$01.state, ($clinit_Direction() , LEFT));
      break;
    case 114:
    case 3:
      $tryMovePlayer(this$static.this$11.this$01.state, ($clinit_Direction() , RIGHT));
      break;
    case 115:
    case 22:
      $tryMovePlayer(this$static.this$11.this$01.state, ($clinit_Direction() , UP));
      break;
    case 108:
    case 18:
      $tryMovePlayer(this$static.this$11.this$01.state, ($clinit_Direction() , DOWN));
      break;
    case 121:
      $toggleEscapeDialog(this$static.this$11);
  }
}

function BoardScreen$Board$4(this$1){
  this.this$11 = this$1;
}

defineClass(498, 632, {}, BoardScreen$Board$4);
var Lde_cdietze_quads_core_BoardScreen$Board$4_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/4', 498, Lplayn_core_Keyboard$KeySlot_2_classLit);
function $onEmit_1(this$static, won){
  var group, levelIndex;
  if (!won.value_0)
    return;
  levelIndex = $indexOf(($clinit_Levels() , levels), this$static.this$11.level);
  if (levelIndex >= 0 && levelIndex + 1 < levels.delegate.size_1()) {
    $replace(this$static.this$11.this$01.game.screens, new BoardScreen(this$static.this$11.this$01.game, $get(levels, levelIndex + 1)));
    return;
  }
  group = createDialogGroup(this$static.this$11.this$01.plat);
  $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [new Label('You solved it!')]));
  $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [new Label('You finished all levels. Congratulations!')]));
  $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$onClick(new Button('Main Menu'), new BoardScreen$Board$5$1(this$static))]));
  $display($slideTopDown($useShade($createDialog(this$static.this$11.this$01, group))));
}

function BoardScreen$Board$5(this$1){
  this.this$11 = this$1;
}

defineClass(499, 607, {}, BoardScreen$Board$5);
_.onEmit_0 = function onEmit_4(won){
  $onEmit_1(this, won);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$5_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/5', 499, Lreact_Slot_2_classLit);
function $onEmit_2(this$static){
  $remove(this$static.this$21.this$11.this$01.game.screens, this$static.this$21.this$11.this$01);
}

function BoardScreen$Board$5$1(this$2){
  this.this$21 = this$2;
}

defineClass(500, 607, {}, BoardScreen$Board$5$1);
_.onEmit_0 = function onEmit_5(event_0){
  $onEmit_2(this, event_0);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$5$1_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/5/1', 500, Lreact_Slot_2_classLit);
function $onEmit_3(this$static){
  $replace(this$static.this$11.this$01.game.screens, new BoardScreen(this$static.this$11.this$01.game, this$static.this$11.level));
}

function BoardScreen$Board$6(this$1){
  this.this$11 = this$1;
}

defineClass(501, 607, {}, BoardScreen$Board$6);
_.onEmit_0 = function onEmit_6(event_0){
  $onEmit_3(this, event_0);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$6_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/6', 501, Lreact_Slot_2_classLit);
function $onEmit_4(this$static){
  $remove(this$static.this$11.this$01.game.screens, this$static.this$11.this$01);
}

function BoardScreen$Board$7(this$1){
  this.this$11 = this$1;
}

defineClass(502, 607, {}, BoardScreen$Board$7);
_.onEmit_0 = function onEmit_7(event_0){
  $onEmit_4(this, event_0);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$7_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/7', 502, Lreact_Slot_2_classLit);
function $onRemove_0(this$static, index_0){
  this$static.val$entityLayers2.remove(index_0).close_0();
}

function BoardScreen$Board$8(this$1, val$entityLayers){
  this.this$11 = this$1;
  this.val$entityLayers2 = val$entityLayers;
}

defineClass(503, 637, {}, BoardScreen$Board$8);
_.onAdd_0 = function onAdd_2(index_0, entity){
  var entityLayer;
  entityLayer = $createLayer(this.this$11.entityLayerProvider, entity);
  $add_0(this.val$entityLayers2, index_0, entityLayer);
  $connectNotify(entity.fieldIndex, new BoardScreen$Board$9(this.this$11, entityLayer));
  $add_3(this.this$11.gridLayer, entityLayer);
  $connectNotify(entity.fieldIndex, new BoardScreen$Board$9(this.this$11, entityLayer));
}
;
_.onRemove_0 = function onRemove_2(index_0, elem){
  $onRemove_0(this, index_0, elem);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$8_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/8', 503, Lreact_RList$Listener_2_classLit);
function BoardScreen$Board$9(this$1, val$layer){
  this.this$11 = this$1;
  this.val$layer2 = val$layer;
}

defineClass(239, 607, {}, BoardScreen$Board$9);
_.onEmit_0 = function onEmit_8(fieldIndex){
  var x_0, y_0;
  x_0 = toX(this.this$11.level.dim, fieldIndex.value_0);
  y_0 = toY(this.this$11.level.dim, fieldIndex.value_0);
  $setTranslation(this.val$layer2, x_0, y_0);
}
;
var Lde_cdietze_quads_core_BoardScreen$Board$9_2_classLit = createForClass('de.cdietze.quads.core', 'BoardScreen/Board/9', 239, Lreact_Slot_2_classLit);
function $clinit_BoardState(){
  $clinit_BoardState = emptyMethod;
  log_1 = new Logger('state');
}

function $canMoveHere(this$static, pos){
  return $contains_5(this$static.level.rect, pos);
}

function $canMovePlayer(this$static, dir_0){
  var pos, target, target$iterator, targets;
  pos = $addLocal(toPoint(this$static.level.dim, this$static.playerEntity.fieldIndex._value.value_0, new Point_1), dir_0.dir_1().x_0, dir_0.dir_1().y_0);
  if (!$contains_5(this$static.level.rect, pos))
    return false;
  targets = $entitiesAt(this$static, toIndex_1(this$static.level.dim, pos));
  for (target$iterator = new AbstractList$IteratorImpl(targets); target$iterator.i < target$iterator.this$01.size_1();) {
    target = (checkCriticalElement(target$iterator.i < target$iterator.this$01.size_1()) , target$iterator.this$01.get_1(target$iterator.i++));
    if (!target.canEnter(this$static.playerEntity, dir_0, this$static.playerEntity.tail._impl.array.length + 1))
      return false;
  }
  return true;
}

function $entitiesAt(this$static, fieldIndex){
  var entity, entity$iterator, result;
  result = new ArrayList;
  for (entity$iterator = $listIterator_0(this$static.entities); entity$iterator.val$iiter2.hasNext();) {
    entity = entity$iterator.val$iiter2.next_0();
    entity.fieldIndex._value.value_0 == fieldIndex && (result.array[result.array.length] = entity , true);
  }
  return result;
}

function $movePlayer(this$static, dir_0){
  var entity, entity$iterator, isFreshHead, removedFieldIndex, targetEntities, targetEntity, targetEntity$iterator, targetHeadIndex;
  targetHeadIndex = addDirToIndex(this$static.level.dim, this$static.playerEntity.fieldIndex._value.value_0, dir_0);
  isFreshHead = !$contains_6(this$static.playerEntity.tail, valueOf_0(targetHeadIndex));
  targetEntities = $entitiesAt(this$static, targetHeadIndex);
  for (targetEntity$iterator = new AbstractList$IteratorImpl(targetEntities); targetEntity$iterator.i < targetEntity$iterator.this$01.size_1();) {
    targetEntity = (checkCriticalElement(targetEntity$iterator.i < targetEntity$iterator.this$01.size_1()) , targetEntity$iterator.this$01.get_1(targetEntity$iterator.i++));
    targetEntity.beforeEntityEnters(this$static.playerEntity, dir_0);
  }
  $remove_8(this$static.playerEntity.tail, valueOf_0(targetHeadIndex));
  $add_5(this$static.playerEntity.tail, 0, this$static.playerEntity.fieldIndex._value);
  $updateAndNotify(this$static.playerEntity.fieldIndex, valueOf_0(targetHeadIndex), false);
  if (!isFreshHead)
    return;
  if (indexOf_1(new AbstractList$IteratorImpl(targetEntities)) != -1) {
    return;
  }
  removedFieldIndex = $remove_7(this$static.playerEntity.tail, this$static.playerEntity.tail._impl.array.length - 1).value_0;
  for (entity$iterator = new AbstractList$IteratorImpl($entitiesAt(this$static, removedFieldIndex)); entity$iterator.i < entity$iterator.this$01.size_1();) {
    entity = (checkCriticalElement(entity$iterator.i < entity$iterator.this$01.size_1()) , entity$iterator.this$01.get_1(entity$iterator.i++));
    entity.afterEntityLeft(this$static.playerEntity);
  }
}

function $tryMovePlayer(this$static, dir_0){
  if (this$static.playerWon._value.value_0)
    return;
  if (!$canMovePlayer(this$static, dir_0))
    return;
  $movePlayer(this$static, dir_0);
}

function BoardState(level){
  $clinit_BoardState();
  var buttons, doorLink, fieldIndex, fieldIndex$iterator, fieldIndex$iterator0, fieldIndex$iterator1, fieldIndex$iterator2, fieldIndex$iterator3, i;
  this.entities = ($clinit_RList() , new RList(new ArrayList));
  this.playerWon = new Value(($clinit_Boolean() , $clinit_Boolean() , FALSE));
  this.tmp = new Point_1;
  this.level = requireNonNull(level);
  this.playerEntity = new BoardState$PlayerEntity(level.playerStart);
  for (fieldIndex$iterator0 = level.walls.iterator_0(); fieldIndex$iterator0.hasNext();) {
    fieldIndex = fieldIndex$iterator0.next_0().value_0;
    $add_6(this.entities, new BoardState$WallEntity(fieldIndex));
  }
  for (fieldIndex$iterator1 = level.pushEntity.iterator_0(); fieldIndex$iterator1.hasNext();) {
    fieldIndex = fieldIndex$iterator1.next_0().value_0;
    $add_6(this.entities, new BoardState$PusherEntity(this, fieldIndex));
  }
  for (fieldIndex$iterator2 = level.expandoEntity.iterator_0(); fieldIndex$iterator2.hasNext();) {
    fieldIndex = fieldIndex$iterator2.next_0();
    $add_6(this.entities, new BoardState$ExpandoEntity(this, fieldIndex.value_0));
  }
  for (i = 0; i < level.doorLinks.size_1(); i++) {
    doorLink = level.doorLinks.get_1(i);
    buttons = new ArrayList;
    for (fieldIndex$iterator3 = doorLink.buttons.iterator_0(); fieldIndex$iterator3.hasNext();) {
      fieldIndex = fieldIndex$iterator3.next_0().value_0;
      $add_1(buttons, new BoardState$ButtonEntity(fieldIndex));
    }
    $addAll_2(this.entities, buttons);
    for (fieldIndex$iterator = doorLink.doors.iterator_0(); fieldIndex$iterator.hasNext();) {
      fieldIndex = fieldIndex$iterator.next_0().value_0;
      $add_6(this.entities, new BoardState$DoorEntity(fieldIndex, buttons));
    }
  }
  $add_6(this.entities, new BoardState$GoalEntity(this, level.playerGoal));
}

defineClass(516, 1, {}, BoardState);
var log_1;
var Lde_cdietze_quads_core_BoardState_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState', 516, Ljava_lang_Object_2_classLit);
function BoardState$Entity(type_0, initialFieldIndex){
  this.type_0 = type_0;
  this.fieldIndex = new IntValue(initialFieldIndex);
}

defineClass(78, 1, {});
_.afterEntityLeft = function afterEntityLeft(entity){
  $debug_0(($clinit_BoardState() , log_1), 'afterEntityLeft', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', entity]));
}
;
_.beforeEntityEnters = function beforeEntityEnters(entity, dir_0){
  $debug_0(($clinit_BoardState() , log_1), 'beforeEntityEnters', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', entity]));
}
;
_.canEnter = function canEnter(entity, dir_0, power){
  return false;
}
;
_.keepPlayerTailOnEnter = function keepPlayerTailOnEnter(){
  return false;
}
;
_.toString$ = function toString_23(){
  return $toString_0($addHolder($addHolder(new MoreObjects$ToStringHelper($getSimpleName(this.___clazz$)), 'type', this.type_0), 'fieldIndex', this.fieldIndex));
}
;
var Lde_cdietze_quads_core_BoardState$Entity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/Entity', 78, Ljava_lang_Object_2_classLit);
function BoardState$ButtonEntity(initialFieldIndex){
  BoardState$Entity.call(this, ($clinit_BoardState$Entity$Type() , BUTTON), initialFieldIndex);
  this.isDown = ($clinit_AbstractValue() , new Value(($clinit_Boolean() , $clinit_Boolean() , FALSE)));
}

defineClass(522, 78, {}, BoardState$ButtonEntity);
_.afterEntityLeft = function afterEntityLeft_0(e){
  $debug_0(($clinit_BoardState() , log_1), 'afterEntityLeft', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
  this.isDown.updateAndNotify(($clinit_Boolean() , $clinit_Boolean() , FALSE), false);
}
;
_.beforeEntityEnters = function beforeEntityEnters_0(e, dir_0){
  $debug_0(($clinit_BoardState() , log_1), 'beforeEntityEnters', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
  this.isDown.updateAndNotify(($clinit_Boolean() , $clinit_Boolean() , TRUE), false);
}
;
_.canEnter = function canEnter_0(e, dir_0, power){
  return true;
}
;
var Lde_cdietze_quads_core_BoardState$ButtonEntity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/ButtonEntity', 522, Lde_cdietze_quads_core_BoardState$Entity_2_classLit);
function BoardState$DoorEntity(initialFieldIndex, buttons){
  var allButtonsDown;
  BoardState$Entity.call(this, ($clinit_BoardState$Entity$Type() , DOOR), initialFieldIndex);
  this.isOpen = ($clinit_AbstractValue() , new Value(($clinit_Boolean() , $clinit_Boolean() , FALSE)));
  this.isOccupied = new Value((null , FALSE));
  allButtonsDown = ($clinit_Values() , aggValue(($clinit_Collections2() , new Collections2$TransformedCollection(buttons, new BoardState$DoorEntity$1)), COMPUTE_AND));
  $connectNotify(aggValue(new Arrays$ArrayList(initValues(getClassLiteralForArray(Lreact_ValueView_2_classLit, 1), $intern_1, 96, 0, [allButtonsDown, this.isOccupied])), COMPUTE_OR), new Value$1(this.isOpen));
}

defineClass(521, 78, {}, BoardState$DoorEntity);
_.afterEntityLeft = function afterEntityLeft_1(e){
  $debug_0(($clinit_BoardState() , log_1), 'afterEntityLeft', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
  this.isOccupied.updateAndNotify(($clinit_Boolean() , $clinit_Boolean() , FALSE), false);
}
;
_.beforeEntityEnters = function beforeEntityEnters_1(e, dir_0){
  $debug_0(($clinit_BoardState() , log_1), 'beforeEntityEnters', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
  this.isOccupied.updateAndNotify(($clinit_Boolean() , $clinit_Boolean() , TRUE), false);
}
;
_.canEnter = function canEnter_1(e, dir_0, power){
  return this.isOpen._value.value_0;
}
;
var Lde_cdietze_quads_core_BoardState$DoorEntity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/DoorEntity', 521, Lde_cdietze_quads_core_BoardState$Entity_2_classLit);
function BoardState$DoorEntity$1(){
}

defineClass(524, 1, {148:1}, BoardState$DoorEntity$1);
_.apply_0 = function apply_4(buttonEntity){
  return buttonEntity.isDown;
}
;
var Lde_cdietze_quads_core_BoardState$DoorEntity$1_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/DoorEntity/1', 524, Ljava_lang_Object_2_classLit);
function $clinit_BoardState$Entity$Type(){
  $clinit_BoardState$Entity$Type = emptyMethod;
  PLAYER = new BoardState$Entity$Type('PLAYER', 0);
  WALL = new BoardState$Entity$Type('WALL', 1);
  PUSHER = new BoardState$Entity$Type('PUSHER', 2);
  EXPANDO = new BoardState$Entity$Type('EXPANDO', 3);
  DOOR = new BoardState$Entity$Type('DOOR', 4);
  BUTTON = new BoardState$Entity$Type('BUTTON', 5);
  GOAL = new BoardState$Entity$Type('GOAL', 6);
}

function BoardState$Entity$Type(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_BoardState$Entity$Type();
  return initValues(getClassLiteralForArray(Lde_cdietze_quads_core_BoardState$Entity$Type_2_classLit, 1), $intern_1, 59, 0, [PLAYER, WALL, PUSHER, EXPANDO, DOOR, BUTTON, GOAL]);
}

defineClass(59, 6, {59:1, 3:1, 7:1, 6:1}, BoardState$Entity$Type);
var BUTTON, DOOR, EXPANDO, GOAL, PLAYER, PUSHER, WALL;
var Lde_cdietze_quads_core_BoardState$Entity$Type_2_classLit = createForEnum('de.cdietze.quads.core', 'BoardState/Entity/Type', 59, Ljava_lang_Enum_2_classLit, values_13);
function BoardState$ExpandoEntity(this$0, initialFieldIndex){
  this.this$01 = this$0;
  BoardState$Entity.call(this, ($clinit_BoardState$Entity$Type() , EXPANDO), initialFieldIndex);
}

defineClass(520, 78, {}, BoardState$ExpandoEntity);
_.beforeEntityEnters = function beforeEntityEnters_2(e, dir_0){
  $debug_0(($clinit_BoardState() , log_1), 'beforeEntityEnters', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
  checkState(e.type_0 == ($clinit_BoardState$Entity$Type() , PLAYER));
  $remove_8(this.this$01.entities, this);
}
;
_.canEnter = function canEnter_2(e, dir_0, power){
  return e.type_0 == ($clinit_BoardState$Entity$Type() , PLAYER);
}
;
_.keepPlayerTailOnEnter = function keepPlayerTailOnEnter_0(){
  return true;
}
;
var Lde_cdietze_quads_core_BoardState$ExpandoEntity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/ExpandoEntity', 520, Lde_cdietze_quads_core_BoardState$Entity_2_classLit);
function BoardState$GoalEntity(this$0, initialFieldIndex){
  this.this$01 = this$0;
  BoardState$Entity.call(this, ($clinit_BoardState$Entity$Type() , GOAL), initialFieldIndex);
}

defineClass(523, 78, {}, BoardState$GoalEntity);
_.afterEntityLeft = function afterEntityLeft_2(e){
  $debug_0(($clinit_BoardState() , log_1), 'afterEntityLeft', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
}
;
_.beforeEntityEnters = function beforeEntityEnters_3(e, dir_0){
  $debug_0(($clinit_BoardState() , log_1), 'beforeEntityEnters', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
  e.type_0 == ($clinit_BoardState$Entity$Type() , PLAYER) && this.this$01.playerWon.updateAndNotify(($clinit_Boolean() , $clinit_Boolean() , TRUE), false);
}
;
_.canEnter = function canEnter_3(e, dir_0, power){
  return true;
}
;
var Lde_cdietze_quads_core_BoardState$GoalEntity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/GoalEntity', 523, Lde_cdietze_quads_core_BoardState$Entity_2_classLit);
function BoardState$PlayerEntity(fieldIndex){
  BoardState$Entity.call(this, ($clinit_BoardState$Entity$Type() , PLAYER), fieldIndex);
  this.tail = ($clinit_RList() , new RList(new ArrayList));
}

defineClass(517, 78, {}, BoardState$PlayerEntity);
var Lde_cdietze_quads_core_BoardState$PlayerEntity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/PlayerEntity', 517, Lde_cdietze_quads_core_BoardState$Entity_2_classLit);
function BoardState$PusherEntity(this$0, initialFieldIndex){
  this.this$01 = this$0;
  BoardState$Entity.call(this, ($clinit_BoardState$Entity$Type() , PUSHER), initialFieldIndex);
}

defineClass(519, 78, {}, BoardState$PusherEntity);
_.beforeEntityEnters = function beforeEntityEnters_4(e, dir_0){
  var moveOffset, targetEntity, targetEntity$iterator, targetEntity$iterator0, targetFieldIndex;
  $debug_0(($clinit_BoardState() , log_1), 'beforeEntityEnters', initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, ['this', this, 'entity', e]));
  for (targetEntity$iterator0 = new AbstractList$IteratorImpl($entitiesAt(this.this$01, this.fieldIndex._value.value_0)); targetEntity$iterator0.i < targetEntity$iterator0.this$01.size_1();) {
    targetEntity = (checkCriticalElement(targetEntity$iterator0.i < targetEntity$iterator0.this$01.size_1()) , targetEntity$iterator0.this$01.get_1(targetEntity$iterator0.i++));
    if (targetEntity == this)
      continue;
    targetEntity.afterEntityLeft(this);
  }
  moveOffset = toIndex_0(this.this$01.level.dim, dir_0.dir_1().x_0, dir_0.dir_1().y_0);
  targetFieldIndex = this.fieldIndex._value.value_0 + moveOffset;
  for (targetEntity$iterator = new AbstractList$IteratorImpl($entitiesAt(this.this$01, targetFieldIndex)); targetEntity$iterator.i < targetEntity$iterator.this$01.size_1();) {
    targetEntity = (checkCriticalElement(targetEntity$iterator.i < targetEntity$iterator.this$01.size_1()) , targetEntity$iterator.this$01.get_1(targetEntity$iterator.i++));
    targetEntity.beforeEntityEnters(this, dir_0);
  }
  $increment(this.fieldIndex, moveOffset);
}
;
_.canEnter = function canEnter_4(e, dir_0, power){
  var targetEntities, targetEntity, targetEntity$iterator, targetPos;
  if (power <= 0)
    return false;
  targetPos = $addLocal(toPoint(this.this$01.level.dim, this.fieldIndex._value.value_0, this.this$01.tmp), dir_0.dir_1().x_0, dir_0.dir_1().y_0);
  if (!$canMoveHere(this.this$01, targetPos))
    return false;
  targetEntities = $entitiesAt(this.this$01, toIndex_1(this.this$01.level.dim, targetPos));
  for (targetEntity$iterator = new AbstractList$IteratorImpl(targetEntities); targetEntity$iterator.i < targetEntity$iterator.this$01.size_1();) {
    targetEntity = (checkCriticalElement(targetEntity$iterator.i < targetEntity$iterator.this$01.size_1()) , targetEntity$iterator.this$01.get_1(targetEntity$iterator.i++));
    if (!targetEntity.canEnter(this, dir_0, power - 1))
      return false;
  }
  return true;
}
;
var Lde_cdietze_quads_core_BoardState$PusherEntity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/PusherEntity', 519, Lde_cdietze_quads_core_BoardState$Entity_2_classLit);
function BoardState$WallEntity(fieldIndex){
  BoardState$Entity.call(this, ($clinit_BoardState$Entity$Type() , WALL), fieldIndex);
}

defineClass(518, 78, {}, BoardState$WallEntity);
_.canEnter = function canEnter_5(e, dir_0, power){
  return false;
}
;
var Lde_cdietze_quads_core_BoardState$WallEntity_2_classLit = createForClass('de.cdietze.quads.core', 'BoardState/WallEntity', 518, Lde_cdietze_quads_core_BoardState$Entity_2_classLit);
function $clinit_Direction(){
  $clinit_Direction = emptyMethod;
  UP = new Direction$1;
  DOWN = new Direction$2;
  LEFT = new Direction$3;
  RIGHT = new Direction$4;
}

function Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_Direction();
  return initValues(getClassLiteralForArray(Lde_cdietze_quads_core_Direction_2_classLit, 1), $intern_1, 55, 0, [UP, DOWN, LEFT, RIGHT]);
}

defineClass(55, 6, $intern_29);
var DOWN, LEFT, RIGHT, UP;
var Lde_cdietze_quads_core_Direction_2_classLit = createForEnum('de.cdietze.quads.core', 'Direction', 55, Ljava_lang_Enum_2_classLit, values_14);
function Direction$1(){
  Direction.call(this, 'UP', 0);
  this.dir_0 = new Point_2(0, -1);
}

defineClass(584, 55, $intern_29, Direction$1);
_.dir_1 = function dir_1(){
  return this.dir_0;
}
;
var Lde_cdietze_quads_core_Direction$1_2_classLit = createForEnum('de.cdietze.quads.core', 'Direction/1', 584, Lde_cdietze_quads_core_Direction_2_classLit, null);
function Direction$2(){
  Direction.call(this, 'DOWN', 1);
  this.dir_0 = new Point_2(0, 1);
}

defineClass(585, 55, $intern_29, Direction$2);
_.dir_1 = function dir_2(){
  return this.dir_0;
}
;
var Lde_cdietze_quads_core_Direction$2_2_classLit = createForEnum('de.cdietze.quads.core', 'Direction/2', 585, Lde_cdietze_quads_core_Direction_2_classLit, null);
function Direction$3(){
  Direction.call(this, 'LEFT', 2);
  this.dir_0 = new Point_2(-1, 0);
}

defineClass(586, 55, $intern_29, Direction$3);
_.dir_1 = function dir_3(){
  return this.dir_0;
}
;
var Lde_cdietze_quads_core_Direction$3_2_classLit = createForEnum('de.cdietze.quads.core', 'Direction/3', 586, Lde_cdietze_quads_core_Direction_2_classLit, null);
function Direction$4(){
  Direction.call(this, 'RIGHT', 3);
  this.dir_0 = new Point_2(1, 0);
}

defineClass(587, 55, $intern_29, Direction$4);
_.dir_1 = function dir_4(){
  return this.dir_0;
}
;
var Lde_cdietze_quads_core_Direction$4_2_classLit = createForEnum('de.cdietze.quads.core', 'Direction/4', 587, Lde_cdietze_quads_core_Direction_2_classLit, null);
function Level(builder){
  this.dim = new Dimension_3(builder.dim);
  this.rect = new Rectangle_2(this.dim);
  this.fieldCount = this.dim.width_0 * this.dim.height_0;
  this.title_0 = builder.title_0;
  this.playerStart = builder.playerStart;
  checkState(this.playerStart >= 0);
  this.playerGoal = builder.playerGoal;
  checkState(this.playerGoal >= 0);
  this.walls = copyOf(builder.walls);
  this.pushEntity = copyOf(builder.pushEntity);
  this.expandoEntity = copyOf(builder.expandoEntity);
  this.doorLinks = copyOf(($clinit_Maps() , new Maps$Values(mapsTransformEntriesSortedMap(builder.doorLinks, asEntryTransformer(($clinit_Level$DoorLink() , builderFunction))))));
}

defineClass(137, 1, {}, Level);
_.fieldCount = 0;
_.playerGoal = 0;
_.playerStart = 0;
var Lde_cdietze_quads_core_Level_2_classLit = createForClass('de.cdietze.quads.core', 'Level', 137, Ljava_lang_Object_2_classLit);
function $doorLink(this$static, key){
  $containsKey_0(this$static.doorLinks, valueOf(key)) || $put_7(this$static.doorLinks, valueOf(key), new Level$DoorLink$Builder);
  return $get_7(this$static.doorLinks, valueOf(key));
}

function $handleChar(this$static, c, index_0){
  var buttonRange, doorRange;
  doorRange = closed_0(valueOf(65), valueOf(68));
  buttonRange = closed_0(valueOf(97), valueOf(100));
  if (c == 83) {
    this$static.playerStart = index_0;
  }
   else if (c == 71) {
    this$static.playerGoal = index_0;
  }
   else if (c == 87) {
    $add_1(this$static.walls, valueOf_0(index_0));
  }
   else if (c == 80) {
    $add_1(this$static.pushEntity, valueOf_0(index_0));
  }
   else if (c == 88) {
    $add_1(this$static.expandoEntity, valueOf_0(index_0));
  }
   else if (c == 46)
  ;
  else if ($contains_0(doorRange, valueOf(c))) {
    $add_1(($containsKey_0(this$static.doorLinks, valueOf(c)) || $put_7(this$static.doorLinks, valueOf(c), new Level$DoorLink$Builder) , $get_7(this$static.doorLinks, valueOf(c))).doors, valueOf_0(index_0));
  }
   else if ($contains_0(buttonRange, valueOf(c))) {
    $add_1($doorLink(this$static, String.fromCharCode(c).toUpperCase().charCodeAt(0)).buttons, valueOf_0(index_0));
  }
   else 
    throw new AssertionError_0("unknown char in level description: '" + charToString(c) + "'");
}

function $read(this$static, s){
  var c, row, rows_0, x_0, y_0;
  rows_0 = $splitToList(on_0(($clinit_CharMatcher() , new CharMatcher$Is)), s);
  this$static.dim = new Dimension_2(rows_0.list.get_1(0).length, rows_0.size_1());
  rows_0.list.get_1(0).length;
  for (y_0 = 0; y_0 < rows_0.size_1(); y_0++) {
    row = rows_0.list.get_1(y_0);
    for (x_0 = 0; x_0 < row.length; ++x_0) {
      c = row.charCodeAt(x_0);
      $handleChar(this$static, c, toIndex_0(this$static.dim, x_0, y_0));
    }
  }
  return this$static;
}

function $title(this$static, title_0){
  this$static.title_0 = title_0;
  return this$static;
}

function Level$Builder(){
  this.walls = new ArrayList;
  this.pushEntity = new ArrayList;
  this.expandoEntity = new ArrayList;
  this.doorLinks = ($clinit_Maps() , new TreeMap);
}

defineClass(138, 1, {}, Level$Builder);
_.playerGoal = -1;
_.playerStart = -1;
var Lde_cdietze_quads_core_Level$Builder_2_classLit = createForClass('de.cdietze.quads.core', 'Level/Builder', 138, Ljava_lang_Object_2_classLit);
function $clinit_Level$DoorLink(){
  $clinit_Level$DoorLink = emptyMethod;
  builderFunction = new Level$DoorLink$1;
}

function Level$DoorLink(builder){
  $clinit_Level$DoorLink();
  this.doors = copyOf(builder.doors);
  this.buttons = copyOf(builder.buttons);
}

defineClass(491, 1, {}, Level$DoorLink);
var builderFunction;
var Lde_cdietze_quads_core_Level$DoorLink_2_classLit = createForClass('de.cdietze.quads.core', 'Level/DoorLink', 491, Ljava_lang_Object_2_classLit);
function $apply(builder){
  return new Level$DoorLink(builder);
}

function Level$DoorLink$1(){
}

defineClass(492, 1, {148:1}, Level$DoorLink$1);
_.apply_0 = function apply_5(builder){
  return $apply(builder);
}
;
var Lde_cdietze_quads_core_Level$DoorLink$1_2_classLit = createForClass('de.cdietze.quads.core', 'Level/DoorLink/1', 492, Ljava_lang_Object_2_classLit);
function Level$DoorLink$Builder(){
  this.doors = new ArrayList;
  this.buttons = new ArrayList;
}

defineClass(238, 1, {}, Level$DoorLink$Builder);
var Lde_cdietze_quads_core_Level$DoorLink$Builder_2_classLit = createForClass('de.cdietze.quads.core', 'Level/DoorLink/Builder', 238, Ljava_lang_Object_2_classLit);
function $clinit_Levels(){
  $clinit_Levels = emptyMethod;
  level1 = new Level($read($title(new Level$Builder, 'Where am I?'), '.......\nS.....G\n.......'));
  basicButtons = new Level($read($title(new Level$Builder, 'What is all this?'), 'XX...a.\n.......\n.....WA\naP.S.W.\n.....P.\n.....WW\n.....AG'));
  level2 = new Level($read($title(new Level$Builder, 'Yummy!'), 'a.....a\nWW...WW\n......a\n...SWWW\nAWXXXXX\n.WXXXXX\nGWXXXXX'));
  level3 = new Level($read($title(new Level$Builder, 'This one reminds me of a game I played...'), 'XX.WWWW\nP..P.P.\n.WW....\nPW.PP..\naa.S.WW\naa..WWG\naa..A..'));
  levels = ($clinit_ImmutableList() , new RegularImmutableList(nullCheckedList(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [level1, basicButtons, level2, level3]))));
}

function fullTitle(level){
  $clinit_Levels();
  var levelIndex, title_0;
  levelIndex = $indexOf(levels, level);
  title_0 = new StringBuilder;
  levelIndex >= 0 && (title_0.string += 'Level ' + (levelIndex + 1) + ' - ' , title_0);
  $append_6(title_0, level.title_0);
  return title_0.string;
}

var basicButtons, level1, level2, level3, levels;
function $onFrame(this$static){
  var nextUpdate, paintTick, updateDt, updateRate, updateTick, updates;
  nextUpdate = this$static.nextUpdate;
  updateTick = $tick(this$static.plat);
  if (updateTick >= nextUpdate) {
    updateRate = this$static.updateRate;
    updates = 0;
    while (updateTick >= nextUpdate) {
      nextUpdate += updateRate;
      ++updates;
    }
    this$static.nextUpdate = nextUpdate;
    updateDt = updates * updateRate;
    this$static.updateClock.tick += updateDt;
    this$static.updateClock.dt = updateDt;
    $update(this$static, this$static.updateClock);
  }
  paintTick = $tick(this$static.plat);
  this$static.paintClock.dt = paintTick - this$static.paintClock.tick;
  this$static.paintClock.tick = paintTick;
  1 - (nextUpdate - paintTick) / this$static.updateRate;
  $notifyEmit(this$static.paint, this$static.paintClock);
}

function $update(this$static, clock){
  $notifyEmit(this$static.update, clock);
}

defineClass(267, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass('playn.core', 'Game', 267, Ljava_lang_Object_2_classLit);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    if (maxVecs = usableMaxUniformVectors(gl) , maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (!instanceOf($e0, 16))
      throw unwrap($e0);
  }
  return new TriangleBatch(gl);
}

function $paintScene(this$static){
  $saveTx(this$static.viewSurf);
  $begin_0(this$static.viewSurf);
  $clear_0(this$static.viewSurf, this$static.cred, this$static.cgreen, this$static.cblue, this$static.calpha);
  try {
    $paint(this$static.rootLayer, this$static.viewSurf);
  }
   finally {
    $end_0(this$static.viewSurf);
    $restoreTx(this$static.viewSurf);
  }
}

defineClass(268, 267, {});
_.calpha = 0;
_.cblue = 0;
_.cgreen = 0;
_.cred = 0;
var Lplayn_scene_SceneGame_2_classLit = createForClass('playn.scene', 'SceneGame', 268, Lplayn_core_Game_2_classLit);
function $clinit_MainGame(){
  $clinit_MainGame = emptyMethod;
  $setDefault(($clinit_Logger() , levels_0), ($clinit_Logger$Level() , INFO_1));
}

function MainGame(plat){
  var gl;
  $clinit_MainGame();
  var bgImage, bgLayer;
  this.update = ($clinit_AbstractSignal() , new Signal);
  this.paint = new Signal;
  this.updateClock = new Clock;
  this.paintClock = new Clock;
  this.plat = plat;
  this.updateRate = 33;
  $addConnection(plat.frame_0, new Game$1(this));
  gl = plat.graphics.gl;
  $disable(gl.glc, 2884);
  $enable(gl.glc, 3042);
  gl.glc.blendFunc(1, 771);
  this.defaultBatch = $createDefaultBatch(gl);
  this.viewSurf = new Surface(plat.graphics, plat.graphics.defaultRenderTarget, this.defaultBatch);
  this.rootLayer = new RootLayer;
  $atPrio($addConnection(this.paint, new SceneGame$1(this)), -1);
  this.screens = new MainGame$1(this, this.rootLayer);
  bgImage = $getImage(plat.assets);
  bgLayer = new ImageLayer_0(bgImage);
  $setSize_1(bgLayer, plat.graphics.viewSize);
  $add_3(this.rootLayer, bgLayer);
  new Pointer(plat, this.rootLayer);
  $push_2(this.screens, new MainScreen(this));
}

defineClass(269, 268, {}, MainGame);
var Lde_cdietze_quads_core_MainGame_2_classLit = createForClass('de.cdietze.quads.core', 'MainGame', 269, Lplayn_scene_SceneGame_2_classLit);
function $clinit_ScreenStack(){
  $clinit_ScreenStack = emptyMethod;
  NOOP = new ScreenStack$1;
}

function $add(this$static, screen_0){
  var e;
  if ($indexOf_2(this$static._screens, screen_0, 0) != -1) {
    throw new IllegalArgumentException_0('Cannot add screen to stack twice.');
  }
  $add_0(this$static._screens, 0, screen_0);
  try {
    screen_0.wasAdded();
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_2), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [e]));
    }
     else 
      throw unwrap($e0);
  }
}

function $addAndShow(this$static, screen_0){
  $add(this$static, screen_0);
  $justShow(this$static, screen_0);
}

function $hide(this$static, screen_0){
  var e;
  $remove_6(this$static._rootLayer, screen_0.layer);
  try {
    screen_0.wasHidden();
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_2), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [e]));
    }
     else 
      throw unwrap($e0);
  }
}

function $justRemove(this$static, screen_0){
  var removed;
  removed = $remove_2(this$static._screens, screen_0);
  return removed;
}

function $justShow(this$static, screen_0){
  var e;
  $add_3(this$static._rootLayer, $setTranslation(screen_0.layer, this$static.originX, this$static.originY));
  try {
    $closeOnHide(screen_0, $addConnection(screen_0.game_1().update, new Signal$1(screen_0.update)));
    $closeOnHide(screen_0, $addConnection(screen_0.game_1().paint, new Signal$1(screen_0.paint)));
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      e = $e0;
      $warning(($clinit_Log() , log_2), initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [e]));
    }
     else 
      throw unwrap($e0);
  }
}

function $push_2(this$static, screen_0){
  $push_3(this$static, screen_0, $dir(new SlideTransition(this$static), 2));
}

function $push_3(this$static, screen_0, trans){
  var otop;
  if (this$static._screens.array.length == 0) {
    $add(this$static, screen_0);
    $justShow(this$static, screen_0);
  }
   else {
    otop = this$static._screens.array.length == 0?null:$get_8(this$static._screens, 0);
    $transition(this$static, new ScreenStack$2(this$static, this$static, otop, screen_0, trans, otop));
  }
}

function $remove(this$static, screen_0){
  return $remove_0(this$static, screen_0, $dir(new SlideTransition(this$static), 3));
}

function $remove_0(this$static, screen_0, trans){
  var otop;
  if ((this$static._screens.array.length == 0?null:$get_8(this$static._screens, 0)) != screen_0)
    return $justRemove(this$static, screen_0);
  if (this$static._screens.array.length > 1) {
    otop = this$static._screens.remove(0);
    $transition(this$static, new ScreenStack$5(this$static, this$static, otop, this$static._screens.array.length == 0?null:$get_8(this$static._screens, 0), trans, otop));
  }
   else {
    $hide(this$static, screen_0);
    $justRemove(this$static, screen_0);
  }
  return true;
}

function $replace(this$static, screen_0){
  $replace_0(this$static, screen_0, $dir(new SlideTransition(this$static), 2));
}

function $replace_0(this$static, screen_0, trans){
  var otop;
  if (this$static._screens.array.length == 0) {
    $add(this$static, screen_0);
    $justShow(this$static, screen_0);
  }
   else {
    otop = this$static._screens.remove(0);
    $transition(this$static, new ScreenStack$4(this$static, this$static, otop, screen_0, trans, otop));
  }
}

function $transition(this$static, transitor){
  !!this$static._transitor && $complete(this$static._transitor);
  this$static._transitor = transitor;
  $init_0(this$static._transitor);
}

defineClass(270, 1, {});
_.originX = 0;
_.originY = 0;
var NOOP;
var Ltripleplay_game_ScreenStack_2_classLit = createForClass('tripleplay.game', 'ScreenStack', 270, Ljava_lang_Object_2_classLit);
function MainGame$1($anonymous0, $anonymous1){
  $clinit_ScreenStack();
  this._screens = new ArrayList;
  this._game = $anonymous0;
  this._rootLayer = $anonymous1;
}

defineClass(271, 270, {}, MainGame$1);
var Lde_cdietze_quads_core_MainGame$1_2_classLit = createForClass('de.cdietze.quads.core', 'MainGame/1', 271, Ltripleplay_game_ScreenStack_2_classLit);
function MainScreen(game){
  Screen_0.call(this, game);
  this.game = game;
}

defineClass(344, 204, {}, MainScreen);
_.wasAdded = function wasAdded_2(){
  var root;
  root = $createRoot(this.iface, ($clinit_AxisLayout() , new AxisLayout$Vertical), $create(newSheetBuilder(this.plat.graphics)), this.layer);
  $setSize_6(root, this.plat.graphics.viewSize);
  $add_9(root, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [new Label("William's Dilemma")]));
  $add_9(root, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$onClick(new Button('Start'), new MainScreen$1(this))]));
  $add_9(root, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$onClick(new Button('Choose Level'), new MainScreen$2(this))]));
}
;
var Lde_cdietze_quads_core_MainScreen_2_classLit = createForClass('de.cdietze.quads.core', 'MainScreen', 344, Lde_cdietze_playn_1util_Screen_2_classLit);
function $onEmit_5(this$static){
  $push_2(this$static.this$01.game.screens, new BoardScreen(this$static.this$01.game, ($clinit_Levels() , level1)));
}

function MainScreen$1(this$0){
  this.this$01 = this$0;
}

defineClass(345, 607, {}, MainScreen$1);
_.onEmit_0 = function onEmit_9(event_0){
  $onEmit_5(this, event_0);
}
;
var Lde_cdietze_quads_core_MainScreen$1_2_classLit = createForClass('de.cdietze.quads.core', 'MainScreen/1', 345, Lreact_Slot_2_classLit);
function $onEmit_6(this$static){
  var dialog, group, i, level;
  group = createDialogGroup(this$static.this$01.plat);
  dialog = $slideTopDown($useShade($createDialog(this$static.this$01, group)));
  for (i = 0; i < ($clinit_Levels() , levels).delegate.size_1(); i++) {
    level = $get(levels, i);
    $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$onClick(new Button(fullTitle(level)), new MainScreen$2$1(this$static, level))]));
  }
  $add_9(group, initValues(getClassLiteralForArray(Ltripleplay_ui_Element_2_classLit, 1), $intern_1, 14, 0, [$onClick(new Button('Close'), new DialogKeeper$Dialog$4(dialog))]));
  $closeOnHide(this$static.this$01, $display_0(dialog, dialog.screen_0.game_0.plat.graphics.viewSize.width_0 - 20));
}

function MainScreen$2(this$0){
  this.this$01 = this$0;
}

defineClass(346, 607, {}, MainScreen$2);
_.onEmit_0 = function onEmit_10(event_0){
  $onEmit_6(this, event_0);
}
;
var Lde_cdietze_quads_core_MainScreen$2_2_classLit = createForClass('de.cdietze.quads.core', 'MainScreen/2', 346, Lreact_Slot_2_classLit);
function $onEmit_7(this$static){
  $push_2(this$static.this$11.this$01.game.screens, new BoardScreen(this$static.this$11.this$01.game, this$static.val$level2));
}

function MainScreen$2$1(this$1, val$level){
  this.this$11 = this$1;
  this.val$level2 = val$level;
}

defineClass(347, 607, {}, MainScreen$2$1);
_.onEmit_0 = function onEmit_11(event_0){
  $onEmit_7(this, event_0);
}
;
var Lde_cdietze_quads_core_MainScreen$2$1_2_classLit = createForClass('de.cdietze.quads.core', 'MainScreen/2/1', 347, Lreact_Slot_2_classLit);
function addDirToIndex(dim, index_0, dir_0){
  return index_0 + dir_0.dir_1().x_0 + dir_0.dir_1().y_0 * dim.width_0;
}

function toIndex_0(dim, x_0, y_0){
  return x_0 + y_0 * dim.width_0;
}

function toIndex_1(dim, p){
  return toIndex_0(dim, p.x_0, p.y_0);
}

function toPoint(dim, index_0, p){
  return $set_5(p, index_0 % dim.width_0, ~~(index_0 / dim.width_0));
}

function toX(dim, index_0){
  return index_0 % dim.width_0;
}

function toY(dim, index_0){
  return ~~(index_0 / dim.width_0);
}

function $createButtonLayer(this$static){
  var imageLayer;
  imageLayer = new ImageLayer_0(this$static.images.button_0);
  $setOrigin_0((imageLayer.forceWidth = 1 , imageLayer.forceHeight = 1 , imageLayer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(imageLayer, ($clinit_Layer$Flag() , ODIRTY), true) , imageLayer), CENTER_0);
  return imageLayer;
}

function $createDoorLayer(this$static){
  var imageLayer;
  imageLayer = new ImageLayer_0(this$static.images.door);
  $setOrigin_0((imageLayer.forceWidth = 1 , imageLayer.forceHeight = 1 , imageLayer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(imageLayer, ($clinit_Layer$Flag() , ODIRTY), true) , imageLayer), CENTER_0);
  return imageLayer;
}

function $createExpandoLayer(this$static){
  var imageLayer;
  imageLayer = new ImageLayer_0(this$static.images.expando);
  $setOrigin_0((imageLayer.forceWidth = 1 , imageLayer.forceHeight = 1 , imageLayer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(imageLayer, ($clinit_Layer$Flag() , ODIRTY), true) , imageLayer), CENTER_0);
  return imageLayer;
}

function $createGoalLayer(this$static){
  var imageLayer;
  imageLayer = new ImageLayer_0(this$static.images.goal);
  $setOrigin_0((imageLayer.forceWidth = 1 , imageLayer.forceHeight = 1 , imageLayer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(imageLayer, ($clinit_Layer$Flag() , ODIRTY), true) , imageLayer), CENTER_0);
  return imageLayer;
}

function $createHeadLayer(this$static){
  var imageLayer;
  imageLayer = new ImageLayer_0(this$static.images.head);
  $setOrigin_0((imageLayer.forceWidth = 1 , imageLayer.forceHeight = 1 , imageLayer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(imageLayer, ($clinit_Layer$Flag() , ODIRTY), true) , imageLayer), CENTER_0);
  return imageLayer;
}

function $createPusherLayer(this$static){
  var imageLayer;
  imageLayer = new ImageLayer_0(this$static.images.pusher);
  $setOrigin_0((imageLayer.forceWidth = 1 , imageLayer.forceHeight = 1 , imageLayer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(imageLayer, ($clinit_Layer$Flag() , ODIRTY), true) , imageLayer), CENTER_0);
  return imageLayer;
}

function $createTailLayer(this$static){
  var imageLayer;
  imageLayer = new ImageLayer_0(this$static.images.tail);
  $setOrigin_0((imageLayer.forceWidth = 1 , imageLayer.forceHeight = 1 , imageLayer.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(imageLayer, ($clinit_Layer$Flag() , ODIRTY), true) , imageLayer), CENTER_0);
  return imageLayer;
}

function $drawButtonImage(this$static){
  var canvas;
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $setLineWidth(canvas.ctx, 5);
  $setFillColor_0($translate_0(($save(canvas.ctx) , canvas), 0, 30.000001192092896), $intern_25);
  $setStrokeStyleWeb(canvas.ctx, cssColorString($intern_25));
  $fillRoundRect(canvas, 5, 30, 90, 40, $intern_30);
  $addRoundRectPath(canvas, 5, 30, 90, 40, $intern_30);
  $stroke(canvas.ctx);
  $setFillColor_0($translate_0($save_0(($restore(canvas.ctx) , canvas)), 0, $intern_31), -1);
  $setStrokeStyleWeb(canvas.ctx, cssColorString(-5066062));
  $fillRoundRect(canvas, 5, 30, 90, 40, $intern_30);
  $addRoundRectPath(canvas, 5, 30, 90, 40, $intern_30);
  $stroke(canvas.ctx);
  return canvas.image;
}

function $drawCircleImage(this$static){
  var canvas;
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $setStrokeStyleWeb(canvas.ctx, cssColorString(-1));
  $setLineWidth(canvas.ctx, 5);
  $strokeCircle(canvas, 45);
  return canvas.image;
}

function $drawDoorImage(this$static){
  var canvas;
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $setFillStyleWeb(canvas.ctx, cssColorString(-1));
  $setLineWidth(canvas.ctx, 5);
  $setStrokeStyleWeb(canvas.ctx, cssColorString(-5066062));
  $fillRoundRect(canvas, 5, 10, 90, 100, $intern_31);
  $addRoundRectPath(canvas, 5, 10, 90, 100, $intern_31);
  $stroke(canvas.ctx);
  return canvas.image;
}

function $drawExpandoImage(this$static){
  var canvas;
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $setFillStyleWeb(canvas.ctx, cssColorString($intern_32));
  $fillCircle(canvas, 50, 50, 35);
  $setLineWidth(canvas.ctx, $intern_30);
  $setLineCap_0(canvas, ($clinit_Canvas$LineCap() , SQUARE_0));
  $setStrokeColor(canvas, brighter($intern_32));
  $drawLine_0(canvas, 40, 50, 60, 50);
  $drawLine_0(canvas, 50, 40, 50, 60);
  return canvas.image;
}

function $drawGoalImage(this$static){
  var canvas;
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $setFillStyleWeb(canvas.ctx, cssColorString($intern_25));
  $fillRoundRect(canvas, 5, 55, 90, 40, 25);
  return canvas.image;
}

function $drawHeadImage(this$static){
  var canvas;
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $setFillStyleWeb(canvas.ctx, cssColorString($intern_32));
  $fillCircle(canvas, 50, 50, 40);
  $setFillStyleWeb(canvas.ctx, cssColorString(-1));
  $fillCircle(canvas, 35, 40, $intern_33);
  $fillCircle(canvas, 65, 40, $intern_33);
  $setFillStyleWeb(canvas.ctx, cssColorString($intern_25));
  $fillCircle(canvas, 35, 40, 5);
  $fillCircle(canvas, 65, 40, 5);
  $setStrokeWidth(($setStrokeStyleWeb(canvas.ctx, cssColorString($intern_25)) , canvas), 5);
  $strokePath(canvas, $bezierTo($moveTo_0(new HtmlPath)));
  return canvas.image;
}

function $drawPusherImage(this$static){
  var borderColor, canvas;
  borderColor = brighter(-5002847);
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $fillCircle(($setFillStyleWeb(canvas.ctx, cssColorString(-5002847)) , canvas), 50, 50, 35);
  $strokeCircle($setStrokeWidth(($setStrokeStyleWeb(canvas.ctx, cssColorString(borderColor)) , canvas), 5), 35);
  return canvas.image;
}

function $drawTailImage(this$static){
  var canvas;
  canvas = $createCanvas(this$static.plat.graphics, 100, 100);
  $setFillStyleWeb(canvas.ctx, cssColorString($intern_32));
  $fillCircle(canvas, 50, 50, 35);
  return canvas.image;
}

function Sprites(plat){
  this.plat = requireNonNull(plat);
  this.images = new Sprites$Images(this);
}

defineClass(514, 1, {}, Sprites);
var Lde_cdietze_quads_core_Sprites_2_classLit = createForClass('de.cdietze.quads.core', 'Sprites', 514, Ljava_lang_Object_2_classLit);
function Sprites$Images(this$0){
  this.this$01 = this$0;
  $drawCircleImage(this.this$01);
  this.head = $drawHeadImage(this.this$01);
  this.tail = $drawTailImage(this.this$01);
  this.pusher = $drawPusherImage(this.this$01);
  this.button_0 = $drawButtonImage(this.this$01);
  this.door = $drawDoorImage(this.this$01);
  this.expando = $drawExpandoImage(this.this$01);
  this.goal = $drawGoalImage(this.this$01);
}

defineClass(515, 1, {}, Sprites$Images);
var Lde_cdietze_quads_core_Sprites$Images_2_classLit = createForClass('de.cdietze.quads.core', 'Sprites/Images', 515, Ljava_lang_Object_2_classLit);
function createDialogGroup(plat){
  return $setStyles_0(new Group(($clinit_AxisLayout() , new AxisLayout$Vertical)), initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , BACKGROUND), $inset(new RoundRectBackground(plat.graphics, $intern_34), 20))]));
}

defineClass(623, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 623, Ljava_lang_Object_2_classLit);
defineClass(624, 623, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 624, Ljava_io_OutputStream_2_classLit);
function PrintStream(){
}

defineClass(411, 624, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 411, Ljava_io_FilterOutputStream_2_classLit);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = this$static.string.length;
  newLength < oldLength?(this$static.string = $substring_0(this$static.string, 0, newLength)):newLength > oldLength && (this$static.string += valueOf_2(initDim(C_classLit, $intern_2, 0, newLength - oldLength, 7, 1)));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(120, 1, {});
_.toString$ = function toString_24(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 120, Ljava_lang_Object_2_classLit);
function ArrayStoreException(message){
  RuntimeException_0.call(this, message);
}

defineClass(98, 8, $intern_11, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 98, Ljava_lang_RuntimeException_2_classLit);
function Error_0(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  this.fillInStackTrace();
}

defineClass(71, 10, $intern_35);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 71, Ljava_lang_Throwable_2_classLit);
function AssertionError(){
  Throwable.call(this);
}

function AssertionError_0(message){
  Error_0.call(this, '' + message, instanceOf(message, 10)?message:null);
}

defineClass(21, 71, $intern_35, AssertionError, AssertionError_0);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 21, Ljava_lang_Error_2_classLit);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = new Boolean_0(false);
  TRUE = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

function compare_1(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

defineClass(119, 1, {3:1, 119:1, 7:1}, Boolean_0);
_.compareTo = function compareTo_4(b){
  return compare_1(this.value_0, b.value_0);
}
;
_.equals$ = function equals_11(o){
  return instanceOf(o, 119) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_13(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_25(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 119, Ljava_lang_Object_2_classLit);
function Character(value_0){
  this.value_0 = value_0;
}

function valueOf(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_0)[c];
    !result && (result = boxedValues_0[c] = new Character(c));
    return result;
  }
  return new Character(c);
}

defineClass(99, 1, {3:1, 99:1, 7:1}, Character);
_.compareTo = function compareTo_5(c){
  return this.value_0 - c.value_0;
}
;
_.equals$ = function equals_12(o){
  return instanceOf(o, 99) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_14(){
  return this.value_0;
}
;
_.toString$ = function toString_26(){
  return valueOf_1(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 99, Ljava_lang_Object_2_classLit);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Character_2_classLit, $intern_1, 99, 128, 0, 1);
}

var boxedValues_0;
defineClass(149, 1, {3:1, 149:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 149, Ljava_lang_Object_2_classLit);
function compare_2(x_0, y_0){
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN(x_0)?isNaN(y_0)?0:1:-1;
}

function Float(value_0){
  this.value_0 = value_0;
}

defineClass(100, 149, {3:1, 7:1, 100:1, 149:1}, Float);
_.compareTo = function compareTo_6(b){
  return compare_2(this.value_0, b.value_0);
}
;
_.equals$ = function equals_13(o){
  return instanceOf(o, 100) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_15(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_28(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 100, Ljava_lang_Number_2_classLit);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(26, 8, $intern_11, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 26, Ljava_lang_RuntimeException_2_classLit);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(27, 8, $intern_11, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 27, Ljava_lang_RuntimeException_2_classLit);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(87, 8, $intern_11, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 87, Ljava_lang_RuntimeException_2_classLit);
function Integer(value_0){
  this.value_0 = value_0;
}

function compare_3(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf_0(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_1)[rebase];
    !result && (result = boxedValues_1[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(101, 149, {3:1, 7:1, 101:1, 149:1}, Integer);
_.compareTo = function compareTo_7(b){
  return compare_3(this.value_0, b.value_0);
}
;
_.equals$ = function equals_14(o){
  return instanceOf(o, 101) && o.value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_16(){
  return this.value_0;
}
;
_.toString$ = function toString_29(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 101, Ljava_lang_Number_2_classLit);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_1 = initDim(Ljava_lang_Integer_2_classLit, $intern_1, 101, 256, 0, 1);
}

var boxedValues_1;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function ceil_0(x_0){
  return Math.ceil(x_0);
}

function cos_0(x_0){
  return Math.cos(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function max_1(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function min_1(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function round_0(x_0){
  return Math.round(x_0);
}

function sin_0(x_0){
  return Math.sin(x_0);
}

function sqrt_0(x_0){
  return Math.sqrt(x_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 8, {3:1, 16:1, 34:1, 8:1, 10:1}, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 34, Ljava_lang_RuntimeException_2_classLit);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(72, 1, {3:1, 72:1}, StackTraceElement);
_.equals$ = function equals_15(other){
  var st;
  if (instanceOf(other, 72)) {
    st = other;
    return this.lineNumber == st.lineNumber && equals_27(this.methodName, st.methodName) && equals_27(this.className, st.className) && equals_27(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_17(){
  return hashCode_24(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [valueOf_0(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_30(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 72, Ljava_lang_Object_2_classLit);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $getChars(this$static, srcEnd, dst, dstBegin){
  var srcIdx;
  for (srcIdx = 0; srcIdx < srcEnd; ++srcIdx) {
    dst[dstBegin++] = this$static.charCodeAt(srcIdx);
  }
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace_1(this$static, from, to){
  var hex = toUnsignedRadixString(from, 16);
  var regex = '\\u' + '0000'.substring(hex.length) + hex;
  return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
}

function $replace_2(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $subSequence(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $toCharArray(this$static){
  var charArr, n;
  n = this$static.length;
  charArr = initDim(C_classLit, $intern_2, 0, n, 7, 1);
  $getChars(this$static, n, charArr, 0);
  return charArr;
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_1, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function compareTo_8(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  return isJavaString(this$static)?compareTo_8(this$static, other):this$static.compareTo(other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & $intern_3;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & $intern_3;
    return valueOf_1(hiSurrogate) + valueOf_1(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_3);
  }
}

function valueOf_1(x_0){
  return String.fromCharCode(x_0);
}

function valueOf_2(x_0){
  return __valueOf(x_0, 0, x_0.length);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2, Ljava_lang_Object_2_classLit);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(140, 120, {588:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 140, Ljava_lang_AbstractStringBuilder_2_classLit);
function $append_1(this$static, x_0){
  this$static.string += charToString(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_5(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_6(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_7(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $insert(this$static, x_0){
  this$static.string = $substring_0(this$static.string, 0, 0) + x_0 + $substring(this$static.string, 0);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(17, 120, {588:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 17, Ljava_lang_AbstractStringBuilder_2_classLit);
function $clinit_System(){
  $clinit_System = emptyMethod;
  out_0 = new PrintStream;
}

function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destArray, destComp, destEnd, destType, destlen, srcArray, srcComp, srcType, srclen;
  checkNotNull_1(src_0, 'src');
  checkNotNull_1(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkArrayType((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkArrayType((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkArrayType((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    srcArray = src_0;
    destArray = dest;
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        destArray[destEnd] = srcArray[--srcOfs];
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        destArray[destOfs++] = srcArray[srcOfs++];
      }
    }
  }
   else 
    len > 0 && nativeArraySplice(src_0, srcOfs, dest, destOfs, len, true);
}

var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(40, 8, $intern_11, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 40, Ljava_lang_RuntimeException_2_classLit);
function $clear(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  this$static.limit = this$static.capacity;
  return this$static;
}

function $limit(this$static, newLimit){
  if (newLimit < 0 || newLimit > this$static.capacity) {
    throw new IllegalArgumentException;
  }
  this$static.limit = newLimit;
  this$static.position_0 > newLimit && (this$static.position_0 = newLimit);
  this$static.mark != -1 && this$static.mark > newLimit && (this$static.mark = -1);
  return this$static;
}

function $position(this$static){
  if (0 > this$static.limit) {
    throw new IllegalArgumentException;
  }
  this$static.position_0 = 0;
  this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
  return this$static;
}

function $rewind(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  return this$static;
}

function Buffer(capacity){
  if (capacity < 0) {
    throw new IllegalArgumentException;
  }
  this.capacity = this.limit = capacity;
}

defineClass(109, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass('java.nio', 'Buffer', 109, Ljava_lang_Object_2_classLit);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(233, 8, $intern_11, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass('java.nio', 'BufferOverflowException', 233, Ljava_lang_RuntimeException_2_classLit);
function $$init(this$static){
  this$static.order = ($clinit_ByteOrder() , BIG_ENDIAN);
}

function $asIntBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw new RuntimeException_0('Native order supported only.');
  }
  return new IntBuffer($slice(this$static));
}

function $asShortBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw new RuntimeException_0('Native order supported only.');
  }
  return new ShortBuffer($slice(this$static));
}

function $compareTo(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.byteArray[thisPos];
    otherByte = otherBuffer.byteArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_2(this$static, index_0){
  return this$static.byteArray[index_0];
}

function $order(this$static, byteOrder){
  this$static.order = byteOrder;
  return this$static;
}

function $slice(this$static){
  var slice_0;
  slice_0 = new ByteBuffer_1(this$static.byteArray.buffer, this$static.limit - this$static.position_0, this$static.byteArray.byteOffset + this$static.position_0);
  slice_0.order = this$static.order;
  return slice_0;
}

function ByteBuffer(capacity){
  ByteBuffer_0.call(this, new ArrayBuffer(capacity));
}

function ByteBuffer_0(buf){
  Buffer.call(this, buf.byteLength);
  $$init(this);
  this.byteArray = new Int8Array(buf);
}

function ByteBuffer_1(buffer, capacity, offset){
  Buffer.call(this, capacity);
  $$init(this);
  this.byteArray = new Int8Array(buffer, offset, capacity);
}

function allocateDirect(capacity){
  if (capacity < 0) {
    throw new IllegalArgumentException;
  }
  return new ByteBuffer(capacity);
}

defineClass(110, 109, {7:1, 110:1, 191:1}, ByteBuffer, ByteBuffer_1);
_.compareTo = function compareTo_9(otherBuffer){
  return $compareTo(this, otherBuffer);
}
;
_.equals$ = function equals_16(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 110)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_2(this, myPosition++) == $get_2(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize(){
  return 1;
}
;
_.getElementType = function getElementType(){
  return 5120;
}
;
_.getTypedArray = function getTypedArray(){
  return this.byteArray;
}
;
_.hashCode$ = function hashCode_18(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_2(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_31(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ByteBuffer_2_classLit) , Ljava_nio_ByteBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ByteBuffer_2_classLit = createForClass('java.nio', 'ByteBuffer', 110, Ljava_nio_Buffer_2_classLit);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(232, 1, {}, ByteOrder);
_.toString$ = function toString_32(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass('java.nio', 'ByteOrder', 232, Ljava_lang_Object_2_classLit);
function $compareTo_0(this$static, otherBuffer){
  var compareRemaining, otherFloat, otherPos, thisFloat, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisFloat = this$static.floatArray[thisPos];
    otherFloat = otherBuffer.floatArray[otherPos];
    if (thisFloat != otherFloat && (thisFloat == thisFloat || otherFloat == otherFloat)) {
      return thisFloat < otherFloat?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_3(this$static, index_0){
  return this$static.floatArray[index_0];
}

function $put_0(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
    throw new IndexOutOfBoundsException;
  }
  if (len > this$static.limit - this$static.position_0) {
    throw new BufferOverflowException;
  }
  for (i = 0; i < len; i++) {
    this$static.floatArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function FloatBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.floatArray = create_0(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(131, 109, {7:1, 131:1, 191:1}, FloatBuffer);
_.compareTo = function compareTo_10(otherBuffer){
  return $compareTo_0(this, otherBuffer);
}
;
_.equals$ = function equals_17(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 131)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_3(this, myPosition++) == $get_3(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_0(){
  return 4;
}
;
_.getElementType = function getElementType_0(){
  return 5126;
}
;
_.getTypedArray = function getTypedArray_0(){
  return this.floatArray;
}
;
_.toString$ = function toString_33(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_FloatBuffer_2_classLit) , Ljava_nio_FloatBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_FloatBuffer_2_classLit = createForClass('java.nio', 'FloatBuffer', 131, Ljava_nio_Buffer_2_classLit);
function $compareTo_1(this$static, otherBuffer){
  var compareRemaining, otherInt, otherPos, thisInt, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisInt = this$static.intArray[thisPos];
    otherInt = otherBuffer.intArray[otherPos];
    if (thisInt != otherInt) {
      return thisInt < otherInt?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_4(this$static, index_0){
  return this$static.intArray[index_0];
}

function $put_1(this$static, c){
  $set(this$static.intArray, this$static.position_0++, c);
  return this$static;
}

function $put_2(this$static, index_0, c){
  $set(this$static.intArray, index_0, c);
  return this$static;
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.intArray = create_2(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(173, 109, {7:1, 173:1, 191:1}, IntBuffer);
_.compareTo = function compareTo_11(otherBuffer){
  return $compareTo_1(this, otherBuffer);
}
;
_.equals$ = function equals_18(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 173)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_4(this, myPosition++) == $get_4(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_1(){
  return 4;
}
;
_.getElementType = function getElementType_1(){
  return 5124;
}
;
_.getTypedArray = function getTypedArray_1(){
  return this.intArray;
}
;
_.hashCode$ = function hashCode_19(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_4(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_34(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_IntBuffer_2_classLit) , Ljava_nio_IntBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_IntBuffer_2_classLit = createForClass('java.nio', 'IntBuffer', 173, Ljava_nio_Buffer_2_classLit);
function $compareTo_2(this$static, otherBuffer){
  var compareRemaining, otherByte, otherPos, thisByte, thisPos;
  compareRemaining = this$static.limit - this$static.position_0 < otherBuffer.limit - otherBuffer.position_0?this$static.limit - this$static.position_0:otherBuffer.limit - otherBuffer.position_0;
  thisPos = this$static.position_0;
  otherPos = otherBuffer.position_0;
  while (compareRemaining > 0) {
    thisByte = this$static.shortArray[thisPos];
    otherByte = otherBuffer.shortArray[otherPos];
    if (thisByte != otherByte) {
      return thisByte < otherByte?-1:1;
    }
    ++thisPos;
    ++otherPos;
    --compareRemaining;
  }
  return this$static.limit - this$static.position_0 - (otherBuffer.limit - otherBuffer.position_0);
}

function $get_5(this$static, index_0){
  return this$static.shortArray[index_0];
}

function $put_3(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || gt(fromInt(len), fromInt(length_0))) {
    throw new IndexOutOfBoundsException;
  }
  if (len > this$static.limit - this$static.position_0) {
    throw new BufferOverflowException;
  }
  for (i = 0; i < len; i++) {
    this$static.shortArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function ShortBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 1);
  this.byteBuffer = byteBuffer;
  $clear(this.byteBuffer);
  this.shortArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(169, 109, {7:1, 169:1, 191:1}, ShortBuffer);
_.compareTo = function compareTo_12(otherBuffer){
  return $compareTo_2(this, otherBuffer);
}
;
_.equals$ = function equals_19(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 169)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_5(this, myPosition++) == $get_5(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_2(){
  return 2;
}
;
_.getElementType = function getElementType_2(){
  return 5122;
}
;
_.getTypedArray = function getTypedArray_2(){
  return this.shortArray;
}
;
_.hashCode$ = function hashCode_20(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_5(this, myPosition++);
  }
  return hash;
}
;
_.toString$ = function toString_35(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ShortBuffer_2_classLit) , Ljava_nio_ShortBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ShortBuffer_2_classLit = createForClass('java.nio', 'ShortBuffer', 169, Ljava_nio_Buffer_2_classLit);
function $containsKey(this$static, key){
  return isJavaString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_3(key) === undefined):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_6(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_3(key);
}

function $put_4(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_5(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_5(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate_0.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate_0.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(150, 603, $intern_10);
_.containsKey = function containsKey_2(key){
  return $containsKey(this, key);
}
;
_.containsValue = function containsValue_1(value_0){
  return this.stringMap.containsValue(value_0) || this.hashCodeMap.containsValue(value_0);
}
;
_.entrySet_0 = function entrySet_1(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_2 = function get_7(key){
  return $get_6(this, key);
}
;
_.put = function put_1(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.size_1 = function size_11(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 150, Ljava_util_AbstractMap_2_classLit);
function $contains_3(this$static, o){
  if (instanceOf(o, 24)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(151, 605, $intern_9, AbstractHashMap$EntrySet);
_.contains = function contains_7(o){
  return $contains_3(this, o);
}
;
_.iterator = function iterator_9(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.size_1 = function size_12(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 151, Ljava_util_AbstractSet_2_classLit);
function $hasNext_0(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_1(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext_0(this$static)) , this$static.current.next_0();
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(152, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_4(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_4(){
  return $next_1(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 152, Ljava_lang_Object_2_classLit);
function $equals_1(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 25)) {
    return false;
  }
  other = o;
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf_1(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.size_1(); i < n; ++i) {
    if (equals_27(toFind, this$static.get_1(i))) {
      return i;
    }
  }
  return -1;
}

defineClass(612, 604, {25:1});
_.add_1 = function add_1(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_20(o){
  return $equals_1(this, o);
}
;
_.hashCode$ = function hashCode_21(){
  return hashCode_26(this);
}
;
_.indexOf_0 = function indexOf_2(toFind){
  return $indexOf_1(this, toFind);
}
;
_.iterator = function iterator_10(){
  return new AbstractList$IteratorImpl(this);
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 612, Ljava_util_AbstractCollection_2_classLit);
function $next_2(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.size_1());
  return this$static.this$01.get_1(this$static.i++);
}

function AbstractList$IteratorImpl(this$0){
  this.this$01 = this$0;
}

defineClass(28, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_5(){
  return this.i < this.this$01.size_1();
}
;
_.next_0 = function next_5(){
  return $next_2(this);
}
;
_.i = 0;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 28, Ljava_lang_Object_2_classLit);
function AbstractList$ListIteratorImpl(this$0){
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex_0(0, this$0.array.length);
  this.i = 0;
}

defineClass(196, 28, {}, AbstractList$ListIteratorImpl);
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 196, Ljava_util_AbstractList$IteratorImpl_2_classLit);
function $iterator_0(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(123, 605, $intern_9, AbstractMap$1);
_.contains = function contains_8(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_11(){
  return $iterator_0(this);
}
;
_.size_1 = function size_13(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 123, Ljava_util_AbstractSet_2_classLit);
function $next_3(this$static){
  var entry;
  entry = $next_1(this$static.val$outerIter2);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(258, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_6(){
  return $hasNext_0(this.val$outerIter2);
}
;
_.next_0 = function next_6(){
  return $next_3(this);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 258, Ljava_lang_Object_2_classLit);
function $setValue(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(121, 1, {121:1, 24:1});
_.equals$ = function equals_21(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = other;
  return equals_27(this.key_0, entry.getKey()) && equals_27(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_1(){
  return this.key_0;
}
;
_.getValue = function getValue_1(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_22(){
  return hashCode_31(this.key_0) ^ hashCode_31(this.value_0);
}
;
_.setValue = function setValue_1(value_0){
  return $setValue(this, value_0);
}
;
_.toString$ = function toString_36(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 121, Ljava_lang_Object_2_classLit);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(122, 121, {121:1, 122:1, 24:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 122, Ljava_util_AbstractMap$AbstractEntry_2_classLit);
defineClass(613, 1, $intern_5);
_.equals$ = function equals_22(other){
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = other;
  return equals_27(this.getKey(), entry.getKey()) && equals_27(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_23(){
  return hashCode_31(this.getKey()) ^ hashCode_31(this.getValue());
}
;
_.toString$ = function toString_37(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 613, Ljava_lang_Object_2_classLit);
function $containsEntry_0(this$static, entry){
  var key, lookupEntry;
  key = entry.getKey();
  lookupEntry = $getEntry_0(this$static, key);
  return !!lookupEntry && equals_27(lookupEntry.value_0, entry.getValue());
}

function $containsKey_0(this$static, k){
  return !!$getEntry_0(this$static, k);
}

function $get_7(this$static, k){
  return getEntryValueOrNull($getEntry_0(this$static, k));
}

defineClass(650, 603, $intern_10);
_.containsEntry = function containsEntry_0(entry){
  return $containsEntry_0(this, entry);
}
;
_.containsKey = function containsKey_3(k){
  return $containsKey_0(this, k);
}
;
_.entrySet_0 = function entrySet_2(){
  return new AbstractNavigableMap$EntrySet(this);
}
;
_.get_2 = function get_8(k){
  return $get_7(this, k);
}
;
var Ljava_util_AbstractNavigableMap_2_classLit = createForClass('java.util', 'AbstractNavigableMap', 650, Ljava_util_AbstractMap_2_classLit);
function AbstractNavigableMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(249, 605, $intern_9, AbstractNavigableMap$EntrySet);
_.contains = function contains_9(o){
  return instanceOf(o, 24) && $containsEntry_0(this.this$01, o);
}
;
_.iterator = function iterator_12(){
  return new TreeMap$EntryIterator(this.this$01);
}
;
_.size_1 = function size_14(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractNavigableMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/EntrySet', 249, Ljava_util_AbstractSet_2_classLit);
function $add_0(this$static, index_0, o){
  checkPositionIndex_0(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_1(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  $insertAt(this$static, this$static.array.length, cArray);
  return true;
}

function $get_8(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_27(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, index_0, values){
  nativeArraySplice(values, 0, this$static.array, index_0, values.length, false);
}

function $remove_1(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_2(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove(i);
  return true;
}

function $toArray_1(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    out[i] = this$static.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(13, 612, $intern_36, ArrayList);
_.add_1 = function add_3(index_0, o){
  $add_0(this, index_0, o);
}
;
_.add_0 = function add_4(o){
  return $add_1(this, o);
}
;
_.contains = function contains_10(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_1 = function get_9(index_0){
  return $get_8(this, index_0);
}
;
_.indexOf_0 = function indexOf_3(o){
  return $indexOf_2(this, o, 0);
}
;
_.remove = function remove(index_0){
  return $remove_1(this, index_0);
}
;
_.size_1 = function size_15(){
  return this.array.length;
}
;
_.toArray = function toArray_5(){
  return cloneSubrange(this.array, this.array.length);
}
;
_.toArray_0 = function toArray_6(out){
  return $toArray_1(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 13, Ljava_util_AbstractList_2_classLit);
function binarySearch(sortedArray, key, comparator){
  var compareResult, high, low, mid, midVal;
  !comparator && ($clinit_Comparators() , $clinit_Comparators() , NATURAL);
  low = 0;
  high = sortedArray.length - 1;
  while (low <= high) {
    mid = low + (high - low >> 1);
    midVal = sortedArray[mid];
    compareResult = $compare(midVal, key);
    if (compareResult < 0) {
      low = mid + 1;
    }
     else if (compareResult > 0) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return -low - 1;
}

function deepToString(a, arraysIveSeen){
  var b, i, obj, objArray, tempSet;
  if (a == null) {
    return 'null';
  }
  if ($containsKey(arraysIveSeen.map_0, a)) {
    return '[...]';
  }
  $add_2(arraysIveSeen, a);
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    obj = a[i];
    if (obj == null) {
      b.string += 'null';
    }
     else if ((getClass__Ljava_lang_Class___devirtual$(obj).modifiers & 4) != 0) {
      if (instanceOf(obj, 5)) {
        if ($containsKey(arraysIveSeen.map_0, obj)) {
          b.string += '[...]';
        }
         else {
          objArray = obj;
          tempSet = new HashSet_0(arraysIveSeen);
          $append_6(b, deepToString(objArray, tempSet));
        }
      }
       else 
        instanceOf(obj, 190)?$append_6(b, toString_38(obj)):instanceOf(obj, 192)?$append_6(b, toString_42(obj)):instanceOf(obj, 44)?$append_6(b, toString_41(obj)):instanceOf(obj, 97)?$append_6(b, toString_40(obj)):instanceOf(obj, 589) && $append_6(b, toString_39(obj));
    }
     else {
      b.string += '' + obj;
    }
  }
  b.string += ']';
  return b.string;
}

function hashCode_24(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function insertionSort(array, low, high){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && $compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      array[j] = array[j - 1];
      array[j - 1] = t;
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && $compare(src_0[srcLow], src_0[topIdx]) <= 0?(dest[destLow++] = src_0[srcLow++]):(dest[destLow++] = src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp, newLength, length_0, copy;
  !comp && ($clinit_Comparators() , $clinit_Comparators() , NATURAL);
  temp = (newLength = (length_0 = toIndex - fromIndex , checkCriticalArgument_0(length_0 >= 0, initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_1, 1, 3, [valueOf_0(fromIndex), valueOf_0(toIndex)])) , length_0) , copy = createFrom(x_0, newLength) , arraycopy(x_0, fromIndex, copy, 0, min_1(x_0.length - fromIndex, newLength)) , copy);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex);
}

function mergeSort_0(temp, array, low, high, ofs){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs);
  if ($compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      array[low++] = temp[tempLow++];
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high);
}

function toString_38(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_6(b, String.fromCharCode(a[i]));
  }
  b.string += ']';
  return b.string;
}

function toString_39(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_6(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function toString_40(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_6(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function toString_41(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_6(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function toString_42(a){
  var b, i;
  if (a == null) {
    return 'null';
  }
  b = new StringBuilder_1('[');
  for (i = 0; i < a.length; i++) {
    i != 0 && (b.string += ', ' , b);
    $append_6(b, '' + a[i]);
  }
  b.string += ']';
  return b.string;
}

function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(134, 612, $intern_36, Arrays$ArrayList);
_.contains = function contains_11(o){
  return $indexOf_1(this, o) != -1;
}
;
_.get_1 = function get_10(index_0){
  checkElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.size_1 = function size_16(){
  return this.array.length;
}
;
_.toArray = function toArray_7(){
  return clone(this.array);
}
;
_.toArray_0 = function toArray_8(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    out[i] = this.array[i];
  }
  out.length > size_0 && (out[size_0] = null);
  return out;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 134, Ljava_util_AbstractList_2_classLit);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_25(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_26(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 32)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(285, 612, $intern_36, Collections$EmptyList);
_.contains = function contains_12(object){
  return false;
}
;
_.get_1 = function get_11(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_13(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_3;
}
;
_.size_1 = function size_17(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 285, Ljava_util_AbstractList_2_classLit);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_3 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(286, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_7(){
  return false;
}
;
_.next_0 = function next_7(){
  throw new NoSuchElementException;
}
;
var INSTANCE_3;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 286, Ljava_lang_Object_2_classLit);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(287, 612, {3:1, 25:1}, Collections$SingletonList);
_.contains = function contains_13(item_0){
  return equals_27(this.element, item_0);
}
;
_.get_1 = function get_12(index_0){
  checkElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_18(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 287, Ljava_util_AbstractList_2_classLit);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(194, 1, {});
_.add_0 = function add_5(o){
  throw new UnsupportedOperationException;
}
;
_.contains = function contains_14(o){
  return this.coll.contains(o);
}
;
_.iterator = function iterator_14(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.size_1 = function size_19(){
  return this.coll.size_1();
}
;
_.toArray_0 = function toArray_9(a){
  return this.coll.toArray_0(a);
}
;
_.toString$ = function toString_43(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 194, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(291, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_8(){
  return this.it.hasNext();
}
;
_.next_0 = function next_8(){
  return this.it.next_0();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 291, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(155, 194, {25:1}, Collections$UnmodifiableList);
_.equals$ = function equals_23(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_13(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode$ = function hashCode_27(){
  return this.list.hashCode$();
}
;
_.indexOf_0 = function indexOf_4(o){
  return this.list.indexOf_0(o);
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 155, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(288, 1, $intern_10, Collections$UnmodifiableMap);
_.containsKey = function containsKey_4(key){
  return this.map_0.containsKey(key);
}
;
_.containsValue = function containsValue_2(val){
  return this.map_0.containsValue(val);
}
;
_.entrySet_0 = function entrySet_3(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_24(o){
  return this.map_0.equals$(o);
}
;
_.get_2 = function get_14(key){
  return this.map_0.get_2(key);
}
;
_.hashCode$ = function hashCode_28(){
  return this.map_0.hashCode$();
}
;
_.put = function put_2(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_20(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_44(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 288, Ljava_lang_Object_2_classLit);
defineClass(289, 194, $intern_9);
_.equals$ = function equals_25(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_29(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 289, Ljava_util_Collections$UnmodifiableCollection_2_classLit);
function $wrap(array, size_0){
  var i;
  for (i = 0; i < size_0; ++i) {
    array[i] = new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(array[i]);
  }
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(290, 289, $intern_9, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.contains = function contains_15(o){
  return this.coll.contains(o);
}
;
_.iterator = function iterator_15(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
_.toArray_0 = function toArray_10(a){
  var result;
  result = this.coll.toArray_0(a);
  $wrap(result, this.coll.size_1());
  return result;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 290, Ljava_util_Collections$UnmodifiableSet_2_classLit);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(292, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_9(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_9(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_0());
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 292, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(195, 1, $intern_5, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_26(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_2(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_2(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_30(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_2(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_45(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 195, Ljava_lang_Object_2_classLit);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(156, 155, {25:1, 32:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 156, Ljava_util_Collections$UnmodifiableList_2_classLit);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function $compare(o1, o2){
  checkNotNull_0(o1);
  checkNotNull_0(o2);
  return compareTo_Ljava_lang_Object__I__devirtual$(o1, o2);
}

function Comparators$1(){
}

defineClass(537, 1, {}, Comparators$1);
var Ljava_util_Comparators$1_2_classLit = createForClass('java.util', 'Comparators/1', 537, Ljava_lang_Object_2_classLit);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(455, 8, $intern_11, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 455, Ljava_lang_RuntimeException_2_classLit);
function $equals_2(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

function HashMap_0(ignored){
  checkCriticalArgument(ignored >= 0, 'Negative initial capacity');
  checkCriticalArgument(true, 'Non-positive load factor');
  $reset(this);
}

defineClass(33, 150, {3:1, 61:1}, HashMap, HashMap_0);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 33, Ljava_util_AbstractHashMap_2_classLit);
function $add_2(this$static, o){
  var old;
  old = $put_4(this$static.map_0, o, this$static);
  return old == null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(c){
  this.map_0 = new HashMap_0(c.map_0.size_0);
  $addAll(this, c);
}

defineClass(133, 605, {3:1, 45:1}, HashSet, HashSet_0);
_.contains = function contains_16(o){
  return $containsKey(this.map_0, o);
}
;
_.iterator = function iterator_16(){
  return $iterator_0(new AbstractMap$1(this.map_0));
}
;
_.size_1 = function size_21(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_46(){
  return $toString_1(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 133, Ljava_util_AbstractSet_2_classLit);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_2(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_5(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_2(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  chain[chain.length] = new AbstractMap$SimpleEntry(key, value_0);
  $elementAdded(this$static.host);
  return null;
}

function $remove_3(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_2(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(205, 1, {}, InternalJsHashCodeMap);
_.containsValue = function containsValue_3(value_0){
  var entry, entry$array, entry$index, entry$max, hashCode, hashCode$array, hashCode$index, hashCode$max;
  for (hashCode$array = $keys(this) , hashCode$index = 0 , hashCode$max = hashCode$array.length; hashCode$index < hashCode$max; ++hashCode$index) {
    hashCode = hashCode$array[hashCode$index];
    for (entry$array = this.backingMap[hashCode] , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
      entry = entry$array[entry$index];
      if ($equals_2(value_0, entry.getValue())) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 205, Ljava_lang_Object_2_classLit);
function $hasNext_1(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_1, 24, 0, 0, 1);
}

defineClass(353, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_10(){
  return $hasNext_1(this);
}
;
_.next_0 = function next_10(){
  return checkCriticalElement($hasNext_1(this)) , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 353, Ljava_lang_Object_2_classLit);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(351, 205, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.containsValue = function containsValue_4(value_0){
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this.equalsBridge(value_0, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}
;
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_0(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 351, Ljava_util_InternalJsHashCodeMap_2_classLit);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(352, 13, $intern_36, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove = function remove_0(index_0){
  var removed;
  return removed = $remove_1(this, index_0) , $remove_3(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 352, Ljava_util_ArrayList_2_classLit);
function InternalJsMapFactory(){
}

defineClass(348, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 348, Ljava_lang_Object_2_classLit);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate_0 = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate_0;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(350, 348, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 350, Ljava_util_InternalJsMapFactory_2_classLit);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(349, 348, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 349, Ljava_util_InternalJsMapFactory_2_classLit);
function $containsValue(this$static, value_0){
  var map_0 = this$static.backingMap;
  for (var key in map_0) {
    if (this$static.equalsBridge_0(value_0, map_0[key])) {
      return true;
    }
  }
  return false;
}

function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_6(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_1(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_4(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_1(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(157, 1, {}, InternalJsStringMap);
_.containsValue = function containsValue_5(value_0){
  return $containsValue(this, value_0);
}
;
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.equalsBridge_0 = function equalsBridge_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.get_3 = function get_15(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_3(key, value_0){
  return $put_6(this, key, value_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 157, Ljava_lang_Object_2_classLit);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(296, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_11(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_11(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.i++]);
}
;
_.i = 0;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 296, Ljava_lang_Object_2_classLit);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(197, 613, $intern_5, InternalJsStringMap$2);
_.getKey = function getKey_3(){
  return this.val$key2;
}
;
_.getValue = function getValue_3(){
  return this.this$01.get_3(this.val$key2);
}
;
_.setValue = function setValue_3(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 197, Ljava_util_AbstractMapEntry_2_classLit);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(293, 157, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.containsValue = function containsValue_6(value_0){
  var map_0 = this.backingMap;
  for (var key in map_0) {
    if (key.charCodeAt(0) == 58) {
      var entryValue = map_0[key];
      if (this.equalsBridge_0(value_0, entryValue)) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_0(entry);
    }
  }
  return list.iterator();
}
;
_.get_3 = function get_16(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_4(key, value_0){
  return $put_6(this, ':' + key, value_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 293, Ljava_util_InternalJsStringMap_2_classLit);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(295, 13, $intern_36, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove = function remove_1(index_0){
  var removed;
  return removed = $remove_1(this, index_0) , $remove_4(this.this$11, ':' + removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 295, Ljava_util_ArrayList_2_classLit);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(294, 157, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.containsValue = function containsValue_7(value_0){
  var protoValue;
  protoValue = this.backingMap['__proto__'];
  if (!(protoValue === undefined) && (maskUndefined(value_0) === maskUndefined(protoValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, protoValue))) {
    return true;
  }
  return $containsValue(this, value_0);
}
;
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 294, Ljava_util_InternalJsStringMap_2_classLit);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(112, 8, $intern_11, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 112, Ljava_lang_RuntimeException_2_classLit);
function equals_27(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_31(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function requireNonNull(obj){
  if (obj == null) {
    throw new NullPointerException;
  }
  return obj;
}

function $clinit_Random(){
  $clinit_Random = emptyMethod;
  var i, i0, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initDim(D_classLit, $intern_37, 0, 25, 7, 1);
  twoToTheXMinus48 = initDim(D_classLit, $intern_37, 0, 33, 7, 1);
  twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (i0 = 32; i0 >= 0; i0--) {
    twoToTheXMinus48[i0] = twoToTheXMinus48Tmp;
    twoToTheXMinus48Tmp *= 0.5;
  }
  twoToTheXMinus24Tmp = 1;
  for (i = 24; i >= 0; i--) {
    twoToTheXMinus24[i] = twoToTheXMinus24Tmp;
    twoToTheXMinus24Tmp *= 0.5;
  }
}

function Random(){
  $clinit_Random();
  var hi, seed;
  seed = uniqueSeed++ + now_1();
  hi = round_int(Math.floor(seed * 5.9604644775390625E-8)) & $intern_23;
  round_int(seed - hi * 16777216);
}

defineClass(578, 1, {}, Random);
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
var Ljava_util_Random_2_classLit = createForClass('java.util', 'Random', 578, Ljava_lang_Object_2_classLit);
function $getEntry_0(this$static, key){
  var c, childNum, tree;
  tree = this$static.root;
  while (tree) {
    c = $compare(key, tree.key_0);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.child[childNum];
  }
  return null;
}

function $inOrderAdd(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.child[0];
  !!leftNode && $inOrderAdd(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  $inRange(type_0, current.key_0, fromKey, fromInclusive, toKey, toInclusive) && list.add_0(current);
  rightNode = current.child[1];
  !!rightNode && $inOrderAdd(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function $inRange(type_0, key, fromKey, fromInclusive, toKey, toInclusive){
  var compare, compare_0;
  if (type_0.fromKeyValid() && (compare = $compare(key, fromKey) , compare < 0 || !fromInclusive && compare == 0)) {
    return false;
  }
  if (type_0.toKeyValid() && (compare_0 = $compare(key, toKey) , compare_0 > 0 || !toInclusive && compare_0 == 0)) {
    return false;
  }
  return true;
}

function $insert_0(this$static, tree, newNode, state){
  var c, childNum, otherChildDir;
  if (!tree) {
    return newNode;
  }
   else {
    c = $compare(newNode.key_0, tree.key_0);
    if (c == 0) {
      state.value_0 = $setValue(tree, newNode.value_0);
      state.found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.child[childNum] = $insert_0(this$static, tree.child[childNum], newNode, state);
    if ($isRed(tree.child[childNum])) {
      if ($isRed(tree.child[1 - childNum])) {
        tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(tree.child[childNum].child[childNum])?(tree = $rotateSingle(tree, 1 - childNum)):$isRed(tree.child[childNum].child[1 - childNum]) && (tree = (otherChildDir = 1 - (1 - childNum) , tree.child[otherChildDir] = $rotateSingle(tree.child[otherChildDir], otherChildDir) , $rotateSingle(tree, 1 - childNum)));
      }
    }
  }
  return tree;
}

function $isRed(node){
  return !!node && node.isRed;
}

function $put_7(this$static, key, value_0){
  var node, state;
  node = new TreeMap$Node(key, value_0);
  state = new TreeMap$State;
  this$static.root = $insert_0(this$static, this$static.root, node, state);
  state.found || ++this$static.size_0;
  this$static.root.isRed = false;
  return state.value_0;
}

function $rotateSingle(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.child[otherChildDir];
  tree.child[otherChildDir] = save.child[rotateDirection];
  save.child[rotateDirection] = tree;
  tree.isRed = true;
  save.isRed = false;
  return save;
}

function TreeMap(){
  this.root = null;
  $clinit_Comparators();
}

defineClass(247, 650, {3:1, 61:1}, TreeMap);
_.entrySet_0 = function entrySet_4(){
  return new TreeMap$EntrySet(this);
}
;
_.put = function put_5(key, value_0){
  return $put_7(this, key, value_0);
}
;
_.size_1 = function size_22(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', 247, Ljava_util_AbstractNavigableMap_2_classLit);
function TreeMap$EntryIterator(this$0){
  TreeMap$EntryIterator_0.call(this, this$0, ($clinit_TreeMap$SubMapType() , All));
}

function TreeMap$EntryIterator_0(this$0, type_0){
  var list;
  list = new ArrayList;
  $inOrderAdd(this$0, list, type_0, this$0.root, null, false, null, false);
  this.iter = new AbstractList$ListIteratorImpl(list);
}

defineClass(248, 1, {}, TreeMap$EntryIterator);
_.hasNext = function hasNext_12(){
  return this.iter.hasNext();
}
;
_.next_0 = function next_12(){
  return this.iter.next_0();
}
;
var Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util', 'TreeMap/EntryIterator', 248, Ljava_lang_Object_2_classLit);
function TreeMap$EntrySet(this$0){
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(550, 249, $intern_9, TreeMap$EntrySet);
var Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util', 'TreeMap/EntrySet', 550, Ljava_util_AbstractNavigableMap$EntrySet_2_classLit);
function TreeMap$Node(key, value_0){
  AbstractMap$SimpleEntry.call(this, key, value_0);
  this.child = initDim(Ljava_util_TreeMap$Node_2_classLit, $intern_1, 144, 2, 0, 1);
  this.isRed = true;
}

defineClass(144, 122, {121:1, 122:1, 24:1, 144:1}, TreeMap$Node);
_.isRed = false;
var Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util', 'TreeMap/Node', 144, Ljava_util_AbstractMap$SimpleEntry_2_classLit);
function TreeMap$State(){
}

defineClass(551, 1, {}, TreeMap$State);
_.toString$ = function toString_47(){
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done + ' found=' + this.found;
}
;
_.done = false;
_.found = false;
_.matchValue = false;
var Ljava_util_TreeMap$State_2_classLit = createForClass('java.util', 'TreeMap/State', 551, Ljava_lang_Object_2_classLit);
function $clinit_TreeMap$SubMapType(){
  $clinit_TreeMap$SubMapType = emptyMethod;
  All = new TreeMap$SubMapType('All', 0);
  Head = new TreeMap$SubMapType$1;
  Range_1 = new TreeMap$SubMapType$2;
  Tail = new TreeMap$SubMapType$3;
}

function TreeMap$SubMapType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_TreeMap$SubMapType();
  return initValues(getClassLiteralForArray(Ljava_util_TreeMap$SubMapType_2_classLit, 1), $intern_1, 60, 0, [All, Head, Range_1, Tail]);
}

defineClass(60, 6, $intern_38, TreeMap$SubMapType);
_.fromKeyValid = function fromKeyValid(){
  return false;
}
;
_.toKeyValid = function toKeyValid(){
  return false;
}
;
var All, Head, Range_1, Tail;
var Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType', 60, Ljava_lang_Enum_2_classLit, values_15);
function TreeMap$SubMapType$1(){
  TreeMap$SubMapType.call(this, 'Head', 1);
}

defineClass(552, 60, $intern_38, TreeMap$SubMapType$1);
_.toKeyValid = function toKeyValid_0(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/1', 552, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$2(){
  TreeMap$SubMapType.call(this, 'Range', 2);
}

defineClass(553, 60, $intern_38, TreeMap$SubMapType$2);
_.fromKeyValid = function fromKeyValid_0(){
  return true;
}
;
_.toKeyValid = function toKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/2', 553, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$3(){
  TreeMap$SubMapType.call(this, 'Tail', 3);
}

defineClass(554, 60, $intern_38, TreeMap$SubMapType$3);
_.fromKeyValid = function fromKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/3', 554, Ljava_util_TreeMap$SubMapType_2_classLit, null);
defineClass(606, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass('playn.core', 'Assets', 606, Ljava_lang_Object_2_classLit);
defineClass(615, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass('playn.core', 'Audio', 615, Ljava_lang_Object_2_classLit);
function $toTexture(this$static, config){
  return $createTexture_0(this$static.image, config);
}

function Canvas_0(image){
  this.image = image;
  this.width_0 = $invScaled(image.scale_0, image.pixelWidth);
  this.height_0 = $invScaled(image.scale_0, image.pixelHeight);
  if (this.width_0 <= 0 || this.height_0 <= 0)
    throw new IllegalArgumentException_0('Canvas must be > 0 in width and height: ' + this.width_0 + 'x' + this.height_0);
}

defineClass(323, 1, $intern_20);
_.close_0 = function close_2(){
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass('playn.core', 'Canvas', 323, Ljava_lang_Object_2_classLit);
function $clinit_Canvas$LineCap(){
  $clinit_Canvas$LineCap = emptyMethod;
  BUTT_0 = new Canvas$LineCap('BUTT', 0);
  ROUND_1 = new Canvas$LineCap('ROUND', 1);
  SQUARE_0 = new Canvas$LineCap('SQUARE', 2);
}

function Canvas$LineCap(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_Canvas$LineCap();
  return initValues(getClassLiteralForArray(Lplayn_core_Canvas$LineCap_2_classLit, 1), $intern_1, 103, 0, [BUTT_0, ROUND_1, SQUARE_0]);
}

defineClass(103, 6, {3:1, 7:1, 6:1, 103:1}, Canvas$LineCap);
var BUTT_0, ROUND_1, SQUARE_0;
var Lplayn_core_Canvas$LineCap_2_classLit = createForEnum('playn.core', 'Canvas/LineCap', 103, Ljava_lang_Enum_2_classLit, values_16);
function $clinit_Canvas$LineJoin(){
  $clinit_Canvas$LineJoin = emptyMethod;
  BEVEL_0 = new Canvas$LineJoin('BEVEL', 0);
  MITER_0 = new Canvas$LineJoin('MITER', 1);
  ROUND_2 = new Canvas$LineJoin('ROUND', 2);
}

function Canvas$LineJoin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_17(){
  $clinit_Canvas$LineJoin();
  return initValues(getClassLiteralForArray(Lplayn_core_Canvas$LineJoin_2_classLit, 1), $intern_1, 104, 0, [BEVEL_0, MITER_0, ROUND_2]);
}

defineClass(104, 6, {3:1, 7:1, 6:1, 104:1}, Canvas$LineJoin);
var BEVEL_0, MITER_0, ROUND_2;
var Lplayn_core_Canvas$LineJoin_2_classLit = createForEnum('playn.core', 'Canvas/LineJoin', 104, Ljava_lang_Enum_2_classLit, values_17);
function Clock(){
}

defineClass(223, 1, {}, Clock);
_.dt = 0;
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass('playn.core', 'Clock', 223, Ljava_lang_Object_2_classLit);
defineClass(35, 1, {35:1});
var Lplayn_core_Event_2_classLit = createForClass('playn.core', 'Event', 35, Ljava_lang_Object_2_classLit);
function $setFlag_0(this$static, flag){
  this$static.flags |= flag;
}

function Event$Input(flags, time){
  this.flags = flags;
  this.time = time;
}

function modifierFlags(altP, ctrlP, metaP, shiftP){
  var flags;
  flags = 0;
  altP && (flags |= 2);
  ctrlP && (flags |= 4);
  metaP && (flags |= 16);
  shiftP && (flags |= 8);
  return flags;
}

defineClass(30, 35, $intern_39);
_.addFields = function addFields(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_3(){
  return 'Input';
}
;
_.toString$ = function toString_48(){
  var builder;
  builder = $append_1(new StringBuilder_1(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass('playn.core', 'Event/Input', 30, Lplayn_core_Event_2_classLit);
function Event$XY(flags, time, x_0, y_0){
  Event$Input.call(this, flags, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(47, 30, $intern_40);
_.addFields = function addFields_0(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
}
;
_.name_1 = function name_4(){
  return 'XY';
}
;
_.x_1 = function x_1(){
  return this.x_0;
}
;
_.y_1 = function y_1(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lplayn_core_Event$XY_2_classLit = createForClass('playn.core', 'Event/XY', 47, Lplayn_core_Event$Input_2_classLit);
defineClass(619, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass('playn.core', 'Exec', 619, Ljava_lang_Object_2_classLit);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll_0(this$static.running, this$static.pending);
  this$static.pending.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get_8(this$static.running, ii);
    try {
      action.run();
    }
     catch ($e0) {
      $e0 = wrap_0($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $reportError(this$static.plat, 'invokeLater Runnable failed: ' + action, e);
      }
       else 
        throw unwrap($e0);
    }
  }
  this$static.running.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
}

function Exec$Default(plat){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = plat;
  $atPrio($addConnection(plat.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(355, 619, {}, Exec$Default);
var Lplayn_core_Exec$Default_2_classLit = createForClass('playn.core', 'Exec/Default', 355, Lplayn_core_Exec_2_classLit);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(356, 607, {}, Exec$Default$1);
_.onEmit_0 = function onEmit_12(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass('playn.core', 'Exec/Default/1', 356, Lreact_Slot_2_classLit);
function $derive(this$static, size_0){
  return new Font_0(this$static.name_0, this$static.style_0, size_0);
}

function $equals_3(this$static, other){
  var ofont;
  if (!instanceOf(other, 91))
    return false;
  ofont = other;
  return $equals_0(this$static.name_0, ofont.name_0) && this$static.style_0 == ofont.style_0 && this$static.size_0 == ofont.size_0;
}

function $hashCode_0(this$static){
  return getHashCode_0(this$static.name_0) ^ getHashCode(this$static.style_0) ^ round_int(this$static.size_0);
}

function Font(){
  Font_0.call(this, 'Helvetica', ($clinit_Font$Style() , PLAIN), 16);
}

function Font_0(name_0, style, size_0){
  this.name_0 = name_0;
  this.style_0 = style;
  this.size_0 = size_0;
}

defineClass(91, 1, {91:1}, Font, Font_0);
_.equals$ = function equals_28(other){
  return $equals_3(this, other);
}
;
_.hashCode$ = function hashCode_32(){
  return $hashCode_0(this);
}
;
_.toString$ = function toString_49(){
  return this.name_0 + ' ' + this.style_0 + ' ' + this.size_0 + 'pt';
}
;
_.size_0 = 0;
var Lplayn_core_Font_2_classLit = createForClass('playn.core', 'Font', 91, Ljava_lang_Object_2_classLit);
function $clinit_Font$Style(){
  $clinit_Font$Style = emptyMethod;
  PLAIN = new Font$Style('PLAIN', 0);
  BOLD_0 = new Font$Style('BOLD', 1);
  ITALIC_0 = new Font$Style('ITALIC', 2);
  BOLD_ITALIC = new Font$Style('BOLD_ITALIC', 3);
}

function Font$Style(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_18(){
  $clinit_Font$Style();
  return initValues(getClassLiteralForArray(Lplayn_core_Font$Style_2_classLit, 1), $intern_1, 92, 0, [PLAIN, BOLD_0, ITALIC_0, BOLD_ITALIC]);
}

defineClass(92, 6, {3:1, 7:1, 6:1, 92:1}, Font$Style);
var BOLD_0, BOLD_ITALIC, ITALIC_0, PLAIN;
var Lplayn_core_Font$Style_2_classLit = createForEnum('playn.core', 'Font/Style', 92, Ljava_lang_Enum_2_classLit, values_18);
function $checkError(this$static){
  var reported;
  reported = 0;
  if (this$static.checkErrors) {
    while (this$static.glc.getError() != 0) {
      reported += 1;
      $clinit_System();
    }
  }
  return reported > 0;
}

function $glDeleteFramebuffer(this$static){
  $setIntBuffer(this$static.bufs, 0);
  $deleteObjects(this$static, this$static.bufs.intBuffer, ($clinit_HtmlGL20$WebGLObjectType() , FRAME_BUFFER));
}

function $glDeleteTexture(this$static, id_0){
  $setIntBuffer(this$static.bufs, id_0);
  $deleteObjects(this$static, this$static.bufs.intBuffer, ($clinit_HtmlGL20$WebGLObjectType() , TEXTURE));
}

function $glGenTexture(this$static){
  $resizeIntBuffer(this$static.bufs);
  $genObjects(this$static, this$static.bufs.intBuffer, ($clinit_HtmlGL20$WebGLObjectType() , TEXTURE));
  return this$static.bufs.intBuffer.intArray[0];
}

function $glUniform4fv(this$static, location_0, count, v){
  $setFloatBuffer(this$static.bufs, v, 4 * count);
  $glUniform4fv_0(this$static, location_0, count, this$static.bufs.floatBuffer);
}

function GL20(buffers, checkErrors){
  this.bufs = buffers;
  this.checkErrors = checkErrors;
}

defineClass(365, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass('playn.core', 'GL20', 365, Ljava_lang_Object_2_classLit);
function $newCap(cap, length_0){
  var newLength;
  newLength = cap << 1;
  while (newLength < length_0) {
    newLength <<= 1;
  }
  return newLength;
}

function $resizeIntBuffer(this$static){
  var cap;
  cap = this$static.intBuffer.capacity;
  cap < 1?(this$static.intBuffer = $asIntBuffer($createByteBuffer($newCap(cap, 1) * 4))):$position(this$static.intBuffer);
  $limit(this$static.intBuffer, 1);
}

function $setFloatBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.floatBuffer.capacity;
  cap < length_0?(this$static.floatBuffer = new FloatBuffer($slice($createByteBuffer($newCap(cap, length_0) * 4)))):$position(this$static.floatBuffer);
  $limit(this$static.floatBuffer, length_0);
  $put_0(this$static.floatBuffer, source, length_0);
  $rewind(this$static.floatBuffer);
}

function $setIntBuffer(this$static, n){
  $position(this$static.intBuffer);
  $put_1(this$static.intBuffer, n);
  $rewind(this$static.intBuffer);
}

function $setShortBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.shortBuffer.capacity;
  cap < length_0?(this$static.shortBuffer = $asShortBuffer($createByteBuffer($newCap(cap, length_0) * 2))):$position(this$static.shortBuffer);
  $limit(this$static.shortBuffer, length_0);
  $put_3(this$static.shortBuffer, source, length_0);
  $rewind(this$static.shortBuffer);
}

defineClass(367, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass('playn.core', 'GL20/Buffers', 367, Ljava_lang_Object_2_classLit);
function $begin(this$static){
  if (this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' mismatched begin()');
  this$static.begun = true;
}

function $close_1(this$static){
  if (this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' close() without end()');
}

function $end(this$static){
  if (!this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' mismatched end()');
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw new IllegalStateException_0($getSimpleName(this$static.___clazz$) + ' flush() without begin()');
}

defineClass(622, 1, $intern_20);
_.begin = function begin(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.close_0 = function close_3(){
  $close_1(this);
}
;
_.flush = function flush(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass('playn.core', 'GLBatch', 622, Ljava_lang_Object_2_classLit);
function $activate(this$static){
  $glUseProgram(this$static.gl, this$static.id_0);
}

function $close_2(this$static){
  $deleteObject(this$static.gl, this$static.vertexShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
  $deleteObject(this$static.gl, this$static.fragmentShader, SHADER);
  $deleteObject(this$static.gl, this$static.id_0, PROGRAM);
}

function $compileShader_0(this$static, type_0, shaderSource){
  var compiled, log_0, shader;
  shader = $glCreateShader(this$static.gl, type_0);
  if (shader == 0)
    throw new RuntimeException_0('Failed to create shader (' + type_0 + '): ' + this$static.gl.glc.getError());
  $glShaderSource(this$static.gl, shader, shaderSource);
  $glCompileShader(this$static.gl, shader);
  compiled = initDim(I_classLit, $intern_41, 0, 1, 7, 1);
  $glGetShaderiv(this$static.gl, shader, compiled);
  if (compiled[0] == 0) {
    log_0 = $glGetShaderInfoLog(this$static.gl, shader);
    $deleteObject(this$static.gl, shader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
    throw new RuntimeException_0('Failed to compile shader (' + type_0 + '): ' + log_0);
  }
  return shader;
}

function $getAttribLocation_0(this$static, name_0){
  var loc;
  loc = $glGetAttribLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function $getUniformLocation_0(this$static, name_0){
  var loc;
  loc = $glGetUniformLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function GLProgram(gl, vertexSource, fragmentSource){
  var fragmentShader, id_0, linkStatus, log_0, vertexShader;
  this.gl = gl;
  id_0 = 0;
  vertexShader = 0;
  fragmentShader = 0;
  try {
    id_0 = $createObject(gl, gl.glc.createProgram(), ($clinit_HtmlGL20$WebGLObjectType() , PROGRAM));
    if (id_0 == 0)
      throw new RuntimeException_0('Failed to create program: ' + gl.glc.getError());
    $checkError(gl);
    vertexShader = $compileShader_0(this, 35633, vertexSource);
    $attachShader(gl.glc, gl.webGLObjects[id_0], gl.webGLObjects[vertexShader]);
    $checkError(gl);
    fragmentShader = $compileShader_0(this, 35632, fragmentSource);
    $attachShader(gl.glc, gl.webGLObjects[id_0], gl.webGLObjects[fragmentShader]);
    $checkError(gl);
    $linkProgram(gl.glc, gl.webGLObjects[id_0]);
    linkStatus = initDim(I_classLit, $intern_41, 0, 1, 7, 1);
    linkStatus[0] = $getProgramParameterb(gl.glc, gl.webGLObjects[id_0], 35714)?1:0;
    if (linkStatus[0] == 0) {
      log_0 = $getProgramInfoLog(gl.glc, gl.webGLObjects[id_0]);
      $deleteObject(gl, id_0, PROGRAM);
      throw new RuntimeException_0('Failed to link program: ' + log_0);
    }
    this.id_0 = id_0;
    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && $deleteObject(gl, id_0, ($clinit_HtmlGL20$WebGLObjectType() , PROGRAM));
    vertexShader != 0 && $deleteObject(gl, vertexShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
    fragmentShader != 0 && $deleteObject(gl, fragmentShader, ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
  }
}

defineClass(225, 1, $intern_20, GLProgram);
_.close_0 = function close_4(){
  $close_2(this);
}
;
_.fragmentShader = 0;
_.id_0 = 0;
_.vertexShader = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass('playn.core', 'GLProgram', 225, Ljava_lang_Object_2_classLit);
function $onEmit_8(this$static){
  $onFrame(this$static.this$01);
}

function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(273, 607, {}, Game$1);
_.onEmit_0 = function onEmit_13(plat){
  $onEmit_8(this, plat);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass('playn.core', 'Game/1', 273, Lreact_Slot_2_classLit);
defineClass(654, 1, {});
var Lplayn_core_Gradient_2_classLit = createForClass('playn.core', 'Gradient', 654, Ljava_lang_Object_2_classLit);
defineClass(581, 1, {});
var Lplayn_core_Gradient$Config_2_classLit = createForClass('playn.core', 'Gradient/Config', 581, Ljava_lang_Object_2_classLit);
function Gradient$Linear(y1, colors, positions){
  this.colors = colors;
  this.positions = positions;
  this.x0 = 0;
  this.y0 = 0;
  this.x1 = 0;
  this.y1 = y1;
}

defineClass(582, 581, {}, Gradient$Linear);
_.x0 = 0;
_.x1 = 0;
_.y0 = 0;
_.y1 = 0;
var Lplayn_core_Gradient$Linear_2_classLit = createForClass('playn.core', 'Gradient/Linear', 582, Lplayn_core_Gradient$Config_2_classLit);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, iceil(this$static.scale_0.factor * 1), iceil(this$static.scale_0.factor * 1));
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(-1)) , canvas), 0, 0, canvas.width_0, canvas.height_0);
    this$static.colorTex = $toTexture(canvas, ($clinit_Texture$Config() , UNMANAGED));
  }
  return this$static.colorTex;
}

function $createCanvas(this$static, width_0, height){
  return $createCanvasImpl(this$static, this$static.scale_0, iceil($scaled(this$static.scale_0, width_0)), iceil($scaled(this$static.scale_0, height)));
}

function $createCanvas_0(this$static, size_0){
  return $createCanvas(this$static, size_0.width_0, size_0.height_0);
}

function $createTexture(this$static, config){
  var id_0, minFilter;
  id_0 = $glGenTexture(this$static.gl);
  $glBindTexture(this$static.gl, id_0);
  $glTexParameteri(this$static.gl, 10240, config.magFilter);
  minFilter = mipmapify(config.minFilter, config.mipmaps);
  $glTexParameteri(this$static.gl, 10241, minFilter);
  $glTexParameteri(this$static.gl, 10242, config.repeatX?10497:33071);
  $glTexParameteri(this$static.gl, 10243, config.repeatY?10497:33071);
  return id_0;
}

function $viewportChanged(this$static, pixelWidth, pixelHeight){
  this$static.viewPixelWidth = pixelWidth;
  this$static.viewPixelHeight = pixelHeight;
  this$static.viewSizeM.width_0 = $invScaled(this$static.scale_0, pixelWidth);
  this$static.viewSizeM.height_0 = $invScaled(this$static.scale_0, pixelHeight);
  $info(this$static.plat.log_0, 'viewPortChanged ' + pixelWidth + 'x' + pixelHeight + ' / ' + this$static.scale_0.factor + ' -> ' + this$static.viewSize);
}

function Graphics(plat, gl, scale){
  this.viewSizeM = new Dimension;
  this.viewSize = this.viewSizeM;
  this.defaultRenderTarget = new Graphics$1(this, this);
  this.plat = plat;
  this.gl = gl;
  this.scale_0 = scale;
}

function mipmapify(filter, mipmaps){
  if (!mipmaps)
    return filter;
  switch (filter) {
    case 9728:
      return 9984;
    case 9729:
      return 9985;
    default:return filter;
  }
}

defineClass(299, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass('playn.core', 'Graphics', 299, Ljava_lang_Object_2_classLit);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(301, 1, $intern_20);
_.close_0 = function close_5(){
  if (!this.disposed) {
    this.disposed = true;
    $glDeleteFramebuffer(this.gfx.gl);
  }
}
;
_.toString$ = function toString_50(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
_.disposed = false;
var Lplayn_core_RenderTarget_2_classLit = createForClass('playn.core', 'RenderTarget', 301, Ljava_lang_Object_2_classLit);
function Graphics$1(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(302, 301, $intern_20, Graphics$1);
_.close_0 = function close_6(){
}
;
var Lplayn_core_Graphics$1_2_classLit = createForClass('playn.core', 'Graphics/1', 302, Lplayn_core_RenderTarget_2_classLit);
defineClass(616, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass('playn.core', 'TileSource', 616, Ljava_lang_Object_2_classLit);
function $$init_0(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var tex, texHeight, texWidth;
  if (this$static.state._result_0.get_0() == null)
    throw new IllegalStateException_0('Cannot create texture from unready image: ' + this$static);
  texWidth = $toTexWidth(config, this$static.pixelWidth);
  texHeight = $toTexHeight(config, this$static.pixelHeight);
  if (texWidth <= 0 || texHeight <= 0)
    throw new IllegalArgumentException_0('Invalid texture size: ' + texWidth + 'x' + texHeight + ' from: ' + this$static);
  tex = new Texture(this$static.gfx, $createTexture(this$static.gfx, config), config, texWidth, texHeight, this$static.scale_0, $invScaled(this$static.scale_0, this$static.pixelWidth), $invScaled(this$static.scale_0, this$static.pixelHeight));
  $update_0(tex, this$static);
  return tex;
}

function $texture(this$static){
  (!this$static.texture || this$static.texture.disposed) && (this$static.texture = $createTexture_0(this$static, this$static.texconf));
  return this$static.texture;
}

defineClass(200, 616, {});
var Lplayn_core_Image_2_classLit = createForClass('playn.core', 'Image', 200, Lplayn_core_TileSource_2_classLit);
function $apply_0(this$static){
  return $texture(this$static.this$01);
}

function Image$3(this$0){
  this.this$01 = this$0;
}

defineClass(322, 1, {}, Image$3);
_.apply_0 = function apply_6(image){
  return $apply_0(this, image);
}
;
var Lplayn_core_Image$3_2_classLit = createForClass('playn.core', 'Image/3', 322, Ljava_lang_Object_2_classLit);
function ImageImpl(gfx, scale, pixelWidth, pixelHeight, bitmap){
  $$init_0(this);
  this.gfx = gfx;
  this.state = result_0(new Try$Success(this));
  if (pixelWidth == 0 || pixelHeight == 0)
    throw new IllegalArgumentException_0('Invalid size for ready image: ' + pixelWidth + 'x' + pixelHeight + ' bitmap: ' + bitmap);
  this.source = '<canvas>';
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
  this.img = bitmap;
}

function ImageImpl_0(gfx, state, preScale, preWidth, preHeight, source){
  $$init_0(this);
  this.gfx = gfx;
  this.state = state;
  this.source = source;
  this.scale_0 = preScale;
  this.pixelWidth = preWidth;
  this.pixelHeight = preHeight;
}

defineClass(208, 200, {});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass('playn.core', 'ImageImpl', 208, Lplayn_core_Image_2_classLit);
defineClass(306, 1, {});
var Lplayn_core_Input_2_classLit = createForClass('playn.core', 'Input', 306, Ljava_lang_Object_2_classLit);
function $clinit_Key(){
  $clinit_Key = emptyMethod;
  A = new Key('A', 0);
  B = new Key('B', 1);
  C = new Key('C', 2);
  D = new Key('D', 3);
  E_0 = new Key('E', 4);
  F_0 = new Key('F', 5);
  G = new Key('G', 6);
  H = new Key('H', 7);
  I = new Key('I', 8);
  J = new Key('J', 9);
  K = new Key('K', 10);
  L = new Key('L', 11);
  M = new Key('M', 12);
  N = new Key('N', 13);
  O = new Key('O', 14);
  P = new Key('P', 15);
  Q = new Key('Q', 16);
  R = new Key('R', 17);
  S = new Key('S', 18);
  T = new Key('T', 19);
  U = new Key('U', 20);
  V = new Key('V', 21);
  W = new Key('W', 22);
  X = new Key('X', 23);
  Y = new Key('Y', 24);
  Z = new Key('Z', 25);
  K0 = new Key('K0', 26);
  K1 = new Key('K1', 27);
  K2 = new Key('K2', 28);
  K3 = new Key('K3', 29);
  K4 = new Key('K4', 30);
  K5 = new Key('K5', 31);
  K6 = new Key('K6', 32);
  K7 = new Key('K7', 33);
  K8 = new Key('K8', 34);
  K9 = new Key('K9', 35);
  NP0 = new Key('NP0', 36);
  NP1 = new Key('NP1', 37);
  NP2 = new Key('NP2', 38);
  NP3 = new Key('NP3', 39);
  NP4 = new Key('NP4', 40);
  NP5 = new Key('NP5', 41);
  NP6 = new Key('NP6', 42);
  NP7 = new Key('NP7', 43);
  NP8 = new Key('NP8', 44);
  NP9 = new Key('NP9', 45);
  NP_ADD = new Key('NP_ADD', 46);
  NP_DECIMAL = new Key('NP_DECIMAL', 47);
  NP_DELETE = new Key('NP_DELETE', 48);
  NP_DIVIDE = new Key('NP_DIVIDE', 49);
  NP_MULTIPLY = new Key('NP_MULTIPLY', 50);
  NP_NUM_LOCK = new Key('NP_NUM_LOCK', 51);
  NP_SUBTRACT = new Key('NP_SUBTRACT', 52);
  NP_DOWN = new Key('NP_DOWN', 53);
  NP_LEFT = new Key('NP_LEFT', 54);
  NP_RIGHT = new Key('NP_RIGHT', 55);
  NP_UP = new Key('NP_UP', 56);
  F1 = new Key('F1', 57);
  F2 = new Key('F2', 58);
  F3 = new Key('F3', 59);
  F4 = new Key('F4', 60);
  F5 = new Key('F5', 61);
  F6 = new Key('F6', 62);
  F7 = new Key('F7', 63);
  F8 = new Key('F8', 64);
  F9 = new Key('F9', 65);
  F10 = new Key('F10', 66);
  F11 = new Key('F11', 67);
  F12 = new Key('F12', 68);
  AMPERSAND = new Key('AMPERSAND', 69);
  ASTERISK = new Key('ASTERISK', 70);
  AT = new Key('AT', 71);
  BACKQUOTE = new Key('BACKQUOTE', 72);
  BACKSLASH = new Key('BACKSLASH', 73);
  BANG = new Key('BANG', 74);
  CIRCUMFLEX = new Key('CIRCUMFLEX', 75);
  COLON = new Key('COLON', 76);
  COMMA = new Key('COMMA', 77);
  DOLLAR = new Key('DOLLAR', 78);
  DOUBLE_QUOTE = new Key('DOUBLE_QUOTE', 79);
  EQUALS = new Key('EQUALS', 80);
  GREATER = new Key('GREATER', 81);
  HASH = new Key('HASH', 82);
  LEFT_BRACE = new Key('LEFT_BRACE', 83);
  LEFT_BRACKET = new Key('LEFT_BRACKET', 84);
  LEFT_PAREN = new Key('LEFT_PAREN', 85);
  LESS = new Key('LESS', 86);
  MINUS = new Key('MINUS', 87);
  MULTIPLY = new Key('MULTIPLY', 88);
  PERCENT = new Key('PERCENT', 89);
  PERIOD = new Key('PERIOD', 90);
  PLUS = new Key('PLUS', 91);
  QUOTE = new Key('QUOTE', 92);
  RIGHT_BRACE = new Key('RIGHT_BRACE', 93);
  RIGHT_BRACKET = new Key('RIGHT_BRACKET', 94);
  RIGHT_PAREN = new Key('RIGHT_PAREN', 95);
  SEMICOLON = new Key('SEMICOLON', 96);
  SLASH = new Key('SLASH', 97);
  SPACE = new Key('SPACE', 98);
  TILDE = new Key('TILDE', 99);
  QUESTION_MARK = new Key('QUESTION_MARK', 100);
  UNDERSCORE = new Key('UNDERSCORE', 101);
  VERTICAL_BAR = new Key('VERTICAL_BAR', 102);
  ALT = new Key('ALT', 103);
  CONTROL = new Key('CONTROL', 104);
  CAPS_LOCK = new Key('CAPS_LOCK', 105);
  SHIFT = new Key('SHIFT', 106);
  META = new Key('META', 107);
  DOWN_0 = new Key('DOWN', 108);
  END = new Key('END', 109);
  HOME = new Key('HOME', 110);
  LEFT_0 = new Key('LEFT', 111);
  PAGE_UP = new Key('PAGE_UP', 112);
  PAGE_DOWN = new Key('PAGE_DOWN', 113);
  RIGHT_0 = new Key('RIGHT', 114);
  UP_0 = new Key('UP', 115);
  BACKSPACE = new Key('BACKSPACE', 116);
  DELETE = new Key('DELETE', 117);
  ENTER = new Key('ENTER', 118);
  INSERT = new Key('INSERT', 119);
  TAB = new Key('TAB', 120);
  ESCAPE = new Key('ESCAPE', 121);
  PAUSE = new Key('PAUSE', 122);
  PRINT_SCREEN = new Key('PRINT_SCREEN', 123);
  SCROLL_LOCK = new Key('SCROLL_LOCK', 124);
  WINDOWS = new Key('WINDOWS', 125);
  MEDIA_CLOSE = new Key('MEDIA_CLOSE', 126);
  MEDIA_EJECT = new Key('MEDIA_EJECT', 127);
  MEDIA_FAST_FORWARD = new Key('MEDIA_FAST_FORWARD', 128);
  MEDIA_NEXT = new Key('MEDIA_NEXT', 129);
  MEDIA_PAUSE = new Key('MEDIA_PAUSE', 130);
  MEDIA_PLAY = new Key('MEDIA_PLAY', 131);
  MEDIA_PLAY_PAUSE = new Key('MEDIA_PLAY_PAUSE', 132);
  MEDIA_PREVIOUS = new Key('MEDIA_PREVIOUS', 133);
  MEDIA_RECORD = new Key('MEDIA_RECORD', 134);
  MEDIA_REWIND = new Key('MEDIA_REWIND', 135);
  MEDIA_STOP = new Key('MEDIA_STOP', 136);
  BLUE = new Key('BLUE', 137);
  GREEN = new Key('GREEN', 138);
  RED = new Key('RED', 139);
  YELLOW = new Key('YELLOW', 140);
  APP_SWITCH = new Key('APP_SWITCH', 141);
  AVR_INPUT = new Key('AVR_INPUT', 142);
  AVR_POWER = new Key('AVR_POWER', 143);
  BACK = new Key('BACK', 144);
  BOOKMARK = new Key('BOOKMARK', 145);
  BREAK = new Key('BREAK', 146);
  BUTTON_1 = new Key('BUTTON_1', 147);
  BUTTON_2 = new Key('BUTTON_2', 148);
  BUTTON_3 = new Key('BUTTON_3', 149);
  BUTTON_4 = new Key('BUTTON_4', 150);
  BUTTON_5 = new Key('BUTTON_5', 151);
  BUTTON_6 = new Key('BUTTON_6', 152);
  BUTTON_7 = new Key('BUTTON_7', 153);
  BUTTON_8 = new Key('BUTTON_8', 154);
  BUTTON_9 = new Key('BUTTON_9', 155);
  BUTTON_10 = new Key('BUTTON_10', 156);
  BUTTON_11 = new Key('BUTTON_11', 157);
  BUTTON_12 = new Key('BUTTON_12', 158);
  BUTTON_13 = new Key('BUTTON_13', 159);
  BUTTON_14 = new Key('BUTTON_14', 160);
  BUTTON_15 = new Key('BUTTON_15', 161);
  BUTTON_16 = new Key('BUTTON_16', 162);
  BUTTON_A = new Key('BUTTON_A', 163);
  BUTTON_B = new Key('BUTTON_B', 164);
  BUTTON_C = new Key('BUTTON_C', 165);
  BUTTON_L1 = new Key('BUTTON_L1', 166);
  BUTTON_L2 = new Key('BUTTON_L2', 167);
  BUTTON_MODE = new Key('BUTTON_MODE', 168);
  BUTTON_R1 = new Key('BUTTON_R1', 169);
  BUTTON_R2 = new Key('BUTTON_R2', 170);
  BUTTON_SELECT = new Key('BUTTON_SELECT', 171);
  BUTTON_START = new Key('BUTTON_START', 172);
  BUTTON_THUMBL = new Key('BUTTON_THUMBL', 173);
  BUTTON_THUMBR = new Key('BUTTON_THUMBR', 174);
  BUTTON_X = new Key('BUTTON_X', 175);
  BUTTON_Y = new Key('BUTTON_Y', 176);
  BUTTON_Z = new Key('BUTTON_Z', 177);
  CALL = new Key('CALL', 178);
  CAMERA = new Key('CAMERA', 179);
  CAPTIONS = new Key('CAPTIONS', 180);
  CHANNEL_DOWN = new Key('CHANNEL_DOWN', 181);
  CHANNEL_UP = new Key('CHANNEL_UP', 182);
  CLEAR = new Key('CLEAR', 183);
  DPAD_CENTER = new Key('DPAD_CENTER', 184);
  DPAD_DOWN = new Key('DPAD_DOWN', 185);
  DPAD_LEFT = new Key('DPAD_LEFT', 186);
  DPAD_RIGHT = new Key('DPAD_RIGHT', 187);
  DPAD_UP = new Key('DPAD_UP', 188);
  DVR = new Key('DVR', 189);
  ENDCALL = new Key('ENDCALL', 190);
  ENVELOPE = new Key('ENVELOPE', 191);
  EXPLORER = new Key('EXPLORER', 192);
  FOCUS = new Key('FOCUS', 193);
  FORWARD = new Key('FORWARD', 194);
  FORWARD_DEL = new Key('FORWARD_DEL', 195);
  FUNCTION = new Key('FUNCTION', 196);
  GUIDE = new Key('GUIDE', 197);
  HEADSETHOOK = new Key('HEADSETHOOK', 198);
  INFO = new Key('INFO', 199);
  MENU = new Key('MENU', 200);
  MUTE = new Key('MUTE', 201);
  NOTIFICATION = new Key('NOTIFICATION', 202);
  NUM = new Key('NUM', 203);
  PICTSYMBOLS = new Key('PICTSYMBOLS', 204);
  POWER = new Key('POWER', 205);
  SEARCH = new Key('SEARCH', 206);
  SETTINGS = new Key('SETTINGS', 207);
  SOFT_LEFT = new Key('SOFT_LEFT', 208);
  SOFT_RIGHT = new Key('SOFT_RIGHT', 209);
  STAR = new Key('STAR', 210);
  STB_INPUT = new Key('STB_INPUT', 211);
  STB_POWER = new Key('STB_POWER', 212);
  SWITCH_CHARSET = new Key('SWITCH_CHARSET', 213);
  SYM = new Key('SYM', 214);
  SYSRQ = new Key('SYSRQ', 215);
  TV = new Key('TV', 216);
  TV_INPUT = new Key('TV_INPUT', 217);
  TV_POWER = new Key('TV_POWER', 218);
  VOLUME_DOWN = new Key('VOLUME_DOWN', 219);
  VOLUME_MUTE = new Key('VOLUME_MUTE', 220);
  VOLUME_UP = new Key('VOLUME_UP', 221);
  WINDOW = new Key('WINDOW', 222);
  ZOOM_IN = new Key('ZOOM_IN', 223);
  ZOOM_OUT = new Key('ZOOM_OUT', 224);
  UNKNOWN = new Key('UNKNOWN', 225);
}

function Key(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_19(){
  $clinit_Key();
  return initValues(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_1, 4, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN_0, END, HOME, LEFT_0, PAGE_UP, PAGE_DOWN, RIGHT_0, UP_0, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE, GREEN, RED, YELLOW, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW, ZOOM_IN, ZOOM_OUT, UNKNOWN]);
}

defineClass(4, 6, {3:1, 7:1, 6:1, 4:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN_0, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT_0, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED, RIGHT_0, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN, UP_0, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW, WINDOWS, X, Y, YELLOW, Z, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum('playn.core', 'Key', 4, Ljava_lang_Enum_2_classLit, values_19);
function Keyboard$Event(time){
  Event$Input.call(this, 0, time);
}

defineClass(226, 30, $intern_39);
var Lplayn_core_Keyboard$Event_2_classLit = createForClass('playn.core', 'Keyboard/Event', 226, Lplayn_core_Event$Input_2_classLit);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(132, 226, {35:1, 30:1, 132:1}, Keyboard$KeyEvent);
_.addFields = function addFields_1(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_7($append_6($append_5((builder.string += ', key=' , builder), this.key_0), ', down='), this.down);
}
;
_.name_1 = function name_5(){
  return 'Key';
}
;
_.down = false;
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass('playn.core', 'Keyboard/KeyEvent', 132, Lplayn_core_Keyboard$Event_2_classLit);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(436, 226, $intern_39, Keyboard$TypedEvent);
_.addFields = function addFields_2(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_1((builder.string += ', typedChar=' , builder), this.typedChar);
}
;
_.name_1 = function name_6(){
  return 'Typed';
}
;
_.typedChar = 0;
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass('playn.core', 'Keyboard/TypedEvent', 436, Lplayn_core_Keyboard$Event_2_classLit);
function $debug(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, null);
}

function $error(this$static, e){
  $log(this$static, ($clinit_Log$Level() , ERROR), 'init()', e);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $info_0(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $log(this$static, level, msg, e){
  var lmsg;
  level.ordinal >= this$static.minLevel.ordinal && (lmsg = level + ': ' + msg , !!e && (lmsg += ': ' + e.getMessage()) , $clinit_System() , !!e && e.printStackTrace(out_0) , $wnd.console && $wnd.console.info && (e != null?$wnd.console.info(lmsg, e):$wnd.console.info(lmsg)) , undefined , undefined);
}

function $warn(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , WARN), msg, e);
}

defineClass(297, 1, {});
var Lplayn_core_Log_2_classLit = createForClass('playn.core', 'Log', 297, Ljava_lang_Object_2_classLit);
function $clinit_Log$Level(){
  $clinit_Log$Level = emptyMethod;
  DEBUG = new Log$Level('DEBUG', 0);
  INFO_0 = new Log$Level('INFO', 1);
  WARN = new Log$Level('WARN', 2);
  ERROR = new Log$Level('ERROR', 3);
}

function Log$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_Log$Level();
  return initValues(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 81, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(81, 6, {3:1, 7:1, 6:1, 81:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum('playn.core', 'Log/Level', 81, Ljava_lang_Enum_2_classLit, values_20);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, 0, time, x_0, y_0);
}

defineClass(171, 47, $intern_40);
var Lplayn_core_Mouse$Event_2_classLit = createForClass('playn.core', 'Mouse/Event', 171, Lplayn_core_Event$XY_2_classLit);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(130, 171, {35:1, 30:1, 47:1, 130:1, 46:1}, Mouse$ButtonEvent);
_.addFields = function addFields_3(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_7($append_6($append_5((builder.string += ', id=' , builder), this.button_0), ', down='), this.down);
}
;
_.name_1 = function name_7(){
  return 'Button';
}
;
_.down = false;
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass('playn.core', 'Mouse/ButtonEvent', 130, Lplayn_core_Mouse$Event_2_classLit);
function $clinit_Mouse$ButtonEvent$Id(){
  $clinit_Mouse$ButtonEvent$Id = emptyMethod;
  LEFT_1 = new Mouse$ButtonEvent$Id('LEFT', 0);
  RIGHT_1 = new Mouse$ButtonEvent$Id('RIGHT', 1);
  MIDDLE_0 = new Mouse$ButtonEvent$Id('MIDDLE', 2);
  X1 = new Mouse$ButtonEvent$Id('X1', 3);
  X2 = new Mouse$ButtonEvent$Id('X2', 4);
}

function Mouse$ButtonEvent$Id(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_21(){
  $clinit_Mouse$ButtonEvent$Id();
  return initValues(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 76, 0, [LEFT_1, RIGHT_1, MIDDLE_0, X1, X2]);
}

defineClass(76, 6, {3:1, 7:1, 6:1, 76:1}, Mouse$ButtonEvent$Id);
var LEFT_1, MIDDLE_0, RIGHT_1, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum('playn.core', 'Mouse/ButtonEvent/Id', 76, Ljava_lang_Enum_2_classLit, values_21);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(172, 171, {35:1, 30:1, 47:1, 172:1, 46:1}, Mouse$MotionEvent);
_.addFields = function addFields_4(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_6($append_3((builder.string += ', dx=' , builder), this.dx), ', dy='), this.dy);
}
;
_.name_1 = function name_8(){
  return 'MotionEvent';
}
;
_.dx = 0;
_.dy = 0;
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass('playn.core', 'Mouse/MotionEvent', 172, Lplayn_core_Mouse$Event_2_classLit);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(435, 171, $intern_40, Mouse$WheelEvent);
_.addFields = function addFields_5(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3((builder.string += ', velocity=' , builder), this.velocity);
}
;
_.name_1 = function name_9(){
  return 'Wheel';
}
;
_.velocity = 0;
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass('playn.core', 'Mouse/WheelEvent', 435, Lplayn_core_Mouse$Event_2_classLit);
function $dispatchEvent(this$static, signal, event_0){
  var cause;
  try {
    $notify(signal, ($clinit_AbstractSignal() , EMIT), event_0, null, null);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      cause = $e0;
      $notifyEmit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Event dispatch failure', cause);
    }
     else 
      throw unwrap($e0);
  }
}

function $emitFrame(this$static){
  var e;
  try {
    $notifyEmit(this$static.frame_0, this$static);
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $notifyEmit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Frame tick exception', e);
    }
     else 
      throw unwrap($e0);
  }
}

function $reportError(this$static, message, cause){
  $notifyEmit(this$static.errors, new Platform$Error);
  $warn(this$static.log_0, message, cause);
}

defineClass(260, 1, {});
var Lplayn_core_Platform_2_classLit = createForClass('playn.core', 'Platform', 260, Ljava_lang_Object_2_classLit);
function Platform$Error(){
}

defineClass(153, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass('playn.core', 'Platform/Error', 153, Ljava_lang_Object_2_classLit);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_22(){
  $clinit_Platform$Lifecycle();
  return initValues(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 102, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(102, 6, {3:1, 7:1, 6:1, 102:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum('playn.core', 'Platform/Lifecycle', 102, Ljava_lang_Enum_2_classLit, values_22);
function $forward(this$static, kind, isTouch, source){
  var event_0;
  if (!this$static.enabled || !this$static.events._listeners)
    return;
  event_0 = new Pointer$Event(source.flags, source.time, source.x_0, source.y_0, kind, isTouch);
  $dispatchEvent(this$static.plat, this$static.events, event_0);
}

defineClass(337, 1, {});
_.enabled = true;
var Lplayn_core_Pointer_2_classLit = createForClass('playn.core', 'Pointer', 337, Ljava_lang_Object_2_classLit);
function $onEmit_9(this$static, event_0){
  var bevent;
  if (instanceOf(event_0, 172)) {
    this$static.dragging && $forward(this$static.this$01, ($clinit_Pointer$Event$Kind() , DRAG), false, event_0);
  }
   else if (instanceOf(event_0, 130)) {
    bevent = event_0;
    if (bevent.button_0 == ($clinit_Mouse$ButtonEvent$Id() , LEFT_1)) {
      this$static.dragging = bevent.down;
      $forward(this$static.this$01, bevent.down?($clinit_Pointer$Event$Kind() , START):($clinit_Pointer$Event$Kind() , END_0), false, bevent);
    }
  }
}

function Pointer$1(this$0){
  this.this$01 = this$0;
}

defineClass(342, 607, {}, Pointer$1);
_.onEmit_0 = function onEmit_14(event_0){
  $onEmit_9(this, event_0);
}
;
_.dragging = false;
var Lplayn_core_Pointer$1_2_classLit = createForClass('playn.core', 'Pointer/1', 342, Lreact_Slot_2_classLit);
function $onEmit_10(this$static, events){
  var event_0, event$index, event$max;
  for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
    event_0 = events[event$index];
    this$static.active == -1 && event_0.kind.isStart && (this$static.active = event_0.id_0);
    if (event_0.id_0 == this$static.active) {
      $forward(this$static.this$01, ($clinit_Pointer$Event$Kind() , initValues(getClassLiteralForArray(Lplayn_core_Pointer$Event$Kind_2_classLit, 1), $intern_1, 74, 0, [START, DRAG, END_0, CANCEL]))[event_0.kind.ordinal], true, event_0);
      event_0.kind.isEnd && (this$static.active = -1);
    }
  }
}

function Pointer$2(this$0){
  this.this$01 = this$0;
}

defineClass(343, 607, {}, Pointer$2);
_.onEmit_0 = function onEmit_15(events){
  $onEmit_10(this, events);
}
;
_.active = -1;
var Lplayn_core_Pointer$2_2_classLit = createForClass('playn.core', 'Pointer/2', 343, Lreact_Slot_2_classLit);
function Pointer$Event(flags, time, x_0, y_0, kind, isTouch){
  Event$XY.call(this, flags, time, x_0, y_0);
  this.kind = kind;
  this.isTouch = isTouch;
}

defineClass(341, 47, $intern_40, Pointer$Event);
_.addFields = function addFields_6(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_5((builder.string += ', kind=' , builder), this.kind);
  $append_7((builder.string += ', touch=' , builder), this.isTouch);
}
;
_.name_1 = function name_10(){
  return 'Pointer';
}
;
_.isTouch = false;
var Lplayn_core_Pointer$Event_2_classLit = createForClass('playn.core', 'Pointer/Event', 341, Lplayn_core_Event$XY_2_classLit);
function $clinit_Pointer$Event$Kind(){
  $clinit_Pointer$Event$Kind = emptyMethod;
  START = new Pointer$Event$Kind('START', 0, true, false);
  DRAG = new Pointer$Event$Kind('DRAG', 1, false, false);
  END_0 = new Pointer$Event$Kind('END', 2, false, true);
  CANCEL = new Pointer$Event$Kind('CANCEL', 3, false, true);
}

function Pointer$Event$Kind(enum$name, enum$ordinal, isStart, isEnd){
  Enum.call(this, enum$name, enum$ordinal);
  this.isStart = isStart;
  this.isEnd = isEnd;
}

function values_23(){
  $clinit_Pointer$Event$Kind();
  return initValues(getClassLiteralForArray(Lplayn_core_Pointer$Event$Kind_2_classLit, 1), $intern_1, 74, 0, [START, DRAG, END_0, CANCEL]);
}

defineClass(74, 6, {3:1, 7:1, 6:1, 74:1}, Pointer$Event$Kind);
_.isEnd = false;
_.isStart = false;
var CANCEL, DRAG, END_0, START;
var Lplayn_core_Pointer$Event$Kind_2_classLit = createForEnum('playn.core', 'Pointer/Event/Kind', 74, Ljava_lang_Enum_2_classLit, values_23);
defineClass(406, 622, $intern_20);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass('playn.core', 'TexturedBatch', 406, Lplayn_core_GLBatch_2_classLit);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, 0, 0, right, top_0, sr, 0, left, bottom, 0, sb, right, bottom, sr, sb);
}

function $addQuad_0(this$static, tex, tint, xf, x_0, y_0, w, h){
  var sb, sr;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  sr = tex.config.repeatX?w / tex.displayWidth:1;
  sb = tex.config.repeatY?h / tex.displayHeight:1;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, x_0, y_0, x_0 + w, y_0 + h, sr, sb);
}

function QuadBatch(gl){
  this.gl = gl;
}

defineClass(207, 406, $intern_20);
var Lplayn_core_QuadBatch_2_classLit = createForClass('playn.core', 'QuadBatch', 207, Lplayn_core_TexturedBatch_2_classLit);
function $clinit_Scale(){
  $clinit_Scale = emptyMethod;
  ONE = new Scale(1);
}

function $computePath(scale){
  var scaleFactor;
  if (scale <= 1)
    return 'images/clouds.png';
  scaleFactor = round_int(scale * 10);
  scaleFactor % 10 == 0 && (scaleFactor = ~~(scaleFactor / 10));
  return 'images/clouds.png'.substr(0, 13) + '@' + scaleFactor + 'x' + 'images/clouds.png'.substr(13, 4);
}

function $getScaledResources(this$static){
  var rscale, rsrcs;
  rsrcs = new ArrayList;
  $add_1(rsrcs, new Scale$ScaledResource(this$static, $computePath(this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add_1(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(rscale)));
  }
  $add_1(rsrcs, new Scale$ScaledResource(ONE, 'images/clouds.png'));
  return rsrcs;
}

function $invScaled(this$static, length_0){
  return length_0 / this$static.factor;
}

function $scaled(this$static, length_0){
  return this$static.factor * length_0;
}

function Scale(factor){
  $clinit_Scale();
  this.factor = factor;
}

defineClass(125, 1, {}, Scale);
_.toString$ = function toString_51(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE;
var Lplayn_core_Scale_2_classLit = createForClass('playn.core', 'Scale', 125, Ljava_lang_Object_2_classLit);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(162, 1, {}, Scale$ScaledResource);
_.toString$ = function toString_52(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass('playn.core', 'Scale/ScaledResource', 162, Ljava_lang_Object_2_classLit);
function $begin_0(this$static){
  $bind(this$static.target);
  $beginBatch(this$static, this$static.batch);
  return this$static;
}

function $beginBatch(this$static, batch){
  batch.begin(this$static.target.this$01.viewPixelWidth, this$static.target.this$01.viewPixelHeight, true);
  return batch;
}

function $clear_0(this$static, red, green, blue, alpha_0){
  $glClearColor(this$static.batch.gl, red, green, blue, alpha_0);
  this$static.batch.gl.glc.clear(16384);
  return this$static;
}

function $combineTint(this$static, tint){
  var otint;
  otint = this$static.tint;
  tint != -1 && (this$static.tint = combine(tint, otint));
  return otint;
}

function $concatenate(this$static, xf, originX, originY){
  var txf;
  txf = this$static.lastTrans;
  multiply_0(txf, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, txf);
  (originX != 0 || originY != 0) && (txf.tx += txf.m00 * -originX + txf.m10 * -originY , txf.ty += txf.m11 * -originY + txf.m01 * -originX , txf);
  return this$static;
}

function $draw(this$static, tile, w, h){
  $addToBatch(tile, this$static.batch, this$static.tint, this$static.lastTrans, w, h);
  return this$static;
}

function $drawLine(this$static, x0, y0, x1, y1, width_0){
  var dx, dy, length_0, temp, wx, wy, xf;
  if (x1 < x0) {
    temp = x0;
    x0 = x1;
    x1 = temp;
    temp = y0;
    y0 = y1;
    y1 = temp;
  }
  dx = x1 - x0;
  dy = y1 - y0;
  length_0 = Math.sqrt(dx * dx + dy * dy);
  wx = dx * (width_0 / 2) / length_0;
  wy = dy * (width_0 / 2) / length_0;
  xf = new AffineTransform;
  $setRotation(xf, Math.atan2(dy, dx));
  $setTranslation_0(xf, x0 + wy, y0 - wx);
  multiply_1(this$static.lastTrans, xf, xf);
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), xf, 0, 0, length_0, width_0);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $fillRect_0(this$static, x_0, y_0, width_0, height){
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), this$static.lastTrans, x_0, y_0, width_0, height);
  return this$static;
}

function $pushScissorState(this$static, x_0, y_0, width_0, height){
  var pr, r;
  this$static.scissorDepth == this$static.scissors.array.length && $add_1(this$static.scissors, new Rectangle_1);
  r = $get_8(this$static.scissors, this$static.scissorDepth);
  if (this$static.scissorDepth == 0)
    $setBounds_0(r, x_0, y_0, width_0, height);
  else {
    pr = $get_8(this$static.scissors, this$static.scissorDepth - 1);
    $setLocation(r, max_1(pr.x_0, x_0), max_1(pr.y_0, y_0));
    $setSize_4(r, max_1(min_1(pr.x_0 + pr.width_0 - 1, x_0 + width_0 - 1) - r.x_0, 0), max_1(min_1(pr.y_0 + pr.height_0 - 1, y_0 + height - 1) - r.y_0, 0));
  }
  ++this$static.scissorDepth;
  return r;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  this$static.transformStack.remove(--tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get_8(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $saveTx(this$static){
  $add_1(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_0(this$static, sx, sy){
  $scale_1(this$static.lastTrans, sx, sy);
  return this$static;
}

function $setAlpha_0(this$static, alpha_0){
  var ialpha;
  ialpha = round_int(255 * (alpha_0 < 0?0:alpha_0 > 1?1:alpha_0));
  this$static.tint = ialpha << 24 | this$static.tint & $intern_23;
  return this$static;
}

function $setFillColor(this$static, color_0){
  this$static.fillColor = color_0;
  return this$static;
}

function $startClipped(this$static, x_0, y_0, width_0, height){
  var r;
  this$static.batch.flush();
  r = $pushScissorState(this$static, x_0, this$static.target.this$01.viewPixelHeight - y_0 - height, width_0, height);
  $glScissor(this$static.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
  this$static.scissorDepth == 1 && $enable(this$static.batch.gl.glc, 3089);
  $checkError(this$static.batch.gl);
  return !(r.width_0 <= 0 || r.height_0 <= 0);
}

function Surface(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  this.scissors = new ArrayList;
  this.target = target;
  this.batch = defaultBatch;
  $add_1(this.transformStack, this.lastTrans = new AffineTransform);
  this.colorTex = $colorTex(gfx);
  $scale_0(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(407, 1, $intern_20, Surface);
_.close_0 = function close_7(){
}
;
_.fillColor = 0;
_.scissorDepth = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass('playn.core', 'Surface', 407, Ljava_lang_Object_2_classLit);
function getBounds(lines, into){
  var bounds, layout, layout$index, layout$max, theight, twidth, xAdjust;
  xAdjust = 0;
  twidth = 0;
  theight = 0;
  for (layout$index = 0 , layout$max = lines.length; layout$index < layout$max; ++layout$index) {
    layout = lines[layout$index];
    bounds = layout.bounds;
    xAdjust = max_0(xAdjust, -min_0(0, bounds.x_0));
    twidth = max_0(twidth, layout.size_0.width_0);
    layout != lines[0] && (theight += $intern_42 * layout.metrics.height_0);
    theight += $intern_43 * layout.metrics.height_0 + $descent(layout.metrics);
  }
  $setBounds(into, xAdjust, 0, xAdjust + twidth, theight);
  return into;
}

function $clinit_TextBlock$Align(){
  $clinit_TextBlock$Align = emptyMethod;
  LEFT_2 = new TextBlock$Align$1;
  CENTER = new TextBlock$Align$2;
  RIGHT_2 = new TextBlock$Align$3;
}

function TextBlock$Align(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_24(){
  $clinit_TextBlock$Align();
  return initValues(getClassLiteralForArray(Lplayn_core_TextBlock$Align_2_classLit, 1), $intern_1, 70, 0, [LEFT_2, CENTER, RIGHT_2]);
}

defineClass(70, 6, $intern_44);
var CENTER, LEFT_2, RIGHT_2;
var Lplayn_core_TextBlock$Align_2_classLit = createForEnum('playn.core', 'TextBlock/Align', 70, Ljava_lang_Enum_2_classLit, values_24);
function TextBlock$Align$1(){
  TextBlock$Align.call(this, 'LEFT', 0);
}

defineClass(534, 70, $intern_44, TextBlock$Align$1);
_.getX = function getX(lineWidth, blockWidth){
  return 0;
}
;
var Lplayn_core_TextBlock$Align$1_2_classLit = createForEnum('playn.core', 'TextBlock/Align/1', 534, Lplayn_core_TextBlock$Align_2_classLit, null);
function TextBlock$Align$2(){
  TextBlock$Align.call(this, 'CENTER', 1);
}

defineClass(535, 70, $intern_44, TextBlock$Align$2);
_.getX = function getX_0(lineWidth, blockWidth){
  return (blockWidth - lineWidth) / 2;
}
;
var Lplayn_core_TextBlock$Align$2_2_classLit = createForEnum('playn.core', 'TextBlock/Align/2', 535, Lplayn_core_TextBlock$Align_2_classLit, null);
function TextBlock$Align$3(){
  TextBlock$Align.call(this, 'RIGHT', 2);
}

defineClass(536, 70, $intern_44, TextBlock$Align$3);
_.getX = function getX_1(lineWidth, blockWidth){
  return blockWidth - lineWidth;
}
;
var Lplayn_core_TextBlock$Align$3_2_classLit = createForEnum('playn.core', 'TextBlock/Align/3', 536, Lplayn_core_TextBlock$Align_2_classLit, null);
function $equals_4(this$static, other){
  var ofmt;
  if (instanceOf(other, 142)) {
    ofmt = other;
    return (this$static.font_0 == ofmt.font_0 || !!this$static.font_0 && $equals_3(this$static.font_0, ofmt.font_0)) && this$static.antialias_0 == ofmt.antialias_0;
  }
   else {
    return false;
  }
}

function $hashCode_1(this$static){
  var hash;
  hash = this$static.antialias_0?1:0;
  !!this$static.font_0 && (hash ^= $hashCode_0(this$static.font_0));
  return hash;
}

defineClass(142, 1, {142:1});
_.equals$ = function equals_29(other){
  return $equals_4(this, other);
}
;
_.hashCode$ = function hashCode_33(){
  return $hashCode_1(this);
}
;
_.toString$ = function toString_53(){
  return '[font=' + this.font_0 + ', antialias=' + this.antialias_0 + ']';
}
;
_.antialias_0 = false;
var Lplayn_core_TextFormat_2_classLit = createForClass('playn.core', 'TextFormat', 142, Ljava_lang_Object_2_classLit);
function TextLayout(text_0, format, bounds, height){
  this.text_0 = text_0;
  this.format = format;
  this.bounds = bounds;
  this.size_0 = new Dimension_0(max_0(bounds.x_0, 0) + bounds.width_0, height);
}

defineClass(146, 1, {146:1});
var Lplayn_core_TextLayout_2_classLit = createForClass('playn.core', 'TextLayout', 146, Ljava_lang_Object_2_classLit);
function $clinit_TextWrap(){
  $clinit_TextWrap = emptyMethod;
  new TextWrap($intern_45);
}

function $hashCode_2(this$static){
  return round_int(this$static.width_0) ^ round_int(this$static.indent);
}

function TextWrap(width_0){
  $clinit_TextWrap();
  this.width_0 = width_0;
  this.indent = 0;
}

defineClass(116, 1, {116:1}, TextWrap);
_.equals$ = function equals_30(other){
  var ow;
  if (instanceOf(other, 116)) {
    ow = other;
    return this.width_0 == ow.width_0 && this.indent == ow.indent;
  }
   else {
    return false;
  }
}
;
_.hashCode$ = function hashCode_34(){
  return $hashCode_2(this);
}
;
_.indent = 0;
_.width_0 = 0;
var Lplayn_core_TextWrap_2_classLit = createForClass('playn.core', 'TextWrap', 116, Ljava_lang_Object_2_classLit);
defineClass(626, 616, {});
_.toString$ = function toString_54(){
  return 'Tile[' + this.displayWidth + 'x' + this.displayHeight + '/' + ($clinit_Points() , toString_67(0, TO_STRING_DECIMAL_PLACES) + toString_67(0, TO_STRING_DECIMAL_PLACES)) + '/' + (toString_67(1, TO_STRING_DECIMAL_PLACES) + toString_67(1, TO_STRING_DECIMAL_PLACES)) + '] <- ' + this;
}
;
var Lplayn_core_Tile_2_classLit = createForClass('playn.core', 'Tile', 626, Lplayn_core_TileSource_2_classLit);
function $addToBatch(this$static, batch, tint, tx, width_0, height){
  $addQuad_0(batch, this$static, tint, tx, 0, 0, width_0, height);
}

function $close_3(this$static){
  if (!this$static.disposed) {
    this$static.disposed = true;
    $glDeleteTexture(this$static.gfx.gl, this$static.id_0);
  }
}

function $release(this$static){
  this$static.config.managed && --this$static.refs == 0 && $close_3(this$static);
}

function $update_0(this$static, image){
  var pixHeight, pixWidth, potHeight, potWidth, scaled;
  if (this$static.config.repeatX || this$static.config.repeatY || this$static.config.mipmaps) {
    pixWidth = image.pixelWidth;
    pixHeight = image.pixelHeight;
    potWidth = $toTexWidth(this$static.config, pixWidth);
    potHeight = $toTexWidth(this$static.config, pixHeight);
    if (potWidth != pixWidth || potHeight != pixHeight) {
      scaled = $createCanvasImpl(this$static.gfx, ($clinit_Scale() , ONE), potWidth, potHeight);
      $draw_0(image, scaled.ctx, potWidth, potHeight);
      $upload(scaled.image, this$static.gfx, this$static);
    }
     else 
      $upload(image, this$static.gfx, this$static);
  }
   else 
    $upload(image, this$static.gfx, this$static);
  this$static.config.mipmaps && (this$static.gfx.gl.glc.generateMipmap(3553) , undefined);
}

function Texture(gfx, id_0, config, pixWidth, pixHeight, scale, dispWidth, dispHeight){
  this.gfx = gfx;
  this.id_0 = id_0;
  this.config = config;
  this.pixelWidth = pixWidth;
  this.pixelHeight = pixHeight;
  this.scale_0 = scale;
  this.displayWidth = dispWidth;
  this.displayHeight = dispHeight;
}

function nextPOT(value_0){
  var bit, count, highest, ii;
  bit = 32768;
  highest = -1;
  count = 0;
  for (ii = 15; ii >= 0; --ii , bit >>= 1) {
    if ((value_0 & bit) == 0)
      continue;
    ++count;
    highest == -1 && (highest = ii);
  }
  return count > 1?1 << highest + 1:value_0;
}

defineClass(414, 626, $intern_20, Texture);
_.close_0 = function close_8(){
  $close_3(this);
}
;
_.toString$ = function toString_55(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
_.refs = 0;
var Lplayn_core_Texture_2_classLit = createForClass('playn.core', 'Texture', 414, Lplayn_core_Tile_2_classLit);
function $clinit_Texture$Config(){
  $clinit_Texture$Config = emptyMethod;
  DEFAULT = new Texture$Config(true);
  UNMANAGED = new Texture$Config(false);
}

function $toTexHeight(this$static, sourceHeight){
  return this$static.repeatY || this$static.mipmaps?nextPOT(sourceHeight):sourceHeight;
}

function $toTexWidth(this$static, sourceWidth){
  return this$static.repeatX || this$static.mipmaps?nextPOT(sourceWidth):sourceWidth;
}

function Texture$Config(managed){
  this.managed = managed;
  this.repeatX = false;
  this.repeatY = false;
  this.minFilter = 9729;
  this.magFilter = 9729;
  this.mipmaps = false;
}

defineClass(213, 1, {}, Texture$Config);
_.toString$ = function toString_56(){
  var repstr;
  repstr = (this.repeatX?'x':'') + (this.repeatY?'y':'');
  return '[managed=' + this.managed + ', repeat=' + repstr + ', filter=' + this.minFilter + '/' + this.magFilter + ', mipmaps=' + this.mipmaps + ']';
}
;
_.magFilter = 0;
_.managed = false;
_.minFilter = 0;
_.mipmaps = false;
_.repeatX = false;
_.repeatY = false;
var DEFAULT, UNMANAGED;
var Lplayn_core_Texture$Config_2_classLit = createForClass('playn.core', 'Texture/Config', 213, Ljava_lang_Object_2_classLit);
function $fragment(){
  var str;
  str = new StringBuilder_1('#ifdef GL_ES\nprecision lowp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n');
  str.string += 'uniform lowp sampler2D u_Texture;\n';
  str.string += 'varying mediump vec2 v_TexCoord;\nvarying lowp vec4 v_Color;\n';
  str.string += 'void main(void) {\n';
  str.string += '  vec4 textureColor = texture2D(u_Texture, v_TexCoord);\n';
  str.string += '  textureColor.rgb *= v_Color.rgb;\n';
  str.string += '  textureColor *= v_Color.a;\n';
  str.string += '  gl_FragColor = textureColor;\n}';
  return str.string;
}

function combine(curTint, tint){
  var newA, newB, newG, newR;
  newA = ((curTint >> 24 & 255) * ((tint >> 24 & 255) + 1) & 65280) << 16;
  if ((tint & $intern_23) == $intern_23) {
    return newA | curTint & $intern_23;
  }
  newR = ((curTint >> 16 & 255) * ((tint >> 16 & 255) + 1) & 65280) << 8;
  newG = (curTint >> 8 & 255) * ((tint >> 8 & 255) + 1) & 65280;
  newB = (curTint & 255) * ((tint & 255) + 1) >> 8 & 255;
  return newA | newR | newG | newB;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, 0, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(124, 47, {35:1, 30:1, 47:1, 124:1, 46:1}, Touch$Event);
_.addFields = function addFields_7(builder){
  $append_4($append_6($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_6($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_6($append_3($append_6($append_4($append_6($append_5((builder.string += ', kind=' , builder), this.kind), ', id='), this.id_0), ', pressure='), this.pressure), ', size='), this.size_0);
}
;
_.name_1 = function name_11(){
  return 'Touch';
}
;
_.id_0 = 0;
_.pressure = 0;
_.size_0 = 0;
var Lplayn_core_Touch$Event_2_classLit = createForClass('playn.core', 'Touch/Event', 124, Lplayn_core_Event$XY_2_classLit);
function $clinit_Touch$Event$Kind(){
  $clinit_Touch$Event$Kind = emptyMethod;
  START_0 = new Touch$Event$Kind('START', 0, true, false);
  MOVE = new Touch$Event$Kind('MOVE', 1, false, false);
  END_1 = new Touch$Event$Kind('END', 2, false, true);
  CANCEL_0 = new Touch$Event$Kind('CANCEL', 3, false, true);
}

function Touch$Event$Kind(enum$name, enum$ordinal, isStart, isEnd){
  Enum.call(this, enum$name, enum$ordinal);
  this.isStart = isStart;
  this.isEnd = isEnd;
}

function values_25(){
  $clinit_Touch$Event$Kind();
  return initValues(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 88, 0, [START_0, MOVE, END_1, CANCEL_0]);
}

defineClass(88, 6, {3:1, 7:1, 6:1, 88:1}, Touch$Event$Kind);
_.isEnd = false;
_.isStart = false;
var CANCEL_0, END_1, MOVE, START_0;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum('playn.core', 'Touch/Event/Kind', 88, Ljava_lang_Enum_2_classLit, values_25);
function $clinit_TriangleBatch(){
  $clinit_TriangleBatch = emptyMethod;
  QUAD_INDICES = initValues(getClassLiteralForArray(I_classLit, 1), $intern_41, 0, 7, [0, 1, 2, 1, 3, 2]);
}

function $addElems(this$static, vertIdx, indices, indicesLen){
  var data_0, ii, ll, offset;
  data_0 = this$static.elements;
  offset = this$static.elemPos;
  for (ii = 0 , ll = indicesLen; ii < ll; ii++) {
    data_0[offset++] = narrow_short(vertIdx + indices[ii]);
  }
  this$static.elemPos = offset;
}

function $beginPrimitive(this$static){
  var availElems, availVerts, elems, vertIdx, verts;
  vertIdx = ~~(this$static.vertPos / 12);
  verts = vertIdx + 4;
  elems = this$static.elemPos + 6;
  availVerts = ~~(this$static.vertices.length / 12);
  availElems = this$static.elements.length;
  if (verts <= availVerts && elems <= availElems)
    return vertIdx;
  $flush_0(this$static);
  verts > availVerts && $expandVerts(this$static, verts);
  elems > availElems && $expandElems(this$static, elems);
  return 0;
}

function $expandElems(this$static, elemCount){
  var newElems;
  newElems = this$static.elements.length;
  while (newElems < elemCount)
    newElems += 96;
  this$static.elements = initDim(S_classLit, $intern_46, 0, newElems, 7, 1);
}

function $expandVerts(this$static, vertCount){
  var newVerts;
  newVerts = ~~(this$static.vertices.length / 12);
  while (newVerts < vertCount)
    newVerts += 64;
  this$static.vertices = initDim(F_classLit, $intern_47, 0, newVerts * 12, 7, 1);
}

function $flush_0(this$static){
  $flush(this$static);
  if (this$static.vertPos > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    if (this$static.delayedBinding) {
      $glBindBuffer(this$static.gl, $intern_48, this$static.verticesId);
      $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
      $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
      $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
      $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
      $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
      $glBindBuffer(this$static.gl, $intern_49, this$static.elementsId);
      $activeTexture(this$static.gl.glc, 33984);
      $glUniform1i(this$static.gl, this$static.uTexture);
      $checkError(this$static.gl);
    }
    $setFloatBuffer(this$static.gl.bufs, this$static.vertices, this$static.vertPos);
    $glBufferData(this$static.gl, $intern_48, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_49, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
    $checkError(this$static.gl);
    $glDrawElements(this$static.gl, this$static.elemPos);
    $checkError(this$static.gl);
    this$static.vertPos = 0;
    this$static.elemPos = 0;
  }
}

function $glBindVertAttrib(this$static, loc, size_0, offset){
  $glEnableVertexAttribArray(this$static.gl, loc);
  $glVertexAttribPointer(this$static.gl, loc, size_0, 5126, 48, offset);
}

function TriangleBatch(gl){
  var ids;
  $clinit_TriangleBatch();
  QuadBatch.call(this, gl);
  this.delayedBinding = $equals_0('Intel', gl.glc.getParameter(7936));
  this.program = new GLProgram(gl, 'uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nattribute vec4 a_Matrix;\nattribute vec2 a_Translation;\nattribute vec2 a_Color;\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nmat3 transform = mat3(\n  a_Matrix[0],      a_Matrix[1],      0,\n  a_Matrix[2],      a_Matrix[3],      0,\n  a_Translation[0], a_Translation[1], 1);\ngl_Position = vec4(transform * vec3(a_Position, 1.0), 1);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_TexCoord;\nfloat red = mod(a_Color.x, 256.0);\nfloat alpha = (a_Color.x - red) / 256.0;\nfloat blue = mod(a_Color.y, 256.0);\nfloat green = (a_Color.y - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.aMatrix = $getAttribLocation_0(this.program, 'a_Matrix');
  this.aTranslation = $getAttribLocation_0(this.program, 'a_Translation');
  this.aColor = $getAttribLocation_0(this.program, 'a_Color');
  this.aPosition = $getAttribLocation_0(this.program, 'a_Position');
  this.aTexCoord = $getAttribLocation_0(this.program, 'a_TexCoord');
  this.stableAttrs = initDim(F_classLit, $intern_47, 0, 8, 7, 1);
  this.vertices = initDim(F_classLit, $intern_47, 0, 768, 7, 1);
  this.elements = initDim(S_classLit, $intern_46, 0, 96, 7, 1);
  ids = initDim(I_classLit, $intern_41, 0, 2, 7, 1);
  $genObjects_0(gl, ids, ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $checkError(gl);
}

function add_6(into, offset, x_0, y_0, sx, sy){
  into[offset++] = x_0;
  into[offset++] = y_0;
  into[offset++] = sx;
  into[offset++] = sy;
  return offset;
}

defineClass(212, 207, $intern_20, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_3;
  stables_0[7] = tint & $intern_3;
  vertIdx = $beginPrimitive(this);
  offset = this.vertPos;
  verts = this.vertices;
  stables = this.stableAttrs;
  offset = add_6(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x1, y1, sx1, sy1);
  offset = add_6(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x2, y2, sx2, sy2);
  offset = add_6(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x3, y3, sx3, sy3);
  offset = add_6(verts, (arraycopy(stables, 0, verts, offset, stables.length) , offset + stables.length), x4, y4, sx4, sy4);
  this.vertPos = offset;
  $addElems(this, vertIdx, QUAD_INDICES, QUAD_INDICES.length);
}
;
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  this.delayedBinding || ($glBindBuffer(this.gl, $intern_48, this.verticesId) , $glBindVertAttrib(this, this.aMatrix, 4, 0) , $glBindVertAttrib(this, this.aTranslation, 2, 16) , $glBindVertAttrib(this, this.aColor, 2, 24) , $glBindVertAttrib(this, this.aPosition, 2, 32) , $glBindVertAttrib(this, this.aTexCoord, 2, 40) , $glBindBuffer(this.gl, $intern_49, this.elementsId) , $activeTexture(this.gl.glc, 33984) , $glUniform1i(this.gl, this.uTexture));
  $checkError(this.gl);
}
;
_.close_0 = function close_9(){
  $close_1(this);
  $close_2(this.program);
  $deleteObjects_0(this.gl, initValues(getClassLiteralForArray(I_classLit, 1), $intern_41, 0, 7, [this.verticesId, this.elementsId]), ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  $checkError(this.gl);
}
;
_.end = function end_1(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aMatrix);
  $glDisableVertexAttribArray(this.gl, this.aTranslation);
  $glDisableVertexAttribArray(this.gl, this.aColor);
  $glDisableVertexAttribArray(this.gl, this.aPosition);
  $glDisableVertexAttribArray(this.gl, this.aTexCoord);
  $checkError(this.gl);
}
;
_.flush = function flush_0(){
  $flush_0(this);
}
;
_.toString$ = function toString_57(){
  return 'tris/' + ~~(this.elements.length / QUAD_INDICES.length);
}
;
_.aColor = 0;
_.aMatrix = 0;
_.aPosition = 0;
_.aTexCoord = 0;
_.aTranslation = 0;
_.delayedBinding = false;
_.elemPos = 0;
_.elementsId = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.vertPos = 0;
_.verticesId = 0;
var QUAD_INDICES;
var Lplayn_core_TriangleBatch_2_classLit = createForClass('playn.core', 'TriangleBatch', 212, Lplayn_core_QuadBatch_2_classLit);
function $flush_1(this$static){
  $flush(this$static);
  if (this$static.quadCounter > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    $glUniform4fv(this$static.gl, this$static.uData, this$static.quadCounter * 3, this$static.data_0);
    $glDrawElements(this$static.gl, this$static.quadCounter * 6);
    $checkError(this$static.gl);
    this$static.quadCounter = 0;
  }
}

function UniformQuadBatch(gl){
  UniformQuadBatch_0.call(this, gl);
}

function UniformQuadBatch_0(gl){
  var base, base0, base1, base2, base3, ee, elems, ids, ii, maxVecs, verts, vv;
  QuadBatch.call(this, gl);
  maxVecs = usableMaxUniformVectors(gl);
  if (maxVecs < 3)
    throw new RuntimeException_0('GL_MAX_VERTEX_UNIFORM_VECTORS too low: have ' + maxVecs + ', need at least ' + 3);
  this.maxQuads = ~~(maxVecs / 3);
  this.program = new GLProgram(gl, $replace_2($replace_2('uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nuniform vec4 u_Data[_VEC4S_PER_QUAD_*_MAX_QUADS_];\nattribute vec3 a_Vertex;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nint index = _VEC4S_PER_QUAD_*int(a_Vertex.z);\nvec4 mat = u_Data[index+0];\nvec4 txc = u_Data[index+1];\nvec4 tcs = u_Data[index+2];\nmat3 transform = mat3(\n  mat.x, mat.y, 0,\n  mat.z, mat.w, 0,\n  txc.x, txc.y, 1);\ngl_Position = vec4(transform * vec3(a_Vertex.xy, 1.0), 1.0);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_Vertex.xy * tcs.xy + txc.zw;\nfloat red = mod(tcs.z, 256.0);\nfloat alpha = (tcs.z - red) / 256.0;\nfloat blue = mod(tcs.w, 256.0);\nfloat green = (tcs.w - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', '_MAX_QUADS_', '' + this.maxQuads), '_VEC4S_PER_QUAD_', '3'), $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.uData = $getUniformLocation_0(this.program, 'u_Data');
  this.aVertex = $getAttribLocation_0(this.program, 'a_Vertex');
  verts = initDim(S_classLit, $intern_46, 0, this.maxQuads * 4 * 3, 7, 1);
  elems = initDim(S_classLit, $intern_46, 0, this.maxQuads * 6, 7, 1);
  vv = 0;
  ee = 0;
  for (ii = 0; ii < this.maxQuads; ii++) {
    verts[vv++] = 0;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 0;
    verts[vv++] = 1;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 1;
    verts[vv++] = ii;
    base = narrow_short(ii * 4);
    base0 = base;
    base1 = ++base;
    base2 = ++base;
    base3 = ++base;
    elems[ee++] = base0;
    elems[ee++] = base1;
    elems[ee++] = base2;
    elems[ee++] = base1;
    elems[ee++] = base3;
    elems[ee++] = base2;
  }
  this.data_0 = initDim(F_classLit, $intern_47, 0, this.maxQuads * 3 * 4, 7, 1);
  ids = initDim(I_classLit, $intern_41, 0, 2, 7, 1);
  $genObjects_0(gl, ids, ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $glBindBuffer(gl, $intern_48, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_48, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_49, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_49, elems.length * 2, gl.bufs.shortBuffer, 35044);
  $checkError(gl);
}

function usableMaxUniformVectors(gl){
  var glErr, maxVecs;
  maxVecs = gl.glc.getParameter(36347) - 3;
  glErr = gl.glc.getError();
  if (glErr != 0)
    throw new RuntimeException_0('Unable to query GL_MAX_VERTEX_UNIFORM_VECTORS,  error ' + glErr);
  return maxVecs;
}

defineClass(211, 207, $intern_20, UniformQuadBatch);
_.addQuad = function addQuad_0(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var dh, dw, pos;
  pos = this.quadCounter * 3 * 4;
  dw = x2 - x1;
  dh = y3 - y1;
  this.data_0[pos++] = m00 * dw;
  this.data_0[pos++] = m01 * dw;
  this.data_0[pos++] = m10 * dh;
  this.data_0[pos++] = m11 * dh;
  this.data_0[pos++] = tx + m00 * x1 + m10 * y1;
  this.data_0[pos++] = ty + m01 * x1 + m11 * y1;
  this.data_0[pos++] = sx1;
  this.data_0[pos++] = sy1;
  this.data_0[pos++] = sx2 - sx1;
  this.data_0[pos++] = sy3 - sy1;
  this.data_0[pos++] = tint >> 16 & $intern_3;
  this.data_0[pos++] = tint & $intern_3;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_1(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_48, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_49, this.elementsId);
  $activeTexture(this.gl.glc, 33984);
  $glUniform1i(this.gl, this.uTexture);
  $checkError(this.gl);
}
;
_.close_0 = function close_10(){
  $close_1(this);
  $close_2(this.program);
  $deleteObjects_0(this.gl, initValues(getClassLiteralForArray(I_classLit, 1), $intern_41, 0, 7, [this.verticesId, this.elementsId]), ($clinit_HtmlGL20$WebGLObjectType() , BUFFER));
  $checkError(this.gl);
}
;
_.end = function end_2(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aVertex);
  $checkError(this.gl);
}
;
_.flush = function flush_1(){
  $flush_1(this);
}
;
_.toString$ = function toString_58(){
  return 'uquad/' + this.maxQuads;
}
;
_.aVertex = 0;
_.elementsId = 0;
_.maxQuads = 0;
_.quadCounter = 0;
_.uData = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.verticesId = 0;
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass('playn.core', 'UniformQuadBatch', 211, Lplayn_core_QuadBatch_2_classLit);
function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); $hasNext_0(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext_0(entry$iterator)) , entry$iterator.current.next_0());
    regExp = entry.getKey();
    !!$exec(new RegExp(regExp), collection) && (clientBundle = entry.getValue());
  }
  return clientBundle;
}

function $getImage(this$static){
  var assetScale, rsrcs;
  assetScale = ($clinit_Scale() , ONE);
  rsrcs = $getScaledResources(assetScale);
  return $getImage_0(this$static, (checkElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).path, (checkElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).scale_0);
}

function $getImage_0(this$static, path, scale){
  var url_0, img;
  url_0 = this$static.pathPrefix + path;
  $getBundle(this$static, path);
  return img = $doc.createElement('img') , 'crossOrigin' in img && img.setAttribute('crossOrigin', 'anonymous') , img.src = url_0 , new HtmlImage_0(this$static.plat.graphics, scale, img, url_0);
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = $moduleBase;
  this.plat = plat;
}

defineClass(266, 606, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass('playn.html', 'HtmlAssets', 266, Lplayn_core_Assets_2_classLit);
function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  types = this.soundController.preferredSoundTypes;
  $debug(plat.log_0, 'Preferred sound type(s): ' + types);
  maybeCreateAudioContext();
}

function maybeCreateAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  try {
    return new webkitAudioContext;
  }
   catch (ignore) {
  }
  return null;
}

defineClass(320, 615, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass('playn.html', 'HtmlAudio', 320, Lplayn_core_Audio_2_classLit);
function $addRoundRectPath(this$static, x_0, y_0, width_0, height, radius){
  var maxx, maxy, midx, midy;
  midx = x_0 + width_0 / 2;
  midy = y_0 + height / 2;
  maxx = x_0 + width_0;
  maxy = y_0 + height;
  $beginPath(this$static.ctx);
  $moveTo(this$static.ctx, x_0, midy);
  $arcTo(this$static.ctx, x_0, y_0, midx, y_0, radius);
  $arcTo(this$static.ctx, maxx, y_0, maxx, midy, radius);
  $arcTo(this$static.ctx, maxx, maxy, midx, maxy, radius);
  $arcTo(this$static.ctx, x_0, maxy, x_0, midy, radius);
  $closePath(this$static.ctx);
}

function $clear_1(this$static){
  return $clearRect_0(this$static, this$static.width_0, this$static.height_0);
}

function $clearRect_0(this$static, width_0, height){
  $clearRect(this$static.ctx, 0, 0, width_0, height);
  return this$static;
}

function $convertLineCap(cap){
  switch (cap.ordinal) {
    case 0:
      return $clinit_Context2d$LineCap() , BUTT;
    case 1:
      return $clinit_Context2d$LineCap() , ROUND;
    case 2:
      return $clinit_Context2d$LineCap() , SQUARE;
  }
  return $clinit_Context2d$LineCap() , SQUARE;
}

function $convertLineJoin(join_0){
  switch (join_0.ordinal) {
    case 0:
      return $clinit_Context2d$LineJoin() , BEVEL;
    case 1:
      return $clinit_Context2d$LineJoin() , MITER;
    case 2:
      return $clinit_Context2d$LineJoin() , ROUND_0;
  }
  return $clinit_Context2d$LineJoin() , ROUND_0;
}

function $createGradient(this$static, config){
  return new HtmlGradient(this$static.ctx, config);
}

function $drawLine_0(this$static, x0, y0, x1, y1){
  $beginPath(this$static.ctx);
  $moveTo(this$static.ctx, x0, y0);
  $lineTo(this$static.ctx, x1, y1);
  $stroke(this$static.ctx);
  return this$static;
}

function $fillCircle(this$static, x_0, y_0, radius){
  $beginPath(this$static.ctx);
  $arc(this$static.ctx, x_0, y_0, radius, 0, $intern_50);
  $fill(this$static.ctx);
  return this$static;
}

function $fillRect_1(this$static, x_0, y_0, w, h){
  $fillRect(this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $fillRoundRect(this$static, x_0, y_0, w, h, radius){
  $addRoundRectPath(this$static, x_0, y_0, w, h, radius);
  $fill(this$static.ctx);
  return this$static;
}

function $fillText_0(this$static, layout, x_0, y_0){
  $fill_0(layout, this$static.ctx, x_0, y_0);
  return this$static;
}

function $save_0(this$static){
  $save(this$static.ctx);
  return this$static;
}

function $setFillColor_0(this$static, color_0){
  $setFillStyleWeb(this$static.ctx, cssColorString(color_0));
  return this$static;
}

function $setFillGradient(this$static, gradient){
  $setFillStyleWeb(this$static.ctx, gradient.gradient);
  return this$static;
}

function $setLineCap_0(this$static, cap){
  $setLineCap(this$static.ctx, $convertLineCap(cap).value_0);
  return this$static;
}

function $setLineJoin_0(this$static, join_0){
  $setLineJoin(this$static.ctx, $convertLineJoin(join_0).value_0);
  return this$static;
}

function $setStrokeColor(this$static, color_0){
  $setStrokeStyleWeb(this$static.ctx, cssColorString(color_0));
  return this$static;
}

function $setStrokeWidth(this$static, w){
  $setLineWidth(this$static.ctx, w);
  return this$static;
}

function $strokeCircle(this$static, radius){
  $beginPath(this$static.ctx);
  $arc(this$static.ctx, 50, 50, radius, 0, $intern_50);
  $stroke(this$static.ctx);
  return this$static;
}

function $strokePath(this$static, path){
  $replay(path, this$static.ctx);
  $stroke(this$static.ctx);
  return this$static;
}

function $strokeText_0(this$static, layout, x_0, y_0){
  $stroke_0(layout, this$static.ctx, x_0, y_0);
  return this$static;
}

function $translate_0(this$static, x_0, y_0){
  $translate(this$static.ctx, x_0, y_0);
  return this$static;
}

function HtmlCanvas(image){
  var scale;
  Canvas_0.call(this, image);
  this.ctx = $getContext2d(image.canvas);
  scale = image.scale_0.factor;
  $scale(this.ctx, scale, scale);
}

defineClass(437, 323, $intern_20, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass('playn.html', 'HtmlCanvas', 437, Lplayn_core_Canvas_2_classLit);
function $clinit_HtmlFont(){
  $clinit_HtmlFont = emptyMethod;
  DEFAULT_0 = new Font_0('sans-serif', ($clinit_Font$Style() , PLAIN), 12);
}

function toCSS(font){
  $clinit_HtmlFont();
  var name_0, style;
  name_0 = font.name_0;
  !$equals_0(name_0.substr(0, 1), '"') && name_0.indexOf(' ') != -1 && (name_0 = '"' + name_0 + '"');
  style = '';
  switch (font.style_0.ordinal) {
    case 1:
      style = 'bold';
      break;
    case 2:
      style = 'italic';
      break;
    case 3:
      style = 'bold italic';
  }
  return style + ' ' + font.size_0 + 'px ' + name_0;
}

var DEFAULT_0;
function $adjustWidth(this$static, width_0){
  switch (this$static.font_0.style_0.ordinal) {
    case 2:
      return width_0 + this$static.emwidth / 8;
    case 3:
      return width_0 + this$static.emwidth / 6;
    default:return width_0;
  }
}

function $descent(this$static){
  return this$static.height_0 - $intern_43 * this$static.height_0;
}

function HtmlFontMetrics(font, height, emwidth){
  this.font_0 = font;
  this.height_0 = height;
  this.emwidth = emwidth;
}

defineClass(579, 1, {}, HtmlFontMetrics);
_.emwidth = 0;
_.height_0 = 0;
var Lplayn_html_HtmlFontMetrics_2_classLit = createForClass('playn.html', 'HtmlFontMetrics', 579, Ljava_lang_Object_2_classLit);
function $createObject(this$static, object, type_0){
  $push(this$static.webGLObjects, object);
  $push_0(this$static.webGLObjectTypes, type_0.ordinal);
  return this$static.webGLObjects.length - 1;
}

function $deleteObject(this$static, index_0, type_0){
  var object;
  object = this$static.webGLObjects[index_0];
  this$static.webGLObjects[index_0] = null;
  this$static.webGLObjectTypes[index_0] = 0;
  switch (type_0.ordinal) {
    case 1:
      $deleteBuffer(this$static.glc, object);
      break;
    case 2:
      $deleteFramebuffer(this$static.glc, object);
      break;
    case 3:
      $deleteProgram(this$static.glc, object);
      break;
    case 4:
      $deleteRenderbuffer(this$static.glc, object);
      break;
    case 5:
      $deleteShader(this$static.glc, object);
      break;
    case 6:
      $deleteTexture(this$static.glc, object);
  }
}

function $deleteObjects(this$static, indices, type_0){
  var i, index_0;
  for (i = 0; i < 1; i++) {
    index_0 = $get_4(indices, indices.position_0 + i);
    $deleteObject(this$static, index_0, type_0);
  }
}

function $deleteObjects_0(this$static, indices, type_0){
  var i;
  for (i = 0; i < 2; i++) {
    $deleteObject(this$static, indices[i], type_0);
  }
}

function $genObject(this$static, type_0){
  switch (type_0.ordinal) {
    case 1:
      return this$static.glc.createBuffer();
    case 2:
      return this$static.glc.createFramebuffer();
    case 3:
      return this$static.glc.createProgram();
    case 4:
      return this$static.glc.createRenderbuffer();
    case 6:
      return this$static.glc.createTexture();
    default:throw new RuntimeException_0('genObject(s) not supported for type ' + type_0);
  }
}

function $genObjects(this$static, names, type_0){
  var i, object;
  for (i = 0; i < 1; i++) {
    object = $genObject(this$static, type_0);
    $put_2(names, i + names.position_0, $createObject(this$static, object, type_0));
  }
}

function $genObjects_0(this$static, names, type_0){
  var i, object;
  for (i = 0; i < 2; i++) {
    object = $genObject(this$static, type_0);
    names[i] = $createObject(this$static, object, type_0);
  }
}

function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 191)) {
    throw new RuntimeException_0('Native buffer required ' + buffer);
  }
  arrayHolder = buffer;
  bufferElementSize = arrayHolder.getElementSize();
  webGLArray = arrayHolder.getTypedArray();
  byteSize == -1 && (byteSize = (buffer.limit - buffer.position_0) * bufferElementSize);
  if (byteSize == buffer.capacity * bufferElementSize && type_0 == arrayHolder.getElementType()) {
    return webGLArray;
  }
  byteOffset = webGLArray.byteOffset + buffer.position_0 * bufferElementSize;
  switch (type_0) {
    case 5126:
      return create_0(webGLArray.buffer, byteOffset, ~~(byteSize / 4));
    case 5121:
      return create_5(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_4(webGLArray.buffer, byteOffset, ~~(byteSize / 2));
    case 5124:
      return create_2(webGLArray.buffer, byteOffset, ~~(byteSize / 4));
    case 5122:
      return create_1(webGLArray.buffer, byteOffset, ~~(byteSize / 2));
    case 5120:
      return create_3(webGLArray.buffer, byteOffset, byteSize);
    default:throw new IllegalArgumentException_0('Type: ' + type_0);
  }
}

function $glBindBuffer(this$static, target, buffer){
  var webGlBuf;
  webGlBuf = this$static.webGLObjects[buffer];
  target == $intern_48?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_49?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.glc, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.glc, 36160, this$static.webGLObjects[0]);
}

function $glBindTexture(this$static, textureId){
  $bindTexture(this$static.glc, 3553, this$static.webGLObjects[textureId]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_48) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.glc, $intern_48, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_49) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.glc, $intern_49, this$static.requestedElementArrayBuffer);
      this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
    }
  }
  $bufferData(this$static.glc, target, $getTypedArray(data_0, 5120, byteSize), usage);
}

function $glClearColor(this$static, f, g, h, i){
  $clearColor(this$static.glc, f, g, h, i);
}

function $glCompileShader(this$static, shader){
  $compileShader(this$static.glc, this$static.webGLObjects[shader]);
}

function $glCreateShader(this$static, type_0){
  return $createObject(this$static, $createShader(this$static.glc, type_0), ($clinit_HtmlGL20$WebGLObjectType() , SHADER));
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.glc, $intern_49, this$static.requestedElementArrayBuffer);
    this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
  }
  $drawElements(this$static.glc, 4, count, 5123, 0);
}

function $glEnableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays |= 1 << index_0;
}

function $glGetAttribLocation(this$static, program, name_0){
  return $getAttribLocation(this$static.glc, this$static.webGLObjects[program], name_0);
}

function $glGetShaderInfoLog(this$static, shader){
  return $getShaderInfoLog(this$static.glc, this$static.webGLObjects[shader]);
}

function $glGetShaderiv(this$static, shader, params){
  params[0] = $getShaderParameterb(this$static.glc, this$static.webGLObjects[shader], 35713)?1:0;
}

function $glGetUniformLocation(this$static, program, name_0){
  return $createObject(this$static, $getUniformLocation(this$static.glc, this$static.webGLObjects[program], name_0), ($clinit_HtmlGL20$WebGLObjectType() , UNIFORM_LOCATION));
}

function $glScissor(this$static, i, j, width_0, height){
  $scissor(this$static.glc, i, j, width_0, height);
}

function $glShaderSource(this$static, shader, string){
  $shaderSource(this$static.glc, this$static.webGLObjects[shader], string);
}

function $glTexImage2D(this$static, image){
  $texImage2D(this$static.glc, 3553, 0, 6408, 6408, 5121, image);
  $checkError(this$static);
}

function $glTexParameteri(this$static, glTextureMinFilter, glFilterMin){
  $texParameteri(this$static.glc, 3553, glTextureMinFilter, glFilterMin);
}

function $glUniform1f(this$static, location_0, x_0){
  $uniform1f(this$static.glc, this$static.webGLObjects[location_0], x_0);
}

function $glUniform1i(this$static, location_0){
  $uniform1i(this$static.glc, this$static.webGLObjects[location_0], 0);
}

function $glUniform2f(this$static, location_0, x_0, y_0){
  $uniform2f(this$static.glc, this$static.webGLObjects[location_0], x_0, y_0);
}

function $glUniform4fv_0(this$static, location_0, count, v){
  $uniform4fv(this$static.glc, this$static.webGLObjects[location_0], $getTypedArray(v, 5126, 16 * count));
}

function $glUseProgram(this$static, program){
  $useProgram(this$static.glc, this$static.webGLObjects[program]);
}

function $glVertexAttribPointer(this$static, indx, size_0, type_0, stride, ptr){
  this$static.useNioBuffer &= ~(1 << indx);
  if (this$static.boundArrayBuffer != this$static.requestedArrayBuffer) {
    $bindBuffer(this$static.glc, $intern_48, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.glc, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.glc, 0, 0, w, h);
}

function $init(this$static, glc){
  var data_0, ii;
  glc.pixelStorei(37441, 1);
  this$static.glc = glc;
  $push(this$static.webGLObjects, null);
  $push_0(this$static.webGLObjectTypes, 0);
  glc.createBuffer();
  for (ii = 0; ii < 5; ii++) {
    data_0 = new HtmlGL20$VertexAttribArrayState;
    data_0.webGlBuffer = glc.createBuffer();
    this$static.vertexAttribArrayState[ii] = data_0;
  }
}

function $prepareDraw(this$static){
  var data_0, elementSize, enabled, i, mask, previousElementSize, previousNio;
  previousNio = null;
  previousElementSize = 0;
  if (this$static.useNioBuffer == 0 && this$static.enabledArrays == this$static.previouslyEnabledArrays) {
    return;
  }
  for (i = 0; i < 5; i++) {
    mask = 1 << i;
    enabled = this$static.enabledArrays & mask;
    enabled != (this$static.previouslyEnabledArrays & mask) && (enabled != 0?$enableVertexAttribArray(this$static.glc, i):$disableVertexAttribArray(this$static.glc, i));
    if (enabled != 0 && (this$static.useNioBuffer & mask) != 0) {
      data_0 = this$static.vertexAttribArrayState[i];
      if (!!previousNio && previousNio.nioBufferLimit >= data_0.nioBufferLimit) {
        if (this$static.boundArrayBuffer != previousNio.webGlBuffer) {
          $bindBuffer(this$static.glc, $intern_48, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.glc, $intern_48, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.nullMethod();
          $bufferData(this$static.glc, $intern_48, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.nullMethod();
          $bufferData(this$static.glc, $intern_48, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
          $vertexAttribPointer(this$static.glc, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, 0);
        }
        null.nullMethod();
      }
    }
  }
  this$static.previouslyEnabledArrays = this$static.enabledArrays;
}

function HtmlGL20(){
  GL20.call(this, new HtmlGL20$1, ($clinit_HtmlUrlParameters() , checkGLErrors));
  this.vertexAttribArrayState = initDim(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_1, 161, 5, 0, 1);
  this.webGLObjects = [];
  this.webGLObjectTypes = [];
}

function getElementSize_3(){
  throw new RuntimeException_0('Unrecognized buffer type: ' + null.nullMethod());
}

defineClass(366, 365, {}, HtmlGL20);
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass('playn.html', 'HtmlGL20', 366, Lplayn_core_GL20_2_classLit);
function $createByteBuffer(size_0){
  var buffer;
  buffer = allocateDirect(size_0);
  $order(buffer, ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER));
  return buffer;
}

function HtmlGL20$1(){
  this.intBuffer = $asIntBuffer($createByteBuffer(128));
  this.floatBuffer = new FloatBuffer($slice($createByteBuffer(128)));
  this.shortBuffer = $asShortBuffer($createByteBuffer(64));
  $createByteBuffer(256);
}

defineClass(368, 367, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass('playn.html', 'HtmlGL20/1', 368, Lplayn_core_GL20$Buffers_2_classLit);
function HtmlGL20$VertexAttribArrayState(){
}

defineClass(161, 1, {161:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass('playn.html', 'HtmlGL20/VertexAttribArrayState', 161, Ljava_lang_Object_2_classLit);
function $clinit_HtmlGL20$WebGLObjectType(){
  $clinit_HtmlGL20$WebGLObjectType = emptyMethod;
  NULL = new HtmlGL20$WebGLObjectType('NULL', 0);
  BUFFER = new HtmlGL20$WebGLObjectType('BUFFER', 1);
  FRAME_BUFFER = new HtmlGL20$WebGLObjectType('FRAME_BUFFER', 2);
  PROGRAM = new HtmlGL20$WebGLObjectType('PROGRAM', 3);
  RENDER_BUFFER = new HtmlGL20$WebGLObjectType('RENDER_BUFFER', 4);
  SHADER = new HtmlGL20$WebGLObjectType('SHADER', 5);
  TEXTURE = new HtmlGL20$WebGLObjectType('TEXTURE', 6);
  UNIFORM_LOCATION = new HtmlGL20$WebGLObjectType('UNIFORM_LOCATION', 7);
}

function HtmlGL20$WebGLObjectType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_26(){
  $clinit_HtmlGL20$WebGLObjectType();
  return initValues(getClassLiteralForArray(Lplayn_html_HtmlGL20$WebGLObjectType_2_classLit, 1), $intern_1, 49, 0, [NULL, BUFFER, FRAME_BUFFER, PROGRAM, RENDER_BUFFER, SHADER, TEXTURE, UNIFORM_LOCATION]);
}

defineClass(49, 6, {3:1, 7:1, 6:1, 49:1}, HtmlGL20$WebGLObjectType);
var BUFFER, FRAME_BUFFER, NULL, PROGRAM, RENDER_BUFFER, SHADER, TEXTURE, UNIFORM_LOCATION;
var Lplayn_html_HtmlGL20$WebGLObjectType_2_classLit = createForEnum('playn.html', 'HtmlGL20/WebGLObjectType', 49, Ljava_lang_Enum_2_classLit, values_26);
function HtmlGradient(ctx, config){
  var ii;
  this.gradient = $createLinearGradient(ctx, config.x0, config.y0, config.x1, config.y1);
  for (ii = 0; ii < config.colors.length; ++ii) {
    $addColorStop(this.gradient, config.positions[ii], cssColorString(config.colors[ii]));
  }
}

defineClass(583, 654, {}, HtmlGradient);
var Lplayn_html_HtmlGradient_2_classLit = createForClass('playn.html', 'HtmlGradient', 583, Lplayn_core_Gradient_2_classLit);
function $createCanvasImpl(this$static, scale, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  $setWidth(elem, pixelWidth);
  $setHeight(elem, pixelHeight);
  return new HtmlCanvas(new HtmlImage(this$static, scale, elem));
}

function $getFontMetrics(this$static, font){
  var emwidth, height, metrics;
  metrics = $get_6(this$static.fontMetrics, font);
  if (!metrics) {
    this$static.measureElement.style['fontSize'] = font.size_0 + ($clinit_Style$Unit() , 'px');
    this$static.measureElement.style['fontWeight'] = ($clinit_Style$FontWeight() , 'normal');
    this$static.measureElement.style['fontStyle'] = ($clinit_Style$FontStyle() , 'normal');
    $setPropertyImpl(this$static.measureElement.style, 'fontFamily', font.name_0);
    $setInnerText(this$static.measureElement, 'THEQUICKBROWNFOXJUMPEDOVERTHELAZYDOGthequickbrownfoxjumpedoverthelazydog_-+!.,[]0123456789');
    switch (font.style_0.ordinal) {
      case 1:
        this$static.measureElement.style['fontWeight'] = 'bold';
        break;
      case 2:
        this$static.measureElement.style['fontStyle'] = 'italic';
        break;
      case 3:
        this$static.measureElement.style['fontWeight'] = 'bold';
        this$static.measureElement.style['fontStyle'] = 'italic';
    }
    height = $getSubPixelOffsetHeight(this$static.measureElement) | 0;
    $setInnerText(this$static.measureElement, 'm');
    emwidth = $getSubPixelOffsetWidth(this$static.measureElement) | 0;
    metrics = new HtmlFontMetrics(font, height, emwidth);
    $put_4(this$static.fontMetrics, font, metrics);
  }
  return metrics;
}

function $setSize(this$static, width_0, height){
  var fbScale;
  this$static.rootElement.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  this$static.rootElement.style['height'] = height + 'px';
  fbScale = new Scale(this$static.frameBufferPixelRatio);
  $setWidth(this$static.canvas, iceil(fbScale.factor * width_0));
  $setHeight(this$static.canvas, iceil(fbScale.factor * height));
  this$static.canvas.style['width'] = width_0 + 'px';
  this$static.canvas.style['height'] = height + 'px';
  $viewportChanged(this$static, this$static.canvas.width, this$static.canvas.height);
}

function $transformMouse(this$static, x_0, y_0){
  return $set_3(this$static.mousePoint, x_0 / this$static.mouseScale, y_0 / this$static.mouseScale);
}

function $updateTexture(this$static, tex, img){
  $glBindTexture(this$static.gl, tex);
  $glTexImage2D(this$static.gl, img);
}

function HtmlGraphics(plat, config){
  var attrs, doc, glc, root;
  Graphics.call(this, plat, new HtmlGL20, new Scale(config.scaleFactor));
  this.fontMetrics = new HashMap;
  this.mousePoint = new Point;
  new Dimension;
  this.frameBufferPixelRatio = config.frameBufferPixelRatio;
  this.mouseScale = config.scaleFactor / this.frameBufferPixelRatio;
  doc = $doc;
  this.dummyCanvas = doc.createElement('canvas');
  this.dummyCtx = $getContext2d(this.dummyCanvas);
  root = $getElementById(doc, config.rootId);
  if (!root) {
    root = doc.createElement('div');
    root.setAttribute('style', 'width: 640px; height: 480px');
    $appendChild(doc.body, root);
  }
   else {
    root.innerHTML = '';
  }
  this.rootElement = root;
  this.measureElement = doc.createElement('div');
  this.measureElement.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this.measureElement.style['position'] = ($clinit_Style$Position() , 'absolute');
  this.measureElement.style['top'] = ($clinit_Style$Unit() , '-500.0px');
  this.measureElement.style['overflow'] = ($clinit_Style$Overflow() , 'visible');
  this.measureElement.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $appendChild(root, this.measureElement);
  this.canvas = $doc.createElement('canvas');
  $appendChild(root, this.canvas);
  $setSize(this, $getSubPixelOffsetWidth(root) | 0, $getSubPixelOffsetHeight(root) | 0);
  attrs = {premultipliedAlpha:false};
  attrs.alpha = false;
  $setAntialias(attrs, config.antiAliasing);
  glc = getContext(this.canvas, attrs);
  if (!glc)
    throw new RuntimeException_0('Unable to create GL context');
  $init(this.gl, glc);
}

function cssColorString(color_0){
  var a, b, g, r;
  a = (color_0 >> 24 & 255) / 255;
  r = color_0 >> 16 & 255;
  g = color_0 >> 8 & 255;
  b = color_0 & 255;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

defineClass(300, 299, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass('playn.html', 'HtmlGraphics', 300, Lplayn_core_Graphics_2_classLit);
function $draw_0(this$static, ctx, width_0, height){
  $drawImage(ctx, this$static.img, 0, 0, width_0, height);
}

function $upload(this$static, gfx, tex){
  $updateTexture(gfx, tex.id_0, this$static.img);
}

function HtmlImage(gfx, scale, elem){
  ImageImpl.call(this, gfx, scale, elem.width, elem.height, elem);
  this.canvas = elem;
}

function HtmlImage_0(gfx, scale, elem, source){
  var pstate;
  ImageImpl_0.call(this, gfx, new RPromise, scale, elem.width, elem.height, source);
  this.img = elem;
  pstate = this.state;
  if (this.img.complete)
    $updateAndNotify_0(pstate._result, new Try$Success(this), false);
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, pstate), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this, pstate), false);
  }
}

defineClass(210, 208, {}, HtmlImage, HtmlImage_0);
_.toString$ = function toString_59(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass('playn.html', 'HtmlImage', 210, Lplayn_core_ImageImpl_2_classLit);
function HtmlImage$1(this$0, val$pstate){
  this.this$01 = this$0;
  this.val$pstate2 = val$pstate;
}

defineClass(412, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  this.this$01.pixelWidth = this.this$01.img.width;
  this.this$01.pixelHeight = this.this$01.img.height;
  $succeed(this.val$pstate2, this.this$01);
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass('playn.html', 'HtmlImage/1', 412, Ljava_lang_Object_2_classLit);
function HtmlImage$2(this$0, val$pstate){
  this.this$01 = this$0;
  this.val$pstate2 = val$pstate;
}

defineClass(413, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  $fail(this.val$pstate2, new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass('playn.html', 'HtmlImage/2', 413, Ljava_lang_Object_2_classLit);
function $dispatch_0(this$static, event_0, nevent){
  try {
    $setFlag_0(event_0, modifierFlags($eventGetAltKey(nevent), $eventGetCtrlKey(nevent), $eventGetMetaKey(nevent), $eventGetShiftKey(nevent)));
    $dispatchEvent(this$static.plat, this$static.keyboardEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
  }
}

function $dispatch_1(this$static, event_0, nevent){
  try {
    $setFlag_0(event_0, modifierFlags($eventGetAltKey(nevent), $eventGetCtrlKey(nevent), $eventGetMetaKey(nevent), $eventGetShiftKey(nevent)));
    $dispatchEvent(this$static.plat, this$static.mouseEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
  }
}

function $dispatch_2(this$static, events, nevent){
  var event_0, event$index, event$max;
  try {
    $dispatchEvent(this$static.plat, this$static.touchEvents, events);
  }
   finally {
    for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
      event_0 = events[event$index];
      (event_0.flags & 1) != 0 && $eventPreventDefault(nevent);
    }
  }
}

function $handleRequestsInUserEventContext(this$static){
  this$static.isRequestingMouseLock && !$isMouseLocked() && $requestMouseLockImpl(this$static.rootElement);
}

function $isMouseLocked(){
  return !!($doc.pointerLockElement || $doc.webkitPointerLockElement || $doc.mozPointerLockElement);
}

function $requestMouseLockImpl(element){
  element.requestPointerLock = element.requestPointerLock || element.webkitRequestPointerLock || element.mozRequestPointerLock;
  element.requestPointerLock && element.requestPointerLock();
}

function $toTouchEvents(this$static, kind, nevent){
  var id_0, nativeTouches, nativeTouchesLen, t, time, touch, touches, x_0, xy, y_0;
  nativeTouches = nevent.changedTouches;
  nativeTouchesLen = nativeTouches.length;
  touches = initDim(Lplayn_core_Touch$Event_2_classLit, $intern_1, 124, nativeTouchesLen, 0, 1);
  time = now_2();
  for (t = 0; t < nativeTouchesLen; t++) {
    touch = nativeTouches[t];
    x_0 = $getRelativeX(touch, this$static.rootElement);
    y_0 = $getRelativeY(touch, this$static.rootElement);
    xy = $transformMouse(this$static.plat.graphics, x_0, y_0);
    id_0 = nevent.changedTouches[t].identifier || 0;
    touches[t] = new Touch$Event(time, xy.x_0, xy.y_0, kind, id_0);
  }
  return touches;
}

function HtmlInput(hplat, root){
  this.mouseEvents = ($clinit_AbstractSignal() , new Signal);
  this.touchEvents = new Signal;
  this.keyboardEvents = new Signal;
  this.lastMousePt = new Point;
  this.plat = hplat;
  this.rootElement = root;
  capturePageEvent('keydown', new HtmlInput$1(this));
  capturePageEvent('keypress', new HtmlInput$2(this));
  capturePageEvent('keyup', new HtmlInput$3(this));
  new HtmlInput$EventCloseHandler($doc, 'contextmenu', new HtmlInput$4, false);
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousedown', new HtmlInput$5(this, this), true);
  capturePageEvent('mouseup', new HtmlInput$6(this, this));
  capturePageEvent('mousemove', new HtmlInput$7(this));
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousemove', new HtmlInput$8(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, getMouseWheelEvent(), new HtmlInput$9(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, 'touchstart', new HtmlInput$10(this), true);
  capturePageEvent('touchmove', new HtmlInput$11(this));
  capturePageEvent('touchend', new HtmlInput$12(this));
}

function capturePageEvent(name_0, handler){
  return new HtmlInput$EventCloseHandler($doc, name_0, handler, true);
}

function getMouseButton(evt){
  switch ($eventGetButton(evt)) {
    case 1:
      return $clinit_Mouse$ButtonEvent$Id() , LEFT_1;
    case 4:
      return $clinit_Mouse$ButtonEvent$Id() , MIDDLE_0;
    case 2:
      return $clinit_Mouse$ButtonEvent$Id() , RIGHT_1;
    default:return null;
  }
}

function getMouseWheelEvent(){
  if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    return 'DOMMouseScroll';
  }
   else {
    return 'mousewheel';
  }
}

function getMouseWheelVelocity(evt){
  var delta = 0;
  var agentInfo = ($clinit_HtmlPlatform() , agentInfo_0);
  if (agentInfo.isFirefox) {
    agentInfo.isMacOS?(delta = 1 * evt.detail):(delta = 1 * evt.detail / 3);
  }
   else if (agentInfo.isOpera) {
    agentInfo.isLinux?(delta = -1 * evt.wheelDelta / 80):(delta = -1 * evt.wheelDelta / 40);
  }
   else if (agentInfo.isChrome || agentInfo.isSafari) {
    delta = -1 * evt.wheelDelta / 120;
    Math.abs(delta) < 1 && (agentInfo.isWindows?(delta = -1 * evt.wheelDelta):agentInfo.isMacOS && (delta = -1 * evt.wheelDelta / 3));
  }
  return delta;
}

function getRelativeX(e, target){
  return (((e.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument)) / experimentalScale;
}

function getRelativeY(e, target){
  return (((e.clientY || 0) | 0) - $getAbsoluteTop(target) + ($getSubPixelScrollTop(target) | 0) + $getScrollTop(target.ownerDocument)) / experimentalScale;
}

function keyForCode(keyCode){
  switch (keyCode) {
    case 18:
      return $clinit_Key() , ALT;
    case 8:
      return $clinit_Key() , BACKSPACE;
    case 17:
      return $clinit_Key() , CONTROL;
    case 46:
      return $clinit_Key() , DELETE;
    case 40:
      return $clinit_Key() , DOWN_0;
    case 35:
      return $clinit_Key() , END;
    case 13:
      return $clinit_Key() , ENTER;
    case 27:
      return $clinit_Key() , ESCAPE;
    case 36:
      return $clinit_Key() , HOME;
    case 37:
      return $clinit_Key() , LEFT_0;
    case 34:
      return $clinit_Key() , PAGE_DOWN;
    case 33:
      return $clinit_Key() , PAGE_UP;
    case 39:
      return $clinit_Key() , RIGHT_0;
    case 16:
      return $clinit_Key() , SHIFT;
    case 9:
      return $clinit_Key() , TAB;
    case 38:
      return $clinit_Key() , UP_0;
    case 19:
      return $clinit_Key() , PAUSE;
    case 20:
      return $clinit_Key() , CAPS_LOCK;
    case 32:
      return $clinit_Key() , SPACE;
    case 45:
      return $clinit_Key() , INSERT;
    case 48:
      return $clinit_Key() , K0;
    case 49:
      return $clinit_Key() , K1;
    case 50:
      return $clinit_Key() , K2;
    case 51:
      return $clinit_Key() , K3;
    case 52:
      return $clinit_Key() , K4;
    case 53:
      return $clinit_Key() , K5;
    case 54:
      return $clinit_Key() , K6;
    case 55:
      return $clinit_Key() , K7;
    case 56:
      return $clinit_Key() , K8;
    case 57:
      return $clinit_Key() , K9;
    case 65:
      return $clinit_Key() , A;
    case 66:
      return $clinit_Key() , B;
    case 67:
      return $clinit_Key() , C;
    case 68:
      return $clinit_Key() , D;
    case 69:
      return $clinit_Key() , E_0;
    case 70:
      return $clinit_Key() , F_0;
    case 71:
      return $clinit_Key() , G;
    case 72:
      return $clinit_Key() , H;
    case 73:
      return $clinit_Key() , I;
    case 74:
      return $clinit_Key() , J;
    case 75:
      return $clinit_Key() , K;
    case 76:
      return $clinit_Key() , L;
    case 77:
      return $clinit_Key() , M;
    case 78:
      return $clinit_Key() , N;
    case 79:
      return $clinit_Key() , O;
    case 80:
      return $clinit_Key() , P;
    case 81:
      return $clinit_Key() , Q;
    case 82:
      return $clinit_Key() , R;
    case 83:
      return $clinit_Key() , S;
    case 84:
      return $clinit_Key() , T;
    case 85:
      return $clinit_Key() , U;
    case 86:
      return $clinit_Key() , V;
    case 87:
      return $clinit_Key() , W;
    case 88:
      return $clinit_Key() , X;
    case 89:
      return $clinit_Key() , Y;
    case 90:
      return $clinit_Key() , Z;
    case 92:
    case 91:
      return $clinit_Key() , WINDOWS;
    case 96:
      return $clinit_Key() , NP0;
    case 97:
      return $clinit_Key() , NP1;
    case 98:
      return $clinit_Key() , NP2;
    case 99:
      return $clinit_Key() , NP3;
    case 100:
      return $clinit_Key() , NP4;
    case 101:
      return $clinit_Key() , NP5;
    case 102:
      return $clinit_Key() , NP6;
    case 103:
      return $clinit_Key() , NP7;
    case 104:
      return $clinit_Key() , NP8;
    case 105:
      return $clinit_Key() , NP9;
    case 106:
      return $clinit_Key() , NP_MULTIPLY;
    case 107:
      return $clinit_Key() , NP_ADD;
    case 109:
      return $clinit_Key() , NP_SUBTRACT;
    case 110:
      return $clinit_Key() , NP_DECIMAL;
    case 111:
      return $clinit_Key() , NP_DIVIDE;
    case 112:
      return $clinit_Key() , F1;
    case 113:
      return $clinit_Key() , F2;
    case 114:
      return $clinit_Key() , F3;
    case 115:
      return $clinit_Key() , F4;
    case 116:
      return $clinit_Key() , F5;
    case 117:
      return $clinit_Key() , F6;
    case 118:
      return $clinit_Key() , F7;
    case 119:
      return $clinit_Key() , F8;
    case 120:
      return $clinit_Key() , F9;
    case 121:
      return $clinit_Key() , F10;
    case 122:
      return $clinit_Key() , F11;
    case 123:
      return $clinit_Key() , F12;
    case 144:
      return $clinit_Key() , NP_NUM_LOCK;
    case 145:
      return $clinit_Key() , SCROLL_LOCK;
    case 186:
      return $clinit_Key() , SEMICOLON;
    case 187:
      return $clinit_Key() , EQUALS;
    case 188:
      return $clinit_Key() , COMMA;
    case 189:
      return $clinit_Key() , MINUS;
    case 190:
      return $clinit_Key() , PERIOD;
    case 191:
      return $clinit_Key() , SLASH;
    case 192:
      return $clinit_Key() , BACKQUOTE;
    case 219:
      return $clinit_Key() , LEFT_BRACKET;
    case 220:
      return $clinit_Key() , BACKSLASH;
    case 221:
      return $clinit_Key() , RIGHT_BRACKET;
    case 222:
      return $clinit_Key() , QUOTE;
    default:return $clinit_Key() , UNKNOWN;
  }
}

defineClass(307, 306, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass('playn.html', 'HtmlInput', 307, Lplayn_core_Input_2_classLit);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(308, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode($eventGetKeyCode(nevent));
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass('playn.html', 'HtmlInput/1', 308, Ljava_lang_Object_2_classLit);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(317, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START_0), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass('playn.html', 'HtmlInput/10', 317, Ljava_lang_Object_2_classLit);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(318, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass('playn.html', 'HtmlInput/11', 318, Ljava_lang_Object_2_classLit);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(319, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_1), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass('playn.html', 'HtmlInput/12', 319, Ljava_lang_Object_2_classLit);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(158, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass('playn.html', 'HtmlInput/1XYEventHandler', 158, Ljava_lang_Object_2_classLit);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(199, 158, {});
_.handleEvent_0 = function handleEvent_6(ev, x_0, y_0){
  var dx, dy;
  if (this.lastX == -1) {
    this.lastX = x_0;
    this.lastY = y_0;
  }
  if (this.this$01.inDragSequence == this.wantDragSequence()) {
    if ($isMouseLocked()) {
      dx = ev.webkitMovementX;
      dy = ev.webkitMovementY;
    }
     else {
      dx = x_0 - this.lastX;
      dy = y_0 - this.lastY;
    }
    $dispatch_1(this.this$01, new Mouse$MotionEvent(now_2(), x_0, y_0, dx, dy), ev);
  }
  this.lastX = x_0;
  this.lastY = y_0;
  $set_3(this.this$01.lastMousePt, x_0, y_0);
}
;
_.lastX = -1;
_.lastY = -1;
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass('playn.html', 'HtmlInput/1MoveEventHandler', 199, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(309, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_2(), (nevent.charCode || 0) & $intern_3), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass('playn.html', 'HtmlInput/2', 309, Ljava_lang_Object_2_classLit);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(310, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode($eventGetKeyCode(nevent));
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass('playn.html', 'HtmlInput/3', 310, Ljava_lang_Object_2_classLit);
function HtmlInput$4(){
}

defineClass(311, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  $eventPreventDefault(evt);
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass('playn.html', 'HtmlInput/4', 311, Ljava_lang_Object_2_classLit);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(312, 158, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass('playn.html', 'HtmlInput/5', 312, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(313, 158, {}, HtmlInput$6);
_.handleEvent_0 = function handleEvent_11(ev, x_0, y_0){
  var btn;
  if (this.this$02.inDragSequence) {
    this.this$02.inDragSequence = false;
    btn = getMouseButton(ev);
    !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, false), ev);
  }
  $handleRequestsInUserEventContext(this.this$02);
}
;
var Lplayn_html_HtmlInput$6_2_classLit = createForClass('playn.html', 'HtmlInput/6', 313, Lplayn_html_HtmlInput$1XYEventHandler_2_classLit);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(314, 199, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass('playn.html', 'HtmlInput/7', 314, Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(315, 199, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass('playn.html', 'HtmlInput/8', 315, Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(316, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_2(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass('playn.html', 'HtmlInput/9', 316, Ljava_lang_Object_2_classLit);
function $addEventListener(closeHandler, target, name_0, handler, capture){
  var listener = function(e){
    handler.handleEvent(e);
  }
  ;
  target.addEventListener(name_0, listener, capture);
  closeHandler.setListener(listener);
}

function HtmlInput$EventCloseHandler(target, name_0, eventHandler, capture){
  $addEventListener(this, target, name_0, eventHandler, capture);
}

defineClass(62, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass('playn.html', 'HtmlInput/EventCloseHandler', 62, Ljava_lang_Object_2_classLit);
defineClass(298, 297, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass('playn.html', 'HtmlLog', 298, Lplayn_core_Log_2_classLit);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(354, 298, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass('playn.html', 'HtmlLogSimple', 354, Lplayn_html_HtmlLog_2_classLit);
function $bezierTo(this$static){
  $push_1(this$static.list, 3);
  $push_1(this$static.list, 35);
  $push_1(this$static.list, 76);
  $push_1(this$static.list, 65);
  $push_1(this$static.list, 76);
  $push_1(this$static.list, 75);
  $push_1(this$static.list, 68);
  return this$static;
}

function $moveTo_0(this$static){
  $push_1(this$static.list, 0);
  $push_1(this$static.list, 25);
  $push_1(this$static.list, 68);
  return this$static;
}

function $replay(this$static, ctx){
  var c1x, c1y, c2x, c2y, cpx, cpy, i, len, x_0, y_0;
  $beginPath(ctx);
  len = this$static.list.length;
  i = 0;
  while (i < len) {
    switch (round_int(this$static.list[i++])) {
      case 0:
        {
          x_0 = this$static.list[i++];
          y_0 = this$static.list[i++];
          $moveTo(ctx, x_0, y_0);
          break;
        }

      case 1:
        {
          x_0 = this$static.list[i++];
          y_0 = this$static.list[i++];
          $lineTo(ctx, x_0, y_0);
          break;
        }

      case 2:
        {
          cpx = this$static.list[i++];
          cpy = this$static.list[i++];
          x_0 = this$static.list[i++];
          y_0 = this$static.list[i++];
          ctx.quadraticCurveTo(cpx, cpy, x_0, y_0);
          break;
        }

      case 3:
        {
          c1x = this$static.list[i++];
          c1y = this$static.list[i++];
          c2x = this$static.list[i++];
          c2y = this$static.list[i++];
          x_0 = this$static.list[i++];
          y_0 = this$static.list[i++];
          ctx.bezierCurveTo(c1x, c1y, c2x, c2y, x_0, y_0);
          break;
        }

      case 4:
        {
          $closePath(ctx);
          break;
        }

      default:throw new AssertionError_0('Corrupt command list');
    }
  }
}

function HtmlPath(){
  this.list = [];
}

defineClass(580, 1, {}, HtmlPath);
var Lplayn_html_HtmlPath_2_classLit = createForClass('playn.html', 'HtmlPath', 580, Ljava_lang_Object_2_classLit);
function $clinit_HtmlPlatform(){
  var userAgent;
  $clinit_HtmlPlatform = emptyMethod;
  agentInfo_0 = (userAgent = navigator.userAgent.toLowerCase() , {isFirefox:userAgent.indexOf('firefox') != -1, isChrome:userAgent.indexOf('chrome') != -1, isSafari:userAgent.indexOf('safari') != -1, isOpera:userAgent.indexOf('opera') != -1, isIE:userAgent.indexOf('msie') != -1, isMacOS:userAgent.indexOf('mac') != -1, isLinux:userAgent.indexOf('linux') != -1, isWindows:userAgent.indexOf('win') != -1});
}

function $listenForVisibilityChange(plat){
  $doc.addEventListener('visibilitychange', function(){
    plat.visibilityChanged();
  }
  , false);
}

function $requestAnimationFrame(callback){
  var fn = function(){
    callback.run();
  }
  ;
  $wnd.requestAnimationFrame?$wnd.requestAnimationFrame(fn):$wnd.mozRequestAnimationFrame?$wnd.mozRequestAnimationFrame(fn):$wnd.webkitRequestAnimationFrame?$wnd.webkitRequestAnimationFrame(fn):$wnd.setTimeout(fn, 20);
}

function $scheduleBackgroundFrame(millis, callback){
  $wnd.setTimeout(function(){
    callback.run();
  }
  , millis);
}

function $tick(this$static){
  return round_int(now_2() - this$static.start_0);
}

function HtmlPlatform(config){
  $clinit_HtmlPlatform();
  var e;
  this.lifecycle = ($clinit_AbstractSignal() , new Signal);
  this.frame_0 = new Signal;
  this.errors = new Signal;
  this.start_0 = initNow();
  this.log_0 = new HtmlLogSimple;
  new Exec$Default(this);
  setUncaughtExceptionHandler(new HtmlPlatform$1(this));
  $info_0(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    new HtmlAudio(this);
    this.assets = new HtmlAssets(this);
    new HtmlStorage;
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $error(this.log_0, e);
      alert_0('failed to init(): ' + e.getMessage());
      throw new RuntimeException_1(e);
    }
     else 
      throw unwrap($e0);
  }
}

function devicePixelRatio_0(){
  $clinit_HtmlPlatform();
  return $wnd.devicePixelRatio || 1;
}

function initNow(){
  function now_0(){
    return +new Date;
  }

  !Date.now && (Date.now = now_0);
  return Date.now();
}

function now_2(){
  $clinit_HtmlPlatform();
  return Date.now();
}

defineClass(261, 260, {}, HtmlPlatform);
_.visibilityChanged = function visibilityChanged(){
  var isHidden;
  isHidden = $doc.hidden;
  $dispatchEvent(this, this.lifecycle, isHidden?($clinit_Platform$Lifecycle() , PAUSE_0):($clinit_Platform$Lifecycle() , RESUME));
  isHidden && this.backgroundFrameMillis > 0 && $scheduleBackgroundFrame(this.backgroundFrameMillis, new HtmlPlatform$3(this));
}
;
_.backgroundFrameMillis = 0;
_.start_0 = 0;
var agentInfo_0;
var Lplayn_html_HtmlPlatform_2_classLit = createForClass('playn.html', 'HtmlPlatform', 261, Lplayn_core_Platform_2_classLit);
function HtmlPlatform$1(this$0){
  this.this$01 = this$0;
}

defineClass(263, 1, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass('playn.html', 'HtmlPlatform/1', 263, Ljava_lang_Object_2_classLit);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(264, 1, {}, HtmlPlatform$2);
_.run = function run_4(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass('playn.html', 'HtmlPlatform/2', 264, Ljava_lang_Object_2_classLit);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(265, 1, {}, HtmlPlatform$3);
_.run = function run_5(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass('playn.html', 'HtmlPlatform/3', 265, Ljava_lang_Object_2_classLit);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(262, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass('playn.html', 'HtmlPlatform/Config', 262, Ljava_lang_Object_2_classLit);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(321, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass('playn.html', 'HtmlStorage', 321, Ljava_lang_Object_2_classLit);
function $fill_0(this$static, ctx, x_0, y_0){
  configContext(ctx, this$static.format);
  $fillText(ctx, this$static.text_0, x_0, y_0);
}

function $stroke_0(this$static, ctx, x_0, y_0){
  configContext(ctx, this$static.format);
  $strokeText(ctx, this$static.text_0, x_0, y_0);
}

function HtmlTextLayout(text_0, format, metrics, width_0){
  TextLayout.call(this, text_0, format, new Rectangle_0(0, 0, $adjustWidth(metrics, width_0), metrics.height_0), $intern_43 * metrics.height_0 + (metrics.height_0 - $intern_43 * metrics.height_0));
  this.metrics = metrics;
}

function configContext(ctx, format){
  var font;
  font = !format.font_0?($clinit_HtmlFont() , DEFAULT_0):format.font_0;
  $setFont(ctx, toCSS(font));
  $setTextBaseline(ctx, ($clinit_Context2d$TextBaseline() , TOP).value_0);
}

function layoutText(gfx, ctx, text_0, format){
  var metrics, width_0;
  metrics = $getFontMetrics(gfx, !format.font_0?($clinit_HtmlFont() , DEFAULT_0):format.font_0);
  configContext(ctx, format);
  width_0 = ctx.measureText(text_0).width;
  return new HtmlTextLayout(text_0, format, metrics, width_0);
}

function layoutText_0(gfx, ctx, text_0, format, wrap){
  var idx, layouts, line, line$array, line$index, line$max, metrics, words;
  metrics = $getFontMetrics(gfx, !format.font_0?($clinit_HtmlFont() , DEFAULT_0):format.font_0);
  configContext(ctx, format);
  layouts = new ArrayList;
  text_0 = $replace_1($replace_2(text_0, '\r\n', '\n'), 13, 10);
  for (line$array = $split(text_0, '\\n', 0) , line$index = 0 , line$max = line$array.length; line$index < line$max; ++line$index) {
    line = line$array[line$index];
    words = $split(line, '\\s', 0);
    for (idx = 0; idx < words.length;) {
      idx = measureLine(ctx, format, wrap, metrics, words, idx, layouts);
    }
  }
  return $toArray_1(layouts, initDim(Lplayn_core_TextLayout_2_classLit, $intern_1, 146, layouts.array.length, 0, 1));
}

function measureLine(ctx, format, wrap, metrics, words, idx, layouts){
  var lastIdx, line, lineWidth, nline, nlineWidth, remainder, startIdx;
  line = words[idx++];
  startIdx = idx;
  for (; idx < words.length; idx++) {
    nline = line + ' ' + words[idx];
    if (nline.length * metrics.emwidth > wrap.width_0)
      break;
    line = nline;
  }
  lineWidth = ctx.measureText(line).width;
  if (lineWidth < wrap.width_0) {
    for (; idx < words.length; idx++) {
      nline = line + ' ' + words[idx];
      nlineWidth = ctx.measureText(nline).width;
      if (nlineWidth > wrap.width_0)
        break;
      line = nline;
      lineWidth = nlineWidth;
    }
  }
  while (lineWidth > wrap.width_0 && idx > startIdx + 1) {
    line = $substring_0(line, 0, line.length - words[--idx].length - 1);
    lineWidth = ctx.measureText(line).width;
  }
  if (lineWidth > wrap.width_0) {
    remainder = new StringBuilder;
    while (lineWidth > wrap.width_0 && line.length > 1) {
      lastIdx = line.length - 1;
      $insert(remainder, valueOf_1(line.charCodeAt(lastIdx)));
      line = line.substr(0, lastIdx);
      lineWidth = ctx.measureText(line).width;
    }
    words[--idx] = remainder.string;
  }
  $add_1(layouts, new HtmlTextLayout(line, format, metrics, lineWidth));
  return idx;
}

defineClass(253, 146, {146:1}, HtmlTextLayout);
var Lplayn_html_HtmlTextLayout_2_classLit = createForClass('playn.html', 'HtmlTextLayout', 253, Lplayn_core_TextLayout_2_classLit);
function $clinit_HtmlUrlParameters(){
  $clinit_HtmlUrlParameters = emptyMethod;
  checkGLErrors = $equals_0('check', getParameter('glerrors'));
  $equals_0('quad', getParameter('glshader'));
}

var checkGLErrors = false;
function requestedMode(){
  var renderer;
  renderer = getParameter('renderer');
  if ($equals_0('canvas', renderer)) {
    return 1;
  }
   else if ($equals_0('gl', renderer)) {
    return 0;
  }
  return 2;
}

function $$init_1(this$static){
  this$static.forceWidth = -1;
  this$static.forceHeight = -1;
}

function $setSize_0(this$static, width_0, height){
  this$static.forceWidth = width_0;
  this$static.forceHeight = height;
  this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

function $setSize_1(this$static, size_0){
  return $setSize_0(this$static, size_0.width_0, size_0.height_0);
}

function $setTile(this$static, tile){
  if (this$static.tile != tile) {
    !!this$static.tile && $release(this$static.tile);
    this$static.tile = tile;
    this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
    !!tile && tile.config.managed && ++tile.refs;
  }
  return this$static;
}

function ImageLayer(tile){
  Layer.call(this);
  $$init_1(this);
  this.setTile(tile);
}

function ImageLayer_0(source){
  Layer.call(this);
  $$init_1(this);
  source.state._result_0.get_0() != null?this.setTile(((!source.texture || source.texture.disposed) && (source.texture = $createTexture_0(source, source.texconf)) , source.texture)):$onSuccess($map_0(source.state, new Image$3(source)), new ImageLayer$1(this));
}

defineClass(48, 18, $intern_24, ImageLayer, ImageLayer_0);
_.close_0 = function close_11(){
  !!this.parent_0 && $remove_6(this.parent_0, this);
  $setState(this, ($clinit_Layer$State() , DISPOSED));
  this.setTile(null);
}
;
_.height_1 = function height_1(){
  if (this.forceHeight >= 0)
    return this.forceHeight;
  return !this.tile?0:this.tile.displayHeight;
}
;
_.paintImpl = function paintImpl_0(surf){
  var dheight, dwidth;
  if (this.tile) {
    dwidth = this.width_1();
    dheight = this.height_1();
    $draw(surf, this.tile, dwidth, dheight);
  }
}
;
_.setTile = function setTile(tile){
  return $setTile(this, tile);
}
;
_.width_1 = function width_2(){
  if (this.forceWidth >= 0)
    return this.forceWidth;
  return !this.tile?0:this.tile.displayWidth;
}
;
_.forceHeight = 0;
_.forceWidth = 0;
var Lplayn_scene_ImageLayer_2_classLit = createForClass('playn.scene', 'ImageLayer', 48, Lplayn_scene_Layer_2_classLit);
function $close_4(this$static){
  !!this$static.parent_0 && $remove_6(this$static.parent_0, this$static);
  $setState(this$static, ($clinit_Layer$State() , DISPOSED));
  $setTile_0(this$static, null);
  !!this$static.canvas && (this$static.canvas = null);
}

function $end_1(this$static){
  var image, tex;
  tex = this$static.tile;
  image = this$static.canvas.image;
  !!tex && tex.pixelWidth == image.pixelWidth && tex.pixelHeight == image.pixelHeight?$update_0(tex, image):$setTile(this$static, $createTexture_0(this$static.canvas.image, ($clinit_Texture$Config() , DEFAULT)));
}

function $setTile_0(this$static, tile){
  if (!tile || !!tile)
    return $setTile(this$static, tile);
  else 
    throw new UnsupportedOperationException;
}

function CanvasLayer(gfx, width_0, height){
  Layer.call(this);
  $$init_1(this);
  this.gfx = gfx;
  this.canvas = $createCanvas(this.gfx, width_0, height);
}

defineClass(538, 48, $intern_24, CanvasLayer);
_.close_0 = function close_12(){
  $close_4(this);
}
;
_.height_1 = function height_2(){
  return this.forceHeight < 0?this.canvas.height_0:this.forceHeight;
}
;
_.setTile = function setTile_0(tile){
  return $setTile_0(this, tile);
}
;
_.width_1 = function width_3(){
  return this.forceWidth < 0?this.canvas.width_0:this.forceWidth;
}
;
var Lplayn_scene_CanvasLayer_2_classLit = createForClass('playn.scene', 'CanvasLayer', 538, Lplayn_scene_ImageLayer_2_classLit);
function $setSize_2(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
  this$static.origin != ($clinit_Layer$Origin() , FIXED_0) && $setFlag(this$static, ($clinit_Layer$Flag() , ODIRTY), true);
  return this$static;
}

function ClippedLayer(width_0, height){
  Layer.call(this);
  this.pos = new Point;
  this.size_0 = new Vector;
  this.width_0 = width_0;
  this.height_0 = height;
}

defineClass(203, 18, $intern_24);
_.disableClip_0 = function disableClip(){
  return false;
}
;
_.height_1 = function height_3(){
  return this.height_0;
}
;
_.paintImpl = function paintImpl_1(surf){
  var nonEmpty, originX, originY, tx, r;
  if (this.disableClip_0())
    this.paintClipped(surf);
  else {
    tx = surf.lastTrans;
    originX = $originX(this);
    originY = $originY(this);
    tx.tx += tx.m00 * originX + tx.m10 * originY;
    tx.ty += tx.m11 * originY + tx.m01 * originX;
    $transform_1(tx, $set_3(this.pos, -originX, -originY), this.pos);
    $transform_2(tx, $set_4(this.size_0, this.width_0, this.height_0), this.size_0);
    tx.tx += tx.m00 * -originX + tx.m10 * -originY;
    tx.ty += tx.m11 * -originY + tx.m01 * -originX;
    nonEmpty = $startClipped(surf, round_int(this.pos.x_0), round_int(this.pos.y_0), round_0(abs_0(this.size_0.x_0)), round_0(abs_0(this.size_0.y_0)));
    try {
      nonEmpty && this.paintClipped(surf);
    }
     finally {
      surf.batch.flush();
      r = (--surf.scissorDepth , surf.scissorDepth == 0?null:$get_8(surf.scissors, surf.scissorDepth - 1));
      !r?$disable(surf.batch.gl.glc, 3089):$glScissor(surf.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
      $checkError(surf.batch.gl);
    }
  }
}
;
_.width_1 = function width_4(){
  return this.width_0;
}
;
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_scene_ClippedLayer_2_classLit = createForClass('playn.scene', 'ClippedLayer', 203, Lplayn_scene_Layer_2_classLit);
function $$init_2(this$static){
  this$static.children = new ArrayList;
  this$static.paintTx = new AffineTransform;
}

function $add_3(this$static, child){
  var count, index_0, parent_0;
  parent_0 = child.parent_0;
  if (parent_0 == this$static)
    return;
  count = this$static.children.array.length;
  count == 0 || $get_8(this$static.children, count - 1).depth <= child.depth?(index_0 = count):(index_0 = $findInsertion(this$static, child.depth));
  !!parent_0 && $remove_6(parent_0, child);
  $add_0(this$static.children, index_0, child);
  child.parent_0 = this$static;
  maskUndefined(this$static.state._value) === maskUndefined(($clinit_Layer$State() , ADDED)) && child.onAdd();
  $isSet(child, ($clinit_Layer$Flag() , INTERACTIVE)) && $setInteractive(this$static, true);
}

function $addAt(this$static, child, tx, ty){
  $add_3(this$static, ($setTranslation_0(child.transform, tx, ty) , child));
}

function $close_5(this$static){
  !!this$static.parent_0 && $remove_6(this$static.parent_0, this$static);
  $setState(this$static, ($clinit_Layer$State() , DISPOSED));
  $disposeAll(this$static);
}

function $depthChanged(this$static, child, oldDepth){
  var leftCorrect, newDepth, newIndex, oldIndex, rightCorrect;
  oldIndex = $findChild(this$static, child, oldDepth);
  newDepth = child.depth;
  leftCorrect = oldIndex == 0 || $get_8(this$static.children, oldIndex - 1).depth <= newDepth;
  rightCorrect = oldIndex == this$static.children.array.length - 1 || $get_8(this$static.children, oldIndex + 1).depth >= newDepth;
  if (leftCorrect && rightCorrect) {
    return oldIndex;
  }
  this$static.children.remove(oldIndex);
  newIndex = $findInsertion(this$static, newDepth);
  $add_0(this$static.children, newIndex, child);
  return newIndex;
}

function $disposeAll(this$static){
  var child, child$index, child$max, toDispose;
  toDispose = $toArray_1(this$static.children, initDim(Lplayn_scene_Layer_2_classLit, $intern_1, 18, this$static.children.array.length, 0, 1));
  $removeAll(this$static);
  for (child$index = 0 , child$max = toDispose.length; child$index < child$max; ++child$index) {
    child = toDispose[child$index];
    child.close_0();
  }
}

function $findChild(this$static, child, depth){
  var c, ii, ii0, ll, startIdx;
  startIdx = $findInsertion(this$static, depth);
  for (ii0 = startIdx - 1; ii0 >= 0; ii0--) {
    c = $get_8(this$static.children, ii0);
    if (c == child) {
      return ii0;
    }
    if (c.depth != depth) {
      break;
    }
  }
  for (ii = startIdx , ll = this$static.children.array.length; ii < ll; ii++) {
    c = $get_8(this$static.children, ii);
    if (c == child) {
      return ii;
    }
    if (c.depth != depth) {
      break;
    }
  }
  return -1;
}

function $findInsertion(this$static, depth){
  var high, low, mid, midDepth;
  low = 0;
  high = this$static.children.array.length - 1;
  while (low <= high) {
    mid = low + high >>> 1;
    midDepth = $get_8(this$static.children, mid).depth;
    if (depth > midDepth) {
      low = mid + 1;
    }
     else if (depth < midDepth) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return low;
}

function $hitTestDefault(this$static, point){
  var child, ii, l, sawInteractiveChild, x_0, y_0;
  x_0 = point.x_0;
  y_0 = point.y_0;
  sawInteractiveChild = false;
  for (ii = this$static.children.array.length - 1; ii >= 0; ii--) {
    child = $get_8(this$static.children, ii);
    if (!$isSet(child, ($clinit_Layer$Flag() , INTERACTIVE)))
      continue;
    sawInteractiveChild = true;
    if (!$isSet(child, VISIBLE_1))
      continue;
    try {
      $inverseTransform($transform_0(child), $set_3(point, x_0, y_0), point);
      point.x_0 += $originX(child);
      point.y_0 += $originY(child);
      l = !child.hitTester?child.hitTestDefault(point):child.hitTester.hitTest(child, point);
      if (l)
        return l;
    }
     catch ($e0) {
      $e0 = wrap_0($e0);
      if (instanceOf($e0, 176)) {
        continue;
      }
       else 
        throw unwrap($e0);
    }
  }
  !sawInteractiveChild && !(!!this$static.events && !!this$static.events._listeners) && $setInteractive(this$static, false);
  return point.x_0 >= 0 && point.y_0 >= 0 && point.x_0 < this$static.width_0 && point.y_0 < this$static.height_0?this$static:null;
}

function $remove_5(this$static, index_0){
  var child;
  child = this$static.children.remove(index_0);
  child.onRemove();
  child.parent_0 = null;
}

function $remove_6(this$static, child){
  var index_0;
  index_0 = $findChild(this$static, child, child.depth);
  if (index_0 < 0) {
    throw new UnsupportedOperationException_0('Could not remove Layer because it is not a child of the GroupLayer [group=' + this$static + ', layer=' + child + ']');
  }
  $remove_5(this$static, index_0);
}

function $removeAll(this$static){
  while (this$static.children.array.length != 0)
    $remove_5(this$static, this$static.children.array.length - 1);
}

function GroupLayer(){
  ClippedLayer.call(this, 0, 0);
  $$init_2(this);
  this.disableClip = true;
}

function GroupLayer_0(){
  ClippedLayer.call(this, 1, 1);
  $$init_2(this);
  this.disableClip = false;
}

defineClass(73, 203, $intern_24, GroupLayer, GroupLayer_0);
_.close_0 = function close_13(){
  $close_5(this);
}
;
_.deactivateOnNoListeners = function deactivateOnNoListeners_0(){
  return false;
}
;
_.disableClip_0 = function disableClip_0(){
  return this.disableClip;
}
;
_.hitTestDefault = function hitTestDefault_0(point){
  return $hitTestDefault(this, point);
}
;
_.iterator = function iterator_17(){
  return new AbstractList$IteratorImpl(this.children);
}
;
_.onAdd = function onAdd_3(){
  var ii, ll;
  $onAdd(this);
  for (ii = 0 , ll = this.children.array.length; ii < ll; ii++)
    $get_8(this.children, ii).onAdd();
}
;
_.onRemove = function onRemove_3(){
  var ii, ll;
  $setState(this, ($clinit_Layer$State() , REMOVED));
  for (ii = 0 , ll = this.children.array.length; ii < ll; ii++)
    $get_8(this.children, ii).onRemove();
}
;
_.paintClipped = function paintClipped(surf){
  var children, ii, ll;
  $set_2(this.paintTx, surf.lastTrans);
  children = this.children;
  for (ii = 0 , ll = children.array.length; ii < ll; ii++) {
    $set_2(surf.lastTrans, this.paintTx);
    $paint((checkElementIndex(ii, children.array.length) , children.array[ii]), surf);
  }
}
;
_.toString_0 = function toString_60(buf){
  $append_5((buf.string += 'tx=' , buf), $transform_0(this));
  !!this.hitTester && $append_5((buf.string += ', hitTester=' , buf), this.hitTester);
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
_.disableClip = false;
var Lplayn_scene_GroupLayer_2_classLit = createForClass('playn.scene', 'GroupLayer', 73, Lplayn_scene_ClippedLayer_2_classLit);
function $onEmit_11(this$static, tile){
  this$static.this$01.setTile(tile);
}

function ImageLayer$1(this$0){
  this.this$01 = this$0;
}

defineClass(324, 607, {}, ImageLayer$1);
_.onEmit_0 = function onEmit_16(tile){
  $onEmit_11(this, tile);
}
;
var Lplayn_scene_ImageLayer$1_2_classLit = createForClass('playn.scene', 'ImageLayer/1', 324, Lreact_Slot_2_classLit);
function $dispatch_3(this$static, event_0){
  var depth, target;
  if (this$static.canceled)
    return;
  screenToLayer(this$static.hitLayer, $set_3(this$static.local, event_0.x_0, event_0.y_0), this$static.local);
  this$static.event_0 = event_0;
  try {
    if (this$static.bubble) {
      depth = ($clinit_Interaction$Depth() , BELOW);
      for (target = this$static.hitLayer; target; target = target.parent_0) {
        target == this$static.capturingLayer?(depth = AT_0):depth == AT_0 && (depth = ABOVE);
        $dispatch_4(this$static, target);
        target == this$static.capturingLayer && (depth = AT_0);
      }
    }
     else {
      $dispatch_4(this$static, this$static.hitLayer);
    }
  }
   finally {
    this$static.event_0 = null;
  }
  $set_3(this$static.local, 0, 0);
}

function $dispatch_4(this$static, layer){
  var odispatchLayer;
  if (!(!!layer.events && !!layer.events._listeners))
    return;
  odispatchLayer = this$static.dispatchLayer;
  this$static.dispatchLayer = layer;
  try {
    $emit((!layer.events && (layer.events = new Layer$1(layer)) , layer.events), this$static);
  }
   finally {
    this$static.dispatchLayer = odispatchLayer;
  }
}

defineClass(339, 1, {46:1});
_.toString$ = function toString_61(){
  return 'Interaction[bubble=' + this.bubble + ', canceled=' + this.canceled + ', capmode=' + this.captureMode + ']' + '\n event=' + this.event_0 + '\n hit=' + this.hitLayer;
}
;
_.x_1 = function x_2(){
  return this.event_0.x_0;
}
;
_.y_1 = function y_2(){
  return this.event_0.y_0;
}
;
_.bubble = false;
_.canceled = false;
var Lplayn_scene_Interaction_2_classLit = createForClass('playn.scene', 'Interaction', 339, Ljava_lang_Object_2_classLit);
function $clinit_Interaction$Depth(){
  $clinit_Interaction$Depth = emptyMethod;
  BELOW = new Interaction$Depth('BELOW', 0);
  AT_0 = new Interaction$Depth('AT', 1);
  ABOVE = new Interaction$Depth('ABOVE', 2);
}

function Interaction$Depth(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_27(){
  $clinit_Interaction$Depth();
  return initValues(getClassLiteralForArray(Lplayn_scene_Interaction$Depth_2_classLit, 1), $intern_1, 106, 0, [BELOW, AT_0, ABOVE]);
}

defineClass(106, 6, {3:1, 7:1, 6:1, 106:1}, Interaction$Depth);
var ABOVE, AT_0, BELOW;
var Lplayn_scene_Interaction$Depth_2_classLit = createForEnum('playn.scene', 'Interaction/Depth', 106, Ljava_lang_Enum_2_classLit, values_27);
function $clinit_Reactor(){
  $clinit_Reactor = emptyMethod;
  DISPATCHING = new Cons(null, null);
}

function $addConnection(this$static, listener){
  if (!listener)
    throw new NullPointerException_0('Null listener');
  return $addCons(this$static, new Cons(this$static, listener));
}

function $addCons(this$static, cons){
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$1(this$static, cons));
  }
   else {
    this$static._listeners = insert(this$static._listeners, cons);
    this$static.connectionAdded();
  }
  return cons;
}

function $disconnect(this$static, cons){
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons));
  }
   else {
    this$static._listeners = remove_2(this$static._listeners, cons);
    this$static.connectionRemoved();
  }
}

function $notify(this$static, notifier, a1, a2, a3){
  var cons, ex, exn, lners, run, sentinel, run_0;
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$4(this$static, notifier, a1, a2, a3));
    return;
  }
  lners = this$static._listeners;
  sentinel = DISPATCHING;
  this$static._listeners = sentinel;
  exn = null;
  try {
    for (cons = lners; cons; cons = cons.next) {
      try {
        notifier.notify_0(cons._ref._lner, a1, a2, a3);
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (instanceOf($e0, 8)) {
          ex = $e0;
          exn = ex;
        }
         else 
          throw unwrap($e0);
      }
      cons._oneShot && $close_8(cons);
    }
  }
   finally {
    this$static._listeners = lners;
    while (run = (run_0 = this$static._pendingRuns , !!run_0 && (this$static._pendingRuns = run_0.next) , run_0)) {
      try {
        run.run();
      }
       catch ($e1) {
        $e1 = wrap_0($e1);
        if (instanceOf($e1, 8)) {
          ex = $e1;
          exn = ex;
        }
         else 
          throw unwrap($e1);
      }
    }
  }
  if (exn)
    throw unwrap(exn);
}

function append(head, action){
  if (!head)
    return action;
  head.next = append(head.next, action);
  return head;
}

defineClass(608, 1, {});
_.connectionAdded = function connectionAdded(){
}
;
_.connectionRemoved = function connectionRemoved(){
}
;
_.notify = function notify(notifier, a1, a2, a3){
  $notify(this, notifier, a1, a2, a3);
}
;
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass('react', 'Reactor', 608, Ljava_lang_Object_2_classLit);
function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

function $notifyEmit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

defineClass(617, 608, {});
_.placeholderListener = function placeholderListener(){
  return $clinit_Slots() , NOOP_2;
}
;
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass('react', 'AbstractSignal', 617, Lreact_Reactor_2_classLit);
function $emit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

function Signal(){
  $clinit_AbstractSignal();
}

defineClass(22, 617, {}, Signal);
var Lreact_Signal_2_classLit = createForClass('react', 'Signal', 22, Lreact_AbstractSignal_2_classLit);
function Layer$1(this$0){
  $clinit_AbstractSignal();
  this.this$01 = this$0;
}

defineClass(201, 22, {}, Layer$1);
_.connectionAdded = function connectionAdded_0(){
  $setInteractive(this.this$01, true);
}
;
_.connectionRemoved = function connectionRemoved_0(){
  !this._listeners && this.this$01.deactivateOnNoListeners() && $setInteractive(this.this$01, false);
}
;
var Lplayn_scene_Layer$1_2_classLit = createForClass('playn.scene', 'Layer/1', 201, Lreact_Signal_2_classLit);
function $clinit_Layer$Flag(){
  $clinit_Layer$Flag = emptyMethod;
  VISIBLE_1 = new Layer$Flag('VISIBLE', 0, 1);
  INTERACTIVE = new Layer$Flag('INTERACTIVE', 1, 2);
  XFDIRTY = new Layer$Flag('XFDIRTY', 2, 4);
  ODIRTY = new Layer$Flag('ODIRTY', 3, 8);
}

function Layer$Flag(enum$name, enum$ordinal, bitmask){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitmask = bitmask;
}

function values_28(){
  $clinit_Layer$Flag();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 82, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(82, 6, {3:1, 7:1, 6:1, 82:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum('playn.scene', 'Layer/Flag', 82, Ljava_lang_Enum_2_classLit, values_28);
function $clinit_Layer$Origin(){
  $clinit_Layer$Origin = emptyMethod;
  FIXED_0 = new Layer$Origin$1;
  CENTER_0 = new Layer$Origin$2;
  UL = new Layer$Origin$3;
  UR = new Layer$Origin$4;
  LL = new Layer$Origin$5;
  LR = new Layer$Origin$6;
  TC = new Layer$Origin$7;
  BC = new Layer$Origin$8;
  LC = new Layer$Origin$9;
  RC = new Layer$Origin$10;
}

function Layer$Origin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_29(){
  $clinit_Layer$Origin();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 19, 0, [FIXED_0, CENTER_0, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(19, 6, $intern_51);
var BC, CENTER_0, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum('playn.scene', 'Layer/Origin', 19, Ljava_lang_Enum_2_classLit, values_29);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(325, 19, $intern_51, Layer$Origin$1);
_.ox = function ox_0(width_0){
  return 0;
}
;
_.oy = function oy_0(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum('playn.scene', 'Layer/Origin/1', 325, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(334, 19, $intern_51, Layer$Origin$10);
_.ox = function ox_1(width_0){
  return width_0;
}
;
_.oy = function oy_1(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum('playn.scene', 'Layer/Origin/10', 334, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(326, 19, $intern_51, Layer$Origin$2);
_.ox = function ox_2(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_2(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum('playn.scene', 'Layer/Origin/2', 326, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(327, 19, $intern_51, Layer$Origin$3);
_.ox = function ox_3(width_0){
  return 0;
}
;
_.oy = function oy_3(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum('playn.scene', 'Layer/Origin/3', 327, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(328, 19, $intern_51, Layer$Origin$4);
_.ox = function ox_4(width_0){
  return width_0;
}
;
_.oy = function oy_4(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum('playn.scene', 'Layer/Origin/4', 328, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(329, 19, $intern_51, Layer$Origin$5);
_.ox = function ox_5(width_0){
  return 0;
}
;
_.oy = function oy_5(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum('playn.scene', 'Layer/Origin/5', 329, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(330, 19, $intern_51, Layer$Origin$6);
_.ox = function ox_6(width_0){
  return width_0;
}
;
_.oy = function oy_6(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum('playn.scene', 'Layer/Origin/6', 330, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(331, 19, $intern_51, Layer$Origin$7);
_.ox = function ox_7(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_7(height){
  return 0;
}
;
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum('playn.scene', 'Layer/Origin/7', 331, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(332, 19, $intern_51, Layer$Origin$8);
_.ox = function ox_8(width_0){
  return width_0 / 2;
}
;
_.oy = function oy_8(height){
  return height;
}
;
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum('playn.scene', 'Layer/Origin/8', 332, Lplayn_scene_Layer$Origin_2_classLit, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(333, 19, $intern_51, Layer$Origin$9);
_.ox = function ox_9(width_0){
  return 0;
}
;
_.oy = function oy_9(height){
  return height / 2;
}
;
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum('playn.scene', 'Layer/Origin/9', 333, Lplayn_scene_Layer$Origin_2_classLit, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_30(){
  $clinit_Layer$State();
  return initValues(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 105, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(105, 6, {3:1, 7:1, 6:1, 105:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum('playn.scene', 'Layer/State', 105, Ljava_lang_Enum_2_classLit, values_30);
function getHitLayer(root, p){
  $inverseTransform($transform_0(root), p, p);
  p.x_0 += $originX(root);
  p.y_0 += $originY(root);
  return !root.hitTester?$hitTestDefault(root, p):root.hitTester.hitTest(root, p);
}

function screenToLayer(layer, point, into){
  var cur, parent_0;
  parent_0 = layer.parent_0;
  cur = !parent_0?point:screenToLayer(parent_0, point, into);
  return $inverseTransform($transform_0(layer), $set_3(into, cur.x_1(), cur.y_1()), into) , into.x_0 += $originX(layer) , into.y_0 += $originY(layer) , into;
}

function Pointer(plat, root){
  this.events = ($clinit_AbstractSignal() , new Signal);
  this.plat = plat;
  $addConnection(plat.input_0.mouseEvents, new Pointer$1(this));
  $addConnection(plat.input_0.touchEvents, new Pointer$2(this));
  $addConnection(this.events, new Pointer$Dispatcher(root));
}

defineClass(338, 337, {}, Pointer);
var Lplayn_scene_Pointer_2_classLit = createForClass('playn.scene', 'Pointer', 338, Lplayn_core_Pointer_2_classLit);
function $onEmit_12(this$static, event_0){
  var hitLayer;
  if (!this$static.currentIact && event_0.kind.isStart) {
    hitLayer = getHitLayer(this$static.root, $set_3(this$static.scratch, event_0.x_0, event_0.y_0));
    !!hitLayer && (this$static.currentIact = new Pointer$Interaction(hitLayer, this$static.bubble));
  }
  !!this$static.currentIact && $dispatch_3(this$static.currentIact, event_0);
  event_0.kind.isEnd && (this$static.currentIact = null);
}

function Pointer$Dispatcher(root){
  this.scratch = new Point;
  this.root = root;
  this.bubble = true;
}

defineClass(340, 607, {}, Pointer$Dispatcher);
_.onEmit_0 = function onEmit_17(event_0){
  $onEmit_12(this, event_0);
}
;
_.bubble = false;
var Lplayn_scene_Pointer$Dispatcher_2_classLit = createForClass('playn.scene', 'Pointer/Dispatcher', 340, Lreact_Slot_2_classLit);
function Pointer$Interaction(hitLayer, bubble){
  this.local = new Point;
  this.hitLayer = hitLayer;
  this.bubble = bubble;
}

defineClass(159, 339, {159:1, 46:1}, Pointer$Interaction);
var Lplayn_scene_Pointer$Interaction_2_classLit = createForClass('playn.scene', 'Pointer/Interaction', 159, Lplayn_scene_Interaction_2_classLit);
defineClass(618, 607, {});
_.onCancel = function onCancel(iact){
}
;
_.onDrag = function onDrag(iact){
}
;
_.onEmit_0 = function onEmit_18(event_0){
  var iact;
  if (instanceOf(event_0, 159)) {
    iact = event_0;
    switch (iact.event_0.kind.ordinal) {
      case 0:
        this.onStart(iact);
        break;
      case 1:
        this.onDrag(iact);
        break;
      case 2:
        this.onEnd(iact);
        break;
      case 3:
        this.onCancel(iact);
    }
  }
}
;
_.onEnd = function onEnd(iact){
}
;
_.onStart = function onStart(iact){
}
;
var Lplayn_scene_Pointer$Listener_2_classLit = createForClass('playn.scene', 'Pointer/Listener', 618, Lreact_Slot_2_classLit);
function RootLayer(){
  GroupLayer.call(this);
  $setState(this, ($clinit_Layer$State() , ADDED));
}

defineClass(336, 73, $intern_24, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass('playn.scene', 'RootLayer', 336, Lplayn_scene_GroupLayer_2_classLit);
function $onEmit_13(this$static){
  $paintScene(this$static.this$01);
}

function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(272, 607, {}, SceneGame$1);
_.onEmit_0 = function onEmit_19(clock){
  $onEmit_13(this, clock);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass('playn.scene', 'SceneGame/1', 272, Lreact_Slot_2_classLit);
function $equals_5(this$static, obj){
  var d;
  if (obj === this$static) {
    return true;
  }
  if (instanceOf(obj, 164)) {
    d = obj;
    return d.width_0 == this$static.width_0 && d.height_0 == this$static.height_0;
  }
  return false;
}

defineClass(164, 1, {164:1});
_.equals$ = function equals_31(obj){
  return $equals_5(this, obj);
}
;
_.hashCode$ = function hashCode_35(){
  return round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString$ = function toString_62(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass('pythagoras.f', 'AbstractDimension', 164, Ljava_lang_Object_2_classLit);
defineClass(163, 1, {163:1, 46:1});
_.equals$ = function equals_32(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 163)) {
    p = obj;
    return this.x_1() == p.x_0 && this.y_1() == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_36(){
  return round_int(this.x_1()) ^ round_int(this.y_1());
}
;
_.toString$ = function toString_63(){
  return pointToString(this.x_1(), this.y_1());
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass('pythagoras.f', 'AbstractPoint', 163, Ljava_lang_Object_2_classLit);
defineClass(628, 1, {});
var Lpythagoras_f_RectangularShape_2_classLit = createForClass('pythagoras.f', 'RectangularShape', 628, Ljava_lang_Object_2_classLit);
defineClass(165, 628, {165:1});
_.equals$ = function equals_33(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 165)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_37(){
  return round_int(this.x_0) ^ round_int(this.y_0) ^ round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString$ = function toString_64(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0 + pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractRectangle_2_classLit = createForClass('pythagoras.f', 'AbstractRectangle', 165, Lpythagoras_f_RectangularShape_2_classLit);
defineClass(625, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass('pythagoras.f', 'AbstractTransform', 625, Ljava_lang_Object_2_classLit);
defineClass(170, 1, $intern_52);
_.equals$ = function equals_34(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 170)) {
    p = obj;
    return this.x_1() == p.x_0 && this.y_1() == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_38(){
  return round_int(this.x_1()) ^ round_int(this.y_1());
}
;
_.toString$ = function toString_65(){
  return vectorToString(this.x_1(), this.y_1());
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass('pythagoras.f', 'AbstractVector', 170, Ljava_lang_Object_2_classLit);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $inverseTransform(this$static, p, into){
  var det, rdet, x_0, y_0;
  x_0 = p.x_0 - this$static.tx;
  y_0 = p.y_0 - this$static.ty;
  det = this$static.m00 * this$static.m11 - this$static.m01 * this$static.m10;
  if (abs_0(det) == 0) {
    throw new NoninvertibleTransformException('affine [' + toString_67(this$static.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_67(this$static.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_67(this$static.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_67(this$static.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this$static.tx, this$static.ty) + ']');
  }
  rdet = 1 / det;
  return $set_3(into, (x_0 * this$static.m11 - y_0 * this$static.m10) * rdet, (y_0 * this$static.m00 - x_0 * this$static.m01) * rdet);
}

function $scale_1(this$static, scaleX, scaleY){
  this$static.m00 *= scaleX;
  this$static.m01 *= scaleX;
  this$static.m10 *= scaleY;
  this$static.m11 *= scaleY;
  return this$static;
}

function $set_2(this$static, other){
  return $setTransform(this$static, other.m00, other.m01, other.m10, other.m11, other.tx, other.ty);
}

function $setRotation(this$static, angle){
  var cosa, sina, sx, sy;
  sx = sqrt_0(this$static.m00 * this$static.m00 + this$static.m01 * this$static.m01);
  sy = sqrt_0(this$static.m10 * this$static.m10 + this$static.m11 * this$static.m11);
  sina = sin_0(angle);
  cosa = cos_0(angle);
  this$static.m00 = cosa * sx;
  this$static.m01 = sina * sx;
  this$static.m10 = -sina * sy;
  this$static.m11 = cosa * sy;
  return this$static;
}

function $setTransform(this$static, m00, m01, m10, m11, tx, ty){
  this$static.m00 = m00;
  this$static.m01 = m01;
  this$static.m10 = m10;
  this$static.m11 = m11;
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $setTranslation_0(this$static, tx, ty){
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $setTx_0(this$static, tx){
  this$static.tx = tx;
  return this$static;
}

function $setTy_0(this$static, ty){
  this$static.ty = ty;
  return this$static;
}

function $transform_1(this$static, p, into){
  var x_0, y_0;
  x_0 = p.x_0;
  y_0 = p.y_0;
  return $set_3(into, this$static.m00 * x_0 + this$static.m10 * y_0 + this$static.tx, this$static.m01 * x_0 + this$static.m11 * y_0 + this$static.ty);
}

function $transform_2(this$static, v, into){
  var x_0, y_0;
  x_0 = v.x_0;
  y_0 = v.y_0;
  return $set_4(into, this$static.m00 * x_0 + this$static.m10 * y_0, this$static.m01 * x_0 + this$static.m11 * y_0);
}

function $translate_1(this$static, tx, ty){
  this$static.tx += this$static.m00 * tx + this$static.m10 * ty;
  this$static.ty += this$static.m11 * ty + this$static.m01 * tx;
  return this$static;
}

function AffineTransform(){
  AffineTransform_0.call(this, 1, 0, 0, 1, 0, 0);
}

function AffineTransform_0(m00, m01, m10, m11, tx, ty){
  this.m00 = m00;
  this.m01 = m01;
  this.m10 = m10;
  this.m11 = m11;
  this.tx = tx;
  this.ty = ty;
}

defineClass(85, 625, {}, AffineTransform, AffineTransform_0);
_.toString$ = function toString_66(){
  return 'affine [' + toString_67(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_67(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_67(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_67(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass('pythagoras.f', 'AffineTransform', 85, Lpythagoras_f_AbstractTransform_2_classLit);
function $setSize_3(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Dimension(){
  Dimension_0.call(this, 0, 0);
}

function Dimension_0(width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
}

function Dimension_1(d){
  Dimension_0.call(this, d.width_0, d.height_0);
}

defineClass(23, 164, {3:1, 164:1}, Dimension, Dimension_0, Dimension_1);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass('pythagoras.f', 'Dimension', 23, Lpythagoras_f_AbstractDimension_2_classLit);
function $clinit_Dimensions(){
  $clinit_Dimensions = emptyMethod;
  new Dimension_0(0, 0);
}

function iceil(v){
  var iv;
  iv = round_int(v);
  return v <= 0 || iv == v || iv == $intern_0?iv:iv + 1;
}

function ifloor(v){
  var iv;
  iv = round_int(v);
  return v >= 0 || iv == v || iv == -2147483648?iv:iv - 1;
}

function toString_67(value_0, decimalPlaces){
  var buf, ii, ii0, ivalue;
  if (isNaN(value_0))
    return 'NaN';
  buf = new StringBuilder;
  if (value_0 >= 0)
    buf.string += '+';
  else {
    buf.string += '-';
    value_0 = -value_0;
  }
  ivalue = round_int(value_0);
  buf.string += ivalue;
  if (decimalPlaces > 0) {
    buf.string += '.';
    for (ii0 = 0; ii0 < decimalPlaces; ii0++) {
      value_0 = (value_0 - ivalue) * 10;
      ivalue = round_int(value_0);
      buf.string += ivalue;
    }
    for (ii = 0; ii < decimalPlaces - 1; ii++) {
      $charAt(buf, buf.string.length - 1) == 48 && $setLength(buf, buf.string.length - 1);
    }
  }
  return buf.string;
}

var TO_STRING_DECIMAL_PLACES = 3;
function $set_3(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point(){
}

function Point_0(){
  $set_3(this, 0, 0);
}

defineClass(84, 163, {3:1, 163:1, 46:1}, Point, Point_0);
_.x_1 = function x_3(){
  return this.x_0;
}
;
_.y_1 = function y_3(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass('pythagoras.f', 'Point', 84, Lpythagoras_f_AbstractPoint_2_classLit);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_67(x_0, TO_STRING_DECIMAL_PLACES) + toString_67(y_0, TO_STRING_DECIMAL_PLACES);
}

function $setBounds(this$static, x_0, y_0, width_0, height){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.height_0 = height;
  this$static.width_0 = width_0;
}

function Rectangle(){
}

function Rectangle_0(x_0, y_0, width_0, height){
  $setBounds(this, x_0, y_0, width_0, height);
}

defineClass(166, 165, {3:1, 165:1}, Rectangle, Rectangle_0);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Rectangle_2_classLit = createForClass('pythagoras.f', 'Rectangle', 166, Lpythagoras_f_AbstractRectangle_2_classLit);
function multiply(am00, am01, am10, am11, atx, aty, bm00, bm01, bm10, bm11, btx, bty, into){
  $setTransform(into, am00 * bm00 + am10 * bm01, am01 * bm00 + am11 * bm01, am00 * bm10 + am10 * bm11, am01 * bm10 + am11 * bm11, am00 * btx + am10 * bty + atx, am01 * btx + am11 * bty + aty);
  return into;
}

function multiply_0(a, m00, m01, m10, m11, tx, ty, into){
  return multiply(a.m00, a.m01, a.m10, a.m11, a.tx, a.ty, m00, m01, m10, m11, tx, ty, into);
}

function multiply_1(a, b, into){
  return multiply(a.m00, a.m01, a.m10, a.m11, a.tx, a.ty, b.m00, b.m01, b.m10, b.m11, b.tx, b.ty, into);
}

function $set_4(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Vector(){
}

function Vector_0(x_0, y_0){
  $set_4(this, x_0, y_0);
}

defineClass(65, 170, $intern_52, Vector, Vector_0);
_.x_1 = function x_4(){
  return this.x_0;
}
;
_.y_1 = function y_4(){
  return this.y_0;
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass('pythagoras.f', 'Vector', 65, Lpythagoras_f_AbstractVector_2_classLit);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_53, $intern_53);
  new Vector_0($intern_45, $intern_45);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_67(x_0, TO_STRING_DECIMAL_PLACES) + toString_67(y_0, TO_STRING_DECIMAL_PLACES);
}

defineClass(183, 1, {183:1});
_.equals$ = function equals_35(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 183)) {
    d = obj;
    return d.width_0 == this.width_0 && d.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_39(){
  return this.width_0 ^ this.height_0;
}
;
_.toString$ = function toString_68(){
  return this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_i_AbstractDimension_2_classLit = createForClass('pythagoras.i', 'AbstractDimension', 183, Ljava_lang_Object_2_classLit);
defineClass(187, 1, {187:1});
_.equals$ = function equals_36(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 187)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_40(){
  return this.x_0 ^ this.y_0;
}
;
_.toString$ = function toString_69(){
  return pointToString_0(this.x_0, this.y_0);
}
;
var Lpythagoras_i_AbstractPoint_2_classLit = createForClass('pythagoras.i', 'AbstractPoint', 187, Ljava_lang_Object_2_classLit);
function $contains_4(this$static, px, py){
  var x_0, y_0;
  if (this$static.width_0 <= 0 || this$static.height_0 <= 0)
    return false;
  x_0 = this$static.x_0;
  y_0 = this$static.y_0;
  if (px < x_0 || py < y_0)
    return false;
  px -= x_0;
  py -= y_0;
  return px < this$static.width_0 && py < this$static.height_0;
}

function $contains_5(this$static, point){
  return $contains_4(this$static, point.x_0, point.y_0);
}

defineClass(178, 1, {178:1});
_.equals$ = function equals_37(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 178)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode$ = function hashCode_41(){
  return this.x_0 ^ this.y_0 ^ this.width_0 ^ this.height_0;
}
;
_.toString$ = function toString_70(){
  return this.width_0 + 'x' + this.height_0 + pointToString_0(this.x_0, this.y_0);
}
;
var Lpythagoras_i_AbstractRectangle_2_classLit = createForClass('pythagoras.i', 'AbstractRectangle', 178, Ljava_lang_Object_2_classLit);
function Dimension_2(width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
}

function Dimension_3(d){
  Dimension_2.call(this, d.width_0, d.height_0);
}

defineClass(184, 183, {3:1, 183:1}, Dimension_2, Dimension_3);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_i_Dimension_2_classLit = createForClass('pythagoras.i', 'Dimension', 184, Lpythagoras_i_AbstractDimension_2_classLit);
function $addLocal(this$static, dx, dy){
  return $set_5(this$static, this$static.x_0 + dx, this$static.y_0 + dy);
}

function $set_5(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point_1(){
}

function Point_2(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(95, 187, {3:1, 187:1}, Point_1, Point_2);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_i_Point_2_classLit = createForClass('pythagoras.i', 'Point', 95, Lpythagoras_i_AbstractPoint_2_classLit);
function pointToString_0(x_0, y_0){
  var buf;
  buf = new StringBuilder;
  x_0 >= 0 && (buf.string += '+' , buf);
  buf.string += x_0;
  y_0 >= 0 && (buf.string += '+' , buf);
  buf.string += y_0;
  return buf.string;
}

function $setBounds_0(this$static, x_0, y_0, width_0, height){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.height_0 = height;
  this$static.width_0 = width_0;
}

function $setLocation(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
}

function $setSize_4(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Rectangle_1(){
}

function Rectangle_2(d){
  $setBounds_0(this, 0, 0, d.width_0, d.height_0);
}

defineClass(241, 178, {3:1, 178:1}, Rectangle_1, Rectangle_2);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_i_Rectangle_2_classLit = createForClass('pythagoras.i', 'Rectangle', 241, Lpythagoras_i_AbstractRectangle_2_classLit);
function NoninvertibleTransformException(s){
  RuntimeException_0.call(this, s);
}

defineClass(176, 8, {3:1, 16:1, 8:1, 10:1, 176:1}, NoninvertibleTransformException);
var Lpythagoras_util_NoninvertibleTransformException_2_classLit = createForClass('pythagoras.util', 'NoninvertibleTransformException', 176, Ljava_lang_RuntimeException_2_classLit);
defineClass(610, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass('react', 'Reactor/Notifier', 610, Ljava_lang_Object_2_classLit);
function AbstractSignal$1(){
}

defineClass(335, 610, {}, AbstractSignal$1);
_.notify_0 = function notify_0(slot, event_0, _1, _2){
  slot.onEmit_0(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass('react', 'AbstractSignal/1', 335, Lreact_Reactor$Notifier_2_classLit);
function $clinit_AbstractValue(){
  $clinit_AbstractValue = emptyMethod;
  $clinit_Reactor();
  CHANGE = new AbstractValue$1;
}

function $connectNotify(this$static, listener){
  var conn, e, re;
  conn = $addConnection(this$static, listener);
  try {
    $onChange(listener, this$static.get_0());
    return conn;
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 8)) {
      re = $e0;
      $close_8(conn);
      throw unwrap(re);
    }
     else if (instanceOf($e0, 71)) {
      e = $e0;
      $close_8(conn);
      throw e;
    }
     else 
      throw unwrap($e0);
  }
}

function $map(this$static, func){
  return new AbstractValue$2(func, this$static);
}

function $notifyChange(this$static, value_0, oldValue){
  $notify(this$static, CHANGE, value_0, oldValue, null);
}

function $updateAndNotify(this$static, value_0, force){
  var ovalue;
  ovalue = this$static.updateLocal(value_0);
  (force || ($clinit_Reactor() , !(maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue)))) && $notify(this$static, CHANGE, value_0, ovalue, null);
  return ovalue;
}

defineClass(620, 608, $intern_54);
_.connect = function connect(slot){
  return $addConnection(this, slot);
}
;
_.equals$ = function equals_38(other){
  var ovalue, value_0;
  if (other == null)
    return false;
  if (getClass__Ljava_lang_Class___devirtual$(other) != this.___clazz$)
    return false;
  value_0 = this.get_0();
  ovalue = other.get_0();
  return $clinit_Reactor() , maskUndefined(value_0) === maskUndefined(ovalue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ovalue);
}
;
_.hashCode$ = function hashCode_42(){
  var value_0;
  value_0 = this.get_0();
  return value_0 == null?0:hashCode__I__devirtual$(value_0);
}
;
_.placeholderListener = function placeholderListener_0(){
  return $clinit_Slots() , NOOP_2;
}
;
_.toString$ = function toString_71(){
  var cname;
  cname = $getName(this.___clazz$);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this.get_0() + ')';
}
;
_.updateAndNotify = function updateAndNotify(value_0, force){
  return $updateAndNotify(this, value_0, force);
}
;
_.updateLocal = function updateLocal(value_0){
  throw new UnsupportedOperationException;
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass('react', 'AbstractValue', 620, Lreact_Reactor_2_classLit);
function AbstractValue$1(){
}

defineClass(361, 610, {}, AbstractValue$1);
_.notify_0 = function notify_1(lner, value_0, oldValue, ignored){
  lner.onChange(value_0, oldValue);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass('react', 'AbstractValue/1', 361, Lreact_Reactor$Notifier_2_classLit);
function $disconnect_0(this$static){
  if (this$static._conn) {
    this$static._conn.close_0();
    this$static._conn = null;
  }
}

defineClass(621, 620, $intern_54);
_.connectionAdded = function connectionAdded_1(){
  !this._conn && (this._conn = this.connect_0());
}
;
_.connectionRemoved = function connectionRemoved_1(){
  !!this._listeners || $disconnect_0(this);
}
;
var Lreact_MappedValue_2_classLit = createForClass('react', 'MappedValue', 621, Lreact_AbstractValue_2_classLit);
function AbstractValue$2(val$func, val$outer){
  this.val$func2 = val$func;
  this.val$outer3 = val$outer;
}

defineClass(362, 621, $intern_54, AbstractValue$2);
_.connect_0 = function connect_0(){
  return $addConnection(this.val$outer3, new AbstractValue$2$1(this, this.val$func2));
}
;
_.get_0 = function get_17(){
  return $apply_1(this.val$func2, this.val$outer3.get_0());
}
;
_.toString$ = function toString_72(){
  return this.val$outer3 + '.map(' + this.val$func2 + ')';
}
;
var Lreact_AbstractValue$2_2_classLit = createForClass('react', 'AbstractValue/2', 362, Lreact_MappedValue_2_classLit);
function AbstractValue$2$1(this$1, val$func){
  this.this$11 = this$1;
  this.val$func2 = val$func;
}

defineClass(363, 1, {}, AbstractValue$2$1);
_.onChange = function onChange_0(value_0, ovalue){
  $notifyChange(this.this$11, $apply_1(this.val$func2, value_0), $apply_1(this.val$func2, ovalue));
}
;
var Lreact_AbstractValue$2$1_2_classLit = createForClass('react', 'AbstractValue/2/1', 363, Ljava_lang_Object_2_classLit);
function AbstractValue$4(val$listener){
  this.val$listener1 = val$listener;
}

defineClass(364, 1, {}, AbstractValue$4);
_.onChange = function onChange_1(newValue, oldValue){
  $onEmit_14(this.val$listener1, newValue);
}
;
var Lreact_AbstractValue$4_2_classLit = createForClass('react', 'AbstractValue/4', 364, Ljava_lang_Object_2_classLit);
var Lreact_Closeable_2_classLit = createForInterface('react', 'Closeable');
function $add_4(this$static, c){
  !this$static._set && (this$static._set = new HashSet);
  $add_2(this$static._set, c);
  return c;
}

function $close_6(this$static){
  var c, c$iterator, e, error;
  if (this$static._set) {
    error = null;
    for (c$iterator = $iterator_0(new AbstractMap$1(this$static._set.map_0)); $hasNext_0(c$iterator.val$outerIter2);) {
      c = $next_3(c$iterator);
      try {
        c.close_0();
      }
       catch ($e0) {
        $e0 = wrap_0($e0);
        if (instanceOf($e0, 16)) {
          e = $e0;
          !error && (error = new MultiFailureException);
          $addSuppressed(error, e);
        }
         else 
          throw unwrap($e0);
      }
    }
    $reset(this$static._set.map_0);
    if (error)
      throw error;
  }
}

function Closeable$Set(){
}

defineClass(198, 1, $intern_20, Closeable$Set);
_.close_0 = function close_14(){
  $close_6(this);
}
;
var Lreact_Closeable$Set_2_classLit = createForClass('react', 'Closeable/Set', 198, Ljava_lang_Object_2_classLit);
function $clinit_Closeable$Util(){
  $clinit_Closeable$Util = emptyMethod;
  NOOP_0 = new Closeable$Util$1;
}

var NOOP_0;
function Closeable$Util$1(){
}

defineClass(304, 1, $intern_20, Closeable$Util$1);
_.close_0 = function close_15(){
}
;
var Lreact_Closeable$Util$1_2_classLit = createForClass('react', 'Closeable/Util/1', 304, Ljava_lang_Object_2_classLit);
function $close_7(this$static){
  var ii;
  for (ii = 0; ii < this$static.val$cons1.length; ii++) {
    if (!this$static.val$cons1[ii])
      continue;
    this$static.val$cons1[ii].close_0();
    this$static.val$cons1[ii] = null;
  }
}

function Closeable$Util$2(val$cons){
  this.val$cons1 = val$cons;
}

defineClass(305, 1, $intern_20, Closeable$Util$2);
_.close_0 = function close_16(){
  $close_7(this);
}
;
var Lreact_Closeable$Util$2_2_classLit = createForClass('react', 'Closeable/Util/2', 305, Ljava_lang_Object_2_classLit);
defineClass(126, 1, $intern_55);
var Lreact_Connection_2_classLit = createForClass('react', 'Connection', 126, Ljava_lang_Object_2_classLit);
function Connection$1(val$conns){
  this.val$conns1 = val$conns;
}

defineClass(408, 126, $intern_55, Connection$1);
_.close_0 = function close_17(){
  var c, c$array, c$index, c$max;
  for (c$array = this.val$conns1 , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    c.close_0();
  }
}
;
var Lreact_Connection$1_2_classLit = createForClass('react', 'Connection/1', 408, Lreact_Connection_2_classLit);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw new IllegalStateException_0('Cannot change priority of disconnected connection.');
  $disconnect(this$static._owner, this$static);
  this$static.next = null;
  this$static._priority = priority;
  $addCons(this$static._owner, this$static);
  return this$static;
}

function $close_8(this$static){
  if (this$static._owner) {
    $defang(this$static._ref, this$static._owner.placeholderListener());
    $disconnect(this$static._owner, this$static);
    this$static._owner = null;
  }
}

function Cons(owner, listener){
  this._owner = owner;
  this._ref = new Cons$StrongRef(listener);
}

function insert(head, cons){
  if (!head) {
    return cons;
  }
   else if (cons._priority > head._priority) {
    cons.next = head;
    return cons;
  }
   else {
    head.next = insert(head.next, cons);
    return head;
  }
}

function remove_2(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next;
  head.next = remove_2(head.next, cons);
  return head;
}

defineClass(214, 126, $intern_55, Cons);
_.close_0 = function close_18(){
  $close_8(this);
}
;
_.toString$ = function toString_73(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass('react', 'Cons', 214, Lreact_Connection_2_classLit);
defineClass(627, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass('react', 'Cons/ListenerRef', 627, Ljava_lang_Object_2_classLit);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(415, 627, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass('react', 'Cons/StrongRef', 415, Lreact_Cons$ListenerRef_2_classLit);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(31, 620, $intern_54, Value);
_.get_0 = function get_18(){
  return this._value;
}
;
_.updateLocal = function updateLocal_0(value_0){
  var oldValue;
  oldValue = this._value;
  this._value = value_0;
  return oldValue;
}
;
var Lreact_Value_2_classLit = createForClass('react', 'Value', 31, Lreact_AbstractValue_2_classLit);
function $increment(this$static, amount){
  return $updateInt(this$static, this$static._value.value_0 + amount);
}

function $updateInt(this$static, value_0){
  $updateAndNotify(this$static, valueOf_0(value_0), false);
  return value_0;
}

function IntValue(value_0){
  $clinit_AbstractValue();
  Value.call(this, valueOf_0(value_0));
}

defineClass(574, 31, $intern_54, IntValue);
var Lreact_IntValue_2_classLit = createForClass('react', 'IntValue', 574, Lreact_Value_2_classLit);
function MultiFailureException(){
  RuntimeException.call(this);
  this._failures = new ArrayList;
}

defineClass(461, 8, $intern_11, MultiFailureException);
_.fillInStackTrace = function fillInStackTrace_0(){
  return this;
}
;
_.getMessage = function getMessage_1(){
  var buf, failure, failure$iterator;
  buf = new StringBuilder;
  for (failure$iterator = new AbstractList$IteratorImpl(this._failures); failure$iterator.i < failure$iterator.this$01.size_1();) {
    failure = (checkCriticalElement(failure$iterator.i < failure$iterator.this$01.size_1()) , failure$iterator.this$01.get_1(failure$iterator.i++));
    buf.string.length > 0 && (buf.string += ', ' , buf);
    $append_6($append_6($append_6(buf, $getName(failure.___clazz$)), ': '), failure.getMessage());
  }
  return this._failures.array.length + ' failures: ' + buf;
}
;
_.printStackTrace = function printStackTrace_0(s){
  var failure, failure$iterator;
  for (failure$iterator = new AbstractList$IteratorImpl(this._failures); failure$iterator.i < failure$iterator.this$01.size_1();) {
    failure = (checkCriticalElement(failure$iterator.i < failure$iterator.this$01.size_1()) , failure$iterator.this$01.get_1(failure$iterator.i++));
    failure.printStackTrace(s);
  }
}
;
var Lreact_MultiFailureException_2_classLit = createForClass('react', 'MultiFailureException', 461, Ljava_lang_RuntimeException_2_classLit);
defineClass(638, 608, {});
_.notify = function notify_2(notifier, a1, a2, a3){
  $notify(this, notifier, a1, a2, a3);
}
;
var Lreact_RCollection_2_classLit = createForClass('react', 'RCollection', 638, Lreact_Reactor_2_classLit);
function $map_0(this$static, func){
  return new RFuture($map(this$static._result_0, new RFuture$7(func)));
}

function $onSuccess(this$static, slot){
  var result;
  result = this$static._result_0.get_0();
  !result?$addConnection(this$static._result_0, new AbstractValue$4(new RFuture$5(slot))):result.isSuccess() && $onEmit_11(slot, result.get_0());
  return this$static;
}

function RFuture(result){
  this._result_0 = result;
}

function result_0(result){
  return new RFuture(($clinit_AbstractValue() , new Value(result)));
}

defineClass(160, 1, {}, RFuture);
var Lreact_RFuture_2_classLit = createForClass('react', 'RFuture', 160, Ljava_lang_Object_2_classLit);
function $onEmit_14(this$static, result){
  result.isSuccess() && $onEmit_11(this$static.val$slot2, result.get_0());
}

function RFuture$5(val$slot){
  this.val$slot2 = val$slot;
}

defineClass(358, 1, {}, RFuture$5);
_.onEmit_0 = function onEmit_20(result){
  $onEmit_14(this, result);
}
;
var Lreact_RFuture$5_2_classLit = createForClass('react', 'RFuture/5', 358, Ljava_lang_Object_2_classLit);
function $apply_1(this$static, result){
  return !result?null:result.map_1(this$static.val$func2);
}

function RFuture$7(val$func){
  this.val$func2 = val$func;
}

defineClass(359, 1, {}, RFuture$7);
_.apply_0 = function apply_7(result){
  return $apply_1(this, result);
}
;
var Lreact_RFuture$7_2_classLit = createForClass('react', 'RFuture/7', 359, Ljava_lang_Object_2_classLit);
function $clinit_RList(){
  $clinit_RList = emptyMethod;
  $clinit_Reactor();
  NOOP_1 = new RList$1;
  ADD = new RList$2;
  REMOVE = new RList$4;
}

function $add_5(this$static, index_0, element){
  $add_0(this$static._impl, index_0, element);
  $notify(this$static, ADD, valueOf_0(index_0), element, null);
}

function $add_6(this$static, element){
  $add_5(this$static, this$static._impl.array.length, element);
  return true;
}

function $addAll_1(this$static, index_0, elements){
  var elem, elem$iterator;
  for (elem$iterator = new AbstractList$IteratorImpl(elements); elem$iterator.i < elem$iterator.this$01.size_1();) {
    elem = (checkCriticalElement(elem$iterator.i < elem$iterator.this$01.size_1()) , elem$iterator.this$01.get_1(elem$iterator.i++));
    $add_5(this$static, index_0++, elem);
  }
  return true;
}

function $addAll_2(this$static, collection){
  return $addAll_1(this$static, this$static._impl.array.length, collection);
}

function $connectNotify_0(this$static, listener){
  var ii, ll;
  for (ii = 0 , ll = this$static._impl.array.length; ii < ll; ii++)
    listener.onAdd_0(ii, $get_8(this$static._impl, ii));
  return $addConnection(this$static, listener);
}

function $contains_6(this$static, object){
  return $indexOf_2(this$static._impl, object, 0) != -1;
}

function $listIterator_0(this$static){
  var iiter;
  iiter = new AbstractList$ListIteratorImpl(this$static._impl);
  return new RList$5(iiter);
}

function $remove_7(this$static, index_0){
  var removed;
  removed = this$static._impl.remove(index_0);
  $notify(this$static, REMOVE, valueOf_0(index_0), removed, null);
  return removed;
}

function $remove_8(this$static, object){
  var index_0;
  index_0 = $indexOf_2(this$static._impl, object, 0);
  if (index_0 < 0)
    return false;
  this$static._impl.remove(index_0);
  $notify(this$static, REMOVE, valueOf_0(index_0), object, null);
  return true;
}

function RList(impl){
  $clinit_RList();
  this._impl = impl;
}

defineClass(240, 638, {25:1}, RList);
_.add_0 = function add_7(element){
  return $add_6(this, element);
}
;
_.contains = function contains_17(object){
  return $contains_6(this, object);
}
;
_.equals$ = function equals_39(other){
  return other === this || $equals_1(this._impl, other);
}
;
_.get_1 = function get_19(index_0){
  return $get_8(this._impl, index_0);
}
;
_.hashCode$ = function hashCode_43(){
  return hashCode_26(this._impl);
}
;
_.indexOf_0 = function indexOf_5(element){
  return $indexOf_2(this._impl, element, 0);
}
;
_.iterator = function iterator_18(){
  return $listIterator_0(this);
}
;
_.placeholderListener = function placeholderListener_1(){
  return NOOP_1;
}
;
_.size_1 = function size_23(){
  return this._impl.array.length;
}
;
_.toArray_0 = function toArray_11(array){
  return $toArray_1(this._impl, array);
}
;
_.toString$ = function toString_74(){
  return 'RList(' + this._impl + ')';
}
;
var ADD, NOOP_1, REMOVE;
var Lreact_RList_2_classLit = createForClass('react', 'RList', 240, Lreact_RCollection_2_classLit);
function RList$1(){
}

defineClass(504, 637, {}, RList$1);
var Lreact_RList$1_2_classLit = createForClass('react', 'RList/1', 504, Lreact_RList$Listener_2_classLit);
function RList$2(){
}

defineClass(505, 610, {}, RList$2);
_.notify_0 = function notify_3(lner, index_0, elem, ignored){
  lner.onAdd_0(index_0.value_0, elem);
}
;
var Lreact_RList$2_2_classLit = createForClass('react', 'RList/2', 505, Lreact_Reactor$Notifier_2_classLit);
function RList$4(){
}

defineClass(506, 610, {}, RList$4);
_.notify_0 = function notify_4(lner, index_0, elem, ignored){
  lner.onRemove_0(index_0.value_0, elem);
}
;
var Lreact_RList$4_2_classLit = createForClass('react', 'RList/4', 506, Lreact_Reactor$Notifier_2_classLit);
function RList$5(val$iiter){
  this.val$iiter2 = val$iiter;
}

defineClass(507, 1, {}, RList$5);
_.hasNext = function hasNext_13(){
  return this.val$iiter2.hasNext();
}
;
_.next_0 = function next_13(){
  return this.val$iiter2.next_0();
}
;
var Lreact_RList$5_2_classLit = createForClass('react', 'RList/5', 507, Ljava_lang_Object_2_classLit);
function $fail(this$static, cause){
  $updateAndNotify_0(this$static._result, new Try$Failure(cause), false);
}

function $succeed(this$static, value_0){
  $updateAndNotify_0(this$static._result, new Try$Success(value_0), false);
}

function RPromise(){
  RPromise_0.call(this, new RPromise$3);
}

function RPromise_0(result){
  RFuture.call(this, result);
  this._result = result;
}

defineClass(206, 160, {}, RPromise);
var Lreact_RPromise_2_classLit = createForClass('react', 'RPromise', 206, Lreact_RFuture_2_classLit);
function $updateAndNotify_0(this$static, value_0, force){
  return $updateAndNotify_1(this$static, value_0, force);
}

function $updateAndNotify_1(this$static, value_0, force){
  if (this$static._value != null)
    throw new IllegalStateException_0('Already completed');
  try {
    return $updateAndNotify(this$static, value_0, force);
  }
   finally {
    this$static._listeners = null;
  }
}

function RPromise$3(){
  $clinit_AbstractValue();
  Value.call(this, null);
}

defineClass(357, 31, $intern_54, RPromise$3);
_.updateAndNotify = function updateAndNotify_0(value_0, force){
  return $updateAndNotify_0(this, value_0, force);
}
;
var Lreact_RPromise$3_2_classLit = createForClass('react', 'RPromise/3', 357, Lreact_Value_2_classLit);
defineClass(609, 1, {});
var Lreact_Reactor$Runs_2_classLit = createForClass('react', 'Reactor/Runs', 609, Ljava_lang_Object_2_classLit);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(274, 609, {}, Reactor$1);
_.run = function run_6(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
  this.this$01.connectionAdded();
}
;
var Lreact_Reactor$1_2_classLit = createForClass('react', 'Reactor/1', 274, Lreact_Reactor$Runs_2_classLit);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(275, 609, {}, Reactor$2);
_.run = function run_7(){
  this.this$01._listeners = remove_2(this.this$01._listeners, this.val$cons2);
  this.this$01.connectionRemoved();
}
;
var Lreact_Reactor$2_2_classLit = createForClass('react', 'Reactor/2', 275, Lreact_Reactor$Runs_2_classLit);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(276, 609, {}, Reactor$4);
_.run = function run_8(){
  this.this$01.notify(this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass('react', 'Reactor/4', 276, Lreact_Reactor$Runs_2_classLit);
function Signal$1(this$0){
  this.this$01 = this$0;
}

defineClass(202, 607, {}, Signal$1);
_.onEmit_0 = function onEmit_21(value_0){
  $emit(this.this$01, value_0);
}
;
var Lreact_Signal$1_2_classLit = createForClass('react', 'Signal/1', 202, Lreact_Slot_2_classLit);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP_2 = new Slots$1;
}

var NOOP_2;
function Slots$1(){
}

defineClass(460, 614, {}, Slots$1);
_.onEmit = function onEmit_22(){
}
;
var Lreact_Slots$1_2_classLit = createForClass('react', 'Slots/1', 460, Lreact_UnitSlot_2_classLit);
defineClass(631, 1, {});
var Lreact_Try_2_classLit = createForClass('react', 'Try', 631, Ljava_lang_Object_2_classLit);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(224, 631, {}, Try$Failure);
_.get_0 = function get_20(){
  if (instanceOf(this.cause, 8)) {
    throw unwrap(this.cause);
  }
   else if (instanceOf(this.cause, 71)) {
    throw this.cause;
  }
   else {
    throw unwrap($initCause(new RuntimeException, this.cause));
  }
}
;
_.isSuccess = function isSuccess(){
  return false;
}
;
_.map_1 = function map_1(func){
  return this;
}
;
_.toString$ = function toString_75(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass('react', 'Try/Failure', 224, Lreact_Try_2_classLit);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(129, 631, {}, Try$Success);
_.get_0 = function get_21(){
  return this.value_0;
}
;
_.isSuccess = function isSuccess_0(){
  return true;
}
;
_.map_1 = function map_2(func){
  var t;
  try {
    return new Try$Success($apply_0(func, this.value_0));
  }
   catch ($e0) {
    $e0 = wrap_0($e0);
    if (instanceOf($e0, 10)) {
      t = $e0;
      return new Try$Failure(t);
    }
     else 
      throw unwrap($e0);
  }
}
;
_.toString$ = function toString_76(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass('react', 'Try/Success', 129, Lreact_Try_2_classLit);
function Value$1(this$0){
  this.this$01 = this$0;
}

defineClass(360, 607, {}, Value$1);
_.onEmit_0 = function onEmit_23(value_0){
  this.this$01.updateAndNotify(value_0, false);
}
;
var Lreact_Value$1_2_classLit = createForClass('react', 'Value/1', 360, Lreact_Slot_2_classLit);
var Lreact_ValueView_2_classLit = createForInterface('react', 'ValueView');
function $clinit_Values(){
  $clinit_Values = emptyMethod;
  COMPUTE_AND = new Values$1;
  COMPUTE_OR = new Values$2;
}

function aggValue(values, aggOp){
  $clinit_Values();
  return new Values$7(aggOp, values);
}

var COMPUTE_AND, COMPUTE_OR;
function $apply_2(values){
  var value_0, value$iterator;
  for (value$iterator = values.iterator(); value$iterator.hasNext();) {
    value_0 = value$iterator.next_0();
    if (!value_0.get_0().value_0)
      return $clinit_Boolean() , $clinit_Boolean() , FALSE;
  }
  return $clinit_Boolean() , $clinit_Boolean() , TRUE;
}

function Values$1(){
}

defineClass(565, 1, {}, Values$1);
_.apply_0 = function apply_8(values){
  return $apply_2(values);
}
;
var Lreact_Values$1_2_classLit = createForClass('react', 'Values/1', 565, Ljava_lang_Object_2_classLit);
function $apply_3(values){
  var value_0, value$iterator;
  for (value$iterator = values.iterator(); value$iterator.hasNext();) {
    value_0 = value$iterator.next_0();
    if (value_0.get_0().value_0)
      return $clinit_Boolean() , $clinit_Boolean() , TRUE;
  }
  return $clinit_Boolean() , $clinit_Boolean() , FALSE;
}

function Values$2(){
}

defineClass(566, 1, {}, Values$2);
_.apply_0 = function apply_9(values){
  return $apply_3(values);
}
;
var Lreact_Values$2_2_classLit = createForClass('react', 'Values/2', 566, Ljava_lang_Object_2_classLit);
function Values$7(val$aggOp, val$values){
  $clinit_AbstractValue();
  this.val$aggOp1 = val$aggOp;
  this.val$values2 = val$values;
  this._trigger = new Values$7$1(this, this.val$aggOp1, this.val$values2);
}

defineClass(567, 621, $intern_54, Values$7);
_.connect_0 = function connect_1(){
  var conns, ii, iter;
  conns = initDim(Lreact_Connection_2_classLit, $intern_1, 126, this.val$values2.size_1(), 0, 1);
  iter = this.val$values2.iterator();
  for (ii = 0; ii < conns.length; ii++)
    conns[ii] = iter.next_0().connect(this._trigger);
  return new Connection$1(conns);
}
;
_.get_0 = function get_22(){
  return this.val$aggOp1.apply_0(this.val$values2);
}
;
var Lreact_Values$7_2_classLit = createForClass('react', 'Values/7', 567, Lreact_MappedValue_2_classLit);
function Values$7$1(this$1, val$aggOp, val$values){
  this.this$11 = this$1;
  this.val$aggOp2 = val$aggOp;
  this.val$values3 = val$values;
  this._current = this.val$aggOp2.apply_0(this.val$values3).value_0;
}

defineClass(568, 614, {}, Values$7$1);
_.onEmit = function onEmit_24(){
  var ovalue;
  ovalue = this._current;
  this._current = this.val$aggOp2.apply_0(this.val$values3).value_0;
  $notifyChange(this.this$11, ($clinit_Boolean() , this._current?TRUE:FALSE), ovalue?TRUE:FALSE);
}
;
_._current = false;
var Lreact_Values$7$1_2_classLit = createForClass('react', 'Values/7/1', 568, Lreact_UnitSlot_2_classLit);
defineClass(629, 1, {});
var Ltripleplay_anim_AnimBuilder_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder', 629, Ljava_lang_Object_2_classLit);
function AnimBuilder$16(val$signal, val$value){
  this.val$signal2 = val$signal;
  this.val$value3 = val$value;
}

defineClass(220, 1, {}, AnimBuilder$16);
_.run = function run_9(){
  $emit(this.val$signal2, this.val$value3);
}
;
var Ltripleplay_anim_AnimBuilder$16_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/16', 220, Ljava_lang_Object_2_classLit);
function AnimBuilder$19(val$layer){
  this.val$layer1 = val$layer;
}

defineClass(221, 1, {}, AnimBuilder$19);
_.initial = function initial_0(){
  return this.val$layer1.transform.tx;
}
;
_.set_0 = function set_1(value_0){
  $setTx(this.val$layer1, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$19_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/19', 221, Ljava_lang_Object_2_classLit);
function AnimBuilder$2(val$layer){
  this.val$layer2 = val$layer;
}

defineClass(218, 1, {}, AnimBuilder$2);
_.initial = function initial_1(){
  return this.val$layer2.scaleX;
}
;
_.set_0 = function set_2(value_0){
  $setScale(this.val$layer2, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$2_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/2', 218, Ljava_lang_Object_2_classLit);
function AnimBuilder$20(val$layer){
  this.val$layer1 = val$layer;
}

defineClass(128, 1, {}, AnimBuilder$20);
_.initial = function initial_2(){
  return this.val$layer1.transform.ty;
}
;
_.set_0 = function set_3(value_0){
  $setTy(this.val$layer1, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$20_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/20', 128, Ljava_lang_Object_2_classLit);
function AnimBuilder$3(val$layer){
  this.val$layer2 = val$layer;
}

defineClass(219, 1, {}, AnimBuilder$3);
_.initial = function initial_3(){
  return this.val$layer2.alpha_1;
}
;
_.set_0 = function set_4(value_0){
  $setAlpha(this.val$layer2, value_0);
}
;
var Ltripleplay_anim_AnimBuilder$3_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/3', 219, Ljava_lang_Object_2_classLit);
function AnimBuilder$4(val$parent, val$child){
  this.val$parent2 = val$parent;
  this.val$child3 = val$child;
}

defineClass(430, 1, {}, AnimBuilder$4);
_.run = function run_10(){
  $add_3(this.val$parent2, this.val$child3);
}
;
var Ltripleplay_anim_AnimBuilder$4_2_classLit = createForClass('tripleplay.anim', 'AnimBuilder/4', 430, Ljava_lang_Object_2_classLit);
function $clinit_Animation(){
  $clinit_Animation = emptyMethod;
  new Random;
}

function $apply_4(this$static, time){
  var remain;
  if (this$static._canceled)
    return 0;
  remain = this$static._current.apply_1(time);
  if (remain > 0)
    return remain;
  while (remain <= 0) {
    if (this$static._canceled)
      return 0;
    this$static._current = this$static._current._next;
    if (!this$static._current)
      return remain;
    this$static._current.init(time + remain);
    remain = this$static._current.apply_1(time);
  }
  return remain;
}

function $then(this$static){
  return new Animation$1(this$static, this$static);
}

function Animation(){
  this._root = this;
}

defineClass(167, 1, {});
_.init = function init_0(time){
  this._start = time;
  this._current = this;
}
;
_.toString$ = function toString_77(){
  var name_0;
  name_0 = $getName(this.___clazz$);
  name_0 = $substring(name_0, name_0.lastIndexOf('.') + 1);
  return name_0 + ':' + getHashCode(this) + ' start:' + this._start;
}
;
_._canceled = false;
_._start = 0;
var Ltripleplay_anim_Animation_2_classLit = createForClass('tripleplay.anim', 'Animation', 167, Ljava_lang_Object_2_classLit);
function $add_7(this$static, anim){
  if (this$static._added)
    throw new IllegalStateException_0('Cannot add multiple animations off the same then()');
  this$static._added = true;
  anim._root = this$static.this$01._root;
  anim._next = this$static.this$02._next;
  this$static.this$01._next = anim;
  return anim;
}

defineClass(428, 629, {});
_._added = false;
var Ltripleplay_anim_Animation$ChainBuilder_2_classLit = createForClass('tripleplay.anim', 'Animation/ChainBuilder', 428, Ltripleplay_anim_AnimBuilder_2_classLit);
function Animation$1(this$0, this$0_1){
  this.this$02 = this$0_1;
  this.this$01 = this$0;
}

defineClass(429, 428, {}, Animation$1);
var Ltripleplay_anim_Animation$1_2_classLit = createForClass('tripleplay.anim', 'Animation/1', 429, Ltripleplay_anim_Animation$ChainBuilder_2_classLit);
function Animation$2(this$0){
  this.this$01 = this$0;
}

defineClass(217, 1, {}, Animation$2);
_.toString$ = function toString_78(){
  return 'handle:' + this.this$01;
}
;
var Ltripleplay_anim_Animation$2_2_classLit = createForClass('tripleplay.anim', 'Animation/2', 217, Ljava_lang_Object_2_classLit);
function $makeComplete(this$static){
  if (!this$static._complete) {
    this$static._action.run();
    this$static._complete = true;
  }
}

function Animation$Action(action){
  $clinit_Animation();
  Animation.call(this);
  this._action = action;
}

defineClass(86, 167, {}, Animation$Action);
_.apply_1 = function apply_10(time){
  $makeComplete(this);
  return this._start - time;
}
;
_.init = function init_1(time){
  this._start = time;
  this._current = this;
  this._complete = false;
}
;
_._complete = false;
var Ltripleplay_anim_Animation$Action_2_classLit = createForClass('tripleplay.anim', 'Animation/Action', 86, Ltripleplay_anim_Animation_2_classLit);
function Animation$Delay(duration){
  $clinit_Animation();
  Animation.call(this);
  this._duration = duration;
}

defineClass(127, 167, {}, Animation$Delay);
_.apply_1 = function apply_11(time){
  return this._start + this._duration - time;
}
;
_._duration = 0;
var Ltripleplay_anim_Animation$Delay_2_classLit = createForClass('tripleplay.anim', 'Animation/Delay', 127, Ltripleplay_anim_Animation_2_classLit);
function $in(this$static, duration){
  this$static._duration = duration;
  return this$static;
}

function $using(this$static, interp){
  this$static._interp = interp;
  return this$static;
}

defineClass(427, 167, {});
_._duration = 1000;
var Ltripleplay_anim_Animation$Interped_2_classLit = createForClass('tripleplay.anim', 'Animation/Interped', 427, Ltripleplay_anim_Animation_2_classLit);
function $from(this$static){
  this$static._from = 0;
  return this$static;
}

function $to(this$static, value_0){
  this$static._to = value_0;
  return this$static;
}

function Animation$One(target){
  $clinit_Animation();
  Animation.call(this);
  this._interp = ($clinit_Interpolator() , LINEAR);
  this._target = target;
}

defineClass(38, 427, {}, Animation$One);
_.apply_1 = function apply_12(time){
  var dt;
  dt = time - this._start;
  this._target.set_0(dt < this._duration?$apply_5(this._interp, this._from, this._to - this._from, dt, this._duration):this._to);
  return this._duration - dt;
}
;
_.init = function init_2(time){
  this._start = time;
  this._current = this;
  this._from == $intern_56 && (this._from = this._target.initial());
}
;
_.toString$ = function toString_79(){
  return $ensureNamesAreInitialized(Ltripleplay_anim_Animation$One_2_classLit) , Ltripleplay_anim_Animation$One_2_classLit.typeName + ' start:' + this._start + ' to ' + this._to;
}
;
_._from = $intern_56;
_._to = 0;
var Ltripleplay_anim_Animation$One_2_classLit = createForClass('tripleplay.anim', 'Animation/One', 38, Ltripleplay_anim_Animation$Interped_2_classLit);
function $add_8(this$static, anim){
  $add_1(this$static._accum, anim);
  return anim;
}

function $clear_2(this$static){
  this$static._anims.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  this$static._nanims.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  this$static._barriers.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  this$static._accum = this$static._nanims;
}

function $onPaint(this$static, clock){
  var ii, ii0, ll, ll0, time;
  time = clock.tick;
  if (this$static._nanims.array.length != 0) {
    for (ii0 = 0 , ll0 = this$static._nanims.array.length; ii0 < ll0; ii0++) {
      $get_8(this$static._nanims, ii0).init(time);
    }
    $addAll_0(this$static._anims, this$static._nanims);
    this$static._nanims.array = initDim(Ljava_lang_Object_2_classLit, $intern_1, 1, 0, 3, 1);
  }
  for (ii = 0 , ll = this$static._anims.array.length; ii < ll; ii++) {
    if ($apply_4($get_8(this$static._anims, ii), time) <= 0) {
      this$static._anims.remove(ii--);
      ll -= 1;
    }
  }
  if (this$static._barriers.array.length != 0 && this$static._anims.array.length == 0 && this$static._nanims.array.length == 0 && $get_8(this$static._barriers, 0).nullMethod()) {
    this$static._barriers.remove(0);
    $addAll_0(this$static._nanims, null.nullField);
    this$static._barriers.array.length == 0 && (this$static._accum = this$static._nanims);
  }
}

function Animator(){
  this.onPaint = new Animator$1(this);
  this._anims = new ArrayList;
  this._nanims = new ArrayList;
  this._accum = this._nanims;
  this._barriers = new ArrayList;
}

defineClass(222, 629, {}, Animator);
var Ltripleplay_anim_Animator_2_classLit = createForClass('tripleplay.anim', 'Animator', 222, Ltripleplay_anim_AnimBuilder_2_classLit);
function Animator$1(this$0){
  this.this$01 = this$0;
}

defineClass(431, 607, {}, Animator$1);
_.onEmit_0 = function onEmit_25(clock){
  $onPaint(this.this$01, clock);
}
;
var Ltripleplay_anim_Animator$1_2_classLit = createForClass('tripleplay.anim', 'Animator/1', 431, Lreact_Slot_2_classLit);
function $clinit_Log(){
  $clinit_Log = emptyMethod;
  log_2 = new Logger('tpgame');
}

var log_2;
defineClass(611, 1, {});
var Ltripleplay_game_ScreenStack$Transition_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transition', 611, Ljava_lang_Object_2_classLit);
function ScreenStack$1(){
}

defineClass(281, 611, {}, ScreenStack$1);
var Ltripleplay_game_ScreenStack$1_2_classLit = createForClass('tripleplay.game', 'ScreenStack/1', 281, Ltripleplay_game_ScreenStack$Transition_2_classLit);
function $complete(this$static){
  this$static.this$01_0._transitor = null;
  this$static._onPaint.close_0();
  $complete_0(this$static._trans, this$static._oscreen);
  $setTranslation(this$static._nscreen.layer, this$static.this$01_0.originX, this$static.this$01_0.originY);
  this$static.onComplete();
}

function $init_0(this$static){
  this$static.showNewScreen();
  $init_1(this$static._trans, this$static._oscreen, this$static._nscreen);
  this$static._trans == ($clinit_ScreenStack() , NOOP)?(this$static.this$01_0._transitor = null , this$static._onPaint.close_0() , $complete_0(this$static._trans, this$static._oscreen) , $setTranslation(this$static._nscreen.layer, this$static.this$01_0.originX, this$static.this$01_0.originY) , this$static.onComplete()):(this$static._onPaint = $addConnection(this$static.this$01_0._game.paint, new ScreenStack$Transitor$1(this$static)));
}

function $paint_0(this$static, clock){
  if (this$static._skipFrames > 0)
    this$static._skipFrames -= 1;
  else {
    this$static._elapsed += clock.dt;
    $update_1(this$static._trans, this$static._oscreen, this$static._nscreen, this$static._elapsed) && (this$static.this$01_0._transitor = null , this$static._onPaint.close_0() , $complete_0(this$static._trans, this$static._oscreen) , $setTranslation(this$static._nscreen.layer, this$static.this$01_0.originX, this$static.this$01_0.originY) , this$static.onComplete());
  }
}

function ScreenStack$Transitor(this$0, oscreen, nscreen, trans){
  this.this$01_0 = this$0;
  this._onPaint = ($clinit_Closeable$Util() , NOOP_0);
  this._oscreen = oscreen;
  this._nscreen = nscreen;
  this._trans = trans;
}

defineClass(154, 1, {});
_.onComplete = function onComplete(){
}
;
_.showNewScreen = function showNewScreen(){
  $addAndShow(this.this$01_0, this._nscreen);
}
;
_._elapsed = 0;
_._skipFrames = 0;
var Ltripleplay_game_ScreenStack$Transitor_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transitor', 154, Ljava_lang_Object_2_classLit);
function ScreenStack$2(this$0, this$0_1, $anonymous0, $anonymous1, $anonymous2, val$otop){
  this.this$02 = this$0_1;
  this.val$otop6 = val$otop;
  ScreenStack$Transitor.call(this, this$0, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(282, 154, {}, ScreenStack$2);
_.onComplete = function onComplete_0(){
  $hide(this.this$02, this.val$otop6);
}
;
var Ltripleplay_game_ScreenStack$2_2_classLit = createForClass('tripleplay.game', 'ScreenStack/2', 282, Ltripleplay_game_ScreenStack$Transitor_2_classLit);
function ScreenStack$4(this$0, this$0_1, $anonymous0, $anonymous1, $anonymous2, val$otop){
  this.this$02 = this$0_1;
  this.val$otop6 = val$otop;
  ScreenStack$Transitor.call(this, this$0, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(283, 154, {}, ScreenStack$4);
_.onComplete = function onComplete_1(){
  $hide(this.this$02, this.val$otop6);
}
;
var Ltripleplay_game_ScreenStack$4_2_classLit = createForClass('tripleplay.game', 'ScreenStack/4', 283, Ltripleplay_game_ScreenStack$Transitor_2_classLit);
defineClass(279, 154, {});
_.showNewScreen = function showNewScreen_0(){
  $justShow(this.this$01, this._nscreen);
}
;
var Ltripleplay_game_ScreenStack$Untransitor_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Untransitor', 279, Ltripleplay_game_ScreenStack$Transitor_2_classLit);
function ScreenStack$5(this$0, this$0_1, $anonymous0, $anonymous1, $anonymous2, val$otop){
  this.this$02 = this$0_1;
  this.val$otop6 = val$otop;
  this.this$01 = this$0;
  ScreenStack$Transitor.call(this, this$0, $anonymous0, $anonymous1, $anonymous2);
}

defineClass(284, 279, {}, ScreenStack$5);
_.onComplete = function onComplete_2(){
  $hide(this.this$02, this.val$otop6);
}
;
var Ltripleplay_game_ScreenStack$5_2_classLit = createForClass('tripleplay.game', 'ScreenStack/5', 284, Ltripleplay_game_ScreenStack$Untransitor_2_classLit);
function ScreenStack$Transitor$1(this$1){
  this.this$11 = this$1;
}

defineClass(280, 607, {}, ScreenStack$Transitor$1);
_.onEmit_0 = function onEmit_26(clock){
  $paint_0(this.this$11, clock);
}
;
var Ltripleplay_game_ScreenStack$Transitor$1_2_classLit = createForClass('tripleplay.game', 'ScreenStack/Transitor/1', 280, Lreact_Slot_2_classLit);
defineClass(630, 611, {});
var Ltripleplay_game_trans_AbstractTransition_2_classLit = createForClass('tripleplay.game.trans', 'AbstractTransition', 630, Ltripleplay_game_ScreenStack$Transition_2_classLit);
defineClass(432, 630, {});
var Ltripleplay_game_trans_InterpedTransition_2_classLit = createForClass('tripleplay.game.trans', 'InterpedTransition', 432, Ltripleplay_game_trans_AbstractTransition_2_classLit);
function $complete_0(this$static, oscreen){
  $setTranslation(oscreen.layer, this$static._osx, this$static._osy);
}

function $dir(this$static, dir_0){
  this$static._dir = dir_0;
  return this$static;
}

function $init_1(this$static, oscreen, nscreen){
  switch (this$static._dir) {
    case 0:
      this$static._odx = this$static._originX;
      this$static._ody = this$static._originY - oscreen.game_1().plat.graphics.viewSize.height_0;
      this$static._nsx = this$static._originX;
      this$static._nsy = this$static._originY + nscreen.game_1().plat.graphics.viewSize.height_0;
      break;
    case 1:
      this$static._odx = this$static._originX;
      this$static._ody = this$static._originY + oscreen.game_1().plat.graphics.viewSize.height_0;
      this$static._nsx = this$static._originX;
      this$static._nsy = this$static._originY - nscreen.game_1().plat.graphics.viewSize.height_0;
      break;
    case 2:
    default:this$static._odx = this$static._originX - oscreen.game_1().plat.graphics.viewSize.width_0;
      this$static._ody = this$static._originY;
      this$static._nsx = this$static._originX + nscreen.game_1().plat.graphics.viewSize.width_0;
      this$static._nsy = this$static._originY;
      break;
    case 3:
      this$static._odx = this$static._originX + oscreen.game_1().plat.graphics.viewSize.width_0;
      this$static._ody = this$static._originY;
      this$static._nsx = this$static._originX - nscreen.game_1().plat.graphics.viewSize.width_0;
      this$static._nsy = this$static._originY;
  }
  this$static._osx = oscreen.layer.transform.tx;
  this$static._osy = oscreen.layer.transform.ty;
  $setTranslation(nscreen.layer, this$static._nsx, this$static._nsy);
}

function $update_1(this$static, oscreen, nscreen, elapsed){
  var nx, ny, ox, oy;
  ox = $applyClamp(this$static._interp, this$static._originX, this$static._odx - this$static._originX, elapsed);
  oy = $applyClamp(this$static._interp, this$static._originY, this$static._ody - this$static._originY, elapsed);
  $setTranslation(oscreen.layer, ox, oy);
  nx = $applyClamp(this$static._interp, this$static._nsx, this$static._originX - this$static._nsx, elapsed);
  ny = $applyClamp(this$static._interp, this$static._nsy, this$static._originY - this$static._nsy, elapsed);
  $setTranslation(nscreen.layer, nx, ny);
  return elapsed >= 500;
}

function SlideTransition(stack_0){
  this._interp = ($clinit_Interpolator() , EASE_INOUT);
  this._originX = stack_0.originX;
  this._originY = stack_0.originY;
}

defineClass(168, 432, {}, SlideTransition);
_._dir = 2;
_._nsx = 0;
_._nsy = 0;
_._odx = 0;
_._ody = 0;
_._originX = 0;
_._originY = 0;
_._osx = 0;
_._osy = 0;
var Ltripleplay_game_trans_SlideTransition_2_classLit = createForClass('tripleplay.game.trans', 'SlideTransition', 168, Ltripleplay_game_trans_InterpedTransition_2_classLit);
function Widget(){
  Element_0.call(this);
  this._behave = this.createBehavior();
  if (this._behave) {
    $set_0(this, ($clinit_Element$Flag() , HIT_DESCEND), false);
    $set_0(this, HIT_ABSORB, true);
    $addConnection($events(this.layer), this._behave);
  }
}

defineClass(450, 14, $intern_26);
_.createBehavior = function createBehavior(){
  return null;
}
;
_.layout = function layout_4(){
  $layout(this);
  !!this._behave && $layout_0(this._behave);
}
;
var Ltripleplay_ui_Widget_2_classLit = createForClass('tripleplay.ui', 'Widget', 450, Ltripleplay_ui_Element_2_classLit);
function TextWidget(){
  Widget.call(this);
  this._tglyph = new Glyph(this.layer);
}

defineClass(230, 450, $intern_26);
_.createLayoutData = function createLayoutData_1(hintX, hintY){
  return new TextWidget$TextLayoutData(this, hintX, hintY);
}
;
_.wasRemoved = function wasRemoved_0(){
  $wasRemoved(this);
  $close_9(this._tglyph);
}
;
var Ltripleplay_ui_TextWidget_2_classLit = createForClass('tripleplay.ui', 'TextWidget', 230, Ltripleplay_ui_Widget_2_classLit);
defineClass(451, 230, $intern_26);
_.icon_0 = function icon_0(){
  return this.icon._value;
}
;
_.text_1 = function text_1(){
  return this.text_0._value;
}
;
var Ltripleplay_ui_AbstractTextButton_2_classLit = createForClass('tripleplay.ui', 'AbstractTextButton', 451, Ltripleplay_ui_TextWidget_2_classLit);
function $inset(this$static, uniformInset){
  this$static.insets = ($clinit_Insets() , new Insets(uniformInset, uniformInset, uniformInset, uniformInset));
  return this$static;
}

function $inset_0(this$static, top_0, right, bottom, left){
  this$static.insets = new Insets(top_0, right, bottom, left);
  return this$static;
}

function Background(){
  this.insets = ($clinit_Insets() , ZERO_0);
}

defineClass(113, 1, {});
var Ltripleplay_ui_Background_2_classLit = createForClass('tripleplay.ui', 'Background', 113, Ljava_lang_Object_2_classLit);
function Background$1(val$color){
  this.val$color1 = val$color;
  Background.call(this);
}

defineClass(235, 113, {}, Background$1);
_.instantiate = function instantiate(size_0){
  return new Background$LayerInstance(this, size_0, new Background$1$1(this.val$color1, size_0));
}
;
_.val$color1 = 0;
var Ltripleplay_ui_Background$1_2_classLit = createForClass('tripleplay.ui', 'Background/1', 235, Ltripleplay_ui_Background_2_classLit);
function Background$1$1(val$color, val$size){
  this.val$color2 = val$color;
  this.val$size3 = val$size;
  Layer.call(this);
}

defineClass(462, 18, $intern_24, Background$1$1);
_.paintImpl = function paintImpl_2(surf){
  $fillRect_0($setFillColor(surf, this.val$color2), 0, 0, this.val$size3.width_0, this.val$size3.height_0);
}
;
_.val$color2 = 0;
var Ltripleplay_ui_Background$1$1_2_classLit = createForClass('tripleplay.ui', 'Background/1/1', 462, Lplayn_scene_Layer_2_classLit);
function Background$2(val$bgColor){
  this.val$bgColor1 = val$bgColor;
  this.val$ulColor2 = $intern_57;
  this.val$brColor3 = $intern_34;
  Background.call(this);
}

defineClass(236, 113, {}, Background$2);
_.instantiate = function instantiate_0(size_0){
  return new Background$LayerInstance(this, size_0, new Background$2$1(size_0, this.val$bgColor1, this.val$ulColor2, this.val$brColor3));
}
;
_.val$bgColor1 = 0;
_.val$brColor3 = 0;
_.val$ulColor2 = 0;
var Ltripleplay_ui_Background$2_2_classLit = createForClass('tripleplay.ui', 'Background/2', 236, Ltripleplay_ui_Background_2_classLit);
function Background$2$1(val$size, val$bgColor, val$ulColor, val$brColor){
  this.val$size2 = val$size;
  this.val$bgColor3 = val$bgColor;
  this.val$ulColor4 = val$ulColor;
  this.val$brColor5 = val$brColor;
  Layer.call(this);
}

defineClass(463, 18, $intern_24, Background$2$1);
_.paintImpl = function paintImpl_3(surf){
  var height, width_0;
  width_0 = this.val$size2.width_0;
  height = this.val$size2.height_0;
  $fillRect_0($setFillColor(surf, this.val$bgColor3), 0, 0, width_0, height);
  $drawLine($drawLine($setFillColor(surf, this.val$ulColor4), 0, 0, width_0, 0, 2), 0, 0, 0, height, 2);
  $drawLine($drawLine($drawLine($drawLine($setFillColor(surf, this.val$brColor5), width_0, 0, width_0, height, 1), 1, height - 1, width_0 - 1, height - 1, 1), 0, height, width_0, height, 1), width_0 - 1, 1, width_0 - 1, height - 1, 1);
}
;
_.val$bgColor3 = 0;
_.val$brColor5 = 0;
_.val$ulColor4 = 0;
var Ltripleplay_ui_Background$2$1_2_classLit = createForClass('tripleplay.ui', 'Background/2/1', 463, Lplayn_scene_Layer_2_classLit);
function Background$3(){
  this.val$bgColor1 = -1;
  this.val$color2 = 0;
  this.val$thickness3 = 1;
  Background.call(this);
}

defineClass(464, 113, {}, Background$3);
_.instantiate = function instantiate_1(size_0){
  return new Background$LayerInstance(this, size_0, new Background$3$1(size_0, this.val$bgColor1, this.val$color2, this.val$thickness3));
}
;
_.val$bgColor1 = 0;
_.val$color2 = 0;
_.val$thickness3 = 0;
var Ltripleplay_ui_Background$3_2_classLit = createForClass('tripleplay.ui', 'Background/3', 464, Ltripleplay_ui_Background_2_classLit);
function Background$3$1(val$size, val$bgColor, val$color, val$thickness){
  this.val$size2 = val$size;
  this.val$bgColor3 = val$bgColor;
  this.val$color4 = val$color;
  this.val$thickness5 = val$thickness;
  Layer.call(this);
}

defineClass(465, 18, $intern_24, Background$3$1);
_.paintImpl = function paintImpl_4(surf){
  var height, width_0;
  width_0 = this.val$size2.width_0;
  height = this.val$size2.height_0;
  $fillRect_0($setFillColor(surf, this.val$bgColor3), 0, 0, width_0, height);
  $fillRect_0($fillRect_0($fillRect_0($fillRect_0($setFillColor(surf, this.val$color4), 0, 0, width_0, this.val$thickness5), 0, 0, this.val$thickness5, height), width_0 - this.val$thickness5, 0, this.val$thickness5, height), 0, height - this.val$thickness5, width_0, this.val$thickness5);
}
;
_.val$bgColor3 = 0;
_.val$color4 = 0;
_.val$thickness5 = 0;
var Ltripleplay_ui_Background$3$1_2_classLit = createForClass('tripleplay.ui', 'Background/3/1', 465, Lplayn_scene_Layer_2_classLit);
function Background$Instance(this$0, size_0){
  this.this$01 = this$0;
  this.size_0 = new Dimension_1(size_0);
}

defineClass(234, 1, $intern_20);
var Ltripleplay_ui_Background$Instance_2_classLit = createForClass('tripleplay.ui', 'Background/Instance', 234, Ljava_lang_Object_2_classLit);
function Background$LayerInstance(this$0, size_0, layer){
  Background$Instance.call(this, this$0, size_0);
  this._layer = layer;
}

defineClass(135, 234, $intern_20, Background$LayerInstance);
_.addTo = function addTo(parent_0, x_0, y_0, depthAdjust){
  $setDepth(this._layer, -10 + depthAdjust);
  $translate_1($transform_0(this._layer), x_0, y_0);
  $add_3(parent_0, this._layer);
}
;
_.close_0 = function close_19(){
  this._layer.close_0();
}
;
var Ltripleplay_ui_Background$LayerInstance_2_classLit = createForClass('tripleplay.ui', 'Background/LayerInstance', 135, Ltripleplay_ui_Background$Instance_2_classLit);
function $resolveStyle(this$static, style){
  return resolveStyle(this$static._owner, style);
}

function $updateSelected(this$static, selected){
  var wasSelected;
  wasSelected = $isSet_0(this$static._owner, ($clinit_Element$Flag() , SELECTED));
  if (selected != wasSelected) {
    $set_0(this$static._owner, SELECTED, selected);
    $invalidate(this$static._owner);
  }
  return wasSelected;
}

defineClass(484, 618, {});
_.onDrag = function onDrag_0(iact){
  $isSet_0(this._owner, ($clinit_Element$Flag() , ENABLED)) && this.onHover(iact, $contains_2(this._owner, iact.local.x_0, iact.local.y_0));
}
;
_.onEnd = function onEnd_0(iact){
  this.onRelease(iact) && this.onClick(iact);
}
;
_.onStart = function onStart_0(iact){
  $isSet_0(this._owner, ($clinit_Element$Flag() , ENABLED)) && this.onPress(iact);
}
;
var Ltripleplay_ui_Behavior_2_classLit = createForClass('tripleplay.ui', 'Behavior', 484, Lplayn_scene_Pointer$Listener_2_classLit);
defineClass(485, 484, {});
_.onCancel = function onCancel_0(iact){
  $updateSelected(this, false);
}
;
_.onClick = function onClick_0(iact){
}
;
_.onHover = function onHover(iact, inBounds){
  $updateSelected(this, inBounds);
}
;
_.onPress = function onPress(iact){
  $updateSelected(this, true);
}
;
_.onRelease = function onRelease(iact){
  return $updateSelected(this, false);
}
;
var Ltripleplay_ui_Behavior$Select_2_classLit = createForClass('tripleplay.ui', 'Behavior/Select', 485, Ltripleplay_ui_Behavior_2_classLit);
function $clinit_Behavior$Click(){
  $clinit_Behavior$Click = emptyMethod;
  DEBOUNCE_DELAY = ($clinit_Style() , new Style$3(true, valueOf_0(500)));
}

function $layout_0(this$static){
  $resolveStyle(this$static, ($clinit_Style() , ACTION_SOUND));
  this$static._debounceDelay = $resolveStyle(this$static, DEBOUNCE_DELAY).value_0;
}

function Behavior$Click(owner){
  $clinit_Behavior$Click();
  this._owner = owner;
  this.clicked = ($clinit_AbstractSignal() , new Signal);
}

defineClass(486, 485, {}, Behavior$Click);
_.onClick = function onClick_1(iact){
  this._lastClickStamp = iact.event_0.time;
  $emit(this.clicked, this._owner);
}
;
_.onPress = function onPress_0(iact){
  iact.event_0.time - this._lastClickStamp > this._debounceDelay && $updateSelected(this, true);
}
;
_._debounceDelay = 0;
_._lastClickStamp = 0;
var DEBOUNCE_DELAY;
var Ltripleplay_ui_Behavior$Click_2_classLit = createForClass('tripleplay.ui', 'Behavior/Click', 486, Ltripleplay_ui_Behavior$Select_2_classLit);
function $onClick(this$static, onClick){
  $addConnection(this$static._behave.clicked, onClick);
  return this$static;
}

function Button(text_0){
  TextWidget.call(this);
  this.text_0 = ($clinit_AbstractValue() , new Value(null));
  this.icon = new Value(null);
  this.text_0.updateAndNotify(text_0, false);
  $addConnection(this.text_0, new Element$6(this));
  $addConnection(this.icon, new TextWidget$1(this));
  this.icon.updateAndNotify(null, false);
}

defineClass(66, 451, $intern_26, Button);
_.createBehavior = function createBehavior_0(){
  return new Behavior$Click(this);
}
;
_.getStyleClass = function getStyleClass_0(){
  return Ltripleplay_ui_Button_2_classLit;
}
;
_.toString$ = function toString_80(){
  return 'Button(' + this.text_0._value + ')';
}
;
var Ltripleplay_ui_Button_2_classLit = createForClass('tripleplay.ui', 'Button', 66, Ltripleplay_ui_AbstractTextButton_2_classLit);
function $didAdd(this$static, child){
  $add_3(this$static.layer, child.layer);
  child._parent = this$static;
  if (!!this$static.root_0() && !$willAdd(child)) {
    $set_0(child, ($clinit_Element$Flag() , IS_ADDING), true);
    child.wasAdded();
  }
}

function $didRemove(this$static, child){
  var needsRemove;
  $remove_6(this$static.layer, child.layer);
  needsRemove = $willRemove(child);
  child._parent = null;
  if (!!this$static.root_0() || needsRemove) {
    $set_0(child, ($clinit_Element$Flag() , IS_REMOVING), true);
    child.wasRemoved();
  }
}

function $wasRemoved_0(this$static){
  var child, count, ii, willDispose;
  $wasRemoved(this$static);
  willDispose = $isSet_0(this$static, ($clinit_Element$Flag() , WILL_DISPOSE));
  for (ii = 0 , count = this$static.childCount(); ii < count; ii++) {
    child = this$static.childAt(ii);
    willDispose && $set_0(child, WILL_DISPOSE, true);
    $set_0(child, IS_REMOVING, true);
    child.wasRemoved();
  }
}

function removeFromParent(element){
  var parent_0;
  if (!element._parent)
    return false;
  parent_0 = element._parent;
  $remove_9(parent_0, element);
  return true;
}

defineClass(77, 14, $intern_58);
_.computeSize = function computeSize_1(ldata, hintX, hintY){
  return this.getLayout().computeSize_1(this, hintX, hintY);
}
;
_.layout_0 = function layout_5(ldata, left, top_0, width_0, height){
  var ii, nn;
  this.getLayout().layout_2(this, left, top_0, width_0, height);
  for (ii = 0 , nn = this.childCount(); ii < nn; ii++)
    this.childAt(ii).validate();
}
;
_.wasAdded = function wasAdded_3(){
  var child, count, ii;
  $wasAdded(this);
  for (ii = 0 , count = this.childCount(); ii < count; ii++) {
    child = this.childAt(ii);
    $set_0(child, ($clinit_Element$Flag() , IS_ADDING), true);
    child.wasAdded();
  }
}
;
_.wasRemoved = function wasRemoved_1(){
  $wasRemoved_0(this);
}
;
var Ltripleplay_ui_Container_2_classLit = createForClass('tripleplay.ui', 'Container', 77, Ltripleplay_ui_Element_2_classLit);
var Ltripleplay_ui_Composite_2_classLit = createForClass('tripleplay.ui', 'Composite', null, Ltripleplay_ui_Container_2_classLit);
defineClass(438, 77, $intern_58);
var Ltripleplay_ui_Container$Mutable_2_classLit = createForClass('tripleplay.ui', 'Container/Mutable', 438, Ltripleplay_ui_Container_2_classLit);
function Element$1(this$0){
  this.this$01 = this$0;
}

defineClass(442, 1, {}, Element$1);
_.hitTest = function hitTest_0(layer, p){
  var hit;
  hit = null;
  if ($isSet_0(this.this$01, ($clinit_Element$Flag() , VISIBLE_2)) && $contains_2(this.this$01, p.x_0, p.y_0)) {
    $isSet_0(this.this$01, HIT_DESCEND) && (hit = layer.hitTestDefault(p));
    !hit && $isSet_0(this.this$01, HIT_ABSORB) && (hit = layer);
  }
  return hit;
}
;
_.toString$ = function toString_81(){
  return '<' + this.this$01._size + '>';
}
;
var Ltripleplay_ui_Element$1_2_classLit = createForClass('tripleplay.ui', 'Element/1', 442, Ljava_lang_Object_2_classLit);
function Element$6(this$0){
  this.this$01 = this$0;
  this.val$styles2 = true;
}

defineClass(228, 614, {}, Element$6);
_.onEmit = function onEmit_27(){
  $invalidate(this.this$01);
  this.val$styles2 && (this.this$01._ldata = null);
}
;
_.val$styles2 = false;
var Ltripleplay_ui_Element$6_2_classLit = createForClass('tripleplay.ui', 'Element/6', 228, Lreact_UnitSlot_2_classLit);
function Element$7(this$0){
  this.this$01 = this$0;
  GroupLayer.call(this);
}

defineClass(443, 73, $intern_24, Element$7);
_.name_1 = function name_12(){
  return this.this$01 + ' layer';
}
;
var Ltripleplay_ui_Element$7_2_classLit = createForClass('tripleplay.ui', 'Element/7', 443, Lplayn_scene_GroupLayer_2_classLit);
function $clinit_Element$Binding(){
  $clinit_Element$Binding = emptyMethod;
  NONE_0 = new Element$Binding$1;
}

defineClass(440, 1, {});
var NONE_0;
var Ltripleplay_ui_Element$Binding_2_classLit = createForClass('tripleplay.ui', 'Element/Binding', 440, Ljava_lang_Object_2_classLit);
function Element$Binding$1(){
  $clinit_Closeable$Util();
  this.next = null;
}

defineClass(441, 440, {}, Element$Binding$1);
var Ltripleplay_ui_Element$Binding$1_2_classLit = createForClass('tripleplay.ui', 'Element/Binding/1', 441, Ltripleplay_ui_Element$Binding_2_classLit);
function $clinit_Element$Flag(){
  $clinit_Element$Flag = emptyMethod;
  VALID = new Element$Flag('VALID', 0, 1);
  ENABLED = new Element$Flag('ENABLED', 1, 2);
  VISIBLE_2 = new Element$Flag('VISIBLE', 2, 4);
  SELECTED = new Element$Flag('SELECTED', 3, 8);
  WILL_DISPOSE = new Element$Flag('WILL_DISPOSE', 4, 16);
  HIT_DESCEND = new Element$Flag('HIT_DESCEND', 5, 32);
  HIT_ABSORB = new Element$Flag('HIT_ABSORB', 6, 64);
  IS_REMOVING = new Element$Flag('IS_REMOVING', 7, 128);
  IS_ADDING = new Element$Flag('IS_ADDING', 8, 256);
}

function Element$Flag(enum$name, enum$ordinal, mask){
  Enum.call(this, enum$name, enum$ordinal);
  this.mask = mask;
}

function values_31(){
  $clinit_Element$Flag();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Element$Flag_2_classLit, 1), $intern_1, 42, 0, [VALID, ENABLED, VISIBLE_2, SELECTED, WILL_DISPOSE, HIT_DESCEND, HIT_ABSORB, IS_REMOVING, IS_ADDING]);
}

defineClass(42, 6, {3:1, 7:1, 6:1, 42:1}, Element$Flag);
_.mask = 0;
var ENABLED, HIT_ABSORB, HIT_DESCEND, IS_ADDING, IS_REMOVING, SELECTED, VALID, VISIBLE_2, WILL_DISPOSE;
var Ltripleplay_ui_Element$Flag_2_classLit = createForEnum('tripleplay.ui', 'Element/Flag', 42, Ljava_lang_Enum_2_classLit, values_31);
function $add_9(this$static, children){
  var child, child$index, child$index0, child$max, child$max0;
  for (child$index0 = 0 , child$max0 = children.length; child$index0 < child$max0; ++child$index0) {
    child = children[child$index0];
    removeFromParent(child);
  }
  $addAll_0(this$static._children, new Arrays$ArrayList(children));
  for (child$index = 0 , child$max = children.length; child$index < child$max; ++child$index) {
    child = children[child$index];
    $didAdd(this$static, child);
    $emit(this$static._childAdded, child);
  }
  $invalidate(this$static);
  return this$static;
}

function $remove_9(this$static, child){
  if ($remove_2(this$static._children, child)) {
    $didRemove(this$static, child);
    $emit(this$static._childRemoved, child);
    $invalidate(this$static);
  }
}

function Elements(layout){
  Element_0.call(this);
  this._children = new ArrayList;
  this._childAdded = ($clinit_AbstractSignal() , new Signal);
  this._childRemoved = new Signal;
  this._layout = layout;
  $set_0(this, ($clinit_Element$Flag() , HIT_DESCEND), true);
}

defineClass(227, 438, $intern_58);
_.childAt = function childAt(index_0){
  return $get_8(this._children, index_0);
}
;
_.childCount = function childCount(){
  return this._children.array.length;
}
;
_.getLayout = function getLayout(){
  return this._layout;
}
;
_.iterator = function iterator_19(){
  return unmodifiableList(this._children).iterator();
}
;
_.stylesheet = function stylesheet(){
  return this._sheet;
}
;
var Ltripleplay_ui_Elements_2_classLit = createForClass('tripleplay.ui', 'Elements', 227, Ltripleplay_ui_Container$Mutable_2_classLit);
function Group(layout){
  Elements.call(this, layout);
}

defineClass(490, 227, $intern_58, Group);
_.getStyleClass = function getStyleClass_1(){
  return Ltripleplay_ui_Group_2_classLit;
}
;
var Ltripleplay_ui_Group_2_classLit = createForClass('tripleplay.ui', 'Group', 490, Ltripleplay_ui_Elements_2_classLit);
function $clinit_IconEffect(){
  $clinit_IconEffect = emptyMethod;
  NONE_1 = new IconEffect$1;
}

defineClass(636, 1, {});
var NONE_1;
var Ltripleplay_ui_IconEffect_2_classLit = createForClass('tripleplay.ui', 'IconEffect', 636, Ljava_lang_Object_2_classLit);
function IconEffect$1(){
}

defineClass(489, 636, {}, IconEffect$1);
var Ltripleplay_ui_IconEffect$1_2_classLit = createForClass('tripleplay.ui', 'IconEffect/1', 489, Ltripleplay_ui_IconEffect_2_classLit);
function $addRoot(this$static, root){
  $add_1(this$static._roots, root);
  return root;
}

function $createRoot(this$static, layout, sheet_0, parent_0){
  var root;
  root = $addRoot(this$static, new Root(this$static, layout, sheet_0));
  $add_3(parent_0, root.layer);
  return root;
}

function $disposeRoot(this$static, root){
  if (!$remove_2(this$static._roots, root))
    return false;
  $set_0(root, ($clinit_Element$Flag() , WILL_DISPOSE), true);
  $wasRemoved_0(root);
  $close_5(root.layer);
  return true;
}

function $paint_1(this$static){
  var ii, ll;
  for (ii = 0 , ll = this$static._roots.array.length; ii < ll; ii++)
    $validate($get_8(this$static._roots, ii));
}

function Interface(plat, frame_0){
  this.anim = new Animator;
  this._roots = new ArrayList;
  this.plat = plat;
  this._onFrame = ($clinit_Closeable$Util() , new Closeable$Util$2(initValues(getClassLiteralForArray(Lreact_Closeable_2_classLit, 1), $intern_1, 11, 0, [$addConnection(frame_0, new Interface$1(this)), $addConnection(frame_0, this.anim.onPaint)])));
}

defineClass(433, 1, $intern_20, Interface);
_.close_0 = function close_20(){
  $close_7(this._onFrame);
}
;
var Ltripleplay_ui_Interface_2_classLit = createForClass('tripleplay.ui', 'Interface', 433, Ljava_lang_Object_2_classLit);
function $onEmit_15(this$static){
  $paint_1(this$static.this$01);
}

function Interface$1(this$0){
  this.this$01 = this$0;
}

defineClass(434, 607, {}, Interface$1);
_.onEmit_0 = function onEmit_28(clock){
  $onEmit_15(this, clock);
}
;
var Ltripleplay_ui_Interface$1_2_classLit = createForClass('tripleplay.ui', 'Interface/1', 434, Lreact_Slot_2_classLit);
function Label(text_0){
  TextWidget.call(this);
  this.text_0 = ($clinit_AbstractValue() , new Value(null));
  this.icon = new Value(null);
  this.text_0.updateAndNotify(text_0, false);
  $addConnection(this.text_0, new Element$6(this));
  $addConnection(this.icon, new TextWidget$1(this));
  this.icon.updateAndNotify(null, false);
}

defineClass(111, 230, $intern_26, Label);
_.getStyleClass = function getStyleClass_2(){
  return Ltripleplay_ui_Label_2_classLit;
}
;
_.icon_0 = function icon_1(){
  return this.icon._value;
}
;
_.text_1 = function text_2(){
  return this.text_0._value;
}
;
_.toString$ = function toString_82(){
  return 'Label(' + this.text_0._value + ')';
}
;
var Ltripleplay_ui_Label_2_classLit = createForClass('tripleplay.ui', 'Label', 111, Ltripleplay_ui_TextWidget_2_classLit);
function $setBounds_1(elem, x_0, y_0, width_0, height){
  elem.setLocation(x_0, y_0);
  elem.setSize(width_0, height);
}

defineClass(633, 1, {});
var Ltripleplay_ui_Layout_2_classLit = createForClass('tripleplay.ui', 'Layout', 633, Ljava_lang_Object_2_classLit);
defineClass(634, 1, {});
var Ltripleplay_ui_Layout$Constraint_2_classLit = createForClass('tripleplay.ui', 'Layout/Constraint', 634, Ljava_lang_Object_2_classLit);
function $pack(this$static, widthHint){
  var psize;
  psize = (!this$static._preferredSize && (this$static._preferredSize = $computeSize(this$static, widthHint, 0)) , this$static._preferredSize);
  $setSize_5(this$static, psize.width_0, psize.height_0);
  return this$static;
}

function $setSize_5(this$static, width_0, height){
  $setSize_3(this$static._size, width_0, height);
  $invalidate(this$static);
  return this$static;
}

function $setSize_6(this$static, size_0){
  return $setSize_5(this$static, size_0.width_0, size_0.height_0);
}

function Root(iface, layout, sheet_0){
  Elements.call(this, layout);
  this.validated = ($clinit_AbstractSignal() , new Signal);
  this.iface = iface;
  this._sheet = sheet_0;
  $set_0(this, ($clinit_Element$Flag() , HIT_ABSORB), true);
}

defineClass(439, 227, {12:1, 11:1, 77:1, 14:1}, Root);
_.close_0 = function close_21(){
  $disposeRoot(this.iface, this);
}
;
_.getStyleClass = function getStyleClass_3(){
  return Ltripleplay_ui_Root_2_classLit;
}
;
_.preferredSize = function preferredSize_0(hintX, hintY){
  return !this._preferredSize && (this._preferredSize = $computeSize(this, hintX, hintY)) , this._preferredSize;
}
;
_.root_0 = function root_1(){
  return this;
}
;
_.setLocation = function setLocation_0(x_0, y_0){
  $setTranslation(this.layer, ifloor(x_0), ifloor(y_0));
}
;
_.setSize = function setSize_0(width_0, height){
  return $setSize_5(this, width_0, height);
}
;
_.validate = function validate_0(){
  $validate(this);
}
;
_.wasValidated = function wasValidated_0(){
  $emit(this.validated, this);
}
;
var Ltripleplay_ui_Root_2_classLit = createForClass('tripleplay.ui', 'Root', 439, Ltripleplay_ui_Elements_2_classLit);
function newSheetBuilder(gfx){
  var butBg, butSelBg;
  butBg = $inset_0(new RoundRectBackground(gfx, $intern_34), 5, 6, 2, 6);
  butSelBg = $inset_0(new RoundRectBackground(gfx, $intern_57), 6, 5, 1, 7);
  return $add_12($add_11($add_12($add_12($add_11($add_12($add_11($add_12($add_11($add_12($add_11($add_12(new Stylesheet$Builder, Ltripleplay_ui_Button_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Style() , BACKGROUND), butBg)]))), Ltripleplay_ui_Button_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butSelBg)])), Ltripleplay_ui_ToggleButton_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butBg)]))), Ltripleplay_ui_ToggleButton_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, butSelBg)])), Ltripleplay_ui_CheckBox_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset_0(new RoundRectBackground(gfx, $intern_34), 3, 2, 0, 3))]))), Ltripleplay_ui_CheckBox_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset_0(new RoundRectBackground(gfx, $intern_57), 3, 2, 0, 3))])), Ltripleplay_ui_Field_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$2(-1), 5)), HALIGN.left_0]))), Ltripleplay_ui_Field_2_classLit, 1, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$2(-3355444), 5))])), Ltripleplay_ui_Menu_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, $inset(new Background$3, 6))]))), Ltripleplay_ui_MenuItem_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, new Background$1(-1)), HALIGN.left_0]))), Ltripleplay_ui_MenuItem_2_classLit, 2, initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(BACKGROUND, new Background$1($intern_25)), new Style$Binding(COLOR, valueOf_0(-1))])), Ltripleplay_ui_Tabs_2_classLit, make(initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Binding_2_classLit, 1), $intern_1, 9, 0, [new Style$Binding(($clinit_Tabs() , HIGHLIGHTER), new Tabs$2)])));
}

function $clinit_Style(){
  $clinit_Style = emptyMethod;
  COLOR = new Style$1;
  HIGHLIGHT = new Style$2;
  SHADOW = new Style$3(true, valueOf_0(1426063360));
  SHADOW_X = new Style$3(true, new Float(2));
  SHADOW_Y = new Style$3(true, new Float(2));
  GRADIENT_COLOR = new Style$3(true, valueOf_0(-3735552));
  GRADIENT_TYPE = new Style$GradientTypeStyle;
  OUTLINE_WIDTH = new Style$3(true, new Float(1));
  OUTLINE_CAP = new Style$3(true, ($clinit_Canvas$LineCap() , ROUND_1));
  OUTLINE_JOIN = new Style$3(true, ($clinit_Canvas$LineJoin() , ROUND_2));
  HALIGN = new Style$HAlignStyle;
  VALIGN = new Style$VAlignStyle;
  FONT = new Style$3(true, new Font);
  TEXT_WRAP = new Style$Flag(false);
  TEXT_EFFECT = new Style$TextEffectStyle;
  UNDERLINE = new Style$Flag(true);
  AUTO_SHRINK = new Style$Flag(false);
  BACKGROUND = new Style$3(false, new BlankBackground);
  ICON_POS = new Style$PosStyle;
  ICON_GAP = new Style$3(false, valueOf_0(2));
  ICON_CUDDLE = new Style$Flag(false);
  ICON_EFFECT = new Style$3(false, ($clinit_IconEffect() , NONE_1));
  ACTION_SOUND = new Style$3(false, null);
}

function Style(inherited){
  this.inherited = inherited;
}

function toAlignment(align_0){
  $clinit_Style();
  switch (align_0.ordinal) {
    default:case 0:
      return $clinit_TextBlock$Align() , LEFT_2;
    case 1:
      return $clinit_TextBlock$Align() , RIGHT_2;
    case 2:
      return $clinit_TextBlock$Align() , CENTER;
  }
}

defineClass(57, 1, {});
_.inherited = false;
var ACTION_SOUND, AUTO_SHRINK, BACKGROUND, COLOR, FONT, GRADIENT_COLOR, GRADIENT_TYPE, HALIGN, HIGHLIGHT, ICON_CUDDLE, ICON_EFFECT, ICON_GAP, ICON_POS, OUTLINE_CAP, OUTLINE_JOIN, OUTLINE_WIDTH, SHADOW, SHADOW_X, SHADOW_Y, TEXT_EFFECT, TEXT_WRAP, UNDERLINE, VALIGN;
var Ltripleplay_ui_Style_2_classLit = createForClass('tripleplay.ui', 'Style', 57, Ljava_lang_Object_2_classLit);
function Style$1(){
  Style.call(this, true);
}

defineClass(482, 57, {}, Style$1);
_.getDefault = function getDefault(elem){
  return valueOf_0($isSet_0(elem, ($clinit_Element$Flag() , ENABLED))?$intern_25:-10066330);
}
;
var Ltripleplay_ui_Style$1_2_classLit = createForClass('tripleplay.ui', 'Style/1', 482, Ltripleplay_ui_Style_2_classLit);
function Style$2(){
  Style.call(this, true);
}

defineClass(483, 57, {}, Style$2);
_.getDefault = function getDefault_0(elem){
  return valueOf_0($isSet_0(elem, ($clinit_Element$Flag() , ENABLED))?-1426063361:-1429418804);
}
;
var Ltripleplay_ui_Style$2_2_classLit = createForClass('tripleplay.ui', 'Style/2', 483, Ltripleplay_ui_Style_2_classLit);
function Style$3($anonymous0, val$defaultValue){
  $clinit_Style();
  this.val$defaultValue2 = val$defaultValue;
  Style.call(this, $anonymous0);
}

defineClass(29, 57, {}, Style$3);
_.getDefault = function getDefault_1(elem){
  return this.val$defaultValue2;
}
;
var Ltripleplay_ui_Style$3_2_classLit = createForClass('tripleplay.ui', 'Style/3', 29, Ltripleplay_ui_Style_2_classLit);
function Style$Binding(style, value_0){
  this.style_0 = style;
  this.value_0 = value_0;
}

defineClass(9, 1, {9:1}, Style$Binding);
var Ltripleplay_ui_Style$Binding_2_classLit = createForClass('tripleplay.ui', 'Style/Binding', 9, Ljava_lang_Object_2_classLit);
function Style$Flag(inherited){
  Style.call(this, inherited);
  new Style$Binding(this, ($clinit_Boolean() , $clinit_Boolean() , FALSE));
  new Style$Binding(this, (null , TRUE));
  this._default = (null , FALSE);
}

defineClass(136, 57, {}, Style$Flag);
_.getDefault = function getDefault_2(mode){
  return this._default;
}
;
var Ltripleplay_ui_Style$Flag_2_classLit = createForClass('tripleplay.ui', 'Style/Flag', 136, Ltripleplay_ui_Style_2_classLit);
function Style$GradientTypeStyle(){
  Style.call(this, true);
  new Style$Binding(this, ($clinit_EffectRenderer$Gradient$Type() , BOTTOM_1));
  new Style$Binding(this, TOP_1);
  new Style$Binding(this, CENTER_5);
}

defineClass(470, 57, {}, Style$GradientTypeStyle);
_.getDefault = function getDefault_3(elem){
  return $clinit_EffectRenderer$Gradient$Type() , BOTTOM_1;
}
;
var Ltripleplay_ui_Style$GradientTypeStyle_2_classLit = createForClass('tripleplay.ui', 'Style/GradientTypeStyle', 470, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$HAlign(){
  $clinit_Style$HAlign = emptyMethod;
  LEFT_3 = new Style$HAlign$1;
  RIGHT_3 = new Style$HAlign$2;
  CENTER_1 = new Style$HAlign$3;
}

function Style$HAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_32(){
  $clinit_Style$HAlign();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$HAlign_2_classLit, 1), $intern_1, 67, 0, [LEFT_3, RIGHT_3, CENTER_1]);
}

defineClass(67, 6, $intern_59);
var CENTER_1, LEFT_3, RIGHT_3;
var Ltripleplay_ui_Style$HAlign_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign', 67, Ljava_lang_Enum_2_classLit, values_32);
function Style$HAlign$1(){
  Style$HAlign.call(this, 'LEFT', 0);
}

defineClass(471, 67, $intern_59, Style$HAlign$1);
_.offset_0 = function offset_0(size_0, extent){
  return 0;
}
;
var Ltripleplay_ui_Style$HAlign$1_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/1', 471, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlign$2(){
  Style$HAlign.call(this, 'RIGHT', 1);
}

defineClass(472, 67, $intern_59, Style$HAlign$2);
_.offset_0 = function offset_1(size_0, extent){
  return extent - size_0;
}
;
var Ltripleplay_ui_Style$HAlign$2_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/2', 472, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlign$3(){
  Style$HAlign.call(this, 'CENTER', 2);
}

defineClass(473, 67, $intern_59, Style$HAlign$3);
_.offset_0 = function offset_2(size_0, extent){
  return (extent - size_0) / 2;
}
;
var Ltripleplay_ui_Style$HAlign$3_2_classLit = createForEnum('tripleplay.ui', 'Style/HAlign/3', 473, Ltripleplay_ui_Style$HAlign_2_classLit, null);
function Style$HAlignStyle(){
  Style.call(this, false);
  this.left_0 = new Style$Binding(this, ($clinit_Style$HAlign() , LEFT_3));
  new Style$Binding(this, RIGHT_3);
  new Style$Binding(this, CENTER_1);
}

defineClass(466, 57, {}, Style$HAlignStyle);
_.getDefault = function getDefault_4(elem){
  return $clinit_Style$HAlign() , CENTER_1;
}
;
var Ltripleplay_ui_Style$HAlignStyle_2_classLit = createForClass('tripleplay.ui', 'Style/HAlignStyle', 466, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$Pos(){
  $clinit_Style$Pos = emptyMethod;
  LEFT_4 = new Style$Pos('LEFT', 0);
  ABOVE_0 = new Style$Pos('ABOVE', 1);
  RIGHT_4 = new Style$Pos('RIGHT', 2);
  BELOW_0 = new Style$Pos('BELOW', 3);
}

function Style$Pos(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_33(){
  $clinit_Style$Pos();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$Pos_2_classLit, 1), $intern_1, 89, 0, [LEFT_4, ABOVE_0, RIGHT_4, BELOW_0]);
}

defineClass(89, 6, {3:1, 7:1, 6:1, 89:1}, Style$Pos);
var ABOVE_0, BELOW_0, LEFT_4, RIGHT_4;
var Ltripleplay_ui_Style$Pos_2_classLit = createForEnum('tripleplay.ui', 'Style/Pos', 89, Ljava_lang_Enum_2_classLit, values_33);
function Style$PosStyle(){
  Style.call(this, false);
  new Style$Binding(this, ($clinit_Style$Pos() , LEFT_4));
  new Style$Binding(this, ABOVE_0);
  new Style$Binding(this, RIGHT_4);
  new Style$Binding(this, BELOW_0);
}

defineClass(468, 57, {}, Style$PosStyle);
_.getDefault = function getDefault_5(elem){
  return $clinit_Style$Pos() , LEFT_4;
}
;
var Ltripleplay_ui_Style$PosStyle_2_classLit = createForClass('tripleplay.ui', 'Style/PosStyle', 468, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$TextEffect(){
  $clinit_Style$TextEffect = emptyMethod;
  PIXEL_OUTLINE = new Style$TextEffect$1;
  VECTOR_OUTLINE = new Style$TextEffect$2;
  SHADOW_0 = new Style$TextEffect$3;
  GRADIENT = new Style$TextEffect$4;
  NONE_2 = new Style$TextEffect$5;
}

function Style$TextEffect(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_34(){
  $clinit_Style$TextEffect();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$TextEffect_2_classLit, 1), $intern_1, 39, 0, [PIXEL_OUTLINE, VECTOR_OUTLINE, SHADOW_0, GRADIENT, NONE_2]);
}

defineClass(39, 6, $intern_60);
var GRADIENT, NONE_2, PIXEL_OUTLINE, SHADOW_0, VECTOR_OUTLINE;
var Ltripleplay_ui_Style$TextEffect_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect', 39, Ljava_lang_Enum_2_classLit, values_34);
function Style$TextEffect$1(){
  Style$TextEffect.call(this, 'PIXEL_OUTLINE', 0);
}

defineClass(477, 39, $intern_60, Style$TextEffect$1);
_.createEffectRenderer = function createEffectRenderer(elem){
  return new EffectRenderer$PixelOutline(resolveStyle(elem, ($clinit_Style() , HIGHLIGHT)).value_0);
}
;
var Ltripleplay_ui_Style$TextEffect$1_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/1', 477, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$2(){
  Style$TextEffect.call(this, 'VECTOR_OUTLINE', 1);
}

defineClass(478, 39, $intern_60, Style$TextEffect$2);
_.createEffectRenderer = function createEffectRenderer_0(elem){
  return new EffectRenderer$VectorOutline(resolveStyle(elem, ($clinit_Style() , HIGHLIGHT)).value_0, resolveStyle(elem, OUTLINE_WIDTH).value_0, resolveStyle(elem, OUTLINE_CAP), resolveStyle(elem, OUTLINE_JOIN));
}
;
var Ltripleplay_ui_Style$TextEffect$2_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/2', 478, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$3(){
  Style$TextEffect.call(this, 'SHADOW', 2);
}

defineClass(479, 39, $intern_60, Style$TextEffect$3);
_.createEffectRenderer = function createEffectRenderer_1(elem){
  return new EffectRenderer$Shadow(resolveStyle(elem, ($clinit_Style() , SHADOW)).value_0, resolveStyle(elem, SHADOW_X).value_0, resolveStyle(elem, SHADOW_Y).value_0);
}
;
var Ltripleplay_ui_Style$TextEffect$3_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/3', 479, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$4(){
  Style$TextEffect.call(this, 'GRADIENT', 3);
}

defineClass(480, 39, $intern_60, Style$TextEffect$4);
_.createEffectRenderer = function createEffectRenderer_2(elem){
  return new EffectRenderer$Gradient(resolveStyle(elem, ($clinit_Style() , GRADIENT_COLOR)).value_0, resolveStyle(elem, GRADIENT_TYPE));
}
;
var Ltripleplay_ui_Style$TextEffect$4_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/4', 480, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffect$5(){
  Style$TextEffect.call(this, 'NONE', 4);
}

defineClass(481, 39, $intern_60, Style$TextEffect$5);
_.createEffectRenderer = function createEffectRenderer_3(elem){
  return $clinit_EffectRenderer() , NONE_3;
}
;
var Ltripleplay_ui_Style$TextEffect$5_2_classLit = createForEnum('tripleplay.ui', 'Style/TextEffect/5', 481, Ltripleplay_ui_Style$TextEffect_2_classLit, null);
function Style$TextEffectStyle(){
  Style.call(this, true);
  new Style$Binding(this, ($clinit_Style$TextEffect() , PIXEL_OUTLINE));
  new Style$Binding(this, VECTOR_OUTLINE);
  new Style$Binding(this, SHADOW_0);
  new Style$Binding(this, GRADIENT);
  new Style$Binding(this, NONE_2);
}

defineClass(469, 57, {}, Style$TextEffectStyle);
_.getDefault = function getDefault_6(elem){
  return $clinit_Style$TextEffect() , NONE_2;
}
;
var Ltripleplay_ui_Style$TextEffectStyle_2_classLit = createForClass('tripleplay.ui', 'Style/TextEffectStyle', 469, Ltripleplay_ui_Style_2_classLit);
function $clinit_Style$VAlign(){
  $clinit_Style$VAlign = emptyMethod;
  TOP_0 = new Style$VAlign$1;
  BOTTOM_0 = new Style$VAlign$2;
  CENTER_2 = new Style$VAlign$3;
}

function Style$VAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_35(){
  $clinit_Style$VAlign();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_Style$VAlign_2_classLit, 1), $intern_1, 68, 0, [TOP_0, BOTTOM_0, CENTER_2]);
}

defineClass(68, 6, $intern_61);
var BOTTOM_0, CENTER_2, TOP_0;
var Ltripleplay_ui_Style$VAlign_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign', 68, Ljava_lang_Enum_2_classLit, values_35);
function Style$VAlign$1(){
  Style$VAlign.call(this, 'TOP', 0);
}

defineClass(474, 68, $intern_61, Style$VAlign$1);
_.offset_0 = function offset_3(size_0, extent){
  return 0;
}
;
var Ltripleplay_ui_Style$VAlign$1_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/1', 474, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlign$2(){
  Style$VAlign.call(this, 'BOTTOM', 1);
}

defineClass(475, 68, $intern_61, Style$VAlign$2);
_.offset_0 = function offset_4(size_0, extent){
  return extent - size_0;
}
;
var Ltripleplay_ui_Style$VAlign$2_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/2', 475, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlign$3(){
  Style$VAlign.call(this, 'CENTER', 2);
}

defineClass(476, 68, $intern_61, Style$VAlign$3);
_.offset_0 = function offset_5(size_0, extent){
  return (extent - size_0) / 2;
}
;
var Ltripleplay_ui_Style$VAlign$3_2_classLit = createForEnum('tripleplay.ui', 'Style/VAlign/3', 476, Ltripleplay_ui_Style$VAlign_2_classLit, null);
function Style$VAlignStyle(){
  Style.call(this, false);
  new Style$Binding(this, ($clinit_Style$VAlign() , TOP_0));
  new Style$Binding(this, BOTTOM_0);
  new Style$Binding(this, CENTER_2);
}

defineClass(467, 57, {}, Style$VAlignStyle);
_.getDefault = function getDefault_7(elem){
  return $clinit_Style$VAlign() , CENTER_2;
}
;
var Ltripleplay_ui_Style$VAlignStyle_2_classLit = createForClass('tripleplay.ui', 'Style/VAlignStyle', 467, Ltripleplay_ui_Style_2_classLit);
function $clinit_Styles(){
  $clinit_Styles = emptyMethod;
  _noneSingleton = new Styles(initDim(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 69, 0, 0, 1));
}

function $add_10(this$static, mode, bindings){
  var ii, nbindings;
  if (bindings.length == 0)
    return this$static;
  nbindings = initDim(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 69, bindings.length, 0, 1);
  for (ii = 0; ii < bindings.length; ii++) {
    nbindings[ii] = new Styles$Binding(bindings[ii], mode);
  }
  return $merge_0(this$static, nbindings);
}

function $get_9(this$static, key, elem){
  var cmp, high, low, mid, midVal;
  low = 0;
  high = this$static._bindings.length - 1;
  while (low <= high) {
    mid = low + high >>> 1;
    midVal = this$static._bindings[mid];
    cmp = $compareToStyle(midVal, key);
    if (cmp < 0)
      low = mid + 1;
    else if (cmp > 0)
      high = mid - 1;
    else 
      return $get_10(midVal, elem);
  }
  return null;
}

function $merge(this$static, styles){
  if (this$static._bindings.length == 0)
    return styles;
  return $merge_0(this$static, styles._bindings);
}

function $merge_0(this$static, obindings){
  var didx, dupidx, dups, idx, idx0, ii, ii0, nb, nbindings, ob;
  if (obindings.length == 0)
    return this$static;
  dupidx = initDim(I_classLit, $intern_41, 0, obindings.length, 7, 1);
  dups = 0;
  for (ii0 = 0; ii0 < obindings.length; ii0++) {
    idx0 = binarySearch(this$static._bindings, obindings[ii0], ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
    idx0 >= 0 && ++dups;
    dupidx[ii0] = idx0;
  }
  nbindings = initDim(Ltripleplay_ui_Styles$Binding_2_classLit, $intern_1, 69, this$static._bindings.length + obindings.length - dups, 0, 1);
  arraycopy(this$static._bindings, 0, nbindings, 0, this$static._bindings.length);
  idx = this$static._bindings.length;
  for (ii = 0; ii < obindings.length; ii++) {
    didx = dupidx[ii];
    if (didx >= 0) {
      nb = nbindings[didx];
      ob = obindings[ii];
      nbindings[didx] = new Styles$Binding_1(nb.style_0, $merge_1(nb._defaultV, ob._defaultV), $merge_1(nb._disabledV, ob._disabledV), $merge_1(nb._selectedV, ob._selectedV), $merge_1(nb._disSelectedV, ob._disSelectedV));
    }
     else 
      nbindings[idx++] = obindings[ii];
  }
  mergeSort(nbindings, 0, nbindings.length, ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  return new Styles(nbindings);
}

function Styles(bindings){
  this._bindings = bindings;
}

function make(bindings){
  $clinit_Styles();
  return $add_10(_noneSingleton, 0, bindings);
}

function resolveStyle(element, style){
  $clinit_Styles();
  var group, sheet_0, value_0;
  value_0 = $get_9(element._styles, style, element);
  if (value_0 != null)
    return value_0;
  group = instanceOf(element, 77)?element:element._parent;
  for (; group; group = group._parent) {
    sheet_0 = group.stylesheet();
    if (!sheet_0)
      continue;
    value_0 = $get_11(sheet_0, style, element.getStyleClass(), element);
    if (value_0 != null)
      return value_0;
  }
  return style.getDefault(element);
}

defineClass(237, 1, {}, Styles);
var _noneSingleton;
var Ltripleplay_ui_Styles_2_classLit = createForClass('tripleplay.ui', 'Styles', 237, Ljava_lang_Object_2_classLit);
function $compareTo_3(this$static, other){
  var hc, ohc;
  if (this$static.style_0 == other.style_0)
    return 0;
  hc = getHashCode(this$static.style_0);
  ohc = getHashCode(other.style_0);
  return hc < ohc?-1:1;
}

function $compareToStyle(this$static, style){
  var hc, ohc;
  if (this$static.style_0 == style)
    return 0;
  hc = getHashCode(this$static.style_0);
  ohc = getHashCode(style);
  return hc < ohc?-1:1;
}

function $get_10(this$static, elem){
  if ($isSet_0(elem, ($clinit_Element$Flag() , ENABLED))) {
    if ($isSet_0(elem, SELECTED) && this$static._selectedV != null)
      return this$static._selectedV;
  }
   else {
    if ($isSet_0(elem, SELECTED) && this$static._disSelectedV != null)
      return this$static._disSelectedV;
    if (this$static._disabledV != null)
      return this$static._disabledV;
  }
  return this$static._defaultV;
}

function $merge_1(ours, theirs){
  return theirs == null?ours:theirs;
}

function Styles$Binding(binding, mode){
  Styles$Binding_0.call(this, binding.style_0);
  switch (mode) {
    case 0:
      this._defaultV = binding.value_0;
      break;
    case 1:
      this._disabledV = binding.value_0;
      break;
    case 2:
      this._selectedV = binding.value_0;
      break;
    case 3:
      this._disSelectedV = binding.value_0;
  }
}

function Styles$Binding_0(style){
  this.style_0 = style;
}

function Styles$Binding_1(style, defaultV, disabledV, selectedV, disSelectedV){
  Styles$Binding_0.call(this, style);
  this._defaultV = defaultV;
  this._disabledV = disabledV;
  this._selectedV = selectedV;
  this._disSelectedV = disSelectedV;
}

defineClass(69, 1, {7:1, 69:1}, Styles$Binding, Styles$Binding_1);
_.compareTo = function compareTo_13(other){
  return $compareTo_3(this, other);
}
;
var Ltripleplay_ui_Styles$Binding_2_classLit = createForClass('tripleplay.ui', 'Styles/Binding', 69, Ljava_lang_Object_2_classLit);
function $get_11(this$static, style, eclass, elem){
  var parent_0, styles, value_0;
  styles = $get_6(this$static._styles, eclass);
  value_0 = !styles?null:$get_9(styles, style, elem);
  if (value_0 != null)
    return value_0;
  if (!style.inherited || eclass == Ltripleplay_ui_Element_2_classLit)
    return null;
  parent_0 = eclass.superclass;
  if (!parent_0) {
    throw new RuntimeException_0('Your PlayN application must not be compiled with -XdisableClassMetadata. It breaks TriplePlay stylesheets.');
  }
  return $get_11(this$static, style, parent_0, elem);
}

function Stylesheet(styles){
  this._styles = styles;
}

defineClass(452, 1, {}, Stylesheet);
var Ltripleplay_ui_Stylesheet_2_classLit = createForClass('tripleplay.ui', 'Stylesheet', 452, Ljava_lang_Object_2_classLit);
function $add_11(this$static, eclass, mode, styles){
  return $add_12(this$static, eclass, $add_10(($clinit_Styles() , $clinit_Styles() , _noneSingleton), mode, styles));
}

function $add_12(this$static, eclass, styles){
  var ostyles;
  ostyles = $get_6(this$static._styles, eclass);
  $put_4(this$static._styles, eclass, !ostyles?styles:$merge(ostyles, styles));
  return this$static;
}

function $create(this$static){
  var sheet_0;
  sheet_0 = new Stylesheet(this$static._styles);
  this$static._styles = null;
  return sheet_0;
}

function Stylesheet$Builder(){
  this._styles = new HashMap;
}

defineClass(453, 1, {}, Stylesheet$Builder);
var Ltripleplay_ui_Stylesheet$Builder_2_classLit = createForClass('tripleplay.ui', 'Stylesheet/Builder', 453, Ljava_lang_Object_2_classLit);
function $clinit_Tabs(){
  $clinit_Tabs = emptyMethod;
  NOOP_HIGHLIGHTER = new Tabs$1;
  HIGHLIGHTER = ($clinit_Style() , new Style$3(true, NOOP_HIGHLIGHTER));
}

var HIGHLIGHTER, NOOP_HIGHLIGHTER;
var Ltripleplay_ui_Tabs_2_classLit = createForClass('tripleplay.ui', 'Tabs', null, Ltripleplay_ui_Composite_2_classLit);
function Tabs$1(){
}

defineClass(487, 1, {}, Tabs$1);
var Ltripleplay_ui_Tabs$1_2_classLit = createForClass('tripleplay.ui', 'Tabs/1', 487, Ljava_lang_Object_2_classLit);
function Tabs$2(){
}

defineClass(488, 1, {}, Tabs$2);
var Ltripleplay_ui_Tabs$2_2_classLit = createForClass('tripleplay.ui', 'Tabs/2', 488, Ljava_lang_Object_2_classLit);
function $onEmit_16(this$static){
  this$static.this$01._ldata = null;
  $invalidate(this$static.this$01);
}

function TextWidget$1(this$0){
  this.this$01 = this$0;
}

defineClass(231, 607, {}, TextWidget$1);
_.onEmit_0 = function onEmit_29(icon){
  $onEmit_16(this, icon);
}
;
var Ltripleplay_ui_TextWidget$1_2_classLit = createForClass('tripleplay.ui', 'TextWidget/1', 231, Lreact_Slot_2_classLit);
function $addTextSize(this$static, size_0){
  if (this$static.text_0) {
    size_0.width_0 += this$static.text_0.width_1();
    size_0.height_0 += this$static.text_0.height_1();
  }
}

function $updateTextGlyph(this$static, tx, ty, availWidth, availHeight){
  var aheight, awidth, canvas, ox, oy, tgheight, tgwidth, theight, twidth;
  twidth = ceil_0(this$static.text_0.width_1());
  theight = ceil_0(this$static.text_0.height_1());
  awidth = ceil_0(availWidth);
  aheight = ceil_0(availHeight);
  if (twidth <= 0 || theight <= 0 || awidth <= 0 || aheight <= 0)
    return;
  if (this$static.autoShrink && twidth > availWidth) {
    while (twidth > availWidth && this$static.text_0.style_0.font_0.size_0 > 6) {
      this$static.text_0 = this$static.text_0.resize(this$static.text_0.style_0.font_0.size_0 - 1);
      twidth = ceil_0(this$static.text_0.width_1());
    }
    theight = ceil_0(this$static.text_0.height_1());
  }
  tgwidth = awidth < twidth?awidth:twidth;
  tgheight = aheight < theight?aheight:theight;
  ox = ifloor(this$static.halign.offset_0(twidth, awidth));
  oy = ifloor(this$static.valign.offset_0(theight, aheight));
  if (!this$static.text_0.equals$(this$static.this$01._renderedText) || tgwidth != this$static.this$01._tglyph._preparedWidth || tgheight != this$static.this$01._tglyph._preparedHeight) {
    $prepare(this$static.this$01._tglyph, $root(this$static.this$01).iface.plat.graphics, tgwidth, tgheight);
    canvas = $clear_1(this$static.this$01._tglyph._layer.canvas);
    this$static.text_0.render_0(canvas, ox < 0?ox:0, oy < 0?oy:0);
    $end_1(this$static.this$01._tglyph._layer);
    this$static.this$01._renderedText = this$static.text_0;
  }
  $setTranslation(this$static.this$01._tglyph._layer, tx + (ox > 0?ox:0), ty + (oy > 0?oy:0));
}

function TextWidget$TextLayoutData(this$0, hintX, hintY){
  var curtext, haveText, hints, style;
  this.this$01 = this$0;
  Element$LayoutData.call(this, this$0);
  this.halign = resolveStyle(this.this$01, ($clinit_Style() , HALIGN));
  this.valign = resolveStyle(this.this$01, VALIGN);
  resolveStyle(this.this$01, ICON_POS);
  resolveStyle(this.this$01, ICON_GAP);
  resolveStyle(this.this$01, ICON_CUDDLE);
  resolveStyle(this.this$01, ICON_EFFECT);
  this.wrap = resolveStyle(this.this$01, TEXT_WRAP).value_0;
  this.autoShrink = resolveStyle(this.this$01, AUTO_SHRINK).value_0;
  this.gfx = $root(this.this$01).iface.plat.graphics;
  curtext = this$0.text_1();
  haveText = curtext != null && curtext.length > 0;
  hints = $subtractFrom(this.bg.insets, new Dimension_0(hintX, hintY));
  this$0.icon_0();
  this.icon = null;
  if (haveText) {
    style = new TextStyle(resolveStyle(this$0, FONT), maskUndefined(resolveStyle(this$0, TEXT_EFFECT)) !== maskUndefined(($clinit_Style$TextEffect() , PIXEL_OUTLINE)), resolveStyle(this$0, COLOR).value_0, resolveStyle(this$0, TEXT_EFFECT).createEffectRenderer(this$0), resolveStyle(this$0, UNDERLINE).value_0);
    hints.width_0 > 0 && this.wrap?(this.text_0 = new StyledText$Block(this.gfx, curtext, style, new TextWrap(hints.width_0), toAlignment(resolveStyle(this$0, HALIGN)))):(this.text_0 = new StyledText$Span(this.gfx, curtext, style));
  }
}

defineClass(454, 174, {}, TextWidget$TextLayoutData);
_.computeSize_0 = function computeSize_2(hintX, hintY){
  var size_0, twidth;
  if (!!this.text_0 && this.autoShrink) {
    twidth = this.text_0.width_1();
    if (twidth > hintX) {
      while (twidth > hintX && this.text_0.style_0.font_0.size_0 > 6) {
        this.text_0 = this.text_0.resize(this.text_0.style_0.font_0.size_0 - 1);
        twidth = ceil_0(this.text_0.width_1());
      }
    }
  }
  size_0 = new Dimension;
  $addTextSize(this, size_0);
  return size_0;
}
;
_.layout_1 = function layout_6(left, top_0, width_0, height){
  !this.text_0?$close_9(this.this$01._tglyph):$updateTextGlyph(this, left, top_0, width_0, height);
}
;
_.toString$ = function toString_83(){
  return 'TextLayoutData[text=' + this.text_0 + ', icon=' + this.icon + ']';
}
;
_.autoShrink = false;
_.wrap = false;
var Ltripleplay_ui_TextWidget$TextLayoutData_2_classLit = createForClass('tripleplay.ui', 'TextWidget/TextLayoutData', 454, Ltripleplay_ui_Element$LayoutData_2_classLit);
function BlankBackground(){
  Background.call(this);
}

defineClass(242, 113, {}, BlankBackground);
_.instantiate = function instantiate_2(size_0){
  return new BlankBackground$1(this, size_0);
}
;
var Ltripleplay_ui_bgs_BlankBackground_2_classLit = createForClass('tripleplay.ui.bgs', 'BlankBackground', 242, Ltripleplay_ui_Background_2_classLit);
function BlankBackground$1(this$0_1, $anonymous0){
  Background$Instance.call(this, this$0_1, $anonymous0);
}

defineClass(509, 234, $intern_20, BlankBackground$1);
_.addTo = function addTo_0(parent_0, x_0, y_0, depthAdjust){
}
;
_.close_0 = function close_22(){
}
;
var Ltripleplay_ui_bgs_BlankBackground$1_2_classLit = createForClass('tripleplay.ui.bgs', 'BlankBackground/1', 509, Ltripleplay_ui_Background$Instance_2_classLit);
function RoundRectBackground(gfx, borderColor){
  Background.call(this);
  this._gfx = gfx;
  this._bgColor = -3355444;
  this._radius = 5;
  this._borderColor = borderColor;
  this._borderWidth = 2;
  this._borderRadius = 5;
}

defineClass(90, 113, {}, RoundRectBackground);
_.instantiate = function instantiate_3(size_0){
  var canvas, iheight, iradius, iwidth, layer;
  canvas = $createCanvas_0(this._gfx, size_0);
  if (this._borderWidth > 0) {
    $fillRoundRect($setFillColor_0(canvas, this._borderColor), 0, 0, size_0.width_0, size_0.height_0, this._radius);
    iwidth = size_0.width_0 - 2 * this._borderWidth;
    iheight = size_0.height_0 - 2 * this._borderWidth;
    iradius = this._borderRadius * (iheight / size_0.height_0);
    $fillRoundRect($setFillColor_0(canvas, this._bgColor), this._borderWidth, this._borderWidth, iwidth, iheight, iradius);
  }
   else {
    $fillRoundRect($setFillColor_0(canvas, this._bgColor), 0, 0, size_0.width_0, size_0.height_0, this._radius);
  }
  layer = new ImageLayer($toTexture(canvas, ($clinit_Texture$Config() , DEFAULT)));
  return new Background$LayerInstance(this, size_0, layer);
}
;
_._bgColor = 0;
_._borderColor = 0;
_._borderRadius = 0;
_._borderWidth = 0;
_._radius = 0;
var Ltripleplay_ui_bgs_RoundRectBackground_2_classLit = createForClass('tripleplay.ui.bgs', 'RoundRectBackground', 90, Ltripleplay_ui_Background_2_classLit);
function $clinit_AxisLayout(){
  $clinit_AxisLayout = emptyMethod;
  UNSTRETCHED = new AxisLayout$Constraint(false);
  UNIFORM_STRETCHED = new AxisLayout$Constraint(true);
}

function $computeMetrics(this$static, elems, hintX, hintY){
  var availX, availY, c, ehintY, elem, elem$iterator, elem$iterator0, m, pheight, psize, pwidth;
  m = new AxisLayout$Metrics;
  for (elem$iterator0 = elems.iterator(); elem$iterator0.hasNext();) {
    elem = elem$iterator0.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    ++m.count;
    c = this$static._stretchByDefault?UNIFORM_STRETCHED:UNSTRETCHED;
    if (c.stretch) {
      ++m.stretchers;
      m.totalWeight += c.weight;
    }
     else {
      psize = elem.preferredSize(hintX, hintY);
      pwidth = psize.width_0;
      pheight = psize.height_0;
      m.prefWidth += pwidth;
      m.prefHeight += pheight;
      m.maxWidth = max_0(m.maxWidth, pwidth);
      m.maxHeight = max_0(m.maxHeight, pheight);
      m.fixWidth += pwidth;
      m.fixHeight += pheight;
    }
  }
  for (elem$iterator = elems.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    c = this$static._stretchByDefault?UNIFORM_STRETCHED:UNSTRETCHED;
    if (!c.stretch)
      continue;
    availX = hintX - $gaps(m, this$static._gap);
    availY = hintY - $gaps(m, this$static._gap);
    ehintY = $computeSize_0(c, 0, m.totalWeight, availY - m.fixHeight);
    psize = elem.preferredSize(availX, ehintY);
    pwidth = psize.width_0;
    pheight = psize.height_0;
    m.unitWidth = max_0(m.unitWidth, pwidth / c.weight);
    m.unitHeight = max_0(m.unitHeight, pheight / c.weight);
    m.maxWidth = max_0(m.maxWidth, pwidth);
    m.maxHeight = max_0(m.maxHeight, pheight);
  }
  m.prefWidth += m.stretchers * m.unitWidth;
  m.prefHeight += m.stretchers * m.unitHeight;
  return m;
}

defineClass(444, 633, {});
_._gap = 5;
_._stretchByDefault = false;
var UNIFORM_STRETCHED, UNSTRETCHED;
var Ltripleplay_ui_layout_AxisLayout_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout', 444, Ltripleplay_ui_Layout_2_classLit);
function $computeSize_0(this$static, size_0, totalWeight, availSize){
  return this$static.stretch?availSize * this$static.weight / totalWeight:size_0;
}

function AxisLayout$Constraint(stretch){
  this.stretch = stretch;
  this.weight = 1;
}

defineClass(229, 634, {}, AxisLayout$Constraint);
_.stretch = false;
_.weight = 0;
var Ltripleplay_ui_layout_AxisLayout$Constraint_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout/Constraint', 229, Ltripleplay_ui_Layout$Constraint_2_classLit);
function $gaps(this$static, gap){
  return gap * (this$static.count - 1);
}

function AxisLayout$Metrics(){
}

defineClass(445, 1, {}, AxisLayout$Metrics);
_.count = 0;
_.fixHeight = 0;
_.fixWidth = 0;
_.maxHeight = 0;
_.maxWidth = 0;
_.prefHeight = 0;
_.prefWidth = 0;
_.stretchers = 0;
_.totalWeight = 0;
_.unitHeight = 0;
_.unitWidth = 0;
var Ltripleplay_ui_layout_AxisLayout$Metrics_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout/Metrics', 445, Ljava_lang_Object_2_classLit);
function $clinit_AxisLayout$Policy(){
  $clinit_AxisLayout$Policy = emptyMethod;
  DEFAULT_1 = new AxisLayout$Policy$1;
  STRETCH = new AxisLayout$Policy$2;
  EQUALIZE = new AxisLayout$Policy$3;
  CONSTRAIN = new AxisLayout$Policy$4;
}

function AxisLayout$Policy(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_36(){
  $clinit_AxisLayout$Policy();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, 1), $intern_1, 53, 0, [DEFAULT_1, STRETCH, EQUALIZE, CONSTRAIN]);
}

defineClass(53, 6, $intern_62);
var CONSTRAIN, DEFAULT_1, EQUALIZE, STRETCH;
var Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy', 53, Ljava_lang_Enum_2_classLit, values_36);
function $computeSize_1(size_0, extent){
  return size_0 < extent?size_0:extent;
}

function AxisLayout$Policy$1(){
  AxisLayout$Policy.call(this, 'DEFAULT', 0);
}

defineClass(446, 53, $intern_62, AxisLayout$Policy$1);
var Ltripleplay_ui_layout_AxisLayout$Policy$1_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/1', 446, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Policy$2(){
  AxisLayout$Policy.call(this, 'STRETCH', 1);
}

defineClass(447, 53, $intern_62, AxisLayout$Policy$2);
var Ltripleplay_ui_layout_AxisLayout$Policy$2_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/2', 447, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Policy$3(){
  AxisLayout$Policy.call(this, 'EQUALIZE', 2);
}

defineClass(448, 53, $intern_62, AxisLayout$Policy$3);
var Ltripleplay_ui_layout_AxisLayout$Policy$3_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/3', 448, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Policy$4(){
  AxisLayout$Policy.call(this, 'CONSTRAIN', 3);
}

defineClass(449, 53, $intern_62, AxisLayout$Policy$4);
var Ltripleplay_ui_layout_AxisLayout$Policy$4_2_classLit = createForEnum('tripleplay.ui.layout', 'AxisLayout/Policy/4', 449, Ltripleplay_ui_layout_AxisLayout$Policy_2_classLit, null);
function AxisLayout$Vertical(){
  $clinit_AxisLayout();
  $clinit_AxisLayout$Policy();
}

defineClass(175, 444, {}, AxisLayout$Vertical);
_.computeSize_1 = function computeSize_3(elems, hintX, hintY){
  var m;
  m = $computeMetrics(this, elems, hintX, hintY);
  return new Dimension_0(m.maxWidth, m.prefHeight + $gaps(m, this._gap));
}
;
_.layout_2 = function layout_7(elems, left, top_0, width_0, height){
  var c, eheight, elem, elem$iterator, ewidth, halign, m, psize, stretchHeight, valign, y_0;
  halign = resolveStyle(elems, ($clinit_Style() , HALIGN));
  valign = resolveStyle(elems, VALIGN);
  m = $computeMetrics(this, elems, width_0, height);
  stretchHeight = max_0(0, height - $gaps(m, this._gap) - m.fixHeight);
  y_0 = top_0 + (m.stretchers > 0?0:valign.offset_0(m.fixHeight + $gaps(m, this._gap), height));
  for (elem$iterator = elems.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    psize = elem.preferredSize(width_0, height);
    c = this._stretchByDefault?UNIFORM_STRETCHED:UNSTRETCHED;
    ewidth = $computeSize_1(psize.width_0, width_0);
    eheight = $computeSize_0(c, psize.height_0, m.totalWeight, stretchHeight);
    $setBounds_1(elem, left + halign.offset_0(ewidth, width_0), y_0, ewidth, eheight);
    y_0 += eheight + this._gap;
  }
}
;
var Ltripleplay_ui_layout_AxisLayout$Vertical_2_classLit = createForClass('tripleplay.ui.layout', 'AxisLayout/Vertical', 175, Ltripleplay_ui_layout_AxisLayout_2_classLit);
function $clinit_BorderLayout(){
  $clinit_BorderLayout = emptyMethod;
  CENTER_3 = ($clinit_BorderLayout$Position() , CENTER_4).stretched;
  NS = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [NORTH, SOUTH]);
  WE = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [WEST, EAST]);
  WCE = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [WEST, CENTER_4, EAST]);
}

function BorderLayout(){
  $clinit_BorderLayout();
  this.hgap = 0;
  this.vgap = 0;
}

defineClass(185, 633, {}, BorderLayout);
_.computeSize_1 = function computeSize_4(elems, hintX, hintY){
  return $computeSize_2(new BorderLayout$Slots(this, elems), hintX, hintY);
}
;
_.layout_2 = function layout_8(elems, left, top_0, width_0, height){
  var bounds, c, dim, halign, p, slots, valign;
  halign = resolveStyle(elems, ($clinit_Style() , HALIGN));
  valign = resolveStyle(elems, VALIGN);
  slots = new BorderLayout$Slots(this, elems);
  bounds = new Rectangle_0(left, top_0, width_0, height);
  $layoutNs(slots, ($clinit_BorderLayout$Position() , NORTH), halign, bounds);
  $layoutNs(slots, SOUTH, halign, bounds);
  $layoutWe(slots, WEST, valign, bounds);
  $layoutWe(slots, EAST, valign, bounds);
  p = CENTER_4;
  dim = $size(slots, p, bounds.width_0, bounds.height_0);
  if (!dim) {
    return;
  }
  c = $get_6(slots.elements, p)._constraint;
  dim = $adjust(c, dim, bounds);
  $setBounds_2(slots, p, $align(c, bounds.x_0, halign.offset_0(dim.width_0, bounds.width_0)), $align(c, bounds.y_0, valign.offset_0(dim.height_0, bounds.height_0)), dim);
}
;
_.hgap = 0;
_.vgap = 0;
var CENTER_3, NS, WCE, WE;
var Ltripleplay_ui_layout_BorderLayout_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout', 185, Ltripleplay_ui_Layout_2_classLit);
function $adjust(this$static, pref, boundary){
  var dim;
  dim = new Dimension_1(pref);
  if (this$static._stretch) {
    (this$static._pos.orient & 1) != 0 && (dim.width_0 = boundary.width_0);
    (this$static._pos.orient & 2) != 0 && (dim.height_0 = boundary.height_0);
  }
  dim.width_0 = min_0(dim.width_0, boundary.width_0);
  dim.height_0 = min_0(dim.height_0, boundary.height_0);
  return dim;
}

function $align(this$static, origin, offset){
  return this$static._stretch?origin:origin + offset;
}

function BorderLayout$Constraint(pos, stretch){
  this._pos = pos;
  this._stretch = stretch;
}

defineClass(244, 634, {}, BorderLayout$Constraint);
_._stretch = false;
var Ltripleplay_ui_layout_BorderLayout$Constraint_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout/Constraint', 244, Ltripleplay_ui_Layout$Constraint_2_classLit);
function $clinit_BorderLayout$Position(){
  $clinit_BorderLayout$Position = emptyMethod;
  CENTER_4 = new BorderLayout$Position('CENTER', 0, 3);
  NORTH = new BorderLayout$Position('NORTH', 1, 1);
  SOUTH = new BorderLayout$Position('SOUTH', 2, 1);
  EAST = new BorderLayout$Position('EAST', 3, 2);
  WEST = new BorderLayout$Position('WEST', 4, 2);
}

function BorderLayout$Position(enum$name, enum$ordinal, orient){
  Enum.call(this, enum$name, enum$ordinal);
  this.orient = orient;
  this.unstretched = new BorderLayout$Constraint(this, false);
  this.stretched = new BorderLayout$Constraint(this, true);
}

function positionOf(c){
  $clinit_BorderLayout$Position();
  var p, p$array, p$index, p$max;
  for (p$array = initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [CENTER_4, NORTH, SOUTH, EAST, WEST]) , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    if (p.unstretched == c || p.stretched == c) {
      return p;
    }
  }
  return null;
}

function values_37(){
  $clinit_BorderLayout$Position();
  return initValues(getClassLiteralForArray(Ltripleplay_ui_layout_BorderLayout$Position_2_classLit, 1), $intern_1, 43, 0, [CENTER_4, NORTH, SOUTH, EAST, WEST]);
}

defineClass(43, 6, {3:1, 7:1, 6:1, 43:1}, BorderLayout$Position);
_.orient = 0;
var CENTER_4, EAST, NORTH, SOUTH, WEST;
var Ltripleplay_ui_layout_BorderLayout$Position_2_classLit = createForEnum('tripleplay.ui.layout', 'BorderLayout/Position', 43, Ljava_lang_Enum_2_classLit, values_37);
function $computeSize_2(this$static, hintX, hintY){
  var csize, dim, ehintX, ehintY, nsSize, pos, pos$array, pos$array0, pos$index, pos$index0, pos$max, pos$max0, wce, weSize;
  wce = $count(this$static, ($clinit_BorderLayout() , WCE));
  nsSize = new Dimension;
  for (pos$array0 = NS , pos$index0 = 0 , pos$max0 = pos$array0.length; pos$index0 < pos$max0; ++pos$index0) {
    pos = pos$array0[pos$index0];
    dim = $size(this$static, pos, hintX, 0);
    if (!dim) {
      continue;
    }
    nsSize.height_0 += dim.height_0;
    nsSize.width_0 = max_0(nsSize.width_0, dim.width_0);
    wce > 0 && (nsSize.height_0 += this$static.this$01.vgap);
  }
  ehintY = max_0(0, hintY - nsSize.height_0);
  weSize = new Dimension;
  for (pos$array = WE , pos$index = 0 , pos$max = pos$array.length; pos$index < pos$max; ++pos$index) {
    pos = pos$array[pos$index];
    dim = $size(this$static, pos, 0, ehintY);
    if (!dim) {
      continue;
    }
    weSize.width_0 += dim.width_0;
    weSize.height_0 = max_0(weSize.height_0, dim.height_0);
  }
  weSize.width_0 += (wce - 1 > 0?wce - 1:0) * this$static.this$01.hgap;
  ehintX = max_0(0, hintX - weSize.width_0);
  csize = $size(this$static, ($clinit_BorderLayout$Position() , CENTER_4), ehintX, ehintY);
  if (csize) {
    weSize.width_0 += csize.width_0;
    nsSize.height_0 += csize.height_0;
  }
  return new Dimension_0(max_0(weSize.width_0, nsSize.width_0), max_0(weSize.height_0, nsSize.height_0));
}

function $count(this$static, ps){
  var count, p, p$index, p$max;
  count = 0;
  for (p$index = 0 , p$max = ps.length; p$index < p$max; ++p$index) {
    p = ps[p$index];
    $containsKey(this$static.elements, p) && ++count;
  }
  return count;
}

function $layoutNs(this$static, p, halign, bounds){
  var c, dim, y_0;
  dim = $size(this$static, p, bounds.width_0, 0);
  if (!dim) {
    return;
  }
  c = $get_6(this$static.elements, p)._constraint;
  dim = $adjust(c, dim, bounds);
  y_0 = bounds.y_0;
  p == ($clinit_BorderLayout$Position() , NORTH)?(bounds.y_0 += dim.height_0 + this$static.this$01.vgap):(y_0 += bounds.height_0 - dim.height_0);
  bounds.height_0 -= dim.height_0 + this$static.this$01.vgap;
  $setBounds_2(this$static, p, $align(c, bounds.x_0, halign.offset_0(dim.width_0, bounds.width_0)), y_0, dim);
}

function $layoutWe(this$static, p, valign, bounds){
  var c, dim, x_0;
  dim = $size(this$static, p, 0, bounds.height_0);
  if (!dim) {
    return;
  }
  c = $get_6(this$static.elements, p)._constraint;
  dim = $adjust(c, dim, bounds);
  x_0 = bounds.x_0;
  p == ($clinit_BorderLayout$Position() , WEST)?(bounds.x_0 += dim.width_0 + this$static.this$01.hgap):(x_0 += bounds.width_0 - dim.width_0);
  bounds.width_0 -= dim.width_0 + this$static.this$01.hgap;
  $setBounds_2(this$static, p, x_0, $align(c, bounds.y_0, valign.offset_0(dim.height_0, bounds.height_0)), dim);
}

function $setBounds_2(this$static, p, x_0, y_0, dim){
  $setBounds_1($get_6(this$static.elements, p), x_0, y_0, dim.width_0, dim.height_0);
}

function $size(this$static, p, hintX, hintY){
  var e;
  e = $get_6(this$static.elements, p);
  return !e?null:e.preferredSize(hintX, hintY);
}

function BorderLayout$Slots(this$0, elems){
  var elem, elem$iterator, existing, p;
  this.this$01 = this$0;
  this.elements = new HashMap;
  for (elem$iterator = elems.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    if (!$isSet_0(elem, ($clinit_Element$Flag() , VISIBLE_2)))
      continue;
    p = positionOf(elem._constraint);
    if (!p) {
      throw new IllegalStateException_0('Element with a non-BorderLayout constraint: ' + elem);
    }
    existing = $put_4(this.elements, p, elem);
    if (existing) {
      throw new IllegalStateException_0('Multiple elements: ' + elem + ' and ' + existing + ' with the same BorderLayout constraint: ' + p);
    }
  }
}

defineClass(245, 1, {}, BorderLayout$Slots);
var Ltripleplay_ui_layout_BorderLayout$Slots_2_classLit = createForClass('tripleplay.ui.layout', 'BorderLayout/Slots', 245, Ljava_lang_Object_2_classLit);
function $clinit_Insets(){
  $clinit_Insets = emptyMethod;
  ZERO_0 = new Insets(0, 0, 0, 0);
}

function $subtractFrom(this$static, size_0){
  size_0.width_0 -= this$static._left + this$static._right;
  size_0.height_0 -= this$static._top + this$static._bottom;
  return size_0;
}

function Insets(top_0, right, bottom, left){
  $clinit_Insets();
  this._top = top_0;
  this._right = right;
  this._bottom = bottom;
  this._left = left;
}

defineClass(177, 1, {}, Insets);
_.toString$ = function toString_84(){
  return this._top + ',' + this._right + ',' + this._bottom + ',' + this._left;
}
;
_._bottom = 0;
_._left = 0;
_._right = 0;
_._top = 0;
var ZERO_0;
var Ltripleplay_ui_util_Insets_2_classLit = createForClass('tripleplay.ui.util', 'Insets', 177, Ljava_lang_Object_2_classLit);
function brighter(color_0){
  var a, b, g, r;
  a = color_0 >> 24 & 255;
  r = color_0 >> 16 & 255;
  g = color_0 >> 8 & 255;
  b = color_0 & 255;
  if (r == 0 && g == 0 && b == 0)
    return a << 24 | 196608 | 768 | 3;
  r != 0 && (r = 3 > r?3:r);
  g != 0 && (g = 3 > g?3:g);
  b != 0 && (b = 3 > b?3:b);
  return a << 24 | min_1(round_int(r * $intern_63), 255) << 16 | min_1(round_int(g * $intern_63), 255) << 8 | min_1(round_int(b * $intern_63), 255);
}

function $clinit_EffectRenderer(){
  $clinit_EffectRenderer = emptyMethod;
  NONE_3 = new EffectRenderer$1;
}

defineClass(643, 1, {});
_.adjustHeight = function adjustHeight(height){
  return height;
}
;
_.adjustWidth = function adjustWidth(width_0){
  return width_0;
}
;
var NONE_3;
var Ltripleplay_util_EffectRenderer_2_classLit = createForClass('tripleplay.util', 'EffectRenderer', 643, Ljava_lang_Object_2_classLit);
function EffectRenderer$1(){
}

defineClass(525, 643, {}, EffectRenderer$1);
_.render = function render(canvas, layout, textColor, underlined, x_0, y_0){
  var bounds, sx, sy;
  $save(canvas.ctx);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  if (underlined) {
    bounds = layout.bounds;
    sx = x_0 + bounds.x_0;
    sy = y_0 + bounds.y_0 + bounds.height_0 + 1;
    $fillRect_1(canvas, sx, sy, bounds.width_0, 1);
  }
  $fill_0(layout, canvas.ctx, x_0, y_0);
  $restore(canvas.ctx);
}
;
var Ltripleplay_util_EffectRenderer$1_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/1', 525, Ltripleplay_util_EffectRenderer_2_classLit);
function EffectRenderer$Gradient(gradientColor, gradientType){
  $clinit_EffectRenderer();
  this.gradientColor = gradientColor;
  this.gradientType = gradientType;
}

defineClass(182, 643, {182:1}, EffectRenderer$Gradient);
_.equals$ = function equals_40(obj){
  var that;
  if (!instanceOf(obj, 182))
    return false;
  that = obj;
  return this.gradientColor == that.gradientColor && this.gradientType == that.gradientType;
}
;
_.hashCode$ = function hashCode_44(){
  return 83 * this.gradientColor ^ 113 * this.gradientType.ordinal;
}
;
_.render = function render_0(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, colors, positions, sx, sy;
  colors = null;
  positions = null;
  switch (this.gradientType.ordinal) {
    case 0:
      colors = initValues(getClassLiteralForArray(I_classLit, 1), $intern_41, 0, 7, [textColor, this.gradientColor]);
      positions = initValues(getClassLiteralForArray(F_classLit, 1), $intern_47, 0, 7, [0, 1]);
      break;
    case 1:
      colors = initValues(getClassLiteralForArray(I_classLit, 1), $intern_41, 0, 7, [this.gradientColor, textColor]);
      positions = initValues(getClassLiteralForArray(F_classLit, 1), $intern_47, 0, 7, [0, 1]);
      break;
    case 2:
      colors = initValues(getClassLiteralForArray(I_classLit, 1), $intern_41, 0, 7, [textColor, this.gradientColor, textColor]);
      positions = initValues(getClassLiteralForArray(F_classLit, 1), $intern_47, 0, 7, [0, 0.5, 1]);
  }
  $save(canvas.ctx);
  $setFillGradient(canvas, $createGradient(canvas, new Gradient$Linear(text_0.size_0.height_0, colors, positions)));
  $fill_0(text_0, canvas.ctx, x_0, y_0);
  if (underlined) {
    bounds = text_0.bounds;
    sx = x_0 + bounds.x_0;
    sy = y_0 + bounds.y_0 + bounds.height_0 + 1;
    $fillRect_1(canvas, sx, sy, bounds.width_0, 1);
  }
  $restore(canvas.ctx);
}
;
_.gradientColor = 0;
var Ltripleplay_util_EffectRenderer$Gradient_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/Gradient', 182, Ltripleplay_util_EffectRenderer_2_classLit);
function $clinit_EffectRenderer$Gradient$Type(){
  $clinit_EffectRenderer$Gradient$Type = emptyMethod;
  BOTTOM_1 = new EffectRenderer$Gradient$Type('BOTTOM', 0);
  TOP_1 = new EffectRenderer$Gradient$Type('TOP', 1);
  CENTER_5 = new EffectRenderer$Gradient$Type('CENTER', 2);
}

function EffectRenderer$Gradient$Type(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_38(){
  $clinit_EffectRenderer$Gradient$Type();
  return initValues(getClassLiteralForArray(Ltripleplay_util_EffectRenderer$Gradient$Type_2_classLit, 1), $intern_1, 114, 0, [BOTTOM_1, TOP_1, CENTER_5]);
}

defineClass(114, 6, {3:1, 7:1, 6:1, 114:1}, EffectRenderer$Gradient$Type);
var BOTTOM_1, CENTER_5, TOP_1;
var Ltripleplay_util_EffectRenderer$Gradient$Type_2_classLit = createForEnum('tripleplay.util', 'EffectRenderer/Gradient/Type', 114, Ljava_lang_Enum_2_classLit, values_38);
function EffectRenderer$PixelOutline(outlineColor){
  $clinit_EffectRenderer();
  this.outlineColor = outlineColor;
}

defineClass(179, 643, {179:1}, EffectRenderer$PixelOutline);
_.adjustHeight = function adjustHeight_0(height){
  return height + 2;
}
;
_.adjustWidth = function adjustWidth_0(width_0){
  return width_0 + 2;
}
;
_.equals$ = function equals_41(obj){
  if (!instanceOf(obj, 179))
    return false;
  return this.outlineColor == obj.outlineColor;
}
;
_.hashCode$ = function hashCode_45(){
  return this.outlineColor;
}
;
_.render = function render_1(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, sx, sy;
  $save(canvas.ctx);
  if (underlined) {
    bounds = text_0.bounds;
    sx = x_0 + bounds.x_0 + 1;
    sy = y_0 + bounds.y_0 + bounds.height_0 + 2;
    $fillRect_1($setFillColor_0(canvas, this.outlineColor), sx - 1, sy - 1, bounds.width_0 + 3, 3);
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(textColor)) , canvas), sx, sy, bounds.width_0, 1);
  }
  $setFillColor_0(canvas, this.outlineColor);
  $fill_0(text_0, canvas.ctx, x_0, y_0);
  $fill_0(text_0, canvas.ctx, x_0, y_0 + 1);
  $fill_0(text_0, canvas.ctx, x_0, y_0 + 2);
  $fill_0(text_0, canvas.ctx, x_0 + 1, y_0);
  $fill_0(text_0, canvas.ctx, x_0 + 1, y_0 + 2);
  $fill_0(text_0, canvas.ctx, x_0 + 2, y_0);
  $fill_0(text_0, canvas.ctx, x_0 + 2, y_0 + 1);
  $fill_0(text_0, canvas.ctx, x_0 + 2, y_0 + 2);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  $fill_0(text_0, canvas.ctx, x_0 + 1, y_0 + 1);
  $restore(canvas.ctx);
}
;
_.outlineColor = 0;
var Ltripleplay_util_EffectRenderer$PixelOutline_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/PixelOutline', 179, Ltripleplay_util_EffectRenderer_2_classLit);
function EffectRenderer$Shadow(shadowColor, shadowX, shadowY){
  $clinit_EffectRenderer();
  this.shadowColor = shadowColor;
  this.shadowX = shadowX;
  this.shadowY = shadowY;
}

defineClass(181, 643, {181:1}, EffectRenderer$Shadow);
_.adjustHeight = function adjustHeight_1(height){
  return height + abs_0(this.shadowY);
}
;
_.adjustWidth = function adjustWidth_1(width_0){
  return width_0 + abs_0(this.shadowX);
}
;
_.equals$ = function equals_42(obj){
  var that;
  if (!instanceOf(obj, 181))
    return false;
  that = obj;
  return this.shadowColor == that.shadowColor && this.shadowX == that.shadowX && this.shadowY == that.shadowY;
}
;
_.hashCode$ = function hashCode_46(){
  return this.shadowColor ^ round_int(this.shadowX) ^ round_int(this.shadowY);
}
;
_.render = function render_2(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, sx, sy, tx, ty;
  tx = this.shadowX < 0?-this.shadowX:0;
  ty = this.shadowY < 0?-this.shadowY:0;
  sx = this.shadowX < 0?0:this.shadowX;
  sy = this.shadowY < 0?0:this.shadowY;
  $save(canvas.ctx);
  if (underlined) {
    bounds = text_0.bounds;
    $fillRect_1($setFillColor_0(canvas, this.shadowColor), sx + bounds.x_0 + x_0, sy + bounds.y_0 + bounds.height_0 + 1, bounds.width_0 + 1, 1);
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(textColor)) , canvas), tx + bounds.x_0 + x_0, ty + bounds.y_0 + bounds.height_0 + 1, bounds.width_0 + 1, 1);
  }
  $setFillColor_0(canvas, this.shadowColor);
  $fill_0(text_0, canvas.ctx, x_0 + sx, y_0 + sy);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  $fill_0(text_0, canvas.ctx, x_0 + tx, y_0 + ty);
  $restore(canvas.ctx);
}
;
_.shadowColor = 0;
_.shadowX = 0;
_.shadowY = 0;
var Ltripleplay_util_EffectRenderer$Shadow_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/Shadow', 181, Ltripleplay_util_EffectRenderer_2_classLit);
function EffectRenderer$VectorOutline(outlineColor, outlineWidth, cap, join_0){
  $clinit_EffectRenderer();
  this.outlineColor = outlineColor;
  this.outlineWidth = outlineWidth;
  this.outlineCap = cap;
  this.outlineJoin = join_0;
}

defineClass(180, 643, {180:1}, EffectRenderer$VectorOutline);
_.adjustHeight = function adjustHeight_2(height){
  return height + 2 * this.outlineWidth;
}
;
_.adjustWidth = function adjustWidth_2(width_0){
  return width_0 + 2 * this.outlineWidth;
}
;
_.equals$ = function equals_43(obj){
  var that;
  if (!instanceOf(obj, 180))
    return false;
  that = obj;
  return this.outlineColor == that.outlineColor && this.outlineWidth == that.outlineWidth && this.outlineCap == that.outlineCap && this.outlineJoin == that.outlineJoin;
}
;
_.hashCode$ = function hashCode_47(){
  return this.outlineColor ^ round_int(this.outlineWidth) ^ getHashCode(this.outlineCap) ^ getHashCode(this.outlineJoin);
}
;
_.render = function render_3(canvas, text_0, textColor, underlined, x_0, y_0){
  var bounds, sx, sy;
  $save(canvas.ctx);
  $setStrokeColor(canvas, this.outlineColor);
  $setStrokeWidth(canvas, this.outlineWidth * 2);
  $setLineCap_0(canvas, this.outlineCap);
  $setLineJoin_0(canvas, this.outlineJoin);
  $strokeText_0(canvas, text_0, x_0 + this.outlineWidth, y_0 + this.outlineWidth);
  $setFillStyleWeb(canvas.ctx, cssColorString(textColor));
  $fillText_0(canvas, text_0, x_0 + this.outlineWidth, y_0 + this.outlineWidth);
  if (underlined) {
    bounds = text_0.bounds;
    sx = x_0 + bounds.x_0 + this.outlineWidth;
    sy = y_0 + bounds.y_0 + bounds.height_0 + this.outlineWidth + 1;
    $fillRect_1(canvas, sx, sy, bounds.width_0, 1);
  }
  $restore(canvas.ctx);
}
;
_.outlineColor = 0;
_.outlineWidth = 0;
var Ltripleplay_util_EffectRenderer$VectorOutline_2_classLit = createForClass('tripleplay.util', 'EffectRenderer/VectorOutline', 180, Ltripleplay_util_EffectRenderer_2_classLit);
function $close_9(this$static){
  if (this$static._layer) {
    $close_4(this$static._layer);
    this$static._layer = null;
  }
  this$static._preparedWidth = 0;
  this$static._preparedHeight = 0;
}

function $prepare(this$static, gfx, width_0, height){
  var layer;
  layer = this$static._layer;
  if (!layer) {
    layer = new CanvasLayer(gfx, width_0, height);
    $add_3(this$static._parent, layer);
    this$static._layer = layer;
  }
   else 
    ((layer.forceWidth < 0?layer.canvas.width_0:layer.forceWidth) < width_0 || (layer.forceHeight < 0?layer.canvas.height_0:layer.forceHeight) < height) && (layer.canvas = $createCanvas(layer.gfx, width_0, height));
  this$static._preparedWidth = width_0;
  this$static._preparedHeight = height;
}

function Glyph(parent_0){
  this._parent = parent_0;
}

defineClass(510, 1, $intern_20, Glyph);
_.close_0 = function close_23(){
  $close_9(this);
}
;
_._preparedHeight = 0;
_._preparedWidth = 0;
var Ltripleplay_util_Glyph_2_classLit = createForClass('tripleplay.util', 'Glyph', 510, Ljava_lang_Object_2_classLit);
function $clinit_Interpolator(){
  $clinit_Interpolator = emptyMethod;
  LINEAR = new Interpolator$2;
  EASE_IN = new Interpolator$3;
  EASE_OUT = new Interpolator$4;
  EASE_INOUT = new Interpolator$5;
}

function $apply_5(this$static, start_0, range, dt, t){
  var pos;
  pos = t == 0?1:this$static.apply_1(dt / t);
  return start_0 + range * pos;
}

function $applyClamp(this$static, start_0, range, dt){
  return $apply_5(this$static, start_0, range, dt < 0?0:dt > 500?500:dt, 500);
}

defineClass(635, 1, {});
var EASE_IN, EASE_INOUT, EASE_OUT, LINEAR;
var Ltripleplay_util_Interpolator_2_classLit = createForClass('tripleplay.util', 'Interpolator', 635, Ljava_lang_Object_2_classLit);
function Interpolator$2(){
}

defineClass(456, 635, {}, Interpolator$2);
_.apply_1 = function apply_13(v){
  return v;
}
;
_.toString$ = function toString_85(){
  return 'LINEAR';
}
;
var Ltripleplay_util_Interpolator$2_2_classLit = createForClass('tripleplay.util', 'Interpolator/2', 456, Ltripleplay_util_Interpolator_2_classLit);
function Interpolator$3(){
}

defineClass(457, 635, {}, Interpolator$3);
_.apply_1 = function apply_14(v){
  return v * v * v;
}
;
_.toString$ = function toString_86(){
  return 'EASE_IN';
}
;
var Ltripleplay_util_Interpolator$3_2_classLit = createForClass('tripleplay.util', 'Interpolator/3', 457, Ltripleplay_util_Interpolator_2_classLit);
function Interpolator$4(){
}

defineClass(458, 635, {}, Interpolator$4);
_.apply_1 = function apply_15(v){
  var vv;
  vv = v - 1;
  return 1 + vv * vv * vv;
}
;
_.toString$ = function toString_87(){
  return 'EASE_OUT';
}
;
var Ltripleplay_util_Interpolator$4_2_classLit = createForClass('tripleplay.util', 'Interpolator/4', 458, Ltripleplay_util_Interpolator_2_classLit);
function Interpolator$5(){
}

defineClass(459, 635, {}, Interpolator$5);
_.apply_1 = function apply_16(v){
  var ov, v2;
  v2 = 2 * v;
  if (v2 < 1) {
    return v2 * v2 * v2 / 2;
  }
  ov = v2 - 2;
  return (2 + ov * ov * ov) / 2;
}
;
_.toString$ = function toString_88(){
  return 'EASE_INOUT';
}
;
var Ltripleplay_util_Interpolator$5_2_classLit = createForClass('tripleplay.util', 'Interpolator/5', 459, Ltripleplay_util_Interpolator_2_classLit);
function Layers$2(val$width, val$height, val$color){
  this.val$width1 = val$width;
  this.val$height2 = val$height;
  this.val$color3 = val$color;
  Layer.call(this);
}

defineClass(250, 18, $intern_24, Layers$2);
_.height_1 = function height_4(){
  return this.val$height2;
}
;
_.paintImpl = function paintImpl_5(surf){
  $fillRect_0($setFillColor(surf, this.val$color3), 0, 0, this.val$width1, this.val$height2);
}
;
_.width_1 = function width_5(){
  return this.val$width1;
}
;
_.val$color3 = 0;
_.val$height2 = 0;
_.val$width1 = 0;
var Ltripleplay_util_Layers$2_2_classLit = createForClass('tripleplay.util', 'Layers/2', 250, Lplayn_scene_Layer_2_classLit);
function $clinit_Logger(){
  $clinit_Logger = emptyMethod;
  levels_0 = new Logger$Levels;
}

function $debug_0(this$static, message, args){
  $shouldLog(levels_0, ($clinit_Logger$Level() , DEBUG_0), this$static._ident) && $log_0(message, args);
}

function $log_0(message, args){
  var error, sb;
  sb = $append_6(new StringBuilder, message);
  if (args.length > 1) {
    sb.string += ' [';
    format_2(sb, args);
    sb.string += ']';
  }
  error = args.length % 2 == 1?args[args.length - 1]:null;
  $clinit_System();
  !!error && error.printStackTrace(out_0);
}

function $warning(this$static, args){
  $shouldLog(levels_0, ($clinit_Logger$Level() , WARNING), this$static._ident) && $log_0('Screen choked', args);
}

function Logger(ident){
  $clinit_Logger();
  this._ident = ident;
}

function format_2(into, args){
  var ii, ll;
  for (ii = 0 , ll = ~~(args.length / 2); ii < ll; ii++) {
    ii > 0 && (into.string += ', ' , into);
    $append_5($append_6($append_5(into, args[2 * ii]), '='), args[2 * ii + 1]);
  }
  return into;
}

defineClass(209, 1, {}, Logger);
var levels_0;
var Ltripleplay_util_Logger_2_classLit = createForClass('tripleplay.util', 'Logger', 209, Ljava_lang_Object_2_classLit);
function $clinit_Logger$Level(){
  $clinit_Logger$Level = emptyMethod;
  DEBUG_0 = new Logger$Level('DEBUG', 0);
  INFO_1 = new Logger$Level('INFO', 1);
  WARNING = new Logger$Level('WARNING', 2);
  ERROR_0 = new Logger$Level('ERROR', 3);
  OFF = new Logger$Level('OFF', 4);
}

function Logger$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_39(){
  $clinit_Logger$Level();
  return initValues(getClassLiteralForArray(Ltripleplay_util_Logger$Level_2_classLit, 1), $intern_1, 75, 0, [DEBUG_0, INFO_1, WARNING, ERROR_0, OFF]);
}

defineClass(75, 6, {3:1, 7:1, 6:1, 75:1}, Logger$Level);
var DEBUG_0, ERROR_0, INFO_1, OFF, WARNING;
var Ltripleplay_util_Logger$Level_2_classLit = createForEnum('tripleplay.util', 'Logger/Level', 75, Ljava_lang_Enum_2_classLit, values_39);
function $setDefault(this$static, level){
  this$static._defaultLevel = level;
  return this$static;
}

function $shouldLog(this$static, level, ident){
  var ilevel;
  ilevel = $getStringValue(this$static._levels, ident);
  if (ilevel)
    return level.ordinal >= ilevel.ordinal;
  return level.ordinal >= this$static._defaultLevel.ordinal;
}

function Logger$Levels(){
  this._defaultLevel = ($clinit_Logger$Level() , DEBUG_0);
  this._levels = new HashMap;
}

defineClass(409, 1, {}, Logger$Levels);
var Ltripleplay_util_Logger$Levels_2_classLit = createForClass('tripleplay.util', 'Logger/Levels', 409, Ljava_lang_Object_2_classLit);
function $clear_3(this$static){
  var toBeCleared;
  if (this$static._target) {
    toBeCleared = this$static._target;
    this$static._target = null;
    toBeCleared.close_0();
  }
}

function $set_6(this$static, target){
  $clear_3(this$static);
  this$static._target = target;
  return target;
}

defineClass(639, 1, {});
var Ltripleplay_util_Ref_2_classLit = createForClass('tripleplay.util', 'Ref', 639, Ljava_lang_Object_2_classLit);
function Ref$1(){
}

defineClass(508, 639, {}, Ref$1);
var Ltripleplay_util_Ref$1_2_classLit = createForClass('tripleplay.util', 'Ref/1', 508, Ltripleplay_util_Ref_2_classLit);
defineClass(533, 1, {});
var Ltripleplay_util_StyledText_2_classLit = createForClass('tripleplay.util', 'StyledText', 533, Ljava_lang_Object_2_classLit);
function $equals_6(this$static, other){
  var op;
  if (instanceOf(other, 79)) {
    op = other;
    return $equals_0(this$static.text_0, op.text_0) && $equals_7(this$static.style_0, op.style_0);
  }
   else 
    return false;
}

function StyledText$Plain(gfx, text_0, style){
  this._gfx = gfx;
  this.text_0 = text_0;
  this.style_0 = style;
}

defineClass(79, 533, {79:1});
_.equals$ = function equals_44(other){
  return $equals_6(this, other);
}
;
_.hashCode$ = function hashCode_48(){
  return getHashCode_0(this.text_0) ^ $hashCode_3(this.style_0);
}
;
var Ltripleplay_util_StyledText$Plain_2_classLit = createForClass('tripleplay.util', 'StyledText/Plain', 79, Ltripleplay_util_StyledText_2_classLit);
function StyledText$Block(gfx, text_0, style, wrap, align_0){
  StyledText$Plain.call(this, gfx, text_0, style);
  this.wrap = wrap;
  this.align_0 = align_0;
  this._layouts = layoutText_0(gfx, gfx.dummyCtx, text_0, style, wrap);
  this._bounds = getBounds(this._layouts, new Rectangle);
  this._bounds.width_0 = style.effect.adjustWidth(this._bounds.width_0);
  this._bounds.height_0 = style.effect.adjustHeight(this._bounds.height_0);
}

defineClass(246, 79, {79:1}, StyledText$Block);
_.equals$ = function equals_45(other){
  var op;
  if (instanceOf(other, 79)) {
    op = other;
    return $equals_0(this.text_0, op.text_0) && $equals_7(this.style_0, op.style_0);
  }
   else 
    return false;
}
;
_.hashCode$ = function hashCode_49(){
  return getHashCode_0(this.text_0) ^ $hashCode_3(this.style_0) ^ $hashCode_2(this.wrap) ^ getHashCode(this.align_0);
}
;
_.height_1 = function height_5(){
  return this._bounds.height_0;
}
;
_.render_0 = function render_4(canvas, x_0, y_0){
  var bx, layout, layout$array, layout$index, layout$max, lx, ly;
  bx = this._bounds.x_0;
  ly = y_0 + this._bounds.y_0;
  for (layout$array = this._layouts , layout$index = 0 , layout$max = layout$array.length; layout$index < layout$max; ++layout$index) {
    layout = layout$array[layout$index];
    lx = x_0 + bx + this.align_0.getX(this.style_0.effect.adjustWidth(layout.size_0.width_0), this._bounds.width_0 - this._bounds.x_0);
    this.style_0.effect.render(canvas, layout, this.style_0.textColor, this.style_0.underlined, lx, ly);
    ly += $intern_43 * layout.metrics.height_0 + $descent(layout.metrics) + $intern_42 * layout.metrics.height_0;
  }
}
;
_.resize = function resize(size_0){
  return new StyledText$Block(this._gfx, this.text_0, $withFont(this.style_0, $derive(this.style_0.font_0, size_0)), this.wrap, this.align_0);
}
;
_.toString$ = function toString_89(){
  return "Block '" + this.text_0 + "' @ " + this.style_0 + '/' + this.wrap + '/' + this.align_0;
}
;
_.width_1 = function width_6(){
  return this._bounds.width_0;
}
;
var Ltripleplay_util_StyledText$Block_2_classLit = createForClass('tripleplay.util', 'StyledText/Block', 246, Ltripleplay_util_StyledText$Plain_2_classLit);
function StyledText$Span(gfx, text_0, style){
  StyledText$Plain.call(this, gfx, text_0, style);
  this._layout = layoutText(gfx, gfx.dummyCtx, text_0, style);
}

defineClass(143, 79, {79:1, 143:1}, StyledText$Span);
_.equals$ = function equals_46(other){
  return instanceOf(other, 143) && $equals_6(this, other);
}
;
_.height_1 = function height_6(){
  return this.style_0.effect.adjustHeight(this._layout.size_0.height_0);
}
;
_.render_0 = function render_5(canvas, x_0, y_0){
  this.style_0.effect.render(canvas, this._layout, this.style_0.textColor, this.style_0.underlined, x_0, y_0);
}
;
_.resize = function resize_0(size_0){
  return new StyledText$Span(this._gfx, this.text_0, $withFont(this.style_0, $derive(this.style_0.font_0, size_0)));
}
;
_.toString$ = function toString_90(){
  return "Span '" + this.text_0 + "' @ " + this.style_0;
}
;
_.width_1 = function width_7(){
  return this.style_0.effect.adjustWidth(this._layout.size_0.width_0);
}
;
var Ltripleplay_util_StyledText$Span_2_classLit = createForClass('tripleplay.util', 'StyledText/Span', 143, Ltripleplay_util_StyledText$Plain_2_classLit);
function $clinit_TextStyle(){
  $clinit_TextStyle = emptyMethod;
  new TextStyle(null, true, $intern_25, ($clinit_EffectRenderer() , NONE_3), false);
}

function $equals_7(this$static, other){
  var os;
  if (!instanceOf(other, 115))
    return false;
  os = other;
  return $equals_4(this$static, other) && this$static.textColor == os.textColor && this$static.effect.equals$(os.effect) && this$static.underlined == os.underlined;
}

function $hashCode_3(this$static){
  return $hashCode_1(this$static) ^ this$static.textColor ^ this$static.effect.hashCode$() ^ (this$static.underlined?1:0);
}

function $withFont(this$static, font){
  return new TextStyle(font, this$static.antialias_0, this$static.textColor, this$static.effect, this$static.underlined);
}

function TextStyle(font, antialias, textColor, effect, underlined){
  $clinit_TextStyle();
  this.font_0 = font;
  this.antialias_0 = antialias;
  this.textColor = textColor;
  this.effect = effect;
  this.underlined = underlined;
}

defineClass(115, 142, {142:1, 115:1}, TextStyle);
_.equals$ = function equals_47(other){
  return $equals_7(this, other);
}
;
_.hashCode$ = function hashCode_50(){
  return $hashCode_3(this);
}
;
_.textColor = 0;
_.underlined = false;
var Ltripleplay_util_TextStyle_2_classLit = createForClass('tripleplay.util', 'TextStyle', 115, Lplayn_core_TextFormat_2_classLit);
var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 592, Ljava_lang_Object_2_classLit), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 594, Ljava_lang_Object_2_classLit), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null, Ljava_lang_Object_2_classLit), I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 597, Ljava_lang_Object_2_classLit), D_classLit = createForPrimitive('double', 'D'), F_classLit = createForPrimitive('float', 'F'), S_classLit = createForPrimitive('short', 'S'), C_classLit = createForPrimitive('char', 'C'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Lreact_Closeable_2_classLit = createForInterface('react', 'Closeable'), Ltripleplay_ui_ToggleButton_2_classLit = createForClass('tripleplay.ui', 'ToggleButton', null, Ltripleplay_ui_AbstractTextButton_2_classLit), Ltripleplay_ui_CheckBox_2_classLit = createForClass('tripleplay.ui', 'CheckBox', null, Ltripleplay_ui_TextWidget_2_classLit), Ltripleplay_ui_Field_2_classLit = createForClass('tripleplay.ui', 'Field', null, Ltripleplay_ui_TextWidget_2_classLit), Ltripleplay_ui_Menu_2_classLit = createForClass('tripleplay.ui', 'Menu', null, Ltripleplay_ui_Elements_2_classLit), Ltripleplay_ui_MenuItem_2_classLit = createForClass('tripleplay.ui', 'MenuItem', null, Ltripleplay_ui_TextWidget_2_classLit), Lreact_ValueView_2_classLit = createForInterface('react', 'ValueView');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=quads-0.js

