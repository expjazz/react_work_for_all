module.exports = {

  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      'postcss src/tailwind.css -o src/index.css',
    );
  },
};
