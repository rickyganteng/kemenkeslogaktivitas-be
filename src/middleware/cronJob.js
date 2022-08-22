const CronJob = require('node-cron')
const actionJob = require('../modules/laporanAktivitas/laporanAktivitas_controller')
exports.initScheduledJobs = () => {
  // const scheduledJobFunction = CronJob.schedule('* * * * *', () => {
  const scheduledJobFunction = CronJob.schedule('* * * * *', () => {
    actionJob.postLaporanAktivitasIfBlank()
  })

  scheduledJobFunction.start()
}
