/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var constants_pb = require('./constants_pb.js');
goog.exportSymbol('proto.S2SessionCmd0', null, global);
goog.exportSymbol('proto.S2SessionCmd1', null, global);
goog.exportSymbol('proto.S2SessionResp0', null, global);
goog.exportSymbol('proto.S2SessionResp1', null, global);
goog.exportSymbol('proto.Sec2MsgType', null, global);
goog.exportSymbol('proto.Sec2Payload', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2SessionCmd0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2SessionCmd0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.S2SessionCmd0.displayName = 'proto.S2SessionCmd0';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2SessionCmd0.prototype.toObject = function(opt_includeInstance) {
  return proto.S2SessionCmd0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2SessionCmd0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionCmd0.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientUsername: msg.getClientUsername_asB64(),
    clientPubkey: msg.getClientPubkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2SessionCmd0}
 */
proto.S2SessionCmd0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2SessionCmd0;
  return proto.S2SessionCmd0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2SessionCmd0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2SessionCmd0}
 */
proto.S2SessionCmd0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setClientUsername(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setClientPubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2SessionCmd0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2SessionCmd0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2SessionCmd0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionCmd0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientUsername_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getClientPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes client_username = 1;
 * @return {!(string|Uint8Array)}
 */
proto.S2SessionCmd0.prototype.getClientUsername = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes client_username = 1;
 * This is a type-conversion wrapper around `getClientUsername()`
 * @return {string}
 */
proto.S2SessionCmd0.prototype.getClientUsername_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getClientUsername()));
};


/**
 * optional bytes client_username = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getClientUsername()`
 * @return {!Uint8Array}
 */
proto.S2SessionCmd0.prototype.getClientUsername_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getClientUsername()));
};


/** @param {!(string|Uint8Array)} value */
proto.S2SessionCmd0.prototype.setClientUsername = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes client_pubkey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.S2SessionCmd0.prototype.getClientPubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes client_pubkey = 2;
 * This is a type-conversion wrapper around `getClientPubkey()`
 * @return {string}
 */
proto.S2SessionCmd0.prototype.getClientPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getClientPubkey()));
};


/**
 * optional bytes client_pubkey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getClientPubkey()`
 * @return {!Uint8Array}
 */
proto.S2SessionCmd0.prototype.getClientPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getClientPubkey()));
};


/** @param {!(string|Uint8Array)} value */
proto.S2SessionCmd0.prototype.setClientPubkey = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2SessionResp0 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2SessionResp0, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.S2SessionResp0.displayName = 'proto.S2SessionResp0';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2SessionResp0.prototype.toObject = function(opt_includeInstance) {
  return proto.S2SessionResp0.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2SessionResp0} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionResp0.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    devicePubkey: msg.getDevicePubkey_asB64(),
    deviceSalt: msg.getDeviceSalt_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2SessionResp0}
 */
proto.S2SessionResp0.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2SessionResp0;
  return proto.S2SessionResp0.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2SessionResp0} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2SessionResp0}
 */
proto.S2SessionResp0.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevicePubkey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDeviceSalt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2SessionResp0.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2SessionResp0.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2SessionResp0} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionResp0.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDevicePubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDeviceSalt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional Status status = 1;
 * @return {!proto.Status}
 */
proto.S2SessionResp0.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Status} value */
proto.S2SessionResp0.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes device_pubkey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.S2SessionResp0.prototype.getDevicePubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes device_pubkey = 2;
 * This is a type-conversion wrapper around `getDevicePubkey()`
 * @return {string}
 */
proto.S2SessionResp0.prototype.getDevicePubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevicePubkey()));
};


/**
 * optional bytes device_pubkey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevicePubkey()`
 * @return {!Uint8Array}
 */
proto.S2SessionResp0.prototype.getDevicePubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevicePubkey()));
};


/** @param {!(string|Uint8Array)} value */
proto.S2SessionResp0.prototype.setDevicePubkey = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes device_salt = 3;
 * @return {!(string|Uint8Array)}
 */
proto.S2SessionResp0.prototype.getDeviceSalt = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes device_salt = 3;
 * This is a type-conversion wrapper around `getDeviceSalt()`
 * @return {string}
 */
proto.S2SessionResp0.prototype.getDeviceSalt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDeviceSalt()));
};


/**
 * optional bytes device_salt = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDeviceSalt()`
 * @return {!Uint8Array}
 */
proto.S2SessionResp0.prototype.getDeviceSalt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDeviceSalt()));
};


/** @param {!(string|Uint8Array)} value */
proto.S2SessionResp0.prototype.setDeviceSalt = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2SessionCmd1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2SessionCmd1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.S2SessionCmd1.displayName = 'proto.S2SessionCmd1';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2SessionCmd1.prototype.toObject = function(opt_includeInstance) {
  return proto.S2SessionCmd1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2SessionCmd1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionCmd1.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientProof: msg.getClientProof_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2SessionCmd1}
 */
proto.S2SessionCmd1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2SessionCmd1;
  return proto.S2SessionCmd1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2SessionCmd1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2SessionCmd1}
 */
proto.S2SessionCmd1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setClientProof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2SessionCmd1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2SessionCmd1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2SessionCmd1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionCmd1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes client_proof = 1;
 * @return {!(string|Uint8Array)}
 */
proto.S2SessionCmd1.prototype.getClientProof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes client_proof = 1;
 * This is a type-conversion wrapper around `getClientProof()`
 * @return {string}
 */
proto.S2SessionCmd1.prototype.getClientProof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getClientProof()));
};


/**
 * optional bytes client_proof = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getClientProof()`
 * @return {!Uint8Array}
 */
proto.S2SessionCmd1.prototype.getClientProof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getClientProof()));
};


/** @param {!(string|Uint8Array)} value */
proto.S2SessionCmd1.prototype.setClientProof = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.S2SessionResp1 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.S2SessionResp1, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.S2SessionResp1.displayName = 'proto.S2SessionResp1';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.S2SessionResp1.prototype.toObject = function(opt_includeInstance) {
  return proto.S2SessionResp1.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.S2SessionResp1} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionResp1.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    deviceProof: msg.getDeviceProof_asB64(),
    deviceNonce: msg.getDeviceNonce_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.S2SessionResp1}
 */
proto.S2SessionResp1.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.S2SessionResp1;
  return proto.S2SessionResp1.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.S2SessionResp1} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.S2SessionResp1}
 */
proto.S2SessionResp1.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDeviceProof(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDeviceNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.S2SessionResp1.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.S2SessionResp1.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.S2SessionResp1} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.S2SessionResp1.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDeviceProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDeviceNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional Status status = 1;
 * @return {!proto.Status}
 */
proto.S2SessionResp1.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Status} value */
proto.S2SessionResp1.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes device_proof = 2;
 * @return {!(string|Uint8Array)}
 */
proto.S2SessionResp1.prototype.getDeviceProof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes device_proof = 2;
 * This is a type-conversion wrapper around `getDeviceProof()`
 * @return {string}
 */
proto.S2SessionResp1.prototype.getDeviceProof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDeviceProof()));
};


/**
 * optional bytes device_proof = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDeviceProof()`
 * @return {!Uint8Array}
 */
proto.S2SessionResp1.prototype.getDeviceProof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDeviceProof()));
};


/** @param {!(string|Uint8Array)} value */
proto.S2SessionResp1.prototype.setDeviceProof = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes device_nonce = 3;
 * @return {!(string|Uint8Array)}
 */
proto.S2SessionResp1.prototype.getDeviceNonce = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes device_nonce = 3;
 * This is a type-conversion wrapper around `getDeviceNonce()`
 * @return {string}
 */
proto.S2SessionResp1.prototype.getDeviceNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDeviceNonce()));
};


/**
 * optional bytes device_nonce = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDeviceNonce()`
 * @return {!Uint8Array}
 */
proto.S2SessionResp1.prototype.getDeviceNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDeviceNonce()));
};


/** @param {!(string|Uint8Array)} value */
proto.S2SessionResp1.prototype.setDeviceNonce = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Sec2Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Sec2Payload.oneofGroups_);
};
goog.inherits(proto.Sec2Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Sec2Payload.displayName = 'proto.Sec2Payload';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Sec2Payload.oneofGroups_ = [[20,21,22,23]];

/**
 * @enum {number}
 */
proto.Sec2Payload.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SC0: 20,
  SR0: 21,
  SC1: 22,
  SR1: 23
};

/**
 * @return {proto.Sec2Payload.PayloadCase}
 */
proto.Sec2Payload.prototype.getPayloadCase = function() {
  return /** @type {proto.Sec2Payload.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.Sec2Payload.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Sec2Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.Sec2Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Sec2Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Sec2Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    msg: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sc0: (f = msg.getSc0()) && proto.S2SessionCmd0.toObject(includeInstance, f),
    sr0: (f = msg.getSr0()) && proto.S2SessionResp0.toObject(includeInstance, f),
    sc1: (f = msg.getSc1()) && proto.S2SessionCmd1.toObject(includeInstance, f),
    sr1: (f = msg.getSr1()) && proto.S2SessionResp1.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Sec2Payload}
 */
proto.Sec2Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Sec2Payload;
  return proto.Sec2Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Sec2Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Sec2Payload}
 */
proto.Sec2Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Sec2MsgType} */ (reader.readEnum());
      msg.setMsg(value);
      break;
    case 20:
      var value = new proto.S2SessionCmd0;
      reader.readMessage(value,proto.S2SessionCmd0.deserializeBinaryFromReader);
      msg.setSc0(value);
      break;
    case 21:
      var value = new proto.S2SessionResp0;
      reader.readMessage(value,proto.S2SessionResp0.deserializeBinaryFromReader);
      msg.setSr0(value);
      break;
    case 22:
      var value = new proto.S2SessionCmd1;
      reader.readMessage(value,proto.S2SessionCmd1.deserializeBinaryFromReader);
      msg.setSc1(value);
      break;
    case 23:
      var value = new proto.S2SessionResp1;
      reader.readMessage(value,proto.S2SessionResp1.deserializeBinaryFromReader);
      msg.setSr1(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Sec2Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Sec2Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Sec2Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Sec2Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsg();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSc0();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.S2SessionCmd0.serializeBinaryToWriter
    );
  }
  f = message.getSr0();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.S2SessionResp0.serializeBinaryToWriter
    );
  }
  f = message.getSc1();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.S2SessionCmd1.serializeBinaryToWriter
    );
  }
  f = message.getSr1();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.S2SessionResp1.serializeBinaryToWriter
    );
  }
};


/**
 * optional Sec2MsgType msg = 1;
 * @return {!proto.Sec2MsgType}
 */
proto.Sec2Payload.prototype.getMsg = function() {
  return /** @type {!proto.Sec2MsgType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Sec2MsgType} value */
proto.Sec2Payload.prototype.setMsg = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional S2SessionCmd0 sc0 = 20;
 * @return {?proto.S2SessionCmd0}
 */
proto.Sec2Payload.prototype.getSc0 = function() {
  return /** @type{?proto.S2SessionCmd0} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionCmd0, 20));
};


/** @param {?proto.S2SessionCmd0|undefined} value */
proto.Sec2Payload.prototype.setSc0 = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.Sec2Payload.oneofGroups_[0], value);
};


proto.Sec2Payload.prototype.clearSc0 = function() {
  this.setSc0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Sec2Payload.prototype.hasSc0 = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional S2SessionResp0 sr0 = 21;
 * @return {?proto.S2SessionResp0}
 */
proto.Sec2Payload.prototype.getSr0 = function() {
  return /** @type{?proto.S2SessionResp0} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionResp0, 21));
};


/** @param {?proto.S2SessionResp0|undefined} value */
proto.Sec2Payload.prototype.setSr0 = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.Sec2Payload.oneofGroups_[0], value);
};


proto.Sec2Payload.prototype.clearSr0 = function() {
  this.setSr0(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Sec2Payload.prototype.hasSr0 = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional S2SessionCmd1 sc1 = 22;
 * @return {?proto.S2SessionCmd1}
 */
proto.Sec2Payload.prototype.getSc1 = function() {
  return /** @type{?proto.S2SessionCmd1} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionCmd1, 22));
};


/** @param {?proto.S2SessionCmd1|undefined} value */
proto.Sec2Payload.prototype.setSc1 = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.Sec2Payload.oneofGroups_[0], value);
};


proto.Sec2Payload.prototype.clearSc1 = function() {
  this.setSc1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Sec2Payload.prototype.hasSc1 = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional S2SessionResp1 sr1 = 23;
 * @return {?proto.S2SessionResp1}
 */
proto.Sec2Payload.prototype.getSr1 = function() {
  return /** @type{?proto.S2SessionResp1} */ (
    jspb.Message.getWrapperField(this, proto.S2SessionResp1, 23));
};


/** @param {?proto.S2SessionResp1|undefined} value */
proto.Sec2Payload.prototype.setSr1 = function(value) {
  jspb.Message.setOneofWrapperField(this, 23, proto.Sec2Payload.oneofGroups_[0], value);
};


proto.Sec2Payload.prototype.clearSr1 = function() {
  this.setSr1(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Sec2Payload.prototype.hasSr1 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * @enum {number}
 */
proto.Sec2MsgType = {
  S2SESSION_COMMAND0: 0,
  S2SESSION_RESPONSE0: 1,
  S2SESSION_COMMAND1: 2,
  S2SESSION_RESPONSE1: 3
};

goog.object.extend(exports, proto);
