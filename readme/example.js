import statSize from "stat-size"

const imageBuffer = fs.readFileSync("pikachu_8x8.png")
const result = statSize("image/png", imageBuffer)