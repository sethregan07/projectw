module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'npm start',
      instances: 2, // Run 2 instances for load balancing
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      exec_mode: 'cluster'
    }
  ]
};
