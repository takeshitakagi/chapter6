# Dockerfile

# Node.js v18 LTS の公式イメージをベースとして使用
FROM node:18

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# package.json と yarn.lock をコンテナの作業ディレクトリにコピー
COPY package.json yarn.lock ./

# yarn をインストール (既存ファイルがあっても強制的に上書き)
RUN npm install -g yarn --force

# プロジェクトの残りのファイルをコンテナにコピー
# .dockerignore により node_modules はコピーされない
COPY . .

# ホストからのボリュームマウント時に node_modules が上書きされるのを防ぐため、
# COPY . . の後に依存関係をインストールし直す。
# これにより、コンテナ内部にのみ node_modules が存在し、ホストからは参照されない。
RUN yarn install

# コンテナがListenするポートを公開 (Viteのデフォルト開発ポート)
EXPOSE 5173

# コンテナが起動したときに実行されるデフォルトコマンド
CMD ["yarn", "dev"]
