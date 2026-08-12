const { PHASE_PRODUCTION_BUILD } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
  turbopack: {
    root: __dirname,
  },
  ...(phase === PHASE_PRODUCTION_BUILD ? { output: "export" } : {}),
});
