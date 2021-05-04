import { HttpClient, HttpRequest } from "@angular/common/http";
import { BaseRequestOptions, RequestMethod, ResponseOptions } from "@angular/http";


export function fackBackendFactory (
    backend: MockBackend,
    options: HttpRequest) {
        let token = '';
    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            if(connection.request.url.endsWith('/api/authenticate') &&
            connection.request.method === RequestMethod.Post) {
                let body = JSON.parse(connection.request.getBody());
            if(body.email === '' && body.password === '') {
                connection.mockRespond(new Response(newResponseOptions({
                    status: 200,
                    body: {token: token}
                })));
            } else {
                connection.mockRespond(new Response(new ResponseOptions({status: 200})));
            }
            }
            if(connection.request.url.endsWith('/api/orders') &&
            connection.request.method === RequestMethod.Get) {
             if(connection.request.headers.get('Authentication') === 'Bearer' + token) {
                connection.mockRespond(new Response(newResponseOptions({
                    status: 200,
                    body: [1,2,3]
                })));
            } else {
                connection.mockRespond(new Response(new ResponseOptions({status: 401})));
            }
            }

        }, 1000);
    });

    return new HttpClient(backend, options);
    }

    export let fackBackendProvider = {
        provide: HttpClient,
        useFactory: fackBackendFactory,
        deps: [MockBackend, BaseRequestOptions]
    };
