---
title: "vivaldi history/bookmarks are blank"
layout: "doc"
---
# vivaldi history/bookmarks are blank

1. backup all your important extension data (userstyles, userscripts, uBlock settings, startpage settings ...)
2. close vivaldi
3. go to %localappdata% and User Data, Default. move out of the folder: `Visited links` , `TransportSecurity` and `Trusted Vault`
4. launch vivaldi. some stuff will not work
5. either restore backups or alternatively move the files back (might fix it but the first option is safer)

UPDATE: doesen't really work. probably a bug

UPDATE 2: this is a bug with vivaldi:

[Jira] (VB-85523) [SEVERE] any extension which overrides chrome://newtab breaks bookmarks, history, notes and calendar

they have not published a fix for it yet at the time of writing this