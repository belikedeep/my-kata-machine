const fs = require("fs");
const path = require("path");

const algoConfig = require("../algo.config.js");
const dsa = require("./dsa.js");

const algorithmsDir = path.join(__dirname, "../src/practice");

if (!fs.existsSync(algorithmsDir)) {
  fs.mkdirSync(algorithmsDir, { recursive: true });
}

algoConfig.dsa.forEach((algoName) => {
  const algo = dsa[algoName];
  if (algo) {
    const filePath = path.join(algorithmsDir, `${algoName}.ts`);
    let fileContent;

    if (algo.type === "fn") {
      fileContent = `export default function ${algo.fn}(${algo.args}): ${algo.return} {
    return false;
}`;
    }

    fs.writeFileSync(filePath, fileContent);
    console.log(`Generated ${filePath}`);
  }
});
