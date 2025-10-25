module.exports = function (eleventyConfig) {
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' })
    .toFormat("EEEE, LLLL d',' yyyy");
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
