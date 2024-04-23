---
title: "UNABLE_TO_VERIFY_LEAF_SIGNATURE"
---
# Error UNABLE_TO_VERIFY_LEAF_SIGNATURE
If you're using ESET antivirus, it's likely the culprit:


> After struggling to solve this problem almost a week, ESET cause this error when run npm command.  
> https://github.com/SillyTavern/SillyTavern/issues/2100#issuecomment-2063231168  
> Open ESET and search in configuration for "Application scan rules", find node and put it in Ignore.  

from [stackoverflow](https://stackoverflow.com/a/78362780/13342359)

1. find out where you have nodejs installed with `where node`
	- for me it's `C:\Program Files\nodejs\node.exe`
2. Eset Internet Security: Sidebar: `Setup` -> `Internet protection` -> `Web Access Protection` -> Cog icon -> `Configure` -> Excluded Applications -> `Edit` and add the node path

more solutions if the above doesen't work:
- [javascript - Unable to verify leaf signature - Stack Overflow](https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature)
- [node.js - Error: UNABLE\_TO\_VERIFY\_LEAF\_SIGNATURE Phonegap Installation - Stack Overflow](https://stackoverflow.com/questions/20747817/error-unable-to-verify-leaf-signature-phonegap-installation)
