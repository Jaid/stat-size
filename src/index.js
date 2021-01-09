import fs from "fs/promises"

/** @module stat-size */

/**
 * @param {string} file
 * @return {Promise<number>} Size of file contents in bytes
 */
export default async file => {
  try {
    const stat = await fs.stat(file)
    return stat.size
  } catch (error) {
    if (error.code === "ENOENT") {
      return null
    }
    throw error
  }
}