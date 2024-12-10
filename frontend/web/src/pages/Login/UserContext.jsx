import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(() => sessionStorage.getItem('userRole') || null);

    useEffect(() => {
        sessionStorage.setItem('userRole', userRole);
    }, [userRole]);

    return <UserContext.Provider value={{ userRole, setUserRole }}>{children}</UserContext.Provider>;
};