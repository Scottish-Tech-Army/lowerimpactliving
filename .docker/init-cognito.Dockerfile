FROM amazon/aws-cli:2.0.39

ENTRYPOINT [ "aws", "cognito-idp", "create-user-pool", "--pool-name", "lil-scotland", "--endpoint-url", "http://localhost:9229"]


