### Para iniciar a aplicação execute os seguintes comandos

```bash
$ docker compose up -d
# Aplicação ira iniciar na porta 3000 caso não seja alterado no compose
```

### Execute o seguinte comando para verificar os logs da aplicação
```bash
$ docker logs -f test-tech
```

### Para executar os testes execute os seguintes comandos com o container da aplicação rodando
```bash
$ docker exec -it test-tech npm run test
```

### Conecte-se ao banco de dados
```bash
docker exec -it postgres psql postgres://postgres:postgres@postgres:5432
```
