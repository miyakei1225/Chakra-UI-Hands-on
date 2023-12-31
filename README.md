# Chakra-UI-Hands-on
React×Chakra UIハンズオン用のリポジトリになります！

## 環境構築手順
Node.jsとnpmが入っていない方は以下のURLを参考にダウンロードをしてください。

https://kinsta.com/jp/blog/how-to-install-node-js/

バージョンは基本的に最新のLTS版(長期サポートバージョン、いわゆる安定版)をダウンロードしていただければ良いかと思います。
(私は今回ver17.9.0のものを使用してプロジェクトを作成しています。)

### 1.Nodeのバージョンを確認する
```
node -v
```

<img width="206" alt="スクリーンショット 2023-04-22 10 48 19" src="https://user-images.githubusercontent.com/65134351/233790013-78a34098-79a7-4be2-8565-2159615cc52b.png">

### 2.適宜ディレクトリを作成し、その中に今回私が作成したGitHubリポジトリの内容をcloneしてください。
```
// mkdirコマンドでディレクトリ作成(名前はなんでもok🙆)
mkdir CAMP
```

```
git clone https://github.com/miyakei1225/Chakra-UI-Hands-on.git
```

### 3.Chakra-UI-Hands-on/react-frontディレクトリに移動し、lsコマンドでファイル群があることを確認する。
```
cd Chakra-UI-Hands-on/react-front/
```

```
ls
```
<img width="648" alt="スクリーンショット 2023-09-22 8 18 22" src="https://github.com/miyakei1225/Chakra-UI-Hands-on/assets/65134351/462b2649-5226-494b-bfc4-bbeb107f0ee2">



### 3.VS Codeでプロジェクトフォルダを開く(未ダウンロードの方は各自ダウンロードしていただけると幸いです。)
【※もし実行するのであれば設定必須🙆】
code . コマンドで現在のディレクトリのフォルダを開く便利なコマンドがあるため、ぜひこちらを参考に設定してみてください！
```
code .
```
https://qiita.com/naru0504/items/c2ed8869ffbf7682cf5c

### 4.npm installでpackage.jsonの内容をインストールする(スクショ内では省略形のnpm iでインストールしています👍)
```
npm install
```
<img width="577" alt="スクリーンショット 2023-04-22 23 37 50" src="https://user-images.githubusercontent.com/65134351/233791078-79a04e24-c6cb-472a-82c0-5b867bd7c1c8.png">

### 5.プロジェクトを立ち上げる
```
npm run start
```

### 6. 環境構築完了🙌
localhost:3000にアクセスし、以下の画面が表示出来れば環境構築終了です！構築お疲れ様でした💪
<img width="1421" alt="スクリーンショット 2023-09-22 8 26 46" src="https://github.com/miyakei1225/Chakra-UI-Hands-on/assets/65134351/ff2eaa21-cf0a-4a50-be36-dba3b0f27104">

