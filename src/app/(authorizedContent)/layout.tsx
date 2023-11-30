import type {PropsWithChildren} from 'react';

export default function AuthorizedLayout({children}: PropsWithChildren<unknown>) {
    return (
        <>
            <h1>Authorized</h1>
            <div>{children}</div>
        </>
    )
}