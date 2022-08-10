const CronJob = require('node-cron');
const axios = require('axios');
exports.initScheduledJobs = () => {
  // const scheduledJobFunction = CronJob.schedule('* * * * *', () => {
  const scheduledJobFunction = CronJob.schedule('59 23 * * *', () => {
    console.log("I'm executed on a schedule!")
    console.log("weeeeeeeeeeeeeeeeeeee'")
    axios
      .get('http://localhost:3001/backend1/api/v1/laporanAktivitas/cronjob/okey')
      .then((res) => {
        // salah satu yang menyebalkan dan bikin saya sering lupa
        // axios menambahkan properti "data" untuk menyimpan hasil response nya
        console.log(res.data)
      })
      .catch(function (error) {
        console.log('kenopo ye', error);
      })
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(json => console.log('weheheheh', json));
  })

  scheduledJobFunction.start()
}
