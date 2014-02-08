handmirror
================

handmirror is a plugin for tinyMCE that enables the use of CodeMirror-UI for souce code editing.

[![Code Climate](https://codeclimate.com/repos/52f6820b695680540600424f/badges/e99c895a3ddfc172f6b8/gpa.png)](https://codeclimate.com/repos/52f6820b695680540600424f/feed)


To use handmirror you will want to drop the root handmirror directory into your tiny_mce_xxx/plugins directory.

You'll want things to look like this:

       tiny_mce_xxx/plugins/handmirror/editor_plugin.js
       tiny_mce_xxx/plugins/handmirror/dialog.htm
       etc...

Then in your tinyMCE init call you'll need to add it to the plugins.

     plugins : "handmirror,spellchecker,etc..."

And make suer that you add the button to one of the toolbars

    theme_advanced_buttons1 : "handmirror,bold,italic,etc..."

