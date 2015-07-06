cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.plugin.cloud/www/syncloud.js",
        "id": "com.plugin.cloud.syncloud",
        "clobbers": [
            "syncloud"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.plugin.cloud": "0.7.0"
}
// BOTTOM OF METADATA
});