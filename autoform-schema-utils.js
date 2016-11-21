SimpleSchema.prototype.forceRequired = function() {
  if (this._optionalFields) {
    throw new Meteor.Error('Autoform schema utils', 'You have already called forceRequired on this schema.');
  } else {
    this._optionalFields = [];
  }
  if (Meteor.isServer) {
    throw new Meteor.Error('Autoform', 'Attempting to mutate schema to make fields required. This should be client only.');
    return;
  }
  _.each(this._schema, (value, key) => {
    if (this._schema[key].optional) {
      this._optionalFields.push(key);
    }
    delete this._schema[key].optional;
  });
}

SimpleSchema.prototype.undoForceRequired = function() {
  _.each(this._optionalFields, (value, key) => {
    this._schema[key].optional = true;
  });
  delete this._optionalFields;
}

SimpleSchema.prototype.addAutoFormOptions = (autoformOptions) => {
  if (Meteor.isServer) {
    throw new Meteor.Error('Autoform', 'Attempting to add autoform options to schema on server.');
    return;
  }
  let schema = this._schema;
  _.each(schema, (value, key) => {
    if (autoformOptions[key]) {
      schema[key].autoform = autoformOptions[key];
    }
  });
}
