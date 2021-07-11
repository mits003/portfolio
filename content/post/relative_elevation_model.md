---
title: "Reveal floodplain"
date: 2021-07-11T19:04:19+09:00
# autoThumbnailImage: false
# thumbnailImagePosition: "left"
# thumbnailImage: /img/rem.jpg
# coverImage: /img/rem.jpg
categories:
- cartography
tags:
- gis
- raster
- dem
- visualization
keywords:
- qgis
- relative elevation model
- geography
- dem
---
When you have a DEM, digital elevation model, you will find mountains and valleys. Would you like to find out more? Let's make a relative elevation model.
<!--more-->

# Reveal floodplain with elative elevation model

DEMs tell you a details of the geography of the area. REM, relative elevation model reveal the floodplain clearly.

![REM](/img/rem.png)

## Tools

- QGIS

## Data sources

- DEM: [国土地理院基盤地図情報](https://fgd.gsi.go.jp/download/menu.php)
- Centerline of streems: [国土数値情報](https://nlftp.mlit.go.jp/ksj/)

## How to make

1. Get a DEM and a line data of a stream centerline
2. Construct pointa along the stream line with a proper dense
3. Extract DEM values to the points
4. Run IDW tool and create an interpolated raster from points
5. Calculate Original DEM minus interpolated raster

## Visualisation tricks

1. As a base layer, lay hillshade
2. Select multiply mode For the REM layer
3. Strech the color gradation range relatively small like -2 to 20m to highlight the floodplain

## References

- [Floodplain visualization using lidar-derived relative elevation models](https://www.dnr.wa.gov/publications/ger_presentations_dmt_2016_coe.pdf)