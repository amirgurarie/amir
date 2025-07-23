module.exports = {
  apps : [{
    name: 'API',
    script: 'npm i -g @nestjs/cli && npm start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      "path" : "/home/site/wwwroot/",
      'post-deploy' : 'npm i -g @nestjs/cli && pm2 reload ecosystem.config.js --env production'
    }
  }
};
