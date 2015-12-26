# tume.js
所定の幅に収まるように長体にして文字を詰めるjQuery拡張。

widthを指定したブロック要素に対して使う。

##使い方

    $(hoge).tume() innerHTMLの内容を詰める
    $(hoge).tume(str) strを詰めて設定
    $(hoge).tume(str,true) widthに満たない場合は広げる

##サンプル

[表示例画像](http://wakufactory.jp/html5/kumi/tume/tume.png)

[実働サンプル](http://wakufactory.jp/html5/kumi/tume/tume_sample.html)

##仕組み

隠しdevエレメントに一旦文字を表示し、幅を測った上で、所定のサイズに収まるように、css::transformで変換をかけている。
