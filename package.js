Package.describe({
  summary: "Fork of original w/ timezone support. Define and run scheduled jobs across multiple servers.",
  version: "1.2.7",
  name: "trever:synced-cron",
  git: "https://github.com/trever/meteor-synced-cron.git"
});

Npm.depends({later: "1.1.6", timezone:'0.0.41'});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.add_files(['synced-cron-server.js'], "server");
  api.export('SyncedCron', 'server');
});

Package.onTest(function (api) {
  api.use(['trever:synced-cron', 'tinytest']);
  api.add_files('synced-cron-tests.js', ['server']);
});
