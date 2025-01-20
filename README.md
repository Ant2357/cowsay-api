# cowsay-api
![cowsay API の宣伝画面](README-banner.png "cowsay API の宣伝画面")

cowsay 系統の機能を提供する API

## Usage

### cowsay
```sh
https://cowsay-api.ant-npb.workers.dev/api/cowsay?text=hoge
```
### output
```json
{
  "text": "[cowsay の出力結果(長いので省略)]"
}
```

#### options
| args   | info                      |
| ------ | :------------------------ |
| text   | cowsay が喋るテキストです。 |
| eyes   | cowsay の目です。          |
| tongue | cowsay の舌です。          |

#### example
```sh
https://cowsay-api.ant-npb.workers.dev/api/cowsay?text=hoge&eyes=oO&tongue=U
```

## Development
```
npm install
npm run dev
```

```
npm run deploy
```
