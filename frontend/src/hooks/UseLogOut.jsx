import { useAuthContext } from "./UseAuthContext"; // Changed UseAuthContext to useAuthContext

export const useLogOut = () => { // Changed UseLogOut to useLogOut
    const { dispatch } = useAuthContext(); // Changed UseAuthContext to useAuthContext

    const logOut = () => {
        // remove user from storage
        localStorage.removeItem("user");

        // dispatch logout action
        dispatch({ type: "LOGOUT" }); // Removed payload: json as json is not defined here
    };
    return { logOut }; // Return logOut as an object
};