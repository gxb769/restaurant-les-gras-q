module.exports = {
  apps: [{
    name: "les-gras-q",
    script: "server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production",
    },
  }],
};
