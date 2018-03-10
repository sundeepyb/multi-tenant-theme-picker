# multi-tenant-theme-picker
Angular4 multiple styles loading into app.component on event change. It uses jsontosass and scss.

Try Demo Link: [https://multi-tenant-theme-picker.firebaseapp.com](https://multi-tenant-theme-picker.firebaseapp.com)

## Run Project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

Default route goes to 'channels' page. Selected theme state saves to Local Storage.

## Configure Styles

Tenant styles can be configured in tenants.json file (example below).
```sh
"kaplan": {
    "header": {
        "bgColor": "#240f6e",
        "headerHeight": "60px",
        "logoUrl": "url('kaplan_logo.png')",
    }
},
"skillsoft": {
    "header": {
        "bgColor": "linear-gradient(to bottom,#1c202a 20%,rgba(28,32,42,0) 100%)",
        "headerHeight": "95px",
        "logoUrl": "url('img-skillsoft-logo.svg')",
    }
}
```
## How to apply tenants.json new changes

After updating tenant styles,
Run `npm run jsontosass` to parse json and generate sass file.


