export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '214f0396b70530487d12526a7d3315d2'),
  },
});
