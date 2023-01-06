module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000/'],
        startServerCommand: 'npm run start',
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://ec2-3-144-23-99.us-east-2.compute.amazonaws.com/',
        token: '38114c83-8683-41ed-a3fe-f729685d7e2c',
      },
    },
  };