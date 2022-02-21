install: # Установка модулей по локфайлу package-lock.json
	npm ci

brain-games: #Запуск игры
	node bin/brain-games.js

publish: #Имитация публикации без изменений в глобальном хранилище NPM
	npm publish --dry-run