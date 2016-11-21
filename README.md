## autoform-schema-utils
Simple utilities for merging autoform options into a simple schema.

To install:

```meteor add wesleyfsmith:autoform-schema-utils```


When working with autoform, it's common to start sticking autoform config options into your schema:

```js
Practices = new Mongo.Collection('practices');

Practices.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  employees: {
    type: [String],
    optional: true,
    autoform: {
      omit: true
    }
  },
  createdAt: {
      type: Date,
      defaultValue: new Date(),
      autoform: {
        omit: true
      }
  }
}));

```

This is weird, because usually your collection schemas are included on the server and the client, and it's strange to have UI code in the middle of your schema. With this library you can run on the client:

```js
const autoFormOptions = {
  employees: {
    omit: true
  },
  createdAt: {
    omit: true
  }
};

Practices.simpleSchema().addAutoFormOptions(autoFormOptions);
```

Now you can keep your schema clean, and keep your separation of concerns intact. This library takes those autoFormOptions object, then attaches it the simple schema with the autoform nested field.

### Forcing fields to be required

Sometimes you want to make fields optional on your schema, but once the user goes to update those fields you want to force them to fill out all the fields in the form. This function will make all of your fields required on the client only.

This is most likely useful if you want to require fields with autoform on the client, but want to keep the fields optional in your schema.

```js
Practices.simpleSchema().forceRequired();
```

You can undo making the fields required at any time:

```js
Practices.simpleSchema().undoForceRequired();
```
