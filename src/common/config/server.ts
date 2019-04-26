export default {

  environment: process.env.NODE_ENV,
  port: 9000,
  
  // helpers
  isProduction() {
      return this.get('express.environment') === 'production';
  }
}