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
![dot_32](/docs/img/dot_32.png)
![dot_l](/docs/img/dot_l.png)
![dot_s](/docs/img/dot_s.png)
![dot_xs](/docs/img/dot_xs.png)

## スタイルに適用する
- 作成したsvgをひとつのフォルダにまとめ、zip化
- Symbolsにアップする
![sprite_upload_page](/docs/img/sprite_upload_page.png)
![sprite_upload_page](/docs/img/uploaded_sprite.png)

- スタイルエディタを立ち上げてfillレイヤを作成する
  - 今回はwaterにテクスチャをつける

waterのレイヤを新たに作成し、patternにsvgを指定する


![create_layer](/docs/img/create_layer.png)
![add_param_on_pattern](/docs/img/add_param_on_pattern.png)

4つの結果
![white_one](/docs/img/wone.png)
訳がわからないのでもう一枚青色のwaterのレイヤをつくっておく



![blue_one](/docs/img/bone.png)
![blue_l](/docs/img/bl.png)
![blue_s](/docs/img/bs.png)
![blue_xs](/docs/img/bxs.png)

テクスチャっぽくなった！

ちょっと暗いのでパターンのレイヤの透過度を調整してあげる
![blue_xs](/docs/img/lightblue_xs.png)

(c)MapTiler (c)OpenStreetMap contributors