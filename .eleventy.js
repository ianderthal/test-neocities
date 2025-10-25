module.exports = function (eleventyConfig) {
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' })
      .toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
