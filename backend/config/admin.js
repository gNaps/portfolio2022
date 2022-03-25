module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b75fe885e7a289c43b58f676a9966e77'),
  },
});
