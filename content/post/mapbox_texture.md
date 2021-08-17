---
title: "Add a texture on Mapbox style"
date: 2021-08-17T17:40:31+09:00
draft: true
metaAlignment: "center"
categories:
- cartography
tags:
- mapbox
---

Mapboxスタイルのfillレイヤにテクスチャを入れて質感をもたせよう

![textured_style](/img/textured_style.png)
<!--more-->

通常のスタイルだとベタ塗りしか選べない。パターンをfillレイヤに重ねることでアンティーク調にしたり独自の模様を持たせることができます。

# How to make antique map?

## SVGを作る
fillレイヤに使いたいパターンをSVGで作る
今回はドットのパターンを使うことにします。
ポイント

- MapTilerのSpriteにはアップロード上限があるのであまり大きくならないように気をつける
- SVGはレイヤに敷き詰められるときに余白が連続したりパターン詰まってしまわないよう、パターンの間隔と余白を計算して作成する

今回は比較のために4種類のドットを用意。すべて32×32px
![dot_32](/img/dot_32.png)
![dot_l](/img/dot_l.png)
![dot_s](/img/dot_s.png)
![dot_xs](/img/dot_xs.png)

## スタイルに適用する
- 作成したsvgをひとつのフォルダにまとめ、zip化
- Symbolsにアップする
![sprite_upload_page](/img/sprite_upload_page.png)
![sprite_upload_page](/img/uploaded_sprite.png)

- スタイルエディタを立ち上げてfillレイヤを作成する
  - 今回はwaterにテクスチャをつける

waterのレイヤを新たに作成し、patternにsvgを指定する


![create_layer](/img/create_layer.png)
![add_param_on_pattern](/img/add_param_on_pattern.png)

4つの結果
![white_one](/img/wone.png)
訳がわからないのでもう一枚青色のwaterのレイヤをつくっておく



![blue_one](/img/bone.png)
![blue_l](/img/bl.png)
![blue_s](/img/bs.png)
![blue_xs](/img/bxs.png)

テクスチャっぽくなった！

ちょっと暗いのでパターンのレイヤの透過度を調整してあげる
![blue_xs](/img/lightblue_xs.png)


参考

[Mapbox style specification - layers background](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#background)

(c)MapTiler (c)OpenStreetMap contributors