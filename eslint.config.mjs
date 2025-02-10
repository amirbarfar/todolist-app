import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // غیرفعال کردن قوانین خاص
      "next/no-img-element": "off", // غیرفعال کردن قانون <img> برای بهبود LCP
      "react-hooks/rules-of-hooks": "off", // غیرفعال کردن قوانین Hook ها
    },
  },
];

export default eslintConfig;
