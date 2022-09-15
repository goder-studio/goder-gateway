import stringifyPackage from 'stringify-package'
import detectIndent from 'detect-indent'
import detectNewline from 'detect-newline'

export function readVersion(contents) {
  return JSON.parse(contents).version
}
export function writeVersion(contents, version) {
  const json = JSON.parse(contents)
  const indent = detectIndent(contents).indent
  const newline = detectNewline(contents)
  json.version = version
  return stringifyPackage(json, indent, newline)
}
