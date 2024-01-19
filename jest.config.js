export default {
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
  testEnvironment: 'jsdom',
}
