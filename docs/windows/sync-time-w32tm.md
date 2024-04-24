---
title: Windows sync time
source: https://superuser.com/a/1326025
---
If your comupter is often de-syncing it's time, you've probably tried running:
```
w32tm /resync
```
However, if you're here, you've gotten the following error:
```
The following error occurred: The specified service does not exist as an installed service. (0x80070424)
```

Open a new command prompt with _Run as Administrator_ and do the following:

1. register the service: `w32tm /register` 
	- If you've previously done this, it might be a good idea to run `w32tm /unregister` and then `w32tm /register`
2. start the service: `net start w32time`
3. synchronize time: `w32tm /resync`