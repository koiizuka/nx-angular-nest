module.exports = {
  name: 'nx-angular-nest',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-angular-nest',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
