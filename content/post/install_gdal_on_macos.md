---
title: "Install GDAL on macOS"
date: 2021-07-11T21:50:43+09:00
metaAlignment: "center"
categories:
- programming
tags:
- gis
- gdal
---
Stacked to install GDAL on macOS? Yes, I did. Now it's extreamly simple.

<!--more-->

![gdal_icon](/img/gdal-icon.png)

I used to stack install GDAL on macOS. Looked for third party installers or use QGIS environment. Now they provide official installer via pip! We can setup with pip and homebrew.

# Enviroment

- OS: Mac OSX Catalina
- GDAL: 3.3.0
- Python: 3.3.6
- Homebrew: 3.1.12
- pip: 21.1.2

# How to install
Excute these commands one by one. They emit a thousands of logs, just continue.

```shell
brew install gdal
pip download GDAL
tar -xpzf GDAL-<version of GDAL>.tar.gz
cd GDAL-<version of GDAL>
python setup.py build_ext --gdal-config /usr/local/Cellar/gdal/<version of GDAL>/bin/gdal-config
python setup.py build
python setup.py install
```

If you are not sure which version of GDAL you downloaded, execute `ls /usr/local/Cellar/gdal/` and you will find it.

# Let's check it out
When you got the response of their virsion, they are all installed parfectly.

## GDAL

```shell
gdalinfo --version
gdal_merge.py --version
```

## Python bindings

```python
>>> from osgeo import gdal
>>> gdal.VersionInfo()
```

---

# Special thanks

[kelvinn/InstallPythonGDAL.md]("https://gist.github.com/kelvinn/f14f0fc24445a7994368f984c3e37724")