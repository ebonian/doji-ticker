# for js
protoc --js_out=import_style=commonjs,binary:. proto

# for ts
protoc --plugin=protoc-gen-ts=/home/tanadon/.nvm/versions/node/v18.5.0/lib/node_modules/ts-protoc-gen/bin/protoc-gen-ts --js_out=import_style=commonjs,binary:. --ts_out=. proto