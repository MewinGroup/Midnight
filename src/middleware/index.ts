export function onRequest (context, next) {
    //is a cookie called token
    context.locals.token = context.cookies.get('token')
    next();
};