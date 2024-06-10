## Using Environment Variables from Infisical in Docker Swarm Deployment

This repo shows how to create and inject an environment variables file into a service using Infisical Agent. 

This is done by creating Infisical Agent configuration file `infisical-agent-config.yaml` and template file `env.template` mounted as a volume in the service. Infisical Agent will read the configuration file and output a `.env` file with the environment variables from Infisical. Since the volume `infisical-agent` is shared between the service and Infisical Agent, the `.env` file will be available to the service.

### Steps to run the example
1. Build the `app` image locally
```bash
docker build -t app .
```
2. Create Infisical `infisical-universal-auth-client-id` and `infisical-universal-auth-client-secret` docker secrets
```bash
echo "your-client-id" | docker secret create infisical-universal-auth-client-id -
echo "your-client-secret" | docker secret create infisical-universal-auth-client-secret -
```
3. Deploy the stack
```bash
docker stack deploy -c docker-compose.yml app
```

### Official Infisicla Documentation
- [Docker Swarm Integration](https://infisical.com/docs/integrations/platforms/docker-swarm-with-agent)
- [Infisical Agent Configuration](https://infisical.com/docs/integrations/platforms/infisical-agent)