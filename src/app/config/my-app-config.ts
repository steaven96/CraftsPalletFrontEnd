export default {

    oidc: {
        clientId: '0oa48jxl2vZgk2mmM5d6',
        issuer: 'https://dev-25220589.okta.com/oauth2/default',
        redirectUri: 'http://localhost:4200/login/callback',
        scopes: ['openid', 'profile', 'email']
    },

    // configs: {
    //   dev: {
    //     baseurl: 'http://localhost:8080/'
    //   },
    //   prod: {
    //     baseurl: 'https://ttl-18h-r46eqtyxlq-uc.a.run.app/'
    //   }
    // }

}
// export const baseurl = 'http://localhost:8080/';
export const baseurl = 'http://192.168.0.105:8080/';
// export const baseurl = 'https://ttl-18h-r46eqtyxlq-uc.a.run.app/';
