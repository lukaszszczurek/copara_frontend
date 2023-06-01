import React from 'react';

export function saveJwtToken(token: string) {
    localStorage.setItem('jwtToken', token);
}
// get token from local storage
export function getJwtToken() {
    return localStorage.getItem('jwtToken');
}


