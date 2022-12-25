---
title: "windows autochecking disk on startup"
layout: "doc"
---
# windows autochecking disk on startup

### Using Windows 10 Registry Editor

- Press Windows + R keys to bring up the Run box, type `regedit` and click OK. This will help open Windows Registry Editor.

![https://www.easeus.com/images/en/screenshot/todo-pctrans/registry-editor-1.png](https://www.easeus.com/images/en/screenshot/todo-pctrans/registry-editor-1.png)

- You'll navigate to the Session Manager folder by following the path: `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager`
- Double-click on the BootExecute on the right pane. In the new "Edit Multi-String" window, delete all lines under Value data except **autocheck autochk** *.
- val: what you probably see: `autocheck autochk /k:C *` what you want: `autocheck autochk *`

![https://www.easeus.com/images/en/screenshot/partition-manager/boot-execute.png](https://www.easeus.com/images/en/screenshot/partition-manager/boot-execute.png)

source: https://www.easeus.com/partition-master/how-to-stop-disk-check-on-startup-windows-10.html#2 (edited)