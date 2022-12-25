---
title: "how to update qmk"
---
# how to update qmk

## updating qmk (vial qmk)

1. download new vial version from [here](https://get.vial.today/download/)
2. `git pull` in vial-qmk
3. update QMK-MSYS from [here](https://github.com/qmk/qmk_distro_msys/releases)
4. check home config in QMK-MSYS with `qmk config user.qmk_home`, should be vial-qmk. update if needed with [this command](https://docs.qmk.fm/#/cli_configuration?id=setting-configuration-values)
5. `qmk setup` in qmk-msys