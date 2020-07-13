# CKEditor5-variables plugin
CKeditor 5 plugin to insert variables into your document

Adds a dropdown button with a json-backed list of variables for use in templating, for further processing.


## Configuring the plugin

To configure the plugin, add the `Variables` to the list of plugins, as it says in the documentaion `variablePlugin` configuration to your editor config with the path to look for the variable configuration.

```
ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [... , Variables],
        toolbar: [... , 'variables'],
        variablePlugin: { sourceFile: 'defaultvars.json' }
    }
    )
    .then(editor => {
        console.log('Editor was initialized', editor);
    })
    .catch(error => {
        console.error(error.stack);
    });
```

### Sample variable list

The minimum requirement is that each variable has a `label` and a `variable`.

__defaultvars.json:__

```
[
    {
        "description": "Recipient Name",
        "label": "Name",
        "variable": "[name]"
    },
    {
        "description": "Recipient Email",
        "label": "Email",
        "variable": "[email]"
    },
    {
        "description": "Name of logged in User",
        "label": "Admin Name",
        "variable": "[adminName]"
    },
    {
        "description": "Email of logged in User",
        "label": "Admin Email",
        "variable": "[adminEmail]"
    },
    {
        "description": "Today's date",
        "label": "Date",
        "variable": "[dateToday]"
    },
    {
        "description": "Date of expiry",
        "label": "Exp. Date",
        "variable": "[dateExpire]"
    }
]
```
