## 環境構築

```sh
# クローンしたら、イメージをビルドしてコンテナを起動します
docker compose up --build -d

# コンテナに入ります
docker compose exec app bash

# 依存パッケージをインストールします
npm install

# 開発サーバーを起動します
npm run dev
```

ブラウザで `http://localhost:5173` にアクセスすると、アプリケーションが表示されます。

### ポートが競合する場合
もしポート `5173` が他のプロセスで使用されている場合、`compose.yml` ファイル内のポート設定と、`vite.config.js` のポート設定を変更してください。

例：

```yaml
# compose.yml
ports:
  - 3000:3000
```

```ts
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
});
```
