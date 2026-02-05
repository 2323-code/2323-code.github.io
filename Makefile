setup:
	@make up
	@make ps

up:
	@docker compose up -d --build

down:
	@docker compose down

ps:
	@docker compose ps

bash:
	@docker compose exec app bash
