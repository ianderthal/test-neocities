module.exports = function (eleventyConfig) {
  const { DateTime } = require("luxon");

  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.setTemplateFormats(["md", "njk"]);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' })
    .toFormat("EEEE, LLLL d',' yyyy");
  });

  eleventyConfig.addCollection("postsNewestFirst", (collection) =>
  collection.getFilteredByTag("posts").sort((a, b) => b.date - a.date)
  );
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
