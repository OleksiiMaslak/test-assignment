import type {PropsWithChildren} from 'react';

export default function LoginLayout({children}: PropsWithChildren<unknown>) {
    return (
        <>
            <h1>Login</h1>
            <div>{children}</div>
        </>
    )
}