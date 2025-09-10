import cron from "cron";
import http from "http";

const job = new cron.CronJob("*/14 * * * *", function () {
  if (!process.env.API_URL) return console.error("API_URL not set");

  http
    .get(process.env.API_URL, (res) => {
      if (res.statusCode === 200) console.log("GET request sent successfully");
      else console.log("GET request failed", res.statusCode);
    })
    .on("error", (e) => console.error("Error while sending request", e));
});

export default job;
