install: # Установка модулей по локфайлу package-lock.json
	npm ci

brain-games: # Запуск игры brain-games
	node bin/brain-games.js

#brain-even: # Запуск игры brain-even
#	node bin/brain-even.js

publish: # Имитация публикации без изменений в глобальном хранилище NPM
	npm publish --dry-run

make lint: # Запуск локально установленного пакета eslint
	npx eslint