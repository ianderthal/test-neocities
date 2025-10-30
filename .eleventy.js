module.exports = function (eleventyConfig) {
  const { DateTime } = require("luxon");

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.setTemplateFormats(["md", "njk"]);

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
