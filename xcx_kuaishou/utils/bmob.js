/*!
 * Bmob WeChat applet SDK
 * http://www.bmob.cn
 * Copyright Bmob, Inc.
 * The Bmob WeChat applet SDK is freely distributable under the MIT license.
 * (c) 2016-2050 Magic
 */

(function (root) {
    var _ = require('./underscore.js');
    var Bmob = {};
    Bmob.VERSION = "js3.6.1";
    Bmob._ = _;

    var EmptyConstructor = function () { };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Bmob;
        }
        exports.Bmob = Bmob;
    } else {
        root.Bmob = Bmob;
    }

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var inherits = function (parent, protoProps, staticProps) {
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            /** @ignore */
            child = function () {
                parent.apply(this, arguments);
            };
        }

        // Inherit class (static) properties from parent.
        Bmob._.extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        EmptyConstructor.prototype = parent.prototype;
        child.prototype = new EmptyConstructor();

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) {
            Bmob._.extend(child.prototype, protoProps);
        }

        // Add static properties to the constructor function, if supplied.
        if (staticProps) {
            Bmob._.extend(child, staticProps);
        }

        // Correctly set child's `prototype.constructor`.
        child.prototype.constructor = child;

        // Set a convenience property in case the parent's prototype is
        // needed later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Set the server for Bmob to talk to.
    Bmob.serverURL = "https://api.bmob.cn";
    Bmob.fileURL = "http://file.bmob.cn";
    Bmob.socketURL = "https://api.bmob.cn";


    // Check whether we are running in Node.js.
    if (typeof (process) !== "undefined" && process.versions && process.versions.node) {
        Bmob._isNode = true;
    }

    /**
   * ????????????????????????????????????????????????bmob??????????????????key
   *
   * @param {String} applicationId ?????? Application ID.
   * @param {String} applicationKey ?????? restful api Key.
   * @param {String} masterKey (optional) ?????? bmob Master Key.
   */
    Bmob.initialize = function (applicationId, applicationKey, masterKey) {
        Bmob._initialize(applicationId, applicationKey, masterKey);
    };

    /**
   * Call this method first to set up authentication tokens for Bmob.
   * This method is for Bmob's own private use.
   * @param {String} applicationId Your Bmob Application ID.
   * @param {String} applicationKey Your Bmob Application Key

   */
    Bmob._initialize = function (applicationId, applicationKey, masterKey) {
        Bmob.applicationId = applicationId;
        Bmob.applicationKey = applicationKey;
        Bmob.masterKey = masterKey;
        Bmob._useMasterKey = true;
        Bmob.serverURL = "https://api.bmobcloud.com";
    };

    if (Bmob._isNode) {
        Bmob.initialize = Bmob._initialize;

    }

    /**
   * Returns prefix for localStorage keys used by this instance of Bmob.
   * @param {String} path The relative suffix to append to it.
   *     null or undefined is treated as the empty string.
   * @return {String} The full key name.
   */
    Bmob._getBmobPath = function (path) {
        if (!Bmob.applicationId) {
            throw "You need to call Bmob.initialize before using Bmob.";
        }
        if (!path) {
            path = "";
        }
        if (!Bmob._.isString(path)) {
            throw "Tried to get a localStorage path that wasn't a String.";
        }
        if (path[0] === "/") {
            path = path.substring(1);
        }
        return "Bmob/" + Bmob.applicationId + "/" + path;
    };

    /**
   * Returns prefix for localStorage keys used by this instance of Bmob.
   * @param {String} path The relative suffix to append to it.
   *     null or undefined is treated as the empty string.
   * @return {String} The full key name.
   */
    Bmob._getBmobPath = function (path) {
        if (!Bmob.applicationId) {
            throw "You need to call Bmob.initialize before using Bmob.";
        }
        if (!path) {
            path = "";
        }
        if (!Bmob._.isString(path)) {
            throw "Tried to get a localStorage path that wasn't a String.";
        }
        if (path[0] === "/") {
            path = path.substring(1);
        }
        return "Bmob/" + Bmob.applicationId + "/" + path;
    };

    /**
   * Returns the unique string for this app on this machine.
   * Gets reset when localStorage is cleared.
   */
    Bmob._installationId = null;
    Bmob._getInstallationId = function () {
        // See if it's cached in RAM.
        if (Bmob._installationId) {
            return Bmob._installationId;
        }

        // Try to get it from localStorage.
        var path = Bmob._getBmobPath("installationId");
        // Bmob._installationId = Bmob.localStorage.getItem(path);
        wx.getStorage({
            key: 'key',
            success: function (res) {
                Bmob._installationId = res.data;
                console.log(res.data)
            }
        })

        if (!Bmob._installationId || Bmob._installationId === "") {
            // It wasn't in localStorage, so create a new one.
            var hexOctet = function () {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            };
            Bmob._installationId = (hexOctet() + hexOctet() + "-" + hexOctet() + "-" + hexOctet() + "-" + hexOctet() + "-" + hexOctet() + hexOctet() + hexOctet());

            wx.setStorage({
                key: path,
                data: Bmob._installationId
            })

        }

        return Bmob._installationId;
    };

    Bmob._parseDate = function (iso8601) {
        var regexp = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})" + "T" + "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})" + "(.([0-9]+))?" + "Z$");
        var match = regexp.exec(iso8601);
        if (!match) {
            return null;
        }

        var year = match[1] || 0;
        var month = (match[2] || 1) - 1;
        var day = match[3] || 0;
        var hour = match[4] || 0;
        var minute = match[5] || 0;
        var second = match[6] || 0;
        var milli = match[8] || 0;

        return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
    };

    Bmob._ajax = function (method, url, data, success, error) {
        var options = {
            success: success,
            error: error
        };
        var promise = new Bmob.Promise();

        var dataObject = JSON.parse(data);

        var error;

        if (dataObject.category == "wechatApp") {

            const uploadTask = wx.uploadFile({
                url: url,
                filePath: dataObject.base64,
                name: 'file',
                header: {
                    "X-Bmob-SDK-Type": "wechatApp"
                },
                formData: dataObject,
                success: function (res) {
                    var data = JSON.parse(res.data);
                    promise.resolve(data, res.statusCode, res);

                },
                fail: function (e) {
                    console.log(e);
                    promise.reject(e);

                }
            });

            uploadTask.onProgressUpdate((res) => {
                console.log('????????????', res.progress)
                console.log('???????????????????????????', res.totalBytesSent)
                console.log('????????????????????????????????????', res.totalBytesExpectedToSend)
            })
        } else {

            wx.request({
                method: method,
                url: url,
                data: data,
                header: {
                    'content-type': 'text/plain'
                },
                success: function (res) {
                    if (res.data && res.data.code) {
                        promise.reject(res);
                    } else if (res.statusCode != 200) {

                        promise.reject(res);
                    } else {
                        promise.resolve(res.data, res.statusCode, res);
                    }

                },
                fail: function (e) {
                    promise.reject(e);

                }
            });
        }

        if (error) {
            return Bmob.Promise.error(error);
        }

        return promise._thenRunCallbacks(options);
    }

    // A self-propagating extend function.
    Bmob._extend = function (protoProps, classProps) {
        var child = inherits(this, protoProps, classProps);
        child.extend = this.extend;
        return child;
    };

    /**
   * route is classes, users, login, etc.
   * objectId is null if there is no associated objectId.
   * method is the http method for the REST API.
   * dataObject is the payload as an object, or null if there is none.
   * @ignore
   */
    Bmob._request = function (route, className, objectId, method, dataObject) {
        if (!Bmob.applicationId) {
            throw "You must specify your applicationId using Bmob.initialize";
        }

        if (!Bmob.applicationKey && !Bmob.masterKey) {
            throw "You must specify a key using Bmob.initialize";
        }

        var url = Bmob.serverURL;
        if (url.charAt(url.length - 1) !== "/") {
            url += "/";
        }
        if (route.indexOf("2/") < 0) { //??????????????????2????????????????????????????????????
            url += "1/" + route;
        } else {
            url += route;
        }
        if (className) {
            url += "/" + className;
        }
        if (objectId) {
            url += "/" + objectId;
        }
        if ((route === 'users' || route === 'classes') && method === 'PUT' && dataObject._fetchWhenSave) {
            delete dataObject._fetchWhenSave;
            url += '?new=true';
        }

        dataObject = Bmob._.clone(dataObject || {});
        if (method !== "POST") {
            dataObject._Method = method;
            method = "POST";
        }

        dataObject._ApplicationId = Bmob.applicationId;
        dataObject._RestKey = Bmob.applicationKey;
        if (Bmob._useMasterKey && Bmob.masterKey != undefined) {
            dataObject._MasterKey = Bmob.masterKey;
        }

        dataObject._ClientVersion = Bmob.VERSION;
        dataObject._InstallationId = Bmob._getInstallationId();

        // Pass the session token on every request.
        var currentUser = Bmob.User.current();
        if (currentUser && currentUser._sessionToken) {
            dataObject._SessionToken = currentUser._sessionToken;
        }
        var data = JSON.stringify(dataObject);

        return Bmob._ajax(method, url, data).then(null,
            function (response) {
                // Transform the error into an instance of Bmob.Error by trying to parse
                // the error string as JSON.
                var error;
                try {
                    if (response.data.code) {
                        error = new Bmob.Error(response.data.code, response.data.error);
                    }
                } catch (e) {
                    // If we fail to parse the error text, that's okay.
                }
                error = error || new Bmob.Error(- 1, response.data);
                // By explicitly returning a rejected Promise, this will work with
                // either jQuery or Promises/A semantics.
                return Bmob.Promise.error(error);
            });
    };

    // Helper function to get a value from a Backbone object as a property
    // or as a function.
    Bmob._getValue = function (object, prop) {
        if (!(object && object[prop])) {
            return null;
        }
        return Bmob._.isFunction(object[prop]) ? object[prop]() : object[prop];
    };

    /**
   * Converts a value in a Bmob Object into the appropriate representation.
   * This is the JS equivalent of Java's Bmob.maybeReferenceAndEncode(Object)
   * if seenObjects is falsey. Otherwise any Bmob.Objects not in
   * seenObjects will be fully embedded rather than encoded
   * as a pointer.  This array will be used to prevent going into an infinite
   * loop because we have circular references.  If <seenObjects>
   * is set, then none of the Bmob Objects that are serialized can be dirty.
   */
    Bmob._encode = function (value, seenObjects, disallowObjects) {
        var _ = Bmob._;
        if (value instanceof Bmob.Object) {
            if (disallowObjects) {
                throw "Bmob.Objects not allowed here";
            }
            if (!seenObjects || _.include(seenObjects, value) || !value._hasData) {
                return value._toPointer();
            }
            if (!value.dirty()) {
                seenObjects = seenObjects.concat(value);
                return Bmob._encode(value._toFullJSON(seenObjects), seenObjects, disallowObjects);
            }
            throw "Tried to save an object with a pointer to a new, unsaved object.";
        }
        if (value instanceof Bmob.ACL) {
            return value.toJSON();
        }
        if (_.isDate(value)) {
            return {
                "__type": "Date",
                "iso": value.toJSON()
            };
        }
        if (value instanceof Bmob.GeoPoint) {
            return value.toJSON();
        }
        if (_.isArray(value)) {
            return _.map(value,
                function (x) {
                    return Bmob._encode(x, seenObjects, disallowObjects);
                });
        }
        if (_.isRegExp(value)) {
            return value.source;
        }
        if (value instanceof Bmob.Relation) {
            return value.toJSON();
        }
        if (value instanceof Bmob.Op) {
            return value.toJSON();
        }

        if (value instanceof Bmob.File) {
            if (!value.url()) {
                throw "Tried to save an object containing an unsaved file.";
            }
            return {
                "__type": "File",
                "cdn": value.cdn(),
                "filename": value.name(),
                "url": value.url()
            };
        }
        if (_.isObject(value)) {
            var output = {};
            Bmob._objectEach(value,
                function (v, k) {
                    output[k] = Bmob._encode(v, seenObjects, disallowObjects);
                });
            return output;
        }
        return value;
    };

    /**
   * The inverse function of Bmob._encode.
   * TODO: make decode not mutate value.
   */
    Bmob._decode = function (key, value) {
        var _ = Bmob._;
        if (!_.isObject(value)) {
            return value;
        }
        if (_.isArray(value)) {
            Bmob._arrayEach(value,
                function (v, k) {
                    value[k] = Bmob._decode(k, v);
                });
            return value;
        }
        if (value instanceof Bmob.Object) {
            return value;
        }
        if (value instanceof Bmob.File) {
            return value;
        }
        if (value instanceof Bmob.Op) {
            return value;
        }
        if (value.__op) {
            return Bmob.Op._decode(value);
        }
        if (value.__type === "Pointer") {
            var className = value.className;
            var pointer = Bmob.Object._create(className);
            if (value.createdAt) {
                delete value.__type;
                delete value.className;
                pointer._finishFetch(value, true);
            } else {
                pointer._finishFetch({
                    objectId: value.objectId
                },
                    false);
            }
            return pointer;
        }
        if (value.__type === "Object") {
            // It's an Object included in a query result.
            var className = value.className;
            delete value.__type;
            delete value.className;
            var object = Bmob.Object._create(className);
            object._finishFetch(value, true);
            return object;
        }
        if (value.__type === "Date") {
            return value.iso;
        }
        if (value.__type === "GeoPoint") {
            return new Bmob.GeoPoint({
                latitude: value.latitude,
                longitude: value.longitude
            });
        }
        if (key === "ACL") {
            if (value instanceof Bmob.ACL) {
                return value;
            }
            return new Bmob.ACL(value);
        }
        if (value.__type === "Relation") {
            var relation = new Bmob.Relation(null, key);
            relation.targetClassName = value.className;
            return relation;
        }
        if (value.__type === "File") {
            if (value.url != undefined && value.url != null) {

                if (value.url.indexOf("http") >= 0) {
                    var file = {
                        "_name": value.filename,
                        "_url": value.url,
                        "url": value.url,
                        "_group": value.group
                    };
                } else {
                    var file = {
                        "_name": value.filename,
                        "_url": Bmob.fileURL + "/" + value.url,
                        "url": value.url,
                        "_group": value.group
                    };
                }
            } else { //???cdn???????????????
                var file = {
                    "_name": value.filename,
                    "_url": value.url,
                    "url": value.url,
                    "_group": value.group
                };
            }

            return file;
        }
        Bmob._objectEach(value,
            function (v, k) {
                value[k] = Bmob._decode(k, v);
            });
        return value;
    };

    Bmob._arrayEach = Bmob._.each;

    /**
   * Does a deep traversal of every item in object, calling func on every one.
   * @param {Object} object The object or array to traverse deeply.
   * @param {Function} func The function to call for every item. It will
   *     be passed the item as an argument. If it returns a truthy value, that
   *     value will replace the item in its parent container.
   * @returns {} the result of calling func on the top-level object itself.
   */
    Bmob._traverse = function (object, func, seen) {
        if (object instanceof Bmob.Object) {
            seen = seen || [];
            if (Bmob._.indexOf(seen, object) >= 0) {
                // We've already visited this object in this call.
                return;
            }
            seen.push(object);
            Bmob._traverse(object.attributes, func, seen);
            return func(object);
        }
        if (object instanceof Bmob.Relation || object instanceof Bmob.File) {
            // Nothing needs to be done, but we don't want to recurse into the
            // object's parent infinitely, so we catch this case.
            return func(object);
        }
        if (Bmob._.isArray(object)) {
            Bmob._.each(object,
                function (child, index) {
                    var newChild = Bmob._traverse(child, func, seen);
                    if (newChild) {
                        object[index] = newChild;
                    }
                });
            return func(object);
        }
        if (Bmob._.isObject(object)) {
            Bmob._each(object,
                function (child, key) {
                    var newChild = Bmob._traverse(child, func, seen);
                    if (newChild) {
                        object[key] = newChild;
                    }
                });
            return func(object);
        }
        return func(object);
    };

    /**
   * This is like _.each, except:
   * * it doesn't work for so-called array-like objects,
   * * it does work for dictionaries with a "length" attribute.
   */
    Bmob._objectEach = Bmob._each = function (obj, callback) {
        var _ = Bmob._;
        if (_.isObject(obj)) {
            _.each(_.keys(obj),
                function (key) {
                    callback(obj[key], key);
                });
        } else {
            _.each(obj, callback);
        }
    };

    // Helper function to check null or undefined.
    Bmob._isNullOrUndefined = function (x) {
        return Bmob._.isNull(x) || Bmob._.isUndefined(x);
    };

    /**
   * Constructs a new Bmob.Error object with the given code and message.
   * @param {Number} code An error code constant from <code>Bmob.Error</code>.
   * @param {String} message A detailed description of the error.
   *
   * <p>Class used for all objects passed to error callbacks.</p>
   */
    Bmob.Error = function (code, message) {
        this.code = code;
        this.message = message;
    };

    _.extend(Bmob.Error,
        /** @lends Bmob.Error */
        {

            /**
         * Error code indicating some error other than those enumerated here.
         * @constant
         */
            OTHER_CAUSE: -1,

            /**
         * Error code indicating the specified object doesn't exist.
         * @constant
         */
            OBJECT_NOT_FOUND: 101,

            /**
         * Error code indicating you tried to query with a datatype that doesn't
         * support it, like exact matching an array or object.
         * @constant
         */
            INVALID_QUERY: 102,

            /**
         * Error code indicating a missing or invalid classname. Classnames are
         * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
         * only valid characters.
         * @constant
         */
            INVALID_CLASS_NAME: 103,

            /**
         * Error code relation className  not exists
         * @constant
         */
            RELATIONDOCNOTEXISTS: 104,

            /**
         * Error code invalid field name
         * @constant
         */
            INVALID_KEY_NAME: 105,

            /**
         * Error code indicating a malformed pointer. You should not see this unless
         * you have been mucking about changing internal Bmob code.
         * @constant
         */
            INVALID_POINTER: 106,

            /**
         * Error code indicating that badly formed JSON was received upstream. This
         * either indicates you have done something unusual with modifying how
         * things encode to JSON, or the network is failing badly.
         * @constant
         */
            INVALID_JSON: 107,

            /**
         * Error code username and password required
         * @constant
         */
            USERNAME_PASSWORD_REQUIRED: 108,

            /**
         * Error code indicating that a field was set to an inconsistent type.
         * @constant
         */
            INCORRECT_TYPE: 111,

            /**
         * Error code requests must be an array
         * @constant
         */
            REQUEST_MUST_ARRAY: 112,

            /**
         * Error code requests must be LIKE OBJECT
         * @constant
         */
            REQUEST_MUST_OBJECT: 113,

            /**
         * Error code indicating that the object is too large.
         * @constant
         */
            OBJECT_TOO_LARGE: 114,

            /**
         * Error code geo error
         * @constant
         */
            GEO_ERROR: 117,

            /**
         * Error code Email verify should be opened in your app setup page of bmob
         * @constant
         */
            EMAIL_VERIFY_MUST_OPEN: 120,

            /**
         * Error code indicating the result was not found in the cache.
         * @constant
         */
            CACHE_MISS: 120,

            /**
         * Error code Invalid device token
         * @constant
         */
            INVALID_DEVICE_TOKEN: 131,

            /**
         * Error code Invalid installation ID
         * @constant
         */
            INVALID_INSTALLID: 132,

            /**
         * Error code Invalid device type
         * @constant
         */
            INVALID_DEVICE_TYPE: 133,

            /**
         * Error code device token EXIST
         * @constant
         */
            DEVICE_TOKEN_EXIST: 134,

            /**
         * Error code indicating that the email address was invalid.
         * @constant
         */
            INSTALLID_EXIST: 135,

            /**
         * Error code DEVICE_TOKEN_NOT_FOR_ANDROID
         * @constant
         */
            DEVICE_TOKEN_NOT_FOR_ANDROID: 136,

            /**
         * Error code indicating a missing content length.
         * @constant
         */
            INVALID_INSTALL_OPERATE: 137,

            /**
         * Error code READ_ONLY
         * @constant
         */
            READ_ONLY: 138,

            /**
         * Error code Role names must be restricted to alphanumeric characters, dashes(-), underscores(_), and spaces
         * @constant
         */
            INVALID_ROLE_NAME: 139,

            /**
         * Error code MISS_PUSH_DATA
         * @constant
         */
            MISS_PUSH_DATA: 141,

            /**
         * Error code INVALID_PUSH_TIME
         * @constant
         */
            INVALID_PUSH_TIME: 142,

            /**
         * Error code INVALID_PUSH_EXPIRE
         * @constant
         */
            INVALID_PUSH_EXPIRE: 143,

            /**
         * Error code PUSHTIME cannot before now
         * @constant
         */
            PUSH_TIME_MUST_BEFORE_NOW: 144,

            /**
         * Error code file size error
         * @constant
         */
            FILE_SIZE_ERROR: 145,

            /**
         * Error code file name error
         * @constant
         */
            FILE_NAME_ERROR: 146,
            FILE_NAME_ERROR: 147,

            /**
         * Error code file len error
         * @constant
         */
            FILE_LEN_ERROR: 148,

            /**
         * Error code file delete error
         * @constant
         */
            FILE_UPLOAD_ERROR: 150,

            /**
         * Error code indicating an unsaved file.
         * @constant
         */
            FILE_DELETE_ERROR: 151,

            /**
         * Error code image error
         */
            IMAGE_ERROR: 160,

            /**
         * Error code image mode error
         * @constant
         */
            IMAGE_MODE_ERROR: 161,

            /**
         * Error code image width error
         * @constant
         */
            IMAGE_WIDTH_ERROR: 162,

            /**
         * Error code image height error
         * @constant
         */
            IMAGE_HEIGHT_ERROR: 163,

            /**
         * Error code image longEdge error
         * @constant
         */
            IMAGE_LONGEDGE_ERROR: 164,

            /**
         * Error code image shortgEdge error
         * @constant
         */
            IMAGE_SHORTEDGE_ERROR: 165,

            /**
         * Error code missing
         * @constant
         */
            USER_MISSING: 201,

            /**
         * Error code username '%s' already taken
         * not be altered.
         * @constant
         */
            USER_NAME_TOKEN: 202,

            /**
         * Error code EMAIL already taken
         * @constant
         */
            EMAIL_EXIST: 203,

            /**
         * Error code you must provide an email
         * @constant
         */
            NO_EMAIL: 204,

            /**
         * Error code no user found with email
         * @constant
         */
            NOT_FOUND_EMAIL: 205,

            /**
         * Error code sessionToken Erro
         * @constant
         */
            SESSIONTOKEN_ERROR: 206,

            /**
         * Error code valid error
         * @constant
         */
            VALID_ERROR: 301
        });

    /**
   *
   * <p>Bmob.Events ??? fork of Backbone's Events module</p>
   *
   * <p>A module that can be mixed in to any object in order to provide
   * it with custom events. You may bind callback functions to an event
   * with `on`, or remove these functions with `off`.
   * Triggering an event fires all callbacks in the order that `on` was
   * called.
   *
   * <pre>
   *     var object = {};
   *     _.extend(object, Bmob.Events);
   *     object.on('expand', function(){ alert('expanded'); });
   *     object.trigger('expand');</pre></p>
   *
   * <p>For more information, see the
   * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
   * documentation</a>.</p>
   */
    Bmob.Events = {
        /**
     * Bind one or more space separated events, `events`, to a `callback`
     * function. Passing `"all"` will bind the callback to all events fired.
     */
        on: function (events, callback, context) {

            var calls, event, node, tail, list;
            if (!callback) {
                return this;
            }
            events = events.split(eventSplitter);
            calls = this._callbacks || (this._callbacks = {});

            // Create an immutable callback list, allowing traversal during
            // modification.  The tail is an empty object that will always be used
            // as the next node.
            event = events.shift();
            while (event) {
                list = calls[event];
                node = list ? list.tail : {};
                node.next = tail = {};
                node.context = context;
                node.callback = callback;
                calls[event] = {
                    tail: tail,
                    next: list ? list.next : node
                };
                event = events.shift();
            }

            return this;
        },

        /**
     * Remove one or many callbacks. If `context` is null, removes all callbacks
     * with that function. If `callback` is null, removes all callbacks for the
     * event. If `events` is null, removes all bound callbacks for all events.
     */
        off: function (events, callback, context) {
            var event, calls, node, tail, cb, ctx;

            // No events, or removing *all* events.
            if (!(calls = this._callbacks)) {
                return;
            }
            if (!(events || callback || context)) {
                delete this._callbacks;
                return this;
            }

            // Loop through the listed events and contexts, splicing them out of the
            // linked list of callbacks if appropriate.
            events = events ? events.split(eventSplitter) : _.keys(calls);
            event = events.shift();
            while (event) {
                node = calls[event];
                delete calls[event];
                if (!node || !(callback || context)) {
                    continue;
                }
                // Create a new list, omitting the indicated callbacks.
                tail = node.tail;
                node = node.next;
                while (node !== tail) {
                    cb = node.callback;
                    ctx = node.context;
                    if ((callback && cb !== callback) || (context && ctx !== context)) {
                        this.on(event, cb, ctx);
                    }
                    node = node.next;
                }
                event = events.shift();
            }

            return this;
        },

        /**
     * Trigger one or many events, firing all bound callbacks. Callbacks are
     * passed the same arguments as `trigger` is, apart from the event name
     * (unless you're listening on `"all"`, which will cause your callback to
     * receive the true name of the event as the first argument).
     */
        trigger: function (events) {
            var event, node, calls, tail, args, all, rest;
            if (!(calls = this._callbacks)) {
                return this;
            }
            all = calls.all;
            events = events.split(eventSplitter);
            rest = slice.call(arguments, 1);

            // For each event, walk through the linked list of callbacks twice,
            // first to trigger the event, then to trigger any `"all"` callbacks.
            event = events.shift();
            while (event) {
                node = calls[event];
                if (node) {
                    tail = node.tail;
                    while ((node = node.next) !== tail) {
                        node.callback.apply(node.context || this, rest);
                    }
                }
                node = all;
                if (node) {
                    tail = node.tail;
                    args = [event].concat(rest);
                    while ((node = node.next) !== tail) {
                        node.callback.apply(node.context || this, args);
                    }
                }
                event = events.shift();
            }

            return this;
        }
    };

    /**
   * @function
   */
    Bmob.Events.bind = Bmob.Events.on;

    /**
   * @function
   */
    Bmob.Events.unbind = Bmob.Events.off;

    /**
   * ?????????????????????????????????????????????GeoPoint<br>
   *   <pre>
   *   new GeoPoint(otherGeoPoint)
   *   new GeoPoint(30, 30)
   *   new GeoPoint([30, 30])
   *   new GeoPoint({latitude: 30, longitude: 30})
   *   new GeoPoint()  // defaults to (0, 0)
   *   </pre>
   * @class
   *
   * <p>???BmobObject??????????????????????????????geo???????????????</p>
   * <p>??????????????????????????????????????????GeoPoint.</p>
   *
   * <p>Example:<pre>
   *   var point = new Bmob.GeoPoint(30.0, -20.0);
   *   var object = new Bmob.Object("PlaceObject");
   *   object.set("location", point);
   *   object.save();</pre></p>
   */
    Bmob.GeoPoint = function (arg1, arg2) {
        if (_.isArray(arg1)) {
            Bmob.GeoPoint._validate(arg1[0], arg1[1]);
            this.latitude = arg1[0];
            this.longitude = arg1[1];
        } else if (_.isObject(arg1)) {
            Bmob.GeoPoint._validate(arg1.latitude, arg1.longitude);
            this.latitude = arg1.latitude;
            this.longitude = arg1.longitude;
        } else if (_.isNumber(arg1) && _.isNumber(arg2)) {
            Bmob.GeoPoint._validate(arg1, arg2);
            this.latitude = arg1;
            this.longitude = arg2;
        } else {
            this.latitude = 0;
            this.longitude = 0;
        }

        // Add properties so that anyone using Webkit or Mozilla will get an error
        // if they try to set values that are out of bounds.
        var self = this;
        if (this.__defineGetter__ && this.__defineSetter__) {
            // Use _latitude and _longitude to actually store the values, and add
            // getters and setters for latitude and longitude.
            this._latitude = this.latitude;
            this._longitude = this.longitude;
            this.__defineGetter__("latitude",
                function () {
                    return self._latitude;
                });
            this.__defineGetter__("longitude",
                function () {
                    return self._longitude;
                });
            this.__defineSetter__("latitude",
                function (val) {
                    Bmob.GeoPoint._validate(val, self.longitude);
                    self._latitude = val;
                });
            this.__defineSetter__("longitude",
                function (val) {
                    Bmob.GeoPoint._validate(self.latitude, val);
                    self._longitude = val;
                });
        }
    };

    /**
   * @lends Bmob.GeoPoint.prototype
   * @property {float} latitude North-south portion of the coordinate, in range
   *   [-90, 90].  Throws an exception if set out of range in a modern browser.
   * @property {float} longitude East-west portion of the coordinate, in range
   *   [-180, 180].  Throws if set out of range in a modern browser.
   */

    /**
   * Throws an exception if the given lat-long is out of bounds.
   */
    Bmob.GeoPoint._validate = function (latitude, longitude) {
        if (latitude < -90.0) {
            throw "Bmob.GeoPoint latitude " + latitude + " < -90.0.";
        }
        if (latitude > 90.0) {
            throw "Bmob.GeoPoint latitude " + latitude + " > 90.0.";
        }
        if (longitude < -180.0) {
            throw "Bmob.GeoPoint longitude " + longitude + " < -180.0.";
        }
        if (longitude > 180.0) {
            throw "Bmob.GeoPoint longitude " + longitude + " > 180.0.";
        }
    };

    /**
   * ?????????????????????????????????GeoPoint?????????
   * ???????????????options.success?????????options.error???
   * @param {Object} options ??????????????????????????????
   */
    Bmob.GeoPoint.current = function (options) {
        var promise = new Bmob.Promise();
        navigator.geolocation.getCurrentPosition(function (location) {
            promise.resolve(new Bmob.GeoPoint({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            }));

        },
            function (error) {
                promise.reject(error);
            });

        return promise._thenRunCallbacks(options);
    };

    Bmob.GeoPoint.prototype = {
        /**
     * ??????geopoint???json
     * @return {Object}
     */
        toJSON: function () {
            Bmob.GeoPoint._validate(this.latitude, this.longitude);
            return {
                "__type": "GeoPoint",
                latitude: this.latitude,
                longitude: this.longitude
            };
        },

        /**
     * ????????????geopoint???????????????
     * @param {Bmob.GeoPoint} point ?????????Bmob.GeoPoint.
     * @return {Number}
     */
        radiansTo: function (point) {
            var d2r = Math.PI / 180.0;
            var lat1rad = this.latitude * d2r;
            var long1rad = this.longitude * d2r;
            var lat2rad = point.latitude * d2r;
            var long2rad = point.longitude * d2r;
            var deltaLat = lat1rad - lat2rad;
            var deltaLong = long1rad - long2rad;
            var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
            var sinDeltaLongDiv2 = Math.sin(deltaLong / 2);
            // Square of half the straight line chord distance between both points.
            var a = ((sinDeltaLatDiv2 * sinDeltaLatDiv2) + (Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2));
            a = Math.min(1.0, a);
            return 2 * Math.asin(Math.sqrt(a));
        },

        /**
     * ????????????geopoint??????????????????
     * @param {Bmob.GeoPoint} point ?????????Bmob.GeoPoint.
     * @return {Number}
     */
        kilometersTo: function (point) {
            return this.radiansTo(point) * 6371.0;
        },

        /**
     * ????????????geopoint???????????????
     * @param {Bmob.GeoPoint} point ?????????Bmob.GeoPoint.
     * @return {Number}
     */
        milesTo: function (point) {
            return this.radiansTo(point) * 3958.8;
        }
    };

    var PUBLIC_KEY = "*";

    /**
   * ??????ACL
   * ???????????????????????????????????????????????????
   * ????????????????????????Bmob.User?????????usr?????????????????????
   * ????????????????????????json???????????????????????????acl?????????
   *
   * @see Bmob.Object#setACL
   * @class
   *
   * <p>????????????????????????????????????
   * <code>Bmob.Object</code>????????????????????????????????????
   * </p>
   */
    Bmob.ACL = function (arg1) {
        var self = this;
        self.permissionsById = {};
        if (_.isObject(arg1)) {
            if (arg1 instanceof Bmob.User) {
                self.setReadAccess(arg1, true);
                self.setWriteAccess(arg1, true);
            } else {
                if (_.isFunction(arg1)) {
                    throw "Bmob.ACL() called with a function.  Did you forget ()?";
                }
                Bmob._objectEach(arg1,
                    function (accessList, userId) {
                        if (!_.isString(userId)) {
                            throw "Tried to create an ACL with an invalid userId.";
                        }
                        self.permissionsById[userId] = {};
                        Bmob._objectEach(accessList,
                            function (allowed, permission) {
                                if (permission !== "read" && permission !== "write") {
                                    throw "Tried to create an ACL with an invalid permission type.";
                                }
                                if (!_.isBoolean(allowed)) {
                                    throw "Tried to create an ACL with an invalid permission value.";
                                }
                                self.permissionsById[userId][permission] = allowed;
                            });
                    });
            }
        }
    };

    /**
   * ??????acl???json??????
   * @return {Object}
   */
    Bmob.ACL.prototype.toJSON = function () {
        return _.clone(this.permissionsById);
    };

    Bmob.ACL.prototype._setAccess = function (accessType, userId, allowed) {
        if (userId instanceof Bmob.User) {
            userId = userId.id;
        } else if (userId instanceof Bmob.Role) {
            userId = "role:" + userId.getName();
        }
        if (!_.isString(userId)) {
            throw "userId must be a string.";
        }
        if (!_.isBoolean(allowed)) {
            throw "allowed must be either true or false.";
        }
        var permissions = this.permissionsById[userId];
        if (!permissions) {
            if (!allowed) {
                // The user already doesn't have this permission, so no action needed.
                return;
            } else {
                permissions = {};
                this.permissionsById[userId] = permissions;
            }
        }

        if (allowed) {
            this.permissionsById[userId][accessType] = true;
        } else {
            delete permissions[accessType];
            if (_.isEmpty(permissions)) {
                delete permissions[userId];
            }
        }
    };

    Bmob.ACL.prototype._getAccess = function (accessType, userId) {
        if (userId instanceof Bmob.User) {
            userId = userId.id;
        } else if (userId instanceof Bmob.Role) {
            userId = "role:" + userId.getName();
        }
        var permissions = this.permissionsById[userId];
        if (!permissions) {
            return false;
        }
        return permissions[accessType] ? true : false;
    };

    /**
   * ??????????????????????????????????????????
   * @param ??????id?????????id??????Bmob.Role
   * @param {Boolean} ???????????????????????????
   */
    Bmob.ACL.prototype.setReadAccess = function (userId, allowed) {
        this._setAccess("read", userId, allowed);
    };

    /**
   * ??????????????????????????????
   * ???????????????false??????????????????????????????????????????getPublicReadAccess??????ture??????????????????????????????????????????
   * @param userId ???id?????????id, ??????Bmob.Role.
   * @return {Boolean}
   */
    Bmob.ACL.prototype.getReadAccess = function (userId) {
        return this._getAccess("read", userId);
    };

    /**
   * ???????????????????????????????????????
   * @param userId ??????id?????????id??????Bmob.Role
   * @param {Boolean} ???????????????????????????
   */
    Bmob.ACL.prototype.setWriteAccess = function (userId, allowed) {
        this._setAccess("write", userId, allowed);
    };

    /**
   * ??????????????????????????????
   * ???????????????false??????????????????????????????????????????getPublicReadAccess??????ture??????????????????????????????????????????
   * @param userId ??????id?????????id??????Bmob.Role
   * @return {Boolean}
   */
    Bmob.ACL.prototype.getWriteAccess = function (userId) {
        return this._getAccess("write", userId);
    };

    /**
   * ????????????????????????????????????
   * @param {Boolean} allowed
   */
    Bmob.ACL.prototype.setPublicReadAccess = function (allowed) {
        this.setReadAccess(PUBLIC_KEY, allowed);
    };

    /**
   * ????????????????????????????????????
   * @return {Boolean}
   */
    Bmob.ACL.prototype.getPublicReadAccess = function () {
        return this.getReadAccess(PUBLIC_KEY);
    };

    /**
   * ????????????????????????????????????
   * @param {Boolean} allowed
   */
    Bmob.ACL.prototype.setPublicWriteAccess = function (allowed) {
        this.setWriteAccess(PUBLIC_KEY, allowed);
    };

    /**
   * ????????????????????????????????????
   * @return {Boolean}
   */
    Bmob.ACL.prototype.getPublicWriteAccess = function () {
        return this.getWriteAccess(PUBLIC_KEY);
    };

    /**
   * ???????????????????????????????????????????????????????????????false??????????????????????????????????????????????????????????????????????????????
   * @param role ????????????????????? Bmob.Role???
   * @return {Boolean} ?????????????????????true???
   * @throws {String} role??????Bmob.Role???????????????
   */
    Bmob.ACL.prototype.getRoleReadAccess = function (role) {
        if (role instanceof Bmob.Role) {
            // Normalize to the String name
            role = role.getName();
        }
        if (_.isString(role)) {
            return this.getReadAccess("role:" + role);
        }
        throw "role must be a Bmob.Role or a String";
    };

    /**
   * ???????????????????????????????????????????????????????????????false??????????????????????????????????????????????????????????????????????????????
   * @param role ????????????????????? Bmob.Role???
   * @return {Boolean} ?????????????????????true???
   * @throws {String} role??????Bmob.Role???????????????
   */
    Bmob.ACL.prototype.getRoleWriteAccess = function (role) {
        if (role instanceof Bmob.Role) {
            // Normalize to the String name
            role = role.getName();
        }
        if (_.isString(role)) {
            return this.getWriteAccess("role:" + role);
        }
        throw "role must be a Bmob.Role or a String";
    };

    /**
   * ??????????????????????????????????????????
   * @param role ????????????????????? Bmob.Role???
   * @param {Boolean} ???????????????????????????
   * @throws {String}  role??????Bmob.Role???????????????
   */
    Bmob.ACL.prototype.setRoleReadAccess = function (role, allowed) {
        if (role instanceof Bmob.Role) {
            // Normalize to the String name
            role = role.getName();
        }
        if (_.isString(role)) {
            this.setReadAccess("role:" + role, allowed);
            return;
        }
        throw "role must be a Bmob.Role or a String";
    };

    /**
   * ??????????????????????????????????????????
   * @param role ????????????????????? Bmob.Role???
   * @param {Boolean} ???????????????????????????
   * @throws {String}  role??????Bmob.Role???????????????
   */
    Bmob.ACL.prototype.setRoleWriteAccess = function (role, allowed) {
        if (role instanceof Bmob.Role) {
            // Normalize to the String name
            role = role.getName();
        }
        if (_.isString(role)) {
            this.setWriteAccess("role:" + role, allowed);
            return;
        }
        throw "role must be a Bmob.Role or a String";
    };

    /**
   * A Bmob.Op is an atomic operation that can be applied to a field in a
   * Bmob.Object. For example, calling <code>object.set("foo", "bar")</code>
   * is an example of a Bmob.Op.Set. Calling <code>object.unset("foo")</code>
   * is a Bmob.Op.Unset. These operations are stored in a Bmob.Object and
   * sent to the server as part of <code>object.save()</code> operations.
   * Instances of Bmob.Op should be immutable.
   *
   * You should not create subclasses of Bmob.Op or instantiate Bmob.Op
   * directly.
   */
    Bmob.Op = function () {
        this._initialize.apply(this, arguments);
    };

    Bmob.Op.prototype = {
        _initialize: function () { }
    };

    _.extend(Bmob.Op, {
        /**
     * To create a new Op, call Bmob.Op._extend();
     */
        _extend: Bmob._extend,

        // A map of __op string to decoder function.
        _opDecoderMap: {},

        /**
     * Registers a function to convert a json object with an __op field into an
     * instance of a subclass of Bmob.Op.
     */
        _registerDecoder: function (opName, decoder) {
            Bmob.Op._opDecoderMap[opName] = decoder;
        },

        /**
     * Converts a json object into an instance of a subclass of Bmob.Op.
     */
        _decode: function (json) {
            var decoder = Bmob.Op._opDecoderMap[json.__op];
            if (decoder) {
                return decoder(json);
            } else {
                return undefined;
            }
        }
    });

    /*
   * Add a handler for Batch ops.
   */
    Bmob.Op._registerDecoder("Batch",
        function (json) {
            var op = null;
            Bmob._arrayEach(json.ops,
                function (nextOp) {
                    nextOp = Bmob.Op._decode(nextOp);
                    op = nextOp._mergeWithPrevious(op);
                });
            return op;
        });

    /**
   * @class
   * set?????????????????????????????????Bmob.Object.set??????????????????????????????????????????
   */
    Bmob.Op.Set = Bmob.Op._extend(
        /** @lends Bmob.Op.Set.prototype */
        {
            _initialize: function (value) {
                this._value = value;
            },

            /**
         * ????????????????????????
         */
            value: function () {
                return this._value;
            },

            /**
         * ???????????????bmob???json
         * @return {Object}
         */
            toJSON: function () {
                return Bmob._encode(this.value());
            },

            _mergeWithPrevious: function (previous) {
                return this;
            },

            _estimate: function (oldValue) {
                return this.value();
            }
        });

    /**
   * A sentinel value that is returned by Bmob.Op.Unset._estimate to
   * indicate the field should be deleted. Basically, if you find _UNSET as a
   * value in your object, you should remove that key.
   */
    Bmob.Op._UNSET = {};

    /**
   * @class
   * Unset ?????????????????????????????????????????????
   */
    Bmob.Op.Unset = Bmob.Op._extend(
        /** @lends Bmob.Op.Unset.prototype */
        {
            /**
         * ???????????????bmob???json
         * @return {Object}
         */
            toJSON: function () {
                return {
                    __op: "Delete"
                };
            },

            _mergeWithPrevious: function (previous) {
                return this;
            },

            _estimate: function (oldValue) {
                return Bmob.Op._UNSET;
            }
        });

    Bmob.Op._registerDecoder("Delete",
        function (json) {
            return new Bmob.Op.Unset();
        });

    /**
   * @class
   * ??????????????????????????????
   */
    Bmob.Op.Increment = Bmob.Op._extend(
        /** @lends Bmob.Op.Increment.prototype */
        {

            _initialize: function (amount) {
                this._amount = amount;
            },

            /**
         * ????????????????????????
         * @return {Number} ???????????????????????????
         */
            amount: function () {
                return this._amount;
            },

            /**
         * ???????????????bmob???json
         * @return {Object}
         */
            toJSON: function () {
                return {
                    __op: "Increment",
                    amount: this._amount
                };
            },

            _mergeWithPrevious: function (previous) {
                if (!previous) {
                    return this;
                } else if (previous instanceof Bmob.Op.Unset) {
                    return new Bmob.Op.Set(this.amount());
                } else if (previous instanceof Bmob.Op.Set) {
                    return new Bmob.Op.Set(previous.value() + this.amount());
                } else if (previous instanceof Bmob.Op.Increment) {
                    return new Bmob.Op.Increment(this.amount() + previous.amount());
                } else {
                    throw "Op is invalid after previous op.";
                }
            },

            _estimate: function (oldValue) {
                if (!oldValue) {
                    return this.amount();
                }
                return oldValue + this.amount();
            }
        });

    Bmob.Op._registerDecoder("Increment",
        function (json) {
            return new Bmob.Op.Increment(json.amount);
        });

    /**
   * @class
   * ????????????????????????????????????????????????????????????
   */
    Bmob.Op.Add = Bmob.Op._extend(
        /** @lends Bmob.Op.Add.prototype */
        {
            _initialize: function (objects) {
                this._objects = objects;
            },

            /**
         * ?????????????????????????????????
         * @return {Array} ???????????????????????????
         */
            objects: function () {
                return this._objects;
            },

            /**
         * ???????????????bmob???json
         * @return {Object}
         */
            toJSON: function () {
                return {
                    __op: "Add",
                    objects: Bmob._encode(this.objects())
                };
            },

            _mergeWithPrevious: function (previous) {
                if (!previous) {
                    return this;
                } else if (previous instanceof Bmob.Op.Unset) {
                    return new Bmob.Op.Set(this.objects());
                } else if (previous instanceof Bmob.Op.Set) {
                    return new Bmob.Op.Set(this._estimate(previous.value()));
                } else if (previous instanceof Bmob.Op.Add) {
                    return new Bmob.Op.Add(previous.objects().concat(this.objects()));
                } else {
                    throw "Op is invalid after previous op.";
                }
            },

            _estimate: function (oldValue) {
                if (!oldValue) {
                    return _.clone(this.objects());
                } else {
                    return oldValue.concat(this.objects());
                }
            }
        });

    Bmob.Op._registerDecoder("Add",
        function (json) {
            return new Bmob.Op.Add(Bmob._decode(undefined, json.objects));
        });

    /**
   * @class
   * ?????????????????????????????????????????????????????????????????????????????????
   */
    Bmob.Op.AddUnique = Bmob.Op._extend(
        /** @lends Bmob.Op.AddUnique.prototype */
        {

            _initialize: function (objects) {
                this._objects = _.uniq(objects);
            },

            /**
         * ?????????????????????????????????
         * @return {Array} ???????????????????????????
         */
            objects: function () {
                return this._objects;
            },

            /**
         * ???????????????bmob???json
         * @return {Object}
         */
            toJSON: function () {
                return {
                    __op: "AddUnique",
                    objects: Bmob._encode(this.objects())
                };
            },

            _mergeWithPrevious: function (previous) {
                if (!previous) {
                    return this;
                } else if (previous instanceof Bmob.Op.Unset) {
                    return new Bmob.Op.Set(this.objects());
                } else if (previous instanceof Bmob.Op.Set) {
                    return new Bmob.Op.Set(this._estimate(previous.value()));
                } else if (previous instanceof Bmob.Op.AddUnique) {
                    return new Bmob.Op.AddUnique(this._estimate(previous.objects()));
                } else {
                    throw "Op is invalid after previous op.";
                }
            },

            _estimate: function (oldValue) {
                if (!oldValue) {
                    return _.clone(this.objects());
                } else {
                    // We can't just take the _.uniq(_.union(...)) of oldValue and
                    // this.objects, because the uniqueness may not apply to oldValue
                    // (especially if the oldValue was set via .set())
                    var newValue = _.clone(oldValue);
                    Bmob._arrayEach(this.objects(),
                        function (obj) {
                            if (obj instanceof Bmob.Object && obj.id) {
                                var matchingObj = _.find(newValue,
                                    function (anObj) {
                                        return (anObj instanceof Bmob.Object) && (anObj.id === obj.id);
                                    });
                                if (!matchingObj) {
                                    newValue.push(obj);
                                } else {
                                    var index = _.indexOf(newValue, matchingObj);
                                    newValue[index] = obj;
                                }
                            } else if (!_.contains(newValue, obj)) {
                                newValue.push(obj);
                            }
                        });
                    return newValue;
                }
            }
        });

    Bmob.Op._registerDecoder("AddUnique",
        function (json) {
            return new Bmob.Op.AddUnique(Bmob._decode(undefined, json.objects));
        });

    /**
   * @class
   * ?????????????????????????????????
   */
    Bmob.Op.Remove = Bmob.Op._extend(
        /** @lends Bmob.Op.Remove.prototype */
        {
            _initialize: function (objects) {
                this._objects = _.uniq(objects);
            },

            /**
         * ??????????????????????????????
         * @return {Array} ????????????????????????
         */
            objects: function () {
                return this._objects;
            },

            /**
         * ???????????????bmob???json
         * @return {Object}
         */
            toJSON: function () {
                return {
                    __op: "Remove",
                    objects: Bmob._encode(this.objects())
                };
            },

            _mergeWithPrevious: function (previous) {
                if (!previous) {
                    return this;
                } else if (previous instanceof Bmob.Op.Unset) {
                    return previous;
                } else if (previous instanceof Bmob.Op.Set) {
                    return new Bmob.Op.Set(this._estimate(previous.value()));
                } else if (previous instanceof Bmob.Op.Remove) {
                    return new Bmob.Op.Remove(_.union(previous.objects(), this.objects()));
                } else {
                    throw "Op is invalid after previous op.";
                }
            },

            _estimate: function (oldValue) {
                if (!oldValue) {
                    return [];
                } else {
                    var newValue = _.difference(oldValue, this.objects());
                    // If there are saved Bmob Objects being removed, also remove them.
                    Bmob._arrayEach(this.objects(),
                        function (obj) {
                            if (obj instanceof Bmob.Object && obj.id) {
                                newValue = _.reject(newValue,
                                    function (other) {
                                        return (other instanceof Bmob.Object) && (other.id === obj.id);
                                    });
                            }
                        });
                    return newValue;
                }
            }
        });

    Bmob.Op._registerDecoder("Remove",
        function (json) {
            return new Bmob.Op.Remove(Bmob._decode(undefined, json.objects));
        });

    /**
   * @class
   * ?????????????????????????????????Bmob.Relation?????????????????????????????????????????????????????????
   */
    Bmob.Op.Relation = Bmob.Op._extend(
        /** @lends Bmob.Op.Relation.prototype */
        {

            _initialize: function (adds, removes) {
                this._targetClassName = null;

                var self = this;

                var pointerToId = function (object) {
                    if (object instanceof Bmob.Object) {
                        if (!object.id) {
                            throw "You can't add an unsaved Bmob.Object to a relation.";
                        }
                        if (!self._targetClassName) {
                            self._targetClassName = object.className;
                        }
                        if (self._targetClassName !== object.className) {
                            throw "Tried to create a Bmob.Relation with 2 different types: " + self._targetClassName + " and " + object.className + ".";
                        }
                        return object.id;
                    }
                    return object;
                };

                this.relationsToAdd = _.uniq(_.map(adds, pointerToId));
                this.relationsToRemove = _.uniq(_.map(removes, pointerToId));
            },

            /**
         * ???????????????????????????Bmob.Object???????????????
         * @return {Array}
         */
            added: function () {
                var self = this;
                return _.map(this.relationsToAdd,
                    function (objectId) {
                        var object = Bmob.Object._create(self._targetClassName);
                        object.id = objectId;
                        return object;
                    });
            },

            /**
         * ???????????????Bmob.Object???????????????
         * @return {Array}
         */
            removed: function () {
                var self = this;
                return _.map(this.relationsToRemove,
                    function (objectId) {
                        var object = Bmob.Object._create(self._targetClassName);
                        object.id = objectId;
                        return object;
                    });
            },

            /**
         * ???????????????bmob???json
         * @return {Object}
         */
            toJSON: function () {
                var adds = null;
                var removes = null;
                var self = this;
                var idToPointer = function (id) {
                    return {
                        __type: 'Pointer',
                        className: self._targetClassName,
                        objectId: id
                    };
                };
                var pointers = null;
                if (this.relationsToAdd.length > 0) {
                    pointers = _.map(this.relationsToAdd, idToPointer);
                    adds = {
                        "__op": "AddRelation",
                        "objects": pointers
                    };
                }

                if (this.relationsToRemove.length > 0) {
                    pointers = _.map(this.relationsToRemove, idToPointer);
                    removes = {
                        "__op": "RemoveRelation",
                        "objects": pointers
                    };
                }

                if (adds && removes) {
                    return {
                        "__op": "Batch",
                        "ops": [adds, removes]
                    };
                }

                return adds || removes || {};
            },

            _mergeWithPrevious: function (previous) {
                if (!previous) {
                    return this;
                } else if (previous instanceof Bmob.Op.Unset) {
                    throw "You can't modify a relation after deleting it.";
                } else if (previous instanceof Bmob.Op.Relation) {
                    if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
                        throw "Related object must be of class " + previous._targetClassName + ", but " + this._targetClassName + " was passed in.";
                    }
                    var newAdd = _.union(_.difference(previous.relationsToAdd, this.relationsToRemove), this.relationsToAdd);
                    var newRemove = _.union(_.difference(previous.relationsToRemove, this.relationsToAdd), this.relationsToRemove);

                    var newRelation = new Bmob.Op.Relation(newAdd, newRemove);
                    newRelation._targetClassName = this._targetClassName;
                    return newRelation;
                } else {
                    throw "Op is invalid after previous op.";
                }
            },

            _estimate: function (oldValue, object, key) {
                if (!oldValue) {
                    var relation = new Bmob.Relation(object, key);
                    relation.targetClassName = this._targetClassName;
                } else if (oldValue instanceof Bmob.Relation) {
                    if (this._targetClassName) {
                        if (oldValue.targetClassName) {
                            if (oldValue.targetClassName !== this._targetClassName) {
                                throw "Related object must be a " + oldValue.targetClassName + ", but a " + this._targetClassName + " was passed in.";
                            }
                        } else {
                            oldValue.targetClassName = this._targetClassName;
                        }
                    }
                    return oldValue;
                } else {
                    throw "Op is invalid after previous op.";
                }
            }
        });

    Bmob.Op._registerDecoder("AddRelation",
        function (json) {
            return new Bmob.Op.Relation(Bmob._decode(undefined, json.objects), []);
        });
    Bmob.Op._registerDecoder("RemoveRelation",
        function (json) {
            return new Bmob.Op.Relation([], Bmob._decode(undefined, json.objects));
        });

    /**
   * Creates a new Relation for the given parent object and key. This
   * constructor should rarely be used directly, but rather created by
   * Bmob.Object.relation.
   * @param {Bmob.Object} parent The parent of this relation.
   * @param {String} key The key for this relation on the parent.
   * @see Bmob.Object#relation
   *
   * <p>
   * A class that is used to access all of the children of a many-to-many
   * relationship.  Each instance of Bmob.Relation is associated with a
   * particular parent object and key.
   * </p>
   */
    Bmob.Relation = function (parent, key) {
        this.parent = parent;
        this.key = key;
        this.targetClassName = null;
    };

    /**
   * Creates a query that can be used to query the parent objects in this relation.
   * @param {String} parentClass The parent class or name.
   * @param {String} relationKey The relation field key in parent.
   * @param {Bmob.Object} child The child object.
   * @return {Bmob.Query}
   */
    Bmob.Relation.reverseQuery = function (parentClass, relationKey, child) {
        var query = new Bmob.Query(parentClass);
        query.equalTo(relationKey, child._toPointer());
        return query;
    };

    Bmob.Relation.prototype = {
        /**
     * Makes sure that this relation has the right parent and key.
     */
        _ensureParentAndKey: function (parent, key) {
            this.parent = this.parent || parent;
            this.key = this.key || key;
            if (this.parent !== parent) {
                throw "Internal Error. Relation retrieved from two different Objects.";
            }
            if (this.key !== key) {
                throw "Internal Error. Relation retrieved from two different keys.";
            }
        },

        /**
     * Adds a Bmob.Object or an array of Bmob.Objects to the relation.
     * @param {} objects The item or items to add.
     */
        add: function (objects) {
            if (!_.isArray(objects)) {
                objects = [objects];
            }

            var change = new Bmob.Op.Relation(objects, []);
            this.parent.set(this.key, change);
            this.targetClassName = change._targetClassName;
        },

        /**
     * Removes a Bmob.Object or an array of Bmob.Objects from this relation.
     * @param {} objects The item or items to remove.
     */
        remove: function (objects) {
            if (!_.isArray(objects)) {
                objects = [objects];
            }

            var change = new Bmob.Op.Relation([], objects);
            this.parent.set(this.key, change);
            this.targetClassName = change._targetClassName;
        },

        /**
     * Returns a JSON version of the object suitable for saving to disk.
     * @return {Object}
     */
        toJSON: function () {
            return {
                "__type": "Relation",
                "className": this.targetClassName
            };
        },

        /**
     * Returns a Bmob.Query that is limited to objects in this
     * relation.
     * @return {Bmob.Query}
     */
        query: function () {
            var targetClass;
            var query;
            if (!this.targetClassName) {
                targetClass = Bmob.Object._getSubclass(this.parent.className);
                query = new Bmob.Query(targetClass);
                query._extraOptions.redirectClassNameForKey = this.key;
            } else {
                targetClass = Bmob.Object._getSubclass(this.targetClassName);
                query = new Bmob.Query(targetClass);
            }
            query._addCondition("$relatedTo", "object", this.parent._toPointer());
            query._addCondition("$relatedTo", "key", this.key);

            return query;
        }
    };

    /**
   * A Promise is returned by async methods as a hook to provide callbacks to be
   * called when the async task is fulfilled.
   *
   * <p>Typical usage would be like:<pre>
   *    query.findAsync().then(function(results) {
   *      results[0].set("foo", "bar");
   *      return results[0].saveAsync();
   *    }).then(function(result) {
   *      console.log("Updated " + result.id);
   *    });
   * </pre></p>
   *
   * @see Bmob.Promise.prototype.next
   */
    Bmob.Promise = function () {
        this._resolved = false;
        this._rejected = false;
        this._resolvedCallbacks = [];
        this._rejectedCallbacks = [];
    };

    _.extend(Bmob.Promise,
        /** @lends Bmob.Promise */
        {

            /**
         * Returns true iff the given object fulfils the Promise interface.
         * @return {Boolean}
         */
            is: function (promise) {
                return promise && promise.then && _.isFunction(promise.then);
            },

            /**
         * Returns a new promise that is resolved with a given value.
         * @return {Bmob.Promise} the new promise.
         */
            as: function () {
                var promise = new Bmob.Promise();
                promise.resolve.apply(promise, arguments);
                return promise;
            },

            /**
         * Returns a new promise that is rejected with a given error.
         * @return {Bmob.Promise} the new promise.
         */
            error: function () {
                var promise = new Bmob.Promise();
                promise.reject.apply(promise, arguments);
                return promise;
            },

            /**
         * Returns a new promise that is fulfilled when all of the input promises
         * are resolved. If any promise in the list fails, then the returned promise
         * will fail with the last error. If they all succeed, then the returned
         * promise will succeed, with the result being an array with the results of
         * all the input promises.
         * @param {Array} promises a list of promises to wait for.
         * @return {Bmob.Promise} the new promise.
         */
            when: function (promises) {
                // Allow passing in Promises as separate arguments instead of an Array.
                var objects;
                if (promises && Bmob._isNullOrUndefined(promises.length)) {
                    objects = arguments;
                } else {
                    objects = promises;
                }

                var total = objects.length;
                var hadError = false;
                var results = [];
                var errors = [];
                results.length = objects.length;
                errors.length = objects.length;

                if (total === 0) {
                    return Bmob.Promise.as.apply(this, results);
                }

                var promise = new Bmob.Promise();

                var resolveOne = function () {
                    total = total - 1;
                    if (total === 0) {
                        if (hadError) {
                            promise.reject(errors);
                        } else {
                            promise.resolve.apply(promise, results);
                        }
                    }
                };

                Bmob._arrayEach(objects,
                    function (object, i) {
                        if (Bmob.Promise.is(object)) {
                            object.then(function (result) {
                                results[i] = result;
                                resolveOne();
                            },
                                function (error) {
                                    errors[i] = error;
                                    hadError = true;
                                    resolveOne();
                                });
                        } else {
                            results[i] = object;
                            resolveOne();
                        }
                    });

                return promise;
            },

            /**
         * Runs the given asyncFunction repeatedly, as long as the predicate
         * function returns a truthy value. Stops repeating if asyncFunction returns
         * a rejected promise.
         * @param {Function} predicate should return false when ready to stop.
         * @param {Function} asyncFunction should return a Promise.
         */
            _continueWhile: function (predicate, asyncFunction) {
                if (predicate()) {
                    return asyncFunction().then(function () {
                        return Bmob.Promise._continueWhile(predicate, asyncFunction);
                    });
                }
                return Bmob.Promise.as();
            }
        });

    _.extend(Bmob.Promise.prototype,
        /** @lends Bmob.Promise.prototype */
        {

            /**
         * Marks this promise as fulfilled, firing any callbacks waiting on it.
         * @param {Object} result the result to pass to the callbacks.
         */
            resolve: function (result) {
                if (this._resolved || this._rejected) {
                    throw "A promise was resolved even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
                }
                this._resolved = true;
                this._result = arguments;
                var results = arguments;
                Bmob._arrayEach(this._resolvedCallbacks,
                    function (resolvedCallback) {
                        resolvedCallback.apply(this, results);
                    });
                this._resolvedCallbacks = [];
                this._rejectedCallbacks = [];
            },

            /**
         * Marks this promise as fulfilled, firing any callbacks waiting on it.
         * @param {Object} error the error to pass to the callbacks.
         */
            reject: function (error) {
                if (this._resolved || this._rejected) {
                    throw "A promise was rejected even though it had already been " + (this._resolved ? "resolved" : "rejected") + ".";
                }
                this._rejected = true;
                this._error = error;
                Bmob._arrayEach(this._rejectedCallbacks,
                    function (rejectedCallback) {
                        rejectedCallback(error);
                    });
                this._resolvedCallbacks = [];
                this._rejectedCallbacks = [];
            },

            /**
         * Adds callbacks to be called when this promise is fulfilled. Returns a new
         * Promise that will be fulfilled when the callback is complete. It allows
         * chaining. If the callback itself returns a Promise, then the one returned
         * by "then" will not be fulfilled until that one returned by the callback
         * is fulfilled.
         * @param {Function} resolvedCallback Function that is called when this
         * Promise is resolved. Once the callback is complete, then the Promise
         * returned by "then" will also be fulfilled.
         * @param {Function} rejectedCallback Function that is called when this
         * Promise is rejected with an error. Once the callback is complete, then
         * the promise returned by "then" with be resolved successfully. If
         * rejectedCallback is null, or it returns a rejected Promise, then the
         * Promise returned by "then" will be rejected with that error.
         * @return {Bmob.Promise} A new Promise that will be fulfilled after this
         * Promise is fulfilled and either callback has completed. If the callback
         * returned a Promise, then this Promise will not be fulfilled until that
         * one is.
         */
            then: function (resolvedCallback, rejectedCallback) {
                var promise = new Bmob.Promise();

                var wrappedResolvedCallback = function () {
                    var result = arguments;
                    if (resolvedCallback) {
                        result = [resolvedCallback.apply(this, result)];
                    }
                    if (result.length === 1 && Bmob.Promise.is(result[0])) {
                        result[0].then(function () {
                            promise.resolve.apply(promise, arguments);
                        },
                            function (error) {
                                promise.reject(error);
                            });
                    } else {
                        promise.resolve.apply(promise, result);
                    }
                };

                var wrappedRejectedCallback = function (error) {
                    var result = [];
                    if (rejectedCallback) {
                        result = [rejectedCallback(error)];
                        if (result.length === 1 && Bmob.Promise.is(result[0])) {
                            result[0].then(function () {
                                promise.resolve.apply(promise, arguments);
                            },
                                function (error) {
                                    promise.reject(error);
                                });
                        } else {
                            // A Promises/A+ compliant implementation would call:
                            // promise.resolve.apply(promise, result);
                            promise.reject(result[0]);
                        }
                    } else {
                        promise.reject(error);
                    }
                };

                if (this._resolved) {
                    wrappedResolvedCallback.apply(this, this._result);
                } else if (this._rejected) {
                    wrappedRejectedCallback(this._error);
                } else {
                    this._resolvedCallbacks.push(wrappedResolvedCallback);
                    this._rejectedCallbacks.push(wrappedRejectedCallback);
                }

                return promise;
            },

            /**
         * Run the given callbacks after this promise is fulfilled.
         * @param optionsOrCallback {} A Backbone-style options callback, or a
         * callback function. If this is an options object and contains a "model"
         * attributes, that will be passed to error callbacks as the first argument.
         * @param model {} If truthy, this will be passed as the first result of
         * error callbacks. This is for Backbone-compatability.
         * @return {Bmob.Promise} A promise that will be resolved after the
         * callbacks are run, with the same result as this.
         */
            _thenRunCallbacks: function (optionsOrCallback, model) {
                var options;
                if (_.isFunction(optionsOrCallback)) {
                    var callback = optionsOrCallback;
                    options = {
                        success: function (result) {
                            callback(result, null);
                        },
                        error: function (error) {
                            callback(null, error);
                        }
                    };
                } else {
                    options = _.clone(optionsOrCallback);
                }
                options = options || {};

                return this.then(function (result) {
                    if (options.success) {
                        options.success.apply(this, arguments);
                    } else if (model) {
                        // When there's no callback, a sync event should be triggered.
                        model.trigger('sync', model, result, options);
                    }
                    return Bmob.Promise.as.apply(Bmob.Promise, arguments);
                },
                    function (error) {
                        if (options.error) {
                            if (!_.isUndefined(model)) {
                                options.error(model, error);
                            } else {
                                options.error(error);
                            }
                        } else if (model) {
                            // When there's no error callback, an error event should be triggered.
                            model.trigger('error', model, error, options);
                        }
                        // By explicitly returning a rejected Promise, this will work with
                        // either jQuery or Promises/A semantics.
                        return Bmob.Promise.error(error);
                    });
            },

            /**
         * Adds a callback function that should be called regardless of whether
         * this promise failed or succeeded. The callback will be given either the
         * array of results for its first argument, or the error as its second,
         * depending on whether this Promise was rejected or resolved. Returns a
         * new Promise, like "then" would.
         * @param {Function} continuation the callback.
         */
            _continueWith: function (continuation) {
                return this.then(function () {
                    return continuation(arguments, null);
                },
                    function (error) {
                        return continuation(null, error);
                    });
            }

        });

    var b64Digit = function (number) {
        if (number < 26) {
            return String.fromCharCode(65 + number);
        }
        if (number < 52) {
            return String.fromCharCode(97 + (number - 26));
        }
        if (number < 62) {
            return String.fromCharCode(48 + (number - 52));
        }
        if (number === 62) {
            return "+";
        }
        if (number === 63) {
            return "/";
        }
        throw "Tried to encode large digit " + number + " in base64.";
    };

    var encodeBase64 = function (str) {
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

        var out, i, len;
        var c1, c2, c3;

        len = str.length;
        i = 0;
        out = "";
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += "==";
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;

    };

    var utf16to8 = function (str) {
        var out, i, len, c;

        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;

    };

    /**
   * Reads a File using a FileReader.
   * @param file {File} the File to read.
   * @param type {String} (optional) the mimetype to override with.
   * @return {Bmob.Promise} A Promise that will be fulfilled with a
   *     base64-encoded string of the data and its mime type.
   */
    var readAsync = function (file, type) {
        var promise = new Bmob.Promise();

        if (typeof (FileReader) === "undefined") {
            return Bmob.Promise.error(new Bmob.Error(- 1, "Attempted to use a FileReader on an unsupported browser."));
        }

        var reader = new FileReader();
        reader.onloadend = function () {

            promise.resolve(reader.result);
        };
        reader.readAsBinaryString(file);
        return promise;
    };

    /**
   *  Bmob.File ???????????????bmob
   * cloud.
   * @param name {String} ????????????????????????????????????????????????????????????
   * @param data {file} ???????????????
   *
   *     ??????????????????" file upload control"????????????????????????????????????????????????
   *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
   *        ??????:<pre>
   *
   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
   * if (fileUploadControl.files.length > 0) {
   *   var file = fileUploadControl.files[0];
   *   var name = "photo.jpg";
   *   var bmobFile = new Bmob.File(name, file);
   *   bmobFile.save().then(function() {
   *     // The file has been saved to Bmob.
   *   }, function(error) {
   *     // The file either could not be read, or could not be saved to Bmob.
   *   });
   * }</pre>
   * @param type {String} ???????????????.
   */
    Bmob.File = function (name, data, type) {
        var extension = /\.([^.]*)$/.exec(name);
        if (extension[1] == "mp4") {
            data = data;
        }
        else {
            data = data[0];
        }
        this._name = name;
        // this._name = encodeBase64(utf16to8(name));
        var currentUser = Bmob.User.current();
        this._metaData = {
            owner: (currentUser != null ? currentUser.id : 'unknown')
        };

        // Guess the content type from the extension if we need to.
        // var extension = /\.([^.]*)$/.exec(name);
        if (extension) {
            extension = extension[1].toLowerCase();
        }

        // var guessedType = type || mimeTypes[extension] || "text/plain";
        var guessedType = type || "text/plain";
        this._guessedType = guessedType;

        if (typeof (File) !== "undefined" && data instanceof File) {
            this._source = readAsync(data, type);
        } else {
            // throw "Creating a Bmob.File from a String is not yet supported.";
            this._source = Bmob.Promise.as(data, guessedType);
            this._metaData.size = data.length;
        }
    };



    Bmob.File.prototype = {

        /**
     * Gets the name of the file. Before save is called, this is the filename
     * given by the user. After save is called, that name gets prefixed with a
     * unique identifier.
     */
        name: function () {
            return this._name;
        },

        setName: function (name) {
            this._name = name;
        },

        /**
     * Gets the url of the file. It is only available after you save the file or
     * after you get the file from a Bmob.Object.
     * @return {String}
     */
        url: function () {
            return this._url;
        },

        setUrl: function (url) {
            this._url = url;
        },

        /**
     * Gets the group of the file. It is only available after you save the file or
     * after you get the file from a Bmob.Object.
     * @return {String}
     */
        cdn: function () {
            return this._cdn;
        },

        /**
    * <p>Returns the file's metadata JSON object if no arguments is given.Returns the
    * metadata value if a key is given.Set metadata value if key and value are both given.</p>
    * <p><pre>
    *  var metadata = file.metaData(); //Get metadata JSON object.
    *  var size = file.metaData('size');  // Get the size metadata value.
    *  file.metaData('format', 'jpeg'); //set metadata attribute and value.
    *</pre></p>
    * @return {Object} The file's metadata JSON object.
    * @param {String} attr an optional metadata key.
    * @param {Object} value an optional metadata value.
    **/
        metaData: function (attr, value) {
            if (attr != null && value != null) {
                this._metaData[attr] = value;
                return this;
            } else if (attr != null) {
                return this._metaData[attr];
            } else {
                return this._metaData;
            }
        },

        /**
     * Destroy the file.
     * @return {Bmob.Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
        destroy: function (options) {
            if (!this._url && !this._cdn) return Bmob.Promise.error('The file url and cdn is not eixsts.')._thenRunCallbacks(options);

            var data = {
                cdn: this._cdn,
                _ContentType: "application/json",
                url: this._url,
                metaData: self._metaData,
            };
            var request = Bmob._request("2/files", null, null, 'DELETE', data);
            return request._thenRunCallbacks(options);
        },

        /**
     * Saves the file to the Bmob cloud.
     * @param {Object} options A Backbone-style options object.
     * @return {Bmob.Promise} Promise that is resolved when the save finishes.
     */
        save: function (options) {
            var self = this;
            if (!self._previousSave) {
                if (self._source) {
                    self._previousSave = self._source.then(function (base64, type) {
                        var data = {
                            base64: base64,
                            // base64: encodeBase64(base64),
                            _ContentType: "text/plain",
                            mime_type: "text/plain",
                            metaData: self._metaData,
                            category: "wechatApp",
                        };
                        if (!self._metaData.size) {
                            self._metaData.size = base64.length;
                        }
                        return Bmob._request("2/files", self._name, null, 'POST', data);
                    }).then(function (response) {

                        self._name = response.filename;
                        self._url = response.url;
                        self._cdn = response.cdn;

                        return self;
                    });
                } else {
                    throw "not source file"
                }
            }
            return self._previousSave._thenRunCallbacks(options);
        }
    };


    /**
   * ??????push?????????
   * @name Bmob.Push
   * @namespace ????????????
   */
    Bmob.Files = Bmob.Files || {};


    Bmob.Files.del = function (urls, options) {
        var _url = urls.split(".com");
        if (!_url) {
            return Bmob.Promise.error('The file url and cdn is not eixsts.')._thenRunCallbacks(options);
        }

        var data = {
            _ContentType: "application/json",
            // url:_url,
        };
        var request = Bmob._request("2/files/upyun", _url[1], null, 'DELETE', data);
        return request.then(function (resp) {
            return Bmob._decode(null, resp);
        })._thenRunCallbacks(options);
    };

    /**
   * Creates a new model with defined attributes. A client id (cid) is
   * automatically generated and assigned for you.
   *
   * <p>You won't normally call this method directly.  It is recommended that
   * you use a subclass of <code>Bmob.Object</code> instead, created by calling
   * <code>extend</code>.</p>
   *
   * <p>However, if you don't want to use a subclass, or aren't sure which
   * subclass is appropriate, you can use this form:<pre>
   *     var object = new Bmob.Object("ClassName");
   * </pre>
   * That is basically equivalent to:<pre>
   *     var MyClass = Bmob.Object.extend("ClassName");
   *     var object = new MyClass();
   * </pre></p>
   *
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @see Bmob.Object.extend
   *
   *
   * <p>The fundamental unit of Bmob data, which implements the Backbone Model
   * interface.</p>
   */
    Bmob.Object = function (attributes, options) {
        // Allow new Bmob.Object("ClassName") as a shortcut to _create.
        if (_.isString(attributes)) {
            return Bmob.Object._create.apply(this, arguments);
        }

        attributes = attributes || {};
        if (options && options.parse) {
            attributes = this.parse(attributes);
        }
        var defaults = Bmob._getValue(this, 'defaults');
        if (defaults) {
            attributes = _.extend({},
                defaults, attributes);
        }
        if (options && options.collection) {
            this.collection = options.collection;
        }

        this._serverData = {}; // The last known data for this object from cloud.
        this._opSetQueue = [{}]; // List of sets of changes to the data.
        this.attributes = {}; // The best estimate of this's current data.
        this._hashedJSON = {}; // Hash of values of containers at last save.
        this._escapedAttributes = {};
        this.cid = _.uniqueId('c');
        this.changed = {};
        this._silent = {};
        this._pending = {};
        if (!this.set(attributes, {
            silent: true
        })) {
            throw new Error("Can't create an invalid Bmob.Object");
        }
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._hasData = true;
        this._previousAttributes = _.clone(this.attributes);
        this.initialize.apply(this, arguments);
    };

    /**
   * @lends Bmob.Object.prototype
   * @property {String} id The objectId of the Bmob Object.
   */

    /**
   * Saves the given list of Bmob.Object.
   * If any error is encountered, stops and calls the error handler.
   * There are two ways you can call this function.
   *
   * The Backbone way:<pre>
   *   Bmob.Object.saveAll([object1, object2, ...], {
   *     success: function(list) {
   *       // All the objects were saved.
   *     },
   *     error: function(error) {
   *       // An error occurred while saving one of the objects.
   *     },
   *   });
   * </pre>
   * A simplified syntax:<pre>
   *   Bmob.Object.saveAll([object1, object2, ...], function(list, error) {
   *     if (list) {
   *       // All the objects were saved.
   *     } else {
   *       // An error occurred.
   *     }
   *   });
   * </pre>
   *
   * @param {Array} list A list of <code>Bmob.Object</code>.
   * @param {Object} options A Backbone-style callback object.
   */
    Bmob.Object.saveAll = function (list, options) {
        return Bmob.Object._deepSaveAsync(list)._thenRunCallbacks(options);
    };

    // Attach all inheritable methods to the Bmob.Object prototype.
    _.extend(Bmob.Object.prototype, Bmob.Events,
        /** @lends Bmob.Object.prototype */
        {
            _existed: false,
            _fetchWhenSave: false,

            /**
         * Initialize is an empty function by default. Override it with your own
         * initialization logic.
         */
            initialize: function () { },

            /**
         * Set whether to enable fetchWhenSave option when updating object.
         * When set true, SDK would fetch the latest object after saving.
         * Default is false.
         * @param {boolean} enable  true to enable fetchWhenSave option.
         */
            fetchWhenSave: function (enable) {
                if (typeof enable !== 'boolean') {
                    throw "Expect boolean value for fetchWhenSave";
                }
                this._fetchWhenSave = enable;
            },

            /**
         * Returns a JSON version of the object suitable for saving to Bmob.
         * @return {Object}
         */
            toJSON: function () {
                var json = this._toFullJSON();
                Bmob._arrayEach(["__type", "className"],
                    function (key) {
                        delete json[key];
                    });
                return json;
            },

            _toFullJSON: function (seenObjects) {
                var json = _.clone(this.attributes);
                Bmob._objectEach(json,
                    function (val, key) {
                        json[key] = Bmob._encode(val, seenObjects);
                    });
                Bmob._objectEach(this._operations,
                    function (val, key) {
                        json[key] = val;
                    });

                if (_.has(this, "id")) {
                    json.objectId = this.id;
                }
                if (_.has(this, "createdAt")) {
                    if (_.isDate(this.createdAt)) {
                        json.createdAt = this.createdAt.toJSON();
                    } else {
                        json.createdAt = this.createdAt;
                    }
                }

                if (_.has(this, "updatedAt")) {
                    if (_.isDate(this.updatedAt)) {
                        json.updatedAt = this.updatedAt.toJSON();
                    } else {
                        json.updatedAt = this.updatedAt;
                    }
                }
                json.__type = "Object";
                json.className = this.className;
                return json;
            },

            /**
         * Updates _hashedJSON to reflect the current state of this object.
         * Adds any changed hash values to the set of pending changes.
         */
            _refreshCache: function () {
                var self = this;
                if (self._refreshingCache) {
                    return;
                }
                self._refreshingCache = true;
                Bmob._objectEach(this.attributes,
                    function (value, key) {
                        if (value instanceof Bmob.Object) {
                            value._refreshCache();
                        } else if (_.isObject(value)) {
                            if (self._resetCacheForKey(key)) {
                                self.set(key, new Bmob.Op.Set(value), {
                                    silent: true
                                });
                            }
                        }
                    });
                delete self._refreshingCache;
            },

            /**
         * Returns true if this object has been modified since its last
         * save/refresh.  If an attribute is specified, it returns true only if that
         * particular attribute has been modified since the last save/refresh.
         * @param {String} attr An attribute name (optional).
         * @return {Boolean}
         */
            dirty: function (attr) {
                this._refreshCache();

                var currentChanges = _.last(this._opSetQueue);

                if (attr) {
                    return (currentChanges[attr] ? true : false);
                }
                if (!this.id) {
                    return true;
                }
                if (_.keys(currentChanges).length > 0) {
                    return true;
                }
                return false;
            },

            /**
         * Gets a Pointer referencing this Object.
         */
            _toPointer: function () {
                // if (!this.id) {
                //   throw new Error("Can't serialize an unsaved Bmob.Object");
                // }
                return {
                    __type: "Pointer",
                    className: this.className,
                    objectId: this.id
                };
            },

            /**
         * Gets the value of an attribute.
         * @param {String} attr The string name of an attribute.
         */
            get: function (attr) {
                return this.attributes[attr];
            },

            /**
         * Gets a relation on the given class for the attribute.
         * @param String attr The attribute to get the relation for.
         */
            relation: function (attr) {
                var value = this.get(attr);
                if (value) {
                    if (!(value instanceof Bmob.Relation)) {
                        throw "Called relation() on non-relation field " + attr;
                    }
                    value._ensureParentAndKey(this, attr);
                    return value;
                } else {
                    return new Bmob.Relation(this, attr);
                }
            },

            /**
         * Gets the HTML-escaped value of an attribute.
         */
            escape: function (attr) {
                var html = this._escapedAttributes[attr];
                if (html) {
                    return html;
                }
                var val = this.attributes[attr];
                var escaped;
                if (Bmob._isNullOrUndefined(val)) {
                    escaped = '';
                } else {
                    escaped = _.escape(val.toString());
                }
                this._escapedAttributes[attr] = escaped;
                return escaped;
            },

            /**
         * Returns <code>true</code> if the attribute contains a value that is not
         * null or undefined.
         * @param {String} attr The string name of the attribute.
         * @return {Boolean}
         */
            has: function (attr) {
                return !Bmob._isNullOrUndefined(this.attributes[attr]);
            },

            /**
         * Pulls "special" fields like objectId, createdAt, etc. out of attrs
         * and puts them on "this" directly.  Removes them from attrs.
         * @param attrs - A dictionary with the data for this Bmob.Object.
         */
            _mergeMagicFields: function (attrs) {
                // Check for changes of magic fields.
                var model = this;
                var specialFields = ["id", "objectId", "createdAt", "updatedAt"];
                Bmob._arrayEach(specialFields,
                    function (attr) {
                        if (attrs[attr]) {
                            if (attr === "objectId") {
                                model.id = attrs[attr];
                            } else {
                                model[attr] = attrs[attr];
                            }
                            delete attrs[attr];
                        }
                    });
            },

            /**
         * Returns the json to be sent to the server.
         */
            _startSave: function () {
                this._opSetQueue.push({});
            },

            /**
         * Called when a save fails because of an error. Any changes that were part
         * of the save need to be merged with changes made after the save. This
         * might throw an exception is you do conflicting operations. For example,
         * if you do:
         *   object.set("foo", "bar");
         *   object.set("invalid field name", "baz");
         *   object.save();
         *   object.increment("foo");
         * then this will throw when the save fails and the client tries to merge
         * "bar" with the +1.
         */
            _cancelSave: function () {
                var self = this;
                var failedChanges = _.first(this._opSetQueue);
                this._opSetQueue = _.rest(this._opSetQueue);
                var nextChanges = _.first(this._opSetQueue);
                Bmob._objectEach(failedChanges,
                    function (op, key) {
                        var op1 = failedChanges[key];
                        var op2 = nextChanges[key];
                        if (op1 && op2) {
                            nextChanges[key] = op2._mergeWithPrevious(op1);
                        } else if (op1) {
                            nextChanges[key] = op1;
                        }
                    });
                this._saving = this._saving - 1;
            },

            /**
         * Called when a save completes successfully. This merges the changes that
         * were saved into the known server data, and overrides it with any data
         * sent directly from the server.
         */
            _finishSave: function (serverData) {
                // Grab a copy of any object referenced by this object. These instances
                // may have already been fetched, and we don't want to lose their data.
                // Note that doing it like this means we will unify separate copies of the
                // same object, but that's a risk we have to take.
                var fetchedObjects = {};
                Bmob._traverse(this.attributes,
                    function (object) {
                        if (object instanceof Bmob.Object && object.id && object._hasData) {
                            fetchedObjects[object.id] = object;
                        }
                    });

                var savedChanges = _.first(this._opSetQueue);
                this._opSetQueue = _.rest(this._opSetQueue);
                this._applyOpSet(savedChanges, this._serverData);
                this._mergeMagicFields(serverData);
                var self = this;
                Bmob._objectEach(serverData,
                    function (value, key) {
                        self._serverData[key] = Bmob._decode(key, value);

                        // Look for any objects that might have become unfetched and fix them
                        // by replacing their values with the previously observed values.
                        var fetched = Bmob._traverse(self._serverData[key],
                            function (object) {
                                if (object instanceof Bmob.Object && fetchedObjects[object.id]) {
                                    return fetchedObjects[object.id];
                                }
                            });
                        if (fetched) {
                            self._serverData[key] = fetched;
                        }
                    });
                this._rebuildAllEstimatedData();
                this._saving = this._saving - 1;
            },

            /**
         * Called when a fetch or login is complete to set the known server data to
         * the given object.
         */
            _finishFetch: function (serverData, hasData) {
                // Clear out any changes the user might have made previously.
                this._opSetQueue = [{}];

                // Bring in all the new server data.
                this._mergeMagicFields(serverData);
                var self = this;
                Bmob._objectEach(serverData,
                    function (value, key) {
                        if (value.__type != "Object") {
                            self._serverData[key] = Bmob._decode(key, value);
                        } else {
                            self._serverData[key] = value;
                        }
                    });

                // Refresh the attributes.
                this._rebuildAllEstimatedData();

                // Clear out the cache of mutable containers.
                this._refreshCache();
                this._opSetQueue = [{}];

                this._hasData = hasData;
            },

            /**
         * Applies the set of Bmob.Op in opSet to the object target.
         */
            _applyOpSet: function (opSet, target) {
                var self = this;
                Bmob._objectEach(opSet,
                    function (change, key) {
                        target[key] = change._estimate(target[key], self, key);
                        if (target[key] === Bmob.Op._UNSET) {
                            delete target[key];
                        }
                    });
            },

            /**
         * Replaces the cached value for key with the current value.
         * Returns true if the new value is different than the old value.
         */
            _resetCacheForKey: function (key) {
                var value = this.attributes[key];
                if (_.isObject(value) && !(value instanceof Bmob.Object) && !(value instanceof Bmob.File)) {
                    value = value.toJSON ? value.toJSON() : value;
                    var json = JSON.stringify(value);
                    if (this._hashedJSON[key] !== json) {
                        this._hashedJSON[key] = json;
                        return true;
                    }
                }
                return false;
            },

            /**
         * Populates attributes[key] by starting with the last known data from the
         * server, and applying all of the local changes that have been made to that
         * key since then.
         */
            _rebuildEstimatedDataForKey: function (key) {
                var self = this;
                delete this.attributes[key];
                if (this._serverData[key]) {
                    this.attributes[key] = this._serverData[key];
                }
                Bmob._arrayEach(this._opSetQueue,
                    function (opSet) {
                        var op = opSet[key];
                        if (op) {
                            self.attributes[key] = op._estimate(self.attributes[key], self, key);
                            if (self.attributes[key] === Bmob.Op._UNSET) {
                                delete self.attributes[key];
                            } else {
                                self._resetCacheForKey(key);
                            }
                        }
                    });
            },

            /**
         * Populates attributes by starting with the last known data from the
         * server, and applying all of the local changes that have been made since
         * then.
         */
            _rebuildAllEstimatedData: function () {
                var self = this;

                var previousAttributes = _.clone(this.attributes);

                this.attributes = _.clone(this._serverData);
                Bmob._arrayEach(this._opSetQueue,
                    function (opSet) {
                        self._applyOpSet(opSet, self.attributes);
                        Bmob._objectEach(opSet,
                            function (op, key) {
                                self._resetCacheForKey(key);
                            });
                    });

                // Trigger change events for anything that changed because of the fetch.
                Bmob._objectEach(previousAttributes,
                    function (oldValue, key) {
                        if (self.attributes[key] !== oldValue) {
                            self.trigger('change:' + key, self, self.attributes[key], {});
                        }
                    });
                Bmob._objectEach(this.attributes,
                    function (newValue, key) {
                        if (!_.has(previousAttributes, key)) {
                            self.trigger('change:' + key, self, newValue, {});
                        }
                    });
            },

            /**
         * Sets a hash of model attributes on the object, firing
         * <code>"change"</code> unless you choose to silence it.
         *
         * <p>You can call it with an object containing keys and values, or with one
         * key and value.  For example:<pre>
         *   gameTurn.set({
         *     player: player1,
         *     diceRoll: 2
         *   }, {
         *     error: function(gameTurnAgain, error) {
         *       // The set failed validation.
         *     }
         *   });
         *
         *   game.set("currentPlayer", player2, {
         *     error: function(gameTurnAgain, error) {
         *       // The set failed validation.
         *     }
         *   });
         *
         *   game.set("finished", true);</pre></p>
         *
         * @param {String} key The key to set.
         * @param {} value The value to give it.
         * @param {Object} options A set of Backbone-like options for the set.
         *     The only supported options are <code>silent</code>,
         *     <code>error</code>, and <code>promise</code>.
         * @return {Boolean} true if the set succeeded.
         * @see Bmob.Object#validate
         * @see Bmob.Error
         */
            set: function (key, value, options) {
                var attrs, attr;
                if (_.isObject(key) || Bmob._isNullOrUndefined(key)) {
                    attrs = key;
                    Bmob._objectEach(attrs,
                        function (v, k) {
                            attrs[k] = Bmob._decode(k, v);
                        });
                    options = value;
                } else {
                    attrs = {};
                    attrs[key] = Bmob._decode(key, value);
                }

                // Extract attributes and options.
                options = options || {};
                if (!attrs) {
                    return this;
                }
                if (attrs instanceof Bmob.Object) {
                    attrs = attrs.attributes;
                }

                // If the unset option is used, every attribute should be a Unset.
                if (options.unset) {
                    Bmob._objectEach(attrs,
                        function (unused_value, key) {
                            attrs[key] = new Bmob.Op.Unset();
                        });
                }

                // Apply all the attributes to get the estimated values.
                var dataToValidate = _.clone(attrs);
                var self = this;
                Bmob._objectEach(dataToValidate,
                    function (value, key) {
                        if (value instanceof Bmob.Op) {
                            dataToValidate[key] = value._estimate(self.attributes[key], self, key);
                            if (dataToValidate[key] === Bmob.Op._UNSET) {
                                delete dataToValidate[key];
                            }
                        }
                    });

                // Run validation.
                if (!this._validate(attrs, options)) {
                    return false;
                }

                this._mergeMagicFields(attrs);

                options.changes = {};
                var escaped = this._escapedAttributes;
                var prev = this._previousAttributes || {};

                // Update attributes.
                Bmob._arrayEach(_.keys(attrs),
                    function (attr) {
                        var val = attrs[attr];

                        // If this is a relation object we need to set the parent correctly,
                        // since the location where it was parsed does not have access to
                        // this object.
                        if (val instanceof Bmob.Relation) {
                            val.parent = self;
                        }

                        if (!(val instanceof Bmob.Op)) {
                            val = new Bmob.Op.Set(val);
                        }

                        // See if this change will actually have any effect.
                        var isRealChange = true;
                        if (val instanceof Bmob.Op.Set && _.isEqual(self.attributes[attr], val.value)) {
                            isRealChange = false;
                        }

                        if (isRealChange) {
                            delete escaped[attr];
                            if (options.silent) {
                                self._silent[attr] = true;
                            } else {
                                options.changes[attr] = true;
                            }
                        }

                        var currentChanges = _.last(self._opSetQueue);
                        currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);
                        self._rebuildEstimatedDataForKey(attr);

                        if (isRealChange) {
                            self.changed[attr] = self.attributes[attr];
                            if (!options.silent) {
                                self._pending[attr] = true;
                            }
                        } else {
                            delete self.changed[attr];
                            delete self._pending[attr];
                        }
                    });

                if (!options.silent) {
                    this.change(options);
                }
                return this;
            },

            /**
         * Remove an attribute from the model, firing <code>"change"</code> unless
         * you choose to silence it. This is a noop if the attribute doesn't
         * exist.
         */
            unset: function (attr, options) {
                options = options || {};
                options.unset = true;
                return this.set(attr, null, options);
            },

            /**
         * Atomically increments the value of the given attribute the next time the
         * object is saved. If no amount is specified, 1 is used by default.
         *
         * @param attr {String} The key.
         * @param amount {Number} The amount to increment by.
         */
            increment: function (attr, amount) {
                if (_.isUndefined(amount) || _.isNull(amount)) {
                    amount = 1;
                }
                return this.set(attr, new Bmob.Op.Increment(amount));
            },

            /**
         * Atomically add an object to the end of the array associated with a given
         * key.
         * @param attr {String} The key.
         * @param item {} The item to add.
         */
            add: function (attr, item) {
                return this.set(attr, new Bmob.Op.Add([item]));
            },

            /**
         * Atomically add an object to the array associated with a given key, only
         * if it is not already present in the array. The position of the insert is
         * not guaranteed.
         *
         * @param attr {String} The key.
         * @param item {} The object to add.
         */
            addUnique: function (attr, item) {
                return this.set(attr, new Bmob.Op.AddUnique([item]));
            },

            /**
         * Atomically remove all instances of an object from the array associated
         * with a given key.
         *
         * @param attr {String} The key.
         * @param item {} The object to remove.
         */
            remove: function (attr, item) {
                return this.set(attr, new Bmob.Op.Remove([item]));
            },

            /**
         * Returns an instance of a subclass of Bmob.Op describing what kind of
         * modification has been performed on this field since the last time it was
         * saved. For example, after calling object.increment("x"), calling
         * object.op("x") would return an instance of Bmob.Op.Increment.
         *
         * @param attr {String} The key.
         * @returns {Bmob.Op} The operation, or undefined if none.
         */
            op: function (attr) {
                return _.last(this._opSetQueue)[attr];
            },

            /**
         * Clear all attributes on the model, firing <code>"change"</code> unless
         * you choose to silence it.
         */
            clear: function (options) {
                options = options || {};
                options.unset = true;
                var keysToClear = _.extend(this.attributes, this._operations);
                return this.set(keysToClear, options);
            },

            /**
         * Returns a JSON-encoded set of operations to be sent with the next save
         * request.
         */
            _getSaveJSON: function () {
                var json = _.clone(_.first(this._opSetQueue));
                Bmob._objectEach(json,
                    function (op, key) {
                        json[key] = op.toJSON();
                    });
                return json;
            },

            /**
         * Returns true if this object can be serialized for saving.
         */
            _canBeSerialized: function () {
                return Bmob.Object._canBeSerializedAsValue(this.attributes);
            },

            /**
         * Fetch the model from the server. If the server's representation of the
         * model differs from its current attributes, they will be overriden,
         * triggering a <code>"change"</code> event.
         * @return {Bmob.Promise} A promise that is fulfilled when the fetch
         *     completes.
         */
            fetch: function (options) {
                var self = this;
                var request = Bmob._request("classes", this.className, this.id, 'GET');
                return request.then(function (response, status, xhr) {
                    self._finishFetch(self.parse(response, status, xhr), true);
                    return self;
                })._thenRunCallbacks(options, this);
            },

            /**
         * Set a hash of model attributes, and save the model to the server.
         * updatedAt will be updated when the request returns.
         * You can either call it as:<pre>
         *   object.save();</pre>
         * or<pre>
         *   object.save(null, options);</pre>
         * or<pre>
         *   object.save(attrs, options);</pre>
         * or<pre>
         *   object.save(key, value, options);</pre>
         *
         * For example, <pre>
         *   gameTurn.save({
         *     player: "Jake Cutter",
         *     diceRoll: 2
         *   }, {
         *     success: function(gameTurnAgain) {
         *       // The save was successful.
         *     },
         *     error: function(gameTurnAgain, error) {
         *       // The save failed.  Error is an instance of Bmob.Error.
         *     }
         *   });</pre>
         * or with promises:<pre>
         *   gameTurn.save({
         *     player: "Jake Cutter",
         *     diceRoll: 2
         *   }).then(function(gameTurnAgain) {
         *     // The save was successful.
         *   }, function(error) {
         *     // The save failed.  Error is an instance of Bmob.Error.
         *   });</pre>
         *
         * @return {Bmob.Promise} A promise that is fulfilled when the save
         *     completes.
         * @see Bmob.Error
         */
            save: function (arg1, arg2, arg3) {
                var i, attrs, current, options, saved;
                if (_.isObject(arg1) || Bmob._isNullOrUndefined(arg1)) {
                    attrs = arg1;
                    options = arg2;
                } else {
                    attrs = {};
                    attrs[arg1] = arg2;
                    options = arg3;
                }

                // Make save({ success: function() {} }) work.
                if (!options && attrs) {
                    var extra_keys = _.reject(attrs,
                        function (value, key) {
                            return _.include(["success", "error", "wait"], key);
                        });
                    if (extra_keys.length === 0) {
                        var all_functions = true;
                        if (_.has(attrs, "success") && !_.isFunction(attrs.success)) {
                            all_functions = false;
                        }
                        if (_.has(attrs, "error") && !_.isFunction(attrs.error)) {
                            all_functions = false;
                        }
                        if (all_functions) {
                            // This attrs object looks like it's really an options object,
                            // and there's no other options object, so let's just use it.
                            return this.save(null, attrs);
                        }
                    }
                }

                options = _.clone(options) || {};
                if (options.wait) {
                    current = _.clone(this.attributes);
                }

                var setOptions = _.clone(options) || {};
                if (setOptions.wait) {
                    setOptions.silent = true;
                }
                var setError;
                setOptions.error = function (model, error) {
                    setError = error;
                };
                if (attrs && !this.set(attrs, setOptions)) {
                    return Bmob.Promise.error(setError)._thenRunCallbacks(options, this);
                }

                var model = this;

                // If there is any unsaved child, save it first.
                model._refreshCache();

                var unsavedChildren = [];
                var unsavedFiles = [];
                Bmob.Object._findUnsavedChildren(model.attributes, unsavedChildren, unsavedFiles);
                if (unsavedChildren.length + unsavedFiles.length > 0) {
                    return Bmob.Object._deepSaveAsync(this.attributes).then(function () {
                        return model.save(null, options);
                    },
                        function (error) {
                            return Bmob.Promise.error(error)._thenRunCallbacks(options, model);
                        });
                }

                this._startSave();
                this._saving = (this._saving || 0) + 1;

                this._allPreviousSaves = this._allPreviousSaves || Bmob.Promise.as();
                this._allPreviousSaves = this._allPreviousSaves._continueWith(function () {
                    var method = model.id ? 'PUT' : 'POST';

                    var json = model._getSaveJSON();

                    if (method === 'PUT' && model._fetchWhenSave) {
                        //Sepcial-case fetchWhenSave when updating object.
                        json._fetchWhenSave = true;
                    }

                    var route = "classes";
                    var className = model.className;
                    if (model.className === "_User" && !model.id) {
                        // Special-case user sign-up.
                        route = "users";
                        className = null;
                    }
                    var request = Bmob._request(route, className, model.id, method, json);

                    request = request.then(function (resp, status, xhr) {
                        var serverAttrs = model.parse(resp, status, xhr);
                        if (options.wait) {
                            serverAttrs = _.extend(attrs || {},
                                serverAttrs);
                        }
                        model._finishSave(serverAttrs);
                        if (options.wait) {
                            model.set(current, setOptions);
                        }
                        return model;

                    },
                        function (error) {
                            model._cancelSave();
                            return Bmob.Promise.error(error);

                        })._thenRunCallbacks(options, model);

                    return request;
                });
                return this._allPreviousSaves;
            },

            /**
         * Destroy this model on the server if it was already persisted.
         * Optimistically removes the model from its collection, if it has one.
         * If `wait: true` is passed, waits for the server to respond
         * before removal.
         *
         * @return {Bmob.Promise} A promise that is fulfilled when the destroy
         *     completes.
         */
            destroy: function (options) {
                options = options || {};
                var model = this;

                var triggerDestroy = function () {
                    model.trigger('destroy', model, model.collection, options);
                };

                if (!this.id) {
                    return triggerDestroy();
                }

                if (!options.wait) {
                    triggerDestroy();
                }

                var request = Bmob._request("classes", this.className, this.id, 'DELETE');
                return request.then(function () {
                    if (options.wait) {
                        triggerDestroy();
                    }
                    return model;
                })._thenRunCallbacks(options, this);
            },

            /**
         * Converts a response into the hash of attributes to be set on the model.
         * @ignore
         */
            parse: function (resp, status, xhr) {
                var output = _.clone(resp);
                _(["createdAt", "updatedAt"]).each(function (key) {
                    if (output[key]) {
                        output[key] = output[key];
                    }
                });
                if (!output.updatedAt) {
                    output.updatedAt = output.createdAt;
                }
                if (status) {
                    this._existed = (status !== 201);
                }
                return output;
            },

            /**
         * Creates a new model with identical attributes to this one.
         * @return {Bmob.Object}
         */
            clone: function () {
                return new this.constructor(this.attributes);
            },

            /**
         * Returns true if this object has never been saved to Bmob.
         * @return {Boolean}
         */
            isNew: function () {
                return !this.id;
            },

            /**
         * Call this method to manually fire a `"change"` event for this model and
         * a `"change:attribute"` event for each changed attribute.
         * Calling this will cause all objects observing the model to update.
         */
            change: function (options) {
                options = options || {};
                var changing = this._changing;
                this._changing = true;

                // Silent changes become pending changes.
                var self = this;
                Bmob._objectEach(this._silent,
                    function (attr) {
                        self._pending[attr] = true;
                    });

                // Silent changes are triggered.
                var changes = _.extend({},
                    options.changes, this._silent);
                this._silent = {};
                Bmob._objectEach(changes,
                    function (unused_value, attr) {
                        self.trigger('change:' + attr, self, self.get(attr), options);
                    });
                if (changing) {
                    return this;
                }

                // This is to get around lint not letting us make a function in a loop.
                var deleteChanged = function (value, attr) {
                    if (!self._pending[attr] && !self._silent[attr]) {
                        delete self.changed[attr];
                    }
                };

                // Continue firing `"change"` events while there are pending changes.
                while (!_.isEmpty(this._pending)) {
                    this._pending = {};
                    this.trigger('change', this, options);
                    // Pending and silent changes still remain.
                    Bmob._objectEach(this.changed, deleteChanged);
                    self._previousAttributes = _.clone(this.attributes);
                }

                this._changing = false;
                return this;
            },

            /**
         * Returns true if this object was created by the Bmob server when the
         * object might have already been there (e.g. in the case of a Facebook
         * login)
         */
            existed: function () {
                return this._existed;
            },

            /**
         * Determine if the model has changed since the last <code>"change"</code>
         * event.  If you specify an attribute name, determine if that attribute
         * has changed.
         * @param {String} attr Optional attribute name
         * @return {Boolean}
         */
            hasChanged: function (attr) {
                if (!arguments.length) {
                    return !_.isEmpty(this.changed);
                }
                return this.changed && _.has(this.changed, attr);
            },

            /**
         * Returns an object containing all the attributes that have changed, or
         * false if there are no changed attributes. Useful for determining what
         * parts of a view need to be updated and/or what attributes need to be
         * persisted to the server. Unset attributes will be set to undefined.
         * You can also pass an attributes object to diff against the model,
         * determining if there *would be* a change.
         */
            changedAttributes: function (diff) {
                if (!diff) {
                    return this.hasChanged() ? _.clone(this.changed) : false;
                }
                var changed = {};
                var old = this._previousAttributes;
                Bmob._objectEach(diff,
                    function (diffVal, attr) {
                        if (!_.isEqual(old[attr], diffVal)) {
                            changed[attr] = diffVal;
                        }
                    });
                return changed;
            },

            /**
         * Gets the previous value of an attribute, recorded at the time the last
         * <code>"change"</code> event was fired.
         * @param {String} attr Name of the attribute to get.
         */
            previous: function (attr) {
                if (!arguments.length || !this._previousAttributes) {
                    return null;
                }
                return this._previousAttributes[attr];
            },

            /**
         * Gets all of the attributes of the model at the time of the previous
         * <code>"change"</code> event.
         * @return {Object}
         */
            previousAttributes: function () {
                return _.clone(this._previousAttributes);
            },

            /**
         * Checks if the model is currently in a valid state. It's only possible to
         * get into an *invalid* state if you're using silent changes.
         * @return {Boolean}
         */
            isValid: function () {
                return !this.validate(this.attributes);
            },

            /**
         * You should not call this function directly unless you subclass
         * <code>Bmob.Object</code>, in which case you can override this method
         * to provide additional validation on <code>set</code> and
         * <code>save</code>.  Your implementation should return
         *
         * @param {Object} attrs The current data to validate.
         * @param {Object} options A Backbone-like options object.
         * @return {} False if the data is valid.  An error object otherwise.
         * @see Bmob.Object#set
         */
            validate: function (attrs, options) {
                if (_.has(attrs, "ACL") && !(attrs.ACL instanceof Bmob.ACL)) {
                    return new Bmob.Error(Bmob.Error.OTHER_CAUSE, "ACL must be a Bmob.ACL.");
                }
                return false;
            },

            /**
         * Run validation against a set of incoming attributes, returning `true`
         * if all is well. If a specific `error` callback has been passed,
         * call that instead of firing the general `"error"` event.
         */
            _validate: function (attrs, options) {
                if (options.silent || !this.validate) {
                    return true;
                }
                attrs = _.extend({},
                    this.attributes, attrs);
                var error = this.validate(attrs, options);
                if (!error) {
                    return true;
                }
                if (options && options.error) {
                    options.error(this, error, options);
                } else {
                    this.trigger('error', this, error, options);
                }
                return false;
            },

            /**
         * Returns the ACL for this object.
         * @returns {Bmob.ACL} An instance of Bmob.ACL.
         * @see Bmob.Object#get
         */
            getACL: function () {
                return this.get("ACL");
            },

            /**
         * Sets the ACL to be used for this object.
         * @param {Bmob.ACL} acl An instance of Bmob.ACL.
         * @param {Object} options Optional Backbone-like options object to be
         *     passed in to set.
         * @return {Boolean} Whether the set passed validation.
         * @see Bmob.Object#set
         */
            setACL: function (acl, options) {
                return this.set("ACL", acl, options);
            }

        });

    /**
    * Creates an instance of a subclass of Bmob.Object for the give classname
    * and id.
    * @param  {String} className The name of the Bmob class backing this model.
    * @param {String} id The object id of this model.
    * @return {Bmob.Object} A new subclass instance of Bmob.Object.
    */
    Bmob.Object.createWithoutData = function (className, id, hasData) {
        var result = new Bmob.Object(className);
        result.id = id;
        result._hasData = hasData;
        return result;
    };
    /**
    * Delete objects in batch.The objects className must be the same.
    * @param {Array} The ParseObject array to be deleted.
    * @param {Object} options Standard options object with success and error
    *     callbacks.
    * @return {Bmob.Promise} A promise that is fulfilled when the save
    *     completes.
    */
    Bmob.Object.destroyAll = function (objects, options) {
        if (objects == null || objects.length == 0) {
            return Bmob.Promise.as()._thenRunCallbacks(options);
        }
        var className = objects[0].className;
        var id = "";
        var wasFirst = true;
        objects.forEach(function (obj) {
            if (obj.className != className) throw "Bmob.Object.destroyAll requires the argument object array's classNames must be the same";
            if (!obj.id) throw "Could not delete unsaved object";
            if (wasFirst) {
                id = obj.id;
                wasFirst = false;
            } else {
                id = id + ',' + obj.id;
            }
        });

        var data = _.map(objects,
            function (object) {
                // var json = object._getSaveJSON();
                var method = "POST";

                var path = "/1/classes/" + object.className;
                if (object.id) {
                    path = path + "/" + object.id;
                    method = "DELETE";
                }
                // object._startSave();
                return {
                    method: method,
                    path: path,
                };
            })
        var request = Bmob._request("batch", null, null, 'POST', { "requests": data });
        return request._thenRunCallbacks(options);
    };

    /**
   * Returns the appropriate subclass for making new instances of the given
   * className string.
   */
    Bmob.Object._getSubclass = function (className) {
        if (!_.isString(className)) {
            throw "Bmob.Object._getSubclass requires a string argument.";
        }
        var ObjectClass = Bmob.Object._classMap[className];
        if (!ObjectClass) {
            ObjectClass = Bmob.Object.extend(className);
            Bmob.Object._classMap[className] = ObjectClass;
        }
        return ObjectClass;
    };

    /**
   * Creates an instance of a subclass of Bmob.Object for the given classname.
   */
    Bmob.Object._create = function (className, attributes, options) {
        var ObjectClass = Bmob.Object._getSubclass(className);
        return new ObjectClass(attributes, options);
    };

    // Set up a map of className to class so that we can create new instances of
    // Bmob Objects from JSON automatically.
    Bmob.Object._classMap = {};

    Bmob.Object._extend = Bmob._extend;

    /**
   * Creates a new subclass of Bmob.Object for the given Bmob class name.
   *
   * <p>Every extension of a Bmob class will inherit from the most recent
   * previous extension of that class. When a Bmob.Object is automatically
   * created by parsing JSON, it will use the most recent extension of that
   * class.</p>
   *
   * <p>You should call either:<pre>
   *     var MyClass = Bmob.Object.extend("MyClass", {
   *         <i>Instance properties</i>
   *     }, {
   *         <i>Class properties</i>
   *     });</pre>
   * or, for Backbone compatibility:<pre>
   *     var MyClass = Bmob.Object.extend({
   *         className: "MyClass",
   *         <i>Other instance properties</i>
   *     }, {
   *         <i>Class properties</i>
   *     });</pre></p>
   *
   * @param {String} className The name of the Bmob class backing this model.
   * @param {Object} protoProps Instance properties to add to instances of the
   *     class returned from this method.
   * @param {Object} classProps Class properties to add the class returned from
   *     this method.
   * @return {Class} A new subclass of Bmob.Object.
   */
    Bmob.Object.extend = function (className, protoProps, classProps) {
        // Handle the case with only two args.
        if (!_.isString(className)) {
            if (className && _.has(className, "className")) {
                return Bmob.Object.extend(className.className, className, protoProps);
            } else {
                throw new Error("Bmob.Object.extend's first argument should be the className.");
            }
        }

        // If someone tries to subclass "User", coerce it to the right type.
        if (className === "User") {
            className = "_User";
        }

        var NewClassObject = null;
        if (_.has(Bmob.Object._classMap, className)) {
            var OldClassObject = Bmob.Object._classMap[className];
            // This new subclass has been told to extend both from "this" and from
            // OldClassObject. This is multiple inheritance, which isn't supported.
            // For now, let's just pick one.
            NewClassObject = OldClassObject._extend(protoProps, classProps);
        } else {
            protoProps = protoProps || {};
            protoProps.className = className;
            NewClassObject = this._extend(protoProps, classProps);
        }
        // Extending a subclass should reuse the classname automatically.
        NewClassObject.extend = function (arg0) {
            if (_.isString(arg0) || (arg0 && _.has(arg0, "className"))) {
                return Bmob.Object.extend.apply(NewClassObject, arguments);
            }
            var newArguments = [className].concat(Bmob._.toArray(arguments));
            return Bmob.Object.extend.apply(NewClassObject, newArguments);
        };
        Bmob.Object._classMap[className] = NewClassObject;
        return NewClassObject;
    };

    Bmob.Object._findUnsavedChildren = function (object, children, files) {
        Bmob._traverse(object,
            function (object) {
                if (object instanceof Bmob.Object) {
                    object._refreshCache();
                    if (object.dirty()) {
                        children.push(object);
                    }
                    return;
                }

                if (object instanceof Bmob.File) {
                    if (!object.url()) {
                        files.push(object);
                    }
                    return;
                }

            });
    };

    Bmob.Object._canBeSerializedAsValue = function (object) {
        var canBeSerializedAsValue = true;

        if (object instanceof Bmob.Object) {
            canBeSerializedAsValue = !!object.id;

        } else if (_.isArray(object)) {
            Bmob._arrayEach(object,
                function (child) {
                    if (!Bmob.Object._canBeSerializedAsValue(child)) {
                        canBeSerializedAsValue = false;
                    }
                });

        } else if (_.isObject(object)) {
            Bmob._objectEach(object,
                function (child) {
                    if (!Bmob.Object._canBeSerializedAsValue(child)) {
                        canBeSerializedAsValue = false;
                    }
                });
        }

        return canBeSerializedAsValue;
    };

    Bmob.Object._deepSaveAsync = function (object) {
        var unsavedChildren = [];
        var unsavedFiles = [];
        Bmob.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);

        var promise = Bmob.Promise.as();
        _.each(unsavedFiles,
            function (file) {
                promise = promise.then(function () {
                    return file.save();
                });
            });

        var objects = _.uniq(unsavedChildren);
        var remaining = _.uniq(objects);

        return promise.then(function () {
            return Bmob.Promise._continueWhile(function () {
                return remaining.length > 0;
            },
                function () {

                    // Gather up all the objects that can be saved in this batch.
                    var batch = [];
                    var newRemaining = [];
                    Bmob._arrayEach(remaining,
                        function (object) {
                            // Limit batches to 20 objects.
                            if (batch.length > 20) {
                                newRemaining.push(object);
                                return;
                            }

                            if (object._canBeSerialized()) {
                                batch.push(object);
                            } else {
                                newRemaining.push(object);
                            }
                        });
                    remaining = newRemaining;

                    // If we can't save any objects, there must be a circular reference.
                    if (batch.length === 0) {
                        return Bmob.Promise.error(new Bmob.Error(Bmob.Error.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                    }

                    // Reserve a spot in every object's save queue.
                    var readyToStart = Bmob.Promise.when(_.map(batch,
                        function (object) {
                            return object._allPreviousSaves || Bmob.Promise.as();
                        }));
                    var batchFinished = new Bmob.Promise();
                    Bmob._arrayEach(batch,
                        function (object) {
                            object._allPreviousSaves = batchFinished;
                        });

                    // Save a single batch, whether previous saves succeeded or failed.
                    return readyToStart._continueWith(function () {
                        return Bmob._request("batch", null, null, "POST", {
                            requests: _.map(batch,
                                function (object) {
                                    var json = object._getSaveJSON();
                                    var method = "POST";

                                    var path = "/1/classes/" + object.className;
                                    if (object.id) {
                                        path = path + "/" + object.id;
                                        method = "PUT";
                                    }

                                    object._startSave();

                                    return {
                                        method: method,
                                        path: path,
                                        body: json
                                    };
                                })

                        }).then(function (response, status, xhr) {
                            var error;
                            Bmob._arrayEach(batch,
                                function (object, i) {
                                    if (response[i].success) {
                                        object._finishSave(object.parse(response[i].success, status, xhr));
                                    } else {
                                        error = error || response[i].error;
                                        object._cancelSave();
                                    }
                                });
                            if (error) {
                                return Bmob.Promise.error(new Bmob.Error(error.code, error.error));
                            }

                        }).then(function (results) {
                            batchFinished.resolve(results);
                            return results;
                        },
                            function (error) {
                                batchFinished.reject(error);
                                return Bmob.Promise.error(error);
                            });
                    });
                });
        }).then(function () {
            return object;
        });
    };

    /**
   * Bmob.Role acl?????????????????????????????????
   *
   * <p>????????????????????????(???????????????????????????), ??????????????????ACL</p>
   * @class
   * @namespace acl?????????????????????????????????
   */
    Bmob.Role = Bmob.Object.extend("_Role",
        /** @lends Bmob.Role.prototype */
        {
            // Instance Methods
            /**
         * ???????????????ACL????????????BmobRole
         * @param {String} name ??????role?????????
         * @param {Bmob.ACL} acl ???????????????acl???????????????????????????ACL???
         */
            constructor: function (name, acl) {
                if (_.isString(name) && (acl instanceof Bmob.ACL)) {
                    Bmob.Object.prototype.constructor.call(this, null, null);
                    this.setName(name);
                    this.setACL(acl);
                } else {
                    Bmob.Object.prototype.constructor.call(this, name, acl);
                }
            },

            /**
         * ???????????????name?????????????????????role.get("name")
         * @return {String} ???????????????
         */
            getName: function () {
                return this.get("name");
            },

            /**
         * ???????????????????????????????????????????????????????????????????????????????????????
         * <p>
         *   ????????????????????????????????????????????? _, -???
         * </p>
         *
         * <p>??????????????? role.set("name", name)</p>
         * @param {String} name ???????????????
         * @param {Object} options ??????options??????
         */
            setName: function (name, options) {
                return this.set("name", name, options);
            },

            /**
         * ?????????????????????????????????Bmob.Users?????????????????????????????????????????????????????????????????????
         * ????????????relation???????????????????????????
         * <p>?????????????????? role.relation("users")</p>
         *
         * @return {Bmob.Relation} the relation for the users belonging to this
         *     role.
         */
            getUsers: function () {
                return this.relation("users");
            },

            /**
         * ?????????????????????????????????Bmob.Roles?????????????????????????????????????????????????????????????????????
         * ????????????relation???????????????????????????
         * <p>?????????????????? role.relation("roles")</p>
         *
         * @return {Bmob.Relation} the relation for the roles belonging to this
         *     role.
         */
            getRoles: function () {
                return this.relation("roles");
            },

            /**
         * @ignore
         */
            validate: function (attrs, options) {
                if ("name" in attrs && attrs.name !== this.getName()) {
                    var newName = attrs.name;
                    if (this.id && this.id !== attrs.objectId) {
                        // Check to see if the objectId being set matches this.id.
                        // This happens during a fetch -- the id is set before calling fetch.
                        // Let the name be set in this case.
                        return new Bmob.Error(Bmob.Error.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                    }
                    if (!_.isString(newName)) {
                        return new Bmob.Error(Bmob.Error.OTHER_CAUSE, "A role's name must be a String.");
                    }
                    if (!(/^[0-9a-zA-Z\-_ ]+$/).test(newName)) {
                        return new Bmob.Error(Bmob.Error.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _," + " -, and spaces.");
                    }
                }
                if (Bmob.Object.prototype.validate) {
                    return Bmob.Object.prototype.validate.call(this, attrs, options);
                }
                return false;
            }
        });

    /**
   *??????model???options??????????????????????????????????????????????????????????????????<code>Bmob.Collection.extend</code>???????????????*????????????
   * @param {Array} <code>Bmob.Object</code>??????.
   *
   * @param {Object} options  Backbone-style options ?????????options object.
   * ????????? options<ul>
   *   <li>model: Bmob.Object
   *   <li>query: Bmob.Query
   *   <li>comparator: ???????????????????????????
   * </ul>
   *
   * @see Bmob.Collection.extend
   *
   *
   * <p>??????????????? collection class??? ????????????????????????
   * <a href="http://documentcloud.github.com/backbone/#Collection">Backbone
   * documentation</a>.</p>
   */
    Bmob.Collection = function (models, options) {
        options = options || {};
        if (options.comparator) {
            this.comparator = options.comparator;
        }
        if (options.model) {
            this.model = options.model;
        }
        if (options.query) {
            this.query = options.query;
        }
        this._reset();
        this.initialize.apply(this, arguments);
        if (models) {
            this.reset(models, {
                silent: true,
                parse: options.parse
            });
        }
    };

    // Define the Collection's inheritable methods.
    _.extend(Bmob.Collection.prototype, Bmob.Events,
        /** @lends Bmob.Collection.prototype */
        {

            // The default model for a collection is just a Bmob.Object.
            // This should be overridden in most cases.
            model: Bmob.Object,

            /**
         * Initialize ??????????????????. ??????????????????????????????????????????
         */
            initialize: function () { },

            /**
         *
         * json ?????????models'????????????
         */
            toJSON: function () {
                return this.map(function (model) {
                    return model.toJSON();
                });
            },

            /**
         * ??????model??????????????????????????????????????????**silent**????????????`add`?????????
         */
            add: function (models, options) {
                var i, index, length, model, cid, id, cids = {},
                    ids = {};
                options = options || {};
                models = _.isArray(models) ? models.slice() : [models];

                // Begin by turning bare objects into model references, and preventing
                // invalid models or duplicate models from being added.
                for (i = 0, length = models.length; i < length; i++) {
                    models[i] = this._prepareModel(models[i], options);
                    model = models[i];
                    if (!model) {
                        throw new Error("Can't add an invalid model to a collection");
                    }
                    cid = model.cid;
                    if (cids[cid] || this._byCid[cid]) {
                        throw new Error("Duplicate cid: can't add the same model " + "to a collection twice");
                    }
                    id = model.id;
                    if (!Bmob._isNullOrUndefined(id) && (ids[id] || this._byId[id])) {
                        throw new Error("Duplicate id: can't add the same model " + "to a collection twice");
                    }
                    ids[id] = model;
                    cids[cid] = model;
                }

                // Listen to added models' events, and index models for lookup by
                // `id` and by `cid`.
                for (i = 0; i < length; i++) {
                    (model = models[i]).on('all', this._onModelEvent, this);
                    this._byCid[model.cid] = model;
                    if (model.id) {
                        this._byId[model.id] = model;
                    }
                }

                // Insert models into the collection, re-sorting if needed, and triggering
                // `add` events unless silenced.
                this.length += length;
                index = Bmob._isNullOrUndefined(options.at) ? this.models.length : options.at;
                this.models.splice.apply(this.models, [index, 0].concat(models));
                if (this.comparator) {
                    this.sort({
                        silent: true
                    });
                }
                if (options.silent) {
                    return this;
                }
                for (i = 0, length = this.models.length; i < length; i++) {
                    model = this.models[i];
                    if (cids[model.cid]) {
                        options.index = i;
                        model.trigger('add', model, this, options);
                    }
                }
                return this;
            },

            /**
         * ????????????model????????????????????????????????????models??????????????????????????????silent????????????<code>remove</code>?????????
         */
            remove: function (models, options) {
                var i, l, index, model;
                options = options || {};
                models = _.isArray(models) ? models.slice() : [models];
                for (i = 0, l = models.length; i < l; i++) {
                    model = this.getByCid(models[i]) || this.get(models[i]);
                    if (!model) {
                        continue;
                    }
                    delete this._byId[model.id];
                    delete this._byCid[model.cid];
                    index = this.indexOf(model);
                    this.models.splice(index, 1);
                    this.length--;
                    if (!options.silent) {
                        options.index = index;
                        model.trigger('remove', model, this, options);
                    }
                    this._removeReference(model);
                }
                return this;
            },

            /**
         * ??????id????????????model
         */
            get: function (id) {
                return id && this._byId[id.id || id];
            },

            /**
         * ??????client id????????????model
         */
            getByCid: function (cid) {
                return cid && this._byCid[cid.cid || cid];
            },

            /**
         * ????????????????????????model
         */
            at: function (index) {
                return this.models[index];
            },

            /**
         * ??????collection??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
         */
            sort: function (options) {
                options = options || {};
                if (!this.comparator) {
                    throw new Error('Cannot sort a set without a comparator');
                }
                var boundComparator = _.bind(this.comparator, this);
                if (this.comparator.length === 1) {
                    this.models = this.sortBy(boundComparator);
                } else {
                    this.models.sort(boundComparator);
                }
                if (!options.silent) {
                    this.trigger('reset', this, options);
                }
                return this;
            },

            /**
         * ????????????????????????????????????
         */
            pluck: function (attr) {
                return _.map(this.models,
                    function (model) {
                        return model.get(attr);
                    });
            },

            /**
         * When you have more items than you want to add or remove individually,
         * you can reset the entire set with a new list of models, without firing
         * any `add` or `remove` events. Fires `reset` when finished.
         */
            reset: function (models, options) {
                var self = this;
                models = models || [];
                options = options || {};
                Bmob._arrayEach(this.models,
                    function (model) {
                        self._removeReference(model);
                    });
                this._reset();
                this.add(models, {
                    silent: true,
                    parse: options.parse
                });
                if (!options.silent) {
                    this.trigger('reset', this, options);
                }
                return this;
            },

            /**
         * Fetches the default set of models for this collection, resetting the
         * collection when they arrive. If `add: true` is passed, appends the
         * models to the collection instead of resetting.
         */
            fetch: function (options) {
                options = _.clone(options) || {};
                if (options.parse === undefined) {
                    options.parse = true;
                }
                var collection = this;
                var query = this.query || new Bmob.Query(this.model);
                return query.find().then(function (results) {
                    if (options.add) {
                        collection.add(results, options);
                    } else {
                        collection.reset(results, options);
                    }
                    return collection;
                })._thenRunCallbacks(options, this);
            },

            /**
         * Creates a new instance of a model in this collection. Add the model to
         * the collection immediately, unless `wait: true` is passed, in which case
         * we wait for the server to agree.
         */
            create: function (model, options) {
                var coll = this;
                options = options ? _.clone(options) : {};
                model = this._prepareModel(model, options);
                if (!model) {
                    return false;
                }
                if (!options.wait) {
                    coll.add(model, options);
                }
                var success = options.success;
                options.success = function (nextModel, resp, xhr) {
                    if (options.wait) {
                        coll.add(nextModel, options);
                    }
                    if (success) {
                        success(nextModel, resp);
                    } else {
                        nextModel.trigger('sync', model, resp, options);
                    }
                };
                model.save(null, options);
                return model;
            },

            /**
         * Converts a response into a list of models to be added to the collection.
         * The default implementation is just to pass it through.
         * @ignore
         */
            parse: function (resp, xhr) {
                return resp;
            },

            /**
         * Proxy to _'s chain. Can't be proxied the same way the rest of the
         * underscore methods are proxied because it relies on the underscore
         * constructor.
         */
            chain: function () {
                return _(this.models).chain();
            },

            /**
         * Reset all internal state. Called when the collection is reset.
         */
            _reset: function (options) {
                this.length = 0;
                this.models = [];
                this._byId = {};
                this._byCid = {};
            },

            /**
         * Prepare a model or hash of attributes to be added to this collection.
         */
            _prepareModel: function (model, options) {
                if (!(model instanceof Bmob.Object)) {
                    var attrs = model;
                    options.collection = this;
                    model = new this.model(attrs, options);
                    if (!model._validate(model.attributes, options)) {
                        model = false;
                    }
                } else if (!model.collection) {
                    model.collection = this;
                }
                return model;
            },

            /**
         * Internal method to remove a model's ties to a collection.
         */
            _removeReference: function (model) {
                if (this === model.collection) {
                    delete model.collection;
                }
                model.off('all', this._onModelEvent, this);
            },

            /**
         * Internal method called every time a model in the set fires an event.
         * Sets need to update their indexes when models change ids. All other
         * events simply proxy through. "add" and "remove" events that originate
         * in other collections are ignored.
         */
            _onModelEvent: function (ev, model, collection, options) {
                if ((ev === 'add' || ev === 'remove') && collection !== this) {
                    return;
                }
                if (ev === 'destroy') {
                    this.remove(model, options);
                }
                if (model && ev === 'change:objectId') {
                    delete this._byId[model.previous("objectId")];
                    this._byId[model.id] = model;
                }
                this.trigger.apply(this, arguments);
            }

        });

    // Underscore methods that we want to implement on the Collection.
    var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex', 'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

    // Mix in each Underscore method as a proxy to `Collection#models`.
    Bmob._arrayEach(methods,
        function (method) {
            Bmob.Collection.prototype[method] = function () {
                return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
            };
        });

    /**
   * Creates a new subclass of <code>Bmob.Collection</code>.  For example,<pre>
   *   var MyCollection = Bmob.Collection.extend({
   *     // Instance properties
   *
   *     model: MyClass,
   *     query: MyQuery,
   *
   *     getFirst: function() {
   *       return this.at(0);
   *     }
   *   }, {
   *     // Class properties
   *
   *     makeOne: function() {
   *       return new MyCollection();
   *     }
   *   });
   *
   *   var collection = new MyCollection();
   * </pre>
   *
   * @function
   * @param {Object} instanceProps Instance properties for the collection.
   * @param {Object} classProps Class properies for the collection.
   * @return {Class} A new subclass of <code>Bmob.Collection</code>.
   */
    Bmob.Collection.extend = Bmob._extend;

    /**
   * Creating a Bmob.View creates its initial element outside of the DOM,
   * if an existing element is not provided...
   *
   * <p>A fork of Backbone.View, provided for your convenience.  If you use this
   * class, you must also include jQuery, or another library that provides a
   * jQuery-compatible $ function.  For more information, see the
   * <a href="http://documentcloud.github.com/backbone/#View">Backbone
   * documentation</a>.</p>
   * <p><strong><em>Available in the client SDK only.</em></strong></p>
   */
    Bmob.View = function (options) {
        this.cid = _.uniqueId('view');
        this._configure(options || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };

    // Cached regex to split keys for `delegate`.
    var eventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

    // Set up all inheritable **Bmob.View** properties and methods.
    _.extend(Bmob.View.prototype, Bmob.Events,
        /** @lends Bmob.View.prototype */
        {

            // The default `tagName` of a View's element is `"div"`.
            tagName: 'div',

            /**
         * jQuery delegate for element lookup, scoped to DOM elements within the
         * current view. This should be prefered to global lookups where possible.
         */
            $: function (selector) {
                return this.$el.find(selector);
            },

            /**
         * Initialize is an empty function by default. Override it with your own
         * initialization logic.
         */
            initialize: function () { },

            /**
         * The core function that your view should override, in order
         * to populate its element (`this.el`), with the appropriate HTML. The
         * convention is for **render** to always return `this`.
         */
            render: function () {
                return this;
            },

            /**
         * Remove this view from the DOM. Note that the view isn't present in the
         * DOM by default, so calling this method may be a no-op.
         */
            remove: function () {
                this.$el.remove();
                return this;
            },

            /**
         * For small amounts of DOM Elements, where a full-blown template isn't
         * needed, use **make** to manufacture elements, one at a time.
         * <pre>
         *     var el = this.make('li', {'class': 'row'},
         *                        this.model.escape('title'));</pre>
         */
            make: function (tagName, attributes, content) {
                var el = document.createElement(tagName);
                if (attributes) {
                    Bmob.$(el).attr(attributes);
                }
                if (content) {
                    Bmob.$(el).html(content);
                }
                return el;
            },

            /**
         * Changes the view's element (`this.el` property), including event
         * re-delegation.
         */
            setElement: function (element, delegate) {
                this.$el = Bmob.$(element);
                this.el = this.$el[0];
                if (delegate !== false) {
                    this.delegateEvents();
                }
                return this;
            },

            /**
         * Set callbacks.  <code>this.events</code> is a hash of
         * <pre>
         * *{"event selector": "callback"}*
         *
         *     {
         *       'mousedown .title':  'edit',
         *       'click .button':     'save'
         *       'click .open':       function(e) { ... }
         *     }
         * </pre>
         * pairs. Callbacks will be bound to the view, with `this` set properly.
         * Uses event delegation for efficiency.
         * Omitting the selector binds the event to `this.el`.
         * This only works for delegate-able events: not `focus`, `blur`, and
         * not `change`, `submit`, and `reset` in Internet Explorer.
         */
            delegateEvents: function (events) {
                events = events || Bmob._getValue(this, 'events');
                if (!events) {
                    return;
                }
                this.undelegateEvents();
                var self = this;
                Bmob._objectEach(events,
                    function (method, key) {
                        if (!_.isFunction(method)) {
                            method = self[events[key]];
                        }
                        if (!method) {
                            throw new Error('Event "' + events[key] + '" does not exist');
                        }
                        var match = key.match(eventSplitter);
                        var eventName = match[1],
                            selector = match[2];
                        method = _.bind(method, self);
                        eventName += '.delegateEvents' + self.cid;
                        if (selector === '') {
                            self.$el.bind(eventName, method);
                        } else {
                            self.$el.delegate(selector, eventName, method);
                        }
                    });
            },

            /**
         * Clears all callbacks previously bound to the view with `delegateEvents`.
         * You usually don't need to use this, but may wish to if you have multiple
         * Backbone views attached to the same DOM element.
         */
            undelegateEvents: function () {
                this.$el.unbind('.delegateEvents' + this.cid);
            },

            /**
         * Performs the initial configuration of a View with a set of options.
         * Keys with special meaning *(model, collection, id, className)*, are
         * attached directly to the view.
         */
            _configure: function (options) {
                if (this.options) {
                    options = _.extend({},
                        this.options, options);
                }
                var self = this;
                _.each(viewOptions,
                    function (attr) {
                        if (options[attr]) {
                            self[attr] = options[attr];
                        }
                    });
                this.options = options;
            },

            /**
         * Ensure that the View has a DOM element to render into.
         * If `this.el` is a string, pass it through `$()`, take the first
         * matching element, and re-assign it to `el`. Otherwise, create
         * an element from the `id`, `className` and `tagName` properties.
         */
            _ensureElement: function () {
                if (!this.el) {
                    var attrs = Bmob._getValue(this, 'attributes') || {};
                    if (this.id) {
                        attrs.id = this.id;
                    }
                    if (this.className) {
                        attrs['class'] = this.className;
                    }
                    this.setElement(this.make(this.tagName, attrs), false);
                } else {
                    this.setElement(this.el, false);
                }
            }

        });

    /**
   * @function
   * @param {Object} instanceProps Instance properties for the view.
   * @param {Object} classProps Class properies for the view.
   * @return {Class} A new subclass of <code>Bmob.View</code>.
   */
    Bmob.View.extend = Bmob._extend;

    /**
   * @class
   *
   * <p>????????????Bmob.Object????????????????????????Bmob.Object?????????????????????????????????????????????????????????????????????????????????</p>
   */
    Bmob.User = Bmob.Object.extend("_User",
        /** @lends Bmob.User.prototype */
        {
            // Instance Variables
            _isCurrentUser: false,

            // Instance Methods
            /**
         * Internal method to handle special fields in a _User response.
         */
            _mergeMagicFields: function (attrs) {
                if (attrs.sessionToken) {
                    this._sessionToken = attrs.sessionToken;
                    delete attrs.sessionToken;
                }
                Bmob.User.__super__._mergeMagicFields.call(this, attrs);
            },

            /**
         * Removes null values from authData (which exist temporarily for
         * unlinking)
         */
            _cleanupAuthData: function () {
                if (!this.isCurrent()) {
                    return;
                }
                var authData = this.get('authData');
                if (!authData) {
                    return;
                }
                Bmob._objectEach(this.get('authData'),
                    function (value, key) {
                        if (!authData[key]) {
                            delete authData[key];
                        }
                    });
            },

            /**
         * Synchronizes authData for all providers.
         */
            _synchronizeAllAuthData: function () {
                var authData = this.get('authData');
                if (!authData) {
                    return;
                }

                var self = this;
                Bmob._objectEach(this.get('authData'),
                    function (value, key) {
                        self._synchronizeAuthData(key);
                    });
            },

            /**
         * Synchronizes auth data for a provider (e.g. puts the access token in the
         * right place to be used by the Facebook SDK).
         */
            _synchronizeAuthData: function (provider) {
                if (!this.isCurrent()) {
                    return;
                }
                var authType;
                if (_.isString(provider)) {
                    authType = provider;
                    provider = Bmob.User._authProviders[authType];
                } else {
                    authType = provider.getAuthType();
                }
                var authData = this.get('authData');
                if (!authData || !provider) {
                    return;
                }
                var success = provider.restoreAuthentication(authData[authType]);
                if (!success) {
                    this._unlinkFrom(provider);
                }
            },

            _handleSaveResult: function (makeCurrent) {
                // Clean up and synchronize the authData object, removing any unset values
                if (makeCurrent) {
                    this._isCurrentUser = true;
                }
                this._cleanupAuthData();
                this._synchronizeAllAuthData();
                // Don't keep the password around.
                delete this._serverData.password;
                this._rebuildEstimatedDataForKey("password");
                this._refreshCache();
                if (makeCurrent || this.isCurrent()) {
                    Bmob.User._saveCurrentUser(this);
                }

            },


            /**
            * ???????????????????????????????????????
            * @Magic 2.0.0
            * @return {Bmob.User}
            */
            _linkWith: function _linkWith(provider, data) {
                var _this = this;

                var authType;
                if (_.isString(provider)) {
                    authType = provider;
                    provider = Bmob.User._authProviders[provider];
                } else {
                    authType = provider.getAuthType();
                }
                if (data) {
                    var authData = this.get('authData') || {};
                    authData[authType] = data;
                    this.set('authData', authData);

                    var promise = new Bmob.Promise();
                    this.save({
                        'authData': authData
                    }, newOptions).then(
                        function (model) {
                            model._handleSaveResult(true);
                            promise.resolve(model);
                        }
                    );


                    return promise._thenRunCallbacks({});

                    // Overridden so that the user can be made the current user.
                    var newOptions = _.clone(data) || {};
                    newOptions.success = function (model) {
                        model._handleSaveResult(true);
                        if (data.success) {
                            data.success.apply(this, arguments);
                        }
                    };

                    return this.save({
                        'authData': authData
                    },
                        newOptions);
                } else {
                    return provider.authenticate().then(function (result) {
                        return _this._linkWith(provider, result);
                    });
                }
            },

            /**
             * ???????????????????????????????????????????????????????????????????????????????????? session ??????????????????????????????????????????????????? Bmob.User.current() ???????????????????????????
             * @Magic 2.0.0
             * @return {Bmob.User}
             */
            loginWithWeapp: function (code) {
                var that = this;
                var promise = new Bmob.Promise();
                Bmob.User.requestOpenId(code, {
                    success: function (authData) {//??????????????????
                        if (authData.errcode) {
                            console.log("????????????,?????????", authData, '?????????Bmob?????????????????????appId')
                            promise.reject(authData);
                        }
                        var platform = "weapp";
                        var user = Bmob.Object._create("_User");
                        user._linkWith(platform, authData).then(function (resp) {
                            promise.resolve(resp);
                        }, function (error) {
                            promise.reject(error);
                        });

                    },
                    error: function (error) {
                        promise.reject(error);
                    }
                }

                );
                return promise._thenRunCallbacks({});

            },
            getUserInfo: function (userInfo) {
                // var userInfo = result.userInfo
                console.log(userInfo)
                var nickName = userInfo.nickName
                var avatarUrl = userInfo.avatarUrl
                var u = Bmob.Object.extend('_User')
                var query = new Bmob.Query(u)

                var currentUser = Bmob.User.current()
                if (!currentUser) {
                    console.log('????????????????????????')
                }
                var openid = wx.getStorageSync('openid')
                console.log(openid)
                query.get(currentUser.id, {
                    success: function (result) {
                        result.set('nickName', nickName)
                        result.set('userPic', avatarUrl)
                        result.set('openid', openid)
                        result.save().then((res) => {
                            // var currentUser = Bmob.User.current()
                            currentUser.set('nickName', nickName)
                            currentUser.set('userPic', avatarUrl)
                            Bmob.User._saveCurrentUser(currentUser)
                        })
                    }
                })

            },
            auth: function () {
                var that = this;
                var promise = new Bmob.Promise();
                wx.checkSession({
                    success: function () {
                        //session ????????????????????????????????????????????????
                        console.log('?????????')
                    },
                    fail: function () {
                        wx.login({
                            success: function (res) {

                                that.loginWithWeapp(res.code).then(
                                    function (user) {

                                        var openid = user.get('authData').weapp.openid
                                        wx.setStorageSync('openid', openid)
                                        //????????????????????????????????????
                                        promise.resolve(user);
                                    },
                                    function (err) {
                                        promise.reject(err);
                                    }
                                )
                            }
                        })
                    }
                })
                return promise._thenRunCallbacks({});
            },


            /**
         * Unlinks a user from a service.
         */
            _unlinkFrom: function (provider, options) {
                var authType;
                if (_.isString(provider)) {
                    authType = provider;
                    provider = Bmob.User._authProviders[provider];
                } else {
                    authType = provider.getAuthType();
                }
                var newOptions = _.clone(options);
                var self = this;
                newOptions.authData = null;
                newOptions.success = function (model) {
                    self._synchronizeAuthData(provider);
                    if (options.success) {
                        options.success.apply(this, arguments);
                    }
                };
                return this._linkWith(provider, newOptions);
            },

            /**
         * Checks whether a user is linked to a service.
         */
            _isLinked: function (provider) {
                var authType;
                if (_.isString(provider)) {
                    authType = provider;
                } else {
                    authType = provider.getAuthType();
                }
                var authData = this.get('authData') || {};
                return !!authData[authType];
            },

            /**
         * Deauthenticates all providers.
         */
            _logOutWithAll: function () {
                var authData = this.get('authData');
                if (!authData) {
                    return;
                }
                var self = this;
                Bmob._objectEach(this.get('authData'),
                    function (value, key) {
                        self._logOutWith(key);
                    });
            },

            /**
         * Deauthenticates a single provider (e.g. removing access tokens from the
         * Facebook SDK).
         */
            _logOutWith: function (provider) {
                if (!this.isCurrent()) {
                    return;
                }
                if (_.isString(provider)) {
                    provider = Bmob.User._authProviders[provider];
                }
                if (provider && provider.deauthenticate) {
                    provider.deauthenticate();
                }
            },

            /**
         * ???????????????????????????????????????????????????????????????????????????????????????save??????????????????????????????
         * ????????????Bmob.User??????????????????????????????session????????????????????????????????????<code>current</code>??????user
         * <p>????????????????????????username???password</p>
         * <p>???????????????options.success ?????? options.error</p>
         *
         * @param {Object} attrs ?????????????????????????????????null
         * @param {Object} options Backbone-style options ?????????
         * @return {Bmob.Promise} ???????????????????????????promise???
         * @see Bmob.User.signUp
         */
            signUp: function (attrs, options) {
                var error;
                options = options || {};

                var username = (attrs && attrs.username) || this.get("username");
                if (!username || (username === "")) {
                    error = new Bmob.Error(Bmob.Error.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    if (options && options.error) {
                        options.error(this, error);
                    }
                    return Bmob.Promise.error(error);
                }

                var password = (attrs && attrs.password) || this.get("password");
                if (!password || (password === "")) {
                    error = new Bmob.Error(Bmob.Error.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    if (options && options.error) {
                        options.error(this, error);
                    }
                    return Bmob.Promise.error(error);
                }

                // Overridden so that the user can be made the current user.
                var newOptions = _.clone(options);
                newOptions.success = function (model) {
                    model._handleSaveResult(true);
                    if (options.success) {
                        options.success.apply(this, arguments);
                    }
                };
                return this.save(attrs, newOptions);
            },

            /**
         * ?????????????????????????????????????????????session????????????????????????<code>current</code>?????????????????????
         * <p>????????????????????????username???password</p>
         * <p>???????????????options.success ?????? options.error</p>
         *
         * @param {Object} options  Backbone-style options ?????????
         * @see Bmob.User.logIn
         * @return {Bmob.Promise} ???????????????????????????promise???
         */
            logIn: function (options) {
                var model = this;
                var request = Bmob._request("login", null, null, "GET", this.toJSON());
                return request.then(function (resp, status, xhr) {
                    var serverAttrs = model.parse(resp, status, xhr);
                    model._finishFetch(serverAttrs);
                    model._handleSaveResult(true);
                    return model;
                })._thenRunCallbacks(options, this);
            },

            /**
         * ????????????
         * @see Bmob.Object#save
         */
            save: function (arg1, arg2, arg3) {
                var i, attrs, current, options, saved;
                if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
                    attrs = arg1;
                    options = arg2;
                } else {
                    attrs = {};
                    attrs[arg1] = arg2;
                    options = arg3;
                }
                options = options || {};

                var newOptions = _.clone(options);
                newOptions.success = function (model) {
                    model._handleSaveResult(false);
                    if (options.success) {
                        options.success.apply(this, arguments);
                    }
                };
                return Bmob.Object.prototype.save.call(this, attrs, newOptions);
            },

            /**
         * ??????????????????
         * @see Bmob.Object#fetch
         */
            fetch: function (options) {
                var newOptions = options ? _.clone(options) : {};
                newOptions.success = function (model) {
                    model._handleSaveResult(false);
                    if (options && options.success) {
                        options.success.apply(this, arguments);
                    }
                };
                return Bmob.Object.prototype.fetch.call(this, newOptions);
            },

            /**
         * ??????true ??????<code>current</code>??????????????????user???
         * @see Bmob.User#cu ?????????????????????????????????Bmob.Object????????????
         */
            isCurrent: function () {
                return this._isCurrentUser;
            },

            /**
         * ?????? get("username").
         * @return {String}
         * @see Bmob.Object#get
         */
            getUsername: function () {
                return this.get("username");
            },

            /**
         * ?????? set("username", username, options) ??????????????????
         * @param {String} username
         * @param {Object} options Backbone-style options ?????????
         * @return {Boolean}
         * @see Bmob.Object.set
         */
            setUsername: function (username, options) {
                return this.set("username", username, options);
            },

            /**
         * ?????? set("password", password, options) ??????????????????
         * @param {String} password
         * @param {Object} options Backbone-style options ?????????
         * @return {Boolean}
         * @see Bmob.Object.set
         */
            setPassword: function (password, options) {
                return this.set("password", password, options);
            },

            /**
         * ?????? get("email").
         * @return {String}
         * @see Bmob.Object#get
         */
            getEmail: function () {
                return this.get("email");
            },

            /**
         * ?????? set("email", email, options) ??????????????????
         * @param {String} email
         * @param {Object} options Backbone-style options ?????????
         * @return {Boolean}
         * @see Bmob.Object.set
         */
            setEmail: function (email, options) {
                return this.set("email", email, options);
            },

            /**
         * ?????????????????????????????????????????????????????????
         * @return (Boolean) ???????????????????????????????????????????????????
         */
            authenticated: function () {
                return !!this._sessionToken && (Bmob.User.current() && Bmob.User.current().id === this.id);
            }

        },
        /** @lends Bmob.User */
        {
            // Class Variables
            // The currently logged-in user.
            _currentUser: null,

            // Whether currentUser is known to match the serialized version on disk.
            // This is useful for saving a localstorage check if you try to load
            // _currentUser frequently while there is none stored.
            _currentUserMatchesDisk: false,

            // The localStorage key suffix that the current user is stored under.
            _CURRENT_USER_KEY: "currentUser",

            // The mapping of auth provider names to actual providers
            _authProviders: {},

            // Class Methods
            /**
         * ???????????????????????????????????????????????????????????????????????????????????????save??????????????????????????????
         * ????????????Bmob.User??????????????????????????????session????????????????????????????????????<code>current</code>??????user
         *
         * <p>???????????????options.success ?????? options.error</p>
         *
         * @param {String} username ?????????????????????email
         * @param {String} password ???????????????
         * @param {Object} attrs ?????????????????????????????????
         * @param {Object} options Backbone-style options ?????????
         * @return {Bmob.Promise} ???????????????????????????promise???
         * @see Bmob.User#signUp
         */
            signUp: function (username, password, attrs, options) {
                attrs = attrs || {};
                attrs.username = username;
                attrs.password = password;
                var user = Bmob.Object._create("_User");
                return user.signUp(attrs, options);
            },

            /**
         * ?????????????????????????????????????????????session????????????????????????<code>current</code>?????????????????????
         *
         * <p>???????????????options.success ?????? options.error</p>
         *
         * @param {String} username ?????????????????????email
         * @param {String} password ???????????????
         * @param {Object} options ?????????????????????????????????
         * @return {Bmob.Promise} Backbone-style options ?????????
         * @see Bmob.User#logIn
         */
            logIn: function (username, password, options) {
                var user = Bmob.Object._create("_User");
                user._finishFetch({
                    username: username,
                    password: password
                });
                return user.logIn(options);
            },

            /**
         * ??????????????????????????????????????????session????????????????????????<code>current</code>??????
         * ??????<code>null</code>???
         */
            logOut: function () {
                if (Bmob.User._currentUser !== null) {
                    Bmob.User._currentUser._logOutWithAll();
                    Bmob.User._currentUser._isCurrentUser = false;
                }
                Bmob.User._currentUserMatchesDisk = true;
                Bmob.User._currentUser = null;

                wx.removeStorage({
                    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
                    success: function (res) {
                        console.log(res.data)
                    }
                });
            },

            /**

         * ??????????????????????????????????????????????????????????????????????????????bmob????????????????????????
         * <p>???????????????options.success ?????? options.error</p>
         *
         * @param {String} email ?????????????????????
         * @param {Object} options Backbone-style options ?????????
         */
            requestPasswordReset: function (email, options) {
                var json = {
                    email: email
                };
                var request = Bmob._request("requestPasswordReset", null, null, "POST", json);
                return request._thenRunCallbacks(options);
            },

            /**
         * ????????????email
         * <p>???????????????options.success ?????? options.error</p>
         *
         * @param {String} email ????????????email???email?????????
         * @param {Object} options Backbone-style options ?????????
         */
            requestEmailVerify: function (email, options) {
                var json = {
                    email: email
                };
                var request = Bmob._request("requestEmailVerify", null, null, "POST", json);
                return request._thenRunCallbacks(options);
            },

            /**
         * ??????openid???
         * <p>???????????????options.success ?????? options.error</p>
         *
         * @param {String} code ?????????code
         * @param {Object} options Backbone-style options ?????????
         */
            requestOpenId: function (code, options) {
                var json = {
                    code: code
                };
                var request = Bmob._request("wechatApp", code, null, "POST", json);
                return request._thenRunCallbacks(options);
            },

            /**
         * ????????????????????????????????????
         * @return {Bmob.Object} ???????????????Bmob.User.
         */
            current: function () {
                if (Bmob.User._currentUser) {
                    return Bmob.User._currentUser;
                }

                if (Bmob.User._currentUserMatchesDisk) {

                    return Bmob.User._currentUser;
                }

                // Load the user from local storage.
                Bmob.User._currentUserMatchesDisk = true;

                // var userData = Bmob.localStorage.getItem(Bmob._getBmobPath(
                //     Bmob.User._CURRENT_USER_KEY));
                var userData = false;
                try {
                    var userData = wx.getStorageSync(Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY))
                    if (userData) {
                        // Do something with return value
                        Bmob.User._currentUser = Bmob.Object._create("_User");
                        Bmob.User._currentUser._isCurrentUser = true;

                        var json = JSON.parse(userData);
                        Bmob.User._currentUser.id = json._id;
                        delete json._id;
                        Bmob.User._currentUser._sessionToken = json._sessionToken;
                        delete json._sessionToken;
                        Bmob.User._currentUser.set(json);

                        Bmob.User._currentUser._synchronizeAllAuthData();
                        Bmob.User._currentUser._refreshCache();
                        Bmob.User._currentUser._opSetQueue = [{}];
                        return Bmob.User._currentUser;
                    }
                } catch (e) {
                    // Do something when catch error
                    return null;
                }
            },

            /**
         * Persists a user as currentUser to localStorage, and into the singleton.
         */
            _saveCurrentUser: function (user) {
                if (Bmob.User._currentUser !== user) {
                    Bmob.User.logOut();
                }
                user._isCurrentUser = true;
                Bmob.User._currentUser = user;
                Bmob.User._currentUserMatchesDisk = true;

                var json = user.toJSON();
                json._id = user.id;
                json._sessionToken = user._sessionToken;
                wx.setStorage({
                    key: Bmob._getBmobPath(Bmob.User._CURRENT_USER_KEY),
                    data: JSON.stringify(json)
                })
            },

            _registerAuthenticationProvider: function (provider) {
                Bmob.User._authProviders[provider.getAuthType()] = provider;
                // Synchronize the current user with the auth provider.
                if (Bmob.User.current()) {
                    Bmob.User.current()._synchronizeAuthData(provider.getAuthType());
                }
            },

            _logInWith: function (provider, options) {
                var user = Bmob.Object._create("_User");
                return user._linkWith(provider, options);
            }

        });

    /**
   * ???Bmob.Object?????????????????????bmob Bmob.Query ???
   * @param objectClass -
   *   Bmob.Object??????????????????Bmob??????
   *
   *
   * <p>Bmob.Query ???Bmob.Objects?????????query????????????????????????????????????query<code>find</code>
   * ?????????????????????????????????????????????????????????????????????????????????<code>MyClass</code>????????????????????????????????????
   * ???????????????????????????
   * <pre>
   * var query = new Bmob.Query(MyClass);
   * query.find({
   *   success: function(results) {
   *     // results is an array of Bmob.Object.
   *   },
   *
   *   error: function(error) {
   *     // error is an instance of Bmob.Error.
   *   }
   * });</pre></p>
   *
   * <p>Bmob.Query???????????????????????????id???????????????????????????????????????????????????<code>MyClass</code> ??? id <code>myId</code>
   * ????????????????????????????????????????????????????????????
   * <pre>
   * var query = new Bmob.Query(MyClass);
   * query.get(myId, {
   *   success: function(object) {
   *     // object is an instance of Bmob.Object.
   *   },
   *
   *   error: function(object, error) {
   *     // error is an instance of Bmob.Error.
   *   }
   * });</pre></p>
   *
   * <p>Bmob.Query ???????????????????????????????????????????????????????????????????????????<code>MyClass</code>?????????<pre>
   * var query = new Bmob.Query(MyClass);
   * query.count({
   *   success: function(number) {
   *     // There are number instances of MyClass.
   *   },
   *
   *   error: function(error) {
   *     // error is an instance of Bmob.Error.
   *   }
   * });</pre></p>

   * @class Bmob.Query ???Bmob.Objects?????????query??????
   */
    Bmob.Query = function (objectClass) {
        if (_.isString(objectClass)) {
            objectClass = Bmob.Object._getSubclass(objectClass);
        }

        this.objectClass = objectClass;

        this.className = objectClass.prototype.className;

        this._where = {};
        this._include = [];
        this._limit = -1; // negative limit means, do not send a limit
        this._skip = 0;
        this._extraOptions = {};
    };

    /**
   * ????????????query??????or???Bmob.Query?????????  For
   * example:
   * <pre>var compoundQuery = Bmob.Query.or(query1, query2, query3);</pre>
   * ??????query1, query2, ??? query3????????????or??????
   * @param {...Bmob.Query} var_args or???query??????.
   * @return {Bmob.Query} ????????????.
   */
    Bmob.Query.or = function () {
        var queries = _.toArray(arguments);
        var className = null;
        Bmob._arrayEach(queries,
            function (q) {
                if (_.isNull(className)) {
                    className = q.className;
                }

                if (className !== q.className) {
                    throw "All queries must be for the same class";
                }
            });
        var query = new Bmob.Query(className);
        query._orQuery(queries);
        return query;
    };

    Bmob.Query.Bql = function (bql, pvalues, options) {
        var params = { bql: bql };
        if (_.isArray(pvalues)) {
            params.pvalues = pvalues;
        } else {
            options = pvalues;
        }

        var request = Bmob._request('cloudQuery', null, null, 'GET', params, options);
        return request.then(function (response) {
            //query to process results.
            var query = new Bmob.Query('bmob');
            var results = _.map(response.results, function (json) {
                var obj = query._newObject(response);
                if (obj._finishFetch) {
                    obj._finishFetch(query._processResult(json), true);
                }
                return obj;
            });
            return results;
        });
    };

    Bmob.Query._extend = Bmob._extend;

    Bmob.Query.prototype = {
        //hook to iterate result. Added by dennis<xzhuang@bmob.cn>.
        _processResult: function (obj) {
            return obj;
        },

        /**
     * ??????Bmob.Object????????????id????????????????????????????????????????????????options.success ??? options.error???
     * @param {} objectId ??????????????????id
     * @param {Object} options  Backbone-style options ??????.
     */
        get: function (objectId, options) {
            var self = this;
            self.equalTo('objectId', objectId);

            return self.first().then(function (response) {
                if (response) {
                    return response;
                }

                var errorObject = new Bmob.Error(Bmob.Error.OBJECT_NOT_FOUND, "Object not found.");
                return Bmob.Promise.error(errorObject);

            })._thenRunCallbacks(options, null);
        },

        /**
     * ??????json?????????
     * @return {Object}
     */
        toJSON: function () {
            var params = {
                where: this._where
            };

            if (this._include.length > 0) {
                params.include = this._include.join(",");
            }
            if (this._select) {
                params.keys = this._select.join(",");
            }
            if (this._limit >= 0) {
                params.limit = this._limit;
            }
            if (this._skip > 0) {
                params.skip = this._skip;
            }
            if (this._order !== undefined) {
                params.order = this._order;
            }

            Bmob._objectEach(this._extraOptions,
                function (v, k) {
                    params[k] = v;
                });

            return params;
        },

        _newObject: function (response) {
            if (typeof (obj) === "undefined") {
                var obj;
            }
            if (response && response.className) {
                obj = new Bmob.Object(response.className);
            } else {
                obj = new this.objectClass();
            }
            return obj;
        },
        _createRequest: function (params) {
            return Bmob._request("classes", this.className, null, "GET", params || this.toJSON());
        },

        /**
     * ????????????????????????????????????????????????options.success ??? options.error ???????????????
     * @param {Object} options A Backbone-style options ??????.
     * @return {Bmob.Promise} ?????????????????????????????? promise ???????????????
     */
        find: function (options) {
            var self = this;

            var request = this._createRequest();

            return request.then(function (response) {
                return _.map(response.results,
                    function (json) {
                        var obj = self._newObject(response);
                        obj._finishFetch(self._processResult(json), true);
                        return obj;
                    });
            })._thenRunCallbacks(options);
        },

        /**
    * 	????????????????????????????????????
    * @param {Object} options ???????????? success and error?????????options?????????
    * @return {Bmob.Promise}  ???????????????????????? promise ???????????????
    */
        destroyAll: function (options) {
            var self = this;
            return self.find().then(function (objects) {
                return Bmob.Object.destroyAll(objects);
            })._thenRunCallbacks(options);
        },

        /**
     * ????????????????????????
     * ????????????options.success ??? options.error ???????????????
     *
     * @param {Object} options A Backbone-style options ??????.
     * @return {Bmob.Promise} ????????????????????? promise ???????????????
     */
        count: function (options) {
            var params = this.toJSON();
            params.limit = 0;
            params.count = 1;
            var request = this._createRequest(params);

            return request.then(function (response) {
                return response.count;
            })._thenRunCallbacks(options);
        },

        /**
     * ?????????????????????????????????????????????
     * ????????????options.success ??? options.error ???????????????
     *
     * @param {Object} options A Backbone-style options ??????.
     * @return {Bmob.Promise} ????????????????????? promise ???????????????
     */
        first: function (options) {
            var self = this;

            var params = this.toJSON();
            params.limit = 1;
            var request = this._createRequest(params);

            return request.then(function (response) {
                return _.map(response.results,
                    function (json) {
                        var obj = self._newObject();
                        obj._finishFetch(self._processResult(json), true);
                        return obj;
                    })[0];
            })._thenRunCallbacks(options);
        },

        /**
     * ?????????????????????Bmob.Collection
     * @return {Bmob.Collection}
     */
        collection: function (items, options) {
            options = options || {};
            return new Bmob.Collection(items, _.extend(options, {
                model: this._objectClass || this.objectClass,
                query: this
            }));
        },

        /**
     * ??????????????????????????????????????????????????????????????????????????????????????????0????????????
     * @param {Number} n ??????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        skip: function (n) {
            this._skip = n;
            return this;
        },

        /**
     * ?????????????????????????????????????????????100?????????????????????1000.
     * @param {Number} n ??????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        limit: function (n) {
            this._limit = n;
            return this;
        },

        /**
     * ????????????equal?????????key value ????????????
     * @param {String} key key
     * @param value  key????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        equalTo: function (key, value) {
            this._where[key] = Bmob._encode(value);
            return this;
        },

        /**
     * Helper for condition queries
     */
        _addCondition: function (key, condition, value) {
            // Check if we already have a condition
            if (!this._where[key]) {
                this._where[key] = {};
            }
            this._where[key][condition] = Bmob._encode(value);
            return this;
        },

        /**
     * ????????????not equal?????????key value ????????????
     * @param {String} key key
     * @param value  key????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        notEqualTo: function (key, value) {
            this._addCondition(key, "$ne", value);
            return this;
        },

        /**
     * ???????????????????????????
     * @param {String} key ???????????????key.
     * @param value key??????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        lessThan: function (key, value) {
            this._addCondition(key, "$lt", value);
            return this;
        },

        /**
     * ???????????????????????????
     * @param {String} key ???????????????key.
     * @param value key??????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        greaterThan: function (key, value) {
            this._addCondition(key, "$gt", value);
            return this;
        },

        /**
     * ?????????????????????????????????
     * @param {String} key ???????????????key.
     * @param value key????????????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        lessThanOrEqualTo: function (key, value) {
            this._addCondition(key, "$lte", value);
            return this;
        },

        /**
     * ?????????????????????????????????
     * @param {String} key ???????????????key.
     * @param value key????????????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        greaterThanOrEqualTo: function (key, value) {
            this._addCondition(key, "$gte", value);
            return this;
        },

        /**
     * ??????key?????????????????????????????????
     * @param {String} key ???????????????key.
     * @param {Array} values ???????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        containedIn: function (key, values) {
            this._addCondition(key, "$in", values);
            return this;
        },

        /**
     * ??????key????????????????????????????????????
     * @param {String} key ???????????????key.
     * @param {Array} values ??????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        notContainedIn: function (key, values) {
            this._addCondition(key, "$nin", values);
            return this;
        },

        /**
     * ??????key???????????????????????????
     * @param {String} key ???????????????key
     * @param {Array} values ?????????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        containsAll: function (key, values) {
            this._addCondition(key, "$all", values);
            return this;
        },

        /**
     * ??????key????????????????????????
     * @param {String} key ???????????????????????????key???
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        exists: function (key) {
            this._addCondition(key, "$exists", true);
            return this;
        },

        /**
     * ??????key???????????????????????????
     * @param {String} key ??????????????????????????????key???
     * @return {Bmob.Query}??????????????????????????????????????????????????????
     */
        doesNotExist: function (key) {
            this._addCondition(key, "$exists", false);
            return this;
        },

        /**
     * ?????????????????????????????????
     * ???????????????????????????????????????????????????
     * @param {String} key ???????????????key
     * @param {RegExp} regex ??????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        matches: function (key, regex, modifiers) {
            this._addCondition(key, "$regex", regex);
            if (!modifiers) {
                modifiers = "";
            }
            // Javascript regex options support mig as inline options but store them
            // as properties of the object. We support mi & should migrate them to
            // modifiers
            if (regex.ignoreCase) {
                modifiers += 'i';
            }
            if (regex.multiline) {
                modifiers += 'm';
            }

            if (modifiers && modifiers.length) {
                this._addCondition(key, "$options", modifiers);
            }
            return this;
        },

        /**
     * ????????????Bmob.Query??????????????????
     * @param {String} key ???????????????key???
     * @param {Bmob.Query} query ???????????????query
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        matchesQuery: function (key, query) {
            var queryJSON = query.toJSON();
            queryJSON.className = query.className;
            this._addCondition(key, "$inQuery", queryJSON);
            return this;
        },

        /**
     * ????????????Bmob.Query?????????????????????
     * @param {String} key ???????????????key???
     * @param {Bmob.Query} ??????????????????query
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        doesNotMatchQuery: function (key, query) {
            var queryJSON = query.toJSON();
            queryJSON.className = query.className;
            this._addCondition(key, "$notInQuery", queryJSON);
            return this;
        },

        /**
     * ??????????????? key's value ????????????????????????????????????????????????Bmob.Query?????????
     * @param {String} key ???????????????key???
     * @param {String} queryKey ??????????????????????????????????????????
     * @param {Bmob.Query} query ?????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        matchesKeyInQuery: function (key, queryKey, query) {
            var queryJSON = query.toJSON();
            queryJSON.className = query.className;
            this._addCondition(key, "$select", {
                key: queryKey,
                query: queryJSON
            });
            return this;
        },

        /**
     * ??????????????? key's value ???????????????????????????????????????????????????Bmob.Query?????????
     * @param {String} key ???????????????key???
     *                     excluded.
     * @param {String} queryKey ?????????????????????????????????????????????
     * @param {Bmob.Query} query ?????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        doesNotMatchKeyInQuery: function (key, queryKey, query) {
            var queryJSON = query.toJSON();
            queryJSON.className = query.className;
            this._addCondition(key, "$dontSelect", {
                key: queryKey,
                query: queryJSON
            });
            return this;
        },

        /**
     * Add constraint that at least one of the passed in queries matches.
     * @param {Array} queries
     * @return {Bmob.Query} Returns the query, so you can chain this call.
     */
        _orQuery: function (queries) {
            var queryJSON = _.map(queries,
                function (q) {
                    return q.toJSON().where;
                });

            this._where.$or = queryJSON;
            return this;
        },

        /**
     * Converts a string into a regex that matches it.
     * Surrounding with \Q .. \E does this, we just need to escape \E's in
     * the text separately.
     */
        _quote: function (s) {
            return "\\Q" + s.replace("\\E", "\\E\\\\E\\Q") + "\\E";
        },

        /**
     * ????????????????????????????????????????????????????????????????????????????????????????????????
     * @param {String} key ??????????????????
     * @param {String} substring ??????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        contains: function (key, value) {
            this._addCondition(key, "$regex", this._quote(value));
            return this;
        },

        /**
     * ??????????????????????????????????????????????????? ??????????????????backend index????????????????????????????????????
     * @param {String} key ??????????????????
     * @param {String} prefix ??????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        startsWith: function (key, value) {
            this._addCondition(key, "$regex", "^" + this._quote(value));
            return this;
        },

        /**
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????
     * @param {String} key ??????????????????
     * @param {String} suffix ??????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        endsWith: function (key, value) {
            this._addCondition(key, "$regex", this._quote(value) + "$");
            return this;
        },

        /**
     * ??????key????????????????????????
     *
     * @param {String} key ?????????key
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        ascending: function (key) {

            if (Bmob._isNullOrUndefined(this._order)) {
                this._order = key;
            } else {
                this._order = this._order + "," + key;
            }
            return this;
        },

        cleanOrder: function (key) {
            this._order = null;
            return this;
        },

        /**
     * ??????key????????????????????????
     *
     * @param {String} key ?????????key
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        descending: function (key) {
            if (Bmob._isNullOrUndefined(this._order)) {
                this._order = "-" + key;
            } else {
                this._order = this._order + ",-" + key;
            }

            return this;
        },

        /**
     * ????????????geo point ??????????????????
     * @param {String} key Bmob.GeoPoint???key
     * @param {Bmob.GeoPoint} point ???????????? Bmob.GeoPoint
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        near: function (key, point) {
            if (!(point instanceof Bmob.GeoPoint)) {
                // Try to cast it to a GeoPoint, so that near("loc", [20,30]) works.
                point = new Bmob.GeoPoint(point);
            }
            this._addCondition(key, "$nearSphere", point);
            return this;
        },

        /**
     * ?????????????????????????????????????????????????????????????????????????????????
     * @param {String} key Bmob.GeoPoint???key
     * @param {Bmob.GeoPoint} point ???????????? Bmob.GeoPoint
     * @param maxDistance ????????????????????????????????????.
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        withinRadians: function (key, point, distance) {
            this.near(key, point);
            this._addCondition(key, "$maxDistance", distance);
            return this;
        },

        /**
     * ??????????????????????????????????????????????????????????????????????????????
     * @param {String} key Bmob.GeoPoint???key
     * @param {Bmob.GeoPoint} point ???????????? Bmob.GeoPoint
     * @param maxDistance ????????????????????????????????????.
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        withinMiles: function (key, point, distance) {
            return this.withinRadians(key, point, distance / 3958.8);
        },

        /**
     * ?????????????????????????????????????????????????????????????????????????????????
     * @param {String} key Bmob.GeoPoint???key
     * @param {Bmob.GeoPoint} point ???????????? Bmob.GeoPoint
     * @param maxDistance ????????????????????????????????????.
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        withinKilometers: function (key, point, distance) {
            return this.withinRadians(key, point, distance / 6371.0);
        },

        /**
     * ????????????????????????????????????????????????????????????
     * @param {String} key The key to be constrained.
     * @param {Bmob.GeoPoint} southwest ??????????????????????????????
     * @param {Bmob.GeoPoint} northeast ??????????????????????????????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        withinGeoBox: function (key, southwest, northeast) {
            if (!(southwest instanceof Bmob.GeoPoint)) {
                southwest = new Bmob.GeoPoint(southwest);
            }
            if (!(northeast instanceof Bmob.GeoPoint)) {
                northeast = new Bmob.GeoPoint(northeast);
            }
            this._addCondition(key, '$within', {
                '$box': [southwest, northeast]
            });
            return this;
        },

        /**
     * ????????????Bmob.Objects????????????????????????Pointer????????????Key?????????????????????inclue???????????????????????????????????????
     * @param {String} key ???????????????key??????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        include: function () {
            var self = this;
            Bmob._arrayEach(arguments,
                function (key) {
                    if (_.isArray(key)) {
                        self._include = self._include.concat(key);
                    } else {
                        self._include.push(key);
                    }
                });
            return this;
        },

        /**
     * ????????????????????????????????????????????????????????????????????????????????????????????????keys??????????????????
     * @param {Array} keys ???????????????key??????
     * @return {Bmob.Query} ??????????????????????????????????????????????????????
     */
        select: function () {
            var self = this;
            this._select = this._select || [];
            Bmob._arrayEach(arguments,
                function (key) {
                    if (_.isArray(key)) {
                        self._select = self._select.concat(key);
                    } else {
                        self._select.push(key);
                    }
                });
            return this;
        },

        /**
     * ?????????????????????????????????????????????
     * ??????callback??????promise?????????????????????????????????????????????promise???????????????
     * ????????????????????????promise?????????????????????
     * ?????????????????????????????????????????????
     * ??????????????????????????????????????????limit ???skip ????????????
     * @param callback {Function} ?????????????????????????????????
     * @param options {Object} ????????? Backbone-like ???????????????????????????????????????????????????????????????????????????
     * @return {Bmob.Promise} ????????????????????????A promise ?????????????????????
     */
        each: function (callback, options) {
            options = options || {};

            if (this._order || this._skip || (this._limit >= 0)) {
                var error = "Cannot iterate on a query with sort, skip, or limit.";
                return Bmob.Promise.error(error)._thenRunCallbacks(options);
            }

            var promise = new Bmob.Promise();

            var query = new Bmob.Query(this.objectClass);
            // We can override the batch size from the options.
            // This is undocumented, but useful for testing.
            query._limit = options.batchSize || 100;
            query._where = _.clone(this._where);
            query._include = _.clone(this._include);

            query.ascending('objectId');

            var finished = false;
            return Bmob.Promise._continueWhile(function () {
                return !finished;

            },
                function () {
                    return query.find().then(function (results) {
                        var callbacksDone = Bmob.Promise.as();
                        Bmob._.each(results,
                            function (result) {
                                callbacksDone = callbacksDone.then(function () {
                                    return callback(result);
                                });
                            });

                        return callbacksDone.then(function () {
                            if (results.length >= query._limit) {
                                query.greaterThan("objectId", results[results.length - 1].id);
                            } else {
                                finished = true;
                            }
                        });
                    });
                })._thenRunCallbacks(options);
        }
    };

    Bmob.FriendShipQuery = Bmob.Query._extend({
        _objectClass: Bmob.User,
        _newObject: function () {
            return new Bmob.User();
        },
        _processResult: function (json) {
            var user = json[this._friendshipTag];
            if (user.__type === 'Pointer' && user.className === '_User') {
                delete user.__type;
                delete user.className;
            }
            return user;
        },
    });

    /**
   * History serves as a global router (per frame) to handle hashchange
   * events or pushState, match the appropriate route, and trigger
   * callbacks. You shouldn't ever have to create one of these yourself
   * ??? you should use the reference to <code>Bmob.history</code>
   * that will be created for you automatically if you make use of
   * Routers with routes.
   *
   * <p>A fork of Backbone.History, provided for your convenience.  If you
   * use this class, you must also include jQuery, or another library
   * that provides a jQuery-compatible $ function.  For more information,
   * see the <a href="http://documentcloud.github.com/backbone/#History">
   * Backbone documentation</a>.</p>
   * <p><strong><em>Available in the client SDK only.</em></strong></p>
   */
    Bmob.History = function () {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');
    };

    // Cached regex for cleaning leading hashes and slashes .
    var routeStripper = /^[#\/]/;

    // Cached regex for detecting MSIE.
    var isExplorer = /msie [\w.]+/;

    // Has the history handling already been started?
    Bmob.History.started = false;

    // Set up all inheritable **Bmob.History** properties and methods.
    _.extend(Bmob.History.prototype, Bmob.Events,
        /** @lends Bmob.History.prototype */
        {

            // The default interval to poll for hash changes, if necessary, is
            // twenty times a second.
            interval: 50,

            // Gets the true hash value. Cannot use location.hash directly due to bug
            // in Firefox where location.hash will always be decoded.
            getHash: function (windowOverride) {
                var loc = windowOverride ? windowOverride.location : window.location;
                var match = loc.href.match(/#(.*)$/);
                return match ? match[1] : '';
            },

            // Get the cross-browser normalized URL fragment, either from the URL,
            // the hash, or the override.
            getFragment: function (fragment, forcePushState) {
                if (Bmob._isNullOrUndefined(fragment)) {
                    if (this._hasPushState || forcePushState) {
                        fragment = window.location.pathname;
                        var search = window.location.search;
                        if (search) {
                            fragment += search;
                        }
                    } else {
                        fragment = this.getHash();
                    }
                }
                if (!fragment.indexOf(this.options.root)) {
                    fragment = fragment.substr(this.options.root.length);
                }
                return fragment.replace(routeStripper, '');
            },

            /**
         * Start the hash change handling, returning `true` if the current
         * URL matches an existing route, and `false` otherwise.
         */
            start: function (options) {
                if (Bmob.History.started) {
                    throw new Error("Bmob.history has already been started");
                }
                Bmob.History.started = true;

                // Figure out the initial configuration. Do we need an iframe?
                // Is pushState desired ... is it available?
                this.options = _.extend({},
                    {
                        root: '/'
                    },
                    this.options, options);
                this._wantsHashChange = this.options.hashChange !== false;
                this._wantsPushState = !!this.options.pushState;
                this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
                var fragment = this.getFragment();
                var docMode = document.documentMode;
                var oldIE = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

                if (oldIE) {
                    this.iframe = Bmob.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
                    this.navigate(fragment);
                }

                // Depending on whether we're using pushState or hashes, and whether
                // 'onhashchange' is supported, determine how we check the URL state.
                if (this._hasPushState) {
                    Bmob.$(window).bind('popstate', this.checkUrl);
                } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
                    Bmob.$(window).bind('hashchange', this.checkUrl);
                } else if (this._wantsHashChange) {
                    this._checkUrlInterval = window.setInterval(this.checkUrl, this.interval);
                }

                // Determine if we need to change the base url, for a pushState link
                // opened by a non-pushState browser.
                this.fragment = fragment;
                var loc = window.location;
                var atRoot = loc.pathname === this.options.root;

                // If we've started off with a route from a `pushState`-enabled browser,
                // but we're currently in a browser that doesn't support it...
                if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
                    this.fragment = this.getFragment(null, true);
                    window.location.replace(this.options.root + '#' + this.fragment);
                    // Return immediately as browser will do redirect to new url
                    return true;

                    // Or if we've started out with a hash-based route, but we're currently
                    // in a browser where it could be `pushState`-based instead...
                } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                    this.fragment = this.getHash().replace(routeStripper, '');
                    window.history.replaceState({},
                        document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
                }

                if (!this.options.silent) {
                    return this.loadUrl();
                }
            },

            // Disable Bmob.history, perhaps temporarily. Not useful in a real app,
            // but possibly useful for unit testing Routers.
            stop: function () {
                Bmob.$(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
                window.clearInterval(this._checkUrlInterval);
                Bmob.History.started = false;
            },

            // Add a route to be tested when the fragment changes. Routes added later
            // may override previous routes.
            route: function (route, callback) {
                this.handlers.unshift({
                    route: route,
                    callback: callback
                });
            },

            // Checks the current URL to see if it has changed, and if it has,
            // calls `loadUrl`, normalizing across the hidden iframe.
            checkUrl: function (e) {
                var current = this.getFragment();
                if (current === this.fragment && this.iframe) {
                    current = this.getFragment(this.getHash(this.iframe));
                }
                if (current === this.fragment) {
                    return false;
                }
                if (this.iframe) {
                    this.navigate(current);
                }
                if (!this.loadUrl()) {
                    this.loadUrl(this.getHash());
                }
            },

            // Attempt to load the current URL fragment. If a route succeeds with a
            // match, returns `true`. If no defined routes matches the fragment,
            // returns `false`.
            loadUrl: function (fragmentOverride) {
                var fragment = this.fragment = this.getFragment(fragmentOverride);
                var matched = _.any(this.handlers,
                    function (handler) {
                        if (handler.route.test(fragment)) {
                            handler.callback(fragment);
                            return true;
                        }
                    });
                return matched;
            },

            // Save a fragment into the hash history, or replace the URL state if the
            // 'replace' option is passed. You are responsible for properly URL-encoding
            // the fragment in advance.
            //
            // The options object can contain `trigger: true` if you wish to have the
            // route callback be fired (not usually desirable), or `replace: true`, if
            // you wish to modify the current URL without adding an entry to the
            // history.
            navigate: function (fragment, options) {
                if (!Bmob.History.started) {
                    return false;
                }
                if (!options || options === true) {
                    options = {
                        trigger: options
                    };
                }
                var frag = (fragment || '').replace(routeStripper, '');
                if (this.fragment === frag) {
                    return;
                }

                // If pushState is available, we use it to set the fragment as a real URL.
                if (this._hasPushState) {
                    if (frag.indexOf(this.options.root) !== 0) {
                        frag = this.options.root + frag;
                    }
                    this.fragment = frag;
                    var replaceOrPush = options.replace ? 'replaceState' : 'pushState';
                    window.history[replaceOrPush]({},
                        document.title, frag);

                    // If hash changes haven't been explicitly disabled, update the hash
                    // fragment to store history.
                } else if (this._wantsHashChange) {
                    this.fragment = frag;
                    this._updateHash(window.location, frag, options.replace);
                    if (this.iframe && (frag !== this.getFragment(this.getHash(this.iframe)))) {
                        // Opening and closing the iframe tricks IE7 and earlier
                        // to push a history entry on hash-tag change.
                        // When replace is true, we don't want this.
                        if (!options.replace) {
                            this.iframe.document.open().close();
                        }
                        this._updateHash(this.iframe.location, frag, options.replace);
                    }

                    // If you've told us that you explicitly don't want fallback hashchange-
                    // based history, then `navigate` becomes a page refresh.
                } else {
                    window.location.assign(this.options.root + fragment);
                }
                if (options.trigger) {
                    this.loadUrl(fragment);
                }
            },

            // Update the hash location, either replacing the current entry, or adding
            // a new one to the browser history.
            _updateHash: function (location, fragment, replace) {
                if (replace) {
                    var s = location.toString().replace(/(javascript:|#).*$/, '');
                    location.replace(s + '#' + fragment);
                } else {
                    location.hash = fragment;
                }
            }
        });

    /**
   * Routers map faux-URLs to actions, and fire events when routes are
   * matched. Creating a new one sets its `routes` hash, if not set statically.
   *
   * <p>A fork of Backbone.Router, provided for your convenience.
   * For more information, see the
   * <a href="http://documentcloud.github.com/backbone/#Router">Backbone
   * documentation</a>.</p>
   * <p><strong><em>Available in the client SDK only.</em></strong></p>
   */
    Bmob.Router = function (options) {
        options = options || {};
        if (options.routes) {
            this.routes = options.routes;
        }
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var namedParam = /:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;

    // Set up all inheritable **Bmob.Router** properties and methods.
    _.extend(Bmob.Router.prototype, Bmob.Events,
        /** @lends Bmob.Router.prototype */
        {

            /**
         * Initialize is an empty function by default. Override it with your own
         * initialization logic.
         */
            initialize: function () { },

            /**
         * Manually bind a single named route to a callback. For example:
         *
         * <pre>this.route('search/:query/p:num', 'search', function(query, num) {
         *       ...
         *     });</pre>
         */
            route: function (route, name, callback) {
                Bmob.history = Bmob.history || new Bmob.History();
                if (!_.isRegExp(route)) {
                    route = this._routeToRegExp(route);
                }
                if (!callback) {
                    callback = this[name];
                }
                Bmob.history.route(route, _.bind(function (fragment) {
                    var args = this._extractParameters(route, fragment);
                    if (callback) {
                        callback.apply(this, args);
                    }
                    this.trigger.apply(this, ['route:' + name].concat(args));
                    Bmob.history.trigger('route', this, name, args);
                },
                    this));
                return this;
            },

            /**
         * Whenever you reach a point in your application that you'd
         * like to save as a URL, call navigate in order to update the
         * URL. If you wish to also call the route function, set the
         * trigger option to true. To update the URL without creating
         * an entry in the browser's history, set the replace option
         * to true.
         */
            navigate: function (fragment, options) {
                Bmob.history.navigate(fragment, options);
            },

            // Bind all defined routes to `Bmob.history`. We have to reverse the
            // order of the routes here to support behavior where the most general
            // routes can be defined at the bottom of the route map.
            _bindRoutes: function () {
                if (!this.routes) {
                    return;
                }
                var routes = [];
                for (var route in this.routes) {
                    if (this.routes.hasOwnProperty(route)) {
                        routes.unshift([route, this.routes[route]]);
                    }
                }
                for (var i = 0,
                    l = routes.length; i < l; i++) {
                    this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
                }
            },

            // Convert a route string into a regular expression, suitable for matching
            // against the current location hash.
            _routeToRegExp: function (route) {
                route = route.replace(escapeRegExp, '\\$&').replace(namedParam, '([^\/]+)').replace(splatParam, '(.*?)');
                return new RegExp('^' + route + '$');
            },

            // Given a route, and a URL fragment that it matches, return the array of
            // extracted parameters.
            _extractParameters: function (route, fragment) {
                return route.exec(fragment).slice(1);
            }
        });

    /**
   * @function
   * @param {Object} instanceProps Instance properties for the router.
   * @param {Object} classProps Class properies for the router.
   * @return {Class} A new subclass of <code>Bmob.Router</code>.
   */
    Bmob.Router.extend = Bmob._extend;



    /**
* @namespace ???????????????
*/
    Bmob.generateCode = Bmob.generateCode || {};
    Bmob.generateCode = function (data, options) {
        var request = Bmob._request("wechatApp/qr/generatecode", null, null, 'POST', Bmob._encode(data, null, true));
        return request.then(function (resp) {
            return Bmob._decode(null, resp);
        })._thenRunCallbacks(options);

    }


    /**
* @namespace ????????????
*/
    Bmob.refund = Bmob.refund || {};
    Bmob.refund = function (data, options) {
        var request = Bmob._request("pay/refund", null, null, 'POST', Bmob._encode(data, null, true));
        return request.then(function (resp) {
            return Bmob._decode(null, resp);
        })._thenRunCallbacks(options);

    }




    /**
    * @namespace ??????????????????
    */
    Bmob.sendMessage = Bmob.sendMessage || {};
    Bmob.sendMessage = function (data, options) {

        var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));

        return request.then(function (resp) {
            return Bmob._decode(null, resp);
        })._thenRunCallbacks(options);

    }

    /**
    * @namespace ????????????????????????
    */
    Bmob.sendMasterMessage = Bmob.sendMasterMessage || {};
    Bmob.sendMasterMessage = function (data, options) {

        var request = Bmob._request("wechatApp/notifyMsg", null, null, 'POST', Bmob._encode(data, null, true));

        return request.then(function (resp) {
            return Bmob._decode(null, resp);
        })._thenRunCallbacks(options);

    }


    /**
   * @namespace ?????????????????????
   */
    Bmob.Sms = Bmob.Sms || {};

    _.extend(Bmob.Sms,
        /** @lends Bmob.Sms */
        {

            /**
         * ????????????????????????
         * @param {Object} ???????????????
         * @param {Object} Backbone-style options ????????? options.success, ?????????????????????????????????????????????????????????????????? options.error ?????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????
         * @return {Bmob.Promise}
         */
            requestSms: function (data, options) {
                var request = Bmob._request("requestSms", null, null, 'POST', Bmob._encode(data, null, true));
                return request.then(function (resp) {
                    return Bmob._decode(null, resp);
                })._thenRunCallbacks(options);

            },

            /**
         * ?????????????????????
         * @param {Object} ???????????????
         * @param {Object} Backbone-style options ????????? options.success, ?????????????????????????????????????????????????????????????????? options.error ?????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????
         * @return {Bmob.Promise}
         */
            requestSmsCode: function (data, options) {
                var request = Bmob._request("requestSmsCode", null, null, 'POST', Bmob._encode(data, null, true));
                return request.then(function (resp) {
                    return Bmob._decode(null, resp);
                })._thenRunCallbacks(options);

            },

            /**
         * ?????????????????????
         * @param {Object} ???????????????
         * @param {Object} Backbone-style options ????????? options.success, ?????????????????????????????????????????????????????????????????? options.error ?????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????
         * @return {Bmob.Promise}
         */
            verifySmsCode: function (mob, verifyCode, options) {
                var data = {
                    "mobilePhoneNumber": mob
                };
                var request = Bmob._request("verifySmsCode/" + verifyCode, null, null, 'POST', Bmob._encode(data, null, true));
                return request.then(function (resp) {
                    return Bmob._decode(null, resp);
                })._thenRunCallbacks(options);
            },

            /**
         * ??????????????????
         * @param {Object} ???????????????
         * @param {Object} Backbone-style options ????????? options.success, ?????????????????????????????????????????????????????????????????? options.error ?????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????
         * @return {Bmob.Promise}
         */
            querySms: function (smsId, options) {
                var request = Bmob._request("querySms/" + smsId, null, null, 'GET', null);
                return request.then(function (resp) {
                    return Bmob._decode(null, resp);
                })._thenRunCallbacks(options);
            }
        });


    /**
  * @namespace ????????????
  * <a href="http://docs.bmob.cn/restful/developdoc/index.html?menukey=develop_doc&key=develop_restful#index_????????????">cloud functions</a>.
  */
    Bmob.Pay = Bmob.Pay || {};

    _.extend(Bmob.Pay, /** @lends Bmob.Cloud */
        {

            /**
             * ????????????????????????????????????
             * @param {float} ??????
             * @param {String} ????????????
             * @param {String} ??????
             * @param {String} OPEN ID
             * @param {Object} options  -style options ?????????
             * options.success, ??????????????????????????????????????????????????????????????????  options.error ??????????????????????????????????????????????????????????????????  ??????????????????????????????????????????????????????????????????
             * @return {Bmob.Promise} A promise ??????????????????????????????????????????
             */
            wechatPay: function (price, product_name, body, openid, options) {
                var data = { "order_price": price, "product_name": product_name, "body": body, "open_id": openid, "pay_type": 4 }
                var request = Bmob._request("pay", null, null, 'POST',
                    Bmob._encode(data, null, true));

                return request.then(function (resp) {
                    return Bmob._decode(null, resp);
                })._thenRunCallbacks(options);
            },

            /**
             * ????????????
             * @param {String} ??????id
             * @param {Object} options  Backbone-style options ?????????
             * options.success, ??????????????????????????????????????????????????????????????????  options.error ??????????????????????????????????????????????????????????????????  ??????????????????????????????????????????????????????????????????
             * @return {Bmob.Promise} A promise ??????????????????????????????????????????
             */
            queryOrder: function (orderId, options) {

                var request = Bmob._request("pay/" + orderId, null, null, 'GET',
                    null);
                return request.then(function (resp) {
                    return Bmob._decode(null, resp);
                })._thenRunCallbacks(options);
            }
        });



    /**
   * @namespace ??????????????????
   * <a href="cloudcode/developdoc/index.html?menukey=develop_doc&key=develop_cloudcode">cloud functions</a>.
   */
    Bmob.Cloud = Bmob.Cloud || {};

    _.extend(Bmob.Cloud,
        /** @lends Bmob.Cloud */
        {
            /**
         * ??????????????????
         * @param {String} ????????????????????????
         * @param {Object} ???????????????????????????
         * @param {Object} options  Backbone-style options ?????????
         * options.success, ??????????????????????????????????????????????????????????????????  options.error ??????????????????????????????????????????????????????????????????  ??????????????????????????????????????????????????????????????????
         * @return {Bmob.Promise} A promise ??????????????????????????????????????????
         */
            run: function (name, data, options) {
                var request = Bmob._request("functions", name, null, 'POST', Bmob._encode(data, null, true));

                return request.then(function (resp) {
                    return Bmob._decode(null, resp).result;
                })._thenRunCallbacks(options);
            }
        });

    Bmob.Installation = Bmob.Object.extend("_Installation");

    /**
   * ??????push?????????
   * @name Bmob.Push
   * @namespace ????????????
   */
    Bmob.Push = Bmob.Push || {};

    /**
   * ????????????
   * @param {Object} data -  ????????????????????????<a href="http://docs.bmob.cn/restful/developdoc/index.html?menukey=develop_doc&key=develop_restful">????????????</a>.
   * @param {Object} options options ????????? options.success, ?????????????????????????????????????????????????????????????????? options.error ?????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????????????????
   */
    Bmob.Push.send = function (data, options) {
        if (data.where) {
            data.where = data.where.toJSON().where;
        }

        if (data.push_time) {
            data.push_time = data.push_time.toJSON();
        }

        if (data.expiration_time) {
            data.expiration_time = data.expiration_time.toJSON();
        }

        if (data.expiration_time && data.expiration_time_interval) {
            throw "Both expiration_time and expiration_time_interval can't be set";
        }

        var request = Bmob._request('push', null, null, 'POST', data);
        return request._thenRunCallbacks(options);
    };


    var io = ('undefined' === typeof module ? {} : module.exports);
    var BmobSocketIo = {};
    exports.BmobSocketIo = BmobSocketIo;





}.call(this));