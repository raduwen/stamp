## 外のサービスに頼る

```plantuml
participant "配信者" as caster
participant "リスナ" as listener
participant "UA" as ua
participant "StampServer (Vercel/Firebase Hosting?)" as server
participant "Auth(Firebase Authentication)" as auth
participant "ImageStore (G-Drive, Dropbox ... etc)" as store
participant "Firebase Realtime Database" as db

== アップロード ==

listener -> store : 自分のGoogleDriveなりDropboxなりにアップロード
store -> store : Shared URL発行

== StampCast認証 ==

listener <-> ua : ユーザー登録
ua <-> server : 
server <-> auth : ユーザー登録
listener -> server : サービスの連携(G-Drive, Dropbox, etc...)
server <-> store : よくあるOAuthとかそういうの
server -> listener : 完了

== 配信時 ==

caster <-> ua : 監視
ua <-> server : (たしか)WebSocket
server <-> db : connection

listener -> ua : 一覧くれ
ua <-> server
server <-> auth
ua <-> store
listener -> ua : 自分のスタンプを押す(URLをPush??)
ua -> server :
server -> db : Add URL

db <-> ua : Image URLを受け取る
ua -> caster : 表示
ua -> server : 削除
server <-> db : URLを消す

```
## 各配信者がサーバーを立てる

```plantuml
participant "配信者" as caster
participant "リスナ" as listener
participant "UA" as ua
participant "Stamp Server" as server

== アップロード ==

listener -> ua : 画像のアップロードする
ua -> server : 保存
caster -> ua : 画像のアップロードする
ua -> server : 保存

note right
画像の著作権問題?
end note

== 運用 ==

caster <-> ua : 監視(WebSocket)
ua <-> server : こないかな???

listener -> ua : スタンプを押す
ua -> server : スタンプID

server -> ua : 通知
ua -> caster : スタンプ表示
```

