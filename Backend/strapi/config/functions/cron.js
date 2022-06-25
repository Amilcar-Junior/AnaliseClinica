'use strict';
module.exports = {
  /**
   * Trigger a backup at 04:00 every day
   */
  "0 10 * * *": async () => {
    console.log("Starting backup from cron...");
    const backupID = Date.now().toString();

    await strapi.plugins["backup-restore"].services["backup-tools"].runBackup(
      backupID,
      false, // Tells if it's a manual backup, well it's not
      true, // Backup database
      true // Backup files
    );
    console.log(`Backup ${backupID} finished`);
  },
};

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */